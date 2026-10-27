/**
 * GET https://m.zol.com.cn/user/ajax/getPhoneCode.php
 * 接口模块：m-zol-com-cn-user-ajax-getphonecode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "m-zol-com-cn-user-ajax-getphonecode",
  url: "https://m.zol.com.cn/user/ajax/getPhoneCode.php",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `autype=1&token=348934b357e5758f77e5992ab4accfb6&backUrl=https%3A%2F%2Fm.zol.com.cn%2F&phone=${phoneNumber}&checkcode=885D` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
