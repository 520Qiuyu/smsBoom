/**
 * GET https://m.zhanghaojiaoyi.cn/api/api/member/send/regCode
 * 接口模块：m-zhanghaojiaoyi-cn-api-api-member-send-regcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "m-zhanghaojiaoyi-cn-api-api-member-send-regcode",
  url: "https://m.zhanghaojiaoyi.cn/api/api/member/send/regCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `username=&password=&repPassword=&phone=${phoneNumber}&smsCode=` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
