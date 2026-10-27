/**
 * GET https://12345lm.www.yn.gov.cn/tools/submit_ajax.ashx
 * 接口模块：12345lm-www-yn-gov-cn-tools-submit-ajax
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "12345lm-www-yn-gov-cn-tools-submit-ajax",
  url: "https://12345lm.www.yn.gov.cn/tools/submit_ajax.ashx",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `action=get_smsvalidcode&mobile=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
