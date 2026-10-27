/**
 * POST_FORM https://apis.btpmw.com/index/sms/send_code
 * 接口模块：apis-btpmw-com-index-sms-send-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "apis-btpmw-com-index-sms-send-code",
  url: "https://apis.btpmw.com/index/sms/send_code",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'apis.btpmw.com',
  'Connection': 'keep-alive',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Origin': 'https://x.btpmw.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://x.btpmw.com/pages/index/register',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
