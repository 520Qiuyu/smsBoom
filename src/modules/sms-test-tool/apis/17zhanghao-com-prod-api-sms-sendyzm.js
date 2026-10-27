/**
 * GET https://www.17zhanghao.com/prod-api/sms/sendYzm
 * 接口模块：17zhanghao-com-prod-api-sms-sendyzm
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "17zhanghao-com-prod-api-sms-sendyzm",
  url: "https://www.17zhanghao.com/prod-api/sms/sendYzm",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}&type=phoneLogin` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
