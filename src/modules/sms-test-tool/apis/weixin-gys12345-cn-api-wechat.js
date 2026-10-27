/**
 * POST_FORM http://weixin.gys12345.cn/api/wechat.php
 * 接口模块：weixin-gys12345-cn-api-wechat
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "weixin-gys12345-cn-api-wechat",
  url: "http://weixin.gys12345.cn/api/wechat.php",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'weixin.gys12345.cn',
  'Connection': 'keep-alive',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*',
  'Origin': 'http://weixin.gys12345.cn',
  'X-Requested-With': 'mark.via.gp',
  'Referer': 'http://weixin.gys12345.cn/wechat/index/index.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'PHPSESSID=27js5e62n3uksesh52nobe7iv4'
  }),
  data: (phoneNumber, times) => ({
  'act': 'ms_vel_code',
  'src_type': '1',
  'phone': phoneNumber,
  'mac': 'fc06b32ecb3f683973ef2a138aab2317',
  'ext_v': 'gh_95566aa608c4',
  'phone_number': '12329'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
