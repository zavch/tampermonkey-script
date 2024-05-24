
// ==UserScript==
// @name         显示密码
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
    let handleElements = []
    let id = setInterval(() => {
        let passwordInputs = document.querySelectorAll("input[type=password]");
        passwordInputs.forEach(e => {
            if (handleElements.indexOf(e) != -1) {
                return;
            }
            e.addEventListener("change", event => event.target.title = event.target.value);
            handleElements.push(e);
        });
    }, 500)
})();
