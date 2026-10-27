/**
 * POST_JSON https://eapuapi.haoxinqing.cn/hxq-eap-user-api/user/getCaptchaWeb
 * 接口模块：eapuapi-haoxinqing-cn-hxq-eap-user-api-user-getcaptchaweb
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "eapuapi-haoxinqing-cn-hxq-eap-user-api-user-getcaptchaweb",
  url: "https://eapuapi.haoxinqing.cn/hxq-eap-user-api/user/getCaptchaWeb",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'eapuapi.haoxinqing.cn',
  'Connection': 'keep-alive',
  'remark': '',
  'entId': '520',
  'requestId': 'cfacb9d0d30711ef82095bf7e4718f5d',
  'Content-Type': 'application/json',
  'Accept': 'application/json, text/plain, */*',
  'batchNo': '2564601',
  'userId': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'uuToken': '',
  'cardNo': '',
  'Origin': 'https://eap.haoxinqing.cn',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://eap.haoxinqing.cn/login?redirect=/user',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'entId': '520',
  'batchNo': '2564601',
  'cardNo': '',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
