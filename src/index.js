import yiche from "./modules/yiche.js";
import guazi from "./modules/guazi.js";
import dreamonline from "./modules/dreamonline.js";

const PHONE = "17607117684";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const task = () => {
    yiche(PHONE);
    guazi(PHONE);
    dreamonline(PHONE);
  };

  for (let i = 0; i < 10; i++) {
    task();
    await sleep(60000);
  }
};

main();
