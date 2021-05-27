function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function t(o,n,i){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,o,n){var i=function(t,o){for(;!Object.prototype.hasOwnProperty.call(t,o)&&null!==(t=e(t)););return t}(t,o);if(i){var r=Object.getOwnPropertyDescriptor(i,o);return r.get?r.get.call(n):r.value}})(o,n,i||o)}function o(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function i(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function r(e,t,o,n){var i=s();if(n)for(var r=0;r<n.length;r++)i=n[r](i);var h=t((function(e){i.initializeInstanceElements(e,p.elements)}),o),p=i.decorateClass(function(e){for(var t=[],o=function(e){return"method"===e.kind&&e.key===r.key&&e.placement===r.placement},n=0;n<e.length;n++){var i,r=e[n];if("method"===r.kind&&(i=t.find(o)))if(d(r.descriptor)||d(i.descriptor)){if(l(r)||l(i))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");i.descriptor=r.descriptor}else{if(l(r)){if(l(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");i.decorators=r.decorators}a(r,i)}else t.push(r)}return t}(h.d.map(c)),e);return i.initializeClassElements(h.F,p.elements),i.runClassFinishers(h.F,p.finishers)}function s(){s=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(o){t.forEach((function(t){t.kind===o&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var o=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var r="static"===i?e:o;this.defineClassElement(r,t)}}),this)}),this)},defineClassElement:function(e,t){var o=t.descriptor;if("field"===t.kind){var n=t.initializer;o={enumerable:o.enumerable,writable:o.writable,configurable:o.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,o)},decorateClass:function(e,t){var o=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!l(e))return o.push(e);var t=this.decorateElement(e,i);o.push(t.element),o.push.apply(o,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:o,finishers:n};var r=this.decorateConstructor(o,t);return n.push.apply(n,r.finishers),r.finishers=n,r},addElementPlacement:function(e,t,o){var n=t[e.placement];if(!o&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var o=[],n=[],i=e.decorators,r=i.length-1;r>=0;r--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var c=this.fromElementDescriptor(e),a=this.toElementFinisherExtras((0,i[r])(c)||c);e=a.element,this.addElementPlacement(e,t),a.finisher&&n.push(a.finisher);var l=a.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);o.push.apply(o,l)}}return{element:e,finishers:n,extras:o}},decorateConstructor:function(e,t){for(var o=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),r=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==r.finisher&&o.push(r.finisher),void 0!==r.elements){e=r.elements;for(var s=0;s<e.length-1;s++)for(var c=s+1;c<e.length;c++)if(e[s].key===e[c].key&&e[s].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:o}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return o(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var o=i(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var r=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:o,placement:n,descriptor:Object.assign({},r)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(r,"get","The property descriptor of a field descriptor"),this.disallowProperty(r,"set","The property descriptor of a field descriptor"),this.disallowProperty(r,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:h(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var o=h(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:o}},runClassFinishers:function(e,t){for(var o=0;o<t.length;o++){var n=(0,t[o])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,o){if(void 0!==e[t])throw new TypeError(o+" can't have a ."+t+" property.")}};return e}function c(e){var t,o=i(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:o,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function h(e,t){var o=e[t];if(void 0!==o&&"function"!=typeof o)throw new TypeError("Expected '"+t+"' to be a function");return o}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var p,u,b,f;const g=globalThis.trustedTypes,v=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,m="?"+_,y=`<${m}>`,k=document,w=(e="")=>k.createComment(e),x=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,C=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,P=/"/g,A=/^(?:script|style|textarea)$/i,T=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),R=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),N=new WeakMap,B=(e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let s=r._$litPart$;if(void 0===s){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=s=new L(t.insertBefore(w(),e),e,void 0,o)}return s.I(e),s},D=k.createTreeWalker(k,129,null,!1);class I{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const s=e.length-1,c=this.parts,[a,l]=((e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",s=S;for(let t=0;t<o;t++){const o=e[t];let c,a,l=-1,d=0;for(;d<o.length&&(s.lastIndex=d,a=s.exec(o),null!==a);)d=s.lastIndex,s===S?"!--"===a[1]?s=j:void 0!==a[1]?s=C:void 0!==a[2]?(A.test(a[2])&&(i=RegExp("</"+a[2],"g")),s=$):void 0!==a[3]&&(s=$):s===$?">"===a[0]?(s=null!=i?i:S,l=-1):void 0===a[1]?l=-2:(l=s.lastIndex-a[2].length,c=a[1],s=void 0===a[3]?$:'"'===a[3]?P:E):s===P||s===E?s=$:s===j||s===C?s=S:(s=$,i=void 0);const h=s===$&&e[t+1].startsWith("/>")?" ":"";r+=s===S?o+y:l>=0?(n.push(c),o.slice(0,l)+"$lit$"+o.slice(l)+_+h):o+_+(-2===l?(n.push(void 0),t):h)}const c=r+(e[o]||"<?>")+(2===t?"</svg>":"");return[void 0!==v?v.createHTML(c):c,n]})(e,t);if(this.el=I.createElement(a,o),D.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=D.nextNode())&&c.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(_)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(_),t=/([.?@])?(.*)/.exec(o);c.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?H:"?"===t[1]?q:"@"===t[1]?V:U})}else c.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(A.test(n.tagName)){const e=n.textContent.split(_),t=e.length-1;if(t>0){n.textContent=g?g.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],w()),D.nextNode(),c.push({type:2,index:++i});n.append(e[t],w())}}}else if(8===n.nodeType)if(n.data===m)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(_,e+1));)c.push({type:7,index:i}),e+=_.length-1}i++}}static createElement(e,t){const o=k.createElement("template");return o.innerHTML=e,o}}function M(e,t,o=e,n){var i,r,s,c;if(t===R)return t;let a=void 0!==n?null===(i=o.Σi)||void 0===i?void 0:i[n]:o.Σo;const l=x(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(r=null==a?void 0:a.O)||void 0===r||r.call(a,!1),void 0===l?a=void 0:(a=new l(e),a.T(e,o,n)),void 0!==n?(null!==(s=(c=o).Σi)&&void 0!==s?s:c.Σi=[])[n]=a:o.Σo=a),void 0!==a&&(t=M(e,a.S(e,t.values),a,n)),t}class F{constructor(e,t){this.l=[],this.N=void 0,this.D=e,this.M=t}u(e){var t;const{el:{content:o},parts:n}=this.D,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:k).importNode(o,!0);D.currentNode=i;let r=D.nextNode(),s=0,c=0,a=n[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new L(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new W(r,this,e)),this.l.push(t),a=n[++c]}s!==(null==a?void 0:a.index)&&(r=D.nextNode(),s++)}return i}v(e){let t=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(e,o,t),t+=o.strings.length-2):o.I(e[t])),t++}}class L{constructor(e,t,o,n){this.type=2,this.N=void 0,this.A=e,this.B=t,this.M=o,this.options=n}setConnected(e){var t;null===(t=this.P)||void 0===t||t.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,t=this){e=M(this,e,t),x(e)?e===z||null==e||""===e?(this.H!==z&&this.R(),this.H=z):e!==this.H&&e!==R&&this.m(e):void 0!==e._$litType$?this._(e):void 0!==e.nodeType?this.$(e):(e=>{var t;return O(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.g(e):this.m(e)}k(e,t=this.B){return this.A.parentNode.insertBefore(e,t)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){const t=this.A.nextSibling;null!==t&&3===t.nodeType&&(null===this.B?null===t.nextSibling:t===this.B.previousSibling)?t.data=e:this.$(k.createTextNode(e)),this.H=e}_(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this.C(e):(void 0===n.el&&(n.el=I.createElement(n.h,this.options)),n);if((null===(t=this.H)||void 0===t?void 0:t.D)===i)this.H.v(o);else{const e=new F(i,this),t=e.u(this.options);e.v(o),this.$(t),this.H=e}}C(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new I(e)),t}g(e){O(this.H)||(this.H=[],this.R());const t=this.H;let o,n=0;for(const i of e)n===t.length?t.push(o=new L(this.k(w()),this.k(w()),this,this.options)):o=t[n],o.I(i),n++;n<t.length&&(this.R(o&&o.B.nextSibling,n),t.length=n)}R(e=this.A.nextSibling,t){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,t);e&&e!==this.B;){const t=e.nextSibling;e.remove(),e=t}}}class U{constructor(e,t,o,n,i){this.type=1,this.H=z,this.N=void 0,this.V=void 0,this.element=e,this.name=t,this.M=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(z),this.strings=o):this.H=z}get tagName(){return this.element.tagName}I(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=M(this,e,t,0),r=!x(e)||e!==this.H&&e!==R,r&&(this.H=e);else{const n=e;let s,c;for(e=i[0],s=0;s<i.length-1;s++)c=M(this,n[o+s],t,s),c===R&&(c=this.H[s]),r||(r=!x(c)||c!==this.H[s]),c===z?e=z:e!==z&&(e+=(null!=c?c:"")+i[s+1]),this.H[s]=c}r&&!n&&this.W(e)}W(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class H extends U{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===z?void 0:e}}class q extends U{constructor(){super(...arguments),this.type=4}W(e){e&&e!==z?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends U{constructor(){super(...arguments),this.type=5}I(e,t=this){var o;if((e=null!==(o=M(this,e,t,0))&&void 0!==o?o:z)===R)return;const n=this.H,i=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==z&&(n===z||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var t,o;"function"==typeof this.H?this.H.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this.H.handleEvent(e)}}class W{constructor(e,t,o){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=t,this.options=o}I(e){M(this,e)}}null===(u=(p=globalThis).litHtmlPlatformSupport)||void 0===u||u.call(p,I,L),(null!==(b=(f=globalThis).litHtmlVersions)&&void 0!==b?b:f.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(e,t){if(t!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return J&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const X=new Map,Z=(e,...t)=>{const o=t.reduce(((t,o,n)=>t+(e=>{if(e instanceof K)return e.cssText;if("number"==typeof e)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[n+1]),e[0]);let n=X.get(o);return void 0===n&&X.set(o,n=new K(o,G)),n},Q=(e,t)=>{J?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style");o.textContent=t.cssText,e.appendChild(o)}))},Y=J?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new K(e+"",G))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ee,te,oe,ne;const ie={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},re=(e,t)=>t!==e&&(t==t||e==e),se={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:re};class ce extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(e){var t;null!==(t=this.v)&&void 0!==t||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this.Πp(o,t);void 0!==n&&(this.Πm.set(n,o),e.push(n))})),e}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||se}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Y(e))}else void 0!==e&&t.push(Y(e));return t}static"Πp"(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this.Πg=new Promise((e=>this.enableUpdating=e)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(e=this.constructor.v)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this.ΠU)&&void 0!==t?t:this.ΠU=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this.ΠU)||void 0===t||t.splice(this.ΠU.indexOf(e)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this.Πi.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return Q(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})),this.Πo=new Promise((e=>this.Πl=e))}attributeChangedCallback(e,t,o){this.K(e,o)}"Πj"(e,t,o=se){var n,i;const r=this.constructor.Πp(e,o);if(void 0!==r&&!0===o.reflect){const s=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:ie.toAttribute)(t,o.type);this.Πh=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this.Πh=null}}K(e,t){var o,n,i;const r=this.constructor,s=r.Πm.get(e);if(void 0!==s&&this.Πh!==s){const e=r.getPropertyOptions(s),c=e.converter,a=null!==(i=null!==(n=null===(o=c)||void 0===o?void 0:o.fromAttribute)&&void 0!==n?n:"function"==typeof c?c:null)&&void 0!==i?i:ie.fromAttribute;this.Πh=s,this[s]=a(t,e.type),this.Πh=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||re)(this[e],t)?(this.L.has(e)||this.L.set(e,t),!0===o.reflect&&this.Πh!==e&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const e=this.performUpdate();return null!=e&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((e,t)=>this[t]=e)),this.Πi=void 0);let t=!1;const o=this.L;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this.Π$()}catch(e){throw t=!1,this.Π$(),e}t&&this.E(o)}willUpdate(e){}E(e){var t;null===(t=this.ΠU)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(e){return!0}update(e){void 0!==this.Πk&&(this.Πk.forEach(((e,t)=>this.Πj(t,this[t],e))),this.Πk=void 0),this.Π$()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ae,le,de,he,pe,ue;ce.finalized=!0,ce.shadowRootOptions={mode:"open"},null===(te=(ee=globalThis).reactiveElementPlatformSupport)||void 0===te||te.call(ee,{ReactiveElement:ce}),(null!==(oe=(ne=globalThis).reactiveElementVersions)&&void 0!==oe?oe:ne.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(ae=(ue=globalThis).litElementVersions)&&void 0!==ae?ae:ue.litElementVersions=[]).push("3.0.0-rc.1");class be extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();super.update(e),this.Φt=B(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!1)}render(){return R}}be.finalized=!0,be._$litElement$=!0,null===(de=(le=globalThis).litElementHydrateSupport)||void 0===de||de.call(le,{LitElement:be}),null===(pe=(he=globalThis).litElementPlatformSupport)||void 0===pe||pe.call(he,{LitElement:be});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ge=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function ve(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):ge(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function me(e,t){return _e({descriptor:o=>{const n={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o;return void 0===this[t]&&(this[t]=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e)),this[t]}}return n}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(e){return _e({descriptor:t=>({get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e)},enumerable:!0,configurable:!0})})}!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=45)}([function(e,t,o){o.d(t,"c",(function(){return X})),o.d(t,"e",(function(){return Q})),o.d(t,"d",(function(){return F})),o.d(t,"b",(function(){return oe})),o.d(t,"a",(function(){return ie}));const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,c=new RegExp(`${r}|${s}`),a="$lit$";class l{constructor(e,t){this.parts=[],this.element=t;const o=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let s=0,l=-1,h=0;const{strings:b,values:{length:f}}=e;for(;h<f;){const e=i.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let n=0;for(let e=0;e<o;e++)d(t[e].name,a)&&n++;for(;n-- >0;){const t=b[h],o=u.exec(t)[2],n=o.toLowerCase()+a,i=e.getAttribute(n);e.removeAttribute(n);const r=i.split(c);this.parts.push({type:"attribute",index:l,name:o,strings:r}),h+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const n=e.parentNode,i=t.split(c),r=i.length-1;for(let t=0;t<r;t++){let o,r=i[t];if(""===r)o=p();else{const e=u.exec(r);null!==e&&d(e[2],a)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),o=document.createTextNode(r)}n.insertBefore(o,e),this.parts.push({type:"node",index:++l})}""===i[r]?(n.insertBefore(p(),e),o.push(e)):e.data=i[r],h+=r}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&l!==s||(l++,t.insertBefore(p(),e)),s=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(o.push(e),l--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),h++}}else i.currentNode=n.pop()}for(const e of o)e.parentNode.removeChild(e)}}const d=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},h=e=>-1!==e.index,p=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function b(e,t){const{element:{content:o},parts:n}=e,i=document.createTreeWalker(o,133,null,!1);let r=g(n),s=n[r],c=-1,a=0;const l=[];let d=null;for(;i.nextNode();){c++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&a++;void 0!==s&&s.index===c;)s.index=null!==d?-1:s.index-a,r=g(n,r),s=n[r]}l.forEach((e=>e.parentNode.removeChild(e)))}const f=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},g=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(h(t))return o}return-1},v=new WeakMap,_=e=>"function"==typeof e&&v.has(e),m={},y={};class k{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,s=0,c=0,a=i.nextNode();for(;s<o.length;)if(r=o[s],h(r)){for(;c<r.index;)c++,"TEMPLATE"===a.nodeName&&(t.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=t.pop(),a=i.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),x=` ${r} `;class O{constructor(e,t,o,n){this.strings=e,this.values=t,this.type=o,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");o=(i>-1||o)&&-1===e.indexOf("--\x3e",i+1);const c=u.exec(e);t+=null===c?e+(o?x:s):e.substr(0,c.index)+c[1]+c[2]+a+c[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),j=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new $(this)}_getValue(){const e=this.strings,t=e.length-1,o=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=o[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!j(e))return e}let n="";for(let i=0;i<t;i++){n+=e[i];const t=o[i];if(void 0!==t){const e=t.value;if(S(e)||!j(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||S(e)&&e===this.value||(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof O?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):j(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof k&&this.value.template===t)this.value.update(e.values);else{const o=new k(t,e.processor,this.options),n=o._clone();o.update(e.values),this.__commitNode(n),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,n=0;for(const i of e)o=t[n],void 0===o&&(o=new E(this.options),t.push(o),0===n?o.appendIntoPart(this):o.insertAfterPart(t[n-1])),o.setValue(i),o.commit(),n++;n<t.length&&(t.length=n,this.clear(o&&o.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class A extends C{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends ${}let R=!1;(()=>{try{const e={get capture(){return R=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class z{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=N(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const N=e=>e&&(R?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function B(e){let t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const n=e.strings.join(r);return o=t.keyString.get(n),void 0===o&&(o=new l(e,e.getTemplateElement()),t.keyString.set(n,o)),t.stringsArray.set(e.strings,o),o}const D=new Map,I=new WeakMap,M=new class{handleAttributeExpressions(e,t,o,n){const i=t[0];return"."===i?new A(e,t.slice(1),o).parts:"@"===i?[new z(e,t.slice(1),n.eventContext)]:"?"===i?[new P(e,t.slice(1),o)]:new C(e,t,o).parts}handleTextExpression(e){return new E(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const F=(e,...t)=>new O(e,t,"html",M),L=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const H=e=>t=>{const o=L(t.type,e);let n=D.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},D.set(o,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(r);if(i=n.keyString.get(s),void 0===i){const o=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(o,e),i=new l(t,o),n.keyString.set(s,i)}return n.stringsArray.set(t.strings,i),i},q=["html","svg"],V=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J};class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,o)=>{const n=this._attributeNameForProperty(o,t);void 0!==n&&(this._attributeToPropertyMap.set(n,o),e.push(n))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=G){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdateInternal(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||G}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=J){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,n=t.converter||W,i="function"==typeof n?n:n.fromAttribute;return i?i(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,n=t.converter;return(n&&n.toAttribute||W.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=G){const n=this.constructor,i=n._attributeNameForProperty(e,o);if(void 0!==i){const e=n._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,n=o._attributeToPropertyMap.get(e);if(void 0!==n){const e=o.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,o){let n=!0;if(void 0!==e){const i=this.constructor;o=o||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}K.finalized=!0;const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(o){o.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function Q(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):Z(e,t)}const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oe=(e,...t)=>{const o=t.reduce(((t,o,n)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[n+1]),e[0]);return new te(o,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ne={};class ie extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,o)=>e.reduceRight(((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e)),o),o=t(e,new Set),n=[];o.forEach((e=>n.unshift(e))),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!Y){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new te(String(t),ee)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ne}}ie.finalized=!0,ie.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const n=o.scopeName,r=I.has(t),s=U&&11===t.nodeType&&!!t.host,c=s&&!V.has(n),a=c?document.createDocumentFragment():t;if(((e,t,o)=>{let n=I.get(t);void 0===n&&(i(t,t.firstChild),I.set(t,n=new E(Object.assign({templateFactory:B},o))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:H(n)},o)),c){const e=I.get(a);I.delete(a);((e,t,o)=>{V.add(e);const n=o?o.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{q.forEach((t=>{const o=D.get(L(t,e));void 0!==o&&o.keyString.forEach((e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{o.add(e)})),b(e,o)}))}))})(e);const c=n.content;o?function(e,t,o=null){const{element:{content:n},parts:i}=e;if(null==o)return void n.appendChild(t);const r=document.createTreeWalker(n,133,null,!1);let s=g(i),c=0,a=-1;for(;r.nextNode();)for(a++,r.currentNode===o&&(c=f(t),o.parentNode.insertBefore(t,o));-1!==s&&i[s].index===a;){if(c>0){for(;-1!==s;)i[s].index+=c,s=g(i,s);return}s=g(i,s)}}(o,s,c.firstChild):c.insertBefore(s,c.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const a=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(o){c.insertBefore(s,c.firstChild);const e=new Set;e.add(s),b(o,e)}})(n,a,e.value instanceof k?e.value.template:void 0),i(t,t.firstChild),t.appendChild(a),I.set(t,e)}!r&&s&&window.ShadyCSS.styleElement(t.host)}},function(e,t,o){o.d(t,"a",(function(){return n}));const n=o(0).b`
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
`},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${e=>this.handleCollapse(e)}"
        >
          <div class="header">
            ${this.icon?n.d` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
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
        ${this.expanded?n.d`
              <slot
                name="footer"
                slot="${this.emptyFooter?void 0:"footer"}"
                @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.shadowRoot.querySelector("kor-card").shadowRoot.querySelector(".top").style.padding="0"}),0)}handleCollapse(e){this.expanded&&(this.expanded=!1,e.stopPropagation())}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"expanded",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyBody",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-accordion")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.mobile?n.d`
            <slot name="left"></slot>
            ${this.label?n.d` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:n.d`
            ${this.logo?n.d`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?n.d` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"logo",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"mobile",void 0),s=r([Object(n.c)("kor-app-bar")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <!-- image -->
      <div class="image">
        ${this.image?n.d` <img src="${this.image}" /> `:n.d`
              ${this.label?n.d` ${this.getInitials(this.label)} `:n.d` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?n.d`
            <div class="text">
              ${this.label?n.d`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?n.d`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getInitials(e){var t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"info",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"image",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),s=r([Object(n.c)("kor-avatar")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.status?n.d`
            <!-- status -->
            ${this.status?n.d`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:n.d`
            ${this.label?n.d`
                  <kor-text size="body-2">
                    ${this.label>999?n.d` 999+ `:n.d` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}};r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"status",void 0),s=r([Object(n.c)("kor-badge")],s)},function(e,t,o){o.d(t,"a",(function(){return r}));var n=o(0),i=o(1);let r=class extends n.a{static get styles(){return[i.a,n.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return n.d` <slot></slot> `}};r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([Object(n.c)("kor-breadcrumbs")],r)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.label="Label",this.active=!1}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.firstItem()?"":n.d`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}firstItem(){let e,t;return t=Array.prototype.slice.call(this.parentElement.children),e=0==t.indexOf(this),e}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),s=r([Object(n.c)("kor-breadcrumb-item")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.label="Label",this.color="primary"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:n.d` ${this.label} `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"color",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-button")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.flat=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.image?n.d` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?n.d`
                <div class="label">
                  ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":n.d` <div style="margin-top: 16px"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"image",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-card")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="box">
        ${this.active?n.d` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?n.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>{this.active=!this.active}))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-checkbox")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d` <div class="line"></div> `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"spacing",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=r([Object(n.c)("kor-divider")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
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
          transition: 0.2s all ease-in-out, 0s top, 0s left;
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
      `]}render(){return n.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n.d`
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
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",(()=>this.sticky?"":this.visible=!1))}getCardSize(){let e={height:void 0,width:void 0};switch(this.position){case"left":case"right":e.height="100%",e.width=this.width;break;case"top":case"bottom":e.height=this.height,e.width="100%"}return e}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"position",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"height",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"width",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-drawer")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.icon?n.d`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?n.d` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),s=r([Object(n.c)("kor-empty-state")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d` <slot></slot> `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"columns"===e?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===e&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}};r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"columns",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"rows",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"spacing",void 0),s=r([Object(n.c)("kor-grid")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?n.d` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"src",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"alt",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"width",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"height",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"fit",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"legend",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"legend-position"})],s.prototype,"legendPosition",void 0),s=r([Object(n.c)("kor-image")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[i.a,n.b`
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
        :host([icon='3d_rotation']):before {
          content: '\\e84d';
        }
        :host([icon='ac_unit']):before {
          content: '\\eb3b';
        }
        :host([icon='access_alarm']):before {
          content: '\\e190';
        }
        :host([icon='access_alarms']):before {
          content: '\\e191';
        }
        :host([icon='access_time']):before {
          content: '\\e192';
        }
        :host([icon='accessibility']):before {
          content: '\\e84e';
        }
        :host([icon='accessible']):before {
          content: '\\e914';
        }
        :host([icon='account_balance']):before {
          content: '\\e84f';
        }
        :host([icon='account_balance_wallet']):before {
          content: '\\e850';
        }
        :host([icon='account_box']):before {
          content: '\\e851';
        }
        :host([icon='account_circle']):before {
          content: '\\e853';
        }
        :host([icon='adb']):before {
          content: '\\e60e';
        }
        :host([icon='add']):before {
          content: '\\e145';
        }
        :host([icon='add_a_photo']):before {
          content: '\\e439';
        }
        :host([icon='add_alarm']):before {
          content: '\\e193';
        }
        :host([icon='add_alert']):before {
          content: '\\e003';
        }
        :host([icon='add_box']):before {
          content: '\\e146';
        }
        :host([icon='add_circle']):before {
          content: '\\e147';
        }
        :host([icon='add_circle_outline']):before {
          content: '\\e148';
        }
        :host([icon='add_location']):before {
          content: '\\e567';
        }
        :host([icon='add_shopping_cart']):before {
          content: '\\e854';
        }
        :host([icon='add_to_photos']):before {
          content: '\\e39d';
        }
        :host([icon='add_to_queue']):before {
          content: '\\e05c';
        }
        :host([icon='adjust']):before {
          content: '\\e39e';
        }
        :host([icon='airline_seat_flat']):before {
          content: '\\e630';
        }
        :host([icon='airline_seat_flat_angled']):before {
          content: '\\e631';
        }
        :host([icon='airline_seat_individual_suite']):before {
          content: '\\e632';
        }
        :host([icon='airline_seat_legroom_extra']):before {
          content: '\\e633';
        }
        :host([icon='airline_seat_legroom_normal']):before {
          content: '\\e634';
        }
        :host([icon='airline_seat_legroom_reduced']):before {
          content: '\\e635';
        }
        :host([icon='airline_seat_recline_extra']):before {
          content: '\\e636';
        }
        :host([icon='airline_seat_recline_normal']):before {
          content: '\\e637';
        }
        :host([icon='airplanemode_active']):before {
          content: '\\e195';
        }
        :host([icon='airplanemode_inactive']):before {
          content: '\\e194';
        }
        :host([icon='airplay']):before {
          content: '\\e055';
        }
        :host([icon='airport_shuttle']):before {
          content: '\\eb3c';
        }
        :host([icon='alarm']):before {
          content: '\\e855';
        }
        :host([icon='alarm_add']):before {
          content: '\\e856';
        }
        :host([icon='alarm_off']):before {
          content: '\\e857';
        }
        :host([icon='alarm_on']):before {
          content: '\\e858';
        }
        :host([icon='album']):before {
          content: '\\e019';
        }
        :host([icon='all_inclusive']):before {
          content: '\\eb3d';
        }
        :host([icon='all_out']):before {
          content: '\\e90b';
        }
        :host([icon='android']):before {
          content: '\\e859';
        }
        :host([icon='announcement']):before {
          content: '\\e85a';
        }
        :host([icon='apps']):before {
          content: '\\e5c3';
        }
        :host([icon='archive']):before {
          content: '\\e149';
        }
        :host([icon='arrow_back']):before {
          content: '\\e5c4';
        }
        :host([icon='arrow_downward']):before {
          content: '\\e5db';
        }
        :host([icon='arrow_drop_down']):before {
          content: '\\e5c5';
        }
        :host([icon='arrow_drop_down_circle']):before {
          content: '\\e5c6';
        }
        :host([icon='arrow_drop_up']):before {
          content: '\\e5c7';
        }
        :host([icon='arrow_forward']):before {
          content: '\\e5c8';
        }
        :host([icon='arrow_upward']):before {
          content: '\\e5d8';
        }
        :host([icon='art_track']):before {
          content: '\\e060';
        }
        :host([icon='aspect_ratio']):before {
          content: '\\e85b';
        }
        :host([icon='assessment']):before {
          content: '\\e85c';
        }
        :host([icon='assignment']):before {
          content: '\\e85d';
        }
        :host([icon='assignment_ind']):before {
          content: '\\e85e';
        }
        :host([icon='assignment_late']):before {
          content: '\\e85f';
        }
        :host([icon='assignment_return']):before {
          content: '\\e860';
        }
        :host([icon='assignment_returned']):before {
          content: '\\e861';
        }
        :host([icon='assignment_turned_in']):before {
          content: '\\e862';
        }
        :host([icon='assistant']):before {
          content: '\\e39f';
        }
        :host([icon='assistant_photo']):before {
          content: '\\e3a0';
        }
        :host([icon='attach_file']):before {
          content: '\\e226';
        }
        :host([icon='attach_money']):before {
          content: '\\e227';
        }
        :host([icon='attachment']):before {
          content: '\\e2bc';
        }
        :host([icon='audiotrack']):before {
          content: '\\e3a1';
        }
        :host([icon='autorenew']):before {
          content: '\\e863';
        }
        :host([icon='av_timer']):before {
          content: '\\e01b';
        }
        :host([icon='backspace']):before {
          content: '\\e14a';
        }
        :host([icon='backup']):before {
          content: '\\e864';
        }
        :host([icon='battery_alert']):before {
          content: '\\e19c';
        }
        :host([icon='battery_charging_full']):before {
          content: '\\e1a3';
        }
        :host([icon='battery_full']):before {
          content: '\\e1a4';
        }
        :host([icon='battery_std']):before {
          content: '\\e1a5';
        }
        :host([icon='battery_unknown']):before {
          content: '\\e1a6';
        }
        :host([icon='beach_access']):before {
          content: '\\eb3e';
        }
        :host([icon='beenhere']):before {
          content: '\\e52d';
        }
        :host([icon='block']):before {
          content: '\\e14b';
        }
        :host([icon='bluetooth']):before {
          content: '\\e1a7';
        }
        :host([icon='bluetooth_audio']):before {
          content: '\\e60f';
        }
        :host([icon='bluetooth_connected']):before {
          content: '\\e1a8';
        }
        :host([icon='bluetooth_disabled']):before {
          content: '\\e1a9';
        }
        :host([icon='bluetooth_searching']):before {
          content: '\\e1aa';
        }
        :host([icon='blur_circular']):before {
          content: '\\e3a2';
        }
        :host([icon='blur_linear']):before {
          content: '\\e3a3';
        }
        :host([icon='blur_off']):before {
          content: '\\e3a4';
        }
        :host([icon='blur_on']):before {
          content: '\\e3a5';
        }
        :host([icon='book']):before {
          content: '\\e865';
        }
        :host([icon='bookmark']):before {
          content: '\\e866';
        }
        :host([icon='bookmark_border']):before {
          content: '\\e867';
        }
        :host([icon='border_all']):before {
          content: '\\e228';
        }
        :host([icon='border_bottom']):before {
          content: '\\e229';
        }
        :host([icon='border_clear']):before {
          content: '\\e22a';
        }
        :host([icon='border_color']):before {
          content: '\\e22b';
        }
        :host([icon='border_horizontal']):before {
          content: '\\e22c';
        }
        :host([icon='border_inner']):before {
          content: '\\e22d';
        }
        :host([icon='border_left']):before {
          content: '\\e22e';
        }
        :host([icon='border_outer']):before {
          content: '\\e22f';
        }
        :host([icon='border_right']):before {
          content: '\\e230';
        }
        :host([icon='border_style']):before {
          content: '\\e231';
        }
        :host([icon='border_top']):before {
          content: '\\e232';
        }
        :host([icon='border_vertical']):before {
          content: '\\e233';
        }
        :host([icon='branding_watermark']):before {
          content: '\\e06b';
        }
        :host([icon='brightness_1']):before {
          content: '\\e3a6';
        }
        :host([icon='brightness_2']):before {
          content: '\\e3a7';
        }
        :host([icon='brightness_3']):before {
          content: '\\e3a8';
        }
        :host([icon='brightness_4']):before {
          content: '\\e3a9';
        }
        :host([icon='brightness_5']):before {
          content: '\\e3aa';
        }
        :host([icon='brightness_6']):before {
          content: '\\e3ab';
        }
        :host([icon='brightness_7']):before {
          content: '\\e3ac';
        }
        :host([icon='brightness_auto']):before {
          content: '\\e1ab';
        }
        :host([icon='brightness_high']):before {
          content: '\\e1ac';
        }
        :host([icon='brightness_low']):before {
          content: '\\e1ad';
        }
        :host([icon='brightness_medium']):before {
          content: '\\e1ae';
        }
        :host([icon='broken_image']):before {
          content: '\\e3ad';
        }
        :host([icon='brush']):before {
          content: '\\e3ae';
        }
        :host([icon='bubble_chart']):before {
          content: '\\e6dd';
        }
        :host([icon='bug_report']):before {
          content: '\\e868';
        }
        :host([icon='build']):before {
          content: '\\e869';
        }
        :host([icon='burst_mode']):before {
          content: '\\e43c';
        }
        :host([icon='business']):before {
          content: '\\e0af';
        }
        :host([icon='business_center']):before {
          content: '\\eb3f';
        }
        :host([icon='cached']):before {
          content: '\\e86a';
        }
        :host([icon='cake']):before {
          content: '\\e7e9';
        }
        :host([icon='call']):before {
          content: '\\e0b0';
        }
        :host([icon='call_end']):before {
          content: '\\e0b1';
        }
        :host([icon='call_made']):before {
          content: '\\e0b2';
        }
        :host([icon='call_merge']):before {
          content: '\\e0b3';
        }
        :host([icon='call_missed']):before {
          content: '\\e0b4';
        }
        :host([icon='call_missed_outgoing']):before {
          content: '\\e0e4';
        }
        :host([icon='call_received']):before {
          content: '\\e0b5';
        }
        :host([icon='call_split']):before {
          content: '\\e0b6';
        }
        :host([icon='call_to_action']):before {
          content: '\\e06c';
        }
        :host([icon='camera']):before {
          content: '\\e3af';
        }
        :host([icon='camera_alt']):before {
          content: '\\e3b0';
        }
        :host([icon='camera_enhance']):before {
          content: '\\e8fc';
        }
        :host([icon='camera_front']):before {
          content: '\\e3b1';
        }
        :host([icon='camera_rear']):before {
          content: '\\e3b2';
        }
        :host([icon='camera_roll']):before {
          content: '\\e3b3';
        }
        :host([icon='cancel']):before {
          content: '\\e5c9';
        }
        :host([icon='card_giftcard']):before {
          content: '\\e8f6';
        }
        :host([icon='card_membership']):before {
          content: '\\e8f7';
        }
        :host([icon='card_travel']):before {
          content: '\\e8f8';
        }
        :host([icon='casino']):before {
          content: '\\eb40';
        }
        :host([icon='cast']):before {
          content: '\\e307';
        }
        :host([icon='cast_connected']):before {
          content: '\\e308';
        }
        :host([icon='center_focus_strong']):before {
          content: '\\e3b4';
        }
        :host([icon='center_focus_weak']):before {
          content: '\\e3b5';
        }
        :host([icon='change_history']):before {
          content: '\\e86b';
        }
        :host([icon='chat']):before {
          content: '\\e0b7';
        }
        :host([icon='chat_bubble']):before {
          content: '\\e0ca';
        }
        :host([icon='chat_bubble_outline']):before {
          content: '\\e0cb';
        }
        :host([icon='check']):before {
          content: '\\e5ca';
        }
        :host([icon='check_box']):before {
          content: '\\e834';
        }
        :host([icon='check_box_outline_blank']):before {
          content: '\\e835';
        }
        :host([icon='check_circle']):before {
          content: '\\e86c';
        }
        :host([icon='chevron_left']):before {
          content: '\\e5cb';
        }
        :host([icon='chevron_right']):before {
          content: '\\e5cc';
        }
        :host([icon='child_care']):before {
          content: '\\eb41';
        }
        :host([icon='child_friendly']):before {
          content: '\\eb42';
        }
        :host([icon='chrome_reader_mode']):before {
          content: '\\e86d';
        }
        :host([icon='class']):before {
          content: '\\e86e';
        }
        :host([icon='clear']):before {
          content: '\\e14c';
        }
        :host([icon='clear_all']):before {
          content: '\\e0b8';
        }
        :host([icon='close']):before {
          content: '\\e5cd';
        }
        :host([icon='closed_caption']):before {
          content: '\\e01c';
        }
        :host([icon='cloud']):before {
          content: '\\e2bd';
        }
        :host([icon='cloud_circle']):before {
          content: '\\e2be';
        }
        :host([icon='cloud_done']):before {
          content: '\\e2bf';
        }
        :host([icon='cloud_download']):before {
          content: '\\e2c0';
        }
        :host([icon='cloud_off']):before {
          content: '\\e2c1';
        }
        :host([icon='cloud_queue']):before {
          content: '\\e2c2';
        }
        :host([icon='cloud_upload']):before {
          content: '\\e2c3';
        }
        :host([icon='code']):before {
          content: '\\e86f';
        }
        :host([icon='collections']):before {
          content: '\\e3b6';
        }
        :host([icon='collections_bookmark']):before {
          content: '\\e431';
        }
        :host([icon='color_lens']):before {
          content: '\\e3b7';
        }
        :host([icon='colorize']):before {
          content: '\\e3b8';
        }
        :host([icon='comment']):before {
          content: '\\e0b9';
        }
        :host([icon='compare']):before {
          content: '\\e3b9';
        }
        :host([icon='compare_arrows']):before {
          content: '\\e915';
        }
        :host([icon='computer']):before {
          content: '\\e30a';
        }
        :host([icon='confirmation_number']):before {
          content: '\\e638';
        }
        :host([icon='contact_mail']):before {
          content: '\\e0d0';
        }
        :host([icon='contact_phone']):before {
          content: '\\e0cf';
        }
        :host([icon='contacts']):before {
          content: '\\e0ba';
        }
        :host([icon='content_copy']):before {
          content: '\\e14d';
        }
        :host([icon='content_cut']):before {
          content: '\\e14e';
        }
        :host([icon='content_paste']):before {
          content: '\\e14f';
        }
        :host([icon='control_point']):before {
          content: '\\e3ba';
        }
        :host([icon='control_point_duplicate']):before {
          content: '\\e3bb';
        }
        :host([icon='copyright']):before {
          content: '\\e90c';
        }
        :host([icon='create']):before {
          content: '\\e150';
        }
        :host([icon='create_new_folder']):before {
          content: '\\e2cc';
        }
        :host([icon='credit_card']):before {
          content: '\\e870';
        }
        :host([icon='crop']):before {
          content: '\\e3be';
        }
        :host([icon='crop_16_9']):before {
          content: '\\e3bc';
        }
        :host([icon='crop_3_2']):before {
          content: '\\e3bd';
        }
        :host([icon='crop_5_4']):before {
          content: '\\e3bf';
        }
        :host([icon='crop_7_5']):before {
          content: '\\e3c0';
        }
        :host([icon='crop_din']):before {
          content: '\\e3c1';
        }
        :host([icon='crop_free']):before {
          content: '\\e3c2';
        }
        :host([icon='crop_landscape']):before {
          content: '\\e3c3';
        }
        :host([icon='crop_original']):before {
          content: '\\e3c4';
        }
        :host([icon='crop_portrait']):before {
          content: '\\e3c5';
        }
        :host([icon='crop_rotate']):before {
          content: '\\e437';
        }
        :host([icon='crop_square']):before {
          content: '\\e3c6';
        }
        :host([icon='dashboard']):before {
          content: '\\e871';
        }
        :host([icon='data_usage']):before {
          content: '\\e1af';
        }
        :host([icon='date_range']):before {
          content: '\\e916';
        }
        :host([icon='dehaze']):before {
          content: '\\e3c7';
        }
        :host([icon='delete']):before {
          content: '\\e872';
        }
        :host([icon='delete_forever']):before {
          content: '\\e92b';
        }
        :host([icon='delete_sweep']):before {
          content: '\\e16c';
        }
        :host([icon='description']):before {
          content: '\\e873';
        }
        :host([icon='desktop_mac']):before {
          content: '\\e30b';
        }
        :host([icon='desktop_windows']):before {
          content: '\\e30c';
        }
        :host([icon='details']):before {
          content: '\\e3c8';
        }
        :host([icon='developer_board']):before {
          content: '\\e30d';
        }
        :host([icon='developer_mode']):before {
          content: '\\e1b0';
        }
        :host([icon='device_hub']):before {
          content: '\\e335';
        }
        :host([icon='devices']):before {
          content: '\\e1b1';
        }
        :host([icon='devices_other']):before {
          content: '\\e337';
        }
        :host([icon='dialer_sip']):before {
          content: '\\e0bb';
        }
        :host([icon='dialpad']):before {
          content: '\\e0bc';
        }
        :host([icon='directions']):before {
          content: '\\e52e';
        }
        :host([icon='directions_bike']):before {
          content: '\\e52f';
        }
        :host([icon='directions_boat']):before {
          content: '\\e532';
        }
        :host([icon='directions_bus']):before {
          content: '\\e530';
        }
        :host([icon='directions_car']):before {
          content: '\\e531';
        }
        :host([icon='directions_railway']):before {
          content: '\\e534';
        }
        :host([icon='directions_run']):before {
          content: '\\e566';
        }
        :host([icon='directions_subway']):before {
          content: '\\e533';
        }
        :host([icon='directions_transit']):before {
          content: '\\e535';
        }
        :host([icon='directions_walk']):before {
          content: '\\e536';
        }
        :host([icon='disc_full']):before {
          content: '\\e610';
        }
        :host([icon='dns']):before {
          content: '\\e875';
        }
        :host([icon='do_not_disturb']):before {
          content: '\\e612';
        }
        :host([icon='do_not_disturb_alt']):before {
          content: '\\e611';
        }
        :host([icon='do_not_disturb_off']):before {
          content: '\\e643';
        }
        :host([icon='do_not_disturb_on']):before {
          content: '\\e644';
        }
        :host([icon='dock']):before {
          content: '\\e30e';
        }
        :host([icon='domain']):before {
          content: '\\e7ee';
        }
        :host([icon='done']):before {
          content: '\\e876';
        }
        :host([icon='done_all']):before {
          content: '\\e877';
        }
        :host([icon='donut_large']):before {
          content: '\\e917';
        }
        :host([icon='donut_small']):before {
          content: '\\e918';
        }
        :host([icon='drafts']):before {
          content: '\\e151';
        }
        :host([icon='drag_handle']):before {
          content: '\\e25d';
        }
        :host([icon='drive_eta']):before {
          content: '\\e613';
        }
        :host([icon='dvr']):before {
          content: '\\e1b2';
        }
        :host([icon='edit']):before {
          content: '\\e3c9';
        }
        :host([icon='edit_location']):before {
          content: '\\e568';
        }
        :host([icon='eject']):before {
          content: '\\e8fb';
        }
        :host([icon='email']):before {
          content: '\\e0be';
        }
        :host([icon='enhanced_encryption']):before {
          content: '\\e63f';
        }
        :host([icon='equalizer']):before {
          content: '\\e01d';
        }
        :host([icon='error']):before {
          content: '\\e000';
        }
        :host([icon='error_outline']):before {
          content: '\\e001';
        }
        :host([icon='euro_symbol']):before {
          content: '\\e926';
        }
        :host([icon='ev_station']):before {
          content: '\\e56d';
        }
        :host([icon='event']):before {
          content: '\\e878';
        }
        :host([icon='event_available']):before {
          content: '\\e614';
        }
        :host([icon='event_busy']):before {
          content: '\\e615';
        }
        :host([icon='event_note']):before {
          content: '\\e616';
        }
        :host([icon='event_seat']):before {
          content: '\\e903';
        }
        :host([icon='exit_to_app']):before {
          content: '\\e879';
        }
        :host([icon='expand_less']):before {
          content: '\\e5ce';
        }
        :host([icon='expand_more']):before {
          content: '\\e5cf';
        }
        :host([icon='explicit']):before {
          content: '\\e01e';
        }
        :host([icon='explore']):before {
          content: '\\e87a';
        }
        :host([icon='exposure']):before {
          content: '\\e3ca';
        }
        :host([icon='exposure_neg_1']):before {
          content: '\\e3cb';
        }
        :host([icon='exposure_neg_2']):before {
          content: '\\e3cc';
        }
        :host([icon='exposure_plus_1']):before {
          content: '\\e3cd';
        }
        :host([icon='exposure_plus_2']):before {
          content: '\\e3ce';
        }
        :host([icon='exposure_zero']):before {
          content: '\\e3cf';
        }
        :host([icon='extension']):before {
          content: '\\e87b';
        }
        :host([icon='face']):before {
          content: '\\e87c';
        }
        :host([icon='fast_forward']):before {
          content: '\\e01f';
        }
        :host([icon='fast_rewind']):before {
          content: '\\e020';
        }
        :host([icon='favorite']):before {
          content: '\\e87d';
        }
        :host([icon='favorite_border']):before {
          content: '\\e87e';
        }
        :host([icon='featured_play_list']):before {
          content: '\\e06d';
        }
        :host([icon='featured_video']):before {
          content: '\\e06e';
        }
        :host([icon='feedback']):before {
          content: '\\e87f';
        }
        :host([icon='fiber_dvr']):before {
          content: '\\e05d';
        }
        :host([icon='fiber_manual_record']):before {
          content: '\\e061';
        }
        :host([icon='fiber_new']):before {
          content: '\\e05e';
        }
        :host([icon='fiber_pin']):before {
          content: '\\e06a';
        }
        :host([icon='fiber_smart_record']):before {
          content: '\\e062';
        }
        :host([icon='file_download']):before {
          content: '\\e2c4';
        }
        :host([icon='file_upload']):before {
          content: '\\e2c6';
        }
        :host([icon='filter']):before {
          content: '\\e3d3';
        }
        :host([icon='filter_1']):before {
          content: '\\e3d0';
        }
        :host([icon='filter_2']):before {
          content: '\\e3d1';
        }
        :host([icon='filter_3']):before {
          content: '\\e3d2';
        }
        :host([icon='filter_4']):before {
          content: '\\e3d4';
        }
        :host([icon='filter_5']):before {
          content: '\\e3d5';
        }
        :host([icon='filter_6']):before {
          content: '\\e3d6';
        }
        :host([icon='filter_7']):before {
          content: '\\e3d7';
        }
        :host([icon='filter_8']):before {
          content: '\\e3d8';
        }
        :host([icon='filter_9']):before {
          content: '\\e3d9';
        }
        :host([icon='filter_9_plus']):before {
          content: '\\e3da';
        }
        :host([icon='filter_b_and_w']):before {
          content: '\\e3db';
        }
        :host([icon='filter_center_focus']):before {
          content: '\\e3dc';
        }
        :host([icon='filter_drama']):before {
          content: '\\e3dd';
        }
        :host([icon='filter_frames']):before {
          content: '\\e3de';
        }
        :host([icon='filter_hdr']):before {
          content: '\\e3df';
        }
        :host([icon='filter_list']):before {
          content: '\\e152';
        }
        :host([icon='filter_none']):before {
          content: '\\e3e0';
        }
        :host([icon='filter_tilt_shift']):before {
          content: '\\e3e2';
        }
        :host([icon='filter_vintage']):before {
          content: '\\e3e3';
        }
        :host([icon='find_in_page']):before {
          content: '\\e880';
        }
        :host([icon='find_replace']):before {
          content: '\\e881';
        }
        :host([icon='fingerprint']):before {
          content: '\\e90d';
        }
        :host([icon='first_page']):before {
          content: '\\e5dc';
        }
        :host([icon='fitness_center']):before {
          content: '\\eb43';
        }
        :host([icon='flag']):before {
          content: '\\e153';
        }
        :host([icon='flare']):before {
          content: '\\e3e4';
        }
        :host([icon='flash_auto']):before {
          content: '\\e3e5';
        }
        :host([icon='flash_off']):before {
          content: '\\e3e6';
        }
        :host([icon='flash_on']):before {
          content: '\\e3e7';
        }
        :host([icon='flight']):before {
          content: '\\e539';
        }
        :host([icon='flight_land']):before {
          content: '\\e904';
        }
        :host([icon='flight_takeoff']):before {
          content: '\\e905';
        }
        :host([icon='flip']):before {
          content: '\\e3e8';
        }
        :host([icon='flip_to_back']):before {
          content: '\\e882';
        }
        :host([icon='flip_to_front']):before {
          content: '\\e883';
        }
        :host([icon='folder']):before {
          content: '\\e2c7';
        }
        :host([icon='folder_open']):before {
          content: '\\e2c8';
        }
        :host([icon='folder_shared']):before {
          content: '\\e2c9';
        }
        :host([icon='folder_special']):before {
          content: '\\e617';
        }
        :host([icon='font_download']):before {
          content: '\\e167';
        }
        :host([icon='format_align_center']):before {
          content: '\\e234';
        }
        :host([icon='format_align_justify']):before {
          content: '\\e235';
        }
        :host([icon='format_align_left']):before {
          content: '\\e236';
        }
        :host([icon='format_align_right']):before {
          content: '\\e237';
        }
        :host([icon='format_bold']):before {
          content: '\\e238';
        }
        :host([icon='format_clear']):before {
          content: '\\e239';
        }
        :host([icon='format_color_fill']):before {
          content: '\\e23a';
        }
        :host([icon='format_color_reset']):before {
          content: '\\e23b';
        }
        :host([icon='format_color_text']):before {
          content: '\\e23c';
        }
        :host([icon='format_indent_decrease']):before {
          content: '\\e23d';
        }
        :host([icon='format_indent_increase']):before {
          content: '\\e23e';
        }
        :host([icon='format_italic']):before {
          content: '\\e23f';
        }
        :host([icon='format_line_spacing']):before {
          content: '\\e240';
        }
        :host([icon='format_list_bulleted']):before {
          content: '\\e241';
        }
        :host([icon='format_list_numbered']):before {
          content: '\\e242';
        }
        :host([icon='format_paint']):before {
          content: '\\e243';
        }
        :host([icon='format_quote']):before {
          content: '\\e244';
        }
        :host([icon='format_shapes']):before {
          content: '\\e25e';
        }
        :host([icon='format_size']):before {
          content: '\\e245';
        }
        :host([icon='format_strikethrough']):before {
          content: '\\e246';
        }
        :host([icon='format_textdirection_l_to_r']):before {
          content: '\\e247';
        }
        :host([icon='format_textdirection_r_to_l']):before {
          content: '\\e248';
        }
        :host([icon='format_underlined']):before {
          content: '\\e249';
        }
        :host([icon='forum']):before {
          content: '\\e0bf';
        }
        :host([icon='forward']):before {
          content: '\\e154';
        }
        :host([icon='forward_10']):before {
          content: '\\e056';
        }
        :host([icon='forward_30']):before {
          content: '\\e057';
        }
        :host([icon='forward_5']):before {
          content: '\\e058';
        }
        :host([icon='free_breakfast']):before {
          content: '\\eb44';
        }
        :host([icon='fullscreen']):before {
          content: '\\e5d0';
        }
        :host([icon='fullscreen_exit']):before {
          content: '\\e5d1';
        }
        :host([icon='functions']):before {
          content: '\\e24a';
        }
        :host([icon='g_translate']):before {
          content: '\\e927';
        }
        :host([icon='gamepad']):before {
          content: '\\e30f';
        }
        :host([icon='games']):before {
          content: '\\e021';
        }
        :host([icon='gavel']):before {
          content: '\\e90e';
        }
        :host([icon='gesture']):before {
          content: '\\e155';
        }
        :host([icon='get_app']):before {
          content: '\\e884';
        }
        :host([icon='gif']):before {
          content: '\\e908';
        }
        :host([icon='golf_course']):before {
          content: '\\eb45';
        }
        :host([icon='gps_fixed']):before {
          content: '\\e1b3';
        }
        :host([icon='gps_not_fixed']):before {
          content: '\\e1b4';
        }
        :host([icon='gps_off']):before {
          content: '\\e1b5';
        }
        :host([icon='grade']):before {
          content: '\\e885';
        }
        :host([icon='gradient']):before {
          content: '\\e3e9';
        }
        :host([icon='grain']):before {
          content: '\\e3ea';
        }
        :host([icon='graphic_eq']):before {
          content: '\\e1b8';
        }
        :host([icon='grid_off']):before {
          content: '\\e3eb';
        }
        :host([icon='grid_on']):before {
          content: '\\e3ec';
        }
        :host([icon='group']):before {
          content: '\\e7ef';
        }
        :host([icon='group_add']):before {
          content: '\\e7f0';
        }
        :host([icon='group_work']):before {
          content: '\\e886';
        }
        :host([icon='hd']):before {
          content: '\\e052';
        }
        :host([icon='hdr_off']):before {
          content: '\\e3ed';
        }
        :host([icon='hdr_on']):before {
          content: '\\e3ee';
        }
        :host([icon='hdr_strong']):before {
          content: '\\e3f1';
        }
        :host([icon='hdr_weak']):before {
          content: '\\e3f2';
        }
        :host([icon='headset']):before {
          content: '\\e310';
        }
        :host([icon='headset_mic']):before {
          content: '\\e311';
        }
        :host([icon='healing']):before {
          content: '\\e3f3';
        }
        :host([icon='hearing']):before {
          content: '\\e023';
        }
        :host([icon='help']):before {
          content: '\\e887';
        }
        :host([icon='help_outline']):before {
          content: '\\e8fd';
        }
        :host([icon='high_quality']):before {
          content: '\\e024';
        }
        :host([icon='highlight']):before {
          content: '\\e25f';
        }
        :host([icon='highlight_off']):before {
          content: '\\e888';
        }
        :host([icon='history']):before {
          content: '\\e889';
        }
        :host([icon='home']):before {
          content: '\\e88a';
        }
        :host([icon='hot_tub']):before {
          content: '\\eb46';
        }
        :host([icon='hotel']):before {
          content: '\\e53a';
        }
        :host([icon='hourglass_empty']):before {
          content: '\\e88b';
        }
        :host([icon='hourglass_full']):before {
          content: '\\e88c';
        }
        :host([icon='http']):before {
          content: '\\e902';
        }
        :host([icon='https']):before {
          content: '\\e88d';
        }
        :host([icon='image']):before {
          content: '\\e3f4';
        }
        :host([icon='image_aspect_ratio']):before {
          content: '\\e3f5';
        }
        :host([icon='import_contacts']):before {
          content: '\\e0e0';
        }
        :host([icon='import_export']):before {
          content: '\\e0c3';
        }
        :host([icon='important_devices']):before {
          content: '\\e912';
        }
        :host([icon='inbox']):before {
          content: '\\e156';
        }
        :host([icon='indeterminate_check_box']):before {
          content: '\\e909';
        }
        :host([icon='info']):before {
          content: '\\e88e';
        }
        :host([icon='info_outline']):before {
          content: '\\e88f';
        }
        :host([icon='input']):before {
          content: '\\e890';
        }
        :host([icon='insert_chart']):before {
          content: '\\e24b';
        }
        :host([icon='insert_comment']):before {
          content: '\\e24c';
        }
        :host([icon='insert_drive_file']):before {
          content: '\\e24d';
        }
        :host([icon='insert_emoticon']):before {
          content: '\\e24e';
        }
        :host([icon='insert_invitation']):before {
          content: '\\e24f';
        }
        :host([icon='insert_link']):before {
          content: '\\e250';
        }
        :host([icon='insert_photo']):before {
          content: '\\e251';
        }
        :host([icon='invert_colors']):before {
          content: '\\e891';
        }
        :host([icon='invert_colors_off']):before {
          content: '\\e0c4';
        }
        :host([icon='iso']):before {
          content: '\\e3f6';
        }
        :host([icon='keyboard']):before {
          content: '\\e312';
        }
        :host([icon='keyboard_arrow_down']):before {
          content: '\\e313';
        }
        :host([icon='keyboard_arrow_left']):before {
          content: '\\e314';
        }
        :host([icon='keyboard_arrow_right']):before {
          content: '\\e315';
        }
        :host([icon='keyboard_arrow_up']):before {
          content: '\\e316';
        }
        :host([icon='keyboard_backspace']):before {
          content: '\\e317';
        }
        :host([icon='keyboard_capslock']):before {
          content: '\\e318';
        }
        :host([icon='keyboard_hide']):before {
          content: '\\e31a';
        }
        :host([icon='keyboard_return']):before {
          content: '\\e31b';
        }
        :host([icon='keyboard_tab']):before {
          content: '\\e31c';
        }
        :host([icon='keyboard_voice']):before {
          content: '\\e31d';
        }
        :host([icon='kitchen']):before {
          content: '\\eb47';
        }
        :host([icon='label']):before {
          content: '\\e892';
        }
        :host([icon='label_outline']):before {
          content: '\\e893';
        }
        :host([icon='landscape']):before {
          content: '\\e3f7';
        }
        :host([icon='language']):before {
          content: '\\e894';
        }
        :host([icon='laptop']):before {
          content: '\\e31e';
        }
        :host([icon='laptop_chromebook']):before {
          content: '\\e31f';
        }
        :host([icon='laptop_mac']):before {
          content: '\\e320';
        }
        :host([icon='laptop_windows']):before {
          content: '\\e321';
        }
        :host([icon='last_page']):before {
          content: '\\e5dd';
        }
        :host([icon='launch']):before {
          content: '\\e895';
        }
        :host([icon='layers']):before {
          content: '\\e53b';
        }
        :host([icon='layers_clear']):before {
          content: '\\e53c';
        }
        :host([icon='leak_add']):before {
          content: '\\e3f8';
        }
        :host([icon='leak_remove']):before {
          content: '\\e3f9';
        }
        :host([icon='lens']):before {
          content: '\\e3fa';
        }
        :host([icon='library_add']):before {
          content: '\\e02e';
        }
        :host([icon='library_books']):before {
          content: '\\e02f';
        }
        :host([icon='library_music']):before {
          content: '\\e030';
        }
        :host([icon='lightbulb_outline']):before {
          content: '\\e90f';
        }
        :host([icon='line_style']):before {
          content: '\\e919';
        }
        :host([icon='line_weight']):before {
          content: '\\e91a';
        }
        :host([icon='linear_scale']):before {
          content: '\\e260';
        }
        :host([icon='link']):before {
          content: '\\e157';
        }
        :host([icon='linked_camera']):before {
          content: '\\e438';
        }
        :host([icon='list']):before {
          content: '\\e896';
        }
        :host([icon='live_help']):before {
          content: '\\e0c6';
        }
        :host([icon='live_tv']):before {
          content: '\\e639';
        }
        :host([icon='local_activity']):before {
          content: '\\e53f';
        }
        :host([icon='local_airport']):before {
          content: '\\e53d';
        }
        :host([icon='local_atm']):before {
          content: '\\e53e';
        }
        :host([icon='local_bar']):before {
          content: '\\e540';
        }
        :host([icon='local_cafe']):before {
          content: '\\e541';
        }
        :host([icon='local_car_wash']):before {
          content: '\\e542';
        }
        :host([icon='local_convenience_store']):before {
          content: '\\e543';
        }
        :host([icon='local_dining']):before {
          content: '\\e556';
        }
        :host([icon='local_drink']):before {
          content: '\\e544';
        }
        :host([icon='local_florist']):before {
          content: '\\e545';
        }
        :host([icon='local_gas_station']):before {
          content: '\\e546';
        }
        :host([icon='local_grocery_store']):before {
          content: '\\e547';
        }
        :host([icon='local_hospital']):before {
          content: '\\e548';
        }
        :host([icon='local_hotel']):before {
          content: '\\e549';
        }
        :host([icon='local_laundry_service']):before {
          content: '\\e54a';
        }
        :host([icon='local_library']):before {
          content: '\\e54b';
        }
        :host([icon='local_mall']):before {
          content: '\\e54c';
        }
        :host([icon='local_movies']):before {
          content: '\\e54d';
        }
        :host([icon='local_offer']):before {
          content: '\\e54e';
        }
        :host([icon='local_parking']):before {
          content: '\\e54f';
        }
        :host([icon='local_pharmacy']):before {
          content: '\\e550';
        }
        :host([icon='local_phone']):before {
          content: '\\e551';
        }
        :host([icon='local_pizza']):before {
          content: '\\e552';
        }
        :host([icon='local_play']):before {
          content: '\\e553';
        }
        :host([icon='local_post_office']):before {
          content: '\\e554';
        }
        :host([icon='local_printshop']):before {
          content: '\\e555';
        }
        :host([icon='local_see']):before {
          content: '\\e557';
        }
        :host([icon='local_shipping']):before {
          content: '\\e558';
        }
        :host([icon='local_taxi']):before {
          content: '\\e559';
        }
        :host([icon='location_city']):before {
          content: '\\e7f1';
        }
        :host([icon='location_disabled']):before {
          content: '\\e1b6';
        }
        :host([icon='location_off']):before {
          content: '\\e0c7';
        }
        :host([icon='location_on']):before {
          content: '\\e0c8';
        }
        :host([icon='location_searching']):before {
          content: '\\e1b7';
        }
        :host([icon='lock']):before {
          content: '\\e897';
        }
        :host([icon='lock_open']):before {
          content: '\\e898';
        }
        :host([icon='lock_outline']):before {
          content: '\\e899';
        }
        :host([icon='looks']):before {
          content: '\\e3fc';
        }
        :host([icon='looks_3']):before {
          content: '\\e3fb';
        }
        :host([icon='looks_4']):before {
          content: '\\e3fd';
        }
        :host([icon='looks_5']):before {
          content: '\\e3fe';
        }
        :host([icon='looks_6']):before {
          content: '\\e3ff';
        }
        :host([icon='looks_one']):before {
          content: '\\e400';
        }
        :host([icon='looks_two']):before {
          content: '\\e401';
        }
        :host([icon='loop']):before {
          content: '\\e028';
        }
        :host([icon='loupe']):before {
          content: '\\e402';
        }
        :host([icon='low_priority']):before {
          content: '\\e16d';
        }
        :host([icon='loyalty']):before {
          content: '\\e89a';
        }
        :host([icon='mail']):before {
          content: '\\e158';
        }
        :host([icon='mail_outline']):before {
          content: '\\e0e1';
        }
        :host([icon='map']):before {
          content: '\\e55b';
        }
        :host([icon='markunread']):before {
          content: '\\e159';
        }
        :host([icon='markunread_mailbox']):before {
          content: '\\e89b';
        }
        :host([icon='memory']):before {
          content: '\\e322';
        }
        :host([icon='menu']):before {
          content: '\\e5d2';
        }
        :host([icon='merge_type']):before {
          content: '\\e252';
        }
        :host([icon='message']):before {
          content: '\\e0c9';
        }
        :host([icon='mic']):before {
          content: '\\e029';
        }
        :host([icon='mic_none']):before {
          content: '\\e02a';
        }
        :host([icon='mic_off']):before {
          content: '\\e02b';
        }
        :host([icon='mms']):before {
          content: '\\e618';
        }
        :host([icon='mode_comment']):before {
          content: '\\e253';
        }
        :host([icon='mode_edit']):before {
          content: '\\e254';
        }
        :host([icon='monetization_on']):before {
          content: '\\e263';
        }
        :host([icon='money_off']):before {
          content: '\\e25c';
        }
        :host([icon='monochrome_photos']):before {
          content: '\\e403';
        }
        :host([icon='mood']):before {
          content: '\\e7f2';
        }
        :host([icon='mood_bad']):before {
          content: '\\e7f3';
        }
        :host([icon='more']):before {
          content: '\\e619';
        }
        :host([icon='more_horiz']):before {
          content: '\\e5d3';
        }
        :host([icon='more_vert']):before {
          content: '\\e5d4';
        }
        :host([icon='motorcycle']):before {
          content: '\\e91b';
        }
        :host([icon='mouse']):before {
          content: '\\e323';
        }
        :host([icon='move_to_inbox']):before {
          content: '\\e168';
        }
        :host([icon='movie']):before {
          content: '\\e02c';
        }
        :host([icon='movie_creation']):before {
          content: '\\e404';
        }
        :host([icon='movie_filter']):before {
          content: '\\e43a';
        }
        :host([icon='multiline_chart']):before {
          content: '\\e6df';
        }
        :host([icon='music_note']):before {
          content: '\\e405';
        }
        :host([icon='music_video']):before {
          content: '\\e063';
        }
        :host([icon='my_location']):before {
          content: '\\e55c';
        }
        :host([icon='nature']):before {
          content: '\\e406';
        }
        :host([icon='nature_people']):before {
          content: '\\e407';
        }
        :host([icon='navigate_before']):before {
          content: '\\e408';
        }
        :host([icon='navigate_next']):before {
          content: '\\e409';
        }
        :host([icon='navigation']):before {
          content: '\\e55d';
        }
        :host([icon='near_me']):before {
          content: '\\e569';
        }
        :host([icon='network_cell']):before {
          content: '\\e1b9';
        }
        :host([icon='network_check']):before {
          content: '\\e640';
        }
        :host([icon='network_locked']):before {
          content: '\\e61a';
        }
        :host([icon='network_wifi']):before {
          content: '\\e1ba';
        }
        :host([icon='new_releases']):before {
          content: '\\e031';
        }
        :host([icon='next_week']):before {
          content: '\\e16a';
        }
        :host([icon='nfc']):before {
          content: '\\e1bb';
        }
        :host([icon='no_encryption']):before {
          content: '\\e641';
        }
        :host([icon='no_sim']):before {
          content: '\\e0cc';
        }
        :host([icon='not_interested']):before {
          content: '\\e033';
        }
        :host([icon='note']):before {
          content: '\\e06f';
        }
        :host([icon='note_add']):before {
          content: '\\e89c';
        }
        :host([icon='notifications']):before {
          content: '\\e7f4';
        }
        :host([icon='notifications_active']):before {
          content: '\\e7f7';
        }
        :host([icon='notifications_none']):before {
          content: '\\e7f5';
        }
        :host([icon='notifications_off']):before {
          content: '\\e7f6';
        }
        :host([icon='notifications_paused']):before {
          content: '\\e7f8';
        }
        :host([icon='offline_pin']):before {
          content: '\\e90a';
        }
        :host([icon='ondemand_video']):before {
          content: '\\e63a';
        }
        :host([icon='opacity']):before {
          content: '\\e91c';
        }
        :host([icon='open_in_browser']):before {
          content: '\\e89d';
        }
        :host([icon='open_in_new']):before {
          content: '\\e89e';
        }
        :host([icon='open_with']):before {
          content: '\\e89f';
        }
        :host([icon='pages']):before {
          content: '\\e7f9';
        }
        :host([icon='pageview']):before {
          content: '\\e8a0';
        }
        :host([icon='palette']):before {
          content: '\\e40a';
        }
        :host([icon='pan_tool']):before {
          content: '\\e925';
        }
        :host([icon='panorama']):before {
          content: '\\e40b';
        }
        :host([icon='panorama_fish_eye']):before {
          content: '\\e40c';
        }
        :host([icon='panorama_horizontal']):before {
          content: '\\e40d';
        }
        :host([icon='panorama_vertical']):before {
          content: '\\e40e';
        }
        :host([icon='panorama_wide_angle']):before {
          content: '\\e40f';
        }
        :host([icon='party_mode']):before {
          content: '\\e7fa';
        }
        :host([icon='pause']):before {
          content: '\\e034';
        }
        :host([icon='pause_circle_filled']):before {
          content: '\\e035';
        }
        :host([icon='pause_circle_outline']):before {
          content: '\\e036';
        }
        :host([icon='payment']):before {
          content: '\\e8a1';
        }
        :host([icon='people']):before {
          content: '\\e7fb';
        }
        :host([icon='people_outline']):before {
          content: '\\e7fc';
        }
        :host([icon='perm_camera_mic']):before {
          content: '\\e8a2';
        }
        :host([icon='perm_contact_calendar']):before {
          content: '\\e8a3';
        }
        :host([icon='perm_data_setting']):before {
          content: '\\e8a4';
        }
        :host([icon='perm_device_information']):before {
          content: '\\e8a5';
        }
        :host([icon='perm_identity']):before {
          content: '\\e8a6';
        }
        :host([icon='perm_media']):before {
          content: '\\e8a7';
        }
        :host([icon='perm_phone_msg']):before {
          content: '\\e8a8';
        }
        :host([icon='perm_scan_wifi']):before {
          content: '\\e8a9';
        }
        :host([icon='person']):before {
          content: '\\e7fd';
        }
        :host([icon='person_add']):before {
          content: '\\e7fe';
        }
        :host([icon='person_outline']):before {
          content: '\\e7ff';
        }
        :host([icon='person_pin']):before {
          content: '\\e55a';
        }
        :host([icon='person_pin_circle']):before {
          content: '\\e56a';
        }
        :host([icon='personal_video']):before {
          content: '\\e63b';
        }
        :host([icon='pets']):before {
          content: '\\e91d';
        }
        :host([icon='phone']):before {
          content: '\\e0cd';
        }
        :host([icon='phone_android']):before {
          content: '\\e324';
        }
        :host([icon='phone_bluetooth_speaker']):before {
          content: '\\e61b';
        }
        :host([icon='phone_forwarded']):before {
          content: '\\e61c';
        }
        :host([icon='phone_in_talk']):before {
          content: '\\e61d';
        }
        :host([icon='phone_iphone']):before {
          content: '\\e325';
        }
        :host([icon='phone_locked']):before {
          content: '\\e61e';
        }
        :host([icon='phone_missed']):before {
          content: '\\e61f';
        }
        :host([icon='phone_paused']):before {
          content: '\\e620';
        }
        :host([icon='phonelink']):before {
          content: '\\e326';
        }
        :host([icon='phonelink_erase']):before {
          content: '\\e0db';
        }
        :host([icon='phonelink_lock']):before {
          content: '\\e0dc';
        }
        :host([icon='phonelink_off']):before {
          content: '\\e327';
        }
        :host([icon='phonelink_ring']):before {
          content: '\\e0dd';
        }
        :host([icon='phonelink_setup']):before {
          content: '\\e0de';
        }
        :host([icon='photo']):before {
          content: '\\e410';
        }
        :host([icon='photo_album']):before {
          content: '\\e411';
        }
        :host([icon='photo_camera']):before {
          content: '\\e412';
        }
        :host([icon='photo_filter']):before {
          content: '\\e43b';
        }
        :host([icon='photo_library']):before {
          content: '\\e413';
        }
        :host([icon='photo_size_select_actual']):before {
          content: '\\e432';
        }
        :host([icon='photo_size_select_large']):before {
          content: '\\e433';
        }
        :host([icon='photo_size_select_small']):before {
          content: '\\e434';
        }
        :host([icon='picture_as_pdf']):before {
          content: '\\e415';
        }
        :host([icon='picture_in_picture']):before {
          content: '\\e8aa';
        }
        :host([icon='picture_in_picture_alt']):before {
          content: '\\e911';
        }
        :host([icon='pie_chart']):before {
          content: '\\e6c4';
        }
        :host([icon='pie_chart_outlined']):before {
          content: '\\e6c5';
        }
        :host([icon='pin_drop']):before {
          content: '\\e55e';
        }
        :host([icon='place']):before {
          content: '\\e55f';
        }
        :host([icon='play_arrow']):before {
          content: '\\e037';
        }
        :host([icon='play_circle_filled']):before {
          content: '\\e038';
        }
        :host([icon='play_circle_outline']):before {
          content: '\\e039';
        }
        :host([icon='play_for_work']):before {
          content: '\\e906';
        }
        :host([icon='playlist_add']):before {
          content: '\\e03b';
        }
        :host([icon='playlist_add_check']):before {
          content: '\\e065';
        }
        :host([icon='playlist_play']):before {
          content: '\\e05f';
        }
        :host([icon='plus_one']):before {
          content: '\\e800';
        }
        :host([icon='poll']):before {
          content: '\\e801';
        }
        :host([icon='polymer']):before {
          content: '\\e8ab';
        }
        :host([icon='pool']):before {
          content: '\\eb48';
        }
        :host([icon='portable_wifi_off']):before {
          content: '\\e0ce';
        }
        :host([icon='portrait']):before {
          content: '\\e416';
        }
        :host([icon='power']):before {
          content: '\\e63c';
        }
        :host([icon='power_input']):before {
          content: '\\e336';
        }
        :host([icon='power_settings_new']):before {
          content: '\\e8ac';
        }
        :host([icon='pregnant_woman']):before {
          content: '\\e91e';
        }
        :host([icon='present_to_all']):before {
          content: '\\e0df';
        }
        :host([icon='print']):before {
          content: '\\e8ad';
        }
        :host([icon='priority_high']):before {
          content: '\\e645';
        }
        :host([icon='public']):before {
          content: '\\e80b';
        }
        :host([icon='publish']):before {
          content: '\\e255';
        }
        :host([icon='query_builder']):before {
          content: '\\e8ae';
        }
        :host([icon='question_answer']):before {
          content: '\\e8af';
        }
        :host([icon='queue']):before {
          content: '\\e03c';
        }
        :host([icon='queue_music']):before {
          content: '\\e03d';
        }
        :host([icon='queue_play_next']):before {
          content: '\\e066';
        }
        :host([icon='radio']):before {
          content: '\\e03e';
        }
        :host([icon='radio_button_checked']):before {
          content: '\\e837';
        }
        :host([icon='radio_button_unchecked']):before {
          content: '\\e836';
        }
        :host([icon='rate_review']):before {
          content: '\\e560';
        }
        :host([icon='receipt']):before {
          content: '\\e8b0';
        }
        :host([icon='recent_actors']):before {
          content: '\\e03f';
        }
        :host([icon='record_voice_over']):before {
          content: '\\e91f';
        }
        :host([icon='redeem']):before {
          content: '\\e8b1';
        }
        :host([icon='redo']):before {
          content: '\\e15a';
        }
        :host([icon='refresh']):before {
          content: '\\e5d5';
        }
        :host([icon='remove']):before {
          content: '\\e15b';
        }
        :host([icon='remove_circle']):before {
          content: '\\e15c';
        }
        :host([icon='remove_circle_outline']):before {
          content: '\\e15d';
        }
        :host([icon='remove_from_queue']):before {
          content: '\\e067';
        }
        :host([icon='remove_red_eye']):before {
          content: '\\e417';
        }
        :host([icon='remove_shopping_cart']):before {
          content: '\\e928';
        }
        :host([icon='reorder']):before {
          content: '\\e8fe';
        }
        :host([icon='repeat']):before {
          content: '\\e040';
        }
        :host([icon='repeat_one']):before {
          content: '\\e041';
        }
        :host([icon='replay']):before {
          content: '\\e042';
        }
        :host([icon='replay_10']):before {
          content: '\\e059';
        }
        :host([icon='replay_30']):before {
          content: '\\e05a';
        }
        :host([icon='replay_5']):before {
          content: '\\e05b';
        }
        :host([icon='reply']):before {
          content: '\\e15e';
        }
        :host([icon='reply_all']):before {
          content: '\\e15f';
        }
        :host([icon='report']):before {
          content: '\\e160';
        }
        :host([icon='report_problem']):before {
          content: '\\e8b2';
        }
        :host([icon='restaurant']):before {
          content: '\\e56c';
        }
        :host([icon='restaurant_menu']):before {
          content: '\\e561';
        }
        :host([icon='restore']):before {
          content: '\\e8b3';
        }
        :host([icon='restore_page']):before {
          content: '\\e929';
        }
        :host([icon='ring_volume']):before {
          content: '\\e0d1';
        }
        :host([icon='room']):before {
          content: '\\e8b4';
        }
        :host([icon='room_service']):before {
          content: '\\eb49';
        }
        :host([icon='rotate_90_degrees_ccw']):before {
          content: '\\e418';
        }
        :host([icon='rotate_left']):before {
          content: '\\e419';
        }
        :host([icon='rotate_right']):before {
          content: '\\e41a';
        }
        :host([icon='rounded_corner']):before {
          content: '\\e920';
        }
        :host([icon='router']):before {
          content: '\\e328';
        }
        :host([icon='rowing']):before {
          content: '\\e921';
        }
        :host([icon='rss_feed']):before {
          content: '\\e0e5';
        }
        :host([icon='rv_hookup']):before {
          content: '\\e642';
        }
        :host([icon='satellite']):before {
          content: '\\e562';
        }
        :host([icon='save']):before {
          content: '\\e161';
        }
        :host([icon='scanner']):before {
          content: '\\e329';
        }
        :host([icon='schedule']):before {
          content: '\\e8b5';
        }
        :host([icon='school']):before {
          content: '\\e80c';
        }
        :host([icon='screen_lock_landscape']):before {
          content: '\\e1be';
        }
        :host([icon='screen_lock_portrait']):before {
          content: '\\e1bf';
        }
        :host([icon='screen_lock_rotation']):before {
          content: '\\e1c0';
        }
        :host([icon='screen_rotation']):before {
          content: '\\e1c1';
        }
        :host([icon='screen_share']):before {
          content: '\\e0e2';
        }
        :host([icon='sd_card']):before {
          content: '\\e623';
        }
        :host([icon='sd_storage']):before {
          content: '\\e1c2';
        }
        :host([icon='search']):before {
          content: '\\e8b6';
        }
        :host([icon='security']):before {
          content: '\\e32a';
        }
        :host([icon='select_all']):before {
          content: '\\e162';
        }
        :host([icon='send']):before {
          content: '\\e163';
        }
        :host([icon='sentiment_dissatisfied']):before {
          content: '\\e811';
        }
        :host([icon='sentiment_neutral']):before {
          content: '\\e812';
        }
        :host([icon='sentiment_satisfied']):before {
          content: '\\e813';
        }
        :host([icon='sentiment_very_dissatisfied']):before {
          content: '\\e814';
        }
        :host([icon='sentiment_very_satisfied']):before {
          content: '\\e815';
        }
        :host([icon='settings']):before {
          content: '\\e8b8';
        }
        :host([icon='settings_applications']):before {
          content: '\\e8b9';
        }
        :host([icon='settings_backup_restore']):before {
          content: '\\e8ba';
        }
        :host([icon='settings_bluetooth']):before {
          content: '\\e8bb';
        }
        :host([icon='settings_brightness']):before {
          content: '\\e8bd';
        }
        :host([icon='settings_cell']):before {
          content: '\\e8bc';
        }
        :host([icon='settings_ethernet']):before {
          content: '\\e8be';
        }
        :host([icon='settings_input_antenna']):before {
          content: '\\e8bf';
        }
        :host([icon='settings_input_component']):before {
          content: '\\e8c0';
        }
        :host([icon='settings_input_composite']):before {
          content: '\\e8c1';
        }
        :host([icon='settings_input_hdmi']):before {
          content: '\\e8c2';
        }
        :host([icon='settings_input_svideo']):before {
          content: '\\e8c3';
        }
        :host([icon='settings_overscan']):before {
          content: '\\e8c4';
        }
        :host([icon='settings_phone']):before {
          content: '\\e8c5';
        }
        :host([icon='settings_power']):before {
          content: '\\e8c6';
        }
        :host([icon='settings_remote']):before {
          content: '\\e8c7';
        }
        :host([icon='settings_system_daydream']):before {
          content: '\\e1c3';
        }
        :host([icon='settings_voice']):before {
          content: '\\e8c8';
        }
        :host([icon='share']):before {
          content: '\\e80d';
        }
        :host([icon='shop']):before {
          content: '\\e8c9';
        }
        :host([icon='shop_two']):before {
          content: '\\e8ca';
        }
        :host([icon='shopping_basket']):before {
          content: '\\e8cb';
        }
        :host([icon='shopping_cart']):before {
          content: '\\e8cc';
        }
        :host([icon='short_text']):before {
          content: '\\e261';
        }
        :host([icon='show_chart']):before {
          content: '\\e6e1';
        }
        :host([icon='shuffle']):before {
          content: '\\e043';
        }
        :host([icon='signal_cellular_4_bar']):before {
          content: '\\e1c8';
        }
        :host([icon='signal_cellular_connected_no_internet_4_bar']):before {
          content: '\\e1cd';
        }
        :host([icon='signal_cellular_no_sim']):before {
          content: '\\e1ce';
        }
        :host([icon='signal_cellular_null']):before {
          content: '\\e1cf';
        }
        :host([icon='signal_cellular_off']):before {
          content: '\\e1d0';
        }
        :host([icon='signal_wifi_4_bar']):before {
          content: '\\e1d8';
        }
        :host([icon='signal_wifi_4_bar_lock']):before {
          content: '\\e1d9';
        }
        :host([icon='signal_wifi_off']):before {
          content: '\\e1da';
        }
        :host([icon='sim_card']):before {
          content: '\\e32b';
        }
        :host([icon='sim_card_alert']):before {
          content: '\\e624';
        }
        :host([icon='skip_next']):before {
          content: '\\e044';
        }
        :host([icon='skip_previous']):before {
          content: '\\e045';
        }
        :host([icon='slideshow']):before {
          content: '\\e41b';
        }
        :host([icon='slow_motion_video']):before {
          content: '\\e068';
        }
        :host([icon='smartphone']):before {
          content: '\\e32c';
        }
        :host([icon='smoke_free']):before {
          content: '\\eb4a';
        }
        :host([icon='smoking_rooms']):before {
          content: '\\eb4b';
        }
        :host([icon='sms']):before {
          content: '\\e625';
        }
        :host([icon='sms_failed']):before {
          content: '\\e626';
        }
        :host([icon='snooze']):before {
          content: '\\e046';
        }
        :host([icon='sort']):before {
          content: '\\e164';
        }
        :host([icon='sort_by_alpha']):before {
          content: '\\e053';
        }
        :host([icon='spa']):before {
          content: '\\eb4c';
        }
        :host([icon='space_bar']):before {
          content: '\\e256';
        }
        :host([icon='speaker']):before {
          content: '\\e32d';
        }
        :host([icon='speaker_group']):before {
          content: '\\e32e';
        }
        :host([icon='speaker_notes']):before {
          content: '\\e8cd';
        }
        :host([icon='speaker_notes_off']):before {
          content: '\\e92a';
        }
        :host([icon='speaker_phone']):before {
          content: '\\e0d2';
        }
        :host([icon='spellcheck']):before {
          content: '\\e8ce';
        }
        :host([icon='star']):before {
          content: '\\e838';
        }
        :host([icon='star_border']):before {
          content: '\\e83a';
        }
        :host([icon='star_half']):before {
          content: '\\e839';
        }
        :host([icon='stars']):before {
          content: '\\e8d0';
        }
        :host([icon='stay_current_landscape']):before {
          content: '\\e0d3';
        }
        :host([icon='stay_current_portrait']):before {
          content: '\\e0d4';
        }
        :host([icon='stay_primary_landscape']):before {
          content: '\\e0d5';
        }
        :host([icon='stay_primary_portrait']):before {
          content: '\\e0d6';
        }
        :host([icon='stop']):before {
          content: '\\e047';
        }
        :host([icon='stop_screen_share']):before {
          content: '\\e0e3';
        }
        :host([icon='storage']):before {
          content: '\\e1db';
        }
        :host([icon='store']):before {
          content: '\\e8d1';
        }
        :host([icon='store_mall_directory']):before {
          content: '\\e563';
        }
        :host([icon='straighten']):before {
          content: '\\e41c';
        }
        :host([icon='streetview']):before {
          content: '\\e56e';
        }
        :host([icon='strikethrough_s']):before {
          content: '\\e257';
        }
        :host([icon='style']):before {
          content: '\\e41d';
        }
        :host([icon='subdirectory_arrow_left']):before {
          content: '\\e5d9';
        }
        :host([icon='subdirectory_arrow_right']):before {
          content: '\\e5da';
        }
        :host([icon='subject']):before {
          content: '\\e8d2';
        }
        :host([icon='subscriptions']):before {
          content: '\\e064';
        }
        :host([icon='subtitles']):before {
          content: '\\e048';
        }
        :host([icon='subway']):before {
          content: '\\e56f';
        }
        :host([icon='supervisor_account']):before {
          content: '\\e8d3';
        }
        :host([icon='surround_sound']):before {
          content: '\\e049';
        }
        :host([icon='swap_calls']):before {
          content: '\\e0d7';
        }
        :host([icon='swap_horiz']):before {
          content: '\\e8d4';
        }
        :host([icon='swap_vert']):before {
          content: '\\e8d5';
        }
        :host([icon='swap_vertical_circle']):before {
          content: '\\e8d6';
        }
        :host([icon='switch_camera']):before {
          content: '\\e41e';
        }
        :host([icon='switch_video']):before {
          content: '\\e41f';
        }
        :host([icon='sync']):before {
          content: '\\e627';
        }
        :host([icon='sync_disabled']):before {
          content: '\\e628';
        }
        :host([icon='sync_problem']):before {
          content: '\\e629';
        }
        :host([icon='system_update']):before {
          content: '\\e62a';
        }
        :host([icon='system_update_alt']):before {
          content: '\\e8d7';
        }
        :host([icon='tab']):before {
          content: '\\e8d8';
        }
        :host([icon='tab_unselected']):before {
          content: '\\e8d9';
        }
        :host([icon='tablet']):before {
          content: '\\e32f';
        }
        :host([icon='tablet_android']):before {
          content: '\\e330';
        }
        :host([icon='tablet_mac']):before {
          content: '\\e331';
        }
        :host([icon='tag_faces']):before {
          content: '\\e420';
        }
        :host([icon='tap_and_play']):before {
          content: '\\e62b';
        }
        :host([icon='terrain']):before {
          content: '\\e564';
        }
        :host([icon='text_fields']):before {
          content: '\\e262';
        }
        :host([icon='text_format']):before {
          content: '\\e165';
        }
        :host([icon='textsms']):before {
          content: '\\e0d8';
        }
        :host([icon='texture']):before {
          content: '\\e421';
        }
        :host([icon='theaters']):before {
          content: '\\e8da';
        }
        :host([icon='thumb_down']):before {
          content: '\\e8db';
        }
        :host([icon='thumb_up']):before {
          content: '\\e8dc';
        }
        :host([icon='thumbs_up_down']):before {
          content: '\\e8dd';
        }
        :host([icon='time_to_leave']):before {
          content: '\\e62c';
        }
        :host([icon='timelapse']):before {
          content: '\\e422';
        }
        :host([icon='timeline']):before {
          content: '\\e922';
        }
        :host([icon='timer']):before {
          content: '\\e425';
        }
        :host([icon='timer_10']):before {
          content: '\\e423';
        }
        :host([icon='timer_3']):before {
          content: '\\e424';
        }
        :host([icon='timer_off']):before {
          content: '\\e426';
        }
        :host([icon='title']):before {
          content: '\\e264';
        }
        :host([icon='toc']):before {
          content: '\\e8de';
        }
        :host([icon='today']):before {
          content: '\\e8df';
        }
        :host([icon='toll']):before {
          content: '\\e8e0';
        }
        :host([icon='tonality']):before {
          content: '\\e427';
        }
        :host([icon='touch_app']):before {
          content: '\\e913';
        }
        :host([icon='toys']):before {
          content: '\\e332';
        }
        :host([icon='track_changes']):before {
          content: '\\e8e1';
        }
        :host([icon='traffic']):before {
          content: '\\e565';
        }
        :host([icon='train']):before {
          content: '\\e570';
        }
        :host([icon='tram']):before {
          content: '\\e571';
        }
        :host([icon='transfer_within_a_station']):before {
          content: '\\e572';
        }
        :host([icon='transform']):before {
          content: '\\e428';
        }
        :host([icon='translate']):before {
          content: '\\e8e2';
        }
        :host([icon='trending_down']):before {
          content: '\\e8e3';
        }
        :host([icon='trending_flat']):before {
          content: '\\e8e4';
        }
        :host([icon='trending_up']):before {
          content: '\\e8e5';
        }
        :host([icon='tune']):before {
          content: '\\e429';
        }
        :host([icon='turned_in']):before {
          content: '\\e8e6';
        }
        :host([icon='turned_in_not']):before {
          content: '\\e8e7';
        }
        :host([icon='tv']):before {
          content: '\\e333';
        }
        :host([icon='unarchive']):before {
          content: '\\e169';
        }
        :host([icon='undo']):before {
          content: '\\e166';
        }
        :host([icon='unfold_less']):before {
          content: '\\e5d6';
        }
        :host([icon='unfold_more']):before {
          content: '\\e5d7';
        }
        :host([icon='update']):before {
          content: '\\e923';
        }
        :host([icon='usb']):before {
          content: '\\e1e0';
        }
        :host([icon='verified_user']):before {
          content: '\\e8e8';
        }
        :host([icon='vertical_align_bottom']):before {
          content: '\\e258';
        }
        :host([icon='vertical_align_center']):before {
          content: '\\e259';
        }
        :host([icon='vertical_align_top']):before {
          content: '\\e25a';
        }
        :host([icon='vibration']):before {
          content: '\\e62d';
        }
        :host([icon='video_call']):before {
          content: '\\e070';
        }
        :host([icon='video_label']):before {
          content: '\\e071';
        }
        :host([icon='video_library']):before {
          content: '\\e04a';
        }
        :host([icon='videocam']):before {
          content: '\\e04b';
        }
        :host([icon='videocam_off']):before {
          content: '\\e04c';
        }
        :host([icon='videogame_asset']):before {
          content: '\\e338';
        }
        :host([icon='view_agenda']):before {
          content: '\\e8e9';
        }
        :host([icon='view_array']):before {
          content: '\\e8ea';
        }
        :host([icon='view_carousel']):before {
          content: '\\e8eb';
        }
        :host([icon='view_column']):before {
          content: '\\e8ec';
        }
        :host([icon='view_comfy']):before {
          content: '\\e42a';
        }
        :host([icon='view_compact']):before {
          content: '\\e42b';
        }
        :host([icon='view_day']):before {
          content: '\\e8ed';
        }
        :host([icon='view_headline']):before {
          content: '\\e8ee';
        }
        :host([icon='view_list']):before {
          content: '\\e8ef';
        }
        :host([icon='view_module']):before {
          content: '\\e8f0';
        }
        :host([icon='view_quilt']):before {
          content: '\\e8f1';
        }
        :host([icon='view_stream']):before {
          content: '\\e8f2';
        }
        :host([icon='view_week']):before {
          content: '\\e8f3';
        }
        :host([icon='vignette']):before {
          content: '\\e435';
        }
        :host([icon='visibility']):before {
          content: '\\e8f4';
        }
        :host([icon='visibility_off']):before {
          content: '\\e8f5';
        }
        :host([icon='voice_chat']):before {
          content: '\\e62e';
        }
        :host([icon='voicemail']):before {
          content: '\\e0d9';
        }
        :host([icon='volume_down']):before {
          content: '\\e04d';
        }
        :host([icon='volume_mute']):before {
          content: '\\e04e';
        }
        :host([icon='volume_off']):before {
          content: '\\e04f';
        }
        :host([icon='volume_up']):before {
          content: '\\e050';
        }
        :host([icon='vpn_key']):before {
          content: '\\e0da';
        }
        :host([icon='vpn_lock']):before {
          content: '\\e62f';
        }
        :host([icon='wallpaper']):before {
          content: '\\e1bc';
        }
        :host([icon='warning']):before {
          content: '\\e002';
        }
        :host([icon='watch']):before {
          content: '\\e334';
        }
        :host([icon='watch_later']):before {
          content: '\\e924';
        }
        :host([icon='wb_auto']):before {
          content: '\\e42c';
        }
        :host([icon='wb_cloudy']):before {
          content: '\\e42d';
        }
        :host([icon='wb_incandescent']):before {
          content: '\\e42e';
        }
        :host([icon='wb_iridescent']):before {
          content: '\\e436';
        }
        :host([icon='wb_sunny']):before {
          content: '\\e430';
        }
        :host([icon='wc']):before {
          content: '\\e63d';
        }
        :host([icon='web']):before {
          content: '\\e051';
        }
        :host([icon='web_asset']):before {
          content: '\\e069';
        }
        :host([icon='weekend']):before {
          content: '\\e16b';
        }
        :host([icon='whatshot']):before {
          content: '\\e80e';
        }
        :host([icon='widgets']):before {
          content: '\\e1bd';
        }
        :host([icon='wifi']):before {
          content: '\\e63e';
        }
        :host([icon='wifi_lock']):before {
          content: '\\e1e1';
        }
        :host([icon='wifi_tethering']):before {
          content: '\\e1e2';
        }
        :host([icon='work']):before {
          content: '\\e8f9';
        }
        :host([icon='wrap_text']):before {
          content: '\\e25b';
        }
        :host([icon='youtube_searched_for']):before {
          content: '\\e8fa';
        }
        :host([icon='zoom_in']):before {
          content: '\\e8ff';
        }
        :host([icon='zoom_out']):before {
          content: '\\e900';
        }
        :host([icon='zoom_out_map']):before {
          content: '\\e56b';
        }
      `]}render(){return n.d``}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e?this.style.color=this.color:"icon"==e&&o.indexOf("url")>-1&&this.handleIcon(o)}handleIcon(e){this.style.backgroundImage=e}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"size",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"color",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-icon")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(),this.type="text",this.step=1,this.addEventListener("click",(()=>{this.active=!0,this.shadowRoot.querySelector("input").focus()}))}static get styles(){return[i.a,n.b`
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
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
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
          transition: var(--transition-1), 0.1s opacity ease-in-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-in-out 0.1s,
            0.1s margin ease-in-out 0.1s;
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
      `]}render(){return n.d`
      ${this.icon?n.d` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?n.d` <label class="label">${this.label}</label> `:""}
        <input
          .type="${this.type}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          .min="${this.min}"
          .max="${this.max}"
          .step="${this.step.toString()}"
          .pattern="${this.pattern}"
          .value="${this.value?this.value:null}"
          .name="${this.name}"
          @input="${this.handleChange}"
          @focus="${()=>this.active=!0}"
          @blur="${this.handleBlur}"
        />
      </div>
      <!-- select -->
      ${"select"===this.type?n.d`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?n.d`
                  <kor-card
                    @wheel="${e=>e.stopPropagation()}"
                    class="select-menu"
                    .style="top: ${this.getMenuStyles().top}; left: ${this.getMenuStyles().left}; width: ${this.getMenuStyles().width};"
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date -->
      ${"date"===this.type?n.d` <kor-icon button class="date-icon" icon="event"></kor-icon> `:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":n.d`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${()=>this.handleClear()}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?n.d`
            <kor-icon
              class="status-icon"
              icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${"number"!==this.type||this.readonly?"":n.d`
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
    `}handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}handleBlur(e){"number"===this.type&&this.validateMinMax(e.target.value),"select"!==this.type&&(this.active=!1)}handleIncrement(e){"left"===e?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)-this.step):"right"===e&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)+this.step)}handleItems(e){const t=e.target.assignedNodes();t.forEach((e=>{"KOR-MENU-ITEM"===e.tagName&&e.addEventListener("active-changed",(o=>{o.target.active&&(t.forEach((e=>{e.active=!1})),o.target.active=!0,this.value=e.label,this.active=!1)}))}))}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"active"==e&&this.active&&"select"==this.type&&this.handleMenu()}handleMenu(){const e=this.parentElement,t=o=>{("click"===o.type&&o.target!==this||"wheel"===o.type)&&(this.active=!1,e.removeEventListener("click",t),e.removeEventListener("wheel",t))};e.addEventListener("click",t),e.addEventListener("wheel",t)}validateMinMax(e){e&&(this.min&&e<this.min?this.value=this.min:e>this.max?this.value=this.max:this.value=e)}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getMenuStyles(){return{top:`${this.getBoundingClientRect().top+this.clientHeight+1}px`,left:`${this.getBoundingClientRect().left}px`,width:`${this.clientWidth}px`}}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"value",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"name",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"type",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"status",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),r([Object(n.e)({type:Boolean,reflect:!0,attribute:"no-clear"})],s.prototype,"noClear",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"autofocus",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"pattern",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"min",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"max",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"step",void 0),s=r([Object(n.c)("kor-input")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?n.d` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",(()=>{this.active=!this.active}))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-menu-item")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
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
          transition: 0.2s all ease-in-out, 0s top, 0s left;
        }
      `]}render(){return n.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n.d`
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
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",(()=>this.sticky?"":this.visible=!1))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"height",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"width",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-modal")],s)},function(e,t,o){o.d(t,"a",(function(){return r}));var n=o(0),i=o(1);let r=class extends n.a{static get styles(){return[i.a,n.b`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return n.d`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}};r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([Object(n.c)("kor-nav-bar")],r)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d` <slot></slot> `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"position",void 0),s=r([Object(n.c)("kor-notifications")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n.d`
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
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-notification-item")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.padding="16px",this.flexDirection="row",this.flat=!1,this.scrollable=!1}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"theme",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"padding",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"scrollable",void 0),s=r([Object(n.c)("kor-page")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
        :host {
          background-color: rgb(var(--base-2));
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s width ease-in-out;
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
      `]}render(){return n.d`
      <kor-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader?"":"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"size",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-pane")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        @wheel="${e=>e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?void 0:"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target?this.targetObserver():"visible"===e&&this.visible&&this.visibleObserver()}targetObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&e.addEventListener("click",(()=>this.handlePosition(e)))}visibleObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&this.handlePosition(e),!this.sticky&&this.target&&this.addDocListener(e)}handlePosition(e){if(!e)return;let t=this,o=e.getBoundingClientRect();t.visible=!0,t.position.startsWith("bottom")?t.style.top=`${o.top+o.height+8}px`:t.position.startsWith("top")?t.style.top=o.top-t.clientHeight-8+"px":t.style.top=o.top+o.height/2-t.clientHeight/2+"px",t.position.startsWith("right")?t.style.left=`${o.left+o.width+8}px`:t.position.startsWith("left")?t.style.left=o.left-t.clientWidth-8+"px":t.style.left=o.left+o.width/2-t.clientWidth/2+"px"}addDocListener(e){let t=o=>{(o.composedPath()[0].id!==e.id&&o.target!==e&&"click"===o.type||"wheel"===o.type)&&(this.visible=!1,document.removeEventListener("click",t),document.removeEventListener("wheel",t))};document.addEventListener("click",t),document.addEventListener("wheel",t)}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"position",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"target",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-popover")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.size="m",this.radial=!1,this.showProgress=!1}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <!-- header -->
      ${this.label||this.showProgress?n.d`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?n.d` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?n.d`
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
                  stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-this.value/100)}"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
              </svg>
              ${this.showProgress?n.d` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:n.d`
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
      ${this.info||this.status?n.d`
            <div class="footer">
              <!-- status -->
              ${this.status?n.d`
                    <kor-icon
                      class="status-icon"
                      icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?n.d`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getSize(){let e;switch(this.size){case"s":e=48;break;case"m":e=64;break;case"l":e=80}return e}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"info",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"status",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"color",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"size",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"value",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"radial",void 0),r([Object(n.e)({type:Boolean,reflect:!0,attribute:"show-progress"})],s.prototype,"showProgress",void 0),s=r([Object(n.c)("kor-progress-bar")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <input
        type="radio"
        ?checked="${this.active}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="circle"></div>
      ${this.label?n.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){this.parentElement.childNodes.forEach((e=>{e.active=!1})),this.active=!0}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-radio-button")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[i.a,n.b`
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
          transition: 0.1s all ease-in-out;
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
      `]}render(){return n.d`
      ${this.label?n.d`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?n.d`
                    <input
                      type="number"
                      .value="${this.value}"
                      @blur="${e=>this.handleInput(parseFloat(e.target.value))}"
                      @keypress="${e=>"Enter"===e.key?this.handleInput(parseFloat(e.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${e=>this.handleThumbDrag(e)}"
          @touchstart="${e=>this.handleThumbDrag(e)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"value"!==e&&"min"!==e&&"max"!==e||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(e){e>=this.min&&e<=this.max?this.value=e:e<this.min?this.value=this.min:e>this.max&&(this.value=this.max)}handleThumbPosition(){const e=this.shadowRoot.querySelector(".thumb"),t=(this.value-this.min)/(this.max-this.min)*100;e&&t>=0&&t<=100&&(e.style.left=`${t}%`)}handleThumbDrag(e){const t=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let o="mousedown"===e.type?e.clientX:e.touches[0].clientX;const n=e=>{e.preventDefault();const n="mousemove"===e.type?e.clientX:e.touches[0].clientX,i=n-o;if(i>t||-1*i>t){const e=Math.floor(i<0?-1*i:i),r=Math.round(e/t),s=i>0?this.value+this.step*r:this.value-this.step*r;s<=this.max&&s>=this.min&&(this.value=s,o=n)}},i=()=>{window.removeEventListener("mousemove",n),window.removeEventListener("touchmove",n),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",i)};window.addEventListener("mousemove",n),window.addEventListener("touchmove",n),window.addEventListener("mouseup",i),window.addEventListener("touchend",i)}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"value",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"min",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"max",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"step",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"input",void 0),s=r([Object(n.c)("kor-slider")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
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
      ${this.label?n.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}getSize(){let e;switch(this.size){case"s":e=24;break;case"m":e=32;break;case"l":e=40}return e}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"size",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),s=r([Object(n.c)("kor-spinner")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}handleOrientation(){this.childNodes.forEach((e=>{e.orientation=this.orientation}))}handleItems(){let e,t;e=Array.prototype.slice.call(this.children),t=this.children.length,e.forEach((e=>{e.first=1==e.index,e.last=e.index==t}))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=r([Object(n.c)("kor-stepper")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <!-- circle -->
      <div class="circle">
        ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:n.d`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?n.d` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?n.d` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":n.d` <div class="line before"></div> `}
      ${this.last?"":n.d` <div class="line after"></div> `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",(()=>{this.parentElement.childNodes.forEach((e=>{e.active=!1})),this.active=!0}))}getIndex(){let e;e=Array.prototype.slice.call(this.parentElement.children),this.index=e.indexOf(this)+1}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"info",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"index",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"first",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"last",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=r([Object(n.c)("kor-stepper-item")],s)},function(e,t,o){o.d(t,"a",(function(){return r}));var n=o(0),i=o(1);let r=class extends n.a{static get styles(){return[i.a,n.b`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return n.d` <slot></slot> `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([Object(n.c)("kor-switch")],r)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?n.d` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleActive(){this.parentElement.childNodes.forEach((e=>{e.active=!1})),this.active=!0}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-switch-item")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?n.d` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleActive(){this.closest("kor-tabs").querySelectorAll("kor-tab-item").forEach((e=>{e.active=!1})),this.active=!0}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=r([Object(n.c)("kor-tab-item")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"columns",void 0),s=r([Object(n.c)("kor-table")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach((e=>{e.orientation=this.orientation}))}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=r([Object(n.c)("kor-tabs")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <!-- icon -->
      ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?n.d` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?n.d`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}handleRemove(){this.dispatchEvent(new Event("remove"))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"removable",void 0),s=r([Object(n.c)("kor-tag")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d` <slot></slot> `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&(this.style.color=this.color)}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"size",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"color",void 0),s=r([Object(n.c)("kor-text")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(),this.rows=1,this.addEventListener("click",(()=>{this.active=!0,this.shadowRoot.querySelector("textarea").focus()}))}static get styles(){return[i.a,n.b`
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
          transition: var(--transition-1), 0.1s opacity ease-in-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-in-out 0.1s,
            0.1s margin ease-in-out 0.1s;
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
      `]}render(){return n.d`
      <div class="center">
        ${this.label?n.d` <label class="label">${this.label}</label> `:""}
        <textarea
          .value="${void 0!==this.value?this.value:""}"
          .rows="${this.rows}"
          .columns="${this.rows}"
          ?autofocus="${this.autofocus}"
          @focus="${()=>this.active=!0}"
          @blur="${()=>this.active=!1}"
          @input="${this.handleChange}"
        ></textarea>
      </div>
    `}handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"value",void 0),r([Object(n.e)({type:Number,reflect:!0})],s.prototype,"rows",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"autofocus",void 0),s=r([Object(n.c)("kor-textarea")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
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
      ${this.label?n.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>{this.active=!this.active}))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-toggle")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.size="m",this.disabled=!1}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      ${this.icon?n.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":n.d` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",(()=>{this.active=!this.active}))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"size",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=r([Object(n.c)("kor-tool")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,n.b`
        :host {
          position: fixed;
          z-index: 4;
        }
      `]}render(){return n.d`
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
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?void 0:"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target&&this.targetObserver()}targetObserver(){let e;const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&(t.addEventListener("mouseover",(()=>{e=setTimeout((()=>this.visible=!0),500)})),t.addEventListener("mouseout",(()=>{this.visible=!1,clearTimeout(e)})))}};r([Object(n.e)({type:String,reflect:!0})],s.prototype,"label",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"position",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"target",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),r([Object(n.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=r([Object(n.c)("kor-tooltip")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d` <slot></slot> `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive())),this.handleColumns()}handleActive(){let e,t;e=this.closest("kor-table"),e.readonly||"header"==this.slot||(t=this.parentElement.childNodes,t.forEach((e=>{e.active=!1})),this.active=!0)}handleColumns(){const e=this.closest("kor-table");this.style.gridTemplateColumns=e.columns,e.addEventListener("columns-changed",(()=>{this.style.gridTemplateColumns=e.columns}))}};r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),s=r([Object(n.c)("kor-table-row")],s)},function(e,t,o){o.d(t,"a",(function(){return s}));var n=o(0),i=o(1),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let s=class extends n.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[i.a,n.b`
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
      `]}render(){return n.d`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?n.d`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.dispatchEvent(new Event(`${e}-changed`)),"grid-cols"==e&&(this.style.gridColumn=`span ${this.gridCols}`),"sortable"==e&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",(()=>{this.handleSort()})))}handleSort(){this.sorted?this.sortDirection="asc"==this.sortDirection?"desc":"asc":(this.parentElement.childNodes.forEach((e=>{e.sorted=!1})),this.sorted=!0,this.sortDirection="asc")}};r([Object(n.e)({type:Number,reflect:!0,attribute:"grid-cols"})],s.prototype,"gridCols",void 0),r([Object(n.e)({type:String,reflect:!0})],s.prototype,"alignment",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"head",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"sorted",void 0),r([Object(n.e)({type:Boolean,reflect:!0})],s.prototype,"sortable",void 0),r([Object(n.e)({type:String,reflect:!0,attribute:"sort-direction"})],s.prototype,"sortDirection",void 0),s=r([Object(n.c)("kor-table-cell")],s)},function(e,t,o){o.r(t);var n=o(2);o.d(t,"korAccordion",(function(){return n.a}));var i=o(3);o.d(t,"korAppBar",(function(){return i.a}));var r=o(4);o.d(t,"korAvatar",(function(){return r.a}));var s=o(5);o.d(t,"korBadge",(function(){return s.a}));var c=o(6);o.d(t,"korBreadcrumbs",(function(){return c.a}));var a=o(7);o.d(t,"korBreadcrumbItem",(function(){return a.a}));var l=o(8);o.d(t,"korButton",(function(){return l.a}));var d=o(9);o.d(t,"korCard",(function(){return d.a}));var h=o(10);o.d(t,"korCheckbox",(function(){return h.a}));var p=o(11);o.d(t,"korDivider",(function(){return p.a}));var u=o(12);o.d(t,"korDrawer",(function(){return u.a}));var b=o(13);o.d(t,"korEmptyState",(function(){return b.a}));var f=o(14);o.d(t,"korGrid",(function(){return f.a}));var g=o(15);o.d(t,"korImage",(function(){return g.a}));var v=o(16);o.d(t,"korIcon",(function(){return v.a}));var _=o(17);o.d(t,"korInput",(function(){return _.a}));var m=o(18);o.d(t,"korMenuItem",(function(){return m.a}));var y=o(19);o.d(t,"korModal",(function(){return y.a}));var k=o(20);o.d(t,"korNavbar",(function(){return k.a}));var w=o(21);o.d(t,"korNotifications",(function(){return w.a}));var x=o(22);o.d(t,"korNotificationItem",(function(){return x.a}));var O=o(23);o.d(t,"korPage",(function(){return O.a}));var S=o(24);o.d(t,"korPane",(function(){return S.a}));var j=o(25);o.d(t,"korPopover",(function(){return j.a}));var C=o(26);o.d(t,"korProgressBar",(function(){return C.a}));var $=o(27);o.d(t,"korRadioButton",(function(){return $.a}));var E=o(28);o.d(t,"korSlider",(function(){return E.a}));var P=o(29);o.d(t,"korSpinner",(function(){return P.a}));var A=o(30);o.d(t,"korStepper",(function(){return A.a}));var T=o(31);o.d(t,"korStepperItem",(function(){return T.a}));var R=o(32);o.d(t,"korSwitch",(function(){return R.a}));var z=o(33);o.d(t,"korSwitchItem",(function(){return z.a}));var N=o(34);o.d(t,"korTabItem",(function(){return N.a}));var B=o(35);o.d(t,"korTable",(function(){return B.a}));var D=o(43);o.d(t,"korTableRow",(function(){return D.a}));var I=o(44);o.d(t,"korTableCell",(function(){return I.a}));var M=o(36);o.d(t,"korTabs",(function(){return M.a}));var F=o(37);o.d(t,"korTag",(function(){return F.a}));var L=o(38);o.d(t,"korText",(function(){return L.a}));var U=o(39);o.d(t,"korTextarea",(function(){return U.a}));var H=o(40);o.d(t,"korToggle",(function(){return H.a}));var q=o(41);o.d(t,"korTool",(function(){return q.a}));var V=o(42);o.d(t,"korTooltip",(function(){return V.a}))}]);class ke{constructor(){this.cached_value_=JSON.parse(window.localStorage.getItem(this.storage_name))}get storage_name(){return"LocalStorageBacked"}get storage_value(){return this.cached_value_=JSON.parse(window.localStorage.getItem(this.storage_name)),this.cached_value_}}class we extends ke{constructor(){super(),this.cached_value_||(this.cached_value_={})}get storage_name(){return"BookedAddresses"}set value(e){let t={};e.map((e=>{Object.defineProperty(t,e.toString(),{enumerable:!0,writable:!0,configurable:!0,value:null})})),this.cached_value_=t,window.localStorage.setItem(this.storage_name,JSON.stringify(this.cached_value_))}get value(){return Object.keys(this.cached_value_)}add(e){Object.defineProperty(this.cached_value_,e.toString(),{enumerable:!0,writable:!0,configurable:!0,value:null}),this.value=this.value}remove(e){delete this.cached_value_.item,this.value=this.value}}class xe extends ke{constructor(){super(),this.cached_value_||(this.cached_value_=[])}get storage_name(){return"ScheduleTable"}set value(e){this.cached_value_=e,window.localStorage.setItem(this.storage_name,JSON.stringify(this.cached_value_))}get value(){return this.cached_value_}add(e){this.cached_value_=this.cached_value_.concat(e),this.value=this.value}remove(e){for(var t=0;t<this.cached_value_.length;t++)if(this.cached_value_[t]===e){1==this.cached_value_.length?this.cached_value_=[]:this.cached_value_=this.cached_value_.slice(0,t).concat(this.cached_value_.slice(t+1));break}this.value=this.value}}class Oe extends ke{constructor(){super(),window.ethereum&&(this.web3_instance_=new Web3(window.ethereum),this.cached_value_&&(this.cached_value_=new this.web3_instance_.eth.Contract(this.cached_value_._jsonInterface,this.cached_value_._address)))}get storage_name(){return"ContractInstance"}get storage_value(){return super.storage_value(),this.cached_value_&&(this.cached_value_=new this.web3_instance_.eth.Contract(this.cached_value_._jsonInterface,this.cached_value_._address)),this.cached_value_}set value(e){window.localStorage.setItem(this.storage_name,JSON.stringify(e)),this.cached_value_=new this.web3_instance_.eth.Contract(e._jsonInterface,e._address)}get value(){return this.cached_value_}}var Se={object_entries_two_columns:e=>T`
      <kor-table columns="250px auto">
        <kor-table-row slot="header">
          <kor-table-cell head>Key</kor-table-cell>
          <kor-table-cell head>Value</kor-table-cell>
        </kor-table-row>
        ${e.map((e=>T`
            <kor-table-row>
              <kor-table-cell>${e[0]}</kor-table-cell>
              <kor-table-cell>${e[1]}</kor-table-cell>
            </kor-table-row>`))}
      </kor-table>`,error_notifications:e=>T`
      <kor-notifications position="top-right">
        <kor-notification-item icon="error" label="Error">
        ${e.map((e=>T`
            <kor-text size="body-1">${JSON.stringify(e)}</kor-text>`))}
        </kor-notification-item>
      </kor-notifications>`,success_notifications:e=>T`
      <kor-notifications position="top-right">
        <kor-notification-item icon="done" label="Success">
        ${e.map((e=>T`
            <kor-text size="body-1">${JSON.stringify(e)}</kor-text>`))}
        </kor-notification-item>
      </kor-notifications>`},je={check_transaction_data(e,t,o){let n=[];if(o&&(e.destination_address?/0x[0-9a-f]{40}/.test(e.destination_address)||(n=n.concat("The destination address has wrong format")):n=n.concat("The destination address is not filled")),(!e.amount_gwei||e.amount_gwei<=0)&&(n=n.concat("The amount is not filled")),e.gas_price_gwei||(n=n.concat("The gas price is not filled")),e.gas_limit||(n=n.concat("The gas limit is not filled")),n.length){B(Se.error_notifications(n),t);t.querySelector("kor-notification-item").setAttribute("visible","true")}return!n.length},check_schedule_data(e,t){let o=[];if(e.start_date||(o=o.concat("The start date is not filled")),e.start_time||(o=o.concat("The start time is not filled")),o.length){B(Se.error_notifications(o),t);t.querySelector("kor-notification-item").setAttribute("visible","true")}return!o.length},start_time_to_clock(e){let t=Math.trunc(e/60);const o=e%60;let n="AM";return t>=12&&(n="PM",t-=12),"0"==t.toFixed(0)&&(t=12),{hour:t,minute:o,am_pm:n}},error_notifications(e,t){B(Se.error_notifications(e),t);t.querySelector("kor-notification-item").setAttribute("visible","true")},success_notifications(e,t){B(Se.success_notifications(e),t);t.querySelector("kor-notification-item").setAttribute("visible","true")},async get_current_address(){if(!window.ethereum)return null;const e=await window.ethereum.request({method:"eth_requestAccounts"});return Object.entries(e)[0][1]},send_transaction(e,t,o,n,i,r,s){return e&&e.send?e.send({from:t,gasPrice:parseInt(o)*Math.pow(10,9),value:parseInt(n)*Math.pow(10,9)},((e,t)=>{e&&(i=i.concat(Object.entries(e))),i.length&&(i=i.concat("The transaction hash == "+t.toString()),this.error_notifications(i,s))})).on("error",(e=>{(i=i.concat(Object.entries(e))).length&&this.error_notifications(i,s)})).on("transactionHash",(e=>{r=r.concat("The transaction hash == "+e.toString()),this.success_notifications(r,s)})).on("receipt",(e=>{r=r.concat("The contract address == "+e.contractAddress.toString()),this.success_notifications(r,s)})).on("confirmation",((e,t)=>{r=(r=r.concat("The confirmation number == "+e)).concat(Object.entries(t))})):(i=i.concat("An appropriate transaction object is not set"),this.error_notifications(i,s),null)},init_matic(e,t){e.matic=new Matic({network:"testnet",version:"mumbai",maticProvider:e.metamask,parentProvider:e.metamask,parentDefaultOptions:{from:t},maticDefaultOptions:{from:t}}),e.matic.initialize().then((async()=>{console.log("web3_wrappers.matic == ",e.matic)}))},init_web3_wrappers(e,t){e.metamask=new Web3(window.ethereum),console.log("web3_wrappers.metamask == ",e.metamask),5==window.ethereum.networkVersion?this.init_matic(e,t):window.ethereum.on("chainChanged",(o=>{5==o&&this.init_matic(e,t)}))},setup_component(e){const t=document.querySelector("dapp-main");t||console.log("setup_component: The super component was not found"),e.theme||void 0===e.theme||(t&&(e.theme=t.theme),e.theme||(console.log("The theme property was not found in the super component"),e.theme="light")),e.booked_addresses||void 0===e.booked_addresses||(t&&(e.booked_addresses=t.booked_addresses),e.booked_addresses||(console.log("The booked_addresses property was not found in the super component"),e.booked_addresses=new we)),e.notification_container||void 0===e.notification_container||(t&&(e.notification_container=t.page_notification),e.notification_container||(console.log("The notification_container property was not found in the super component"),e.notification_container=document.createElement("div")))},login_component(e){const t=document.querySelector("dapp-main");t||console.log("login_component: The super component was not found"),e.current_address||void 0===e.current_address||(t&&(e.current_address=t.current_address),e.current_address||(console.log("The current_address property was not found in the super component"),this.get_current_address().then((t=>{e.current_address=t})))),e.web3_wrappers||void 0===e.web3_wrappers||(t&&(e.web3_wrappers=t.web3_wrappers),e.web3_wrappers||(console.log("The web3_wrappers property was not found in the super component"),e.web3_wrappers={},e.current_address?this.init_web3_wrappers(e.web3_wrappers,e.current_address):this.get_current_address().then((t=>{this.init_web3_wrappers(e.web3_wrappers,t)})))),e.contract_instance||void 0===e.contract_instance||(t&&(e.contract_instance=t.contract_instance.value),e.contract_instance||(console.log("The contract_instance property was not found in the super component"),e.contract_instance=new Oe)),e.current_user||void 0===e.current_user||(t&&(e.current_user=t.current_user),e.current_user||(console.log("The current_user property was not found in the super component"),e.current_user={}))},logout_component(e){e.current_address=null,e.web3_wrappers=null,e.contract_instance=null,e.current_user=null}},Ce={Init:(e,t)=>()=>{if(!t.has_logined)return Moralis.LiveQuery.close(),t.current_user=null,t.current_address=null,t.web3_wrappers={},t.contract_instance=null,e.map((e=>{e.has_logined=!1})),void Moralis.User.logOut().then((()=>{console.log("Logged out")}));Moralis.Web3.authenticate().then((o=>{console.log("The current user: ",o),console.log("The current user password: ",o.password),console.log("The current user's EthAddress: ",o.get("ethAddress")),t.current_user=o,t.current_address=o.get("ethAddress"),je.init_web3_wrappers(t.web3_wrappers,t.current_address),t.contract_instance=new Oe,fetch("https://webatix.github.io/test/smart-contract/deployed-instance.json").then((e=>{e.ok&&e.json().then((e=>{t.contract_instance.value=e,console.log("The fetched deployed contract instance == ",t.contract_instance.value)}))})),e.map((e=>{e.has_logined=!0})),Moralis.Cloud.run("watchEthAddress",{address:o.get("ethAddress")}).then((e=>{console.log("The watchEthAddress results: ",e),getUserTransactions(o)})).catch((()=>{}))}))}};r([fe("dapp-menu")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"visible",value:()=>!0},{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[me("#invokeButton",!0)],key:"invoke_button",value:void 0},{kind:"field",decorators:[me("#appMenuTooltip",!0)],key:"app_menu_tooltip",value:void 0},{kind:"field",decorators:[me("#appMenu",!0)],key:"app_menu",value:void 0},{kind:"field",decorators:[me("#loginMenuItem",!0)],key:"login_menu_item",value:void 0},{kind:"method",key:"render",value:function(){return T`
      <kor-icon id="invokeButton" slot="functions" icon="menu" button
        @click="${e=>{this.app_menu_tooltip.setAttribute("visible","false")}}"
      ></kor-icon>
      <kor-tooltip id="appMenuTooltip" position="left">DApp menu</kor-tooltip>
      <kor-popover id="appMenu" position="left" label="DApp menu" icon="menu">
        <kor-menu-item id="loginMenuItem" label="Login using Metamask" icon="person" toggle="false"
          @click="${e=>{this.has_logined^=!0,this.app_menu.visible=!1}}"
        ></kor-menu-item>
        <kor-menu-item label="Preferences" icon="work" toggle="false"
          @click="${e=>{this.app_menu.visible=!1}}"
        ></kor-menu-item>
      </kor-popover>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this);const o=[...this.shadowRoot.querySelectorAll(":not(:defined)")].map((e=>customElements.whenDefined(e.localName)));Promise.all(o).then((()=>{this.app_menu_tooltip.target=this.invoke_button,this.app_menu.target=this.invoke_button}))}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(this.has_logined?this.login_menu_item.label="Logout":this.login_menu_item.label="Login using Metamask"),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-tab-strip")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Array,reflect:!1})],key:"tabs",value:()=>[]},{kind:"field",decorators:[me("kor-tab-item",!0)],key:"first_tab",value:void 0},{kind:"method",key:"render",value:function(){return T`
      <kor-tabs orientation="horizontal">
        ${this.tabs.map(((e,t)=>T`
          <kor-tab-item label="${e.label}"
            @active-changed="${t=>{t.target.active?e.component.visible=!0:e.component.visible=!1}}"
          ></kor-tab-item>`))}
      </kor-tabs>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this);const o=[...this.shadowRoot.querySelectorAll(":not(:defined)")].map((e=>customElements.whenDefined(e.localName)));Promise.all(o).then((()=>{this.first_tab.setAttribute("active",!0)}))}}]}}),be);var $e={transactions:(e,t,o)=>T`
      <kor-grid columns="2">
        <kor-card grid-cols="1" grid-cols-m="2" grid-cols-s="2" flat>
          <kor-text size="header-1">Incoming transactions</kor-text>
          <kor-table columns="1fr auto">
            <kor-table-row slot="header">
              <kor-table-cell head>From address</kor-table-cell>
              <kor-table-cell head>Amount in ETH</kor-table-cell>
            </kor-table-row>
            ${e.map((e=>T`
                <kor-table-row @click="${t=>{o(e)}}">
                  <kor-table-cell>${e.attributes.from_address}</kor-table-cell>
                  <kor-table-cell>${(Number.parseInt(e.attributes.value)/Math.pow(10,18)).toFixed(18)}</kor-table-cell>
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
            ${t.map((e=>T`
                <kor-table-row @click="${t=>{o(e)}}">
                  <kor-table-cell>${e.attributes.to_address}</kor-table-cell>
                  <kor-table-cell>${(Number.parseInt(e.attributes.value)/Math.pow(10,18)).toFixed(18)}</kor-table-cell>
                </kor-table-row>`))}
          </kor-table>
        </kor-card>
      </kor-grid>`,add_transaction:(e,t,o,n,i)=>T`
      ${i?T`
        <kor-radio-button label="Choose from own addresses"
          @active-changed="${e=>{const t=e.target.parentElement.querySelectorAll("kor-input")[0];e.target.active?(t.style.display="inherit",n.destination_address=t.value):t.style.display="none"}}">
        </kor-radio-button>
        <kor-input type="select" label="The own address will be used as destination" icon="view_list" style="display: none"
          @active-changed="${e=>{e.target.active&&(n.destination_address=e.target.value)}}"
        >
          ${t.map((e=>T`
              <kor-menu-item label="${e}"></kor-menu-item>`))}
        </kor-input>
        <kor-radio-button label="Choose from booked addresses"
          @active-changed="${e=>{const t=e.target.parentElement.querySelectorAll("kor-input")[1];e.target.active?(t.style.display="inherit",n.destination_address=t.value):t.style.display="none"}}">
        </kor-radio-button>
        <kor-input type="select" label="The booked address will be used as destination" icon="view_list" style="display: none"
          @active-changed="${e=>{e.target.active&&(n.destination_address=e.target.value)}}"
        >
          ${o.value.map((e=>T`
              <kor-menu-item label="${e}"></kor-menu-item>`))}
        </kor-input>
        <kor-radio-button label="Enter a new destination address" active
          @active-changed="${e=>{const t=e.target.parentElement.querySelectorAll("kor-input")[2];e.target.active?(t.style.display="inherit",n.destination_address=t.value):t.style.display="none"}}">
        </kor-radio-button>
        <kor-input label="The destination address:" type="text" value="" style="display: inherit"
          @active-changed="${e=>{e.target.active||(n.destination_address=e.target.value)}}">
        </kor-input>`:""}
      <kor-input label="The transaction's amount in GWEI:"
        type="number" value="0" min=0 max=${e}
        @active-changed="${e=>{e.target.active||(n.amount_gwei=e.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's gas price in GWEI:"
        type="number" value="${n.gas_price_gwei}" min=0
        @active-changed="${e=>{e.target.active||(n.gas_price_gwei=e.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's gas limit:"
        type="number" value="${n.gas_limit}" min=0
        @active-changed="${e=>{e.target.active||(n.gas_limit=e.target.value)}}">
      </kor-input>`};const Ee=Z`
  .heading_icon {
    color: var(--text-1);
    display: table-cell;
    vertical-align: middle;
    padding-right: 16px;
  }
  .heading_tools {
    display: table-cell;
    vertical-align: middle;
  }
`;r([fe("dapp-summary")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"visible",value:()=>!0},{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:Object,reflect:!0})],key:"current_user",value:()=>null},{kind:"field",decorators:[me("#summaryTools",!1)],key:"summary_tools",value:void 0},{kind:"field",decorators:[me("#summaryContent",!1)],key:"summary_content",value:void 0},{kind:"get",static:!0,key:"styles",value:function(){return[Ee,Z``]}},{kind:"method",key:"render",value:function(){return T`
      <div id="summaryTools" grid-rows="1" style="display: block">
        <kor-icon class="heading_icon" icon="account_balance" color="var(--text-1)" size="m"></kor-icon>
        <kor-card class="heading_tools" flat>
          <kor-avatar label="User" info="User account"></kor-avatar>
        </kor-card>
      </div>
      <div id="summaryContent" grid-rows="9" style="display: block"></div>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),this.style||(this.style="display: block;"),je.setup_component(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(je.login_component(this),B(Se.object_entries_two_columns(Object.entries(this.current_user)),this.summary_content)):(je.logout_component(this),B(T``,this.summary_content))),"visible"==o&&this.summary_tools&&this.summary_content&&(1==this.visible?(this.style.display="block",1==this.has_logined?(this.summary_tools.style.display="block",this.summary_content.style.display="block"):(this.summary_tools.style.display="block",this.summary_content.style.display="none")):(this.summary_tools.style.display="none",this.summary_content.style.display="none",this.style.display="none")),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-unsubscribe")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[ve({type:Number,reflect:!0})],key:"subscription_id",value:()=>null},{kind:"field",decorators:[me("kor-icon",!0)],key:"invoke_button",value:void 0},{kind:"field",decorators:[me("kor-notification-item",!0)],key:"user_form",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"notification_container",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[ve({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"gas_price_gwei_",value:()=>10},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"errors_",value:()=>[]},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"successes_",value:()=>[]},{kind:"method",key:"render",value:function(){return T`
      <kor-icon icon="delete" button
        @click="${e=>{this.user_form.setAttribute("visible","true")}}"
      ></kor-icon>
      <kor-notifications>
        <kor-notification-item icon="warning" label="Unsubscribe" sticky>
          <kor-text size="header-2">Are you sure you want to unsubscribe?</kor-text>
          <kor-button slot="footer" color="secondary" label="No"
            @click="${e=>{this.user_form.removeAttribute("visible")}}"
          ></kor-button>
          <kor-button slot="footer" color="secondary" label="Yes"
            @click="${e=>{this.user_form.removeAttribute("visible"),this.unsubscribe()}}"
          ></kor-button>
        </kor-notification-item>
      </kor-notifications>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),je.setup_component(this),je.login_component(this)}},{kind:"method",key:"unsubscribe",value:function(){if(!this.contract_instance)return this.errors_=this.errors_.concat("Please set a contract instance into this component"),void je.error_notifications(this.errors_,this.notification_container);const e=this.contract_instance.methods.unsubscribe(this.subscription_id);je.send_transaction(e,this.current_address,this.gas_price_gwei_,0,this.errors_,this.successes_,this.notification_container).then((e=>{this.successes_=this.successes_.concat(JSON.stringify(e)),je.success_notifications(this.successes_,this.notification_container),console.log(e),this.dispatchEvent(new Event("unsubscribed",{bubbles:!0,composed:!0})),this.errors_=[],this.successes_=[]}))}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be);var Pe={subscriptions:(e,t,o)=>T`
      <kor-grid columns="1">
        <kor-card grid-cols="1" flat>
          <kor-text size="header-1">Current subscriptions</kor-text>
          <kor-table columns="4fr 3fr 3fr 2fr 2fr 1fr">
            <kor-table-row slot="header">
              <kor-table-cell head>Vendor address</kor-table-cell>
              <kor-table-cell head>Amount</kor-table-cell>
              <kor-table-cell head>Billing Interval in secs</kor-table-cell>
              <kor-table-cell head>Is Active</kor-table-cell>
              <kor-table-cell head>ID</kor-table-cell>
              <kor-table-cell head></kor-table-cell>
            </kor-table-row>
            ${e.map((e=>T`
                <kor-table-row
                  @click="${o=>{"DAPP-UNSUBSCRIBE"!=o.composedPath()[2].tagName&&t(e)}}"
                >
                  <kor-table-cell>${e[4]}</kor-table-cell>
                  <kor-table-cell>${e[6]}</kor-table-cell>
                  <kor-table-cell>${e[7]}</kor-table-cell>
                  <kor-table-cell>${e[1]}</kor-table-cell>
                  <kor-table-cell>${e[0]}</kor-table-cell>
                  <kor-table-cell>
                    <dapp-unsubscribe subscription_id="${e[0]}"
                      @unsubscribed="${e=>{o()}}"
                    ></dapp-unsubscribe>
                  </kor-table-cell>
                </kor-table-row>`))}
          </kor-table>
        </kor-card>
      </kor-grid>`};r([fe("dapp-subscribe")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[ve({type:Number,reflect:!0})],key:"productID",value:()=>null},{kind:"field",decorators:[me("#invokeButton",!0)],key:"invoke_button",value:void 0},{kind:"field",decorators:[me("kor-modal",!1)],key:"user_form",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"notification_container",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[ve({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"value_to_send_gwei_",value:()=>0},{kind:"field",decorators:[ve({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"gas_price_gwei_",value:()=>1},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"errors_",value:()=>[]},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"successes_",value:()=>[]},{kind:"method",key:"render",value:function(){return T`
      <kor-button id="invokeButton" label="Create a new subscription" color="Primary" style="display: none"
        @click="${e=>{this.user_form.setAttribute("visible","true")}}"
      ></kor-button>
      <kor-modal icon="label" label="Subscribe to the product" theme="${this.theme}">
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card grid-cols="1" flat>
              <kor-input label="The product ID" type="number" min=1 value="${this.productID}"
                @change="${e=>{this.productID=parseInt(e.target.value)}}"
              ></kor-input>
              <kor-input label="Value to add to the account balance in the smart contract in GWEI" type="number" min=0 value="${this.value_to_send_gwei_}"
                @change="${e=>{this.value_to_send_gwei_=parseInt(e.target.value)}}"
              ></kor-input>
              <kor-input label="Gas price in GWEI for the current transaction" type="number" min=1 value="${this.gas_price_gwei_}"
                @change="${e=>{this.gas_price_gwei_=parseInt(e.target.value)}}"
              ></kor-input>
            </kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Create" color="Primary" slot="footer"
          @click="${e=>{if(!this.contract_instance)return this.errors_=this.errors_.concat("Please set a contract instance into this component"),void je.error_notifications(this.errors_,this.notification_container);const t=this.contract_instance.methods.subscribe(this.productID);console.log("The transaction_object == ",t),je.send_transaction(t,this.current_address,this.gas_price_gwei_,this.value_to_send_gwei_,this.errors_,this.successes_,this.notification_container).then((e=>{this.successes_=this.successes_.concat(JSON.stringify(e)),je.success_notifications(this.successes_,this.notification_container),console.log(e),this.dispatchEvent(new Event("subscription-created",{bubbles:!0,composed:!0}))})),this.user_form.removeAttribute("visible")}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),je.setup_component(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(this.errors_=[],this.successes_=[],je.login_component(this),this.invoke_button.style.display="block"):(this.invoke_button.style.display="none",je.logout_component(this))),"theme"==o&&this.user_form&&(this.user_form.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-subscriptions")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"visible",value:()=>!1},{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[me("#subscriptionsTools",!1)],key:"subscriptions_tools",value:void 0},{kind:"field",decorators:[me("#subscriptionsContent",!1)],key:"subscriptions_content",value:void 0},{kind:"field",decorators:[me("#subscriptionDetailsModal",!1)],key:"subscription_details_modal",value:void 0},{kind:"field",decorators:[me("#subscriptionDetailsContent",!0)],key:"subscription_details_content",value:void 0},{kind:"field",decorators:[me("dapp-subscribe",!0)],key:"subscribe",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"subscriptions_",value:()=>[]},{kind:"get",static:!0,key:"styles",value:function(){return[Ee,Z``]}},{kind:"method",key:"render",value:function(){return T`
      <div id="subscriptionsTools" grid-rows="1" style="display: none">
        <kor-icon class="heading_icon" icon="account_balance_wallet" color="var(--text-1)" size="m"></kor-icon>
        <kor-card class="heading_tools" flat>
          <dapp-subscribe
            @subscription-created="${e=>{this.getSubscriptions(),console.log("The subscription created")}}"
          ></dapp-subscribe>
        </kor-card>
      </div>
      <div id="subscriptionsContent" grid-rows="9" style="display: none"></div>
      <kor-modal id="subscriptionDetailsModal" icon="list" label="The transaction's details" theme="light">
        <kor-card id="subscriptionDetailsContent" flat></kor-card>
      </kor-modal>`}},{kind:"method",key:"subscription_details",value:function(e){const t={subscriptionID:e[0],isActive:e[1],isPendingCancel:e[2],subscriberAddress:e[3],vendorAddress:e[4],productID:e[5],amount:e[6],billingInterval:e[7],lastPaymentTime:e[8]};B(Se.object_entries_two_columns(Object.entries(t)),this.subscription_details_content),this.subscription_details_modal.setAttribute("visible","true")}},{kind:"method",key:"getSubscriptions",value:async function(){const e=await this.contract_instance.methods.getSubscriberSubscriptionIDs().call({from:this.current_address});this.subscriptions_=[];const t=e.map((e=>this.contract_instance.methods.getSubscription(e).call({from:this.current_address}).then((e=>{this.subscriptions_=this.subscriptions_.concat([e])}))));Promise.all(t).then((()=>{console.log("this.subscriptions_ == ",this.subscriptions_),B(Pe.subscriptions(this.subscriptions_,(e=>{this.subscription_details(e)}),(()=>{this.getSubscriptions()})),this.subscriptions_content)}))}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),this.style||(this.style="display: none;"),je.setup_component(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(je.login_component(this),this.getSubscriptions()):(je.logout_component(this),B(T``,this.subscriptions_content),this.subscriber_subscription_IDs_=[],this.subscriptions_=[]),this.subscribe.has_logined=this.has_logined),"visible"==o&&(this.style.display="block",1==this.visible?1==this.has_logined?(this.subscriptions_tools.style.display="block",this.subscriptions_content.style.display="block"):(this.subscriptions_tools.style.display="block",this.subscriptions_content.style.display="none"):(this.subscriptions_tools.style.display="none",this.subscriptions_content.style.display="none",this.style.display="none")),"theme"==o&&this.subscription_details_modal&&(this.subscription_details_modal.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-transactions")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"visible",value:()=>!1},{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[me("#transactionsTools",!1)],key:"transactions_tools",value:void 0},{kind:"field",decorators:[me("#transactionsContent",!1)],key:"transactions_content",value:void 0},{kind:"field",decorators:[me("#transactionDetailsModal",!1)],key:"transaction_details_modal",value:void 0},{kind:"field",decorators:[me("#transactionDetailsContent",!0)],key:"transaction_details_content",value:void 0},{kind:"get",static:!0,key:"styles",value:function(){return[Ee,Z``]}},{kind:"method",key:"render",value:function(){return T`
      <div id="transactionsTools" grid-rows="1" style="display: none">
        <kor-icon class="heading_icon" icon="account_balance_wallet" color="var(--text-1)" size="m"></kor-icon>
        <kor-card class="heading_tools" flat>
          <kor-button label="Set up a display filter" color="Primary"></kor-button>
        </kor-card>
      </div>
      <div id="transactionsContent" grid-rows="9" style="display: none"></div>
      <kor-modal id="transactionDetailsModal" icon="list" label="The transaction's details" theme="light">
        <kor-card id="transactionDetailsContent" flat></kor-card>
      </kor-modal>`}},{kind:"method",key:"transaction_details",value:function(e){B(Se.object_entries_two_columns(Object.entries(e.attributes)),this.transaction_details_content),this.transaction_details_modal.setAttribute("visible","true")}},{kind:"method",key:"getUserTransactions",value:async function(){const e=new Moralis.Query("EthTransactions");e.equalTo("to_address",this.current_address);const t=new Moralis.Query("EthTransactions");t.equalTo("from_address",this.current_address);let o=await e.find();console.log("Incoming transactions: ",o);let n=await t.find();console.log("Out coming transactions: ",n),B($e.transactions(o,n,(e=>{this.transaction_details(e)})),this.transactions_content);const i=await e.subscribe(),r=await t.subscribe();i.on("create",(e=>{console.log("A new incoming transaction: ",e),o=o.concat(e),B($e.transactions(o,n,(e=>{this.transaction_details(e)})),this.transactions_content)})),r.on("create",(e=>{console.log("A new out coming transaction: ",e),n=n.concat(e),B($e.transactions(o,n,(e=>{this.transaction_details(e)})),this.transactions_content)}))}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),this.style||(this.style="display: none;"),je.setup_component(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(je.login_component(this),this.getUserTransactions()):(je.logout_component(this),B(T``,this.transactions_content))),"visible"==o&&(this.style.display="block",1==this.visible?1==this.has_logined?(this.transactions_tools.style.display="block",this.transactions_content.style.display="block"):(this.transactions_tools.style.display="block",this.transactions_content.style.display="none"):(this.transactions_tools.style.display="none",this.transactions_content.style.display="none",this.style.display="none")),"theme"==o&&this.transaction_details_modal&&(this.transaction_details_modal.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be);var Ae={add_schedule:e=>T`
      <kor-grid columns="4">
        <kor-text grid-cols="1" size="body-1">Start since:</kor-text>
        <input grid-cols="2" type="date"
          @change="${t=>{e.start_date=t.target.value}}"
        >
        <kor-text grid-cols="4" size="body-1">at 12:00 PM</kor-text>
        <kor-slider grid-cols="4" value="720" min="0" max="1440" step="1"
          @value-changed="${t=>{e.start_time=Number.parseInt(t.target.value);const o=je.start_time_to_clock(e.start_time);t.target.parentElement.querySelectorAll("kor-text")[1].innerHTML="at "+o.hour.toFixed(0).padStart(2,"0")+":"+o.minute.toFixed(0).padStart(2,"0")+" "+o.am_pm}}"
        >
        </kor-slider>
        <kor-toggle grid-cols="4" label="Should be repeated"
          @active-changed="${t=>{const o=t.target.parentElement.querySelector("kor-card"),n=o.querySelector("kor-slider");t.target.active?(o.style.display="flex",e.interval_days=n.value):(o.style.display="none",e.interval_days=0)}}"
        >
        </kor-toggle>
        <kor-card grid-cols="4" style="display: none" flat>
          <kor-grid columns="1">
            <kor-text grid-cols="1" size="body-1">Repeat each 30 days</kor-text>
            <kor-slider grid-cols="1" value="30" min="0" max="366" step="1"
              @value-changed="${t=>{e.interval_days=Number.parseInt(t.target.value);t.target.parentElement.querySelector("kor-text").innerHTML="Repeat each "+e.interval_days.toFixed(0)+" days"}}"
            >
            </kor-slider>
          </kor-grid>
        </kor-card>
      </kor-grid>`,schedule_table:(e,t)=>T`
      <kor-card flat>
        <kor-text size="header-1">Schedule table</kor-text>
        <kor-table columns="repeat(5, 1fr) auto">
          <kor-table-row slot="header">
            <kor-table-cell head>To address</kor-table-cell>
            <kor-table-cell head>Amount in GWEI</kor-table-cell>
            <kor-table-cell head sortable sorted sort-direction="desc">Start date</kor-table-cell>
            <kor-table-cell head>Start time</kor-table-cell>
            <kor-table-cell head>Days interval</kor-table-cell>
            <kor-table-cell head></kor-table-cell>
          </kor-table-row>
          ${e.value.map((o=>T`
              <kor-table-row>
                <kor-table-cell>${o.transaction_data.destination_address}</kor-table-cell>
                <kor-table-cell>${o.transaction_data.amount_gwei}</kor-table-cell>
                <kor-table-cell>${o.schedule_data.start_date}</kor-table-cell>
                <kor-table-cell>${(()=>{const e=je.start_time_to_clock(o.schedule_data.start_time);return e.hour.toFixed(0).padStart(2,"0")+":"+e.minute.toFixed(0).padStart(2,"0")+" "+e.am_pm})()}</kor-table-cell>
                <kor-table-cell>${o.schedule_data.interval_days}</kor-table-cell>
                <kor-table-cell>
                  <kor-icon icon="delete" button
                    @click="${n=>{e.remove(o),setTimeout(t,500)}}"
                  ></kor-icon>
                </kor-table-cell>
              </kor-table-row>`))}
        </kor-table>
      </kor-card>`};r([fe("dapp-schedule")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"visible",value:()=>!1},{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[me("#scheduleTools",!1)],key:"schedule_tools",value:void 0},{kind:"field",decorators:[me("#scheduleDetails",!1)],key:"schedule_details",value:void 0},{kind:"field",decorators:[me("#addScheduleForm",!1)],key:"add_schedule_form",value:void 0},{kind:"field",decorators:[me("#notificationContainer",!0)],key:"notification_container",value:void 0},{kind:"field",decorators:[me("#transactionContent",!0)],key:"transaction_content",value:void 0},{kind:"field",decorators:[me("#scheduleContent",!0)],key:"schedule_content",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1})],key:"booked_addresses",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"web3_wrappers",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"schedule_table",value:()=>new xe},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"transaction_data_",value:()=>({gas_price:1,gas_limit:21e3})},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"schedule_data_",value:()=>({})},{kind:"get",static:!0,key:"styles",value:function(){}},{kind:"method",key:"render",value:function(){return T`
      <div id="scheduleTools" grid-rows="1" style="display: none">
        <kor-icon class="heading_icon" icon="schedule" color="var(--text-1)" size="m"></kor-icon>
        <kor-card class="heading_tools" flat>
          <kor-button label="Add a payment" color="Primary"
            @click="${e=>{this.web3_wrappers.metamask.eth.getBalance(this.current_address).then((e=>{B($e.add_transaction(e,[],this.booked_addresses,this.transaction_data_,!0),this.transaction_content),B(Ae.add_schedule(this.schedule_data_),this.schedule_content),this.add_schedule_form.setAttribute("visible","true")}))}}"
          ></kor-button>
        </kor-card>
      </div>
      <div id="scheduleDetails" grid-rows="9" style="display: none"></div>
      <kor-modal id="addScheduleForm" icon="today" label="Add a recurrent payment" theme="light"
        @visible-changed="${e=>{if(!e.target.visible){const e=this.notification_container.querySelector("kor-notification-item");e&&e.removeAttribute("visible")}}}"
      >
        <div id="notificationContainer"></div>
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card id="transactionContent" grid-cols="1" flat></kor-card>
            <kor-card id="scheduleContent" grid-cols="1" flat></kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Add" color="Primary" slot="footer"
          @click="${e=>{this.handleAddSchedule()}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"refresh_schedule",value:function(){B(Ae.schedule_table(this.schedule_table,(()=>{this.refresh_schedule()})),this.schedule_details)}},{kind:"method",key:"handleAddSchedule",value:function(){if(!je.check_transaction_data(this.transaction_data_,this.notification_container,!0))return;if(!je.check_schedule_data(this.schedule_data_,this.notification_container))return;const e={transaction_data:this.transaction_data_,schedule_data:this.schedule_data_};this.schedule_table.add(e),this.add_schedule_form.removeAttribute("visible"),B(Ae.schedule_table(this.schedule_table,(()=>{this.refresh_schedule()})),this.schedule_details);let t={};Object.assign(t,this.transaction_data_),this.transaction_data_=t,t={},Object.assign(t,this.schedule_data_),this.schedule_data_=t}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),this.style||(this.style="display: none;");const o=[...this.shadowRoot.querySelectorAll(":not(:defined)")].map((e=>customElements.whenDefined(e.localName)));Promise.all(o).then((()=>{je.setup_component(this),this.refresh_schedule()}))}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?je.login_component(this):je.logout_component(this)),"visible"==o&&this.schedule_tools&&this.schedule_details&&(1==this.visible?(this.style.display="block",1==this.has_logined?(this.schedule_tools.style.display="block",this.schedule_details.style.display="block"):(this.schedule_tools.style.display="none",this.schedule_details.style.display="block")):(this.schedule_tools.style.display="none",this.schedule_details.style.display="none",this.style.display="none")),"theme"==o&&this.add_schedule_form&&(this.add_schedule_form.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-add-transaction")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[me("#addTransaction",!0)],key:"add_transaction",value:void 0},{kind:"field",decorators:[me("kor-tooltip",!0)],key:"tooltip",value:void 0},{kind:"field",decorators:[me("#addTransactionForm",!1)],key:"add_transaction_form",value:void 0},{kind:"field",decorators:[me("#notificationContainer",!0)],key:"notification_container",value:void 0},{kind:"field",decorators:[me("#transactionContent",!0)],key:"transaction_content",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1})],key:"booked_addresses",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"web3_wrappers",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"transaction_data_",value:()=>({gas_price_gwei:1,gas_limit:21e3})},{kind:"method",key:"render",value:function(){return T`
      <kor-icon id="addTransaction" icon="credit_card" button style="display: none"
        @click="${e=>{this.tooltip.setAttribute("visible","false"),this.web3_wrappers.metamask.eth.getBalance(this.current_address).then((e=>{B($e.add_transaction(e,[],this.booked_addresses,this.transaction_data_,!0),this.transaction_content),this.add_transaction_form.setAttribute("visible","true")}))}}"
      ></kor-icon>
      <kor-tooltip position="left">Add a transaction</kor-tooltip>
      <kor-modal id="addTransactionForm" icon="credit_card" label="Add a transaction" theme="light"
        @visible-changed="${e=>{if(!e.target.visible){const e=this.notification_container.querySelector("kor-notification-item");e&&e.removeAttribute("visible")}}}"
      >
        <div id="notificationContainer"></div>
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card id="transactionContent" grid-cols="1" flat></kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Send" color="Primary" slot="footer"
          @click="${e=>{this.handleAddTransaction()}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"handleAddTransaction",value:function(){if(!je.check_transaction_data(this.transaction_data_,this.notification_container,!0))return;this.add_transaction_form.removeAttribute("visible"),console.log("The transaction's destination_address == ",this.transaction_data_.destination_address),console.log("The transaction's amount in GWEI == ",this.transaction_data_.amount_gwei);const e={from:this.current_address,to:this.transaction_data_.destination_address,value:this.transaction_data_.amount_gwei*Math.pow(10,9),gasPrice:this.transaction_data_.gas_price_gwei*Math.pow(10,9),gas:this.transaction_data_.gas_limit};console.log("The transactionObject == ",e),this.web3_wrappers.metamask.eth.sendTransaction(e,((e,t)=>{if(console.log("The sendTransaction error == ",e),console.log("The sendTransaction result == ",t),!e){this.booked_addresses.add(this.transaction_data_.destination_address),je.success_notifications(["The transaction was sent and will be shown in the Transactions tab after processing"],this.shadowRoot.page_notification);this.shadowRoot.page_notification.querySelector("kor-notification-item").setAttribute("visible","true")}let o={};Object.assign(o,this.transaction_data_),this.transaction_data_=o}))}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this);const o=[...this.shadowRoot.querySelectorAll(":not(:defined)")].map((e=>customElements.whenDefined(e.localName)));Promise.all(o).then((()=>{je.setup_component(this),this.tooltip.target=this.add_transaction}))}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(je.login_component(this),this.add_transaction.style.display="block"):(this.add_transaction.style.display="none",je.logout_component(this))),"theme"==o&&this.add_transaction_form&&(this.add_transaction_form.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-deposit-ethers")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>null},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[me("#depositEthers",!0)],key:"invoke_button",value:void 0},{kind:"field",decorators:[me("kor-tooltip",!0)],key:"tooltip",value:void 0},{kind:"field",decorators:[me("kor-modal",!0)],key:"deposit_form",value:void 0},{kind:"field",decorators:[me("#notificationContainer",!0)],key:"notification_container",value:void 0},{kind:"field",decorators:[me("#transactionContent",!0)],key:"transaction_content",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"web3_wrappers",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"transaction_data_",value:()=>({gas_price_gwei:1,gas_limit:2e5})},{kind:"method",key:"render",value:function(){return T`
      <kor-icon id="depositEthers" icon="shopping_basket" button style="display: none"
        @click="${e=>{this.tooltip.setAttribute("visible","false"),this.web3_wrappers.metamask.eth.getBalance(this.current_address).then((e=>{B($e.add_transaction(e,void 0,void 0,this.transaction_data_,!1),this.transaction_content),this.deposit_form.setAttribute("visible","true")}))}}"
      ></kor-icon>
      <kor-tooltip position="left">Deposit Ethers to get some Matic</kor-tooltip>
      <kor-modal icon="shopping_basket" label="Deposit Ethers to get some Matic" theme="light"
        @visible-changed="${e=>{if(!e.target.visible){const e=this.notification_container.querySelector("kor-notification-item");e&&e.removeAttribute("visible")}}}"
      >
        <div id="notificationContainer"></div>
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card id="transactionContent" grid-cols="1" flat></kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Deposit" color="Primary" slot="footer"
          @click="${e=>{this.handleDepositEthers()}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"handleDepositEthers",value:function(){je.check_transaction_data(this.transaction_data_,this.notification_container,!1)&&(this.deposit_form.removeAttribute("visible"),this.web3_wrappers.matic&&5==window.ethereum.networkVersion?this.web3_wrappers.matic.depositEther(parseInt(this.transaction_data_.amount_gwei)*Math.pow(10,9),{from:this.current_address,gasPrice:this.transaction_data_.gas_price_gwei*Math.pow(10,9),gasLimit:this.transaction_data_.gas_limit}).then((e=>{console.log("The deposit ethers response == ",e)})):console.log("To set up Matic.js switch to Goerli please"))}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this);const o=[...this.shadowRoot.querySelectorAll(":not(:defined)")].map((e=>customElements.whenDefined(e.localName)));Promise.all(o).then((()=>{je.setup_component(this),this.tooltip.target=this.invoke_button}))}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(je.login_component(this),this.invoke_button.style.display="block"):(this.invoke_button.style.display="none",je.logout_component(this))),"theme"==o&&this.deposit_form&&(this.deposit_form.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-switch-chain")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[me("kor-icon",!0)],key:"invoke_button",value:void 0},{kind:"field",decorators:[me("kor-modal",!1)],key:"invoke_form",value:void 0},{kind:"field",decorators:[ve({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"blockchain_index_",value:()=>0},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"blockchains_data_",value:()=>[{chainId:"0x5",chainName:"Goerli-Testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://goerli.infura.io/v3/undefined"],blockExplorerUrls:["https://goerli.etherscan.io"]},{chainId:"0x13881",chainName:"Mumbai-Testnet (Polygon-Matic)",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mumbai.maticvigil.com"],blockExplorerUrls:["https://explorer-mumbai.maticvigil.com"]},{chainId:"0x89",chainName:"Polygon (Matic) Network",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mainnet.maticvigil.com"],blockExplorerUrls:["https://explorer-mainnet.maticvigil.com"]}]},{kind:"method",key:"render",value:function(){return T`
      <kor-icon id="switchChain" icon="timeline" button style="display: none"
        @click="${e=>{this.invoke_form.setAttribute("visible","true")}}"
      ></kor-icon>
      <kor-modal icon="timeline" label="Let's add and switch into a chain" theme="${this.theme}">
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card grid-cols="1" flat>
              <kor-input type="select" label="Select a chain to add and switch to in Metamask" icon="view_list">
                ${this.blockchains_data_.map(((e,t)=>T`
                    <kor-menu-item label="${e.chainName}"
                      @click="${e=>{this.blockchain_index_=t}}"
                    ></kor-menu-item>`))}
              </kor-input>
            </kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Switch chain" color="Primary" slot="footer"
          @click="${e=>{this.handleSwitchChain()}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"handleSwitchChain",value:function(){window.ethereum?window.ethereum.request({method:"wallet_addEthereumChain",params:[this.blockchains_data_[this.blockchain_index_]]}).then((()=>{console.log("The chain switched")}),(e=>{console.log("The wallet_addEthereumChain error == ",e)})):console.log("Install Metamask please")}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(je.login_component(this),this.invoke_button.style.display="block"):(this.invoke_button.style.display="none",je.logout_component(this))),"theme"==o&&this.invoke_form&&(this.invoke_form.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-deploy-contract")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[me("kor-icon",!0)],key:"open_button",value:void 0},{kind:"field",decorators:[me("input",!0)],key:"file_input",value:void 0},{kind:"field",decorators:[me("kor-modal",!1)],key:"deployment_form",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"notification_container",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"web3_wrappers",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"contract_json_interface_",value:()=>null},{kind:"field",decorators:[ve({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"gas_price_gwei_",value:()=>1},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"errors_",value:()=>[]},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"successes_",value:()=>[]},{kind:"get",static:!0,key:"styles",value:function(){return Z`
      .dark input[type="file"] {
        filter: invert(100%);
      }`}},{kind:"method",key:"render",value:function(){return T`
      <kor-icon icon="input" button style="display: none"
        @click="${e=>{this.deployment_form.setAttribute("visible","true")}}"
      ></kor-icon>
      <kor-modal icon="input" label="Let's deploy a smart contract" theme="${this.theme}">
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card grid-cols="1" flat>
              <kor-input label="Gas price in GWEI for the deployment" type="number" min=1 value="${this.gas_price_gwei_}"
                @change="${e=>{this.gas_price_gwei_=parseInt(e.target.value)}}"
              ></kor-input>
              <input type="file"
                @change="${e=>{const t=e.target,o=new FileReader;o.onloadend=()=>{if(!o.result)return this.errors_=this.errors_.concat("A file reading error"),void je.error_notifications(this.errors_,this.notification_container);if(this.contract_json_interface_=JSON.parse(o.result),this.contract_json_interface_||(this.errors_=this.errors_.concat("The contract's JSON interface read error")),window.ethereum||(this.errors_=this.errors_.concat("A blockchain provider hasn't found in the window.ethereum, install Metamask please")),this.errors_.length)return void je.error_notifications(this.errors_,this.notification_container);if(this.contract_instance=new this.web3_wrappers.metamask.eth.Contract(this.contract_json_interface_.abi),!this.contract_instance)return this.errors_=this.errors_.concat("A contract instance creation error"),void je.error_notifications(this.errors_,this.notification_container);const e=t.parentElement.parentElement.parentElement.parentElement.querySelectorAll("kor-button");Array.from(e).map((e=>{e.removeAttribute("disabled")}))};const n=t.files[0];if(!n)return this.errors_=this.errors_.concat("Please specify a file with a contract's JSON ABI and bytecode"),void je.error_notifications(this.errors_,this.notification_container);o.readAsText(n)}}"
              >
            </kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Estimate a gas usage" color="Primary" slot="footer" disabled="true"
          @click="${e=>{this.contract_instance.deploy({data:this.contract_json_interface_.bytecode}).estimateGas(((e,t)=>{e&&(this.errors_=this.errors_.concat(e),je.error_notifications(this.errors_,this.notification_container)),t&&(this.successes_=this.successes_.concat("The contract deployment will use ["+t+"] gas"),je.success_notifications(this.successes_,this.notification_container))}))}}"
        ></kor-button>
        <kor-button label="Deploy the contract" color="Primary" slot="footer" disabled="true"
          @click="${e=>{if(!this.current_address||42!=this.current_address.toString().length)return this.errors_=this.errors_.concat("Please, fill a correct address from which the contract will be deployed"),void je.error_notifications(this.errors_,this.notification_container);je.send_transaction(this.contract_instance.deploy({data:this.contract_json_interface_.bytecode}),this.current_address,this.gas_price_gwei_,0,this.errors_,this.successes_,this.notification_container).then((e=>{this.successes_=this.successes_.concat("The contract was deployed at address == "+e.options.address.toString()),je.success_notifications(this.successes_,this.notification_container),this.contract_instance=e,this.dispatchEvent(new Event("contract-deployed",{bubbles:!0,composed:!0}))})),this.deployment_form.removeAttribute("visible")}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),je.setup_component(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(this.errors_=[],this.successes_=[],je.login_component(this),this.open_button.style.display="block"):(this.open_button.style.display="none",je.logout_component(this))),"theme"==o&&this.deployment_form&&(this.deployment_form.theme=this.theme,"dark"==this.theme?file_input.classList.add("dark"):file_input.classList.remove("dark")),"current_address"==o&&(this.successes_=this.successes_.concat("A contract will be deployed from that address == "+this.current_address),je.success_notifications(this.successes_,this.notification_container)),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-compile-deploy-contract")],(function(o,n){class i extends n{constructor(){if(super(),o(this),!window.Worker)return this.errors_=this.errors_.concat("This browser doesn't support the dedicated Web Worker, which is needed for the Solidity Compiler, therefore this component won't work."),void je.error_notifications(this.errors_,this.notification_container);const e=new Blob(["\n      /** Injects the Solidity Compiler of the latest version (0.8.4)\n       *  into the self.Module object avoiding a CORS blocking\n       *  and UI thread blocking of the WebAssembly.compile invoking */\n      importScripts('https://solc-bin.ethereum.org/bin/soljson-latest.js');\n      console.log(\"The Solidity Compiler (solc-js) object == \", Module);\n      if (!Module.cwrap || !Module._solidity_compile || !Module._solidity_reset) {\n        throw \"The self.Module hasn't crucial properties, which are needed for the Solidity Compiler\";\n      }\n      if (Module._solidity_version) {\n        /** @const {Function} */\n        const solidity_version = Module.cwrap('solidity_version', 'string', []);\n        console.log(\"The solidity version == \", solidity_version());\n      }\n      /** The objects below were fetched from this code:\n       * {@link https://github.com/ethereum/solc-js/blob/master/wrapper.js}\n       * @const {Object} */\n      const compile =\n        Module.cwrap('solidity_compile', 'string', ['string', 'number']);\n      /** @const {Object} */\n      const reset = Module.cwrap('solidity_reset', null, []);\n      onmessage = (e) => {\n        /** @const {Object} */\n        const output = compile.apply(undefined, [e.data]);\n        reset();\n        postMessage(output);\n      };\n    "]),t=window.URL.createObjectURL(e);this.solc_worker_=new Worker(t),this.solc_worker_.addEventListener("error",(e=>{this.errors_=this.errors_.concat(`Solc worker error: line ${e.lineno} in ${e.filename} : ${e.message}`),je.error_notifications(this.errors_,this.notification_container)})),this.solc_worker_.addEventListener("message",(e=>{this.handleCompiledContract(e)}))}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[me("kor-icon",!0)],key:"open_button",value:void 0},{kind:"field",decorators:[me("input",!0)],key:"file_input",value:void 0},{kind:"field",decorators:[me("kor-modal",!1)],key:"deployment_form",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"notification_container",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"web3_wrappers",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"solc_worker_",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"compiled_contract_",value:()=>null},{kind:"field",decorators:[ve({type:String,reflect:!1,noAccessor:!0,state:!0})],key:"contract_filename_",value:()=>null},{kind:"field",decorators:[ve({type:String,reflect:!1,noAccessor:!0,state:!0})],key:"contract_filename_short_",value:()=>null},{kind:"field",decorators:[ve({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"gas_price_gwei_",value:()=>1},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"errors_",value:()=>[]},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"successes_",value:()=>[]},{kind:"get",static:!0,key:"styles",value:function(){return Z`
      .dark input[type="file"] {
        filter: invert(100%);
      }`}},{kind:"method",key:"render",value:function(){return T`
      <kor-icon icon="get_app" button style="display: none"
        @click="${e=>{this.deployment_form.setAttribute("visible","true")}}"
      ></kor-icon>
      <kor-modal icon="get_app" label="Let's compile & deploy a smart contract" theme="${this.theme}">
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card grid-cols="1" flat>
              <kor-input label="Gas price in GWEI for the deployment" type="number" min=1 value="${this.gas_price_gwei_}"
                @change="${e=>{this.gas_price_gwei_=parseInt(e.target.value)}}"
              ></kor-input>
              <input type="file"
                @change="${e=>{const t=e.target,o=new FileReader;if(o.onloadend=()=>{if(o.result||(this.errors_=this.errors_.concat("A file reading error")),window.ethereum||(this.errors_=this.errors_.concat("A blockchain provider hasn't found in the window.ethereum, install Metamask please")),this.errors_.length)return void je.error_notifications(this.errors_,this.notification_container);const e={language:"Solidity",sources:{[this.contract_filename_]:{content:o.result}},settings:{outputSelection:{"*":{"*":["*"]}}}};console.log("The solc input == ",e),this.solc_worker_.postMessage(JSON.stringify(e))},!t.files[0]||!t.files[0].name)return this.errors_=this.errors_.concat("Please specify a file with a contract's code to compile"),void je.error_notifications(this.errors_,this.notification_container);this.contract_filename_=t.files[0].name,this.contract_filename_short_=this.contract_filename_.replace(/\.[^.]+$/,""),o.readAsText(t.files[0])}}"
              >
            </kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Estimate a gas usage" color="Primary" slot="footer" disabled="true"
          @click="${e=>{this.contract_instance.deploy({data:this.compiled_contract_.contracts[this.contract_filename_][this.contract_filename_short_].evm.bytecode.object}).estimateGas(((e,t)=>{e&&(this.errors_=this.errors_.concat(e),je.error_notifications(this.errors_,this.notification_container)),t&&(this.successes_=this.successes_.concat("The contract deployment will use ["+t+"] gas"),je.success_notifications(this.successes_,this.notification_container))}))}}"
        ></kor-button>
        <kor-button label="Deploy the contract" color="Primary" slot="footer" disabled="true"
          @click="${e=>{if(!this.current_address||42!=this.current_address.toString().length)return this.errors_=this.errors_.concat("Please, fill a correct address from which the contract will be deployed"),void je.error_notifications(this.errors_,this.notification_container);je.send_transaction(this.contract_instance.deploy({data:this.compiled_contract_.contracts[this.contract_filename_][this.contract_filename_short_].evm.bytecode.object}),this.current_address,this.gas_price_gwei_,0,this.errors_,this.successes_,this.notification_container).then((e=>{this.successes_=this.successes_.concat("The contract was deployed at address == "+e.options.address.toString()),je.success_notifications(this.successes_,this.notification_container),this.contract_instance=e,this.dispatchEvent(new Event("contract-deployed",{bubbles:!0,composed:!0}))})),this.deployment_form.removeAttribute("visible")}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"handleCompiledContract",value:function(e){if(this.compiled_contract_=JSON.parse(e.data),console.log("The solc output == ",this.compiled_contract_),!(this.compiled_contract_.contracts&&this.compiled_contract_.contracts[this.contract_filename_]&&this.compiled_contract_.contracts[this.contract_filename_]&&this.compiled_contract_.contracts[this.contract_filename_][this.contract_filename_short_]))return this.errors_=this.errors_.concat(`The contract ${this.contract_filename_} can't be compiled`),this.compiled_contract_.errors&&(this.errors_=this.errors_.concat(this.compiled_contract_.errors[0].formattedMessage)),void je.error_notifications(this.errors_,this.notification_container);if(this.contract_instance=new this.web3_wrappers.metamask.eth.Contract(this.compiled_contract_.contracts[this.contract_filename_][this.contract_filename_short_].abi),!this.contract_instance)return this.errors_=this.errors_.concat("A contract instance creation error"),void je.error_notifications(this.errors_,this.notification_container);const t=this.shadowRoot.querySelectorAll("kor-button");Array.from(t).map((e=>{e.removeAttribute("disabled")}))}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),je.setup_component(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(this.errors_=[],this.successes_=[],je.login_component(this),this.open_button.style.display="block"):(this.open_button.style.display="none",je.logout_component(this))),"theme"==o&&this.deployment_form&&(this.deployment_form.theme=this.theme,"dark"==this.theme?file_input.classList.add("dark"):file_input.classList.remove("dark")),"current_address"==o&&(this.successes_=this.successes_.concat("A contract will be deployed from that address == "+this.current_address),je.success_notifications(this.successes_,this.notification_container)),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-create-subscription-product")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[ve({type:Number,reflect:!0})],key:"productID",value:()=>null},{kind:"field",decorators:[me("kor-icon",!0)],key:"open_button",value:void 0},{kind:"field",decorators:[me("kor-modal",!1)],key:"user_form",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"notification_container",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"amount_gwei_",value:()=>1},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"billing_interval_secs_",value:()=>1},{kind:"field",decorators:[ve({type:Number,reflect:!1,noAccessor:!0,state:!0})],key:"gas_price_gwei_",value:()=>1},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"errors_",value:()=>[]},{kind:"field",decorators:[ve({type:Array,reflect:!1,noAccessor:!0,state:!0})],key:"successes_",value:()=>[]},{kind:"method",key:"render",value:function(){return T`
      <kor-icon icon="touch_app" button style="display: none"
        @click="${e=>{this.user_form.setAttribute("visible","true")}}"
      ></kor-icon>
      <kor-modal icon="touch_app" label="Add a new product" theme="${this.theme}">
        <kor-card flat>
          <kor-grid columns="1" fit-content>
            <kor-card grid-cols="1" flat>
              <kor-input label="Amount in GWEI" type="number" min=1 value="${this.amount_gwei_}"
                @change="${e=>{this.amount_gwei_=parseInt(e.target.value)}}"
              ></kor-input>
              <kor-input label="Billing interval in seconds" type="number" min=1 value="${this.billing_interval_secs_}"
                @change="${e=>{this.billing_interval_secs_=parseInt(e.target.value)}}"
              ></kor-input>
              <kor-input label="Gas price in GWEI" type="number" min=1 value="${this.gas_price_gwei_}"
                @change="${e=>{this.gas_price_gwei_=parseInt(e.target.value)}}"
              ></kor-input>
            </kor-card>
          </kor-grid>
        </kor-card>
        <kor-button label="Create" color="Primary" slot="footer"
          @click="${e=>{if(!this.contract_instance)return this.errors_=this.errors_.concat("Please set a contract instance into this component"),void je.error_notifications(this.errors_,this.notification_container);const t=this.contract_instance.methods.createSubscriptionProduct(this.amount_gwei_*Math.pow(10,9),this.billing_interval_secs_);console.log("The transaction_object == ",t),je.send_transaction(t,this.current_address,this.gas_price_gwei_,0,this.errors_,this.successes_,this.notification_container).then((e=>{this.successes_=this.successes_.concat(JSON.stringify(e)),je.success_notifications(this.successes_,this.notification_container),console.log(e),this.productID=e.events.subscriptionProductCreated.returnValues.productID,this.dispatchEvent(new Event("subscription-product-created",{bubbles:!0,composed:!0}))})),this.user_form.removeAttribute("visible")}}"
        ></kor-button>
      </kor-modal>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this),je.setup_component(this)}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"has_logined"==o&&(1==this.has_logined?(this.errors_=[],this.successes_=[],je.login_component(this),this.open_button.style.display="block"):(this.open_button.style.display="none",je.logout_component(this))),"theme"==o&&this.user_form&&(this.user_form.theme=this.theme),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be),r([fe("dapp-main")],(function(o,n){class i extends n{constructor(){super(),o(this)}}return{F:i,d:[{kind:"field",decorators:[ve({type:Boolean,reflect:!0})],key:"has_logined",value:()=>!1},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"theme",value:()=>"light"},{kind:"field",decorators:[ve({type:String,reflect:!0})],key:"current_address",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1})],key:"current_user",value:()=>null},{kind:"field",decorators:[ve({type:Object,reflect:!1})],key:"contract_instance",value:()=>null},{kind:"field",decorators:[me("kor-page",!1)],key:"page",value:void 0},{kind:"field",decorators:[me("dapp-menu",!0)],key:"menu",value:void 0},{kind:"field",decorators:[me("dapp-tab-strip",!0)],key:"tab_strip",value:void 0},{kind:"field",decorators:[me("#pageNotification",!0)],key:"page_notification",value:void 0},{kind:"field",decorators:[me("dapp-summary",!0)],key:"summary",value:void 0},{kind:"field",decorators:[me("dapp-subscriptions",!0)],key:"subscriptions",value:void 0},{kind:"field",decorators:[me("dapp-transactions",!0)],key:"transactions",value:void 0},{kind:"field",decorators:[me("dapp-schedule",!0)],key:"schedule",value:void 0},{kind:"field",decorators:[me("dapp-add-transaction",!0)],key:"add_transaction",value:void 0},{kind:"field",decorators:[me("dapp-switch-chain",!0)],key:"switch_chain",value:void 0},{kind:"field",decorators:[me("dapp-deposit-ethers",!0)],key:"deposit_ethers",value:void 0},{kind:"field",decorators:[me("dapp-deploy-contract",!0)],key:"deploy_contract",value:void 0},{kind:"field",decorators:[me("dapp-compile-deploy-contract",!0)],key:"compile_deploy_contract",value:void 0},{kind:"field",decorators:[me("dapp-create-subscription-product",!0)],key:"create_subscription_product",value:void 0},{kind:"field",decorators:[ye(":not(:defined)")],key:"undefined_elements",value:void 0},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"booked_addresses",value:()=>new we},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0})],key:"web3_wrappers",value:()=>({})},{kind:"field",decorators:[ve({type:Object,reflect:!1,noAccessor:!0,state:!0})],key:"handle_login_logout_",value:()=>null},{kind:"method",key:"render",value:function(){return T`
      <kor-page flat theme="${this.theme}" flex-direction="column">
        <div id="pageNotification"></div>
        <kor-app-bar slot="top" label="The crypto-subscriptions DApp" logo="https://webatix.github.io/test/xrp.svg">
          <dapp-add-transaction slot="functions"></dapp-add-transaction>
          <dapp-switch-chain slot="functions"></dapp-switch-chain>
          <dapp-deposit-ethers slot="functions"></dapp-deposit-ethers>
          <dapp-deploy-contract slot="functions"
            @contract-deployed="${e=>{console.log("The contract deployed, the contract_instance == ",e.target.contract_instance),this.contract_instance.value=e.target.contract_instance,this.create_subscription_product.contract_instance=this.contract_instance.value,this.subscriptions.subscribe.contract_instance=this.contract_instance.value}}"
          ></dapp-deploy-contract>
          <dapp-compile-deploy-contract slot="functions"
            @contract-deployed="${e=>{console.log("The contract deployed, the contract_instance == ",e.target.contract_instance),this.contract_instance.value=e.target.contract_instance,this.create_subscription_product.contract_instance=this.contract_instance.value,this.subscriptions.subscribe.contract_instance=this.contract_instance.value}}"
          ></dapp-compile-deploy-contract>
          <dapp-create-subscription-product slot="functions"
            @subscription-product-created="${e=>{console.log("The subscription product created with ID == ",e.target.productID)}}"
          ></dapp-create-subscription-product>
          <dapp-menu slot="functions"
            @has_logined-changed="${e=>{this.has_logined=e.target.has_logined}}"
          ></dapp-menu>
        </kor-app-bar>
        <kor-grid columns="1" rows="10">
          <dapp-summary></dapp-summary>
          <dapp-subscriptions></dapp-subscriptions>
          <dapp-transactions></dapp-transactions>
          <dapp-schedule></dapp-schedule>
        </kor-grid>
        <kor-nav-bar slot="bottom">
          <dapp-tab-strip></dapp-tab-strip>
        </kor-nav-bar>
      </kor-page>`}},{kind:"method",key:"connectedCallback",value:function(){t(e(i.prototype),"connectedCallback",this).call(this);const o=[...this.undefined_elements].map((e=>customElements.whenDefined(e.localName)));Promise.all(o).then((()=>{window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.theme="dark"),this.tab_strip.tabs=[{label:"Summary",component:this.summary},{label:"Subscriptions",component:this.subscriptions},{label:"Transactions",component:this.transactions},{label:"Schedule",component:this.schedule}],this.handle_login_logout_=Ce.Init([this.summary,this.subscriptions,this.transactions,this.schedule,this.add_transaction,this.switch_chain,this.deposit_ethers,this.deploy_contract,this.compile_deploy_contract,this.create_subscription_product],this)}))}},{kind:"method",key:"attributeChangedCallback",value:function(o,n,r){t(e(i.prototype),"attributeChangedCallback",this).call(this,o,n,r),"theme"==o&&this.page&&(this.page.theme=this.theme),"has_logined"==o&&this.handle_login_logout_&&this.handle_login_logout_(),this.dispatchEvent(new Event(`${o}-changed`))}}]}}),be);const Te={tmpl:document.getElementById("appTemplate").content};document.addEventListener("DOMContentLoaded",(()=>{Moralis.initialize("pnj2ou0ivNkr2xnWIQIKZjwhcbJgC6hO69CasCTS"),Moralis.serverURL="https://kcmeib0ovv6c.moralis.io:2053/server";const e=document.getElementsByTagName("body")[0];e.removeChild(document.getElementById("startupContent")),e.appendChild(Te.tmpl)}));
//# sourceMappingURL=bundle.js.map
