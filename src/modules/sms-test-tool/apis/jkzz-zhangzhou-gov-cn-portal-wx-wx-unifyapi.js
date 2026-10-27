/**
 * POST_FORM https://jkzz.zhangzhou.gov.cn/portal-wx/wx/unifyapi
 * 接口模块：jkzz-zhangzhou-gov-cn-portal-wx-wx-unifyapi
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "jkzz-zhangzhou-gov-cn-portal-wx-wx-unifyapi",
  url: "https://jkzz.zhangzhou.gov.cn/portal-wx/wx/unifyapi",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'jkzz.zhangzhou.gov.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://jkzz.zhangzhou.gov.cn',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://jkzz.zhangzhou.gov.cn/portal-wx/register/regPhone?phone=',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'JSESSIONID=FA7DB4B01EEE4CDF37D73EFF090DE00E'
  }),
  data: (phoneNumber, times) => ({
  'serviceId': 'portal.sms.send.verifycode',
  'phone': phoneNumber,
  'codeType': 'REGISTER'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
