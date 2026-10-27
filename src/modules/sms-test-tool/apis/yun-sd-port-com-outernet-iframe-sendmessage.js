/**
 * POST_FORM https://yun.sd-port.com/outernet/iframe/sendMessage
 * 接口模块：yun-sd-port-com-outernet-iframe-sendmessage
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "yun-sd-port-com-outernet-iframe-sendmessage",
  url: "https://yun.sd-port.com/outernet/iframe/sendMessage",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'yun.sd-port.com',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 13; V2148A Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.103 Mobile Safari/537.36 XWEB/1300149 MMWEBSDK/20240802 MMWEBID/6569 MicroMessenger/8.0.53.2740(0x2800353F) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://yun.sd-port.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://yun.sd-port.com/outernet/iframe/userRegisterNew?sign=4A0B58BB91A4FB0BA0C063AF2F5C9DCE&nonce_str=vtlLFikQwL2ltfLsW2cDOIcHEUmiCBGJ&platform_flag=864082005908783104',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'JSESSIONID=80a80db1-6511-40fd-b7ff-662d5dc32af7'
  }),
  data: (phoneNumber, times) => ({
  'userTel': phoneNumber,
  'userId': ''

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
