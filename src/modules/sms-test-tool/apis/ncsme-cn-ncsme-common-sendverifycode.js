/**
 * GET https://www.ncsme.cn/ncsme/common/sendVerifyCode
 * 接口模块：ncsme-cn-ncsme-common-sendverifycode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ncsme-cn-ncsme-common-sendverifycode",
  url: "https://www.ncsme.cn/ncsme/common/sendVerifyCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phone=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
