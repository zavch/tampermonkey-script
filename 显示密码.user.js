
// ==UserScript==
// @name         显示密码
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("input[type='password']")
      .forEach(e => e.addEventListener("change", function(event) {e.title = event.target.value}))
    // Your code here...
})();
