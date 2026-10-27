/**
 * POST_JSON https://zyjy.sdei.edu.cn/xjxlq/api/sdzz/user/registrationCode
 * 接口模块：zyjy-sdei-edu-cn-xjxlq-api-sdzz-user-registrationcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "zyjy-sdei-edu-cn-xjxlq-api-sdzz-user-registrationcode",
  url: "https://zyjy.sdei.edu.cn/xjxlq/api/sdzz/user/registrationCode",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'zyjy.sdei.edu.cn',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/plain, */*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/json',
  'Origin': 'https://zyjy.sdei.edu.cn',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://zyjy.sdei.edu.cn/xjxlq/',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'SF_Cookie_Cst_1680=1a0caa434d75d9b0fade81ab4986d46d; JSESSIONID=041C92DD3E82D41202D25C86B8DCC10C; SF_Cookie_Cst_1647=c8c9b50a9ec33ef81348d0424643b787'
  }),
  data: (phoneNumber, times) => ({
  'mobile': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
