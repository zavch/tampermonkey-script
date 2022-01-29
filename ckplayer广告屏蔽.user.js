// ==UserScript==
// @name         ckplayer广告屏蔽
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
    if (window.ckplayer) {
      window.ckplayer.advertisementsPlay = function(){}
    }
    // Your code here...
})();
