/**
 * POST_JSON https://sso.zlgx.com/api/v2/sms/sendVerificationCode
 * 接口模块：sso-zlgx-com-api-v2-sms-sendverificationcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "sso-zlgx-com-api-v2-sms-sendverificationcode",
  url: "https://sso.zlgx.com/api/v2/sms/sendVerificationCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'sso.zlgx.com',
  'Connection': 'keep-alive',
  'xweb_xhr': '1',
  'Cookie': 'uam_biz_token=',
  'Content-Type': 'application/json; charset=utf-8',
  'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.54(0x18003637) NetType/WIFI Language/zh_CN',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wx268c8d17321d555a/64/page-frame.html',
  'Accept-Encoding': 'gzip,compress,br,deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'params': {
  "phone": phoneNumber,
  "platfromCode": "fpop"
  }

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
