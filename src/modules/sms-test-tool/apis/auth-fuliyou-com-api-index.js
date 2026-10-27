/**
 * GET https://auth.fuliyou.com/api//index/
 * 接口模块：auth-fuliyou-com-api-index
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "auth-fuliyou-com-api-index",
  url: "https://auth.fuliyou.com/api//index/",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `time=1734440153&phone=${phoneNumber}&type=xy.user.send.phone&sign=eeeb401eb9837dadfd4c135ba926ec0f&callback=jQuery34104582207158426126_1734440098471&_=1734440098474` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
