#!/usr/bin/env node
import "dotenv/config";
import main, {
  apiNames,
  buildRequest,
  describe,
  endpoints,
  filterEndpoints,
  formatApiList,
  formatSummary,
  runAll,
  runApi,
} from "./index.js";

/**
 * sms-test-tool 命令行入口
 *
 * 用法：
 *   node src/modules/sms-test-tool/cli.js --list                 # 列出全部接口名
 *   node src/modules/sms-test-tool/cli.js --dry                  # 只打印将要发出的请求
 *   node src/modules/sms-test-tool/cli.js 13800138000            # 全量跑一遍
 *   node src/modules/sms-test-tool/cli.js 13800138000 --api=<接口名>
 *   node src/modules/sms-test-tool/cli.js 13800138000 --only=unipus,12345
 */

const argv = process.argv.slice(2);

const flags = {};
const positional = [];
for (const arg of argv) {
  if (arg.startsWith("--")) {
    const [key, value = "true"] = arg.slice(2).split("=");
    flags[key] = value;
  } else {
    positional.push(arg);
  }
}

const phone = positional[0] || process.env.PHONE;
const list = value => (value ? String(value).split(",").map(s => s.trim()).filter(Boolean) : undefined);

const options = {
  concurrency: Number(flags.concurrency) || undefined,
  repeat: Number(flags.repeat) || undefined,
  timeout: Number(flags.timeout) || undefined,
  delay: Number(flags.delay) || 0,
  only: list(flags.only),
  skip: list(flags.skip),
  proxy: flags.proxy ? { host: new URL(flags.proxy).hostname, port: Number(new URL(flags.proxy).port || 8080) } : undefined,
};

const usage = () => `用法: node src/modules/sms-test-tool/cli.js <手机号> [选项]

选项:
  --list                列出全部接口名与地址（不发送）
  --api=<接口名>        只跑指定接口（名字见 --list）
  --dry                 只构建请求并打印，不真正发送
  --only=<kw1,kw2>      仅保留名字/host/url 含关键字的接口
  --skip=<kw1,kw2>      跳过名字/host/url 含关键字的接口
  --concurrency=<n>     并发数，默认 20
  --repeat=<n>          每个接口重复次数，默认 1
  --timeout=<ms>        单请求超时，默认 12000
  --delay=<ms>          轮次间隔，默认 0
  --proxy=<url>         走指定 HTTP 代理
  --limit=<n>           --list / --dry 模式下最多输出多少条

当前共 ${endpoints.length} 个接口模块（apis/ 目录下每个文件一条）。`;

if (flags.help === "true") {
  console.log(usage());
  process.exit(0);
}

// 列出接口
if (flags.list === "true") {
  const selected = filterEndpoints(options.only, options.skip);
  const limit = Number(flags.limit) || selected.length;
  console.log(`接口总数 ${selected.length}，展示 ${Math.min(limit, selected.length)} 条：\n`);
  console.log(formatApiList(selected.slice(0, limit)));
  process.exit(0);
}

// 预览请求结构
if (flags.dry === "true") {
  const selected = flags.api
    ? endpoints.filter(endpoint => endpoint.name === flags.api)
    : filterEndpoints(options.only, options.skip);
  if (flags.api && selected.length === 0) {
    console.error(`未知接口: ${flags.api}`);
    process.exit(1);
  }
  const limit = Number(flags.limit) || 5;
  console.log(`命中 ${selected.length} 条，预览前 ${Math.min(limit, selected.length)} 条：\n`);
  for (const endpoint of selected.slice(0, limit)) {
    const config = buildRequest(endpoint, phone || "13800138000", { times: 1, timeout: options.timeout });
    console.log(`${config.method} ${config.url}`);
    console.log(`  name   : ${endpoint.name}`);
    console.log(`  headers: ${JSON.stringify(config.headers)}`);
    console.log(`  data   : ${typeof config.data === "string" ? config.data.slice(0, 300) : config.data}`);
    console.log("");
  }
  process.exit(0);
}

if (!phone) {
  console.log(usage());
  process.exit(1);
}

// 单接口
if (flags.api) {
  const result = await runApi(flags.api, phone, { timeout: options.timeout });
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}

const summary = await runAll(phone, options);
console.log(formatSummary(summary));

// 失败明细，便于排查（最多 20 条）
const failures = summary.results.filter(item => !item.ok).slice(0, 20);
if (failures.length) {
  console.log("\n失败样例：");
  for (const item of failures) {
    console.log(`  [${item.status ?? item.error}] ${item.method} ${item.name}`);
  }
}

export default main;
