/**
 * GET https://m.16888.com/wap.php
 * 接口模块：m-16888-com-wap
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "m-16888-com-wap",
  url: "https://m.16888.com/wap.php",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mod=commonApi&extra=mobileCode&mobile=${phoneNumber}&token=C9jfKuXX2dkf&verify=b9e66591c552bcb5719e0b5fb45f272b&_=1734329724951` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
