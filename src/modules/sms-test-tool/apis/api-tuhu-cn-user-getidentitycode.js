/**
 * GET https://api.tuhu.cn/User/GetIdentityCode
 * 接口模块：api-tuhu-cn-user-getidentitycode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "api-tuhu-cn-user-getidentitycode",
  url: "https://api.tuhu.cn/User/GetIdentityCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `Phone=${phoneNumber}&type=0&nationCode=86` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
