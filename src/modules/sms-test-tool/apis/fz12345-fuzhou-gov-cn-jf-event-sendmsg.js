/**
 * GET http://fz12345.fuzhou.gov.cn/jf/event/sendMsg
 * 接口模块：fz12345-fuzhou-gov-cn-jf-event-sendmsg
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "fz12345-fuzhou-gov-cn-jf-event-sendmsg",
  url: "http://fz12345.fuzhou.gov.cn/jf/event/sendMsg",
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
