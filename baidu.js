const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true, devtools: true});
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/', { waitUntil: 'networkidle2' });

  // const dimensions = await page.evaluate(() => {
  //   console.log("document.querySelector('#kw')", document.querySelector('#kw'))
  //   return  document.querySelector('#kw')
  //   // return {
  //   //   width: document.documentElement.clientWidth,
  //   //   height: document.documentElement.clientHeight,
  //   //   deviceScaleFactor: window.devicePixelRatio
  //   // };
  // });

  // console.log('Dimensions:', dimensions);


  const inputEle = page.$$('#kw').then(res => {
    console.log('res', res)
    return res
  });
  console.log('inputEle', inputEle)




  //await page.pdf({path: './pdf/baidu.pdf', format: 'A4'});

  //await page.screenshot({path: './imgs/baidu.png', fullPage:true});

  await browser.close();
})();
