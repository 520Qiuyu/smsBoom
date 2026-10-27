/**
 * POST_FORM https://wap.wmsy.mobi/v2/h5/api/register/register_code
 * 接口模块：wap-wmsy-mobi-v2-h5-api-register-register-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wap-wmsy-mobi-v2-h5-api-register-register-code",
  url: "https://wap.wmsy.mobi/v2/h5/api/register/register_code",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'wap.wmsy.mobi',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'userid': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'token': '',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://wap.wmsy.mobi',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': '53revisit=1737257213702; 53kf_72962151_from_host=wap.wmsy.mobi; 53kf_72962151_keyword=https%3A%2F%2Fwww.wmsy.mobi%2FallGame.html; uuid_53kf_72962151=1c95dcc094b7793b96804763acbf884f; 53kf_72962151_land_page=https%253A%252F%252Fwap.wmsy.mobi%252Fpages%252Ftabs%252Fbuy; kf_72962151_land_page_ok=1; sl-session=vK/3V33CjWfDwW6fqvN7KQ==; cna=8a6d7088a79a4825967032aa223c2b36'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
