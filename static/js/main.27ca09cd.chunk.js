(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},50:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(15),s=c.n(a),i=(c(36),c(17)),o=(c(37),c(3)),l=c(4),j=Object(l.a)(),d=c(8),u=(c(41),c(1));var b=Object(d.b)((function(e){return{cart:e.products.cart}}))((function(e){var t=e.cart;return Object(u.jsxs)("ul",{className:"cart-container",type:"none",children:[t&&t.map((function(e,t){var c=e.price,n=e.brand,r=e.productName,a=e.gender;return Object(u.jsx)("li",{className:"list-item",children:Object(u.jsxs)("div",{className:"meta-container",children:[Object(u.jsxs)("span",{className:"product_price",children:["Rs.",c]}),Object(u.jsx)("span",{className:"product_name",children:n}),Object(u.jsx)("p",{children:r}),Object(u.jsxs)("div",{className:"extra-details",children:[Object(u.jsxs)("span",{className:"product_gender",children:["Gender:",a]}),Object(u.jsx)("span",{className:"product_gender",children:"Quantity: 1"})]})]})},t)})),Object(u.jsx)("div",{className:"button-container",children:Object(u.jsx)("button",{className:"addToCart",children:"CHECKOUT"})})]})})),O=(c(43),"ADD_TO_CART"),h="LOAD_PRODUCTS_SUCCESS",p="PRODUCTS_CACHE",f="/freighttiger-scrollable/cart";function x(e){return{type:h,products:e}}var m=c(9),g=c(19),v=c(26);c(44);var N={addToCartAction:function(e){return{type:O,item:e}}},C=Object(d.b)((function(e){return{cart:e.products.cart}}),N)((function(e){var t=e.productName,c=e.brand,n=e.price,r=e.primaryColour,a=e.searchImage,s=e.addToCartAction;return Object(u.jsxs)("li",{className:"product-container",children:[Object(u.jsx)("img",{src:a,alt:"product",className:"image-resize",loading:"lazy"}),Object(u.jsxs)("div",{className:"meta-container",children:[Object(u.jsxs)("span",{className:"product_price",children:["Rs.",n]}),Object(u.jsx)("span",{className:"product_name",children:c}),Object(u.jsx)("p",{children:t}),Object(u.jsx)("div",{className:"extra-details",children:Object(u.jsxs)("span",{className:"product_gender",children:["Color:",Object(u.jsx)("span",{style:{color:{primaryColour:r}},children:r})]})})]}),Object(u.jsx)("div",{className:"button-container",children:Object(u.jsx)("button",{className:"addToCart",onClick:function(t){t.preventDefault(),j.push(f),s(e)},children:"Add to cart"})})]})}));c(45);var w=function(e){var t=e.data,c=Object(n.useState)({prev:0,next:10}),r=Object(g.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!0),o=Object(g.a)(i,2),l=o[0],j=o[1],d=Object(n.useState)(t.slice(a.prev,a.next)),b=Object(g.a)(d,2),O=b[0],h=b[1];return Object(u.jsx)(v.a,{dataLength:O.length,next:function(){O.length!==t.length?(setTimeout((function(){h(O.concat(t.slice(a.prev+10,a.next+10)))}),100),s((function(e){return{prev:e.prev+10,next:e.next+10}})),console.log(O)):j(!1)},hasMore:l,loader:Object(u.jsx)("h4",{children:"..."}),children:Object(u.jsx)("div",{className:"scrollable-flex",children:O&&O.map((function(e,t){return Object(u.jsx)(C,Object(m.a)({},e),t)}))})})},_=c(27),S=c.n(_);var y={loadItems:function(){return function(e){var t,c=(t=p,JSON.parse(window.localStorage.getItem(t)));if(!c)return fetch("/products").then((function(e){return e.json()})).then((function(t){console.log(t),function(e,t){window.localStorage.setItem(e,JSON.stringify(t))}(p,t),e(x(t))})).catch((function(e){throw e}));e(x(c))}}},T=Object(d.b)((function(e){return{products:e.products}}),y)((function(e){var t=e.products,c=e.loadItems;Object(n.useEffect)((function(){c()}),[c]),console.log(t);var r=t.list;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(S.a,{showLoadingAnimation:!0,type:"media",rows:30,ready:r.length>0,children:Object(u.jsx)("ul",{className:"productlist-container",type:"none",children:r&&r.length>0&&Object(u.jsx)(w,{data:r})})})})})),E=function(){return Object(u.jsx)("h1",{children:"Oops! Route not found"})},A=(c(50),function(){return Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-left",class:"svg-inline--fa fa-arrow-left fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"})})}),D=function(){var e=Object(o.f)(),t=Object(o.g)(),c=t.pathname===f;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("header",{className:"App-header",children:[c&&Object(u.jsx)("div",{className:"image-container",onClick:function(){e.push("/")},children:Object(u.jsx)(A,{})}),Object(u.jsx)("div",{className:"header-text",children:"/freighttiger-scrollable/"===t.pathname?"Fresh Stock":"Cart"})]})})},L=function(){return Object(u.jsxs)(o.b,{history:j,children:[Object(u.jsx)(D,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/freighttiger-scrollable/",component:T}),Object(u.jsx)(o.a,{path:"/freighttiger-scrollable/cart",component:b}),Object(u.jsx)(o.a,{component:E})]})]})};var I=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(L,{})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},R=c(12),k=c(31);var P=Object(R.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{list:[],cart:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)(Object(m.a)({},e),{},{list:t.products.products});case O:return Object(m.a)(Object(m.a)({},e),{},{cart:[].concat(Object(k.a)(e.cart),[t.item])});default:return e}}}),U=c(29),H=c.n(U),J=c(30);var M=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.c;return Object(R.d)(P,e,t(Object(R.a)(J.a,H()())))}();s.a.render(Object(u.jsx)(d.a,{store:M,children:Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(I,{})})}),document.getElementById("root")),F()}},[[57,1,2]]]);
//# sourceMappingURL=main.27ca09cd.chunk.js.map