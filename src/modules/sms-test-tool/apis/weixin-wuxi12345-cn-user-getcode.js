/**
 * POST_JSON http://weixin.wuxi12345.cn/User/GetCode
 * 接口模块：weixin-wuxi12345-cn-user-getcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "weixin-wuxi12345-cn-user-getcode",
  url: "http://weixin.wuxi12345.cn/User/GetCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'weixin.wuxi12345.cn',
  'Connection': 'keep-alive',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
  'Origin': 'http://weixin.wuxi12345.cn',
  'X-requested-with': 'mark.via.gp',
  'Referer': 'http://weixin.wuxi12345.cn/dist/index.html?v=2024121001/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'edr_session_verify=9a10434a613ec23e0c0861bab7b6237f'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber,
  'openid': 'o6eyXjvajcL0czemDG2wYgxAjcf4'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
