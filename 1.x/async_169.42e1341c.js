(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{223:function(d,e,s){"use strict";s.r(e);var t={i18n:{"zh-CN":{list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}],add:"新增地址",edit:"编辑地址",disabledText:"以下地址超出配送范围"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere"},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range"}},data:function(){return{chosenAddressId:"1"}},methods:{onAdd:function(){this.$toast(this.$t("add"))},onEdit:function(d,e){this.$toast(this.$t("edit")+":"+e)}}},i=s(7),a=Object(i.a)(t,function(){var d=this,e=d.$createElement,s=d._self._c||e;return s("demo-section",[s("demo-block",{attrs:{title:d.$t("basicUsage")}},[s("van-address-list",{attrs:{list:d.$t("list"),"disabled-list":d.$t("disabledList"),"disabled-text":d.$t("disabledText")},on:{add:d.onAdd,edit:d.onEdit},model:{value:d.chosenAddressId,callback:function(e){d.chosenAddressId=e},expression:"chosenAddressId"}})],1)],1)},[],!1,null,null,null);e.default=a.exports}}]);