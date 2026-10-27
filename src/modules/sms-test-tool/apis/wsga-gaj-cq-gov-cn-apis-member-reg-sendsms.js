/**
 * POST_JSON https://wsga.gaj.cq.gov.cn/apis/member/reg/sendsms
 * 接口模块：wsga-gaj-cq-gov-cn-apis-member-reg-sendsms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wsga-gaj-cq-gov-cn-apis-member-reg-sendsms",
  url: "https://wsga.gaj.cq.gov.cn/apis/member/reg/sendsms",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'wsga.gaj.cq.gov.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'Cache-Control': 'no-cache',
  'timestamp': '17347401619995',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/8555',
  'oauth': '05f2f50aad2ed46828d6acd718f6a7fa27280d1522236070675b8d1a9dffa8b7d5',
  'Origin': 'https://wsga.gaj.cq.gov.cn',
  'X-Requested-With': 'mark.via.gp',
  'Referer': 'https://wsga.gaj.cq.gov.cn/weixin/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': '_trs_uv=m3d01h5b_4338_8bus'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber,
  'type': 'req'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
