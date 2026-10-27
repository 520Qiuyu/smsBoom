/**
 * POST_FORM https://console.shlianlu.com/doApi/sso/phoneCode
 * 接口模块：console-shlianlu-com-doapi-sso-phonecode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "console-shlianlu-com-doapi-sso-phonecode",
  url: "https://console.shlianlu.com/doApi/sso/phoneCode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'console.shlianlu.com',
  'Connection': 'keep-alive',
  'version': '3.0.0',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Origin': 'https://console.shlianlu.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://console.shlianlu.com/',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'AGL_USER_ID=5704e609-425a-48ba-b28c-f7865e323207; Qs_lvt_118243=1734499821; Qs_pv_118243=1073742235816860200; phoneCodeUUID=Isbe6CmaN3XRXgQ0Z/iUEQ==; mediav=%7B%22eid%22%3A%22251878%22%2C%22ep%22%3A%22%22%2C%22vid%22%3A%22%60GpL%5E%24%24j5R%3E%242kPP9X%2F!%22%2C%22ctn%22%3A%22%22%2C%22vvid%22%3A%22%60GpL%5E%24%24j5R%3E%242kPP9X%2F!%22%2C%22_mvnf%22%3A1%2C%22_mvctn%22%3A0%2C%22_mvck%22%3A0%2C%22_refnf%22%3A0%7D'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber,
  'typeValue': '注册',
  'uKey': '/Z4t9edX4SfAgqSVIOVzI6ONsT00IH+jdR+DMybbeNTPmfk5s3MYQphr256ARrVD'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
