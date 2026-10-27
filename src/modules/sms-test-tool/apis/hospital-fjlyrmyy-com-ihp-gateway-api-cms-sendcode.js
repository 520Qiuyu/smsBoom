/**
 * POST_JSON https://hospital.fjlyrmyy.com/ihp-gateway/api/cms/sendCode
 * 接口模块：hospital-fjlyrmyy-com-ihp-gateway-api-cms-sendcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "hospital-fjlyrmyy-com-ihp-gateway-api-cms-sendcode",
  url: "https://hospital.fjlyrmyy.com/ihp-gateway/api/cms/sendCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'hospital.fjlyrmyy.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'xweb_xhr': '1',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Sec-Fetch-Site': 'cross-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://servicewechat.com/wxc8153d762f458c41/6/page-frame.html',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9'
  }),
  data: (phoneNumber, times) => ({
  'transType': '',
  'param': {
  "phone": phoneNumber,
  "codeType": "LOGIN",
  "miniOpenId": "o41bz5Tif8yAhus3xP5M4ypm3N0c"
  },
  'pageParam': {},
  'serviceId': '',
  'appId': '8a8a87106b72a440016b72bf44a10000',
  'deviceId': '04daccefc14033ed3d18f157a9f6d1d8',
  'signType': 'MD5',
  'termType': 'WX_MINI',
  'version': '1.0.0',
  'appVersion': '1.0.0',
  'termId': '1234',
  'alg': 'AES',
  'sign': 'rasfs2334214fasf',
  'timestamp': '1711476594145',
  'platId': 'T2023041400000000001',
  'isEncrypt': '0',
  'sessionId': ''

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
