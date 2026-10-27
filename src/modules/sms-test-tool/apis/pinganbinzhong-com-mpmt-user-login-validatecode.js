/**
 * GET https://www.pinganbinzhong.com/mpmt-user/login/validateCode
 * 接口模块：pinganbinzhong-com-mpmt-user-login-validatecode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "pinganbinzhong-com-mpmt-user-login-validatecode",
  url: "https://www.pinganbinzhong.com/mpmt-user/login/validateCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobile=${phoneNumber}&code=&checkNotFlag=1` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
