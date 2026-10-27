/**
 * GET https://wx.rsj.baoji.gov.cn/bjwxVeifyPhone.action
 * 接口模块：wx-rsj-baoji-gov-cn-bjwxveifyphone
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wx-rsj-baoji-gov-cn-bjwxveifyphone",
  url: "https://wx.rsj.baoji.gov.cn/bjwxVeifyPhone.action",
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
