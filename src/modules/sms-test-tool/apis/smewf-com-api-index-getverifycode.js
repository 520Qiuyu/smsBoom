/**
 * GET http://www.smewf.com/api/index/getVerifyCode
 * 接口模块：smewf-com-api-index-getverifycode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "smewf-com-api-index-getverifycode",
  url: "http://www.smewf.com/api/index/getVerifyCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobile=${phoneNumber}&type=1` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
