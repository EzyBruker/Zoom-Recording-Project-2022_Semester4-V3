var aseret_serveHashemList =
[
  "daven",
  "eat",
  "learn",
  "help family",
  "give charity"
];
//
// var ss_list
// [
//   123456789,
//   100000001,
//   100000002
// ]
//
// for(var counter = 0; counter < 365,000,000; counter++)
// {
//   if (ss_list[counter] === 123456789)
//   {
//     console.log("wow that really is his number!");
//     console.log(counter);
//     break;
//   }
// }

// }


  var array_length = aseret_serveHashemList.length;
//

for (var counter = 0; counter < array_length; counter++)
{
  //aseret_serveHashemList[counter] =  "Please  " + aseret_serveHashemList[counter] ;
     console.log(aseret_serveHashemList[counter], counter);
}
//
// aseret_serveHashemList.forEach(function(serve, counter){
//   console.log(serve, counter);
// })
//
function print_out_array_contents(array_as, counter)
{
  console.log(array_as, counter);
}

aseret_serveHashemList.forEach(print_out_array_contents);

//
// var counterWhile = 10
// while(counterWhile > 0)
// {
//   console.log(counterWhile);
//   counterWhile = counterWhile - 1;
// }
//
// var counterWhile = 10;
// while(counterWhile > 10){
//   console.log("while", counterWhile);
//   counterWhile--;
// }
// //
//
// var counterWhile = 10;
// do{
//   console.log("doWhile", counterWhile);
//   counterWhile--;
// } while (counterWhile > 10);


// //
// //









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
