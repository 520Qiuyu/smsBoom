/**
 * POST_JSON https://a.welife001.com/applet/sendVerifyCode
 * 接口模块：a-welife001-com-applet-sendverifycode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "a-welife001-com-applet-sendverifycode",
  url: "https://a.welife001.com/applet/sendVerifyCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'a.welife001.com',
  'Connection': 'keep-alive',
  'x-rid': '3ACFBC8F-F10E-454F-80F7-E9CF80EFA70B',
  'imprint': 'oWRkU0UWqnOnuclLWq1fDw0SHnqs',
  'xweb_xhr': '1',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/8555',
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wx23d8d7ea22039466/2307/page-frame.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
