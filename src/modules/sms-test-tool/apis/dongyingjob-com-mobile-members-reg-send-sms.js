/**
 * POST_FORM https://www.dongyingjob.com/mobile/members/reg_send_sms.html
 * 接口模块：dongyingjob-com-mobile-members-reg-send-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "dongyingjob-com-mobile-members-reg-send-sms",
  url: "https://www.dongyingjob.com/mobile/members/reg_send_sms.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.dongyingjob.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://www.dongyingjob.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.dongyingjob.com/mobile/members/register.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=ckki3ae2akmhu82p700lp8vio0; think_language=zh-CN; think_template=default; SECKEY_ABVK=SoeK/82zeZs63L7QPdh7Fs6tXxDwr1Dx+ILh78qgtiRxGOJ8aWasnfbyvvi9/z80JW0BbD3TJwXIVq0awCDE7A%3D%3D; cookie_lat=22.8226066; cookie_lng=108.37345083; BMAP_SECKEY=SoeK_82zeZs63L7QPdh7Fs6tXxDwr1Dx-ILh78qgtiTbTcrvYshxY-ll4nn7xI9ljg48jY0bkP8AgEW6zM7hz4ce0QAZYF6_0bC2PRJj3xgo41jkNFSb-DOArx8M6PXILGyfgUdm7SywLFfOh-pNaIo1hYh-8uHk2hWMkrvc97cgVMfkFf7RNJlWpg3hOVlMnX-eupF3wEQhpYu7hW7DYQ; return_url=https%3A%2F%2Fwww.dongyingjob.com%2FMobile'
  }),
  data: (phoneNumber, times) => ({
  'sms_type': 'login',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
