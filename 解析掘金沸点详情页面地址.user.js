// ==UserScript==
// @name         解析掘金沸点详情页面地址
// @namespace    http://tampermonkey.net/
// @version      2025-07-07
// @description  try to take over the world!
// @author       You
// @match        https://juejin.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=juejin.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("click", e => {
        let element = e.target
        if (!element) {
            return
        }
        while(element.className != 'pin') {
            element = element.parentElement
            if (!element) {
               return
            }
        }
        // console.log("find:", element);
        let pinId = element.getAttribute('data-pin-id')
        let url = `https://juejin.cn/pin/${pinId}`
        console.log(url)
    })
})();
