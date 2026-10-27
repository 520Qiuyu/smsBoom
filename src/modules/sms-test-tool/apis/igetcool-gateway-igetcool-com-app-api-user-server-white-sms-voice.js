/**
 * GET https://igetcool-gateway.igetcool.com/app-api-user-server/white/sms/voice.json
 * 接口模块：igetcool-gateway-igetcool-com-app-api-user-server-white-sms-voice
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "igetcool-gateway-igetcool-com-app-api-user-server-white-sms-voice",
  url: "https://igetcool-gateway.igetcool.com/app-api-user-server/white/sms/voice.json",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}&smstype=1` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
