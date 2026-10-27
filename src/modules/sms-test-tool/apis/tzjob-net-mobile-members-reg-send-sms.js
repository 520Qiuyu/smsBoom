/**
 * POST_FORM https://www.tzjob.net/mobile/members/reg_send_sms.html
 * 接口模块：tzjob-net-mobile-members-reg-send-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "tzjob-net-mobile-members-reg-send-sms",
  url: "https://www.tzjob.net/mobile/members/reg_send_sms.html",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.tzjob.net',
  'Connection': 'keep-alive',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://www.tzjob.net',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.tzjob.net/mobile/members/register.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=cspmgmvirpadqpqtq7o6qj6u81; think_language=zh-CN; think_template=default; SECKEY_ABVK=E8e7IWJasv1KZh+hkGlGpxLITtT71NHgjNFYAtRJeS/VI7PF0ZgotZkfsaSc9ZxSDDQinudOkSVaJUCDyYHrYg%3D%3D; cookie_lat=22.8226066; cookie_lng=108.37345083; BMAP_SECKEY=E8e7IWJasv1KZh-hkGlGpxLITtT71NHgjNFYAtRJeS-kbc25Ols5l6yBGrKi7WtHVYWadw3ln0wckP0UTYD5N0pk2nSqGdMEVGs-YWXT-GtDM_tQgp-CfP5_zcButpnQiSgrGBO-9wGhb65_peJmYX5NCorH_TGRHsVwJuFUDOoS-6LQQQjxpxJtCogM7HKdRwk0Zy7EmiSMtBHXGRC7iA; return_url=https%3A%2F%2Fwww.tzjob.net%2FMobile'
  }),
  data: (phoneNumber, times) => ({
  'sms_type': 'login',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
