/**
 * POST_JSON https://lgdd2015.cn/api/auth/sms-verify/send
 * 接口模块：lgdd2015-cn-api-auth-sms-verify-send
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "lgdd2015-cn-api-auth-sms-verify-send",
  url: "https://lgdd2015.cn/api/auth/sms-verify/send",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'lgdd2015.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'X-App-Version': '4694',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/8555',
  'Content-Type': 'application/json',
  'Origin': 'https://lgdd2015.cn',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://lgdd2015.cn/login?redirect=%2Fdashboard',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Cookie': 'Path=/',
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber,
  'department': '371393000000'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
