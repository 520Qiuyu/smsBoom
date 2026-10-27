/**
 * POST_FORM https://jgfw.furuifeng.net/api/login/sendSmsCode
 * 接口模块：jgfw-furuifeng-net-api-login-sendsmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "jgfw-furuifeng-net-api-login-sendsmscode",
  url: "https://jgfw.furuifeng.net/api/login/sendSmsCode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'jgfw.furuifeng.net',
  'Connection': 'keep-alive',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Origin': 'https://jgfw.furuifeng.net',
  'X-Requested-With': 'mark.via.gp',
  'Referer': 'https://jgfw.furuifeng.net/index.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'mobilePhone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
