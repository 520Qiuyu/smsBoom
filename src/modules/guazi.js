import axios from "axios";
import crypto from "crypto";
import { generateError, generateOk } from "../utils/index.js";

/**
 * 合并参数到查询字符串，并对对象参数进行序列化，避免重复参数
 * @param {string} t 现有查询字符串，如 "a=1&b=2"
 * @param {object} e 需合并的参数对象
 * @returns {string} 合并后的、对 * 号做 URL 编码的查询字符串
 */
function __guazi_captcha_sring__(phone) {
  const t = "";
  const e = {
    appkey: "4G6o6jQL",
    body: {
      appCode: "used_car",
      appScene: "modify_phone",
      phone: phone,
    },
    expires: String(Date.now()),
    nonce: "0",
  };
  let r = t,
    n = t.split("&").map(t => t.split("=")[0]);
  Object.keys(e).forEach(t => {
    if (!n.includes(t) && Object.prototype.hasOwnProperty.call(e, t)) {
      let n = e[t],
        o = "";
      "null" === n ||
        ((o = "object" == typeof n ? `${t}=${encodeURIComponent(JSON.stringify(n))}` : `${t}=${n}`),
        r ? (r += `&${o}`) : (r += `${o}`));
    }
  });
  return r.replace(/\*/g, "%2A");
}

const generateSignature = phone => {
  const key = "83ac2041dd7ad30";
  const message = __guazi_captcha_sring__(phone);

  // 1️⃣ HmacSHA256
  const hmac = crypto.createHmac("sha256", key).update(message, "utf8").digest("hex"); // ⚠️ 注意这里不要直接 hex，要 Buffer

  // 4️⃣ 截取
  const signature = hmac.substring(5, 15);
  return signature;
};

generateSignature("17607117684");

/**
 * 请求瓜子滑块验证码接口（guard-captcha）
 * @param {object} params - 参数对象
 * @param {string} params.phone - 手机号，如 "17607117684"
 * @param {string} [params.appCode="used_car"]
 * @param {string} [params.appScene="modify_phone"]
 * @param {object} [options] - 可选项
 * @param {string} [options.signature] - URL签名，不传则自动生成
 * @param {string} [options.appkey] - URL appkey，默认 "4G6o6jQL"
 * @param {string} [options.expires] - 过期时间戳，不传则当前时间戳
 * @param {string} [options.nonce] - nonce值，默认 "0"
 * @param {string} [options.cookies] - 覆盖默认Cookie
 * @returns {Promise<object>} - 响应体
 */
async function requestGuaziCaptcha(
  { phone, appCode = "used_car", appScene = "modify_phone" },
  options = {}
) {
  // Prepare URL param values
  const signature = options.signature || generateSignature(phone);
  const appkey = options.appkey || "4G6o6jQL";
  const expires = options.expires || String(Date.now());
  const nonce = options.nonce || "0";

  // Construct URL with query params
  const url = `https://guard-captcha.guazi.com/api/captcha/guard?signature=${encodeURIComponent(signature)}&appkey=${encodeURIComponent(appkey)}&expires=${encodeURIComponent(expires)}&nonce=${encodeURIComponent(nonce)}`;

  // Headers from the curl command
  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en,zh-CN;q=0.9,zh;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    origin: "https://www.guazi.com",
    pragma: "no-cache",
    priority: "u=1, i",
    referer: "https://www.guazi.com/",
    "sec-ch-ua": `"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"`,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": `"Windows"`,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
  };

  // Default cookie string from the curl, can be replaced with options.cookies
  const defaultCookies = [
    "gz_device_id=3ab22ba2-595b-4ab0-9d96-859859768404",
    "Hm_lvt_0bf5cb0ae5f54fc9554bc033dccb99b0=1778031522",
    "HMACCOUNT=7D8A8E5E6AAA7316",
    "sessionid=528f0f6b-ac0b-42f6-db9a-6ac9ea887897",
    "uuid=fd71601d-78fe-48df-a8ce-65b351d6c459",
    "puuid=c8dcc489-7cc7-4628-86d4-1c0696621099",
    "gcinfo=%7B%22l_c_d%22%3A%22gz%22%2C%22l_c_n%22%3A%22%E5%B9%BF%E5%B7%9E%22%2C%22l_c%22%3A16%2C%22s_c_d%22%3A%22gz%22%2C%22s_c_n%22%3A%22%E5%B9%BF%E5%B7%9E%22%2C%22s_c%22%3A%2216%22%2C%22g_c_d%22%3A%22gz%22%2C%22g_c_n%22%3A%22%E5%B9%BF%E5%B7%9E%22%2C%22g_c%22%3A%2216%22%7D",
    "cityDomain=gz",
    "guazitrackersessioncadata={%22guid%22:%22fd71601d-78fe-48df-a8ce-65b351d6c459%22}",
    "Hm_lpvt_0bf5cb0ae5f54fc9554bc033dccb99b0=1778032040",
    "cainfo=%7B%22ca_s%22%3A%22seo_google%22%2C%22ca_n%22%3A%22default%22%2C%22ca_medium%22%3A%22-%22%2C%22ca_term%22%3A%22-%22%2C%22ca_content%22%3A%22-%22%2C%22ca_campaign%22%3A%22-%22%2C%22ca_kw%22%3A%22-%22%2C%22ca_i%22%3A%22-%22%2C%22scode%22%3A%22-%22%2C%22landing%22%3A%221%22%2C%22guid%22%3A%22fd71601d-78fe-48df-a8ce-65b351d6c459%22%7D",
  ].join("; ");

  headers["cookie"] = options.cookies || defaultCookies;

  // POST body
  const body = {
    appCode,
    appScene,
    phone,
  };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    // Optionally provide more error info
    if (err.response) {
      throw new Error(
        `Guazi captcha request failed: ${err.response.status} ${err.response.statusText} - ${JSON.stringify(err.response.data)}`
      );
    }
    throw err;
  }
}

/**
 * 向瓜子二手车发送短信验证码请求（需先完成腾讯滑块验证）
 * @param {string} phone - 手机号，如 "17607117684"
 * @param {object} captcha - 腾讯验证码相关参数
 * @param {string} captcha.token - 验证码 token
 * @param {string} captcha.ticket - 验证码 ticket
 * @param {string} captcha.randstr - 验证码 randstr
 * @param {string} [captcha.captchaAppId] - 验证码 appId，默认 "2084038973"
 * @param {object} [options] - 可选参数，可覆盖默认值
 * @param {string} [options.signature] - URL 签名
 * @param {string} [options.appkey] - URL appkey
 * @param {string} [options.expires] - URL 过期时间戳
 * @param {string} [options.nonce] - URL nonce
 * @param {string} [options.source] - 来源，默认 "12"
 * @param {string} [options.cookies] - Cookie 字符串，可覆盖默认值
 * @returns {Promise<object>} - 响应体
 * @example
 * const res = await sendSmsCode("17607117684", {
 *   token: "eea5479d5a544d96833f050a378af583",
 *   ticket: "trerror_1005_2084038973_...",
 *   randstr: "@waudn1f4vy",
 * });
 * console.log(res);
 */
async function sendSmsCode(phone, captcha = {}, options = {}) {
  const { token, ticket, randstr, captchaAppId = "2084038973" } = captcha;

  const {
    signature = generateSignature("17607117684"),
    appkey = "4G6o6jQL",
    expires = String(Date.now()),
    nonce = "0",
    source = "12",
  } = options;

  const url = "https://user.guazi.com/sso/checkCaptchaAndSendSsoLoginCode";

  const params = { signature, appkey, expires, nonce };

  const body = new URLSearchParams({
    phone,
    captchaType: "tencent",
    token,
    ticket,
    randstr,
    captchaAppId,
    source,
  });

  const defaultCookie =
    "gz_device_id=3ab22ba2-595b-4ab0-9d96-859859768404; Hm_lvt_0bf5cb0ae5f54fc9554bc033dccb99b0=1778031522; Hm_lpvt_0bf5cb0ae5f54fc9554bc033dccb99b0=1778031522; HMACCOUNT=7D8A8E5E6AAA7316; sessionid=528f0f6b-ac0b-42f6-db9a-6ac9ea887897; uuid=fd71601d-78fe-48df-a8ce-65b351d6c459; guazitrackersessioncadata=%7B%22ca_kw%22%3A%22-%22%7D; cainfo=%7B%22ca_s%22%3A%22seo_google%22%2C%22ca_n%22%3A%22default%22%2C%22ca_medium%22%3A%22-%22%2C%22ca_term%22%3A%22-%22%2C%22ca_content%22%3A%22-%22%2C%22ca_campaign%22%3A%22-%22%2C%22ca_kw%22%3A%22-%22%2C%22ca_i%22%3A%22-%22%2C%22scode%22%3A%22-%22%2C%22guid%22%3A%22fd71601d-78fe-48df-a8ce-65b351d6c459%22%7D; puuid=c8dcc489-7cc7-4628-86d4-1c0696621099; gcinfo=%7B%22l_c_d%22%3A%22gz%22%2C%22l_c_n%22%3A%22%E5%B9%BF%E5%B7%9E%22%2C%22l_c%22%3A16%2C%22s_c_d%22%3A%22gz%22%2C%22s_c_n%22%3A%22%E5%B9%BF%E5%B7%9E%22%2C%22s_c%22%3A%2216%22%2C%22g_c_d%22%3A%22gz%22%2C%22g_c_n%22%3A%22%E5%B9%BF%E5%B7%9E%22%2C%22g_c%22%3A%2216%22%7D";

  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en,zh-CN;q=0.9,zh;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    Cookie: options.cookies || defaultCookie,
    origin: "https://www.guazi.com",
    pragma: "no-cache",
    priority: "u=1, i",
    referer: "https://www.guazi.com/",
    "sec-ch-ua": '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
  };

  try {
    const res = await axios.post(url, body.toString(), { headers, params });
    return res.data;
  } catch (e) {
    return { error: e?.response?.data || e.message || e };
  }
}

function generateTicket(i = 7457716926457503744) {
  return (
    "trerror_" +
    1005 +
    "_" +
    2084038973 +
    "_" +
    Math.floor(new Date().getTime() / 1e3) +
    (i ? "_" + i : "")
  );
}

async function main(phone) {
  const signature = generateSignature(phone);
  const randstr = "@".concat(Math.random().toString(36).substr(2));
  const ticket = generateTicket();
  const guardRes = await requestGuaziCaptcha({ phone, signature });
  if (guardRes.code !== 0) {
    console.error(guardRes.message);
    throw new Error(guardRes.message);
  }

  // 实际使用时需传入真实的腾讯验证码参数
  const res = await sendSmsCode(phone, {
    token: guardRes.data.token,
    ticket,
    randstr,
    captchaAppId: "2084038973",
  });
  console.log("res", res);
  if (res.code === 0) {
    console.log("短信发送成功");
    return generateOk(res.data);
  } else {
    return generateError(res.message);
  }
}

// main("17607117684");

export default main;
