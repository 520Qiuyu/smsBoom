import axios from "axios";
import { generateError, generateOk } from "../utils/index.js";

/**
 * 向梦在线（mxdxedu.com）发送获取手机验证码请求
 * @param {string} phone - 手机号，如 "17607117684"
 * @param {object} [options] - 可选参数，可覆盖默认值
 * @param {string} [options.requestType] - 请求类型，默认 "2"
 * @param {string} [options.isRegister] - 是否注册，默认 "0"
 * @param {string} [options.imgCode] - 图片验证码，默认 "9999"
 * @param {string} [options.cookies] - Cookie 字符串，可覆盖默认值
 * @returns {Promise<object>} - 响应体
 * @example
 * const res = await sendPhoneCode("17607117684");
 * console.log(res);
 */
async function sendPhoneCode(phone, options = {}) {
  const { requestType = "2", isRegister = "0", imgCode = "9999" } = options;

  const url = "https://www.mxdxedu.com/api/system/pc/login/notAuth/getPhoneRegisterCode";

  const params = {
    username: phone,
    requestType,
    isRegister,
    imgCode,
  };

  const defaultCookie = "p_h5_u=4CA3033E-0924-4B91-9DD0-B664C4F8177B";

  const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en,zh-CN;q=0.9,zh;q=0.8",
    Authorization: "",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Content-Length": "0",
    Cookie: options.cookies || defaultCookie,
    Origin: "https://www.mxdxedu.com",
    Pragma: "no-cache",
    Referer: "https://www.mxdxedu.com/forget",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "sec-ch-ua": '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    token: "",
  };

  try {
    const res = await axios.post(url, null, { headers, params });
    return res.data;
  } catch (e) {
    return { error: e?.response?.data || e.message || e };
  }
}

async function main(phone) {
  const res = await sendPhoneCode(phone);
  console.log("res", res);
  if (res.code === 200) {
    console.log("短信发送成功");
    return generateOk(res.showMsg);
  } else {
    return generateError(res.error || res.message);
  }
}

main("17607117684");

export default main;
