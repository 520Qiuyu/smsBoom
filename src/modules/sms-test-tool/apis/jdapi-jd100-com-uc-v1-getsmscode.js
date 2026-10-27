/**
 * GET https://jdapi.jd100.com/uc/v1/getSMSCode
 * 接口模块：jdapi-jd100-com-uc-v1-getsmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "jdapi-jd100-com-uc-v1-getsmscode",
  url: "https://jdapi.jd100.com/uc/v1/getSMSCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `account=${phoneNumber}&sign_type=1&use_type=1` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
