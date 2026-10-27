/**
 * GET https://ythpt.jsga.gov.cn/jsgawx/sms/sendSmsByMobile
 * 接口模块：ythpt-jsga-gov-cn-jsgawx-sms-sendsmsbymobile
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ythpt-jsga-gov-cn-jsgawx-sms-sendsmsbymobile",
  url: "https://ythpt.jsga.gov.cn/jsgawx/sms/sendSmsByMobile",
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
