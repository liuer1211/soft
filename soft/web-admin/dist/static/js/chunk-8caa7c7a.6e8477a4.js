(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8caa7c7a"],{"08fd":function(e,t,a){var l={"./1.jpg":"f4ac","./2.jpg":"e461","./4.jpg":"ff08","./lo.png":"f48e","./logo.png":"4d75"};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}o.keys=function(){return Object.keys(l)},o.resolve=n,e.exports=o,o.id="08fd"},"28ca":function(e,t,a){"use strict";a("eb56")},"2bcf":function(e,t,a){"use strict";a("55c2")},"4d75":function(e,t,a){e.exports=a.p+"static/img/logo.f792bc06.png"},"55c2":function(e,t,a){},e461:function(e,t,a){e.exports=a.p+"static/img/2.ca6a744a.jpg"},e496:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"people-main"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍编号"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"书籍名"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"num",label:"书籍编号"}}),a("el-table-column",{attrs:{prop:"name",label:"书籍名"}}),a("el-table-column",{attrs:{prop:"peName",label:"人物模块编号"}}),a("el-table-column",{attrs:{label:"操作",width:"120"}},[[a("el-button",{attrs:{type:"text"},on:{click:e.look}},[e._v("查看")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.flag,expression:"!flag"}]},[a("div",{staticClass:"search-main"},[a("el-form",{ref:"forms",attrs:{model:e.forms,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{clearable:""},model:{value:e.forms.name,callback:function(t){e.$set(e.forms,"name",t)},expression:"forms.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"门派"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.forms.sect,callback:function(t){e.$set(e.forms,"sect",t)},expression:"forms.sect"}},e._l(e.sectList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitTwo}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",{staticClass:"novel-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableDatas,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{label:"门派"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("sectTypeToName")(t.row.sect)))])]}}])}),a("el-table-column",{attrs:{label:"武学"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("kungfuTypeToNames")(t.row.kungfu)))])]}}])}),a("el-table-column",{attrs:{label:"头像"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:e.getImg(t.row.img)}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"120"}},[[a("el-button",{attrs:{type:"text"}},[e._v("查看")]),a("el-button",{attrs:{type:"text"}},[e._v("修改")])]],2)],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChanges,"current-change":e.handleCurrentChanges}})],1),a("div",{staticClass:"novel-main-bot"},[a("el-button",{attrs:{type:"primary"},on:{click:e.typeAdd}},[e._v("新增")]),a("el-button",{on:{click:e.toBack}},[e._v("返回")])],1),a("Add",{attrs:{dialogFormVisible:e.dialogFormVisible},on:{toClose:function(){e.dialogFormVisible=!1},toDetermine:e.toDetermine}})],1)])},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible,fullscreen:"",center:"","show-close":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"model-one"},[a("el-form",{attrs:{model:e.formAddOne}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.formAddOne.name,callback:function(t){e.$set(e.formAddOne,"name",t)},expression:"formAddOne.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"门派","label-width":e.formLabelWidth}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formAddOne.sect,callback:function(t){e.$set(e.formAddOne,"sect",t)},expression:"formAddOne.sect"}},e._l(e.sectList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"武学","label-width":e.formLabelWidth}},[a("el-select",{attrs:{clearable:"",multiple:"",placeholder:"请选择"},model:{value:e.formAddOne.kungfu,callback:function(t){e.$set(e.formAddOne,"kungfu",t)},expression:"formAddOne.kungfu"}},e._l(e.kungfuList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"上传头像","label-width":e.formLabelWidth}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.formAddOne.img?a("img",{staticClass:"avatar",attrs:{src:e.formAddOne.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"描述","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"请输入内容",maxlength:"300","show-word-limit":""},model:{value:e.formAddOne.des,callback:function(t){e.$set(e.formAddOne,"des",t)},expression:"formAddOne.des"}})],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.toClose}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.toDetermine}},[e._v("确 定")])],1)])],1)},s=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),{props:{dialogFormVisible:{type:Boolean,default:!1}},data:function(){return{sectList:[{value:"000",label:"未知"},{value:"001",label:"燕云山庄"},{value:"002",label:"魔教"}],kungfuList:[{value:"001",label:"燕云七绝"},{value:"002",label:"乾坤生死诀"},{value:"004",label:"音波功"}],formAddOne:{name:"",des:"",sect:"",kungfu:[],img:""},formLabelWidth:"120px"}},methods:{toClose:function(){this.$emit("toClose",!1)},toDetermine:function(){this.$emit("toDetermine",!1)},handleAvatarSuccess:function(e,t){this.formAddOne.img=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}}),i=r,c=(a("2bcf"),a("2877")),u=Object(c["a"])(i,n,s,!1,null,"1308887a",null),m=u.exports,d={components:{Add:m},data:function(){return{sectList:[{value:"000",label:"未知"},{value:"001",label:"燕云山庄"},{value:"002",label:"魔教"}],form:{id:"",num:"",name:""},tableData:[{id:"1",num:"0001",name:"夜灵犀传奇",peName:"p0001"},{id:"2",num:"0002",name:"血雨江湖",peName:"p0002"}],currentPage:1,total:400,pageSize:10,flag:!0,forms:{name:"",sect:""},tableDatas:[{id:"1",name:"夜灵犀",img:"1.jpg",sect:"001",kungfu:["001","002"]},{id:"2",name:"苏晚",img:"2.jpg",sect:"002",kungfu:["003"]}],currentPages:1,totals:400,pageSizes:10,dialogFormVisible:!1}},methods:{look:function(){this.flag=!1},onSubmit:function(){console.log("submit!")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},getImg:function(e){if(e){var t=a("08fd")("./".concat(e));return t}},toBack:function(){this.flag=!0},handleSizeChanges:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChanges:function(e){console.log("当前页: ".concat(e))},typeAdd:function(){this.dialogFormVisible=!0},toDetermine:function(){this.dialogFormVisible=!1},onSubmitTwo:function(){}}},f=d,p=(a("28ca"),Object(c["a"])(f,l,o,!1,null,"57ddc084",null));t["default"]=p.exports},eb56:function(e,t,a){},f4ac:function(e,t,a){e.exports=a.p+"static/img/1.65f77b91.jpg"},ff08:function(e,t,a){e.exports=a.p+"static/img/4.67bdab85.jpg"}}]);