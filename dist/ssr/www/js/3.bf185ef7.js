(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"8fb7":function(t,e,a){},"929a":function(t,e,a){"use strict";a("8fb7")},fded:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("q-page",[e("div",{staticClass:"prys_pagecontent row q-pt-lg q-pb-xl q-px-lg"},[e("div",{staticClass:"col-md-8 col-xs-12 q-gutter-sm text-grey"},[e("q-breadcrumbs",{attrs:{gutter:"xs"}},[e("q-breadcrumbs-el",{attrs:{label:"Home",to:"/"}}),e("q-breadcrumbs-el",{attrs:{label:"Others"}})],1)],1),e("div",{staticClass:"col-md-8 col-xs-12 pagetitle"},[e("h1",[e("q-icon",{attrs:{name:"call_split",size:"35px"}}),t._v(" Others")],1)]),t._l(t.listOthers,(function(a){return e("div",{key:a.id,staticClass:"col-md-8 col-xs-12"},[e("router-link",{staticClass:"title",attrs:{to:/others/+a.id}},[e("div",{staticClass:"text-h5 q-pb-md"},[e("i",{staticClass:"fas fa-chevron-right"}),t._v(" "+t._s(a.title))])])],1)}))],2)])},n=[],r=a("7ec2"),c=a.n(r),i=a("c973"),l=a.n(i),o=a("bc3a"),u=a.n(o),d={meta:{title:"Others",titleTemplate:function(t){return"".concat(t," - Full Stack Developer based in Jakarta")},meta:{description:{name:"description",content:"Pry S full stack developer based in Jakarta, Indonesia"},keywords:{name:"keywords",content:"Full Stack Developer, Jakarta, Indonesia"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},data:function(){return{listOthers:{}}},mounted:function(){var t=this;return l()(c()().mark((function e(){var a;return c()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.pryspry.com/blogs?blogcategory=3");case 2:a=e.sent,t.listOthers=a.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{refresh:function(t){setTimeout((function(){t()}),1e3)}}},p=d,m=(a("929a"),a("2877")),b=a("9989"),h=a("ead5"),f=a("079e"),v=a("0016"),g=a("eebe"),k=a.n(g),x=Object(m["a"])(p,s,n,!1,null,null,null);e["default"]=x.exports;k()(x,"components",{QPage:b["a"],QBreadcrumbs:h["a"],QBreadcrumbsEl:f["a"],QIcon:v["a"]})}}]);