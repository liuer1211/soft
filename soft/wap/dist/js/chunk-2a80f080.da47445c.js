(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a80f080"],{9132:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fatalism-main"},[s("div",{staticClass:"fatalism-model"},[t._l(t.list,(function(e,a){return s("div",{key:a,staticClass:"round",style:{top:e.top+"%",left:e.left+"%"},on:{click:function(s){return s.stopPropagation(),t.goPage(e)}}})})),t._l(t.list,(function(e,a){return s("div",{key:"id"+a,staticClass:"info",style:{top:e.topTip+"%",left:e.leftTip+"%"},on:{click:function(s){return s.stopPropagation(),t.goPage(e)}}},[t._v(" "+t._s(e.instro)+" ")])}))],2),s("div",{staticClass:"fat-fix"})])},i=[],n=s("1da1"),o=(s("96cf"),s("d401"),s("d3b7"),s("25f0"),s("4160"),s("159b"),s("eeb9")),r={data:function(){return{list:[]}},mounted:function(){},created:function(){this.getListDetail()},methods:{getListDetail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t.$route.params.id){e.next=8;break}return e.next=4,Object(o["a"])({novalId:t.$route.params.id.toString(),attribute:t.$route.params.data.code});case 4:s=e.sent,s.responseCode&&"0000"===s.responseCode&&(t.list=s.result,t.list.forEach((function(e,s){t.$set(e,"top",10*s+10),t.$set(e,"topTip",10*s+4),s%2===0?(t.$set(e,"left",15),t.$set(e,"leftTip",13)):(t.$set(e,"left",70),t.$set(e,"leftTip",68))})),t.$store.dispatch("getNovelFatalismList",t.list)),e.next=9;break;case 8:t.$store.state.novel.novelFatalismList&&t.$store.state.novel.novelFatalismList.length?t.list=t.$store.state.novel.novelFatalismList:t.$router.go(-1);case 9:e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](0),t.list=[{id:"1",name:"夜灵犀、恒叶方丈",instro:"初试江湖",descr:"",img:"",createTime:"2022-07-16 16:10:51",novalId:"1",address:"少林寺",sect:""},{id:"2",name:"夜灵犀、百里梦、妙乐",instro:"山庄论剑",descr:"",img:"",createTime:"2022-07-16 16:10:51",novalId:"1",address:"名剑山庄",sect:""},{id:"3",name:"夜灵犀、朱四爷",instro:"秘密会谈",descr:"",img:"",createTime:"2022-07-16 16:10:51",novalId:"1",address:"月与楼",sect:""}],t.list.forEach((function(e,s){t.$set(e,"top",10*s+10),t.$set(e,"topTip",10*s+4),s%2===0?(t.$set(e,"left",15),t.$set(e,"leftTip",13)):(t.$set(e,"left",70),t.$set(e,"leftTip",68))})),t.$store.dispatch("getNovelFatalismList",t.list);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))()},goPage:function(t){this.$router.push({name:"fatalismDetail",params:{data:t}})}}},l=r,c=(s("95ac"),s("2877")),u=Object(c["a"])(l,a,i,!1,null,"61d60676",null);e["default"]=u.exports},"95ac":function(t,e,s){"use strict";s("f321")},f321:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2a80f080.da47445c.js.map