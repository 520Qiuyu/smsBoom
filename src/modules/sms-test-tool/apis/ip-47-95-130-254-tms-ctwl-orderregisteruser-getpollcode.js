/**
 * POST_FORM http://47.95.130.254/tms-ctwl/orderRegisterUser/getPollCode
 * 接口模块：ip-47-95-130-254-tms-ctwl-orderregisteruser-getpollcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ip-47-95-130-254-tms-ctwl-orderregisteruser-getpollcode",
  url: "http://47.95.130.254/tms-ctwl/orderRegisterUser/getPollCode",
  method: "POST_FORM",
  headers: () => ({
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'openid': 'oXalBt56PCHydrOSENofeScQIKHE',
  'appId': 'wx9cfe64df69ecd34c',
  'terminal': 'Android',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://gzh.scmmgr.com',
  'X-Requested-With': 'com.tencent.mn',
  'Referer': 'http://gzh.scmmgr.com/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'mobileNo': phoneNumber,
  'machineId': 'oXalBt56PCHydrOSENofeScQIKHE',
  'tenantId': '101',
  'companyId': '1001',
  'terminal': 'Android',
  'module': 'login'

    }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
