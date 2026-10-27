/**
 * POST_JSON http://jmesp.com/api/sms/send
 * 接口模块：jmesp-com-api-sms-send
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "jmesp-com-api-sms-send",
  url: "http://jmesp.com/api/sms/send",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'jmesp.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json;charset=UTF-8',
  'Origin': 'http://jmesp.com',
  'Referer': 'http://jmesp.com/index/user/register.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'think_var=zh-cn'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber,
  'event': 'register'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
