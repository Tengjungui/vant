(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{249:function(t,s,C){"use strict";C.r(s);var E={created:function(){this.content=unescape("%3Ch2%3ESubmitBar%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20SubmitBar%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28SubmitBar%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-submit-bar%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aprice%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%223050%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebutton-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Submit%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esubmit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSubmit%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EDisabled%3C/h4%3E%0A%3Cp%3E%3Ccode%3Esubmit%3C/code%3E%20event%20will%20not%20triggerd%20when%20disabled.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-submit-bar%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aprice%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%223050%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebutton-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Submit%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etip%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Some%20tips%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esubmit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSubmit%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ELoading%3C/h4%3E%0A%3Cp%3E%3Ccode%3Esubmit%3C/code%3E%20event%20will%20not%20triggerd%20when%20loading.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-submit-bar%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloading%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aprice%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%223050%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebutton-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Submit%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esubmit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSubmit%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EAdvanced%20Usage%3C/h4%3E%0A%3Cp%3EUse%20slot%20to%20add%20custom%20contents.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-submit-bar%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aprice%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%223050%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebutton-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Submit%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esubmit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSubmit%22%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22checked%22%3C/span%3E%26gt%3B%3C/span%3ECheck%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22tip%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20Some%20tips%2C%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClickEditAddress%22%3C/span%3E%26gt%3B%3C/span%3ELink%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Espan%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-submit-bar%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eprice%3C/td%3E%0A%3Ctd%3EPrice%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel%3C/td%3E%0A%3Ctd%3EPrice%20label%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u5408%u8BA1%uFF1A%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebutton-text%3C/td%3E%0A%3Ctd%3EButton%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebutton-type%3C/td%3E%0A%3Ctd%3EButton%20type%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Edanger%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etip%3C/td%3E%0A%3Ctd%3ETip%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%20button%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20loading%20icon%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecurrency%3C/td%3E%0A%3Ctd%3ECurrency%20symbol%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%A5%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edecimal-length%3C/td%3E%0A%3Ctd%3ENumber%20of%20digits%20to%20appear%20after%20the%20decimal%20point%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E2%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esafe-area-inset-bottom%3C/td%3E%0A%3Ctd%3EWhether%20to%20enable%20bottom%20safe%20area%20adaptation%2C%20to%20enable%20those%20features%20use%20%3Ccode%3Eviewport-fit%3Dcover%3C/code%3E%20in%20the%20%3Ccode%3Eviewport%3C/code%3E%20meta%20tag%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Esubmit%3C/td%3E%0A%3Ctd%3ETriggerd%20when%20click%20submit%20button%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ESlot%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ECustom%20left%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etop%3C/td%3E%0A%3Ctd%3ECustom%20top%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etip%3C/td%3E%0A%3Ctd%3ECustom%20tips%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},a=C(7),n=Object(a.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);s.default=n.exports}}]);