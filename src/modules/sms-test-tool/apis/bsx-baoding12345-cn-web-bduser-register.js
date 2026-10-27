/**
 * GET https://bsx.baoding12345.cn/web/bduser/register
 * 接口模块：bsx-baoding12345-cn-web-bduser-register
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "bsx-baoding12345-cn-web-bduser-register",
  url: "https://bsx.baoding12345.cn/web/bduser/register",
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
