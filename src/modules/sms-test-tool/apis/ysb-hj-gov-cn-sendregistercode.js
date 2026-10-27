/**
 * POST_FORM https://ysb.hj.gov.cn/sendRegisterCode.html
 * 接口模块：ysb-hj-gov-cn-sendregistercode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ysb-hj-gov-cn-sendregistercode",
  url: "https://ysb.hj.gov.cn/sendRegisterCode.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'ysb.hj.gov.cn.cn',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://ysb.hj.gov.cn',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://ysb.hj.gov.cn/register.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'wzws_sessionid=gjNiNmIyOKBnhKyAgWUxZWQ0OIAxMTIuNC4yMTAuMTY1; JSESSIONID=086BFF67E01F993E2B20443FA60D053C; Hm_lvt_4c22e1f7240d8416e25a3f26812294ff=1736748162; Hm_lpvt_4c22e1f7240d8416e25a3f26812294ff=1736748162; HMACCOUNT=8583DFADFC35475A'
  }),
  data: (phoneNumber, times) => ({
  'userMobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
