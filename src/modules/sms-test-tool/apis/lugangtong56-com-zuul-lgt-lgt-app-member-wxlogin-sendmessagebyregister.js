/**
 * POST_FORM http://www.lugangtong56.com/zuul-lgt/lgt-app-member/wxLogin/sendMessageByRegister
 * 接口模块：lugangtong56-com-zuul-lgt-lgt-app-member-wxlogin-sendmessagebyregister
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "lugangtong56-com-zuul-lgt-lgt-app-member-wxlogin-sendmessagebyregister",
  url: "http://www.lugangtong56.com/zuul-lgt/lgt-app-member/wxLogin/sendMessageByRegister",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.lugangtong56.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'http://www.lugangtong56.com',
  'X-Requested-With': 'com.tencent.mn',
  'Referer': 'http://www.lugangtong56.com/lgt-app-driver-weixin/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
