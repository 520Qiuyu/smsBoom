/**
 * POST_FORM https://www.xuchang6.com/mobile/members/reg_send_sms.html
 * 接口模块：xuchang6-com-mobile-members-reg-send-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "xuchang6-com-mobile-members-reg-send-sms",
  url: "https://www.xuchang6.com/mobile/members/reg_send_sms.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.xuchang6.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://www.xuchang6.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.xuchang6.com/mobile/members/register.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=nku212av4cq09epu8lp9pahro4; think_language=zh-CN; think_template=default; SECKEY_ABVK=E8e7IWJasv1KZh+hkGlGpxLITtT71NHgjNFYAtRJeS9QjEWC8ip6PIb5WIPK0VvC2ABYRAbbxpXQkbW285zYKQ%3D%3D; cookie_lat=22.8226066; cookie_lng=108.37345083; BMAP_SECKEY=E8e7IWJasv1KZh-hkGlGpxLITtT71NHgjNFYAtRJeS-kbc25Ols5l6yBGrKi7WtHPYWWvsA32JSW2CQfA45EFLhnaTarKGEIz1yFTROzZBIXThxGPNE3yXDy5EU95bBp5mn3YUQHquNhO5gwEY-dsqXTNeB4cBipbVZQaPDX-eBuPDi7AtZcYPcFpe40Cp3bBgrvjeHa9fV5XpPIP0pHBA; return_url=https%3A%2F%2Fwww.xuchang6.com%2FMobile'
  }),
  data: (phoneNumber, times) => ({
  'sms_type': 'login',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
