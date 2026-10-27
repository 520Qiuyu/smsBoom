/**
 * POST_FORM http://www.9377.com/h5/register.php
 * 接口模块：9377-com-h5-register
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "9377-com-h5-register",
  url: "http://www.9377.com/h5/register.php",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.9377.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'http://www.9377.com',
  'Referer': 'http://www.9377.com/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'SESSID=51thqb5me77g9vbisv45l001u7; dwby_ad_dialog=1735738330480'
  }),
  data: (phoneNumber, times) => ({
  'do': 'register',
  'cellphone': '1',
  'send_captcha': 'sent',
  'tel': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
