import "dotenv/config";
import yiche from "./modules/yiche.js";
import guazi from "./modules/guazi.js";
import dreamonline from "./modules/dreamonline.js";
// 173 条接口的全量封装（不常用可注释掉，单独跑：node src/modules/sms-test-tool/cli.js <手机号>）
import smsTestTool from "./modules/sms-test-tool/index.js";

const PHONE = process.env.PHONE;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const task = () => {
    yiche(PHONE);
    guazi(PHONE);
    dreamonline(PHONE);
    // 全量发散较猛（173 条 × repeat），默认只跑一轮，需要时取消注释
    smsTestTool(PHONE, { concurrency: 20 });
  };

  for (let i = 0; i < 10; i++) {
    task();
    await sleep(60000);
  }
};

main();
