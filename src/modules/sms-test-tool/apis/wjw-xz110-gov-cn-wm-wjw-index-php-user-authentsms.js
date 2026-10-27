/**
 * POST_FORM http://wjw.xz110.gov.cn/wm_wjw/index.php/user/authentSms/?
 * 接口模块：wjw-xz110-gov-cn-wm-wjw-index-php-user-authentsms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wjw-xz110-gov-cn-wm-wjw-index-php-user-authentsms",
  url: "http://wjw.xz110.gov.cn/wm_wjw/index.php/user/authentSms/?",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'wjw.xz110.gov.cn',
  'Connection': 'keep-alive',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 13; V2148A Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.103 Mobile Safari/537.36 XWEB/1300149 MMWEBSDK/20240802 MMWEBID/6569 MicroMessenger/8.0.53.2740(0x2800353F) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://wjw.xz110.gov.cn',
  'Referer': 'http://wjw.xz110.gov.cn/wm_wjw/index.php/user/authent_infoview?jump=jqtxz',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'auth_sms_timestamp=1734689927017; PHPSESSID=3mjqqll69igmjds0j5fes00cm3'
  }),
  data: (phoneNumber, times) => ({
  'openid': 'oU0hswLvSOn8y2HyGanj1fPvU6pY',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
