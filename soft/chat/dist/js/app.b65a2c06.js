(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3da66800":"cf56f1d9","chunk-0e59ab6d":"70dc92c8","chunk-60605dee":"b33b296d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0e59ab6d":1,"chunk-60605dee":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3da66800":"31d6cfe0","chunk-0e59ab6d":"7b581980","chunk-60605dee":"77ee8844"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"levelTypeToName",(function(){return h})),n.d(r,"articleTypeToName",(function(){return b})),n.d(r,"novelTypeToName",(function(){return k})),n.d(r,"novelTypeToNames",(function(){return v})),n.d(r,"sectTypeToName",(function(){return m})),n.d(r,"kungfuTypeToName",(function(){return y})),n.d(r,"kungfuTypeToNames",(function(){return g}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4160"),n("d3b7"),n("159b"),n("b64b"),n("4de4");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u={name:"App",mounted:function(){}},i=u,s=(n("7c55"),n("2877")),f=Object(s["a"])(i,o,c,!1,null,null,null),l=f.exports,d=n("a18c"),p=(n("5cfb"),n("b970")),h=(n("157a"),n("ac1f"),n("1276"),n("a15b"),function(e){var t="";switch(e){case"01":t="初级";break;case"02":t="中级";break;case"03":t="高级";break;default:break}return t}),b=function(e){var t="";switch(e){case"01":t="最新";break;case"02":t="最热";break;case"03":t="人文";break;case"04":t="科技";break;case"05":t="历史";break;case"06":t="经济";break;case"07":t="诗词";break;case"08":t="歌赋";break;case"09":t="散文";break;default:break}return t},k=function(e){var t="";switch(e){case"01":t="武侠";break;case"02":t="爱情";break;case"03":t="家国";break;case"04":t="文艺";break;case"05":t="青春";break;default:break}return t},v=function(e){if(e){var t="",n=[];return e.split(",").forEach((function(e){n.push(k(e))})),t=n.join("/"),t}},m=function(e){var t="";switch(e){case"000":t="未知";break;case"001":t="燕云山庄";break;case"002":t="魔教";break;default:break}return t},y=function(e){var t="";switch(e){case"001":t="燕云七绝";break;case"002":t="乾坤生死诀";break;case"003":t="音波功";break;default:break}return t},g=function(e){var t="",n=[];return e.forEach((function(e){n.push(y(e))})),t=n.join("、"),t};a["a"].use(p["a"]),a["a"].config.productionTip=!1,Object.keys(r).forEach((function(e){a["a"].filter(e,r[e])}));new a["a"]({render:function(e){return e(l)},router:d["a"]}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f");var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]);var o=[{path:"*",redirect:"/login"},{name:"chat",path:"/chat",component:function(){return Promise.all([n.e("chunk-3da66800"),n.e("chunk-60605dee")]).then(n.bind(null,"b03c"))}},{name:"login",path:"/login",component:function(){return Promise.all([n.e("chunk-3da66800"),n.e("chunk-0e59ab6d")]).then(n.bind(null,"efcf"))}}],c=a["a"].prototype.push,u=a["a"].prototype.replace;a["a"].prototype.push=function(e,t,n){t&&n?c.call(this,e,t,n):c.call(this,e,(function(){}),(function(){}))},a["a"].prototype.replace=function(e,t,n){t&&n?u.call(this,e,t,n):u.call(this,e,(function(){}),(function(){}))};var i=new a["a"]({routes:o,scrollBehavior:function(e,t,n){return{y:0}}});t["a"]=i}});
//# sourceMappingURL=app.b65a2c06.js.map