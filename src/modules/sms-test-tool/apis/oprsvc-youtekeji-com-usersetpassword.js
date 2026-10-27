/**
 * POST_JSON http://oprsvc.youtekeji.com/UserSetPassword.aspx?action=sendverificationcode
 * 接口模块：oprsvc-youtekeji-com-usersetpassword
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "oprsvc-youtekeji-com-usersetpassword",
  url: "http://oprsvc.youtekeji.com/UserSetPassword.aspx?action=sendverificationcode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'oprsvc.youtekeji.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'UserToken': '',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Origin': 'http://opr.youtekeji.com',
  'X-Requested-With': 'mark.via.gp',
  'Referer': 'http://opr.youtekeji.com/forget.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'phonenumber': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
