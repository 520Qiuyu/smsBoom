/**
 * POST_FORM https://hhhtzp.cgzjw.com/app/index.php?c=global&a=sendyzm&refererUrl=https%3A%2F%2Fhhhtzp.cgzjw.com%2Fh5%2F%23%2Fpages_my%2Fmy%2Fmy_login&httpUserAgent=ejobh5%2F10262%7Cdevice%3Aandroid%2FAndroid%2013%2FV2148A%2Fundevid%2F360*800%7Cuni%3A3.1.22%2F0%2F0&thistimestamp=1737437688&secretValue=54d132da8108c947283e70fab99a85a3
 * 接口模块：hhhtzp-cgzjw-com-app-index
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "hhhtzp-cgzjw-com-app-index",
  url: "https://hhhtzp.cgzjw.com/app/index.php?c=global&a=sendyzm&refererUrl=https%3A%2F%2Fhhhtzp.cgzjw.com%2Fh5%2F%23%2Fpages_my%2Fmy%2Fmy_login&httpUserAgent=ejobh5%2F10262%7Cdevice%3Aandroid%2FAndroid%2013%2FV2148A%2Fundevid%2F360*800%7Cuni%3A3.1.22%2F0%2F0&thistimestamp=1737437688&secretValue=54d132da8108c947283e70fab99a85a3",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'hhhtzp.cgzjw.com',
  'Connection': 'keep-alive',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Origin': 'https://hhhtzp.cgzjw.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://hhhtzp.cgzjw.com/h5/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=v8hb8c7vt5mci9dk8nbqbc0j93'
  }),
  data: (phoneNumber, times) => ({
  'type': 'login',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
