/**
 * POST_FORM https://www.ttcdw.cn/m/common/getSmsCode
 * 接口模块：ttcdw-cn-m-common-getsmscode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "ttcdw-cn-m-common-getsmscode",
  url: "https://www.ttcdw.cn/m/common/getSmsCode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.ttcdw.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://www.ttcdw.cn',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.ttcdw.cn/m/no-auth/register?platformId=13145854983311&service=%2Fproject-index&industryId=&orgId=',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'HWWAFSESID=75039829cbc33b38ac; HWWAFSESTIME=1734675118239'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber,
  'flag': '1',
  'codeType': '0',
  'verifyType': '2',
  'refresh': 'true',
  'platformId': '13145854983311',
  'token': '61819250-be99-11ef-8dde-cfce3eb48bd4',
  'service': 'passport'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
