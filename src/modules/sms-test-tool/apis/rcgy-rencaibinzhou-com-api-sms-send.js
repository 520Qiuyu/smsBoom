/**
 * POST_FORM https://rcgy.rencaibinzhou.com/api/sms/send.html
 * 接口模块：rcgy-rencaibinzhou-com-api-sms-send
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "rcgy-rencaibinzhou-com-api-sms-send",
  url: "https://rcgy.rencaibinzhou.com/api/sms/send.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'rcgy.rencaibinzhou.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://rcgy.rencaibinzhou.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://rcgy.rencaibinzhou.com/index/user/register.html?url=%2Findex%2Fuser',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=l9dus4l5tp9jmu46ga60dtghnb'
  }),
  data: (phoneNumber, times) => ({
  'event': 'register',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
