/**
 * POST_FORM https://www.24haowan.com/WebAjax/RegisterSms
 * 接口模块：24haowan-com-webajax-registersms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "24haowan-com-webajax-registersms",
  url: "https://www.24haowan.com/WebAjax/RegisterSms",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.24haowan.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://www.24haowan.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.24haowan.com/games/register',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': '_ga=GA1.2.890260392.1734434030; _gid=GA1.2.974711961.1734434030; PHPSESSID=bksrsblucjp55sp9rdc9uimler; MEIQIA_TRACK_ID=2qLFdA3uUtHKmCLAsBetk6QvnDY; MEIQIA_VISIT_ID=2qLFdACP0s8AlyfQBU7ZpQ1ymNV'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
