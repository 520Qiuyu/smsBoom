/**
 * GET https://www.smelz.cn/include/ajax.php
 * 接口模块：smelz-cn-include-ajax
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "smelz-cn-include-ajax",
  url: "https://www.smelz.cn/include/ajax.php",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `service=siteConfig&action=getPhoneVerify&areaCode=86&account=${phoneNumber}&vcode=&password=&phone=${phoneNumber}&type=signup&callback=jsonp1` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
