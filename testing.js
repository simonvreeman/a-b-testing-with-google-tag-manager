<script>
function createCookie(name, value, days) {
  'use strict';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = '; expires=' + date.toGMTString();
  }
  else var expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
  'use strict';
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

var testID = '001',
    testName = 'Name of the A/B test',
    number = {{Random Number}},
    getCookie = readCookie('GTM-'+testID),
    testVariant = getCookie;

function optimization() {
  'use strict';
  // Add your code here
}

function sendDL(variation) {
  'use strict';
  dataLayer.push({
    'event': 'gtm.abtest',
    'abtestCategory': 'AB-test',
    'abtestAction': 'GTM-' + testID + ' ' + testName,
    'abtestLabel': variation,
    'abtestValue': 1
  });
}

function setCookie(variation) {
  'use strict';
  createCookie('GTM-' + testID, variation, 30);
}

function control() {
  'use strict';
  setCookie(testVariant);
  sendDL(testVariant);
}

function variation() {
  'use strict';
  optimization();
  control();
}

'1' === getCookie ? (testVariant = '1', variation()) : '0' === getCookie ? (testVariant = '0', control()) : 1073741824 > number ? (testVariant = '1', variation()) : (testVariant = '0', control());
</script>
