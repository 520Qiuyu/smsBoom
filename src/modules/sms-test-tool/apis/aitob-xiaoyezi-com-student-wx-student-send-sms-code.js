/**
 * GET https://aitob.xiaoyezi.com/student_wx/student/send_sms_code
 * 接口模块：aitob-xiaoyezi-com-student-wx-student-send-sms-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "aitob-xiaoyezi-com-student-wx-student-send-sms-code",
  url: "https://aitob.xiaoyezi.com/student_wx/student/send_sms_code",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobile=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
