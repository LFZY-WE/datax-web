(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e18b8752"],{"1c64":function(e,t,a){},"1cc6":function(e,t,a){"use strict";var i=a("1c64"),n=a.n(i);n.a},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var i=r(),n=e-i,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var r=Math.easeInOutQuad(u,i,n,t);o(r),u<t?l(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,p=(a("1cc6"),a("2877")),d=Object(p["a"])(c,i,n,!1,null,"f3b72548",null);t["a"]=d.exports},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function n(e,t){function a(a){var i=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",l.appendChild(r)),n.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=n.color,r.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var l={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},o=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o;t["a"]=l},"8d41":function(e,t,a){},e302:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"插件名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.pluginName,callback:function(t){e.$set(e.listQuery,"pluginName",t)},expression:"listQuery.pluginName"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"插件类型",clearable:""},model:{value:e.listQuery.pluginType,callback:function(t){e.$set(e.listQuery,"pluginType",t)},expression:"listQuery.pluginType"}},e._l(e.pluginTypeOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      Search\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      Add\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.$index))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"pluginType",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.pluginType))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"pluginName",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pluginName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"templateJson",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.templateJson))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"comments",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.comments))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v("\n          Edit\n        ")]),e._v(" "),"deleted"!=i.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(i)}}},[e._v("\n          Delete\n        ")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"类型",prop:"pluginType"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"插件类型"},model:{value:e.temp.pluginType,callback:function(t){e.$set(e.temp,"pluginType",t)},expression:"temp.pluginType"}},e._l(e.pluginTypeOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e,value:e}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"pluginName"}},[a("el-input",{attrs:{placeholder:"插件名称"},model:{value:e.temp.pluginName,callback:function(t){e.$set(e.temp,"pluginName",t)},expression:"temp.pluginName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模板"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:8},type:"textarea",placeholder:"Please input"},model:{value:e.temp.templateJson,callback:function(t){e.$set(e.temp,"templateJson",t)},expression:"temp.templateJson"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注释"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:e.temp.comments,callback:function(t){e.$set(e.temp,"comments",t)},expression:"temp.comments"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        Confirm\n      ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},n=[],l=a("b775");function o(e){return Object(l["a"])({url:"/api/dataxPlugin",method:"get",params:e})}function r(e){return Object(l["a"])({url:"/api/dataxPlugin/"+e,method:"get"})}function s(e){return Object(l["a"])({url:"/api/dataxPlugin/",method:"put",data:e})}function u(e){return Object(l["a"])({url:"/api/dataxPlugin/",method:"post",data:e})}function c(e){return Object(l["a"])({url:"/api/dataxPlugin/",method:"delete",params:e})}var p=a("6724"),d=a("ed08"),m=a("333d"),f={name:"DataxPlugin",components:{Pagination:m["a"]},directives:{waves:p["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,pluginName:void 0},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{pluginType:[{required:!0,message:"type is required",trigger:"change"}],pluginName:[{required:!0,message:"title is required",trigger:"blur"}]},temp:{id:void 0,pluginName:"",pluginType:"",templateJson:"",comments:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,o(this.listQuery).then(function(t){var a=t.records,i=t.total;e.total=i,e.list=a,e.listLoading=!1})},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},createData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&u(e.temp).then(function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})})},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var a=Object.assign({},e.temp);s(a).then(function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})}})},handleDelete:function(e){var t=this;console.log("删除");var a=[];a.push(e.id),c({idList:e.id}).then(function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})})},handleFetchPv:function(e){var t=this;r(e).then(function(e){t.pluginData=e,t.dialogPvVisible=!0})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(d["e"])(t[e]):t[e]})})}}},g=f,h=a("2877"),v=Object(h["a"])(g,i,n,!1,null,null,null);t["default"]=v.exports}}]);