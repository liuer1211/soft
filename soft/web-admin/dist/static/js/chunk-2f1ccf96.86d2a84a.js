(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f1ccf96"],{9406:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container"},[n("div",[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"des-wer-main"},[n("div",{staticClass:"top"},[n("div",{staticClass:"left"},[t.weather.forecast?n("div",[t._v(t._s(t.weather.forecast[0].type))]):t._e()]),t.weather.forecast?n("div",{staticClass:"rig"},[n("div",[t._v(t._s(t.weather.forecast[0].date))]),n("div",[t._v(t._s(t.weather.forecast[0].high))]),n("div",[t._v(t._s(t.weather.forecast[0].low))]),n("div",[t._v(t._s(t.weather.forecast[0].type))]),n("div",[t._v(t._s(t.weather.forecast[0].fengxiang))])]):t._e()]),t.weather.forecast?n("div",{staticClass:"cen"},[n("div",{staticClass:"one"},[n("div",[t._v(t._s(t.city))])]),t._l(t.weather.forecast,(function(e,a){return n("div",{key:a},[n("div",[t._v(t._s(e.date))]),n("div",[t._v(t._s(e.high))]),n("div",[t._v(t._s(e.low))]),n("div",[t._v(t._s(e.type))])])}))],2):t._e(),n("div",{staticClass:"bot"},[t._v(" * "+t._s(t.weather.ganmao)+" ")])])])],1)],1)])},c=[],i=n("1da1"),r=n("5530"),o=(n("d3b7"),n("ac1f"),n("1276"),n("96cf"),n("2f62")),s=n("bc3a"),u=n.n(s),f=n("024c"),l=n.n(f),d={name:"Dashboard",computed:Object(r["a"])({},Object(o["b"])(["name"])),data:function(){return{citys:{},weather:{},city:""}},created:function(){this.getLocal()},methods:{getInit:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},getIp:function(){return new Promise((function(t,e){u.a.get("/cityjson?ie=utf-8").then((function(e){var n=e.data.split("=")[1],a=n.split(";")[0],c=JSON.parse(a);t(c)})).catch((function(t){console.log(t),e(t)}))}))},getCity:function(t){return new Promise((function(e,n){u.a.get("/ipJson.jsp?callback=testJson&ip=".concat(t)).then((function(t){var n=t.data.split("{")[2],a="{"+n.split("}")[0]+"}",c=JSON.parse(a);e(c)})).catch((function(t){console.log(t),n(t)}))}))},getWeather:function(t){return new Promise((function(e,n){u.a.get("/weather_mini?city=".concat(t)).then((function(t){var n=t.data.data;e(n)})).catch((function(t){console.log(t),n(t)}))}))},getLocal:function(){var t=this;l.a.plugin("AMap.Geolocation",(function(){var e=new l.a.Geolocation({enableHighAccuracy:!0,timeout:1e4});e.getCityInfo(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("complete"!=n){e.next=5;break}return t.city=a.city,e.next=4,t.getWeather(t.city);case 4:t.weather=e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.getCurrentPosition((function(t,e){"complete"==t&&console.log("result",e)}))}))}}},v=d,h=(n("ab0c"),n("2877")),p=Object(h["a"])(v,a,c,!1,null,"696d9267",null);e["default"]=p.exports},ab0c:function(t,e,n){"use strict";n("ca48")},ca48:function(t,e,n){}}]);