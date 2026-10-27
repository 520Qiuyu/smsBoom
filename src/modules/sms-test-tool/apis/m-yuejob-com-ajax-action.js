/**
 * POST_FORM https://m.yuejob.com/ajax_action.php
 * 接口模块：m-yuejob-com-ajax-action
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "m-yuejob-com-ajax-action",
  url: "https://m.yuejob.com/ajax_action.php",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'm.yuejob.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://m.yuejob.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://m.yuejob.com/zhucejob.php',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=3pah7nohq4ckn4rk2k6t2v6t16; last_time=1737465298'
  }),
  data: (phoneNumber, times) => ({
  'action': 'get_phone_code',
  'phone': phoneNumber,
  'username': 'sb114514'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
