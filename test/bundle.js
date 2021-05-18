/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,e,o,i;!function(t){var e={};function o(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=83)}([function(t,e,o){o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return E.a})),o.d(e,"a",(function(){return _}));const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol();class n{constructor(t,e){if(e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return i&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,a=t=>{let e=s.get(t);return void 0===e&&s.set(t,e=new n(t,r)),e},l=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(t instanceof n)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return a(o)},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>a("string"==typeof t?t:t+""))(e)})(t):t;var d,h,p,u;const b={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:g};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this.Πp(o,e);void 0!==i&&(this.Πm.set(i,o),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static"Πp"(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,o){this.K(t,o)}"Πj"(t,e,o=f){var i,r;const n=this.constructor.Πp(t,o);if(void 0!==n&&!0===o.reflect){const s=(null!==(r=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:b.toAttribute)(e,o.type);this.Πh=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this.Πh=null}}K(t,e){var o,i,r;const n=this.constructor,s=n.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=n.getPropertyOptions(s),a=t.converter,l=null!==(r=null!==(i=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==r?r:b.fromAttribute;this.Πh=s,this[s]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===o.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const o=this.L;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(o)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(h=(d=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(d,{ReactiveElement:v}),(null!==(p=(u=globalThis).reactiveElementVersions)&&void 0!==p?p:u.reactiveElementVersions=[]).push("1.0.0-rc.2");var m,y,w,k,x,O,E=o(3);(null!==(m=(O=globalThis).litElementVersions)&&void 0!==m?m:O.litElementVersions=[]).push("3.0.0-rc.2");class _ extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();super.update(t),this.Φt=Object(E.d)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return E.b}}_.finalized=!0,_._$litElement$=!0,null===(w=(y=globalThis).litElementHydrateSupport)||void 0===w||w.call(y,{LitElement:_}),null===(x=(k=globalThis).litElementPlatformSupport)||void 0===x||x.call(k,{LitElement:_})},function(t,e,o){o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));const i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function r(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):i(t,e)}function n(t){return r({...t,state:!0,attribute:!1})}},function(t,e,o){o.d(e,"a",(function(){return i}));const i=o(0).b`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`},function(t,e,o){var i,r,n,s;o.d(e,"a",(function(){return O})),o.d(e,"b",(function(){return E})),o.d(e,"c",(function(){return _})),o.d(e,"d",(function(){return $}));const a=globalThis.trustedTypes,l=a?a.createPolicy("lit-html",{createHTML:t=>t}):void 0,c=`lit$${(Math.random()+"").slice(9)}$`,d="?"+c,h=`<${d}>`,p=document,u=(t="")=>p.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,m=/>/g,y=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,w=/'/g,k=/"/g,x=/^(?:script|style|textarea)$/i,O=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),E=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),j=new WeakMap,$=(t,e,o)=>{var i,r;const n=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let s=n._$litPart$;if(void 0===s){const t=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;n._$litPart$=s=new T(e.insertBefore(u(),t),t,void 0,o)}return s.I(t),s},S=p.createTreeWalker(p,129,null,!1),C=(t,e)=>{const o=t.length-1,i=[];let r,n=2===e?"<svg>":"",s=f;for(let e=0;e<o;e++){const o=t[e];let a,l,d=-1,p=0;for(;p<o.length&&(s.lastIndex=p,l=s.exec(o),null!==l);)p=s.lastIndex,s===f?"!--"===l[1]?s=v:void 0!==l[1]?s=m:void 0!==l[2]?(x.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=y):void 0!==l[3]&&(s=y):s===y?">"===l[0]?(s=null!=r?r:f,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?y:'"'===l[3]?k:w):s===k||s===w?s=y:s===v||s===m?s=f:(s=y,r=void 0);const u=s===y&&t[e+1].startsWith("/>")?" ":"";n+=s===f?o+h:d>=0?(i.push(a),o.slice(0,d)+"$lit$"+o.slice(d)+c+u):o+c+(-2===d?(i.push(void 0),e):u)}const a=n+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==l?l.createHTML(a):a,i]};class P{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,n=0;const s=t.length-1,l=this.parts,[h,p]=C(t,e);if(this.el=P.createElement(h,o),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=S.nextNode())&&l.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(c)){const o=p[n++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(c),e=/([.?@])?(.*)/.exec(o);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?I:"@"===e[1]?D:z})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(x.test(i.tagName)){const t=i.textContent.split(c),e=t.length-1;if(e>0){i.textContent=a?a.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],u()),S.nextNode(),l.push({type:2,index:++r});i.append(t[e],u())}}}else if(8===i.nodeType)if(i.data===d)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(c,t+1));)l.push({type:7,index:r}),t+=c.length-1}r++}}static createElement(t,e){const o=p.createElement("template");return o.innerHTML=t,o}}function R(t,e,o=t,i){var r,n,s,a;if(e===E)return e;let l=void 0!==i?null===(r=o.Σi)||void 0===r?void 0:r[i]:o.Σo;const c=b(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,o,i)),void 0!==i?(null!==(s=(a=o).Σi)&&void 0!==s?s:a.Σi=[])[i]=l:o.Σo=l),void 0!==l&&(e=R(t,l.S(t,e.values),l,i)),e}class A{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:o},parts:i}=this.D,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:p).importNode(o,!0);S.currentNode=r;let n=S.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new T(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new N(n,this,t)),this.l.push(e),l=i[++a]}s!==(null==l?void 0:l.index)&&(n=S.nextNode(),s++)}return r}v(t){let e=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(t,o,e),e+=o.strings.length-2):o.I(t[e])),e++}}class T{constructor(t,e,o,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=o,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=R(this,t,e),b(t)?t===_||null==t||""===t?(this.H!==_&&this.R(),this.H=_):t!==this.H&&t!==E&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return g(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(p.createTextNode(t)),this.H=t}_(t){var e;const{values:o,_$litType$:i}=t,r="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=P.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===r)this.H.v(o);else{const t=new A(r,this),e=t.u(this.options);t.v(o),this.$(e),this.H=t}}C(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new P(t)),e}g(t){g(this.H)||(this.H=[],this.R());const e=this.H;let o,i=0;for(const r of t)i===e.length?e.push(o=new T(this.k(u()),this.k(u()),this,this.options)):o=e[i],o.I(r),i++;i<e.length&&(this.R(o&&o.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class z{constructor(t,e,o,i,r){this.type=1,this.H=_,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(_),this.strings=o):this.H=_}get tagName(){return this.element.tagName}I(t,e=this,o,i){const r=this.strings;let n=!1;if(void 0===r)t=R(this,t,e,0),n=!b(t)||t!==this.H&&t!==E,n&&(this.H=t);else{const i=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=R(this,i[o+s],e,s),a===E&&(a=this.H[s]),n||(n=!b(a)||a!==this.H[s]),a===_?t=_:t!==_&&(t+=(null!=a?a:"")+r[s+1]),this.H[s]=a}n&&!i&&this.W(t)}W(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends z{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===_?void 0:t}}class I extends z{constructor(){super(...arguments),this.type=4}W(t){t&&t!==_?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class D extends z{constructor(){super(...arguments),this.type=5}I(t,e=this){var o;if((t=null!==(o=R(this,t,e,0))&&void 0!==o?o:_)===E)return;const i=this.H,r=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==_&&(i===_||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,o;"function"==typeof this.H?this.H.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this.H.handleEvent(t)}}class N{constructor(t,e,o){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=o}I(t){R(this,t)}}null===(r=(i=globalThis).litHtmlPlatformSupport)||void 0===r||r.call(i,P,T),(null!==(n=(s=globalThis).litHtmlVersions)&&void 0!==n?n:s.litHtmlVersions=[]).push("2.0.0-rc.3")},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[n.a,i.b`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
      `]}render(){var t;return i.c` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?i.c` ${this.icon} `:""}`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&o.indexOf("url")>-1&&this.setBackgroundImage(o)}setBackgroundImage(t){this.style.backgroundImage=t}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"color",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"size",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",a)},function(t,e,o){o.r(e);var i=o(4);o.d(e,"korIcon",(function(){return i.a}))},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[n.a,i.b`
        :host {
          color: var(--text-1);
          transition: var(--transition-1);
        }
        :host([size='body-1']) {
          font: var(--body-1);
        }
        :host([size='body-2']) {
          font: var(--body-2);
        }
        :host([size='header-1']) {
          font: var(--header-1);
        }
        :host([size='header-2']) {
          font: var(--header-2);
        }
      `]}render(){return i.c`<slot></slot>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color&&(this.style.color=this.color)}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"size",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",a)},function(t,e,o){o.r(e);var i=o(6);o.d(e,"korText",(function(){return i.a}))},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: 16px;
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: 16px;
        }
        slot[name='footer']:not(.empty) {
          padding-top: 16px;
        }
        .label {
          flex: 1;
          display: flex;
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
        .label kor-icon {
          margin-right: 8px;
        }
        slot[name='footer']::slotted(*:not(:first-child)),
        slot[name='functions']::slotted(*) {
          margin-left: 12px;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          padding: 0 16px;
          margin-right: -16px;
          margin-left: -16px;
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        :host([flex-direction='column'])
          slot:not([name])::slotted(*:not(:last-child)) {
          margin-bottom: 12px;
        }
        :host([flex-direction='row'])
          slot:not([name])::slotted(*:not(:last-child)) {
          margin-right: 12px;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: -16px -16px 16px -16px;
        }
      `]}render(){return i.c`
      ${this.image?i.c` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?i.c`
                <div class="label">
                  ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":i.c` <div style="margin-top: 16px"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"image",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",a)},function(t,e,o){o.r(e);var i=o(8);o.d(e,"korCard",(function(){return i.a}))},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{static get styles(){return[n.a,i.b`
        :host {
          z-index: 3;
          height: 56px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: rgb(var(--base-0));
          box-shadow: var(--shadow-1);
          transition: var(--transition-1);
        }
        .logo {
          height: 24px;
          margin-right: 32px;
        }
        .label {
          font: var(--header-1);
          color: var(--text-1);
          max-width: 320px;
          margin-right: 32px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host([mobile]) .label {
          flex: 1;
          max-width: unset;
          margin: 0 16px;
          text-align: center;
        }
        /* slots */
        slot {
          display: flex;
          align-items: center;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name='functions']::slotted(*) {
          margin-left: 12px;
        }
        ::slotted(kor-tabs) {
          border-bottom: unset;
        }
        slot[name='right'],
        slot[name='left'] {
          min-width: 24px;
        }
        slot[name='right'] {
          margin-left: auto;
        }
      `]}render(){return i.c`
      ${this.mobile?i.c`
            <slot name="left"></slot>
            ${this.label?i.c` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:i.c`
            ${this.logo?i.c`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?i.c` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"logo",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(9),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host {
          background-color: rgb(var(--base-4));
          border-radius: var(--border-radius);
          display: flex;
          box-shadow: var(--shadow-1);
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 4;
          width: 240px;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host([position^='bottom']:not([visible])) {
          margin-top: -8px;
        }
        :host([position^='top']:not([visible])) {
          margin-top: 8px;
        }
        :host([position^='right']:not([visible])) {
          margin-left: -8px;
        }
        :host([position^='left']:not([visible])) {
          margin-left: 8px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
        }
      `]}render(){return i.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        @wheel="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target?this.targetObserver():"visible"===t&&this.visible&&this.visibleObserver()}targetObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&t.addEventListener("click",(()=>this.handlePosition(t)))}visibleObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&this.handlePosition(t),!this.sticky&&this.target&&this.addDocListener(t)}handlePosition(t){if(!t)return;let e=this,o=t.getBoundingClientRect();e.visible=!0,e.position.startsWith("bottom")?e.style.top=o.top+o.height+8+"px":e.position.startsWith("top")?e.style.top=o.top-e.clientHeight-8+"px":e.style.top=o.top+o.height/2-e.clientHeight/2+"px",e.position.startsWith("right")?e.style.left=o.left+o.width+8+"px":e.position.startsWith("left")?e.style.left=o.left-e.clientWidth-8+"px":e.style.left=o.left+o.width/2-e.clientWidth/2+"px"}addDocListener(t){let e=this,o=function(i){(i.target!==t&&"click"===i.type||"wheel"===i.type)&&(e.visible=!1,document.removeEventListener("click",o),document.removeEventListener("wheel",o))};document.addEventListener("click",o),document.addEventListener("wheel",o)}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"position",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"target",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(9),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host(:not([expanded])) kor-card {
          cursor: pointer;
        }
        kor-card {
          padding: 8px 16px;
        }
        slot:not([name]) {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          transition: var(--transition-1);
        }
        /* expanded */
        :host(:not([expanded])) slot:not([name]) {
          margin-top: 0;
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
        }
        .header {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex: 1;
        }
        .icon {
          margin-right: 8px;
        }
        slot[name='header'] p {
          margin-right: 8px;
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
          flex: 1;
        }
        :host([expanded]) .expand {
          transform: rotate(180deg);
        }
        /* disabled */
        :host([disabled]) .header {
          opacity: 0.2;
        }
        :host([disabled]) kor-card {
          pointer-events: none;
        }
      `]}render(){return i.c`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${t=>this.handleCollapse(t)}"
        >
          <div class="header">
            ${this.icon?i.c` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
            <p>${this.label}</p>
            <kor-icon
              button
              class="expand"
              icon="keyboard_arrow_down"
            ></kor-icon>
          </div>
        </slot>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
        ${this.expanded?i.c`
          <slot
            name="footer"
            slot="${this.emptyFooter?"hidden":"footer"}"
            @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
          ></slot>
        `:""}
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{var t,e,o;const i=null===(o=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("kor-card"))||void 0===e?void 0:e.shadowRoot)||void 0===o?void 0:o.querySelector(".top");i&&(i.style.padding="0")}),0)}handleCollapse(t){this.expanded&&(this.expanded=!1,t.stopPropagation())}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"expanded",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyBody",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-accordion")||window.customElements.define("kor-accordion",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{static get styles(){return[n.a,i.b`
        :host,
        .image {
          display: flex;
          align-items: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          margin-left: 8px;
          overflow: hidden;
        }
        .label,
        .info {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .label {
          font-weight: bold;
        }
        .image {
          overflow: hidden;
          justify-content: center;
          font: var(--header-2);
          color: var(--text-1);
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.1);
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        :host-context(kor-app-bar) {
          max-width: 288px;
        }
        /* condensed */
        :host([condensed]) .image {
          height: 24px;
          width: 24px;
        }
      `]}render(){return i.c`
      <!-- image -->
      <div class="image">
        ${this.image?i.c` <img src="${this.image}" /> `:i.c`
              ${this.label?i.c` ${this.getInitials(this.label)} `:i.c` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?i.c`
            <div class="text">
              ${this.label?i.c`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?i.c`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getInitials(t){const e=t.match(/\b\w/g)||[];return(e.shift()||"")+(e.pop()||"").toUpperCase()}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"info",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"image",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"condensed",void 0),window.customElements.get("kor-avatar")||window.customElements.define("kor-avatar",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          width: max-content;
          min-width: 16px;
          padding: 0 4px;
          border-radius: 8px;
          background: rgb(var(--functional-blue));
        }
        :host(:not([label])) {
          padding: 4px;
          min-width: unset;
        }
        kor-text {
          color: white;
          font-weight: bold;
        }
        /* status */
        :host([status]) {
          background: transparent;
          padding: 0px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return i.c`
      ${this.status?i.c`
            <!-- status -->
            ${this.status?i.c`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:i.c`
            ${this.label?i.c`
                  <kor-text size="body-2">
                    ${this.label>999?i.c` 999+ `:i.c` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}}s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"status",void 0),window.customElements.get("kor-badge")||window.customElements.define("kor-badge",a)},function(t,e,o){o.d(e,"a",(function(){return n}));var i=o(0),r=o(2);class n extends i.a{static get styles(){return[r.a,i.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return i.c` <slot></slot> `}}window.customElements.get("kor-breadcrumbs")||window.customElements.define("kor-breadcrumbs",n)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          align-items: center;
        }
        kor-icon {
          pointer-events: none;
          margin: 0 4px;
        }
        kor-text {
          color: var(--text-2);
          cursor: pointer;
          font-weight: bold;
        }
        :host([active]) kor-text {
          color: var(--text-1);
        }
        /* hover inputs */
        @media (hover: hover) {
          kor-text:hover:not(:active) {
            color: var(--text-1);
          }
        }
      `]}render(){return i.c`
      ${this.firstItem()?"":i.c`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}firstItem(){var t;let e,o;return o=Array.prototype.slice.call(null===(t=this.parentElement)||void 0===t?void 0:t.children),e=0==o.indexOf(this),e}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),window.customElements.get("kor-breadcrumb-item")||window.customElements.define("kor-breadcrumb-item",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.label="Label",this.color="primary"}static get styles(){return[n.a,i.b`
        :host {
          font: var(--header-2);
          color: var(--text-1);
          display: flex;
          height: max-content;
          width: max-content;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: var(--transition-1);
          justify-content: center;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host(:not([icon])) {
          min-width: 56px;
          max-width: 160px;
          padding: 4px 12px;
        }
        :host([color='tertiary']:not([icon])) {
          padding: 3px 11px;
        }
        :host([icon]) {
          padding: 4px;
        }
        :host([color='tertiary'][icon]) {
          padding: 3px;
        }
        /* idle */
        :host([color='primary']) {
          background-color: rgb(var(--accent-1));
        }
        :host([color='secondary']) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([color='tertiary']) {
          border-width: 1px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.25);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* text and icon colors */
        kor-icon {
          color: unset;
        }
        :host([color='primary']) {
          color: rgba(255, 255, 255, 0.9);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([color='primary']:not(:active):hover) {
            background-color: rgb(var(--accent-1b));
          }
          :host([color='secondary']:not(:active):hover) {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([color='tertiary']:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return i.c`
      ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:i.c` ${this.label} `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"color",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-button")||window.customElements.define("kor-button",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 2px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .box {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not(:active)) .box {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return i.c`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="box">
        ${this.active?i.c` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?i.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>{this.active=!this.active}))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-checkbox")||window.customElements.define("kor-checkbox",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[n.a,i.b`
        :host([orientation='horizontal']) {
          width: 100%;
        }
        :host([orientation='vertical']) {
          height: 100%;
        }
        .line {
          background: rgba(var(--neutral-1), 0.25);
        }
        :host([orientation='horizontal']) .line {
          height: 1px;
          width: 100%;
        }
        :host([orientation='vertical']) .line {
          width: 1px;
          height: 100%;
        }
        /* spacing */
        :host([spacing='s'][orientation='horizontal']) {
          padding: 8px 0;
        }
        :host([spacing='m'][orientation='horizontal']) {
          padding: 16px 0;
        }
        :host([spacing='l'][orientation='horizontal']) {
          padding: 32px 0;
        }
        :host([spacing='s'][orientation='vertical']) {
          padding: 0 8px;
        }
        :host([spacing='m'][orientation='vertical']) {
          padding: 0 16px;
        }
        :host([spacing='l'][orientation='vertical']) {
          padding: 0 32px;
        }
      `]}render(){return i.c`<div class="line"></div>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"spacing",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(9),o(5),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        kor-card {
          position: absolute;
          border-radius: 0px;
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
        }
        /* position */
        :host([position='left']) kor-card {
          left: 0;
        }
        :host([position='right']) kor-card {
          right: 0;
        }
        :host([position='top']) kor-card {
          top: 0;
        }
        :host([position='bottom']) kor-card {
          bottom: 0;
        }
        /* animations */
        :host([position='left']:not([visible])) kor-card {
          margin-left: -40px;
        }
        :host([position='right']:not([visible])) kor-card {
          margin-right: -40px;
        }
        :host([position='top']:not([visible])) kor-card {
          margin-top: -40px;
        }
        :host([position='bottom']:not([visible])) kor-card {
          margin-bottom: -40px;
        }
      `]}render(){return i.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":i.c`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",(()=>this.sticky?"":this.visible=!1))}getCardSize(){let t={height:void 0,width:void 0};switch(this.position){case"left":case"right":t.height="100%",t.width=this.width;break;case"top":case"bottom":t.height=this.height,t.width="100%"}return t}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"position",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"height",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"width",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-drawer")||window.customElements.define("kor-drawer",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{static get styles(){return[n.a,i.b`
        :host {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        slot[name='footer'] {
          display: flex;
          margin-top: 16px;
        }
        slot[name='footer']::slotted(*) {
          margin: 0 8px;
        }
        kor-icon + kor-text {
          margin-top: 8px;
        }
        kor-text {
          text-align: center;
        }
      `]}render(){return i.c`
      ${this.icon?i.c`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?i.c` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),window.customElements.get("kor-empty-state")||window.customElements.define("kor-empty-state",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[n.a,i.b`
        :host {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
        :host(:not([fit-content])) {
          height: 100%;
          width: 100%;
        }
        ::slotted(*) {
          width: auto;
          min-width: 0;
          min-height: 0;
        }
        /* spacing */
        :host([spacing='s']) {
          grid-gap: 8px;
        }
        :host([spacing='m']) {
          grid-gap: 12px;
        }
        :host([spacing='l']) {
          grid-gap: 16px;
        }
        /* columns and rows */
        ::slotted(*[grid-cols='0']) {
          display: none;
        }
        ::slotted(*:not([grid-cols])),
        ::slotted(*[grid-cols='1']) {
          grid-column: span 1;
        }
        ::slotted(*[grid-cols='2']) {
          grid-column: span 2;
        }
        ::slotted(*[grid-cols='3']) {
          grid-column: span 3;
        }
        ::slotted(*[grid-cols='4']) {
          grid-column: span 4;
        }
        ::slotted(*[grid-cols='5']) {
          grid-column: span 5;
        }
        ::slotted(*[grid-cols='6']) {
          grid-column: span 6;
        }
        ::slotted(*[grid-cols='7']) {
          grid-column: span 7;
        }
        ::slotted(*[grid-cols='8']) {
          grid-column: span 8;
        }
        ::slotted(*[grid-cols='9']) {
          grid-column: span 9;
        }
        ::slotted(*[grid-cols='10']) {
          grid-column: span 10;
        }
        ::slotted(*[grid-cols='11']) {
          grid-column: span 11;
        }
        ::slotted(*[grid-cols='12']) {
          grid-column: span 12;
        }
        ::slotted(*:not([grid-rows])),
        ::slotted(*[grid-rows='1']) {
          grid-row: span 1;
        }
        ::slotted(*[grid-rows='2']) {
          grid-row: span 2;
        }
        ::slotted(*[grid-rows='3']) {
          grid-row: span 3;
        }
        ::slotted(*[grid-rows='4']) {
          grid-row: span 4;
        }
        ::slotted(*[grid-rows='5']) {
          grid-row: span 5;
        }
        ::slotted(*[grid-rows='6']) {
          grid-row: span 6;
        }
        ::slotted(*[grid-rows='7']) {
          grid-row: span 7;
        }
        ::slotted(*[grid-rows='8']) {
          grid-row: span 8;
        }
        ::slotted(*[grid-rows='9']) {
          grid-row: span 9;
        }
        ::slotted(*[grid-rows='10']) {
          grid-row: span 10;
        }
        ::slotted(*[grid-rows='11']) {
          grid-row: span 11;
        }
        ::slotted(*[grid-rows='12']) {
          grid-row: span 12;
        }
        /* tablet */
        @media only screen and (max-width: 1025px) {
          ::slotted(*[grid-cols-m='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-m='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-m='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-m='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-m='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-m='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-m='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-m='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-m='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-m='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-m='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-m='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-m='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-m='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-m='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-m='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-m='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-m='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-m='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-m='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-m='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-m='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-m='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-m='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-m='12']) {
            grid-row: span 12;
          }
        }
        /* tablet */
        @media only screen and (max-width: 767px) {
          ::slotted(*[grid-cols-s='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-s='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-s='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-s='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-s='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-s='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-s='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-s='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-s='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-s='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-s='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-s='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-s='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-s='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-s='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-s='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-s='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-s='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-s='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-s='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-s='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-s='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-s='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-s='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-s='12']) {
            grid-row: span 12;
          }
        }
      `]}render(){return i.c`<slot></slot>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"columns"===t?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===t&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"columns",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"rows",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[n.a,i.b`
        :host {
          position: relative;
          max-width: max-content;
          display: flex;
          flex-direction: column;
          font: var(--body-2);
          color: var(--text-1);
        }
        /* legend */
        kor-text {
          width: 100%;
          color: unset;
          font: unset;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        :host(:not([legend-position])) kor-text {
          margin-top: 8px;
        }
        :host([legend-position^='inner-']) kor-text {
          position: absolute;
          padding: 8px;
          box-sizing: border-box;
        }
        :host([legend-position='inner-top']) kor-text {
          top: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
          );
        }
        :host([legend-position='inner-bottom']) kor-text {
          bottom: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
          );
        }
        /* slots */
        slot {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          position: absolute;
          padding: 4px;
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }
        slot[name='top'] {
          top: 0;
        }
        :host([legend][legend-position='inner-top']) slot[name='top'] {
          top: 24px;
        }
        slot[name='bottom'] {
          bottom: 0;
        }
        :host([legend]:not([legend-position])) slot[name='bottom'],
        :host([legend][legend-position='inner-bottom']) slot[name='bottom'] {
          bottom: 24px;
        }
      `]}render(){return i.c`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?i.c` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"src",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"alt",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"height",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"width",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"fit",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"legend",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"legend-position"})],a.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[n.a,i.b`
        :host {
          padding: 8px 0;
          border-radius: var(--border-radius);
          display: flex;
          cursor: pointer;
          transition: var(--transition-1);
          overflow: visible;
        }
        kor-icon {
          margin-right: 8px;
        }
        .label {
          flex: 1;
        }
        /* label */
        kor-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        slot[name='functions']::slotted(*) {
          margin-left: 8px;
        }
        :host([active]) {
          padding: 8px;
          margin-left: -8px;
          margin-right: -8px;
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
          pointer-events: none;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            padding: 8px;
            margin-left: -8px;
            margin-right: -8px;
            background: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return i.c`
      ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?i.c` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",(()=>{this.active=!this.active}))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"toggle",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(9),o(5),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host(:not([visible])) kor-card {
          margin-bottom: -40px;
        }
        kor-card {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
        }
      `]}render(){return i.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":i.c`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",(()=>this.sticky?"":this.visible=!1))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"height",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"width",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-modal")||window.customElements.define("kor-modal",a)},function(t,e,o){o.d(e,"a",(function(){return n}));var i=o(0),r=o(2);o(27);class n extends i.a{static get styles(){return[r.a,i.b`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return i.c`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}}window.customElements.get("kor-nav-bar")||window.customElements.define("kor-nav-bar",n)},function(t,e,o){o.r(e);var i=o(10);o.d(e,"korAppBar",(function(){return i.a}))},function(t,e,o){o.d(e,"a",(function(){return s}));var i=o(0),r=o(1),n=o(2);class s extends i.a{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[n.a,i.b`
        :host {
          position: fixed;
          display: flex;
          flex-direction: column;
          max-height: 100%;
          box-sizing: border-box;
          padding: 16px;
          margin: 0;
          width: 320px;
          z-index: 6;
          pointer-events: none;
        }
        ::slotted(*) {
          pointer-events: all;
        }
        :host([position^='top']) {
          top: 0px;
        }
        :host([position^='bottom']) {
          flex-flow: column-reverse;
          bottom: 0px;
        }
        :host([position$='left']) {
          left: 0px;
        }
        :host([position$='right']) {
          right: 0px;
        }
        :host([position^='top']) ::slotted(kor-notification-item[visible]) {
          margin-bottom: 12px;
        }
        :host([position^='bottom']) ::slotted(kor-notification-item[visible]) {
          margin-top: 12px;
        }
      `]}render(){return i.c`<slot></slot>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}(function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.a)({type:String,reflect:!0})],s.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",s)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(9),o(5),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host {
          transition: var(--transition-1);
          opacity: 1;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
          max-height: 0px;
          overflow: hidden;
          margin-top: 0;
          margin-bottom: 0;
        }
        kor-card {
          background: rgb(var(--base-4));
        }
        :host(:not([visible]):host-context([position$='right'])) {
          margin-left: 8px;
          margin-right: -8px;
        }
        :host(:not([visible]):host-context([position$='left'])) {
          margin-left: -8px;
          margin-right: 8px;
        }
      `]}render(){return i.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":i.c`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{constructor(){super(...arguments),this.padding="16px",this.flexDirection="row"}static get styles(){return[n.a,i.b`
        :host {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background-color: rgb(var(--base-1));
        }
        :host([flat]) {
          background-color: rgb(var(--base-3));
        }
        .center-wrapper,
        slot {
          display: flex;
        }
        .center-wrapper,
        slot:not([name]) {
          flex: 1;
          overflow: hidden;
        }
        :host([scrollable]) slot:not([name]) {
          overflow: auto;
        }
        slot[name='top'],
        slot[name='bottom'],
        :host([flex-direction='column']) slot:not([name]) {
          flex-direction: column;
        }
      `]}render(){return i.c`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"theme",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"padding",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(9),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host {
          background-color: rgb(var(--base-2));
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s width ease-out;
        }
        :host([size='l']) {
          width: 320px;
        }
        :host([size='m']) {
          width: 120px;
        }
        :host([size='s']) {
          width: 80px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
        }
      `]}render(){return i.c`
      <kor-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader?"":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"size",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-pane")||window.customElements.define("kor-pane",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[n.a,i.b`
        :host {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header,
        .footer {
          display: flex;
          align-items: center;
        }
        .label,
        .info {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          margin-bottom: 8px;
        }
        .footer {
          margin-top: 8px;
        }
        /* radial */
        :host([radial]) {
          align-items: center;
          justify-content: center;
        }
        .radial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .radial-wrapper kor-text {
          position: absolute;
          width: 100%;
          text-align: center;
        }
        .radial {
          transform: rotate(-90deg);
        }
        circle {
          fill: transparent;
          stroke-width: 8px;
        }
        /* status */
        .status-icon {
          margin-right: 8px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return i.c`
      <!-- header -->
      ${this.label||this.showProgress?i.c`
          <div class="header">
            <kor-text size="header-2" class="label">${this.label}</kor-text>
            ${this.showProgress&&!this.radial?i.c` <kor-text size="header-2">${this.value}%</kor-text> `:""}
          </div>
        `:""}
      ${this.radial?i.c`
          <!-- radial -->
          <div class="radial-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="radial"
              width="${this.getSize()}"
              viewBox="0 0 ${this.getSize()} ${this.getSize()}"
            >
              <circle
                stroke="rgba(var(--neutral-1), .1)"
                r="${this.getSize()/2-4}"
                cx="${this.getSize()/2}"
                cy="${this.getSize()/2}"
              />
              <circle
                stroke="${this.color?this.color:"rgb(var(--accent-1))"}"
                stroke-dasharray="${2*Math.PI*(this.getSize()/2-4)}"
                stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-(this.value?this.value/100:0))}"
                r="${this.getSize()/2-4}"
                cx="${this.getSize()/2}"
                cy="${this.getSize()/2}"
              />
            </svg>
            ${this.showProgress?i.c` <kor-text size="header-2">${this.value}%</kor-text> `:""}
          </div>
        `:i.c`
          <!-- linear -->
          <svg width="100%" height="8">
            <defs>
              <clipPath id="clip-path">
                <rect width="100%" height="8px" rx="4px" />
              </clipPath>
            </defs>
            <rect
              fill="rgba(var(--neutral-1), .1)"
              width="100%"
              height="100%"
              rx="4px"
            />
            <rect
              fill="${this.color?this.color:"rgb(var(--accent-1))"}"
              width="${this.value}%"
              height="100%"
              clip-path="url(#clip-path)"
            />
          </svg>
        `}
      ${this.info||this.status?i.c`
          <div class="footer">
            <!-- status -->
            ${this.status?i.c`
              <kor-icon
                class="status-icon"
                .icon="${this.getStatusIcon()}"
              ></kor-icon>
              `:""}
            <!-- info -->
            ${this.info?i.c`
              <kor-text color="var(--text-2)" class="info"
                >${this.info}</kor-text
              >
            `:""}
          </div>
        `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getSize(){let t;switch(this.size){case"s":t=48;break;case"m":t=64;break;case"l":t=80;break;default:t=0}return t}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"info",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"status",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"color",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"size",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"value",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"radial",void 0),s([Object(r.a)({type:Boolean,reflect:!0,attribute:"show-progress"})],a.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .circle {
          transition: var(--transition-1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 50%;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
        }
        :host([active]) .circle {
          border-color: transparent;
          border: 5px solid rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .circle {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return i.c`
      <input
        type="radio"
        ?checked="${this.active}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="circle"></div>
      ${this.label?i.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){var t;let e=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==e||e.forEach((t=>{t.active=!1})),this.active=!0}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-radio-button")||window.customElements.define("kor-radio-button",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[n.a,i.b`
        .track {
          width: 100%;
          height: 2px;
          margin: 16px 0;
          background-color: rgba(var(--neutral-1), 0.2);
          position: relative;
        }
        .thumb {
          padding: 10px;
          position: absolute;
          top: -15px;
          margin-left: -16px;
          cursor: pointer;
        }
        .thumb > div {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: rgb(var(--accent-1));
          transition: 0.1s all ease-out;
        }
        .thumb:hover > div {
          background-color: rgb(var(--accent-1b));
        }
        /* input */
        input {
          background: none;
          border: none;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          background-color: rgba(var(--neutral-1), 0.05);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 4px;
          width: 40px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        .label {
          display: flex;
        }
        .label kor-text {
          flex: 1;
        }
        .label > * + * {
          margin-left: 8px;
        }
      `]}render(){return i.c`
      ${this.label?i.c`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?i.c`
                    <input
                      type="number"
                      .value="${this.value}"
                      @blur="${t=>this.handleInput(parseFloat(t.target.value))}"
                      @keypress="${t=>"Enter"===t.key?this.handleInput(parseFloat(t.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${t=>this.handleThumbDrag(t)}"
          @touchstart="${t=>this.handleThumbDrag(t)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"value"!==t&&"min"!==t&&"max"!==t||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(t){t>=this.min&&t<=this.max?this.value=t:t<this.min?this.value=this.min:t>this.max&&(this.value=this.max)}handleThumbPosition(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".thumb"),o=(this.value-this.min)/(this.max-this.min)*100;e&&o>=0&&o<=100&&(e.style.left=o+"%")}handleThumbDrag(t){const e=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let o="mousedown"===t.type?t.clientX:t.touches[0].clientX;const i=t=>{t.preventDefault();const i="mousemove"===t.type?t.clientX:t.touches[0].clientX,r=i-o;if(r>e||-1*r>e){const t=Math.floor(r<0?-1*r:r),n=Math.round(t/e),s=r>0?this.value+this.step*n:this.value-this.step*n;s<=this.max&&s>=this.min&&(this.value=s,o=i)}},r=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("touchmove",i),window.removeEventListener("mouseup",r),window.removeEventListener("touchend",r)};window.addEventListener("mousemove",i),window.addEventListener("touchmove",i),window.addEventListener("mouseup",r),window.addEventListener("touchend",r)}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"value",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"min",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"max",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"step",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[n.a,i.b`
        :host {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        svg {
          animation: 1s linear infinite svg-animation;
        }
        @keyframes svg-animation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        circle {
          fill: transparent;
          stroke: rgb(var(--accent-1));
          stroke-linecap: round;
          stroke-width: 4px;
        }
        /* label */
        kor-text {
          margin-top: 8px;
          text-align: center;
          max-width: 240px;
        }
      `]}render(){return i.c`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}"
      >
        <circle
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize()/2-4}"
          cx="${this.getSize()/2}"
          cy="${this.getSize()/2}"
        />
      </svg>
      ${this.label?i.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getSize(){let t;switch(this.size){case"s":t=24;break;case"m":t=32;break;case"l":t=40}return t}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"size",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",a)},function(t,e,o){o.d(e,"a",(function(){return s}));var i=o(0),r=o(1),n=o(2);class s extends i.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
          overflow: auto;
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return i.c`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}handleOrientation(){this.childNodes.forEach((t=>{t.orientation=this.orientation}))}handleItems(){let t,e;t=Array.prototype.slice.call(this.children),e=this.children.length,t.forEach((t=>{t.first=1==t.index,t.last=t.index==e}))}}(function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.a)({type:String,reflect:!0})],s.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",s)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[n.a,i.b`
        :host {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
        }
        .circle {
          height: 40px;
          width: 40px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
          background-color: rgba(var(--neutral-1), 0.1);
          transition: var(--transition-1);
        }
        .text {
          display: flex;
          flex-direction: column;
        }
        .label {
          font-weight: bold;
        }
        .info {
          color: var(--text-2);
        }
        .label,
        .info {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        .number,
        kor-icon {
          color: var(--text-2);
        }
        /* line */
        .line {
          background-color: rgba(var(--neutral-1), 0.1);
          position: absolute;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          justify-content: center;
          flex-direction: column;
          padding: 0 16px;
        }
        :host([orientation='horizontal']) .label,
        :host([orientation='horizontal']) .info {
          text-align: center;
        }
        :host([orientation='horizontal']) .circle + .text {
          margin-top: 4px;
        }
        :host([orientation='horizontal']) .line {
          height: 2px;
          width: calc(50% - 28px);
          top: 19px;
        }
        :host([orientation='horizontal']) .line.before {
          left: 0px;
        }
        :host([orientation='horizontal']) .line.after {
          right: 0px;
        }
        /* vertical */
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          height: max-content;
          padding: 16px 0;
        }
        :host([orientation='vertical']) .label,
        :host([orientation='vertical']) .info {
          text-align: left;
        }
        :host([orientation='vertical']) .circle + .text {
          margin-left: 8px;
        }
        :host([orientation='vertical']) .line {
          width: 2px;
          height: calc(50% - 28px);
          left: 19px;
        }
        :host([orientation='vertical']) .line.before {
          top: 0px;
        }
        :host([orientation='vertical']) .line.after {
          bottom: 0px;
        }
        /* active */
        :host([active]) .circle {
          background-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: var(--text-1);
        }
        :host([active]) .number,
        :host([active]) kor-icon {
          color: rgba(255, 255, 255, 0.9);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
        }
        :host([disabled]) .circle,
        :host([disabled]) .text {
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .label,
          :host(:hover:not([active])) .number,
          :host(:hover:not([active])) kor-icon {
            color: var(--text-1);
          }
          :host(:not([active]):not(:active):hover) .circle {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([active]:not(:active):hover) .circle {
            background-color: rgb(var(--accent-1b));
          }
        }
      `]}render(){return i.c`
      <!-- circle -->
      <div class="circle">
        ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:i.c`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?i.c` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?i.c` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":i.c` <div class="line before"></div> `}
      ${this.last?"":i.c` <div class="line after"></div> `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",(()=>{var t;(null===(t=this.parentElement)||void 0===t?void 0:t.childNodes).forEach((t=>{t.active=!1})),this.active=!0}))}getIndex(){var t;let e;e=Array.prototype.slice.call(null===(t=this.parentElement)||void 0===t?void 0:t.children),this.index=e.indexOf(this)+1}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"info",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"index",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"first",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"last",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",a)},function(t,e,o){o.d(e,"a",(function(){return n}));var i=o(0),r=o(2);class n extends i.a{static get styles(){return[r.a,i.b`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return i.c` <slot></slot> `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}window.customElements.get("kor-switch")||window.customElements.define("kor-switch",n)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          width: max-content;
          min-width: 40px;
          max-width: 120px;
          padding: 4px 12px;
          border-radius: var(--border-radius);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: var(--transition-1);
        }
        .label {
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: var(--text-2);
        }
        /* active */
        :host([active]) .label,
        :host([active]) kor-icon {
          color: var(--text-1);
        }
        :host([active]) {
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            background: rgba(var(--neutral-1), 0.05);
          }
          :host([active]:hover) {
            background: rgba(var(--neutral-1), 0.15);
          }
        }
      `]}render(){return i.c`
      ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?i.c` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleActive(){var t;(null===(t=this.parentElement)||void 0===t?void 0:t.childNodes).forEach((t=>{t.active=!1})),this.active=!0}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-switch-item")||window.customElements.define("kor-switch-item",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-color: transparent;
          border-style: solid;
          color: var(--text-2);
        }
        .label {
          line-height: 24px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: unset;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          flex-direction: column;
          justify-content: center;
          width: max-content;
          min-width: 72px;
          max-width: 240px;
          height: 56px;
          padding: 0px 16px;
          border-width: 0px 0px 2px 0px;
        }
        :host([orientation='horizontal']) .label {
          text-align: center;
        }
        /* vertical */
        :host([orientation='vertical']) .label {
          text-align: left;
        }
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          min-width: unset;
          max-width: 100%;
          height: max-content;
          padding: 8px 8px 8px 14px;
          border-width: 0px 0px 0px 2px;
        }
        :host([orientation='vertical']) kor-icon + .label {
          margin-left: 8px;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) {
          color: var(--text-1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover) .label {
            color: var(--text-1);
          }
        }
      `]}render(){return i.c`
      ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?i.c` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleActive(){var t;(null===(t=this.closest("kor-tabs"))||void 0===t?void 0:t.querySelectorAll("kor-tab-item")).forEach((t=>{t.active=!1})),this.active=!0}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          flex-direction: column;
          max-height: 100%;
          margin: 0 !important;
        }
        slot {
          display: block;
        }
        slot:not([name]) {
          flex: 1;
          overflow: auto;
        }
      `]}render(){return i.c`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"readonly",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"condensed",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",a)},function(t,e,o){o.d(e,"a",(function(){return s}));var i=o(0),r=o(1),n=o(2);class s extends i.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
        :host([slot='header']) {
          margin-top: -16px;
        }
        :host(:not([orientation='vertical'])) {
          border-bottom: 1px solid rgba(var(--neutral-1), 0.1);
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return i.c`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach((t=>{t.orientation=this.orientation}))}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}(function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.a)({type:String,reflect:!0})],s.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",s)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[n.a,i.b`
        :host {
          padding: 4px;
          display: flex;
          height: max-content;
          width: max-content;
          max-width: 160px;
          border-radius: var(--border-radius);
          border: 1px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        .label {
          margin: 0 4px;
        }
        /* button */
        :host([button]) {
          cursor: pointer;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return i.c`
      <!-- icon -->
      ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?i.c` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?i.c`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}handleRemove(){this.dispatchEvent(new Event("remove"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"removable",void 0),window.customElements.get("kor-tag")||window.customElements.define("kor-tag",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class a extends i.a{constructor(){super(),this.rows=1,this.autofocus=!1,this.addEventListener("click",(()=>{var t,e;this.active=!0,null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("textarea"))||void 0===e||e.focus()}))}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 4px 8px 3px 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        textarea {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        textarea {
          background: none;
          border: none;
          padding: 0px;
          outline: none;
          font: var(--body-1);
          color: var(--text-1);
          resize: none;
        }
        textarea::-webkit-scrollbar {
          display: none;
        }
        /* active */
        :host([active]) {
          border-color: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        textarea,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return i.c`
      <div class="center">
        ${this.label?i.c` <label class="label">${this.label}</label> `:""}
        <textarea
          .value="${void 0!==this.value?this.value:""}"
          .rows="${this.rows}"
          .columns="${this.rows}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          @focus="${()=>this.active=!0}"
          @blur="${()=>this.active=!1}"
          @input="${this.handleChange}"
        ></textarea>
      </div>
    `}handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"value",void 0),s([Object(r.a)({type:Number,reflect:!0})],a.prototype,"rows",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"readonly",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* toggle */
        .bg {
          width: 32px;
          height: 20px;
          margin: 2px;
          padding: 2px;
          border-radius: 12px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .bg {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        .dot {
          display: flex;
          transition: var(--transition-1);
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .dot {
          transform: translateX(12px);
          background: white;
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not(:active):not([active])) .bg {
            border-color: rgba(var(--neutral-1), 0.3);
          }
          :host(:hover:not(:active):not([active])) .dot {
            background: rgba(var(--neutral-1), 0.9);
          }
        }
      `]}render(){return i.c`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="bg">
        <div class="dot"></div>
      </div>
      ${this.label?i.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>{this.active=!this.active}))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: max-content;
          padding: 4px;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-radius: var(--border-radius);
        }
        .label {
          display: -webkit-box;
          width: 100%;
          line-height: 12px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        /* size */
        :host([size='m']) {
          height: 56px;
          width: 56px;
        }
        :host([size='s']) {
          height: 32px;
          width: 32px;
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not(:active):not([active]):hover) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return i.c`
      ${this.icon?i.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":i.c` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",(()=>{this.active=!this.active}))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"size",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"toggle",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-tool")||window.customElements.define("kor-tool",a)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(48),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[n.a,i.b`
        :host {
          position: fixed;
          z-index: 4;
        }
      `]}render(){return i.c`
      <kor-popover
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
        .target="${this.target}"
        .position="${this.position}"
        ?visible="${this.visible}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target&&this.targetObserver()}targetObserver(){let t;const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&(e.addEventListener("mouseover",(()=>{t=setTimeout((()=>this.visible=!0),500)})),e.addEventListener("mouseout",(()=>{this.visible=!1,clearTimeout(t)})))}}s([Object(r.a)({type:String,reflect:!0})],a.prototype,"label",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"position",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"target",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),s([Object(r.b)()],a.prototype,"emptyHeader",void 0),s([Object(r.b)()],a.prototype,"emptyFunctions",void 0),s([Object(r.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",a)},function(t,e,o){o.r(e);var i=o(11);o.d(e,"korPopover",(function(){return i.a}))},function(t,e,o){o.d(e,"a",(function(){return c}));var i=o(0),r=o(3);const n=t=>null!=t?t:r.c;var s=o(1),a=o(2),l=(o(9),o(5),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class c extends i.a{constructor(){super(),this.type="text",this.autofocus=!1,this.step=1,this.addEventListener("click",(t=>{var e,o;this.active&&"select"===this.type?this.closeSelectMenu(t):this.active||(this.active=!0,"select"===this.type||this.disabled||this.readonly||null===(o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("input"))||void 0===o||o.focus())}))}static get styles(){return[a.a,i.b`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: 8px;
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: 8px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select */
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: 0px 16px;
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 -8px;
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* date */
        .date-icon {
          margin-left: -24px;
          pointer-events: none;
        }
        :host([type='date']) ::-webkit-calendar-picker-indicator {
          background: unset;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return i.c`
      ${this.icon?i.c` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?i.c` <label class="label">${this.label}</label> `:""}
        <input
          .type="${this.type}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${n(this.min)}"
          max="${n(this.max)}"
          .step="${this.step.toString()}"
          pattern="${n(this.pattern)}"
          value="${n(this.value)}"
          name="${n(this.name)}"
          @input="${this.handleChange}"
          @focus="${()=>"select"===this.type||this.active?"":this.active=!0}"
          @blur="${this.handleBlur}"
        />
      </div>
      <!-- select -->
      ${"select"===this.type?i.c`
          <kor-icon
            button
            class="select-icon"
            icon="arrow_drop_down"
          ></kor-icon>
          ${this.active?i.c`
              <kor-card
                @click="${t=>{this.active=!1,t.stopPropagation()}}"
                @wheel="${t=>t.stopPropagation()}"
                class="select-menu"
                .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
              >
                <slot @slotchange="${this.handleItems}"></slot>
              </kor-card>
            `:""}
        `:""}
      <!-- date -->
      ${"date"===this.type?i.c` <kor-icon button class="date-icon" icon="event"></kor-icon> `:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":i.c`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${()=>this.handleClear()}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?i.c`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${"number"!==this.type||this.readonly?"":i.c`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${()=>this.handleIncrement("left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${()=>this.handleIncrement("right")}"
            ></kor-icon>
          `}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}handleBlur(t){"number"===this.type&&this.validateMinMax(t.target.value),"select"!==this.type&&(this.active=!1)}handleIncrement(t){"left"===t?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")-this.step):"right"===t&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")+this.step)}handleItems(t){const e=t.target.assignedNodes();e.forEach((t=>{"KOR-MENU-ITEM"===t.tagName&&t.addEventListener("active-changed",(o=>{o.target.active&&(e.forEach((t=>{t.active=!1})),o.target.active=!0,this.value=t.label,this.active=!1)}))}))}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"active"===t&&this.active&&"select"===this.type&&this.handleMenu()}handleMenu(){const t=this.parentElement,e=()=>{this.active=!1,null==t||t.removeEventListener("wheel",e)};null==t||t.addEventListener("wheel",e)}closeSelectMenu(t){"select"===this.type&&this.active&&(t.stopImmediatePropagation(),this.active=!1)}validateMinMax(t){t&&(this.min&&t<parseInt(this.min)?this.value=this.min:this.max&&t>parseInt(this.max)?this.value=this.max:this.value=t.toString())}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}}l([Object(s.a)({type:String,reflect:!0})],c.prototype,"label",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"icon",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"value",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"name",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"type",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"status",void 0),l([Object(s.a)({type:Boolean,reflect:!0})],c.prototype,"condensed",void 0),l([Object(s.a)({type:Boolean,reflect:!0})],c.prototype,"active",void 0),l([Object(s.a)({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0),l([Object(s.a)({type:Boolean,reflect:!0})],c.prototype,"readonly",void 0),l([Object(s.a)({type:Boolean,reflect:!0,attribute:"no-clear"})],c.prototype,"noClear",void 0),l([Object(s.a)({type:Boolean,reflect:!0})],c.prototype,"autofocus",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"pattern",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"min",void 0),l([Object(s.a)({type:String,reflect:!0})],c.prototype,"max",void 0),l([Object(s.a)({type:Number,reflect:!0})],c.prototype,"step",void 0),window.customElements.get("kor-input")||window.customElements.define("kor-input",c)},function(t,e,o){o.d(e,"a",(function(){return s}));var i=o(0),r=o(1),n=o(2);class s extends i.a{static get styles(){return[n.a,i.b`
        :host {
          display: grid;
          border-bottom: 1px solid rgba(var(--neutral-1), 0.15);
          transition: var(--transition-1);
        }
        /* header */
        :host([slot='header']) {
          border-color: rgba(var(--neutral-1), 0.4);
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not([slot='header'])) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
          :host(:hover:not([active])):host-context(kor-table[readonly]) {
            background-color: transparent;
          }
        }
      `]}render(){return i.c` <slot></slot> `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive())),this.handleColumns()}handleActive(){var t,e;let o,i;o=this.closest("kor-table"),(null===(t=o)||void 0===t?void 0:t.readonly)||"header"==this.slot||(i=null===(e=this.parentElement)||void 0===e?void 0:e.childNodes,null==i||i.forEach((t=>{t.active=!1})),this.active=!0)}handleColumns(){const t=this.closest("kor-table");this.style.gridTemplateColumns=t.columns,null==t||t.addEventListener("columns-changed",(()=>{this.style.gridTemplateColumns=t.columns}))}}(function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.a)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",s)},function(t,e,o){o.d(e,"a",(function(){return a}));var i=o(0),r=o(1),n=o(2),s=(o(5),o(7),function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class a extends i.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[n.a,i.b`
        :host {
          display: flex;
          align-items: center;
          padding: 12px 8px;
          font: var(--body-1);
          overflow: hidden;
          cursor: default;
        }
        kor-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* condensed */
        :host:host-context(kor-table[condensed]) {
          padding: 8px 8px;
        }
        /* head */
        :host([head]) kor-text {
          font-weight: bold;
        }
        /* align */
        :host([alignment='center']) {
          justify-content: center;
        }
        :host([alignment='right']) {
          justify-content: flex-end;
        }
        /* sortable */
        :host([sortable]) {
          cursor: pointer;
        }
        :host([sort-direction='desc']) .sort {
          transform: rotate(180deg);
        }
        .sort {
          margin: 4px 0px 4px 4px;
          color: var(--text-2);
        }
      `]}render(){return i.c`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?i.c`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"grid-cols"==t&&(this.style.gridColumn="span "+this.gridCols),"sortable"==t&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",(()=>{this.handleSort()})))}handleSort(){var t;if(this.sorted)this.sortDirection="asc"==this.sortDirection?"desc":"asc";else{let e=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==e||e.forEach((t=>{t.sorted=!1})),this.sorted=!0,this.sortDirection="asc"}}}s([Object(r.a)({type:Number,reflect:!0,attribute:"grid-cols"})],a.prototype,"gridCols",void 0),s([Object(r.a)({type:String,reflect:!0})],a.prototype,"alignment",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"head",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"sorted",void 0),s([Object(r.a)({type:Boolean,reflect:!0})],a.prototype,"sortable",void 0),s([Object(r.a)({type:String,reflect:!0,attribute:"sort-direction"})],a.prototype,"sortDirection",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",a)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){o.r(e),o.d(e,"korAccordion",(function(){return i.a})),o.d(e,"korAppBar",(function(){return r.a})),o.d(e,"korAvatar",(function(){return n.a})),o.d(e,"korBadge",(function(){return s.a})),o.d(e,"korBreadcrumbs",(function(){return a.a})),o.d(e,"korBreadcrumbItem",(function(){return l.a})),o.d(e,"korButton",(function(){return c.a})),o.d(e,"korCard",(function(){return d.a})),o.d(e,"korCheckbox",(function(){return h.a})),o.d(e,"korDivider",(function(){return p.a})),o.d(e,"korDrawer",(function(){return u.a})),o.d(e,"korEmptyState",(function(){return b.a})),o.d(e,"korGrid",(function(){return g.a})),o.d(e,"korImage",(function(){return f.a})),o.d(e,"korIcon",(function(){return v.a})),o.d(e,"korInput",(function(){return m.a})),o.d(e,"korMenuItem",(function(){return y.a})),o.d(e,"korModal",(function(){return w.a})),o.d(e,"korNavbar",(function(){return k.a})),o.d(e,"korNotifications",(function(){return x.a})),o.d(e,"korNotificationItem",(function(){return O.a})),o.d(e,"korPage",(function(){return E.a})),o.d(e,"korPane",(function(){return _.a})),o.d(e,"korPopover",(function(){return j.a})),o.d(e,"korProgressBar",(function(){return $.a})),o.d(e,"korRadioButton",(function(){return S.a})),o.d(e,"korSlider",(function(){return C.a})),o.d(e,"korSpinner",(function(){return P.a})),o.d(e,"korStepper",(function(){return R.a})),o.d(e,"korStepperItem",(function(){return A.a})),o.d(e,"korSwipeActions",(function(){return B})),o.d(e,"korSwipeAction",(function(){return N})),o.d(e,"korSwitch",(function(){return M.a})),o.d(e,"korSwitchItem",(function(){return H.a})),o.d(e,"korTabItem",(function(){return L.a})),o.d(e,"korTable",(function(){return U.a})),o.d(e,"korTableRow",(function(){return F.a})),o.d(e,"korTableCell",(function(){return q.a})),o.d(e,"korTabs",(function(){return W.a})),o.d(e,"korTag",(function(){return V.a})),o.d(e,"korText",(function(){return J.a})),o.d(e,"korTextarea",(function(){return G.a})),o.d(e,"korToggle",(function(){return K.a})),o.d(e,"korTool",(function(){return Z.a})),o.d(e,"korTooltip",(function(){return X.a}));var i=o(12),r=o(10),n=o(13),s=o(14),a=o(15),l=o(16),c=o(17),d=o(8),h=o(18),p=o(19),u=o(20),b=o(21),g=o(22),f=o(23),v=o(4),m=o(49),y=o(24),w=o(25),k=o(26),x=o(28),O=o(29),E=o(30),_=o(31),j=o(11),$=o(32),S=o(33),C=o(34),P=o(35),R=o(36),A=o(37),T=o(0),z=o(2);class B extends T.a{static get styles(){return[z.a,T.b`
        :host {
          display: flex;
          overflow: auto;
          scroll-snap-type: x mandatory;
          overflow-x: scroll;
        }
        slot[name] {
          display: flex;
          transition: .1s opacity ease-out;
        }
        slot:not([name]) {
          min-width: 100%;
          display: block;
          scroll-snap-align: start;
        }
      `]}render(){return T.c`
      <slot 
        name="left" 
        @slotchange="${t=>this.setSlotWidth(t.target)}"
      ></slot>
      <slot></slot>
      <slot 
        name="right" 
        @slotchange="${t=>this.setSlotWidth(t.target)}"
      ></slot>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("touchend",this.handleTouchEnd),this.addEventListener("scroll",this.setSlotOpacity)}setSlotWidth(t){t.assignedNodes().length>0?t.style.minWidth="100%":t.style.minWidth="unset"}handleTouchEnd(){const t=this.scrollLeft-this.clientWidth;t<this.clientWidth/3*-1?this.dispatchEvent(new Event("swipe-left")):t>this.clientWidth/3&&this.dispatchEvent(new Event("swipe-right"))}setSlotOpacity(){var t,e;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector('slot[name="left"]'),i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('slot[name="right"]'),r=this.scrollLeft-this.clientWidth;o&&(o.style.opacity=-1*r/this.clientWidth*3>1?1:.5),i&&(i.style.opacity=1*r/this.clientWidth*3>1?1:.5)}getSlotOpacity(t){const e="left"===t?-1:1,o=(this.scrollLeft-this.clientWidth)*e/this.clientWidth*3;return o>1?1:o<0?0:o}}window.customElements.get("kor-swipe-actions")||window.customElements.define("kor-swipe-actions",B);var I=o(1),D=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class N extends T.a{static get styles(){return[z.a,T.b`
        :host {
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          background-color: rgba(var(--neutral-1), .1);
        }
        :host([slot="left"]) {
          justify-content: flex-start;
        }
        :host([slot="right"]) {
          justify-content: flex-end;
        }
        kor-icon {
          position: sticky;
        }
        :host([slot="left"]) kor-icon {
          left: 16px;
        }
        :host([slot="right"]) kor-icon {
          right: 16px;
        }
      `]}render(){return T.c`
      <kor-icon .icon="${this.icon}"></kor-icon>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"bg-color"===t&&o!==e&&(this.style.backgroundColor=o)}connectedCallback(){super.connectedCallback()}}D([Object(I.a)({reflect:!0})],N.prototype,"icon",void 0),D([Object(I.a)({reflect:!0,attribute:"bg-color"})],N.prototype,"bgColor",void 0),window.customElements.get("kor-swipe-action")||window.customElements.define("kor-swipe-action",N);var M=o(38),H=o(39),L=o(40),U=o(41),F=o(50),q=o(51),W=o(42),V=o(43),J=o(6),G=o(44),K=o(45),Z=o(46),X=o(47)}]);const r=globalThis.trustedTypes,n=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,s=`lit$${(Math.random()+"").slice(9)}$`,a="?"+s,l=`<${a}>`,c=document,d=(t="")=>c.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,g=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,v=/'/g,m=/"/g,y=/^(?:script|style|textarea)$/i,w=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),k=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),O=new WeakMap,E=(t,e,o)=>{var i,r;const n=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let s=n._$litPart$;if(void 0===s){const t=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;n._$litPart$=s=new C(e.insertBefore(d(),t),t,void 0,o)}return s.I(t),s},_=c.createTreeWalker(c,129,null,!1);class j{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let c=0,h=0;const p=t.length-1,w=this.parts,[k,x]=((t,e)=>{const o=t.length-1,i=[];let r,a=2===e?"<svg>":"",c=u;for(let e=0;e<o;e++){const o=t[e];let n,d,h=-1,p=0;for(;p<o.length&&(c.lastIndex=p,d=c.exec(o),null!==d);)p=c.lastIndex,c===u?"!--"===d[1]?c=b:void 0!==d[1]?c=g:void 0!==d[2]?(y.test(d[2])&&(r=RegExp("</"+d[2],"g")),c=f):void 0!==d[3]&&(c=f):c===f?">"===d[0]?(c=null!=r?r:u,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,n=d[1],c=void 0===d[3]?f:'"'===d[3]?m:v):c===m||c===v?c=f:c===b||c===g?c=u:(c=f,r=void 0);const w=c===f&&t[e+1].startsWith("/>")?" ":"";a+=c===u?o+l:h>=0?(i.push(n),o.slice(0,h)+"$lit$"+o.slice(h)+s+w):o+s+(-2===h?(i.push(void 0),e):w)}const d=a+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==n?n.createHTML(d):d,i]})(t,e);if(this.el=j.createElement(k,o),_.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=_.nextNode())&&w.length<p;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(s)){const o=x[h++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(s),e=/([.?@])?(.*)/.exec(o);w.push({type:1,index:c,name:e[2],strings:t,ctor:"."===e[1]?R:"?"===e[1]?A:"@"===e[1]?T:P})}else w.push({type:6,index:c})}for(const e of t)i.removeAttribute(e)}if(y.test(i.tagName)){const t=i.textContent.split(s),e=t.length-1;if(e>0){i.textContent=r?r.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],d()),_.nextNode(),w.push({type:2,index:++c});i.append(t[e],d())}}}else if(8===i.nodeType)if(i.data===a)w.push({type:2,index:c});else{let t=-1;for(;-1!==(t=i.data.indexOf(s,t+1));)w.push({type:7,index:c}),t+=s.length-1}c++}}static createElement(t,e){const o=c.createElement("template");return o.innerHTML=t,o}}function $(t,e,o=t,i){var r,n,s,a;if(e===k)return e;let l=void 0!==i?null===(r=o.Σi)||void 0===r?void 0:r[i]:o.Σo;const c=h(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,o,i)),void 0!==i?(null!==(s=(a=o).Σi)&&void 0!==s?s:a.Σi=[])[i]=l:o.Σo=l),void 0!==l&&(e=$(t,l.S(t,e.values),l,i)),e}class S{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:o},parts:i}=this.D,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(o,!0);_.currentNode=r;let n=_.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new C(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new z(n,this,t)),this.l.push(e),l=i[++a]}s!==(null==l?void 0:l.index)&&(n=_.nextNode(),s++)}return r}v(t){let e=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(t,o,e),e+=o.strings.length-2):o.I(t[e])),e++}}class C{constructor(t,e,o,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=o,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=$(this,t,e),h(t)?t===x||null==t||""===t?(this.H!==x&&this.R(),this.H=x):t!==this.H&&t!==k&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return p(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(c.createTextNode(t)),this.H=t}_(t){var e;const{values:o,_$litType$:i}=t,r="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=j.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===r)this.H.v(o);else{const t=new S(r,this),e=t.u(this.options);t.v(o),this.$(e),this.H=t}}C(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new j(t)),e}g(t){p(this.H)||(this.H=[],this.R());const e=this.H;let o,i=0;for(const r of t)i===e.length?e.push(o=new C(this.k(d()),this.k(d()),this,this.options)):o=e[i],o.I(r),i++;i<e.length&&(this.R(o&&o.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class P{constructor(t,e,o,i,r){this.type=1,this.H=x,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(x),this.strings=o):this.H=x}get tagName(){return this.element.tagName}I(t,e=this,o,i){const r=this.strings;let n=!1;if(void 0===r)t=$(this,t,e,0),n=!h(t)||t!==this.H&&t!==k,n&&(this.H=t);else{const i=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=$(this,i[o+s],e,s),a===k&&(a=this.H[s]),n||(n=!h(a)||a!==this.H[s]),a===x?t=x:t!==x&&(t+=(null!=a?a:"")+r[s+1]),this.H[s]=a}n&&!i&&this.W(t)}W(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends P{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===x?void 0:t}}class A extends P{constructor(){super(...arguments),this.type=4}W(t){t&&t!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class T extends P{constructor(){super(...arguments),this.type=5}I(t,e=this){var o;if((t=null!==(o=$(this,t,e,0))&&void 0!==o?o:x)===k)return;const i=this.H,r=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==x&&(i===x||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,o;"function"==typeof this.H?this.H.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,e,o){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=o}I(t){$(this,t)}}null===(e=(t=globalThis).litHtmlPlatformSupport)||void 0===e||e.call(t,j,C),(null!==(o=(i=globalThis).litHtmlVersions)&&void 0!==o?o:i.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol();class D{constructor(t,e){if(e!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return B&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const N=new Map,M=(t,...e)=>{const o=e.reduce(((e,o,i)=>e+(t=>{if(t instanceof D)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]);let i=N.get(o);return void 0===i&&N.set(o,i=new D(o,I)),i},H=(t,e)=>{B?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.appendChild(o)}))},L=B?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new D(t+"",I))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var U,F,q,W;const V={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},J=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:J};class K extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this.Πp(o,e);void 0!==i&&(this.Πm.set(i,o),t.push(i))})),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(L(t))}else void 0!==t&&e.push(L(t));return e}static"Πp"(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return H(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,o){this.K(t,o)}"Πj"(t,e,o=G){var i,r;const n=this.constructor.Πp(t,o);if(void 0!==n&&!0===o.reflect){const s=(null!==(r=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:V.toAttribute)(e,o.type);this.Πh=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this.Πh=null}}K(t,e){var o,i,r;const n=this.constructor,s=n.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=n.getPropertyOptions(s),a=t.converter,l=null!==(r=null!==(i=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==r?r:V.fromAttribute;this.Πh=s,this[s]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||J)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===o.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const o=this.L;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(o)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,X,Q,Y,tt,et;K.finalized=!0,K.shadowRootOptions={mode:"open"},null===(F=(U=globalThis).reactiveElementPlatformSupport)||void 0===F||F.call(U,{ReactiveElement:K}),(null!==(q=(W=globalThis).reactiveElementVersions)&&void 0!==q?q:W.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(Z=(et=globalThis).litElementVersions)&&void 0!==Z?Z:et.litElementVersions=[]).push("3.0.0-rc.1");class ot extends K{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();super.update(t),this.Φt=E(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return k}}ot.finalized=!0,ot._$litElement$=!0,null===(Q=(X=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(X,{LitElement:ot}),null===(tt=(Y=globalThis).litElementPlatformSupport)||void 0===tt||tt.call(Y,{LitElement:ot});var it={tab_strip:(t,e,o)=>w`
      <kor-tab-item id="summaryTab" label="Summary" active
        @active-changed="${i=>{i.target.active&&(Object.entries(e).map((t=>{t[1].style.display="none"})),Object.entries(o).map((t=>{t[1].style.display="none"})),Object.entries(t).map((t=>{t[1].style.display="block"})))}}">
      </kor-tab-item>
      <kor-tab-item id="transactionsTab" label="Transactions"
        @active-changed="${i=>{i.target.active&&(Object.entries(t).map((t=>{t[1].style.display="none"})),Object.entries(o).map((t=>{t[1].style.display="none"})),Object.entries(e).map((t=>{t[1].style.display="block"})))}}">
      </kor-tab-item>
      <kor-tab-item id="scheduleTab" label="Schedule"
        @active-changed="${i=>{i.target.active&&(Object.entries(t).map((t=>{t[1].style.display="none"})),Object.entries(e).map((t=>{t[1].style.display="none"})),Object.entries(o).map((t=>{t[1].style.display="block"})))}}">
      </kor-tab-item>`,object_entries_two_columns:t=>w`
      <kor-table columns="250px auto">
        <kor-table-row slot="header">
          <kor-table-cell head>Key</kor-table-cell>
          <kor-table-cell head>Value</kor-table-cell>
        </kor-table-row>
        ${t.map((t=>w`
            <kor-table-row>
              <kor-table-cell>${t[0]}</kor-table-cell>
              <kor-table-cell>${t[1]}</kor-table-cell>
            </kor-table-row>`))}
      </kor-table>`,error_notifications:t=>w`
      <kor-notifications position="top-right">
        <kor-notification-item icon="error" label="Error">
        ${t.map((t=>w`
            <kor-text size="body-1">${JSON.stringify(t)}</kor-text>`))}
        </kor-notification-item>
      </kor-notifications>`,success_notifications:t=>w`
      <kor-notifications position="top-right">
        <kor-notification-item icon="done" label="Success">
        ${t.map((t=>w`
            <kor-text size="body-1">${JSON.stringify(t)}</kor-text>`))}
        </kor-notification-item>
      </kor-notifications>`},rt={transactions:(t,e,o)=>w`
      <kor-grid columns="2">
        <kor-card grid-cols="1" grid-cols-m="2" grid-cols-s="2" flat>
          <kor-text size="header-1">Incoming transactions</kor-text>
          <kor-table columns="1fr auto">
            <kor-table-row slot="header">
              <kor-table-cell head>From address</kor-table-cell>
              <kor-table-cell head>Amount in ETH</kor-table-cell>
            </kor-table-row>
            ${t.map((t=>w`
                <kor-table-row @click="${e=>{o(t)}}">
                  <kor-table-cell>${t.attributes.from_address}</kor-table-cell>
                  <kor-table-cell>${(Number.parseInt(t.attributes.value)/Math.pow(10,18)).toFixed(18)}</kor-table-cell>
                </kor-table-row>`))}
          </kor-table>
        </kor-card>
        <kor-card grid-cols="1" grid-cols-m="2" grid-cols-s="2" flat>
          <kor-text size="header-1">Outgoing transactions</kor-text>
          <kor-table columns="1fr auto">
            <kor-table-row slot="header">
              <kor-table-cell head>To address</kor-table-cell>
              <kor-table-cell head>Amount in ETH</kor-table-cell>
            </kor-table-row>
            ${e.map((t=>w`
                <kor-table-row @click="${e=>{o(t)}}">
                  <kor-table-cell>${t.attributes.to_address}</kor-table-cell>
                  <kor-table-cell>${(Number.parseInt(t.attributes.value)/Math.pow(10,18)).toFixed(18)}</kor-table-cell>
                </kor-table-row>`))}
          </kor-table>
        </kor-card>
      </kor-grid>`,add_transaction:(t,e,o,i)=>w`
      <kor-radio-button label="Choose from own addresses"
        @active-changed="${t=>{const e=t.target.parentElement.querySelectorAll("kor-input")[0];t.target.active?(e.style.display="inherit",i.destination_address=e.value):e.style.display="none"}}">
      </kor-radio-button>
      <kor-input type="select" label="The own address will be used as destination" icon="view_list" style="display: none"
        @active-changed="${t=>{t.target.active&&(i.destination_address=t.target.value)}}"
      >
        ${e.map((t=>w`
            <kor-menu-item label="${t}"></kor-menu-item>`))}
      </kor-input>
      <kor-radio-button label="Choose from booked addresses"
        @active-changed="${t=>{const e=t.target.parentElement.querySelectorAll("kor-input")[1];t.target.active?(e.style.display="inherit",i.destination_address=e.value):e.style.display="none"}}">
      </kor-radio-button>
      <kor-input type="select" label="The booked address will be used as destination" icon="view_list" style="display: none"
        @active-changed="${t=>{t.target.active&&(i.destination_address=t.target.value)}}"
      >
        ${o.value.map((t=>w`
            <kor-menu-item label="${t}"></kor-menu-item>`))}
      </kor-input>
      <kor-radio-button label="Enter a new destination address" active
        @active-changed="${t=>{const e=t.target.parentElement.querySelectorAll("kor-input")[2];t.target.active?(e.style.display="inherit",i.destination_address=e.value):e.style.display="none"}}">
      </kor-radio-button>
      <kor-input label="The destination address:" type="text" value="" style="display: inherit"
        @active-changed="${t=>{t.target.active||(i.destination_address=t.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's amount in ETH:"
        type="number" value="0" min=0 max=${t}
        @active-changed="${t=>{t.target.active||(i.amount=t.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's gas price in GWEI:"
        type="number" value="${i.gas_price}" min=0
        @active-changed="${t=>{t.target.active||(i.gas_price=t.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's gas limit:"
        type="number" value="${i.gas_limit}" min=0
        @active-changed="${t=>{t.target.active||(i.gas_limit=t.target.value)}}">
      </kor-input>`},nt={check_transaction_data(t,e){let o=[];if(t.destination_address?/0x[0-9a-f]{40}/.test(t.destination_address)||(o=o.concat("The destination address has wrong format")):o=o.concat("The destination address is not filled"),(!t.amount||t.amount<=0)&&(o=o.concat("The amount is not filled")),t.gas_price||(success=!1,o=o.concat("The gas price is not filled")),t.gas_limit||(success=!1,o=o.concat("The gas limit is not filled")),o.length){E(it.error_notifications(o),e);e.querySelector("kor-notification-item").setAttribute("visible","true")}return!o.length},check_schedule_data(t,e){let o=[];if(t.start_date||(success=!1,o=o.concat("The start date is not filled")),t.start_time||(success=!1,o=o.concat("The start time is not filled")),o.length){E(it.error_notifications(o),e);e.querySelector("kor-notification-item").setAttribute("visible","true")}return!o.length},start_time_to_clock(t){let e=Math.trunc(t/60);const o=t%60;let i="AM";return e>=12&&(i="PM",e-=12),"0"==e.toFixed(0)&&(e=12),{hour:e,minute:o,am_pm:i}},initMetamaskChainSwitch(){const t=[{chainId:"0x5",chainName:"Goerli-Testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://goerli.infura.io/v3/undefined"],blockExplorerUrls:["https://goerli.etherscan.io"]},{chainId:"0x13881",chainName:"Mumbai-Testnet (Polygon-Matic)",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mumbai.maticvigil.com"],blockExplorerUrls:["https://explorer-mumbai.maticvigil.com"]},{chainId:"0x89",chainName:"Polygon (Matic) Network",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mainnet.maticvigil.com"],blockExplorerUrls:["https://explorer-mainnet.maticvigil.com"]}];return async e=>{const o=await window.ethereum.request({method:"wallet_addEthereumChain",params:[t[e]]}).catch();o&&console.log("The wallet_addEthereumChain",o)}},error_notifications(t,e){E(it.error_notifications(t),e);e.querySelector("kor-notification-item").setAttribute("visible","true")},success_notifications(t,e){E(it.success_notifications(t),e);e.querySelector("kor-notification-item").setAttribute("visible","true")},async get_current_address(){if(!window.ethereum)return null;const t=await window.ethereum.request({method:"eth_requestAccounts"});return Object.entries(t)[0][1]},send_transaction(t,e,o,i,r,n){return t&&t.send?t.send({from:e,gasPrice:parseInt(o)*Math.pow(10,9)},((t,e)=>{t&&(i=i.concat(Object.entries(t))),i.length&&(i=i.concat("The transaction hash == "+e.toString()),this.error_notifications(i,n))})).on("error",(t=>{(i=i.concat(Object.entries(t))).length&&this.error_notifications(i,n)})).on("transactionHash",(t=>{r=r.concat("The transaction hash == "+t.toString()),this.success_notifications(r,n)})).on("receipt",(t=>{r=r.concat("The contract address == "+t.contractAddress.toString()),this.success_notifications(r,n)})).on("confirmation",((t,e)=>{r=(r=r.concat("The confirmation number == "+t)).concat(Object.entries(e))})):(i=i.concat("An appropriate transaction object is not set"),this.error_notifications(i,n),null)}},st={add_schedule:t=>w`
      <kor-grid columns="4">
        <kor-text grid-cols="1" size="body-1">Start since:</kor-text>
        <input grid-cols="2" type="date"
          @change="${e=>{t.start_date=e.target.value}}"
        >
        <kor-text grid-cols="4" size="body-1">at 12:00 PM</kor-text>
        <kor-slider grid-cols="4" value="720" min="0" max="1440" step="1"
          @value-changed="${e=>{t.start_time=Number.parseInt(e.target.value);const o=nt.start_time_to_clock(t.start_time);e.target.parentElement.querySelectorAll("kor-text")[1].innerHTML="at "+o.hour.toFixed(0).padStart(2,"0")+":"+o.minute.toFixed(0).padStart(2,"0")+" "+o.am_pm}}"
        >
        </kor-slider>
        <kor-toggle grid-cols="4" label="Should be repeated"
          @active-changed="${e=>{const o=e.target.parentElement.querySelector("kor-card"),i=o.querySelector("kor-slider");e.target.active?(o.style.display="flex",t.interval_days=i.value):(o.style.display="none",t.interval_days=0)}}"
        >
        </kor-toggle>
        <kor-card grid-cols="4" style="display: none" flat>
          <kor-grid columns="1">
            <kor-text grid-cols="1" size="body-1">Repeat each 30 days</kor-text>
            <kor-slider grid-cols="1" value="30" min="0" max="366" step="1"
              @value-changed="${e=>{t.interval_days=Number.parseInt(e.target.value);e.target.parentElement.querySelector("kor-text").innerHTML="Repeat each "+t.interval_days.toFixed(0)+" days"}}"
            >
            </kor-slider>
          </kor-grid>
        </kor-card>
      </kor-grid>`,schedule_table:(t,e)=>w`
      <kor-card flat>
        <kor-text size="header-1">Schedule table</kor-text>
        <kor-table columns="repeat(5, 1fr) auto">
          <kor-table-row slot="header">
            <kor-table-cell head>To address</kor-table-cell>
            <kor-table-cell head>Amount in ETH</kor-table-cell>
            <kor-table-cell head sortable sorted sort-direction="desc">Start date</kor-table-cell>
            <kor-table-cell head>Start time</kor-table-cell>
            <kor-table-cell head>Days interval</kor-table-cell>
            <kor-table-cell head></kor-table-cell>
          </kor-table-row>
          ${t.value.map((o=>w`
              <kor-table-row>
                <kor-table-cell>${o.transaction_data.destination_address}</kor-table-cell>
                <kor-table-cell>${o.transaction_data.amount}</kor-table-cell>
                <kor-table-cell>${o.schedule_data.start_date}</kor-table-cell>
                <kor-table-cell>${(()=>{const t=nt.start_time_to_clock(o.schedule_data.start_time);return t.hour.toFixed(0).padStart(2,"0")+":"+t.minute.toFixed(0).padStart(2,"0")+" "+t.am_pm})()}</kor-table-cell>
                <kor-table-cell>${o.schedule_data.interval_days}</kor-table-cell>
                <kor-table-cell>
                  <kor-icon icon="delete" button
                    @click="${i=>{t.remove(o),setTimeout(e,500)}}"
                  ></kor-icon>
                </kor-table-cell>
              </kor-table-row>`))}
        </kor-table>
      </kor-card>`},at={Init(t,e,o,i,r,n,s,a,l){const c=a.querySelector("kor-card"),d=t=>{E(it.object_entries_two_columns(Object.entries(t.attributes)),c),a.setAttribute("visible","true")},h=async t=>{const o=new Moralis.Query("EthTransactions");o.equalTo("to_address",t.get("ethAddress"));const i=new Moralis.Query("EthTransactions");i.equalTo("from_address",t.get("ethAddress"));let r=await o.find();console.log("Incoming transactions: ",r);let n=await i.find();console.log("Out coming transactions: ",n),E(rt.transactions(r,n,d),e);const s=await o.subscribe(),a=await i.subscribe();s.on("create",(t=>{console.log("A new incoming transaction: ",t),r=r.concat(t),E(rt.transactions(r,n,d),e)})),a.on("create",(t=>{console.log("A new out coming transaction: ",t),n=n.concat(t),E(rt.transactions(r,n,d),e)})),l.metamask=await Moralis.Web3.enable(),console.log("web3_wrappers.metamask == ",l.metamask),l.matic=new Matic({network:"testnet",version:"mumbai",maticProvider:l.metamask,parentProvider:l.metamask,parentDefaultOptions:{from:t.get("ethAddress")},maticDefaultOptions:{from:t.get("ethAddress")}}),l.matic.initialize().then((async()=>{console.log("web3_wrappers.matic == ",l.matic)}))};return()=>{if(!i.getAttribute("login"))return Moralis.LiveQuery.close(),(async()=>{await Moralis.User.logOut(),E(w``,t),E(w``,e),E(w``,o),console.log("Logged out")})(),i.setAttribute("label","Login using Metamask"),i.setAttribute("login","true"),r.style.display="none",n.style.display="none",void(s.style.display="none");Moralis.Web3.authenticate().then((e=>{i.setAttribute("label","Log out"),i.removeAttribute("login"),r.style.display="block",n.style.display="block",s.style.display="block",E(it.object_entries_two_columns(Object.entries(e)),t),console.log("The current user: ",e),console.log("The current user password: ",e.password),console.log("The current user's EthAddress: ",e.get("ethAddress")),Moralis.Cloud.run("watchEthAddress",{address:e.get("ethAddress")}).then((t=>{console.log("The watchEthAddress results: ",t),h(e)})).catch((()=>{h(e)}))}))}}};class lt{constructor(){this.cached_value_=JSON.parse(window.localStorage.getItem(this.storage_name))}get storage_name(){return"LocalStorageBacked"}get storage_value(){return this.cached_value_=JSON.parse(window.localStorage.getItem(this.storage_name)),this.cached_value_}}class ct extends lt{constructor(){super(),this.cached_value_||(this.cached_value_={})}get storage_name(){return"BookedAddresses"}set value(t){let e={};t.map((t=>{Object.defineProperty(e,t.toString(),{enumerable:!0,writable:!0,configurable:!0,value:null})})),this.cached_value_=e,window.localStorage.setItem(this.storage_name,JSON.stringify(this.cached_value_))}get value(){return Object.keys(this.cached_value_)}add(t){Object.defineProperty(this.cached_value_,t.toString(),{enumerable:!0,writable:!0,configurable:!0,value:null}),this.value=this.value}remove(t){delete this.cached_value_.item,this.value=this.value}}class dt extends lt{constructor(){super(),this.cached_value_||(this.cached_value_=[])}get storage_name(){return"ScheduleTable"}set value(t){this.cached_value_=t,window.localStorage.setItem(this.storage_name,JSON.stringify(this.cached_value_))}get value(){return this.cached_value_}add(t){this.cached_value_=this.cached_value_.concat(t),this.value=this.value}remove(t){for(var e=0;e<this.cached_value_.length;e++)if(this.cached_value_[e]===t){1==this.cached_value_.length?this.cached_value_=[]:this.cached_value_=this.cached_value_.slice(0,e).concat(this.cached_value_.slice(e+1));break}this.value=this.value}}class ht extends lt{constructor(){super(),window.ethereum&&(this.web3_instance_=new Web3(window.ethereum),this.cached_value_&&(this.cached_value_=new this.web3_instance_.eth.Contract(this.cached_value_._jsonInterface,this.cached_value_._address)))}get storage_name(){return"ContractInstance"}get storage_value(){return super.storage_value(),this.cached_value_&&(this.cached_value_=new web3.eth.Contract(this.cached_value_._jsonInterface,this.cached_value_._address)),this.cached_value_}set value(t){window.localStorage.setItem(this.storage_name,JSON.stringify(t)),this.cached_value_=new this.web3_instance_.eth.Contract(t._jsonInterface,t._address)}get value(){return this.cached_value_}}function pt(t){return(pt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ut(t,e,o){return(ut="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=pt(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(o):r.value}})(t,e,o||t)}function bt(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return gt(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return gt(t,e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function gt(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}function ft(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function vt(t,e,o,i){var r=mt();if(i)for(var n=0;n<i.length;n++)r=i[n](r);var s=e((function(t){r.initializeInstanceElements(t,a.elements)}),o),a=r.decorateClass(function(t){for(var e=[],o=function(t){return"method"===t.kind&&t.key===n.key&&t.placement===n.placement},i=0;i<t.length;i++){var r,n=t[i];if("method"===n.kind&&(r=e.find(o)))if(xt(n.descriptor)||xt(r.descriptor)){if(kt(n)||kt(r))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");r.descriptor=n.descriptor}else{if(kt(n)){if(kt(r))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");r.decorators=n.decorators}wt(n,r)}else e.push(n)}return e}(s.d.map(yt)),t);return r.initializeClassElements(s.F,a.elements),r.runClassFinishers(s.F,a.finishers)}function mt(){mt=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(o){e.forEach((function(e){e.kind===o&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var o=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var r=e.placement;if(e.kind===i&&("static"===r||"prototype"===r)){var n="static"===r?t:o;this.defineClassElement(n,e)}}),this)}),this)},defineClassElement:function(t,e){var o=e.descriptor;if("field"===e.kind){var i=e.initializer;o={enumerable:o.enumerable,writable:o.writable,configurable:o.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,o)},decorateClass:function(t,e){var o=[],i=[],r={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,r)}),this),t.forEach((function(t){if(!kt(t))return o.push(t);var e=this.decorateElement(t,r);o.push(e.element),o.push.apply(o,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:o,finishers:i};var n=this.decorateConstructor(o,e);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(t,e,o){var i=e[t.placement];if(!o&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var o=[],i=[],r=t.decorators,n=r.length-1;n>=0;n--){var s=e[t.placement];s.splice(s.indexOf(t.key),1);var a=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,r[n])(a)||a);t=l.element,this.addElementPlacement(t,e),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);o.push.apply(o,c)}}return{element:t,finishers:i,extras:o}},decorateConstructor:function(t,e){for(var o=[],i=e.length-1;i>=0;i--){var r=this.fromClassDescriptor(t),n=this.toClassDescriptor((0,e[i])(r)||r);if(void 0!==n.finisher&&o.push(n.finisher),void 0!==n.elements){t=n.elements;for(var s=0;s<t.length-1;s++)for(var a=s+1;a<t.length;a++)if(t[s].key===t[a].key&&t[s].placement===t[a].placement)throw new TypeError("Duplicated element ("+t[s].key+")")}}return{elements:t,finishers:o}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){if(void 0!==t)return bt(t).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var o=ft(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var r=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var n={kind:e,key:o,placement:i,descriptor:Object.assign({},r)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),n.initializer=t.initializer),n},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:Ot(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var o=Ot(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:o}},runClassFinishers:function(t,e){for(var o=0;o<e.length;o++){var i=(0,e[o])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,o){if(void 0!==t[e])throw new TypeError(o+" can't have a ."+e+" property.")}};return t}function yt(t){var e,o=ft(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:o,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function wt(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function kt(t){return t.decorators&&t.decorators.length}function xt(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function Ot(t,e){var o=t[e];if(void 0!==o&&"function"!=typeof o)throw new TypeError("Expected '"+e+"' to be a function");return o}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,_t=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function jt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):_t(t,e)}vt([Et("dapp-deploy-contract")],(function(t,e){class o extends e{constructor(){super(),t(this),nt.get_current_address().then((t=>{this.owner_address||(this.owner_address=t)}))}}return{F:o,d:[{kind:"field",decorators:[jt({type:Boolean,reflect:!0})],key:"visible",value:()=>!1},{kind:"field",decorators:[jt({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[jt({type:String,reflect:!0})],key:"owner_address",value:()=>null},{kind:"field",decorators:[jt({type:Object,reflect:!1,noAccessor:!0})],key:"notification_container",value:()=>document.createElement("div")},{kind:"field",decorators:[jt({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[jt({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"contract_json_interface_",value:()=>null},{kind:"field",decorators:[jt({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"gas_price_gwei_",value:()=>1},{kind:"field",decorators:[jt({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"errors_",value:()=>[]},{kind:"field",decorators:[jt({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"successes_",value:()=>[]},{kind:"get",static:!0,key:"styles",value:function(){return M`
      .dark input[type="file"] {
        filter: invert(100%);
      }`}},{kind:"method",key:"render",value:function(){return w`
      <kor-modal icon="dashboard_customize" label="Let's deploy a smart contract" theme="${this.theme}"
        @visible-changed="${t=>{this.visible=t.target.visible}}"
      >
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card grid-cols="1" flat>
              <kor-input label="Gas price in GWEI" type="number" min=1 value="${this.gas_price_gwei_}"
                @change="${t=>{this.gas_price_gwei_=parseInt(t.target.value)}}"
              ></kor-input>
              <input type="file"
                @change="${t=>{const e=t.target,o=new FileReader;o.onloadend=()=>{if(!o.result)return this.errors_=this.errors_.concat("A file reading error"),void nt.error_notifications(this.errors_,this.notification_container);if(this.contract_json_interface_=JSON.parse(o.result),this.contract_json_interface_||(this.errors_=this.errors_.concat("The contract's JSON interface read error")),window.ethereum||(this.errors_=this.errors_.concat("A blockchain provider hasn't found in the window.ethereum, install Metamask please")),this.errors_.length)return void nt.error_notifications(this.errors_,this.notification_container);const t=new Web3(window.ethereum);if(this.contract_instance=new t.eth.Contract(this.contract_json_interface_.abi),!this.contract_instance)return this.errors_=this.errors_.concat("A contract instance creation error"),void nt.error_notifications(this.errors_,this.notification_container);const i=e.parentElement.parentElement.parentElement.parentElement.querySelectorAll("kor-button");Array.from(i).map((t=>{t.removeAttribute("disabled")}))};const i=e.files[0];if(!i)return this.errors_=this.errors_.concat("Please specify a file with a contract's JSON ABI and bytecode"),void nt.error_notifications(this.errors_,this.notification_container);o.readAsText(i)}}"
              >
            </kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Estimate a gas usage" color="Primary" slot="footer" disabled="true"
          @click="${t=>{this.contract_instance.deploy({data:this.contract_json_interface_.bytecode}).estimateGas(((t,e)=>{t&&(this.errors_=this.errors_.concat(t),nt.error_notifications(this.errors_,this.notification_container)),e&&(this.successes_=this.successes_.concat("The contract deployment will use ["+e+"] gas"),nt.success_notifications(this.successes_,this.notification_container))}))}}"
        ></kor-button>
        <kor-button label="Deploy the contract" color="Primary" slot="footer" disabled="true"
          @click="${t=>{if(!this.owner_address||42!=this.owner_address.toString().length)return this.errors_=this.errors_.concat("Please, fill a correct address from which the contract will be deployed"),void nt.error_notifications(this.errors_,this.notification_container);nt.send_transaction(this.contract_instance.deploy({data:this.contract_json_interface_.bytecode}),this.owner_address,this.gas_price_gwei_,this.errors_,this.successes_,this.notification_container).then((t=>{this.successes_=this.successes_.concat("The contract was deployed at address == "+t.options.address.toString()),nt.success_notifications(this.successes_,this.notification_container),this.contract_instance=t,this.dispatchEvent(new Event("contract-deployed",{bubbles:!0,composed:!0}))})),this.visible=!1}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"attributeChangedCallback",value:function(t,e,i){ut(pt(o.prototype),"attributeChangedCallback",this).call(this,t,e,i),this.shadowRoot&&("theme"==t&&this.shadowRoot.querySelector("input")&&("dark"==this.theme?this.shadowRoot.querySelector("input").classList.add("dark"):this.shadowRoot.querySelector("input").classList.remove("dark")),"visible"==t&&this.shadowRoot.querySelector("kor-modal")&&(1==this.visible?(this.errors_=[],this.successes_=[],this.shadowRoot.querySelector("kor-modal").setAttribute("visible",!0)):this.shadowRoot.querySelector("kor-modal").removeAttribute("visible"))),"owner_address"==t&&(this.successes_=this.successes_.concat("A contract will be deployed from that address == "+this.owner_address),nt.success_notifications(this.successes_,this.notification_container)),this.dispatchEvent(new Event(`${t}-changed`))}}]}}),ot),vt([Et("dapp-create-subscription-product")],(function(t,e){class o extends e{constructor(){super(),t(this),nt.get_current_address().then((t=>{this.vendor_address||(this.vendor_address=t)}))}}return{F:o,d:[{kind:"field",decorators:[jt({type:Boolean,reflect:!0})],key:"visible",value:()=>!1},{kind:"field",decorators:[jt({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[jt({type:String,reflect:!0})],key:"vendor_address",value:()=>null},{kind:"field",decorators:[jt({type:Number,reflect:!0})],key:"productID",value:()=>null},{kind:"field",decorators:[jt({type:Object,reflect:!1,noAccessor:!0})],key:"notification_container",value:()=>document.createElement("div")},{kind:"field",decorators:[jt({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[jt({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"amount_gwei_",value:()=>1},{kind:"field",decorators:[jt({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"billing_interval_secs_",value:()=>1},{kind:"field",decorators:[jt({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"gas_price_gwei_",value:()=>1},{kind:"field",decorators:[jt({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"errors_",value:()=>[]},{kind:"field",decorators:[jt({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"successes_",value:()=>[]},{kind:"method",key:"render",value:function(){return w`
      <kor-modal icon="book_online" label="Add a new product" theme="${this.theme}"
        @visible-changed="${t=>{this.visible=t.target.visible}}"
      >
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card grid-cols="1" flat>
              <kor-input label="Amount in GWEI" type="number" min=1 value="${this.amount_gwei_}"
                @change="${t=>{this.amount_gwei_=parseInt(t.target.value)}}"
              ></kor-input>
              <kor-input label="Billing interval in seconds" type="number" min=1 value="${this.billing_interval_secs_}"
                @change="${t=>{this.billing_interval_secs_=parseInt(t.target.value)}}"
              ></kor-input>
              <kor-input label="Gas price in GWEI" type="number" min=1 value="${this.gas_price_gwei_}"
                @change="${t=>{this.gas_price_gwei_=parseInt(t.target.value)}}"
              ></kor-input>
            </kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Create" color="Primary" slot="footer"
          @click="${t=>{if(!this.contract_instance)return this.errors_=this.errors_.concat("Please set a contract instance into this component"),void nt.error_notifications(this.errors_,this.notification_container);nt.send_transaction(this.contract_instance.methods.createSubscriptionProduct(this.amount_gwei_*Math.pow(10,9),this.billing_interval_secs_),this.vendor_address,this.gas_price_gwei_,this.errors_,this.successes_,this.notification_container).then((t=>{this.successes_=this.successes_.concat(JSON.stringify(t)),nt.success_notifications(this.successes_,this.notification_container),console.log(t),this.productID=t.events.subscriptionProductCreated.returnValues.productID,this.dispatchEvent(new Event("subscription-product-created",{bubbles:!0,composed:!0}))})),this.visible=!1}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"attributeChangedCallback",value:function(t,e,i){ut(pt(o.prototype),"attributeChangedCallback",this).call(this,t,e,i),this.shadowRoot&&"visible"==t&&this.shadowRoot.querySelector("kor-modal")&&(1==this.visible?(this.errors_=[],this.successes_=[],this.shadowRoot.querySelector("kor-modal").setAttribute("visible",!0)):this.shadowRoot.querySelector("kor-modal").removeAttribute("visible")),this.dispatchEvent(new Event(`${t}-changed`))}}]}}),ot);const $t=(()=>{const t={tmpl:document.getElementById("appTemplate").content},e={content:t.tmpl.querySelector("kor-page"),notification:t.tmpl.getElementById("pageNotification"),top_bar:t.tmpl.querySelector("kor-app-bar"),menu:{button:t.tmpl.getElementById("appMenu"),tooltip:t.tmpl.getElementById("appMenuTooltip"),popover:{content:t.tmpl.getElementById("appMenuPopover"),login:t.tmpl.getElementById("loginMenuItem"),prefs:t.tmpl.getElementById("prefsMenuItem")}},add_transaction:t.tmpl.getElementById("addTransaction"),switch_chain:t.tmpl.getElementById("switchChain"),deposit_ethers:t.tmpl.getElementById("depositEthers"),deploy_contract:t.tmpl.getElementById("deployContract"),create_subscription_product:t.tmpl.getElementById("createSubscriptionProduct"),add_transaction_tooltip:t.tmpl.getElementById("addTransactionTooltip"),summary:{content:t.tmpl.getElementById("summaryContent"),details:t.tmpl.getElementById("summaryDetails")},transactions:{content:t.tmpl.getElementById("transactionsContent"),details:t.tmpl.getElementById("transactionsDetails"),filter_button:t.tmpl.getElementById("transactionsFilterButton")},schedule:{content:t.tmpl.getElementById("scheduleContent"),details:t.tmpl.getElementById("scheduleDetails"),add_button:t.tmpl.getElementById("scheduleAddButton")},tab_strip:t.tmpl.querySelector("kor-tabs")},o={window:t.tmpl.getElementById("addTransactionModal"),notification:t.tmpl.getElementById("addTransactionModalNotification"),content:t.tmpl.getElementById("addTransactionModalContent"),button:t.tmpl.getElementById("addTransactionModalButton")},i=t.tmpl.getElementById("transactionDetailsModal"),r={window:t.tmpl.getElementById("addScheduleModal"),notification:t.tmpl.getElementById("addScheduleModalNotification"),transactions_content:t.tmpl.getElementById("addScheduleModalTransactionContent"),schedule_content:t.tmpl.getElementById("addScheduleModalScheduleContent"),button:t.tmpl.getElementById("addScheduleModalButton")},n={window:t.tmpl.getElementById("depositEthersModal"),notification:t.tmpl.getElementById("depositEthersModalNotification"),value:t.tmpl.getElementById("depositEthersModalValue"),button:t.tmpl.getElementById("depositEthersModalButton")},s=t.tmpl.querySelector("dapp-deploy-contract");s.notification_container=e.notification;const a=t.tmpl.querySelector("dapp-create-subscription-product");if(a.notification_container=e.notification,E(it.tab_strip(e.summary,e.transactions,e.schedule),e.tab_strip),e.content&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){e.content.setAttribute("theme","dark"),o.window.setAttribute("theme","dark"),i.setAttribute("theme","dark"),r.window.setAttribute("theme","dark"),n.window.setAttribute("theme","dark");const t=document.createElement("style");t.innerHTML='\n      input[type="date"] {\n        background: transparent;\n        color: white;\n      }\n      input[type="date"]::-webkit-calendar-picker-indicator {\n        filter: invert(100%);\n      }',document.body.appendChild(t),s.setAttribute("theme","dark"),a.setAttribute("theme","dark")}let l=new ht;a.contract_instance=l.value,e.deploy_contract.addEventListener("click",(()=>{s.setAttribute("visible","true")})),s.addEventListener("contract-deployed",(()=>{l.value=s.contract_instance,console.log("A contract deployed, the contract_instance == ",s.contract_instance)})),e.create_subscription_product.addEventListener("click",(()=>{a.setAttribute("visible","true")})),a.addEventListener("subscription-product-created",(()=>{console.log("The subscription product created with ID == ",a.productID)})),e.menu.button.addEventListener("click",(()=>{e.menu.tooltip.setAttribute("visible","false")}));let c={};e.menu.popover.login.setAttribute("login","true");const d=at.Init(e.summary.details,e.transactions.details,e.schedule.details,e.menu.popover.login,e.add_transaction,e.switch_chain,e.deposit_ethers,i,c);e.menu.popover.login.addEventListener("click",(()=>{e.menu.popover.content.removeAttribute("visible"),d()}));let h={gas_price:1,gas_limit:21e3},p=new ct;e.add_transaction.addEventListener("click",(()=>{e.add_transaction_tooltip.setAttribute("visible","false"),E(rt.add_transaction(6,[],p,h),o.content),o.window.setAttribute("visible","true")})),o.window.addEventListener("visible-changed",(t=>{if(!t.target.visible){const t=o.notification.querySelector("kor-notification-item");t&&t.removeAttribute("visible")}})),o.button.addEventListener("click",(()=>{if(nt.check_transaction_data(h,o.notification)&&(o.window.removeAttribute("visible"),console.log("The transaction's destination_address == ",h.destination_address),console.log("The transaction's amount == ",h.amount),h.destination_address&&h.amount>0)){const t={from:Moralis.User.current().get("ethAddress"),to:h.destination_address,value:h.amount*Math.pow(10,18),gasPrice:h.gas_price*Math.pow(10,9),gas:h.gas_limit};console.log("The transactionObject == ",t),c.metamask.eth.sendTransaction(t,((t,o)=>{if(console.log("The sendTransaction error == ",t),console.log("The sendTransaction result == ",o),!t){p.add(h.destination_address),E(it.success_notifications(["The transaction was sent and will be shown in the Transactions tab after processing"]),e.notification);e.notification.querySelector("kor-notification-item").setAttribute("visible","true")}let i={};Object.assign(i,h),h=i}))}}));let u={},b=new dt;const g=()=>{E(st.schedule_table(b,g),e.schedule.details)};g(),e.schedule.add_button.addEventListener("click",(()=>{E(rt.add_transaction(6,[],p,h),r.transactions_content),E(st.add_schedule(u),r.schedule_content),r.window.setAttribute("visible","true")})),r.window.addEventListener("visible-changed",(t=>{if(!t.target.visible){const t=r.notification.querySelector("kor-notification-item");t&&t.removeAttribute("visible")}})),r.button.addEventListener("click",(()=>{if(!nt.check_transaction_data(h,r.notification))return;if(!nt.check_schedule_data(u,r.notification))return;const t={transaction_data:h,schedule_data:u};b.add(t),r.window.removeAttribute("visible"),E(st.schedule_table(b,g),e.schedule.details);let o={};Object.assign(o,h),h=o,o={},Object.assign(o,u),u=o}));const f=nt.initMetamaskChainSwitch();return e.switch_chain.addEventListener("click",(()=>{f(1)})),e.deposit_ethers.addEventListener("click",(()=>{n.window.setAttribute("visible","true")})),n.button.addEventListener("click",(()=>{n.window.removeAttribute("visible"),c.matic.depositEther(parseFloat(n.value.value)*Math.pow(10,18),{from:Moralis.User.current().get("ethAddress"),gasPrice:10*Math.pow(10,9),gasLimit:2e5}).then((t=>{console.log("The deposit ethers response == ",t)}))})),fetch("https://webatix.github.io/test/smart-contract/deployed-instance.json").then((t=>{t.ok&&t.json().then((t=>{l.value=t,console.log("The fetched deployed contract instance == ",l.value)}))})),t})();document.addEventListener("DOMContentLoaded",(()=>{Moralis.initialize("pnj2ou0ivNkr2xnWIQIKZjwhcbJgC6hO69CasCTS"),Moralis.serverURL="https://kcmeib0ovv6c.moralis.io:2053/server";const t=document.getElementsByTagName("body")[0];t.removeChild(document.getElementById("startupContent")),t.appendChild($t.tmpl)}));
//# sourceMappingURL=bundle.js.map
