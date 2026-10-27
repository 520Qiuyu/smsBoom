/**
 * POST_FORM http://www.xiangxiang.gov.cn/e/extend/member/send_mobile_code.php
 * 接口模块：xiangxiang-gov-cn-e-extend-member-send-mobile-code
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "xiangxiang-gov-cn-e-extend-member-send-mobile-code",
  url: "http://www.xiangxiang.gov.cn/e/extend/member/send_mobile_code.php",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.xiangxiang.gov.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'http://www.xiangxiang.gov.cn',
  'Referer': 'http://www.xiangxiang.gov.cn/e/member/register/index.php?groupid=1&button=%CF%C2%D2%BB%B2%BD',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
  }),
  data: (phoneNumber, times) => ({
  'sms_type': 'register',
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
