/**
 * POST_FORM https://auth.eheren.com/service-authentication/register/sendVerificationCode
 * 接口模块：auth-eheren-com-service-authentication-register-sendverificationcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "auth-eheren-com-service-authentication-register-sendverificationcode",
  url: "https://auth.eheren.com/service-authentication/register/sendVerificationCode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'auth.eheren.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'phsSign': 'Wg/l8rLswdfvSjaSELHimb9PwuSvQuff',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Origin': 'https://h5.eheren.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://h5.eheren.com/yixing_pc/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'cellPhoneNum': phoneNumber,
  'sysCode': '1001048',
  'type': '6',
  'token': ''

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
