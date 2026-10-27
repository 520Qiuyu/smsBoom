import axios from "axios";

/**
 * sms-test-tool 公共请求层
 *
 * 每个接口模块（apis/*.js）只描述「地址 + 方法 + 头 + 体」，真实发送逻辑全部收敛在这里：
 *   - buildRequest：把一条接口描述翻译成 axios 配置（不发请求）
 *   - sendOne：发一条，永不抛异常
 *   - defineApi：把接口描述包成一个可直接调用的函数（模块默认导出）
 */

/** 单个请求超时 */
export const DEFAULT_TIMEOUT = 12_000;

/**
 * 浏览器禁止脚本设置的请求头（fetch 会静默丢掉）。Node 里照抄反而污染请求：
 * Host 与 TLS SNI 不一致、Content-Length 与实际 body 不匹配、zstd 无法解码等。
 * 统一剥掉，保持与上游浏览器行为一致。
 */
const FORBIDDEN_HEADERS = new Set([
  "host",
  "connection",
  "content-length",
  "transfer-encoding",
  "accept-encoding",
  "keep-alive",
  "upgrade",
]);

/** 取实际 URL，支持动态 URL（如 unipus 的带随机数地址） */
export const resolveUrl = (endpoint, phone, times = 1) =>
  typeof endpoint.url === "function" ? endpoint.url(phone, times) : endpoint.url;

/** 取请求体，个别接口的 data 可能抛错（依赖未传的参数），兜底成空对象 */
export const resolveData = (endpoint, phone, times = 1) => {
  if (typeof endpoint.data !== "function") return endpoint.data ?? {};
  try {
    return endpoint.data(phone, times) ?? {};
  } catch {
    return {};
  }
};

/** 取请求头，个别接口的 headers 依赖手机号或可能抛错，统一兜底 */
export const resolveHeaders = (endpoint, phone, times = 1) => {
  if (typeof endpoint.headers !== "function") return endpoint.headers || {};
  try {
    return endpoint.headers(phone, times) || {};
  } catch {
    return {};
  }
};

/** 把 data 返回值拼成查询串（GET 接口在清单里普遍返回 "a=1&b=2" 这种字符串） */
export const toQueryString = payload => {
  if (!payload) return "";
  if (typeof payload === "string") return payload.replace(/^\?/, "");
  if (payload instanceof URLSearchParams) return payload.toString();
  if (typeof FormData !== "undefined" && payload instanceof FormData) {
    return new URLSearchParams([...payload.entries()]).toString();
  }
  return new URLSearchParams(payload).toString();
};

/** 给 URL 追加查询串 */
export const appendQuery = (url, payload) => {
  const qs = toQueryString(payload);
  if (!qs) return url;
  return url + (url.includes("?") ? "&" : "?") + qs;
};

/** 清洗请求头：去掉浏览器禁止项，保留 Cookie / Referer / X-* / token 等真正有意义的字段 */
export const sanitizeHeaders = headers => {
  const out = {};
  for (const [key, value] of Object.entries(headers || {})) {
    if (value === undefined || value === null) continue;
    if (FORBIDDEN_HEADERS.has(key.toLowerCase())) continue;
    out[key] = String(value);
  }
  return out;
};

/** host 解析，非法 URL 不抛错 */
export const safeHost = url => {
  try {
    return new URL(url).host;
  } catch {
    return "invalid";
  }
};

/** 接口描述的可读摘要（用于日志 / 列表） */
export const describe = (endpoint, phone = "13800138000") => {
  const url = resolveUrl(endpoint, phone, 1);
  const isDynamic = typeof endpoint.url === "function";
  let path = "";
  try {
    const parsed = new URL(url);
    path = parsed.pathname;
  } catch {
    path = url;
  }
  return {
    name: endpoint.name || null,
    method: (endpoint.method || "POST_JSON").toUpperCase(),
    host: safeHost(url),
    path,
    dynamic: isDynamic,
    url: isDynamic ? `${url.replace(phone, ":phone")}…(动态)` : url,
  };
};

/**
 * 把一条接口描述翻译成 axios 请求配置（纯函数，不发请求）。
 * @param {object} endpoint 接口描述
 * @param {string} phone 手机号
 * @param {object} [options]
 * @param {number} [options.times=1] 第几轮（部分接口用它做去重/节流）
 * @param {number} [options.timeout=12000]
 * @param {object|false} [options.proxy] axios proxy 配置，false 表示忽略环境变量代理
 * @param {object} [options.headers] 追加/覆盖的请求头
 * @returns {import('axios').AxiosRequestConfig}
 */
export function buildRequest(endpoint, phone, options = {}) {
  const { times = 1, timeout = DEFAULT_TIMEOUT, proxy, headers: extraHeaders } = options;

  const method = (endpoint.method || "POST_JSON").toUpperCase();
  const baseUrl = resolveUrl(endpoint, phone, times);
  const payload = resolveData(endpoint, phone, times);
  const headers = { ...sanitizeHeaders(resolveHeaders(endpoint, phone, times)), ...(extraHeaders || {}) };

  const config = {
    url: baseUrl,
    method: "POST",
    headers,
    timeout,
    responseType: "text",
    // 不抛状态码异常，交由调用方按 status 判定
    validateStatus: () => true,
    maxRedirects: 3,
    transitional: { silentJSONParsing: false },
  };

  if (proxy !== undefined) config.proxy = proxy;

  if (method === "GET") {
    // 上游 GET 分支没把 data 拼进 URL，这里补上，否则这批接口等于空转发
    config.method = "GET";
    config.url = appendQuery(baseUrl, payload);
    return config;
  }

  if (method === "POST_FORM") {
    headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    config.data = toQueryString(payload);
    return config;
  }

  // POST_JSON 及其它未知 method 一律按 JSON 提交
  headers["Content-Type"] = headers["Content-Type"] || "application/json";
  config.data = typeof payload === "string" ? payload : JSON.stringify(payload);
  return config;
}

/** 响应体解析：能当 JSON 就当 JSON，否则保留文本片段 */
export const parseBody = text => {
  if (typeof text !== "string" || text === "") return text;
  try {
    return JSON.parse(text);
  } catch {
    return text.length > 2000 ? `${text.slice(0, 2000)}…` : text;
  }
};

/**
 * 发送单条接口，永远 resolve。
 * @returns {Promise<{name:string|null, url:string, method:string, host:string, ok:boolean, status:number|null, duration:number, body:any, error:string|null}>}
 */
export async function sendOne(endpoint, phone, options = {}) {
  const config = buildRequest(endpoint, phone, options);
  const startedAt = Date.now();
  const meta = {
    name: endpoint.name || null,
    url: config.url,
    method: config.method,
    host: safeHost(config.url),
  };

  try {
    const res = await axios.request(config);
    const text = typeof res.data === "string" ? res.data : JSON.stringify(res.data ?? "");
    const looksLikeHtml = /^\s*<(!doctype|html)/i.test(text || "");
    return {
      ...meta,
      ok: res.status >= 200 && res.status < 400 && !looksLikeHtml,
      status: res.status,
      duration: Date.now() - startedAt,
      body: looksLikeHtml ? `${text.slice(0, 200)}…(HTML)` : parseBody(text),
      error: looksLikeHtml ? "HTML_RESPONSE" : null,
    };
  } catch (err) {
    return {
      ...meta,
      ok: false,
      status: err?.response?.status ?? null,
      duration: Date.now() - startedAt,
      body: err?.response?.data ?? null,
      error: err?.code || err?.message || "UNKNOWN_ERROR",
    };
  }
}

/**
 * 把一个接口描述包成可直接调用的函数，作为各接口模块的默认导出。
 *
 * 返回值形态：
 *   api(phone, options)   -> Promise<结果>     发送一次
 *   api.build(phone)      -> axios 配置        不发请求
 *   api.meta              -> { name, method, host, path, ... }
 *   api.endpoint          -> 原始描述
 *
 * @param {object} endpoint
 * @returns {Function & {build: Function, meta: object, endpoint: object}}
 */
export function defineApi(endpoint) {
  const send = (phone, options = {}) => sendOne(endpoint, phone, options);
  send.endpoint = endpoint;
  send.meta = describe(endpoint);
  send.build = (phone, options = {}) => buildRequest(endpoint, phone, options);
  return send;
}
