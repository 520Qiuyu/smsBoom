/**
 * POST_FORM https://passport.xag.cn/home/sms_code
 * 接口模块：passport-xag-cn-home-sms-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "passport-xag-cn-home-sms-code",
  url: "https://passport.xag.cn/home/sms_code",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'passport.xag.cn',
  'Connection': 'keep-alive',
  'mini': 'member',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Authorization': 'Basic QTFDQ0FFOUItNjcwMi0wOUY4LTVDNjUtOTM3M0ZEQkY4OTY4OjNhYzcxNjk2OGM0NzlmMmMzZTVhYjc1MjQ2OTYyMWJi',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json',
  'xweb_xhr': '1',
  'X-Requested-With': 'XMLHttpRequest',
  'token': '',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wx43471742f3e783cb/213/page-frame.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'icc': '86',
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
