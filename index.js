import { Login } from './file.js'
const puppeteer = require('puppeteer');

const login_url = 'https://github.com/login';
const userName = Login.userName;
const pwd = Login.pwd

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(login_url);
    await page.type('#login_field', userName)
    await page.type('#password', pwd)
    await page.click('.session-authentication .auth-form .btn')
    await page.waitForNavigation({
        waitUntil: 'load'
    })
    await page.screenshot({path: 'githun.png'});

    await browser.close();
})();
