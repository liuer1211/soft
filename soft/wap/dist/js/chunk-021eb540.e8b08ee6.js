(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-021eb540"],{"01a8":function(n,t,i){"use strict";i("b09f")},"6f8b":function(n,t,i){"use strict";i.r(t);var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"people-main"},[i("div",{staticClass:"model-main"},[i("div",{staticClass:"model-bg"},n._l(n.list,(function(t,a){return i("div",{key:a},[i("div",{on:{click:function(i){return n.toPage(t)}}},[i("div",{staticClass:"imgs"},[i("img",{attrs:{src:n.getImg(t.img),alt:""}})]),i("div",[n._v(" "+n._s(n.substr(t.name))+" ")])])])})),0)]),i("div",{staticClass:"start-main"},[i("div",{staticClass:"stars"},n._l(n.statrsCount,(function(n,t){return i("div",{key:t,ref:"star",refInFor:!0,staticClass:"star",on:{click:t}})})),0)]),i("RightModel")],1)},e=[],s=(i("4160"),i("d3b7"),i("159b"),i("99af"),i("70a2")),o={components:{RightModel:s["a"]},data:function(){return{num:"",list:[{id:"1",img:"null.png",name:"夜灵犀",menpai:"燕云山庄",gongfu:"燕云七绝、乾坤生死诀、扶摇九天",miaoshu:"",shiji:"年少成名，一手绝技独步江湖。对于他的本事，江湖中人都是这样流传的“锦绣一挥，神佛难挡”。"},{id:"2",img:"2.jpg",name:"苏晚",menpai:"魔教",gongfu:"魅影迷踪、弹指沁音",miaoshu:"",shiji:""},{id:"3",img:"null.png",name:"百里梦",menpai:"名剑山庄",gongfu:"昔月剑法",miaoshu:"",shiji:""},{id:"4",img:"null.png",name:"妙乐",menpai:"少林寺",gongfu:"伏魔功",miaoshu:"",shiji:""},{id:"5",img:"null.png",name:"李玉帛",menpai:"正威镖局",gongfu:"燕云七绝、陆家剑法",miaoshu:"",shiji:""},{id:"6",img:"null.png",name:"陆秋艳",menpai:"正威镖局",gongfu:"陆家剑法",miaoshu:"",shiji:""},{id:"7",img:"null.png",name:"陆秋荣",menpai:"正威镖局",gongfu:"陆家剑法",miaoshu:"",shiji:""},{id:"8",img:"null.png",name:"李怀唐",menpai:"魔教",gongfu:"魅影迷踪、断魂掌",miaoshu:"",shiji:""},{id:"9",img:"null.png",name:"陈瞎子",menpai:"门派不详",gongfu:"扶摇九天、卜卦",miaoshu:"",shiji:""},{id:"10",img:"null.png",name:"风花雪月",menpai:"门派不详",gongfu:"箫、剑、折扇、暗器",miaoshu:"",shiji:""},{id:"11",img:"null.png",name:"梅林",menpai:"别离门",gongfu:"妙手回春",miaoshu:"",shiji:""}],statrsCount:800,distance:1e3}},mounted:function(){this.getStar()},created:function(){this.$store.state.novel.novelInfo&&this.$store.state.novel.novelInfo.num?this.getInitData():this.$router.go(-1)},methods:{getInitData:function(){this.num=this.$store.state.novel.novelInfo.num,this.num},toPage:function(n){this.$router.push({name:"peopleDetail",params:{data:n}})},getStar:function(){var n=this,t=this.$refs.star;t.forEach((function(t){var i=.2+1*Math.random(),a=n.distance+300*Math.random();t.style.transformOrigin="0 0 ".concat(a,"px"),t.style.transform="translate3d(0,0,-".concat(a,"px)\n          rotateY(").concat(360*Math.random(),"deg) rotateX(").concat(-50*Math.random(),"deg) scale(").concat(i,",").concat(i,")")}))},substr:function(n){return n.length>4?n.substr(0,4)+"...":n},getImg:function(n){if(n){var t=i("6070")("./".concat(n));return t}}}},r=o,u=(i("01a8"),i("2877")),c=Object(u["a"])(r,a,e,!1,null,"6a969392",null);t["default"]=c.exports},8418:function(n,t,i){"use strict";var a=i("a04b"),e=i("9bf2"),s=i("5c6c");n.exports=function(n,t,i){var o=a(t);o in n?e.f(n,o,s(0,i)):n[o]=i}},"99af":function(n,t,i){"use strict";var a=i("23e7"),e=i("da84"),s=i("d039"),o=i("e8b5"),r=i("861d"),u=i("7b0b"),c=i("07fa"),m=i("8418"),g=i("65f0"),l=i("1dde"),f=i("b622"),d=i("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",b=e.TypeError,j=d>=51||!s((function(){var n=[];return n[h]=!1,n.concat()[0]!==n})),C=l("concat"),w=function(n){if(!r(n))return!1;var t=n[h];return void 0!==t?!!t:o(n)},I=!j||!C;a({target:"Array",proto:!0,forced:I},{concat:function(n){var t,i,a,e,s,o=u(this),r=g(o,0),l=0;for(t=-1,a=arguments.length;t<a;t++)if(s=-1===t?o:arguments[t],w(s)){if(e=c(s),l+e>p)throw b(v);for(i=0;i<e;i++,l++)i in s&&m(r,l,s[i])}else{if(l>=p)throw b(v);m(r,l++,s)}return r.length=l,r}})},b09f:function(n,t,i){}}]);
//# sourceMappingURL=chunk-021eb540.e8b08ee6.js.map