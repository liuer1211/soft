(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15d4444a"],{"08fd":function(e,t,a){var o={"./1.jpg":"f4ac","./2.jpg":"e461","./4.jpg":"ff08","./lo.png":"f48e","./logo.png":"4d75"};function l(e){var t=n(e);return a(t)}function n(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}l.keys=function(){return Object.keys(o)},l.resolve=n,e.exports=l,l.id="08fd"},"35c1":function(e,t,a){},"3e5e":function(e,t,a){},"4d75":function(e,t,a){e.exports=a.p+"static/img/logo.f792bc06.png"},8496:function(e,t,a){"use strict";a("3e5e")},9455:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"people-main"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍编号"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍名"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"num",label:"书籍编号"}}),a("el-table-column",{attrs:{prop:"name",label:"书籍名"}}),a("el-table-column",{attrs:{prop:"weName",label:"兵器模块编号"}}),a("el-table-column",{attrs:{label:"操作",width:"120"}},[[a("el-button",{attrs:{type:"text"},on:{click:e.look}},[e._v("查看")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.flag,expression:"!flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"forms",attrs:{model:e.forms,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"兵器"}},[a("el-input",{attrs:{clearable:""},model:{value:e.forms.weapon,callback:function(t){e.$set(e.forms,"weapon",t)},expression:"forms.weapon"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitTwo}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableDatas,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"weapon",label:"兵器"}}),a("el-table-column",{attrs:{label:"图片"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:e.getImg(t.row.img)}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"160"}},[[a("el-button",{attrs:{type:"text"}},[e._v("查看")]),a("el-button",{attrs:{type:"text"}},[e._v("修改")]),a("el-button",{attrs:{type:"text"}},[e._v("删除")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChanges,"current-change":e.handleCurrentChanges}})],1),a("div",{staticClass:"novel-main-bot"},[a("el-button",{attrs:{type:"primary"},on:{click:e.typeAdd}},[e._v("新增")]),a("el-button",{on:{click:e.toBack}},[e._v("返回")])],1),a("Add",{attrs:{dialogFormVisible:e.dialogFormVisible},on:{toClose:function(){e.dialogFormVisible=!1},toDetermine:e.toDetermine}})],1)])},l=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible,fullscreen:"",center:"","show-close":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"model-one"},[a("el-form",{attrs:{model:e.formAddOne}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"兵器","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.formAddOne.weapon,callback:function(t){e.$set(e.formAddOne,"weapon",t)},expression:"formAddOne.weapon"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"图片","label-width":e.formLabelWidth}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.formAddOne.img?a("img",{staticClass:"avatar",attrs:{src:e.formAddOne.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"描述","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"请输入内容",maxlength:"300","show-word-limit":""},model:{value:e.formAddOne.des,callback:function(t){e.$set(e.formAddOne,"des",t)},expression:"formAddOne.des"}})],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.toClose}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.toDetermine}},[e._v("确 定")])],1)])],1)},r=[],s=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),{props:{dialogFormVisible:{type:Boolean,default:!1}},data:function(){return{formAddOne:{des:"",weapon:"",img:""},formLabelWidth:"120px"}},methods:{toClose:function(){this.$emit("toClose",!1)},toDetermine:function(){this.$emit("toDetermine",!1)},handleAvatarSuccess:function(e,t){this.formAddOne.img=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}}),i=s,c=(a("8496"),a("2877")),m=Object(c["a"])(i,n,r,!1,null,"173ce8a6",null),d=m.exports,u={components:{Add:d},data:function(){return{form:{id:"",num:"",name:""},tableData:[{id:"1",num:"0001",name:"夜灵犀传奇",weName:"w0001"},{id:"2",num:"0002",name:"血雨江湖",weName:"w0002"}],currentPage:1,total:400,pageSize:10,flag:!0,forms:{weapon:""},tableDatas:[{weapon:"黑曜",img:"2.jpg"},{weapon:"百鸟朝凤枪",img:"2.jpg"}],currentPages:1,totals:400,pageSizes:10,dialogFormVisible:!1}},methods:{look:function(){this.flag=!1},onSubmit:function(){console.log("submit!")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},getImg:function(e){if(e){var t=a("08fd")("./".concat(e));return t}},toBack:function(){this.flag=!0},handleSizeChanges:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChanges:function(e){console.log("当前页: ".concat(e))},typeAdd:function(){this.dialogFormVisible=!0},toDetermine:function(){this.dialogFormVisible=!1},onSubmitTwo:function(){}}},p=u,f=(a("eeae"),Object(c["a"])(p,o,l,!1,null,"abc25ed2",null));t["default"]=f.exports},e461:function(e,t,a){e.exports=a.p+"static/img/2.ca6a744a.jpg"},eeae:function(e,t,a){"use strict";a("35c1")},f4ac:function(e,t,a){e.exports=a.p+"static/img/1.65f77b91.jpg"},ff08:function(e,t,a){e.exports=a.p+"static/img/4.67bdab85.jpg"}}]);