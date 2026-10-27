/**
 * GET http://58.49.165.98:9023/dispatch/case/sendMessage
 * 接口模块：ip-58-49-165-98-p9023-dispatch-case-sendmessage
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ip-58-49-165-98-p9023-dispatch-case-sendmessage",
  url: "http://58.49.165.98:9023/dispatch/case/sendMessage",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phoneNum=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
