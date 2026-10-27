/**
 * GET https://m-lf.dcdapp.com/passport/web/send_code/
 * 接口模块：m-lf-dcdapp-com-passport-web-send-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "m-lf-dcdapp-com-passport-web-send-code",
  url: "https://m-lf.dcdapp.com/passport/web/send_code/",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `aid=1556&device_id=72970268243&master_aid=&user_unique_id=72970268243&os_version=Windows 10 x64&ma_version=5.10.279&app_name=wechat&data_from=tt_mp&device_platform=windows&device_type=microsoft&device_brand=microsoft&sdk_verison=3.0.2&api_version=2&version_code=0&city_name=郑州&gps_city_name=&type=24&mobile=${phoneNumber}` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
