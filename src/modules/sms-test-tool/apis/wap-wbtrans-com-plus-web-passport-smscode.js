/**
 * POST_FORM https://wap.wbtrans.com/plus/web/Passport/SmsCode
 * 接口模块：wap-wbtrans-com-plus-web-passport-smscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wap-wbtrans-com-plus-web-passport-smscode",
  url: "https://wap.wbtrans.com/plus/web/Passport/SmsCode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'wap.wbtrans.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://wap.wbtrans.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://wap.wbtrans.com/login.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': '__51vwae__JnN3elkseQ2FPEIj=2af5c2ab-56bd-1a9b-6f62-bc1202fbf335; loginBackUrl=https%3A//wap.wbtrans.com/user.html'
  }),
  data: (phoneNumber, times) => ({
  'tel': phoneNumber,
  'Platform': '1'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
