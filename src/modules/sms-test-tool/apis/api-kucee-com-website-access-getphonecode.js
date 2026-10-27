/**
 * POST_JSON https://api.kucee.com/website.Access/getPhoneCode
 * 接口模块：api-kucee-com-website-access-getphonecode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "api-kucee-com-website-access-getphonecode",
  url: "https://api.kucee.com/website.Access/getPhoneCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'api.kucee.com',
  'Connection': 'keep-alive',
  'W-Token': '4276',
  'xweb_xhr': '1',
  'U-Token': '',
  'AppId-Token': 'wx942a1bf556cf82ed',
  'Uni-Code': '633f39b271e585b3ed3af77237320e21',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wx942a1bf556cf82ed/1/page-frame.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber,
  'type': '1',
  'lat': '12435',
  'lng': '8946',
  'storeId': '0',
  'appId': 'wx942a1bf556jsnsb',
  'scene': '1053',

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
