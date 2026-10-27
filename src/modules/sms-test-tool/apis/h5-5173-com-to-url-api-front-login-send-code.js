/**
 * POST_JSON https://h5.5173.com/to_url/api/front/login/send/code
 * 接口模块：h5-5173-com-to-url-api-front-login-send-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "h5-5173-com-to-url-api-front-login-send-code",
  url: "https://h5.5173.com/to_url/api/front/login/send/code",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'h5.5173.com',
  'Connection': 'keep-alive',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Origin': 'https://h5.5173.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://h5.5173.com/pages/login/login',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'acw_tc=0bca316217372562461143466e054f94a9f5105f1e9fe79804823cef761c2e'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
