/**
 * GET https://a.xcar.com.cn/nxcar/index.php/login/login/mobilepwds
 * 接口模块：a-xcar-com-cn-nxcar-index-php-login-login-mobilepwds
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "a-xcar-com-cn-nxcar-index-php-login-login-mobilepwds",
  url: "https://a.xcar.com.cn/nxcar/index.php/login/login/mobilepwds",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobile=${phoneNumber}&mocode=&unique=c6fe6421e13263aceb96ea8db73bebe2&login=1&validate=` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
