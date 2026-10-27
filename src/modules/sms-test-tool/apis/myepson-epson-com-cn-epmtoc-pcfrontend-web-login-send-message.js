/**
 * POST_FORM https://myepson.epson.com.cn/epmtoc/pcfrontend/web/login/send_message
 * 接口模块：myepson-epson-com-cn-epmtoc-pcfrontend-web-login-send-message
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "myepson-epson-com-cn-epmtoc-pcfrontend-web-login-send-message",
  url: "https://myepson.epson.com.cn/epmtoc/pcfrontend/web/login/send_message",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'myepson.epson.com.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://myepson.epson.com.cn',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://myepson.epson.com.cn/epmtoc/pcfrontend/web/login/index',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'acw_tc=0aef82e517371975809362988e012082140c9aafb4ad5a2c6f424183d59983; INGRESSCOOKIE=bf1c0a996b6f7ae74b33bd9fa1bec2df|8d68d794a6fc61c1e56d2c3519c8c5f9'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
