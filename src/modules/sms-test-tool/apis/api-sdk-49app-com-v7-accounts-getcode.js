/**
 * GET https://api.sdk.49app.com/V7/Accounts/GetCode
 * 接口模块：api-sdk-49app-com-v7-accounts-getcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "api-sdk-49app-com-v7-accounts-getcode",
  url: "https://api.sdk.49app.com/V7/Accounts/GetCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `callback=apiRegGetPhoneCode&device=3&mobile=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
