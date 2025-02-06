var n,l,u,t$1,r,o$1,e$1={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n);}function v(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function d(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g.__r++||o$1!==l.debounceRendering)&&((o$1=l.debounceRendering)||r)(g);}function g(){for(var n;g.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)));});}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j(n,_,p=p||e$1,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h]);}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px";}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l.event?l.event(n):n);}function T(n){this.l[n.type+!0](l.event?l.event(n):n);}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i);}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l.__e(n,u.__v);}});}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l.__e(n,i);}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e$1,e$1,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u);}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this));},_.prototype.render=d,t$1=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0;

var o=0;function e(_,e,n,t,f){var l$1,s,u={};for(s in e)"ref"==s?l$1=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l$1,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:t,__self:f};if("function"==typeof _&&(l$1=_.defaultProps))for(s in l$1)void 0===u[s]&&(u[s]=l$1[s]);return l.vnode&&l.vnode(a),a}

/*! For license information please see lsplugin.user.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LSPluginEntry=e():t.LSPluginEntry=e();}(self,(()=>(()=>{var t={227:(t,e,n)=>{var r=n(155);e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(t=>{"%%"!==t&&(r++,"%c"===t&&(o=r));})),e.splice(o,0,n);},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug");}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug");}catch(t){}!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return !0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return !1;return "undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.destroy=(()=>{let t=!1;return ()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=n(447)(e);const{formatters:o}=t.exports;o.j=function(t){try{return JSON.stringify(t)}catch(t){return "[UnexpectedJSONParseError]: "+t.message}};},447:(t,e,n)=>{t.exports=function(t){function e(t){let n,o,i,s=null;function a(...t){if(!a.enabled)return;const r=a,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let s=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return "%";s++;const i=e.formatters[o];if("function"==typeof i){const e=t[s];n=i.call(r,e),t.splice(s,1),s--;}return n})),e.formatArgs.call(r,t);(r.log||e.log).apply(r,t);}return a.namespace=t,a.useColors=e.useColors(),a.color=e.selectColor(t),a.extend=r,a.destroy=e.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==e.namespaces&&(o=e.namespaces,i=e.enabled(t)),i),set:t=>{s=t;}}),"function"==typeof e.init&&e.init(a),a}function r(t,n){const r=e(this.namespace+(void 0===n?":":n)+t);return r.log=this.log,r}function o(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return e.debug=e,e.default=e,e.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},e.disable=function(){const t=[...e.names.map(o),...e.skips.map(o).map((t=>"-"+t))].join(",");return e.enable(""),t},e.enable=function(t){let n;e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(t=r[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")));},e.enabled=function(t){if("*"===t[t.length-1])return !0;let n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return !1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return !0;return !1},e.humanize=n(824),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(t).forEach((n=>{e[n]=t[n];})),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return e.colors[Math.abs(n)%e.colors.length]},e.enable(e.load()),e};},856:function(t){t.exports=function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return !1}}function r(t,o,i){return r=n()?Reflect.construct:function(t,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return r&&e(i,r.prototype),i},r.apply(null,arguments)}function o(t){return i(t)||s(t)||a(t)||l()}function i(t){if(Array.isArray(t))return c(t)}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,f=Object.setPrototypeOf,p=Object.isFrozen,d=Object.getPrototypeOf,h=Object.getOwnPropertyDescriptor,m=Object.freeze,g=Object.seal,v=Object.create,y="undefined"!=typeof Reflect&&Reflect,b=y.apply,_=y.construct;b||(b=function(t,e,n){return t.apply(e,n)}),m||(m=function(t){return t}),g||(g=function(t){return t}),_||(_=function(t,e){return r(t,o(e))});var w=I(Array.prototype.forEach),x=I(Array.prototype.pop),C=I(Array.prototype.push),O=I(String.prototype.toLowerCase),S=I(String.prototype.match),j=I(String.prototype.replace),A=I(String.prototype.indexOf),k=I(String.prototype.trim),E=I(RegExp.prototype.test),T=F(TypeError);function I(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(t,e,r)}}function F(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(t,n)}}function L(t,e){f&&f(t,null);for(var n=e.length;n--;){var r=e[n];if("string"==typeof r){var o=O(r);o!==r&&(p(e)||(e[n]=o),r=o);}t[r]=!0;}return t}function N(t){var e,n=v(null);for(e in t)b(u,t,[e])&&(n[e]=t[e]);return n}function M(t,e){for(;null!==t;){var n=h(t,e);if(n){if(n.get)return I(n.get);if("function"==typeof n.value)return I(n.value)}t=d(t);}function r(t){return console.warn("fallback value for",t),null}return r}var P=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),U=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),z=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),B=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),J=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Z=g(/<%[\w\W]*|[\w\W]*%>/gm),V=g(/^data-[\-\w.\u00B7-\uFFFF]/),K=g(/^aria-[\-\w]+$/),Y=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Q=g(/^(?:\w+script|data):/i),X=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tt=g(/^html$/i),et=function(){return "undefined"==typeof window?null:window},nt=function(e,n){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),n=function(t){return rt(t)};if(n.version="2.3.8",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var r=e.document,i=e.document,s=e.DocumentFragment,a=e.HTMLTemplateElement,c=e.Node,l=e.Element,u=e.NodeFilter,f=e.NamedNodeMap,p=void 0===f?e.NamedNodeMap||e.MozNamedAttrMap:f,d=e.HTMLFormElement,h=e.DOMParser,g=e.trustedTypes,v=l.prototype,y=M(v,"cloneNode"),b=M(v,"nextSibling"),_=M(v,"childNodes"),I=M(v,"parentNode");if("function"==typeof a){var F=i.createElement("template");F.content&&F.content.ownerDocument&&(i=F.content.ownerDocument);}var ot=nt(g,r),it=ot?ot.createHTML(""):"",st=i,at=st.implementation,ct=st.createNodeIterator,lt=st.createDocumentFragment,ut=st.getElementsByTagName,ft=r.importNode,pt={};try{pt=N(i).documentMode?i.documentMode:{};}catch(t){}var dt={};n.isSupported="function"==typeof I&&at&&void 0!==at.createHTMLDocument&&9!==pt;var ht,mt,gt=J,vt=Z,yt=V,bt=K,_t=Q,wt=X,xt=Y,Ct=null,Ot=L({},[].concat(o(P),o(R),o(D),o($),o(H))),St=null,jt=L({},[].concat(o(B),o(q),o(W),o(G))),At=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),kt=null,Et=null,Tt=!0,It=!0,Ft=!1,Lt=!1,Nt=!1,Mt=!1,Pt=!1,Rt=!1,Dt=!1,Ut=!1,$t=!0,zt=!0,Ht=!1,Bt={},qt=null,Wt=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gt=null,Jt=L({},["audio","video","img","source","image","track"]),Zt=null,Vt=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Kt="http://www.w3.org/1998/Math/MathML",Yt="http://www.w3.org/2000/svg",Qt="http://www.w3.org/1999/xhtml",Xt=Qt,te=!1,ee=["application/xhtml+xml","text/html"],ne="text/html",re=null,oe=i.createElement("form"),ie=function(t){return t instanceof RegExp||t instanceof Function},se=function(e){re&&re===e||(e&&"object"===t(e)||(e={}),e=N(e),Ct="ALLOWED_TAGS"in e?L({},e.ALLOWED_TAGS):Ot,St="ALLOWED_ATTR"in e?L({},e.ALLOWED_ATTR):jt,Zt="ADD_URI_SAFE_ATTR"in e?L(N(Vt),e.ADD_URI_SAFE_ATTR):Vt,Gt="ADD_DATA_URI_TAGS"in e?L(N(Jt),e.ADD_DATA_URI_TAGS):Jt,qt="FORBID_CONTENTS"in e?L({},e.FORBID_CONTENTS):Wt,kt="FORBID_TAGS"in e?L({},e.FORBID_TAGS):{},Et="FORBID_ATTR"in e?L({},e.FORBID_ATTR):{},Bt="USE_PROFILES"in e&&e.USE_PROFILES,Tt=!1!==e.ALLOW_ARIA_ATTR,It=!1!==e.ALLOW_DATA_ATTR,Ft=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Lt=e.SAFE_FOR_TEMPLATES||!1,Nt=e.WHOLE_DOCUMENT||!1,Rt=e.RETURN_DOM||!1,Dt=e.RETURN_DOM_FRAGMENT||!1,Ut=e.RETURN_TRUSTED_TYPE||!1,Pt=e.FORCE_BODY||!1,$t=!1!==e.SANITIZE_DOM,zt=!1!==e.KEEP_CONTENT,Ht=e.IN_PLACE||!1,xt=e.ALLOWED_URI_REGEXP||xt,Xt=e.NAMESPACE||Qt,e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(At.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(At.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(At.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ht=ht=-1===ee.indexOf(e.PARSER_MEDIA_TYPE)?ne:e.PARSER_MEDIA_TYPE,mt="application/xhtml+xml"===ht?function(t){return t}:O,Lt&&(It=!1),Dt&&(Rt=!0),Bt&&(Ct=L({},o(H)),St=[],!0===Bt.html&&(L(Ct,P),L(St,B)),!0===Bt.svg&&(L(Ct,R),L(St,q),L(St,G)),!0===Bt.svgFilters&&(L(Ct,D),L(St,q),L(St,G)),!0===Bt.mathMl&&(L(Ct,$),L(St,W),L(St,G))),e.ADD_TAGS&&(Ct===Ot&&(Ct=N(Ct)),L(Ct,e.ADD_TAGS)),e.ADD_ATTR&&(St===jt&&(St=N(St)),L(St,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&L(Zt,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(qt===Wt&&(qt=N(qt)),L(qt,e.FORBID_CONTENTS)),zt&&(Ct["#text"]=!0),Nt&&L(Ct,["html","head","body"]),Ct.table&&(L(Ct,["tbody"]),delete kt.tbody),m&&m(e),re=e);},ae=L({},["mi","mo","mn","ms","mtext"]),ce=L({},["foreignobject","desc","title","annotation-xml"]),le=L({},["title","style","font","a","script"]),ue=L({},R);L(ue,D),L(ue,U);var fe=L({},$);L(fe,z);var pe=function(t){var e=I(t);e&&e.tagName||(e={namespaceURI:Qt,tagName:"template"});var n=O(t.tagName),r=O(e.tagName);return t.namespaceURI===Yt?e.namespaceURI===Qt?"svg"===n:e.namespaceURI===Kt?"svg"===n&&("annotation-xml"===r||ae[r]):Boolean(ue[n]):t.namespaceURI===Kt?e.namespaceURI===Qt?"math"===n:e.namespaceURI===Yt?"math"===n&&ce[r]:Boolean(fe[n]):t.namespaceURI===Qt&&!(e.namespaceURI===Yt&&!ce[r])&&!(e.namespaceURI===Kt&&!ae[r])&&!fe[n]&&(le[n]||!ue[n])},de=function(t){C(n.removed,{element:t});try{t.parentNode.removeChild(t);}catch(e){try{t.outerHTML=it;}catch(e){t.remove();}}},he=function(t,e){try{C(n.removed,{attribute:e.getAttributeNode(t),from:e});}catch(t){C(n.removed,{attribute:null,from:e});}if(e.removeAttribute(t),"is"===t&&!St[t])if(Rt||Dt)try{de(e);}catch(t){}else try{e.setAttribute(t,"");}catch(t){}},me=function(t){var e,n;if(Pt)t="<remove></remove>"+t;else {var r=S(t,/^[\r\n\t ]+/);n=r&&r[0];}"application/xhtml+xml"===ht&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var o=ot?ot.createHTML(t):t;if(Xt===Qt)try{e=(new h).parseFromString(o,ht);}catch(t){}if(!e||!e.documentElement){e=at.createDocument(Xt,"template",null);try{e.documentElement.innerHTML=te?"":o;}catch(t){}}var s=e.body||e.documentElement;return t&&n&&s.insertBefore(i.createTextNode(n),s.childNodes[0]||null),Xt===Qt?ut.call(e,Nt?"html":"body")[0]:Nt?e.documentElement:s},ge=function(t){return ct.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof d&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof p)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore)},ye=function(e){return "object"===t(c)?e instanceof c:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},be=function(t,e,r){dt[t]&&w(dt[t],(function(t){t.call(n,e,r,re);}));},_e=function(t){var e;if(be("beforeSanitizeElements",t,null),ve(t))return de(t),!0;if(E(/[\u0080-\uFFFF]/,t.nodeName))return de(t),!0;var r=mt(t.nodeName);if(be("uponSanitizeElement",t,{tagName:r,allowedTags:Ct}),t.hasChildNodes()&&!ye(t.firstElementChild)&&(!ye(t.content)||!ye(t.content.firstElementChild))&&E(/<[/\w]/g,t.innerHTML)&&E(/<[/\w]/g,t.textContent))return de(t),!0;if("select"===r&&E(/<template/i,t.innerHTML))return de(t),!0;if(!Ct[r]||kt[r]){if(!kt[r]&&xe(r)){if(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,r))return !1;if(At.tagNameCheck instanceof Function&&At.tagNameCheck(r))return !1}if(zt&&!qt[r]){var o=I(t)||t.parentNode,i=_(t)||t.childNodes;if(i&&o)for(var s=i.length-1;s>=0;--s)o.insertBefore(y(i[s],!0),b(t));}return de(t),!0}return t instanceof l&&!pe(t)?(de(t),!0):"noscript"!==r&&"noembed"!==r||!E(/<\/no(script|embed)/i,t.innerHTML)?(Lt&&3===t.nodeType&&(e=t.textContent,e=j(e,gt," "),e=j(e,vt," "),t.textContent!==e&&(C(n.removed,{element:t.cloneNode()}),t.textContent=e)),be("afterSanitizeElements",t,null),!1):(de(t),!0)},we=function(t,e,n){if($t&&("id"===e||"name"===e)&&(n in i||n in oe))return !1;if(It&&!Et[e]&&E(yt,e));else if(Tt&&E(bt,e));else if(!St[e]||Et[e]){if(!(xe(t)&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,t)||At.tagNameCheck instanceof Function&&At.tagNameCheck(t))&&(At.attributeNameCheck instanceof RegExp&&E(At.attributeNameCheck,e)||At.attributeNameCheck instanceof Function&&At.attributeNameCheck(e))||"is"===e&&At.allowCustomizedBuiltInElements&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,n)||At.tagNameCheck instanceof Function&&At.tagNameCheck(n))))return !1}else if(Zt[e]);else if(E(xt,j(n,wt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==A(n,"data:")||!Gt[t])if(Ft&&!E(_t,j(n,wt,"")));else if(n)return !1;return !0},xe=function(t){return t.indexOf("-")>0},Ce=function(t){var e,r,o,i;be("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:St};for(i=s.length;i--;){var c=e=s[i],l=c.name,u=c.namespaceURI;if(r="value"===l?e.value:k(e.value),o=mt(l),a.attrName=o,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,be("uponSanitizeAttribute",t,a),r=a.attrValue,!a.forceKeepAttr&&(he(l,t),a.keepAttr))if(E(/\/>/i,r))he(l,t);else {Lt&&(r=j(r,gt," "),r=j(r,vt," "));var f=mt(t.nodeName);if(we(f,o,r))try{u?t.setAttributeNS(u,l,r):t.setAttribute(l,r),x(n.removed);}catch(t){}}}be("afterSanitizeAttributes",t,null);}},Oe=function t(e){var n,r=ge(e);for(be("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)be("uponSanitizeShadowNode",n,null),_e(n)||(n.content instanceof s&&t(n.content),Ce(n));be("afterSanitizeShadowDOM",e,null);};return n.sanitize=function(o,i){var a,l,u,f,p;if((te=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!ye(o)){if("function"!=typeof o.toString)throw T("toString is not a function");if("string"!=typeof(o=o.toString()))throw T("dirty is not a string, aborting")}if(!n.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof o)return e.toStaticHTML(o);if(ye(o))return e.toStaticHTML(o.outerHTML)}return o}if(Mt||se(i),n.removed=[],"string"==typeof o&&(Ht=!1),Ht){if(o.nodeName){var d=mt(o.nodeName);if(!Ct[d]||kt[d])throw T("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=me("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else {if(!Rt&&!Lt&&!Nt&&-1===o.indexOf("<"))return ot&&Ut?ot.createHTML(o):o;if(!(a=me(o)))return Rt?null:Ut?it:""}a&&Pt&&de(a.firstChild);for(var h=ge(Ht?o:a);u=h.nextNode();)3===u.nodeType&&u===f||_e(u)||(u.content instanceof s&&Oe(u.content),Ce(u),f=u);if(f=null,Ht)return o;if(Rt){if(Dt)for(p=lt.call(a.ownerDocument);a.firstChild;)p.appendChild(a.firstChild);else p=a;return St.shadowroot&&(p=ft.call(r,p,!0)),p}var m=Nt?a.outerHTML:a.innerHTML;return Nt&&Ct["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&E(tt,a.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+m),Lt&&(m=j(m,gt," "),m=j(m,vt," ")),ot&&Ut?ot.createHTML(m):m},n.setConfig=function(t){se(t),Mt=!0;},n.clearConfig=function(){re=null,Mt=!1;},n.isValidAttribute=function(t,e,n){re||se({});var r=mt(t),o=mt(e);return we(r,o,n)},n.addHook=function(t,e){"function"==typeof e&&(dt[t]=dt[t]||[],C(dt[t],e));},n.removeHook=function(t){if(dt[t])return x(dt[t])},n.removeHooks=function(t){dt[t]&&(dt[t]=[]);},n.removeAllHooks=function(){dt={};},n}return rt()}();},729:t=>{var e=Object.prototype.hasOwnProperty,n="~";function r(){}function o(t,e,n){this.fn=t,this.context=e,this.once=n||!1;}function i(t,e,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||t,s),c=n?n+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function s(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e];}function a(){this._events=new r,this._eventsCount=0;}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),a.prototype.eventNames=function(){var t,r,o=[];if(0===this._eventsCount)return o;for(r in t=this._events)e.call(t,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return [];if(r.fn)return [r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},a.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},a.prototype.emit=function(t,e,r,o,i,s){var a=n?n+t:t;if(!this._events[a])return !1;var c,l,u=this._events[a],f=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),f){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,o),!0;case 5:return u.fn.call(u.context,e,r,o,i),!0;case 6:return u.fn.call(u.context,e,r,o,i,s),!0}for(l=1,c=new Array(f-1);l<f;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c);}else {var p,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,r);break;case 4:u[l].fn.call(u[l].context,e,r,o);break;default:if(!c)for(p=1,c=new Array(f-1);p<f;p++)c[p-1]=arguments[p];u[l].fn.apply(u[l].context,c);}}return !0},a.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},a.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},a.prototype.removeListener=function(t,e,r,o){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||s(this,i);else {for(var c=0,l=[],u=a.length;c<u;c++)(a[c].fn!==e||o&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[i]=1===l.length?l[0]:l:s(this,i);}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&s(this,e)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a;},717:t=>{"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}});}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t;};},824:t=>{var e=1e3,n=60*e,r=60*n,o=24*r,i=7*o,s=365.25*o;function a(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,c){c=c||{};var l=typeof t;if("string"===l&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===l&&isFinite(t))return c.long?function(t){var i=Math.abs(t);if(i>=o)return a(t,i,o,"day");if(i>=r)return a(t,i,r,"hour");if(i>=n)return a(t,i,n,"minute");if(i>=e)return a(t,i,e,"second");return t+" ms"}(t):function(t){var i=Math.abs(t);if(i>=o)return Math.round(t/o)+"d";if(i>=r)return Math.round(t/r)+"h";if(i>=n)return Math.round(t/n)+"m";if(i>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};},520:(t,e,n)=>{var r=n(155),o="win32"===r.platform,i=n(539);function s(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o));}return n}function a(t){for(var e=t.length-1,n=0;n<=e&&!t[n];n++);for(var r=e;r>=0&&!t[r];r--);return 0===n&&r===e?t:n>r?[]:t.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function f(t){var e=c.exec(t),n=(e[1]||"")+(e[2]||""),r=e[3]||"",o=l.exec(r);return [n,o[1],o[2],o[3]]}function p(t){var e=c.exec(t),n=e[1]||"",r=!!n&&":"!==n[1];return {device:n,isUnc:r,isAbsolute:r||!!e[2],tail:e[3]}}function d(t){return "\\\\"+t.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var t="",e="",n=!1,o=arguments.length-1;o>=-1;o--){var a;if(o>=0?a=arguments[o]:t?(a=r.env["="+t])&&a.substr(0,3).toLowerCase()===t.toLowerCase()+"\\"||(a=t+"\\"):a=r.cwd(),!i.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var c=p(a),l=c.device,u=c.isUnc,f=c.isAbsolute,h=c.tail;if((!l||!t||l.toLowerCase()===t.toLowerCase())&&(t||(t=l),n||(e=h+"\\"+e,n=f),t&&n))break}}return u&&(t=d(t)),t+(n?"\\":"")+(e=s(e.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(t){var e=p(t),n=e.device,r=e.isUnc,o=e.isAbsolute,i=e.tail,a=/[\\\/]$/.test(i);return (i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&a&&(i+="\\"),r&&(n=d(n)),n+(o?"\\":"")+i},u.isAbsolute=function(t){return p(t).isAbsolute},u.join=function(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&t.push(n);}var r=t.join("\\");return /^[\\\/]{2}[^\\\/]/.test(t[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(t,e){t=u.resolve(t),e=u.resolve(e);for(var n=t.toLowerCase(),r=e.toLowerCase(),o=a(e.split("\\")),i=a(n.split("\\")),s=a(r.split("\\")),c=Math.min(i.length,s.length),l=c,f=0;f<c;f++)if(i[f]!==s[f]){l=f;break}if(0==l)return e;var p=[];for(f=l;f<i.length;f++)p.push("..");return (p=p.concat(o.slice(l))).join("\\")},u._makeLong=function(t){if(!i.isString(t))return t;if(!t)return "";var e=u.resolve(t);return /^[a-zA-Z]\:\\/.test(e)?"\\\\?\\"+e:/^\\\\[^?.]/.test(e)?"\\\\?\\UNC\\"+e.substring(2):t},u.dirname=function(t){var e=f(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(t,e){var n=f(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},u.extname=function(t){return f(t)[3]},u.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);var n=t.dir,r=t.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=f(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return {root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},u.sep="\\",u.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(t){return h.exec(t).slice(1)}m.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o[0]);}return (e?"/":"")+(t=s(t.split("/"),!e).join("/"))||"."},m.normalize=function(t){var e=m.isAbsolute(t),n=t&&"/"===t[t.length-1];return (t=s(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},m.isAbsolute=function(t){return "/"===t.charAt(0)},m.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n);}return m.normalize(t)},m.relative=function(t,e){t=m.resolve(t).substr(1),e=m.resolve(e).substr(1);for(var n=a(t.split("/")),r=a(e.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var c=[];for(s=i;s<n.length;s++)c.push("..");return (c=c.concat(r.slice(i))).join("/")},m._makeLong=function(t){return t},m.dirname=function(t){var e=g(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(t,e){var n=g(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},m.extname=function(t){return g(t)[3]},m.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return (t.dir?t.dir+m.sep:"")+(t.base||"")},m.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=g(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},m.sep="/",m.delimiter=":",t.exports=o?u:m,t.exports.posix=m,t.exports.win32=u;},155:t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o;}catch(t){e=o;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(t){n=i;}}();var a,c=[],l=!1,u=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):u=-1,c.length&&p());}function p(){if(!l){var t=s(f);l=!0;for(var e=c.length;e;){for(a=c,c=[];++u<e;)a&&a[u].run();u=-1,e=c.length;}a=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t);}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t);}}function d(t,e){this.fun=t,this.array=e;}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||s(p);},d.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return []},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},384:t=>{t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8};},539:(t,e,n)=>{var r=n(155),o=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,(function(t){if("%%"===t)return "%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return "[Circular]"}default:return t}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(t,o){if(y(n.g.process))return function(){return e.deprecate(t,o).apply(this,arguments)};if(!0===r.noDeprecation)return t;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0;}return t.apply(this,arguments)}};var i,s={};function a(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return v(o)||(o=u(t,o,r)),o}var i=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(v(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,n);if(i)return i;var s=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0;})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(C(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var l,_="",O=!1,S=["{","}"];(d(n)&&(O=!0,S=["[","]"]),C(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+f(n)),0!==s.length||O&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=O?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)k(e,String(s))?i.push(p(t,e,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0));})),i}(t,n,r,a,s):s.map((function(e){return p(t,n,r,a,e,O)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,_,S)):S[0]+_+S[1]}function f(t){return "["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),k(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=m(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return "  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return "   "+t})).join("\n")):a=t.stylize("[Circular]","special")),y(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"));}return s+": "+a}function d(t){return Array.isArray(t)}function h(t){return "boolean"==typeof t}function m(t){return null===t}function g(t){return "number"==typeof t}function v(t){return "string"==typeof t}function y(t){return void 0===t}function b(t){return _(t)&&"[object RegExp]"===O(t)}function _(t){return "object"==typeof t&&null!==t}function w(t){return _(t)&&"[object Date]"===O(t)}function x(t){return _(t)&&("[object Error]"===O(t)||t instanceof Error)}function C(t){return "function"==typeof t}function O(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(y(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!s[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;s[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r);};}else s[t]=function(){};return s[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=h,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=v,e.isSymbol=function(t){return "symbol"==typeof t},e.isUndefined=y,e.isRegExp=b,e.isObject=_,e.isDate=w,e.isError=x,e.isFunction=C,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(384);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return [t.getDate(),j[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",A(),e.format.apply(e,arguments));},e.inherits=n(717),e._extend=function(t,e){if(!e||!_(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]});},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};var r={};return (()=>{n.r(r),n.d(r,{LSPluginUser:()=>Co,setupPluginUserInstance:()=>Oo});var t=n(520);n(856);const e=function(){this.__data__=[],this.size=0;};const o=function(t,e){return t===e||t!=t&&e!=e};const i=function(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return -1};var s=Array.prototype.splice;const a=function(t){var e=this.__data__,n=i(e,t);return !(n<0)&&(n==e.length-1?e.pop():s.call(e,n,1),--this.size,!0)};const c=function(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]};const l=function(t){return i(this.__data__,t)>-1};const u=function(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function f(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}f.prototype.clear=e,f.prototype.delete=a,f.prototype.get=c,f.prototype.has=l,f.prototype.set=u;const p=f;const d=function(){this.__data__=new p,this.size=0;};const h=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};const m=function(t){return this.__data__.get(t)};const g=function(t){return this.__data__.has(t)};const v="object"==typeof global&&global&&global.Object===Object&&global;var y="object"==typeof self&&self&&self.Object===Object&&self;const b=v||y||Function("return this")();const _=b.Symbol;var w=Object.prototype,x=w.hasOwnProperty,C=w.toString,O=_?_.toStringTag:void 0;const S=function(t){var e=x.call(t,O),n=t[O];try{t[O]=void 0;var r=!0;}catch(t){}var o=C.call(t);return r&&(e?t[O]=n:delete t[O]),o};var j=Object.prototype.toString;const A=function(t){return j.call(t)};var k=_?_.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?S(t):A(t)};const T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const I=function(t){if(!T(t))return !1;var e=E(t);return "[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const F=b["__core-js_shared__"];var L,N=(L=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";const M=function(t){return !!N&&N in t};var P=Function.prototype.toString;const R=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return ""};var D=/^\[object .+?Constructor\]$/,U=Function.prototype,$=Object.prototype,z=U.toString,H=$.hasOwnProperty,B=RegExp("^"+z.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const q=function(t){return !(!T(t)||M(t))&&(I(t)?B:D).test(R(t))};const W=function(t,e){return null==t?void 0:t[e]};const G=function(t,e){var n=W(t,e);return q(n)?n:void 0};const J=G(b,"Map");const Z=G(Object,"create");const V=function(){this.__data__=Z?Z(null):{},this.size=0;};const K=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var Y=Object.prototype.hasOwnProperty;const Q=function(t){var e=this.__data__;if(Z){var n=e[t];return "__lodash_hash_undefined__"===n?void 0:n}return Y.call(e,t)?e[t]:void 0};var X=Object.prototype.hasOwnProperty;const tt=function(t){var e=this.__data__;return Z?void 0!==e[t]:X.call(e,t)};const et=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this};function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}nt.prototype.clear=V,nt.prototype.delete=K,nt.prototype.get=Q,nt.prototype.has=tt,nt.prototype.set=et;const rt=nt;const ot=function(){this.size=0,this.__data__={hash:new rt,map:new(J||p),string:new rt};};const it=function(t){var e=typeof t;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const st=function(t,e){var n=t.__data__;return it(e)?n["string"==typeof e?"string":"hash"]:n.map};const at=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};const ct=function(t){return st(this,t).get(t)};const lt=function(t){return st(this,t).has(t)};const ut=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}ft.prototype.clear=ot,ft.prototype.delete=at,ft.prototype.get=ct,ft.prototype.has=lt,ft.prototype.set=ut;const pt=ft;const dt=function(t,e){var n=this.__data__;if(n instanceof p){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new pt(r);}return n.set(t,e),this.size=n.size,this};function ht(t){var e=this.__data__=new p(t);this.size=e.size;}ht.prototype.clear=d,ht.prototype.delete=h,ht.prototype.get=m,ht.prototype.has=g,ht.prototype.set=dt;const mt=ht;const gt=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const vt=function(t,e,n){"__proto__"==e&&gt?gt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;};const yt=function(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&vt(t,e,n);};const bt=function(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(i[c],c,i))break}return e}}();var _t="object"==typeof exports&&exports&&!exports.nodeType&&exports,wt=_t&&"object"==typeof module&&module&&!module.nodeType&&module,xt=wt&&wt.exports===_t?b.Buffer:void 0,Ct=xt?xt.allocUnsafe:void 0;const Ot=function(t,e){if(e)return t.slice();var n=t.length,r=Ct?Ct(n):new t.constructor(n);return t.copy(r),r};const St=b.Uint8Array;const jt=function(t){var e=new t.constructor(t.byteLength);return new St(e).set(new St(t)),e};const At=function(t,e){var n=e?jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};const kt=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e};var Et=Object.create;const Tt=function(){function t(){}return function(e){if(!T(e))return {};if(Et)return Et(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const It=function(t,e){return function(n){return t(e(n))}};const Ft=It(Object.getPrototypeOf,Object);var Lt=Object.prototype;const Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Lt)};const Mt=function(t){return "function"!=typeof t.constructor||Nt(t)?{}:Tt(Ft(t))};const Pt=function(t){return null!=t&&"object"==typeof t};const Rt=function(t){return Pt(t)&&"[object Arguments]"==E(t)};var Dt=Object.prototype,Ut=Dt.hasOwnProperty,$t=Dt.propertyIsEnumerable;const zt=Rt(function(){return arguments}())?Rt:function(t){return Pt(t)&&Ut.call(t,"callee")&&!$t.call(t,"callee")};const Ht=Array.isArray;const Bt=function(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};const qt=function(t){return null!=t&&Bt(t.length)&&!I(t)};const Wt=function(t){return Pt(t)&&qt(t)};const Gt=function(){return !1};var Jt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Zt=Jt&&"object"==typeof module&&module&&!module.nodeType&&module,Vt=Zt&&Zt.exports===Jt?b.Buffer:void 0;const Kt=(Vt?Vt.isBuffer:void 0)||Gt;var Yt=Function.prototype,Qt=Object.prototype,Xt=Yt.toString,te=Qt.hasOwnProperty,ee=Xt.call(Object);const ne=function(t){if(!Pt(t)||"[object Object]"!=E(t))return !1;var e=Ft(t);if(null===e)return !0;var n=te.call(e,"constructor")&&e.constructor;return "function"==typeof n&&n instanceof n&&Xt.call(n)==ee};var re={};re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=!0,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=!1;const oe=function(t){return Pt(t)&&Bt(t.length)&&!!re[E(t)]};const ie=function(t){return function(e){return t(e)}};var se="object"==typeof exports&&exports&&!exports.nodeType&&exports,ae=se&&"object"==typeof module&&module&&!module.nodeType&&module,ce=ae&&ae.exports===se&&v.process,le=function(){try{var t=ae&&ae.require&&ae.require("util").types;return t||ce&&ce.binding&&ce.binding("util")}catch(t){}}();var ue=le&&le.isTypedArray;const fe=ue?ie(ue):oe;const pe=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var de=Object.prototype.hasOwnProperty;const he=function(t,e,n){var r=t[e];de.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||vt(t,e,n);};const me=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=r?r(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?vt(n,a,c):he(n,a,c);}return n};const ge=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};var ve=/^(?:0|[1-9]\d*)$/;const ye=function(t,e){var n=typeof t;return !!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&ve.test(t))&&t>-1&&t%1==0&&t<e};var be=Object.prototype.hasOwnProperty;const _e=function(t,e){var n=Ht(t),r=!n&&zt(t),o=!n&&!r&&Kt(t),i=!n&&!r&&!o&&fe(t),s=n||r||o||i,a=s?ge(t.length,String):[],c=a.length;for(var l in t)!e&&!be.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ye(l,c))||a.push(l);return a};const we=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e};var xe=Object.prototype.hasOwnProperty;const Ce=function(t){if(!T(t))return we(t);var e=Nt(t),n=[];for(var r in t)("constructor"!=r||!e&&xe.call(t,r))&&n.push(r);return n};const Oe=function(t){return qt(t)?_e(t,!0):Ce(t)};const Se=function(t){return me(t,Oe(t))};const je=function(t,e,n,r,o,i,s){var a=pe(t,n),c=pe(e,n),l=s.get(c);if(l)yt(t,n,l);else {var u=i?i(a,c,n+"",t,e,s):void 0,f=void 0===u;if(f){var p=Ht(c),d=!p&&Kt(c),h=!p&&!d&&fe(c);u=c,p||d||h?Ht(a)?u=a:Wt(a)?u=kt(a):d?(f=!1,u=Ot(c,!0)):h?(f=!1,u=At(c,!0)):u=[]:ne(c)||zt(c)?(u=a,zt(a)?u=Se(a):T(a)&&!I(a)||(u=Mt(c))):f=!1;}f&&(s.set(c,u),o(u,c,r,i,s),s.delete(c)),yt(t,n,u);}};const Ae=function t(e,n,r,o,i){e!==n&&bt(n,(function(s,a){if(i||(i=new mt),T(s))je(e,n,a,r,t,o,i);else {var c=o?o(pe(e,a),s,a+"",e,n,i):void 0;void 0===c&&(c=s),yt(e,a,c);}}),Oe);};const ke=function(t){return t};const Ee=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)};var Te=Math.max;const Ie=function(t,e,n){return e=Te(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Te(r.length-e,0),s=Array(i);++o<i;)s[o]=r[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=r[o];return a[e]=n(s),Ee(t,this,a)}};const Fe=function(t){return function(){return t}};const Le=gt?function(t,e){return gt(t,"toString",{configurable:!0,enumerable:!1,value:Fe(e),writable:!0})}:ke;var Ne=Date.now;const Me=function(t){var e=0,n=0;return function(){var r=Ne(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Le);const Pe=function(t,e){return Me(Ie(t,e,ke),t+"")};const Re=function(t,e,n){if(!T(n))return !1;var r=typeof e;return !!("number"==r?qt(n)&&ye(e,n.length):"string"==r&&e in n)&&o(n[e],t)};const De=function(t){return Pe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,s&&Re(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var a=n[r];a&&t(e,a,r,i);}return e}))}((function(t,e,n){Ae(t,e,n);}));var Ue=function(){return Ue=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Ue.apply(this,arguments)};function $e(t){return t.toLowerCase()}var ze=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],He=/[^A-Z0-9]+/gi;function Be(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function qe(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,r=void 0===n?ze:n,o=e.stripRegexp,i=void 0===o?He:o,s=e.transform,a=void 0===s?$e:s,c=e.delimiter,l=void 0===c?" ":c,u=Be(Be(t,r,"$1\0$2"),i,"\0"),f=0,p=u.length;"\0"===u.charAt(f);)f++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(f,p).split("\0").map(a).join(l)}(t,Ue({delimiter:"."},e))}var We=n(729),Ge=n.n(We);function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const Ze="win32"===navigator.platform.toLowerCase()?t.win32:t.posix;const Ve=function(t,e){return void 0===e&&(e={}),qe(t,Ue({delimiter:"_"},e))};const Ke=De;class Ye extends(Ge()){constructor(t,e){super(),Je(this,"_tag",void 0),Je(this,"_opts",void 0),Je(this,"_logs",[]),this._tag=t,this._opts=e;}write(t,e,n){var r;null!=e&&e.length&&!0===e[e.length-1]&&(n=!0,e.pop());const o=e.reduce(((t,e)=>(e&&e instanceof Error?t+=`${e.message} ${e.stack}`:t+=e.toString(),t)),`[${this._tag}][${(new Date).toLocaleTimeString()}] `);var i;(this._logs.push([t,o]),n||null!==(r=this._opts)&&void 0!==r&&r.console)&&(null===(i=console)||void 0===i||i["ERROR"===t?"error":"debug"](`${t}: ${o}`));this.emit("change");}clear(){this._logs=[],this.emit("change");}info(...t){this.write("INFO",t);}error(...t){this.write("ERROR",t);}warn(...t){this.write("WARN",t);}setTag(t){this._tag=t;}toJSON(){return this._logs}}function Qe(t,...e){try{const n=new URL(t);if(!n.origin)throw new Error(null);const r=Ze.join(t.substr(n.origin.length),...e);return n.origin+r}catch(n){return Ze.join(t,...e)}}function Xe(t,e){let n,r,o=!1;const i=e=>n=>{t&&clearTimeout(t),e(n),o=!0;},s=new Promise(((o,s)=>{n=i(o),r=i(s),t&&(t=setTimeout((()=>r(new Error(`[deferred timeout] ${e}`))),t));}));return {created:Date.now(),setTag:t=>e=t,resolve:n,reject:r,promise:s,get settled(){return o}}}const tn=new Map;window.__injectedUIEffects=tn;var en=n(227),nn=n.n(en);function rn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const on="application/x-postmate-v1+json";let sn=0;const an={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},cn=(t,e)=>("string"!=typeof e||t.origin===e)&&(!!t.data&&(("object"!=typeof t.data||"postmate"in t.data)&&(t.data.type===on&&!!an[t.data.postmate])));class ln{constructor(t){rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"events",{}),rn(this,"childOrigin",void 0),rn(this,"listener",void 0),this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.listener=t=>{if(!cn(t,this.childOrigin))return !1;const{data:e,name:n}=((t||{}).data||{}).value||{};"emit"===t.data.postmate&&n in this.events&&this.events[n].forEach((t=>{t.call(this,e);}));},this.parent.addEventListener("message",this.listener,!1);}get(t,...e){return new Promise((n=>{const r=++sn,o=t=>{t.data.uid===r&&"reply"===t.data.postmate&&(this.parent.removeEventListener("message",o,!1),n(t.data.value));};this.parent.addEventListener("message",o,!1),this.child.postMessage({postmate:"request",type:on,property:t,args:e,uid:r},this.childOrigin);}))}call(t,e){this.child.postMessage({postmate:"call",type:on,property:t,data:e},this.childOrigin);}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e);}destroy(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame);}}class un{constructor(t){rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),rn(this,"child",void 0),this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",(t=>{if(!cn(t,this.parentOrigin))return;const{property:e,uid:n,data:r,args:o}=t.data;"call"!==t.data.postmate?((t,e,n)=>{const r="function"==typeof t[e]?t[e].apply(null,n):t[e];return Promise.resolve(r)})(this.model,e,o).then((r=>{t.source.postMessage({property:e,postmate:"reply",type:on,uid:n,value:r},t.origin);})):e in this.model&&"function"==typeof this.model[e]&&this.model[e](r);}));}emit(t,e){this.parent.postMessage({postmate:"emit",type:on,value:{name:t,data:e}},this.parentOrigin);}}class fn{constructor(t){rn(this,"container",void 0),rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"childOrigin",void 0),rn(this,"url",void 0),rn(this,"model",void 0),this.container=t.container,this.url=t.url,this.parent=window,this.frame=document.createElement("iframe"),t.id&&(this.frame.id=t.id),t.name&&(this.frame.name=t.name),this.frame.classList.add.apply(this.frame.classList,t.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=t.model||{};}sendHandshake(t){const e=(t=>{const e=document.createElement("a");e.href=t;const n=e.protocol.length>4?e.protocol:window.location.protocol,r=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host;return e.origin||`${n}//${r}`})(t=t||this.url);let n,r=0;return new Promise(((o,i)=>{const s=t=>!!cn(t,e)&&("handshake-reply"===t.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",s,!1),this.childOrigin=t.origin,o(new ln(this))):i("Failed handshake"));this.parent.addEventListener("message",s,!1);const a=()=>{r++,this.child.postMessage({postmate:"handshake",type:on,model:this.model},e),5===r&&clearInterval(n);};this.frame.addEventListener("load",(()=>{a(),n=setInterval(a,500);})),this.frame.src=t;}))}destroy(){this.frame.parentNode.removeChild(this.frame);}}rn(fn,"debug",!1),rn(fn,"Model",void 0);class pn{constructor(t){rn(this,"child",void 0),rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),this.child=window,this.model=t,this.parent=this.child.parent;}sendHandshakeReply(){return new Promise(((t,e)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){this.child.removeEventListener("message",n,!1),r.source.postMessage({postmate:"handshake-reply",type:on},r.origin),this.parentOrigin=r.origin;const e=r.data.model;return e&&Object.keys(e).forEach((t=>{this.model[t]=e[t];})),t(new un(this))}return e("Handshake Reply Failed")}};this.child.addEventListener("message",n,!1);}))}}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const{importHTML:hn,createSandboxContainer:mn}=window.QSandbox||{};function gn(t,e){return t.startsWith("http")?fetch(t,e):(t=t.replace("file://",""),new Promise((async(e,n)=>{try{const n=await window.apis.doAction(["readFile",t]);e({text:()=>n});}catch(t){console.error(t),n(t);}})))}class vn extends(Ge()){constructor(t){super(),dn(this,"_pluginLocal",void 0),dn(this,"_frame",void 0),dn(this,"_root",void 0),dn(this,"_loaded",!1),dn(this,"_unmountFns",[]),this._pluginLocal=t,t._dispose((()=>{this._unmount();}));}async load(){const{name:t,entry:e}=this._pluginLocal.options;if(this.loaded||!e)return;const{template:n,execScripts:r}=await hn(e,{fetch:gn});this._mount(n,document.body);const o=mn(t,{elementGetter:()=>{var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}}).instance.proxy;o.__shadow_mode__=!0,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Co(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,!0);this._unmountFns.push(i.unmount),this._loaded=!0;}_mount(t,e){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${t}</div>`,e.appendChild(n),this.emit("mounted");}_unmount(){for(const t of this._unmountFns)t&&t.call(null);}destroy(){var t,e;null===(t=this.frame)||void 0===t||null===(e=t.parentNode)||void 0===e||e.removeChild(this.frame);}get loaded(){return this._loaded}get document(){var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}get frame(){return this._frame}}function yn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const bn=nn()("LSPlugin:caller"),_n="#await#response#",wn="#lspmsg#",xn="#lspmsg#error#",Cn=t=>`#lspmsg#${t}`;class On extends(Ge()){constructor(t){super(),yn(this,"_pluginLocal",void 0),yn(this,"_connected",!1),yn(this,"_parent",void 0),yn(this,"_child",void 0),yn(this,"_shadow",void 0),yn(this,"_status",void 0),yn(this,"_userModel",{}),yn(this,"_call",void 0),yn(this,"_callUserModel",void 0),yn(this,"_debugTag",""),this._pluginLocal=t,t&&(this._debugTag=t.debugTag);}async connectToChild(){if(this._connected)return;const{shadow:t}=this._pluginLocal;t?await this._setupShadowSandbox():await this._setupIframeSandbox();}async connectToParent(t={}){if(this._connected)return;const e=this,n=null!=this._pluginLocal;let o=0;const i=new Map,s=Xe(6e4),a=this._extendUserModel({"#lspmsg#ready#":async t=>{a[Cn(null==t?void 0:t.pid)]=({type:t,payload:n})=>{bn(`[host (_call) -> *user] ${this._debugTag}`,t,n),e.emit(t,n);},await s.resolve();},"#lspmsg#beforeunload#":async t=>{const n=Xe(1e4);e.emit("beforeunload",Object.assign({actor:n},t)),await n.promise;},"#lspmsg#settings#":async({type:t,payload:n})=>{e.emit("settings:changed",n);},[wn]:async({ns:t,type:n,payload:r})=>{bn(`[host (async) -> *user] ${this._debugTag} ns=${t} type=${n}`,r),t&&t.startsWith("hook")?e.emit(`${t}:${n}`,r):e.emit(n,r);},"#lspmsg#reply#":({_sync:t,result:e})=>{if(bn(`[sync host -> *user] #${t}`,e),i.has(t)){const n=i.get(t);n&&(null!=e&&e.hasOwnProperty(xn)?n.reject(e[xn]):n.resolve(e),i.delete(t));}},...t});var c;if(n)return await s.promise,JSON.parse(JSON.stringify(null===(c=this._pluginLocal)||void 0===c?void 0:c.toJSON()));const l=new pn(a).sendHandshakeReply();return this._status="pending",await l.then((t=>{this._child=t,this._connected=!0,this._call=async(e,n={},r)=>{if(r){const t=++o;i.set(t,r),n._sync=t,r.setTag(`async call #${t}`),bn(`async call #${t}`);}return t.emit(Cn(a.baseInfo.id),{type:e,payload:n}),null==r?void 0:r.promise},this._callUserModel=async(t,e)=>{try{a[t](e);}catch(e){bn(`[model method] #${t} not existed`);}},setInterval((()=>{if(i.size>100)for(const[t,e]of i)e.settled&&i.delete(t);}),18e5);})).finally((()=>{this._status=void 0;})),await s.promise,a.baseInfo}async call(t,e={}){var n;return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e)}async callAsync(t,e={}){var n;const r=Xe(1e4);return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e,r)}async callUserModel(t,...e){var n;return null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async callUserModelAsync(t,...e){var n;return t=`${_n}${t}`,null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async _setupIframeSandbox(){const t=this._pluginLocal,e=t.id,n=`${e}_lsp_main`,r=new URL(t.options.entry);r.searchParams.set("__v__",t.options.version);const o=document.querySelector(`#${n}`);o&&o.parentElement.removeChild(o);const i=document.createElement("div");i.classList.add("lsp-iframe-sandbox-container"),i.id=n,i.dataset.pid=e;try{var s;const t=null===(s=await this._pluginLocal._loadLayoutsData())||void 0===s?void 0:s.$$0;if(t){i.dataset.inited_layout="true";let{width:e,height:n,left:r,top:o,vw:s,vh:a}=t;r=Math.max(r,0),r="number"==typeof s?`${Math.min(100*r/s,99)}%`:`${r}px`,o=Math.max(o,45),o="number"==typeof a?`${Math.min(100*o/a,99)}%`:`${o}px`,Object.assign(i.style,{width:e+"px",height:n+"px",left:r,top:o});}}catch(t){console.error("[Restore Layout Error]",t);}document.body.appendChild(i);const a=new fn({id:e+"_iframe",container:i,url:r.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(t.toJSON()))}});let c,l=a.sendHandshake();return this._status="pending",new Promise(((e,n)=>{c=setTimeout((()=>{n(new Error("handshake Timeout")),a.destroy();}),4e3),l.then((n=>{this._parent=n,this._connected=!0,this.emit("connected"),n.on(Cn(t.id),(({type:t,payload:e})=>{var n,r;bn("[user -> *host] ",t,e),null===(n=this._pluginLocal)||void 0===n||n.emit(t,e||{}),null===(r=this._pluginLocal)||void 0===r||r.caller.emit(t,e||{});})),this._call=async(...e)=>{await n.call(Cn(t.id),{type:e[0],payload:Object.assign(e[1]||{},{$$pid:t.id})});},this._callUserModel=async(t,...e)=>{if(t.startsWith(_n))return await n.get(t.replace(_n,""),...e);n.call(t,null==e?void 0:e[0]);},e(null);})).catch((t=>{n(t);})).finally((()=>{clearTimeout(c);}));})).catch((t=>{throw bn("[iframe sandbox] error",t),t})).finally((()=>{this._status=void 0;}))}async _setupShadowSandbox(){const t=this._pluginLocal,e=this._shadow=new vn(t);try{this._status="pending",await e.load(),this._connected=!0,this.emit("connected"),this._call=async(e,n={},r)=>{var o;return r&&(n.actor=r),null===(o=this._pluginLocal)||void 0===o||o.emit(e,Object.assign(n,{$$pid:t.id})),null==r?void 0:r.promise},this._callUserModel=async(...t)=>{var e;let n=t[0];null!==(e=n)&&void 0!==e&&e.startsWith(_n)&&(n=n.replace(_n,""));const r=t[1]||{},o=this._userModel[n];"function"==typeof o&&await o.call(null,r);};}catch(t){throw bn("[shadow sandbox] error",t),t}finally{this._status=void 0;}}_extendUserModel(t){return Object.assign(this._userModel,t)}_getSandboxIframeContainer(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame.parentNode}_getSandboxShadowContainer(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame.parentNode}_getSandboxIframeRoot(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame}_getSandboxShadowRoot(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame}set debugTag(t){this._debugTag=t;}async destroy(){var t;let e=null;this._parent&&(e=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(e=this._getSandboxShadowContainer(),this._shadow.destroy()),null===(t=e)||void 0===t||t.parentNode.removeChild(e);}}function Sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class jn{constructor(t,e){Sn(this,"ctx",void 0),Sn(this,"opts",void 0),this.ctx=t,this.opts=e;}get ctxId(){return this.ctx.baseInfo.id}setItem(t,e){var n;return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,t,e,null===(n=this.opts)||void 0===n?void 0:n.assets]})}getItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}removeItem(t){var e;return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}allKeys(){var t;return this.ctx.caller.callAsync("api:call",{method:"list-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}clear(){var t;return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}hasItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}}class An{constructor(t){var e,n,r;r=void 0,(n="ctx")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.ctx=t;}get React(){return this.ensureHostScope().React}get ReactDOM(){return this.ensureHostScope().ReactDOM}get pluginLocal(){return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id)}invokeExperMethod(t,...e){var n,r;const o=this.ensureHostScope();return t=null===(n=Ve(t))||void 0===n?void 0:n.toLowerCase(),null===(r=o.logseq.api["exper_"+t])||void 0===r?void 0:r.apply(o,e)}async loadScripts(...t){(t=t.map((t=>null!=t&&t.startsWith("http")?t:this.ctx.resolveResourceFullUrl(t)))).unshift(this.ctx.baseInfo.id),await this.invokeExperMethod("loadScripts",...t);}registerFencedCodeRenderer(t,e){return this.ensureHostScope().logseq.api.exper_register_fenced_code_renderer(this.ctx.baseInfo.id,t,e)}registerExtensionsEnhancer(t,e){const n=this.ensureHostScope();if("katex"===t)n.katex&&e(n.katex).catch(console.error);return n.logseq.api.exper_register_extensions_enhancer(this.ctx.baseInfo.id,t,e)}ensureHostScope(){if(window===top)throw new Error("Can not access host scope!");return top}}function kn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const En=t=>`task_callback_${t}`;class Tn{constructor(t,e,n={}){kn(this,"_client",void 0),kn(this,"_requestId",void 0),kn(this,"_requestOptions",void 0),kn(this,"_promise",void 0),kn(this,"_aborted",!1),this._client=t,this._requestId=e,this._requestOptions=n,this._promise=new Promise(((t,e)=>{if(!this._requestId)return e(null);this._client.once(En(this._requestId),(n=>{n&&n instanceof Error?e(n):t(n);}));}));const{success:r,fail:o,final:i}=this._requestOptions;this._promise.then((t=>{null==r||r(t);})).catch((t=>{null==o||o(t);})).finally((()=>{null==i||i();}));}abort(){this._requestOptions.abortable&&!this._aborted&&(this._client.ctx._execCallableAPI("http_request_abort",this._requestId),this._aborted=!0);}get promise(){return this._promise}get client(){return this._client}get requestId(){return this._requestId}}class In extends We.EventEmitter{constructor(t){super(),kn(this,"_ctx",void 0),this._ctx=t,this.ctx.caller.on("#lsp#request#callback",(t=>{const e=null==t?void 0:t.requestId;e&&this.emit(En(e),null==t?void 0:t.payload);}));}static createRequestTask(t,e,n){return new Tn(t,e,n)}async _request(t){const e=this.ctx.baseInfo.id,{success:n,fail:r,final:o,...i}=t,s=this.ctx.Experiments.invokeExperMethod("request",e,i),a=In.createRequestTask(this.ctx.Request,s,t);return i.abortable?a:a.promise}get ctx(){return this._ctx}}const Fn=It(Object.keys,Object);var Ln=Object.prototype.hasOwnProperty;const Nn=function(t){if(!Nt(t))return Fn(t);var e=[];for(var n in Object(t))Ln.call(t,n)&&"constructor"!=n&&e.push(n);return e};const Mn=function(t){return qt(t)?_e(t):Nn(t)};const Pn=function(t,e){return t&&bt(t,e,Mn)};const Rn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};const Dn=function(t){return this.__data__.has(t)};function Un(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new pt;++e<n;)this.add(t[e]);}Un.prototype.add=Un.prototype.push=Rn,Un.prototype.has=Dn;const $n=Un;const zn=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return !0;return !1};const Hn=function(t,e){return t.has(e)};const Bn=function(t,e,n,r,o,i){var s=1&n,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return !1;var l=i.get(t),u=i.get(e);if(l&&u)return l==e&&u==t;var f=-1,p=!0,d=2&n?new $n:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var h=t[f],m=e[f];if(r)var g=s?r(m,h,f,e,t,i):r(h,m,f,t,e,i);if(void 0!==g){if(g)continue;p=!1;break}if(d){if(!zn(e,(function(t,e){if(!Hn(d,e)&&(h===t||o(h,t,n,r,i)))return d.push(e)}))){p=!1;break}}else if(h!==m&&!o(h,m,n,r,i)){p=!1;break}}return i.delete(t),i.delete(e),p};const qn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t];})),n};const Wn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t;})),n};var Gn=_?_.prototype:void 0,Jn=Gn?Gn.valueOf:void 0;const Zn=function(t,e,n,r,i,s,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return !1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return !(t.byteLength!=e.byteLength||!s(new St(t),new St(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=qn;case"[object Set]":var l=1&r;if(c||(c=Wn),t.size!=e.size&&!l)return !1;var u=a.get(t);if(u)return u==e;r|=2,a.set(t,e);var f=Bn(c(t),c(e),r,i,s,a);return a.delete(t),f;case"[object Symbol]":if(Jn)return Jn.call(t)==Jn.call(e)}return !1};const Vn=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};const Kn=function(t,e,n){var r=e(t);return Ht(t)?r:Vn(r,n(t))};const Yn=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s);}return i};const Qn=function(){return []};var Xn=Object.prototype.propertyIsEnumerable,tr=Object.getOwnPropertySymbols;const er=tr?function(t){return null==t?[]:(t=Object(t),Yn(tr(t),(function(e){return Xn.call(t,e)})))}:Qn;const nr=function(t){return Kn(t,Mn,er)};var rr=Object.prototype.hasOwnProperty;const or=function(t,e,n,r,o,i){var s=1&n,a=nr(t),c=a.length;if(c!=nr(e).length&&!s)return !1;for(var l=c;l--;){var u=a[l];if(!(s?u in e:rr.call(e,u)))return !1}var f=i.get(t),p=i.get(e);if(f&&p)return f==e&&p==t;var d=!0;i.set(t,e),i.set(e,t);for(var h=s;++l<c;){var m=t[u=a[l]],g=e[u];if(r)var v=s?r(g,m,u,e,t,i):r(m,g,u,t,e,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){d=!1;break}h||(h="constructor"==u);}if(d&&!h){var y=t.constructor,b=e.constructor;y==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(d=!1);}return i.delete(t),i.delete(e),d};const ir=G(b,"DataView");const sr=G(b,"Promise");const ar=G(b,"Set");const cr=G(b,"WeakMap");var lr="[object Map]",ur="[object Promise]",fr="[object Set]",pr="[object WeakMap]",dr="[object DataView]",hr=R(ir),mr=R(J),gr=R(sr),vr=R(ar),yr=R(cr),br=E;(ir&&br(new ir(new ArrayBuffer(1)))!=dr||J&&br(new J)!=lr||sr&&br(sr.resolve())!=ur||ar&&br(new ar)!=fr||cr&&br(new cr)!=pr)&&(br=function(t){var e=E(t),n="[object Object]"==e?t.constructor:void 0,r=n?R(n):"";if(r)switch(r){case hr:return dr;case mr:return lr;case gr:return ur;case vr:return fr;case yr:return pr}return e});const _r=br;var wr="[object Arguments]",xr="[object Array]",Cr="[object Object]",Or=Object.prototype.hasOwnProperty;const Sr=function(t,e,n,r,o,i){var s=Ht(t),a=Ht(e),c=s?xr:_r(t),l=a?xr:_r(e),u=(c=c==wr?Cr:c)==Cr,f=(l=l==wr?Cr:l)==Cr,p=c==l;if(p&&Kt(t)){if(!Kt(e))return !1;s=!0,u=!1;}if(p&&!u)return i||(i=new mt),s||fe(t)?Bn(t,e,n,r,o,i):Zn(t,e,c,n,r,o,i);if(!(1&n)){var d=u&&Or.call(t,"__wrapped__"),h=f&&Or.call(e,"__wrapped__");if(d||h){var m=d?t.value():t,g=h?e.value():e;return i||(i=new mt),o(m,g,n,r,i)}}return !!p&&(i||(i=new mt),or(t,e,n,r,o,i))};const jr=function t(e,n,r,o,i){return e===n||(null==e||null==n||!Pt(e)&&!Pt(n)?e!=e&&n!=n:Sr(e,n,r,o,t,i))};const Ar=function(t,e,n,r){var o=n.length,i=o,s=!r;if(null==t)return !i;for(t=Object(t);o--;){var a=n[o];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return !1}for(;++o<i;){var c=(a=n[o])[0],l=t[c],u=a[1];if(s&&a[2]){if(void 0===l&&!(c in t))return !1}else {var f=new mt;if(r)var p=r(l,u,c,t,e,f);if(!(void 0===p?jr(u,l,3,r,f):p))return !1}}return !0};const kr=function(t){return t==t&&!T(t)};const Er=function(t){for(var e=Mn(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,kr(o)];}return e};const Tr=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};const Ir=function(t){var e=Er(t);return 1==e.length&&e[0][2]?Tr(e[0][0],e[0][1]):function(n){return n===t||Ar(n,t,e)}};const Fr=function(t){return "symbol"==typeof t||Pt(t)&&"[object Symbol]"==E(t)};var Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;const Mr=function(t,e){if(Ht(t))return !1;var n=typeof t;return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fr(t))||(Nr.test(t)||!Lr.test(t)||null!=e&&t in Object(e))};function Pr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=t.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(Pr.Cache||pt),n}Pr.Cache=pt;const Rr=Pr;var Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g;const $r=function(t){var e=Rr(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dr,(function(t,n,r,o){e.push(r?o.replace(Ur,"$1"):n||t);})),e}));const zr=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var Hr=_?_.prototype:void 0,Br=Hr?Hr.toString:void 0;const qr=function t(e){if("string"==typeof e)return e;if(Ht(e))return zr(e,t)+"";if(Fr(e))return Br?Br.call(e):"";var n=e+"";return "0"==n&&1/e==-Infinity?"-0":n};const Wr=function(t){return null==t?"":qr(t)};const Gr=function(t,e){return Ht(t)?t:Mr(t,e)?[t]:$r(Wr(t))};const Jr=function(t){if("string"==typeof t||Fr(t))return t;var e=t+"";return "0"==e&&1/t==-Infinity?"-0":e};const Zr=function(t,e){for(var n=0,r=(e=Gr(e,t)).length;null!=t&&n<r;)t=t[Jr(e[n++])];return n&&n==r?t:void 0};const Vr=function(t,e,n){var r=null==t?void 0:Zr(t,e);return void 0===r?n:r};const Kr=function(t,e){return null!=t&&e in Object(t)};const Yr=function(t,e,n){for(var r=-1,o=(e=Gr(e,t)).length,i=!1;++r<o;){var s=Jr(e[r]);if(!(i=null!=t&&n(t,s)))break;t=t[s];}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Bt(o)&&ye(s,o)&&(Ht(t)||zt(t))};const Qr=function(t,e){return null!=t&&Yr(t,e,Kr)};const Xr=function(t,e){return Mr(t)&&kr(e)?Tr(Jr(t),e):function(n){var r=Vr(n,t);return void 0===r&&r===e?Qr(n,t):jr(e,r,3)}};const to=function(t){return function(e){return null==e?void 0:e[t]}};const eo=function(t){return function(e){return Zr(e,t)}};const no=function(t){return Mr(t)?to(Jr(t)):eo(t)};const ro=function(t){return "function"==typeof t?t:null==t?ke:"object"==typeof t?Ht(t)?Xr(t[0],t[1]):Ir(t):no(t)};const oo=function(t,e){var n={};return e=ro(e),Pn(t,(function(t,r,o){vt(n,e(t,r,o),t);})),n};function io(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class so{constructor(t,e){io(this,"ctx",void 0),io(this,"serviceHooks",void 0),this.ctx=t,this.serviceHooks=e,t._execCallableAPI("register-search-service",t.baseInfo.id,e.name,e.options);Object.entries({query:{f:"onQuery",args:["graph","q",!0],reply:!0,transformOutput:t=>(Ht(null==t?void 0:t.blocks)&&(t.blocks=t.blocks.map((t=>t&&oo(t,((t,e)=>`block/${e}`))))),t)},rebuildBlocksIndice:{f:"onIndiceInit",args:["graph","blocks"]},transactBlocks:{f:"onBlocksChanged",args:["graph","data"]},truncateBlocks:{f:"onIndiceReset",args:["graph"]},removeDb:{f:"onGraph",args:["graph"]}}).forEach((([n,r])=>{const o=(t=>`service:search:${t}:${e.name}`)(n);t.caller.on(o,(async n=>{if(I(null==e?void 0:e[r.f])){let i=null;try{i=await e[r.f].apply(e,(r.args||[]).map((t=>{if(n){if(!0===t)return n;if(n.hasOwnProperty(t)){const e=n[t];return delete n[t],e}}}))),r.transformOutput&&(i=r.transformOutput(i));}catch(t){console.error("[SearchService] ",t),i=t;}finally{r.reply&&t.caller.call(`${o}:reply`,i);}}}));}));}}function ao(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const co=Symbol.for("proxy-continue"),lo=nn()("LSPlugin:user"),uo=new Ye("",{console:!0});function fo(t,e,n){var r;if("function"!=typeof n)return !1;const{key:o,label:i,desc:s,palette:a,keybinding:c,extras:l}=e,u=`SimpleCommandHook${o}${++vo}`;this.Editor["on"+u](n),null===(r=this.caller)||void 0===r||r.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:o,label:i,type:t,desc:s,keybinding:c,extras:l},["editor/hook",u]],a]});}function po(t){return !("string"!=typeof(e=t)||36!==e.length||!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(e))||(uo.error(`#${t} is not a valid UUID string.`),!1);var e;}let ho=null,mo=new Map;const go={async getInfo(t){return ho||(ho=await this._execCallableAPIAsync("get-app-info")),"string"==typeof t?ho[t]:ho},registerCommand:fo,registerSearchService(t){if(mo.has(t.name))throw new Error(`SearchService: #${t.name} has registered!`);mo.set(t.name,new so(this,t));},registerCommandPalette(t,e){const{key:n,label:r,keybinding:o}=t;return fo.call(this,"$palette$",{key:n,label:r,palette:!0,keybinding:o},e)},registerCommandShortcut(t,e){const{binding:n}=t,r="$shortcut$",o=r+Ve(n);return fo.call(this,r,{key:o,palette:!1,keybinding:t},e)},registerUIItem(t,e){var n;const r=this.baseInfo.id;null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-ui-item",args:[r,t,e]});},registerPageMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id,r=t;fo.call(this,"page-menu-item",{key:n,label:r},e);},onBlockRendererSlotted(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:editor:${Ve(`slot:${t}`)}`;return this.caller.on(r,e),this.App._installPluginHook(n,r),()=>{this.caller.off(r,e),this.App._uninstallPluginHook(n,r);}},invokeExternalPlugin(t,...e){var n;if(!(t=null===(n=t)||void 0===n?void 0:n.trim()))return;let[r,o]=t.split(".");if(!["models","commands"].includes(null==o?void 0:o.toLowerCase()))throw new Error("Type only support '.models' or '.commands' currently.");const i=t.replace(`${r}.${o}.`,"");if(!r||!o||!i)throw new Error(`Illegal type of #${t} to invoke external plugin.`);return this._execCallableAPIAsync("invoke_external_plugin_cmd",r,o.toLowerCase(),i,e)},setFullScreen(t){const e=(...t)=>this._callWin("setFullScreen",...t);"toggle"===t?this._callWin("isFullScreen").then((t=>{t?e():e(!0);})):t?e(!0):e();}};let vo=0;const yo={newBlockUUID(){return this._execCallableAPIAsync("new_block_uuid")},registerSlashCommand(t,e){var n;lo("Register slash command #",this.baseInfo.id,t,e),"function"==typeof e&&(e=[["editor/clear-current-slash",!1],["editor/restore-saved-cursor"],["editor/hook",e]]),e=e.map((t=>{const[e,...n]=t;if("editor/hook"===e){let r=n[0],o=()=>{var t;null===(t=this.caller)||void 0===t||t.callUserModel(r);};"function"==typeof r&&(o=r);const i=`SlashCommandHook${e}${++vo}`;t[1]=i,this.Editor["on"+i](o);}return t})),null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[t,e]]});},registerBlockContextMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id;fo.call(this,"block-context-menu-item",{key:n,label:t},e);},registerHighlightContextMenuItem(t,e,n){if("function"!=typeof e)return !1;const r=t+"_"+this.baseInfo.id;fo.call(this,"highlight-context-menu-item",{key:r,label:t,extras:n},e);},scrollToBlockInPage(t,e,n){const r="block-content-"+e;null!=n&&n.replaceState?this.App.replaceState("page",{name:t},{anchor:r}):this.App.pushState("page",{name:t},{anchor:r});}},bo={onBlockChanged(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:db:${Ve(`block:${t}`)}`,o=({block:n,txData:r,txMeta:o})=>{n.uuid===t&&e(n,r,o);};return this.caller.on(r,o),this.App._installPluginHook(n,r),()=>{this.caller.off(r,o),this.App._uninstallPluginHook(n,r);}},datascriptQuery(t,...e){if(e.pop(),null!=e&&e.some((t=>"function"==typeof t))){return this.Experiments.ensureHostScope().logseq.api.datascript_query(t,...e)}return this._execCallableAPIAsync("datascript_query",t,...e)}},_o={},wo={},xo={makeSandboxStorage(){return new jn(this,{assets:!0})}};class Co extends(Ge()){constructor(t,e){super(),ao(this,"_baseInfo",void 0),ao(this,"_caller",void 0),ao(this,"_version","0.0.15"),ao(this,"_debugTag",""),ao(this,"_settingsSchema",void 0),ao(this,"_connected",!1),ao(this,"_ui",new Map),ao(this,"_mFileStorage",void 0),ao(this,"_mRequest",void 0),ao(this,"_mExperiments",void 0),ao(this,"_beforeunloadCallback",void 0),this._baseInfo=t,this._caller=e,e.on("sys:ui:visible",(t=>{null!=t&&t.toggle&&this.toggleMainUI();})),e.on("settings:changed",(t=>{const e=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,t);this.emit("settings:changed",{...n},e);})),e.on("beforeunload",(async t=>{const{actor:n,...r}=t,o=this._beforeunloadCallback;try{o&&await o(r),null==n||n.resolve(null);}catch(t){console.debug(`${e.debugTag} [beforeunload] `,t),null==n||n.reject(t);}}));}async ready(t,e){if(!this._connected)try{var n;"function"==typeof t&&(e=t,t={});let r=await this._caller.connectToParent(t);this._connected=!0,r=Ke(this._baseInfo,r),null!==(n=r)&&void 0!==n&&n.id&&(this._debugTag=this._caller.debugTag=`#${r.id} [${r.name}]`,this.logger.setTag(this._debugTag)),this._settingsSchema&&(r.settings=function(t,e){const n=(e||[]).reduce(((t,e)=>("default"in e&&(t[e.key]=e.default),t)),{});return Object.assign(n,t)}(r.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema));try{await this._execCallableAPIAsync("setSDKMetadata",{version:this._version});}catch(t){console.warn(t);}e&&e.call(this,r);}catch(t){console.error(`${this._debugTag} [Ready Error]`,t);}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(t){"function"==typeof t&&(this._beforeunloadCallback=t);}provideModel(t){return this.caller._extendUserModel(t),this}provideTheme(t){return this.caller.call("provider:theme",t),this}provideStyle(t){return this.caller.call("provider:style",t),this}provideUI(t){return this.caller.call("provider:ui",t),this}useSettingsSchema(t){return this.connected&&this.caller.call("settings:schema",{schema:t,isSync:!0}),this._settingsSchema=t,this}updateSettings(t){this.caller.call("settings:update",t);}onSettingsChanged(t){const e="settings:changed";return this.on(e,t),()=>this.off(e,t)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:!0});}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:!1});}setMainUIAttrs(t){this.caller.call("main-ui:attrs",t);}setMainUIInlineStyle(t){this.caller.call("main-ui:style",t);}hideMainUI(t){const e={key:0,visible:!1,cursor:null==t?void 0:t.restoreEditingCursor};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}showMainUI(t){const e={key:0,visible:!0,autoFocus:null==t?void 0:t.autoFocus};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}toggleMainUI(){const t=0,e=this._ui.get(t);e&&e.visible?this.hideMainUI():this.showMainUI();}get version(){return this._version}get isMainUIVisible(){const t=this._ui.get(0);return Boolean(t&&t.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get effect(){return (t=this)&&((null===(e=t.baseInfo)||void 0===e?void 0:e.effect)||!(null!==(n=t.baseInfo)&&void 0!==n&&n.iir));var t,e,n;}get logger(){return uo}get settings(){var t;return null===(t=this.baseInfo)||void 0===t?void 0:t.settings}get caller(){return this._caller}resolveResourceFullUrl(t){if(this.ensureConnected(),t)return t=t.replace(/^[.\\/]+/,""),Qe(this._baseInfo.lsr,t)}_makeUserProxy(t,e){const n=this,r=this.caller;return new Proxy(t,{get(t,o,i){const s=t[o];return function(...t){if(s){const r=s.apply(n,t.concat(e));if(r!==co)return r}if(e){const i=o.toString().match(/^(once|off|on)/i);if(null!=i){const o=i[0].toLowerCase(),s=i.input.slice(o.length),a="off"===o,c=n.baseInfo.id,l=`hook:${e}:${Ve(s)}`,u=t[0],f=t[1];r[o](l,u);const p=()=>{r.off(l,u),r.listenerCount(l)||n.App._uninstallPluginHook(c,l);};return a?void p():(n.App._installPluginHook(c,l,f),p)}}let i=o;return ["git","ui","assets"].includes(e)&&(i=e+"_"+i),r.callAsync("api:call",{tag:e,method:i,args:t})}}})}_execCallableAPIAsync(t,...e){return this._caller.callAsync("api:call",{method:t,args:e})}_execCallableAPI(t,...e){this._caller.call("api:call",{method:t,args:e});}_callWin(...t){return this._execCallableAPIAsync("_callMainWin",...t)}get App(){return this._makeUserProxy(go,"app")}get Editor(){return this._makeUserProxy(yo,"editor")}get DB(){return this._makeUserProxy(bo,"db")}get Git(){return this._makeUserProxy(_o,"git")}get UI(){return this._makeUserProxy(wo,"ui")}get Assets(){return this._makeUserProxy(xo,"assets")}get FileStorage(){let t=this._mFileStorage;return t||(t=this._mFileStorage=new jn(this)),t}get Request(){let t=this._mRequest;return t||(t=this._mRequest=new In(this)),t}get Experiments(){let t=this._mExperiments;return t||(t=this._mExperiments=new An(this)),t}}function Oo(t,e){return new Co(t,e)}if(null==window.__LSP__HOST__){const t=new On(null);window.logseq=Oo({},t);}})(),r})()));

const DEFAULT_LOCALE = "en";
let locale = DEFAULT_LOCALE;
let translations = {};
async function setup({ defaultLocale = DEFAULT_LOCALE, builtinTranslations, }) {
    locale = (await logseq.App.getUserConfigs()).preferredLanguage;
    if (locale === defaultLocale)
        return;
    if (builtinTranslations?.[locale] != null) {
        translations = builtinTranslations;
    }
}
function t(key, args) {
    const template = translations[locale]?.[key] ?? key;
    if (args == null)
        return template;
    return Object.entries(args).reduce((str, [name, val]) => str.replaceAll(`\${${name}}`, val), template);
}

const _isArray = Array.isArray;

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function debounce(func, ms, immediate = false) {
  let timeout;
  return function (...input) {
    const later = function () {
      timeout = null;

      if (!immediate) {
        return func.apply(null, input);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      return func.apply(null, input);
    }
  };
}

function throttle(fn, ms) {
  let wait = false;
  let result;
  return function (...input) {
    if (!wait) {
      result = fn.apply(null, input);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, ms);
    }

    return result;
  };
}

function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError('reduce: list must be array or iterable');
  }

  let index = 0;
  const len = list.length;

  while (index < len) {
    acc = reducer(acc, list[index], index, list);
    index++;
  }

  return acc;
}

const reduce = curry(reduceFn);

function multiply(x, y) {
  if (arguments.length === 1) return _y => multiply(x, _y);
  return x * y;
}

reduce(multiply, 1);

function ToolbarItem({ key , label , icon , action  }) {
    return /*#__PURE__*/ e("div", {
        class: "kef-wrap-tb-item",
        onMouseDown: (e)=>action(e, key),
        title: label,
        children: /*#__PURE__*/ e("img", {
            src: `data:image/svg+xml;utf8,${encodeURIComponent(icon)}`,
            alt: label
        })
    }, key);
}

function Toolbar({ items , model  }) {
    function triggerAction(e, key) {
        e.preventDefault();
        e.stopPropagation();
        if (e.button !== 0) return;
        model[key]();
    }
    return items.map((item)=>{
        if (item.key.startsWith("group-")) {
            const groupItems = item.items?.filter((subitem)=>subitem.icon) ?? [];
            if (groupItems.length <= 0) return null;
            return /*#__PURE__*/ e("div", {
                class: "kef-wrap-tb-list",
                children: [
                    /*#__PURE__*/ e(ToolbarItem, {
                        ...groupItems[0],
                        action: triggerAction
                    }),
                    groupItems.length > 1 && /*#__PURE__*/ e("div", {
                        class: "kef-wrap-tb-itemlist",
                        children: groupItems.map((subitem, i)=>{
                            if (i === 0) return null;
                            return /*#__PURE__*/ e(ToolbarItem, {
                                ...subitem,
                                action: triggerAction
                            });
                        })
                    })
                ]
            });
        } else if (item.icon) {
            return /*#__PURE__*/ e(ToolbarItem, {
                ...item,
                action: triggerAction
            });
        }
        return null;
    });
}

var Link = "超链接";
var Annotate = "标注";
var Caption = "说明";
var Bold = "粗体";
var Italic = "斜体";
var Highlight = "高亮";
var zhCN = {
	"Page ref": "页面引用",
	Link: Link,
	Annotate: Annotate,
	"Inline code": "行内代码",
	Caption: Caption,
	Bold: Bold,
	Italic: Italic,
	"Strike through": "划线",
	"Math expression": "数学表达式",
	Highlight: Highlight,
	"Red highlight": "红色高亮",
	"Green highlight": "绿色高亮",
	"Blue highlight": "蓝色高亮",
	"Red text": "红色文字",
	"Green text": "绿色文字",
	"Blue text": "蓝色文字",
	"Red underline": "红色下划线",
	"Green underline": "绿色下划线",
	"Blue underline": "蓝色下划线",
	"Hidden text": "隐藏文字",
	"Remove formatting": "去除格式化",
	"This command can only be used when editing text": "该命令仅在编辑文字时可使用",
	"Toggle toolbar display": "切换工具条显示"
};

const TOOLBAR_ID = "kef-wrap-toolbar";
let toolbar;
let textarea;
async function main() {
    // Reset values.
    toolbar = null;
    textarea = null;
    await setup({
        builtinTranslations: {
            "zh-CN": zhCN
        }
    });
    const definitions = await getDefinitions();
    provideStyles();
    const model = {};
    for (const definition of definitions){
        if (definition.key.startsWith("group-")) {
            for (const def of definition.items){
                registerModel(model, def);
            }
        } else {
            registerModel(model, definition);
        }
    }
    logseq.provideModel(model);
    if (logseq.settings?.toolbar ?? true) {
        logseq.provideUI({
            key: TOOLBAR_ID,
            path: "#app-container",
            template: `<div id="${TOOLBAR_ID}"></div>`
        });
        if (logseq.settings?.toolbarShortcut) {
            logseq.App.registerCommandPalette({
                key: "toggle-toolbar",
                label: t("Toggle toolbar display"),
                keybinding: {
                    binding: logseq.settings?.toolbarShortcut
                }
            }, toggleToolbarDisplay);
        } else {
            logseq.App.registerCommandPalette({
                key: "toggle-toolbar",
                label: t("Toggle toolbar display")
            }, toggleToolbarDisplay);
        }
        // Let div root element get generated first.
        setTimeout(async ()=>{
            toolbar = parent.document.getElementById(TOOLBAR_ID);
            S(/*#__PURE__*/ e(Toolbar, {
                items: definitions,
                model: model
            }), toolbar);
            toolbar.addEventListener("transitionend", onToolbarTransitionEnd);
            parent.document.addEventListener("focusout", onBlur);
            const mainContentContainer = parent.document.getElementById("main-content-container");
            mainContentContainer.addEventListener("scroll", onScroll, {
                passive: true
            });
        }, 0);
    }
    parent.document.addEventListener("selectionchange", onSelectionChange);
    logseq.beforeunload(async ()=>{
        if (textarea) {
            textarea.removeEventListener("keydown", deletionWorkaroundHandler);
        }
        const mainContentContainer = parent.document.getElementById("main-content-container");
        mainContentContainer.removeEventListener("scroll", onScroll, {
            passive: true
        });
        toolbar?.removeEventListener("transitionend", onToolbarTransitionEnd);
        parent.document.removeEventListener("focusout", onBlur);
        parent.document.removeEventListener("selectionchange", onSelectionChange);
    });
    for (const definition1 of definitions){
        if (definition1.key.startsWith("group-")) {
            for (const def of definition1.items){
                registerCommand(model, def);
            }
        } else {
            registerCommand(model, definition1);
        }
    }
    console.log("#wrap loaded");
}
function provideStyles() {
    logseq.provideStyle(`
    :root {
      --kef-wrap-tb-bg: #333e;
    }
    :root.dark {
      --kef-wrap-tb-bg: #777e;
    }
    #kef-wrap-toolbar {
      position: absolute;
      top: 0;
      left: -99999px;
      z-index: var(--ls-z-index-level-2);
      opacity: 0;
      will-change: opacity;
      transition: opacity 100ms ease-in-out;
      background: var(--kef-wrap-tb-bg);
      border-radius: 6px;
      color: #fff;
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 10px;
    }
    .kef-wrap-tb-list {
      position: relative;
    }
    .kef-wrap-tb-list:hover .kef-wrap-tb-itemlist {
      transform: scaleY(1);
    }
    .kef-wrap-tb-itemlist {
      position: absolute;
      top: 100%;
      left: 0;
      background: var(--kef-wrap-tb-bg);
      border-radius: 0 0 6px 6px;
      transform: scaleY(0);
      transform-origin: top center;
      will-change: transform;
      transition: transform 100ms ease-in-out;
    }
    .kef-wrap-tb-item {
      width: 28px;
      line-height: 20px;
      height: 30px;
      overflow: hidden;
      text-align: center;
      padding: 5px 4px;
      margin: 0;
      cursor: pointer;
    }
    .kef-wrap-tb-item:hover {
      filter: drop-shadow(0 0 3px #fff);
    }
    .kef-wrap-tb-item img {
      width: 20px;
      height: 20px;
      vertical-align: initial;
    }
    .kef-wrap-hidden #kef-wrap-toolbar {
      display: none;
    }

    mark {
      background: #fef3ac !important;
      color: #262626 !important;
    }
    span[data-ref="#red"],
    span[data-ref="#green"],
    span[data-ref="#blue"],
    span[data-ref="$red"],
    span[data-ref="$green"],
    span[data-ref="$blue"],
    span[data-ref="_red"],
    span[data-ref="_green"],
    span[data-ref="_blue"],
    span[data-ref="#cloze"],
    span[data-ref="#caption"] {
      display: none;
    }
    span[data-ref="#red"] + mark {
      background: #ffc7c7 !important;
      color: #262626 !important;
    }
    span[data-ref="#green"] + mark {
      background: #ccffc1 !important;
      color: #262626 !important;
    }
    span[data-ref="#blue"] + mark {
      background: #abdfff !important;
      color: #262626 !important;
    }
    span:is([data-ref="_red"], [data-ref="_green"], [data-ref="_blue"]) + mark > code {
      background-color: var(--ls-page-inline-code-bg-color,#eee) !important;
      color: var(--ls-page-inline-code-color) !important;
    }
    span[data-ref="_red"] + mark {
      text-decoration: underline 2px solid #e20f0f !important;
      text-underline-position: under !important;
      text-underline-offset: 2px;
      padding: 0;
      border-radius: 0;
      background: unset !important;
      color: unset !important;
    }
    span[data-ref="_green"] + mark {
      text-decoration: underline 2px solid #1ac407 !important;
      text-underline-position: under !important;
      text-underline-offset: 2px;
      padding: 0;
      border-radius: 0;
      background: unset !important;
      color: unset !important;
    }
    span[data-ref="_blue"] + mark {
      text-decoration: underline 2px solid #0764c4 !important;
      text-underline-position: under !important;
      text-underline-offset: 2px;
      padding: 0;
      border-radius: 0;
      background: unset !important;
      color: unset !important;
    }
    span[data-ref="$red"] + mark {
      color: #e20f0f !important;
      background: unset !important;
      padding: 0;
      border-radius: 0;
    }
    span[data-ref="$green"] + mark {
      color: #1ac21a !important;
      background: unset !important;
      padding: 0;
      border-radius: 0;
    }
    span[data-ref="$blue"] + mark {
      color: #104de0 !important;
      background: unset !important;
      padding: 0;
      border-radius: 0;
    }
    span[data-ref="#cloze"] + mark {
      color: transparent !important;
      background: unset !important;
      text-decoration: underline 1px dashed var(--ls-primary-text-color) !important;
      text-underline-position: under !important;
    }
    span[data-ref="#cloze"] + mark:hover {
      color: var(--ls-primary-text-color) !important;
      background: unset !important;
    }
    span[data-ref="#caption"] + mark {
      background: unset !important;
      font-size: 0.875em;
      font-style: italic;
      display: inline-block;
      width: 100%;
      text-align: center;
    }

    .block-content-inner:has(+ .block-body [data-ref="#caption"] + mark) > .flex-1 {
      text-align: center;
    }
  `);
}
async function getDefinitions() {
    const ret = Object.entries(logseq.settings ?? {}).filter(([k, v])=>k.startsWith("wrap-") || k.startsWith("repl-") || k.startsWith("group-")).map(([k, v])=>{
        if (k.startsWith("group-")) {
            return {
                key: k,
                items: Object.entries(v).map(([kk, vv])=>({
                        key: kk,
                        ...vv
                    }))
            };
        } else {
            return {
                key: k,
                ...v
            };
        }
    });
    if (ret.length > 0) return ret;
    await logseq.App.getUserConfigs();
    return [
        {
            key: "group-ref",
            items: [
                {
                    key: "wrap-pageref",
                    label: t("Page ref"),
                    binding: "",
                    template: "[[$^]]",
                    icon: '<svg t="1648603043979" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3931" width="200" height="200"><path d="M431.488 205.824c20.48 0 37.12-17.408 37.12-38.912A38.08 38.08 0 0 0 431.552 128H357.12C336.64 128 320 145.408 320 166.912v635.328c0 21.504 16.64 38.912 37.12 38.912h74.368c20.48 0 37.12-17.408 37.12-38.912a38.08 38.08 0 0 0-37.12-38.912h-37.12V205.824h37.12zM687.488 205.824c20.48 0 37.12-17.408 37.12-38.912a38.08 38.08 0 0 0-37.12-38.912H613.12C592.64 128 576 145.408 576 166.912v635.328c0 21.504 16.64 38.912 37.12 38.912h74.368c20.48 0 37.12-17.408 37.12-38.912a38.08 38.08 0 0 0-37.12-38.912h-37.12V205.824h37.12z" fill="#eee" p-id="3932"></path></svg>'
                },
                {
                    key: "wrap-link",
                    label: t("Link"),
                    binding: "",
                    template: "[$^]()",
                    icon: '<svg t="1682390611487" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2024" width="200" height="200"><path d="M574 665.4c-3.1-3.1-8.2-3.1-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8c-3.1-3.1-8.2-3.1-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zM832.6 191.4c-84.6-84.6-221.5-84.6-306 0L410.3 307.6c-3.1 3.1-3.1 8.2 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6c-3.1 3.1-3.1 8.2 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1z" p-id="2025" fill="#eeeeee"></path><path d="M610.1 372.3c-3.1-3.1-8.2-3.1-11.3 0L372.3 598.7c-3.1 3.1-3.1 8.2 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" p-id="2026" fill="#eeeeee"></path></svg>'
                },
                {
                    key: "wrap-annotate",
                    label: t("Annotate"),
                    binding: "",
                    pluginCommand: "logseq-long-form.models.createMetaBlock",
                    template: "[$^]((($%)))",
                    icon: '<svg t="1694574701157" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3113" width="200" height="200"><path d="M511.973 144.799c-234.814 0-425.17 164.414-425.17 367.23 0 74.25 25.543 143.344 69.438 201.172 17.047 22.426-48.256 151.219-48.256 151.219s158.129-51.371 187.127-36.477c63.49 32.566 137.627 51.258 216.861 51.258 234.869 0 425.225-164.414 425.225-367.172C937.197 309.213 746.842 144.799 511.973 144.799zM301.738 562.775c-28.035 0-50.746-22.711-50.746-50.746s22.711-50.746 50.746-50.746 50.746 22.711 50.746 50.746S329.773 562.775 301.738 562.775zM511.973 562.775c-28.035 0-50.746-22.711-50.746-50.746s22.711-50.746 50.746-50.746c28.033 0 50.746 22.711 50.746 50.746S540.006 562.775 511.973 562.775zM722.205 562.775c-28.035 0-50.746-22.711-50.746-50.746s22.711-50.746 50.746-50.746 50.746 22.711 50.746 50.746S750.24 562.775 722.205 562.775z" p-id="3114" fill="#eeeeee"></path></svg>'
                }, 
            ]
        },
        {
            key: "group-semantic",
            items: [
                {
                    key: "wrap-code",
                    label: t("Inline code"),
                    binding: "",
                    template: "`$^`",
                    icon: '<svg xmlns="http://www.w3.org/2000/svg"><text stroke="#000" stroke-width="0" x="6" y="22" font-size="24" font-family="Noto Sans JP" xml:space="preserve" fill="#eee">`</text></svg>'
                },
                {
                    key: "wrap-caption",
                    label: t("Caption"),
                    binding: "",
                    template: "[[#caption]]==$^==",
                    icon: '<svg t="1690249238216" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4930" width="200" height="200"><path d="M128 213.333333v597.333334h768V213.333333H128zM42.666667 213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h768a85.333333 85.333333 0 0 1 85.333333 85.333333v597.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H128a85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333z m170.666666 469.333334a42.666667 42.666667 0 0 0 0 85.333333h597.333334a42.666667 42.666667 0 0 0 0-85.333333H213.333333z" p-id="4931" fill="#eee"></path></svg>'
                }, 
            ]
        },
        {
            key: "group-style",
            items: [
                {
                    key: "wrap-bold",
                    label: t("Bold"),
                    binding: "",
                    template: "**$^**",
                    icon: '<svg t="1644033307902" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1224" width="200" height="200"><path d="M697.8 481.4c33.6-35 54.2-82.3 54.2-134.3v-10.2C752 229.3 663.9 142 555.3 142H259.4c-15.1 0-27.4 12.3-27.4 27.4v679.1c0 16.3 13.2 29.5 29.5 29.5h318.7c117 0 211.8-94.2 211.8-210.5v-11c0-73-37.4-137.3-94.2-175.1zM328 238h224.7c57.1 0 103.3 44.4 103.3 99.3v9.5c0 54.8-46.3 99.3-103.3 99.3H328V238z m366.6 429.4c0 62.9-51.7 113.9-115.5 113.9H328V542.7h251.1c63.8 0 115.5 51 115.5 113.9v10.8z" p-id="1225" fill="#eee"></path></svg>'
                },
                {
                    key: "wrap-italic",
                    label: t("Italic"),
                    binding: "",
                    template: "*$^*",
                    icon: '<svg t="1644033462513" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2021" width="200" height="200"><path d="M382.72 810.666667L542.72 213.333333H426.666667a42.666667 42.666667 0 1 1 0-85.333333h341.333333a42.666667 42.666667 0 0 1 0 85.333333h-136.874667L471.04 810.666667H597.333333a42.666667 42.666667 0 0 1 0 85.333333H256a42.666667 42.666667 0 0 1 0-85.333333h126.72z" fill="#eee" p-id="2022"></path></svg>'
                },
                {
                    key: "wrap-strike-through",
                    label: t("Strike through"),
                    binding: "",
                    template: "~~$^~~",
                    icon: '<svg t="1647222242775" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1518" width="200" height="200"><path d="M1014.869333 468.650667H578.161778c-11.406222-2.275556-23.409778-4.579556-36.124445-6.855111a2110.094222 2110.094222 0 0 1-35.185777-6.627556c-58.624-11.434667-93.923556-22.869333-122.026667-39.111111-40.135111-23.409778-59.676444-55.182222-59.676445-97.251556 0-42.268444 17.351111-77.368889 50.289778-101.717333 32.426667-23.978667 78.620444-36.693333 133.489778-36.693333 62.606222 0 110.933333 16.497778 143.758222 48.924444a144.839111 144.839111 0 0 1 36.352 60.131556c1.479111 4.664889 3.185778 11.406222 4.892445 20.337777 1.052444 5.489778 5.973333 9.386667 11.320889 9.386667h83.2a11.576889 11.576889 0 0 0 11.548444-11.576889v-1.137778a268.629333 268.629333 0 0 0-2.275556-18.289777C789.333333 238.478222 765.724444 194.844444 729.486222 162.133333c-50.744889-46.307556-125.383111-70.627556-215.665778-70.627555-82.631111 0-157.013333 20.679111-209.464888 58.168889-29.269333 21.048889-51.911111 47.075556-66.986667 77.368889-15.416889 30.976-23.210667 66.730667-23.210667 106.154666 0 33.735111 6.542222 62.293333 19.797334 87.438222 9.472 17.92 22.385778 33.706667 38.968888 48.014223H9.102222a9.159111 9.159111 0 0 0-9.130666 9.130666v68.551111c0 5.034667 4.124444 9.159111 9.130666 9.159112h495.104l6.741334 1.365333c35.299556 7.111111 56.576 11.889778 76.117333 17.379555 26.282667 7.424 46.392889 15.217778 63.089778 24.576 40.903111 23.096889 60.899556 56.234667 60.899555 101.717334 0 40.334222-17.720889 76.344889-49.834666 101.489778-34.844444 27.306667-86.385778 41.585778-149.134223 41.585777-49.948444 0-92.216889-9.699556-125.952-28.558222-33.251556-18.631111-56.092444-45.511111-68.209777-79.445333a122.965333 122.965333 0 0 1-3.100445-10.268445 11.690667 11.690667 0 0 0-11.093333-8.590222H212.707556a11.576889 11.576889 0 0 0-11.548445 11.548445v1.137777c0.227556 2.645333 0.483556 4.835556 0.711111 6.542223 7.395556 55.751111 34.616889 101.461333 80.782222 135.765333 53.845333 39.765333 129.592889 60.785778 219.192889 60.785778 96.227556 0 176.924444-22.613333 233.386667-65.479111a215.893333 215.893333 0 0 0 65.251556-78.876445c14.848-30.947556 22.528-66.161778 22.528-104.561778 0-36.323556-6.627556-66.730667-20.366223-93.013333a157.184 157.184 0 0 0-24.888889-35.214222h237.141334a9.159111 9.159111 0 0 0 9.130666-9.130667v-68.579555a9.159111 9.159111 0 0 0-9.130666-9.016889z" p-id="1519" fill="#eee"></path></svg>'
                },
                {
                    key: "wrap-math",
                    label: t("Math expression"),
                    binding: "",
                    template: "$$^$",
                    icon: '<svg t="1671082671586" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3424" width="200" height="200"><path d="M725.333333 853.333333H256c-17.066667 0-29.866667-8.533333-38.4-25.6-8.533333-17.066667-4.266667-34.133333 4.266667-46.933333l230.4-268.8-230.4-268.8c-8.533333-12.8-12.8-34.133333-4.266667-46.933333 8.533333-17.066667 21.333333-25.6 38.4-25.6h469.333333c46.933333 0 85.333333 38.4 85.333334 85.333333v85.333333c0 25.6-17.066667 42.666667-42.666667 42.666667s-42.666667-17.066667-42.666667-42.666667V256H349.866667l196.266666 226.133333c12.8 17.066667 12.8 38.4 0 55.466667L349.866667 768H725.333333v-85.333333c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v85.333333c0 46.933333-38.4 85.333333-85.333334 85.333333z" p-id="3425" fill="#eee"></path></svg>'
                }, 
            ]
        },
        {
            key: "group-hl",
            items: [
                {
                    key: "wrap-yellow-hl",
                    label: t("Highlight"),
                    binding: "",
                    template: "==$^==",
                    icon: '<svg t="1643262039637" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6950" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M114.727313 1024l0.305421-0.427589h-0.977347l0.671926 0.427589zM632.721199 809.365446c-156.680934 0-272.466006 41.644143-341.659116 75.927642L290.878831 972.108985C340.402833 942.605324 458.249497 885.720677 632.73647 885.720677H962.804862v-76.355231H632.73647z m-109.432317-72.018253l252.048617-528.378197a38.177615 38.177615 0 0 0-13.621773-48.790993L551.295981 24.464216a38.192886 38.192886 0 0 0-50.089031 7.696607L130.349594 483.908911a38.208157 38.208157 0 0 0-7.024682 35.886958c31.763776 100.315502 36.436716 182.626441 34.695817 234.777064L94.477906 870.449631h132.094549l32.221908-42.606219c49.78361-25.624815 134.15614-60.931474 233.326314-69.177839a38.147073 38.147073 0 0 0 31.152934-21.31838z m-59.343285-52.54767c-71.66702 8.505973-134.950235 28.572127-184.489509 49.157497l-45.339736-29.244053c-2.290657-50.883126-10.613377-114.716099-31.901215-187.849139l336.161539-409.874879 153.474014 98.986922-193.728492 408.653195-176.838714-112.746134-47.935814 60.015211 191.117142 121.847678-0.519215 1.053702z" p-id="6951" fill="#ffe79a"></path></svg>'
                },
                {
                    key: "wrap-red-hl",
                    label: t("Red highlight"),
                    binding: "",
                    template: "[[#red]]==$^==",
                    icon: '<svg t="1643262039637" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6950" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M114.727313 1024l0.305421-0.427589h-0.977347l0.671926 0.427589zM632.721199 809.365446c-156.680934 0-272.466006 41.644143-341.659116 75.927642L290.878831 972.108985C340.402833 942.605324 458.249497 885.720677 632.73647 885.720677H962.804862v-76.355231H632.73647z m-109.432317-72.018253l252.048617-528.378197a38.177615 38.177615 0 0 0-13.621773-48.790993L551.295981 24.464216a38.192886 38.192886 0 0 0-50.089031 7.696607L130.349594 483.908911a38.208157 38.208157 0 0 0-7.024682 35.886958c31.763776 100.315502 36.436716 182.626441 34.695817 234.777064L94.477906 870.449631h132.094549l32.221908-42.606219c49.78361-25.624815 134.15614-60.931474 233.326314-69.177839a38.147073 38.147073 0 0 0 31.152934-21.31838z m-59.343285-52.54767c-71.66702 8.505973-134.950235 28.572127-184.489509 49.157497l-45.339736-29.244053c-2.290657-50.883126-10.613377-114.716099-31.901215-187.849139l336.161539-409.874879 153.474014 98.986922-193.728492 408.653195-176.838714-112.746134-47.935814 60.015211 191.117142 121.847678-0.519215 1.053702z" p-id="6951" fill="#ffc7c7"></path></svg>'
                },
                {
                    key: "wrap-green-hl",
                    label: t("Green highlight"),
                    binding: "",
                    template: "[[#green]]==$^==",
                    icon: '<svg t="1643262039637" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6950" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M114.727313 1024l0.305421-0.427589h-0.977347l0.671926 0.427589zM632.721199 809.365446c-156.680934 0-272.466006 41.644143-341.659116 75.927642L290.878831 972.108985C340.402833 942.605324 458.249497 885.720677 632.73647 885.720677H962.804862v-76.355231H632.73647z m-109.432317-72.018253l252.048617-528.378197a38.177615 38.177615 0 0 0-13.621773-48.790993L551.295981 24.464216a38.192886 38.192886 0 0 0-50.089031 7.696607L130.349594 483.908911a38.208157 38.208157 0 0 0-7.024682 35.886958c31.763776 100.315502 36.436716 182.626441 34.695817 234.777064L94.477906 870.449631h132.094549l32.221908-42.606219c49.78361-25.624815 134.15614-60.931474 233.326314-69.177839a38.147073 38.147073 0 0 0 31.152934-21.31838z m-59.343285-52.54767c-71.66702 8.505973-134.950235 28.572127-184.489509 49.157497l-45.339736-29.244053c-2.290657-50.883126-10.613377-114.716099-31.901215-187.849139l336.161539-409.874879 153.474014 98.986922-193.728492 408.653195-176.838714-112.746134-47.935814 60.015211 191.117142 121.847678-0.519215 1.053702z" p-id="6951" fill="#ccffc1"></path></svg>'
                },
                {
                    key: "wrap-blue-hl",
                    label: t("Blue highlight"),
                    binding: "",
                    template: "[[#blue]]==$^==",
                    icon: '<svg t="1643262039637" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6950" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M114.727313 1024l0.305421-0.427589h-0.977347l0.671926 0.427589zM632.721199 809.365446c-156.680934 0-272.466006 41.644143-341.659116 75.927642L290.878831 972.108985C340.402833 942.605324 458.249497 885.720677 632.73647 885.720677H962.804862v-76.355231H632.73647z m-109.432317-72.018253l252.048617-528.378197a38.177615 38.177615 0 0 0-13.621773-48.790993L551.295981 24.464216a38.192886 38.192886 0 0 0-50.089031 7.696607L130.349594 483.908911a38.208157 38.208157 0 0 0-7.024682 35.886958c31.763776 100.315502 36.436716 182.626441 34.695817 234.777064L94.477906 870.449631h132.094549l32.221908-42.606219c49.78361-25.624815 134.15614-60.931474 233.326314-69.177839a38.147073 38.147073 0 0 0 31.152934-21.31838z m-59.343285-52.54767c-71.66702 8.505973-134.950235 28.572127-184.489509 49.157497l-45.339736-29.244053c-2.290657-50.883126-10.613377-114.716099-31.901215-187.849139l336.161539-409.874879 153.474014 98.986922-193.728492 408.653195-176.838714-112.746134-47.935814 60.015211 191.117142 121.847678-0.519215 1.053702z" p-id="6951" fill="#abdfff"></path></svg>'
                }, 
            ]
        },
        {
            key: "group-underline",
            items: [
                {
                    key: "wrap-red-underline",
                    label: t("Red underline"),
                    binding: "",
                    template: "[[_red]]==$^==",
                    icon: '<svg t="1702279166670" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4768" width="200" height="200"><path d="M341.333333 128v384a170.666667 170.666667 0 1 0 341.333334 0V128h85.333333v384a256 256 0 1 1-512 0V128h85.333333zM170.666667 853.333333h682.666666v85.333334H170.666667v-85.333334z" p-id="4769" fill="#f00"></path></svg>'
                },
                {
                    key: "wrap-green-underline",
                    label: t("Green underline"),
                    binding: "",
                    template: "[[_green]]==$^==",
                    icon: '<svg t="1702279166670" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4768" width="200" height="200"><path d="M341.333333 128v384a170.666667 170.666667 0 1 0 341.333334 0V128h85.333333v384a256 256 0 1 1-512 0V128h85.333333zM170.666667 853.333333h682.666666v85.333334H170.666667v-85.333334z" p-id="4769" fill="#0f0"></path></svg>'
                },
                {
                    key: "wrap-blue-underline",
                    label: t("Blue underline"),
                    binding: "",
                    template: "[[_blue]]==$^==",
                    icon: '<svg t="1702279166670" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4768" width="200" height="200"><path d="M341.333333 128v384a170.666667 170.666667 0 1 0 341.333334 0V128h85.333333v384a256 256 0 1 1-512 0V128h85.333333zM170.666667 853.333333h682.666666v85.333334H170.666667v-85.333334z" p-id="4769" fill="#00beff"></path></svg>'
                }, 
            ]
        },
        {
            key: "group-text",
            items: [
                {
                    key: "wrap-red-text",
                    label: t("Red text"),
                    binding: "",
                    template: "[[$red]]==$^==",
                    icon: '<svg t="1643270432116" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12761" width="200" height="200"><path d="M256 768h512a85.333333 85.333333 0 0 1 85.333333 85.333333v42.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-42.666667a85.333333 85.333333 0 0 1 85.333333-85.333333z m0 85.333333v42.666667h512v-42.666667H256z m401.578667-341.333333H366.421333L298.666667 682.666667H213.333333l256.128-640H554.666667l256 640h-85.333334l-67.754666-170.666667z m-33.877334-85.333333L512 145.365333 400.298667 426.666667h223.402666z" p-id="12762" fill="#f00"></path></svg>'
                },
                {
                    key: "wrap-green-text",
                    label: t("Green text"),
                    binding: "",
                    template: "[[$green]]==$^==",
                    icon: '<svg t="1643270432116" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12761" width="200" height="200"><path d="M256 768h512a85.333333 85.333333 0 0 1 85.333333 85.333333v42.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-42.666667a85.333333 85.333333 0 0 1 85.333333-85.333333z m0 85.333333v42.666667h512v-42.666667H256z m401.578667-341.333333H366.421333L298.666667 682.666667H213.333333l256.128-640H554.666667l256 640h-85.333334l-67.754666-170.666667z m-33.877334-85.333333L512 145.365333 400.298667 426.666667h223.402666z" p-id="12762" fill="#0f0"></path></svg>'
                },
                {
                    key: "wrap-blue-text",
                    label: t("Blue text"),
                    binding: "",
                    template: "[[$blue]]==$^==",
                    icon: '<svg t="1643270432116" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12761" width="200" height="200"><path d="M256 768h512a85.333333 85.333333 0 0 1 85.333333 85.333333v42.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-42.666667a85.333333 85.333333 0 0 1 85.333333-85.333333z m0 85.333333v42.666667h512v-42.666667H256z m401.578667-341.333333H366.421333L298.666667 682.666667H213.333333l256.128-640H554.666667l256 640h-85.333334l-67.754666-170.666667z m-33.877334-85.333333L512 145.365333 400.298667 426.666667h223.402666z" p-id="12762" fill="#00beff"></path></svg>'
                }, 
            ]
        },
        {
            key: "group-cloze",
            items: [
                {
                    key: "wrap-cloze",
                    label: "Cloze",
                    binding: "",
                    template: " {{cloze $^}}",
                    icon: '<svg t="1643261888324" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5478" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M341.333333 396.8V320H170.666667v384h170.666666v-76.8H256V396.8zM682.666667 396.8V320h170.666666v384h-170.666666v-76.8h85.333333V396.8zM535.04 533.333333h40.96v-42.666666h-40.96V203.093333l92.16-24.746666-11.093333-40.96-102.4 27.306666-102.4-27.306666-11.093334 40.96 92.16 24.746666v287.573334H448v42.666666h44.373333v287.573334l-92.16 24.746666 11.093334 40.96 102.4-27.306666 102.4 27.306666 11.093333-40.96-92.16-24.746666z" p-id="5479" fill="#eeeeee"></path></svg>'
                },
                {
                    key: "wrap-cloze2",
                    label: t("Hidden text"),
                    binding: "",
                    template: "[[#cloze]]==$^==",
                    icon: '<svg t="1682306531661" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1454" width="200" height="200"><path d="M917.333333 573.866667l-87.466666-87.466667c34.133333-32 66.133333-68.266667 91.733333-108.8 8.533333-14.933333 4.266667-34.133333-10.666667-44.8-14.933333-8.533333-34.133333-4.266667-44.8 10.666667-76.8 125.866667-209.066667 200.533333-356.266666 200.533333-145.066667 0-279.466667-74.666667-354.133334-198.4-8.533333-14.933333-29.866667-19.2-44.8-10.666667-14.933333 8.533333-19.2 29.866667-10.666666 44.8 25.6 40.533333 55.466667 76.8 91.733333 108.8l-85.333333 85.333334c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333l91.733333-91.733334c38.4 25.6 81.066667 46.933333 125.866667 59.733334l-34.133333 130.133333c-4.266667 17.066667 6.4 34.133333 23.466666 38.4 2.133333 0 6.4 2.133333 8.533334 2.133333 14.933333 0 27.733333-8.533333 29.866666-23.466666l36.266667-132.266667c25.6 4.266667 51.2 6.4 78.933333 6.4 27.733333 0 55.466667-2.133333 83.2-6.4l36.266667 132.266667c4.266667 14.933333 17.066667 23.466667 29.866667 23.466666 2.133333 0 6.4 0 8.533333-2.133333 17.066667-4.266667 27.733333-21.333333 23.466667-38.4L661.333333 584.533333c44.8-12.8 85.333333-34.133333 123.733334-59.733333l91.733333 91.733333c6.4 6.4 14.933333 8.533333 23.466667 8.533334s17.066667-2.133333 23.466666-8.533334c6.4-10.666667 6.4-29.866667-6.4-42.666666z" fill="#eeeeee" p-id="1455"></path></svg>'
                }, 
            ]
        },
        {
            key: "repl-clear",
            label: t("Remove formatting"),
            binding: "mod+shift+x",
            regex: "\\[\\[(?:#|\\$|_)(?:red|green|blue|cloze|caption)\\]\\]|==([^=]*)==|~~([^~]*)~~|\\^\\^([^\\^]*)\\^\\^|\\*\\*([^\\*]*)\\*\\*|\\*([^\\*]*)\\*|_([^_]*)_|\\$([^\\$]*)\\$|`([^`]*)`|\\[([^\\]]*)\\]\\([^\\]]*\\)",
            replacement: "$1$2$3$4$5$6$7$8$9",
            icon: '<svg t="1643381967522" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1377" width="200" height="200"><path d="M824.4 438.8c0-37.6-30-67.6-67.6-67.6l-135.2 0L621.6 104.8c0-37.6-30-67.6-67.6-67.6-37.6 0-67.6 30-67.6 67.6l0 266.4L358.8 371.2c-37.6 0-67.6 30-67.6 67.6l0 67.6L828 506.4l0-67.6L824.4 438.8 824.4 438.8zM824.4 574c-11.2 0-536.8 0-536.8 0S250 972 88.4 972L280 972c75.2 0 108.8-217.6 108.8-217.6s33.6 195.2 3.6 217.6l105.2 0c-3.6 0 0 0 11.2 0 52.4-7.6 60-247.6 60-247.6s52.4 244 45.2 244c-26.4 0-78.8 0-105.2 0l0 0 154 0c-7.6 0 0 0 11.2 0 48.8-11.2 52.4-187.6 52.4-187.6s22.4 187.6 15.2 187.6c-18.8 0-48.8 0-67.6 0l-3.6 0 90 0C895.6 972 903.2 784.4 824.4 574L824.4 574z" p-id="1378" fill="#eeeeee"></path></svg>'
        }, 
    ];
}
function registerCommand(model, { key , label , binding  }) {
    if (binding) {
        logseq.App.registerCommandPalette({
            key,
            label,
            keybinding: {
                binding
            }
        }, model[key]);
    } else {
        logseq.App.registerCommandPalette({
            key,
            label
        }, model[key]);
    }
}
function registerModel(model, { key , template , pluginCommand , regex , replacement  }) {
    if (key.startsWith("wrap-")) {
        model[key] = ()=>updateBlockText(wrap, template, pluginCommand);
    } else if (key.startsWith("repl-")) {
        model[key] = ()=>updateBlockText(repl, regex, replacement);
    }
}
async function updateBlockText(producer, ...args) {
    const block = await logseq.Editor.getCurrentBlock();
    if (block == null || textarea == null) {
        logseq.App.showMsg(t("This command can only be used when editing text"), "error");
        return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = textarea.value.substring(0, start);
    const selection = textarea.value.substring(start, end);
    const after = textarea.value.substring(end);
    const [text, selStart, selEnd] = await producer(before, selection, after, start, end, ...args);
    await logseq.Editor.updateBlock(block.uuid, text);
    if (textarea?.isConnected) {
        textarea.focus();
        textarea.setSelectionRange(selStart, selEnd);
    } else {
        await logseq.Editor.editBlock(block.uuid);
        parent.document.activeElement.setSelectionRange(selStart, selEnd);
    }
}
async function wrap(before, selection, after, start, end, template, pluginCommand) {
    const m = selection.match(/\s+$/);
    const [text, whitespaces] = m == null ? [
        selection,
        ""
    ] : [
        selection.substring(0, m.index),
        m[0]
    ];
    if (template.includes("$%") && pluginCommand) {
        const pluginId = pluginCommand.split(".")[0];
        const pluginInfo = await logseq.App.getExternalPlugin(pluginId);
        if (pluginInfo != null && !pluginInfo.settings?.disabled) {
            const commandRet = await logseq.App.invokeExternalPlugin(pluginCommand);
            template = template.replace("$%", commandRet == null ? "" : commandRet);
        } else {
            logseq.UI.showMsg(t('You must have the plugin "${pluginId}" installed and enabled.', {
                pluginId
            }), "warning", {
                timeout: 10000
            });
            return [
                `${before}${selection}${after}`,
                start,
                end
            ];
        }
    }
    const [wrapBefore, wrapAfter] = template.split("$^");
    return [
        `${before}${wrapBefore}${text}${wrapAfter ?? ""}${whitespaces}${after}`,
        start,
        end + wrapBefore.length - whitespaces.length + wrapAfter.length, 
    ];
}
function repl(before, selection, after, start, end, regex, replacement) {
    const newText = selection.replace(new RegExp(regex, "g"), replacement);
    return [
        `${before}${newText}${after}`,
        start,
        start + newText.length
    ];
}
async function onSelectionChange(e) {
    const activeElement = parent.document.activeElement;
    if (activeElement !== textarea && activeElement.nodeName.toLowerCase() === "textarea") {
        if (toolbar != null && textarea != null) {
            textarea.removeEventListener("keydown", deletionWorkaroundHandler);
        }
        textarea = activeElement;
        if (toolbar != null) {
            textarea.addEventListener("keydown", deletionWorkaroundHandler);
        }
    }
    if (toolbar != null && activeElement === textarea) {
        if (textarea.selectionStart === textarea.selectionEnd && toolbar.style.opacity !== "0") {
            toolbar.style.opacity = "0";
        } else if (textarea.selectionStart !== textarea.selectionEnd) {
            await positionToolbar();
        }
    }
}
function deletionWorkaroundHandler(e) {
    if ((e.key === "Backspace" || e.key === "Delete") && textarea.selectionStart === 0 && textarea.selectionEnd === textarea.value.length && toolbar.style.opacity !== "0") {
        toolbar.style.opacity = "0";
    }
}
async function positionToolbar() {
    const curPos = await logseq.Editor.getEditingCursorPosition();
    if (curPos != null) {
        toolbar.style.top = `${curPos.top + curPos.rect.y - 35}px`;
        if (curPos.left + curPos.rect.x + toolbar.clientWidth <= parent.window.innerWidth) {
            toolbar.style.left = `${curPos.left + curPos.rect.x}px`;
        } else {
            toolbar.style.left = `${-toolbar.clientWidth + parent.window.innerWidth}px`;
        }
        toolbar.style.opacity = "1";
    }
}
function onToolbarTransitionEnd(e) {
    if (toolbar.style.opacity === "0") {
        toolbar.style.top = "0";
        toolbar.style.left = "-99999px";
    }
}
function onBlur(e) {
    // Update toolbar visibility upon activeElement change.
    if (document.activeElement !== textarea && toolbar?.style.opacity !== "0") {
        toolbar.style.opacity = "0";
    }
}
// There is a large gap between 2 displays of the toolbar, so a large
// ms number is acceptable.
const hideToolbar = throttle(()=>{
    if (toolbar.style.opacity !== "0") {
        toolbar.style.opacity = "0";
    }
}, 1000);
const showToolbar = debounce(async ()=>{
    if (textarea != null && textarea.selectionStart !== textarea.selectionEnd) {
        await positionToolbar();
    }
}, 100);
function onScroll(e) {
    hideToolbar();
    showToolbar();
}
function toggleToolbarDisplay() {
    const appContainer = parent.document.getElementById("app-container");
    if (appContainer.classList.contains("kef-wrap-hidden")) {
        appContainer.classList.remove("kef-wrap-hidden");
    } else {
        appContainer.classList.add("kef-wrap-hidden");
    }
}
logseq.ready(main).catch(console.error);
