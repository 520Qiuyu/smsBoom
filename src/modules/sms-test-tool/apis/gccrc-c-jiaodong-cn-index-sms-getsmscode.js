/**
 * POST_FORM http://gccrc.c.jiaodong.cn/index/sms/getsmscode.html
 * 接口模块：gccrc-c-jiaodong-cn-index-sms-getsmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "gccrc-c-jiaodong-cn-index-sms-getsmscode",
  url: "http://gccrc.c.jiaodong.cn/index/sms/getsmscode.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'gccrc.c.jiaodong.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://gccrc.c.jiaodong.cn',
  'Referer': 'http://gccrc.c.jiaodong.cn/index/login/reg.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=e4rb9n5vkdhnqtki11mkqrk062'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber,
  'sms_type': 'register'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
