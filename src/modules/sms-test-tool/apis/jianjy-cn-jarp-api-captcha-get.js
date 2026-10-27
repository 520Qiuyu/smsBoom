/**
 * POST_JSON http://www.jianjy.cn/jarp/api/captcha/get
 * 接口模块：jianjy-cn-jarp-api-captcha-get
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "jianjy-cn-jarp-api-captcha-get",
  url: "http://www.jianjy.cn/jarp/api/captcha/get",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'www.jianjy.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/8555',
  'Content-Type': 'application/json; charset=UTF-8',
  'Origin': 'http://www.jianjy.cn',
  'X-Requested-With': 'mark.via.gp',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'Mobile': phoneNumber,

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
