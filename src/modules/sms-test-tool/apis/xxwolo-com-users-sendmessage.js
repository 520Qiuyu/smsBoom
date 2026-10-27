/**
 * GET https://www.xxwolo.com/users/sendMessage
 * 接口模块：xxwolo-com-users-sendmessage
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "xxwolo-com-users-sendmessage",
  url: "https://www.xxwolo.com/users/sendMessage",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}&bOK=true` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
