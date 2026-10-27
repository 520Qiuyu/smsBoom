/**
 * POST_FORM https://www.zjzqy.org.cn/policy/sendMobileCode
 * 接口模块：zjzqy-org-cn-policy-sendmobilecode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "zjzqy-org-cn-policy-sendmobilecode",
  url: "https://www.zjzqy.org.cn/policy/sendMobileCode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.zjzqy.org.cn',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Origin': 'https://www.zjzqy.org.cn',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.zjzqy.org.cn/login/toRegister',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'JSESSIONID=75946CD28F1E9B311F1574CA7DF51BDF.ww'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
