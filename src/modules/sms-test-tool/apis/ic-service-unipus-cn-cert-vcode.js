/**
 * GET http://ic.service.unipus.cn/cert/vcode?phone=13800138000&districtNumber=86&_t=1793071624122&r=5942
 * 接口模块：ic-service-unipus-cn-cert-vcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ic-service-unipus-cn-cert-vcode",
  url: (phoneNumber, times) => {
  const timestamp = Date.now() + Math.floor(Math.random() * 1000); // 添加随机偏移
  const randomNum = Math.floor(Math.random() * 9000) + 1000;
  return `http://ic.service.unipus.cn/cert/vcode?phone=${phoneNumber}&districtNumber=86&_t=${timestamp}&r=${randomNum}`;
  },
  method: "GET",
  headers: () => ({
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  'Accept': '*/*',
  'Referer': 'http://ic.service.unipus.cn/'
  }),
  data: (phoneNumber, times) => ({}),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
