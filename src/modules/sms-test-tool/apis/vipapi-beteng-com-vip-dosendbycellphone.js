/**
 * POST_JSON https://vipapi.beteng.com/VIP/DoSendByCellPhone
 * 接口模块：vipapi-beteng-com-vip-dosendbycellphone
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "vipapi-beteng-com-vip-dosendbycellphone",
  url: "https://vipapi.beteng.com/VIP/DoSendByCellPhone",
  method: "POST_JSON",
  headers: () => ({
  'Content-Type': 'application/json',
  'charset': 'utf-8',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079 MiniProgramEnv/android',
  'Accept-Encoding': 'gzip,compress,br,deflate',
  'Referer': 'https://servicewechat.com/wx32e61224bdb979ff/166/page-frame.html'
  }),
  data: (phoneNumber, times) => ({
  'ID': 0,
  'Cellphone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
