/**
 * GET http://mhos.jiankang51.cn/support/get_data
 * 接口模块：mhos-jiankang51-cn-support-get-data
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "mhos-jiankang51-cn-support-get-data",
  url: "http://mhos.jiankang51.cn/support/get_data",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `pltId=03&productId=004&version=1.00.00&sessionId=&mName=getCheckCode&pContent=%7B%22phoneNumber%22%3A%22${phoneNumber}%22%2C%22businessType%22%3A%221%22%7D` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
