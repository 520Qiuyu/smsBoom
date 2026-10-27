/**
 * POST_JSON https://gateway.wt4pl.com/wtkm/getCaptcha
 * 接口模块：gateway-wt4pl-com-wtkm-getcaptcha
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "gateway-wt4pl-com-wtkm-getcaptcha",
  url: "https://gateway.wt4pl.com/wtkm/getCaptcha",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'gateway.wt4pl.com',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'deviceNo': '264e58b0-1553-46fa-8825-53c7f6c125ff',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Origin': 'https://platform.wt4pl.com',
  'Sec-Fetch-Site': 'same-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://platform.wt4pl.com/register',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'TALENT=63ac1d55-ac6f-454e-aadf-fceb963c4ee7'
  }),
  data: (phoneNumber, times) => ({
  'username': phoneNumber,
  'type': '1'

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
