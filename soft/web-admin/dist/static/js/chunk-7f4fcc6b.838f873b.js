(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4fcc6b"],{"08fd":function(e,t,l){var a={"./1.jpg":"f4ac","./2.jpg":"e461","./4.jpg":"ff08","./lo.png":"f48e","./logo.png":"4d75"};function o(e){var t=n(e);return l(t)}function n(e){if(!l.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=n,e.exports=o,o.id="08fd"},"14e7":function(e,t,l){"use strict";l("ed03")},1635:function(e,t,l){},"4d75":function(e,t,l){e.exports=l.p+"static/img/logo.f792bc06.png"},d11b:function(e,t,l){"use strict";l("1635")},dca4:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"novel-main"},[l("div",{staticClass:"search-main"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"书名"}},[l("el-input",{attrs:{clearable:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"作者"}},[l("el-input",{attrs:{clearable:""},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"类型"}},[l("el-select",{attrs:{clearable:"",multiple:"",placeholder:"请选择"},model:{value:e.form.selectVal,callback:function(t){e.$set(e.form,"selectVal",t)},expression:"form.selectVal"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1)],1),l("div",{staticClass:"novel-list"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[l("el-table-column",{attrs:{prop:"title",label:"书名",width:"180"}}),l("el-table-column",{attrs:{prop:"author",label:"作者"}}),l("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(e._f("novelTypeToNames")(t.row.type)))])]}}])}),l("el-table-column",{attrs:{label:"封面"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("img",{attrs:{src:e.getImg(t.row.img)}})]}}])}),l("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),l("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text"},on:{click:function(l){return e.look(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text"}},[e._v("编辑")]),l("el-button",{attrs:{type:"text"}},[e._v("删除")])]}}])})],1)],1),l("div",{staticClass:"block"},[l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,total:e.total,layout:"prev, pager, next, jumper, ->, sizes, total"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),l("div",{staticClass:"novel-main-bot"},[l("el-button",{attrs:{type:"primary"},on:{click:e.typeAdd}},[e._v("新增")])],1),l("Add",{attrs:{dialogFormVisible:e.dialogFormVisible},on:{toClose:function(){e.dialogFormVisible=!1},toDetermine:e.toDetermine}})],1)},o=[],n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible,fullscreen:"",center:"","show-close":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("div",{staticClass:"model-one"},[l("el-form",{attrs:{model:e.formAddOne}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"书名","label-width":e.formLabelWidth}},[l("el-input",{model:{value:e.formAddOne.title,callback:function(t){e.$set(e.formAddOne,"title",t)},expression:"formAddOne.title"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"作者","label-width":e.formLabelWidth}},[l("el-input",{model:{value:e.formAddOne.author,callback:function(t){e.$set(e.formAddOne,"author",t)},expression:"formAddOne.author"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"书籍类型","label-width":e.formLabelWidth}},[l("el-select",{attrs:{clearable:"",multiple:"",placeholder:"请选择"},model:{value:e.formAddOne.type,callback:function(t){e.$set(e.formAddOne,"type",t)},expression:"formAddOne.type"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"内容类别","label-width":e.formLabelWidth}},[l("el-select",{attrs:{clearable:"",multiple:"",placeholder:"请选择"},model:{value:e.formAddOne.infoType,callback:function(t){e.$set(e.formAddOne,"infoType",t)},expression:"formAddOne.infoType"}},e._l(e.optionsType,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"简介","label-width":e.formLabelWidth}},[l("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"请输入内容",maxlength:"300","show-word-limit":""},model:{value:e.formAddOne.des,callback:function(t){e.$set(e.formAddOne,"des",t)},expression:"formAddOne.des"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"上传封面","label-width":e.formLabelWidth}},[l("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.formAddOne.img?l("img",{staticClass:"avatar",attrs:{src:e.formAddOne.img}}):l("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"上传视频","label-width":e.formLabelWidth}},[l("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,"on-exceed":e.handleExceed,"file-list":e.fileList}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1)],1)],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.toClose}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.toDetermine}},[e._v("确 定")])],1)])],1)},r=[],i=(l("d3b7"),l("3ca3"),l("ddb0"),l("2b3d"),l("9861"),l("99af"),l("b0c0"),{props:{dialogFormVisible:{type:Boolean,default:!1}},data:function(){return{optionsType:[{value:"01",label:"人物"},{value:"02",label:"武学"},{value:"03",label:"门派"},{value:"04",label:"兵器"},{value:"05",label:"宿命"},{value:"06",label:"其他"}],options:[{value:"01",label:"武侠"},{value:"02",label:"爱情"},{value:"03",label:"家国"},{value:"04",label:"文艺"},{value:"05",label:"青春"}],formAddOne:{title:"",author:"",type:[],img:"",des:"",infoType:[]},formLabelWidth:"120px",fileList:[]}},methods:{toClose:function(){this.$emit("toClose",!1)},toDetermine:function(){console.log("",this.formAddOne),this.$message({message:"成功！",type:"success"}),this.$emit("toDetermine",!1)},handleAvatarSuccess:function(e,t){this.formAddOne.img=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,l=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),l||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&l},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))}}}),s=i,c=(l("d11b"),l("2877")),d=Object(c["a"])(s,n,r,!1,null,"8c287cd6",null),u=d.exports,f={components:{Add:u},data:function(){return{form:{title:"",author:"",selectVal:[]},options:[{value:"01",label:"武侠"},{value:"02",label:"爱情"},{value:"03",label:"家国"},{value:"04",label:"文艺"},{value:"05",label:"青春"}],tableData:[{id:"1",title:"夜灵犀传奇",author:"六耳",type:["01","02"],img:"1.jpg",date:"2020-02-02",flag:"hot",link:"yelingxi"},{id:"1",title:"夜灵犀传奇",author:"六耳",type:["01","03"],img:"2.jpg",date:"2020-02-02",flag:"hot",link:"yelingxi"}],currentPage:1,total:400,pageSize:10,dialogFormVisible:!1}},methods:{onSubmit:function(){console.log("submit!")},look:function(e){console.log(e)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},getImg:function(e){if(e){var t=l("08fd")("./".concat(e));return t}},typeAdd:function(){this.dialogFormVisible=!0},toDetermine:function(){this.dialogFormVisible=!1}}},m=f,p=(l("14e7"),Object(c["a"])(m,a,o,!1,null,"e5f2efb8",null));t["default"]=p.exports},e461:function(e,t,l){e.exports=l.p+"static/img/2.ca6a744a.jpg"},ed03:function(e,t,l){},f4ac:function(e,t,l){e.exports=l.p+"static/img/1.65f77b91.jpg"},ff08:function(e,t,l){e.exports=l.p+"static/img/4.67bdab85.jpg"}}]);