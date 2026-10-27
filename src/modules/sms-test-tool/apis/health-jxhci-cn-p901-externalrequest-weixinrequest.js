/**
 * POST_FORM http://health.jxhci.cn:901/ExternalRequest/WeiXinRequest.ashx
 * 接口模块：health-jxhci-cn-p901-externalrequest-weixinrequest
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "health-jxhci-cn-p901-externalrequest-weixinrequest",
  url: "http://health.jxhci.cn:901/ExternalRequest/WeiXinRequest.ashx",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'health.jxhci.cn:901',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://health.jxhci.cn:901',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'http://health.jxhci.cn:901/ExternalRequest/Weixin/OneSencondReg.htm?USERNAME=ohJ8RwSg0sfLpITrwzO_BgxMt0s0&SYZLX=B&dd=1735975912175',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'Action': 'SendRegCode',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
