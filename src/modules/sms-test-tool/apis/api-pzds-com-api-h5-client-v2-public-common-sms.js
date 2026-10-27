/**
 * POST_JSON https://api.pzds.com/api/h5-client/v2/public/common/sms
 * 接口模块：api-pzds-com-api-h5-client-v2-public-common-sms
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "api-pzds-com-api-h5-client-v2-public-common-sms",
  url: "https://api.pzds.com/api/h5-client/v2/public/common/sms",
  method: "POST_JSON",
  headers: () => ({
  'Host': 'api.pzds.com',
  'Connection': 'keep-alive',
  'PZPlatform': 'H5',
  'Random': '260470',
  'signSkip': 'false',
  'PZTimestamp': '1737262556229',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'PZOs': 'Android',
  'Content-Type': 'application/json',
  'PZVersion': '4.0.6',
  'sign': 'ef2dec19360162af320c3d03e73dbf85',
  'SKEY': 'CLIENT',
  'Accept': '*/*',
  'Origin': 'https://m7.pzds.com',
  'X-Requested-With': 'mark.via.gp',
  'Sec-Fetch-Site': 'same-site',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://m7.pzds.com/login?redirect=/center',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221947ceaa812f8-01f49f49f49f49e-2240076b-288000-1947ceaa815125%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%B8%B8%E6%88%8F%E4%BA%A4%E6%98%93%E7%BD%91%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fcn.bing.com%2Fsearch%3Fq%3D%E6%B8%B8%E6%88%8F%E4%BA%A4%E6%98%93%E7%BD%91%26FPIG%3D1EED5C0AACC8421C9970E08A2717E321%26first%3D29%26FORM%3DPORE%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk0N2NlYWE4MTJmOC0wMWY0OWY0OWY0OWY0OWUtMjI0MDA3NmItMjg4MDAwLTE5NDdjZWFhODE1MTI1In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%7D; acw_tc=ac11000117372625430037515e00d6348f8543e5ea6561236880422b84c159; ssxmod_itna=iqmx9DyDciiQDQNi7=itqe7QiORSK7K4DXDUkqiQGgDYq7=GFYDChKm1jxxegGixeDCYWg2Y4qRxGXK3KxiNDAxq0iDC8ejxx=9Y2qP=j0mD+3=KxR0qpCOLI6h3eWR/ZS9rR=4DTDbqDyDAtD0qDimDDgDA=DjdYD7kmGKxGImDbVGxGwWDxqLm3SDYYDmfRwKiomK2Y4AnUwGBxq8DerQY=kODh5eoon4Uad5FjwQ8DXKOTDzwODtqR=QeGmDQwOICbpljtX=+vqDuGGQkeGyE5q/rxq30YPfA4yMhhrWiD; ssxmod_itna2=iqmx9DyDciiQDQNi7=itqe7QiORSK7K4DXDUkqiQGgDYq7=GFYDChKm1jxxegGixeDCYWg2Y4qKxAErK5=AbqP=xj4YiNA8GiFAbx0HqL7cRp32XOVxSCq9S4FolOG6OXd=adxkH2SDPz7UZSwfxKYNiGBjGR8L3W7tPaLr6iW6xQCrYK8tmneuesiQ+R4eqbSxefDE0QYR5G3A0WDhn8Bv0WQ=m+dQQbqR0BSFyCa0ra0GhpkWeeeydoBD8hc9AN+ewQ3o1B25PWUG6k8eqKOf5eD'
  }),
  data: (phoneNumber, times) => ({
  'action': {
  "phone": phoneNumber,
  "smsTemplate": "LOGIN"
  }

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
