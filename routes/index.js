var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');
const HeadlessChrome = require('simple-headless-chrome')




router.get('/', function(reg, res){
  // const browser = new HeadlessChrome({
  //   headless: false, // If you turn this off, you can actually see the browser navigate with your instructions,
  //   chrome: {
  //     userDataDir: '/tmp/headlessDataDir' // This can be null, so a tmp folder will be created and then destroyed
  //   }
  // })
  const wishURL = "https://www.wish.com/";
  // const wishURL = "https://www.amazon.com/ap/signin?_encoding=UTF8&ignoreAuthState=1&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&switch_account=";
  console.log("test");
  // const HeadlessChrome = require('../index')
  const browser = new HeadlessChrome({
    headless: false
  });
  async function navigateWebsite () {
    try {
      await browser.init()
      const mainTab = await browser.newTab({
        privateTab: false
      })
      // gisheri@gmail.com  
      // wish.com
      await mainTab.goTo(wishURL);
      await mainTab.click("#signup-form .email-login-btn");
      await mainTab.fill("#login-email", "gisheri@gmail.com");
      await mainTab.fill("#login-password", "wish.com");
      await mainTab.click("#email-login-form .submit-btn");
      // Get a HTML tag value based on class id
      const bodyHTML = await mainTab.evaluate(function(selector) {
          const selectorHtml = document.querySelector(selector)
          return selectorHtml.innerHTML
      }, 'body'); // returns innerHTML of first matching selector for class "main"
      // x = await mainTab.querySelector("body");
      // let el = document.createElement( 'html' );
      // el.innerHTML = bodyHTML;
      // const prices = el.querySelectorAll(".feed-actual-price");
      console.log(bodyHTML);
      
      // await mainTab.evaluate(function(;));
      // await maintab.injectScript(`
      //  $('#header-logo-image').click();
      // //   console.log('hello'); 
      // //   console.log($('#brand-category-menu li'));
      // 
      // `);
      // var element = mainTab.querySelector("#ap_password");
      // await mainTab.click("input#signInSubmit");
      // await mainTab.waitForPageToLoad(20000);
      // await mainTab.fill("#ap_email", "thomvaladez@gmail.com");
      // console.log('element');
      // console.log(element)
      // await element.then(x=>{
      //   console.log(x.nodeId );
      //   if(x.nodeId != 0){
      //     mainTab.fill("#ap_password", "Eleventy7!");
      //     // mainTab.click("input#signInSubmit");
      //     // mainTab.keyboardEvent('keypress', 13);
      //   }else{
      //     mainTab.wait(1000);
      //     mainTab.wait(1000);
      //     mainTab.fill("#ap_password", "Eleventy7!");
      //   }
      // });
      
      // await mainTab.wait(1000);
      // await mainTab.click("input#signInSubmit");
       // mainTab.keyboardEvent('keypress', 'Enter');
      
      
       // mainTab.focus("#ap_email");
      // 
      //  mainTab.click("input#continue");
      //  
      //  mainTab.keyboardEvent('keypress', 'Enter');
      //  mainTab.keyboardEvent('keypress', 13);
      //  mainTab.fill("#ap_email", "thomvaladez@gmail.com");
      //  mainTab.fill("#ap_password", "Eleventy7!");
      //  mainTab.keyboardEvent('keypress', 'Enter');
      //  mainTab.keyboardEvent('keypress', 13);
      // awai
      // await mainTab.goTo("https://www.amazon.com/gp/holidaytoylist/ref=gbps_ftr_e10_f152_prc_-25?pf_rd_p=e441df97-d08b-48ff-aa69-f6bf6ab7f152&pf_rd_r=F6EVT4RW0YT9FRTG3DEH&gb_f_htl2017shopall=dealStates:AVAILABLE%252CWAITLIST%252CWAITLISTFULL%252CUPCOMING%252CEXPIRED%252CSOLDOUT,dealTypes:EVENT_DEAL,price_range:-25&pf_rd_s=events-center-c-10&pf_rd_t=701&pf_rd_i=HTL_desktop&pf_rd_m=ATVPDKIKX0DER&ie=UTF8");
      

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
