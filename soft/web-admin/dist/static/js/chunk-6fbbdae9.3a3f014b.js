(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fbbdae9"],{"61e0":function(e,t,a){"use strict";a("f0c1")},dca4:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"novel-main"},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名字"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.selectVal,callback:function(t){e.$set(e.form,"selectVal",t)},expression:"form.selectVal"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("删除")])]}}])})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":10,layout:"prev, pager, next, jumper, ->, sizes, total",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("div",{staticClass:"novel-main-bot"},[a("el-button",{attrs:{type:"primary"}},[e._v("新增")])],1)])},n=[],o={data:function(){return{form:{name:"",selectVal:""},options:[{value:"01",label:"武侠"},{value:"02",label:"文艺"}],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentPage:1}},methods:{onSubmit:function(){console.log("submit!")},handleClick:function(e){console.log(e)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))}}},r=o,s=(a("61e0"),a("2877")),c=Object(s["a"])(r,l,n,!1,null,"37abb8f8",null);t["default"]=c.exports},f0c1:function(e,t,a){}}]);