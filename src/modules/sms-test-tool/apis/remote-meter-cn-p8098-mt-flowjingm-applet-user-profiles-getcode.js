/**
 * GET https://remote-meter.cn:8098/mt-flowJingM/applet/user/profiles/getCode
 * 接口模块：remote-meter-cn-p8098-mt-flowjingm-applet-user-profiles-getcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "remote-meter-cn-p8098-mt-flowjingm-applet-user-profiles-getcode",
  url: "https://remote-meter.cn:8098/mt-flowJingM/applet/user/profiles/getCode",
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
