(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d711076"],{"57d1":function(e,t,l){"use strict";l("618f")},"618f":function(e,t,l){},"70e5":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"people-main"},[l("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}]},[l("div",{staticClass:"search-main"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"书籍编号"}},[l("el-input",{attrs:{clearable:""},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"书籍名"}},[l("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1)],1),l("div",{staticClass:"novel-list"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[l("el-table-column",{attrs:{prop:"num",label:"书籍编号"}}),l("el-table-column",{attrs:{prop:"name",label:"书籍名"}}),l("el-table-column",{attrs:{prop:"peName",label:"武学模块编号"}}),l("el-table-column",{attrs:{label:"操作",width:"120"}},[[l("el-button",{attrs:{type:"text"},on:{click:e.look}},[e._v("查看")])]],2)],1)],1),l("div",{staticClass:"block"},[l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),l("div",{directives:[{name:"show",rawName:"v-show",value:!e.flag,expression:"!flag"}]},[l("div",{staticClass:"novel-list"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableDatas,border:"",stripe:""}},[l("el-table-column",{attrs:{prop:"value",label:"键"}}),l("el-table-column",{attrs:{prop:"label",label:"值"}}),l("el-table-column",{attrs:{label:"操作",width:"160"}},[[l("el-button",{attrs:{type:"text"}},[e._v("查看")]),l("el-button",{attrs:{type:"text"}},[e._v("修改")]),l("el-button",{attrs:{type:"text"}},[e._v("删除")])]],2)],1)],1),l("div",{staticClass:"block"},[l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChanges,"current-change":e.handleCurrentChanges}})],1),l("div",{staticClass:"novel-main-bot"},[l("el-button",{attrs:{type:"primary"},on:{click:e.typeAdd}},[e._v("新增")]),l("el-button",{on:{click:e.toBack}},[e._v("返回")])],1),l("Add",{attrs:{dialogFormVisible:e.dialogFormVisible},on:{toClose:function(){e.dialogFormVisible=!1},toDetermine:e.toDetermine}})],1)])},o=[],n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible,fullscreen:"",center:"","show-close":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("div",{staticClass:"model-one"},[l("el-form",{attrs:{model:e.formAddOne}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"键","label-width":e.formLabelWidth}},[l("el-input",{model:{value:e.formAddOne.value,callback:function(t){e.$set(e.formAddOne,"value",t)},expression:"formAddOne.value"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"值","label-width":e.formLabelWidth}},[l("el-input",{model:{value:e.formAddOne.label,callback:function(t){e.$set(e.formAddOne,"label",t)},expression:"formAddOne.label"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"描述","label-width":e.formLabelWidth}},[l("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"请输入内容",maxlength:"300","show-word-limit":""},model:{value:e.formAddOne.des,callback:function(t){e.$set(e.formAddOne,"des",t)},expression:"formAddOne.des"}})],1)],1)],1)],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.toClose}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.toDetermine}},[e._v("确 定")])],1)])],1)},i=[],s={props:{dialogFormVisible:{type:Boolean,default:!1}},data:function(){return{formAddOne:{des:"",value:"",label:""},formLabelWidth:"120px"}},methods:{toClose:function(){this.$emit("toClose",!1)},toDetermine:function(){this.$emit("toDetermine",!1)}}},r=s,c=(l("733d"),l("2877")),d=Object(c["a"])(r,n,i,!1,null,"2d91d328",null),m=d.exports,u={components:{Add:m},data:function(){return{form:{id:"",num:"",name:""},tableData:[{id:"1",num:"0001",name:"夜灵犀传奇",peName:"k0001"},{id:"2",num:"0002",name:"血雨江湖",peName:"k0002"}],currentPage:1,total:400,pageSize:10,flag:!0,tableDatas:[{value:"001",label:"燕云七绝"},{value:"002",label:"乾坤生死诀"},{value:"004",label:"音波功"}],currentPages:1,totals:400,pageSizes:10,dialogFormVisible:!1}},methods:{look:function(){this.flag=!1},onSubmit:function(){console.log("submit!")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},toBack:function(){this.flag=!0},handleSizeChanges:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChanges:function(e){console.log("当前页: ".concat(e))},typeAdd:function(){this.dialogFormVisible=!0},toDetermine:function(){this.dialogFormVisible=!1}}},b=u,p=(l("57d1"),Object(c["a"])(b,a,o,!1,null,"040d1276",null));t["default"]=p.exports},"733d":function(e,t,l){"use strict";l("815a")},"815a":function(e,t,l){}}]);