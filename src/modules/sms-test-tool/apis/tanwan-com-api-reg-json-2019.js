/**
 * GET http://www.tanwan.com/api/reg_json_2019.php
 * 接口模块：tanwan-com-api-reg-json-2019
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "tanwan-com-api-reg-json-2019",
  url: "http://www.tanwan.com/api/reg_json_2019.php",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `act=3&phone=${phoneNumber}&callback=jQuery112003247368730630804_1643269992344&_=1643269992347` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
