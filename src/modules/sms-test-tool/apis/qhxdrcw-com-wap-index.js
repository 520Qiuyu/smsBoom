/**
 * POST_FORM https://www.qhxdrcw.com/wap//index.php?c=ajax&a=regcode
 * 接口模块：qhxdrcw-com-wap-index
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "qhxdrcw-com-wap-index",
  url: "https://www.qhxdrcw.com/wap//index.php?c=ajax&a=regcode",
  method: "POST_FORM",
  headers: () => ({
  'Host': 'www.qhxdrcw.com',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://www.qhxdrcw.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://www.qhxdrcw.com/wap/c_register-usertype_1-step_2.html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'SECKEY_ABVK=E8e7IWJasv1KZh+hkGlGpxLITtT71NHgjNFYAtRJeS9QYVVcZ/PV8PjEl1sbdKT3mMH3qILxP4vS7h07Lkg8Gw%3D%3D; BMAP_SECKEY=E8e7IWJasv1KZh-hkGlGpxLITtT71NHgjNFYAtRJeS-kbc25Ols5l6yBGrKi7WtHfpOlu961LiN_i9PS6F_KnxSCPaMAv39u7rrUhejWLTH52ERDt4IVNjL1Z8DOw_yUzci3vOy8lZlfnoFgVVHxzyN5ayLrdsFV9uifbE76FSPtEiZZRV9otSnjZHGJzMVXjqwFNooTlWDJnRyaQcVdpw; did=2; fz_type=1; province=3411; cityid=0; three_cityid=0; cityname=%E8%A5%BF%E5%AE%81%E5%B8%82; sy_webname=%E8%A5%BF%E5%AE%81%E5%B8%82; sy_webtitle=%E8%A5%BF%E5%AE%81%E4%BA%BA%E6%89%8D%E7%BD%91; sy_logo=data%2Flogo%2F20210603%2F16315595637.png; sy_webkeyword=%E8%A5%BF%E5%AE%81%E5%A4%8F%E9%83%BD%E4%BA%BA%E6%89%8D%E7%BD%91; sy_webmeta=%E8%A5%BF%E5%AE%81%E4%BA%BA%E6%89%8D%E7%BD%91; style=default; sy_weburl=https%3A%2F%2Fwww.qhxdrcw.com; wap_bannerFlag=1'
  }),
  data: (phoneNumber, times) => ({
  'moblie': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
