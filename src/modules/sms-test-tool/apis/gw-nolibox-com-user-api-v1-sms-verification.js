/**
 * POST_JSON https://gw.nolibox.com/user/api/v1/sms/verification
 * 接口模块：gw-nolibox-com-user-api-v1-sms-verification
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "gw-nolibox-com-user-api-v1-sms-verification",
  url: "https://gw.nolibox.com/user/api/v1/sms/verification",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'gw.nolibox.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'X-Requested-With': 'XMLHttpRequest',
  'Authorization': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Origin': 'https://creator.nolipix.com',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://creator.nolipix.com/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'mobileNumber': phoneNumber,
  'source_name': 'creator'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
