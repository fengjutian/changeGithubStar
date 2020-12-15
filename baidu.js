const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, devtools: true});
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


  // const inputEle = await page.$$('#s-top-left a').then(res => {
  //   // console.log('res', res.innerText)
  //   return res.map(e => e.innerText)
  // });
  // console.log('inputEle', inputEle)


  const dimensions = await page.evaluate(() => {
    const aList = document.querySelectorAll('#s-top-left a')
    console.log("document.querySelector('#s-top-left')", aList)
    let eleArr = [];
    for (const i of aList) {
      eleArr.push(i.innerText)
    }
    return eleArr;
  });

  console.log('dimensions', dimensions)


  // const res = await page.evaluate(x => {
  //   return Promise.resolve(x * 8)
  // }, 7)

  // console.log('res', res)




  //await page.pdf({path: './pdf/baidu.pdf', format: 'A4'});

  //await page.screenshot({path: './imgs/baidu.png', fullPage:true});

 await browser.close();
})();
