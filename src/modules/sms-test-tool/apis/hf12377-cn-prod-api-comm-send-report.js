/**
 * GET https://www.hf12377.cn/prod-api/comm/send/report
 * 接口模块：hf12377-cn-prod-api-comm-send-report
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "hf12377-cn-prod-api-comm-send-report",
  url: "https://www.hf12377.cn/prod-api/comm/send/report",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `phoneNumber=${phoneNumber}&channel=JUBAO_REPORT&uuid=88294d4ddbe84560a363453e530c49ae` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
