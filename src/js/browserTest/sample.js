const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://books.rakuten.co.jp/e-book/', {
    waitUntil: 'networkidle'
  });

  await page.pdf({ path: 'hn.pdf', width: '1400', height: '2000' });

  await browser.close();
})();
