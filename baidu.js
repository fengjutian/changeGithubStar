const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');

  await page.screenshot({path: './imgs/baidu.png', fullPage:true});

  await browser.close();
})();
