/**
 * GET https://api.portal.cargoon.com/auth/sms
 * 接口模块：api-portal-cargoon-com-auth-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "api-portal-cargoon-com-auth-sms",
  url: "https://api.portal.cargoon.com/auth/sms",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobile=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
