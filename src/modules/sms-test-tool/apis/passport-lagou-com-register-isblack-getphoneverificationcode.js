/**
 * POST_FORM https://passport.lagou.com/register/isBlack/getPhoneVerificationCode.json
 * 接口模块：passport-lagou-com-register-isblack-getphoneverificationcode
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "passport-lagou-com-register-isblack-getphoneverificationcode",
  url: "https://passport.lagou.com/register/isBlack/getPhoneVerificationCode.json",
  method: "POST_FORM",
  headers: () => ({
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Connection': 'keep-alive',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Cookie': 'sajssdk_2015_cross_new_user=1; sensorsdata2015session=%7B%7D; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219a0b33de1455-069e533efb60a1-26061851-1327104-19a0b33de15250%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24os%22%3A%22Windows%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A%22141.0.0.0%22%7D%2C%22%24device_id%22%3A%2219a0b33de1455-069e533efb60a1-26061851-1327104-19a0b33de15250%22%7D; JSESSIONID=ABAACCCACDJABAI1A44DB3B7419F44B02A0DE49F5E0B51A',
  'Host': 'passport.lagou.com',
  'Origin': 'https://www.lagou.com',
  'Referer': 'https://www.lagou.com/',
  'Sec-Ch-Ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-site',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  'X-Anit-Forge-Code': '0a7c3427-ba10-4493-b804-90d92b30fded',
  'X-Anit-Forge-Token': 'a80eaadb-4433-49d7-b03f-fa22616a3604',
  'X-K-Header': 'HBg2VZzDM6+9blzkYP8kLDubKqT0BPXe2UV/nwzx+3BuES0wk4zTK9P2pxGxcfwK',
  'X-Requested-With': 'XMLHttpRequest',
  'X-S-Header': 'TYfAfmTlleE0fTQdQfCE4wyM05keZp27x0cIvCwfGFT9oe83eFEKrLEVJDj/LZa7ge0p7CT97rkYS2dsye5wYgFxr05ePRox1Sd09Tz59eUUjIqGffHu+m0S9pmjrrjmyQqGLPs151XdvvlxyxD8GQ==',
  'X-Ss-Req-Header': '{"secret":"HBg2VZzDM6+9blzkYP8kLDubKqT0BPXe2UV/nwzx+3BuES0wk4zTK9P2pxGxcfwK"}'
  }),
  data: (phoneNumber, times) => ({
  'phone': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
