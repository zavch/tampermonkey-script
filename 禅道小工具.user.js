// ==UserScript==
// @name         禅道小工具
// @namespace    http://tampermonkey.net/
// @version      2024-05-24
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (location.href.endsWith("-0.html")) {
        // 主干自动跳转到所有
        location.href = location.href.replace(/-0.html$/, "-all.html")
    } else if (location.href.endsWith("qa.html")) {
        // 更正错误的链接
        let id = setInterval(() => {
            fixUrl()
            clearInterval(id)
        }, 500)
    }

})();

function fixUrl() {
    let all = document.querySelectorAll('.progress-info a,.product-info a')
    if (!all) {
        return
    }
    for (let a of all) {
        a.href = a.href.replace(/--(.*).html$/, "-all-$1.html")
    }
}
