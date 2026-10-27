/**
 * GET https://services.qiye.163.com/service/official/sendCode
 * 接口模块：services-qiye-163-com-service-official-sendcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "services-qiye-163-com-service-official-sendcode",
  url: "https://services.qiye.163.com/service/official/sendCode",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `jsonpcallback=jQuery190039810459070645865_1584688891341&mobile=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
