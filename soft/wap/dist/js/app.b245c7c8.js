(function(e){function n(n){for(var c,a,i=n[0],f=n[1],l=n[2],s=n[3]||[],h=0,p=[];h<i.length;h++)a=i[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(e[c]=f[c]);d&&d(n),u.push.apply(u,s);while(p.length)p.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,a=1;a<t.length;a++){var l=t[a];0!==o[l]&&(c=!1)}c&&(r.splice(n--,1),e=f(f.s=t[0]))}return 0===r.length&&(u.forEach((function(e){if(void 0===o[e]){o[e]=null;var n=document.createElement("link");f.nc&&n.setAttribute("nonce",f.nc),n.rel="prefetch",n.as="script",n.href=i(e),document.head.appendChild(n)}})),u.length=0),e}var c={},a={app:0},o={app:0},r=[],u=[];function i(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-17b37db9":"49658a4b","chunk-2c6b0a55":"803f390c","chunk-39148cba":"94cc2984","chunk-509d99de":"e7a4f2fe","chunk-6b080cf0":"99737078","chunk-54c1dc72":"7ed76f76","chunk-2a80f080":"e11acf83","chunk-3a6f507f":"dea9f66a","chunk-316c51c0":"6d15f499","chunk-69430730":"0d9f6727","chunk-6f399524":"4f984b96","chunk-6831e005":"d9ad6803","chunk-9c04889a":"44a47314","chunk-dde7cfd2":"3275abad","chunk-fba778da":"d8ed0676","chunk-5b7037c8":"ab4790ff","chunk-64759c2c":"20866e0f","chunk-6f1e00ae":"f429895a","chunk-7f799b6c":"7aea2518","chunk-8f1d017a":"bac65240","chunk-aa8932c4":"d057eaad","chunk-bf048dac":"62648350","chunk-f636022c":"b0a1846e","chunk-2d0ab167":"8a001a41","chunk-29c5a190":"41fadaec","chunk-76fd0784":"4befa69e"}[e]+".js"}function f(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-17b37db9":1,"chunk-2c6b0a55":1,"chunk-39148cba":1,"chunk-509d99de":1,"chunk-6b080cf0":1,"chunk-2a80f080":1,"chunk-3a6f507f":1,"chunk-316c51c0":1,"chunk-69430730":1,"chunk-6f399524":1,"chunk-6831e005":1,"chunk-9c04889a":1,"chunk-dde7cfd2":1,"chunk-fba778da":1,"chunk-5b7037c8":1,"chunk-64759c2c":1,"chunk-6f1e00ae":1,"chunk-7f799b6c":1,"chunk-8f1d017a":1,"chunk-aa8932c4":1,"chunk-bf048dac":1,"chunk-f636022c":1,"chunk-29c5a190":1,"chunk-76fd0784":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-17b37db9":"cc09c75d","chunk-2c6b0a55":"1570f408","chunk-39148cba":"bfe2c115","chunk-509d99de":"291e5b58","chunk-6b080cf0":"492bbf8f","chunk-54c1dc72":"31d6cfe0","chunk-2a80f080":"04b693f0","chunk-3a6f507f":"007da9b4","chunk-316c51c0":"f0146e23","chunk-69430730":"b83ded92","chunk-6f399524":"ea4f79b6","chunk-6831e005":"10cf8434","chunk-9c04889a":"95796271","chunk-dde7cfd2":"cd8a03b7","chunk-fba778da":"7c6a28ca","chunk-5b7037c8":"301dac8f","chunk-64759c2c":"4b60b4f0","chunk-6f1e00ae":"07bc27aa","chunk-7f799b6c":"a8c02010","chunk-8f1d017a":"f09f2ee5","chunk-aa8932c4":"037b8595","chunk-bf048dac":"48e0d137","chunk-f636022c":"8400da48","chunk-2d0ab167":"31d6cfe0","chunk-29c5a190":"e916fb49","chunk-76fd0784":"3d25341c"}[e]+".css",o=f.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var i=r[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===c||l===o))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],l=i.getAttribute("data-href");if(l===c||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],h.parentNode.removeChild(h),t(r)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,f.nc&&l.setAttribute("nonce",f.nc),l.src=i(e);var s=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",s.name="ChunkLoadError",s.type=c,s.request=a,t[1](s)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},f.m=e,f.c=c,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)f.d(t,c,function(n){return e[n]}.bind(null,c));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var d=s,p=function(){return r.push([0,"chunk-vendors"]),t()}();n([[],{},0,["chunk-54c1dc72","chunk-3a6f507f","chunk-8f1d017a","chunk-17b37db9","chunk-39148cba"]])})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},2395:function(e,n,t){},"2e6d":function(e,n,t){"use strict";t("f19b")},4360:function(e,n,t){"use strict";var c=t("2b0e"),a=t("2f62"),o={novelInfo:{},novelTypeList:[],novelPeopleList:[],novelSectList:[],novelKungfuList:[],novelWeaponList:[],novelFatalismList:[],novelOtherList:[]},r={getNovelInfo:function(e,n){e.novelInfo=n},getNovelTypeList:function(e,n){e.novelTypeList=n},getNovelPeopleList:function(e,n){e.novelPeopleList=n},getNovelSectList:function(e,n){e.novelSectList=n},getNovelKungfuList:function(e,n){e.novelKungfuList=n},getNovelWeaponList:function(e,n){e.novelWeaponList=n},getNovelFatalismList:function(e,n){e.novelFatalismList=n},getNovelOtherList:function(e,n){e.novelOtherList=n}},u={getNovelInfo:function(e,n){var t=e.commit;t("getNovelInfo",n)},getNovelTypeList:function(e,n){var t=e.commit;t("getNovelTypeList",n)},getNovelPeopleList:function(e,n){var t=e.commit;t("getNovelPeopleList",n)},getNovelSectList:function(e,n){var t=e.commit;t("getNovelSectList",n)},getNovelKungfuList:function(e,n){var t=e.commit;t("getNovelKungfuList",n)},getNovelWeaponList:function(e,n){var t=e.commit;t("getNovelWeaponList",n)},getNovelFatalismList:function(e,n){var t=e.commit;t("getNovelFatalismList",n)},getNovelOtherList:function(e,n){var t=e.commit;t("getNovelOtherList",n)}},i={},f={state:o,mutations:r,actions:u,getters:i},l={isStick:!0,isDream:!1,isLoading:!1,isStick1:!1,isStick2:!1,isStick3:!1},s={getStick:function(e,n){e.isStick=n},getStick1:function(e,n){e.isStick1=n},getStick2:function(e,n){e.isStick2=n},getStick3:function(e,n){e.isStick3=n},getDream:function(e,n){e.isDream=n},getLoading:function(e,n){e.isLoading=n}},h={getStick:function(e,n){var t=e.commit;t("getStick",n)},getStick1:function(e,n){var t=e.commit;t("getStick1",n)},getStick2:function(e,n){var t=e.commit;t("getStick2",n)},getStick3:function(e,n){var t=e.commit;t("getStick3",n)},getDream:function(e,n){var t=e.commit;t("getDream",n)},getLoading:function(e,n){var t=e.commit;t("getLoading",n)}},d={},p={state:l,mutations:s,actions:h,getters:d};c["a"].use(a["a"]);n["a"]=new a["a"].Store({modules:{novel:f,common:p}})},"4fd3":function(e){e.exports=JSON.parse('{"novelList":[{"id":"1","img":"b001.png","flag":"hot","title":"夜灵犀传奇","author":"六耳","date":"2020-02-02","link":"yelingxi","type":["01","02"],"num":"0001","infoType":["01","02","03","04","05","06"],"update":"2020-05-05","diary":"江湖纷争几时休，笑看痴人坠其中。江湖纷争几时休，笑看痴人坠其中。","des":"世人只知李白一篇《蜀道难》送友人入蜀，殊不知这位剑客更在意蜀地的另一个传说。相传三国时期，铸剑名家打造了三把赫赫有名的宝剑，分别是：黑曜、赤灵、素渊。传闻只要得其一把便可得天下，而这三把宝剑也被魏蜀吴三国的君主各占其一。<br/>几百年后，有传言黑曜在蜀地现世，像李白这样的剑客又怎能不心动。但是天意弄人，青莲剑客至死也未曾得见这把旷世宝剑。<br/>又几百年过去了，这把剑又横空出世，江湖又将掀起一场腥风血雨。也正在这期间，江湖中突然冒出一位年纪不满二十的少年，打破了这沉寂已久的江湖，此人便是夜灵犀。没有人知道这少年从哪里来，师出何门何派，只记得他只身一人前往少林，挑战主持方丈后全身而退。"}]}')},"56d7":function(e,n,t){"use strict";t.r(n);var c={};t.r(c),t.d(c,"levelTypeToName",(function(){return $})),t.d(c,"articleTypeToName",(function(){return E})),t.d(c,"novelTypeToName",(function(){return j})),t.d(c,"novelTypeToNames",(function(){return x})),t.d(c,"sectTypeToName",(function(){return D})),t.d(c,"kungfuTypeToName",(function(){return C})),t.d(c,"kungfuTypeToNames",(function(){return A}));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("4160"),t("d3b7"),t("159b"),t("b64b"),t("4de4");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view"),t("Foot",{directives:[{name:"show",rawName:"v-show",value:e.$route.meta.foot,expression:"$route.meta.foot"}]})],1)},r=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"foot-main"},[t("div",{class:"/home"===e.$route.path?"active":"",on:{click:function(n){return e.toPage("home")}}},[t("van-icon",{attrs:{name:"home-o"}}),t("span",[e._v("首页")])],1),t("div",{class:"/article"===e.$route.path?"active":"",on:{click:function(n){return e.toPage("article")}}},[t("van-icon",{attrs:{name:"orders-o"}}),t("span",[e._v("文章")])],1),t("div",{class:"/record"===e.$route.path?"active":"",on:{click:function(n){return e.toPage("record")}}},["/record"!==e.$route.path?t("van-icon",{attrs:{name:"circle"}}):e._e(),"/record"===e.$route.path?t("van-icon",{staticClass:"weight",attrs:{name:"plus"},on:{click:e.toRecord}}):e._e(),"/record"!==e.$route.path?t("span",[e._v("记录")]):e._e()],1),t("div",{class:"/datav"===e.$route.path?"active":"",on:{click:function(n){return e.toPage("datav")}}},[t("van-icon",{attrs:{name:"flower-o"}}),t("span",[e._v("生态")])],1),t("div",{class:"/user"===e.$route.path?"active":"",on:{click:function(n){return e.toPage("user")}}},[t("van-icon",{attrs:{name:"manager-o"}}),t("span",[e._v("我的")])],1)])},i=[],f=(t("ac1f"),t("5319"),t("d399")),l={methods:{toPage:function(e){switch(e){case"home":return void this.$router.replace({path:"/home"});case"article":return void this.$router.replace({path:"/article"});case"record":return void this.$router.replace({path:"/record"});case"datav":return void this.$router.push({path:"/datav"});case"user":return void this.$router.replace({path:"/user"});default:return}},toRecord:function(){Object(f["a"])("暂未开通")}}},s=l,h=(t("2e6d"),t("2877")),d=Object(h["a"])(s,u,i,!1,null,"a2191dfa",null),p=d.exports,k={name:"App",components:{Foot:p},mounted:function(){document.addEventListener("plusready",(function(){var e=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){e.canBack((function(n){n.canBack?e.back():e.close()}))}))}))}},m=k,b=(t("7c55"),Object(h["a"])(m,o,r,!1,null,null,null)),v=b.exports,g=t("a18c"),y=(t("5cfb"),t("4360")),L=t("b970"),N=(t("157a"),t("313e")),w=t.n(N),S=t("d6d3"),P=t.n(S),T=(t("451f"),t("fda2"),t("96eb")),O=t.n(T),_=t("4fd3");O.a.mock("/novelList",{code:"200",data:_.novelList});t("1276"),t("a15b");var $=function(e){var n="";switch(e){case"01":n="初级";break;case"02":n="中级";break;case"03":n="高级";break;default:break}return n},E=function(e){var n="";switch(e){case"01":n="最新";break;case"02":n="最热";break;case"03":n="人文";break;case"04":n="科技";break;case"05":n="历史";break;case"06":n="经济";break;case"07":n="诗词";break;case"08":n="歌赋";break;case"09":n="散文";break;default:break}return n},j=function(e){var n="";switch(e){case"01":n="武侠";break;case"02":n="爱情";break;case"03":n="家国";break;case"04":n="文艺";break;case"05":n="青春";break;default:break}return n},x=function(e){if(e){var n="",t=[];return e.split(",").forEach((function(e){t.push(j(e))})),n=t.join("/"),n}},D=function(e){var n="";switch(e){case"000":n="未知";break;case"001":n="燕云山庄";break;case"002":n="魔教";break;default:break}return n},C=function(e){var n="";switch(e){case"001":n="燕云七绝";break;case"002":n="乾坤生死诀";break;case"003":n="音波功";break;default:break}return n},A=function(e){var n="",t=[];return e.forEach((function(e){t.push(C(e))})),n=t.join("、"),n},F=t("6c29"),I=t("7910"),B=t.n(I),K=t("caf9");a["a"].prototype.$echarts=w.a,a["a"].use(K["a"],{loading:B.a}),a["a"].use(L["a"]),a["a"].use(P.a),a["a"].use(F["a"]),a["a"].config.productionTip=!1,Object.keys(c).forEach((function(e){a["a"].filter(e,c[e])}));new a["a"]({render:function(e){return e(v)},router:g["a"],store:y["a"]}).$mount("#app")},7910:function(e,n,t){e.exports=t.p+"img/logo.f792bc06.png"},"7c55":function(e,n,t){"use strict";t("2395")},a18c:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0"),t("ac1f");var c=t("2b0e"),a=t("8c4f");c["a"].use(a["a"]);var o=[{path:"*",redirect:"/login"},{name:"home",path:"/home",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-3a6f507f")]).then(t.bind(null,"22cd"))},meta:{foot:!0,title:"首页",path:"home"}},{name:"user",path:"/user",component:function(){return t.e("chunk-17b37db9").then(t.bind(null,"33a9"))},meta:{foot:!0,title:"我的",path:"user"}},{name:"novel",path:"/novel",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-9c04889a")]).then(t.bind(null,"20ab"))}},{name:"people",path:"/people",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-dde7cfd2")]).then(t.bind(null,"6f8b"))}},{name:"peopleDetail",path:"/peopleDetail",component:function(){return t.e("chunk-6f1e00ae").then(t.bind(null,"459b"))}},{name:"other",path:"/other",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-509d99de"),t.e("chunk-69430730")]).then(t.bind(null,"ed9c"))}},{name:"kungfu",path:"/kungfu",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-6831e005")]).then(t.bind(null,"95af"))}},{name:"sect",path:"/sect",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-509d99de"),t.e("chunk-316c51c0")]).then(t.bind(null,"5a23"))}},{name:"fatalism",path:"/fatalism",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-2a80f080")]).then(t.bind(null,"9132"))}},{name:"fatalismDetail",path:"/fatalismDetail",component:function(){return t.e("chunk-aa8932c4").then(t.bind(null,"662b"))}},{name:"weapon",path:"/weapon",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-509d99de"),t.e("chunk-6f399524")]).then(t.bind(null,"c257"))}},{name:"article",path:"/article",component:function(){return t.e("chunk-8f1d017a").then(t.bind(null,"a2b0"))},meta:{foot:!0,title:"文章",path:"article"}},{name:"articleDetail",path:"/articleDetail",component:function(){return t.e("chunk-bf048dac").then(t.bind(null,"9562"))}},{name:"chat",path:"/chat",component:function(){return Promise.all([t.e("chunk-509d99de"),t.e("chunk-6b080cf0")]).then(t.bind(null,"b03c4"))}},{name:"login",path:"/login",component:function(){return Promise.all([t.e("chunk-54c1dc72"),t.e("chunk-fba778da")]).then(t.bind(null,"efcf"))}},{name:"draw",path:"/draw",component:function(){return t.e("chunk-7f799b6c").then(t.bind(null,"8570"))}},{name:"games",path:"/games",component:function(){return t.e("chunk-f636022c").then(t.bind(null,"444d"))}},{name:"datav",path:"/datav",component:function(){return t.e("chunk-39148cba").then(t.bind(null,"4e01"))},meta:{foot:!0,title:"地图",path:"datav"}},{name:"record",path:"/record",component:function(){return t.e("chunk-64759c2c").then(t.bind(null,"1ec6"))},meta:{foot:!0,title:"记录",path:"record"}},{name:"music",path:"/music",component:function(){return t.e("chunk-5b7037c8").then(t.bind(null,"fd77"))}},{name:"dataInfo",path:"/dataInfo",component:function(){return t.e("chunk-2c6b0a55").then(t.bind(null,"cc30"))}}],r=a["a"].prototype.push,u=a["a"].prototype.replace;a["a"].prototype.push=function(e,n,t){n&&t?r.call(this,e,n,t):r.call(this,e,(function(){}),(function(){}))},a["a"].prototype.replace=function(e,n,t){n&&t?u.call(this,e,n,t):u.call(this,e,(function(){}),(function(){}))};var i=new a["a"]({routes:o,scrollBehavior:function(e,n,t){return{y:0}}});n["a"]=i},f19b:function(e,n,t){}});