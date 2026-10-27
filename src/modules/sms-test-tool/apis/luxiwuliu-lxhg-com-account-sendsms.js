/**
 * POST_FORM https://luxiwuliu.lxhg.com/Account/SendSMS
 * 接口模块：luxiwuliu-lxhg-com-account-sendsms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "luxiwuliu-lxhg-com-account-sendsms",
  url: "https://luxiwuliu.lxhg.com/Account/SendSMS",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'luxiwuliu.lxhg.com',
  'Connection': 'keep-alive',
  'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
  'Accept': '*/*',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
  'sec-ch-ua-mobile': '?1',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'sec-ch-ua-platform': '"Android"',
  'Origin': 'https://luxiwuliu.lxhg.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://luxiwuliu.lxhg.com/Account/Login',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'HWWAFSESID=aeddb7316a344541ba; HWWAFSESTIME=1731077258038; WxOpenID=oFNEv6RNLr75fx55rgNFvyipeKlA; __RequestVerificationToken=GEq1R8bwhlkfVCpCvJzC8YLKGKYkw5hgsM-pV0IuAjxqbdGwkohEkGiNQzVJEFxF2RDEkqQvjXdvYBY0ulSdfs4AP0rV5X6uDlzT30-ivZ81'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber,
  'Type': '2',
  'LoginUserName': ''

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
