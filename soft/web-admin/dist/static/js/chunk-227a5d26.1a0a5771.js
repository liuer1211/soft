(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-227a5d26"],{"47e5":function(t,e,n){},"4dcd":function(t,e,n){},"7adc":function(t,e,n){"use strict";n("8a39")},8761:function(t,e,n){"use strict";n("f423")},"8a39":function(t,e,n){},9406:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"des-card"},[n("Card")],1),n("div",{staticClass:"de-main"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"des-wer-main"},[n("div",{staticClass:"top"},[n("div",{staticClass:"left"},[t.weather.forecast?n("div",[t._v(t._s(t.weather.forecast[0].type))]):t._e()]),t.weather.forecast?n("div",{staticClass:"rig"},[n("div",[t._v(t._s(t.weather.forecast[0].date))]),n("div",[t._v(t._s(t.weather.forecast[0].high))]),n("div",[t._v(t._s(t.weather.forecast[0].low))]),n("div",[t._v(t._s(t.weather.forecast[0].type))]),n("div",[t._v(t._s(t.weather.forecast[0].fengxiang))])]):t._e()]),t.weather.forecast?n("div",{staticClass:"cen"},[n("div",{staticClass:"one"},[n("div",[t._v(t._s(t.city))])]),t._l(t.weather.forecast,(function(e,i){return n("div",{key:i},[n("div",[t._v(t._s(e.date))]),n("div",[t._v(t._s(e.high))]),n("div",[t._v(t._s(e.low))]),n("div",[t._v(t._s(e.type))])])}))],2):t._e(),n("div",{staticClass:"bot"},[t._v(" * "+t._s(t.weather.ganmao)+" ")])])])],1)],1),n("div",[n("el-tiptap",{attrs:{extensions:t.extensions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("el-button",{on:{click:t.getData}},[t._v("获取")])],1)])},a=[],s=n("1da1"),o=n("5530"),r=(n("d3b7"),n("ac1f"),n("1276"),n("96cf"),n("2f62")),c=n("bc3a"),l=n.n(c),u=n("024c"),f=n.n(u),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:6}},[n("el-card",[n("Detail",{attrs:{tits:t.tits},scopedSlots:t._u([{key:"tit",fn:function(e){return[t._v(" "+t._s(e.value[0])+" ")]}}])},[n("template",{slot:"top"},[n("Echar")],1),n("template",{slot:"footer"},[t._v(" 日访问量：888 ")])],2)],1)],1),n("el-col",{attrs:{span:6}},[n("el-card",[n("Detail",{attrs:{tits:t.tits},scopedSlots:t._u([{key:"tit",fn:function(e){return[t._v(" "+t._s(e.value[1])+" ")]}}])},[n("template",{slot:"top"},[n("BarEchar")],1),n("template",{slot:"footer"},[t._v(" 点击率：35% ")])],2)],1)],1),n("el-col",{attrs:{span:6}},[n("el-card",[n("Detail",{attrs:{tits:t.tits},scopedSlots:t._u([{key:"tit",fn:function(e){return[t._v(" "+t._s(e.value[2])+" ")]}}])})],1)],1),n("el-col",{attrs:{span:6}},[n("el-card",[n("Detail",{attrs:{tits:t.tits},scopedSlots:t._u([{key:"tit",fn:function(e){return[t._v(" "+t._s(e.value[3])+" ")]}}])})],1)],1)],1)],1)},h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._t("tit",null,{value:t.tits})],2),n("div",[t._t("top")],2),n("div",{staticClass:"detail-border"},[t._t("footer")],2)])},v=[],w={props:["tits"],data:function(){return{}},created:function(){}},g=w,m=(n("bf67"),n("2877")),_=Object(m["a"])(g,p,v,!1,null,"547caa4f",null),b=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"echarts",staticClass:"echarts"})},x=[],C={data:function(){return{}},mounted:function(){this.getInit()},methods:{getInit:function(){var t=this.$echarts.init(this.$refs.echarts);t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"line",data:[10,12,25,8,23,56,99],itemStyle:{opacity:0},lineStyle:{color:"purple"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"purple"},{offset:1,color:"#fff"}],global:!1}}}],grid:{top:0,bottom:0,left:0,right:0}})}}},k=C,I=(n("8761"),Object(m["a"])(k,y,x,!1,null,"590cf51e",null)),j=I.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"echarts",staticClass:"echarts"})},E=[],S={data:function(){return{}},mounted:function(){this.getInit()},methods:{getInit:function(){var t=this.$echarts.init(this.$refs.echarts);t.setOption({xAxis:{type:"category"},yAxis:{show:!1},series:[{type:"bar",data:[10,12,25,8,23,56,99],color:"#21c2ff"}],tooltip:{},grid:{top:0,bottom:0,left:0,right:0}})}}},$=S,D=(n("7adc"),Object(m["a"])($,O,E,!1,null,"61e8ff0f",null)),A=D.exports,J={components:{Detail:b,Echar:j,BarEchar:A},data:function(){return{tits:["热门","最新","发展","回顾"]}}},z=J,L=Object(m["a"])(z,d,h,!1,null,"36ba5456",null),N=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-editor"},[n("editor",t._g(t._b({attrs:{id:t.tinymceId,init:t.init},model:{value:t.myValue,callback:function(e){t.myValue="string"===typeof e?e.trim():e},expression:"myValue"}},"editor",t.$attrs,!1),t.inputListeners))],1)},R=[],T=(n("a9e3"),n("e562")),V=n.n(T),B=n("ca72"),G=(n("bd52"),n("0d68"),n("46c3"),n("4ea8"),n("3aea"),n("07d1"),n("84ec8"),n("9434"),n("4237"),n("64d8"),n("0a9d"),n("3154"),n("0aa0"),{components:{Editor:B["a"]},name:"Tinymce",props:{id:{type:String,default:function(){return(new Date).getTime()+""}},value:{type:String,default:""},height:{type:Number,default:300},plugins:{type:[String,Array],default:"link lists image code table wordcount media preview fullscreen help"},toolbar:{type:[String,Array],default:"bold italic underline strikethrough | fontsizeselect | formatselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent blockquote | undo redo | link unlink code lists table image media | removeformat | fullscreen preview"}},data:function(){var t=this;return{tinymceId:this.id,init:{selector:"#".concat(this.tinymceId),language_url:"/tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"/tinymce/skins/ui/oxide",height:this.height,branding:!1,menubar:!1,statusbar:!1,plugins:this.plugins,toolbar:this.toolbar,images_upload_handler:function(t,e,n){var i="data:image/jpeg;base64,"+t.base64();e(i)},setup:function(e){e.on("init",(function(){t.isInit=!0,t.value&&(e.setContent(t.value),t.isInit=!1),e.on("input change undo redo",(function(){t.isInit=!1}))}))}},myValue:this.value,isInit:!1}},computed:{inputListeners:function(){var t=this,e=Object(o["a"])(Object(o["a"])({},this.$listeners),{},{input:function(e){t.$emit("input",e)}});return e}},mounted:function(){V.a.init({})},beforeDestroy:function(){V.a.remove(this.tinymceId)},methods:{getTextContent:function(){var t=V.a.get(this.tinymceId);return t.getContent({format:"text"})}},watch:{value:function(t){var e=this;this.isInit&&(this.isInit=!1,this.$nextTick((function(){var n=V.a.get(e.tinymceId);n.setContent(t)})))}}}),q=G,H=Object(m["a"])(q,P,R,!1,null,null,null),M=H.exports,W=n("4ccc"),F={name:"Dashboard",components:{Edit:M,Card:N},computed:Object(o["a"])({},Object(r["b"])(["name"])),data:function(){return{citys:{},weather:{},city:"",extensions:[new W["e"],new W["F"],new W["w"],new W["l"]({level:6}),new W["b"]({bubble:!0}),new W["M"]({bubble:!0,menubar:!1}),new W["r"],new W["A"],new W["u"],new W["c"],new W["v"],new W["t"],new W["p"],new W["o"],new W["d"],new W["a"],new W["J"],new W["K"],new W["G"],new W["g"],new W["h"],new W["z"],new W["j"],new W["y"],new W["x"],new W["I"],new W["H"],new W["i"],new W["B"]({resizable:!0}),new W["D"],new W["C"],new W["E"],new W["m"],new W["L"],new W["k"],new W["n"],new W["s"],new W["q"]],content:""}},created:function(){this.getLocal()},mounted:function(){},methods:{getData:function(){console.log(this.content)},getCon:function(){console.log(tinymce.activeEditor.getContent())},getInit:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},getIp:function(){return new Promise((function(t,e){l.a.get("/cityjson?ie=utf-8").then((function(e){var n=e.data.split("=")[1],i=n.split(";")[0],a=JSON.parse(i);t(a)})).catch((function(t){console.log(t),e(t)}))}))},getCity:function(t){return new Promise((function(e,n){l.a.get("/ipJson.jsp?callback=testJson&ip=".concat(t)).then((function(t){var n=t.data.split("{")[2],i="{"+n.split("}")[0]+"}",a=JSON.parse(i);e(a)})).catch((function(t){console.log(t),n(t)}))}))},getWeather:function(t){return new Promise((function(e,n){l.a.get("/weather_mini?city=".concat(t)).then((function(t){var n=t.data.data;e(n)})).catch((function(t){console.log(t),n(t)}))}))},getLocal:function(){var t=this;f.a.plugin("AMap.Geolocation",(function(){var e=new f.a.Geolocation({enableHighAccuracy:!0,timeout:1e4});e.getCityInfo(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("complete"!=n){e.next=5;break}return t.city=i.city,e.next=4,t.getWeather(t.city);case 4:t.weather=e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.getCurrentPosition((function(t,e){}))}))}}},K=F,Q=(n("f400"),Object(m["a"])(K,i,a,!1,null,"44aa3285",null));e["default"]=Q.exports},bf67:function(t,e,n){"use strict";n("47e5")},f400:function(t,e,n){"use strict";n("4dcd")},f423:function(t,e,n){}}]);