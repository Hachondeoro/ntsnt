(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7LId":function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(i=n("Xuae"))&&i.__esModule?i:{default:i},u=n("lwAK"),s=n("FYa8"),l=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var l=m[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&a||!p.has(f)?(p.add(f),r[l]=p):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}function y(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}y.rewind=function(){};var h=y;t.default=h},CafY:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("g4pe"),a=n.n(i);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=n("YFqc"),f=n.n(l),p=function(e,t){var n;return null==(n=e.classList)?void 0:n.contains(t)},d=function(e,t){for(var n=e.target||e;n;){if(Array.isArray(t)){if(t.some((function(e){return p(n,e)})))return!0}else if(p(n,t))return!0;n=n.parentElement}return!1},m=function(e){return!(!e.includes("touch")||!function(){if("undefined"===typeof window||"function"!==typeof window.addEventListener)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){return null};return window.addEventListener("test",n,t),window.removeEventListener("test",n,t),e}())&&{passive:!0}},v=function(e,t){var n=void 0===t?{}:t,o=n.refs,i=n.disabled,a=n.eventTypes,c=void 0===a?["mousedown","touchstart"]:a,u=n.excludeScrollbar,s=n.ignoreClass,l=void 0===s?"ignore-onclickoutside":s,f=n.detectIFrame,p=void 0===f||f,v=Object(r.useState)([]),y=v[0],h=v[1],b=Object(r.useRef)(e);b.current=e;var g=Object(r.useCallback)((function(e){return h((function(t){return[].concat(t,[{current:e}])}))}),[]);return Object(r.useEffect)((function(){if(null!=o&&o.length||y.length){var e=function(){var e=[];return(o||y).forEach((function(t){var n=t.current;return n&&e.push(n)})),e},t=function(t){d(t,l)||u&&function(e){return document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY}(t)||!e().every((function(e){return!e.contains(t.target)}))||b.current(t)},n=function(t){return setTimeout((function(){var n=document.activeElement;"IFRAME"!==(null==n?void 0:n.tagName)||d(n,l)||e().includes(n)||b.current(t)}),0)},r=function(){c.forEach((function(e){return document.removeEventListener(e,t,m(e))})),p&&window.removeEventListener("blur",n)};if(!i)return c.forEach((function(e){return document.addEventListener(e,t,m(e))})),p&&window.addEventListener("blur",n),function(){return r()};r()}}),[y,l,u,i,p,JSON.stringify(c)]),g},y=n("aOmJ"),h=n.n(y),b=n("v7au"),g=o.a.createElement;Object(y.setDefaultBreakpoints)([{xs:0},{l:1199},{xl:1200}]);var w=function(){var e=function(e){return g(f.a,s({},e,{getProps:function(e){return{className:e.isCurrent?"active":"non-active"}}}))},t=u(o.a.useState(!1),2),n=(t[0],t[1]),i=u(o.a.useState(!1),2),a=(i[0],i[1]),c=function(){n(!1)},l=(v((function(){c()})),v((function(){a(!1)})),u(o.a.useState(!1),2)),p=l[0],d=l[1];return Object(r.useEffect)((function(){var e=document.getElementById("myHeader"),t=document.getElementById("scroll-to-top"),n=e.offsetTop,r=window.addEventListener("scroll",(function(){d(!1),window.pageYOffset>n+300?(e.classList.add("sticky"),t.classList.add("show")):(e.classList.remove("sticky"),t.classList.remove("show")),window.pageYOffset>n&&c()}));return function(){window.removeEventListener("scroll",r)}}),[]),g("header",{id:"myHeader",className:"navbar"},g("div",{className:"container-fluid"},g("div",{className:"row m-2-hor w-100-nav"},g("div",{className:"logo"},g("div",{className:"navbar-title navbar-item"},g(e,{href:"/"},g("img",{src:"/images/ntsnt logo.png",className:"my-0 py-0",height:"60em",alt:"#"})))),g(y.BreakpointProvider,null,g(h.a,{l:!0,down:!0},p&&g("div",{className:"menu"},g("div",{className:"navbar-item"},g(e,{href:"/",onClick:function(){return d(!p)}},"Home")),g("div",{className:"navbar-item"},g(e,{href:"/about",onClick:function(){return d(!p)}},"About Us")),g("div",{className:"navbar-item"},g(e,{href:"/projects",onClick:function(){return d(!p)}},"Projects")),g("div",{className:"navbar-item"},g(e,{href:"/services",onClick:function(){return d(!p)}},"Services")),g("div",{className:"navbar-item"},g(e,{href:"/employment",onClick:function(){return d(!p)}},"Employment")),g("div",{className:"navbar-item"},g(e,{href:"/contact",onClick:function(){return d(!p)}},"Contact")))),g(h.a,{xl:!0},g("div",{className:"menu"},g("div",{className:"navbar-item"},g(e,{href:"/"},"Home")),g("div",{className:"navbar-item"},g(e,{href:"/about"},"About Us")),g("div",{className:"navbar-item"},g(e,{href:"/projects"},"Projects")),g("div",{className:"navbar-item"},g(e,{href:"/services"},"Services")),g("div",{className:"navbar-item"},g(e,{href:"/employment"},"Employment")),g("div",{className:"navbar-item"},g(e,{href:"/contact"},"Contact")))))),g("button",{className:"nav-icon",onClick:function(){return d(!p)}},g(b.a,{color:"white",size:50}))))},O=n("H+61"),k=n("UlJF"),j=n("7LId"),N=n("VIvw"),E=n("iHvq"),S=o.a.createElement;function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(E.a)(e);if(t){var o=Object(E.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(N.a)(this,n)}}var x=function(e){Object(j.a)(n,e);var t=_(n);function n(e){var r;return Object(O.a)(this,n),(r=t.call(this,e)).state={is_visible:!1},r}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(t){e.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state.is_visible;return S("div",{id:"scroll-to-top",className:"init"},t&&S("div",{onClick:function(){return e.scrollToTop()}},S("i",{className:"fa fa-chevron-up"})))}}]),n}(r.Component),P=o.a.createElement;t.a=function(e){var t=e.pageTitle,n=e.pageDescription,o=e.keyWords,i=e.children;return P(r.Fragment,null,P(a.a,null,P("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),P("meta",{charSet:"UTF-8"}),P("title",null,t),P("meta",{name:"google-site-verification",content:"Q1VbG70vk5QDujpOCiy41GLO32duGdDJ9BVYXzmKOGs"}),P("meta",{property:"og:image",content:"https://ntsnt.vercel.app/webNTSNTpreview.jpg"}),P("link",{property:"image",href:"https://ntsnt.vercel.app/webNTSNTpreview.jpg"}),P("meta",{name:"description",content:n}),P("meta",{property:"og:title",content:t}),P("meta",{property:"og:description",content:n}),P("meta",{name:"keywords",content:o}),P("meta",{property:"og:type",content:"website"}),P("meta",{name:"robots",content:"index, follow"}),P("link",{href:"https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",rel:"stylesheet"})),P(w,null),P("div",{id:"wrapper"},i),P(x,null))}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"H+61":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.a.createContext&&o.a.createContext(i),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function s(e){return e&&e.map((function(e,t){return o.a.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function l(e){return function(t){return o.a.createElement(f,c({attr:c({},e.attr)},t),s(e.child))}}function f(e){var t=function(t){var n,r=e.attr,i=e.size,a=e.title,s=u(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&o.a.createElement("title",null,a),e.children)};return void 0!==a?o.a.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},UlJF:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},VIvw:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return o}))},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),i=n("i2R6"),a=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},aIN1:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),c=o.a.createElement;t.a=function(){return c(o.a.Fragment,null,c("footer",{className:"container-fluid"},c("div",{className:"row m-10-hor"},c("div",{className:"col-md-4"},c("div",{className:"footer-col"},c("div",{className:"heading"},c("h2",{className:"font-weight-bold "},"Northern Trade Solutions")),c("div",{className:"content"},c("p",null,"Northern Trade Solutions (NTS) is a well-recognised provider of full project solutions, fit out solutions and building and construction services in the Northern Territory.")))),c("div",{className:"col-md-4"},c("div",{className:"footer-col"},c("div",{className:"heading"},"Useful links"),c("div",{className:"content"},c(a.a,{href:"/about"},c("div",{className:"link"},"About")),c(a.a,{href:"/projects"},c("div",{className:"link"},"Projects")),c(a.a,{href:"/services"},c("div",{className:"link"},"Services")),c(a.a,{href:"/employment"},c("div",{className:"link"},"Employment")),c(a.a,{href:"/contact"},c("div",{className:"link"},"Contact us"))))),c("div",{className:"col-md-4"},c("div",{className:"footer-col"},c("div",{className:"heading"},"Follow Us"),c("div",{className:"content"},c("p",null,"You can find our social media channels here:"),c("div",{className:"socialicon"},c("span",{className:"shine"}),c("a",{href:"https://www.facebook.com/northerntradesolutions/",rel:"noopener noreferrer",target:"_blank"},c("i",{className:"fa fa-facebook-f"}))),c("div",{className:"socialicon"},c("span",{className:"shine"}),c("a",{href:"https://www.linkedin.com/company/northern-trade-solutions",rel:"noopener noreferrer",target:"_blank"},c("i",{className:"fa fa-linkedin"}))),c("div",{className:"list mt-2"},c("i",{className:"fa fa-envelope-o"}),c("a",{href:"mailto:info@ntsnt.com.au",target:"_blank",rel:"noopener noreferrer"}," ","info@ntsnt.com.au")),c("div",{className:"list mt-2"},c("i",{className:"fa fa-phone"})," (08) 88 88 88 88"))))),c("div",{className:"subfooter"},c("div",{className:"row m-10-hor"},c("div",{className:"col-md-6"},c("div",{className:"content"},"\xa9 Copyright ",(new Date).getFullYear()," by Frank Espinoza. All rights reserved."))))))}},aOmJ:function(e,t,n){var r;e.exports=(r=n("q1tI"),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){e.exports=n(4)()},function(e,t){e.exports=r},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="undefined"!=typeof window&&void 0!==window.document,o="object"===("undefined"==typeof self?"undefined":n(self))&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,i=void 0!==e&&null!=e.versions&&null!=e.versions.node;t.isBrowser=r,t.isWebWorker=o,t.isNode=i}).call(this,n(6))},function(e,t,n){(function(t){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=l||f||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,y=function(){return p.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==o}(e))return r;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=c.test(e);return n||u.test(e)?s(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,r){var o,i,a,c,u,s,l=0,f=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var n=o,r=i;return o=i=void 0,l=t,c=e.apply(r,n)}function w(e){var n=e-s;return void 0===s||n>=t||n<0||p&&e-l>=a}function O(){var e=y();if(w(e))return k(e);u=setTimeout(O,function(e){var n=t-(e-s);return p?v(n,a-(e-l)):n}(e))}function k(e){return u=void 0,d&&o?g(e):(o=i=void 0,c)}function j(){var e=y(),n=w(e);if(o=arguments,i=this,s=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(O,t),f?g(e):c}(s);if(p)return u=setTimeout(O,t),g(s)}return void 0===u&&(u=setTimeout(O,t)),c}return t=b(t)||0,h(r)&&(f=!!r.leading,a=(p="maxWait"in r)?m(b(r.maxWait)||0,t):a,d="trailing"in r?!!r.trailing:d),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=s=i=u=void 0},j.flush=function(){return void 0===u?c:k(y())},j}}).call(this,n(7))},function(e,t,n){"use strict";var r=n(5);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||l||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),c=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=9999,f=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.allBreakpoints=[{xsmall:0},{small:576},{medium:768},{large:992},{xlarge:1200}]}var t,n,r;return t=e,(n=[{key:"getBreakpointName",value:function(e){var t;return this.allBreakpoints.forEach((function(n){var r=Object.keys(n)[0];n[r]<=e&&(t=r)})),t}},{key:"getBreakpointWidth",value:function(e){var t=0;return this.allBreakpoints.forEach((function(n){var r=Object.keys(n)[0];r===e&&(t=n[r])})),t}},{key:"getNextBreakpointWidth",value:function(e){for(var t=9999,n=0,r=0;r<this.allBreakpoints.length;r++){var o=this.allBreakpoints[r];if(Object.keys(o)[0]===e&&(n=r),n>0){var i=n+1;if(this.allBreakpoints.length>i){var a=this.allBreakpoints[i];t=a[Object.keys(a)[0]]}break}}return t}},{key:"shouldRender",value:function(e){var t=e.breakpointName,n=e.modifier,r=e.currentBreakpointName,o=e.currentWidth,i=e.customQuery;if("only"===n){if(t===r)return!0}else if("up"===n){if(o>=this.getBreakpointWidth(t))return!0}else if("down"===n){if(o<this.getNextBreakpointWidth(t))return!0}else if(i)return c.isBrowser&&window.matchMedia(i).matches;return!1}},{key:"getWidthSafely",value:function(){return c.isBrowser&&window?Math.max(document.documentElement.clientWidth,window.innerWidth||0):l}},{key:"currentWidth",get:function(){return this.getWidthSafely()}},{key:"breakpoints",set:function(e){this.allBreakpoints=e}}])&&s(t.prototype,n),r&&s(t,r),e}()),p=f,d=function(e){if(!(e&&"object"===u(e)&&e instanceof Array))throw new Error("setDefaultBreakpoints error: Breakpoints should be an array");e.forEach((function(e){if(!e||"object"!==u(e))throw new Error("setDefaultBreakpoints error: Breakpoints should be an array of objects");if(1!==Object.keys(e).length)throw new Error("setDefaultBreakpoints error: Each breakpoint object should have only one key")})),f.breakpoints=e},m=function(e){return l=e},v=n(3),y=n.n(v);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=o.a.createContext({currentWidth:9999,currentBreakpointName:""}),j=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?w(e):t}(this,g(t).call(this,e));var r=p.currentWidth;return n.state={currentWidth:r,currentBreakpointName:p.getBreakpointName(r)},n.handleResize=y()(n.handleResize.bind(w(n)),100),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),this.handleResize.cancel()}},{key:"handleResize",value:function(){var e=p.currentWidth;this.setState({currentWidth:e,currentBreakpointName:p.getBreakpointName(e)})}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.currentWidth,r=t.currentBreakpointName;return o.a.createElement(k.Provider,{value:{currentWidth:n,currentBreakpointName:r}},e)}}])&&b(n.prototype,r),i&&b(n,i),t}(o.a.Component),N=function(){return o.a.useContext(k).currentWidth},E=function(){return o.a.useContext(k).currentBreakpointName};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}j.propTypes={children:a.a.node};var M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?T(e):t}(this,P(t).call(this,e))).extractBreakpointAndModifierFromProps=n.extractBreakpointAndModifierFromProps.bind(T(n)),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),n=t,(r=[{key:"extractBreakpointAndModifierFromProps",value:function(e){var t,n,r=e.tagName||"div",o=e.className||"",i=e.style,a=!1;return Object.keys(e).forEach((function(e){"up"===e||"down"===e||"only"===e?n=e:"customQuery"===e?a=!0:"tagName"!==e&&"className"!==e&&"style"!==e&&(t=e)})),"up"!==n&&"down"!==n&&"only"!==n||(a=!1),n||a||(n="only"),{breakpoint:t,modifier:n,tagName:r,className:o,style:i,customQuery:a?e.customQuery:null}}},{key:"render",value:function(){var e=this.props,t=e.children,n=_(e,["children"]),r=this.extractBreakpointAndModifierFromProps(n),i=r.breakpoint,a=r.modifier,c=r.className,u=r.tagName,s=r.style,l=r.customQuery,f=this.context,d=f.currentBreakpointName,m=f.currentWidth;if(!p.shouldRender({breakpointName:i,modifier:a,currentBreakpointName:d,currentWidth:m,customQuery:l}))return null;var v=u;return o.a.createElement(v,{className:"breakpoint__".concat(i,"-").concat(a," ").concat(c),style:s},t)}}])&&x(n.prototype,r),i&&x(n,i),t}(o.a.Component);M.contextType=k,M.propTypes={children:a.a.node,up:a.a.bool,down:a.a.bool,only:a.a.bool,tagName:a.a.string,className:a.a.string,style:a.a.objectOf(a.a.oneOfType([a.a.string,a.a.number])),customQuery:a.a.string},n.d(t,"Breakpoint",(function(){return M})),n.d(t,"BreakpointProvider",(function(){return j})),n.d(t,"setDefaultBreakpoints",(function(){return d})),n.d(t,"setDefaultWidth",(function(){return m})),n.d(t,"useCurrentWidth",(function(){return N})),n.d(t,"useCurrentBreakpointName",(function(){return E})),t.default=M}]))},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.asPath||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),p=f.href,d=f.as,m=e.children,v=e.replace,y=e.shallow,h=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var g=i.Children.only(m),w=g&&"object"===typeof g&&g.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),k=r(O,2),j=k[0],N=k[1],E=i.default.useCallback((function(e){j(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,j]);(0,i.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof b?b:n&&n.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,N,b,t,n]);var S={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}))}(e,n,p,d,v,y,h,b)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var _="undefined"!==typeof b?b:n&&n.locale,x=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,_,n&&n.locales,n&&n.domainLocales);S.href=x||(0,a.addBasePath)((0,a.addLocale)(d,_,n&&n.defaultLocale))}return i.default.cloneElement(g,S)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},iHvq:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map}}]);