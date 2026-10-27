/**
 * POST_FORM https://12345.zjzs.zhoushan.gov.cn/yjxd/weixin/ajax/reg.aspx?action=checkLoginMobile2
 * 接口模块：12345-zjzs-zhoushan-gov-cn-yjxd-weixin-ajax-reg
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "12345-zjzs-zhoushan-gov-cn-yjxd-weixin-ajax-reg",
  url: "https://12345.zjzs.zhoushan.gov.cn/yjxd/weixin/ajax/reg.aspx?action=checkLoginMobile2",
  method: "POST_FORM",
  headers: () => ({
  'Host': '12345.zjzs.zhoushan.gov.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://12345.zjzs.zhoushan.gov.cn',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://12345.zjzs.zhoushan.gov.cn/yjxd/weixin/helpOnline/complain.aspx',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'ASP.NET_SessionId=kfmh3ed0lqjceyky2wetqw0l'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
