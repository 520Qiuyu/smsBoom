/**
 * POST_JSON https://app.tsbmrx12345.gov.cn/user/login/sendCodeSms
 * 接口模块：app-tsbmrx12345-gov-cn-user-login-sendcodesms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "app-tsbmrx12345-gov-cn-user-login-sendcodesms",
  url: "https://app.tsbmrx12345.gov.cn/user/login/sendCodeSms",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'app.tsbmrx12345.gov.cn',
  'Connection': 'keep-alive',
  'xweb_xhr': '1',
  'Content-type': 'application/json',
  'access-token': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9105',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wx919d08150b092ccd/13/page-frame.html',
  'Accept-Encoding': 'gzip,compress,br,deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'user_phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
