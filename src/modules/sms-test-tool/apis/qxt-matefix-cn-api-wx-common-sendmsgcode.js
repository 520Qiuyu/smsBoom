/**
 * GET https://qxt.matefix.cn/api/wx/common/sendMsgCode
 * 接口模块：qxt-matefix-cn-api-wx-common-sendmsgcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "qxt-matefix-cn-api-wx-common-sendmsgcode",
  url: "https://qxt.matefix.cn/api/wx/common/sendMsgCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobile=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
