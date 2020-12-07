const Config = require('./file.js')
const puppeteer = require('puppeteer');
const readline = require('readline');
const util = require('util');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const rlQuestion = util.promisify(rl.question);

// 配置参数
const login_url = 'https://github.com/login';
const userName = Config.userName;
const pwd = '';

async function readTerminal() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  // rl.question('请输入密码：', (pwd) => {
  //   console.log(2)
  //   // TODO：将答案记录在数据库中。
  //   console.log(`密码：${pwd}`);
  // });

  let result = await new Promise((resolve, reject) => {
    rl.question('请输入密码：', (pwd) => {
      console.log(2)
      // TODO：将答案记录在数据库中。
      resolve(pwd)
      console.log(`密码：${pwd}`);
    });
  })

  return result
}


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // 登陆页面
  await page.goto(login_url);
  await page.type('#login_field', userName)
  // 控制台读取密码
  console.log(1)

  await readTerminal()



  console.log(3222)

  return false

  await page.type('#password', pwd)
  await page.click('.session-authentication .auth-form .btn')
  // 跳转页面
  await page.waitForNavigation({
      waitUntil: 'load'
  })
  await page.screenshot({path: `./imgs/githun_${((new Date()).getTime())}.png`});

  await browser.close();

  rl.close();

})();
