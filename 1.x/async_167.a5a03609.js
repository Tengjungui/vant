(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{226:function(s,E,C){"use strict";C.r(E);var a={created:function(){this.content=unescape("%3Ch2%3EWaterfall%20%u7011%u5E03%u6D41%3C/h2%3E%0A%3Cp%3E%u6CE8%u610F%uFF1AWaterfall%20%u7EC4%u4EF6%u5DF2%u88AB%u5E9F%u5F03%u4E14%u4E0D%u518D%u7EF4%u62A4%uFF0C%u8BF7%u4F7F%u7528%20%3Ca%20href%3D%22%23/zh-CN/list%22%3EList%3C/a%3E%20%u7EC4%u4EF6%u4EE3%u66FF%3C/p%3E%0A%3Ch3%3E%u4F7F%u7528%u6307%u5357%3C/h3%3E%0A%3Ch4%3E%u5168%u5C40%u6CE8%u518C%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vue%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vue%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Waterfall%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Waterfall%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E%u5C40%u90E8%u6CE8%u518C%3C/h4%3E%0A%3Cp%3E%u5982%u679C%u4F60%u53EA%u662F%u60F3%u5728%u67D0%u4E2A%u7EC4%u4EF6%u4E2D%u4F7F%u7528%3Ccode%3EWaterfall%3C/code%3E%uFF0C%u53EF%u4EE5%u5728%u5BF9%u5E94%u7EC4%u4EF6%u4E2D%u6CE8%u518C%3Ccode%3EWaterfall%3C/code%3E%u6307%u4EE4%uFF0C%u8FD9%u6837%u53EA%u80FD%u5728%u4F60%u6CE8%u518C%u7684%u7EC4%u4EF6%u4E2D%u4F7F%u7528%3Ccode%3EWaterfall%3C/code%3E%uFF1A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Waterfall%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edirectives%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EWaterfallLower%3C/span%3E%3A%20Waterfall%28%3Cspan%20class%3D%22hljs-string%22%3E%27lower%27%3C/span%3E%29%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EWaterfallUpper%3C/span%3E%3A%20Waterfall%28%3Cspan%20class%3D%22hljs-string%22%3E%27upper%27%3C/span%3E%29%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3E%u4EE3%u7801%u6F14%u793A%3C/h3%3E%0A%3Ch4%3E%u57FA%u7840%u7528%u6CD5%3C/h4%3E%0A%3Cp%3E%u4F7F%u7528%20%3Ccode%3Ev-waterfall-lower%3C/code%3E%20%u76D1%u542C%u6EDA%u52A8%u5230%u8FBE%u5E95%u90E8%uFF0C%u5E76%u6267%u884C%u76F8%u5E94%u51FD%u6570%u3002%u82E5%u662F%u51FD%u6570%u6267%u884C%u4E2D%u9700%u8981%u5F02%u6B65%u52A0%u8F7D%u6570%u636E%uFF0C%u53EF%u4EE5%u5C06%20%3Ccode%3Ewaterfall-disabled%3C/code%3E%20%u6307%u5B9A%u7684%u503C%u7F6E%u4E3A%20true%uFF0C%u7981%u6B62%20%3Ccode%3Ev-waterfall-lower%3C/code%3E%20%u76D1%u542C%u6EDA%u52A8%u4E8B%u4EF6%3C/p%3E%0A%3Cp%3E%u6CE8%u610F%uFF1A%3Ccode%3Ewaterfall-disabled%3C/code%3E%20%u4F20%u5165%u7684%u662F%20vue%20%u5BF9%u8C61%u4E2D%u8868%u793A%u662F%u5426%u7981%u6B62%u7011%u5E03%u6D41%u89E6%u53D1%20key%20%u503C%uFF0C%u7C7B%u578B%u662F%u5B57%u7B26%u4E32%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eul%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-waterfall-lower%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22loadMore%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ewaterfall-disabled%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22disabled%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ewaterfall-offset%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22400%22%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%20in%20list%22%3C/span%3E%26gt%3B%3C/span%3E%7B%7B%20item%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eli%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eul%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elist%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E4%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E7%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E8%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C/span%3E%5D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edirectives%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EWaterfallLower%3C/span%3E%3A%20Waterfall%28%3Cspan%20class%3D%22hljs-string%22%3E%27lower%27%3C/span%3E%29%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20loadMore%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.disabled%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%0A%20%20%20%20%20%20setTimeout%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Efor%3C/span%3E%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C/span%3E%20i%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%3B%20i%20%26lt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C/span%3E%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.push%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.length%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.disabled%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E200%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-waterfall-lower%3C/td%3E%0A%3Ctd%3E%u6EDA%u52A8%u5230%u5E95%u90E8%2C%20%u89E6%u53D1%u6267%u884C%u7684%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Ccode%3EFunction%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-waterfall-upper%3C/td%3E%0A%3Ctd%3E%u6EDA%u52A8%u5230%u9876%u90E8%2C%20%u89E6%u53D1%u6267%u884C%u7684%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Ccode%3EFunction%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ewaterfall-disabled%3C/td%3E%0A%3Ctd%3E%u5728%20vue%20%u5BF9%u8C61%u4E2D%u8868%u793A%u662F%u5426%u7981%u6B62%u7011%u5E03%u6D41%u89E6%u53D1%u7684%20key%20%u503C%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ewaterfall-offset%3C/td%3E%0A%3Ctd%3E%u89E6%u53D1%u7011%u5E03%u6D41%u52A0%u8F7D%u7684%u9608%u503C%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},u=C(7),l=Object(u.a)(a,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);E.default=l.exports}}]);