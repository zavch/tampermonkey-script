// ==UserScript==
// @name         下载背景图像
// @namespace    http://tampermonkey.net/
// @version      2024-10-17
// @description  try to take over the world!
// @author       You
// @match        https://cn.bing.com/spotlight*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let url = document.getElementById("bcg-img-url").style.backgroundImage.replace(/url\("(.*)"\)/, "$1")
    let filename = new Date().getTime() + ".jpg"
    document.body.insertAdjacentHTML('beforeend', `<a href=${url} download="${filename}">下载背景图像</a>`)
})();
