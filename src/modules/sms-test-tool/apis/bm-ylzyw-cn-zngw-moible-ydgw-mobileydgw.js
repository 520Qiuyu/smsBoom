/**
 * GET https://bm.ylzyw.cn/zngw/moible_ydgw/mobileydgw.do
 * 接口模块：bm-ylzyw-cn-zngw-moible-ydgw-mobileydgw
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "bm-ylzyw-cn-zngw-moible-ydgw-mobileydgw",
  url: "https://bm.ylzyw.cn/zngw/moible_ydgw/mobileydgw.do",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `method=sendSMS&phone=${phoneNumber}&ipAddress=` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
