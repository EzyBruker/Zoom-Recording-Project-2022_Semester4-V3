

if (4+3 ===7)
{

    console.log("I got it");
      // alert("I am so smart");
 }


there is added code if the console.log doesn't work - here it is below (try it without and see if it the console.log works (maybe first try alert make sure that works then try console.log - if alert works and console.log does not add the code below to your .js file ב״ה


function doSomething(tab) {
     var tabUrl = tab.url;

         if (tabUrl && tabUrl.indexOf("my-site.com") != -1) {

            var css = "";

            if (hideAds == true) {
                css += ".adsBanner {display: none !important;} .promo {display: none !important;} ";
            }

            alert("CSS code: "+css);
            console.log("CSS code:"+css);

            chrome.tabs.insertCSS(tab.id, {
                code: css
            });

        }
}
