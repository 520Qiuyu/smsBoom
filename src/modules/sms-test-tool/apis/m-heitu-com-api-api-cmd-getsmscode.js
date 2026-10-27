/**
 * GET https://m.heitu.com/Api/api/cmd/getSmsCode.html
 * 接口模块：m-heitu-com-api-api-cmd-getsmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "m-heitu-com-api-api-cmd-getsmscode",
  url: "https://m.heitu.com/Api/api/cmd/getSmsCode.html",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `pwd=sbsb114514&tel=${phoneNumber}&type=1&isuid=114514` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
