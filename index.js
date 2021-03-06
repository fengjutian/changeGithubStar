const Config = require('./file.js')
const puppeteer = require('puppeteer');
const readline = require('readline');

// 配置参数
const login_url = 'https://github.com/login';
const user_home = 'https://github.com/fengjutian'
const userName = Config.userName;
const pwd = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// 读取控制台输入
async function readTerminal() {
  let result = await new Promise((resolve, reject) => {
    rl.question('请输入密码：', (pwd) => {
      resolve(pwd)
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
  const pwd = await readTerminal()
  await page.type('#password', pwd)
  await page.click('.session-authentication .auth-form .btn')
  // 跳转页面
  await page.waitForNavigation({
      waitUntil: 'networkidle2'
  })

  // 前往个人页面
  await page.goto(user_home);

  const colorStarArr = [
    'var(--color-calendar-graph-day-bg)',
    'var(--color-calendar-graph-day-L1-bg)',
    'var(--color-calendar-graph-day-L2-bg)',
    'var(--color-calendar-graph-day-L3-bg)',
    'var(--color-calendar-graph-day-L4-bg)'
  ]


  // let  divsCounts = [];
  // divsCounts = await page.waitForSelector('rect').then(async () => {
  //   return await page.$$eval('rect', eles => { return eles });
  // })

  //  console.log('divsCounts', divsCounts)

  // await page.evaluate(el => {
  //   console.log('el', el)
  //   return el.setAttribute('fill', 'var(--color-calendar-graph-day-L2-bg)')
  // },divsCounts)

  const rectAll = await page.evaluate(ele => {



  })




  // 截屏
  await page.screenshot({
    path: `./imgs/githun_${((new Date()).getTime())}.png`,
    fullPage:true
  });



  // await page.waitForSelector('rect')

  // const selectEle = await page.evaluate(async () => {
  //   const eleArr = document.querySelectorAll('rect')
  //   return eleArr
  // })

  // console.log('selectEle', selectEle)




  // for (const i of eleArr) {
  //   console.log('i', i)
  //   i.setAttribute('fill', colorStarArr[Math.floor(Math.random() * colorStarArr.length)])
  // }




  // 截屏
  // await page.screenshot({
  //   path: `./imgs/githun_${((new Date()).getTime())}.png`,
  //   fullPage:true
  // });

  await browser.close();

  // 关闭控制台
  rl.close();
})();
