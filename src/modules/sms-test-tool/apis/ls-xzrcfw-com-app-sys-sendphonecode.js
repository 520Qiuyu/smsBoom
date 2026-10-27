/**
 * POST_JSON https://ls.xzrcfw.com/App/Sys/SendPhoneCode
 * 接口模块：ls-xzrcfw-com-app-sys-sendphonecode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ls-xzrcfw-com-app-sys-sendphonecode",
  url: "https://ls.xzrcfw.com/App/Sys/SendPhoneCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'ls.xzrcfw.com',
  'Connection': 'keep-alive',
  'xweb_xhr': '1',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/8555',
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wx244d94feafd1e7f7/8/page-frame.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'requestModel': {
  "phone": phoneNumber,
  "OptionType": "1",
  "Role": "2"
  },
  'Token': 'None',
  'Source': 'MiniProject',
  'Platform': '2',
  'isTibetan': 'False'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
