/**
 * GET https://www.smenx.com.cn/ajax/getregistcode.do
 * 接口模块：smenx-com-cn-ajax-getregistcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "smenx-com-cn-ajax-getregistcode",
  url: "https://www.smenx.com.cn/ajax/getregistcode.do",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobilenum=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
