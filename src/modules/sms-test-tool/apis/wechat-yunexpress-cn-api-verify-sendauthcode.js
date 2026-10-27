/**
 * POST_JSON https://wechat.yunexpress.cn/api/verify/sendauthcode
 * 接口模块：wechat-yunexpress-cn-api-verify-sendauthcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "wechat-yunexpress-cn-api-verify-sendauthcode",
  url: "https://wechat.yunexpress.cn/api/verify/sendauthcode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'wechat.yunexpress.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json;charset=UTF-8',
  'Origin': 'https://wechat.yunexpress.cn',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://wechat.yunexpress.cn/weixin/register/indexs.html?PromotionId=&sales_curr_code=&cos_id=',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'acw_tc=ac11000117375198850332709e0030c0fa65325f7ce8e6a2291f23444f2493'
  }),
  data: (phoneNumber, times) => ({
  'account': phoneNumber,
  'ImgCode': '',
  'type': '3'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
