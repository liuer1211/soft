(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-927cd3fa"],{"1dde":function(t,n,i){var a=i("d039"),e=i("b622"),r=i("2d00"),o=e("species");t.exports=function(t){return r>=51||!a((function(){var n=[],i=n.constructor={};return i[o]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"6f8b":function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"people-main"},[i("div",{staticClass:"model-main"},[i("div",{staticClass:"model-bg"},t._l(t.list,(function(n,a){return i("div",{key:a},[i("div",{on:{click:function(n){return t.toPage()}}},[t._m(0,!0),i("div",[t._v(" "+t._s(t.substr(n.name))+" ")])])])})),0)]),i("div",{staticClass:"start-main"},[i("div",{staticClass:"stars"},t._l(t.statrsCount,(function(t,n){return i("div",{key:n,ref:"star",refInFor:!0,staticClass:"star",on:{click:n}})})),0)]),i("RightModel")],1)},e=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"imgs"},[a("img",{attrs:{src:i("9915"),alt:""}})])}],r=(i("d3b7"),i("159b"),i("99af"),i("70a2")),o={components:{RightModel:r["a"]},data:function(){return{list:[{id:"1",img:"",name:"夜灵犀"},{id:"",img:"",name:"苏晚"},{id:"1",img:"",name:"百里梦"},{id:"",img:"",name:"妙乐"},{id:"",img:"",name:"冷面剑客"},{id:"1",img:"",name:"夜灵犀"},{id:"",img:"",name:"苏晚"},{id:"1",img:"",name:"百里梦"},{id:"",img:"",name:"妙乐"},{id:"",img:"",name:"冷面剑客"},{id:"1",img:"",name:"夜灵犀"},{id:"",img:"",name:"苏晚"},{id:"1",img:"",name:"百里梦"},{id:"",img:"",name:"妙乐"},{id:"",img:"",name:"冷面剑客"},{id:"1",img:"",name:"夜灵犀"},{id:"",img:"",name:"苏晚"},{id:"1",img:"",name:"百里梦"},{id:"",img:"",name:"妙乐"},{id:"",img:"",name:"冷面剑客"},{id:"1",img:"",name:"夜灵犀"},{id:"",img:"",name:"苏晚"},{id:"1",img:"",name:"百里梦"},{id:"",img:"",name:"妙乐"},{id:"",img:"",name:"冷面剑客"}],statrsCount:800,distance:1e3}},mounted:function(){this.getStar()},methods:{toPage:function(t){this.$router.push({name:"peopleDetail",params:{data:t}})},getStar:function(){var t=this,n=this.$refs.star;n.forEach((function(n){var i=.2+1*Math.random(),a=t.distance+300*Math.random();n.style.transformOrigin="0 0 ".concat(a,"px"),n.style.transform="translate3d(0,0,-".concat(a,"px)\n          rotateY(").concat(360*Math.random(),"deg) rotateX(").concat(-50*Math.random(),"deg) scale(").concat(i,",").concat(i,")")}))},substr:function(t){return t.length>3?t.substr(0,3)+"...":t}}},s=o,c=(i("8bbf"),i("2877")),d=Object(c["a"])(s,a,e,!1,null,"74549a6c",null);n["default"]=d.exports},8418:function(t,n,i){"use strict";var a=i("a04b"),e=i("9bf2"),r=i("5c6c");t.exports=function(t,n,i){var o=a(n);o in t?e.f(t,o,r(0,i)):t[o]=i}},"8bbf":function(t,n,i){"use strict";i("bc11")},"99af":function(t,n,i){"use strict";var a=i("23e7"),e=i("da84"),r=i("d039"),o=i("e8b5"),s=i("861d"),c=i("7b0b"),d=i("07fa"),m=i("8418"),u=i("65f0"),f=i("1dde"),l=i("b622"),g=i("2d00"),v=l("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",p=e.TypeError,C=g>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=f("concat"),_=function(t){if(!s(t))return!1;var n=t[v];return void 0!==n?!!n:o(t)},x=!C||!w;a({target:"Array",proto:!0,forced:x},{concat:function(t){var n,i,a,e,r,o=c(this),s=u(o,0),f=0;for(n=-1,a=arguments.length;n<a;n++)if(r=-1===n?o:arguments[n],_(r)){if(e=d(r),f+e>b)throw p(h);for(i=0;i<e;i++,f++)i in r&&m(s,f,r[i])}else{if(f>=b)throw p(h);m(s,f++,r)}return s.length=f,s}})},bc11:function(t,n,i){}}]);
//# sourceMappingURL=chunk-927cd3fa.8fa6bd44.js.map