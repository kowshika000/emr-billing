(()=>{var e,r,t,n,o,a,i={4497:(e,r,t)=>{Promise.all([t.e(804),t.e(423),t.e(318),t.e(676),t.e(415),t.e(705),t.e(527),t.e(654),t.e(589),t.e(379)]).then(t.bind(t,1631))},9591:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof emr_ui)return e();t.l("https://emr-ui-parent-25225.web.app/remoteEntry.js",(t=>{if("undefined"!=typeof emr_ui)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"emr_ui")})).then((()=>emr_ui))}},l={};function u(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={id:e,exports:{}};return i[e].call(t.exports,t,t.exports,u),t.exports}u.m=i,u.c=l,u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);u.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,u.d(o,a),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+".js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="emr_billing:",u.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var h=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={379:[7568]},a={7568:["default","./Store",9591]},u.f.remotes=(e,r)=>{u.o(o,e)&&o[e].forEach((e=>{var t=u.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,l,u)=>{try{var s=e(t,a);if(!s||!s.then)return l(s,i,u);var f=s.then((e=>l(e,i)),o);if(!u)return f;r.push(n.p=f)}catch(e){o(e)}},l=(e,r,o)=>i(r.get,n[1],t,0,s,o),s=r=>{n.p=1,u.m[e]=e=>{e.exports=r()}};i(u,n[2],0,0,((e,r,t)=>e?i(u.I,n[0],0,e,l,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={});var a=u.S[t],i="emr_billing",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@emotion/react","11.14.0",(()=>Promise.all([u.e(249),u.e(318),u.e(158)]).then((()=>()=>u(4158))))),l("@emotion/styled","11.14.0",(()=>Promise.all([u.e(318),u.e(911),u.e(202)]).then((()=>()=>u(8202))))),l("@mui/icons-material","6.4.5",(()=>Promise.all([u.e(561),u.e(359),u.e(318),u.e(911),u.e(114)]).then((()=>()=>u(7359))))),l("@mui/material","6.4.5",(()=>Promise.all([u.e(561),u.e(249),u.e(485),u.e(318),u.e(676),u.e(911),u.e(114)]).then((()=>()=>u(7866))))),l("@reduxjs/toolkit","2.5.1",(()=>Promise.all([u.e(313),u.e(698)]).then((()=>()=>u(3313))))),l("antd","5.24.1",(()=>Promise.all([u.e(804),u.e(184),u.e(318),u.e(676)]).then((()=>()=>u(9184))))),l("axios","1.7.9",(()=>u.e(914).then((()=>()=>u(1914))))),l("framer-motion","12.4.5",(()=>Promise.all([u.e(279),u.e(318)]).then((()=>()=>u(3279))))),l("html2canvas","1.4.1",(()=>u.e(354).then((()=>()=>u(354))))),l("jspdf","3.0.0",(()=>Promise.all([u.e(463),u.e(875)]).then((()=>()=>u(5463))))),l("react-dom","18.3.1",(()=>Promise.all([u.e(961),u.e(318)]).then((()=>()=>u(961))))),l("react-redux","8.1.3",(()=>Promise.all([u.e(733),u.e(318),u.e(676)]).then((()=>()=>u(9733))))),l("react-router-dom","6.29.0",(()=>Promise.all([u.e(648),u.e(318),u.e(676)]).then((()=>()=>u(2648))))),l("react","18.3.1",(()=>u.e(540).then((()=>()=>u(6540))))),l("redux-thunk","3.1.0",(()=>u.e(206).then((()=>()=>u(825))))),l("redux","5.0.1",(()=>u.e(79).then((()=>()=>u(3079))))),(()=>{var e=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var r=u(9591);if(!r)return;var o=e=>e&&e.init&&e.init(u.S[t],n);if(r.then)return s.push(r.then(o,e));var a=o(r);if(a&&a.then)return s.push(a.catch(e))}catch(r){e(r)}})()),s.length?e[t]=Promise.all(s).then((()=>e[t]=1)):e[t]=1}}})(),u.p="https://emr-billing-child1.web.app/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return n}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():t(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,d=l<r.length?(typeof r[l])[0]:"";if(i>=t.length||"o"==(f=(typeof(s=t[i]))[0]))return!u||("u"==d?l>o&&!a:""==d!=a);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=o){if(s!=r[l])return!1}else{if(a?s>r[l]:s<r[l])return!1;s!=r[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||l<=o)return!1;u=!1,l--}else{if(l<=o||f<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var h=[],p=h.pop.bind(h);for(i=1;i<r.length;i++){var c=r[i];h.push(1==c?p()|p():2==c?p()&p():c?n(c,t):!p())}return!!p()},o=(e,r)=>e&&u.o(e,r),a=e=>(e.loaded=1,e.get()),i=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),l=e=>{throw new Error(e)},s=e=>function(r,t,n,o,a){var i=u.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,u.S[r],t,!1,o,a)):e(r,u.S[r],t,n,o,a)},f=(e,r,t)=>t?t():((e,r)=>l("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),d=s(((e,u,s,d,h,p)=>{if(!o(u,s))return f(e,s,p);var c=((e,t,o,a)=>{var l=a?i(e[t]):e[t];return(t=Object.keys(l).reduce(((e,t)=>!n(o,t)||e&&!r(e,t)?e:t),0))&&l[t]})(u,s,h,d);return c?a(c):p?p():void l(((e,r,n,o,a)=>{var i=e[n];return"No satisfying version ("+t(o)+")"+(a?" for eager consumption":"")+" of shared module "+n+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(i).map((e=>e+" from "+i[e].from)).join(", ")})(u,e,s,h,d))})),h=s(((e,l,u,s,d,h)=>{if(!o(l,u))return f(e,u,h);var p,c=((e,t,n)=>{var o=n?i(e[t]):e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)})(l,u,s);return n(d,c)||(p=((e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(l,u,c,d),"undefined"!=typeof console&&console.warn&&console.warn(p)),a(l[u][c])})),p={},c={318:()=>h("default","react",!1,[1,18,3,1],(()=>u.e(540).then((()=>()=>u(6540))))),676:()=>h("default","react-dom",!1,[1,18,3,1],(()=>u.e(961).then((()=>()=>u(961))))),996:()=>d("default","axios",!1,[1,1,7,7],(()=>u.e(914).then((()=>()=>u(1914))))),4374:()=>d("default","@reduxjs/toolkit",!1,[1,2,5,0],(()=>Promise.all([u.e(313),u.e(698)]).then((()=>()=>u(3313))))),8330:()=>d("default","react-redux",!1,[1,8,1,3],(()=>Promise.all([u.e(733),u.e(676)]).then((()=>()=>u(9733))))),9118:()=>d("default","antd",!1,[1,5,23,0],(()=>Promise.all([u.e(804),u.e(184),u.e(676)]).then((()=>()=>u(9184))))),9199:()=>d("default","@mui/material",!1,[1,6,1,5],(()=>Promise.all([u.e(561),u.e(249),u.e(485),u.e(676),u.e(911),u.e(114)]).then((()=>()=>u(7866))))),4527:()=>d("default","html2canvas",!1,[1,1,4,1],(()=>u.e(354).then((()=>()=>u(354))))),4224:()=>d("default","jspdf",!1,[1,3,0,0],(()=>u.e(463).then((()=>()=>u(5463))))),7319:()=>h("default","react-router-dom",!1,[1,6,3,0],(()=>Promise.all([u.e(648),u.e(676)]).then((()=>()=>u(2648))))),7674:()=>d("default","framer-motion",!1,[1,12,0,5],(()=>u.e(279).then((()=>()=>u(3279))))),7589:()=>d("default","@mui/icons-material",!1,[1,6,1,5],(()=>Promise.all([u.e(561),u.e(359),u.e(911),u.e(114)]).then((()=>()=>u(7359))))),911:()=>d("default","@emotion/react",!1,[1,11,13,3],(()=>Promise.all([u.e(249),u.e(777)]).then((()=>()=>u(4158))))),6114:()=>d("default","@emotion/styled",!1,[1,11,13,0],(()=>u.e(821).then((()=>()=>u(8202))))),4414:()=>d("default","redux-thunk",!1,[1,3,1,0],(()=>u.e(206).then((()=>()=>u(825))))),4929:()=>d("default","redux",!1,[1,5,0,1],(()=>u.e(79).then((()=>()=>u(3079)))))},m={114:[6114],318:[318],415:[996,4374],527:[4527],589:[7589],654:[4224,7319,7674],676:[676],698:[4414,4929],705:[8330,9118,9199],911:[911]},v={};u.f.consumes=(e,r)=>{u.o(m,e)&&m[e].forEach((e=>{if(u.o(p,e))return r.push(p[e]);if(!v[e]){var t=r=>{p[e]=0,u.m[e]=t=>{delete u.c[e],t.exports=r()}};v[e]=!0;var n=r=>{delete p[e],u.m[e]=t=>{throw delete u.c[e],r}};try{var o=c[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{u.b=document.baseURI||self.location.href;var e={792:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(114|318|415|527|589|676|698|705|911)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=u.p+u.u(r),i=new Error;u.l(a,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);l&&l(u)}for(r&&r(t);s<a.length;s++)o=a[s],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkemr_billing=self.webpackChunkemr_billing||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),u.nc=void 0,u(4497)})();