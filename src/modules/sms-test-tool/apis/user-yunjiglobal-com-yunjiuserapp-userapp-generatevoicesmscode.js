/**
 * GET https://user.yunjiglobal.com/yunjiuserapp/userapp/generateVoiceSmsCode.json
 * 接口模块：user-yunjiglobal-com-yunjiuserapp-userapp-generatevoicesmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "user-yunjiglobal-com-yunjiuserapp-userapp-generatevoicesmscode",
  url: "https://user.yunjiglobal.com/yunjiuserapp/userapp/generateVoiceSmsCode.json",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=86${phoneNumber}&appCont=1` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
