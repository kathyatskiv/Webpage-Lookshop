!function(t){var e={};function n(a){if(e[a])return e[a].exports;var c=e[a]={i:a,l:!1,exports:{}};return t[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(a,c,function(e){return t[e]}.bind(null,c));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2);document.addEventListener("DOMContentLoaded",(function(t){var e,n,s;a=a[0],c=c[0],r(),window.addEventListener("resize",(function(t){return r()})),function(){var t=document.getElementsByClassName("product"),e=function(e){a=document.getElementsByClassName("product__btn")[e],e<t.length&&a.addEventListener("click",(function(n){n.preventDefault();var a=t[e].getElementsByClassName("product__price")[0].textContent,c=t[e].getElementsByClassName("product__title")[0].textContent,r=t[e].getElementsByClassName("product__img")[0].src,s=parseFloat(function(t){for(var e=!1,n="",a=1;a<t.length;a++)if("\n"!=t[a]){if(" "!=t[a]&&1==e){for(var c=a+1;"\n"!=t[c]&&" "!=t[c]&&c<t.length;)++c;n=t.slice(a,c);break}}else e=!0;return n}(a)),o=function(t){for(var e=!1,n="",a=1;a<t.length;a++)if(("\n"==t[a]||" "!=t[a]&&0==e)&&(e=!0),1==e){for(var c=a+1;"\n"!=t[c]&&c<t.length;)++c;n=t.slice(a,c);break}return n}(c),m=!1;i.forEach((function(n){n.id==t[e].id&&(n.amount++,m=!0)})),0==m&&i.push(function(t,e,n,a){return{id:t,price:e,name:n,amount:1,currency:"$",img:a}}(t[e].id,s,o,r)),u(l[0])}))};for(var n in t){var a;e(n)}}(),e=document.getElementById("cartModal"),n=document.getElementById("cartBtn"),s=document.getElementsByClassName("modal__close")[0],n.addEventListener("click",(function(t){t.preventDefault(),e.style.display="block"})),s.addEventListener("click",(function(t){t.preventDefault(),e.style.display="none"})),window.onclick=function(t){t.target==e&&(e.style.display="none")}}));var a=document.getElementsByClassName("menu-btn"),c=document.getElementsByClassName("menu");function r(){screen.width<=1100?(s(a,"active"),o(c,"active"),a.addEventListener("click",(function(){a.classList.contains("active")?(o(a,"active"),s(c,"active")):(o(c,"active"),s(a,"active"))}))):(a.classList.contains("active")&&o(a,"active"),c.classList.contains("active")&&o(c,"active"))}function s(t,e){t.classList.add(e)}function o(t,e){t.classList.remove(e)}var i=[],l=document.getElementsByClassName("cart__link");function u(t){var e=0,n=0;i.forEach((function(t){e+=t.amount,n+=t.price*t.amount})),t.getElementsByClassName("cart__amount")[0].textContent=e;var a=t.getElementsByClassName("cart__price")[0],c=t.getElementsByClassName("currency")[0].textContent;a.innerHTML="".concat(n.toFixed(2),' <span class="currency">').concat(c,"</span>"),function(e){var n;n=document.getElementsByClassName("modal__body")[0];var a=document.getElementsByClassName("modal__footer")[0];0==i.length?(n.innerHTML="Cart is empty",a.innerHTML="<h3>Total: ".concat(0,'<span class = "currency">$</span></h3>')):(n.innerHTML="",i.forEach((function(t){var e,a,c,r,s;n.innerHTML+=(e=t.name,a=t.price,c=t.amount,r=t.currency,s=t.img,'<div class = "cartItem">\n    <div class = "cartItem__img--wrapper">\n      <img src="'.concat(s,'" class = "cartItem__img">\n    </div>\n    <div class="cartItem__descr--wrapper">\n      <a class = "cartItem__name" href="#" >').concat(e,'</a>\n      <div class = "cartItem__amount-bar">\n        <button class = "cartItem__btn-m cartItem__btn" >-</button>\n        ').concat(c,'\n        <button class = "cartItem__btn-pl cartItem__btn">+</button>\n      </div>\n      <span class="cartItem__price">\n        ').concat((a*c).toFixed(2),' <span class = "currency">').concat(r,'</span>\n      </span>\n      <button class="cartItem__close">&times;</button>\n    </div>\n  </div>'))})),a.innerHTML="<h3>Total: ".concat(e.toFixed(2),'<span class = "currency">$</span></h3>'));(function(){var e=document.getElementsByClassName("cartItem"),n=function(n){c=document.getElementsByClassName("cartItem__close")[n],n<e.length&&c.addEventListener("click",(function(e){e.preventDefault(),i.splice(n,1),u(t[0])}))};for(var a in e){var c;n(a)}})(),function(){var e=document.getElementsByClassName("cartItem"),n=function(n){c=document.getElementsByClassName("cartItem__btn-m")[n],r=document.getElementsByClassName("cartItem__btn-pl")[n],n<e.length&&(c.addEventListener("click",(function(e){e.preventDefault(),1==i[n].amount?i.splice(n,1):i[n].amount--,u(t[0])})),r.addEventListener("click",(function(e){e.preventDefault(),i[n].amount++,u(t[0])})))};for(var a in e){var c,r;n(a)}}()}(n)}},function(t,e,n){},function(t,e,n){}]);