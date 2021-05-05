/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,e,o,r;!function(t){var e={};function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=50)}([function(t,e,o){o.d(e,"d",(function(){return Z})),o.d(e,"c",(function(){return D})),o.d(e,"b",(function(){return tt})),o.d(e,"a",(function(){return ot}));const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,a=new RegExp(`${n}|${s}`);class l{constructor(t,e){this.parts=[],this.element=e;const o=[],r=[],i=document.createTreeWalker(e.content,133,null,!1);let s=0,l=-1,d=0;const{strings:u,values:{length:g}}=t;for(;d<g;){const t=i.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let r=0;for(let t=0;t<o;t++)c(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=u[d],o=p.exec(e)[2],r=o.toLowerCase()+"$lit$",i=t.getAttribute(r);t.removeAttribute(r);const n=i.split(a);this.parts.push({type:"attribute",index:l,name:o,strings:n}),d+=n.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const r=t.parentNode,i=e.split(a),n=i.length-1;for(let e=0;e<n;e++){let o,n=i[e];if(""===n)o=h();else{const t=p.exec(n);null!==t&&c(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),o=document.createTextNode(n)}r.insertBefore(o,t),this.parts.push({type:"node",index:++l})}""===i[n]?(r.insertBefore(h(),t),o.push(t)):t.data=i[n],d+=n}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&l!==s||(l++,e.insertBefore(h(),t)),s=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(o.push(t),l--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),d++}}else i.currentNode=r.pop()}for(const t of o)t.parentNode.removeChild(t)}}const c=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},d=t=>-1!==t.index,h=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:o},parts:r}=t,i=document.createTreeWalker(o,133,null,!1);let n=b(r),s=r[n],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,n=b(r,n),s=r[n]}c.forEach((t=>t.parentNode.removeChild(t)))}const g=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},b=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(d(e))return o}return-1},v=new WeakMap,f=t=>"function"==typeof t&&v.has(t),m={},y={};class w{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],o=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,s=0,a=0,l=i.nextNode();for(;s<o.length;)if(n=o[s],d(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}const x=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),k=` ${n} `;class S{constructor(t,e,o,r){this.strings=t,this.values=e,this.type=o,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let r=0;r<t;r++){const t=this.strings[r],i=t.lastIndexOf("\x3c!--");o=(i>-1||o)&&-1===t.indexOf("--\x3e",i+1);const a=p.exec(t);e+=null===a?t+(o?k:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==x&&(e=x.createHTML(e)),t.innerHTML=e,t}}const O=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class j{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new E(this)}_getValue(){const t=this.strings,e=t.length-1,o=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=o[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!_(t))return t}let r="";for(let i=0;i<e;i++){r+=t[i];const e=o[i];if(void 0!==e){const t=e.value;if(O(t)||!_(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||O(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class ${constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(O(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):_(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const o=new w(e,t.processor,this.options),r=o._clone();o.update(t.values),this.__commitNode(r),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,r=0;for(const i of t)o=e[r],void 0===o&&(o=new $(this.options),e.push(o),0===r?o.appendIntoPart(this):o.insertAfterPart(e[r-1])),o.setValue(i),o.commit(),r++;r<e.length&&(e.length=r,this.clear(o&&o.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class P extends j{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new R(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class R extends E{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class B{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=z(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const z=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function N(t){let e=A.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},A.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n);return o=e.keyString.get(r),void 0===o&&(o=new l(t,t.getTemplateElement()),e.keyString.set(r,o)),e.stringsArray.set(t.strings,o),o}const A=new Map,I=new WeakMap,M=new class{handleAttributeExpressions(t,e,o,r){const i=e[0];return"."===i?new P(t,e.slice(1),o).parts:"@"===i?[new B(t,e.slice(1),r.eventContext)]:"?"===i?[new C(t,e.slice(1),o)]:new j(t,e,o).parts}handleTextExpression(t){return new $(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const D=(t,...e)=>new S(t,e,"html",M),L=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const F=t=>e=>{const o=L(e.type,t);let r=A.get(o);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},A.set(o,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(n);if(i=r.keyString.get(s),void 0===i){const o=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(o,t),i=new l(e,o),r.keyString.set(s,i)}return r.stringsArray.set(e.strings,i),i},U=["html","svg"],V=new Set;window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:W};class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,o)=>{const r=this._attributeNameForProperty(o,e);void 0!==r&&(this._attributeToPropertyMap.set(r,o),t.push(r))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdateInternal(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=W){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,r=e.converter||q,i="function"==typeof r?r:r.fromAttribute;return i?i(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,r=e.converter;return(r&&r.toAttribute||q.toAttribute)(t,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=J){const r=this.constructor,i=r._attributeNameForProperty(t,o);if(void 0!==i){const t=r._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,r=o._attributeToPropertyMap.get(t);if(void 0!==r){const t=o.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,o){let r=!0;if(void 0!==t){const i=this.constructor;o=o||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}K.finalized=!0;const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function Z(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):X(t,e)}const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class Y{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const o=e.reduce(((e,o,r)=>e+(t=>{if(t instanceof Y)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]);return new Y(o,G)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class ot extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,o)=>t.reduceRight(((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t)),o),o=e(t,new Set),r=[];o.forEach((t=>r.unshift(t))),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Y(String(e),G)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return et}}ot.finalized=!0,ot.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const r=o.scopeName,n=I.has(e),s=H&&11===e.nodeType&&!!e.host,a=s&&!V.has(r),l=a?document.createDocumentFragment():e;if(((t,e,o)=>{let r=I.get(e);void 0===r&&(i(e,e.firstChild),I.set(e,r=new $(Object.assign({templateFactory:N},o))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:F(r)},o)),a){const t=I.get(l);I.delete(l);((t,e,o)=>{V.add(t);const r=o?o.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(r,t);const s=document.createElement("style");for(let t=0;t<n;t++){const e=i[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{U.forEach((e=>{const o=A.get(L(e,t));void 0!==o&&o.keyString.forEach((t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{o.add(t)})),u(t,o)}))}))})(t);const a=r.content;o?function(t,e,o=null){const{element:{content:r},parts:i}=t;if(null==o)return void r.appendChild(e);const n=document.createTreeWalker(r,133,null,!1);let s=b(i),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===o&&(a=g(e),o.parentNode.insertBefore(e,o));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=b(i,s);return}s=b(i,s)}}(o,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(o){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),u(o,t)}})(r,l,t.value instanceof w?t.value.template:void 0),i(e,e.firstChild),e.appendChild(l),I.set(e,t)}!n&&s&&window.ShadyCSS.styleElement(e.host)}},function(t,e,o){o.d(e,"a",(function(){return r}));const r=o(0).b`
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
`},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c` ${this.icon.indexOf("url")?r.c` ${this.icon} `:""}`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"color"==t?this.style.color=this.color:"icon"==t&&o.indexOf("url")>-1&&this.setBackgroundImage(o)}setBackgroundImage(t){this.style.backgroundImage=t}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"size",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"color",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",s)},function(t,e,o){o.r(e);var r=o(2);o.d(e,"korIcon",(function(){return r.a}))},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`<slot></slot>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&(this.style.color=this.color)}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"size",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",s)},function(t,e,o){o.r(e);var r=o(4);o.d(e,"korText",(function(){return r.a}))},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.flat=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.image?r.c` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?r.c`
                <div class="label">
                  ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":r.c` <div style="margin-top: 16px"></div> `}
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
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"image",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",s)},function(t,e,o){o.r(e);var r=o(6);o.d(e,"korCard",(function(){return r.a}))},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.mobile?r.c`
            <slot name="left"></slot>
            ${this.label?r.c` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:r.c`
            ${this.logo?r.c`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?r.c` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"logo",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(7),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        @wheel="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?void 0:"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target?this.targetObserver():"visible"===t&&this.visible&&this.visibleObserver()}targetObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&t.addEventListener("click",(()=>this.handlePosition(t)))}visibleObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&this.handlePosition(t),!this.sticky&&this.target&&this.addDocListener(t)}handlePosition(t){if(!t)return;let e=this,o=t.getBoundingClientRect();e.visible=!0,e.position.startsWith("bottom")?e.style.top=o.top+o.height+8+"px":e.position.startsWith("top")?e.style.top=o.top-e.clientHeight-8+"px":e.style.top=o.top+o.height/2-e.clientHeight/2+"px",e.position.startsWith("right")?e.style.left=o.left+o.width+8+"px":e.position.startsWith("left")?e.style.left=o.left-e.clientWidth-8+"px":e.style.left=o.left+o.width/2-e.clientWidth/2+"px"}addDocListener(t){let e=this,o=function(r){(r.target!==t&&"click"===r.type||"wheel"===r.type)&&(e.visible=!1,document.removeEventListener("click",o),document.removeEventListener("wheel",o))};document.addEventListener("click",o),document.addEventListener("wheel",o)}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"position",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"target",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(7),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${t=>this.handleCollapse(t)}"
        >
          <div class="header">
            ${this.icon?r.c` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
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
        ${this.expanded?r.c`
              <slot
                name="footer"
                slot="${this.emptyFooter?void 0:"footer"}"
                @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.shadowRoot.querySelector("kor-card").shadowRoot.querySelector(".top").style.padding="0"}),0)}handleCollapse(t){this.expanded&&(this.expanded=!1,t.stopPropagation())}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"expanded",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyBody",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-accordion")||window.customElements.define("kor-accordion",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <!-- image -->
      <div class="image">
        ${this.image?r.c` <img src="${this.image}" /> `:r.c`
              ${this.label?r.c` ${this.getInitials(this.label)} `:r.c` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?r.c`
            <div class="text">
              ${this.label?r.c`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?r.c`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getInitials(t){var e=t.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"info",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"image",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),window.customElements.get("kor-avatar")||window.customElements.define("kor-avatar",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.status?r.c`
            <!-- status -->
            ${this.status?r.c`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:r.c`
            ${this.label?r.c`
                  <kor-text size="body-2">
                    ${this.label>999?r.c` 999+ `:r.c` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}}n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"status",void 0),window.customElements.get("kor-badge")||window.customElements.define("kor-badge",s)},function(t,e,o){o.d(e,"a",(function(){return n}));var r=o(0),i=o(1);class n extends r.a{static get styles(){return[i.a,r.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return r.c` <slot></slot> `}}window.customElements.get("kor-breadcrumbs")||window.customElements.define("kor-breadcrumbs",n)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.label="Label",this.active=!1}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.firstItem()?"":r.c`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}firstItem(){let t,e;return e=Array.prototype.slice.call(this.parentElement.children),t=0==e.indexOf(this),t}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),window.customElements.get("kor-breadcrumb-item")||window.customElements.define("kor-breadcrumb-item",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.label="Label",this.color="primary"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:r.c` ${this.label} `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"color",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-button")||window.customElements.define("kor-button",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="box">
        ${this.active?r.c` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?r.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>{this.active=!this.active}))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-checkbox")||window.customElements.define("kor-checkbox",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`<div class="line"></div>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"spacing",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(7),o(3),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":r.c`
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
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",(()=>this.sticky?"":this.visible=!1))}getCardSize(){let t={height:void 0,width:void 0};switch(this.position){case"left":case"right":t.height="100%",t.width=this.width;break;case"top":case"bottom":t.height=this.height,t.width="100%"}return t}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"position",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"height",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"width",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-drawer")||window.customElements.define("kor-drawer",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.icon?r.c`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?r.c` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),window.customElements.get("kor-empty-state")||window.customElements.define("kor-empty-state",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`<slot></slot>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"columns"===t?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===t&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"columns",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"rows",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?r.c` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"src",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"alt",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"width",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"height",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"fit",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"legend",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"legend-position"})],s.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(7),o(3),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(),this.type="text",this.step=1,this.addEventListener("click",(()=>{this.active=!0,this.shadowRoot.querySelector("input").focus()}))}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.icon?r.c` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?r.c` <label class="label">${this.label}</label> `:""}
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
      ${"select"===this.type?r.c`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?r.c`
                  <kor-card
                    @wheel="${t=>t.stopPropagation()}"
                    class="select-menu"
                    .style="top: ${this.getMenuStyles().top}; left: ${this.getMenuStyles().left}; width: ${this.getMenuStyles().width};"
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date -->
      ${"date"===this.type?r.c` <kor-icon button class="date-icon" icon="event"></kor-icon> `:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":r.c`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${()=>this.handleClear()}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?r.c`
            <kor-icon
              class="status-icon"
              icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${"number"!==this.type||this.readonly?"":r.c`
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
    `}handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}handleBlur(t){"number"===this.type&&this.validateMinMax(t.target.value),"select"!==this.type&&(this.active=!1)}handleIncrement(t){"left"===t?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)-this.step):"right"===t&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)+this.step)}handleItems(t){const e=t.target.assignedNodes();e.forEach((t=>{"KOR-MENU-ITEM"===t.tagName&&t.addEventListener("active-changed",(o=>{o.target.active&&(e.forEach((t=>{t.active=!1})),o.target.active=!0,this.value=t.label,this.active=!1)}))}))}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"active"==t&&this.active&&"select"==this.type&&this.handleMenu()}handleMenu(){const t=this,e=function(o){("click"===o.type&&o.target!==t||"wheel"===o.type)&&(t.active=!1,document.removeEventListener("click",e),document.removeEventListener("wheel",e))};document.addEventListener("click",e),document.addEventListener("wheel",e)}validateMinMax(t){t&&(this.min&&t<this.min?this.value=this.min:t>this.max?this.value=this.max:this.value=t)}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"value",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"name",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"type",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"status",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),n([Object(r.d)({type:Boolean,reflect:!0,attribute:"no-clear"})],s.prototype,"noClear",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"autofocus",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"pattern",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"min",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"max",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"step",void 0),window.customElements.get("kor-input")||window.customElements.define("kor-input",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?r.c` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",(()=>{this.active=!this.active}))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(7),o(3),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":r.c`
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
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",(()=>this.sticky?"":this.visible=!1))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"height",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"width",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-modal")||window.customElements.define("kor-modal",s)},function(t,e,o){o.d(e,"a",(function(){return n}));var r=o(0),i=o(1);o(26);class n extends r.a{static get styles(){return[i.a,r.b`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return r.c`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}}window.customElements.get("kor-nav-bar")||window.customElements.define("kor-nav-bar",n)},function(t,e,o){o.r(e);var r=o(8);o.d(e,"korAppBar",(function(){return r.a}))},function(t,e,o){o.d(e,"a",(function(){return n}));var r=o(0),i=o(1);class n extends r.a{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`<slot></slot>`}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}(function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.d)({type:String,reflect:!0})],n.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",n)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(7),o(3),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":r.c`
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
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{constructor(){super(...arguments),this.padding="16px",this.flexDirection="row",this.flat=!1,this.scrollable=!1}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"theme",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"padding",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(7),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
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
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"size",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-pane")||window.customElements.define("kor-pane",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.size="m",this.radial=!1,this.showProgress=!1}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <!-- header -->
      ${this.label||this.showProgress?r.c`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?r.c` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?r.c`
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
              ${this.showProgress?r.c` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:r.c`
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
      ${this.info||this.status?r.c`
            <div class="footer">
              <!-- status -->
              ${this.status?r.c`
                    <kor-icon
                      class="status-icon"
                      icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?r.c`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getSize(){let t;switch(this.size){case"s":t=48;break;case"m":t=64;break;case"l":t=80}return t}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"info",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"status",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"color",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"size",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"value",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"radial",void 0),n([Object(r.d)({type:Boolean,reflect:!0,attribute:"show-progress"})],s.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <input
        type="radio"
        ?checked="${this.active}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="circle"></div>
      ${this.label?r.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){this.parentElement.childNodes.forEach((t=>{t.active=!1})),this.active=!0}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-radio-button")||window.customElements.define("kor-radio-button",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.label?r.c`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?r.c`
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
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"value"!==t&&"min"!==t&&"max"!==t||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(t){t>=this.min&&t<=this.max?this.value=t:t<this.min?this.value=this.min:t>this.max&&(this.value=this.max)}handleThumbPosition(){const t=this.shadowRoot.querySelector(".thumb"),e=(this.value-this.min)/(this.max-this.min)*100;t&&e>=0&&e<=100&&(t.style.left=e+"%")}handleThumbDrag(t){const e=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let o="mousedown"===t.type?t.clientX:t.touches[0].clientX;const r=t=>{t.preventDefault();const r="mousemove"===t.type?t.clientX:t.touches[0].clientX,i=r-o;if(i>e||-1*i>e){const t=Math.floor(i<0?-1*i:i),n=Math.round(t/e),s=i>0?this.value+this.step*n:this.value-this.step*n;s<=this.max&&s>=this.min&&(this.value=s,o=r)}},i=()=>{window.removeEventListener("mousemove",r),window.removeEventListener("touchmove",r),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",i)};window.addEventListener("mousemove",r),window.addEventListener("touchmove",r),window.addEventListener("mouseup",i),window.addEventListener("touchend",i)}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"value",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"min",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"max",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"step",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
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
      ${this.label?r.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}getSize(){let t;switch(this.size){case"s":t=24;break;case"m":t=32;break;case"l":t=40}return t}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"size",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",s)},function(t,e,o){o.d(e,"a",(function(){return n}));var r=o(0),i=o(1);class n extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}handleOrientation(){this.childNodes.forEach((t=>{t.orientation=this.orientation}))}handleItems(){let t,e;t=Array.prototype.slice.call(this.children),e=this.children.length,t.forEach((t=>{t.first=1==t.index,t.last=t.index==e}))}}(function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.d)({type:String,reflect:!0})],n.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",n)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <!-- circle -->
      <div class="circle">
        ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:r.c`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?r.c` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?r.c` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":r.c` <div class="line before"></div> `}
      ${this.last?"":r.c` <div class="line after"></div> `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",(()=>{this.parentElement.childNodes.forEach((t=>{t.active=!1})),this.active=!0}))}getIndex(){let t;t=Array.prototype.slice.call(this.parentElement.children),this.index=t.indexOf(this)+1}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"info",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"index",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"first",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"last",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",s)},function(t,e,o){o.d(e,"a",(function(){return n}));var r=o(0),i=o(1);class n extends r.a{static get styles(){return[i.a,r.b`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return r.c` <slot></slot> `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}window.customElements.get("kor-switch")||window.customElements.define("kor-switch",n)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?r.c` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleActive(){this.parentElement.childNodes.forEach((t=>{t.active=!1})),this.active=!0}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-switch-item")||window.customElements.define("kor-switch-item",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?r.c` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive()))}handleActive(){this.closest("kor-tabs").querySelectorAll("kor-tab-item").forEach((t=>{t.active=!1})),this.active=!0}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",s)},function(t,e,o){o.d(e,"a",(function(){return n}));var r=o(0),i=o(1);class n extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach((t=>{t.orientation=this.orientation}))}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}(function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.d)({type:String,reflect:!0})],n.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",n)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <!-- icon -->
      ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?r.c` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?r.c`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}handleRemove(){this.dispatchEvent(new Event("remove"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"removable",void 0),window.customElements.get("kor-tag")||window.customElements.define("kor-tag",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};class s extends r.a{constructor(){super(),this.rows=1,this.addEventListener("click",(()=>{this.active=!0,this.shadowRoot.querySelector("textarea").focus()}))}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <div class="center">
        ${this.label?r.c` <label class="label">${this.label}</label> `:""}
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
    `}handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"value",void 0),n([Object(r.d)({type:Number,reflect:!0})],s.prototype,"rows",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
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
      ${this.label?r.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>{this.active=!this.active}))}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.size="m",this.disabled=!1}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      ${this.icon?r.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":r.c` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",(()=>{this.active=!this.active}))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"size",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),window.customElements.get("kor-tool")||window.customElements.define("kor-tool",s)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(47),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[i.a,r.b`
        :host {
          position: fixed;
          z-index: 4;
        }
      `]}render(){return r.c`
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
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?void 0:"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target&&this.targetObserver()}targetObserver(){let t;const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&(e.addEventListener("mouseover",(()=>{t=setTimeout((()=>this.visible=!0),500)})),e.addEventListener("mouseout",(()=>{this.visible=!1,clearTimeout(t)})))}}n([Object(r.d)({type:String,reflect:!0})],s.prototype,"label",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"icon",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"position",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"target",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyHeader",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFunctions",void 0),n([Object(r.d)({type:Boolean})],s.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",s)},function(t,e,o){o.r(e);var r=o(9);o.d(e,"korPopover",(function(){return r.a}))},function(t,e,o){o.d(e,"a",(function(){return n}));var r=o(0),i=o(1);class n extends r.a{static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c` <slot></slot> `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",(()=>this.handleActive())),this.handleColumns()}handleActive(){let t,e;t=this.closest("kor-table"),t.readonly||"header"==this.slot||(e=this.parentElement.childNodes,e.forEach((t=>{t.active=!1})),this.active=!0)}handleColumns(){const t=this.closest("kor-table");this.style.gridTemplateColumns=t.columns,t.addEventListener("columns-changed",(()=>{this.style.gridTemplateColumns=t.columns}))}}(function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);n>3&&s&&Object.defineProperty(e,o,s)})([Object(r.d)({type:Boolean,reflect:!0})],n.prototype,"active",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",n)},function(t,e,o){o.d(e,"a",(function(){return s}));var r=o(0),i=o(1),n=(o(3),o(5),function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s});class s extends r.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[i.a,r.b`
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
      `]}render(){return r.c`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?r.c`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this.dispatchEvent(new Event(t+"-changed")),"grid-cols"==t&&(this.style.gridColumn="span "+this.gridCols),"sortable"==t&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",(()=>{this.handleSort()})))}handleSort(){this.sorted?this.sortDirection="asc"==this.sortDirection?"desc":"asc":(this.parentElement.childNodes.forEach((t=>{t.sorted=!1})),this.sorted=!0,this.sortDirection="asc")}}n([Object(r.d)({type:Number,reflect:!0,attribute:"grid-cols"})],s.prototype,"gridCols",void 0),n([Object(r.d)({type:String,reflect:!0})],s.prototype,"alignment",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"head",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"sorted",void 0),n([Object(r.d)({type:Boolean,reflect:!0})],s.prototype,"sortable",void 0),n([Object(r.d)({type:String,reflect:!0,attribute:"sort-direction"})],s.prototype,"sortDirection",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",s)},function(t,e,o){o.r(e);var r=o(10);o.d(e,"korAccordion",(function(){return r.a}));var i=o(8);o.d(e,"korAppBar",(function(){return i.a}));var n=o(11);o.d(e,"korAvatar",(function(){return n.a}));var s=o(12);o.d(e,"korBadge",(function(){return s.a}));var a=o(13);o.d(e,"korBreadcrumbs",(function(){return a.a}));var l=o(14);o.d(e,"korBreadcrumbItem",(function(){return l.a}));var c=o(15);o.d(e,"korButton",(function(){return c.a}));var d=o(6);o.d(e,"korCard",(function(){return d.a}));var h=o(16);o.d(e,"korCheckbox",(function(){return h.a}));var p=o(17);o.d(e,"korDivider",(function(){return p.a}));var u=o(18);o.d(e,"korDrawer",(function(){return u.a}));var g=o(19);o.d(e,"korEmptyState",(function(){return g.a}));var b=o(20);o.d(e,"korGrid",(function(){return b.a}));var v=o(21);o.d(e,"korImage",(function(){return v.a}));var f=o(2);o.d(e,"korIcon",(function(){return f.a}));var m=o(22);o.d(e,"korInput",(function(){return m.a}));var y=o(23);o.d(e,"korMenuItem",(function(){return y.a}));var w=o(24);o.d(e,"korModal",(function(){return w.a}));var x=o(25);o.d(e,"korNavbar",(function(){return x.a}));var k=o(27);o.d(e,"korNotifications",(function(){return k.a}));var S=o(28);o.d(e,"korNotificationItem",(function(){return S.a}));var O=o(29);o.d(e,"korPage",(function(){return O.a}));var _=o(30);o.d(e,"korPane",(function(){return _.a}));var j=o(9);o.d(e,"korPopover",(function(){return j.a}));var E=o(31);o.d(e,"korProgressBar",(function(){return E.a}));var $=o(32);o.d(e,"korRadioButton",(function(){return $.a}));var C=o(33);o.d(e,"korSlider",(function(){return C.a}));var P=o(34);o.d(e,"korSpinner",(function(){return P.a}));var R=o(35);o.d(e,"korStepper",(function(){return R.a}));var T=o(36);o.d(e,"korStepperItem",(function(){return T.a}));var B=o(37);o.d(e,"korSwitch",(function(){return B.a}));var z=o(38);o.d(e,"korSwitchItem",(function(){return z.a}));var N=o(39);o.d(e,"korTabItem",(function(){return N.a}));var A=o(40);o.d(e,"korTable",(function(){return A.a}));var I=o(48);o.d(e,"korTableRow",(function(){return I.a}));var M=o(49);o.d(e,"korTableCell",(function(){return M.a}));var D=o(41);o.d(e,"korTabs",(function(){return D.a}));var L=o(42);o.d(e,"korTag",(function(){return L.a}));var H=o(4);o.d(e,"korText",(function(){return H.a}));var F=o(43);o.d(e,"korTextarea",(function(){return F.a}));var U=o(44);o.d(e,"korToggle",(function(){return U.a}));var V=o(45);o.d(e,"korTool",(function(){return V.a}));var q=o(46);o.d(e,"korTooltip",(function(){return q.a}))}]);const i=globalThis.trustedTypes,n=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,s=`lit$${(Math.random()+"").slice(9)}$`,a="?"+s,l=`<${a}>`,c=document,d=(t="")=>c.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,b=/>/g,v=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,f=/'/g,m=/"/g,y=/^(?:script|style|textarea)$/i,w=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),x=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),S=new WeakMap,O=(t,e,o)=>{var r,i;const n=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let s=n._$litPart$;if(void 0===s){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=s=new C(e.insertBefore(d(),t),t,void 0,o)}return s.I(t),s},_=c.createTreeWalker(c,129,null,!1);class j{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let c=0,h=0;const p=t.length-1,w=this.parts,[x,k]=((t,e)=>{const o=t.length-1,r=[];let i,a=2===e?"<svg>":"",c=u;for(let e=0;e<o;e++){const o=t[e];let n,d,h=-1,p=0;for(;p<o.length&&(c.lastIndex=p,d=c.exec(o),null!==d);)p=c.lastIndex,c===u?"!--"===d[1]?c=g:void 0!==d[1]?c=b:void 0!==d[2]?(y.test(d[2])&&(i=RegExp("</"+d[2],"g")),c=v):void 0!==d[3]&&(c=v):c===v?">"===d[0]?(c=null!=i?i:u,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,n=d[1],c=void 0===d[3]?v:'"'===d[3]?m:f):c===m||c===f?c=v:c===g||c===b?c=u:(c=v,i=void 0);const w=c===v&&t[e+1].startsWith("/>")?" ":"";a+=c===u?o+l:h>=0?(r.push(n),o.slice(0,h)+"$lit$"+o.slice(h)+s+w):o+s+(-2===h?(r.push(void 0),e):w)}const d=a+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==n?n.createHTML(d):d,r]})(t,e);if(this.el=j.createElement(x,o),_.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=_.nextNode())&&w.length<p;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(s)){const o=k[h++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(s),e=/([.?@])?(.*)/.exec(o);w.push({type:1,index:c,name:e[2],strings:t,ctor:"."===e[1]?R:"?"===e[1]?T:"@"===e[1]?B:P})}else w.push({type:6,index:c})}for(const e of t)r.removeAttribute(e)}if(y.test(r.tagName)){const t=r.textContent.split(s),e=t.length-1;if(e>0){r.textContent=i?i.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],d()),_.nextNode(),w.push({type:2,index:++c});r.append(t[e],d())}}}else if(8===r.nodeType)if(r.data===a)w.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(s,t+1));)w.push({type:7,index:c}),t+=s.length-1}c++}}static createElement(t,e){const o=c.createElement("template");return o.innerHTML=t,o}}function E(t,e,o=t,r){var i,n,s,a;if(e===x)return e;let l=void 0!==r?null===(i=o.Σi)||void 0===i?void 0:i[r]:o.Σo;const c=h(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,o,r)),void 0!==r?(null!==(s=(a=o).Σi)&&void 0!==s?s:a.Σi=[])[r]=l:o.Σo=l),void 0!==l&&(e=E(t,l.S(t,e.values),l,r)),e}class ${constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:o},parts:r}=this.D,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(o,!0);_.currentNode=i;let n=_.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new C(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new z(n,this,t)),this.l.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(n=_.nextNode(),s++)}return i}v(t){let e=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(t,o,e),e+=o.strings.length-2):o.I(t[e])),e++}}class C{constructor(t,e,o,r){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=o,this.options=r}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=E(this,t,e),h(t)?t===k||null==t||""===t?(this.H!==k&&this.R(),this.H=k):t!==this.H&&t!==x&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return p(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(c.createTextNode(t)),this.H=t}_(t){var e;const{values:o,_$litType$:r}=t,i="number"==typeof r?this.C(t):(void 0===r.el&&(r.el=j.createElement(r.h,this.options)),r);if((null===(e=this.H)||void 0===e?void 0:e.D)===i)this.H.v(o);else{const t=new $(i,this),e=t.u(this.options);t.v(o),this.$(e),this.H=t}}C(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new j(t)),e}g(t){p(this.H)||(this.H=[],this.R());const e=this.H;let o,r=0;for(const i of t)r===e.length?e.push(o=new C(this.k(d()),this.k(d()),this,this.options)):o=e[r],o.I(i),r++;r<e.length&&(this.R(o&&o.B.nextSibling,r),e.length=r)}R(t=this.A.nextSibling,e){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class P{constructor(t,e,o,r,i){this.type=1,this.H=k,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(k),this.strings=o):this.H=k}get tagName(){return this.element.tagName}I(t,e=this,o,r){const i=this.strings;let n=!1;if(void 0===i)t=E(this,t,e,0),n=!h(t)||t!==this.H&&t!==x,n&&(this.H=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=E(this,r[o+s],e,s),a===x&&(a=this.H[s]),n||(n=!h(a)||a!==this.H[s]),a===k?t=k:t!==k&&(t+=(null!=a?a:"")+i[s+1]),this.H[s]=a}n&&!r&&this.W(t)}W(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends P{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===k?void 0:t}}class T extends P{constructor(){super(...arguments),this.type=4}W(t){t&&t!==k?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class B extends P{constructor(){super(...arguments),this.type=5}I(t,e=this){var o;if((t=null!==(o=E(this,t,e,0))&&void 0!==o?o:k)===x)return;const r=this.H,i=t===k&&r!==k||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==k&&(r===k||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,o;"function"==typeof this.H?this.H.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,e,o){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=o}I(t){E(this,t)}}null===(e=(t=globalThis).litHtmlPlatformSupport)||void 0===e||e.call(t,j,C),(null!==(o=(r=globalThis).litHtmlVersions)&&void 0!==o?o:r.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,A=Symbol();class I{constructor(t,e){if(e!==A)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return N&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const M=(t,e)=>{N?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.appendChild(o)}))},D=N?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new I(t+"",A))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var L,H,F,U;const V={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},q=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:q};class J extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this.Πp(o,e);void 0!==r&&(this.Πm.set(r,o),t.push(r))})),t}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||W}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(D(t))}else void 0!==t&&e.push(D(t));return e}static"Πp"(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return M(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,o){this.K(t,o)}"Πj"(t,e,o=W){var r,i;const n=this.constructor.Πp(t,o);if(void 0!==n&&!0===o.reflect){const s=(null!==(i=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:V.toAttribute)(e,o.type);this.Πh=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this.Πh=null}}K(t,e){var o,r,i;const n=this.constructor,s=n.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=n.getPropertyOptions(s),a=t.converter,l=null!==(i=null!==(r=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==i?i:V.fromAttribute;this.Πh=s,this[s]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||q)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===o.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const o=this.L;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(o)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,X,Z,Q,G,Y;J.finalized=!0,J.shadowRootOptions={mode:"open"},null===(H=(L=globalThis).reactiveElementPlatformSupport)||void 0===H||H.call(L,{ReactiveElement:J}),(null!==(F=(U=globalThis).reactiveElementVersions)&&void 0!==F?F:U.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(K=(Y=globalThis).litElementVersions)&&void 0!==K?K:Y.litElementVersions=[]).push("3.0.0-rc.1");class tt extends J{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();super.update(t),this.Φt=O(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return x}}tt.finalized=!0,tt._$litElement$=!0,null===(Z=(X=globalThis).litElementHydrateSupport)||void 0===Z||Z.call(X,{LitElement:tt}),null===(G=(Q=globalThis).litElementPlatformSupport)||void 0===G||G.call(Q,{LitElement:tt});var et={tab_strip:(t,e,o)=>w`
      <kor-tab-item id="summaryTab" label="Summary" active
        @active-changed="${r=>{r.target.active&&(Object.entries(e).map((t=>{t[1].style.display="none"})),Object.entries(o).map((t=>{t[1].style.display="none"})),Object.entries(t).map((t=>{t[1].style.display="block"})))}}">
      </kor-tab-item>
      <kor-tab-item id="transactionsTab" label="Transactions"
        @active-changed="${r=>{r.target.active&&(Object.entries(t).map((t=>{t[1].style.display="none"})),Object.entries(o).map((t=>{t[1].style.display="none"})),Object.entries(e).map((t=>{t[1].style.display="block"})))}}">
      </kor-tab-item>
      <kor-tab-item id="scheduleTab" label="Schedule"
        @active-changed="${r=>{r.target.active&&(Object.entries(t).map((t=>{t[1].style.display="none"})),Object.entries(e).map((t=>{t[1].style.display="none"})),Object.entries(o).map((t=>{t[1].style.display="block"})))}}">
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
            <kor-text size="body-1">${t}</kor-text>`))}
        </kor-notification-item>
      </kor-notifications>`,success_notifications:t=>w`
      <kor-notifications position="top-right">
        <kor-notification-item icon="done" label="Success">
        ${t.map((t=>w`
            <kor-text size="body-1">${t}</kor-text>`))}
        </kor-notification-item>
      </kor-notifications>`},ot={transactions:(t,e,o)=>w`
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
      </kor-grid>`,add_transaction:(t,e,o,r)=>w`
      <kor-radio-button label="Choose from own addresses"
        @active-changed="${t=>{const e=t.target.parentElement.querySelectorAll("kor-input")[0];t.target.active?(e.style.display="inherit",r.destination_address=e.value):e.style.display="none"}}">
      </kor-radio-button>
      <kor-input type="select" label="The own address will be used as destination" icon="view_list" style="display: none"
        @active-changed="${t=>{t.target.active&&(r.destination_address=t.target.value)}}"
      >
        ${e.map((t=>w`
            <kor-menu-item label="${t}"></kor-menu-item>`))}
      </kor-input>
      <kor-radio-button label="Choose from booked addresses"
        @active-changed="${t=>{const e=t.target.parentElement.querySelectorAll("kor-input")[1];t.target.active?(e.style.display="inherit",r.destination_address=e.value):e.style.display="none"}}">
      </kor-radio-button>
      <kor-input type="select" label="The booked address will be used as destination" icon="view_list" style="display: none"
        @active-changed="${t=>{t.target.active&&(r.destination_address=t.target.value)}}"
      >
        ${o.value.map((t=>w`
            <kor-menu-item label="${t}"></kor-menu-item>`))}
      </kor-input>
      <kor-radio-button label="Enter a new destination address" active
        @active-changed="${t=>{const e=t.target.parentElement.querySelectorAll("kor-input")[2];t.target.active?(e.style.display="inherit",r.destination_address=e.value):e.style.display="none"}}">
      </kor-radio-button>
      <kor-input label="The destination address:" type="text" value="" style="display: inherit"
        @active-changed="${t=>{t.target.active||(r.destination_address=t.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's amount in ETH:"
        type="number" value="0" min=0 max=${t}
        @active-changed="${t=>{t.target.active||(r.amount=t.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's gas price in GWEI:"
        type="number" value="${r.gas_price}" min=0
        @active-changed="${t=>{t.target.active||(r.gas_price=t.target.value)}}">
      </kor-input>
      <kor-input label="The transaction's gas limit:"
        type="number" value="${r.gas_limit}" min=0
        @active-changed="${t=>{t.target.active||(r.gas_limit=t.target.value)}}">
      </kor-input>`},rt={check_transaction_data(t,e){let o=[];if(t.destination_address?/0x[0-9a-f]{40}/.test(t.destination_address)||(o=o.concat("The destination address has wrong format")):o=o.concat("The destination address is not filled"),(!t.amount||t.amount<=0)&&(o=o.concat("The amount is not filled")),t.gas_price||(success=!1,o=o.concat("The gas price is not filled")),t.gas_limit||(success=!1,o=o.concat("The gas limit is not filled")),o.length){O(et.error_notifications(o),e);e.querySelector("kor-notification-item").setAttribute("visible","true")}return!o.length},check_schedule_data(t,e){let o=[];if(t.start_date||(success=!1,o=o.concat("The start date is not filled")),t.start_time||(success=!1,o=o.concat("The start time is not filled")),o.length){O(et.error_notifications(o),e);e.querySelector("kor-notification-item").setAttribute("visible","true")}return!o.length},start_time_to_clock(t){let e=Math.trunc(t/60);const o=t%60;let r="AM";return e>=12&&(r="PM",e-=12),"0"==e.toFixed(0)&&(e=12),{hour:e,minute:o,am_pm:r}}},it={add_schedule:t=>w`
      <kor-grid columns="4">
        <kor-text grid-cols="1" size="body-1">Start since:</kor-text>
        <input grid-cols="2" type="date"
          @change="${e=>{t.start_date=e.target.value}}"
        >
        <kor-text grid-cols="4" size="body-1">at 12:00 PM</kor-text>
        <kor-slider grid-cols="4" value="720" min="0" max="1440" step="1"
          @value-changed="${e=>{t.start_time=Number.parseInt(e.target.value);const o=rt.start_time_to_clock(t.start_time);e.target.parentElement.querySelectorAll("kor-text")[1].innerHTML="at "+o.hour.toFixed(0).padStart(2,"0")+":"+o.minute.toFixed(0).padStart(2,"0")+" "+o.am_pm}}"
        >
        </kor-slider>
        <kor-toggle grid-cols="4" label="Should be repeated"
          @active-changed="${e=>{const o=e.target.parentElement.querySelector("kor-card"),r=o.querySelector("kor-slider");e.target.active?(o.style.display="flex",t.interval_days=r.value):(o.style.display="none",t.interval_days=0)}}"
        >
        </kor-toggle>
        <kor-card grid-cols="4" style="display: none" flat>
          <kor-grid columns="1">
            <kor-text grid-cols="1" size="body-1">Repeat each 30 days</kor-text>
            <kor-slider grid-cols="1" value="30" min="0" max="366" step="1"
              @value-changed="${e=>{t.interval_days=Number.parseInt(e.target.value);e.target.parentElement.querySelector("kor-text").innerHTML="Repeat after "+t.interval_days.toFixed(0)+" days"}}"
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
                <kor-table-cell>${(()=>{const t=rt.start_time_to_clock(o.schedule_data.start_time);return t.hour.toFixed(0).padStart(2,"0")+":"+t.minute.toFixed(0).padStart(2,"0")+" "+t.am_pm})()}</kor-table-cell>
                <kor-table-cell>${o.schedule_data.interval_days}</kor-table-cell>
                <kor-table-cell>
                  <kor-icon icon="delete" button
                    @click="${r=>{t.remove(o),setTimeout(e,500)}}"
                  ></kor-icon>
                </kor-table-cell>
              </kor-table-row>`))}
        </kor-table>
      </kor-card>`},nt={Init(t,e,o,r,i,n,s){const a=n.querySelector("kor-card"),l=t=>{O(et.object_entries_two_columns(Object.entries(t.attributes)),a),n.setAttribute("visible","true")},c=async t=>{const o=new Moralis.Query("EthTransactions");o.equalTo("to_address",t.get("ethAddress"));const r=new Moralis.Query("EthTransactions");r.equalTo("from_address",t.get("ethAddress"));let i=await o.find();console.log("Incoming transactions: ",i);let n=await r.find();console.log("Out coming transactions: ",n),O(ot.transactions(i,n,l),e);const a=await o.subscribe(),c=await r.subscribe();a.on("create",(t=>{console.log("A new incoming transaction: ",t),i=i.concat(t),O(ot.transactions(i,n,l),e)})),c.on("create",(t=>{console.log("A new out coming transaction: ",t),n=n.concat(t),O(ot.transactions(i,n,l),e)})),s.web3=await Moralis.Web3.enable(),console.log("web3 == ",s.web3)};return()=>{if(!r.getAttribute("login"))return Moralis.LiveQuery.close(),(async()=>{await Moralis.User.logOut(),O(w``,t),O(w``,e),O(w``,o),console.log("Logged out")})(),r.setAttribute("label","Login using Metamask"),r.setAttribute("login","true"),void(i.style.display="none");Moralis.Web3.authenticate().then((e=>{r.setAttribute("label","Log out"),r.removeAttribute("login"),i.style.display="block",O(et.object_entries_two_columns(Object.entries(e)),t),console.log("The current user: ",e),console.log("The current user password: ",e.password),console.log("The current user's EthAddress: ",e.get("ethAddress")),Moralis.Cloud.run("watchEthAddress",{address:e.get("ethAddress")}).then((t=>{console.log("The watchEthAddress results: ",t),c(e)})).catch((()=>{c(e)}))}))}}};class st{constructor(){this.cached_value_=JSON.parse(window.localStorage.getItem(this.storage_name))}get storage_name(){return"LocalStorageBacked"}}class at extends st{constructor(){super(),this.cached_value_||(this.cached_value_={})}get storage_name(){return"BookedAddresses"}set value(t){let e={};t.map((t=>{Object.defineProperty(e,t.toString(),{enumerable:!0,writable:!0,configurable:!0,value:null})})),this.cached_value_=e,window.localStorage.setItem(this.storage_name,JSON.stringify(this.cached_value_))}get value(){return Object.keys(this.cached_value_)}add(t){Object.defineProperty(this.cached_value_,t.toString(),{enumerable:!0,writable:!0,configurable:!0,value:null}),this.value=this.value}remove(t){delete this.cached_value_.item,this.value=this.value}}class lt extends st{constructor(){super(),this.cached_value_||(this.cached_value_=[])}get storage_name(){return"ScheduleTable"}set value(t){this.cached_value_=t,window.localStorage.setItem(this.storage_name,JSON.stringify(this.cached_value_))}get value(){return this.cached_value_}add(t){this.cached_value_=this.cached_value_.concat(t),this.value=this.value}remove(t){for(var e=0;e<this.cached_value_.length;e++)if(this.cached_value_[e]===t){1==this.cached_value_.length?this.cached_value_=[]:this.cached_value_=this.cached_value_.slice(0,e).concat(this.cached_value_.slice(e+1));break}this.value=this.value}}const ct=(()=>{const t={tmpl:document.getElementById("appTemplate").content},e={content:t.tmpl.querySelector("kor-page"),notification:t.tmpl.getElementById("pageNotification"),top_bar:t.tmpl.querySelector("kor-app-bar"),menu:{button:t.tmpl.getElementById("appMenu"),tooltip:t.tmpl.getElementById("appMenuTooltip"),popover:{content:t.tmpl.getElementById("appMenuPopover"),login:t.tmpl.getElementById("loginMenuItem"),prefs:t.tmpl.getElementById("prefsMenuItem")}},add_transaction:t.tmpl.getElementById("addTransaction"),add_transaction_tooltip:t.tmpl.getElementById("addTransactionTooltip"),summary:{content:t.tmpl.getElementById("summaryContent"),details:t.tmpl.getElementById("summaryDetails")},transactions:{content:t.tmpl.getElementById("transactionsContent"),details:t.tmpl.getElementById("transactionsDetails"),filter_button:t.tmpl.getElementById("transactionsFilterButton")},schedule:{content:t.tmpl.getElementById("scheduleContent"),details:t.tmpl.getElementById("scheduleDetails"),add_button:t.tmpl.getElementById("scheduleAddButton")},tab_strip:t.tmpl.querySelector("kor-tabs")},o={window:t.tmpl.getElementById("addTransactionModal"),notification:t.tmpl.getElementById("addTransactionModalNotification"),content:t.tmpl.getElementById("addTransactionModalContent"),button:t.tmpl.getElementById("addTransactionModalButton")},r=t.tmpl.getElementById("transactionDetailsModal"),i={window:t.tmpl.getElementById("addScheduleModal"),notification:t.tmpl.getElementById("addScheduleModalNotification"),transactions_content:t.tmpl.getElementById("addScheduleModalTransactionContent"),schedule_content:t.tmpl.getElementById("addScheduleModalScheduleContent"),button:t.tmpl.getElementById("addScheduleModalButton")};if(O(et.tab_strip(e.summary,e.transactions,e.schedule),e.tab_strip),e.content&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){e.content.setAttribute("theme","dark"),o.window.setAttribute("theme","dark"),r.setAttribute("theme","dark"),i.window.setAttribute("theme","dark");const t=document.createElement("style");t.innerHTML='\n      input[type="date"] {\n        background: transparent;\n        color: white;\n      }\n      input[type="date"]::-webkit-calendar-picker-indicator {\n        filter: invert(100%);\n      }',document.body.appendChild(t)}e.menu.button.addEventListener("click",(()=>{e.menu.tooltip.setAttribute("visible","false")}));let n={};e.menu.popover.login.setAttribute("login","true");const s=nt.Init(e.summary.details,e.transactions.details,e.schedule.details,e.menu.popover.login,e.add_transaction,r,n);e.menu.popover.login.addEventListener("click",(()=>{e.menu.popover.content.removeAttribute("visible"),s()}));let a={gas_price:1,gas_limit:21e3},l=new at;e.add_transaction.addEventListener("click",(()=>{e.add_transaction_tooltip.setAttribute("visible","false"),O(ot.add_transaction(6,[],l,a),o.content),o.window.setAttribute("visible","true")})),o.window.addEventListener("visible-changed",(t=>{if(!t.target.visible){const t=o.notification.querySelector("kor-notification-item");t&&t.removeAttribute("visible")}})),o.button.addEventListener("click",(()=>{if(rt.check_transaction_data(a,o.notification)&&(o.window.removeAttribute("visible"),console.log("The transaction's destination_address == ",a.destination_address),console.log("The transaction's amount == ",a.amount),a.destination_address&&a.amount>0)){const t={from:Moralis.User.current().get("ethAddress"),to:a.destination_address,value:a.amount*Math.pow(10,18),gasPrice:a.gas_price*Math.pow(10,9),gas:a.gas_limit};console.log("The transactionObject == ",t),n.web3.eth.sendTransaction(t,((t,o)=>{if(console.log("The sendTransaction error == ",t),console.log("The sendTransaction result == ",o),!t){l.add(a.destination_address),O(et.success_notifications(["The transaction was sent and will be shown in the Transactions tab after processing"]),e.notification);e.notification.querySelector("kor-notification-item").setAttribute("visible","true")}let r={};Object.assign(r,a),a=r}))}}));let c={},d=new lt;const h=()=>{O(it.schedule_table(d,h),e.schedule.details)};return h(),e.schedule.add_button.addEventListener("click",(()=>{O(ot.add_transaction(6,[],l,a),i.transactions_content),O(it.add_schedule(c),i.schedule_content),i.window.setAttribute("visible","true")})),i.window.addEventListener("visible-changed",(t=>{if(!t.target.visible){const t=i.notification.querySelector("kor-notification-item");t&&t.removeAttribute("visible")}})),i.button.addEventListener("click",(()=>{if(!rt.check_transaction_data(a,i.notification))return;if(!rt.check_schedule_data(c,i.notification))return;const t={transaction_data:a,schedule_data:c};d.add(t),i.window.removeAttribute("visible"),O(it.schedule_table(d,h),e.schedule.details);let o={};Object.assign(o,a),a=o,o={},Object.assign(o,c),c=o})),t})();document.addEventListener("DOMContentLoaded",(()=>{Moralis.initialize("pnj2ou0ivNkr2xnWIQIKZjwhcbJgC6hO69CasCTS"),Moralis.serverURL="https://kcmeib0ovv6c.moralis.io:2053/server";const t=document.getElementsByTagName("body")[0];t.removeChild(document.getElementById("startupContent")),t.appendChild(ct.tmpl)}));
//# sourceMappingURL=bundle.js.map
