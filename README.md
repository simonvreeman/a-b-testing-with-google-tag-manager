A/B testing script for Google Tag Manager
=========================================

_Made by [Simon Vreeman](http://vreeman.com)._

It is a pretty simple script for A/B testing with [Google Tag Manager](https://www.google.com/tagmanager/) and [Google Analytics](http://www.google.com/analytics/) for measuring and analysis. It uses the [random macro](https://support.google.com/tagmanager/answer/2644341?hl=en#RandomNumber) of Google Tag Manager, that returns a number between 0 and 2147483647. It is [pseudo random](http://www.random.org/randomness/), but I run some tests and find that it is random enough for A/B testing.

The biggest disadvantages of A/B testing with Google Tag Manager (not necessarily TMS in general) is that GTM loads the script asynchronous. That will cause a flicker effect on the webpage. The users can notice that something has changed and it is likely that they will behave different to it. Meaning that you will get mixed results.

Other tag management systems have the option to load specific tags synchrone. With some small tweaks this script will work in other tag managers.

#### Google Analytics tracking
The script will send non-interaction events, custom dimensions and/or custom variables to the classic (ga.js) or universal (analytics.js) version Google Analytics. You can change that for your own needs. The custom variable is set for slot 5. When using the custom dimension, make sure you [configure it](https://support.google.com/analytics/answer/2709829?hl=en) in the Admin setting of your property. It is set for slot 20.

#### Google Tag Manager settings
Use the rules in Google Tag Manager to set where the test on the website should be running and how much of the traffic will be included. You can use the same random macro to set how much of the traffic should be in the test.

When you do A/B testing you want to set a certain time of the test. You need enough users and conversions to get a good significance rate (95% or more). When creating the custom HTML tag in Google Tag Manager you can also set a custom tag firing schedule. That means you can set the dates when the test has to start and when it has to stop. You can find it under Advanced Settings, at the bottom of the page.

The traffic is equal distributed among the two variations of the A/B test. But of course you have the possibility to change that for your own needs. [Dan Russell](http://dan-russell.com/2013/03/sampling-a-percentage-of-your-users-with-google-tag-manager/) explained that pretty well.

Want to know and learn more about Google Tag Manager. Definitely take a look at the blog of [Simo Ahava](http://www.simoahava.com).

### Requirements
* Google Tag Manager
  * [{{Random Number}} macro](https://github.com/simonvreeman/A-B-testing-with-Google-Tag-Manager#create-the-random-number-macro-in-google-tag-manager)
* [jQuery Cookie by carhartl](https://github.com/carhartl/jquery-cookie) - A minified version (1.4.1) is included in the script.

### Create the {{Random Number}} macro in Google Tag Manager
_To use the script, you need to create the Random Number macro._

1. Click on the Read button New and select Macro.
2. Give the macro the name `Random Number`.
3. Select from the drop down Random Number.
4. Save the macro.

### How to use this script
1. Create a custom HTML tag in your Google Tag Manager container.
2. Past the code from [testing.js](https://github.com/simonvreeman/A-B-testing-with-Google-Tag-Manager/blob/master/testing.js) to the tag. Make sure you use `<script>` and `</script>` before and after.
3. Set a unique *test id*.
4. Set a unique *test name*.
5. Create an optimization version.
6. Set the rules for the test in Google Tag Manager.
7. Test is with debug on. Set debug in the script to 1 and use the debug option in Google Tag Manager.
8. Make sure the correct Google Analytics tracking is working.
9. Turn the debug off. 
9. Create a new version and publish it.

## License
The MIT License (MIT)

Copyright (c) 2014 Simon Vreeman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.