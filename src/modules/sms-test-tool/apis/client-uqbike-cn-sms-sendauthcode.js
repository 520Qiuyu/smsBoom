/**
 * GET https://client.uqbike.cn/sms/sendAuthCode.do
 * 接口模块：client-uqbike-cn-sms-sendauthcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "client-uqbike-cn-sms-sendauthcode",
  url: "https://client.uqbike.cn/sms/sendAuthCode.do",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 13; V2148A Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20240404 MMWEBID/8833 MicroMessenger/8.0.49.2600(0x28003137) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `accountId=290&phone=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
