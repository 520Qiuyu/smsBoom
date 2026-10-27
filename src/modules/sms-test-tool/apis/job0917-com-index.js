/**
 * POST_FORM https://www.job0917.com/index.php?m=register&c=regmoblie
 * 接口模块：job0917-com-index
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "job0917-com-index",
  url: "https://www.job0917.com/index.php?m=register&c=regmoblie",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.job0917.com',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://www.job0917.com',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Connection': 'keep-alive',
  'Referer': 'https://www.job0917.com/register/usertype_1-step_2.html',
  'Cookie': 'PHPSESSID=vttrgu783811klfenpt0a7ne67; pc_bannerFlag=1'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
