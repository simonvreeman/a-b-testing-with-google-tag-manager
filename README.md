A/B testing script for Google Tag Manager
=========================================

It is a pretty simple script for A/B testing with [Google Tag Manager](https://www.google.com/tagmanager/) and [Google Analytics](http://www.google.com/analytics/) for measuring. It uses the random function of Tag Manager, which is [pseudo random](http://www.random.org/randomness/). That is random enough for A/B testing.

It will send events to the classic (ga.js) or universial (analytics.js) version Google Analytics. You can change that for your own needs.

Use the rules in Google Tag Manager to set were the test on the website should be running.

## Requirements
* Google Tag Manager
  * Random Number macro
* [jQuery Cookie by carhartl](https://github.com/carhartl/jquery-cookie) - A minified version is included in the script.

### Create the Random Number macro in Google Tag Manager
1. Click on the Read button New and select Macro
2. Give the macro the name Randon Number
3. Select from the dropdown Random Number
4. Save the macro