#!/usr/bin/env node
/**
 * 从上游 index.html 抽取接口清单，生成 src/modules/sms-test-tool/endpoints.js
 *
 * 用法：node scripts/extract-endpoints.mjs [本地 html 路径]
 *   不传路径时直接拉取 https://raw.githubusercontent.com/ilex7/sms-test-tool/main/index.html
 */
import fs from "node:fs";
import path from "node:path";

const REMOTE = "https://raw.githubusercontent.com/ilex7/sms-test-tool/main/index.html";
const OUT = path.resolve("src/modules/sms-test-tool/endpoints.js");

/** 从 startIndex 处的 { 或 [ 开始配对，跳过字符串/模板串/注释 */
function matchBracket(text, startIndex) {
  const open = text[startIndex];
  const close = open === "{" ? "}" : "]";
  let depth = 0;
  for (let i = startIndex; i < text.length; i++) {
    const c = text[i];
    if (c === "/" && text[i + 1] === "/") {
      i = text.indexOf("\n", i);
      if (i === -1) break;
      continue;
    }
    if (c === "/" && text[i + 1] === "*") {
      i = text.indexOf("*/", i + 2);
      if (i === -1) break;
      i += 1;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      for (i++; i < text.length; i++) {
        if (text[i] === "\\") { i++; continue; }
        if (text[i] === quote) break;
      }
      continue;
    }
    if (c === open) depth++;
    else if (c === close) {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }
  throw new Error("括号未配对，起始位置 " + startIndex);
}

/** 上游清单里已知的缺陷，生成后统一修正 */
const KNOWN_FIXES = [
  {
    name: "lft.zwfwtek.cn headers 引用未定义的 phoneNumber → 改为入参注入",
    match: /headers:\s*\(\)\s*=>\s*\(\{\s*\n\s*'Host':\s*'lft\.zwfwtek\.cn'/,
    to: (m) => m.replace(/headers:\s*\(\)\s*=>/, "headers: (phoneNumber) =>"),
  },
];

async function loadHtml(localPath) {
  if (localPath) return fs.readFileSync(path.resolve(localPath), "utf8");
  const res = await fetch(REMOTE);
  if (!res.ok) throw new Error(`拉取上游失败: ${res.status}`);
  return res.text();
}

const html = await loadHtml(process.argv[2]);

const uniStart = html.indexOf("const unipusAPI = {");
if (uniStart < 0) throw new Error("未找到 unipusAPI 定义");

const arrStart = html.indexOf("const apiRequests = [");
if (arrStart < 0) throw new Error("未找到 apiRequests 定义");
const arrEnd = matchBracket(html, html.indexOf("[", arrStart));

let body = html.slice(uniStart, arrEnd);
for (const fix of KNOWN_FIXES) {
  if (fix.match.test(body)) body = body.replace(fix.match, fix.to);
  else console.warn(`[warn] 未命中修正规则: ${fix.name}`);
}

const header = `/**
 * SMS 测试工具接口清单（自 https://github.com/ilex7/sms-test-tool 的 index.html 抽取）
 *
 * 每条记录的字段与上游保持一致：
 *   - url:    string | (phone, times) => string         目标地址（可为动态 URL）
 *   - method: 'GET' | 'POST_FORM' | 'POST_JSON'        缺省按 POST_JSON 处理
 *   - headers: (phone?, times?) => Record<string, string>
 *   - data:   (phone, times) => Record<string, any> | string   请求体；GET 时作为查询串
 *
 * 由 scripts/extract-endpoints.mjs 生成，请勿手工编辑。
 */

`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header + body + "\n\nexport default apiRequests;\n", "utf8");

const mod = await import("file:///" + OUT.replace(/\\/g, "/") + "?t=" + Date.now());
const list = mod.default;
const stat = {};
for (const item of list) {
  const key = item.method || "POST_JSON";
  stat[key] = (stat[key] || 0) + 1;
}
console.log(`已生成 ${path.relative(process.cwd(), OUT)}：${list.length} 条接口`, stat);
