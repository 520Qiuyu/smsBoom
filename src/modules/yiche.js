import axios from "axios";
import { createHash } from "crypto";
import { generateError, generateOk } from "../utils/index.js";

/**
 * 封装发送短信验证码请求
 * @param {string} encryptedMobile - 已加密后的手机号，如"93-FC-fVQKFDPuSo1dKkrA=="
 * @param {object} [options] - 可选参数如 reqid、xSign、xTimestamp、userGuid、cookies，可以覆盖默认值
 * @returns {Promise<object>} - 响应体
 */
async function sendLoginSms(encryptedMobile, options = {}) {
  const data = {
    cid: "508",
    param: {
      mobile: encryptedMobile,
    },
  };
  const { timestamp, reqid, xSign } = options;

  // 默认值，部分参数可被 options 覆盖
  const defaultHeaders = {
    Accept: "*/*",
    "Accept-Language": "en,zh-CN;q=0.9,zh;q=0.8",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    Origin: "https://i.yiche.com",
    Pragma: "no-cache",
    Referer:
      "https://i.yiche.com/authenservice/login.html?returnurl=https%3A%2F%2Fwww.yiche.com%2F",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    cid: "508",
    "content-type": "application/json;charset=UTF-8",
    encrypttype: "2",
    reqid: reqid || "4f73d173ba5362712e96fcee1acbde08",
    "sec-ch-ua": '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "x-city-id": options.xCityId || "",
    "x-ip-address": options.xIpAddress || "",
    "x-platform": "pc",
    "x-sign": xSign || "54fa99c7c78b7870f8363ca982cd73e3",
    "x-timestamp": timestamp,
    "x-user-guid": generateGuid(),
  };

  // 解析或传入 cookies 字符串
  const defaultCookie =
    "isWebP=true; locatecity=440100; bitauto_ipregion=2001%3A250%3A3002%3A21f2%3A90c%3Ad090%3Af716%3A3363%3A%E5%B9%BF%E4%B8%9C%E7%9C%81%E5%B9%BF%E5%B7%9E%E5%B8%82%3B501%2C%E5%B9%BF%E5%B7%9E%E5%B8%82%2Cguangzhou; CIGUID=ebda09b0-1457-4e8e-a653-52e3c044193d; selectcity=440100; selectcityid=501; selectcityName=%E5%B9%BF%E5%B7%9E; selectcityPinyin=guangzhou; auto_id=e01c8fc883d03038996d6f67f861daf7; CIGDCID=8YGMK88dy2X5YHcdeh5MNfX3kDPskKne; Hm_lvt_610fee5a506c80c9e1a46aa9a2de2e44=1777509899; HMACCOUNT=7D8A8E5E6AAA7316; UserGuid=ebda09b0-1457-4e8e-a653-52e3c044193d; pageCount=1; suid=8y3mfj6t0gqt7cmr9jvypgmdq6gvqhab; Hm_lpvt_610fee5a506c80c9e1a46aa9a2de2e44=1777509901";
  const headers = {
    ...defaultHeaders,
    Cookie: options.cookies || defaultCookie,
  };

  const url = "https://mgw.yiche.com/site_api/current/api/login/send_login_sms";
  try {
    const res = await axios.post(url, data, {
      headers,
    });
    return res.data;
  } catch (e) {
    // 网络或业务错误
    return { error: e?.response?.data || e.message || e };
  }
}

// 模拟 Encrypt 加密算法（CryptoJS 方式的 AES-ECB/PKCS7，base64 + URL安全）

import crypto from "crypto";

/**
 * 模拟原页面 Encrypt 加密实现
 * @param {string|object} word 需加密内容
 * @param {string} key 密钥 (16/24/32字节)
 * @param {string} iv IV(可选，ECB模式实际未用)
 * @returns {string} 加密且 URL 安全的字符串
 */
function EncryptPhone(word, key = "20mk22w01y12ss1q", iv = "") {
  if (typeof word !== "string") {
    word = JSON.stringify(word);
  }
  // ECB模式，IV其实无效
  const cipher = crypto.createCipheriv("aes-128-ecb", Buffer.from(key, "utf8"), null);
  cipher.setAutoPadding(true);
  let encrypted = cipher.update(word, "utf8", "base64");
  encrypted += cipher.final("base64");
  // base64 替换为 URL 安全方案
  return encrypted.replace(/\+/g, "-").replace(/\//g, "_");
}

/**
 * 生成guid (如: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
 * @returns {string}
 */
function generateGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = (Math.random() * 16) | 0,
      n = e === "x" ? t : (t & 0x3) | 0x8;
    return n.toString(16);
  });
}

async function main(phone) {
  const encryptedMobile = EncryptPhone(phone);
  const timestamp = new Date().getTime();
  const i = JSON.stringify({ mobile: encryptedMobile });
  const o = "19DDD1FBDFF065D3A4DA777D2D7A81EC";
  const n = "cid=" + 508 + "&param=" + i + o + timestamp;
  console.log("encryptedMobile", encryptedMobile);
  const options = {
    reqid: createHash("md5")
      .update(String(Math.random() + timestamp), "utf8")
      .digest("hex"),
    timestamp,
    // md5(n)
    xSign: createHash("md5").update(n, "utf8").digest("hex"),
    cookies:
      "isWebP=true; locatecity=440100; bitauto_ipregion=2001%3A250%3A3002%3A21f2%3A90c%3Ad090%3Af716%3A3363%3A%E5%B9%BF%E4%B8%9C%E7%9C%81%E5%B9%BF%E5%B7%9E%E5%B8%82%3B501%2C%E5%B9%BF%E5%B7%9E%E5%B8%82%2Cguangzhou; CIGUID=ebda09b0-1457-4e8e-a653-52e3c044193d; selectcity=440100; selectcityid=501; selectcityName=%E5%B9%BF%E5%B7%9E; selectcityPinyin=guangzhou; auto_id=e01c8fc883d03038996d6f67f861daf7; CIGDCID=8YGMK88dy2X5YHcdeh5MNfX3kDPskKne; Hm_lvt_610fee5a506c80c9e1a46aa9a2de2e44=1777509899; HMACCOUNT=7D8A8E5E6AAA7316; UserGuid=ebda09b0-1457-4e8e-a653-52e3c044193d; pageCount=1; suid=8y3mfj6t0gqt7cmr9jvypgmdq6gvqhab; Hm_lpvt_610fee5a506c80c9e1a46aa9a2de2e44=1777509901",
  };
  const res = await sendLoginSms(encryptedMobile, options);
  console.log("res", res);
  if (res.status === "1") {
    console.log("短信发送成功");
    return generateOk(res.data);
  } else {
    return generateError(res.message);
  }
}

main("17607117684");

export default main;
