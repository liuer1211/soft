(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-017da666"],{8708:function(e,t,a){"use strict";a("f6f5")},cd6f:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"people-main"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍编号"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍名"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"num",label:"书籍编号"}}),a("el-table-column",{attrs:{prop:"name",label:"书籍名"}}),a("el-table-column",{attrs:{prop:"faName",label:"宿命模块编号"}}),a("el-table-column",{attrs:{label:"操作",width:"120"}},[[a("el-button",{attrs:{type:"text"},on:{click:e.look}},[e._v("查看")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.flag,expression:"!flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"forms",attrs:{model:e.forms,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"事件"}},[a("el-input",{attrs:{clearable:""},model:{value:e.forms.incident,callback:function(t){e.$set(e.forms,"incident",t)},expression:"forms.incident"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitTwo}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableDatas,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"incident",label:"事件"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"personnel",label:"参与人物"}}),a("el-table-column",{attrs:{label:"操作",width:"160"}},[[a("el-button",{attrs:{type:"text"}},[e._v("查看")]),a("el-button",{attrs:{type:"text"}},[e._v("修改")]),a("el-button",{attrs:{type:"text"}},[e._v("删除")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChanges,"current-change":e.handleCurrentChanges}})],1),a("div",{staticClass:"novel-main-bot"},[a("el-button",{attrs:{type:"primary"},on:{click:e.typeAdd}},[e._v("新增")]),a("el-button",{on:{click:e.toBack}},[e._v("返回")])],1),a("Add",{attrs:{dialogFormVisible:e.dialogFormVisible},on:{toClose:function(){e.dialogFormVisible=!1},toDetermine:e.toDetermine}})],1)])},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible,fullscreen:"",center:"","show-close":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"model-one"},[a("el-form",{attrs:{model:e.formAddOne}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"事件","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.formAddOne.incident,callback:function(t){e.$set(e.formAddOne,"incident",t)},expression:"formAddOne.incident"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"地址","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.formAddOne.address,callback:function(t){e.$set(e.formAddOne,"address",t)},expression:"formAddOne.address"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"参与人物","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.formAddOne.personnel,callback:function(t){e.$set(e.formAddOne,"personnel",t)},expression:"formAddOne.personnel"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"描述","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"请输入内容",maxlength:"300","show-word-limit":""},model:{value:e.formAddOne.des,callback:function(t){e.$set(e.formAddOne,"des",t)},expression:"formAddOne.des"}})],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.toClose}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.toDetermine}},[e._v("确 定")])],1)])],1)},s=[],i={props:{dialogFormVisible:{type:Boolean,default:!1}},data:function(){return{formAddOne:{des:"",incident:"",address:"",personnel:""},formLabelWidth:"120px"}},methods:{toClose:function(){this.$emit("toClose",!1)},toDetermine:function(){this.$emit("toDetermine",!1)}}},r=i,c=(a("e91a"),a("2877")),d=Object(c["a"])(r,o,s,!1,null,"38bcd7ef",null),m=d.exports,u={components:{Add:m},data:function(){return{form:{id:"",num:"",name:""},tableData:[{id:"1",num:"0001",name:"夜灵犀传奇",faName:"f0001"},{id:"2",num:"0002",name:"血雨江湖",faName:"f0002"}],currentPage:1,total:400,pageSize:10,flag:!0,forms:{incident:""},tableDatas:[{incident:"初试江湖",address:"少林寺",personnel:"夜灵犀"},{incident:"初试江湖",address:"少林寺",personnel:"夜灵犀"},{incident:"初试江湖",address:"少林寺",personnel:"夜灵犀"}],currentPages:1,totals:400,pageSizes:10,dialogFormVisible:!1}},methods:{look:function(){this.flag=!1},onSubmit:function(){console.log("submit!")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},toBack:function(){this.flag=!0},handleSizeChanges:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChanges:function(e){console.log("当前页: ".concat(e))},typeAdd:function(){this.dialogFormVisible=!0},toDetermine:function(){this.dialogFormVisible=!1},onSubmitTwo:function(){}}},f=u,p=(a("8708"),Object(c["a"])(f,l,n,!1,null,"2a0775c8",null));t["default"]=p.exports},dafe:function(e,t,a){},e91a:function(e,t,a){"use strict";a("dafe")},f6f5:function(e,t,a){}}]);