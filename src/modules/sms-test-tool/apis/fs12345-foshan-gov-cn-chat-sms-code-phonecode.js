/**
 * POST_JSON https://fs12345.foshan.gov.cn/chat/sms/code/phoneCode
 * 接口模块：fs12345-foshan-gov-cn-chat-sms-code-phonecode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "fs12345-foshan-gov-cn-chat-sms-code-phonecode",
  url: "https://fs12345.foshan.gov.cn/chat/sms/code/phoneCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'fs12345.foshan.gov.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'Cache-Control': 'no-cache',
  'access_token': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Origin': 'https://fs12345.foshan.gov.cn',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
