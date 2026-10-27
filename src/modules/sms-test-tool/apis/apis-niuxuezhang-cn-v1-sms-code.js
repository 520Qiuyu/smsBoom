/**
 * GET https://apis.niuxuezhang.cn/v1/sms-code
 * 接口模块：apis-niuxuezhang-cn-v1-sms-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "apis-niuxuezhang-cn-v1-sms-code",
  url: "https://apis.niuxuezhang.cn/v1/sms-code",
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
