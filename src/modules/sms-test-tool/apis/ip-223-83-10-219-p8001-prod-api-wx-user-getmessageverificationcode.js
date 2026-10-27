/**
 * GET http://223.83.10.219:8001/prod-api/wx/user/getMessageVerificationCode
 * 接口模块：ip-223-83-10-219-p8001-prod-api-wx-user-getmessageverificationcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ip-223-83-10-219-p8001-prod-api-wx-user-getmessageverificationcode",
  url: "http://223.83.10.219:8001/prod-api/wx/user/getMessageVerificationCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
