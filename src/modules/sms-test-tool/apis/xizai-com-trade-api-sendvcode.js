/**
 * GET https://www.xizai.com/trade/api/sendvcode
 * 接口模块：xizai-com-trade-api-sendvcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "xizai-com-trade-api-sendvcode",
  url: "https://www.xizai.com/trade/api/sendvcode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}&sType=1&netType=50350013&vp=6E2CA09F5E3D19B60D1E63BDFDB37082` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
