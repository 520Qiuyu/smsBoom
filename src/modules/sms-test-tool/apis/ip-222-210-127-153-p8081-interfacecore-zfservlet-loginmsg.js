/**
 * GET http://222.210.127.153:8081/InterfaceCore/ZfServlet/loginmsg
 * 接口模块：ip-222-210-127-153-p8081-interfacecore-zfservlet-loginmsg
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ip-222-210-127-153-p8081-interfacecore-zfservlet-loginmsg",
  url: "http://222.210.127.153:8081/InterfaceCore/ZfServlet/loginmsg",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `Tel=${phoneNumber}&idenCode=ZGAcad31GKC123` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
