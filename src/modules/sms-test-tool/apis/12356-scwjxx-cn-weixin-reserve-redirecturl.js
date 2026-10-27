/**
 * POST_FORM http://12356.scwjxx.cn/weixin/reserve/redirectUrl
 * 接口模块：12356-scwjxx-cn-weixin-reserve-redirecturl
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "12356-scwjxx-cn-weixin-reserve-redirecturl",
  url: "http://12356.scwjxx.cn/weixin/reserve/redirectUrl",
  method: "POST_FORM",
  headers: () => ({
  'Host': '12356.scwjxx.cn',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://12356.scwjxx.cn',
  'Referer': 'http://12356.scwjxx.cn/weixin/reserve/goReserve/5',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'JSESSIONID=625677876B8448BD618120A5FA2895CE; JSESSIONID=FA4EC01E7E2F164C00CE0FF80919B841'
  }),
  data: (phoneNumber, times) => ({
  'tel': phoneNumber,
  'url': 'sendMessageVX'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
