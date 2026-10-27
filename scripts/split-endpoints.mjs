#!/usr/bin/env node
/**
 * 把 endpoints.js 的整段清单拆成「一个接口一个模块」：
 *   src/modules/sms-test-tool/apis/<接口名>.js
 * 并生成汇总入口 apis/index.js。
 *
 * 用法：node scripts/split-endpoints.mjs
 *
 * 说明：
 *   - 按 method + 目标地址去重（上游 unipus 那条被复制了 20 份，合并成 1 个模块，
 *     需要复现上游行为时用 runAll 的 repeat 参数）。
 *   - 文件名取自 host + path，撞名自动加序号。
 *   - 生成前会清掉 apis/ 里已不在清单内的旧文件（index.js 除外）。
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/modules/sms-test-tool");
const APIS_DIR = path.join(ROOT, "apis");
const SOURCE = path.join(ROOT, "endpoints.js");

const { default: endpoints } = await import("file:///" + SOURCE.replace(/\\/g, "/") + "?t=" + Date.now());

/** 取 URL 字符串（动态接口用占位手机号展开一次） */
const urlOf = endpoint =>
  typeof endpoint.url === "function" ? endpoint.url("13800138000", 1) : endpoint.url;

/** 生成可读、稳定的文件名 */
function buildName(endpoint, used) {
  let host = "unknown";
  let pathname = "";
  let port = "";
  try {
    const u = new URL(urlOf(endpoint));
    host = u.hostname.replace(/^www\./, "");
    pathname = u.pathname;
    port = u.port;
  } catch {
    host = String(endpoint.url).slice(0, 30);
  }

  const isIp = /^\d+\.\d+\.\d+\.\d+$/.test(host);
  const hostPart = isIp ? `ip-${host.replace(/\./g, "-")}` : host.replace(/\./g, "-");
  const portPart = port && port !== "80" && port !== "443" ? `p${port}` : "";

  const pathPart = pathname
    .split("/")
    .filter(Boolean)
    .join("-")
    .replace(/\.(html?|php|jspx?|aspx?|ashx|do|action|json|htm)$/i, "")
    .toLowerCase();

  const slug = [hostPart, portPart, pathPart]
    .filter(Boolean)
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72)
    .replace(/-$/, "") || "root";

  let name = slug;
  let index = 2;
  while (used.has(name)) name = `${slug}-${index++}`;
  used.add(name);
  return name;
}

/** 重排函数源码缩进，让生成文件保持 2 空格基准缩进且不丢嵌套层级 */
function renderFunction(fn, indent = 2) {
  const src = String(fn).trim();
  const lines = src.split("\n");
  if (lines.length === 1) return src;

  const tail = lines.slice(1);
  const indentOf = line => line.match(/^ */)[0].length;
  const firstContent = tail.find(line => line.trim());
  const base = firstContent ? indentOf(firstContent) : 0;
  const pad = " ".repeat(indent);

  return [
    lines[0],
    ...tail.map(line => {
      if (!line.trim()) return "";
      const relative = Math.max(0, indentOf(line) - base);
      return pad + " ".repeat(relative) + line.trim();
    }),
  ].join("\n");
}

function renderModule(endpoint, name) {
  const method = (endpoint.method || "POST_JSON").toUpperCase();
  const url = urlOf(endpoint);
  const headers = endpoint.headers ? renderFunction(endpoint.headers) : "() => ({})";
  const data = endpoint.data ? renderFunction(endpoint.data) : "() => ({})";
  const urlLine =
    typeof endpoint.url === "function"
      ? `url: ${renderFunction(endpoint.url)},`
      : `url: ${JSON.stringify(endpoint.url)},`;

  return `/**
 * ${method} ${url}
 * 接口模块：${name}
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: ${JSON.stringify(name)},
  ${urlLine}
  method: ${JSON.stringify(method)},
  headers: ${headers},
  data: ${data},
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
`;
}

// ---------- 去重 ----------
// 动态 URL（函数）不能展开后再比，否则随机数会让每条都不一样，这里比函数源码
const keyOf = endpoint => {
  const method = (endpoint.method || "POST_JSON").toUpperCase();
  const urlKey = typeof endpoint.url === "function" ? `fn:${String(endpoint.url)}` : endpoint.url;
  return `${method}|${urlKey}`;
};

const seen = new Set();
const unique = [];
for (const endpoint of endpoints) {
  const key = keyOf(endpoint);
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(endpoint);
}

// ---------- 生成 ----------
fs.mkdirSync(APIS_DIR, { recursive: true });
const used = new Set();
const modules = [];

for (const endpoint of unique) {
  const name = buildName(endpoint, used);
  const file = path.join(APIS_DIR, `${name}.js`);
  fs.writeFileSync(file, renderModule(endpoint, name), "utf8");
  modules.push({ name, file });
}

// 清理旧文件
const keep = new Set(["index.js", ...modules.map(m => path.basename(m.file))]);
const removed = [];
for (const entry of fs.readdirSync(APIS_DIR)) {
  if (!keep.has(entry)) {
    fs.rmSync(path.join(APIS_DIR, entry));
    removed.push(entry);
  }
}

// ---------- 汇总入口 ----------
const imports = modules
  .map((m, i) => `import api${i}, { endpoint as endpoint${i} } from "./${m.name}.js";`)
  .join("\n");
const endpointList = modules.map((_, i) => `endpoint${i}`).join(", ");
const apiMap = modules.map((m, i) => `  ${JSON.stringify(m.name)}: api${i},`).join("\n");

const indexSource = `/**
 * 接口模块汇总（由 scripts/split-endpoints.mjs 生成，请勿手工编辑）
 *
 *   endpoints  接口描述数组，按清单顺序
 *   apis       接口名 -> 可调用函数
 *   default    endpoints（兼容按数组使用的旧写法）
 */
${imports}

export const endpoints = [${endpointList}];

export const apis = {
${apiMap}
};

/** 接口名列表 */
export const apiNames = Object.keys(apis);

/** 按名取接口函数，取不到返回 null */
export const getApi = name => apis[name] || null;

export default endpoints;
`;

fs.writeFileSync(path.join(APIS_DIR, "index.js"), indexSource, "utf8");

// ---------- 校验 ----------
const summary = await import("file:///" + path.join(APIS_DIR, "index.js").replace(/\\/g, "/") + "?t=" + Date.now());
const stat = {};
for (const endpoint of summary.endpoints) {
  const key = endpoint.method || "POST_JSON";
  stat[key] = (stat[key] || 0) + 1;
}
const missing = summary.endpoints.filter(endpoint => !endpoint.name).length;

console.log(`原始记录: ${endpoints.length}`);
console.log(`去重后  : ${unique.length}（生成 ${modules.length} 个模块）`);
console.log(`方法分布: ${JSON.stringify(stat)}`);
console.log(`清理旧文件: ${removed.length ? removed.join(", ") : "无"}`);
if (missing) console.warn(`[warn] ${missing} 条记录缺 name`);
console.log(`样例: ${summary.apiNames.slice(0, 6).join(", ")} …`);
