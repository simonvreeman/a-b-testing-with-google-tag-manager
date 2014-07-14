<script>
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

var debug = 0;
var testID = '001';
var testName = 'Name of the A/B test';
var number = {{Random Number}};
var getCookie = jQuery.cookie('GTM-' + testID);
var testVar = getCookie;
function optimization() {"use strict";
  // Add your code here
}
function setCookie(variation) {"use strict"; jQuery.cookie('GTM-' + testID, variation, {expires: 30, path: '/'}); }
function sendGA(variation) {"use strict"; ga('send', 'event', 'AB-test', 'GTM-' + testID + ' ' + testName, variation, 1, {'nonInteraction': 1}); }
function sendDL(variation) {"use strict"; dataLayer.push({'event': 'gtm.abtesting', 'testCategory': 'AB-test', 'testAction': 'GTM-' + testID + ' ' + testName, 'testLabel': variation, 'testValue': 1}); }
function debugging(message) {"use strict"; if (debug === 1) {console.log(message); } }
function control() {"use strict"; setCookie(testVar); sendGA(testVar); sendDL(testVar); debugging(testVar); }
function variation() {"use strict"; optimization(); setCookie(testVar); sendGA(testVar); sendDL(testVar); debugging(testVar); }

debugging('GTM-' + testID + ' ' + testName);

if (getCookie === 'optimization') {
  testVar = 'optimization';
  variation();
}
else {
  if (getCookie === 'control') {
    testVar = 'control';
    control();
  } else {
    if (number < 1073741824) {
      testVar = 'optimization';
      variation();
    }
    else {
      testVar = 'control';
      control();
    }
  }
}
</script>