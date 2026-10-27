/**
 * POST_FORM https://yhd.zxykt.cn/wx_hdy/sendSmsCode.do
 * 接口模块：yhd-zxykt-cn-wx-hdy-sendsmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "yhd-zxykt-cn-wx-hdy-sendsmscode",
  url: "https://yhd.zxykt.cn/wx_hdy/sendSmsCode.do",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'yhd.zxykt.cn',
  'Connection': 'keep-alive',
  'Accept': 'text/plain, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://yhd.zxykt.cn',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://yhd.zxykt.cn/wx_hdy/toRagisterPage.do?operName=%E6%AF%93%E7%92%9C%E9%A1%B6%E5%8C%BB%E9%99%A2%E7%BD%91%E7%BB%9C%E8%AE%A2%E9%A4%90%E5%B9%B3%E5%8F%B0&type=1&flag=true&forcedFollow=0',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'JSESSIONID=FFE1D9E22A9303D38E5D1F3A36F58EFE'
  }),
  data: (phoneNumber, times) => ({
  'telephone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
