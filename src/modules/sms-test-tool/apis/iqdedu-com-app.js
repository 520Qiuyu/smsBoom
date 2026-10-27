/**
 * GET http://www.iqdedu.com/app/
 * 接口模块：iqdedu-com-app
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "iqdedu-com-app",
  url: "http://www.iqdedu.com/app/",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `app=member&controller=index&action=sendvcode&mobile=${phoneNumber}&type=reg` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
