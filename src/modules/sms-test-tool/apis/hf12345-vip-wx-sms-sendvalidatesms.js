/**
 * POST_FORM http://www.hf12345.vip/wx/sms/sendValidateSms
 * 接口模块：hf12345-vip-wx-sms-sendvalidatesms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "hf12345-vip-wx-sms-sendvalidatesms",
  url: "http://www.hf12345.vip/wx/sms/sendValidateSms",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.hf12345.vip',
  'Connection': 'keep-alive',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'http://www.hf12345.vip',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'http://www.hf12345.vip/weixinPublic/wx9c0b6e09161a60eb/toRegister',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'JSESSIONID=8AC2427ACD3BAB14299DEC41BA0C6651'
  }),
  data: (phoneNumber, times) => ({
  'appid': 'wx9c0b6e09161a60eb',
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
