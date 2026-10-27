/**
 * POST_FORM http://www.heyuan.gov.cn/hd/userManageAction/frontDesk/sendSmsValidationQuery.jspx
 * 接口模块：heyuan-gov-cn-hd-usermanageaction-frontdesk-sendsmsvalidationquery
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "heyuan-gov-cn-hd-usermanageaction-frontdesk-sendsmsvalidationquery",
  url: "http://www.heyuan.gov.cn/hd/userManageAction/frontDesk/sendSmsValidationQuery.jspx",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.heyuan.gov.cn',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://www.heyuan.gov.cn',
  'Referer': 'http://www.heyuan.gov.cn/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'clientlanguage=zh_CN; JSESSIONID=9836B38C0BE9D455A35FD1F93F9CCC46'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
