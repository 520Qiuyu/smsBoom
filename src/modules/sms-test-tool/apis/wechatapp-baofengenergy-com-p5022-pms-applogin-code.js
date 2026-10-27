/**
 * GET https://wechatapp.baofengenergy.com:5022/pms/appLogin/code
 * 接口模块：wechatapp-baofengenergy-com-p5022-pms-applogin-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wechatapp-baofengenergy-com-p5022-pms-applogin-code",
  url: "https://wechatapp.baofengenergy.com:5022/pms/appLogin/code",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}&isRegister=true` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
