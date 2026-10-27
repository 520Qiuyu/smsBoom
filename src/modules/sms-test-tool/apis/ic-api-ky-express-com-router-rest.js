/**
 * POST_JSON https://ic-api.ky-express.com/router/rest?web.login.verification.sendSmsCode
 * 接口模块：ic-api-ky-express-com-router-rest
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ic-api-ky-express-com-router-rest",
  url: "https://ic-api.ky-express.com/router/rest?web.login.verification.sendSmsCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'ic-api.ky-express.com',
  'Connection': 'keep-alive',
  'method': 'web.login.verification.sendSmsCode',
  'web-trace-id': '0000-1737534533622',
  'sign': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Accept': 'application/json, text/plain, */*',
  'timestamp': '1737534533622',
  'x-from': '115',
  'x-risk-version': 'captcha',
  'appKey': '10145',
  'Origin': 'https://uc.ky-express.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://uc.ky-express.com/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'from': '7',
  'phone': phoneNumber,
  'captchaType': '7',
  'riskFlag': '10',
  'deviceCode': '6820f0fe-3a08-4a1f-b3a9-c35287d409d7',
  'deviceType': 'PC-2025012234533596'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
