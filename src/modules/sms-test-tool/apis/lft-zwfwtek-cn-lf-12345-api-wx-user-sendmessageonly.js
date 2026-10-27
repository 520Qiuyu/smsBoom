/**
 * POST_FORM https://lft.zwfwtek.cn/lf_12345_api/wx/user/sendMessageOnly
 * 接口模块：lft-zwfwtek-cn-lf-12345-api-wx-user-sendmessageonly
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "lft-zwfwtek-cn-lf-12345-api-wx-user-sendmessageonly",
  url: "https://lft.zwfwtek.cn/lf_12345_api/wx/user/sendMessageOnly",
  method: "POST_FORM",
  headers: (phoneNumber) => ({
  'Host': 'lft.zwfwtek.cn',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'll12345token': phoneNumber,
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://zrtest.zwfwtek.cn',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'http://zrtest.zwfwtek.cn/lf_12345_wx/login.html?openid=oYMLTstgGu0v0pZlRqAPrt_E01JY',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'userphone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
