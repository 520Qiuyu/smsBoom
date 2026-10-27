/**
 * POST_JSON http://scm.qlx56.com/gateway/scm-basic/v1/msgRecord/sendAuthCode
 * 接口模块：scm-qlx56-com-gateway-scm-basic-v1-msgrecord-sendauthcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "scm-qlx56-com-gateway-scm-basic-v1-msgrecord-sendauthcode",
  url: "http://scm.qlx56.com/gateway/scm-basic/v1/msgRecord/sendAuthCode",
  method: "POST_JSON",
  headers: () => ({
  'Content-Type': 'application/json; charset=UTF-8',
  'Accept': '*/*',
  'X-Requested-With': 'com.tencent.mn',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber,
  'tenantCode': '60087',
  'openId': 'oapZHs4qwfJJEXDIrFhnx62bPDiY'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
