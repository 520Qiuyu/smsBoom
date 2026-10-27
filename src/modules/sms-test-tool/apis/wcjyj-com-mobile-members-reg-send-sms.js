/**
 * POST_FORM https://www.wcjyj.com/mobile/members/reg_send_sms.html
 * 接口模块：wcjyj-com-mobile-members-reg-send-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wcjyj-com-mobile-members-reg-send-sms",
  url: "https://www.wcjyj.com/mobile/members/reg_send_sms.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.wcjyj.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://www.wcjyj.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.wcjyj.com/mobile/members/register.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=lnpqq10io8vln93debco287ve3; think_language=zh-CN; return_url=https%3A%2F%2Fcn.bing.com%2Fsearch%3Fq%3D%25e5%2585%25ac%25e5%2585%25b1%25e5%25b0%25b1%25e4%25b8%259a%25e5%2588%259b%25e4%25b8%259a%25e6%259c%258d%25e5%258a%25a1%25e5%25b9%25b3%25e5%258f%25b0%26FPIG%3DCDE1252B3ED04FB5949EE2444100D502%26ensearch%3D1%26first%3D54%26FORM%3DPORE; think_template=lhrg-c'
  }),
  data: (phoneNumber, times) => ({
  'sms_type': 'login',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
