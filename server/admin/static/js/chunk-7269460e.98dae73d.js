(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7269460e"],{"399f":function(e,t,r){},9683:function(e,t,r){"use strict";var n=r("399f"),a=r.n(n);a.a},a28e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"category"},[r("h1",[e._v("分类列表")]),r("div",{staticClass:"filter-container"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:e.handleEdit}},[e._v("新建分类")])],1),r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{fit:"",border:"",data:e.item.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}))}},[r("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称",width:"120"}}),r("el-table-column",{attrs:{prop:"desc",label:"分类描述","min-width":"300"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级名称",width:"120"}}),r("el-table-column",{attrs:{prop:"update_time",label:"修改日期",width:"180"}}),r("el-table-column",{attrs:{fixed:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"输入分类名搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.handleEdit(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{slot:"reference",type:"danger",size:"small"},on:{click:function(r){return e.delCategory(t.row)}},slot:"reference"},[e._v("删除")])]}}])})],1)],1),r("categoryDialog",{attrs:{dialogVisibie:e.showDialog,item:e.editItem,parents:e.item},on:{"dialog-close":e.closeDialog,"change-success":e.getList}})],1)},a=[],i=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=(r("96cf"),r("1da1")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.item.id?"编辑分类":"新建分类",visible:e.dialogVisibie,width:"40%","before-close":e.handleClose,center:"","destroy-on-close":!0},on:{"update:visible":function(t){e.dialogVisibie=t}}},[r("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"上级分类:"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{model:{value:e.model.desc,callback:function(t){e.$set(e.model,"desc",t)},expression:"model.desc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保 存")])],1)],1)},c=[],l=(r("b0c0"),r("c405")),u=r("5c96");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={props:{dialogVisibie:{type:Boolean,default:!1,required:!0},item:Object,parents:{type:Array,default:[],required:!0}},watch:{item:function(e){e.id?this.model={name:e.name,desc:e.desc,parent:e.parent._id}:this.model={name:"",desc:"",parent:""}}},data:function(){return{model:{}}},methods:{handleClose:function(){this.$emit("dialog-close")},save:function(){this.item.id?this.editCategory():this.addCategory()},addCategory:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].addCategory(p({},this.model));case 2:t=e.sent,r=t.data,0===r.code?(Object(u["Message"])({message:r.message||"添加成功",type:"success"}),this.handleClose(),this.$emit("change-success")):Object(u["Message"])({message:r.message||"添加失败",type:"error"});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),editCategory:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=p({},this.model,{id:this.item.id}),console.log(t),e.next=4,l["a"].editCategory(t);case 4:r=e.sent,n=r.data,0===n.code?(Object(u["Message"])({message:n.message||"修改成功",type:"success"}),this.handleClose(),this.$emit("change-success")):Object(u["Message"])({message:n.message||"修改失败",type:"error"});case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},g=m,f=r("2877"),h=Object(f["a"])(g,o,c,!1,null,null,null),b=h.exports;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={components:{categoryDialog:b},props:{id:{}},data:function(){return{item:[],listLoading:!1,search:"",showDialog:!1,editItem:{},delVisible:!1}},methods:{getList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,e.next=3,l["a"].getCategory();case 3:t=e.sent,r=t.data,console.log(r),0===r.code&&(this.item=r.data),this.listLoading=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(e){this.editItem=v({},e),this.showDialog=!0},delCategory:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$confirm("确认删除该分类吗？").then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].delCategory({id:t.id});case 2:a=e.sent,i=a.data,0===i.code?(Object(u["Message"])({message:i.message||"删除成功",type:"success"}),r.getList()):Object(u["Message"])({message:i.message||"删除失败",type:"error"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),closeDialog:function(){this.editItem={},this.showDialog=!1}},created:function(){this.getList()}},O=w,j=(r("9683"),Object(f["a"])(O,n,a,!1,null,"8a6e5342",null));t["default"]=j.exports},c405:function(e,t,r){"use strict";var n=r("751a"),a=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n["a"].request({url:"/admin/category/add",method:"get",params:e})},i=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n["a"].request({url:"/admin/category/edit",method:"post",data:e})},s=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n["a"].request({url:"/admin/category/list",method:"get"})},o=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n["a"].request({url:"/admin/category/del",method:"get",params:e})};t["a"]={getCategory:s,addCategory:a,editCategory:i,delCategory:o}}}]);