(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DEtailCart"],{"6eb1":function(t,a,o){"use strict";var e=o("b824"),s=o.n(e);s.a},b0c0:function(t,a,o){var e=o("83ab"),s=o("9bf2").f,n=Function.prototype,i=n.toString,c=/^\s*function ([^ (]*)/,d="name";!e||d in n||s(n,d,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b824:function(t,a,o){},bebe:function(t,a,o){"use strict";var e=o("d5a3"),s=o.n(e);s.a},c0d8:function(t,a,o){"use strict";var e=o("d5ee"),s=o.n(e);s.a},d0d1:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return t.goodsDetail?o("div",{staticClass:"Detail"},[o("Back"),o("div",{staticClass:"Detail_waiper"},[o("Swiper",{staticClass:"Detail__top",attrs:{list:t.goodsDetail.img,apiName:"banner"}})],1),o("div",[o("h2",{staticClass:"Detail__price"},[o("span",{staticClass:"newj"},[t._v("￥"+t._s(t.goodsDetail.price.newj)+"元")]),o("span",{staticClass:"oldj"},[t._v("￥"+t._s(t.goodsDetail.price.oldj)+"元")]),t._v(" "),o("van-tag",{attrs:{plain:"",type:"warning"}},[t._v("Hot")])],1),o("h2",{staticClass:"Detail__title"},[t._v(t._s(t.goodsDetail.title)+" "),o("van-rate",{staticStyle:{float:"right"},attrs:{color:"#ee0a24","allow-half":"","void-icon":"star","void-color":"#eee"},model:{value:4.5,callback:function(a){t.$set(4,"5",a)},expression:"4.5"}})],1),o("p",{staticClass:"Detail__des"},[t._v(" "+t._s(t.goodsDetail.des))])]),o("div",{staticStyle:{height:"10px",background:"#f7f7f7","margin-top":"20px"}}),t._m(0),o("div",{staticClass:"huabei"},[o("span",[t._v("分期")]),o("p",[t._v("花呗分期/白条分期")]),o("van-icon",{staticStyle:{float:"right","margin-top":"0.4rem"},attrs:{name:"arrow"}})],1),o("div",{staticClass:"Detail__params"},[o("img",{attrs:{src:t.$baseUrl+"/img/"+t.detailImg,alt:""}}),o("ul",[o("h2",[t._v(t._s(t.detailInfo.title))]),o("li",[t._v(t._s(t.detailInfo.info1))]),o("li",[t._v(t._s(t.detailInfo.info2))]),o("li",[t._v(t._s(t.detailInfo.info3))]),o("li",[t._v(t._s(t.detailInfo.info4))]),o("li",[t._v(t._s(t.detailInfo.info5))]),o("li",[t._v(t._s(t.detailInfo.info6))])])]),o("div",{staticStyle:{height:"10px",background:"#f7f7f7","margin-top":"20px"}}),o("Foot",{staticStyle:{margin:"0 -15px"}}),o("van-goods-action",{staticStyle:{"border-top":"1px solid #B0B0B0"}},[o("van-goods-action-icon",{attrs:{icon:"shop-o",color:"#ff6700",text:"店铺"}}),o("van-goods-action-icon",{attrs:{icon:"chat-o",color:t.chatColor,text:"客服"},on:{click:function(a){t.chatColor="#ff6700"}}}),o("van-goods-action-icon",{attrs:{icon:t.iconStart,color:t.iconColor,text:"收藏"},on:{click:t.collection}}),o("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.showSku}}),o("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.showSku}})],1),o("van-sku",{attrs:{sku:t.sku,goods:t.goods,"goods-id":t.goodsDetail._id,"hide-stock":t.sku.hide_stock,properties:t.properties,"close-on-click-overlay":!0,"initial-sku":t.initialSku},on:{"buy-clicked":t.onBuyClicked,"stepper-change":t.onNumChange,"sku-selected":t.onGuigeChange,"add-cart":function(a){return t.onAddCartClicked(t.addCartGoods)},"sku-prop-selected":t.onShuxingChange},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}})],1):t._e()},s=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"huabei",staticStyle:{"margin-top":"10px",border:"none"}},[o("span",[t._v("活动")]),o("p",{staticStyle:{color:"#ff6700"}},[t._v("[3月17日-3月22日品质家电特惠]")])])}],n=(o("b0c0"),o("5530")),i=o("f4a5"),c=o("8419"),d=o("dc29"),r=o("d399"),l=o("2f62"),u={name:"Detail",props:{},data:function(){return{iconColor:"#323233",chatColor:"#323233",iconStart:"star-o",goodsDetail:null,addCartGoods:{price:"",desc:"",title:"",img:"",opt1:"",opt2:"",num:1,checked:!0},show:!1,detailInfo:null,detailImg:"",goodsId:"33333",sku:{tree:[{k:"机身颜色",v:[],k_s:"s1"}],list:[],price:"",stock_num:400,collection_id:2261,none_sku:!1,hide_stock:!1},properties:[{k_id:123,k:"选择规则",is_multiple:!1,v:[]}],initialSku:{selectedNum:1,selectedProp:{123:[1222]}},skuData:{goodsId:"946755",messages:{message_0:"12",message_1:""},selectedNum:1},goods:{picture:""}}},components:{Swiper:c["a"],Back:i["a"],Foot:d["a"]},mounted:function(){var t=this,a=this.$route.query.apiName,o=this.$route.params._id;this.$axios({url:"/api/goods/"+a+"/"+o}).then((function(a){t.ImgList=a.data.data.img,t.goodsDetail=a.data.data,t.addCartGoods.title=a.data.data.title,t.addCartGoods.desc=a.data.data.desc,t.sku.price=t.addCartGoods.price=a.data.data.price.newj,t.goods.picture=t.addCartGoods.img=t.$baseUrl+"/img/"+a.data.data.imgage,t.detailImg=a.data.data.detailImg,t.detailInfo=a.data.data.detailInfo;for(var o=0;o<a.data.data.color.length;o++)t.sku.list.push({id:2259,price:100*a.data.data.price.newj,s1:"000",s2:"0",s3:"0",stock_num:190}),t.sku.tree[0].v.push({id:"00"+o,name:a.data.data.color[o],imgUrl:t.$baseUrl+"/img/"+a.data.data.img[o],previewImgUrl:t.$baseUrl+"/img/"+a.data.data.img[o]});for(var e=0;e<a.data.data.opt.length;e++)t.properties[0].v.push({id:"00"+e,name:a.data.data.opt[e],price:2e4*e})}))},updated:function(){},methods:Object(n["a"])({},Object(l["c"])("cart",["ADD_CART"]),{onNumChange:function(t){this.addCartGoods.num=t},onGuigeChange:function(t){this.addCartGoods.opt1=t.skuValue.name},onShuxingChange:function(t){this.addCartGoods.opt2=t.propValue.name},onBuyClicked:function(){},onAddCartClicked:function(t){var a=this;this.ADD_CART(t);var o=this.addCartGoods,e=o.price,s=o.desc,n=o.title,i=o.img,c=o.opt1,d=o.opt2,l=o.num,u=o.checked;this.$axios({url:"/api/addcart",method:"post",data:{price:e,desc:s,title:n,img:i,opt1:c,opt2:d,num:l,checked:u}}).then((function(t){0==t.data.err?(r["a"].success("加入成功"),a.$router.push("/cart")):(console.log("nb",t.data.msg),a.$router.push("/cart"))})).catch((function(t){console.log("jj",t)}))},showSku:function(){this.show=!0},onEdit:function(){},collection:function(){"star-o"==this.iconStart?(this.iconStart="star",this.iconColor="#ff6700"):(this.iconStart="star-o",this.iconColor="#323233")}})},p=u,h=(o("c0d8"),o("2877")),g=Object(h["a"])(p,e,s,!1,null,null,null);a["default"]=g.exports},d5a3:function(t,a,o){},d5ee:function(t,a,o){},f68e:function(t,a,o){"use strict";o.r(a);var e,s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return t.areaList?o("div",{staticClass:"Cart"},[o("Back",{attrs:{title:"购物车"}}),0!=t.cartGoodsList.length?o("div",[t._l(t.cartGoodsList,(function(a,e){return o("div",{key:a._id,staticClass:"Cart_card"},[o("div",[o("van-checkbox",{on:{change:function(a){return t.checkedChange(a,e)}},model:{value:a.checked,callback:function(o){t.$set(a,"checked",o)},expression:"item.checked"}})],1),o("div",[o("CartGoods",{attrs:{goods:a,result:t.addGoods},on:{change:function(o){return t.numChange(a.num,e)},delGoods:function(o){return t.delGoods(a._id,e)},click:function(a){return t.toggle(e)}}})],1)])})),o("van-submit-bar",{attrs:{price:100*t.total,"button-text":"结算"},on:{submit:t.onSubmit}},[o("van-checkbox",{on:{change:t.checkAll},model:{value:t.$store.state.cart.allChecked,callback:function(a){t.$set(t.$store.state.cart,"allChecked",a)},expression:"$store.state.cart.allChecked"}},[t._v("全选")]),o("span",{attrs:{slot:"tip"},slot:"tip"},[t._v(" 请确认您的收货地址哦，"),o("span",{on:{click:function(a){t.$store.state.cart.showAdd=!t.$store.state.cart.showAdd}}},[t._v("编辑收获地址")])])],1),o("van-action-sheet",{attrs:{title:"收货地址"},model:{value:t.$store.state.cart.showAdd,callback:function(a){t.$set(t.$store.state.cart,"showAdd",a)},expression:"$store.state.cart.showAdd"}},[o("div",{staticClass:"content"},[o("van-address-edit",{staticClass:"address",attrs:{"area-list":t.areaList,"show-postal":"","show-delete":"","show-set-default":"","area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:t.onSave,delete:t.onDelete}})],1)])],2):t._e(),0==t.cartGoodsList.length?o("div",{staticClass:"cart_null"},[o("p",[t._v("您的购物车为空")])]):t._e()],1):t._e()},n=[],i=(o("b0c0"),o("5530")),c=o("ade3"),d=o("f4a5"),r=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"CartGoods"},[o("div",{ref:"close",staticClass:"CartGoods"},[o("van-icon",{staticClass:"goodsClose",attrs:{name:"cross",size:"20"},on:{click:function(a){return a.stopPropagation(),t.$emit("delGoods")}}}),o("van-card",{attrs:{price:t.goods.price,desc:t.goods.desc,title:t.goods.title,thumb:t.$baseUrl+t.goods.img}},[o("div",{attrs:{slot:"tags"},slot:"tags"},[o("van-tag",{attrs:{plain:"",type:"danger"}},[t._v(t._s(t.goods.opt1))]),o("van-tag",{attrs:{plain:"",type:"danger"}},[t._v(t._s(t.goods.opt2))])],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("van-stepper",{on:{change:function(a){return t.$emit("change",t.goods.num)}},model:{value:t.goods.num,callback:function(a){t.$set(t.goods,"num",a)},expression:"goods.num"}})],1)])],1)])},l=[],u={name:"CartGoods",props:{goods:{type:Object,default:null}},data:function(){return{result:[]}},components:{},mounted:function(){},updated:function(){},methods:{}},p=u,h=(o("bebe"),o("2877")),g=Object(h["a"])(p,r,l,!1,null,null,null),f=g.exports,m=(o("8017"),o("2241")),v=o("d399"),_=o("2f62"),C={name:"Cart",props:{},data:function(){return{}},components:(e={CartGoods:f},Object(c["a"])(e,m["a"].Component.name,m["a"].Component),Object(c["a"])(e,"Back",d["a"]),e),computed:Object(i["a"])({},Object(_["d"])("cart",["cartGoodsList","areaList","addGoods","total"])),mounted:function(){},activated:function(){this.$store.dispatch("cart/".concat(this.$types.CART))},methods:Object(i["a"])({},Object(_["c"])("cart",["NUM_CHANGE","CHECKED_GOODS","CHECKALL","SUM"]),{},Object(_["b"])("cart",["delGoods"]),{checkedChange:function(t,a){this.CHECKED_GOODS({checked:t,index:a}),this.SUM()},checkAll:function(t){this.CHECKALL(t)},numChange:function(t,a){this.NUM_CHANGE({num:t,index:a}),this.SUM()},onSubmit:function(){this.SUM()},changeAdd:function(){},onSave:function(){Object(v["a"])("save"),this.$store.state.cart.showAdd=!1},onDelete:function(){Object(v["a"])("delete")},toggle:function(t){this.$refs.checkboxes[t].toggle()}})},k=C,b=(o("6eb1"),Object(h["a"])(k,s,n,!1,null,null,null));a["default"]=b.exports}}]);
//# sourceMappingURL=DEtailCart.1669d043.js.map