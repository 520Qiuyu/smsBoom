/**
 * POST_FORM https://wxpay-web.yixincapital.com/wxpay-web/minBasis/verificationCode
 * 接口模块：wxpay-web-yixincapital-com-wxpay-web-minbasis-verificationcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wxpay-web-yixincapital-com-wxpay-web-minbasis-verificationcode",
  url: "https://wxpay-web.yixincapital.com/wxpay-web/minBasis/verificationCode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'wxpay-web.yixincapital.com',
  'Connection': 'keep-alive',
  'xweb_xhr': '1',
  'cookie': '',
  'yixin': '63f0a60118a1e90f4844c666465ba5b0',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/8555',
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wxc5bea8c2c3586398/70/page-frame.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'openId': 'IzaKfsCaIjNAhbSJ8mTaJSWPbQJDKW1IidEbQoPPIYE%3D',
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
