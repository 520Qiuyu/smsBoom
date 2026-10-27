/**
 * POST_FORM http://12345wx.qingdao.gov.cn:81/hotline12345Interface/CityWebSiteAppeal.ashx
 * 接口模块：12345wx-qingdao-gov-cn-p81-hotline12345interface-citywebsiteappeal
 * 由 scripts/split-endpoints.mjs 生成，请勿手工编辑。
 */
import { defineApi } from "../_shared.js";

export const endpoint = {
  name: "12345wx-qingdao-gov-cn-p81-hotline12345interface-citywebsiteappeal",
  url: "http://12345wx.qingdao.gov.cn:81/hotline12345Interface/CityWebSiteAppeal.ashx",
  method: "POST_FORM",
  headers: () => ({
  'Host': '12345wx.qingdao.gov.cn:81',
  'Connection': 'keep-alive',
  'Accept': '*/*',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309062b) XWEB/9079',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'http://12345wx.qingdao.gov.cn:81',
  'Referer': 'http://12345wx.qingdao.gov.cn:81/hotline12345/szfwz/base_submit.htm',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221945424dd251df-017980e0bf08c77-4e383c5e-288000-1945424dd2786%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%7D%2C%22%24device_id%22%3A%221945424dd251df-017980e0bf08c77-4e383c5e-288000-1945424dd2786%22%7D; FanJianChange=jian; _trs_uv=m5rtzujd_4357_ba02',
  }),
  data: (phoneNumber, times) => ({
  'opreate': 'szf_wz_base_Yzm',
  'lianxidianhua': phoneNumber

  }),
};

/** api(phone, options) 直接发送；api.build(phone) 只构建请求 */
export default defineApi(endpoint);
