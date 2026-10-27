/**
 * GET https://ptlogin.4399.com/ptlogin/sendPhoneLoginCode.do
 * 接口模块：ptlogin-4399-com-ptlogin-sendphonelogincode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ptlogin-4399-com-ptlogin-sendphonelogincode",
  url: "https://ptlogin.4399.com/ptlogin/sendPhoneLoginCode.do",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}&appId=www_home&v=2&sig=&t=1592615855903&v=2` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
