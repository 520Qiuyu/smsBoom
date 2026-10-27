import endpointList, { apiNames, apis, endpoints, getApi } from "./apis/index.js";
import {
  appendQuery,
  buildRequest,
  DEFAULT_TIMEOUT,
  defineApi,
  describe,
  resolveData,
  resolveHeaders,
  resolveUrl,
  sanitizeHeaders,
  sendOne,
} from "./_shared.js";
import { generateError, generateOk } from "../../utils/index.js";

/**
 * sms-test-tool 接口封装（一个接口一个模块）
 *
 * 上游：https://github.com/ilex7/sms-test-tool 的 index.html（浏览器 fetch + CORS 代理）
 *
 * 三个层次：
 *   1. 接口模块层：./apis/<接口名>.js —— 每个文件一条接口，默认导出可直接调用的函数
 *   2. 单条发送层：sendOne(endpoint, phone) / buildRequest(endpoint, phone)（见 _shared.js）
 *   3. 批处理层：runAll / runApi / main —— 并发跑全量或按名挑单条
 *
 * 单独跑一个接口：
 *   import api from "./modules/sms-test-tool/apis/ic-service-unipus-cn-cert-vcode.js";
 *   await api("13800138000");
 */

/** 默认并发上限 */
const DEFAULT_CONCURRENCY = 20;
/** 默认每个接口重复次数 */
const DEFAULT_REPEAT = 1;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/** 有界并发跑任务队列 */
async function runWithConcurrency(tasks, concurrency, onResult) {
  const results = new Array(tasks.length);
  let cursor = 0;

  const worker = async () => {
    while (cursor < tasks.length) {
      const index = cursor++;
      const result = await tasks[index]();
      results[index] = result;
      if (onResult) onResult(result, index);
    }
  };

  await Promise.all(Array.from({ length: Math.min(concurrency, tasks.length) }, worker));
  return results;
}

/**
 * 按接口名 / host / url 关键字筛选。
 * @param {string[]} [only] 命中任意一个关键字即保留
 * @param {string[]} [skip] 命中任意一个关键字即跳过
 */
export function filterEndpoints(only, skip) {
  const haystack = endpoint =>
    `${endpoint.name || ""} ${resolveUrl(endpoint, "13800138000", 1)}`.toLowerCase();

  return endpoints.filter(endpoint => {
    const target = haystack(endpoint);
    if (Array.isArray(only) && only.length > 0 && !only.some(k => target.includes(k.toLowerCase()))) {
      return false;
    }
    if (Array.isArray(skip) && skip.some(k => target.includes(k.toLowerCase()))) return false;
    return true;
  });
}

/**
 * 汇总一批发送结果。
 * @param {Array} results
 */
export function summarize(phone, results, duration) {
  const byStatus = {};
  const byError = {};
  for (const item of results) {
    const statusKey = item.status ?? "ERR";
    byStatus[statusKey] = (byStatus[statusKey] || 0) + 1;
    if (item.error) byError[item.error] = (byError[item.error] || 0) + 1;
  }
  const ok = results.filter(item => item.ok).length;

  return {
    phone,
    total: results.length,
    ok,
    failed: results.length - ok,
    byStatus,
    byError,
    duration,
    results,
  };
}

/**
 * 跑清单（或按过滤器筛选后的子集）。
 * @param {string} phone
 * @param {object} [options]
 * @param {number} [options.concurrency=20] 并发数
 * @param {number} [options.repeat=1] 每个接口重复次数
 * @param {number} [options.timeout=12000] 单请求超时
 * @param {number} [options.delay=0] 轮次之间的间隔（ms）
 * @param {object|false} [options.proxy] axios proxy 配置
 * @param {string[]} [options.only] 只跑命中关键字的接口（名字 / host / url）
 * @param {string[]} [options.skip] 跳过命中关键字的接口
 * @param {Function} [options.onResult] 单条结果回调 (result, index) => void
 */
export async function runAll(phone, options = {}) {
  const {
    concurrency = DEFAULT_CONCURRENCY,
    repeat = DEFAULT_REPEAT,
    timeout = DEFAULT_TIMEOUT,
    delay = 0,
    onResult,
    only,
    skip,
  } = options;

  if (!phone) throw new Error("phone 不能为空");

  const selected = filterEndpoints(only, skip);
  const startedAt = Date.now();
  const results = [];

  for (let round = 1; round <= repeat; round++) {
    const tasks = selected.map(endpoint => () => sendOne(endpoint, phone, { ...options, timeout, times: round }));
    const roundResults = await runWithConcurrency(tasks, concurrency, onResult);
    results.push(...roundResults.filter(Boolean));
    if (delay > 0 && round < repeat) await sleep(delay);
  }

  return summarize(phone, results, Date.now() - startedAt);
}

/**
 * 按接口名跑单条（收不到接口名时抛错，便于发现拼写问题）。
 * @param {string} name 接口名，如 "ic-service-unipus-cn-cert-vcode"
 * @param {string} phone
 * @param {object} [options] 透传给 sendOne
 */
export async function runApi(name, phone, options = {}) {
  const api = getApi(name);
  if (!api) {
    const hint = apiNames.filter(item => item.includes(name.toLowerCase())).slice(0, 5);
    throw new Error(`未知接口: ${name}${hint.length ? `，相近的有: ${hint.join(", ")}` : ""}`);
  }
  return api(phone, options);
}

/** 打印一屏汇总（CLI 用） */
export function formatSummary(summary) {
  const lines = [];
  lines.push(`目标手机号: ${summary.phone}`);
  lines.push(`接口总数  : ${summary.total}（成功 ${summary.ok} / 失败 ${summary.failed}）`);
  lines.push(`总耗时    : ${(summary.duration / 1000).toFixed(2)}s`);
  lines.push(`状态码分布: ${JSON.stringify(summary.byStatus)}`);
  if (Object.keys(summary.byError).length) {
    lines.push(`错误分布  : ${JSON.stringify(summary.byError)}`);
  }
  return lines.join("\n");
}

/** 打印接口清单（CLI 用） */
export function formatApiList(list = endpoints) {
  const rows = list.map(endpoint => {
    const meta = describe(endpoint);
    return `${meta.name}\n    ${meta.method} ${meta.url}`;
  });
  return rows.join("\n");
}

/**
 * 模块主入口，与项目里其它模块（yiche / guazi / dreamonline）保持同一签名。
 * @param {string} phone 手机号
 * @param {object} [options] 透传给 runAll
 */
async function main(phone, options = {}) {
  const target = phone || process.env.PHONE;
  try {
    const summary = await runAll(target, options);
    console.log(formatSummary(summary));
    return generateOk(summary);
  } catch (err) {
    return generateError(err?.message);
  }
}

export {
  apis,
  apiNames,
  appendQuery,
  buildRequest,
  DEFAULT_TIMEOUT,
  defineApi,
  describe,
  endpoints,
  endpointList,
  getApi,
  resolveData,
  resolveHeaders,
  resolveUrl,
  sanitizeHeaders,
  sendOne,
};

export default main;
