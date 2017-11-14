var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');
const HeadlessChrome = require('simple-headless-chrome')



router.post('/', function(req, res){
  console.log(req.body);
  console.log("post successfull");
  res.json(req.body);
})

router.get('/', function(reg, res){

  // const browser = new HeadlessChrome({
  //   headless: false, // If you turn this off, you can actually see the browser navigate with your instructions,
  //   chrome: {
  //     userDataDir: '/tmp/headlessDataDir' // This can be null, so a tmp folder will be created and then destroyed
  //   }
  // })
  const wishURL = "https://kikkerland.com/collections/stationery";
  const browser = new HeadlessChrome({
    headless: false
  });
  async function navigateWebsite () {
    try {
      await browser.init()
      const mainTab = await browser.newTab({
        privateTab: false
      })
      await mainTab.goTo('https://kikkerland.com/collections/stationery');
      // await mainTab.wait(1500)
      console.log('about to click');
      await mainTab.click('.product-block:nth-child(2) img');
      await mainTab.waitForPageToLoad();
      //await mainTab.wait(1000);
      await mainTab.click('input[value="Add to Cart"]');
      await mainTab.waitForPageToLoad();
      await mainTab.click('#update-cart');
      await mainTab.waitForPageToLoad();
      await mainTab.fill("#checkout_email", "gisheri@gmail.com");
      await mainTab.fill("#checkout_shipping_address_first_name", "Eric");

      // await mainTab.focus('input#quantity');
      // await mainTab.keyboardEvent("keypress", "Enter");
      // returns innerHTML of first matching selector for class "main"
      // x = await mainTab.querySelector("body");
      // let el = document.createElement( 'html' );
      // el.innerHTML = bodyHTML;
      // const prices = el.querySelectorAll(".feed-actual-price");
      // await console.log(items);

      //await browser.close()
    } catch (err) {
      console.log('ERROR!', err)
    }
  };
  navigateWebsite();
  // const test = (async () => {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   await page.goto('https://example.com');
  //   await page.screenshot({path: 'example.png'});
  //
  //   await browser.close();
  //   console.log(page);
  // })();
  res.render('index', { title: 'headlss'}); // (path/to/file, {json:obj})
  // test.then(function(data){
  //   // console.log(data);
  // });

});

module.exports = router;
