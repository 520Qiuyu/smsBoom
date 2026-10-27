# sms-test-tool 接口封装（一接口一模块）

把 [ilex7/sms-test-tool](https://github.com/ilex7/sms-test-tool) 的单页 `index.html`（浏览器 `fetch` + CORS 代理）拆成 **154 个独立接口模块**，每个文件一条接口。

- 上游清单：173 条记录（其中 unipus 那条被复制了 20 份）→ 去重后 **154 个模块**
- 方法分布：GET 55 / `POST_FORM` 63 / `POST_JSON` 36
- 覆盖校验：173 条原始记录 100% 映射到模块，无遗漏

## 目录结构

```
src/modules/sms-test-tool/
├── _shared.js      # 公共层：buildRequest / sendOne / defineApi / 头清洗 / 参数拼装
├── index.js        # 聚合层：runAll / runApi / filterEndpoints / main（默认导出）
├── cli.js          # 命令行：--list / --api / --dry / --only
├── endpoints.js    # 上游原始清单（173 条，供生成脚本与追溯用）
├── apis/
│   ├── index.js                # 汇总：endpoints[] / apis{} / getApi(name)
│   ├── ic-service-unipus-cn-cert-vcode.js
│   ├── ip-47-95-130-254-tms-ctwl-orderregisteruser-getpollcode.js
│   ├── vipapi-beteng-com-vip-dosendbycellphone.js
│   └── …（共 154 个）
└── README.md
```

文件名规则：`host（去 www.、点转 -）+ 端口（非 80/443 时加 p 前缀）+ path`，全小写、非法字符压成 `-`、截断 72 字符、撞名追加 `-2`。IP 直连的 host 加 `ip-` 前缀。

## 单个接口怎么用

每个模块默认导出就是一个函数，调用即发送：

```js
import unipus from "./modules/sms-test-tool/apis/ic-service-unipus-cn-cert-vcode.js";

// 发送一次
const result = await unipus("13800138000");
// { name, url, method, host, ok, status, duration, body, error }

// 只构建请求，不发（调试用）
const config = unipus.build("13800138000");
// { method: 'GET', url: 'http://ic.service.unipus.cn/cert/vcode?phone=…', headers: {…} }

// 接口元信息
unipus.meta;     // { name, method, host, path, dynamic, url }
unipus.endpoint; // 原始描述对象
```

可选参数透传给 `_shared.sendOne`：`{ timeout, times, proxy, headers }`。

```js
await unipus("13800138000", { timeout: 5000, headers: { "X-Debug": "1" } });
```

### 按名字取模块

```js
import { getApi, apiNames } from "./modules/sms-test-tool/index.js";

const api = getApi("vipapi-beteng-com-vip-dosendbycellphone");
await api("13800138000");

console.log(apiNames.length); // 154
```

## 批量怎么用

```js
import smsTestTool, { runAll, runApi } from "./modules/sms-test-tool/index.js";

// 全量（154 条，并发 20）
const summary = await smsTestTool("13800138000");
// { phone, total, ok, failed, byStatus, byError, duration, results }

// 按关键字挑：名字 / host / url 命中即可
await runAll("13800138000", { only: ["unipus", "12345"], concurrency: 30 });

// 复现上游把 unipus 连打 20 次的行为
await runAll("13800138000", { only: ["unipus"], repeat: 20 });

// 按接口名跑单条
await runApi("scm-qlx56-com-gateway-scm-basic-v1-msgrecord-sendauthcode", "13800138000");
```

`runAll` 的 `options`：`concurrency`(20) / `repeat`(1) / `timeout`(12000) / `delay`(0) / `proxy` / `only` / `skip` / `onResult`。

## 命令行

```bash
node src/modules/sms-test-tool/cli.js --list                  # 列出 154 个接口名
node src/modules/sms-test-tool/cli.js --list --only=12345     # 只看命中的
node src/modules/sms-test-tool/cli.js --dry --limit=10        # 预览请求结构，不发包
node src/modules/sms-test-tool/cli.js --dry --api=<接口名>     # 预览单条
node src/modules/sms-test-tool/cli.js 13800138000             # 全量跑一遍
node src/modules/sms-test-tool/cli.js 13800138000 --api=<接口名>
node src/modules/sms-test-tool/cli.js 13800138000 --only=unipus --repeat=20
```

对应 npm script：`pnpm sms:list` / `pnpm sms:dry` / `pnpm sms:run` / `pnpm gen:apis`。

## 与上游的差异

| 上游（浏览器） | 本封装（Node） | 原因 |
| --- | --- | --- |
| 走 `/proxy`、`cf.zk99999.dpdns.org` CORS 代理 | 直连目标站点 | Node 无同源限制，少一跳也少一个失败点 |
| GET 接口的 `data()` 返回值被丢弃 | 拼到 URL 查询串 | 55 条 GET 接口全靠查询串传参，丢掉等于空转发 |
| `Host` / `Content-Length` / `Accept-Encoding` 照抄 | 统一剥掉 | 浏览器本来就禁止脚本设置；Node 里照抄会导致 Host 与 SNI 不一致、`zstd` 无法解码等假失败 |
| `headers()` 直接调用，抛错即整条失败 | try/catch + 入参注入 | 上游 `lft.zwfwtek.cn` 那条引用了未定义变量 `phoneNumber`（生成时已修正为 `headers: (phoneNumber) => …`） |
| 清单里 unipus 复制 20 份 | 合并为 1 个模块 + `repeat` 选项 | 一处逻辑只管一次，重复次数交给调度层 |
| 5 秒请求去重缓存 | 不做缓存 | 服务端本来就要重复触发，去重反而降低命中 |
| 连续失败 20 次自动停 | 可选，默认不自动停 | 需要时用 `onResult` 自行中断 |

## 重新生成模块

```bash
node scripts/extract-endpoints.mjs   # 1) 拉上游 HTML，重新生成 endpoints.js
node scripts/split-endpoints.mjs     # 2) 拆成一接口一模块（自动清理 apis/ 里过期的文件）
```

`split-endpoints.mjs` 会打印原始记录数、去重后数量、方法分布和清理掉的旧文件名。

## 已知限制

- 清单里的 `Cookie` / `token` / `openid` 都是上游抓包时的固定值，多数已过期，对应接口会返回 401/403/业务失败，属于预期。
- 部分接口是 http + IP 直连或内网出口，本机网络未必可达，表现为 `ETIMEDOUT`。
- 接口返回 200 不代表短信真发出去了：`body` 里可能仍是 `{"success":false}` 或验证码错误提示。要判真成功需按接口逐个校验 `body`，可在 `onResult` 里加判定。

## 声明

清单来自公开仓库，仅用于接口连通性与压力测试研究；`--dry` / `api.build()` 可完全离线预览请求结构。
