(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22e8ce3c"],{"4cfd":function(t,e,a){"use strict";a("c405")},b306:function(t,e,a){},ba06:function(t,e,a){"use strict";a("b306")},bf72:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"people-main"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍编号"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍名"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"num",label:"书籍编号"}}),a("el-table-column",{attrs:{prop:"name",label:"书籍名"}}),a("el-table-column",{attrs:{prop:"otName",label:"其他模块编号"}}),a("el-table-column",{attrs:{label:"操作",width:"120"}},[[a("el-button",{attrs:{type:"text"},on:{click:t.look}},[t._v("查看")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":t.pageSize,total:t.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"forms",attrs:{model:t.forms,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{clearable:""},model:{value:t.forms.title,callback:function(e){t.$set(t.forms,"title",e)},expression:"forms.title"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"作者"}},[a("el-input",{attrs:{clearable:""},model:{value:t.forms.author,callback:function(e){t.$set(t.forms,"author",e)},expression:"forms.author"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitTwo}},[t._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDatas,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"title",label:"标题"}}),a("el-table-column",{attrs:{prop:"author",label:"作者"}}),a("el-table-column",{attrs:{label:"操作",width:"160"}},[[a("el-button",{attrs:{type:"text"}},[t._v("查看")]),a("el-button",{attrs:{type:"text"}},[t._v("修改")]),a("el-button",{attrs:{type:"text"}},[t._v("删除")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":t.pageSize,total:t.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":t.handleSizeChanges,"current-change":t.handleCurrentChanges}})],1),a("div",{staticClass:"novel-main-bot"},[a("el-button",{attrs:{type:"primary"},on:{click:t.typeAdd}},[t._v("新增")]),a("el-button",{on:{click:t.toBack}},[t._v("返回")])],1),a("Add",{attrs:{dialogFormVisible:t.dialogFormVisible},on:{toClose:function(){t.dialogFormVisible=!1},toDetermine:t.toDetermine}})],1)])},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"新增",visible:t.dialogFormVisible,fullscreen:"",center:"","show-close":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",{staticClass:"model-one"},[a("el-form",{attrs:{model:t.formAddOne}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"标题","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.formAddOne.title,callback:function(e){t.$set(t.formAddOne,"title",e)},expression:"formAddOne.title"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"作者","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.formAddOne.author,callback:function(e){t.$set(t.formAddOne,"author",e)},expression:"formAddOne.author"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"描述","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"请输入内容",maxlength:"300","show-word-limit":""},model:{value:t.formAddOne.des,callback:function(e){t.$set(t.formAddOne,"des",e)},expression:"formAddOne.des"}})],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.toClose}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.toDetermine}},[t._v("确 定")])],1)])],1)},r=[],i={props:{dialogFormVisible:{type:Boolean,default:!1}},data:function(){return{formAddOne:{des:"",title:"",author:""},formLabelWidth:"120px"}},methods:{toClose:function(){this.$emit("toClose",!1)},toDetermine:function(){this.$emit("toDetermine",!1)}}},s=i,c=(a("ba06"),a("2877")),m=Object(c["a"])(s,n,r,!1,null,"ff629392",null),u=m.exports,d={components:{Add:u},data:function(){return{form:{id:"",num:"",name:""},tableData:[{id:"1",num:"0001",name:"夜灵犀传奇",otName:"t0001"},{id:"2",num:"0002",name:"血雨江湖",otName:"t0002"}],currentPage:1,total:400,pageSize:10,flag:!0,forms:{title:"",author:""},tableDatas:[{title:"影成双",author:""},{title:"无题",author:""}],currentPages:1,totals:400,pageSizes:10,dialogFormVisible:!1}},methods:{look:function(){this.flag=!1},onSubmit:function(){console.log("submit!")},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},toBack:function(){this.flag=!0},handleSizeChanges:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChanges:function(t){console.log("当前页: ".concat(t))},typeAdd:function(){this.dialogFormVisible=!0},toDetermine:function(){this.dialogFormVisible=!1},onSubmitTwo:function(){}}},f=d,b=(a("4cfd"),Object(c["a"])(f,l,o,!1,null,"76ab07fa",null));e["default"]=b.exports},c405:function(t,e,a){}}]);