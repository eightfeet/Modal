!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.___Modal___=t():n.___Modal___=t()}(window,function(){return o={},r.m=e=[function(n,t,e){var o=e(10);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return"string"==typeof n&&o.test(n)};var o=/-webkit-|-moz-|-ms-/;n.exports=t.default},function(n,t,e){"use strict";n.exports=function(e){var s=[];return s.toString=function(){return this.map(function(n){var t=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=function(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(e," */")}(o),i=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},s.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(e[r]=!0)}for(var i=0;i<n.length;i++){var a=n[i];null!=a[0]&&e[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),s.push(a))}},s}},function(n,t,r){"use strict";var e,o,d={},i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=(o={},function(n){if(void 0===o[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}o[n]=t}return o[n]});function m(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function u(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=d[o.id],i=0;if(r){for(r.refs++;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(b(o.parts[i],t))}else{for(var a=[];i<o.parts.length;i++)a.push(b(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function s(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,l=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function f(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}var p=null,A=0;function b(t,n){var e,o,r;if(n.singleton){var i=A++;e=p=p||s(n),o=f.bind(null,e,i,!1),r=f.bind(null,e,i,!0)}else e=s(n),o=function(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r&&n.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}.bind(null,e,n),r=function(){!function(n){if(null===n.parentNode)return;n.parentNode.removeChild(n)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}n.exports=function(n,c){(c=c||{}).attributes="object"==typeof c.attributes?c.attributes:{},c.singleton||"boolean"==typeof c.singleton||(c.singleton=i());var l=m(n,c);return u(l,c),function(n){for(var t=[],e=0;e<l.length;e++){var o=l[e],r=d[o.id];r&&(r.refs--,t.push(r))}n&&u(m(n,c),c);for(var i=0;i<t.length;i++){var a=t[i];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete d[a.id]}}}}},function(n,t,e){"use strict";e.r(t);var o=/[A-Z]/g,r=/^ms-/,i={};function a(n){return"-"+n.toLowerCase()}t.default=function(n){if(i.hasOwnProperty(n))return i[n];var t=n.replace(o,a);return i[n]=r.test(t)?"-"+t:t}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{onProcessStyle:function(n){if(Array.isArray(n)){for(var t=0;t<n.length;t++)n[t]=a(n[t]);return n}return a(n)},onChangeValue:function(n,t,e){var o=(0,i.default)(t);return t===o?n:(e.prop(o,n),null)}}};var o,r=e(4),i=(o=r)&&o.__esModule?o:{default:o};function a(n){var t={};for(var e in n)t[(0,i.default)(e)]=n[e];return n.fallbacks&&(Array.isArray(n.fallbacks)?t.fallbacks=n.fallbacks.map(a):t.fallbacks=a(n.fallbacks)),t}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return(0,i.default)(n)};var o,r=e(4),i=(o=r)&&o.__esModule?o:{default:o};n.exports=t.default},function(n,t,e){if(e(8),void 0===window.Promise)throw new Error("Promise pollyfill not found.");n.exports=e(11).default},function(n,t,e){var o=e(9);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(t=n.exports=e(2)(!0)).push([n.i,'.common1ZOWm2yZ{-webkit-box-sizing:content-box;box-sizing:content-box}.common1ZOWm2yZ h1,.common1ZOWm2yZ h2,.common1ZOWm2yZ h3,.common1ZOWm2yZ h4,.common1ZOWm2yZ h5,.common1ZOWm2yZ h6,.common1ZOWm2yZ hr,.common1ZOWm2yZ p,.common1ZOWm2yZ blockquote,.common1ZOWm2yZ dl,.common1ZOWm2yZ dt,.common1ZOWm2yZ dd,.common1ZOWm2yZ ul,.common1ZOWm2yZ ol,.common1ZOWm2yZ li,.common1ZOWm2yZ pre,.common1ZOWm2yZ fieldset,.common1ZOWm2yZ lengend,.common1ZOWm2yZ button,.common1ZOWm2yZ input,.common1ZOWm2yZ textarea,.common1ZOWm2yZ th,.common1ZOWm2yZ td{margin:0;padding:0;border:none;color:#404040;-webkit-box-sizing:inherit;box-sizing:inherit}.common1ZOWm2yZ ul,.common1ZOWm2yZ ol,.common1ZOWm2yZ li{list-style-position:inside}.common1ZOWm2yZ input::-webkit-outer-spin-button,.common1ZOWm2yZ input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none !important}.common1ZOWm2yZ input[type="button"],.common1ZOWm2yZ input[type="submit"],.common1ZOWm2yZ input[type="reset"],.common1ZOWm2yZ input[type="text"],.common1ZOWm2yZ input[type="tel"]{-webkit-appearance:none}.common1ZOWm2yZ textarea{-webkit-appearance:none}.common1ZOWm2yZ input:focus,.common1ZOWm2yZ button:focus{outline:0}\n',"",{version:3,sources:["/Users/eightfeet/Documents/workspace/www/2019/ModalJest/src/style/common.scss"],names:[],mappings:"AACA,gBACI,8BAAY,CAAZ,sBAAuB,CAD3B,qdA8BM,QAAS,CACT,SAAU,CACV,WAAY,CACZ,aAAc,CACd,0BAAY,CAAZ,kBAAmB,CAlCzB,yDAwCM,0BAA2B,CAxCjC,kGA6CM,QAAS,CACT,kCAAmC,CA9CzC,mLAqDM,uBAAwB,CArD9B,yBAwDM,uBAAwB,CAxD9B,yDA4DM,SAAU",file:"common.scss",sourcesContent:['/* structural elements 结构元素 */\n.modal____wrap {\n    box-sizing: content-box;\n    h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      p,\n      blockquote,\n      /* structural elements 结构元素 */\n      dl,\n      dt,\n      dd,\n      ul,\n      ol,\n      li,\n      /* list elements 列表元素 */\n      pre,\n      /* text formatting elements 文本格式元素 */\n      fieldset,\n      lengend,\n      button,\n      input,\n      textarea,\n      /* form elements 表单元素 */\n      th,\n      td {\n      /* table elements 表格元素 */\n      margin: 0;\n      padding: 0;\n      border: none;\n      color: #404040;\n      box-sizing: inherit;\n    }\n  \n    ul,\n    ol,\n    li {\n      list-style-position: inside;\n    }\n  \n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      margin: 0;\n      -webkit-appearance: none !important;\n    }\n    input[type="button"],\n    input[type="submit"],\n    input[type="reset"],\n    input[type="text"],\n    input[type="tel"] {\n      -webkit-appearance: none;\n    }\n    textarea {\n      -webkit-appearance: none;\n    }\n    input:focus,\n    button:focus {\n      outline: 0;\n    }\n  }\n  ']}]),t.locals={modal____wrap:"common1ZOWm2yZ"}},function(n,t,e){(t=n.exports=e(2)(!0)).push([n.i,".index1l8lc8iX .index39V3VSon{background-color:rgba(0,0,0,0.4);position:absolute;top:0;left:0;bottom:0;right:0;height:100%;width:100%;overflow:hidden;opacity:0;-webkit-transition-property:opacity;transition-property:opacity;display:table;text-align:center}.index1l8lc8iX .index39V3VSon .index2f0elUV_{display:table-cell;vertical-align:middle}.index1l8lc8iX .index39V3VSon.index_Mz3LUkc{opacity:1;visibility:visible}.index1l8lc8iX .index39V3VSon.index_Mz3LUkc .index1PUdRRdH{opacity:1}.index1l8lc8iX .index1PUdRRdH{opacity:0;position:relative;display:inline-block;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease}.index1l8lc8iX .index3Rqz_bOh .index1PUdRRdH{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}.index1l8lc8iX .index3Rqz_bOh.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.index1l8lc8iX .index2mZB8APt .index1PUdRRdH{-webkit-transform:scale3d(0, 0, 0) translate3d(-50em, 0, 0);transform:scale3d(0, 0, 0) translate3d(-50em, 0, 0)}.index1l8lc8iX .index2mZB8APt.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:scale3d(1, 1, 1) translate3d(0, 0, 0);transform:scale3d(1, 1, 1) translate3d(0, 0, 0)}.index1l8lc8iX .indexslZVwoHz .index1PUdRRdH{-webkit-transform:scale3d(0, 0, 0) translate3d(50em, 0, 0);transform:scale3d(0, 0, 0) translate3d(50em, 0, 0)}.index1l8lc8iX .indexslZVwoHz.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:scale3d(1, 1, 1) translate3d(0, 0, 0);transform:scale3d(1, 1, 1) translate3d(0, 0, 0)}.index1l8lc8iX .indexQ19B-cBr .index1PUdRRdH{-webkit-transform:scale3d(0, 0, 0) translate3d(0, -50em, 0);transform:scale3d(0, 0, 0) translate3d(0, -50em, 0)}.index1l8lc8iX .indexQ19B-cBr.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:scale3d(1, 1, 1) translate3d(0, 0, 0);transform:scale3d(1, 1, 1) translate3d(0, 0, 0)}.index1l8lc8iX .index1zRwW8EY .index1PUdRRdH{-webkit-transform:scale3d(0, 0, 0) translate3d(0, 50em, 0);transform:scale3d(0, 0, 0) translate3d(0, 50em, 0)}.index1l8lc8iX .index1zRwW8EY.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:scale3d(1, 1, 1) translate3d(0, 0, 0);transform:scale3d(1, 1, 1) translate3d(0, 0, 0)}.index1l8lc8iX .index1Xv4mrYK .index1PUdRRdH{-webkit-transform:translateX(-50em);transform:translateX(-50em)}.index1l8lc8iX .index1Xv4mrYK.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:translateX(0);transform:translateX(0)}.index1l8lc8iX .index3hiQv0VP .index1PUdRRdH{-webkit-transform:translateX(50em);transform:translateX(50em)}.index1l8lc8iX .index3hiQv0VP.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:translateX(0);transform:translateX(0)}.index1l8lc8iX .indexxNNzstax .index1PUdRRdH{-webkit-transform:translateY(-50em);transform:translateY(-50em)}.index1l8lc8iX .indexxNNzstax.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:translateY(0);transform:translateY(0)}.index1l8lc8iX .indexFLzJiLTU .index1PUdRRdH{-webkit-transform:translateY(50em);transform:translateY(50em)}.index1l8lc8iX .indexFLzJiLTU.index_Mz3LUkc .index1PUdRRdH{-webkit-transform:translateY(0);transform:translateY(0)}.index1l8lc8iX .index1YzX7fff{position:absolute;top:0}.index1l8lc8iX .index1Qg8NWZr{background-color:#fff;margin:0 auto;position:relative}.index1l8lc8iX .indexm6A3vEAh{text-align:left}.index1l8lc8iX .index36niATsC{text-align:center}.index1l8lc8iX .index3zkdHxqW{position:absolute;right:0;top:0}\n","",{version:3,sources:["/Users/eightfeet/Documents/workspace/www/2019/ModalJest/src/modules/Modal/template/index.scss"],names:[],mappings:"AAAA,8BAEQ,gCAAoC,CACpC,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,QAAS,CACT,OAAQ,CACR,WAAY,CACZ,UAAW,CACX,eAAgB,CAChB,SAAU,CACV,mCAA2B,CAA3B,2BAA2B,CAC3B,aAAc,CACd,iBAAkB,CAd1B,6CAiBY,kBAAmB,CACnB,qBAAsB,CAlBlC,4CAsBU,SAAU,CACV,kBAAmB,CAvB7B,2DAyBY,SAAU,CAzBtB,8BA+BQ,SAAU,CACV,iBAAkB,CAClB,oBAAqB,CACrB,sDAAsC,CAAtC,8CAAsC,CAAtC,sCAAsC,CAAtC,yDAAsC,CACtC,uCAA2B,CAA3B,+BAA+B,CAnCvC,6CAwCY,kCAAW,CAAX,0BAA2B,CAxCvC,2DA4CgB,kCAAW,CAAX,0BAA2B,CA5C3C,6CAmDY,2DAA4B,CAA5B,mDAAoD,CAnDhE,2DAuDgB,uDAA4B,CAA5B,+CAAgD,CAvDhE,6CA8DY,0DAA4B,CAA5B,kDAAmD,CA9D/D,2DAkEgB,uDAA4B,CAA5B,+CAAgD,CAlEhE,6CAyEY,2DAA4B,CAA5B,mDAAoD,CAzEhE,2DA6EgB,uDAA4B,CAA5B,+CAAgD,CA7EhE,6CAoFY,0DAA4B,CAA5B,kDAAmD,CApF/D,2DAwFgB,uDAA4B,CAA5B,+CAAgD,CAxFhE,6CA+FY,mCAAW,CAAX,2BAA4B,CA/FxC,2DAmGc,+BAAW,CAAX,uBAAwB,CAnGtC,6CA0GY,kCAAW,CAAX,0BAA2B,CA1GvC,2DA8Gc,+BAAW,CAAX,uBAAwB,CA9GtC,6CAqHY,mCAAW,CAAX,2BAA4B,CArHxC,2DAyHc,+BAAW,CAAX,uBAAwB,CAzHtC,6CAgIY,kCAAW,CAAX,0BAA2B,CAhIvC,2DAoIc,+BAAW,CAAX,uBAAwB,CApItC,8BA0IQ,iBAAkB,CAClB,KAAM,CA3Id,8BA+IQ,qBAAsB,CACtB,aAAc,CACd,iBAAkB,CAjJ1B,8BAqJQ,eAAgB,CArJxB,8BAwJQ,iBAAkB,CAxJ1B,8BA2JQ,iBAAkB,CAClB,OAAQ,CACR,KAAM",file:"index.scss",sourcesContent:[".modal {\n    .cove {\n        background-color: rgba(0, 0, 0, 0.4);\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        height: 100%;\n        width: 100%;\n        overflow: hidden;\n        opacity: 0;\n        transition-property:opacity; \n        display: table;\n        text-align: center;\n        \n        .wrap {\n            display: table-cell;\n            vertical-align: middle;\n        }\n\n        &.coveshow {\n          opacity: 1;\n          visibility: visible;\n          .content {\n            opacity: 1;\n          }\n        }\n    }\n\n    .content {\n        opacity: 0;\n        position: relative;\n        display: inline-block;\n        transition-property:transform, opacity; \n        transition-timing-function:ease;\n    }\n\n    .animate_zoom_in {\n        .content {\n            transform: scale3d(0, 0, 0);\n        }\n        &.coveshow {\n            .content {\n                transform: scale3d(1, 1, 1);\n            }\n          }\n    }\n\n    .animate_zoom_in_left {\n        .content {\n            transform: scale3d(0, 0, 0) translate3d(-50em, 0, 0);\n        }\n        &.coveshow {\n            .content {\n                transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n            }\n        }\n    }\n\n    .animate_zoom_in_right {\n        .content {\n            transform: scale3d(0, 0, 0) translate3d(50em, 0, 0);\n        }\n        &.coveshow {\n            .content {\n                transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n            }\n        }\n    }\n\n    .animate_zoom_in_down {\n        .content {\n            transform: scale3d(0, 0, 0) translate3d(0, -50em, 0);\n        }\n        &.coveshow {\n            .content {\n                transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n            }\n        }\n    }\n\n    .animate_zoom_in_up {\n        .content {\n            transform: scale3d(0, 0, 0) translate3d(0, 50em, 0);\n        }\n        &.coveshow {\n            .content {\n                transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n            }\n        }\n    }\n\n    .animate_in_left {\n        .content {\n            transform: translateX(-50em);\n        }\n        &.coveshow {\n            .content {\n              transform: translateX(0);\n            }\n          }\n    }\n\n    .animate_in_right {\n        .content {\n            transform: translateX(50em);\n        }\n        &.coveshow {\n            .content {\n              transform: translateX(0);\n            }\n          }\n    }\n\n    .animate_in_down {\n        .content {\n            transform: translateY(-50em);\n        }\n        &.coveshow {\n            .content {\n              transform: translateY(0);\n            }\n          }\n    }\n\n    .animate_in_up {\n        .content {\n            transform: translateY(50em);\n        }\n        &.coveshow {\n            .content {\n              transform: translateY(0);\n            }\n          }\n    }\n\n    .modify {\n        position: absolute;\n        top: 0;\n    }\n\n    .modules {\n        background-color: #fff;\n        margin: 0 auto;\n        position: relative;\n    }\n\n    .left {\n        text-align: left;\n    }\n    .center {\n        text-align: center;\n    }\n    .close {\n        position: absolute;\n        right: 0;\n        top: 0;\n    }\n}\n"]}]),t.locals={modal:"index1l8lc8iX",cove:"index39V3VSon",wrap:"index2f0elUV_",coveshow:"index_Mz3LUkc",content:"index1PUdRRdH",animate_zoom_in:"index3Rqz_bOh",animate_zoom_in_left:"index2mZB8APt",animate_zoom_in_right:"indexslZVwoHz",animate_zoom_in_down:"indexQ19B-cBr",animate_zoom_in_up:"index1zRwW8EY",animate_in_left:"index1Xv4mrYK",animate_in_right:"index3hiQv0VP",animate_in_down:"indexxNNzstax",animate_in_up:"indexFLzJiLTU",modify:"index1YzX7fff",modules:"index1Qg8NWZr",left:"indexm6A3vEAh",center:"index36niATsC",close:"index3zkdHxqW"}},function(n,t,e){"use strict";e.r(t);var o=e(0),P=e.n(o),r=e(5),i=e.n(r);function d(n){return n.charAt(0).toUpperCase()+n.slice(1)}function l(n,t,e){if(n.hasOwnProperty(t)){for(var o={},r=n[t],i=d(t),a=Object.keys(e),s=0;s<a.length;s++){var c=a[s];if(c===t)for(var l=0;l<r.length;l++)o[r[l]+i]=e[t];o[c]=e[c]}return o}return e}function m(n,t,e,o,r){for(var i=0,a=n.length;i<a;++i){var s=n[i](t,e,o,r);if(s)return s}}function a(n,t){-1===n.indexOf(t)&&n.push(t)}function u(n,t){if(Array.isArray(t))for(var e=0,o=t.length;e<o;++e)a(n,t[e]);else a(n,t)}var s=["Webkit"],c=["ms"],f=["Webkit","ms"],p={plugins:[],prefixMap:{appearance:["Webkit","Moz"],textEmphasisPosition:s,textEmphasis:s,textEmphasisStyle:s,textEmphasisColor:s,boxDecorationBreak:s,maskImage:s,maskMode:s,maskRepeat:s,maskPosition:s,maskClip:s,maskOrigin:s,maskSize:s,maskComposite:s,mask:s,maskBorderSource:s,maskBorderMode:s,maskBorderSlice:s,maskBorderWidth:s,maskBorderOutset:s,maskBorderRepeat:s,maskBorder:s,maskType:s,textDecorationStyle:s,textDecorationSkip:s,textDecorationLine:s,textDecorationColor:s,userSelect:["Webkit","Moz","ms"],backdropFilter:s,fontKerning:s,scrollSnapType:f,scrollSnapPointsX:f,scrollSnapPointsY:f,scrollSnapDestination:f,scrollSnapCoordinate:f,clipPath:s,shapeImageThreshold:s,shapeImageMargin:s,shapeImageOutside:s,filter:s,hyphens:f,flowInto:f,flowFrom:f,breakBefore:f,breakAfter:f,breakInside:f,regionFragment:f,writingMode:f,textOrientation:s,tabSize:["Moz"],fontFeatureSettings:s,columnCount:s,columnFill:s,columnGap:s,columnRule:s,columnRuleColor:s,columnRuleStyle:s,columnRuleWidth:s,columns:s,columnSpan:s,columnWidth:s,wrapFlow:c,wrapThrough:c,wrapMargin:c,textSizeAdjust:f}};var A=["-webkit-","-moz-",""],b={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};var y=e(1),x=e.n(y),C=["-webkit-",""];var h=["-webkit-",""];var v={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]};var g={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"},B={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"};var w=["-webkit-","-moz-",""],k=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;var _=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function W(n){return"number"==typeof n&&!isNaN(n)}var z=["center","end","start","stretch"],O={"inline-grid":["-ms-inline-grid","inline-grid"],grid:["-ms-grid","grid"]},S={alignSelf:function(n,t){-1<z.indexOf(n)&&(t.msGridRowAlign=n)},gridColumn:function(n,t){if(W(n))t.msGridColumn=n;else{var e=n.split("/").map(function(n){return+n}),o=_(e,2),r=o[0],i=o[1];S.gridColumnStart(r,t),S.gridColumnEnd(i,t)}},gridColumnEnd:function(n,t){var e=t.msGridColumn;W(n)&&W(e)&&(t.msGridColumnSpan=n-e)},gridColumnStart:function(n,t){W(n)&&(t.msGridColumn=n)},gridRow:function(n,t){if(W(n))t.msGridRow=n;else{var e=n.split("/").map(function(n){return+n}),o=_(e,2),r=o[0],i=o[1];S.gridRowStart(r,t),S.gridRowEnd(i,t)}},gridRowEnd:function(n,t){var e=t.msGridRow;W(n)&&W(e)&&(t.msGridRowSpan=n-e)},gridRowStart:function(n,t){W(n)&&(t.msGridRow=n)},gridTemplateColumns:function(n,t){t.msGridColumns=n},gridTemplateRows:function(n,t){t.msGridRows=n},justifySelf:function(n,t){-1<z.indexOf(n)&&(t.msGridColumnAlign=n)}};var M=["-webkit-",""];var Z={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};var E=["-webkit-","-moz-",""],R={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},D={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};var I=e(6),U=e.n(I),X={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},j={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};var L,H,T,Y=(H=(L={prefixMap:p.prefixMap,plugins:[function(n,t){if("string"==typeof t&&"text"===t)return["-webkit-text","text"]},function(n,t){if("string"==typeof t&&!x()(t)&&-1<t.indexOf("cross-fade("))return C.map(function(n){return t.replace(/cross-fade\(/g,n+"cross-fade(")})},function(n,t){if("cursor"===n&&b.hasOwnProperty(t))return A.map(function(n){return n+t})},function(n,t){if("string"==typeof t&&!x()(t)&&-1<t.indexOf("filter("))return h.map(function(n){return t.replace(/filter\(/g,n+"filter(")})},function(n,t,e){"flexDirection"===n&&"string"==typeof t&&(-1<t.indexOf("column")?e.WebkitBoxOrient="vertical":e.WebkitBoxOrient="horizontal",-1<t.indexOf("reverse")?e.WebkitBoxDirection="reverse":e.WebkitBoxDirection="normal"),B.hasOwnProperty(n)&&(e[B[n]]=g[t]||t)},function(n,e){if("string"==typeof e&&!x()(e)&&k.test(e))return w.map(function(t){return e.replace(k,function(n){return t+n})})},function(n,t,e){if("display"===n&&t in O)return O[t];n in S&&(0,S[n])(t,e)},function(n,t){if("string"==typeof t&&!x()(t)&&-1<t.indexOf("image-set("))return M.map(function(n){return t.replace(/image-set\(/g,n+"image-set(")})},function(n,t,e){if(Object.prototype.hasOwnProperty.call(Z,n))for(var o=Z[n],r=0,i=o.length;r<i;++r)e[o[r]]=t},function(n,t){if("position"===n&&"sticky"===t)return["-webkit-sticky","sticky"]},function(n,t){if(R.hasOwnProperty(n)&&D.hasOwnProperty(t))return E.map(function(n){return n+t})},function(n,t,e,o){if("string"==typeof t&&X.hasOwnProperty(n)){var r=function(n,t){if(x()(n))return n;for(var e=n.split(/,(?![^()]*(?:\([^()]*\))?\))/g),o=0,r=e.length;o<r;++o){var i=e[o],a=[i];for(var s in t){var c=U()(s);if(-1<i.indexOf(c)&&"order"!==c)for(var l=t[s],d=0,m=l.length;d<m;++d)a.unshift(i.replace(c,j[l[d]]+c))}e[o]=a.join(",")}return e.join(",")}(t,o),i=r.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(n){return!/-moz-|-ms-/.test(n)}).join(",");if(-1<n.indexOf("Webkit"))return i;var a=r.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(n){return!/-webkit-|-ms-/.test(n)}).join(",");return-1<n.indexOf("Moz")?a:(e["Webkit"+d(n)]=i,e["Moz"+d(n)]=a,r)}},function(n,t){if("display"===n&&v.hasOwnProperty(t))return v[t]}]}).prefixMap,T=L.plugins,function n(t){for(var e in t){var o=t[e];if((c=o)instanceof Object&&!Array.isArray(c))t[e]=n(o);else if(Array.isArray(o)){for(var r=[],i=0,a=o.length;i<a;++i)u(r,m(T,e,o[i],t,H)||o[i]);0<r.length&&(t[e]=r)}else{var s=m(T,e,o,t,H);s&&(t[e]=s),t=l(H,e,t)}}var c;return t}),F=(new i.a).onProcessStyle;function N(n){var t=Y(n||{});t=F(t);var e=Object.keys(t),o=null;return e.forEach(function(n){o=(o||"")+"".concat(n,":").concat(t[n],";")}),o}function V(r,t){return new Promise(function(e){if(r){var o=null,n=t.charAt(0).toUpperCase()+t.slice(1);void 0!==r.style["Webkit".concat(n)]&&(o="webkit".concat(n,"End")),void 0!==r.style.OTransition&&(o="o".concat(t,"End")),void 0!==r.style[t]&&(o="".concat(t,"end")),r.addEventListener(o,function n(t){(t.srcElement||t.target)===r&&(r.removeEventListener(o,n),e(t))})}else e(!1)})}function q(t){return new Promise(function(n){V(t,"transition").then(n)})}var G=!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);function Q(i,a,s,c){return new Promise(function(n,t){if(a&&i){var e=document.getElementById(a);if(e)e.innerHTML=i;else{var o=document.createElement("div");o.setAttribute("id",a),function(n,t,e){if(Number.isFinite(e))n.style.fontSize="".concat(e,"px");else{var o=window.document.documentElement,r=window.document.getElementById(t),i=o.clientWidth,a=r?r.clientWidth:null,s=parseFloat("31.2px"),c=parseFloat("750px");r?n.style.fontSize=c<=a?s+"px":s*(a/c)+"px":i&&(n.style.fontSize=G?"16px":c<=i?s+"px":s*(i/c)+"px")}}(o,s,c);var r=document.getElementById(s);if(r)return r.appendChild(o),document.getElementById(a).innerHTML=i,void n();document.body.appendChild(o),document.getElementById(a).innerHTML=i,n()}}else t('function createDom: params "dom" or "target" not found.')})}function J(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],0<=t.indexOf(e)||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],0<=t.indexOf(e)||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}function K(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}Number.isFinite=Number.isFinite||function(n){return"number"==typeof n&&isFinite(n)};var $="Modal is not created or Modal is removed!";t.default=function n(t){var c=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),K(this,"handleClose",function(t){var n=c.state,e=n.id,o=n.shouldCloseOnOverlayClick,r=n.onCancel,i=document.getElementById(e),a=i.querySelector(".".concat(P.a.close)),s=i.querySelector(".".concat(P.a.cove));!0===o&&(s.onclick=function(){return c.hide(t).then(function(){r&&"function"==typeof r&&r()})}),a&&(a.onclick=function(n){n.stopPropagation(),c.hide(t).then(function(){r&&"function"==typeof r&&r()})})}),K(this,"create",function(n,e){var t=c.state,o=t.id,r=t.parentId,i=t.emBase,a=J(t,["id","parentId","emBase"]),s=document.getElementById(o);return s?(c.show(),console.warn("已创建modal时 modal.create === modal.show"),Promise.resolve()):Q(function(n,t,e){for(var o=t||{},r=o.closable,i=o.animation,a=o.style||{},s=a.overlay,c=a.content,l=a.close,d=a.header,m=a.article,u=a.footer,f=e||"modal",p=1*o.zIndex||100,A=n||{},b=a.modify||[],y=null,x=0;x<b.length;x++){var C=b[x],h=N(C);h&&0!==h.length&&(y=(y||"")+'<div class="'.concat(f,"_modify ").concat(P.a.modify,'" style="').concat(N(C)," z-index: ").concat(p+2*x,'">&nbsp;</div>'))}var v=i||{},g=v.form,B=parseFloat(v.duration),w="0.3s";isNaN(B)||(w="".concat(B,"s"),B<=0&&(w="0.01s"));var k="transition-duration: ".concat(w,"; -webkit-transition-duration: ").concat(w,";"),_="";switch(g){case"fadeInLeft":_=P.a.animate_in_left;break;case"fadeInRight":_=P.a.animate_in_right;break;case"fadeInDown":_=P.a.animate_in_down;break;case"fadeInUp":_=P.a.animate_in_up;break;case"zoomInLeft":_=P.a.animate_zoom_in_left;break;case"zoomInRight":_=P.a.animate_zoom_in_right;break;case"zoomInDown":_=P.a.animate_zoom_in_down;break;case"zoomInUp":_=P.a.animate_zoom_in_up;break;case"zoomIn":default:_=P.a.animate_zoom_in}var W=N(s),z=N(c),O=N(l),S=N(d),M=N(m),Z=N(u);return'<div class="'.concat(f,"_wrap ").concat(P.a.modal,'">\n\t\t\t<div class="').concat(f,"_overlay ").concat(P.a.cove," ").concat(_,'" style="z-index:').concat(p,"; ").concat(k," ").concat(W||"",'">\n\t\t\t\t<div class="').concat(f,"_content_wrap ").concat(P.a.wrap,'">\n\t\t\t\t\t<div class="').concat(f,"_content ").concat(P.a.content,'" style="').concat(k,'">\n\t\t\t\t\t\t').concat(y||"",'\n\t\t\t\t\t\t<div class="').concat(f,"_modules ").concat(P.a.modules,'" ').concat(c?'style="z-index:'.concat(p,"; box-sizing: border-box; ").concat(z||"",'"'):"",">\n\t\t\t\t\t\t\t").concat(A.header?'<div class="'.concat(f,"_header ").concat(P.a.center,'" ').concat(S?'style="'.concat(S,'"'):"",">").concat(A.header,"</div>"):"","\n\t\t\t\t\t\t\t").concat(A.article?'<div class="'.concat(f,"_article ").concat(P.a.left,'" ').concat(M?'style="'.concat(M,'"'):"",">").concat(A.article,"</div>"):"","\n\t\t\t\t\t\t\t").concat(A.footer?'<div class="'.concat(f,"_footer ").concat(P.a.center,'" ').concat(Z?'style="'.concat(Z,'"'):"",">").concat(A.footer,"</div>"):"","\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t").concat(r&&l?'<div class="'.concat(f,"_close ").concat(P.a.close,'" style="').concat(O||""," z-index: ").concat(p+2*b.length,'"></div>'):"","\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>")}(n,a,o),o,r,i).then(function(){c.state.display=!0;var t=(s=document.getElementById(o)).querySelector(".".concat(P.a.cove));return c.state.contentDom=s.querySelector(".".concat(P.a.content)),c.handleClose(e),new Promise(function(n){window.setTimeout(function(){t.classList.add(P.a.coveshow),n(t)},100)})}).then(function(n){return q(n)})}),K(this,"remove",function(){return new Promise(function(n){var t=document.getElementById(c.state.id).querySelector(".".concat(P.a.cove));t.classList.remove(P.a.coveshow),n(t)}).then(function(n){return q(n)}).then(function(){return function(o){return new Promise(function(n,t){if(o){var e=document.getElementById(o);if(e)e.parentNode.removeChild(e),n();else t('<div id="'.concat(o,'"> 不存在！'))}else t('function removeDom: params "target" not found.')})}(c.state.id)})}),K(this,"show",function(){var n=c.state.id,o=document.getElementById(n);return new Promise(function(n,t){if(o){var e=o.querySelector(".".concat(P.a.cove));o.style.display="block",window.setTimeout(function(){e.classList.add(P.a.coveshow),c.state.display=!0,n()},100)}else t($)}).then(function(){return c.handleClose(!0)})}),K(this,"unvisible",function(){var n=c.state.id,o=document.getElementById(n);return new Promise(function(n,t){var e=o.querySelector(".".concat(P.a.cove));o?(e.classList.remove(P.a.coveshow),n(e)):t($)}).then(function(n){return q(n)}).then(function(){return o.style.display="none"})}),K(this,"hide",function(n){return!1===c.state.display?Promise.reject("The Modal was not opened."):!(c.state.display=!1)===n?c.unvisible():c.remove()});var e=(new Date).getTime(),o=t||{},r=o.id,i=o.animation,a=o.parentId,s=o.shouldCloseOnOverlayClick,l=o.zIndex,d=o.closable,m=o.style,u=o.emBase,f=o.onCancel;this.state={id:r||"modal".concat(e,"-").concat(window.Math.floor(100*window.Math.random())),animation:i||{},shouldCloseOnOverlayClick:!0===s,parentId:a,zIndex:l||100,closable:!1!==d,style:m||null,contentDom:null,emBase:u,onCancel:f,display:!1}}}],r.c=o,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="./",r(r.s=7);function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var e,o});
//# sourceMappingURL=modal.js.map