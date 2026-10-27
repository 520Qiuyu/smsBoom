/**
 * POST_FORM http://219.145.189.96:9000/api/v1/orderCitizen/send_captcha
 * 接口模块：ip-219-145-189-96-p9000-api-v1-ordercitizen-send-captcha
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ip-219-145-189-96-p9000-api-v1-ordercitizen-send-captcha",
  url: "http://219.145.189.96:9000/api/v1/orderCitizen/send_captcha",
  method: "POST_FORM",
  headers: () => ({
  'Host': '219.145.189.96:9000',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'http://weinan.call12345.com',
  'X-Requested-With': 'mark.via.gp',
  'Referer': 'http://weinan.call12345.com/wx_login',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
