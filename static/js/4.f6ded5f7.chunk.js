(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[4],{100:function(t,e,n){"use strict";var r=n(0),c=n.n(r),o=n(22),a=n(53);n(101);e.a=function(t){var e=t.item,n=Object(r.useContext)(o.a).addItem,i=e.name,u=e.price,s=e.imageURL;return c.a.createElement("div",{className:"collection-item"},c.a.createElement("div",{style:{backgroundImage:"url(".concat(s,")")},className:"image"}),c.a.createElement("div",{className:"collection-footer"},c.a.createElement("span",{className:"name"},i),c.a.createElement("span",{className:"price"},u)),c.a.createElement(a.a,{onClick:function(){n(e)},inverted:!0},"Add-to-Cart"))}},101:function(t,e,n){},102:function(t,e,n){(function(e){var n=/^\[object .+?Constructor\]$/,r="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,o=r||c||Function("return this")();var a=Array.prototype,i=Function.prototype,u=Object.prototype,s=o["__core-js_shared__"],l=function(){var t=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),f=i.toString,p=u.hasOwnProperty,h=u.toString,_=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),d=a.splice,v=w(o,"Map"),y=w(Object,"create");function m(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function b(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function g(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t,e){for(var n,r,c=t.length;c--;)if((n=t[c][0])===(r=e)||n!==n&&r!==r)return c;return-1}function O(t){return!(!N(t)||(e=t,l&&l in e))&&(function(t){var e=N(t)?h.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?_:n).test(function(t){if(null!=t){try{return f.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t));var e}function E(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function w(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return O(n)?n:void 0}function k(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,c=e?e.apply(this,r):r[0],o=n.cache;if(o.has(c))return o.get(c);var a=t.apply(this,r);return n.cache=o.set(c,a),a};return n.cache=new(k.Cache||g),n}function N(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}m.prototype.clear=function(){this.__data__=y?y(null):{}},m.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},m.prototype.get=function(t){var e=this.__data__;if(y){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return p.call(e,t)?e[t]:void 0},m.prototype.has=function(t){var e=this.__data__;return y?void 0!==e[t]:p.call(e,t)},m.prototype.set=function(t,e){return this.__data__[t]=y&&void 0===e?"__lodash_hash_undefined__":e,this},b.prototype.clear=function(){this.__data__=[]},b.prototype.delete=function(t){var e=this.__data__,n=j(e,t);return!(n<0)&&(n==e.length-1?e.pop():d.call(e,n,1),!0)},b.prototype.get=function(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]},b.prototype.has=function(t){return j(this.__data__,t)>-1},b.prototype.set=function(t,e){var n=this.__data__,r=j(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},g.prototype.clear=function(){this.__data__={hash:new m,map:new(v||b),string:new m}},g.prototype.delete=function(t){return E(this,t).delete(t)},g.prototype.get=function(t){return E(this,t).get(t)},g.prototype.has=function(t){return E(this,t).has(t)},g.prototype.set=function(t,e){return E(this,t).set(t,e),this},k.Cache=g,t.exports=k}).call(this,n(26))},112:function(t,e,n){},114:function(t,e,n){"use strict";n.r(e);var r=n(14),c=n(21),o=n(18),a=n(99),i=n(0),u=n.n(i),s=n(100),l=n(98),f=(n(112),Object(c.b)((function(t,e){return{collection:Object(l.b)(e.match.params.collectionID)(t)}}))((function(t){var e=t.collection,n=e.title,r=e.items;return u.a.createElement("div",{className:"collection-page"},u.a.createElement("h2",{className:"title"},n),u.a.createElement("div",{className:"items"},r.map((function(t){return u.a.createElement(s.a,{key:t.ID,item:t})}))))}))),p=Object(o.b)({isLoading:function(t){return!Object(l.d)(t)}}),h=Object(r.d)(Object(c.b)(p),a.a)(f);e.default=h},98:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return f}));var r=n(102),c=n.n(r),o=n(18),a=function(t){return t.shop},i=Object(o.a)([a],(function(t){return t.collections})),u=Object(o.a)([i],(function(t){return t?Object.keys(t).map((function(e){return t[e]})):[]})),s=c()((function(t){return Object(o.a)([i],(function(e){return e?e[t]:null}))})),l=Object(o.a)([a],(function(t){return t.isFetching})),f=Object(o.a)([a],(function(t){return!!t.collections}))},99:function(t,e,n){"use strict";var r=n(31),c=n(0),o=n.n(c),a=n(54);e.a=function(t){return function(e){var n=e.isLoading,c=Object(r.a)(e,["isLoading"]);return n?o.a.createElement(a.a,null):o.a.createElement(t,c)}}}}]);
//# sourceMappingURL=4.f6ded5f7.chunk.js.map