/**
 * POST_FORM https://pc.alayunchina.com/baseApi/common/sendCodeRequest
 * 接口模块：pc-alayunchina-com-baseapi-common-sendcoderequest
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "pc-alayunchina-com-baseapi-common-sendcoderequest",
  url: "https://pc.alayunchina.com/baseApi/common/sendCodeRequest",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'pc.alayunchina.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://pc.alayunchina.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://pc.alayunchina.com/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber,
  'terminal_type': '1',
  'type': '登录',
  'isRegister': '1'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
