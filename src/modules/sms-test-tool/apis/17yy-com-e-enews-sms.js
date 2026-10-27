/**
 * GET http://www.17yy.com/e/enews/sms.php
 * 接口模块：17yy-com-e-enews-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "17yy-com-e-enews-sms",
  url: "http://www.17yy.com/e/enews/sms.php",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `action=send&ask=13&mobilePhone=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
