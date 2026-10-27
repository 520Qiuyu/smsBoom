/**
 * POST_FORM https://www.gzrcw.net/m/index.php?
 * 接口模块：gzrcw-net-m-index
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "gzrcw-net-m-index",
  url: "https://www.gzrcw.net/m/index.php?",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.gzrcw.net',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://www.gzrcw.net',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.gzrcw.net/m/index.php?mod=register&cityid=0',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'ebt5__fcityid=305; ebt5__returnurl=https%253A%252F%252Fwww.gzrcw.net%252Fm%252Findex.php%253Fmod%253Dregister%2526cityid%253D0'
  }),
  data: (phoneNumber, times) => ({
  'phonenum': phoneNumber,
  'mod': 'sendsms'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
