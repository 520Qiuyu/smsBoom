/**
 * GET https://www.biteip.cn/index.php
 * 接口模块：biteip-cn-index
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "biteip-cn-index",
  url: "https://www.biteip.cn/index.php",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `clientid=mobile&mobile=${phoneNumber}&m=member&c=index&a=public_checkmobile_ajax&_=1734355244096` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
