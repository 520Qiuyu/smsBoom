/**
 * GET https://jp.liyunol.com/etms/auth/sendSmsCode
 * 接口模块：jp-liyunol-com-etms-auth-sendsmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "jp-liyunol-com-etms-auth-sendsmscode",
  url: "https://jp.liyunol.com/etms/auth/sendSmsCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phoneNumber=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
