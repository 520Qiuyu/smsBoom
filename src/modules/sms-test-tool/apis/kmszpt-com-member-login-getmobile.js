/**
 * POST_FORM http://kmszpt.com/member/Login/getMobile.html
 * 接口模块：kmszpt-com-member-login-getmobile
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "kmszpt-com-member-login-getmobile",
  url: "http://kmszpt.com/member/Login/getMobile.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'kmszpt.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://kmszpt.com',
  'Referer': 'http://kmszpt.com/member/login/register.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'SESSID_KMFWPT=c446e1687660478e284c2cd73690a561'
  }),
  data: (phoneNumber, times) => ({
  'data': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
