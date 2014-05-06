/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

// Set Console.log On(1) or Off(0). Should be off when the test is running
var debug = 0;
// Set unique test id
var testid = '001';
// Set clear test name
var testname = 'Name of the A/B test';
// The code for the optimization version
var optimization = 'Add the code for the optimization version.';
// Get random number from Google Tag Manager Macro
var number = {{Random Number}};
// Get cookie value of the cookie named ab-test-[testid]
var cookievalue = jQuery.cookie('ab-test-'+testid);

if(debug==1){ console.log('This A/B Test is running via Google Tag Manager: GTM-'+testid, testname); }
if(debug==1){ console.log('The value of the cookie ab-test-'+testid, 'is', cookievalue); }

if (cookievalue == 'optimization') {
  // Add jQuery for awesomeness
  if(debug==1){ console.log('The optimization version of the A/B test is loaded.'); }
  // Reset the cookie
  jQuery.cookie('ab-test-'+testid, 'optimization', { expires: 30, path: '/' });
  // Send data to Google Analytics
  // Classic Google Analytics event (ga.js)
  _gaq.push(['_trackEvent', 'AB-test', 'GTM-'+testid+' '+testname, 'optimization',1]);
  // Classic Google Analytics custom variable (ga.js)
  _gaq.push(['_setCustomVar', 5, 'GTM-'+testid+' '+testname, 'optimization', 1 ]);
  // Universal Analytics event (analytics.js)
  ga('send', 'event', 'AB-test', 'GTM-'+testid+' '+testname, 'optimization',1);
  // Universal Analytics custom dimension (analytics.js)
  ga('set', { 'dimension20': 'GTM-'+testid+' '+testname+' optimization' });
  if(debug==1){ console.log('Event send to Google Analytics: Category: AB-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: optimization, Value: 1'); }
}
else {
  if (cookievalue == 'control') {
    if(debug==1){ console.log('The control version of the A/B test is loaded.'); }
    // Reset the cookie
    jQuery.cookie('ab-test-'+testid, 'control', { expires: 30, path: '/' });
    // Send data to Google Analytics
    // Classic Google Analytics (ga.js)
    _gaq.push(['_trackEvent', 'AB-test', 'GTM-'+testid+' '+testname, 'control',1]);
    // Classic Google Analytics custom variable (ga.js)
    _gaq.push(['_setCustomVar', 5, 'GTM-'+testid+' '+testname, 'control', 1 ]);
    // Universal Analytics (analytics.js)
    ga('send', 'event', 'AB-test', 'GTM-'+testid+' '+testname, 'control',1);
    // Universal Analytics custom dimension (analytics.js)
    ga('set', { 'dimension20': 'GTM-'+testid+' '+testname+' control' });
    if(debug==1){ console.log('Event send to Google Analytics: Category: AB-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: control, Value: 1'); }
  }
  else {
    if(debug==1){ console.log('Choose random a version of the A/B test.'); }
    if (number < 1073741823) {
      // Add jQuery for awesomeness
      if(debug==1){ console.log('The optimization version of the test is loaded.'); }
      // Set the cookie
      jQuery.cookie('ab-test-'+testid, 'optimization', { expires: 30, path: '/' });
      // Send data to Google Analytics
      // Classic Google Analytics (ga.js)
      _gaq.push(['_trackEvent', 'AB-test', 'GTM-'+testid+' '+testname, 'optimization',1]);
      // Classic Google Analytics custom variable (ga.js)
      _gaq.push(['_setCustomVar', 5, 'GTM-'+testid+' '+testname, 'optimization', 1 ]);
      // Universal Analytics (analytics.js)
      ga('send', 'event', 'AB-test', 'GTM-'+testid+' '+testname, 'optimization',1);
      // Universal Analytics custom dimension (analytics.js)
      ga('set', { 'dimension20': 'GTM-'+testid+' '+testname+' optimization' });
      if(debug==1){ console.log('Event send to Google Analytics: Category: AB-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: optimization, Value: 1'); }
    }
    else {
      if(debug==1){ console.log('The control version of the test is loaded.'); }
      // Set the cookie
      jQuery.cookie('ab-test-'+testid, 'control', { expires: 30, path: '/' });
      // Send data to Google Analytics
      // Classic Google Analytics (ga.js)
      _gaq.push(['_trackEvent', 'AB-test', 'GTM-'+testid+' '+testname, 'control',1]);
      // Classic Google Analytics custom variable (ga.js)
      _gaq.push(['_setCustomVar', 5, 'GTM-'+testid+' '+testname, 'control', 1 ]);
      // Universal Analytics (analytics.js)
      ga('send', 'event', 'AB-test', 'GTM-'+testid+' '+testname, 'control',1);
      // Universal Analytics custom dimension (analytics.js)
      ga('set', { 'dimension20': 'GTM-'+testid+' '+testname+' control' });
      if(debug==1){ console.log('Event send to Google Analytics: Category: AB-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: control, Value: 1'); }
    }
  }
}