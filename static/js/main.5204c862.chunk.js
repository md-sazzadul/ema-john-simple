(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/Logo.af182446.svg"},,,function(e,t,n){e.exports=n(32)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),i=(n(18),n(20),n(6)),l=n.n(i),u=(n(22),function(){return a.a.createElement("nav",{className:"header"},a.a.createElement("img",{src:l.a,alt:""}),a.a.createElement("div",null,a.a.createElement("a",{href:"/order"},"Order"),a.a.createElement("a",{href:"/order review"},"Order Review"),a.a.createElement("a",{href:"/manage inventory"},"Manage Inventory"),a.a.createElement("a",{href:"/login"},"Login")))}),f=n(2),m=n(3);n(24);function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw c}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(e){var t,n=0,r=0,c=0,o=s(e.cart);try{for(o.s();!(t=o.n()).done;){var i=t.value;c+=i.quantity,n+=i.price*i.quantity,r+=i.shipping}}catch(f){o.e(f)}finally{o.f()}var l=(.1*n).toFixed(2),u=n+r+parseFloat(l);return a.a.createElement("div",{className:"cart"},a.a.createElement("h3",null,"Order Summary"),a.a.createElement("p",null,"Selected Items: ",c),a.a.createElement("p",null,"Total Price: $",n),a.a.createElement("p",null,"Total Shipping Charge: $",r),a.a.createElement("p",null,"Tax: $",l),a.a.createElement("h4",null,"Grand Total: $",u.toFixed(2)))},v=n(8),E=n(7),g=(n(28),function(e){var t=e.handleAddToCart,n=e.product,r=n.name,c=n.price,o=n.seller,i=n.ratings,l=n.img;return a.a.createElement("div",{className:"product"},a.a.createElement("img",{src:l,alt:""}),a.a.createElement("div",{className:"product-info"},a.a.createElement("p",{className:"product-name"},r),a.a.createElement("p",null,"Price: $",c),a.a.createElement("p",null,"Manufacturer: ",o),a.a.createElement("p",null,"Rating: ",i)),a.a.createElement("button",{onClick:function(){return t(n)},className:"btn-cart"},a.a.createElement("p",{className:"btn-text"},"Add to Cart"),a.a.createElement(v.a,{icon:E.a})))}),h=(n(30),function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),i=Object(m.a)(o,2),l=i[0],u=i[1];Object(r.useEffect)(function(){fetch("products.json").then(function(e){return e.json()}).then(function(e){return c(e)})},[]),Object(r.useEffect)(function(){var e=function(){var e={},t=localStorage.getItem("shopping-cart");return t&&(e=JSON.parse(t)),e}(),t=[],r=function(r){var a=n.find(function(e){return e.id===r});if(a){var c=e[r];a.quantity=c,t.push(a)}};for(var a in e)r(a);u(t)},[n]);var s=function(e){var t=[],n=l.find(function(t){return t.id===e.id});if(n){var r=l.filter(function(t){return t.id!==e.id});n.quantity=n.quantity+1,t=[].concat(Object(f.a)(r),[n])}else e.quantity=1,t=[].concat(Object(f.a)(l),[e]);u(t),function(e){var t={},n=localStorage.getItem("shopping-cart");n&&(t=JSON.parse(n));var r=t[e];if(r){var a=r+1;t[e]=a}else t[e]=1;localStorage.setItem("shopping-cart",JSON.stringify(t))}(e.id)};return a.a.createElement("div",{className:"shop-container"},a.a.createElement("div",{className:"products-container"},n.map(function(e){return a.a.createElement(g,{key:e.id,product:e,handleAddToCart:s})})),a.a.createElement("div",{className:"cart-container"},a.a.createElement(p,{cart:l})))});var y=function(){return a.a.createElement("div",null,a.a.createElement(u,null),a.a.createElement(h,null))},b=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,33)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(y,null)),b()}],[[9,3,2]]]);
//# sourceMappingURL=main.5204c862.chunk.js.map