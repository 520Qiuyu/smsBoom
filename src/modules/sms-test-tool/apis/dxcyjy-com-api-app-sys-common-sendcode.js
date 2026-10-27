/**
 * GET https://dxcyjy.com/api/app/sys/common/sendCode
 * 接口模块：dxcyjy-com-api-app-sys-common-sendcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "dxcyjy-com-api-app-sys-common-sendcode",
  url: "https://dxcyjy.com/api/app/sys/common/sendCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobilePhone=${phoneNumber}&type=register` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
