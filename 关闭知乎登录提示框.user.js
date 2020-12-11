// ==UserScript==
// @name         关闭知乎登录提示框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var i = 0;
    var intervalID = setInterval(function(){
        let closeButton = getCloseButton();
        if (closeButton != null) {
            closeButton.click();
            if (getCloseButton() == null) {
                clearInterval(intervalID);
            }
        }
    }, 1000);
})();

function getCloseButton() {
    return document.querySelector('.Modal-closeButton');
}
