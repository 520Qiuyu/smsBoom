/**
 * GET https://wx.gamesafe.qq.com/cgi/proxy/send_sms
 * 接口模块：wx-gamesafe-qq-com-cgi-proxy-send-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wx-gamesafe-qq-com-cgi-proxy-send-sms",
  url: "https://wx.gamesafe.qq.com/cgi/proxy/send_sms",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `1=1&phone_num=${phoneNumber}&game_id=null&uin=-1` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
