(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-316c51c0"],{"0698":function(e,t,i){var s={"./1.jpg":"a1e6","./2.jpg":"bf5e","./3.jpg":"4069","./4.jpg":"b420","./5.jpg":"41f3","./y.jpg":"ce3d"};function n(e){var t=r(e);return i(t)}function r(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="0698"},4069:function(e,t,i){e.exports=i.p+"img/3.2c49c534.jpg"},"41f3":function(e,t,i){e.exports=i.p+"img/5.d13cf3c7.jpg"},"4f3c":function(e,t,i){"use strict";i("d9ec")},"5a23":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sect-main"},[i("div",{staticClass:"swiper mySwiper1"},[i("div",{staticClass:"swiper-wrapper"},e._l(e.list,(function(t,s){return i("div",{key:s,staticClass:"swiper-slide"},[i("div",[i("div",[e._v(e._s(t.name))]),i("div",[e._v(e._s(t.descr))])])])})),0)]),i("div",{staticClass:"swiper mySwiper2"},[i("div",{staticClass:"swiper-wrapper"},e._l(e.list,(function(t,s){return i("div",{key:"i"+s,staticClass:"swiper-slide"},[i("div",{staticClass:"bot-model"},[e._v(e._s(t.name))])])})),0)])])},n=[],r=i("1da1"),a=(i("96cf"),i("d401"),i("d3b7"),i("25f0"),i("d415")),c=i.n(a),o=(i("e25d"),i("eeb9")),p={data:function(){return{list:[]}},created:function(){this.getListDetail()},watch:{list:{handler:function(e,t){var i=this;this.$nextTick((function(){i.getInitDate()}))},deep:!0}},methods:{getListDetail:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.$route.params.id){t.next=8;break}return t.next=4,Object(o["a"])({novalId:e.$route.params.id.toString(),attribute:e.$route.params.data.code});case 4:i=t.sent,i.responseCode&&"0000"===i.responseCode&&(e.list=i.result,e.$store.dispatch("getNovelSectList",e.list)),t.next=9;break;case 8:e.$store.state.novel.novelSectList&&e.$store.state.novel.novelSectList.length?e.list=e.$store.state.novel.novelSectList:e.$router.go(-1);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),e.list=[{id:1,name:"燕云山庄",instro:"",descr:"四面环山，云雾缭绕，日出映月",img:"",createTime:"2022-07-16 16:10:51",novalId:"1",kungFu:"",sect:""},{id:8,name:"魔教",instro:"",descr:"断崖之上，云天之巅",img:"",createTime:"2022-07-16 16:10:51",novalId:"1",kungFu:"",sect:""}],e.$store.dispatch("getNovelSectList",e.list);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},getInitDate:function(){this.$nextTick((function(){var e=new c.a(".mySwiper2",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new c.a(".mySwiper1",{thumbs:{swiper:e}})}))},getImg:function(e){if(e){var t=i("0698")("./".concat(e));return t}}}},u=p,d=(i("4f3c"),i("2877")),l=Object(d["a"])(u,s,n,!1,null,"0ab11cac",null);t["default"]=l.exports},a1e6:function(e,t,i){e.exports=i.p+"img/1.92e8f40e.jpg"},b420:function(e,t,i){e.exports=i.p+"img/4.6cd1817a.jpg"},bf5e:function(e,t,i){e.exports=i.p+"img/2.adb7fc6a.jpg"},ce3d:function(e,t,i){e.exports=i.p+"img/y.eb20a202.jpg"},d9ec:function(e,t,i){}}]);
//# sourceMappingURL=chunk-316c51c0.01453be0.js.map