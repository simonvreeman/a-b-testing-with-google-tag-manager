// jQuery Cookie Plugin v1.4.0
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{if(typeof exports==="object"){factory(require("jquery"));}else{factory(jQuery);}}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}function decode(s){return config.raw?s:decodeURIComponent(s);}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");}try{s=decodeURIComponent(s.replace(pluses," "));return config.json?JSON.parse(s):s;}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*86400000);}return(document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""));}var result=key?undefined:{};var cookies=document.cookie?document.cookie.split("; "):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=parts.join("=");if(key&&key===name){result=read(cookie,value);break;}if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}$.cookie(key,"",$.extend({},options,{expires:-1}));return !$.cookie(key);};}));

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
  googleAnalyticsTrackEvent('OD-test', 'GTM-'+testid+' '+testname, 'optimization',1);
  if(debug==1){ console.log('Event send to Google Analytics: Category: AD-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: optimization, Value: 1'); }
}
else {
  if (cookievalue == 'control') {
    if(debug==1){ console.log('The control version of the A/B test is loaded.'); }
    // Reset the cookie
    jQuery.cookie('ab-test-'+testid, 'control', { expires: 30, path: '/' });
    // Send data to Google Analytics
    googleAnalyticsTrackEvent('OD-test', 'GTM-'+testid+' '+testname, 'control',1);
    if(debug==1){ console.log('Event send to Google Analytics: Category: AD-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: control, Value: 1'); }
  }
  else {
    if(debug==1){ console.log('Choose random a version of the A/B test.'); }
    if (number < 1073741823) {
      // Add jQuery for awesomeness
      if(debug==1){ console.log('The optimization version of the test is loaded.'); }
      // Set the cookie
      jQuery.cookie('ab-test-'+testid, 'optimization', { expires: 30, path: '/' });
      // Send data to Google Analytics
      googleAnalyticsTrackEvent('OD-test', 'GTM-'+testid+' '+testname, 'optimization',1);
      if(debug==1){ console.log('Event send to Google Analytics: Category: AD-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: optimization, Value: 1'); }
    }
    else {
      if(debug==1){ console.log('The control version of the test is loaded.'); }
      // Set the cookie
      jQuery.cookie('ab-test-'+testid, 'control', { expires: 30, path: '/' });
      // Send data to Google Analytics
      googleAnalyticsTrackEvent('OD-test', 'GTM-'+testid+' '+testname, 'control',1);
      if(debug==1){ console.log('Event send to Google Analytics: Category: AD-test,', 'Action: GTM-'+testid+' '+testname+',', 'Label: control, Value: 1'); }
    }
  }
}