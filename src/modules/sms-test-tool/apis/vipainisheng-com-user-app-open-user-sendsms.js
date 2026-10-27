/**
 * POST_JSON https://vipainisheng.com/user/app/open/user/sendSms
 * 接口模块：vipainisheng-com-user-app-open-user-sendsms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "vipainisheng-com-user-app-open-user-sendsms",
  url: "https://vipainisheng.com/user/app/open/user/sendSms",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'vipainisheng.com',
  'Connection': 'keep-alive',
  'xweb_xhr': '1',
  'loginDevictType': 'XCX',
  'cookie': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9105',
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wx5f198a7cd2798103/8/page-frame.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'jmxygtz': '',
  'vcVersionCode': '1.6.2',
  'language': 'zh_CN',
  'loginDevictType': 'XCX',
  'appCode': 'JS',
  'xcxAppId': 'wx5f198a7cd2798103',
  'mobile': phoneNumber,
  'affairType': '1',
  'area': '+86',
  'en': 'Hf5FRgv5tjYBW5FIgJG6Mpp94VaqgFNVugxYQks0Us67L2ujaFcjOWRMVj1V4swL/rVe5ADkyXimIJ53T194Fg==',
  'uuid': '',
  'captchaCode': ''

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
