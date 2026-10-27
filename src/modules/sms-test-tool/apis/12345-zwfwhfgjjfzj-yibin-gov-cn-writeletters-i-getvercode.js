/**
 * POST_FORM http://12345.zwfwhfgjjfzj.yibin.gov.cn/WriteLetters/i_GetVerCode/
 * 接口模块：12345-zwfwhfgjjfzj-yibin-gov-cn-writeletters-i-getvercode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "12345-zwfwhfgjjfzj-yibin-gov-cn-writeletters-i-getvercode",
  url: "http://12345.zwfwhfgjjfzj.yibin.gov.cn/WriteLetters/i_GetVerCode/",
  method: "POST_FORM",
  headers: () => ({
  'Host': '12345.zwfwhfgjjfzj.yibin.gov.cn',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://12345.zwfwhfgjjfzj.yibin.gov.cn',
  'Referer': 'http://12345.zwfwhfgjjfzj.yibin.gov.cn/WriteLetters/WriteLetter',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'ASP.NET_SessionId=lfkaqottum1zkvatwvpbqrau'
  }),
  data: (phoneNumber, times) => ({
  'Tel': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
