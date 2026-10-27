/**
 * POST_JSON http://36.142.15.2:22017/plbmfw-webrest/rest/plcheckcode/getCheckCode
 * 接口模块：ip-36-142-15-2-p22017-plbmfw-webrest-rest-plcheckcode-getcheckcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ip-36-142-15-2-p22017-plbmfw-webrest-rest-plcheckcode-getcheckcode",
  url: "http://36.142.15.2:22017/plbmfw-webrest/rest/plcheckcode/getCheckCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': '36.142.15.2:22017',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/8555',
  'Content-Type': 'application/json;charest=UTF-8',
  'Origin': 'http://www.pingliang.gov.cn',
  'Referer': 'http://www.pingliang.gov.cn/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'token': 'Epoint_WebSerivce_**##0601',
  'params': {
  "mobile": phoneNumber
  }

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
