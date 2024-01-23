function Yp(t,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in t)){const s=Object.getOwnPropertyDescriptor(i,l);s&&Object.defineProperty(t,l,s.get?s:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();function Ed(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bd={exports:{}},Dl={},Td={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),Zp=Symbol.for("react.portal"),Jp=Symbol.for("react.fragment"),qp=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),ya=Symbol.iterator;function om(t){return t===null||typeof t!="object"?null:(t=ya&&t[ya]||t["@@iterator"],typeof t=="function"?t:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,Pd={};function pr(t,e,r){this.props=t,this.context=e,this.refs=Pd,this.updater=r||Rd}pr.prototype.isReactComponent={};pr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bd(){}Bd.prototype=pr.prototype;function Qo(t,e,r){this.props=t,this.context=e,this.refs=Pd,this.updater=r||Rd}var Go=Qo.prototype=new Bd;Go.constructor=Qo;Ld(Go,pr.prototype);Go.isPureReactComponent=!0;var wa=Array.isArray,Ad=Object.prototype.hasOwnProperty,Ko={current:null},Md={key:!0,ref:!0,__self:!0,__source:!0};function Id(t,e,r){var i,l={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ad.call(e,i)&&!Md.hasOwnProperty(i)&&(l[i]=e[i]);var c=arguments.length-2;if(c===1)l.children=r;else if(1<c){for(var a=Array(c),u=0;u<c;u++)a[u]=arguments[u+2];l.children=a}if(t&&t.defaultProps)for(i in c=t.defaultProps,c)l[i]===void 0&&(l[i]=c[i]);return{$$typeof:xi,type:t,key:s,ref:o,props:l,_owner:Ko.current}}function cm(t,e){return{$$typeof:xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yo(t){return typeof t=="object"&&t!==null&&t.$$typeof===xi}function am(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Ca=/\/+/g;function xs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?am(""+t.key):e.toString(36)}function Xi(t,e,r,i,l){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xi:case Zp:o=!0}}if(o)return o=t,l=l(o),t=i===""?"."+xs(o,0):i,wa(l)?(r="",t!=null&&(r=t.replace(Ca,"$&/")+"/"),Xi(l,e,r,"",function(u){return u})):l!=null&&(Yo(l)&&(l=cm(l,r+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ca,"$&/")+"/")+t)),e.push(l)),1;if(o=0,i=i===""?".":i+":",wa(t))for(var c=0;c<t.length;c++){s=t[c];var a=i+xs(s,c);o+=Xi(s,e,r,a,l)}else if(a=om(t),typeof a=="function")for(t=a.call(t),c=0;!(s=t.next()).done;)s=s.value,a=i+xs(s,c++),o+=Xi(s,e,r,a,l);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Si(t,e,r){if(t==null)return t;var i=[],l=0;return Xi(t,i,"","",function(s){return e.call(r,s,l++)}),i}function um(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},Qi={transition:null},dm={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Qi,ReactCurrentOwner:Ko};G.Children={map:Si,forEach:function(t,e,r){Si(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Si(t,function(){e++}),e},toArray:function(t){return Si(t,function(e){return e})||[]},only:function(t){if(!Yo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=pr;G.Fragment=Jp;G.Profiler=em;G.PureComponent=Qo;G.StrictMode=qp;G.Suspense=im;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;G.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ld({},t.props),l=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ko.current),e.key!==void 0&&(l=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(a in e)Ad.call(e,a)&&!Md.hasOwnProperty(a)&&(i[a]=e[a]===void 0&&c!==void 0?c[a]:e[a])}var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){c=Array(a);for(var u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:xi,type:t.type,key:l,ref:s,props:i,_owner:o}};G.createContext=function(t){return t={$$typeof:nm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tm,_context:t},t.Consumer=t};G.createElement=Id;G.createFactory=function(t){var e=Id.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:rm,render:t}};G.isValidElement=Yo;G.lazy=function(t){return{$$typeof:sm,_payload:{_status:-1,_result:t},_init:um}};G.memo=function(t,e){return{$$typeof:lm,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Qi.transition;Qi.transition={};try{t()}finally{Qi.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return ze.current.useCallback(t,e)};G.useContext=function(t){return ze.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};G.useEffect=function(t,e){return ze.current.useEffect(t,e)};G.useId=function(){return ze.current.useId()};G.useImperativeHandle=function(t,e,r){return ze.current.useImperativeHandle(t,e,r)};G.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return ze.current.useMemo(t,e)};G.useReducer=function(t,e,r){return ze.current.useReducer(t,e,r)};G.useRef=function(t){return ze.current.useRef(t)};G.useState=function(t){return ze.current.useState(t)};G.useSyncExternalStore=function(t,e,r){return ze.current.useSyncExternalStore(t,e,r)};G.useTransition=function(){return ze.current.useTransition()};G.version="18.2.0";Td.exports=G;var m=Td.exports;const Dd=Ed(m),Zo=Yp({__proto__:null,default:Dd},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm=m,hm=Symbol.for("react.element"),pm=Symbol.for("react.fragment"),mm=Object.prototype.hasOwnProperty,xm=fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gm={key:!0,ref:!0,__self:!0,__source:!0};function Fd(t,e,r){var i,l={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)mm.call(e,i)&&!gm.hasOwnProperty(i)&&(l[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)l[i]===void 0&&(l[i]=e[i]);return{$$typeof:hm,type:t,key:s,ref:o,props:l,_owner:xm.current}}Dl.Fragment=pm;Dl.jsx=Fd;Dl.jsxs=Fd;bd.exports=Dl;var n=bd.exports,Qs={},Od={exports:{}},tt={},zd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,T){var B=C.length;C.push(T);e:for(;0<B;){var $=B-1>>>1,K=C[$];if(0<l(K,T))C[$]=T,C[B]=K,B=$;else break e}}function r(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var T=C[0],B=C.pop();if(B!==T){C[0]=B;e:for(var $=0,K=C.length,Le=K>>>1;$<Le;){var rt=2*($+1)-1,_e=C[rt],ye=rt+1,pn=C[ye];if(0>l(_e,B))ye<K&&0>l(pn,_e)?(C[$]=pn,C[ye]=B,$=ye):(C[$]=_e,C[rt]=B,$=rt);else if(ye<K&&0>l(pn,B))C[$]=pn,C[ye]=B,$=ye;else break e}}return T}function l(C,T){var B=C.sortIndex-T.sortIndex;return B!==0?B:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();t.unstable_now=function(){return o.now()-c}}var a=[],u=[],d=1,p=null,x=3,v=!1,j=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var T=r(u);T!==null;){if(T.callback===null)i(u);else if(T.startTime<=C)i(u),T.sortIndex=T.expirationTime,e(a,T);else break;T=r(u)}}function w(C){if(y=!1,g(C),!j)if(r(a)!==null)j=!0,W(k);else{var T=r(u);T!==null&&N(w,T.startTime-C)}}function k(C,T){j=!1,y&&(y=!1,h(L),L=-1),v=!0;var B=x;try{for(g(T),p=r(a);p!==null&&(!(p.expirationTime>T)||C&&!Q());){var $=p.callback;if(typeof $=="function"){p.callback=null,x=p.priorityLevel;var K=$(p.expirationTime<=T);T=t.unstable_now(),typeof K=="function"?p.callback=K:p===r(a)&&i(a),g(T)}else i(a);p=r(a)}if(p!==null)var Le=!0;else{var rt=r(u);rt!==null&&N(w,rt.startTime-T),Le=!1}return Le}finally{p=null,x=B,v=!1}}var S=!1,E=null,L=-1,z=5,D=-1;function Q(){return!(t.unstable_now()-D<z)}function ee(){if(E!==null){var C=t.unstable_now();D=C;var T=!0;try{T=E(!0,C)}finally{T?ce():(S=!1,E=null)}}else S=!1}var ce;if(typeof f=="function")ce=function(){f(ee)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=ee,ce=function(){H.postMessage(null)}}else ce=function(){_(ee,0)};function W(C){E=C,S||(S=!0,ce())}function N(C,T){L=_(function(){C(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){j||v||(j=!0,W(k))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(a)},t.unstable_next=function(C){switch(x){case 1:case 2:case 3:var T=3;break;default:T=x}var B=x;x=T;try{return C()}finally{x=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var B=x;x=C;try{return T()}finally{x=B}},t.unstable_scheduleCallback=function(C,T,B){var $=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=B+K,C={id:d++,callback:T,priorityLevel:C,startTime:B,expirationTime:K,sortIndex:-1},B>$?(C.sortIndex=B,e(u,C),r(a)===null&&C===r(u)&&(y?(h(L),L=-1):y=!0,N(w,B-$))):(C.sortIndex=K,e(a,C),j||v||(j=!0,W(k))),C},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(C){var T=x;return function(){var B=x;x=T;try{return C.apply(this,arguments)}finally{x=B}}}})($d);zd.exports=$d;var vm=zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=m,qe=vm;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,Wr={};function Ln(t,e){ir(t,e),ir(t+"Capture",e)}function ir(t,e){for(Wr[t]=e,t=0;t<e.length;t++)Hd.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gs=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ka={},_a={};function ym(t){return Gs.call(_a,t)?!0:Gs.call(ka,t)?!1:jm.test(t)?_a[t]=!0:(ka[t]=!0,!1)}function wm(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cm(t,e,r,i){if(e===null||typeof e>"u"||wm(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,r,i,l,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function qo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jo,qo);Re[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jo,qo);Re[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jo,qo);Re[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function ec(t,e,r,i){var l=Re.hasOwnProperty(e)?Re[e]:null;(l!==null?l.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cm(e,r,l,i)&&(r=null),i||l===null?ym(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):l.mustUseProperty?t[l.propertyName]=r===null?l.type===3?!1:"":r:(e=l.attributeName,i=l.attributeNamespace,r===null?t.removeAttribute(e):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Dt=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),Ks=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),Ys=Symbol.for("react.suspense"),Zs=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Xd=Symbol.for("react.offscreen"),Na=Symbol.iterator;function yr(t){return t===null||typeof t!="object"?null:(t=Na&&t[Na]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,gs;function br(t){if(gs===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);gs=e&&e[1]||""}return`
`+gs+t}var vs=!1;function js(t,e){if(!t||vs)return"";vs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),s=i.stack.split(`
`),o=l.length-1,c=s.length-1;1<=o&&0<=c&&l[o]!==s[c];)c--;for(;1<=o&&0<=c;o--,c--)if(l[o]!==s[c]){if(o!==1||c!==1)do if(o--,c--,0>c||l[o]!==s[c]){var a=`
`+l[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=c);break}}}finally{vs=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?br(t):""}function km(t){switch(t.tag){case 5:return br(t.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 2:case 15:return t=js(t.type,!1),t;case 11:return t=js(t.type.render,!1),t;case 1:return t=js(t.type,!0),t;default:return""}}function Js(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case On:return"Fragment";case Fn:return"Portal";case Ks:return"Profiler";case tc:return"StrictMode";case Ys:return"Suspense";case Zs:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vd:return(t.displayName||"Context")+".Consumer";case Wd:return(t._context.displayName||"Context")+".Provider";case nc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rc:return e=t.displayName||null,e!==null?e:Js(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return Js(t(e))}catch{}}return null}function _m(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Js(e);case 8:return e===tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nm(t){var e=Qd(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bi(t){t._valueTracker||(t._valueTracker=Nm(t))}function Gd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=Qd(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qs(t,e){var r=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Sa(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=ln(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kd(t,e){e=e.checked,e!=null&&ec(t,"checked",e,!1)}function eo(t,e){Kd(t,e);var r=ln(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?to(t,e.type,r):e.hasOwnProperty("defaultValue")&&to(t,e.type,ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ea(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function to(t,e,r){(e!=="number"||ll(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Tr=Array.isArray;function Zn(t,e,r,i){if(t=t.options,e){e={};for(var l=0;l<r.length;l++)e["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=e.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&i&&(t[r].defaultSelected=!0)}else{for(r=""+ln(r),e=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function no(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ba(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(b(92));if(Tr(r)){if(1<r.length)throw Error(b(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:ln(r)}}function Yd(t,e){var r=ln(e.value),i=ln(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function Ta(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ti,Jd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,l){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,l)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ti.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sm=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(t){Sm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mr[e]=Mr[t]})});function qd(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Mr.hasOwnProperty(t)&&Mr[t]?(""+e).trim():e+"px"}function ef(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,l=qd(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,l):t[r]=l}}var Em=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(t,e){if(e){if(Em[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function lo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oo=null,Jn=null,qn=null;function Ra(t){if(t=ji(t)){if(typeof oo!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ul(e),oo(t.stateNode,t.type,e))}}function tf(t){Jn?qn?qn.push(t):qn=[t]:Jn=t}function nf(){if(Jn){var t=Jn,e=qn;if(qn=Jn=null,Ra(t),e)for(t=0;t<e.length;t++)Ra(e[t])}}function rf(t,e){return t(e)}function lf(){}var ys=!1;function sf(t,e,r){if(ys)return t(e,r);ys=!0;try{return rf(t,e,r)}finally{ys=!1,(Jn!==null||qn!==null)&&(lf(),nf())}}function Xr(t,e){var r=t.stateNode;if(r===null)return null;var i=Ul(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(b(231,e,typeof r));return r}var co=!1;if(Bt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){co=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{co=!1}function bm(t,e,r,i,l,s,o,c,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var Ir=!1,sl=null,ol=!1,ao=null,Tm={onError:function(t){Ir=!0,sl=t}};function Rm(t,e,r,i,l,s,o,c,a){Ir=!1,sl=null,bm.apply(Tm,arguments)}function Lm(t,e,r,i,l,s,o,c,a){if(Rm.apply(this,arguments),Ir){if(Ir){var u=sl;Ir=!1,sl=null}else throw Error(b(198));ol||(ol=!0,ao=u)}}function Pn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function of(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function La(t){if(Pn(t)!==t)throw Error(b(188))}function Pm(t){var e=t.alternate;if(!e){if(e=Pn(t),e===null)throw Error(b(188));return e!==t?null:t}for(var r=t,i=e;;){var l=r.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){r=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===r)return La(l),t;if(s===i)return La(l),e;s=s.sibling}throw Error(b(188))}if(r.return!==i.return)r=l,i=s;else{for(var o=!1,c=l.child;c;){if(c===r){o=!0,r=l,i=s;break}if(c===i){o=!0,i=l,r=s;break}c=c.sibling}if(!o){for(c=s.child;c;){if(c===r){o=!0,r=s,i=l;break}if(c===i){o=!0,i=s,r=l;break}c=c.sibling}if(!o)throw Error(b(189))}}if(r.alternate!==i)throw Error(b(190))}if(r.tag!==3)throw Error(b(188));return r.stateNode.current===r?t:e}function cf(t){return t=Pm(t),t!==null?af(t):null}function af(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=af(t);if(e!==null)return e;t=t.sibling}return null}var uf=qe.unstable_scheduleCallback,Pa=qe.unstable_cancelCallback,Bm=qe.unstable_shouldYield,Am=qe.unstable_requestPaint,xe=qe.unstable_now,Mm=qe.unstable_getCurrentPriorityLevel,lc=qe.unstable_ImmediatePriority,df=qe.unstable_UserBlockingPriority,cl=qe.unstable_NormalPriority,Im=qe.unstable_LowPriority,ff=qe.unstable_IdlePriority,Fl=null,_t=null;function Dm(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:zm,Fm=Math.log,Om=Math.LN2;function zm(t){return t>>>=0,t===0?32:31-(Fm(t)/Om|0)|0}var Ri=64,Li=4194304;function Rr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,l=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var c=o&~l;c!==0?i=Rr(c):(s&=o,s!==0&&(i=Rr(s)))}else o=r&~l,o!==0?i=Rr(o):s!==0&&(i=Rr(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&l)&&(l=i&-i,s=e&-e,l>=s||l===16&&(s&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-mt(e),l=1<<r,i|=t[r],e&=~l;return i}function $m(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Um(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mt(s),c=1<<o,a=l[o];a===-1?(!(c&r)||c&i)&&(l[o]=$m(c,e)):a<=e&&(t.expiredLanes|=c),s&=~c}}function uo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hf(){var t=Ri;return Ri<<=1,!(Ri&4194240)&&(Ri=64),t}function ws(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function gi(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=r}function Hm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var l=31-mt(r),s=1<<l;e[l]=0,i[l]=-1,t[l]=-1,r&=~s}}function sc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-mt(r),l=1<<i;l&e|t[i]&e&&(t[i]|=e),r&=~l}}var q=0;function pf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mf,oc,xf,gf,vf,fo=!1,Pi=[],Kt=null,Yt=null,Zt=null,Qr=new Map,Gr=new Map,Ht=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ba(t,e){switch(t){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Qr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(e.pointerId)}}function Cr(t,e,r,i,l,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},e!==null&&(e=ji(e),e!==null&&oc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Vm(t,e,r,i,l){switch(e){case"focusin":return Kt=Cr(Kt,t,e,r,i,l),!0;case"dragenter":return Yt=Cr(Yt,t,e,r,i,l),!0;case"mouseover":return Zt=Cr(Zt,t,e,r,i,l),!0;case"pointerover":var s=l.pointerId;return Qr.set(s,Cr(Qr.get(s)||null,t,e,r,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Gr.set(s,Cr(Gr.get(s)||null,t,e,r,i,l)),!0}return!1}function jf(t){var e=vn(t.target);if(e!==null){var r=Pn(e);if(r!==null){if(e=r.tag,e===13){if(e=of(r),e!==null){t.blockedOn=e,vf(t.priority,function(){xf(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=ho(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);so=i,r.target.dispatchEvent(i),so=null}else return e=ji(r),e!==null&&oc(e),t.blockedOn=r,!1;e.shift()}return!0}function Aa(t,e,r){Gi(t)&&r.delete(e)}function Xm(){fo=!1,Kt!==null&&Gi(Kt)&&(Kt=null),Yt!==null&&Gi(Yt)&&(Yt=null),Zt!==null&&Gi(Zt)&&(Zt=null),Qr.forEach(Aa),Gr.forEach(Aa)}function kr(t,e){t.blockedOn===e&&(t.blockedOn=null,fo||(fo=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Xm)))}function Kr(t){function e(l){return kr(l,t)}if(0<Pi.length){kr(Pi[0],t);for(var r=1;r<Pi.length;r++){var i=Pi[r];i.blockedOn===t&&(i.blockedOn=null)}}for(Kt!==null&&kr(Kt,t),Yt!==null&&kr(Yt,t),Zt!==null&&kr(Zt,t),Qr.forEach(e),Gr.forEach(e),r=0;r<Ht.length;r++)i=Ht[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ht.length&&(r=Ht[0],r.blockedOn===null);)jf(r),r.blockedOn===null&&Ht.shift()}var er=Dt.ReactCurrentBatchConfig,ul=!0;function Qm(t,e,r,i){var l=q,s=er.transition;er.transition=null;try{q=1,cc(t,e,r,i)}finally{q=l,er.transition=s}}function Gm(t,e,r,i){var l=q,s=er.transition;er.transition=null;try{q=4,cc(t,e,r,i)}finally{q=l,er.transition=s}}function cc(t,e,r,i){if(ul){var l=ho(t,e,r,i);if(l===null)Ls(t,e,i,dl,r),Ba(t,i);else if(Vm(l,t,e,r,i))i.stopPropagation();else if(Ba(t,i),e&4&&-1<Wm.indexOf(t)){for(;l!==null;){var s=ji(l);if(s!==null&&mf(s),s=ho(t,e,r,i),s===null&&Ls(t,e,i,dl,r),s===l)break;l=s}l!==null&&i.stopPropagation()}else Ls(t,e,i,null,r)}}var dl=null;function ho(t,e,r,i){if(dl=null,t=ic(i),t=vn(t),t!==null)if(e=Pn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=of(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function yf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mm()){case lc:return 1;case df:return 4;case cl:case Im:return 16;case ff:return 536870912;default:return 16}default:return 16}}var Vt=null,ac=null,Ki=null;function wf(){if(Ki)return Ki;var t,e=ac,r=e.length,i,l="value"in Vt?Vt.value:Vt.textContent,s=l.length;for(t=0;t<r&&e[t]===l[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===l[s-i];i++);return Ki=l.slice(t,1<i?1-i:void 0)}function Yi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bi(){return!0}function Ma(){return!1}function nt(t){function e(r,i,l,s,o){this._reactName=r,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(r=t[c],this[c]=r?r(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bi:Ma,this.isPropagationStopped=Ma,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),e}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=nt(mr),vi=he({},mr,{view:0,detail:0}),Km=nt(vi),Cs,ks,_r,Ol=he({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_r&&(_r&&t.type==="mousemove"?(Cs=t.screenX-_r.screenX,ks=t.screenY-_r.screenY):ks=Cs=0,_r=t),Cs)},movementY:function(t){return"movementY"in t?t.movementY:ks}}),Ia=nt(Ol),Ym=he({},Ol,{dataTransfer:0}),Zm=nt(Ym),Jm=he({},vi,{relatedTarget:0}),_s=nt(Jm),qm=he({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=nt(qm),tx=he({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=nt(tx),rx=he({},mr,{data:0}),Da=nt(rx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sx[t])?!!e[t]:!1}function dc(){return ox}var cx=he({},vi,{key:function(t){if(t.key){var e=ix[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(t){return t.type==="keypress"?Yi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ax=nt(cx),ux=he({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fa=nt(ux),dx=he({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),fx=nt(dx),hx=he({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=nt(hx),mx=he({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=nt(mx),gx=[9,13,27,32],fc=Bt&&"CompositionEvent"in window,Dr=null;Bt&&"documentMode"in document&&(Dr=document.documentMode);var vx=Bt&&"TextEvent"in window&&!Dr,Cf=Bt&&(!fc||Dr&&8<Dr&&11>=Dr),Oa=" ",za=!1;function kf(t,e){switch(t){case"keyup":return gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _f(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zn=!1;function jx(t,e){switch(t){case"compositionend":return _f(e);case"keypress":return e.which!==32?null:(za=!0,Oa);case"textInput":return t=e.data,t===Oa&&za?null:t;default:return null}}function yx(t,e){if(zn)return t==="compositionend"||!fc&&kf(t,e)?(t=wf(),Ki=ac=Vt=null,zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cf&&e.locale!=="ko"?null:e.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $a(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wx[t.type]:e==="textarea"}function Nf(t,e,r,i){tf(i),e=fl(e,"onChange"),0<e.length&&(r=new uc("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var Fr=null,Yr=null;function Cx(t){If(t,0)}function zl(t){var e=Hn(t);if(Gd(e))return t}function kx(t,e){if(t==="change")return e}var Sf=!1;if(Bt){var Ns;if(Bt){var Ss="oninput"in document;if(!Ss){var Ua=document.createElement("div");Ua.setAttribute("oninput","return;"),Ss=typeof Ua.oninput=="function"}Ns=Ss}else Ns=!1;Sf=Ns&&(!document.documentMode||9<document.documentMode)}function Ha(){Fr&&(Fr.detachEvent("onpropertychange",Ef),Yr=Fr=null)}function Ef(t){if(t.propertyName==="value"&&zl(Yr)){var e=[];Nf(e,Yr,t,ic(t)),sf(Cx,e)}}function _x(t,e,r){t==="focusin"?(Ha(),Fr=e,Yr=r,Fr.attachEvent("onpropertychange",Ef)):t==="focusout"&&Ha()}function Nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Yr)}function Sx(t,e){if(t==="click")return zl(e)}function Ex(t,e){if(t==="input"||t==="change")return zl(e)}function bx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gt=typeof Object.is=="function"?Object.is:bx;function Zr(t,e){if(gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var l=r[i];if(!Gs.call(e,l)||!gt(t[l],e[l]))return!1}return!0}function Wa(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Va(t,e){var r=Wa(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Wa(r)}}function bf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tf(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=ll(t.document)}return e}function hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tx(t){var e=Tf(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&bf(r.ownerDocument.documentElement,r)){if(i!==null&&hc(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=r.textContent.length,s=Math.min(i.start,l);i=i.end===void 0?s:Math.min(i.end,l),!t.extend&&s>i&&(l=i,i=s,s=l),l=Va(r,s);var o=Va(r,i);l&&o&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rx=Bt&&"documentMode"in document&&11>=document.documentMode,$n=null,po=null,Or=null,mo=!1;function Xa(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;mo||$n==null||$n!==ll(i)||(i=$n,"selectionStart"in i&&hc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Or&&Zr(Or,i)||(Or=i,i=fl(po,"onSelect"),0<i.length&&(e=new uc("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=$n)))}function Ai(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Un={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Es={},Rf={};Bt&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function $l(t){if(Es[t])return Es[t];if(!Un[t])return t;var e=Un[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Rf)return Es[t]=e[r];return t}var Lf=$l("animationend"),Pf=$l("animationiteration"),Bf=$l("animationstart"),Af=$l("transitionend"),Mf=new Map,Qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(t,e){Mf.set(t,e),Ln(e,[t])}for(var bs=0;bs<Qa.length;bs++){var Ts=Qa[bs],Lx=Ts.toLowerCase(),Px=Ts[0].toUpperCase()+Ts.slice(1);an(Lx,"on"+Px)}an(Lf,"onAnimationEnd");an(Pf,"onAnimationIteration");an(Bf,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(Af,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ga(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,Lm(i,e,void 0,t),t.currentTarget=null}function If(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],l=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var c=i[o],a=c.instance,u=c.currentTarget;if(c=c.listener,a!==s&&l.isPropagationStopped())break e;Ga(l,c,u),s=a}else for(o=0;o<i.length;o++){if(c=i[o],a=c.instance,u=c.currentTarget,c=c.listener,a!==s&&l.isPropagationStopped())break e;Ga(l,c,u),s=a}}}if(ol)throw t=ao,ol=!1,ao=null,t}function ie(t,e){var r=e[yo];r===void 0&&(r=e[yo]=new Set);var i=t+"__bubble";r.has(i)||(Df(e,t,2,!1),r.add(i))}function Rs(t,e,r){var i=0;e&&(i|=4),Df(r,t,i,e)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Jr(t){if(!t[Mi]){t[Mi]=!0,Hd.forEach(function(r){r!=="selectionchange"&&(Bx.has(r)||Rs(r,!1,t),Rs(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mi]||(e[Mi]=!0,Rs("selectionchange",!1,e))}}function Df(t,e,r,i){switch(yf(e)){case 1:var l=Qm;break;case 4:l=Gm;break;default:l=cc}r=l.bind(null,e,r,t),l=void 0,!co||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,r,{capture:!0,passive:l}):t.addEventListener(e,r,!0):l!==void 0?t.addEventListener(e,r,{passive:l}):t.addEventListener(e,r,!1)}function Ls(t,e,r,i,l){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var c=i.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;c!==null;){if(o=vn(c),o===null)return;if(a=o.tag,a===5||a===6){i=s=o;continue e}c=c.parentNode}}i=i.return}sf(function(){var u=s,d=ic(r),p=[];e:{var x=Mf.get(t);if(x!==void 0){var v=uc,j=t;switch(t){case"keypress":if(Yi(r)===0)break e;case"keydown":case"keyup":v=ax;break;case"focusin":j="focus",v=_s;break;case"focusout":j="blur",v=_s;break;case"beforeblur":case"afterblur":v=_s;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fx;break;case Lf:case Pf:case Bf:v=ex;break;case Af:v=px;break;case"scroll":v=Km;break;case"wheel":v=xx;break;case"copy":case"cut":case"paste":v=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Fa}var y=(e&4)!==0,_=!y&&t==="scroll",h=y?x!==null?x+"Capture":null:x;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=Xr(f,h),w!=null&&y.push(qr(f,w,g)))),_)break;f=f.return}0<y.length&&(x=new v(x,j,null,r,d),p.push({event:x,listeners:y}))}}if(!(e&7)){e:{if(x=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",x&&r!==so&&(j=r.relatedTarget||r.fromElement)&&(vn(j)||j[At]))break e;if((v||x)&&(x=d.window===d?d:(x=d.ownerDocument)?x.defaultView||x.parentWindow:window,v?(j=r.relatedTarget||r.toElement,v=u,j=j?vn(j):null,j!==null&&(_=Pn(j),j!==_||j.tag!==5&&j.tag!==6)&&(j=null)):(v=null,j=u),v!==j)){if(y=Ia,w="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Fa,w="onPointerLeave",h="onPointerEnter",f="pointer"),_=v==null?x:Hn(v),g=j==null?x:Hn(j),x=new y(w,f+"leave",v,r,d),x.target=_,x.relatedTarget=g,w=null,vn(d)===u&&(y=new y(h,f+"enter",j,r,d),y.target=g,y.relatedTarget=_,w=y),_=w,v&&j)t:{for(y=v,h=j,f=0,g=y;g;g=In(g))f++;for(g=0,w=h;w;w=In(w))g++;for(;0<f-g;)y=In(y),f--;for(;0<g-f;)h=In(h),g--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=In(y),h=In(h)}y=null}else y=null;v!==null&&Ka(p,x,v,y,!1),j!==null&&_!==null&&Ka(p,_,j,y,!0)}}e:{if(x=u?Hn(u):window,v=x.nodeName&&x.nodeName.toLowerCase(),v==="select"||v==="input"&&x.type==="file")var k=kx;else if($a(x))if(Sf)k=Ex;else{k=Nx;var S=_x}else(v=x.nodeName)&&v.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(k=Sx);if(k&&(k=k(t,u))){Nf(p,k,r,d);break e}S&&S(t,x,u),t==="focusout"&&(S=x._wrapperState)&&S.controlled&&x.type==="number"&&to(x,"number",x.value)}switch(S=u?Hn(u):window,t){case"focusin":($a(S)||S.contentEditable==="true")&&($n=S,po=u,Or=null);break;case"focusout":Or=po=$n=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,Xa(p,r,d);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Xa(p,r,d)}var E;if(fc)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else zn?kf(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Cf&&r.locale!=="ko"&&(zn||L!=="onCompositionStart"?L==="onCompositionEnd"&&zn&&(E=wf()):(Vt=d,ac="value"in Vt?Vt.value:Vt.textContent,zn=!0)),S=fl(u,L),0<S.length&&(L=new Da(L,t,null,r,d),p.push({event:L,listeners:S}),E?L.data=E:(E=_f(r),E!==null&&(L.data=E)))),(E=vx?jx(t,r):yx(t,r))&&(u=fl(u,"onBeforeInput"),0<u.length&&(d=new Da("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:u}),d.data=E))}If(p,e)})}function qr(t,e,r){return{instance:t,listener:e,currentTarget:r}}function fl(t,e){for(var r=e+"Capture",i=[];t!==null;){var l=t,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Xr(t,r),s!=null&&i.unshift(qr(t,s,l)),s=Xr(t,e),s!=null&&i.push(qr(t,s,l))),t=t.return}return i}function In(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ka(t,e,r,i,l){for(var s=e._reactName,o=[];r!==null&&r!==i;){var c=r,a=c.alternate,u=c.stateNode;if(a!==null&&a===i)break;c.tag===5&&u!==null&&(c=u,l?(a=Xr(r,s),a!=null&&o.unshift(qr(r,a,c))):l||(a=Xr(r,s),a!=null&&o.push(qr(r,a,c)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Ax=/\r\n?/g,Mx=/\u0000|\uFFFD/g;function Ya(t){return(typeof t=="string"?t:""+t).replace(Ax,`
`).replace(Mx,"")}function Ii(t,e,r){if(e=Ya(e),Ya(t)!==e&&r)throw Error(b(425))}function hl(){}var xo=null,go=null;function vo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,Za=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Za<"u"?function(t){return Za.resolve(null).then(t).catch(Fx)}:jo;function Fx(t){setTimeout(function(){throw t})}function Ps(t,e){var r=e,i=0;do{var l=r.nextSibling;if(t.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(i===0){t.removeChild(l),Kr(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=l}while(r);Kr(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ja(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var xr=Math.random().toString(36).slice(2),wt="__reactFiber$"+xr,ei="__reactProps$"+xr,At="__reactContainer$"+xr,yo="__reactEvents$"+xr,Ox="__reactListeners$"+xr,zx="__reactHandles$"+xr;function vn(t){var e=t[wt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[At]||r[wt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Ja(t);t!==null;){if(r=t[wt])return r;t=Ja(t)}return e}t=r,r=t.parentNode}return null}function ji(t){return t=t[wt]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ul(t){return t[ei]||null}var wo=[],Wn=-1;function un(t){return{current:t}}function le(t){0>Wn||(t.current=wo[Wn],wo[Wn]=null,Wn--)}function ne(t,e){Wn++,wo[Wn]=t.current,t.current=e}var sn={},De=un(sn),We=un(!1),Nn=sn;function lr(t,e){var r=t.type.contextTypes;if(!r)return sn;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in r)l[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=l),l}function Ve(t){return t=t.childContextTypes,t!=null}function pl(){le(We),le(De)}function qa(t,e,r){if(De.current!==sn)throw Error(b(168));ne(De,e),ne(We,r)}function Ff(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var l in i)if(!(l in e))throw Error(b(108,_m(t)||"Unknown",l));return he({},r,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sn,Nn=De.current,ne(De,t),ne(We,We.current),!0}function eu(t,e,r){var i=t.stateNode;if(!i)throw Error(b(169));r?(t=Ff(t,e,Nn),i.__reactInternalMemoizedMergedChildContext=t,le(We),le(De),ne(De,t)):le(We),ne(We,r)}var Tt=null,Hl=!1,Bs=!1;function Of(t){Tt===null?Tt=[t]:Tt.push(t)}function $x(t){Hl=!0,Of(t)}function dn(){if(!Bs&&Tt!==null){Bs=!0;var t=0,e=q;try{var r=Tt;for(q=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}Tt=null,Hl=!1}catch(l){throw Tt!==null&&(Tt=Tt.slice(t+1)),uf(lc,dn),l}finally{q=e,Bs=!1}}return null}var Vn=[],Xn=0,xl=null,gl=0,it=[],lt=0,Sn=null,Rt=1,Lt="";function xn(t,e){Vn[Xn++]=gl,Vn[Xn++]=xl,xl=t,gl=e}function zf(t,e,r){it[lt++]=Rt,it[lt++]=Lt,it[lt++]=Sn,Sn=t;var i=Rt;t=Lt;var l=32-mt(i)-1;i&=~(1<<l),r+=1;var s=32-mt(e)+l;if(30<s){var o=l-l%5;s=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Rt=1<<32-mt(e)+l|r<<l|i,Lt=s+t}else Rt=1<<s|r<<l|i,Lt=t}function pc(t){t.return!==null&&(xn(t,1),zf(t,1,0))}function mc(t){for(;t===xl;)xl=Vn[--Xn],Vn[Xn]=null,gl=Vn[--Xn],Vn[Xn]=null;for(;t===Sn;)Sn=it[--lt],it[lt]=null,Lt=it[--lt],it[lt]=null,Rt=it[--lt],it[lt]=null}var Ze=null,Ye=null,oe=!1,pt=null;function $f(t,e){var r=st(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function tu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Ye=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Sn!==null?{id:Rt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=st(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ze=t,Ye=null,!0):!1;default:return!1}}function Co(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ko(t){if(oe){var e=Ye;if(e){var r=e;if(!tu(t,e)){if(Co(t))throw Error(b(418));e=Jt(r.nextSibling);var i=Ze;e&&tu(t,e)?$f(i,r):(t.flags=t.flags&-4097|2,oe=!1,Ze=t)}}else{if(Co(t))throw Error(b(418));t.flags=t.flags&-4097|2,oe=!1,Ze=t}}}function nu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function Di(t){if(t!==Ze)return!1;if(!oe)return nu(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vo(t.type,t.memoizedProps)),e&&(e=Ye)){if(Co(t))throw Uf(),Error(b(418));for(;e;)$f(t,e),e=Jt(e.nextSibling)}if(nu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ye=Jt(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ye=null}}else Ye=Ze?Jt(t.stateNode.nextSibling):null;return!0}function Uf(){for(var t=Ye;t;)t=Jt(t.nextSibling)}function sr(){Ye=Ze=null,oe=!1}function xc(t){pt===null?pt=[t]:pt.push(t)}var Ux=Dt.ReactCurrentBatchConfig;function ft(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var vl=un(null),jl=null,Qn=null,gc=null;function vc(){gc=Qn=jl=null}function jc(t){var e=vl.current;le(vl),t._currentValue=e}function _o(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function tr(t,e){jl=t,gc=Qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(gc!==t)if(t={context:t,memoizedValue:e,next:null},Qn===null){if(jl===null)throw Error(b(308));Qn=t,jl.dependencies={lanes:0,firstContext:t}}else Qn=Qn.next=t;return e}var jn=null;function yc(t){jn===null?jn=[t]:jn.push(t)}function Hf(t,e,r,i){var l=e.interleaved;return l===null?(r.next=r,yc(e)):(r.next=l.next,l.next=r),e.interleaved=r,Mt(t,i)}function Mt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ut=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qt(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Y&2){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,Mt(t,r)}return l=i.interleaved,l===null?(e.next=e,yc(i)):(e.next=l.next,l.next=e),i.interleaved=e,Mt(t,r)}function Zi(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,sc(t,r)}}function ru(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var l=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?l=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?l=s=e:s=s.next=e}else l=s=e;r={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function yl(t,e,r,i){var l=t.updateQueue;Ut=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var a=c,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,c=d.lastBaseUpdate,c!==o&&(c===null?d.firstBaseUpdate=u:c.next=u,d.lastBaseUpdate=a))}if(s!==null){var p=l.baseState;o=0,d=u=a=null,c=s;do{var x=c.lane,v=c.eventTime;if((i&x)===x){d!==null&&(d=d.next={eventTime:v,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=t,y=c;switch(x=e,v=r,y.tag){case 1:if(j=y.payload,typeof j=="function"){p=j.call(v,p,x);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,x=typeof j=="function"?j.call(v,p,x):j,x==null)break e;p=he({},p,x);break e;case 2:Ut=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,x=l.effects,x===null?l.effects=[c]:x.push(c))}else v={eventTime:v,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},d===null?(u=d=v,a=p):d=d.next=v,o|=x;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;x=c,c=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);if(d===null&&(a=p),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=d,e=l.shared.interleaved,e!==null){l=e;do o|=l.lane,l=l.next;while(l!==e)}else s===null&&(l.shared.lanes=0);bn|=o,t.lanes=o,t.memoizedState=p}}function iu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],l=i.callback;if(l!==null){if(i.callback=null,i=r,typeof l!="function")throw Error(b(191,l));l.call(i)}}}var Vf=new Ud.Component().refs;function No(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:he({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Pn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Oe(),l=tn(t),s=Pt(i,l);s.payload=e,r!=null&&(s.callback=r),e=qt(t,s,l),e!==null&&(xt(e,t,l,i),Zi(e,t,l))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Oe(),l=tn(t),s=Pt(i,l);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=qt(t,s,l),e!==null&&(xt(e,t,l,i),Zi(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Oe(),i=tn(t),l=Pt(r,i);l.tag=2,e!=null&&(l.callback=e),e=qt(t,l,i),e!==null&&(xt(e,t,i,r),Zi(e,t,i))}};function lu(t,e,r,i,l,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zr(r,i)||!Zr(l,s):!0}function Xf(t,e,r){var i=!1,l=sn,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(l=Ve(e)?Nn:De.current,i=e.contextTypes,s=(i=i!=null)?lr(t,l):sn),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=s),e}function su(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function So(t,e,r,i){var l=t.stateNode;l.props=r,l.state=t.memoizedState,l.refs=Vf,wc(t);var s=e.contextType;typeof s=="object"&&s!==null?l.context=ct(s):(s=Ve(e)?Nn:De.current,l.context=lr(t,s)),l.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(No(t,e,s,r),l.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&Wl.enqueueReplaceState(l,l.state,null),yl(t,r,l,i),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Nr(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(b(309));var i=r.stateNode}if(!i)throw Error(b(147,t));var l=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var c=l.refs;c===Vf&&(c=l.refs={}),o===null?delete c[s]:c[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!r._owner)throw Error(b(290,t))}return t}function Fi(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ou(t){var e=t._init;return e(t._payload)}function Qf(t){function e(h,f){if(t){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function r(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function i(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function l(h,f){return h=nn(h,f),h.index=0,h.sibling=null,h}function s(h,f,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function c(h,f,g,w){return f===null||f.tag!==6?(f=zs(g,h.mode,w),f.return=h,f):(f=l(f,g),f.return=h,f)}function a(h,f,g,w){var k=g.type;return k===On?d(h,f,g.props.children,w,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===$t&&ou(k)===f.type)?(w=l(f,g.props),w.ref=Nr(h,f,g),w.return=h,w):(w=rl(g.type,g.key,g.props,null,h.mode,w),w.ref=Nr(h,f,g),w.return=h,w)}function u(h,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=$s(g,h.mode,w),f.return=h,f):(f=l(f,g.children||[]),f.return=h,f)}function d(h,f,g,w,k){return f===null||f.tag!==7?(f=Cn(g,h.mode,w,k),f.return=h,f):(f=l(f,g),f.return=h,f)}function p(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zs(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ei:return g=rl(f.type,f.key,f.props,null,h.mode,g),g.ref=Nr(h,null,f),g.return=h,g;case Fn:return f=$s(f,h.mode,g),f.return=h,f;case $t:var w=f._init;return p(h,w(f._payload),g)}if(Tr(f)||yr(f))return f=Cn(f,h.mode,g,null),f.return=h,f;Fi(h,f)}return null}function x(h,f,g,w){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:c(h,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ei:return g.key===k?a(h,f,g,w):null;case Fn:return g.key===k?u(h,f,g,w):null;case $t:return k=g._init,x(h,f,k(g._payload),w)}if(Tr(g)||yr(g))return k!==null?null:d(h,f,g,w,null);Fi(h,g)}return null}function v(h,f,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,c(f,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ei:return h=h.get(w.key===null?g:w.key)||null,a(f,h,w,k);case Fn:return h=h.get(w.key===null?g:w.key)||null,u(f,h,w,k);case $t:var S=w._init;return v(h,f,g,S(w._payload),k)}if(Tr(w)||yr(w))return h=h.get(g)||null,d(f,h,w,k,null);Fi(f,w)}return null}function j(h,f,g,w){for(var k=null,S=null,E=f,L=f=0,z=null;E!==null&&L<g.length;L++){E.index>L?(z=E,E=null):z=E.sibling;var D=x(h,E,g[L],w);if(D===null){E===null&&(E=z);break}t&&E&&D.alternate===null&&e(h,E),f=s(D,f,L),S===null?k=D:S.sibling=D,S=D,E=z}if(L===g.length)return r(h,E),oe&&xn(h,L),k;if(E===null){for(;L<g.length;L++)E=p(h,g[L],w),E!==null&&(f=s(E,f,L),S===null?k=E:S.sibling=E,S=E);return oe&&xn(h,L),k}for(E=i(h,E);L<g.length;L++)z=v(E,h,L,g[L],w),z!==null&&(t&&z.alternate!==null&&E.delete(z.key===null?L:z.key),f=s(z,f,L),S===null?k=z:S.sibling=z,S=z);return t&&E.forEach(function(Q){return e(h,Q)}),oe&&xn(h,L),k}function y(h,f,g,w){var k=yr(g);if(typeof k!="function")throw Error(b(150));if(g=k.call(g),g==null)throw Error(b(151));for(var S=k=null,E=f,L=f=0,z=null,D=g.next();E!==null&&!D.done;L++,D=g.next()){E.index>L?(z=E,E=null):z=E.sibling;var Q=x(h,E,D.value,w);if(Q===null){E===null&&(E=z);break}t&&E&&Q.alternate===null&&e(h,E),f=s(Q,f,L),S===null?k=Q:S.sibling=Q,S=Q,E=z}if(D.done)return r(h,E),oe&&xn(h,L),k;if(E===null){for(;!D.done;L++,D=g.next())D=p(h,D.value,w),D!==null&&(f=s(D,f,L),S===null?k=D:S.sibling=D,S=D);return oe&&xn(h,L),k}for(E=i(h,E);!D.done;L++,D=g.next())D=v(E,h,L,D.value,w),D!==null&&(t&&D.alternate!==null&&E.delete(D.key===null?L:D.key),f=s(D,f,L),S===null?k=D:S.sibling=D,S=D);return t&&E.forEach(function(ee){return e(h,ee)}),oe&&xn(h,L),k}function _(h,f,g,w){if(typeof g=="object"&&g!==null&&g.type===On&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ei:e:{for(var k=g.key,S=f;S!==null;){if(S.key===k){if(k=g.type,k===On){if(S.tag===7){r(h,S.sibling),f=l(S,g.props.children),f.return=h,h=f;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===$t&&ou(k)===S.type){r(h,S.sibling),f=l(S,g.props),f.ref=Nr(h,S,g),f.return=h,h=f;break e}r(h,S);break}else e(h,S);S=S.sibling}g.type===On?(f=Cn(g.props.children,h.mode,w,g.key),f.return=h,h=f):(w=rl(g.type,g.key,g.props,null,h.mode,w),w.ref=Nr(h,f,g),w.return=h,h=w)}return o(h);case Fn:e:{for(S=g.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(h,f.sibling),f=l(f,g.children||[]),f.return=h,h=f;break e}else{r(h,f);break}else e(h,f);f=f.sibling}f=$s(g,h.mode,w),f.return=h,h=f}return o(h);case $t:return S=g._init,_(h,f,S(g._payload),w)}if(Tr(g))return j(h,f,g,w);if(yr(g))return y(h,f,g,w);Fi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(h,f.sibling),f=l(f,g),f.return=h,h=f):(r(h,f),f=zs(g,h.mode,w),f.return=h,h=f),o(h)):r(h,f)}return _}var or=Qf(!0),Gf=Qf(!1),yi={},Nt=un(yi),ti=un(yi),ni=un(yi);function yn(t){if(t===yi)throw Error(b(174));return t}function Cc(t,e){switch(ne(ni,e),ne(ti,t),ne(Nt,yi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ro(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ro(e,t)}le(Nt),ne(Nt,e)}function cr(){le(Nt),le(ti),le(ni)}function Kf(t){yn(ni.current);var e=yn(Nt.current),r=ro(e,t.type);e!==r&&(ne(ti,t),ne(Nt,r))}function kc(t){ti.current===t&&(le(Nt),le(ti))}var ae=un(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var As=[];function _c(){for(var t=0;t<As.length;t++)As[t]._workInProgressVersionPrimary=null;As.length=0}var Ji=Dt.ReactCurrentDispatcher,Ms=Dt.ReactCurrentBatchConfig,En=0,de=null,ve=null,Ce=null,Cl=!1,zr=!1,ri=0,Hx=0;function Be(){throw Error(b(321))}function Nc(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!gt(t[r],e[r]))return!1;return!0}function Sc(t,e,r,i,l,s){if(En=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ji.current=t===null||t.memoizedState===null?Qx:Gx,t=r(i,l),zr){s=0;do{if(zr=!1,ri=0,25<=s)throw Error(b(301));s+=1,Ce=ve=null,e.updateQueue=null,Ji.current=Kx,t=r(i,l)}while(zr)}if(Ji.current=kl,e=ve!==null&&ve.next!==null,En=0,Ce=ve=de=null,Cl=!1,e)throw Error(b(300));return t}function Ec(){var t=ri!==0;return ri=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?de.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function at(){if(ve===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ce===null?de.memoizedState:Ce.next;if(e!==null)Ce=e,ve=t;else{if(t===null)throw Error(b(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ce===null?de.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function ii(t,e){return typeof e=="function"?e(t):e}function Is(t){var e=at(),r=e.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=t;var i=ve,l=i.baseQueue,s=r.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}i.baseQueue=l=s,r.pending=null}if(l!==null){s=l.next,i=i.baseState;var c=o=null,a=null,u=s;do{var d=u.lane;if((En&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(c=a=p,o=i):a=a.next=p,de.lanes|=d,bn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=i:a.next=c,gt(i,e.memoizedState)||(He=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=a,r.lastRenderedState=i}if(t=r.interleaved,t!==null){l=t;do s=l.lane,de.lanes|=s,bn|=s,l=l.next;while(l!==t)}else l===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Ds(t){var e=at(),r=e.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=t;var i=r.dispatch,l=r.pending,s=e.memoizedState;if(l!==null){r.pending=null;var o=l=l.next;do s=t(s,o.action),o=o.next;while(o!==l);gt(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,i]}function Yf(){}function Zf(t,e){var r=de,i=at(),l=e(),s=!gt(i.memoizedState,l);if(s&&(i.memoizedState=l,He=!0),i=i.queue,bc(eh.bind(null,r,i,t),[t]),i.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(r.flags|=2048,li(9,qf.bind(null,r,i,l,e),void 0,null),ke===null)throw Error(b(349));En&30||Jf(r,e,l)}return l}function Jf(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function qf(t,e,r,i){e.value=r,e.getSnapshot=i,th(e)&&nh(t)}function eh(t,e,r){return r(function(){th(e)&&nh(t)})}function th(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!gt(t,r)}catch{return!0}}function nh(t){var e=Mt(t,1);e!==null&&xt(e,t,1,-1)}function cu(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:t},e.queue=t,t=t.dispatch=Xx.bind(null,de,t),[e.memoizedState,t]}function li(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function rh(){return at().memoizedState}function qi(t,e,r,i){var l=yt();de.flags|=t,l.memoizedState=li(1|e,r,void 0,i===void 0?null:i)}function Vl(t,e,r,i){var l=at();i=i===void 0?null:i;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,i!==null&&Nc(i,o.deps)){l.memoizedState=li(e,r,s,i);return}}de.flags|=t,l.memoizedState=li(1|e,r,s,i)}function au(t,e){return qi(8390656,8,t,e)}function bc(t,e){return Vl(2048,8,t,e)}function ih(t,e){return Vl(4,2,t,e)}function lh(t,e){return Vl(4,4,t,e)}function sh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oh(t,e,r){return r=r!=null?r.concat([t]):null,Vl(4,4,sh.bind(null,e,t),r)}function Tc(){}function ch(t,e){var r=at();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Nc(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function ah(t,e){var r=at();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Nc(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function uh(t,e,r){return En&21?(gt(r,e)||(r=hf(),de.lanes|=r,bn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=r)}function Wx(t,e){var r=q;q=r!==0&&4>r?r:4,t(!0);var i=Ms.transition;Ms.transition={};try{t(!1),e()}finally{q=r,Ms.transition=i}}function dh(){return at().memoizedState}function Vx(t,e,r){var i=tn(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},fh(t))hh(e,r);else if(r=Hf(t,e,r,i),r!==null){var l=Oe();xt(r,t,i,l),ph(r,e,i)}}function Xx(t,e,r){var i=tn(t),l={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(fh(t))hh(e,l);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,c=s(o,r);if(l.hasEagerState=!0,l.eagerState=c,gt(c,o)){var a=e.interleaved;a===null?(l.next=l,yc(e)):(l.next=a.next,a.next=l),e.interleaved=l;return}}catch{}finally{}r=Hf(t,e,l,i),r!==null&&(l=Oe(),xt(r,t,i,l),ph(r,e,i))}}function fh(t){var e=t.alternate;return t===de||e!==null&&e===de}function hh(t,e){zr=Cl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function ph(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,sc(t,r)}}var kl={readContext:ct,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Qx={readContext:ct,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:au,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,qi(4194308,4,sh.bind(null,e,t),r)},useLayoutEffect:function(t,e){return qi(4194308,4,t,e)},useInsertionEffect:function(t,e){return qi(4,2,t,e)},useMemo:function(t,e){var r=yt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=yt();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Vx.bind(null,de,t),[i.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:cu,useDebugValue:Tc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=cu(!1),e=t[0];return t=Wx.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=de,l=yt();if(oe){if(r===void 0)throw Error(b(407));r=r()}else{if(r=e(),ke===null)throw Error(b(349));En&30||Jf(i,e,r)}l.memoizedState=r;var s={value:r,getSnapshot:e};return l.queue=s,au(eh.bind(null,i,s,t),[t]),i.flags|=2048,li(9,qf.bind(null,i,s,r,e),void 0,null),r},useId:function(){var t=yt(),e=ke.identifierPrefix;if(oe){var r=Lt,i=Rt;r=(i&~(1<<32-mt(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=ri++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Hx++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gx={readContext:ct,useCallback:ch,useContext:ct,useEffect:bc,useImperativeHandle:oh,useInsertionEffect:ih,useLayoutEffect:lh,useMemo:ah,useReducer:Is,useRef:rh,useState:function(){return Is(ii)},useDebugValue:Tc,useDeferredValue:function(t){var e=at();return uh(e,ve.memoizedState,t)},useTransition:function(){var t=Is(ii)[0],e=at().memoizedState;return[t,e]},useMutableSource:Yf,useSyncExternalStore:Zf,useId:dh,unstable_isNewReconciler:!1},Kx={readContext:ct,useCallback:ch,useContext:ct,useEffect:bc,useImperativeHandle:oh,useInsertionEffect:ih,useLayoutEffect:lh,useMemo:ah,useReducer:Ds,useRef:rh,useState:function(){return Ds(ii)},useDebugValue:Tc,useDeferredValue:function(t){var e=at();return ve===null?e.memoizedState=t:uh(e,ve.memoizedState,t)},useTransition:function(){var t=Ds(ii)[0],e=at().memoizedState;return[t,e]},useMutableSource:Yf,useSyncExternalStore:Zf,useId:dh,unstable_isNewReconciler:!1};function ar(t,e){try{var r="",i=e;do r+=km(i),i=i.return;while(i);var l=r}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:l,digest:null}}function Fs(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Eo(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Yx=typeof WeakMap=="function"?WeakMap:Map;function mh(t,e,r){r=Pt(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Nl||(Nl=!0,Do=i),Eo(t,e)},r}function xh(t,e,r){r=Pt(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=e.value;r.payload=function(){return i(l)},r.callback=function(){Eo(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Eo(t,e),typeof i!="function"&&(en===null?en=new Set([this]):en.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function uu(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new Yx;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(r)||(l.add(r),t=ug.bind(null,t,e,r),e.then(t,t))}function du(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fu(t,e,r,i,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Pt(-1,1),e.tag=2,qt(r,e,1))),r.lanes|=1),t)}var Zx=Dt.ReactCurrentOwner,He=!1;function Fe(t,e,r,i){e.child=t===null?Gf(e,null,r,i):or(e,t.child,r,i)}function hu(t,e,r,i,l){r=r.render;var s=e.ref;return tr(e,l),i=Sc(t,e,r,i,s,l),r=Ec(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,It(t,e,l)):(oe&&r&&pc(e),e.flags|=1,Fe(t,e,i,l),e.child)}function pu(t,e,r,i,l){if(t===null){var s=r.type;return typeof s=="function"&&!Dc(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,gh(t,e,s,i,l)):(t=rl(r.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&l)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Zr,r(o,i)&&t.ref===e.ref)return It(t,e,l)}return e.flags|=1,t=nn(s,i),t.ref=e.ref,t.return=e,e.child=t}function gh(t,e,r,i,l){if(t!==null){var s=t.memoizedProps;if(Zr(s,i)&&t.ref===e.ref)if(He=!1,e.pendingProps=i=s,(t.lanes&l)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,It(t,e,l)}return bo(t,e,r,i,l)}function vh(t,e,r){var i=e.pendingProps,l=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Kn,Ge),Ge|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Kn,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,ne(Kn,Ge),Ge|=i}else s!==null?(i=s.baseLanes|r,e.memoizedState=null):i=r,ne(Kn,Ge),Ge|=i;return Fe(t,e,l,r),e.child}function jh(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function bo(t,e,r,i,l){var s=Ve(r)?Nn:De.current;return s=lr(e,s),tr(e,l),r=Sc(t,e,r,i,s,l),i=Ec(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,It(t,e,l)):(oe&&i&&pc(e),e.flags|=1,Fe(t,e,r,l),e.child)}function mu(t,e,r,i,l){if(Ve(r)){var s=!0;ml(e)}else s=!1;if(tr(e,l),e.stateNode===null)el(t,e),Xf(e,r,i),So(e,r,i,l),i=!0;else if(t===null){var o=e.stateNode,c=e.memoizedProps;o.props=c;var a=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ve(r)?Nn:De.current,u=lr(e,u));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==i||a!==u)&&su(e,o,i,u),Ut=!1;var x=e.memoizedState;o.state=x,yl(e,i,o,l),a=e.memoizedState,c!==i||x!==a||We.current||Ut?(typeof d=="function"&&(No(e,r,d,i),a=e.memoizedState),(c=Ut||lu(e,r,c,i,x,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=a),o.props=i,o.state=a,o.context=u,i=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Wf(t,e),c=e.memoizedProps,u=e.type===e.elementType?c:ft(e.type,c),o.props=u,p=e.pendingProps,x=o.context,a=r.contextType,typeof a=="object"&&a!==null?a=ct(a):(a=Ve(r)?Nn:De.current,a=lr(e,a));var v=r.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==p||x!==a)&&su(e,o,i,a),Ut=!1,x=e.memoizedState,o.state=x,yl(e,i,o,l);var j=e.memoizedState;c!==p||x!==j||We.current||Ut?(typeof v=="function"&&(No(e,r,v,i),j=e.memoizedState),(u=Ut||lu(e,r,u,i,x,j,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,j,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,j,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=j),o.props=i,o.state=j,o.context=a,i=u):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),i=!1)}return To(t,e,r,i,s,l)}function To(t,e,r,i,l,s){jh(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return l&&eu(e,r,!1),It(t,e,s);i=e.stateNode,Zx.current=e;var c=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=or(e,t.child,null,s),e.child=or(e,null,c,s)):Fe(t,e,c,s),e.memoizedState=i.state,l&&eu(e,r,!0),e.child}function yh(t){var e=t.stateNode;e.pendingContext?qa(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qa(t,e.context,!1),Cc(t,e.containerInfo)}function xu(t,e,r,i,l){return sr(),xc(l),e.flags|=256,Fe(t,e,r,i),e.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function Lo(t){return{baseLanes:t,cachePool:null,transitions:null}}function wh(t,e,r){var i=e.pendingProps,l=ae.current,s=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(l&2)!==0),c?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),ne(ae,l&1),t===null)return ko(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,i,0,null),t=Cn(t,i,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lo(r),e.memoizedState=Ro,t):Rc(e,o));if(l=t.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return Jx(t,e,o,i,c,l,r);if(s){s=i.fallback,o=e.mode,l=t.child,c=l.sibling;var a={mode:"hidden",children:i.children};return!(o&1)&&e.child!==l?(i=e.child,i.childLanes=0,i.pendingProps=a,e.deletions=null):(i=nn(l,a),i.subtreeFlags=l.subtreeFlags&14680064),c!==null?s=nn(c,s):(s=Cn(s,o,r,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Lo(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Ro,i}return s=t.child,t=s.sibling,i=nn(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Rc(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oi(t,e,r,i){return i!==null&&xc(i),or(e,t.child,null,r),t=Rc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jx(t,e,r,i,l,s,o){if(r)return e.flags&256?(e.flags&=-257,i=Fs(Error(b(422))),Oi(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,l=e.mode,i=Gl({mode:"visible",children:i.children},l,0,null),s=Cn(s,l,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&or(e,t.child,null,o),e.child.memoizedState=Lo(o),e.memoizedState=Ro,s);if(!(e.mode&1))return Oi(t,e,o,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var c=i.dgst;return i=c,s=Error(b(419)),i=Fs(s,i,void 0),Oi(t,e,o,i)}if(c=(o&t.childLanes)!==0,He||c){if(i=ke,i!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(i.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Mt(t,l),xt(i,t,l,-1))}return Ic(),i=Fs(Error(b(421))),Oi(t,e,o,i)}return l.data==="$?"?(e.flags|=128,e.child=t.child,e=dg.bind(null,t),l._reactRetry=e,null):(t=s.treeContext,Ye=Jt(l.nextSibling),Ze=e,oe=!0,pt=null,t!==null&&(it[lt++]=Rt,it[lt++]=Lt,it[lt++]=Sn,Rt=t.id,Lt=t.overflow,Sn=e),e=Rc(e,i.children),e.flags|=4096,e)}function gu(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_o(t.return,e,r)}function Os(t,e,r,i,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=l)}function Ch(t,e,r){var i=e.pendingProps,l=i.revealOrder,s=i.tail;if(Fe(t,e,i.children,r),i=ae.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gu(t,r,e);else if(t.tag===19)gu(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ne(ae,i),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(r=e.child,l=null;r!==null;)t=r.alternate,t!==null&&wl(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=e.child,e.child=null):(l=r.sibling,r.sibling=null),Os(e,!1,l,r,s);break;case"backwards":for(r=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&wl(t)===null){e.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}Os(e,!0,r,null,s);break;case"together":Os(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function It(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),bn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,r=nn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=nn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function qx(t,e,r){switch(e.tag){case 3:yh(e),sr();break;case 5:Kf(e);break;case 1:Ve(e.type)&&ml(e);break;case 4:Cc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,l=e.memoizedProps.value;ne(vl,i._currentValue),i._currentValue=l;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ne(ae,ae.current&1),e.flags|=128,null):r&e.child.childLanes?wh(t,e,r):(ne(ae,ae.current&1),t=It(t,e,r),t!==null?t.sibling:null);ne(ae,ae.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Ch(t,e,r);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(ae,ae.current),i)break;return null;case 22:case 23:return e.lanes=0,vh(t,e,r)}return It(t,e,r)}var kh,Po,_h,Nh;kh=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Po=function(){};_h=function(t,e,r,i){var l=t.memoizedProps;if(l!==i){t=e.stateNode,yn(Nt.current);var s=null;switch(r){case"input":l=qs(t,l),i=qs(t,i),s=[];break;case"select":l=he({},l,{value:void 0}),i=he({},i,{value:void 0}),s=[];break;case"textarea":l=no(t,l),i=no(t,i),s=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hl)}io(r,i);var o;r=null;for(u in l)if(!i.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var c=l[u];for(o in c)c.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var a=i[u];if(c=l!=null?l[u]:void 0,i.hasOwnProperty(u)&&a!==c&&(a!=null||c!=null))if(u==="style")if(c){for(o in c)!c.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in a)a.hasOwnProperty(o)&&c[o]!==a[o]&&(r||(r={}),r[o]=a[o])}else r||(s||(s=[]),s.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ie("scroll",t),s||c===a||(s=[])):(s=s||[]).push(u,a))}r&&(s=s||[]).push("style",r);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Nh=function(t,e,r,i){r!==i&&(e.flags|=4)};function Sr(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function eg(t,e,r){var i=e.pendingProps;switch(mc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Ve(e.type)&&pl(),Ae(e),null;case 3:return i=e.stateNode,cr(),le(We),le(De),_c(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Di(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(zo(pt),pt=null))),Po(t,e),Ae(e),null;case 5:kc(e);var l=yn(ni.current);if(r=e.type,t!==null&&e.stateNode!=null)_h(t,e,r,i,l),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(b(166));return Ae(e),null}if(t=yn(Nt.current),Di(e)){i=e.stateNode,r=e.type;var s=e.memoizedProps;switch(i[wt]=e,i[ei]=s,t=(e.mode&1)!==0,r){case"dialog":ie("cancel",i),ie("close",i);break;case"iframe":case"object":case"embed":ie("load",i);break;case"video":case"audio":for(l=0;l<Lr.length;l++)ie(Lr[l],i);break;case"source":ie("error",i);break;case"img":case"image":case"link":ie("error",i),ie("load",i);break;case"details":ie("toggle",i);break;case"input":Sa(i,s),ie("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ie("invalid",i);break;case"textarea":ba(i,s),ie("invalid",i)}io(r,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="children"?typeof c=="string"?i.textContent!==c&&(s.suppressHydrationWarning!==!0&&Ii(i.textContent,c,t),l=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Ii(i.textContent,c,t),l=["children",""+c]):Wr.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ie("scroll",i)}switch(r){case"input":bi(i),Ea(i,s,!0);break;case"textarea":bi(i),Ta(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hl)}i=l,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zd(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[wt]=e,t[ei]=i,kh(t,e,!1,!1),e.stateNode=t;e:{switch(o=lo(r,i),r){case"dialog":ie("cancel",t),ie("close",t),l=i;break;case"iframe":case"object":case"embed":ie("load",t),l=i;break;case"video":case"audio":for(l=0;l<Lr.length;l++)ie(Lr[l],t);l=i;break;case"source":ie("error",t),l=i;break;case"img":case"image":case"link":ie("error",t),ie("load",t),l=i;break;case"details":ie("toggle",t),l=i;break;case"input":Sa(t,i),l=qs(t,i),ie("invalid",t);break;case"option":l=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},l=he({},i,{value:void 0}),ie("invalid",t);break;case"textarea":ba(t,i),l=no(t,i),ie("invalid",t);break;default:l=i}io(r,l),c=l;for(s in c)if(c.hasOwnProperty(s)){var a=c[s];s==="style"?ef(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Jd(t,a)):s==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Vr(t,a):typeof a=="number"&&Vr(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wr.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ie("scroll",t):a!=null&&ec(t,s,a,o))}switch(r){case"input":bi(t),Ea(t,i,!1);break;case"textarea":bi(t),Ta(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ln(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zn(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zn(t,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=hl)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Nh(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(b(166));if(r=yn(ni.current),yn(Nt.current),Di(e)){if(i=e.stateNode,r=e.memoizedProps,i[wt]=e,(s=i.nodeValue!==r)&&(t=Ze,t!==null))switch(t.tag){case 3:Ii(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ii(i.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[wt]=e,e.stateNode=i}return Ae(e),null;case 13:if(le(ae),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Ye!==null&&e.mode&1&&!(e.flags&128))Uf(),sr(),e.flags|=98560,s=!1;else if(s=Di(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[wt]=e}else sr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else pt!==null&&(zo(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?je===0&&(je=3):Ic())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return cr(),Po(t,e),t===null&&Jr(e.stateNode.containerInfo),Ae(e),null;case 10:return jc(e.type._context),Ae(e),null;case 17:return Ve(e.type)&&pl(),Ae(e),null;case 19:if(le(ae),s=e.memoizedState,s===null)return Ae(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Sr(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,Sr(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)s=r,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ne(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ur&&(e.flags|=128,i=!0,Sr(s,!1),e.lanes=4194304)}else{if(!i)if(t=wl(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Sr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Ae(e),null}else 2*xe()-s.renderingStartTime>ur&&r!==1073741824&&(e.flags|=128,i=!0,Sr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,r=ae.current,ne(ae,i?r&1|2:r&1),e):(Ae(e),null);case 22:case 23:return Mc(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ge&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function tg(t,e){switch(mc(e),e.tag){case 1:return Ve(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cr(),le(We),le(De),_c(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kc(e),null;case 13:if(le(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(ae),null;case 4:return cr(),null;case 10:return jc(e.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var zi=!1,Ie=!1,ng=typeof WeakSet=="function"?WeakSet:Set,A=null;function Gn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){pe(t,e,i)}else r.current=null}function Bo(t,e,r){try{r()}catch(i){pe(t,e,i)}}var vu=!1;function rg(t,e){if(xo=ul,t=Tf(),hc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,c=-1,a=-1,u=0,d=0,p=t,x=null;t:for(;;){for(var v;p!==r||l!==0&&p.nodeType!==3||(c=o+l),p!==s||i!==0&&p.nodeType!==3||(a=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)x=p,p=v;for(;;){if(p===t)break t;if(x===r&&++u===l&&(c=o),x===s&&++d===i&&(a=o),(v=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=v}r=c===-1||a===-1?null:{start:c,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(go={focusedElem:t,selectionRange:r},ul=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var j=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var y=j.memoizedProps,_=j.memoizedState,h=e.stateNode,f=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ft(e.type,y),_);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return j=vu,vu=!1,j}function $r(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&t)===t){var s=l.destroy;l.destroy=void 0,s!==void 0&&Bo(e,r,s)}l=l.next}while(l!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Ao(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Sh(t){var e=t.alternate;e!==null&&(t.alternate=null,Sh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[ei],delete e[yo],delete e[Ox],delete e[zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Eh(t){return t.tag===5||t.tag===3||t.tag===4}function ju(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mo(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=hl));else if(i!==4&&(t=t.child,t!==null))for(Mo(t,e,r),t=t.sibling;t!==null;)Mo(t,e,r),t=t.sibling}function Io(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Io(t,e,r),t=t.sibling;t!==null;)Io(t,e,r),t=t.sibling}var Se=null,ht=!1;function zt(t,e,r){for(r=r.child;r!==null;)bh(t,e,r),r=r.sibling}function bh(t,e,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Fl,r)}catch{}switch(r.tag){case 5:Ie||Gn(r,e);case 6:var i=Se,l=ht;Se=null,zt(t,e,r),Se=i,ht=l,Se!==null&&(ht?(t=Se,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(ht?(t=Se,r=r.stateNode,t.nodeType===8?Ps(t.parentNode,r):t.nodeType===1&&Ps(t,r),Kr(t)):Ps(Se,r.stateNode));break;case 4:i=Se,l=ht,Se=r.stateNode.containerInfo,ht=!0,zt(t,e,r),Se=i,ht=l;break;case 0:case 11:case 14:case 15:if(!Ie&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bo(r,e,o),l=l.next}while(l!==i)}zt(t,e,r);break;case 1:if(!Ie&&(Gn(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){pe(r,e,c)}zt(t,e,r);break;case 21:zt(t,e,r);break;case 22:r.mode&1?(Ie=(i=Ie)||r.memoizedState!==null,zt(t,e,r),Ie=i):zt(t,e,r);break;default:zt(t,e,r)}}function yu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ng),e.forEach(function(i){var l=fg.bind(null,t,i);r.has(i)||(r.add(i),i.then(l,l))})}}function dt(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var l=r[i];try{var s=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 5:Se=c.stateNode,ht=!1;break e;case 3:Se=c.stateNode.containerInfo,ht=!0;break e;case 4:Se=c.stateNode.containerInfo,ht=!0;break e}c=c.return}if(Se===null)throw Error(b(160));bh(s,o,l),Se=null,ht=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){pe(l,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Th(e,t),e=e.sibling}function Th(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),jt(t),i&4){try{$r(3,t,t.return),Xl(3,t)}catch(y){pe(t,t.return,y)}try{$r(5,t,t.return)}catch(y){pe(t,t.return,y)}}break;case 1:dt(e,t),jt(t),i&512&&r!==null&&Gn(r,r.return);break;case 5:if(dt(e,t),jt(t),i&512&&r!==null&&Gn(r,r.return),t.flags&32){var l=t.stateNode;try{Vr(l,"")}catch(y){pe(t,t.return,y)}}if(i&4&&(l=t.stateNode,l!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,c=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Kd(l,s),lo(c,o);var u=lo(c,s);for(o=0;o<a.length;o+=2){var d=a[o],p=a[o+1];d==="style"?ef(l,p):d==="dangerouslySetInnerHTML"?Jd(l,p):d==="children"?Vr(l,p):ec(l,d,p,u)}switch(c){case"input":eo(l,s);break;case"textarea":Yd(l,s);break;case"select":var x=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Zn(l,!!s.multiple,v,!1):x!==!!s.multiple&&(s.defaultValue!=null?Zn(l,!!s.multiple,s.defaultValue,!0):Zn(l,!!s.multiple,s.multiple?[]:"",!1))}l[ei]=s}catch(y){pe(t,t.return,y)}}break;case 6:if(dt(e,t),jt(t),i&4){if(t.stateNode===null)throw Error(b(162));l=t.stateNode,s=t.memoizedProps;try{l.nodeValue=s}catch(y){pe(t,t.return,y)}}break;case 3:if(dt(e,t),jt(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Kr(e.containerInfo)}catch(y){pe(t,t.return,y)}break;case 4:dt(e,t),jt(t);break;case 13:dt(e,t),jt(t),l=t.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Bc=xe())),i&4&&yu(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||d,dt(e,t),Ie=u):dt(e,t),jt(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(p=A=d;A!==null;){switch(x=A,v=x.child,x.tag){case 0:case 11:case 14:case 15:$r(4,x,x.return);break;case 1:Gn(x,x.return);var j=x.stateNode;if(typeof j.componentWillUnmount=="function"){i=x,r=x.return;try{e=i,j.props=e.memoizedProps,j.state=e.memoizedState,j.componentWillUnmount()}catch(y){pe(i,r,y)}}break;case 5:Gn(x,x.return);break;case 22:if(x.memoizedState!==null){Cu(p);continue}}v!==null?(v.return=x,A=v):Cu(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{l=p.stateNode,u?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=qd("display",o))}catch(y){pe(t,t.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){pe(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dt(e,t),jt(t),i&4&&yu(t);break;case 21:break;default:dt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Eh(r)){var i=r;break e}r=r.return}throw Error(b(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Vr(l,""),i.flags&=-33);var s=ju(t);Io(t,s,l);break;case 3:case 4:var o=i.stateNode.containerInfo,c=ju(t);Mo(t,c,o);break;default:throw Error(b(161))}}catch(a){pe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ig(t,e,r){A=t,Rh(t)}function Rh(t,e,r){for(var i=(t.mode&1)!==0;A!==null;){var l=A,s=l.child;if(l.tag===22&&i){var o=l.memoizedState!==null||zi;if(!o){var c=l.alternate,a=c!==null&&c.memoizedState!==null||Ie;c=zi;var u=Ie;if(zi=o,(Ie=a)&&!u)for(A=l;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?ku(l):a!==null?(a.return=o,A=a):ku(l);for(;s!==null;)A=s,Rh(s),s=s.sibling;A=l,zi=c,Ie=u}wu(t)}else l.subtreeFlags&8772&&s!==null?(s.return=l,A=s):wu(t)}}function wu(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ie)if(r===null)i.componentDidMount();else{var l=e.elementType===e.type?r.memoizedProps:ft(e.type,r.memoizedProps);i.componentDidUpdate(l,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iu(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}iu(e,o,r)}break;case 5:var c=e.stateNode;if(r===null&&e.flags&4){r=c;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Kr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ie||e.flags&512&&Ao(e)}catch(x){pe(e,e.return,x)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function Cu(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function ku(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Xl(4,e)}catch(a){pe(e,r,a)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var l=e.return;try{i.componentDidMount()}catch(a){pe(e,l,a)}}var s=e.return;try{Ao(e)}catch(a){pe(e,s,a)}break;case 5:var o=e.return;try{Ao(e)}catch(a){pe(e,o,a)}}}catch(a){pe(e,e.return,a)}if(e===t){A=null;break}var c=e.sibling;if(c!==null){c.return=e.return,A=c;break}A=e.return}}var lg=Math.ceil,_l=Dt.ReactCurrentDispatcher,Lc=Dt.ReactCurrentOwner,ot=Dt.ReactCurrentBatchConfig,Y=0,ke=null,ge=null,Te=0,Ge=0,Kn=un(0),je=0,si=null,bn=0,Ql=0,Pc=0,Ur=null,Ue=null,Bc=0,ur=1/0,bt=null,Nl=!1,Do=null,en=null,$i=!1,Xt=null,Sl=0,Hr=0,Fo=null,tl=-1,nl=0;function Oe(){return Y&6?xe():tl!==-1?tl:tl=xe()}function tn(t){return t.mode&1?Y&2&&Te!==0?Te&-Te:Ux.transition!==null?(nl===0&&(nl=hf()),nl):(t=q,t!==0||(t=window.event,t=t===void 0?16:yf(t.type)),t):1}function xt(t,e,r,i){if(50<Hr)throw Hr=0,Fo=null,Error(b(185));gi(t,r,i),(!(Y&2)||t!==ke)&&(t===ke&&(!(Y&2)&&(Ql|=r),je===4&&Wt(t,Te)),Xe(t,i),r===1&&Y===0&&!(e.mode&1)&&(ur=xe()+500,Hl&&dn()))}function Xe(t,e){var r=t.callbackNode;Um(t,e);var i=al(t,t===ke?Te:0);if(i===0)r!==null&&Pa(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Pa(r),e===1)t.tag===0?$x(_u.bind(null,t)):Of(_u.bind(null,t)),Dx(function(){!(Y&6)&&dn()}),r=null;else{switch(pf(i)){case 1:r=lc;break;case 4:r=df;break;case 16:r=cl;break;case 536870912:r=ff;break;default:r=cl}r=Fh(r,Lh.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Lh(t,e){if(tl=-1,nl=0,Y&6)throw Error(b(327));var r=t.callbackNode;if(nr()&&t.callbackNode!==r)return null;var i=al(t,t===ke?Te:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=El(t,i);else{e=i;var l=Y;Y|=2;var s=Bh();(ke!==t||Te!==e)&&(bt=null,ur=xe()+500,wn(t,e));do try{cg();break}catch(c){Ph(t,c)}while(!0);vc(),_l.current=s,Y=l,ge!==null?e=0:(ke=null,Te=0,e=je)}if(e!==0){if(e===2&&(l=uo(t),l!==0&&(i=l,e=Oo(t,l))),e===1)throw r=si,wn(t,0),Wt(t,i),Xe(t,xe()),r;if(e===6)Wt(t,i);else{if(l=t.current.alternate,!(i&30)&&!sg(l)&&(e=El(t,i),e===2&&(s=uo(t),s!==0&&(i=s,e=Oo(t,s))),e===1))throw r=si,wn(t,0),Wt(t,i),Xe(t,xe()),r;switch(t.finishedWork=l,t.finishedLanes=i,e){case 0:case 1:throw Error(b(345));case 2:gn(t,Ue,bt);break;case 3:if(Wt(t,i),(i&130023424)===i&&(e=Bc+500-xe(),10<e)){if(al(t,0)!==0)break;if(l=t.suspendedLanes,(l&i)!==i){Oe(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=jo(gn.bind(null,t,Ue,bt),e);break}gn(t,Ue,bt);break;case 4:if(Wt(t,i),(i&4194240)===i)break;for(e=t.eventTimes,l=-1;0<i;){var o=31-mt(i);s=1<<o,o=e[o],o>l&&(l=o),i&=~s}if(i=l,i=xe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lg(i/1960))-i,10<i){t.timeoutHandle=jo(gn.bind(null,t,Ue,bt),i);break}gn(t,Ue,bt);break;case 5:gn(t,Ue,bt);break;default:throw Error(b(329))}}}return Xe(t,xe()),t.callbackNode===r?Lh.bind(null,t):null}function Oo(t,e){var r=Ur;return t.current.memoizedState.isDehydrated&&(wn(t,e).flags|=256),t=El(t,e),t!==2&&(e=Ue,Ue=r,e!==null&&zo(e)),t}function zo(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function sg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var l=r[i],s=l.getSnapshot;l=l.value;try{if(!gt(s(),l))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wt(t,e){for(e&=~Pc,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-mt(e),i=1<<r;t[r]=-1,e&=~i}}function _u(t){if(Y&6)throw Error(b(327));nr();var e=al(t,0);if(!(e&1))return Xe(t,xe()),null;var r=El(t,e);if(t.tag!==0&&r===2){var i=uo(t);i!==0&&(e=i,r=Oo(t,i))}if(r===1)throw r=si,wn(t,0),Wt(t,e),Xe(t,xe()),r;if(r===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,Ue,bt),Xe(t,xe()),null}function Ac(t,e){var r=Y;Y|=1;try{return t(e)}finally{Y=r,Y===0&&(ur=xe()+500,Hl&&dn())}}function Tn(t){Xt!==null&&Xt.tag===0&&!(Y&6)&&nr();var e=Y;Y|=1;var r=ot.transition,i=q;try{if(ot.transition=null,q=1,t)return t()}finally{q=i,ot.transition=r,Y=e,!(Y&6)&&dn()}}function Mc(){Ge=Kn.current,le(Kn)}function wn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Ix(r)),ge!==null)for(r=ge.return;r!==null;){var i=r;switch(mc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:cr(),le(We),le(De),_c();break;case 5:kc(i);break;case 4:cr();break;case 13:le(ae);break;case 19:le(ae);break;case 10:jc(i.type._context);break;case 22:case 23:Mc()}r=r.return}if(ke=t,ge=t=nn(t.current,null),Te=Ge=e,je=0,si=null,Pc=Ql=bn=0,Ue=Ur=null,jn!==null){for(e=0;e<jn.length;e++)if(r=jn[e],i=r.interleaved,i!==null){r.interleaved=null;var l=i.next,s=r.pending;if(s!==null){var o=s.next;s.next=l,i.next=o}r.pending=i}jn=null}return t}function Ph(t,e){do{var r=ge;try{if(vc(),Ji.current=kl,Cl){for(var i=de.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}Cl=!1}if(En=0,Ce=ve=de=null,zr=!1,ri=0,Lc.current=null,r===null||r.return===null){je=1,si=e,ge=null;break}e:{var s=t,o=r.return,c=r,a=e;if(e=Te,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=c,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var x=d.alternate;x?(d.updateQueue=x.updateQueue,d.memoizedState=x.memoizedState,d.lanes=x.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=du(o);if(v!==null){v.flags&=-257,fu(v,o,c,s,e),v.mode&1&&uu(s,u,e),e=v,a=u;var j=e.updateQueue;if(j===null){var y=new Set;y.add(a),e.updateQueue=y}else j.add(a);break e}else{if(!(e&1)){uu(s,u,e),Ic();break e}a=Error(b(426))}}else if(oe&&c.mode&1){var _=du(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fu(_,o,c,s,e),xc(ar(a,c));break e}}s=a=ar(a,c),je!==4&&(je=2),Ur===null?Ur=[s]:Ur.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=mh(s,a,e);ru(s,h);break e;case 1:c=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(en===null||!en.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=xh(s,c,e);ru(s,w);break e}}s=s.return}while(s!==null)}Mh(r)}catch(k){e=k,ge===r&&r!==null&&(ge=r=r.return);continue}break}while(!0)}function Bh(){var t=_l.current;return _l.current=kl,t===null?kl:t}function Ic(){(je===0||je===3||je===2)&&(je=4),ke===null||!(bn&268435455)&&!(Ql&268435455)||Wt(ke,Te)}function El(t,e){var r=Y;Y|=2;var i=Bh();(ke!==t||Te!==e)&&(bt=null,wn(t,e));do try{og();break}catch(l){Ph(t,l)}while(!0);if(vc(),Y=r,_l.current=i,ge!==null)throw Error(b(261));return ke=null,Te=0,je}function og(){for(;ge!==null;)Ah(ge)}function cg(){for(;ge!==null&&!Bm();)Ah(ge)}function Ah(t){var e=Dh(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?Mh(t):ge=e,Lc.current=null}function Mh(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=tg(r,e),r!==null){r.flags&=32767,ge=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,ge=null;return}}else if(r=eg(r,e,Ge),r!==null){ge=r;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);je===0&&(je=5)}function gn(t,e,r){var i=q,l=ot.transition;try{ot.transition=null,q=1,ag(t,e,r,i)}finally{ot.transition=l,q=i}return null}function ag(t,e,r,i){do nr();while(Xt!==null);if(Y&6)throw Error(b(327));r=t.finishedWork;var l=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(Hm(t,s),t===ke&&(ge=ke=null,Te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||$i||($i=!0,Fh(cl,function(){return nr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=q;q=1;var c=Y;Y|=4,Lc.current=null,rg(t,r),Th(r,t),Tx(go),ul=!!xo,go=xo=null,t.current=r,ig(r),Am(),Y=c,q=o,ot.transition=s}else t.current=r;if($i&&($i=!1,Xt=t,Sl=l),s=t.pendingLanes,s===0&&(en=null),Dm(r.stateNode),Xe(t,xe()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)l=e[r],i(l.value,{componentStack:l.stack,digest:l.digest});if(Nl)throw Nl=!1,t=Do,Do=null,t;return Sl&1&&t.tag!==0&&nr(),s=t.pendingLanes,s&1?t===Fo?Hr++:(Hr=0,Fo=t):Hr=0,dn(),null}function nr(){if(Xt!==null){var t=pf(Sl),e=ot.transition,r=q;try{if(ot.transition=null,q=16>t?16:t,Xt===null)var i=!1;else{if(t=Xt,Xt=null,Sl=0,Y&6)throw Error(b(331));var l=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var c=s.deletions;if(c!==null){for(var a=0;a<c.length;a++){var u=c[a];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:$r(8,d,s)}var p=d.child;if(p!==null)p.return=d,A=p;else for(;A!==null;){d=A;var x=d.sibling,v=d.return;if(Sh(d),d===u){A=null;break}if(x!==null){x.return=v,A=x;break}A=v}}}var j=s.alternate;if(j!==null){var y=j.child;if(y!==null){j.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$r(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,A=h;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=f;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Xl(9,c)}}catch(k){pe(c,c.return,k)}if(c===o){A=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,A=w;break e}A=c.return}}if(Y=l,dn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Fl,t)}catch{}i=!0}return i}finally{q=r,ot.transition=e}}return!1}function Nu(t,e,r){e=ar(r,e),e=mh(t,e,1),t=qt(t,e,1),e=Oe(),t!==null&&(gi(t,1,e),Xe(t,e))}function pe(t,e,r){if(t.tag===3)Nu(t,t,r);else for(;e!==null;){if(e.tag===3){Nu(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(en===null||!en.has(i))){t=ar(r,t),t=xh(e,t,1),e=qt(e,t,1),t=Oe(),e!==null&&(gi(e,1,t),Xe(e,t));break}}e=e.return}}function ug(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&r,ke===t&&(Te&r)===r&&(je===4||je===3&&(Te&130023424)===Te&&500>xe()-Bc?wn(t,0):Pc|=r),Xe(t,e)}function Ih(t,e){e===0&&(t.mode&1?(e=Li,Li<<=1,!(Li&130023424)&&(Li=4194304)):e=1);var r=Oe();t=Mt(t,e),t!==null&&(gi(t,e,r),Xe(t,r))}function dg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Ih(t,r)}function fg(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(b(314))}i!==null&&i.delete(e),Ih(t,r)}var Dh;Dh=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)He=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return He=!1,qx(t,e,r);He=!!(t.flags&131072)}else He=!1,oe&&e.flags&1048576&&zf(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var l=lr(e,De.current);tr(e,r),l=Sc(null,e,i,t,l,r);var s=Ec();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(i)?(s=!0,ml(e)):s=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,wc(e),l.updater=Wl,e.stateNode=l,l._reactInternals=e,So(e,i,t,r),e=To(null,e,i,!0,s,r)):(e.tag=0,oe&&s&&pc(e),Fe(null,e,l,r),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,l=i._init,i=l(i._payload),e.type=i,l=e.tag=pg(i),t=ft(i,t),l){case 0:e=bo(null,e,i,t,r);break e;case 1:e=mu(null,e,i,t,r);break e;case 11:e=hu(null,e,i,t,r);break e;case 14:e=pu(null,e,i,ft(i.type,t),r);break e}throw Error(b(306,i,""))}return e;case 0:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),bo(t,e,i,l,r);case 1:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),mu(t,e,i,l,r);case 3:e:{if(yh(e),t===null)throw Error(b(387));i=e.pendingProps,s=e.memoizedState,l=s.element,Wf(t,e),yl(e,i,null,r);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){l=ar(Error(b(423)),e),e=xu(t,e,i,r,l);break e}else if(i!==l){l=ar(Error(b(424)),e),e=xu(t,e,i,r,l);break e}else for(Ye=Jt(e.stateNode.containerInfo.firstChild),Ze=e,oe=!0,pt=null,r=Gf(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(sr(),i===l){e=It(t,e,r);break e}Fe(t,e,i,r)}e=e.child}return e;case 5:return Kf(e),t===null&&ko(e),i=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,o=l.children,vo(i,l)?o=null:s!==null&&vo(i,s)&&(e.flags|=32),jh(t,e),Fe(t,e,o,r),e.child;case 6:return t===null&&ko(e),null;case 13:return wh(t,e,r);case 4:return Cc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=or(e,null,i,r):Fe(t,e,i,r),e.child;case 11:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),hu(t,e,i,l,r);case 7:return Fe(t,e,e.pendingProps,r),e.child;case 8:return Fe(t,e,e.pendingProps.children,r),e.child;case 12:return Fe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,l=e.pendingProps,s=e.memoizedProps,o=l.value,ne(vl,i._currentValue),i._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===l.children&&!We.current){e=It(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){o=s.child;for(var a=c.firstContext;a!==null;){if(a.context===i){if(s.tag===1){a=Pt(-1,r&-r),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),_o(s.return,r,e),c.lanes|=r;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),_o(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,l.children,r),e=e.child}return e;case 9:return l=e.type,i=e.pendingProps.children,tr(e,r),l=ct(l),i=i(l),e.flags|=1,Fe(t,e,i,r),e.child;case 14:return i=e.type,l=ft(i,e.pendingProps),l=ft(i.type,l),pu(t,e,i,l,r);case 15:return gh(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),el(t,e),e.tag=1,Ve(i)?(t=!0,ml(e)):t=!1,tr(e,r),Xf(e,i,l),So(e,i,l,r),To(null,e,i,!0,t,r);case 19:return Ch(t,e,r);case 22:return vh(t,e,r)}throw Error(b(156,e.tag))};function Fh(t,e){return uf(t,e)}function hg(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,r,i){return new hg(t,e,r,i)}function Dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pg(t){if(typeof t=="function")return Dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nc)return 11;if(t===rc)return 14}return 2}function nn(t,e){var r=t.alternate;return r===null?(r=st(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function rl(t,e,r,i,l,s){var o=2;if(i=t,typeof t=="function")Dc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case On:return Cn(r.children,l,s,e);case tc:o=8,l|=8;break;case Ks:return t=st(12,r,e,l|2),t.elementType=Ks,t.lanes=s,t;case Ys:return t=st(13,r,e,l),t.elementType=Ys,t.lanes=s,t;case Zs:return t=st(19,r,e,l),t.elementType=Zs,t.lanes=s,t;case Xd:return Gl(r,l,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wd:o=10;break e;case Vd:o=9;break e;case nc:o=11;break e;case rc:o=14;break e;case $t:o=16,i=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=st(o,r,e,l),e.elementType=t,e.type=i,e.lanes=s,e}function Cn(t,e,r,i){return t=st(7,t,i,e),t.lanes=r,t}function Gl(t,e,r,i){return t=st(22,t,i,e),t.elementType=Xd,t.lanes=r,t.stateNode={isHidden:!1},t}function zs(t,e,r){return t=st(6,t,null,e),t.lanes=r,t}function $s(t,e,r){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mg(t,e,r,i,l){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fc(t,e,r,i,l,s,o,c,a){return t=new mg(t,e,r,c,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=st(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(s),t}function xg(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Oh(t){if(!t)return sn;t=t._reactInternals;e:{if(Pn(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var r=t.type;if(Ve(r))return Ff(t,r,e)}return e}function zh(t,e,r,i,l,s,o,c,a){return t=Fc(r,i,!0,t,l,s,o,c,a),t.context=Oh(null),r=t.current,i=Oe(),l=tn(r),s=Pt(i,l),s.callback=e??null,qt(r,s,l),t.current.lanes=l,gi(t,l,i),Xe(t,i),t}function Kl(t,e,r,i){var l=e.current,s=Oe(),o=tn(l);return r=Oh(r),e.context===null?e.context=r:e.pendingContext=r,e=Pt(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qt(l,e,o),t!==null&&(xt(t,l,o,s),Zi(t,l,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Su(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Oc(t,e){Su(t,e),(t=t.alternate)&&Su(t,e)}function gg(){return null}var $h=typeof reportError=="function"?reportError:function(t){console.error(t)};function zc(t){this._internalRoot=t}Yl.prototype.render=zc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Kl(t,e,null,null)};Yl.prototype.unmount=zc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tn(function(){Kl(null,t,null,null)}),e[At]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=gf();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Ht.length&&e!==0&&e<Ht[r].priority;r++);Ht.splice(r,0,t),r===0&&jf(t)}};function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function vg(t,e,r,i,l){if(l){if(typeof i=="function"){var s=i;i=function(){var u=bl(o);s.call(u)}}var o=zh(e,i,t,0,null,!1,!1,"",Eu);return t._reactRootContainer=o,t[At]=o.current,Jr(t.nodeType===8?t.parentNode:t),Tn(),o}for(;l=t.lastChild;)t.removeChild(l);if(typeof i=="function"){var c=i;i=function(){var u=bl(a);c.call(u)}}var a=Fc(t,0,!1,null,null,!1,!1,"",Eu);return t._reactRootContainer=a,t[At]=a.current,Jr(t.nodeType===8?t.parentNode:t),Tn(function(){Kl(e,a,r,i)}),a}function Jl(t,e,r,i,l){var s=r._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var c=l;l=function(){var a=bl(o);c.call(a)}}Kl(e,o,t,l)}else o=vg(r,e,t,l,i);return bl(o)}mf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Rr(e.pendingLanes);r!==0&&(sc(e,r|1),Xe(e,xe()),!(Y&6)&&(ur=xe()+500,dn()))}break;case 13:Tn(function(){var i=Mt(t,1);if(i!==null){var l=Oe();xt(i,t,1,l)}}),Oc(t,1)}};oc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var r=Oe();xt(e,t,134217728,r)}Oc(t,134217728)}};xf=function(t){if(t.tag===13){var e=tn(t),r=Mt(t,e);if(r!==null){var i=Oe();xt(r,t,e,i)}Oc(t,e)}};gf=function(){return q};vf=function(t,e){var r=q;try{return q=t,e()}finally{q=r}};oo=function(t,e,r){switch(e){case"input":if(eo(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var l=Ul(i);if(!l)throw Error(b(90));Gd(i),eo(i,l)}}}break;case"textarea":Yd(t,r);break;case"select":e=r.value,e!=null&&Zn(t,!!r.multiple,e,!1)}};rf=Ac;lf=Tn;var jg={usingClientEntryPoint:!1,Events:[ji,Hn,Ul,tf,nf,Ac]},Er={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yg={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cf(t),t===null?null:t.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{Fl=Ui.inject(yg),_t=Ui}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jg;tt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(e))throw Error(b(200));return xg(t,e,null,r)};tt.createRoot=function(t,e){if(!$c(t))throw Error(b(299));var r=!1,i="",l=$h;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=Fc(t,1,!1,null,null,r,!1,i,l),t[At]=e.current,Jr(t.nodeType===8?t.parentNode:t),new zc(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=cf(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return Tn(t)};tt.hydrate=function(t,e,r){if(!Zl(e))throw Error(b(200));return Jl(null,t,e,!0,r)};tt.hydrateRoot=function(t,e,r){if(!$c(t))throw Error(b(405));var i=r!=null&&r.hydratedSources||null,l=!1,s="",o=$h;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=zh(e,null,t,1,r??null,l,!1,s,o),t[At]=e.current,Jr(t),i)for(t=0;t<i.length;t++)r=i[t],l=r._getVersion,l=l(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,l]:e.mutableSourceEagerHydrationData.push(r,l);return new Yl(e)};tt.render=function(t,e,r){if(!Zl(e))throw Error(b(200));return Jl(null,t,e,!1,r)};tt.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(b(40));return t._reactRootContainer?(Tn(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};tt.unstable_batchedUpdates=Ac;tt.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!Zl(r))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Jl(t,e,r,!1,i)};tt.version="18.2.0-next-9e3b772b8-20220608";function Uh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh)}catch(t){console.error(t)}}Uh(),Od.exports=tt;var wi=Od.exports,bu=wi;Qs.createRoot=bu.createRoot,Qs.hydrateRoot=bu.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},oi.apply(this,arguments)}var Qt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qt||(Qt={}));const Tu="popstate";function wg(t){t===void 0&&(t={});function e(l,s){let{pathname:o="/",search:c="",hash:a=""}=Bn(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),$o("",{pathname:o,search:c,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(l,s){let o=l.document.querySelector("base"),c="";if(o&&o.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");c=u===-1?a:a.slice(0,u)}return c+"#"+(typeof s=="string"?s:Tl(s))}function i(l,s){ql(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return kg(e,r,i,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ql(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Cg(){return Math.random().toString(36).substr(2,8)}function Ru(t,e){return{usr:t.state,key:t.key,idx:e}}function $o(t,e,r,i){return r===void 0&&(r=null),oi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bn(e):e,{state:r,key:e&&e.key||i||Cg()})}function Tl(t){let{pathname:e="/",search:r="",hash:i=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function kg(t,e,r,i){i===void 0&&(i={});let{window:l=document.defaultView,v5Compat:s=!1}=i,o=l.history,c=Qt.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(oi({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){c=Qt.Pop;let _=d(),h=_==null?null:_-u;u=_,a&&a({action:c,location:y.location,delta:h})}function x(_,h){c=Qt.Push;let f=$o(y.location,_,h);r&&r(f,_),u=d()+1;let g=Ru(f,u),w=y.createHref(f);try{o.pushState(g,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(w)}s&&a&&a({action:c,location:y.location,delta:1})}function v(_,h){c=Qt.Replace;let f=$o(y.location,_,h);r&&r(f,_),u=d();let g=Ru(f,u),w=y.createHref(f);o.replaceState(g,"",w),s&&a&&a({action:c,location:y.location,delta:0})}function j(_){let h=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof _=="string"?_:Tl(_);return fe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return c},get location(){return t(l,o)},listen(_){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Tu,p),a=_,()=>{l.removeEventListener(Tu,p),a=null}},createHref(_){return e(l,_)},createURL:j,encodeLocation(_){let h=j(_);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:v,go(_){return o.go(_)}};return y}var Lu;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lu||(Lu={}));function _g(t,e,r){r===void 0&&(r="/");let i=typeof e=="string"?Bn(e):e,l=ci(i.pathname||"/",r);if(l==null)return null;let s=Hh(t);Ng(s);let o=null;for(let c=0;o==null&&c<s.length;++c)o=Ag(s[c],Ig(l));return o}function Hh(t,e,r,i){e===void 0&&(e=[]),r===void 0&&(r=[]),i===void 0&&(i="");let l=(s,o,c)=>{let a={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(fe(a.relativePath.startsWith(i),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(i.length));let u=rn([i,a.relativePath]),d=r.concat(a);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hh(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Pg(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))l(s,o);else for(let a of Wh(s.path))l(s,o,a)}),e}function Wh(t){let e=t.split("/");if(e.length===0)return[];let[r,...i]=e,l=r.endsWith("?"),s=r.replace(/\?$/,"");if(i.length===0)return l?[s,""]:[s];let o=Wh(i.join("/")),c=[];return c.push(...o.map(a=>a===""?s:[s,a].join("/"))),l&&c.push(...o),c.map(a=>t.startsWith("/")&&a===""?"/":a)}function Ng(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Bg(e.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const Sg=/^:\w+$/,Eg=3,bg=2,Tg=1,Rg=10,Lg=-2,Pu=t=>t==="*";function Pg(t,e){let r=t.split("/"),i=r.length;return r.some(Pu)&&(i+=Lg),e&&(i+=bg),r.filter(l=>!Pu(l)).reduce((l,s)=>l+(Sg.test(s)?Eg:s===""?Tg:Rg),i)}function Bg(t,e){return t.length===e.length&&t.slice(0,-1).every((i,l)=>i===e[l])?t[t.length-1]-e[e.length-1]:0}function Ag(t,e){let{routesMeta:r}=t,i={},l="/",s=[];for(let o=0;o<r.length;++o){let c=r[o],a=o===r.length-1,u=l==="/"?e:e.slice(l.length)||"/",d=Uo({path:c.relativePath,caseSensitive:c.caseSensitive,end:a},u);if(!d)return null;Object.assign(i,d.params);let p=c.route;s.push({params:i,pathname:rn([l,d.pathname]),pathnameBase:$g(rn([l,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(l=rn([l,d.pathnameBase]))}return s}function Uo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,i]=Mg(t.path,t.caseSensitive,t.end),l=e.match(r);if(!l)return null;let s=l[0],o=s.replace(/(.)\/+$/,"$1"),c=l.slice(1);return{params:i.reduce((u,d,p)=>{let{paramName:x,isOptional:v}=d;if(x==="*"){let y=c[p]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const j=c[p];return v&&!j?u[x]=void 0:u[x]=Dg(j||"",x),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Mg(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),ql(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,c,a)=>(i.push({paramName:c,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),i]}function Ig(t){try{return decodeURI(t)}catch(e){return ql(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Dg(t,e){try{return decodeURIComponent(t)}catch(r){return ql(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function ci(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,i=t.charAt(r);return i&&i!=="/"?null:t.slice(r)||"/"}function Fg(t,e){e===void 0&&(e="/");let{pathname:r,search:i="",hash:l=""}=typeof t=="string"?Bn(t):t;return{pathname:r?r.startsWith("/")?r:Og(r,e):e,search:Ug(i),hash:Hg(l)}}function Og(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Us(t,e,r,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zg(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Uc(t,e){let r=zg(t);return e?r.map((i,l)=>l===t.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Hc(t,e,r,i){i===void 0&&(i=!1);let l;typeof t=="string"?l=Bn(t):(l=oi({},t),fe(!l.pathname||!l.pathname.includes("?"),Us("?","pathname","search",l)),fe(!l.pathname||!l.pathname.includes("#"),Us("#","pathname","hash",l)),fe(!l.search||!l.search.includes("#"),Us("#","search","hash",l)));let s=t===""||l.pathname==="",o=s?"/":l.pathname,c;if(o==null)c=r;else{let p=e.length-1;if(!i&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),p-=1;l.pathname=x.join("/")}c=p>=0?e[p]:"/"}let a=Fg(l,c),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&r.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const rn=t=>t.join("/").replace(/\/\/+/g,"/"),$g=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ug=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Hg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Wg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Vh=["post","put","patch","delete"];new Set(Vh);const Vg=["get",...Vh];new Set(Vg);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},ai.apply(this,arguments)}const es=m.createContext(null),Xh=m.createContext(null),Ft=m.createContext(null),ts=m.createContext(null),fn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Qh=m.createContext(null);function Xg(t,e){let{relative:r}=e===void 0?{}:e;gr()||fe(!1);let{basename:i,navigator:l}=m.useContext(Ft),{hash:s,pathname:o,search:c}=ns(t,{relative:r}),a=o;return i!=="/"&&(a=o==="/"?i:rn([i,o])),l.createHref({pathname:a,search:c,hash:s})}function gr(){return m.useContext(ts)!=null}function vr(){return gr()||fe(!1),m.useContext(ts).location}function Gh(t){m.useContext(Ft).static||m.useLayoutEffect(t)}function Kh(){let{isDataRoute:t}=m.useContext(fn);return t?l0():Qg()}function Qg(){gr()||fe(!1);let t=m.useContext(es),{basename:e,future:r,navigator:i}=m.useContext(Ft),{matches:l}=m.useContext(fn),{pathname:s}=vr(),o=JSON.stringify(Uc(l,r.v7_relativeSplatPath)),c=m.useRef(!1);return Gh(()=>{c.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!c.current)return;if(typeof u=="number"){i.go(u);return}let p=Hc(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:rn([e,p.pathname])),(d.replace?i.replace:i.push)(p,d.state,d)},[e,i,o,s,t])}function ns(t,e){let{relative:r}=e===void 0?{}:e,{future:i}=m.useContext(Ft),{matches:l}=m.useContext(fn),{pathname:s}=vr(),o=JSON.stringify(Uc(l,i.v7_relativeSplatPath));return m.useMemo(()=>Hc(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function Gg(t,e){return Kg(t,e)}function Kg(t,e,r,i){gr()||fe(!1);let{navigator:l}=m.useContext(Ft),{matches:s}=m.useContext(fn),o=s[s.length-1],c=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=vr(),d;if(e){var p;let _=typeof e=="string"?Bn(e):e;a==="/"||(p=_.pathname)!=null&&p.startsWith(a)||fe(!1),d=_}else d=u;let x=d.pathname||"/",v=a==="/"?x:x.slice(a.length)||"/",j=_g(t,{pathname:v}),y=e0(j&&j.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:rn([a,l.encodeLocation?l.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:rn([a,l.encodeLocation?l.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,r,i);return e&&y?m.createElement(ts.Provider,{value:{location:ai({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qt.Pop}},y):y}function Yg(){let t=i0(),e=Wg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),r?m.createElement("pre",{style:l},r):null,s)}const Zg=m.createElement(Yg,null);class Jg extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?m.createElement(fn.Provider,{value:this.props.routeContext},m.createElement(Qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qg(t){let{routeContext:e,match:r,children:i}=t,l=m.useContext(es);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),m.createElement(fn.Provider,{value:e},i)}function e0(t,e,r,i){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),i===void 0&&(i=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,c=(l=r)==null?void 0:l.errors;if(c!=null){let d=o.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id]));d>=0||fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:x,errors:v}=r,j=p.route.loader&&x[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||j){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,x)=>{let v,j=!1,y=null,_=null;r&&(v=c&&p.route.id?c[p.route.id]:void 0,y=p.route.errorElement||Zg,a&&(u<0&&x===0?(s0("route-fallback",!1),j=!0,_=null):u===x&&(j=!0,_=p.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,x+1)),f=()=>{let g;return v?g=y:j?g=_:p.route.Component?g=m.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,m.createElement(qg,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:r!=null},children:g})};return r&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?m.createElement(Jg,{location:r.location,revalidation:r.revalidation,component:y,error:v,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Yh=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Yh||{}),Rl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Rl||{});function t0(t){let e=m.useContext(es);return e||fe(!1),e}function n0(t){let e=m.useContext(Xh);return e||fe(!1),e}function r0(t){let e=m.useContext(fn);return e||fe(!1),e}function Zh(t){let e=r0(),r=e.matches[e.matches.length-1];return r.route.id||fe(!1),r.route.id}function i0(){var t;let e=m.useContext(Qh),r=n0(Rl.UseRouteError),i=Zh(Rl.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[i]}function l0(){let{router:t}=t0(Yh.UseNavigateStable),e=Zh(Rl.UseNavigateStable),r=m.useRef(!1);return Gh(()=>{r.current=!0}),m.useCallback(function(l,s){s===void 0&&(s={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,ai({fromRouteId:e},s)))},[t,e])}const Bu={};function s0(t,e,r){!e&&!Bu[t]&&(Bu[t]=!0)}function Hi(t){let{to:e,replace:r,state:i,relative:l}=t;gr()||fe(!1);let{future:s,static:o}=m.useContext(Ft),{matches:c}=m.useContext(fn),{pathname:a}=vr(),u=Kh(),d=Hc(e,Uc(c,s.v7_relativeSplatPath),a,l==="path"),p=JSON.stringify(d);return m.useEffect(()=>u(JSON.parse(p),{replace:r,state:i,relative:l}),[u,p,l,r,i]),null}function Z(t){fe(!1)}function o0(t){let{basename:e="/",children:r=null,location:i,navigationType:l=Qt.Pop,navigator:s,static:o=!1,future:c}=t;gr()&&fe(!1);let a=e.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:a,navigator:s,static:o,future:ai({v7_relativeSplatPath:!1},c)}),[a,c,s,o]);typeof i=="string"&&(i=Bn(i));let{pathname:d="/",search:p="",hash:x="",state:v=null,key:j="default"}=i,y=m.useMemo(()=>{let _=ci(d,a);return _==null?null:{location:{pathname:_,search:p,hash:x,state:v,key:j},navigationType:l}},[a,d,p,x,v,j,l]);return y==null?null:m.createElement(Ft.Provider,{value:u},m.createElement(ts.Provider,{children:r,value:y}))}function rs(t){let{children:e,location:r}=t;return Gg(Ho(e),r)}new Promise(()=>{});function Ho(t,e){e===void 0&&(e=[]);let r=[];return m.Children.forEach(t,(i,l)=>{if(!m.isValidElement(i))return;let s=[...e,l];if(i.type===m.Fragment){r.push.apply(r,Ho(i.props.children,s));return}i.type!==Z&&fe(!1),!i.props.index||!i.props.children||fe(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ho(i.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Ll.apply(this,arguments)}function Jh(t,e){if(t==null)return{};var r={},i=Object.keys(t),l,s;for(s=0;s<i.length;s++)l=i[s],!(e.indexOf(l)>=0)&&(r[l]=t[l]);return r}function c0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function a0(t,e){return t.button===0&&(!e||e==="_self")&&!c0(t)}const u0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],d0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],f0=m.createContext({isTransitioning:!1}),h0="startTransition",Au=Zo[h0];function p0(t){let{basename:e,children:r,future:i,window:l}=t,s=m.useRef();s.current==null&&(s.current=wg({window:l,v5Compat:!0}));let o=s.current,[c,a]=m.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},d=m.useCallback(p=>{u&&Au?Au(()=>a(p)):a(p)},[a,u]);return m.useLayoutEffect(()=>o.listen(d),[o,d]),m.createElement(o0,{basename:e,children:r,location:c.location,navigationType:c.action,navigator:o,future:i})}const m0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qh=m.forwardRef(function(e,r){let{onClick:i,relative:l,reloadDocument:s,replace:o,state:c,target:a,to:u,preventScrollReset:d,unstable_viewTransition:p}=e,x=Jh(e,u0),{basename:v}=m.useContext(Ft),j,y=!1;if(typeof u=="string"&&x0.test(u)&&(j=u,m0))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=ci(w.pathname,v);w.origin===g.origin&&k!=null?u=k+w.search+w.hash:y=!0}catch{}let _=Xg(u,{relative:l}),h=v0(u,{replace:o,state:c,target:a,preventScrollReset:d,relative:l,unstable_viewTransition:p});function f(g){i&&i(g),g.defaultPrevented||h(g)}return m.createElement("a",Ll({},x,{href:j||_,onClick:y||s?i:f,ref:r,target:a}))}),te=m.forwardRef(function(e,r){let{"aria-current":i="page",caseSensitive:l=!1,className:s="",end:o=!1,style:c,to:a,unstable_viewTransition:u,children:d}=e,p=Jh(e,d0),x=ns(a,{relative:p.relative}),v=vr(),j=m.useContext(Xh),{navigator:y}=m.useContext(Ft),_=j!=null&&j0(x)&&u===!0,h=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,f=v.pathname,g=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;l||(f=f.toLowerCase(),g=g?g.toLowerCase():null,h=h.toLowerCase());const w=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let k=f===h||!o&&f.startsWith(h)&&f.charAt(w)==="/",S=g!=null&&(g===h||!o&&g.startsWith(h)&&g.charAt(h.length)==="/"),E={isActive:k,isPending:S,isTransitioning:_},L=k?i:void 0,z;typeof s=="function"?z=s(E):z=[s,k?"active":null,S?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(E):c;return m.createElement(qh,Ll({},p,{"aria-current":L,className:z,ref:r,style:D,to:a,unstable_viewTransition:u}),typeof d=="function"?d(E):d)});var Wo;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Wo||(Wo={}));var Mu;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mu||(Mu={}));function g0(t){let e=m.useContext(es);return e||fe(!1),e}function v0(t,e){let{target:r,replace:i,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:c}=e===void 0?{}:e,a=Kh(),u=vr(),d=ns(t,{relative:o});return m.useCallback(p=>{if(a0(p,r)){p.preventDefault();let x=i!==void 0?i:Tl(u)===Tl(d);a(t,{replace:x,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:c})}},[u,a,d,i,l,r,t,s,o,c])}function j0(t,e){e===void 0&&(e={});let r=m.useContext(f0);r==null&&fe(!1);let{basename:i}=g0(Wo.useViewTransitionState),l=ns(t,{relative:e.relative});if(!r.isTransitioning)return!1;let s=ci(r.currentLocation.pathname,i)||r.currentLocation.pathname,o=ci(r.nextLocation.pathname,i)||r.nextLocation.pathname;return Uo(l.pathname,o)!=null||Uo(l.pathname,s)!=null}const ep="data:image/svg+xml,%3csvg%20viewBox='0%200%20185%20185'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='185'%20xmlns:ev='http://www.w3.org/2001/xml-events'%20xmlns='http://www.w3.org/2000/svg'%20height='185'%3e%3cdefs/%3e%3cg%20transform='translate(5.5,5.5)'%20id='page1'%3e%3crect%20x='0'%20fill='%23ffffff'%20width='175'%20height='175'%20y='0'/%3e%3cpath%20stroke-width='1'%20transform='translate(1.020200,1.435200)'%20fill='%23409eff'%20stroke='%23409eff'%20d='M166.9,86.3C186.1,49.0,152.2,40.9,152.2,40.9C151.0,-0.7,109.6,12.9,109.6,12.9C88.0,-16.1,62.5,12.9,62.5,12.9C62.5,12.9,22.4,-1.3,23.7,40.9C23.7,40.9,-14.7,48.6,7.4,86.3C7.4,86.3,-16.6,117.2,21.7,131.6C21.7,131.6,21.1,169.4,60.0,159.6C60.0,159.6,80.0,189.7,109.6,159.6C109.6,159.6,148.5,173.0,148.5,131.6C148.5,131.6,187.7,126.4,166.9,86.3z'%20fill-rule='nonzero'%20id='shape1'/%3e%3cpath%20stroke-width='1'%20transform='translate(9.846800,10.261800)'%20fill='%23ffffff'%20stroke='%23409eff'%20d='M149.8,77.5C167.1,44.0,136.7,36.7,136.7,36.7C135.6,-0.6,98.4,11.6,98.4,11.6C79.0,-14.5,56.1,11.6,56.1,11.6C56.1,11.6,20.1,-1.2,21.3,36.7C21.3,36.7,-13.2,43.7,6.7,77.5C6.7,77.5,-14.9,105.2,19.5,118.2C19.5,118.2,18.9,152.1,53.9,143.3C53.9,143.3,71.8,170.3,98.4,143.3C98.4,143.3,133.3,155.3,133.3,118.2C133.3,118.2,168.6,113.5,149.8,77.5z'%20fill-rule='nonzero'%20id='shape2'/%3e%3cpath%20stroke-width='1'%20transform='translate(46.859300,47.353600)'%20fill='%23409eff'%20stroke='%23409eff'%20d='M73.6,43.5L36.3,43.5C34.7,43.5,33.9,44.2,33.9,45.6C33.9,49.0,35.7,52.3,39.5,55.3C43.2,58.4,47.2,59.9,51.5,59.9C54.0,59.9,56.8,59.4,59.9,58.4C63.0,57.4,65.6,56.2,67.6,54.8C69.4,53.5,70.8,52.9,71.9,52.9C73.2,52.9,74.6,53.8,75.9,55.4C77.2,57.1,77.9,58.9,77.9,60.7C77.9,64.5,75.5,68.2,70.8,71.7C62.3,78.0,52.6,81.1,41.6,81.1C30.5,81.1,21.2,77.9,13.7,71.5C10.1,68.3,7.1,64.5,4.7,60.0C1.6,54.0,.0,47.7,.0,41.1C.0,32.2,2.7,24.2,8.1,17.1C12.7,11.0,18.7,6.4,25.9,3.4C31.3,1.1,37.1,.0,43.4,.0C53.4,.0,62.0,2.9,69.0,8.6C72.5,11.4,75.4,14.8,77.6,18.7C80.1,23.2,81.3,27.5,81.3,31.7C81.3,35.2,80.6,38.0,79.2,40.2C77.7,42.4,75.9,43.5,73.6,43.5zM38.4,28.6L46.4,28.6C49.8,28.6,51.5,27.1,51.5,24.0C51.5,21.1,50.7,18.8,49.0,17.0C47.4,15.2,45.2,14.3,42.6,14.3C39.6,14.3,37.3,15.4,35.6,17.8C34.0,19.9,33.2,22.1,33.2,24.4C33.2,25.9,33.6,27.0,34.4,27.7C35.2,28.3,36.5,28.6,38.4,28.6z'%20fill-rule='nonzero'%20id='shape3'/%3e%3c/g%3e%3c/svg%3e";function y0(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"home-content",children:[n.jsxs("div",{className:"description",children:[n.jsx("img",{src:ep,alt:"pelement-react"}),n.jsx("h1",{children:"pelement react"}),n.jsx("p",{children:"基于Element Plus 和 react，面向设计师和开发者的组件库"}),n.jsx(qh,{to:"/component/button",children:"快速开始"})]}),n.jsxs("div",{className:"join-us",children:[n.jsx("h3",{children:"加入我们"}),n.jsxs("div",{children:[n.jsx("label",{children:"Email: "}),n.jsx("span",{children:"llkui241569@163.com"})]}),n.jsxs("div",{children:[n.jsx("label",{children:"QQ: "}),n.jsx("span",{children:"1728366431"})]})]}),n.jsxs("div",{className:"footer-main text-xs",children:[n.jsxs("p",{children:["Released under the ",n.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferer",children:"MIT License"}),"."]}),n.jsxs("p",{children:["Made with ❤️ by ",n.jsx("a",{href:"https://github.com/llkui",target:"_blank",rel:"noopener noreferer",children:"llkui"})]})]})]})})}function Iu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"安装"}),`
`,n.jsx(e.h2,{children:"兼容性"}),`
`,n.jsx(e.p,{children:"pelement react 支持最近两个版本的浏览器。"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsxs(e.th,{children:[n.jsx("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png",alt:""}),n.jsx("br",{}),"Edge"]}),n.jsxs(e.th,{children:[n.jsx("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png",alt:""}),n.jsx("br",{}),"Firefox"]}),n.jsxs(e.th,{children:[n.jsx("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png",alt:""}),n.jsx("br",{}),"Chrome"]}),n.jsxs(e.th,{children:[n.jsx("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png",alt:""}),n.jsx("br",{}),"Safari"]})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"最近 2 个版本"}),n.jsx(e.td,{children:"最近 2 个版本"}),n.jsx(e.td,{children:"最近 2 个版本"}),n.jsx(e.td,{children:"最近 2 个版本"})]})})]}),`
`,n.jsx(e.h2,{children:"使用包管理器"}),`
`,n.jsx(e.p,{children:"我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 pelement-react，然后您就可以使用打包工具，例如 Vite 或 webpack。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`# 选择一个你喜欢的包管理器\r
\r
# NPM\r
$ npm install pelement-react --save\r
\r
# Yarn\r
$ yarn add pelement-react\r
\r
# pnpm\r
$ pnpm install pelement-react
`})})]})}function w0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Iu,{...t})}):Iu(t)}function Du(t){const e={h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.6"}),`
`,n.jsx(e.p,{children:"be pending"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Popconfirm"}),`
`,n.jsx(e.li,{children:"Components [Icon] add QuestionFilled"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.5"}),`
`,n.jsx(e.p,{children:"2024-01-19"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Tooltip"}),`
`,n.jsx(e.li,{children:"Components add Popover"}),`
`,n.jsx(e.li,{children:"Components [Icon] add CircleCheck"}),`
`,n.jsx(e.li,{children:"Components add Progress"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.4"}),`
`,n.jsx(e.p,{children:"2024-01-13"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components [Icon] add ArrowRight UserFilled"}),`
`,n.jsx(e.li,{children:"Components add Collapse"}),`
`,n.jsx(e.li,{children:"Components add Avatar"}),`
`,n.jsx(e.li,{children:"Components add Result"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.3"}),`
`,n.jsx(e.p,{children:"2024-01-06"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components [Icon] add InfoFilled WarningFilled CircleCloseFilled CircleCheckFilled"}),`
`,n.jsx(e.li,{children:"Components [Alert] add description closable center closeText showIcon effect attribute and close event"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.2"}),`
`,n.jsx(e.p,{children:"2023-12-30"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Container component"}),`
`,n.jsx(e.li,{children:"Components add Layout component"}),`
`,n.jsx(e.li,{children:"Components add Link component"}),`
`,n.jsx(e.li,{children:"Components add Text component"}),`
`,n.jsx(e.li,{children:"Components add Divider component"}),`
`,n.jsx(e.li,{children:"Components add Switch component"}),`
`,n.jsx(e.li,{children:"Components add Alert component"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.1"}),`
`,n.jsx(e.p,{children:"2023-12-23"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Button component"}),`
`,n.jsx(e.li,{children:"Components add Icon component"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.0"}),`
`,n.jsx(e.p,{children:"2023-12-16"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Initialize component library"}),`
`]})]})}function C0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Du,{...t})}):Du(t)}function Fu(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"社区精选组件"}),`
`,n.jsx(e.h2,{children:"推荐组件"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"推荐组件"}),n.jsx(e.th,{children:"pelement-react使用场景"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"浮动元素"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/floating-ui/floating-ui/",children:"Floating UI"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Tooltip"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"svg图标"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/pd4d10/vite-plugin-svgr/",children:"vite-plugin-svgr"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Icon"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Markdown 渲染"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/mdx-js/mdx/",children:"@mdx-js/rollup"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Markdown"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"代码高亮"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/highlightjs/highlight.js/",children:"highlight.js"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"CodeBlock"})})]})]})]})]})}function k0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Fu,{...t})}):Fu(t)}function _0(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"基础"}),n.jsx(te,{to:"installation",children:"安装"}),n.jsx("p",{className:"sidebar-group__title",children:"进阶"}),n.jsx(te,{to:"changelog",children:"更新日志"}),n.jsx("p",{className:"sidebar-group__title",children:"其他"}),n.jsx(te,{to:"recommendation",children:"社区精选组件"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsx("div",{className:"markdown-body",children:n.jsxs(rs,{children:[n.jsx(Z,{path:"installation",element:n.jsx(w0,{})}),n.jsx(Z,{path:"changelog",element:n.jsx(C0,{})}),n.jsx(Z,{path:"recommendation",element:n.jsx(k0,{})})]})})})})]})}const N0=`import { Alert } from 'pelement-react'\r
import './AlertBasic.scss'\r
\r
function AlertBasic() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" />\r
      <Alert title="info alert" type="info" />\r
      <Alert title="warning alert" type="warning" />\r
      <Alert title="error alert" type="error" />\r
    </>\r
  )\r
}\r
\r
export default AlertBasic`,S0=`import { Alert } from 'pelement-react'\r
\r
function AlertCenter() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" center showIcon />\r
      <Alert title="info alert" type="info" center showIcon />\r
      <Alert title="warning alert" type="warning" center showIcon />\r
      <Alert title="error alert" type="error" center showIcon />\r
    </>\r
  )\r
}\r
\r
export default AlertCenter`,E0=`import { Alert } from 'pelement-react'\r
\r
function AlertClose() {\r
  function hello() {\r
    alert('Hello World!')\r
  }\r
\r
  return (\r
    <>\r
      <Alert title="unclosable alert" type="success" closable={false} />\r
      <Alert title="customized close-text" type="info" closeText="Gotcha" />\r
      <Alert title="alert with callback" type="warning" close={hello} />\r
    </>\r
  )\r
}\r
\r
export default AlertClose`,b0=`import { Alert } from 'pelement-react'\r
\r
function AlertDescription() {\r
  return (\r
    <>\r
      <Alert\r
        title="with description"\r
        type="success"\r
        description="This is a description."\r
      />\r
    </>\r
  )\r
}\r
\r
export default AlertDescription`,T0=`import { Alert } from 'pelement-react'\r
\r
function AlertEffect() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" effect="dark" />\r
      <Alert title="info alert" type="info" effect="dark" />\r
      <Alert title="warning alert" type="warning" effect="dark" />\r
      <Alert title="error alert" type="error" effect="dark" />\r
    </>\r
  )\r
}\r
\r
export default AlertEffect`,R0=`import { Alert } from 'pelement-react'\r
\r
function AlertIconDescription() {\r
  return (\r
    <>\r
      <Alert\r
        title="success alert"\r
        type="success"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="info alert"\r
        type="info"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="warning alert"\r
        type="warning"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="error alert"\r
        type="error"\r
        description="more text description"\r
        showIcon\r
      />\r
    </>\r
  )\r
}\r
\r
export default AlertIconDescription`,L0=`import { Alert } from 'pelement-react'\r
\r
function AlertIcon() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" showIcon />\r
      <Alert title="info alert" type="info" showIcon />\r
      <Alert title="warning alert" type="warning" showIcon />\r
      <Alert title="error alert" type="error" showIcon />\r
    </>\r
  )\r
}\r
\r
export default AlertIcon`,P0=`import { Avatar, Col, Row } from 'pelement-react'\r
import './AvatarBasic.scss'\r
\r
function AvatarBasic() {\r
  const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'\r
  const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'\r
  const sizeList = ['small', '', 'large']\r
\r
  const sizeAvatars = sizeList.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <Avatar size={item} src={circleUrl} />\r
      </div>\r
    )\r
  })\r
\r
  const squareAvatars = sizeList.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <Avatar shape="square" size={item} src={squareUrl} />\r
      </div>\r
    )\r
  })\r
\r
  return (\r
    <>\r
      <Row className="common-avatar">\r
        <Col span={12}>\r
          <div className="sub-title">circle</div>\r
          <div className="demo-basic--circle">\r
            <div className="block">\r
              <Avatar size={50} src={circleUrl} />\r
            </div>\r
            {sizeAvatars}\r
          </div>\r
        </Col>\r
        <Col span={12}>\r
          <div className="sub-title">square</div>\r
          <div className="demo-basic--circle">\r
            <div className="block">\r
              <Avatar shape="square" size={50} src={squareUrl} />\r
            </div>\r
            {squareAvatars}\r
          </div>\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default AvatarBasic`,B0=`import { Avatar } from 'pelement-react'\r
\r
function AvatarError() {\r
\r
  function errorHandler() {\r
    console.log('error')\r
  }\r
\r
  return (\r
    <>\r
      <div className="demo-type">\r
        <Avatar size={60} src="https://empty" onError={errorHandler}>\r
          <img\r
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"\r
          />\r
        </Avatar>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarError`,A0=`import { Avatar } from "pelement-react"\r
\r
function AvatarFit() {\r
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']\r
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\r
\r
  const fitAvatars = fits.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <span className="title">{item}</span>\r
        <Avatar shape="square" size={100} fit={item} src={url} />\r
      </div>\r
    )\r
  })\r
\r
  return (\r
    <>\r
      <div className="avatar-fit">\r
        {fitAvatars}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarFit`,M0=`import { Avatar, UserFilled } from 'pelement-react'\r
\r
function AvatarType() {\r
  return (\r
    <>\r
      <div className="common-avatar">\r
        <div>\r
          <Avatar icon={<UserFilled />} />\r
        </div>\r
        <div>\r
          <Avatar\r
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"\r
          />\r
        </div>\r
        <div>\r
          <Avatar> user </Avatar>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarType`,I0=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
\r
function ButtonBasic() {\r
  return (\r
    <>\r
      <div className="mb-4">\r
        <Button>Default</Button>\r
        <Button type="primary">Primary</Button>\r
        <Button type="success">Success</Button>\r
        <Button type="info">Info</Button>\r
        <Button type="warning">Warning</Button>\r
        <Button type="danger">Danger</Button>\r
      </div>\r
      <div className="mb-4">\r
        <Button plain>Plain</Button>\r
        <Button type="primary" plain>Primary</Button>\r
        <Button type="success" plain>Success</Button>\r
        <Button type="info" plain>Info</Button>\r
        <Button type="warning" plain>Warning</Button>\r
        <Button type="danger" plain>Danger</Button>\r
      </div>\r
      <div className="mb-4">\r
        <Button round>Round</Button>\r
        <Button type="primary" round>Primary</Button>\r
        <Button type="success" round>Success</Button>\r
        <Button type="info" round>Info</Button>\r
        <Button type="warning" round>Warning</Button>\r
        <Button type="danger" round>Danger</Button>\r
      </div>\r
      <div>\r
        <Button icon={<Search />} circle></Button>\r
        <Button type="primary" icon={<Edit />} circle></Button>\r
        <Button type="success" icon={<Check />} circle></Button>\r
        <Button type="info" icon={<Message />} circle></Button>\r
        <Button type="warning" icon={<Star />} circle></Button>\r
        <Button type="danger" icon={<Delete />} circle></Button>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,D0=`import { Button } from 'pelement-react'\r
\r
function ButtonDisabled() {\r
  return (\r
    <>\r
      <div className="mb-4">\r
        <Button disabled>Default</Button>\r
        <Button type="primary" disabled>Primary</Button>\r
        <Button type="success" disabled>Success</Button>\r
        <Button type="info" disabled>Info</Button>\r
        <Button type="warning" disabled>Warning</Button>\r
        <Button type="danger" disabled>Danger</Button>\r
      </div>\r
      <div>\r
        <Button plain disabled>Plain</Button>\r
        <Button type="primary" plain disabled>Primary</Button>\r
        <Button type="success" plain disabled>Success</Button>\r
        <Button type="info" plain disabled>Info</Button>\r
        <Button type="warning" plain disabled>Warning</Button>\r
        <Button type="danger" plain disabled>Danger</Button>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonDisabled`,F0=`import { Button } from 'pelement-react'\r
\r
function ButtonLink() {\r
  return (\r
    <>\r
      <p>Basic link button</p>\r
      <Button link>Default</Button>\r
      <Button type="primary" link>Primary</Button>\r
      <Button type="success" link>Success</Button>\r
      <Button type="info" link>Info</Button>\r
      <Button type="warning" link>Warning</Button>\r
      <Button type="danger" link>Danger</Button>\r
      <p>Disabled link button</p>\r
      <Button link disabled>Default</Button>\r
      <Button type="primary" link disabled>Primary</Button>\r
      <Button type="success" link disabled>Success</Button>\r
      <Button type="info" link disabled>Info</Button>\r
      <Button type="warning" link disabled>Warning</Button>\r
      <Button type="danger" link disabled>Danger</Button>\r
    </>\r
  )\r
}\r
\r
export default ButtonLink`,O0=`import { Collapse, CollapseItem } from 'pelement-react'\r
\r
function CollapseBasic() {\r
  return (\r
    <>\r
      <Collapse>\r
        <CollapseItem title="Consistency" name="1">\r
          <div>\r
            Consistent with real life: in line with the process and logic of real\r
            life, and comply with languages and habits that the users are used to;\r
          </div>\r
          <div>\r
            Consistent within interface: all elements should be consistent, such\r
            as: design style, icons and texts, position of elements, etc.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Feedback" name="2">\r
          <div>\r
            Operation feedback: enable the users to clearly perceive their\r
            operations by style updates and interactive effects;\r
          </div>\r
          <div>\r
            Visual feedback: reflect current state by updating or rearranging\r
            elements of the page.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Efficiency" name="3">\r
          <div>\r
            Simplify the process: keep operating process simple and intuitive;\r
          </div>\r
          <div>\r
            Definite and clear: enunciate your intentions clearly so that the\r
            users can quickly understand and make decisions;\r
          </div>\r
          <div>\r
            Easy to identify: the interface should be straightforward, which helps\r
            the users to identify and frees them from memorizing and recalling.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Controllability" name="4">\r
          <div>\r
            Decision making: giving advices about operations is acceptable, but do\r
            not make decisions for the users;\r
          </div>\r
          <div>\r
            Controlled consequences: users should be granted the freedom to\r
            operate, including canceling, aborting or terminating current\r
            operation.\r
          </div>\r
        </CollapseItem>\r
      </Collapse>\r
    </>\r
  )\r
}\r
\r
export default CollapseBasic`,z0=`import { Container, Header, Main } from 'pelement-react'\r
import './ContainerBasic.scss'\r
\r
function ContainerBasic() {\r
\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Main>Main</Main>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic`,$0=`import { Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic1() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Main>Main</Main>\r
          <Footer>Footer</Footer>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic1`,U0=`import { Aside, Container, Main } from 'pelement-react'\r
\r
function ContainerBasic2() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Main>Main</Main>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic2`,H0=`import { Aside, Container, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic3() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Container>\r
            <Aside width="200px">Aside</Aside>\r
            <Main>Main</Main>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic3`,W0=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic4() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Container>\r
            <Aside width="200px">Aside</Aside>\r
            <Container>\r
              <Main>Main</Main>\r
              <Footer>Footer</Footer>\r
            </Container>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic4`,V0=`import { Aside, Container, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic5() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Container>\r
            <Header>Header</Header>\r
            <Main>Main</Main>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic5`,X0=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic6() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Container>\r
            <Header>Header</Header>\r
            <Main>Main</Main>\r
            <Footer>Footer</Footer>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic6`,Q0=`import { Divider } from 'pelement-react'\r
\r
function DividerBasic() {\r
  return (\r
    <>\r
      <div>\r
        <span>\r
          I sit at my window this morning where the world like a passer-by stops\r
          for a moment, nods to me and goes.\r
        </span>\r
        <Divider />\r
        <span>\r
          There little thoughts are the rustle of leaves; they have their whisper\r
          of joy in my mind.\r
        </span>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerBasic`,G0=`import { Divider } from 'pelement-react'\r
\r
function DividerBorder() {\r
  return (\r
    <>\r
      <div>\r
        <span>What language is thine, O sea?</span>\r
        <Divider borderStyle="dashed" />\r
        <span>The language of eternal question.</span>\r
      </div>\r
      <Divider borderStyle="dotted" />\r
      <span>What language is thy answer, O sky?</span>\r
      <Divider borderStyle="double" />\r
      <span>The language of eternal silence.</span>\r
    </>\r
  )\r
}\r
\r
export default DividerBorder`,K0=`import { Divider, StarFilled } from 'pelement-react'\r
\r
function DividerContent() {\r
  return (\r
    <>\r
      <div>\r
        <span>What you are you do not see, what you see is your shadow. </span>\r
        <Divider contentPosition="left">Rabindranath Tagore</Divider>\r
        <span>\r
          My wishes are fools, they shout across thy song, my Master. Let me but\r
          listen.\r
        </span>\r
        <Divider>\r
          <StarFilled />\r
        </Divider>\r
        <span>I cannot choose the best. The best chooses me.</span>\r
        <Divider contentPosition="right">Rabindranath Tagore</Divider>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerContent`,Y0=`import { Divider } from 'pelement-react'\r
\r
function DividerDirection() {\r
  return (\r
    <>\r
      <div>\r
        <span>Rain</span>\r
        <Divider direction="vertical" />\r
        <span>Home</span>\r
        <Divider direction="vertical" border-style="dashed" />\r
        <span>Grass</span>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerDirection`,Z0=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck } from 'pelement-react'\r
\r
function ButtonBasic() {\r
  return (\r
    <>\r
      <Edit style={{ fontSize: '20px' }} />\r
      <Search style={{ fontSize: '20px' }} />\r
      <Check style={{ fontSize: '20px' }} />\r
      <Message style={{ fontSize: '20px' }} />\r
      <Star style={{ fontSize: '20px' }} />\r
      <Delete style={{ fontSize: '20px' }} />\r
      <View style={{ fontSize: '20px' }} />\r
      <StarFilled style={{ fontSize: '20px' }} />\r
      <Loading style={{ fontSize: '20px' }} />\r
      <Hide style={{ fontSize: '20px' }} />\r
      <InfoFilled style={{ fontSize: '20px' }} />\r
      <WarningFilled style={{ fontSize: '20px' }} />\r
      <CircleCloseFilled style={{ fontSize: '20px' }} />\r
      <CircleCheckFilled style={{ fontSize: '20px' }} />\r
      <ArrowRight style={{ fontSize: '20px' }} />\r
      <CircleCheck style={{ fontSize: '20px' }} />\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,J0=`import { Col, Row } from 'pelement-react'\r
import './LayoutBasic.scss'\r
\r
function LayoutBasic() {\r
  return (\r
    <>\r
      <Row>\r
        <Col span={24}><div className="grid-content ep-bg-purple-dark" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={12}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={12}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={8}> <div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutBasic`,q0=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutBootstrap() {\r
  return (\r
    <>\r
      <Row gutter={10}>\r
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>\r
          <div className="grid-content ep-bg-purple-light" />\r
        </Col>\r
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>\r
          <div className="grid-content ep-bg-purple-light" />\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutBootstrap`,ev=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutGutter() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutGutter`,tv=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutJustify() {\r
  return (\r
    <>\r
      <Row className="row-bg">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="center">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="end">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-between">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-around">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-evenly">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutJustify`,nv=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutMix() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutMix`,rv=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutOffset() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={12} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutOffset`,iv=`import { Link } from 'pelement-react'\r
import './LinkBasic.scss'\r
\r
function LinkBasic() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link href="https://pelement-react.github.io/pelement-react/" target="_blank">default</Link>\r
        <Link type="primary">primary</Link>\r
        <Link type="success">success</Link>\r
        <Link type="warning">warning</Link>\r
        <Link type="danger">danger</Link>\r
        <Link type="info">info</Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkBasic`,lv=`import { Link } from 'pelement-react'\r
\r
function LinkDisabled() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link disabled>default</Link>\r
        <Link type="primary" disabled>primary</Link>\r
        <Link type="success" disabled>success</Link>\r
        <Link type="warning" disabled>warning</Link>\r
        <Link type="danger" disabled>danger</Link>\r
        <Link type="info" disabled>info</Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkDisabled`,sv=`import { Edit, Link, View } from 'pelement-react'\r
\r
function LinkIcon() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link icon={<Edit />}>Edit</Link>\r
        <Link>\r
          Check<View className="el-icon--right" />\r
        </Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkIcon`,ov=`import { Link } from 'pelement-react'\r
\r
function LinkUnderline() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link underline={false}>Without Underline</Link>\r
        <Link>With Underline</Link>\r
      </div >\r
    </>\r
  )\r
}\r
\r
export default LinkUnderline`,cv=`import { Button, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmBasic() {\r
  return (\r
    <>\r
      <Popconfirm title="Are you sure to delete this?">\r
        <Button>Delete</Button>\r
      </Popconfirm>\r
    </>\r
  )\r
}\r
\r
export default PopconfirmBasic`,av=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmEvent() {\r
  function confirmEvent() {\r
    console.log('confirm!')\r
  }\r
\r
  function cancelEvent() {\r
    console.log('cancel!')\r
  }\r
\r
  return (\r
    <>\r
      <Popconfirm\r
        confirmButtonText="Yes"\r
        cancelButtonText="No"\r
        icon={<InfoFilled />}\r
        iconColor="#626AEF"\r
        title="Are you sure to delete this?"\r
        onConfirm={confirmEvent}\r
        onCancel={cancelEvent}\r
      >\r
        <Button>Delete</Button>\r
      </Popconfirm >\r
    </>\r
  )\r
}\r
\r
export default PopconfirmEvent`,uv=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmIcon() {\r
  return (\r
    <>\r
      <Popconfirm\r
        width={220}\r
        confirmButtonText="OK"\r
        cancelButtonText="No, Thanks"\r
        icon={<InfoFilled />}\r
        iconColor="#626AEF"\r
        title="Are you sure to delete this?"\r
      >\r
        <Button>Delete</Button>\r
      </Popconfirm >\r
    </>\r
  )\r
}\r
\r
export default PopconfirmIcon`,dv=`import { Button, Popover } from 'pelement-react'\r
\r
function PopoverBasic() {\r
  return (\r
    <>\r
      <Popover\r
        placement="top-start"\r
        title="Title"\r
        width={200}\r
        trigger="hover"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Hover to activate</Button>\r
      </Popover>\r
      <Popover\r
        placement="bottom"\r
        title="Title"\r
        width={200}\r
        trigger="click"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Click to activate</Button>\r
      </Popover>\r
      <Popover\r
        placement="right"\r
        title="Title"\r
        width={200}\r
        trigger="focus"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Focus to activate</Button>\r
      </Popover>\r
      <Popover\r
        title="Title"\r
        width={200}\r
        trigger="contextmenu"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">contextmenu to activate</Button>\r
      </Popover>\r
    </>\r
  )\r
}\r
\r
export default PopoverBasic`,fv=`import { Progress } from 'pelement-react'\r
import './ProgressBasic.scss'\r
\r
function ProgressBasic() {\r
  function format(percentage: number) {\r
    return (percentage === 100 ? 'Full' : \`\${percentage}%\`)\r
  }\r
\r
  return (\r
    <>\r
      <div className="common-progress">\r
        <Progress percentage={50} />\r
        <Progress percentage={100} format={format} />\r
        <Progress percentage={100} status="success" />\r
        <Progress percentage={100} status="warning" />\r
        <Progress percentage={50} status="exception" />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ProgressBasic`,hv=`import { Progress } from 'pelement-react'\r
\r
function ProgressTextInside() {\r
  return (\r
    <>\r
      <div className="common-progress">\r
        <Progress textInside={true} strokeWidth={26} percentage={70} />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={24}\r
          percentage={100}\r
          status="success"\r
        />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={22}\r
          percentage={80}\r
          status="warning"\r
        />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={20}\r
          percentage={50}\r
          status="exception"\r
        />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ProgressTextInside`,pv=`import { Button, Col, Result, Row } from 'pelement-react'\r
\r
function ResultBasic() {\r
  return (\r
    <>\r
      <Row>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="success"\r
            title="Success Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="warning"\r
            title="Warning Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="error"\r
            title="Error Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="info"\r
            title="Info Tip"\r
            subTitle={<p>Using slot as subtitle</p>}\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default ResultBasic`,mv=`import { Button, Result } from 'pelement-react'\r
\r
function ResultIcon() {\r
  return (\r
    <>\r
      <Result\r
        icon={<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />}\r
        title="404"\r
        subTitle="Sorry, request error"\r
        extra={<Button type="primary">Back</Button>}\r
      ></Result>\r
    </>\r
  )\r
}\r
\r
export default ResultIcon`,xv=`import { Hide, Switch, View } from 'pelement-react'\r
\r
function SwitchActionIcon() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        activeActionIcon={<View />}\r
        inactiveActionIcon={<Hide />}\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        activeActionIcon={<><span className="custom-active-action">T</span></>}\r
        inactiveActionIcon={<><span className="custom-inactive-action">F</span></>}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchActionIcon`,gv=`import { Switch } from 'pelement-react'\r
\r
function SwitchBasic() {\r
  return (\r
    <>\r
      <Switch defaultChecked />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchBasic`,vv=`import { useState } from 'react'\r
import { Switch } from 'pelement-react'\r
\r
function SwitchBeforeChange() {\r
  const [loading1, setLoading1] = useState(false)\r
  const [loading2, setLoading2] = useState(false)\r
\r
  function beforeChange1(): Promise<boolean> {\r
    setLoading1(true)\r
    return new Promise((resolve) => {\r
      setTimeout(() => {\r
        setLoading1(false)\r
        console.log('Switch success')\r
        return resolve(true)\r
      }, 1000)\r
    })\r
  }\r
\r
  function beforeChange2(): Promise<boolean> {\r
    setLoading2(true)\r
    return new Promise((_, reject) => {\r
      setTimeout(() => {\r
        setLoading2(false)\r
        console.log('Switch failed')\r
        return reject(new Error('Error'))\r
      }, 1000)\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Switch\r
        loading={loading1}\r
        beforeChange={beforeChange1}\r
      />\r
      <Switch\r
        className="ml-2"\r
        loading={loading2}\r
        beforeChange={beforeChange2}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchBeforeChange`,jv=`import { Switch } from 'pelement-react'\r
\r
function SwitchDisabled() {\r
  return (\r
    <>\r
      <Switch defaultChecked disabled />\r
      <Switch defaultChecked className="ml-2" />\r
    </>\r
  )\r
}\r
\r
export default SwitchDisabled`,yv=`import { Check, Close, Switch } from 'pelement-react'\r
\r
function SwitchIcon() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        activeIcon={<Check />}\r
        inactiveIcon={<Close />}\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        className="mt-2"\r
        style={{ marginLeft: '24px' }}\r
        inlinePrompt\r
        activeIcon={<Check className="is-icon" />}\r
        inactiveIcon={<Close className="is-icon" />}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchIcon`,wv=`import { Switch } from 'pelement-react'\r
\r
function SwitchLoading() {\r
  return (\r
    <>\r
      <Switch defaultChecked loading />\r
      <Switch loading className="ml-2" />\r
    </>\r
  )\r
}\r
\r
export default SwitchLoading`,Cv=`import { Switch } from 'pelement-react'\r
\r
function SwitchSize() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        size="large"\r
        activeText="Open"\r
        inactiveText="Close"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        activeText="Open"\r
        inactiveText="Close" />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        size="small"\r
        activeText="Open"\r
        inactiveText="Close"\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchSize`,kv=`import { Switch } from 'pelement-react'\r
\r
function SwitchText() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        className="mb-2"\r
        activeText="Pay by month"\r
        inactiveText="Pay by year"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        className="mb-2"\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="Pay by month"\r
        inactiveText="Pay by year"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        inlinePrompt\r
        activeText="是"\r
        inactiveText="否"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        inlinePrompt\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="Y"\r
        inactiveText="N"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        width={60}\r
        inlinePrompt\r
        activeText="超出省略"\r
        inactiveText="超出省略"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        inlinePrompt\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="完整展示多个内容"\r
        inactiveText="多个内容"\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchText`,_v=`import { Text } from 'pelement-react'\r
import './TextBasic.scss'\r
\r
function TextBasic() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="mx-1">Default</Text>\r
        <Text className="mx-1" type="primary">Primary</Text>\r
        <Text className="mx-1" type="success">Success</Text>\r
        <Text className="mx-1" type="info">Info</Text>\r
        <Text className="mx-1" type="warning">Warning</Text>\r
        <Text className="mx-1" type="danger">Danger</Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextBasic`,Nv=`import { Text } from 'pelement-react'\r
\r
function TextSize() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="mx-1" size="large">Large</Text>\r
        <Text className="mx-1">Default</Text>\r
        <Text className="mx-1" size="small">Small</Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextSize`,Sv=`import { Row, Text } from 'pelement-react'\r
\r
function TextTruncated() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="w-150px mb-2" truncated>\r
          Self element set width 100px\r
        </Text>\r
        <Row className="w-150px mb-2">\r
          <Text truncated>Squeezed by parent element</Text>\r
        </Row>\r
        <Text lineClamp={2}>\r
          The -webkit-line-clamp CSS property<br />\r
          allows limiting of the contents of<br />\r
          a block to the specified number of lines.\r
        </Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextTruncated`,Ev=`import { Button, Tooltip } from 'pelement-react'\r
import './TooltipBasic.scss'\r
\r
function TooltipBasic() {\r
  return (\r
    <>\r
      <div className="common-tooltip">\r
        <div className="row center">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Left prompts info"\r
            placement="top-start"\r
          >\r
            <Button>top-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Center prompts info"\r
            placement="top"\r
          >\r
            <Button>top</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Right prompts info"\r
            placement="top-end"\r
          >\r
            <Button>top-end</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Top prompts info"\r
            placement="left-start"\r
          >\r
            <Button>left-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Top prompts info"\r
            placement="right-start"\r
          >\r
            <Button>right-start</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Center prompts info"\r
            placement="left"\r
          >\r
            <Button className="mt-3 mb-3">left</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Center prompts info"\r
            placement="right"\r
          >\r
            <Button>right</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Bottom prompts info"\r
            placement="left-end"\r
          >\r
            <Button>left-end</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Bottom prompts info"\r
            placement="right-end"\r
          >\r
            <Button>right-end</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row center">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Left prompts info"\r
            placement="bottom-start"\r
          >\r
            <Button>bottom-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Center prompts info"\r
            placement="bottom"\r
          >\r
            <Button>bottom</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Right prompts info"\r
            placement="bottom-end"\r
          >\r
            <Button>bottom-end</Button>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TooltipBasic`,bv=`import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipContent() {\r
  return (\r
    <>\r
      <Tooltip placement="top" content={<>multiple lines<br />second line</>}>\r
        <Button>Top center</Button>\r
      </Tooltip>\r
    </>\r
  )\r
}\r
\r
export default TooltipContent`,Tv=`import { useState } from 'react'\r
import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipDisabled() {\r
  const [disabled, setDisabled] = useState(true)\r
\r
  function changeDisabled() {\r
    setDisabled(!disabled)\r
  }\r
\r
  return (\r
    <>\r
      <Tooltip\r
        disabled={disabled}\r
        content="click to close tooltip function"\r
        placement="bottom"\r
        effect="light"\r
      >\r
        <Button onClick={changeDisabled}>\r
          click to {disabled ? 'active' : 'close'} tooltip function\r
        </Button>\r
      </Tooltip >\r
    </>\r
  )\r
}\r
\r
export default TooltipDisabled`,Rv=`import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipEffect() {\r
  return (\r
    <>\r
      <Tooltip content="Top center" placement="top">\r
        <Button>Dark</Button>\r
      </Tooltip>\r
      <Tooltip content="Bottom center" placement="bottom" effect="light">\r
        <Button>Light</Button>\r
      </Tooltip>\r
\r
      <Tooltip content="Bottom center" effect="customized">\r
        <Button>Customized theme</Button>\r
      </Tooltip>\r
    </>\r
  )\r
}\r
\r
export default TooltipEffect`;function tp(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const r=t[e],i=typeof r;(i==="object"||i==="function")&&!Object.isFrozen(r)&&tp(r)}),t}class Ou{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function np(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Gt(t,...e){const r=Object.create(null);for(const i in t)r[i]=t[i];return e.forEach(function(i){for(const l in i)r[l]=i[l]}),r}const Lv="</span>",zu=t=>!!t.scope,Pv=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const r=t.split(".");return[`${e}${r.shift()}`,...r.map((i,l)=>`${i}${"_".repeat(l+1)}`)].join(" ")}return`${e}${t}`};class Bv{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=np(e)}openNode(e){if(!zu(e))return;const r=Pv(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){zu(e)&&(this.buffer+=Lv)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const $u=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Wc{constructor(){this.rootNode=$u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const r=$u({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(i=>this._walk(e,i)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{Wc._collapse(r)}))}}class Av extends Wc{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){const i=e.root;r&&(i.scope=`language:${r}`),this.add(i)}toHTML(){return new Bv(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function ui(t){return t?typeof t=="string"?t:t.source:null}function rp(t){return An("(?=",t,")")}function Mv(t){return An("(?:",t,")*")}function Iv(t){return An("(?:",t,")?")}function An(...t){return t.map(r=>ui(r)).join("")}function Dv(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Vc(...t){return"("+(Dv(t).capture?"":"?:")+t.map(i=>ui(i)).join("|")+")"}function ip(t){return new RegExp(t.toString()+"|").exec("").length-1}function Fv(t,e){const r=t&&t.exec(e);return r&&r.index===0}const Ov=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Xc(t,{joinWith:e}){let r=0;return t.map(i=>{r+=1;const l=r;let s=ui(i),o="";for(;s.length>0;){const c=Ov.exec(s);if(!c){o+=s;break}o+=s.substring(0,c.index),s=s.substring(c.index+c[0].length),c[0][0]==="\\"&&c[1]?o+="\\"+String(Number(c[1])+l):(o+=c[0],c[0]==="("&&r++)}return o}).map(i=>`(${i})`).join(e)}const zv=/\b\B/,lp="[a-zA-Z]\\w*",Qc="[a-zA-Z_]\\w*",sp="\\b\\d+(\\.\\d+)?",op="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",cp="\\b(0b[01]+)",$v="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Uv=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=An(e,/.*\b/,t.binary,/\b.*/)),Gt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,i)=>{r.index!==0&&i.ignoreMatch()}},t)},di={begin:"\\\\[\\s\\S]",relevance:0},Hv={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[di]},Wv={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[di]},Vv={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},is=function(t,e,r={}){const i=Gt({scope:"comment",begin:t,end:e,contains:[]},r);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=Vc("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:An(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},Xv=is("//","$"),Qv=is("/\\*","\\*/"),Gv=is("#","$"),Kv={scope:"number",begin:sp,relevance:0},Yv={scope:"number",begin:op,relevance:0},Zv={scope:"number",begin:cp,relevance:0},Jv={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[di,{begin:/\[/,end:/\]/,relevance:0,contains:[di]}]},qv={scope:"title",begin:lp,relevance:0},ej={scope:"title",begin:Qc,relevance:0},tj={begin:"\\.\\s*"+Qc,relevance:0},nj=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})};var Wi=Object.freeze({__proto__:null,APOS_STRING_MODE:Hv,BACKSLASH_ESCAPE:di,BINARY_NUMBER_MODE:Zv,BINARY_NUMBER_RE:cp,COMMENT:is,C_BLOCK_COMMENT_MODE:Qv,C_LINE_COMMENT_MODE:Xv,C_NUMBER_MODE:Yv,C_NUMBER_RE:op,END_SAME_AS_BEGIN:nj,HASH_COMMENT_MODE:Gv,IDENT_RE:lp,MATCH_NOTHING_RE:zv,METHOD_GUARD:tj,NUMBER_MODE:Kv,NUMBER_RE:sp,PHRASAL_WORDS_MODE:Vv,QUOTE_STRING_MODE:Wv,REGEXP_MODE:Jv,RE_STARTERS_RE:$v,SHEBANG:Uv,TITLE_MODE:qv,UNDERSCORE_IDENT_RE:Qc,UNDERSCORE_TITLE_MODE:ej});function rj(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function ij(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function lj(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=rj,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function sj(t,e){Array.isArray(t.illegal)&&(t.illegal=Vc(...t.illegal))}function oj(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function cj(t,e){t.relevance===void 0&&(t.relevance=1)}const aj=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},t);Object.keys(t).forEach(i=>{delete t[i]}),t.keywords=r.keywords,t.begin=An(r.beforeMatch,rp(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},uj=["of","and","for","in","not","or","if","then","parent","list","value"],dj="keyword";function ap(t,e,r=dj){const i=Object.create(null);return typeof t=="string"?l(r,t.split(" ")):Array.isArray(t)?l(r,t):Object.keys(t).forEach(function(s){Object.assign(i,ap(t[s],e,s))}),i;function l(s,o){e&&(o=o.map(c=>c.toLowerCase())),o.forEach(function(c){const a=c.split("|");i[a[0]]=[s,fj(a[0],a[1])]})}}function fj(t,e){return e?Number(e):hj(t)?0:1}function hj(t){return uj.includes(t.toLowerCase())}const Uu={},kn=t=>{console.error(t)},Hu=(t,...e)=>{console.log(`WARN: ${t}`,...e)},Dn=(t,e)=>{Uu[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Uu[`${t}/${e}`]=!0)},Pl=new Error;function up(t,e,{key:r}){let i=0;const l=t[r],s={},o={};for(let c=1;c<=e.length;c++)o[c+i]=l[c],s[c+i]=!0,i+=ip(e[c-1]);t[r]=o,t[r]._emit=s,t[r]._multi=!0}function pj(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw kn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Pl;if(typeof t.beginScope!="object"||t.beginScope===null)throw kn("beginScope must be object"),Pl;up(t,t.begin,{key:"beginScope"}),t.begin=Xc(t.begin,{joinWith:""})}}function mj(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw kn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Pl;if(typeof t.endScope!="object"||t.endScope===null)throw kn("endScope must be object"),Pl;up(t,t.end,{key:"endScope"}),t.end=Xc(t.end,{joinWith:""})}}function xj(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function gj(t){xj(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),pj(t),mj(t)}function vj(t){function e(o,c){return new RegExp(ui(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(c?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(c,a){a.position=this.position++,this.matchIndexes[this.matchAt]=a,this.regexes.push([a,c]),this.matchAt+=ip(c)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const c=this.regexes.map(a=>a[1]);this.matcherRe=e(Xc(c,{joinWith:"|"}),!0),this.lastIndex=0}exec(c){this.matcherRe.lastIndex=this.lastIndex;const a=this.matcherRe.exec(c);if(!a)return null;const u=a.findIndex((p,x)=>x>0&&p!==void 0),d=this.matchIndexes[u];return a.splice(0,u),Object.assign(a,d)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(c){if(this.multiRegexes[c])return this.multiRegexes[c];const a=new r;return this.rules.slice(c).forEach(([u,d])=>a.addRule(u,d)),a.compile(),this.multiRegexes[c]=a,a}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(c,a){this.rules.push([c,a]),a.type==="begin"&&this.count++}exec(c){const a=this.getMatcher(this.regexIndex);a.lastIndex=this.lastIndex;let u=a.exec(c);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,u=d.exec(c)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function l(o){const c=new i;return o.contains.forEach(a=>c.addRule(a.begin,{rule:a,type:"begin"})),o.terminatorEnd&&c.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&c.addRule(o.illegal,{type:"illegal"}),c}function s(o,c){const a=o;if(o.isCompiled)return a;[ij,oj,gj,aj].forEach(d=>d(o,c)),t.compilerExtensions.forEach(d=>d(o,c)),o.__beforeBegin=null,[lj,sj,cj].forEach(d=>d(o,c)),o.isCompiled=!0;let u=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),u=o.keywords.$pattern,delete o.keywords.$pattern),u=u||/\w+/,o.keywords&&(o.keywords=ap(o.keywords,t.case_insensitive)),a.keywordPatternRe=e(u,!0),c&&(o.begin||(o.begin=/\B|\b/),a.beginRe=e(a.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(a.endRe=e(a.end)),a.terminatorEnd=ui(a.end)||"",o.endsWithParent&&c.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+c.terminatorEnd)),o.illegal&&(a.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(d){return jj(d==="self"?o:d)})),o.contains.forEach(function(d){s(d,a)}),o.starts&&s(o.starts,c),a.matcher=l(a),a}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Gt(t.classNameAliases||{}),s(t)}function dp(t){return t?t.endsWithParent||dp(t.starts):!1}function jj(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Gt(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:dp(t)?Gt(t,{starts:t.starts?Gt(t.starts):null}):Object.isFrozen(t)?Gt(t):t}var yj="11.9.0";class wj extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}}const Hs=np,Wu=Gt,Vu=Symbol("nomatch"),Cj=7,fp=function(t){const e=Object.create(null),r=Object.create(null),i=[];let l=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Av};function a(N){return c.noHighlightRe.test(N)}function u(N){let C=N.className+" ";C+=N.parentNode?N.parentNode.className:"";const T=c.languageDetectRe.exec(C);if(T){const B=z(T[1]);return B||(Hu(s.replace("{}",T[1])),Hu("Falling back to no-highlight mode for this block.",N)),B?T[1]:"no-highlight"}return C.split(/\s+/).find(B=>a(B)||z(B))}function d(N,C,T){let B="",$="";typeof C=="object"?(B=N,T=C.ignoreIllegals,$=C.language):(Dn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Dn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=N,B=C),T===void 0&&(T=!0);const K={code:B,language:$};H("before:highlight",K);const Le=K.result?K.result:p(K.language,K.code,T);return Le.code=K.code,H("after:highlight",Le),Le}function p(N,C,T,B){const $=Object.create(null);function K(P,F){return P.keywords[F]}function Le(){if(!V.keywords){Ne.addText(re);return}let P=0;V.keywordPatternRe.lastIndex=0;let F=V.keywordPatternRe.exec(re),X="";for(;F;){X+=re.substring(P,F.index);const J=vt.case_insensitive?F[0].toLowerCase():F[0],Pe=K(V,J);if(Pe){const[Et,Gp]=Pe;if(Ne.addText(X),X="",$[J]=($[J]||0)+1,$[J]<=Cj&&(Ni+=Gp),Et.startsWith("_"))X+=F[0];else{const Kp=vt.classNameAliases[Et]||Et;ye(F[0],Kp)}}else X+=F[0];P=V.keywordPatternRe.lastIndex,F=V.keywordPatternRe.exec(re)}X+=re.substring(P),Ne.addText(X)}function rt(){if(re==="")return;let P=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){Ne.addText(re);return}P=p(V.subLanguage,re,!0,ja[V.subLanguage]),ja[V.subLanguage]=P._top}else P=v(re,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Ni+=P.relevance),Ne.__addSublanguage(P._emitter,P.language)}function _e(){V.subLanguage!=null?rt():Le(),re=""}function ye(P,F){P!==""&&(Ne.startScope(F),Ne.addText(P),Ne.endScope())}function pn(P,F){let X=1;const J=F.length-1;for(;X<=J;){if(!P._emit[X]){X++;continue}const Pe=vt.classNameAliases[P[X]]||P[X],Et=F[X];Pe?ye(Et,Pe):(re=Et,Le(),re=""),X++}}function xa(P,F){return P.scope&&typeof P.scope=="string"&&Ne.openNode(vt.classNameAliases[P.scope]||P.scope),P.beginScope&&(P.beginScope._wrap?(ye(re,vt.classNameAliases[P.beginScope._wrap]||P.beginScope._wrap),re=""):P.beginScope._multi&&(pn(P.beginScope,F),re="")),V=Object.create(P,{parent:{value:V}}),V}function ga(P,F,X){let J=Fv(P.endRe,X);if(J){if(P["on:end"]){const Pe=new Ou(P);P["on:end"](F,Pe),Pe.isMatchIgnored&&(J=!1)}if(J){for(;P.endsParent&&P.parent;)P=P.parent;return P}}if(P.endsWithParent)return ga(P.parent,F,X)}function Hp(P){return V.matcher.regexIndex===0?(re+=P[0],1):(ms=!0,0)}function Wp(P){const F=P[0],X=P.rule,J=new Ou(X),Pe=[X.__beforeBegin,X["on:begin"]];for(const Et of Pe)if(Et&&(Et(P,J),J.isMatchIgnored))return Hp(F);return X.skip?re+=F:(X.excludeBegin&&(re+=F),_e(),!X.returnBegin&&!X.excludeBegin&&(re=F)),xa(X,P),X.returnBegin?0:F.length}function Vp(P){const F=P[0],X=C.substring(P.index),J=ga(V,P,X);if(!J)return Vu;const Pe=V;V.endScope&&V.endScope._wrap?(_e(),ye(F,V.endScope._wrap)):V.endScope&&V.endScope._multi?(_e(),pn(V.endScope,P)):Pe.skip?re+=F:(Pe.returnEnd||Pe.excludeEnd||(re+=F),_e(),Pe.excludeEnd&&(re=F));do V.scope&&Ne.closeNode(),!V.skip&&!V.subLanguage&&(Ni+=V.relevance),V=V.parent;while(V!==J.parent);return J.starts&&xa(J.starts,P),Pe.returnEnd?0:F.length}function Xp(){const P=[];for(let F=V;F!==vt;F=F.parent)F.scope&&P.unshift(F.scope);P.forEach(F=>Ne.openNode(F))}let _i={};function va(P,F){const X=F&&F[0];if(re+=P,X==null)return _e(),0;if(_i.type==="begin"&&F.type==="end"&&_i.index===F.index&&X===""){if(re+=C.slice(F.index,F.index+1),!l){const J=new Error(`0 width match regex (${N})`);throw J.languageName=N,J.badRule=_i.rule,J}return 1}if(_i=F,F.type==="begin")return Wp(F);if(F.type==="illegal"&&!T){const J=new Error('Illegal lexeme "'+X+'" for mode "'+(V.scope||"<unnamed>")+'"');throw J.mode=V,J}else if(F.type==="end"){const J=Vp(F);if(J!==Vu)return J}if(F.type==="illegal"&&X==="")return 1;if(ps>1e5&&ps>F.index*3)throw new Error("potential infinite loop, way more iterations than matches");return re+=X,X.length}const vt=z(N);if(!vt)throw kn(s.replace("{}",N)),new Error('Unknown language: "'+N+'"');const Qp=vj(vt);let hs="",V=B||Qp;const ja={},Ne=new c.__emitter(c);Xp();let re="",Ni=0,mn=0,ps=0,ms=!1;try{if(vt.__emitTokens)vt.__emitTokens(C,Ne);else{for(V.matcher.considerAll();;){ps++,ms?ms=!1:V.matcher.considerAll(),V.matcher.lastIndex=mn;const P=V.matcher.exec(C);if(!P)break;const F=C.substring(mn,P.index),X=va(F,P);mn=P.index+X}va(C.substring(mn))}return Ne.finalize(),hs=Ne.toHTML(),{language:N,value:hs,relevance:Ni,illegal:!1,_emitter:Ne,_top:V}}catch(P){if(P.message&&P.message.includes("Illegal"))return{language:N,value:Hs(C),illegal:!0,relevance:0,_illegalBy:{message:P.message,index:mn,context:C.slice(mn-100,mn+100),mode:P.mode,resultSoFar:hs},_emitter:Ne};if(l)return{language:N,value:Hs(C),illegal:!1,relevance:0,errorRaised:P,_emitter:Ne,_top:V};throw P}}function x(N){const C={value:Hs(N),illegal:!1,relevance:0,_top:o,_emitter:new c.__emitter(c)};return C._emitter.addText(N),C}function v(N,C){C=C||c.languages||Object.keys(e);const T=x(N),B=C.filter(z).filter(Q).map(_e=>p(_e,N,!1));B.unshift(T);const $=B.sort((_e,ye)=>{if(_e.relevance!==ye.relevance)return ye.relevance-_e.relevance;if(_e.language&&ye.language){if(z(_e.language).supersetOf===ye.language)return 1;if(z(ye.language).supersetOf===_e.language)return-1}return 0}),[K,Le]=$,rt=K;return rt.secondBest=Le,rt}function j(N,C,T){const B=C&&r[C]||T;N.classList.add("hljs"),N.classList.add(`language-${B}`)}function y(N){let C=null;const T=u(N);if(a(T))return;if(H("before:highlightElement",{el:N,language:T}),N.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",N);return}if(N.children.length>0&&(c.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(N)),c.throwUnescapedHTML))throw new wj("One of your code blocks includes unescaped HTML.",N.innerHTML);C=N;const B=C.textContent,$=T?d(B,{language:T,ignoreIllegals:!0}):v(B);N.innerHTML=$.value,N.dataset.highlighted="yes",j(N,T,$.language),N.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(N.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),H("after:highlightElement",{el:N,result:$,text:B})}function _(N){c=Wu(c,N)}const h=()=>{w(),Dn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function f(){w(),Dn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let g=!1;function w(){if(document.readyState==="loading"){g=!0;return}document.querySelectorAll(c.cssSelector).forEach(y)}function k(){g&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",k,!1);function S(N,C){let T=null;try{T=C(t)}catch(B){if(kn("Language definition for '{}' could not be registered.".replace("{}",N)),l)kn(B);else throw B;T=o}T.name||(T.name=N),e[N]=T,T.rawDefinition=C.bind(null,t),T.aliases&&D(T.aliases,{languageName:N})}function E(N){delete e[N];for(const C of Object.keys(r))r[C]===N&&delete r[C]}function L(){return Object.keys(e)}function z(N){return N=(N||"").toLowerCase(),e[N]||e[r[N]]}function D(N,{languageName:C}){typeof N=="string"&&(N=[N]),N.forEach(T=>{r[T.toLowerCase()]=C})}function Q(N){const C=z(N);return C&&!C.disableAutodetect}function ee(N){N["before:highlightBlock"]&&!N["before:highlightElement"]&&(N["before:highlightElement"]=C=>{N["before:highlightBlock"](Object.assign({block:C.el},C))}),N["after:highlightBlock"]&&!N["after:highlightElement"]&&(N["after:highlightElement"]=C=>{N["after:highlightBlock"](Object.assign({block:C.el},C))})}function ce(N){ee(N),i.push(N)}function U(N){const C=i.indexOf(N);C!==-1&&i.splice(C,1)}function H(N,C){const T=N;i.forEach(function(B){B[T]&&B[T](C)})}function W(N){return Dn("10.7.0","highlightBlock will be removed entirely in v12.0"),Dn("10.7.0","Please use highlightElement now."),y(N)}Object.assign(t,{highlight:d,highlightAuto:v,highlightAll:w,highlightElement:y,highlightBlock:W,configure:_,initHighlighting:h,initHighlightingOnLoad:f,registerLanguage:S,unregisterLanguage:E,listLanguages:L,getLanguage:z,registerAliases:D,autoDetection:Q,inherit:Wu,addPlugin:ce,removePlugin:U}),t.debugMode=function(){l=!1},t.safeMode=function(){l=!0},t.versionString=yj,t.regex={concat:An,lookahead:rp,either:Vc,optional:Iv,anyNumberOfTimes:Mv};for(const N in Wi)typeof Wi[N]=="object"&&tp(Wi[N]);return Object.assign(t,Wi),t},dr=fp({});dr.newInstance=()=>fp({});var kj=dr;dr.HighlightJS=dr;dr.default=dr;const Gc=Ed(kj);function _j(t){const e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=t.inherit(s,{begin:/\(/,end:/\)/}),c=t.inherit(t.APOS_STRING_MODE,{className:"string"}),a=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,a,c,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,o,a,c]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:u}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Xu="[A-Za-z$_][0-9A-Za-z$_]*",Nj=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Sj=["true","false","null","undefined","NaN","Infinity"],hp=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],pp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],mp=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ej=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],bj=[].concat(mp,hp,pp);function Tj(t){const e=t.regex,r=(C,{after:T})=>{const B="</"+C[0].slice(1);return C.input.indexOf(B,T)!==-1},i=Xu,l={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,T)=>{const B=C[0].length+C.index,$=C.input[B];if($==="<"||$===","){T.ignoreMatch();return}$===">"&&(r(C,{after:B})||T.ignoreMatch());let K;const Le=C.input.substring(B);if(K=Le.match(/^\s*=/)){T.ignoreMatch();return}if((K=Le.match(/^\s+extends\s+/))&&K.index===0){T.ignoreMatch();return}}},c={$pattern:Xu,keyword:Nj,literal:Sj,built_in:bj,"variable.language":Ej},a="[0-9](_?[0-9])*",u=`\\.(${a})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?(${a})\\b`},{begin:`\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},v={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},j={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},_={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,x]},f={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},g=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,v,j,y,_,{match:/\$\d+/},p];x.contains=g.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(g)});const w=[].concat(f,x.contains),k=w.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(w)}]),S={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:k},E={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...hp,...pp]}},z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},D={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],illegal:/%/},Q={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ee(C){return e.concat("(?!",C.join("|"),")")}const ce={match:e.concat(/\b/,ee([...mp,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},U={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},H={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},S]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",N={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:k,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),z,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,v,j,y,_,f,{match:/\$\d+/},p,L,{className:"attr",begin:i+e.lookahead(":"),relevance:0},N,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,t.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:k}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:s},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},D,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[S,t.inherit(t.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},U,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[S]},ce,Q,E,H,{match:/\$[(.]/}]}}Gc.registerLanguage("xml",_j);Gc.registerLanguage("javascript",Tj);function I({language:t="javascript",name:e,children:r}){const i=m.useRef(null),[l,s]=m.useState(!1),[o,c]=m.useState(""),a=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":N0,"../../../packages/Alert/_example/AlertCenter.tsx":S0,"../../../packages/Alert/_example/AlertClose.tsx":E0,"../../../packages/Alert/_example/AlertDescription.tsx":b0,"../../../packages/Alert/_example/AlertEffect.tsx":T0,"../../../packages/Alert/_example/AlertIconDescription.tsx":R0,"../../../packages/Alert/_example/AlertShowIcon.tsx":L0,"../../../packages/Avatar/_example/AvatarBasic.tsx":P0,"../../../packages/Avatar/_example/AvatarError.tsx":B0,"../../../packages/Avatar/_example/AvatarFit.tsx":A0,"../../../packages/Avatar/_example/AvatarType.tsx":M0,"../../../packages/Button/_example/ButtonBasic.tsx":I0,"../../../packages/Button/_example/ButtonDisabled.tsx":D0,"../../../packages/Button/_example/ButtonLink.tsx":F0,"../../../packages/Collapse/_example/CollapseBasic.tsx":O0,"../../../packages/Container/_example/ContainerBasic.tsx":z0,"../../../packages/Container/_example/ContainerBasic1.tsx":$0,"../../../packages/Container/_example/ContainerBasic2.tsx":U0,"../../../packages/Container/_example/ContainerBasic3.tsx":H0,"../../../packages/Container/_example/ContainerBasic4.tsx":W0,"../../../packages/Container/_example/ContainerBasic5.tsx":V0,"../../../packages/Container/_example/ContainerBasic6.tsx":X0,"../../../packages/Divider/_example/DividerBasic.tsx":Q0,"../../../packages/Divider/_example/DividerBorder.tsx":G0,"../../../packages/Divider/_example/DividerContent.tsx":K0,"../../../packages/Divider/_example/DividerDirection.tsx":Y0,"../../../packages/Icon/_example/IconBasic.tsx":Z0,"../../../packages/Layout/_example/LayoutBasic.tsx":J0,"../../../packages/Layout/_example/LayoutBootstrap.tsx":q0,"../../../packages/Layout/_example/LayoutGutter.tsx":ev,"../../../packages/Layout/_example/LayoutJustify.tsx":tv,"../../../packages/Layout/_example/LayoutMix.tsx":nv,"../../../packages/Layout/_example/LayoutOffset.tsx":rv,"../../../packages/Link/_example/LinkBasic.tsx":iv,"../../../packages/Link/_example/LinkDisabled.tsx":lv,"../../../packages/Link/_example/LinkIcon.tsx":sv,"../../../packages/Link/_example/LinkUnderline.tsx":ov,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":cv,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":av,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":uv,"../../../packages/Popover/_example/PopoverBasic.tsx":dv,"../../../packages/Progress/_example/ProgressBasic.tsx":fv,"../../../packages/Progress/_example/ProgressTextInside.tsx":hv,"../../../packages/Result/_example/ResultBasic.tsx":pv,"../../../packages/Result/_example/ResultIcon.tsx":mv,"../../../packages/Switch/_example/SwitchActionIcon.tsx":xv,"../../../packages/Switch/_example/SwitchBasic.tsx":gv,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":vv,"../../../packages/Switch/_example/SwitchDisabled.tsx":jv,"../../../packages/Switch/_example/SwitchIcon.tsx":yv,"../../../packages/Switch/_example/SwitchLoading.tsx":wv,"../../../packages/Switch/_example/SwitchSize.tsx":Cv,"../../../packages/Switch/_example/SwitchText.tsx":kv,"../../../packages/Text/_example/TextBasic.tsx":_v,"../../../packages/Text/_example/TextSize.tsx":Nv,"../../../packages/Text/_example/TextTruncated.tsx":Sv,"../../../packages/Tooltip/_example/TooltipBasic.tsx":Ev,"../../../packages/Tooltip/_example/TooltipContent.tsx":bv,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":Tv,"../../../packages/Tooltip/_example/TooltipEffect.tsx":Rv});let u={display:l?"":"none"};m.useEffect(()=>{i.current&&(Object.keys(a).forEach(p=>{p.indexOf(e)!==-1&&c(a[p])}),setTimeout(()=>{Gc.highlightElement(i.current)},0))},[e]);function d(){s(!l)}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"code-block",children:[n.jsx("div",{className:"code-block-component",children:r}),n.jsx("div",{className:"op-btns",children:n.jsx("button",{onClick:d,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:n.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:n.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),n.jsx("div",{className:"code-block-wrapper",style:u,children:n.jsx("div",{className:"code-block-pre language-react",children:n.jsx("pre",{children:n.jsx("code",{id:t,ref:i,className:t,children:o})})})})]})})}function xp(t){var e,r,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=xp(t[e]))&&(i&&(i+=" "),i+=r);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function O(){for(var t,e,r=0,i="";r<arguments.length;)(t=arguments[r++])&&(e=xp(t))&&(i&&(i+=" "),i+=e);return i}const Rj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),m.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),Lj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Rj,{})})},ls=m.forwardRef(Lj);ls.displayName="Edit";const Pj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),Bj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Pj,{})})},Kc=m.forwardRef(Bj);Kc.displayName="Search";const Aj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),Mj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Aj,{})})},fi=m.forwardRef(Mj);fi.displayName="Check";const Ij=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),m.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),Dj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Ij,{})})},Yc=m.forwardRef(Dj);Yc.displayName="Message";const Fj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),Oj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Fj,{})})},Zc=m.forwardRef(Oj);Zc.displayName="Star";const zj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),$j=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(zj,{})})},Jc=m.forwardRef($j);Jc.displayName="Delete";const Uj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),Hj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Uj,{})})},ss=m.forwardRef(Hj);ss.displayName="View";const Wj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),Vj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Wj,{})})},qc=m.forwardRef(Vj);qc.displayName="StarFilled";const Xj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),Qj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Xj,{})})},Bl=m.forwardRef(Qj);Bl.displayName="Close";const Gj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),Kj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Gj,{})})},ea=m.forwardRef(Kj);ea.displayName="Loading";const Yj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),m.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),Zj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Yj,{})})},ta=m.forwardRef(Zj);ta.displayName="Hide";const Jj=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),qj=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Jj,{})})},Ci=m.forwardRef(qj);Ci.displayName="InfoFilled";const e1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),t1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(e1,{})})},os=m.forwardRef(t1);os.displayName="WarningFilled";const n1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),r1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(n1,{})})},cs=m.forwardRef(r1);cs.displayName="CircleCloseFilled";const i1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),l1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(i1,{})})},na=m.forwardRef(l1);na.displayName="CircleCheckFilled";const s1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),o1=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),children:n.jsx(s1,{})})},ra=m.forwardRef(o1);ra.displayName="ArrowRight";const c1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),a1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),onClick:l,children:n.jsx(c1,{})})},gp=m.forwardRef(a1);gp.displayName="UserFilled";const u1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),m.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),d1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),onClick:l,children:n.jsx(u1,{})})},ia=m.forwardRef(d1);ia.displayName="CircleCheck";const f1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),h1=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),children:n.jsx(f1,{})})},vp=m.forwardRef(h1);vp.displayName="QuestionFilled";const p1=(t,e)=>{const{className:r,style:i,children:l,type:s,plain:o=!1,round:c=!1,circle:a=!1,disabled:u=!1,link:d=!1,icon:p,...x}=t,v=p?n.jsx(n.Fragment,{children:p}):n.jsx(n.Fragment,{});return n.jsxs("button",{ref:e,style:i,disabled:u,...x,className:O(r,"el-button",s?`el-button--${s}`:"",o?"is-plain":"",c?"is-round":"",a?"is-circle":"",u?"is-disabled":"",d?"is-link":""),children:[v,l]})},R=m.forwardRef(p1);R.displayName="Button";const m1=(t,e)=>{const{style:r,className:i,children:l,direction:s}=t,o=()=>s==="vertical"?!0:s==="horizontal"?!1:l?l.some(c=>{const a=c.props.children;return a==="Header"||a==="Footer"}):!1;return n.jsx("section",{ref:e,style:r,className:O(i,"el-container",o()?"is-vertical":""),children:l})},Je=m.forwardRef(m1);Je.displayName="Container";const x1=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-header-height":s};return n.jsx("header",{ref:e,style:o,className:O(i,"el-header"),children:l})},Mn=m.forwardRef(x1);Mn.displayName="Head";const g1=(t,e)=>{const{style:r,className:i,children:l}=t;return n.jsx("main",{ref:e,style:r,className:O(i,"el-main"),children:l})},hn=m.forwardRef(g1);hn.displayName="Main";const v1=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-footer-height":s};return n.jsx("footer",{ref:e,style:o,className:O(i,"el-footer"),children:l})},as=m.forwardRef(v1);as.displayName="Footer";const j1=(t,e)=>{const{style:r,className:i,children:l,width:s=200}=t,o={...r,"--el-aside-width":s};return n.jsx("aside",{ref:e,style:o,className:O(i,"el-aside"),children:l})},jr=m.forwardRef(j1);jr.displayName="Aside";const jp=m.createContext({}),y1=(t,e)=>{const{style:r,className:i,children:l,gutter:s=0,justify:o}=t,c={marginLeft:`-${s/2}px`,marginRight:`-${s/2}px`,...r},a=m.useMemo(()=>({gutter:s}),[s]);return n.jsx(jp.Provider,{value:a,children:n.jsx("div",{ref:e,style:c,className:O(i,"el-row",o?`is-justify-${o}`:""),children:l})})},ue=m.forwardRef(y1);ue.displayName="Row";const w1=(t,e)=>{const{style:r,className:i,children:l,span:s=24,offset:o,xs:c,sm:a,md:u,lg:d,xl:p}=t,{gutter:x}=m.useContext(jp),v={paddingLeft:`${x/2}px`,paddingRight:`${x/2}px`,...r};return n.jsx("div",{ref:e,style:v,className:O(i,"el-col",s?`el-col-${s}`:"",x?"is-guttered":"",o?`el-col-offset-${o}`:"",c?`el-col-xs-${c}`:"",a?`el-col-sm-${a}`:"",u?`el-col-md-${u}`:"",d?`el-col-lg-${d}`:"",p?`el-col-xl-${p}`:""),children:l})},M=m.forwardRef(w1);M.displayName="Col";const C1=(t,e)=>{const{style:r,className:i,children:l,type:s,href:o,target:c,disabled:a=!1,underline:u=!0,icon:d}=t,p=d?n.jsx(n.Fragment,{children:d}):n.jsx(n.Fragment,{});return n.jsxs("a",{ref:e,style:r,className:O(i,"el-link",s?`el-link--${s}`:"el-link--default",a?"is-disabled":"",u?"is-underline":""),href:a||!o?void 0:o,target:c||void 0,children:[p,n.jsx("span",{className:"el-link__inner",children:l})]})},Ee=m.forwardRef(C1);Ee.displayName="Link";const k1=(t,e)=>{const{style:r,className:i,children:l,type:s,size:o,truncated:c=!1,lineClamp:a}=t,u={WebkitLineClamp:a,...r};return n.jsx("span",{ref:e,style:u,className:O(i,"el-text",s?`el-text--${s}`:"",o?`el-text--${o}`:"",c?"is-truncated":"",a?"is-line-clamp":""),children:l})},Ke=m.forwardRef(k1);Ke.displayName="Text";const _1=(t,e)=>{const{style:r,className:i,children:l,contentPosition:s="center",borderStyle:o="solid",direction:c="horizontal"}=t,a={"--el-border-style":o,...r},u=l?n.jsx(n.Fragment,{children:n.jsx("div",{className:O("el-divider__text",`is-${s}`),children:l})}):n.jsx(n.Fragment,{});return n.jsx("div",{ref:e,style:a,className:O(i,"el-divider",`el-divider--${c}`),children:u})},St=m.forwardRef(_1);St.displayName="Divider";const N1=(t,e)=>{const{style:r,className:i,defaultChecked:l=!1,size:s,inactiveText:o,activeText:c,inlinePrompt:a=!1,width:u,activeIcon:d,inactiveIcon:p,disabled:x=!1,loading:v=!1,beforeChange:j,activeActionIcon:y,inactiveActionIcon:_}=t,[h,f]=m.useState(l);function g(){if(x||v)return;if(!j){w();return}const Q=j();Q instanceof Promise&&Q.then(ee=>{ee&&w()})}function w(){f(!h)}function k(){return p?n.jsx(n.Fragment,{children:p}):n.jsx(n.Fragment,{children:n.jsx("span",{children:o})})}function S(){return(o||p)&&!a?n.jsx(n.Fragment,{children:n.jsx("span",{className:O("el-switch__label el-switch__label--left",h?"":"is-active"),children:n.jsx(k,{})})}):n.jsx(n.Fragment,{})}function E(){return d?n.jsx(n.Fragment,{children:d}):n.jsx(n.Fragment,{children:n.jsx("span",{children:d})})}function L(){return(c||d)&&!a?n.jsx(n.Fragment,{children:n.jsx("span",{className:O("el-switch__label el-switch__label--right",h?"is-active":""),children:n.jsx(E,{})})}):n.jsx(n.Fragment,{})}function z(){return a&&(d||p)?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:h?d:p})}):a?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:n.jsx("span",{className:"is-text",children:h?c:o})})}):n.jsx(n.Fragment,{})}function D(){return v?n.jsx(n.Fragment,{children:n.jsx(ea,{className:"is-loading"})}):y&&h?n.jsx(n.Fragment,{children:y}):_&&!h?n.jsx(n.Fragment,{children:_}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:O(i,"el-switch",h?"is-checked":"",s?`el-switch--${s}`:"",{"is-disabled":x||v}),onClick:g,children:[n.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:x||v}),n.jsx(S,{}),n.jsxs("span",{className:"el-switch__core",style:{width:`${u}px`},children:[n.jsx(z,{}),n.jsx("div",{className:"el-switch__action",children:n.jsx(D,{})})]}),n.jsx(L,{})]})},me=m.forwardRef(N1);me.displayName="Switch";const S1=(t,e)=>{const{style:r,className:i,type:l="info",title:s,effect:o="light",closable:c=!0,closeText:a,close:u,showIcon:d=!1,center:p=!1,description:x}=t,[v,j]=m.useState(!0);function y(){if(!d)return n.jsx(n.Fragment,{});let w=n.jsx(n.Fragment,{});switch(l){case"success":w=n.jsx(n.Fragment,{children:n.jsx(na,{className:O("el-alert__icon",{"is-big":x})})});break;case"info":w=n.jsx(n.Fragment,{children:n.jsx(Ci,{className:O("el-alert__icon",{"is-big":x})})});break;case"warning":w=n.jsx(n.Fragment,{children:n.jsx(os,{className:O("el-alert__icon",{"is-big":x})})});break;case"error":w=n.jsx(n.Fragment,{children:n.jsx(cs,{className:O("el-alert__icon",{"is-big":x})})});break}return w}function _(){return x?n.jsx(n.Fragment,{children:n.jsx("p",{className:"el-alert__description",children:x})}):n.jsx(n.Fragment,{})}function h(){u&&u(),j(!1)}const f={display:v?"":"none",...r};function g(){return c?a?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-alert__close-btn is-customed",onClick:h,children:a})}):n.jsx(n.Fragment,{children:n.jsx(Bl,{className:"el-alert__close-btn",onClick:h})}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:f,className:O("el-alert",`el-alert--${l}`,`is-${o}`,{"is-center":p},i),role:"alert",children:[n.jsx(y,{}),n.jsxs("div",{className:"el-alert__content",children:[n.jsx("span",{className:O("el-alert__title",{"is-bold":x}),children:s}),n.jsx(_,{}),n.jsx(g,{})]})]})},se=m.forwardRef(S1);se.displayName="Alert";const E1=m.createContext({}),b1=(t,e)=>{const{style:r,className:i,children:l,activeName:s}=t,o=m.useMemo(()=>({activeName:s}),[s]);return n.jsx(E1.Provider,{value:o,children:n.jsx("div",{ref:e,style:r,className:O(i,"el-collapse"),children:l})})},yp=m.forwardRef(b1);yp.displayName="Collapse";const T1=(t,e)=>{const{style:r,className:i,children:l,title:s}=t,[o,c]=m.useState(!1);function a(){c(!o)}return n.jsxs("div",{ref:e,style:r,className:O(i,"el-collapse-item",{"is-active":o}),onClick:a,children:[n.jsxs("button",{className:O("el-collapse-item__header",{"is-active":o}),type:"button",children:[s,n.jsx(ra,{className:"el-collapse-item__arrow"})]}),n.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:o?"":"none"},children:n.jsx("div",{className:"el-collapse-item__content",children:l})})]})},Pr=m.forwardRef(T1);Pr.displayName="CollapseItem";const R1=(t,e)=>{const{style:r,className:i,shape:l="circle",size:s,src:o,icon:c,fit:a="cover",onError:u,children:d}=t,p={...r,"--el-avatar-size":s&&typeof s=="number"?`${s}px`:""},[x,v]=m.useState(!0);function j(){const h=new Image(0,0);o&&(h.src=o),h.onload=()=>{v(!0)},h.onerror=f=>{f instanceof Event&&(f.preventDefault(),f.stopPropagation()),v(!1),u&&u()}}function y(){return x?n.jsx("img",{src:o,style:{objectFit:a}}):n.jsx(n.Fragment,{children:d})}function _(){return c?n.jsx(n.Fragment,{children:c}):o?(j(),n.jsx(n.Fragment,{children:n.jsx(y,{})})):n.jsx(n.Fragment,{children:d})}return n.jsx("span",{ref:e,style:p,className:O(i,"el-avatar",`el-avatar--${l}`,s?`el-avatar--${s}`:"",{"el-avatar--icon":c}),children:n.jsx(_,{})})},kt=m.forwardRef(R1);kt.displayName="Avatar";const L1=(t,e)=>{const{style:r,className:i,icon:l="info",title:s,subTitle:o,extra:c}=t;function a(){if(typeof l=="string"){let u=n.jsx(n.Fragment,{});switch(l){case"success":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return u}else return n.jsx(n.Fragment,{children:l})}return n.jsxs("div",{ref:e,style:r,className:O("el-result",i),children:[n.jsx("div",{className:"el-result__icon",children:n.jsx(a,{})}),n.jsx("div",{className:"el-result__title",children:n.jsx("p",{children:s})}),n.jsx("div",{className:"el-result__subtitle",children:n.jsx("p",{children:o})}),n.jsx("div",{className:"el-result__extra",children:c})]})},Yn=m.forwardRef(L1);Yn.displayName="Result";function on(t){return wp(t)?(t.nodeName||"").toLowerCase():"#document"}function Qe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ot(t){var e;return(e=(wp(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wp(t){return t instanceof Node||t instanceof Qe(t).Node}function be(t){return t instanceof Element||t instanceof Qe(t).Element}function et(t){return t instanceof HTMLElement||t instanceof Qe(t).HTMLElement}function Vo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Qe(t).ShadowRoot}function ki(t){const{overflow:e,overflowX:r,overflowY:i,display:l}=ut(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(l)}function P1(t){return["table","td","th"].includes(on(t))}function la(t){const e=sa(),r=ut(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function B1(t){let e=fr(t);for(;et(e)&&!us(e);){if(la(e))return e;e=fr(e)}return null}function sa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function us(t){return["html","body","#document"].includes(on(t))}function ut(t){return Qe(t).getComputedStyle(t)}function ds(t){return be(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function fr(t){if(on(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vo(t)&&t.host||Ot(t);return Vo(e)?e.host:e}function Cp(t){const e=fr(t);return us(e)?t.ownerDocument?t.ownerDocument.body:t.body:et(e)&&ki(e)?e:Cp(e)}function hi(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const l=Cp(t),s=l===((i=t.ownerDocument)==null?void 0:i.body),o=Qe(l);return s?e.concat(o,o.visualViewport||[],ki(l)?l:[],o.frameElement&&r?hi(o.frameElement):[]):e.concat(l,hi(l,[],r))}function Qu(t){let e=t.activeElement;for(;((r=e)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;e=e.shadowRoot.activeElement}return e}function Xo(t,e){if(!t||!e)return!1;const r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Vo(r)){let i=e;for(;i;){if(t===i)return!0;i=i.parentNode||i.host}}return!1}function kp(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function A1(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:r,version:i}=e;return r+"/"+i}).join(" "):navigator.userAgent}function M1(t){return!Gu()&&t.width===0&&t.height===0||Gu()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function I1(){return/apple/i.test(navigator.vendor)}function Gu(){const t=/android/i;return t.test(kp())||t.test(A1())}function D1(){return kp().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Al(t,e){const r=["mouse","pen"];return e||r.push("",void 0),r.includes(t)}function Br(t){return(t==null?void 0:t.ownerDocument)||document}function F1(t){return"composedPath"in t?t.composedPath()[0]:t.target}const O1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function _p(t){return et(t)&&t.matches(O1)}const hr=Math.min,_n=Math.max,Ml=Math.round,Vi=Math.floor,cn=t=>({x:t,y:t});function z1(t,e,r){return _n(t,hr(e,r))}function Np(t,e){return typeof t=="function"?t(e):t}function oa(t){return t.split("-")[0]}function ca(t){return t.split("-")[1]}function $1(t){return t==="x"?"y":"x"}function Sp(t){return t==="y"?"height":"width"}function aa(t){return["top","bottom"].includes(oa(t))?"y":"x"}function Ep(t){return $1(aa(t))}function U1(t){return{top:0,right:0,bottom:0,left:0,...t}}function H1(t){return typeof t!="number"?U1(t):{top:t,right:t,bottom:t,left:t}}function bp(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ku(t,e,r){let{reference:i,floating:l}=t;const s=aa(e),o=Ep(e),c=Sp(o),a=oa(e),u=s==="y",d=i.x+i.width/2-l.width/2,p=i.y+i.height/2-l.height/2,x=i[c]/2-l[c]/2;let v;switch(a){case"top":v={x:d,y:i.y-l.height};break;case"bottom":v={x:d,y:i.y+i.height};break;case"right":v={x:i.x+i.width,y:p};break;case"left":v={x:i.x-l.width,y:p};break;default:v={x:i.x,y:i.y}}switch(ca(e)){case"start":v[o]-=x*(r&&u?-1:1);break;case"end":v[o]+=x*(r&&u?-1:1);break}return v}const W1=async(t,e,r)=>{const{placement:i="bottom",strategy:l="absolute",middleware:s=[],platform:o}=r,c=s.filter(Boolean),a=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:l}),{x:d,y:p}=Ku(u,i,a),x=i,v={},j=0;for(let y=0;y<c.length;y++){const{name:_,fn:h}=c[y],{x:f,y:g,data:w,reset:k}=await h({x:d,y:p,initialPlacement:i,placement:x,strategy:l,middlewareData:v,rects:u,platform:o,elements:{reference:t,floating:e}});if(d=f??d,p=g??p,v={...v,[_]:{...v[_],...w}},k&&j<=50){j++,typeof k=="object"&&(k.placement&&(x=k.placement),k.rects&&(u=k.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:l}):k.rects),{x:d,y:p}=Ku(u,x,a)),y=-1;continue}}return{x:d,y:p,placement:x,strategy:l,middlewareData:v}},V1=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:i,placement:l,rects:s,platform:o,elements:c,middlewareData:a}=e,{element:u,padding:d=0}=Np(t,e)||{};if(u==null)return{};const p=H1(d),x={x:r,y:i},v=Ep(l),j=Sp(v),y=await o.getDimensions(u),_=v==="y",h=_?"top":"left",f=_?"bottom":"right",g=_?"clientHeight":"clientWidth",w=s.reference[j]+s.reference[v]-x[v]-s.floating[j],k=x[v]-s.reference[v],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(u));let E=S?S[g]:0;(!E||!await(o.isElement==null?void 0:o.isElement(S)))&&(E=c.floating[g]||s.floating[j]);const L=w/2-k/2,z=E/2-y[j]/2-1,D=hr(p[h],z),Q=hr(p[f],z),ee=D,ce=E-y[j]-Q,U=E/2-y[j]/2+L,H=z1(ee,U,ce),W=!a.arrow&&ca(l)!=null&&U!=H&&s.reference[j]/2-(U<ee?D:Q)-y[j]/2<0,N=W?U<ee?U-ee:U-ce:0;return{[v]:x[v]+N,data:{[v]:H,centerOffset:U-H-N,...W&&{alignmentOffset:N}},reset:W}}});async function X1(t,e){const{placement:r,platform:i,elements:l}=t,s=await(i.isRTL==null?void 0:i.isRTL(l.floating)),o=oa(r),c=ca(r),a=aa(r)==="y",u=["left","top"].includes(o)?-1:1,d=s&&a?-1:1,p=Np(e,t);let{mainAxis:x,crossAxis:v,alignmentAxis:j}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&typeof j=="number"&&(v=c==="end"?j*-1:j),a?{x:v*d,y:x*u}:{x:x*u,y:v*d}}const ua=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:l,y:s,placement:o,middlewareData:c}=e,a=await X1(e,t);return o===((r=c.offset)==null?void 0:r.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:l+a.x,y:s+a.y,data:{...a,placement:o}}}}};function Tp(t){const e=ut(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const l=et(t),s=l?t.offsetWidth:r,o=l?t.offsetHeight:i,c=Ml(r)!==s||Ml(i)!==o;return c&&(r=s,i=o),{width:r,height:i,$:c}}function da(t){return be(t)?t:t.contextElement}function rr(t){const e=da(t);if(!et(e))return cn(1);const r=e.getBoundingClientRect(),{width:i,height:l,$:s}=Tp(e);let o=(s?Ml(r.width):r.width)/i,c=(s?Ml(r.height):r.height)/l;return(!o||!Number.isFinite(o))&&(o=1),(!c||!Number.isFinite(c))&&(c=1),{x:o,y:c}}const Q1=cn(0);function Rp(t){const e=Qe(t);return!sa()||!e.visualViewport?Q1:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function G1(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Qe(t)?!1:e}function Rn(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const l=t.getBoundingClientRect(),s=da(t);let o=cn(1);e&&(i?be(i)&&(o=rr(i)):o=rr(t));const c=G1(s,r,i)?Rp(s):cn(0);let a=(l.left+c.x)/o.x,u=(l.top+c.y)/o.y,d=l.width/o.x,p=l.height/o.y;if(s){const x=Qe(s),v=i&&be(i)?Qe(i):i;let j=x.frameElement;for(;j&&i&&v!==x;){const y=rr(j),_=j.getBoundingClientRect(),h=ut(j),f=_.left+(j.clientLeft+parseFloat(h.paddingLeft))*y.x,g=_.top+(j.clientTop+parseFloat(h.paddingTop))*y.y;a*=y.x,u*=y.y,d*=y.x,p*=y.y,a+=f,u+=g,j=Qe(j).frameElement}}return bp({width:d,height:p,x:a,y:u})}function K1(t){let{rect:e,offsetParent:r,strategy:i}=t;const l=et(r),s=Ot(r);if(r===s)return e;let o={scrollLeft:0,scrollTop:0},c=cn(1);const a=cn(0);if((l||!l&&i!=="fixed")&&((on(r)!=="body"||ki(s))&&(o=ds(r)),et(r))){const u=Rn(r);c=rr(r),a.x=u.x+r.clientLeft,a.y=u.y+r.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-o.scrollLeft*c.x+a.x,y:e.y*c.y-o.scrollTop*c.y+a.y}}function Y1(t){return Array.from(t.getClientRects())}function Lp(t){return Rn(Ot(t)).left+ds(t).scrollLeft}function Z1(t){const e=Ot(t),r=ds(t),i=t.ownerDocument.body,l=_n(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=_n(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Lp(t);const c=-r.scrollTop;return ut(i).direction==="rtl"&&(o+=_n(e.clientWidth,i.clientWidth)-l),{width:l,height:s,x:o,y:c}}function J1(t,e){const r=Qe(t),i=Ot(t),l=r.visualViewport;let s=i.clientWidth,o=i.clientHeight,c=0,a=0;if(l){s=l.width,o=l.height;const u=sa();(!u||u&&e==="fixed")&&(c=l.offsetLeft,a=l.offsetTop)}return{width:s,height:o,x:c,y:a}}function q1(t,e){const r=Rn(t,!0,e==="fixed"),i=r.top+t.clientTop,l=r.left+t.clientLeft,s=et(t)?rr(t):cn(1),o=t.clientWidth*s.x,c=t.clientHeight*s.y,a=l*s.x,u=i*s.y;return{width:o,height:c,x:a,y:u}}function Yu(t,e,r){let i;if(e==="viewport")i=J1(t,r);else if(e==="document")i=Z1(Ot(t));else if(be(e))i=q1(e,r);else{const l=Rp(t);i={...e,x:e.x-l.x,y:e.y-l.y}}return bp(i)}function Pp(t,e){const r=fr(t);return r===e||!be(r)||us(r)?!1:ut(r).position==="fixed"||Pp(r,e)}function ey(t,e){const r=e.get(t);if(r)return r;let i=hi(t,[],!1).filter(c=>be(c)&&on(c)!=="body"),l=null;const s=ut(t).position==="fixed";let o=s?fr(t):t;for(;be(o)&&!us(o);){const c=ut(o),a=la(o);!a&&c.position==="fixed"&&(l=null),(s?!a&&!l:!a&&c.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||ki(o)&&!a&&Pp(t,o))?i=i.filter(d=>d!==o):l=c,o=fr(o)}return e.set(t,i),i}function ty(t){let{element:e,boundary:r,rootBoundary:i,strategy:l}=t;const o=[...r==="clippingAncestors"?ey(e,this._c):[].concat(r),i],c=o[0],a=o.reduce((u,d)=>{const p=Yu(e,d,l);return u.top=_n(p.top,u.top),u.right=hr(p.right,u.right),u.bottom=hr(p.bottom,u.bottom),u.left=_n(p.left,u.left),u},Yu(e,c,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ny(t){const{width:e,height:r}=Tp(t);return{width:e,height:r}}function ry(t,e,r){const i=et(e),l=Ot(e),s=r==="fixed",o=Rn(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const a=cn(0);if(i||!i&&!s)if((on(e)!=="body"||ki(l))&&(c=ds(e)),i){const u=Rn(e,!0,s,e);a.x=u.x+e.clientLeft,a.y=u.y+e.clientTop}else l&&(a.x=Lp(l));return{x:o.left+c.scrollLeft-a.x,y:o.top+c.scrollTop-a.y,width:o.width,height:o.height}}function Zu(t,e){return!et(t)||ut(t).position==="fixed"?null:e?e(t):t.offsetParent}function Bp(t,e){const r=Qe(t);if(!et(t))return r;let i=Zu(t,e);for(;i&&P1(i)&&ut(i).position==="static";)i=Zu(i,e);return i&&(on(i)==="html"||on(i)==="body"&&ut(i).position==="static"&&!la(i))?r:i||B1(t)||r}const iy=async function(t){let{reference:e,floating:r,strategy:i}=t;const l=this.getOffsetParent||Bp,s=this.getDimensions;return{reference:ry(e,await l(r),i),floating:{x:0,y:0,...await s(r)}}};function ly(t){return ut(t).direction==="rtl"}const sy={convertOffsetParentRelativeRectToViewportRelativeRect:K1,getDocumentElement:Ot,getClippingRect:ty,getOffsetParent:Bp,getElementRects:iy,getClientRects:Y1,getDimensions:ny,getScale:rr,isElement:be,isRTL:ly};function oy(t,e){let r=null,i;const l=Ot(t);function s(){clearTimeout(i),r&&r.disconnect(),r=null}function o(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),s();const{left:u,top:d,width:p,height:x}=t.getBoundingClientRect();if(c||e(),!p||!x)return;const v=Vi(d),j=Vi(l.clientWidth-(u+p)),y=Vi(l.clientHeight-(d+x)),_=Vi(u),f={rootMargin:-v+"px "+-j+"px "+-y+"px "+-_+"px",threshold:_n(0,hr(1,a))||1};let g=!0;function w(k){const S=k[0].intersectionRatio;if(S!==a){if(!g)return o();S?o(!1,S):i=setTimeout(()=>{o(!1,1e-7)},100)}g=!1}try{r=new IntersectionObserver(w,{...f,root:l.ownerDocument})}catch{r=new IntersectionObserver(w,f)}r.observe(t)}return o(!0),s}function fa(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,u=da(t),d=l||s?[...u?hi(u):[],...hi(e)]:[];d.forEach(h=>{l&&h.addEventListener("scroll",r,{passive:!0}),s&&h.addEventListener("resize",r)});const p=u&&c?oy(u,r):null;let x=-1,v=null;o&&(v=new ResizeObserver(h=>{let[f]=h;f&&f.target===u&&v&&(v.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{v&&v.observe(e)})),r()}),u&&!a&&v.observe(u),v.observe(e));let j,y=a?Rn(t):null;a&&_();function _(){const h=Rn(t);y&&(h.x!==y.x||h.y!==y.y||h.width!==y.width||h.height!==y.height)&&r(),y=h,j=requestAnimationFrame(_)}return r(),()=>{d.forEach(h=>{l&&h.removeEventListener("scroll",r),s&&h.removeEventListener("resize",r)}),p&&p(),v&&v.disconnect(),v=null,a&&cancelAnimationFrame(j)}}const Ju=V1,cy=(t,e,r)=>{const i=new Map,l={platform:sy,...r},s={...l.platform,_c:i};return W1(t,e,{...l,platform:s})},ha=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:i,padding:l}=typeof t=="function"?t(r):t;return i&&e(i)?i.current!=null?Ju({element:i.current,padding:l}).fn(r):{}:i?Ju({element:i,padding:l}).fn(r):{}}}};var il=typeof document<"u"?m.useLayoutEffect:m.useEffect;function Il(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,i,l;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(i=r;i--!==0;)if(!Il(t[i],e[i]))return!1;return!0}if(l=Object.keys(t),r=l.length,r!==Object.keys(e).length)return!1;for(i=r;i--!==0;)if(!{}.hasOwnProperty.call(e,l[i]))return!1;for(i=r;i--!==0;){const s=l[i];if(!(s==="_owner"&&t.$$typeof)&&!Il(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Ap(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function qu(t,e){const r=Ap(t);return Math.round(e*r)/r}function ed(t){const e=m.useRef(t);return il(()=>{e.current=t}),e}function ay(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:i=[],platform:l,elements:{reference:s,floating:o}={},transform:c=!0,whileElementsMounted:a,open:u}=t,[d,p]=m.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[x,v]=m.useState(i);Il(x,i)||v(i);const[j,y]=m.useState(null),[_,h]=m.useState(null),f=m.useCallback(W=>{W!=S.current&&(S.current=W,y(W))},[y]),g=m.useCallback(W=>{W!==E.current&&(E.current=W,h(W))},[h]),w=s||j,k=o||_,S=m.useRef(null),E=m.useRef(null),L=m.useRef(d),z=ed(a),D=ed(l),Q=m.useCallback(()=>{if(!S.current||!E.current)return;const W={placement:e,strategy:r,middleware:x};D.current&&(W.platform=D.current),cy(S.current,E.current,W).then(N=>{const C={...N,isPositioned:!0};ee.current&&!Il(L.current,C)&&(L.current=C,wi.flushSync(()=>{p(C)}))})},[x,e,r,D]);il(()=>{u===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,p(W=>({...W,isPositioned:!1})))},[u]);const ee=m.useRef(!1);il(()=>(ee.current=!0,()=>{ee.current=!1}),[]),il(()=>{if(w&&(S.current=w),k&&(E.current=k),w&&k){if(z.current)return z.current(w,k,Q);Q()}},[w,k,Q,z]);const ce=m.useMemo(()=>({reference:S,floating:E,setReference:f,setFloating:g}),[f,g]),U=m.useMemo(()=>({reference:w,floating:k}),[w,k]),H=m.useMemo(()=>{const W={position:r,left:0,top:0};if(!U.floating)return W;const N=qu(U.floating,d.x),C=qu(U.floating,d.y);return c?{...W,transform:"translate("+N+"px, "+C+"px)",...Ap(U.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:C}},[r,c,U.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:Q,refs:ce,elements:U,floatingStyles:H}),[d,Q,ce,U,H])}const uy=Zo.useInsertionEffect,dy=uy||(t=>t());function fy(t){const e=m.useRef(()=>{});return dy(()=>{e.current=t}),m.useCallback(function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e.current==null?void 0:e.current(...i)},[])}var pi=typeof document<"u"?m.useLayoutEffect:m.useEffect;let Ws=!1,hy=0;const td=()=>"floating-ui-"+hy++;function py(){const[t,e]=m.useState(()=>Ws?td():void 0);return pi(()=>{t==null&&e(td())},[]),m.useEffect(()=>{Ws||(Ws=!0)},[]),t}const my=Zo.useId,xy=my||py;function gy(){const t=new Map;return{emit(e,r){var i;(i=t.get(e))==null||i.forEach(l=>l(r))},on(e,r){t.set(e,[...t.get(e)||[],r])},off(e,r){var i;t.set(e,((i=t.get(e))==null?void 0:i.filter(l=>l!==r))||[])}}}const vy=m.createContext(null),jy=m.createContext(null),Mp=()=>{var t;return((t=m.useContext(vy))==null?void 0:t.id)||null},Ip=()=>m.useContext(jy);function Dp(t){return"data-floating-ui-"+t}function nd(t){const e=m.useRef(t);return pi(()=>{e.current=t}),e}const rd=Dp("safe-polygon");function Vs(t,e,r){return r&&!Al(r)?0:typeof t=="number"?t:t==null?void 0:t[e]}function Fp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,events:s,elements:{domReference:o,floating:c},refs:a}=t,{enabled:u=!0,delay:d=0,handleClose:p=null,mouseOnly:x=!1,restMs:v=0,move:j=!0}=e,y=Ip(),_=Mp(),h=nd(p),f=nd(d),g=m.useRef(),w=m.useRef(),k=m.useRef(),S=m.useRef(),E=m.useRef(!0),L=m.useRef(!1),z=m.useRef(()=>{}),D=m.useCallback(()=>{var U;const H=(U=l.current.openEvent)==null?void 0:U.type;return(H==null?void 0:H.includes("mouse"))&&H!=="mousedown"},[l]);m.useEffect(()=>{if(!u)return;function U(H){let{open:W}=H;W||(clearTimeout(w.current),clearTimeout(S.current),E.current=!0)}return s.on("openchange",U),()=>{s.off("openchange",U)}},[u,s]),m.useEffect(()=>{if(!u||!h.current||!r)return;function U(W){D()&&i(!1,W,"hover")}const H=Br(c).documentElement;return H.addEventListener("mouseleave",U),()=>{H.removeEventListener("mouseleave",U)}},[c,r,i,u,h,l,D]);const Q=m.useCallback(function(U,H,W){H===void 0&&(H=!0),W===void 0&&(W="hover");const N=Vs(f.current,"close",g.current);N&&!k.current?(clearTimeout(w.current),w.current=setTimeout(()=>i(!1,U,W),N)):H&&(clearTimeout(w.current),i(!1,U,W))},[f,i]),ee=m.useCallback(()=>{z.current(),k.current=void 0},[]),ce=m.useCallback(()=>{if(L.current){const U=Br(a.floating.current).body;U.style.pointerEvents="",U.removeAttribute(rd),L.current=!1}},[a]);return m.useEffect(()=>{if(!u)return;function U(){return l.current.openEvent?["click","mousedown"].includes(l.current.openEvent.type):!1}function H(C){if(clearTimeout(w.current),E.current=!1,x&&!Al(g.current)||v>0&&Vs(f.current,"open")===0)return;const T=Vs(f.current,"open",g.current);T?w.current=setTimeout(()=>{i(!0,C,"hover")},T):i(!0,C,"hover")}function W(C){if(U())return;z.current();const T=Br(c);if(clearTimeout(S.current),h.current){r||clearTimeout(w.current),k.current=h.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),ee(),Q(C,!0,"safe-polygon")}});const $=k.current;T.addEventListener("mousemove",$),z.current=()=>{T.removeEventListener("mousemove",$)};return}(g.current==="touch"?!Xo(c,C.relatedTarget):!0)&&Q(C)}function N(C){U()||h.current==null||h.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),ee(),Q(C)}})(C)}if(be(o)){const C=o;return r&&C.addEventListener("mouseleave",N),c==null||c.addEventListener("mouseleave",N),j&&C.addEventListener("mousemove",H,{once:!0}),C.addEventListener("mouseenter",H),C.addEventListener("mouseleave",W),()=>{r&&C.removeEventListener("mouseleave",N),c==null||c.removeEventListener("mouseleave",N),j&&C.removeEventListener("mousemove",H),C.removeEventListener("mouseenter",H),C.removeEventListener("mouseleave",W)}}},[o,c,u,t,x,v,j,Q,ee,ce,i,r,y,f,h,l]),pi(()=>{var U;if(u&&r&&(U=h.current)!=null&&U.__options.blockPointerEvents&&D()){const W=Br(c).body;if(W.setAttribute(rd,""),W.style.pointerEvents="none",L.current=!0,be(o)&&c){var H;const N=o,C=y==null||(H=y.nodesRef.current.find(T=>T.id===_))==null||(H=H.context)==null?void 0:H.elements.floating;return C&&(C.style.pointerEvents=""),N.style.pointerEvents="auto",c.style.pointerEvents="auto",()=>{N.style.pointerEvents="",c.style.pointerEvents=""}}}},[u,r,_,c,o,y,h,l,D]),pi(()=>{r||(g.current=void 0,ee(),ce())},[r,ee,ce]),m.useEffect(()=>()=>{ee(),clearTimeout(w.current),clearTimeout(S.current),ce()},[u,o,ee,ce]),m.useMemo(()=>{if(!u)return{};function U(H){g.current=H.pointerType}return{reference:{onPointerDown:U,onPointerEnter:U,onMouseMove(H){r||v===0||(clearTimeout(S.current),S.current=setTimeout(()=>{E.current||i(!0,H.nativeEvent,"hover")},v))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(H){Q(H.nativeEvent,!1)}}}},[u,v,r,i,Q])}function id(t){return et(t.target)&&t.target.tagName==="BUTTON"}function ld(t){return _p(t)}function mi(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,elements:{domReference:s}}=t,{enabled:o=!0,event:c="click",toggle:a=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=e,p=m.useRef(),x=m.useRef(!1);return m.useMemo(()=>o?{reference:{onPointerDown(v){p.current=v.pointerType},onMouseDown(v){v.button===0&&(Al(p.current,!0)&&u||c!=="click"&&(r&&a&&(!l.current.openEvent||l.current.openEvent.type==="mousedown")?i(!1,v.nativeEvent,"click"):(v.preventDefault(),i(!0,v.nativeEvent,"click"))))},onClick(v){if(c==="mousedown"&&p.current){p.current=void 0;return}Al(p.current,!0)&&u||(r&&a&&(!l.current.openEvent||l.current.openEvent.type==="click")?i(!1,v.nativeEvent,"click"):i(!0,v.nativeEvent,"click"))},onKeyDown(v){p.current=void 0,!(v.defaultPrevented||!d||id(v))&&(v.key===" "&&!ld(s)&&(v.preventDefault(),x.current=!0),v.key==="Enter"&&i(!(r&&a),v.nativeEvent,"click"))},onKeyUp(v){v.defaultPrevented||!d||id(v)||ld(s)||v.key===" "&&x.current&&(x.current=!1,i(!(r&&a),v.nativeEvent,"click"))}}}:{},[o,l,c,u,d,s,a,r,i])}function pa(t){var e;t===void 0&&(t={});const{open:r=!1,onOpenChange:i,nodeId:l}=t,[s,o]=m.useState(null),c=((e=t.elements)==null?void 0:e.reference)||s,a=ay(t),u=Ip(),d=Mp()!=null,p=fy((k,S,E)=>{k&&(v.current.openEvent=S),j.emit("openchange",{open:k,event:S,reason:E,nested:d}),i==null||i(k,S,E)}),x=m.useRef(null),v=m.useRef({}),j=m.useState(()=>gy())[0],y=xy(),_=m.useCallback(k=>{const S=be(k)?{getBoundingClientRect:()=>k.getBoundingClientRect(),contextElement:k}:k;a.refs.setReference(S)},[a.refs]),h=m.useCallback(k=>{(be(k)||k===null)&&(x.current=k,o(k)),(be(a.refs.reference.current)||a.refs.reference.current===null||k!==null&&!be(k))&&a.refs.setReference(k)},[a.refs]),f=m.useMemo(()=>({...a.refs,setReference:h,setPositionReference:_,domReference:x}),[a.refs,h,_]),g=m.useMemo(()=>({...a.elements,domReference:c}),[a.elements,c]),w=m.useMemo(()=>({...a,refs:f,elements:g,dataRef:v,nodeId:l,floatingId:y,events:j,open:r,onOpenChange:p}),[a,l,y,j,r,p,f,g]);return pi(()=>{const k=u==null?void 0:u.nodesRef.current.find(S=>S.id===l);k&&(k.context=w)}),m.useMemo(()=>({...a,context:w,refs:f,elements:g}),[a,f,g,w])}function Op(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,events:l,refs:s,elements:{floating:o,domReference:c}}=t,{enabled:a=!0,visibleOnly:u=!0}=e,d=m.useRef(!1),p=m.useRef(),x=m.useRef(!0);return m.useEffect(()=>{if(!a)return;const v=Qe(c);function j(){!r&&et(c)&&c===Qu(Br(c))&&(d.current=!0)}function y(){x.current=!0}return v.addEventListener("blur",j),v.addEventListener("keydown",y,!0),()=>{v.removeEventListener("blur",j),v.removeEventListener("keydown",y,!0)}},[o,c,r,a]),m.useEffect(()=>{if(!a)return;function v(j){let{reason:y}=j;(y==="reference-press"||y==="escape-key")&&(d.current=!0)}return l.on("openchange",v),()=>{l.off("openchange",v)}},[l,a]),m.useEffect(()=>()=>{clearTimeout(p.current)},[]),m.useMemo(()=>a?{reference:{onPointerDown(v){M1(v.nativeEvent)||(x.current=!1)},onMouseLeave(){d.current=!1},onFocus(v){if(d.current)return;const j=F1(v.nativeEvent);if(u&&be(j))try{if(I1()&&D1())throw Error();if(!j.matches(":focus-visible"))return}catch{if(!x.current&&!_p(j))return}i(!0,v.nativeEvent,"focus")},onBlur(v){d.current=!1;const j=v.relatedTarget,y=be(j)&&j.hasAttribute(Dp("focus-guard"))&&j.getAttribute("data-type")==="outside";p.current=window.setTimeout(()=>{const _=Qu(c?c.ownerDocument:document);!j&&_===c||Xo(s.floating.current,j)||Xo(c,j)||y||i(!1,v.nativeEvent,"focus")})}}}:{},[a,u,c,s,i])}const sd="active",od="selected";function Xs(t,e,r){const i=new Map,l=r==="item";let s=t;if(l&&t){const{[sd]:o,[od]:c,...a}=t;s=a}return{...r==="floating"&&{tabIndex:-1},...s,...e.map(o=>{const c=o?o[r]:null;return typeof c=="function"?t?c(t):null:c}).concat(t).reduce((o,c)=>(c&&Object.entries(c).forEach(a=>{let[u,d]=a;if(!(l&&[sd,od].includes(u)))if(u.indexOf("on")===0){if(i.has(u)||i.set(u,[]),typeof d=="function"){var p;(p=i.get(u))==null||p.push(d),o[u]=function(){for(var x,v=arguments.length,j=new Array(v),y=0;y<v;y++)j[y]=arguments[y];return(x=i.get(u))==null?void 0:x.map(_=>_(...j)).find(_=>_!==void 0)}}}else o[u]=d}),o),{})}}function ma(t){t===void 0&&(t=[]);const e=t,r=m.useCallback(s=>Xs(s,t,"reference"),e),i=m.useCallback(s=>Xs(s,t,"floating"),e),l=m.useCallback(s=>Xs(s,t,"item"),t.map(s=>s==null?void 0:s.item));return m.useMemo(()=>({getReferenceProps:r,getFloatingProps:i,getItemProps:l}),[r,i,l])}const yy=(t,e)=>{const{style:r,className:i,placement:l,content:s,effect:o,getFloatingProps:c,children:a}=t;function u(){return typeof s=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:s})}):n.jsx(n.Fragment,{children:s})}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:r,className:O("el-popper",`is-${o}`,i),"data-popper-placement":l,...c(),children:[n.jsx(u,{}),a]})})},zp=m.forwardRef(yy);zp.displayName="TooltipPopper";const wy=t=>{var E,L;const{style:e,className:r,effect:i="dark",placement:l="bottom",trigger:s="hover",content:o,showAfter:c=0,hideAfter:a=200,disabled:u=!0,children:d}=t,[p,x]=m.useState(!1),v=m.useRef(null),{refs:j,floatingStyles:y,context:_,middlewareData:h}=pa({placement:l,middleware:[ua(12),ha({element:v})],open:p&&u,whileElementsMounted:fa,onOpenChange:x});let f={};switch(s){case"hover":f=Fp(_,{delay:{open:c,close:a}});break;case"click":f=mi(_);break;case"focus":f=Op(_);break;case"contextmenu":f=mi(_,{event:"mousedown"});break}const{getReferenceProps:g,getFloatingProps:w}=ma([f]),k=m.cloneElement(m.Children.only(d),{ref:j.setReference,...g()}),S={...e,...y};return n.jsxs(n.Fragment,{children:[p&&wi.createPortal(n.jsx(zp,{ref:j.setFloating,style:S,className:O(r),effect:i,placement:l,content:o,getFloatingProps:w,children:n.jsx("span",{ref:v,className:"el-popper__arrow",style:{position:"absolute",left:(E=h.arrow)==null?void 0:E.x,top:(L=h.arrow)==null?void 0:L.y}})}),document.body),k]})},we=m.forwardRef(wy);we.displayName="Tooltip";const Cy=(t,e)=>{const{style:r,className:i,placement:l,title:s,content:o,getFloatingProps:c,children:a}=t;function u(){return typeof o=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:o})}):n.jsx(n.Fragment,{children:o})}const d={width:"200px",...r};return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:d,className:O("el-popper is-light el-popover el-popover--plain",i),"data-popper-placement":l,...c(),children:[n.jsx("div",{className:"el-popover__title",role:"title",children:s}),n.jsx(u,{}),a]})})},$p=m.forwardRef(Cy);$p.displayName="PopoverPopper";const ky=t=>{var S,E;const{style:e,className:r,placement:i="bottom",trigger:l="hover",title:s,content:o,showAfter:c=0,hideAfter:a=200,children:u}=t,[d,p]=m.useState(!1),x=m.useRef(null),{refs:v,floatingStyles:j,context:y,middlewareData:_}=pa({placement:i,middleware:[ua(12),ha({element:x})],open:d,whileElementsMounted:fa,onOpenChange:p});let h={};switch(l){case"hover":h=Fp(y,{delay:{open:c,close:a}});break;case"click":h=mi(y);break;case"focus":h=Op(y);break;case"contextmenu":h=mi(y,{event:"mousedown"});break}const{getReferenceProps:f,getFloatingProps:g}=ma([h]),w=m.cloneElement(m.Children.only(u),{ref:v.setReference,...f()}),k={...e,...j};return n.jsxs(n.Fragment,{children:[d&&wi.createPortal(n.jsx($p,{ref:v.setFloating,style:k,className:O(r),placement:i,title:s,content:o,getFloatingProps:g,children:n.jsx("span",{ref:x,className:"el-popper__arrow",style:{position:"absolute",left:(S=_.arrow)==null?void 0:S.x,top:(E=_.arrow)==null?void 0:E.y}})}),document.body),w]})},Ar=m.forwardRef(ky);Ar.displayName="Popover";const _y=(t,e)=>{const{style:r,className:i,percentage:l=0,format:s,status:o,textInside:c=!1,strokeWidth:a=6}=t;function u(){return c?s?n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsx("span",{children:s(l)})}):n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsxs("span",{children:[l,"%"]})}):n.jsx(n.Fragment,{})}function d(){if(!c)if(o){let p;switch(o){case"success":p=n.jsx(ia,{});break;case"warning":p=n.jsx(os,{});break;case"exception":p=n.jsx(cs,{});break}return p}else return s?n.jsx("span",{children:s(l)}):n.jsxs("span",{children:[l,"%"]});return n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:O("el-progress el-progress--line",o?`is-${o}`:"",i),role:"progressbar",children:[n.jsx("div",{className:"el-progress-bar",children:n.jsx("div",{className:"el-progress-bar__outer",style:{height:`${a}px`},children:n.jsx("div",{className:"el-progress-bar__inner",style:{width:`${l}%`,animationDuration:"3s"},children:n.jsx(u,{})})})}),n.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:n.jsx(d,{})})]})},Ct=m.forwardRef(_y);Ct.displayName="Progress";const Ny=(t,e)=>{const{style:r,className:i,placement:l,title:s,width:o,icon:c,iconColor:a,hideIcon:u,confirmButtonText:d,cancelButtonText:p,onConfirm:x,onCancel:v,getFloatingProps:j,children:y}=t,_={width:o?typeof o=="string"?o:`${o}px`:"150px",...r};function h(){return u?n.jsx(n.Fragment,{}):m.cloneElement(c,{className:O(c==null?void 0:c.props.className,"el-popconfirm__icon"),style:{color:a}})}function f(w){v&&(console.log(w),v(w))}function g(w){x&&x(w)}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:_,className:O("el-popper is-light el-popover",i),"data-popper-placement":l,...j(),children:[n.jsxs("div",{className:"el-popconfirm",children:[n.jsxs("div",{className:"el-popconfirm__main",children:[n.jsx(h,{}),s]}),n.jsxs("div",{className:"el-popconfirm__action",children:[n.jsx(R,{onClick:f,children:p}),n.jsx(R,{type:"primary",onClick:g,children:d})]})]}),y]})})},Up=m.forwardRef(Ny);Up.displayName="PopconfirmPopper";const Sy=t=>{var D,Q;const{style:e,className:r,placement:i="bottom",title:l,width:s=150,icon:o=n.jsx(vp,{}),iconColor:c="#f90",hideIcon:a=!1,confirmButtonText:u="Yes",cancelButtonText:d="No",onConfirm:p,onCancel:x,children:v}=t,[j,y]=m.useState(!1),_=m.useRef(null),{refs:h,floatingStyles:f,context:g,middlewareData:w}=pa({placement:i,middleware:[ua(12),ha({element:_})],open:j,whileElementsMounted:fa,onOpenChange:y}),k=mi(g),{getReferenceProps:S,getFloatingProps:E}=ma([k]),L=m.cloneElement(m.Children.only(v),{ref:h.setReference,...S()}),z={...e,...f};return n.jsxs(n.Fragment,{children:[j&&wi.createPortal(n.jsx(Up,{ref:h.setFloating,style:z,className:O(r),placement:i,title:l,width:s,icon:o,iconColor:c,hideIcon:a,confirmButtonText:u,cancelButtonText:d,onConfirm:p,onCancel:x,getFloatingProps:E,children:n.jsx("span",{ref:_,className:"el-popper__arrow",style:{position:"absolute",left:(D=w.arrow)==null?void 0:D.x,top:(Q=w.arrow)==null?void 0:Q.y}})}),document.body),L]})},fs=m.forwardRef(Sy);fs.displayName="Popconfirm";function Ey(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{children:"Default"}),n.jsx(R,{type:"primary",children:"Primary"}),n.jsx(R,{type:"success",children:"Success"}),n.jsx(R,{type:"info",children:"Info"}),n.jsx(R,{type:"warning",children:"Warning"}),n.jsx(R,{type:"danger",children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{plain:!0,children:"Plain"}),n.jsx(R,{type:"primary",plain:!0,children:"Primary"}),n.jsx(R,{type:"success",plain:!0,children:"Success"}),n.jsx(R,{type:"info",plain:!0,children:"Info"}),n.jsx(R,{type:"warning",plain:!0,children:"Warning"}),n.jsx(R,{type:"danger",plain:!0,children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{round:!0,children:"Round"}),n.jsx(R,{type:"primary",round:!0,children:"Primary"}),n.jsx(R,{type:"success",round:!0,children:"Success"}),n.jsx(R,{type:"info",round:!0,children:"Info"}),n.jsx(R,{type:"warning",round:!0,children:"Warning"}),n.jsx(R,{type:"danger",round:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(R,{icon:n.jsx(Kc,{}),circle:!0}),n.jsx(R,{type:"primary",icon:n.jsx(ls,{}),circle:!0}),n.jsx(R,{type:"success",icon:n.jsx(fi,{}),circle:!0}),n.jsx(R,{type:"info",icon:n.jsx(Yc,{}),circle:!0}),n.jsx(R,{type:"warning",icon:n.jsx(Zc,{}),circle:!0}),n.jsx(R,{type:"danger",icon:n.jsx(Jc,{}),circle:!0})]})]})}function by(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{disabled:!0,children:"Default"}),n.jsx(R,{type:"primary",disabled:!0,children:"Primary"}),n.jsx(R,{type:"success",disabled:!0,children:"Success"}),n.jsx(R,{type:"info",disabled:!0,children:"Info"}),n.jsx(R,{type:"warning",disabled:!0,children:"Warning"}),n.jsx(R,{type:"danger",disabled:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(R,{plain:!0,disabled:!0,children:"Plain"}),n.jsx(R,{type:"primary",plain:!0,disabled:!0,children:"Primary"}),n.jsx(R,{type:"success",plain:!0,disabled:!0,children:"Success"}),n.jsx(R,{type:"info",plain:!0,disabled:!0,children:"Info"}),n.jsx(R,{type:"warning",plain:!0,disabled:!0,children:"Warning"}),n.jsx(R,{type:"danger",plain:!0,disabled:!0,children:"Danger"})]})]})}function Ty(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic link button"}),n.jsx(R,{link:!0,children:"Default"}),n.jsx(R,{type:"primary",link:!0,children:"Primary"}),n.jsx(R,{type:"success",link:!0,children:"Success"}),n.jsx(R,{type:"info",link:!0,children:"Info"}),n.jsx(R,{type:"warning",link:!0,children:"Warning"}),n.jsx(R,{type:"danger",link:!0,children:"Danger"}),n.jsx("p",{children:"Disabled link button"}),n.jsx(R,{link:!0,disabled:!0,children:"Default"}),n.jsx(R,{type:"primary",link:!0,disabled:!0,children:"Primary"}),n.jsx(R,{type:"success",link:!0,disabled:!0,children:"Success"}),n.jsx(R,{type:"info",link:!0,disabled:!0,children:"Info"}),n.jsx(R,{type:"warning",link:!0,disabled:!0,children:"Warning"}),n.jsx(R,{type:"danger",link:!0,disabled:!0,children:"Danger"})]})}function cd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Button 按钮"}),`
`,`
`,n.jsx(e.p,{children:"常用的操作按钮。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"type"}),"、",n.jsx(e.code,{children:"plain"}),"、",n.jsx(e.code,{children:"round"})," 和 ",n.jsx(e.code,{children:"circle"})," 来定义按钮的样式。"]}),`
`,n.jsx(I,{name:"ButtonBasic",children:n.jsx(Ey,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.code,{children:"disabled"})," 属性来定义按钮是否被禁用。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"disabled"})," 属性来控制按钮是否为禁用状态。 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"})," 类型的值。"]}),`
`,n.jsx(I,{name:"ButtonDisabled",children:n.jsx(by,{})}),`
`,n.jsx(e.h2,{children:"链接按钮"}),`
`,n.jsx(I,{name:"ButtonLink",children:n.jsx(Ty,{})}),`
`,n.jsx(e.h2,{children:"Button API"}),`
`,n.jsx(e.h3,{children:"Button Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' 'success' 'warning' 'danger' 'info' 'text'(delete)"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"plain"}),n.jsx(e.td,{children:"是否为朴素按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:"是否为链接按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"是否为圆角按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"circle"}),n.jsx(e.td,{children:"是否为圆形按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"按钮是否为禁用状态"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function Ry(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(cd,{...t})}):cd(t)}function Ly(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(Mn,{children:"Header"}),n.jsx(hn,{children:"Main"})]})})})}function Py(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(Mn,{children:"Header"}),n.jsx(hn,{children:"Main"}),n.jsx(as,{children:"Footer"})]})})})}function By(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(jr,{width:"200px",children:"Aside"}),n.jsx(hn,{children:"Main"})]})})})}function Ay(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(Mn,{children:"Header"}),n.jsxs(Je,{children:[n.jsx(jr,{width:"200px",children:"Aside"}),n.jsx(hn,{children:"Main"})]})]})})})}function My(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(Mn,{children:"Header"}),n.jsxs(Je,{children:[n.jsx(jr,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx(hn,{children:"Main"}),n.jsx(as,{children:"Footer"})]})]})]})})})}function Iy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(jr,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx(Mn,{children:"Header"}),n.jsx(hn,{children:"Main"})]})]})})})}function Dy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(jr,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx(Mn,{children:"Header"}),n.jsx(hn,{children:"Main"}),n.jsx(as,{children:"Footer"})]})]})})})}function ad(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(I,{name:"ContainerBasic",children:n.jsx(Ly,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(I,{name:"ContainerBasic1",children:n.jsx(Py,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(I,{name:"ContainerBasic2",children:n.jsx(By,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(I,{name:"ContainerBasic3",children:n.jsx(Ay,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(I,{name:"ContainerBasic4",children:n.jsx(My,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(I,{name:"ContainerBasic5",children:n.jsx(Iy,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(I,{name:"ContainerBasic6",children:n.jsx(Dy,{})}),`
`,n.jsx(e.h2,{children:"Container API"}),`
`,n.jsx(e.h3,{children:"Container Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"子元素的排列方向"}),n.jsx(e.td,{children:"'horizontal' 'vertical'"}),n.jsxs(e.td,{children:["子元素中有 ",n.jsx(e.code,{children:"Header"})," 或 ",n.jsx(e.code,{children:"Footer"})," 时为 vertical，否则为 horizontal"]})]})})]}),`
`,n.jsx(e.h2,{children:"Header API"}),`
`,n.jsx(e.h3,{children:"Header Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"顶栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]}),`
`,n.jsx(e.h2,{children:"Aside API"}),`
`,n.jsx(e.h3,{children:"Aside Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"侧边栏宽度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"300px"})]})})]}),`
`,n.jsx(e.h2,{children:"Footer API"}),`
`,n.jsx(e.h3,{children:"Footer Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]})]})}function Fy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ad,{...t})}):ad(t)}function Oy(){return n.jsxs(n.Fragment,{children:[n.jsx(ls,{style:{fontSize:"20px"}}),n.jsx(Kc,{style:{fontSize:"20px"}}),n.jsx(fi,{style:{fontSize:"20px"}}),n.jsx(Yc,{style:{fontSize:"20px"}}),n.jsx(Zc,{style:{fontSize:"20px"}}),n.jsx(Jc,{style:{fontSize:"20px"}}),n.jsx(ss,{style:{fontSize:"20px"}}),n.jsx(qc,{style:{fontSize:"20px"}}),n.jsx(ea,{style:{fontSize:"20px"}}),n.jsx(ta,{style:{fontSize:"20px"}}),n.jsx(Ci,{style:{fontSize:"20px"}}),n.jsx(os,{style:{fontSize:"20px"}}),n.jsx(cs,{style:{fontSize:"20px"}}),n.jsx(na,{style:{fontSize:"20px"}}),n.jsx(ra,{style:{fontSize:"20px"}}),n.jsx(ia,{style:{fontSize:"20px"}})]})}function ud(t){const e={h1:"h1",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Icon"}),`
`,`
`,n.jsx(I,{name:"IconBasic",children:n.jsx(Oy,{})})]})}function zy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ud,{...t})}):ud(t)}function $y(){return n.jsxs(n.Fragment,{children:[n.jsx(ue,{children:n.jsx(M,{span:24,children:n.jsx("div",{className:"grid-content ep-bg-purple-dark"})})}),n.jsxs(ue,{children:[n.jsx(M,{span:12,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:12,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(ue,{children:[n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]})]}),n.jsxs(ue,{children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(ue,{children:[n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]})]})}function Uy(){return n.jsx(n.Fragment,{children:n.jsxs(ue,{gutter:20,children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})})}function Hy(){return n.jsxs(n.Fragment,{children:[n.jsxs(ue,{gutter:20,children:[n.jsx(M,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{gutter:20,children:[n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{gutter:20,children:[n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function Wy(){return n.jsxs(n.Fragment,{children:[n.jsxs(ue,{gutter:20,children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{gutter:20,children:[n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsx(ue,{gutter:20,children:n.jsx(M,{span:12,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})})]})}function Vy(){return n.jsxs(n.Fragment,{children:[n.jsxs(ue,{className:"row-bg",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{className:"row-bg",justify:"center",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{className:"row-bg",justify:"end",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{className:"row-bg",justify:"space-between",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{className:"row-bg",justify:"space-around",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ue,{className:"row-bg",justify:"space-evenly",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function Xy(){return n.jsx(n.Fragment,{children:n.jsxs(ue,{gutter:10,children:[n.jsx(M,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})})]})})}function dd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Layout 布局"}),`
`,`
`,n.jsx(e.p,{children:"通过基础的 24 分栏，迅速简便地创建布局。"}),`
`,n.jsx(e.h2,{children:"基础布局"}),`
`,n.jsx(e.p,{children:"使用列创建基础网格布局。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"Row"})," 和 ",n.jsx(e.code,{children:"Col"})," 组件，并通过 col 组件的 ",n.jsx(e.code,{children:"Span"})," 属性我们就可以自由地组合布局。"]}),`
`,n.jsx(I,{name:"LayoutBasic",children:n.jsx($y,{})}),`
`,n.jsx(e.h2,{children:"分栏间隔"}),`
`,n.jsx(e.p,{children:"支持列间距。"}),`
`,n.jsx(e.p,{children:"行提供 gutter 属性来指定列之间的间距，其默认值为0。"}),`
`,n.jsx(I,{name:"LayoutGutter",children:n.jsx(Uy,{})}),`
`,n.jsx(e.h2,{children:"混合布局"}),`
`,n.jsx(e.p,{children:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}),`
`,n.jsx(I,{name:"LayoutMix",children:n.jsx(Hy,{})}),`
`,n.jsx(e.h2,{children:"列偏移"}),`
`,n.jsx(e.p,{children:"您可以指定列偏移量。"}),`
`,n.jsxs(e.p,{children:["通过制定 col 组件的 ",n.jsx(e.code,{children:"offset"})," 属性可以指定分栏偏移的栏数。"]}),`
`,n.jsx(I,{name:"LayoutOffset",children:n.jsx(Wy,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"默认使用 flex 布局来对分栏进行灵活的对齐。"}),`
`,n.jsxs(e.p,{children:["您可以通过 ",n.jsx(e.code,{children:"justify"})," 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。"]}),`
`,n.jsx(I,{name:"LayoutJustify",children:n.jsx(Vy,{})}),`
`,n.jsx(e.h2,{children:"响应式布局"}),`
`,n.jsx(e.p,{children:"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"}),`
`,n.jsx(I,{name:"LayoutBootstrap",children:n.jsx(Xy,{})}),`
`,n.jsx(e.h2,{children:"基于断点的隐藏类"}),`
`,n.jsx(e.p,{children:"Element Plus 额外提供了一系列类名，用于在某些条件下隐藏元素。 这些类名可以添加在任何 DOM 元素或自定义组件上。 如果需要，请自行引入以下文件："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import 'element-plus/theme-chalk/display.css'
`})}),`
`,n.jsx(e.p,{children:"这些类名为："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"hidden-xs-only - 当视口在 xs 尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-sm-only - 当视口在 sm 尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-md-only - 当视口在 md 尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-lg-only - 当视口在 lg 尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏"}),`
`,n.jsx(e.li,{children:"hidden-xl-only - 当视口在 xl 尺寸时隐藏"}),`
`]}),`
`,n.jsx(e.h2,{children:"Row API"}),`
`,n.jsx(e.h3,{children:"Row Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"gutter"}),n.jsx(e.td,{children:"栅格间隔"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"justify"}),n.jsx(e.td,{children:"flex 布局下的水平排列方式"}),n.jsx(e.td,{children:"'start'  'end'  'center'  'space-around'  'space-between'  'space-evenly'"}),n.jsx(e.td,{children:"start"})]})]})]}),`
`,n.jsx(e.h2,{children:"Col API"}),`
`,n.jsx(e.h3,{children:"Col Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"span"}),n.jsx(e.td,{children:"栅格占据的列数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"offset"}),n.jsx(e.td,{children:"栅格左侧的间隔格数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xs"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"sm"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"md"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥992px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lg"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1200px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xl"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1920px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Qy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(dd,{...t})}):dd(t)}function Gy(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(Ee,{type:"primary",children:"primary"}),n.jsx(Ee,{type:"success",children:"success"}),n.jsx(Ee,{type:"warning",children:"warning"}),n.jsx(Ee,{type:"danger",children:"danger"}),n.jsx(Ee,{type:"info",children:"info"})]})})}function Ky(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{disabled:!0,children:"default"}),n.jsx(Ee,{type:"primary",disabled:!0,children:"primary"}),n.jsx(Ee,{type:"success",disabled:!0,children:"success"}),n.jsx(Ee,{type:"warning",disabled:!0,children:"warning"}),n.jsx(Ee,{type:"danger",disabled:!0,children:"danger"}),n.jsx(Ee,{type:"info",disabled:!0,children:"info"})]})})}function Yy(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{underline:!1,children:"Without Underline"}),n.jsx(Ee,{children:"With Underline"})]})})}function Zy(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{icon:n.jsx(ls,{}),children:"Edit"}),n.jsxs(Ee,{children:["Check",n.jsx(ss,{className:"el-icon--right"})]})]})})}function fd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(I,{name:"LinkBasic",children:n.jsx(Gy,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(I,{name:"LinkDisabled",children:n.jsx(Ky,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(I,{name:"LinkUnderline",children:n.jsx(Yy,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(I,{name:"LinkIcon",children:n.jsx(Zy,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Jy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fd,{...t})}):fd(t)}function qy(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"mx-1",children:"Default"}),n.jsx(Ke,{className:"mx-1",type:"primary",children:"Primary"}),n.jsx(Ke,{className:"mx-1",type:"success",children:"Success"}),n.jsx(Ke,{className:"mx-1",type:"info",children:"Info"}),n.jsx(Ke,{className:"mx-1",type:"warning",children:"Warning"}),n.jsx(Ke,{className:"mx-1",type:"danger",children:"Danger"})]})})}function e2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"mx-1",size:"large",children:"Large"}),n.jsx(Ke,{className:"mx-1",children:"Default"}),n.jsx(Ke,{className:"mx-1",size:"small",children:"Small"})]})})}function t2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),n.jsx(ue,{className:"w-150px mb-2",children:n.jsx(Ke,{truncated:!0,children:"Squeezed by parent element"})}),n.jsxs(Ke,{lineClamp:2,children:["The -webkit-line-clamp CSS property",n.jsx("br",{}),"allows limiting of the contents of",n.jsx("br",{}),"a block to the specified number of lines."]})]})})}function hd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Text"}),`
`,`
`,n.jsx(e.p,{children:"文本的常见操作"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,n.jsx(I,{name:"TextBasic",children:n.jsx(qy,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"})]}),`
`,n.jsx(I,{name:"TextSize",children:n.jsx(e2,{})}),`
`,n.jsx(e.h2,{children:"省略"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",n.jsx(e.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,n.jsx(I,{name:"TextTruncated",children:n.jsx(t2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"大小"}),n.jsx(e.td,{children:"'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"truncated"}),n.jsx(e.td,{children:"显示省略号"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lineClamp"}),n.jsx(e.td,{children:"最大行数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function n2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(hd,{...t})}):hd(t)}function r2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}})]})}function i2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,size:"large",activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,size:"small",activeText:"Open",inactiveText:"Close"})]})}function l2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,className:"mb-2",activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mb-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,inlinePrompt:!0,activeText:"是",inactiveText:"否"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Y",inactiveText:"N"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",width:60,inlinePrompt:!0,activeText:"超出省略",inactiveText:"超出省略"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"完整展示多个内容",inactiveText:"多个内容"})]})}function s2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeIcon:n.jsx(fi,{}),inactiveIcon:n.jsx(Bl,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mt-2",style:{marginLeft:"24px"},inlinePrompt:!0,activeIcon:n.jsx(fi,{className:"is-icon"}),inactiveIcon:n.jsx(Bl,{className:"is-icon"})})]})}function o2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,disabled:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2"})]})}function c2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,loading:!0}),n.jsx(me,{loading:!0,className:"ml-2"})]})}function a2(){const[t,e]=m.useState(!1),[r,i]=m.useState(!1);function l(){return e(!0),new Promise(o=>{setTimeout(()=>(e(!1),console.log("Switch success"),o(!0)),1e3)})}function s(){return i(!0),new Promise((o,c)=>{setTimeout(()=>(i(!1),console.log("Switch failed"),c(new Error("Error"))),1e3)})}return n.jsxs(n.Fragment,{children:[n.jsx(me,{loading:t,beforeChange:l}),n.jsx(me,{className:"ml-2",loading:r,beforeChange:s})]})}function u2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(ss,{}),inactiveActionIcon:n.jsx(ta,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-active-action",children:"T"})}),inactiveActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-inactive-action",children:"F"})})})]})}function pd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Switch 开关"}),`
`,`
`,n.jsx(e.p,{children:"表示两种相互对立的状态间的切换，多用于触发「开/关」。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。"}),`
`,n.jsx(I,{name:"SwitchBasic",children:n.jsx(r2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsx(I,{name:"SwitchSize",children:n.jsx(i2,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制文本是否显示在点内。"]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。"]}),`
`,n.jsx(I,{name:"SwitchText",children:n.jsx(l2,{})}),`
`,n.jsx(e.h2,{children:"显示自定义图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-icon"})," 和 ",n.jsx(e.code,{children:"active-icon"})," 属性来添加图标。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制图标显示在点内。"]}),`
`,n.jsx(I,{name:"SwitchIcon",children:n.jsx(s2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"disabled"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即可禁用。"]}),`
`,n.jsx(I,{name:"SwitchDisabled",children:n.jsx(o2,{})}),`
`,n.jsx(e.h2,{children:"加载状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"loading"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即加载中状态。"]}),`
`,n.jsx(I,{name:"SwitchLoading",children:n.jsx(c2,{})}),`
`,n.jsx(e.h2,{children:"阻止切换"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"beforeChange"}),"属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"]}),`
`,n.jsx(I,{name:"SwitchBeforeChange",children:n.jsx(a2,{})}),`
`,n.jsx(e.h2,{children:"自定义动作图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-action-icon"})," 和 ",n.jsx(e.code,{children:"active-action-icon"})," 属性来添加图标。"]}),`
`,n.jsx(I,{name:"SwitchActionIcon",children:n.jsx(u2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"defaultChecked"}),n.jsx(e.td,{children:"初始是否选中"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"switch 的大小"}),n.jsx(e.td,{children:"'large' / 'small'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"switch 的宽度"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inlinePrompt"}),n.jsx(e.td,{children:"无论图标或文本是否显示在点内，只会呈现文本的第一个字符"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeIcon"}),n.jsx(e.td,{children:"switch 状态为 on 时所显示图标，设置此项会忽略 activeText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveIcon"}),n.jsx(e.td,{children:"switch 状态为 off 时所显示图标，设置此项会忽略 inactiveText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeActionIcon"}),n.jsx(e.td,{children:"on状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveActionIcon"}),n.jsx(e.td,{children:"off状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeText"}),n.jsx(e.td,{children:"switch 打开时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveText"}),n.jsx(e.td,{children:"switch 的状态为 off 时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"beforeChange"}),n.jsx(e.td,{children:"switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"}),n.jsx(e.td,{children:"boolean / Function"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function d2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pd,{...t})}):pd(t)}function f2(){const t="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",e="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",r=["small","","large"],i=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{size:s,src:t})},o)),l=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:s,src:e})},o));return n.jsx(n.Fragment,{children:n.jsxs(ue,{className:"common-avatar",children:[n.jsxs(M,{span:12,children:[n.jsx("div",{className:"sub-title",children:"circle"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{size:50,src:t})}),i]})]}),n.jsxs(M,{span:12,children:[n.jsx("div",{className:"sub-title",children:"square"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:50,src:e})}),l]})]})]})})}function h2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-avatar",children:[n.jsx("div",{children:n.jsx(kt,{icon:n.jsx(gp,{})})}),n.jsx("div",{children:n.jsx(kt,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})}),n.jsx("div",{children:n.jsx(kt,{children:" user "})})]})})}function p2(){function t(){console.log("error")}return n.jsx(n.Fragment,{children:n.jsx("div",{className:"demo-type",children:n.jsx(kt,{size:60,src:"https://empty",onError:t,children:n.jsx("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"})})})})}function m2(){const t=["fill","contain","cover","none","scale-down"],e="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",r=t.map((i,l)=>n.jsxs("div",{className:"block",children:[n.jsx("span",{className:"title",children:i}),n.jsx(kt,{shape:"square",size:100,fit:i,src:e})]},l));return n.jsx(n.Fragment,{children:n.jsx("div",{className:"avatar-fit",children:r})})}function md(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Avatar 头像"}),`
`,`
`,n.jsx(e.p,{children:"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"shape"})," 和 ",n.jsx(e.code,{children:"size"})," 属性来设置 Avatar 的形状和大小。"]}),`
`,n.jsx(I,{name:"AvatarBasic",children:n.jsx(f2,{})}),`
`,n.jsx(e.h2,{children:"展示类型"}),`
`,n.jsx(e.p,{children:"支持使用图片，图标或者文字作为 Avatar。"}),`
`,n.jsx(I,{name:"AvatarType",children:n.jsx(h2,{})}),`
`,n.jsx(e.h2,{children:"回退行为"}),`
`,n.jsx(e.p,{children:"图片加载失败时的回退行为。"}),`
`,n.jsx(I,{name:"AvatarError",children:n.jsx(p2,{})}),`
`,n.jsx(e.h2,{children:"适应容器"}),`
`,n.jsx(e.p,{children:"当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致"}),`
`,n.jsx(I,{name:"AvatarFit",children:n.jsx(m2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"设置 Avatar 的图标类型，具体参考 Icon 组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Avatar 大小"}),n.jsx(e.td,{children:"number / 'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"shape"}),n.jsx(e.td,{children:"Avatar 形状"}),n.jsx(e.td,{children:"'circle' / 'square'"}),n.jsx(e.td,{children:"circle"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"Avatar 图片的源地址"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"fit"}),n.jsx(e.td,{children:"当展示类型为图片的时候，设置图片如何适应容器"}),n.jsx(e.td,{children:"'fill' / 'contain' / 'cover' / 'none' / 'scale-down'"}),n.jsx(e.td,{children:"cover"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"error"}),n.jsx(e.td,{children:"图片加载失败时触发"}),n.jsx(e.td,{children:"() => void"})]})})]})]})}function x2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(md,{...t})}):md(t)}function g2(){return n.jsx(n.Fragment,{children:n.jsxs(yp,{children:[n.jsxs(Pr,{title:"Consistency",name:"1",children:[n.jsx("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),n.jsx("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]}),n.jsxs(Pr,{title:"Feedback",name:"2",children:[n.jsx("div",{children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"}),n.jsx("div",{children:"Visual feedback: reflect current state by updating or rearranging elements of the page."})]}),n.jsxs(Pr,{title:"Efficiency",name:"3",children:[n.jsx("div",{children:"Simplify the process: keep operating process simple and intuitive;"}),n.jsx("div",{children:"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"}),n.jsx("div",{children:"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."})]}),n.jsxs(Pr,{title:"Controllability",name:"4",children:[n.jsx("div",{children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"}),n.jsx("div",{children:"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})]})})}function xd(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Collapse 折叠面板"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可同时展开多个面板，面板之间不影响"}),`
`,n.jsx(I,{name:"CollapseBasic",children:n.jsx(g2,{})})]})}function v2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xd,{...t})}):xd(t)}function j2(){function t(e){return e===100?"Full":`${e}%`}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(Ct,{percentage:50}),n.jsx(Ct,{percentage:100,format:t}),n.jsx(Ct,{percentage:100,status:"success"}),n.jsx(Ct,{percentage:100,status:"warning"}),n.jsx(Ct,{percentage:50,status:"exception"})]})})}function y2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(Ct,{textInside:!0,strokeWidth:26,percentage:70}),n.jsx(Ct,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),n.jsx(Ct,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),n.jsx(Ct,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function gd(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Progress 进度条"}),`
`,`
`,n.jsx(e.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,n.jsx(e.h2,{children:"直线进度条"}),`
`,n.jsxs(e.p,{children:["Progress 组件设置 ",n.jsx(e.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",n.jsx(e.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",n.jsx(e.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,n.jsx(I,{name:"ProgressBasic",children:n.jsx(j2,{})}),`
`,n.jsx(e.h2,{children:"进度条内显示百分比标识"}),`
`,n.jsx(e.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,n.jsxs(e.p,{children:["Progress 组件可通过 ",n.jsx(e.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",n.jsx(e.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,n.jsx(I,{name:"ProgressTextInside",children:n.jsx(y2,{})})]})}function w2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gd,{...t})}):gd(t)}function C2(){return n.jsx(n.Fragment,{children:n.jsxs(ue,{children:[n.jsx(M,{sm:12,lg:6,children:n.jsx(Yn,{icon:"success",title:"Success Tip",subTitle:"Please follow the instructions",extra:n.jsx(R,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(Yn,{icon:"warning",title:"Warning Tip",subTitle:"Please follow the instructions",extra:n.jsx(R,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(Yn,{icon:"error",title:"Error Tip",subTitle:"Please follow the instructions",extra:n.jsx(R,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(Yn,{icon:"info",title:"Info Tip",subTitle:n.jsx("p",{children:"Using slot as subtitle"}),extra:n.jsx(R,{type:"primary",children:"Back"})})})]})})}function k2(){return n.jsx(n.Fragment,{children:n.jsx(Yn,{icon:n.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),title:"404",subTitle:"Sorry, request error",extra:n.jsx(R,{type:"primary",children:"Back"})})})}function vd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Result 结果"}),`
`,`
`,n.jsx(e.p,{children:"用于对用户的操作结果或者异常状态做反馈。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(I,{name:"ResultBasic",children:n.jsx(C2,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(I,{name:"ResultIcon",children:n.jsx(k2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"result 组件的图标类型"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error' / ReactNode"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"result 组件的标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"subTitle"}),n.jsx(e.td,{children:"result 组件的副标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"extra"}),n.jsx(e.td,{children:"内容额外区域的内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"ReactNode"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function _2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vd,{...t})}):vd(t)}function N2(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success"}),n.jsx(se,{title:"info alert",type:"info"}),n.jsx(se,{title:"warning alert",type:"warning"}),n.jsx(se,{title:"error alert",type:"error"})]})}function S2(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",effect:"dark"}),n.jsx(se,{title:"info alert",type:"info",effect:"dark"}),n.jsx(se,{title:"warning alert",type:"warning",effect:"dark"}),n.jsx(se,{title:"error alert",type:"error",effect:"dark"})]})}function E2(){function t(){alert("Hello World!")}return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"unclosable alert",type:"success",closable:!1}),n.jsx(se,{title:"customized close-text",type:"info",closeText:"Gotcha"}),n.jsx(se,{title:"alert with callback",type:"warning",close:t})]})}function b2(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",showIcon:!0}),n.jsx(se,{title:"info alert",type:"info",showIcon:!0}),n.jsx(se,{title:"warning alert",type:"warning",showIcon:!0}),n.jsx(se,{title:"error alert",type:"error",showIcon:!0})]})}function T2(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",center:!0,showIcon:!0}),n.jsx(se,{title:"info alert",type:"info",center:!0,showIcon:!0}),n.jsx(se,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),n.jsx(se,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function R2(){return n.jsx(n.Fragment,{children:n.jsx(se,{title:"with description",type:"success",description:"This is a description."})})}function L2(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),n.jsx(se,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),n.jsx(se,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),n.jsx(se,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function jd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alert 提示"}),`
`,`
`,n.jsx(e.p,{children:"用于页面中展示重要的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供四种类型，由 ",n.jsx(e.code,{children:"type"})," 属性指定，默认值为 ",n.jsx(e.code,{children:"info"}),"。"]}),`
`,n.jsx(I,{name:"AlertBasic",children:n.jsx(N2,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供了两个不同的主题：",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"dark"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(I,{name:"AlertEffect",children:n.jsx(S2,{})}),`
`,n.jsx(e.h2,{children:"自定义关闭按钮"}),`
`,n.jsx(e.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,n.jsxs(e.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",n.jsx(e.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，默认为 ",n.jsx(e.code,{children:"false"}),"。 你可以设置 ",n.jsx(e.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",n.jsx(e.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(I,{name:"AlertClose",children:n.jsx(E2,{})}),`
`,n.jsx(e.h2,{children:"使用图标"}),`
`,n.jsx(e.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,n.jsx(I,{name:"AlertShowIcon",children:n.jsx(b2,{})}),`
`,n.jsx(e.h2,{children:"文字居中"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,n.jsx(I,{name:"AlertCenter",children:n.jsx(T2,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsx(e.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,n.jsxs(e.p,{children:["除了必填的 ",n.jsx(e.code,{children:"title"})," 属性外，你可以设置 ",n.jsx(e.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,n.jsx(I,{name:"AlertDescription",children:n.jsx(R2,{})}),`
`,n.jsx(e.h2,{children:"带图标和描述"}),`
`,n.jsx(e.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,n.jsx(I,{name:"AlertIconDescription",children:n.jsx(L2,{})}),`
`,n.jsx(e.h2,{children:"Alert API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Alert 标题。"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Alert 类型。"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error'"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"description"}),n.jsx(e.td,{children:"描述性文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可以关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"center"}),n.jsx(e.td,{children:"文字是否居中"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closeText"}),n.jsx(e.td,{children:"自定义关闭按钮文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showIcon"}),n.jsx(e.td,{children:"是否显示类型图标"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"主题样式"}),n.jsx(e.td,{children:"'light' / 'dark'"}),n.jsx(e.td,{children:"light"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"close"}),n.jsx(e.td,{children:"关闭 Alert 时触发的事件"}),n.jsx(e.td,{children:"(event: MouseEvent) => void"})]})})]})]})}function P2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(jd,{...t})}):jd(t)}function B2(){return n.jsx(n.Fragment,{children:n.jsx(fs,{title:"Are you sure to delete this?",children:n.jsx(R,{children:"Delete"})})})}function A2(){return n.jsx(n.Fragment,{children:n.jsx(fs,{width:220,confirmButtonText:"OK",cancelButtonText:"No, Thanks",icon:n.jsx(Ci,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",children:n.jsx(R,{children:"Delete"})})})}function M2(){function t(){console.log("confirm!")}function e(){console.log("cancel!")}return n.jsx(n.Fragment,{children:n.jsx(fs,{confirmButtonText:"Yes",cancelButtonText:"No",icon:n.jsx(Ci,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:t,onCancel:e,children:n.jsx(R,{children:"Delete"})})})}function yd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popconfirm 气泡确认框"}),`
`,`
`,n.jsx(e.p,{children:"点击某个元素弹出一个简单的气泡确认框"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。"}),`
`,n.jsx(I,{name:"PopconfirmBasic",children:n.jsx(B2,{})}),`
`,n.jsx(e.h2,{children:"自定义弹出框的内容"}),`
`,n.jsx(e.p,{children:"可以在 Popconfirm 中自定义内容。"}),`
`,n.jsx(I,{name:"PopconfirmIcon",children:n.jsx(A2,{})}),`
`,n.jsx(e.h2,{children:"多种让 Popconfirm 出现的方法"}),`
`,n.jsx(e.p,{children:"点击按钮触发事件"}),`
`,n.jsx(I,{name:"PopconfirmEvent",children:n.jsx(M2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"标题"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"confirmButtonText"}),n.jsx(e.td,{children:"确认按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"cancelButtonText"}),n.jsx(e.td,{children:"取消按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"自定义图标"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"QuestionFilled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"iconColor"}),n.jsx(e.td,{children:"Icon 颜色"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"#f90"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideIcon"}),n.jsx(e.td,{children:"是否隐藏 Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"弹层宽度，最小宽度 150px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"number"})]}),n.jsx(e.td,{children:"150"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"事件名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onConfirm"}),n.jsx(e.td,{children:"点击确认按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onCancel"}),n.jsx(e.td,{children:"点击取消按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]})]})]})]})}function I2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yd,{...t})}):yd(t)}function D2(){return n.jsxs(n.Fragment,{children:[n.jsx(Ar,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"Hover to activate"})}),n.jsx(Ar,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"Click to activate"})}),n.jsx(Ar,{placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"Focus to activate"})}),n.jsx(Ar,{title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"contextmenu to activate"})})]})}function wd(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popover 气泡卡片"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"trigger"})," 属性被用来决定 ",n.jsx(e.code,{children:"popover"})," 的触发方式，支持的触发方式： ",n.jsx(e.code,{children:"hover"}),"、",n.jsx(e.code,{children:"click"}),"、",n.jsx(e.code,{children:"focus"})," 或 ",n.jsx(e.code,{children:"contextmenu"}),"。 如果你想手动控制它，可以设置 ",n.jsx(e.code,{children:":visible"})," 属性。"]}),`
`,n.jsx(I,{name:"PopoverBasic",children:n.jsx(D2,{})})]})}function F2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wd,{...t})}):wd(t)}function O2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-tooltip",children:[n.jsxs("div",{className:"row center",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start",children:n.jsx(R,{children:"top-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top",children:n.jsx(R,{children:"top"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end",children:n.jsx(R,{children:"top-end"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start",children:n.jsx(R,{children:"left-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start",children:n.jsx(R,{children:"right-start"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left",children:n.jsx(R,{className:"mt-3 mb-3",children:"left"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right",children:n.jsx(R,{children:"right"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end",children:n.jsx(R,{children:"left-end"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end",children:n.jsx(R,{children:"right-end"})})]}),n.jsxs("div",{className:"row center",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start",children:n.jsx(R,{children:"bottom-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom",children:n.jsx(R,{children:"bottom"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end",children:n.jsx(R,{children:"bottom-end"})})]})]})})}function z2(){return n.jsxs(n.Fragment,{children:[n.jsx(we,{content:"Top center",placement:"top",children:n.jsx(R,{children:"Dark"})}),n.jsx(we,{content:"Bottom center",placement:"bottom",effect:"light",children:n.jsx(R,{children:"Light"})}),n.jsx(we,{content:"Bottom center",effect:"customized",children:n.jsx(R,{children:"Customized theme"})})]})}function $2(){return n.jsx(n.Fragment,{children:n.jsx(we,{placement:"top",content:n.jsxs(n.Fragment,{children:["multiple lines",n.jsx("br",{}),"second line"]}),children:n.jsx(R,{children:"Top center"})})})}function U2(){const[t,e]=m.useState(!0);function r(){e(!t)}return n.jsx(n.Fragment,{children:n.jsx(we,{disabled:t,content:"click to close tooltip function",placement:"bottom",effect:"light",children:n.jsxs(R,{onClick:r,children:["click to ",t?"active":"close"," tooltip function"]})})})}function Cd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tooltip 文字提示"}),`
`,`
`,n.jsx(e.p,{children:"常用于展示鼠标 hover 时的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"content"})," 属性来决定 ",n.jsx(e.code,{children:"hover"})," 时的提示信息。 由 ",n.jsx(e.code,{children:"placement"})," 属性决定展示效果： ",n.jsx(e.code,{children:"placement"}),"属性值为：[方向]-[对齐位置]；四个方向：",n.jsx(e.code,{children:"top"}),"、",n.jsx(e.code,{children:"left"}),"、",n.jsx(e.code,{children:"right"}),"、",n.jsx(e.code,{children:"bottom"}),"；三种对齐位置：",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"end"}),'，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。']}),`
`,n.jsx(I,{name:"TooltipBasic",children:n.jsx(O2,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tooltip 组件内置了两个主题：",n.jsx(e.code,{children:"dark"}),"和",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 来修改主题，默认值为 ",n.jsx(e.code,{children:"dark"}),"."]}),`
`,n.jsx(I,{name:"TooltipEffect",children:n.jsx(z2,{})}),`
`,n.jsx(e.h2,{children:"更多内容的文字提示"}),`
`,n.jsx(e.p,{children:"展示多行文本或者是设置文本内容的格式"}),`
`,n.jsx(I,{name:"TooltipContent",children:n.jsx($2,{})}),`
`,n.jsx(e.h2,{children:"高级扩展"}),`
`,n.jsx(e.p,{children:"除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："}),`
`,n.jsxs(e.p,{children:["如果需要关闭 ",n.jsx(e.code,{children:"tooltip"})," 功能，",n.jsx(e.code,{children:"disabled"})," 属性可以满足这个需求， 你只需要将其设置为 ",n.jsx(e.code,{children:"true"}),"。"]}),`
`,n.jsx(I,{name:"TooltipDisabled",children:n.jsx(U2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tooltip 主题，内置了 dark / light 两种"}),n.jsx(e.td,{children:"'dark' / 'light'"}),n.jsx(e.td,{children:"dark"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"显示的内容"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"placement"}),n.jsx(e.td,{children:"Tooltip 组件出现的位置"}),n.jsx(e.td,{children:"'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'"}),n.jsx(e.td,{children:"bottom"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showAfter"}),n.jsx(e.td,{children:"在触发后多久显示内容，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideAfter"}),n.jsx(e.td,{children:"延迟关闭，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"200"})]})]})]})]})}function H2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cd,{...t})}):Cd(t)}function W2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes."}),n.jsx(St,{}),n.jsx("span",{children:"There little thoughts are the rustle of leaves; they have their whisper of joy in my mind."})]})})}function V2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"What you are you do not see, what you see is your shadow. "}),n.jsx(St,{contentPosition:"left",children:"Rabindranath Tagore"}),n.jsx("span",{children:"My wishes are fools, they shout across thy song, my Master. Let me but listen."}),n.jsx(St,{children:n.jsx(qc,{})}),n.jsx("span",{children:"I cannot choose the best. The best chooses me."}),n.jsx(St,{contentPosition:"right",children:"Rabindranath Tagore"})]})})}function X2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"What language is thine, O sea?"}),n.jsx(St,{borderStyle:"dashed"}),n.jsx("span",{children:"The language of eternal question."})]}),n.jsx(St,{borderStyle:"dotted"}),n.jsx("span",{children:"What language is thy answer, O sky?"}),n.jsx(St,{borderStyle:"double"}),n.jsx("span",{children:"The language of eternal silence."})]})}function Q2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"Rain"}),n.jsx(St,{direction:"vertical"}),n.jsx("span",{children:"Home"}),n.jsx(St,{direction:"vertical","border-style":"dashed"}),n.jsx("span",{children:"Grass"})]})})}function kd(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Divider 分割线"}),`
`,`
`,n.jsx(e.p,{children:"区隔内容的分割线。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"对不同段落的文本进行分割。"}),`
`,n.jsx(I,{name:"DividerBasic",children:n.jsx(W2,{})}),`
`,n.jsx(e.h2,{children:"设置文案"}),`
`,n.jsx(e.p,{children:"可以在分割线上自定义文本内容。"}),`
`,n.jsx(I,{name:"DividerContent",children:n.jsx(V2,{})}),`
`,n.jsx(e.h2,{children:"虚线"}),`
`,n.jsx(e.p,{children:"您可以设置分隔符的样式。"}),`
`,n.jsx(I,{name:"DividerBorder",children:n.jsx(X2,{})}),`
`,n.jsx(e.h2,{children:"垂直分隔线"}),`
`,n.jsx(I,{name:"DividerDirection",children:n.jsx(Q2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"设置分割线方向"}),n.jsx(e.td,{children:"'horizontal' / 'vertical'"}),n.jsx(e.td,{children:"horizontal"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border-style"}),n.jsx(e.td,{children:"设置分隔符样式"}),n.jsx(e.td,{children:"'none' / 'solid' / 'hidden' / 'dashed' / ...(css/border-style)"}),n.jsx(e.td,{children:"solid"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content-position"}),n.jsx(e.td,{children:"自定义分隔线内容的位置"}),n.jsx(e.td,{children:"'left' / 'right' / 'center'"}),n.jsx(e.td,{children:"center"})]})]})]})]})}function G2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(kd,{...t})}):kd(t)}function K2({name:t}){let e;switch(t){case"button":e=n.jsx(Ry,{});break;case"container":e=n.jsx(Fy,{});break;case"icon":e=n.jsx(zy,{});break;case"layout":e=n.jsx(Qy,{});break;case"link":e=n.jsx(Jy,{});break;case"text":e=n.jsx(n2,{});break;case"switch":e=n.jsx(d2,{});break;case"avatar":e=n.jsx(x2,{});break;case"collapse":e=n.jsx(v2,{});break;case"progress":e=n.jsx(w2,{});break;case"result":e=n.jsx(_2,{});break;case"alert":e=n.jsx(P2,{});break;case"popconfirm":e=n.jsx(I2,{});break;case"popover":e=n.jsx(F2,{});break;case"tooltip":e=n.jsx(H2,{});break;case"divider":e=n.jsx(G2,{});break}return e}function Me({name:t}){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(K2,{name:t})})})}function _d(t){const e={h1:"h1",...t.components};return n.jsx(e.h1,{children:"Border 边框"})}function Y2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_d,{...t})}):_d(t)}function Z2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(Y2,{})})})}function J2(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"Basic 基础组件"}),n.jsx(te,{to:"button",children:"Button 按钮"}),n.jsx(te,{to:"border",children:"Border 边框"}),n.jsx(te,{to:"container",children:"Container 布局容器"}),n.jsx(te,{to:"icon",children:"Icon 图标"}),n.jsx(te,{to:"layout",children:"Layout 布局"}),n.jsx(te,{to:"link",children:"Link 链接"}),n.jsx(te,{to:"text",children:"Text 文本"}),n.jsx("p",{className:"sidebar-group__title",children:"Form 表单组件"}),n.jsx(te,{to:"switch",children:"Switch 开关"}),n.jsx("p",{className:"sidebar-group__title",children:"Data 数据展示"}),n.jsx(te,{to:"avatar",children:"Avatar 头像"}),n.jsx(te,{to:"collapse",children:"Collapse 折叠面板"}),n.jsx(te,{to:"progress",children:"Progress 进度条"}),n.jsx(te,{to:"result",children:"Result 结果"}),n.jsx("p",{className:"sidebar-group__title",children:"Feedback 反馈组件"}),n.jsx(te,{to:"alert",children:"Alert 提示"}),n.jsx(te,{to:"popconfirm",children:"Popconfirm 气泡确认框"}),n.jsx(te,{to:"popover",children:"Popover 气泡卡片"}),n.jsx(te,{to:"tooltip",children:"Tooltip 文字提示"}),n.jsx("p",{className:"sidebar-group__title",children:"Others 其他"}),n.jsx(te,{to:"divider",children:"Divider 分割线"})]})})}),n.jsx("main",{className:"page-content",children:n.jsxs(rs,{children:[n.jsx(Z,{path:"button",element:n.jsx(Me,{name:"button"})}),n.jsx(Z,{path:"border",element:n.jsx(Z2,{})}),n.jsx(Z,{path:"container",element:n.jsx(Me,{name:"container"})}),n.jsx(Z,{path:"icon",element:n.jsx(Me,{name:"icon"})}),n.jsx(Z,{path:"layout",element:n.jsx(Me,{name:"layout"})}),n.jsx(Z,{path:"link",element:n.jsx(Me,{name:"link"})}),n.jsx(Z,{path:"text",element:n.jsx(Me,{name:"text"})}),n.jsx(Z,{path:"switch",element:n.jsx(Me,{name:"switch"})}),n.jsx(Z,{path:"avatar",element:n.jsx(Me,{name:"avatar"})}),n.jsx(Z,{path:"collapse",element:n.jsx(Me,{name:"collapse"})}),n.jsx(Z,{path:"progress",element:n.jsx(Me,{name:"progress"})}),n.jsx(Z,{path:"result",element:n.jsx(Me,{name:"result"})}),n.jsx(Z,{path:"alert",element:n.jsx(Me,{name:"alert"})}),n.jsx(Z,{path:"popconfirm",element:n.jsx(Me,{name:"popconfirm"})}),n.jsx(Z,{path:"popover",element:n.jsx(Me,{name:"popover"})}),n.jsx(Z,{path:"tooltip",element:n.jsx(Me,{name:"tooltip"})}),n.jsx(Z,{path:"divider",element:n.jsx(Me,{name:"divider"})})]})})]})}const q2="/pelement-react/assets/build-error-001-HBI716zv.jpg",ew="/pelement-react/assets/build-error-002-fg75_WyZ.jpg";function Nd(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错：Could not find a declaration file for module 'pelement-react'."}),`
`,n.jsx(e.p,{children:"引入pelement-react，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:q2,alt:"build-error-001"}),`
`,n.jsx(e.p,{children:"错误代码"}),`
`,n.jsx(e.p,{children:`example/pages/component/button/Button.tsx:2:24 - error TS7016: Could not find a declaration file for module 'pelement-react'. 'D:/work/pelement-react/node_modules/.pnpm/file+pelement-react-0.0.1-alpha.0.tgz/node_modules/pelement-react/dist/pelement-react.js' implicitly has an 'any' type.\r
There are types at 'D:/work/pelement-react/node_modules/pelement-react/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'pelement-react' library may need to update its package.json or typings.`}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"修改tsconfig.json文件，追加以下内容"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`"noImplicitAny": false,\r
"allowJs": true
`})}),`
`,n.jsx("img",{src:ew,alt:"build-error-002"})]})}function tw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nd,{...t})}):Nd(t)}const nw="/pelement-react/assets/cannot-find-module-001-IO4IuqQz.jpg",rw="/pelement-react/assets/cannot-find-module-002-GS1tM54Y.jpg";function Sd(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错： Cannot find module '../../../packages/Button/index.zh-CN.mdx' or its corresponding type declarations."}),`
`,n.jsx(e.p,{children:"引入mdx，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:nw,alt:"cannot-find-module-001"}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"在src/vite-env.d.ts文件中添加"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`declare module '*.mdx' {\r
  const mdx: string;\r
  export default mdx;\r
}
`})}),`
`,n.jsx("img",{src:rw,alt:"cannot-find-module-002"})]})}function iw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Sd,{...t})}):Sd(t)}function lw(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx(te,{to:"build-error",children:"buile error"}),n.jsx(te,{to:"cannot-find-module",children:"cannot-find-module"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsxs(rs,{children:[n.jsx(Z,{path:"build-error",element:n.jsx(tw,{})}),n.jsx(Z,{path:"cannot-find-module",element:n.jsx(iw,{})})]})})})]})}function sw(){return n.jsx(n.Fragment,{children:n.jsxs(rs,{children:[n.jsx(Z,{path:"/",element:n.jsx(Hi,{to:"/component/button"})}),n.jsx(Z,{path:"home",element:n.jsx(y0,{})}),n.jsx(Z,{path:"guide",element:n.jsx(Hi,{to:"changelog"})}),n.jsx(Z,{path:"guide/*",element:n.jsx(_0,{})}),n.jsx(Z,{path:"component",element:n.jsx(Hi,{to:"button"})}),n.jsx(Z,{path:"component/*",element:n.jsx(J2,{})}),n.jsx(Z,{path:"blog",element:n.jsx(Hi,{to:"build-error"})}),n.jsx(Z,{path:"blog/*",element:n.jsx(lw,{})})]})})}function ow(){return n.jsx(n.Fragment,{children:n.jsx("header",{className:"navbar",children:n.jsx("div",{className:"navbar-wrapper",children:n.jsxs("div",{className:"header-container",children:[n.jsx("div",{className:"logo-container",children:n.jsxs(te,{to:"/home",children:[n.jsx("img",{src:ep,alt:"pelement-react"}),"pelement-react"]})}),n.jsxs("div",{className:"content",children:[n.jsxs("nav",{className:"navbar-menu menu",children:[n.jsx(te,{className:"link-item link is-menu-link",to:"guide",children:"指南"}),n.jsx(te,{className:"link-item link is-menu-link",to:"component",children:"组件"}),n.jsx(te,{className:"link-item link is-menu-link",to:"blog",children:"博客"})]}),n.jsx("div",{className:"social-links",children:n.jsx("a",{href:"https://github.com/pelement-react/pelement-react",title:"GitHub",target:"_blank",rel:"noreferrer noopener",className:"social-link",children:n.jsx("i",{className:"el-icon",style:{fontSize:"24px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-6c8d2bba":"",children:n.jsx("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})})})})})]})]})})})})}function cw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"App",children:[n.jsx(ow,{}),n.jsx(sw,{})]})})}Qs.createRoot(document.getElementById("root")).render(n.jsx(Dd.StrictMode,{children:n.jsx(p0,{children:n.jsx(cw,{})})}));
