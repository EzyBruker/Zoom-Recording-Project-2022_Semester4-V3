var user =
{
  name : "yankle",
  age: 28,
  hobby: "bike-riding",
  isMarried: true
}

var listOfHolyCities =
[
  "Zefat",
  "Yerushalayim",
  "Tiveria",
  "Hevron"
];



var user2 =
{
  name: "shmendrick",
  age: 38,
  hobby:  "sleeping",
  isMarried: true,
  shopping: ["milk", "eggs","cheese"],
};


var user3 =
{
  name: "berle",
  age: 48,
  hobby:  "hiking",
  isMarried: true,
  shopping: ["butter", "bread","cheese"],
  shout: function()
  {
    console.log("isn\'t class great!");
  }
};


var arrayOfObjects =
[
  {
    username: "shmendrik",
    password: "secre"
  },
  {
    username: "yente",
    password: "12345"
  }
];


// //
// //
//
//

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



var listOfHolyCities = ["Zefat", "Yerushalayim", "Tiveria", "Hevron"];

/*
console.log(listOfHolyCities[1]);
*/
/*
var ListHC = [
  ["Zefat", "Yerushalayim", "Tiveria", "Hevron"]
];


console.log(ListHC[0][1]);

console.log(listOfHolyCities.indexOf("Zefat"));
*/
