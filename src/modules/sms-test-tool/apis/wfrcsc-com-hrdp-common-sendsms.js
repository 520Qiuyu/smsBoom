/**
 * POST_JSON https://wfrcsc.com/hrdp/common/sendSMS
 * 接口模块：wfrcsc-com-hrdp-common-sendsms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wfrcsc-com-hrdp-common-sendsms",
  url: "https://wfrcsc.com/hrdp/common/sendSMS",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'wfrcsc.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json;charset=UTF-8',
  'Origin': 'https://wfrcsc.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://wfrcsc.com/mobile/index/appRegister',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'TALENT=63ac1d55-ac6f-454e-aadf-fceb963c4ee7'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber,
  'tag': 'register',
  'isApp': 'false'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
