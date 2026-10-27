/**
 * GET https://m.xnyauto.com/api.php
 * 接口模块：m-xnyauto-com-api
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "m-xnyauto-com-api",
  url: "https://m.xnyauto.com/api.php",
  method: "GET",
  headers: () => ({
  'Accept': 'application/json'
  }),
  data: (phoneNumber, times) => {
  return phoneNumber ? `mobile=${phoneNumber}&res%5Bappid%5D=2046995534&res%5Bret%5D=0&res%5Bticket%5D=tr03pMK0AxlZtgRuswN7T91pRA2Gkni1nSX9lbYe6-YJX53mAM8UOwD3RsESoViKR4xiaWJ79aN4II7pleBXQYvMkVhBSBBLrQQ6aysShpsRRuPTPWg9hDN619crkPLPimbi&res%5Brandstr%5D=%40ydy` : '';

  },
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
