// ==UserScript==
// @name         移除Dubbo文档表格滚动条
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://dubbo.apache.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 表格不显示
    document.querySelector('.markdown-body table').style.overflow='unset'
})();