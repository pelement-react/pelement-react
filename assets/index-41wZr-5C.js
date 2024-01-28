function Jp(t,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in t)){const s=Object.getOwnPropertyDescriptor(i,l);s&&Object.defineProperty(t,l,s.get?s:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();function bd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rd={exports:{}},Fl={},Ld={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),qp=Symbol.for("react.portal"),em=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),im=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),om=Symbol.for("react.memo"),am=Symbol.for("react.lazy"),wc=Symbol.iterator;function cm(t){return t===null||typeof t!="object"?null:(t=wc&&t[wc]||t["@@iterator"],typeof t=="function"?t:null)}var Pd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bd=Object.assign,Ad={};function xr(t,e,r){this.props=t,this.context=e,this.refs=Ad,this.updater=r||Pd}xr.prototype.isReactComponent={};xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Md(){}Md.prototype=xr.prototype;function Go(t,e,r){this.props=t,this.context=e,this.refs=Ad,this.updater=r||Pd}var Ko=Go.prototype=new Md;Ko.constructor=Go;Bd(Ko,xr.prototype);Ko.isPureReactComponent=!0;var Cc=Array.isArray,Id=Object.prototype.hasOwnProperty,Yo={current:null},Dd={key:!0,ref:!0,__self:!0,__source:!0};function Fd(t,e,r){var i,l={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Id.call(e,i)&&!Dd.hasOwnProperty(i)&&(l[i]=e[i]);var a=arguments.length-2;if(a===1)l.children=r;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];l.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)l[i]===void 0&&(l[i]=a[i]);return{$$typeof:ji,type:t,key:s,ref:o,props:l,_owner:Yo.current}}function um(t,e){return{$$typeof:ji,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zo(t){return typeof t=="object"&&t!==null&&t.$$typeof===ji}function dm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var _c=/\/+/g;function gs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dm(""+t.key):e.toString(36)}function Gi(t,e,r,i,l){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ji:case qp:o=!0}}if(o)return o=t,l=l(o),t=i===""?"."+gs(o,0):i,Cc(l)?(r="",t!=null&&(r=t.replace(_c,"$&/")+"/"),Gi(l,e,r,"",function(u){return u})):l!=null&&(Zo(l)&&(l=um(l,r+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(_c,"$&/")+"/")+t)),e.push(l)),1;if(o=0,i=i===""?".":i+":",Cc(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+gs(s,a);o+=Gi(s,e,r,c,l)}else if(c=cm(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+gs(s,a++),o+=Gi(s,e,r,c,l);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ti(t,e,r){if(t==null)return t;var i=[],l=0;return Gi(t,i,"","",function(s){return e.call(r,s,l++)}),i}function fm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},Ki={transition:null},hm={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:Yo};G.Children={map:Ti,forEach:function(t,e,r){Ti(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ti(t,function(){e++}),e},toArray:function(t){return Ti(t,function(e){return e})||[]},only:function(t){if(!Zo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=xr;G.Fragment=em;G.Profiler=nm;G.PureComponent=Go;G.StrictMode=tm;G.Suspense=sm;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;G.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bd({},t.props),l=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yo.current),e.key!==void 0&&(l=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Id.call(e,c)&&!Dd.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ji,type:t.type,key:l,ref:s,props:i,_owner:o}};G.createContext=function(t){return t={$$typeof:im,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rm,_context:t},t.Consumer=t};G.createElement=Fd;G.createFactory=function(t){var e=Fd.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:lm,render:t}};G.isValidElement=Zo;G.lazy=function(t){return{$$typeof:am,_payload:{_status:-1,_result:t},_init:fm}};G.memo=function(t,e){return{$$typeof:om,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Ki.transition;Ki.transition={};try{t()}finally{Ki.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return $e.current.useCallback(t,e)};G.useContext=function(t){return $e.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};G.useEffect=function(t,e){return $e.current.useEffect(t,e)};G.useId=function(){return $e.current.useId()};G.useImperativeHandle=function(t,e,r){return $e.current.useImperativeHandle(t,e,r)};G.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return $e.current.useMemo(t,e)};G.useReducer=function(t,e,r){return $e.current.useReducer(t,e,r)};G.useRef=function(t){return $e.current.useRef(t)};G.useState=function(t){return $e.current.useState(t)};G.useSyncExternalStore=function(t,e,r){return $e.current.useSyncExternalStore(t,e,r)};G.useTransition=function(){return $e.current.useTransition()};G.version="18.2.0";Ld.exports=G;var m=Ld.exports;const Od=bd(m),Jo=Jp({__proto__:null,default:Od},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=m,mm=Symbol.for("react.element"),xm=Symbol.for("react.fragment"),gm=Object.prototype.hasOwnProperty,jm=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function zd(t,e,r){var i,l={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gm.call(e,i)&&!vm.hasOwnProperty(i)&&(l[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)l[i]===void 0&&(l[i]=e[i]);return{$$typeof:mm,type:t,key:s,ref:o,props:l,_owner:jm.current}}Fl.Fragment=xm;Fl.jsx=zd;Fl.jsxs=zd;Rd.exports=Fl;var n=Rd.exports,Gs={},$d={exports:{}},nt={},Ud={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,b){var B=C.length;C.push(b);e:for(;0<B;){var $=B-1>>>1,K=C[$];if(0<l(K,b))C[$]=b,C[B]=K,B=$;else break e}}function r(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var b=C[0],B=C.pop();if(B!==b){C[0]=B;e:for(var $=0,K=C.length,Be=K>>>1;$<Be;){var it=2*($+1)-1,Ne=C[it],we=it+1,mn=C[we];if(0>l(Ne,B))we<K&&0>l(mn,Ne)?(C[$]=mn,C[we]=B,$=we):(C[$]=Ne,C[it]=B,$=it);else if(we<K&&0>l(mn,B))C[$]=mn,C[we]=B,$=we;else break e}}return b}function l(C,b){var B=C.sortIndex-b.sortIndex;return B!==0?B:C.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,p=null,x=3,j=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var b=r(u);b!==null;){if(b.callback===null)i(u);else if(b.startTime<=C)i(u),b.sortIndex=b.expirationTime,e(c,b);else break;b=r(u)}}function w(C){if(y=!1,g(C),!v)if(r(c)!==null)v=!0,W(_);else{var b=r(u);b!==null&&N(w,b.startTime-C)}}function _(C,b){v=!1,y&&(y=!1,h(L),L=-1),j=!0;var B=x;try{for(g(b),p=r(c);p!==null&&(!(p.expirationTime>b)||C&&!Q());){var $=p.callback;if(typeof $=="function"){p.callback=null,x=p.priorityLevel;var K=$(p.expirationTime<=b);b=t.unstable_now(),typeof K=="function"?p.callback=K:p===r(c)&&i(c),g(b)}else i(c);p=r(c)}if(p!==null)var Be=!0;else{var it=r(u);it!==null&&N(w,it.startTime-b),Be=!1}return Be}finally{p=null,x=B,j=!1}}var S=!1,E=null,L=-1,z=5,D=-1;function Q(){return!(t.unstable_now()-D<z)}function ee(){if(E!==null){var C=t.unstable_now();D=C;var b=!0;try{b=E(!0,C)}finally{b?ce():(S=!1,E=null)}}else S=!1}var ce;if(typeof f=="function")ce=function(){f(ee)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=ee,ce=function(){H.postMessage(null)}}else ce=function(){k(ee,0)};function W(C){E=C,S||(S=!0,ce())}function N(C,b){L=k(function(){C(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){v||j||(v=!0,W(_))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(C){switch(x){case 1:case 2:case 3:var b=3;break;default:b=x}var B=x;x=b;try{return C()}finally{x=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,b){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var B=x;x=C;try{return b()}finally{x=B}},t.unstable_scheduleCallback=function(C,b,B){var $=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=B+K,C={id:d++,callback:b,priorityLevel:C,startTime:B,expirationTime:K,sortIndex:-1},B>$?(C.sortIndex=B,e(u,C),r(c)===null&&C===r(u)&&(y?(h(L),L=-1):y=!0,N(w,B-$))):(C.sortIndex=K,e(c,C),v||j||(v=!0,W(_))),C},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(C){var b=x;return function(){var B=x;x=b;try{return C.apply(this,arguments)}finally{x=B}}}})(Hd);Ud.exports=Hd;var ym=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=m,et=ym;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vd=new Set,Xr={};function Pn(t,e){lr(t,e),lr(t+"Capture",e)}function lr(t,e){for(Xr[t]=e,t=0;t<e.length;t++)Vd.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=Object.prototype.hasOwnProperty,wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Nc={};function Cm(t){return Ks.call(Nc,t)?!0:Ks.call(kc,t)?!1:wm.test(t)?Nc[t]=!0:(kc[t]=!0,!1)}function _m(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function km(t,e,r,i){if(e===null||typeof e>"u"||_m(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,r,i,l,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function ea(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qo,ea);Pe[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qo,ea);Pe[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qo,ea);Pe[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function ta(t,e,r,i){var l=Pe.hasOwnProperty(e)?Pe[e]:null;(l!==null?l.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(km(e,r,l,i)&&(r=null),i||l===null?Cm(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):l.mustUseProperty?t[l.propertyName]=r===null?l.type===3?!1:"":r:(e=l.attributeName,i=l.attributeNamespace,r===null?t.removeAttribute(e):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Ft=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bi=Symbol.for("react.element"),On=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),na=Symbol.for("react.strict_mode"),Ys=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),ra=Symbol.for("react.forward_ref"),Zs=Symbol.for("react.suspense"),Js=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Gd=Symbol.for("react.offscreen"),Sc=Symbol.iterator;function Cr(t){return t===null||typeof t!="object"?null:(t=Sc&&t[Sc]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,js;function Rr(t){if(js===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);js=e&&e[1]||""}return`
`+js+t}var vs=!1;function ys(t,e){if(!t||vs)return"";vs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),s=i.stack.split(`
`),o=l.length-1,a=s.length-1;1<=o&&0<=a&&l[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==s[a]){var c=`
`+l[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{vs=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Rr(t):""}function Nm(t){switch(t.tag){case 5:return Rr(t.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return t=ys(t.type,!1),t;case 11:return t=ys(t.type.render,!1),t;case 1:return t=ys(t.type,!0),t;default:return""}}function qs(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zn:return"Fragment";case On:return"Portal";case Ys:return"Profiler";case na:return"StrictMode";case Zs:return"Suspense";case Js:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qd:return(t.displayName||"Context")+".Consumer";case Xd:return(t._context.displayName||"Context")+".Provider";case ra:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ia:return e=t.displayName||null,e!==null?e:qs(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return qs(t(e))}catch{}}return null}function Sm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qs(e);case 8:return e===na?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Em(t){var e=Kd(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ri(t){t._valueTracker||(t._valueTracker=Em(t))}function Yd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=Kd(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eo(t,e){var r=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Ec(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=sn(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zd(t,e){e=e.checked,e!=null&&ta(t,"checked",e,!1)}function to(t,e){Zd(t,e);var r=sn(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?no(t,e.type,r):e.hasOwnProperty("defaultValue")&&no(t,e.type,sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tc(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function no(t,e,r){(e!=="number"||ol(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Lr=Array.isArray;function Jn(t,e,r,i){if(t=t.options,e){e={};for(var l=0;l<r.length;l++)e["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=e.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&i&&(t[r].defaultSelected=!0)}else{for(r=""+sn(r),e=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function ro(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bc(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(T(92));if(Lr(r)){if(1<r.length)throw Error(T(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:sn(r)}}function Jd(t,e){var r=sn(e.value),i=sn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function Rc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function io(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Li,ef=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,l){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,l)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Li.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tm=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(t){Tm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Dr[e]=Dr[t]})});function tf(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Dr.hasOwnProperty(t)&&Dr[t]?(""+e).trim():e+"px"}function nf(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,l=tf(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,l):t[r]=l}}var bm=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(t,e){if(e){if(bm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function so(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function la(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ao=null,qn=null,er=null;function Lc(t){if(t=wi(t)){if(typeof ao!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Hl(e),ao(t.stateNode,t.type,e))}}function rf(t){qn?er?er.push(t):er=[t]:qn=t}function lf(){if(qn){var t=qn,e=er;if(er=qn=null,Lc(t),e)for(t=0;t<e.length;t++)Lc(e[t])}}function sf(t,e){return t(e)}function of(){}var ws=!1;function af(t,e,r){if(ws)return t(e,r);ws=!0;try{return sf(t,e,r)}finally{ws=!1,(qn!==null||er!==null)&&(of(),lf())}}function Gr(t,e){var r=t.stateNode;if(r===null)return null;var i=Hl(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(T(231,e,typeof r));return r}var co=!1;if(At)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){co=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{co=!1}function Rm(t,e,r,i,l,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var Fr=!1,al=null,cl=!1,uo=null,Lm={onError:function(t){Fr=!0,al=t}};function Pm(t,e,r,i,l,s,o,a,c){Fr=!1,al=null,Rm.apply(Lm,arguments)}function Bm(t,e,r,i,l,s,o,a,c){if(Pm.apply(this,arguments),Fr){if(Fr){var u=al;Fr=!1,al=null}else throw Error(T(198));cl||(cl=!0,uo=u)}}function Bn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function cf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pc(t){if(Bn(t)!==t)throw Error(T(188))}function Am(t){var e=t.alternate;if(!e){if(e=Bn(t),e===null)throw Error(T(188));return e!==t?null:t}for(var r=t,i=e;;){var l=r.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){r=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===r)return Pc(l),t;if(s===i)return Pc(l),e;s=s.sibling}throw Error(T(188))}if(r.return!==i.return)r=l,i=s;else{for(var o=!1,a=l.child;a;){if(a===r){o=!0,r=l,i=s;break}if(a===i){o=!0,i=l,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,i=l;break}if(a===i){o=!0,i=s,r=l;break}a=a.sibling}if(!o)throw Error(T(189))}}if(r.alternate!==i)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?t:e}function uf(t){return t=Am(t),t!==null?df(t):null}function df(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=df(t);if(e!==null)return e;t=t.sibling}return null}var ff=et.unstable_scheduleCallback,Bc=et.unstable_cancelCallback,Mm=et.unstable_shouldYield,Im=et.unstable_requestPaint,ge=et.unstable_now,Dm=et.unstable_getCurrentPriorityLevel,sa=et.unstable_ImmediatePriority,hf=et.unstable_UserBlockingPriority,ul=et.unstable_NormalPriority,Fm=et.unstable_LowPriority,pf=et.unstable_IdlePriority,Ol=null,Nt=null;function Om(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Um,zm=Math.log,$m=Math.LN2;function Um(t){return t>>>=0,t===0?32:31-(zm(t)/$m|0)|0}var Pi=64,Bi=4194304;function Pr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,l=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var a=o&~l;a!==0?i=Pr(a):(s&=o,s!==0&&(i=Pr(s)))}else o=r&~l,o!==0?i=Pr(o):s!==0&&(i=Pr(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&l)&&(l=i&-i,s=e&-e,l>=s||l===16&&(s&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-xt(e),l=1<<r,i|=t[r],e&=~l;return i}function Hm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wm(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,c=l[o];c===-1?(!(a&r)||a&i)&&(l[o]=Hm(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function fo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mf(){var t=Pi;return Pi<<=1,!(Pi&4194240)&&(Pi=64),t}function Cs(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function vi(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=r}function Vm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var l=31-xt(r),s=1<<l;e[l]=0,i[l]=-1,t[l]=-1,r&=~s}}function oa(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-xt(r),l=1<<i;l&e|t[i]&e&&(t[i]|=e),r&=~l}}var q=0;function xf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gf,aa,jf,vf,yf,ho=!1,Ai=[],Yt=null,Zt=null,Jt=null,Kr=new Map,Yr=new Map,Wt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ac(t,e){switch(t){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Kr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(e.pointerId)}}function kr(t,e,r,i,l,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},e!==null&&(e=wi(e),e!==null&&aa(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Qm(t,e,r,i,l){switch(e){case"focusin":return Yt=kr(Yt,t,e,r,i,l),!0;case"dragenter":return Zt=kr(Zt,t,e,r,i,l),!0;case"mouseover":return Jt=kr(Jt,t,e,r,i,l),!0;case"pointerover":var s=l.pointerId;return Kr.set(s,kr(Kr.get(s)||null,t,e,r,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Yr.set(s,kr(Yr.get(s)||null,t,e,r,i,l)),!0}return!1}function wf(t){var e=vn(t.target);if(e!==null){var r=Bn(e);if(r!==null){if(e=r.tag,e===13){if(e=cf(r),e!==null){t.blockedOn=e,yf(t.priority,function(){jf(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=po(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);oo=i,r.target.dispatchEvent(i),oo=null}else return e=wi(r),e!==null&&aa(e),t.blockedOn=r,!1;e.shift()}return!0}function Mc(t,e,r){Yi(t)&&r.delete(e)}function Gm(){ho=!1,Yt!==null&&Yi(Yt)&&(Yt=null),Zt!==null&&Yi(Zt)&&(Zt=null),Jt!==null&&Yi(Jt)&&(Jt=null),Kr.forEach(Mc),Yr.forEach(Mc)}function Nr(t,e){t.blockedOn===e&&(t.blockedOn=null,ho||(ho=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Gm)))}function Zr(t){function e(l){return Nr(l,t)}if(0<Ai.length){Nr(Ai[0],t);for(var r=1;r<Ai.length;r++){var i=Ai[r];i.blockedOn===t&&(i.blockedOn=null)}}for(Yt!==null&&Nr(Yt,t),Zt!==null&&Nr(Zt,t),Jt!==null&&Nr(Jt,t),Kr.forEach(e),Yr.forEach(e),r=0;r<Wt.length;r++)i=Wt[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wt.length&&(r=Wt[0],r.blockedOn===null);)wf(r),r.blockedOn===null&&Wt.shift()}var tr=Ft.ReactCurrentBatchConfig,fl=!0;function Km(t,e,r,i){var l=q,s=tr.transition;tr.transition=null;try{q=1,ca(t,e,r,i)}finally{q=l,tr.transition=s}}function Ym(t,e,r,i){var l=q,s=tr.transition;tr.transition=null;try{q=4,ca(t,e,r,i)}finally{q=l,tr.transition=s}}function ca(t,e,r,i){if(fl){var l=po(t,e,r,i);if(l===null)Ps(t,e,i,hl,r),Ac(t,i);else if(Qm(l,t,e,r,i))i.stopPropagation();else if(Ac(t,i),e&4&&-1<Xm.indexOf(t)){for(;l!==null;){var s=wi(l);if(s!==null&&gf(s),s=po(t,e,r,i),s===null&&Ps(t,e,i,hl,r),s===l)break;l=s}l!==null&&i.stopPropagation()}else Ps(t,e,i,null,r)}}var hl=null;function po(t,e,r,i){if(hl=null,t=la(i),t=vn(t),t!==null)if(e=Bn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=cf(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function Cf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dm()){case sa:return 1;case hf:return 4;case ul:case Fm:return 16;case pf:return 536870912;default:return 16}default:return 16}}var Xt=null,ua=null,Zi=null;function _f(){if(Zi)return Zi;var t,e=ua,r=e.length,i,l="value"in Xt?Xt.value:Xt.textContent,s=l.length;for(t=0;t<r&&e[t]===l[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===l[s-i];i++);return Zi=l.slice(t,1<i?1-i:void 0)}function Ji(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mi(){return!0}function Ic(){return!1}function rt(t){function e(r,i,l,s,o){this._reactName=r,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mi:Ic,this.isPropagationStopped=Ic,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),e}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=rt(gr),yi=he({},gr,{view:0,detail:0}),Zm=rt(yi),_s,ks,Sr,zl=he({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sr&&(Sr&&t.type==="mousemove"?(_s=t.screenX-Sr.screenX,ks=t.screenY-Sr.screenY):ks=_s=0,Sr=t),_s)},movementY:function(t){return"movementY"in t?t.movementY:ks}}),Dc=rt(zl),Jm=he({},zl,{dataTransfer:0}),qm=rt(Jm),ex=he({},yi,{relatedTarget:0}),Ns=rt(ex),tx=he({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=rt(tx),rx=he({},gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ix=rt(rx),lx=he({},gr,{data:0}),Fc=rt(lx),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ax[t])?!!e[t]:!1}function fa(){return cx}var ux=he({},yi,{key:function(t){if(t.key){var e=sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ji(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(t){return t.type==="keypress"?Ji(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ji(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dx=rt(ux),fx=he({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=rt(fx),hx=he({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),px=rt(hx),mx=he({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xx=rt(mx),gx=he({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=rt(gx),vx=[9,13,27,32],ha=At&&"CompositionEvent"in window,Or=null;At&&"documentMode"in document&&(Or=document.documentMode);var yx=At&&"TextEvent"in window&&!Or,kf=At&&(!ha||Or&&8<Or&&11>=Or),zc=" ",$c=!1;function Nf(t,e){switch(t){case"keyup":return vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $n=!1;function wx(t,e){switch(t){case"compositionend":return Sf(e);case"keypress":return e.which!==32?null:($c=!0,zc);case"textInput":return t=e.data,t===zc&&$c?null:t;default:return null}}function Cx(t,e){if($n)return t==="compositionend"||!ha&&Nf(t,e)?(t=_f(),Zi=ua=Xt=null,$n=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kf&&e.locale!=="ko"?null:e.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_x[t.type]:e==="textarea"}function Ef(t,e,r,i){rf(i),e=pl(e,"onChange"),0<e.length&&(r=new da("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var zr=null,Jr=null;function kx(t){Ff(t,0)}function $l(t){var e=Wn(t);if(Yd(e))return t}function Nx(t,e){if(t==="change")return e}var Tf=!1;if(At){var Ss;if(At){var Es="oninput"in document;if(!Es){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Es=typeof Hc.oninput=="function"}Ss=Es}else Ss=!1;Tf=Ss&&(!document.documentMode||9<document.documentMode)}function Wc(){zr&&(zr.detachEvent("onpropertychange",bf),Jr=zr=null)}function bf(t){if(t.propertyName==="value"&&$l(Jr)){var e=[];Ef(e,Jr,t,la(t)),af(kx,e)}}function Sx(t,e,r){t==="focusin"?(Wc(),zr=e,Jr=r,zr.attachEvent("onpropertychange",bf)):t==="focusout"&&Wc()}function Ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Jr)}function Tx(t,e){if(t==="click")return $l(e)}function bx(t,e){if(t==="input"||t==="change")return $l(e)}function Rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:Rx;function qr(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var l=r[i];if(!Ks.call(e,l)||!jt(t[l],e[l]))return!1}return!0}function Vc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xc(t,e){var r=Vc(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vc(r)}}function Rf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lf(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=ol(t.document)}return e}function pa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lx(t){var e=Lf(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Rf(r.ownerDocument.documentElement,r)){if(i!==null&&pa(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=r.textContent.length,s=Math.min(i.start,l);i=i.end===void 0?s:Math.min(i.end,l),!t.extend&&s>i&&(l=i,i=s,s=l),l=Xc(r,s);var o=Xc(r,i);l&&o&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Px=At&&"documentMode"in document&&11>=document.documentMode,Un=null,mo=null,$r=null,xo=!1;function Qc(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;xo||Un==null||Un!==ol(i)||(i=Un,"selectionStart"in i&&pa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$r&&qr($r,i)||($r=i,i=pl(mo,"onSelect"),0<i.length&&(e=new da("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Un)))}function Ii(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Hn={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},Ts={},Pf={};At&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Ul(t){if(Ts[t])return Ts[t];if(!Hn[t])return t;var e=Hn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Pf)return Ts[t]=e[r];return t}var Bf=Ul("animationend"),Af=Ul("animationiteration"),Mf=Ul("animationstart"),If=Ul("transitionend"),Df=new Map,Gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(t,e){Df.set(t,e),Pn(e,[t])}for(var bs=0;bs<Gc.length;bs++){var Rs=Gc[bs],Bx=Rs.toLowerCase(),Ax=Rs[0].toUpperCase()+Rs.slice(1);un(Bx,"on"+Ax)}un(Bf,"onAnimationEnd");un(Af,"onAnimationIteration");un(Mf,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(If,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Kc(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,Bm(i,e,void 0,t),t.currentTarget=null}function Ff(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],l=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&l.isPropagationStopped())break e;Kc(l,a,u),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&l.isPropagationStopped())break e;Kc(l,a,u),s=c}}}if(cl)throw t=uo,cl=!1,uo=null,t}function ie(t,e){var r=e[wo];r===void 0&&(r=e[wo]=new Set);var i=t+"__bubble";r.has(i)||(Of(e,t,2,!1),r.add(i))}function Ls(t,e,r){var i=0;e&&(i|=4),Of(r,t,i,e)}var Di="_reactListening"+Math.random().toString(36).slice(2);function ei(t){if(!t[Di]){t[Di]=!0,Vd.forEach(function(r){r!=="selectionchange"&&(Mx.has(r)||Ls(r,!1,t),Ls(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Di]||(e[Di]=!0,Ls("selectionchange",!1,e))}}function Of(t,e,r,i){switch(Cf(e)){case 1:var l=Km;break;case 4:l=Ym;break;default:l=ca}r=l.bind(null,e,r,t),l=void 0,!co||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,r,{capture:!0,passive:l}):t.addEventListener(e,r,!0):l!==void 0?t.addEventListener(e,r,{passive:l}):t.addEventListener(e,r,!1)}function Ps(t,e,r,i,l){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;a!==null;){if(o=vn(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}af(function(){var u=s,d=la(r),p=[];e:{var x=Df.get(t);if(x!==void 0){var j=da,v=t;switch(t){case"keypress":if(Ji(r)===0)break e;case"keydown":case"keyup":j=dx;break;case"focusin":v="focus",j=Ns;break;case"focusout":v="blur",j=Ns;break;case"beforeblur":case"afterblur":j=Ns;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=px;break;case Bf:case Af:case Mf:j=nx;break;case If:j=xx;break;case"scroll":j=Zm;break;case"wheel":j=jx;break;case"copy":case"cut":case"paste":j=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Oc}var y=(e&4)!==0,k=!y&&t==="scroll",h=y?x!==null?x+"Capture":null:x;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=Gr(f,h),w!=null&&y.push(ti(f,w,g)))),k)break;f=f.return}0<y.length&&(x=new j(x,v,null,r,d),p.push({event:x,listeners:y}))}}if(!(e&7)){e:{if(x=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",x&&r!==oo&&(v=r.relatedTarget||r.fromElement)&&(vn(v)||v[Mt]))break e;if((j||x)&&(x=d.window===d?d:(x=d.ownerDocument)?x.defaultView||x.parentWindow:window,j?(v=r.relatedTarget||r.toElement,j=u,v=v?vn(v):null,v!==null&&(k=Bn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(j=null,v=u),j!==v)){if(y=Dc,w="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Oc,w="onPointerLeave",h="onPointerEnter",f="pointer"),k=j==null?x:Wn(j),g=v==null?x:Wn(v),x=new y(w,f+"leave",j,r,d),x.target=k,x.relatedTarget=g,w=null,vn(d)===u&&(y=new y(h,f+"enter",v,r,d),y.target=g,y.relatedTarget=k,w=y),k=w,j&&v)t:{for(y=j,h=v,f=0,g=y;g;g=Dn(g))f++;for(g=0,w=h;w;w=Dn(w))g++;for(;0<f-g;)y=Dn(y),f--;for(;0<g-f;)h=Dn(h),g--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=Dn(y),h=Dn(h)}y=null}else y=null;j!==null&&Yc(p,x,j,y,!1),v!==null&&k!==null&&Yc(p,k,v,y,!0)}}e:{if(x=u?Wn(u):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var _=Nx;else if(Uc(x))if(Tf)_=bx;else{_=Ex;var S=Sx}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=Tx);if(_&&(_=_(t,u))){Ef(p,_,r,d);break e}S&&S(t,x,u),t==="focusout"&&(S=x._wrapperState)&&S.controlled&&x.type==="number"&&no(x,"number",x.value)}switch(S=u?Wn(u):window,t){case"focusin":(Uc(S)||S.contentEditable==="true")&&(Un=S,mo=u,$r=null);break;case"focusout":$r=mo=Un=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,Qc(p,r,d);break;case"selectionchange":if(Px)break;case"keydown":case"keyup":Qc(p,r,d)}var E;if(ha)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else $n?Nf(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(kf&&r.locale!=="ko"&&($n||L!=="onCompositionStart"?L==="onCompositionEnd"&&$n&&(E=_f()):(Xt=d,ua="value"in Xt?Xt.value:Xt.textContent,$n=!0)),S=pl(u,L),0<S.length&&(L=new Fc(L,t,null,r,d),p.push({event:L,listeners:S}),E?L.data=E:(E=Sf(r),E!==null&&(L.data=E)))),(E=yx?wx(t,r):Cx(t,r))&&(u=pl(u,"onBeforeInput"),0<u.length&&(d=new Fc("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:u}),d.data=E))}Ff(p,e)})}function ti(t,e,r){return{instance:t,listener:e,currentTarget:r}}function pl(t,e){for(var r=e+"Capture",i=[];t!==null;){var l=t,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Gr(t,r),s!=null&&i.unshift(ti(t,s,l)),s=Gr(t,e),s!=null&&i.push(ti(t,s,l))),t=t.return}return i}function Dn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yc(t,e,r,i,l){for(var s=e._reactName,o=[];r!==null&&r!==i;){var a=r,c=a.alternate,u=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&u!==null&&(a=u,l?(c=Gr(r,s),c!=null&&o.unshift(ti(r,c,a))):l||(c=Gr(r,s),c!=null&&o.push(ti(r,c,a)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Ix=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Zc(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Dx,"")}function Fi(t,e,r){if(e=Zc(e),Zc(t)!==e&&r)throw Error(T(425))}function ml(){}var go=null,jo=null;function vo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,Jc=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Jc<"u"?function(t){return Jc.resolve(null).then(t).catch(zx)}:yo;function zx(t){setTimeout(function(){throw t})}function Bs(t,e){var r=e,i=0;do{var l=r.nextSibling;if(t.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(i===0){t.removeChild(l),Zr(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=l}while(r);Zr(e)}function qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+jr,ni="__reactProps$"+jr,Mt="__reactContainer$"+jr,wo="__reactEvents$"+jr,$x="__reactListeners$"+jr,Ux="__reactHandles$"+jr;function vn(t){var e=t[Ct];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Mt]||r[Ct]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=qc(t);t!==null;){if(r=t[Ct])return r;t=qc(t)}return e}t=r,r=t.parentNode}return null}function wi(t){return t=t[Ct]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Hl(t){return t[ni]||null}var Co=[],Vn=-1;function dn(t){return{current:t}}function se(t){0>Vn||(t.current=Co[Vn],Co[Vn]=null,Vn--)}function ne(t,e){Vn++,Co[Vn]=t.current,t.current=e}var on={},Fe=dn(on),Ve=dn(!1),Sn=on;function sr(t,e){var r=t.type.contextTypes;if(!r)return on;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in r)l[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=l),l}function Xe(t){return t=t.childContextTypes,t!=null}function xl(){se(Ve),se(Fe)}function eu(t,e,r){if(Fe.current!==on)throw Error(T(168));ne(Fe,e),ne(Ve,r)}function zf(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var l in i)if(!(l in e))throw Error(T(108,Sm(t)||"Unknown",l));return he({},r,i)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,Sn=Fe.current,ne(Fe,t),ne(Ve,Ve.current),!0}function tu(t,e,r){var i=t.stateNode;if(!i)throw Error(T(169));r?(t=zf(t,e,Sn),i.__reactInternalMemoizedMergedChildContext=t,se(Ve),se(Fe),ne(Fe,t)):se(Ve),ne(Ve,r)}var Rt=null,Wl=!1,As=!1;function $f(t){Rt===null?Rt=[t]:Rt.push(t)}function Hx(t){Wl=!0,$f(t)}function fn(){if(!As&&Rt!==null){As=!0;var t=0,e=q;try{var r=Rt;for(q=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}Rt=null,Wl=!1}catch(l){throw Rt!==null&&(Rt=Rt.slice(t+1)),ff(sa,fn),l}finally{q=e,As=!1}}return null}var Xn=[],Qn=0,jl=null,vl=0,lt=[],st=0,En=null,Lt=1,Pt="";function gn(t,e){Xn[Qn++]=vl,Xn[Qn++]=jl,jl=t,vl=e}function Uf(t,e,r){lt[st++]=Lt,lt[st++]=Pt,lt[st++]=En,En=t;var i=Lt;t=Pt;var l=32-xt(i)-1;i&=~(1<<l),r+=1;var s=32-xt(e)+l;if(30<s){var o=l-l%5;s=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Lt=1<<32-xt(e)+l|r<<l|i,Pt=s+t}else Lt=1<<s|r<<l|i,Pt=t}function ma(t){t.return!==null&&(gn(t,1),Uf(t,1,0))}function xa(t){for(;t===jl;)jl=Xn[--Qn],Xn[Qn]=null,vl=Xn[--Qn],Xn[Qn]=null;for(;t===En;)En=lt[--st],lt[st]=null,Pt=lt[--st],lt[st]=null,Lt=lt[--st],lt[st]=null}var Je=null,Ze=null,ae=!1,mt=null;function Hf(t,e){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function nu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Je=t,Ze=qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Je=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=En!==null?{id:Lt,overflow:Pt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Je=t,Ze=null,!0):!1;default:return!1}}function _o(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ko(t){if(ae){var e=Ze;if(e){var r=e;if(!nu(t,e)){if(_o(t))throw Error(T(418));e=qt(r.nextSibling);var i=Je;e&&nu(t,e)?Hf(i,r):(t.flags=t.flags&-4097|2,ae=!1,Je=t)}}else{if(_o(t))throw Error(T(418));t.flags=t.flags&-4097|2,ae=!1,Je=t}}}function ru(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Je=t}function Oi(t){if(t!==Je)return!1;if(!ae)return ru(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vo(t.type,t.memoizedProps)),e&&(e=Ze)){if(_o(t))throw Wf(),Error(T(418));for(;e;)Hf(t,e),e=qt(e.nextSibling)}if(ru(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ze=qt(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=Je?qt(t.stateNode.nextSibling):null;return!0}function Wf(){for(var t=Ze;t;)t=qt(t.nextSibling)}function or(){Ze=Je=null,ae=!1}function ga(t){mt===null?mt=[t]:mt.push(t)}var Wx=Ft.ReactCurrentBatchConfig;function ht(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var yl=dn(null),wl=null,Gn=null,ja=null;function va(){ja=Gn=wl=null}function ya(t){var e=yl.current;se(yl),t._currentValue=e}function No(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function nr(t,e){wl=t,ja=Gn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(ja!==t)if(t={context:t,memoizedValue:e,next:null},Gn===null){if(wl===null)throw Error(T(308));Gn=t,wl.dependencies={lanes:0,firstContext:t}}else Gn=Gn.next=t;return e}var yn=null;function wa(t){yn===null?yn=[t]:yn.push(t)}function Vf(t,e,r,i){var l=e.interleaved;return l===null?(r.next=r,wa(e)):(r.next=l.next,l.next=r),e.interleaved=r,It(t,i)}function It(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ht=!1;function Ca(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Y&2){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,It(t,r)}return l=i.interleaved,l===null?(e.next=e,wa(i)):(e.next=l.next,l.next=e),i.interleaved=e,It(t,r)}function qi(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,oa(t,r)}}function iu(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var l=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?l=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?l=s=e:s=s.next=e}else l=s=e;r={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Cl(t,e,r,i){var l=t.updateQueue;Ht=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=l.baseState;o=0,d=u=c=null,a=s;do{var x=a.lane,j=a.eventTime;if((i&x)===x){d!==null&&(d=d.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(x=e,j=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(j,p,x);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,x=typeof v=="function"?v.call(j,p,x):v,x==null)break e;p=he({},p,x);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=l.effects,x===null?l.effects=[a]:x.push(a))}else j={eventTime:j,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=j,c=p):d=d.next=j,o|=x;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;x=a,a=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);if(d===null&&(c=p),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=d,e=l.shared.interleaved,e!==null){l=e;do o|=l.lane,l=l.next;while(l!==e)}else s===null&&(l.shared.lanes=0);bn|=o,t.lanes=o,t.memoizedState=p}}function lu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],l=i.callback;if(l!==null){if(i.callback=null,i=r,typeof l!="function")throw Error(T(191,l));l.call(i)}}}var Qf=new Wd.Component().refs;function So(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:he({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Bn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=ze(),l=nn(t),s=Bt(i,l);s.payload=e,r!=null&&(s.callback=r),e=en(t,s,l),e!==null&&(gt(e,t,l,i),qi(e,t,l))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=ze(),l=nn(t),s=Bt(i,l);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=en(t,s,l),e!==null&&(gt(e,t,l,i),qi(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ze(),i=nn(t),l=Bt(r,i);l.tag=2,e!=null&&(l.callback=e),e=en(t,l,i),e!==null&&(gt(e,t,i,r),qi(e,t,i))}};function su(t,e,r,i,l,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qr(r,i)||!qr(l,s):!0}function Gf(t,e,r){var i=!1,l=on,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(l=Xe(e)?Sn:Fe.current,i=e.contextTypes,s=(i=i!=null)?sr(t,l):on),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=s),e}function ou(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Eo(t,e,r,i){var l=t.stateNode;l.props=r,l.state=t.memoizedState,l.refs=Qf,Ca(t);var s=e.contextType;typeof s=="object"&&s!==null?l.context=ct(s):(s=Xe(e)?Sn:Fe.current,l.context=sr(t,s)),l.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(So(t,e,s,r),l.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&Vl.enqueueReplaceState(l,l.state,null),Cl(t,r,l,i),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Er(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var i=r.stateNode}if(!i)throw Error(T(147,t));var l=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=l.refs;a===Qf&&(a=l.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,t))}return t}function zi(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function au(t){var e=t._init;return e(t._payload)}function Kf(t){function e(h,f){if(t){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function r(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function i(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function l(h,f){return h=rn(h,f),h.index=0,h.sibling=null,h}function s(h,f,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,f,g,w){return f===null||f.tag!==6?(f=$s(g,h.mode,w),f.return=h,f):(f=l(f,g),f.return=h,f)}function c(h,f,g,w){var _=g.type;return _===zn?d(h,f,g.props.children,w,g.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&au(_)===f.type)?(w=l(f,g.props),w.ref=Er(h,f,g),w.return=h,w):(w=ll(g.type,g.key,g.props,null,h.mode,w),w.ref=Er(h,f,g),w.return=h,w)}function u(h,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Us(g,h.mode,w),f.return=h,f):(f=l(f,g.children||[]),f.return=h,f)}function d(h,f,g,w,_){return f===null||f.tag!==7?(f=_n(g,h.mode,w,_),f.return=h,f):(f=l(f,g),f.return=h,f)}function p(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=$s(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bi:return g=ll(f.type,f.key,f.props,null,h.mode,g),g.ref=Er(h,null,f),g.return=h,g;case On:return f=Us(f,h.mode,g),f.return=h,f;case Ut:var w=f._init;return p(h,w(f._payload),g)}if(Lr(f)||Cr(f))return f=_n(f,h.mode,g,null),f.return=h,f;zi(h,f)}return null}function x(h,f,g,w){var _=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:a(h,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bi:return g.key===_?c(h,f,g,w):null;case On:return g.key===_?u(h,f,g,w):null;case Ut:return _=g._init,x(h,f,_(g._payload),w)}if(Lr(g)||Cr(g))return _!==null?null:d(h,f,g,w,null);zi(h,g)}return null}function j(h,f,g,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,a(f,h,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bi:return h=h.get(w.key===null?g:w.key)||null,c(f,h,w,_);case On:return h=h.get(w.key===null?g:w.key)||null,u(f,h,w,_);case Ut:var S=w._init;return j(h,f,g,S(w._payload),_)}if(Lr(w)||Cr(w))return h=h.get(g)||null,d(f,h,w,_,null);zi(f,w)}return null}function v(h,f,g,w){for(var _=null,S=null,E=f,L=f=0,z=null;E!==null&&L<g.length;L++){E.index>L?(z=E,E=null):z=E.sibling;var D=x(h,E,g[L],w);if(D===null){E===null&&(E=z);break}t&&E&&D.alternate===null&&e(h,E),f=s(D,f,L),S===null?_=D:S.sibling=D,S=D,E=z}if(L===g.length)return r(h,E),ae&&gn(h,L),_;if(E===null){for(;L<g.length;L++)E=p(h,g[L],w),E!==null&&(f=s(E,f,L),S===null?_=E:S.sibling=E,S=E);return ae&&gn(h,L),_}for(E=i(h,E);L<g.length;L++)z=j(E,h,L,g[L],w),z!==null&&(t&&z.alternate!==null&&E.delete(z.key===null?L:z.key),f=s(z,f,L),S===null?_=z:S.sibling=z,S=z);return t&&E.forEach(function(Q){return e(h,Q)}),ae&&gn(h,L),_}function y(h,f,g,w){var _=Cr(g);if(typeof _!="function")throw Error(T(150));if(g=_.call(g),g==null)throw Error(T(151));for(var S=_=null,E=f,L=f=0,z=null,D=g.next();E!==null&&!D.done;L++,D=g.next()){E.index>L?(z=E,E=null):z=E.sibling;var Q=x(h,E,D.value,w);if(Q===null){E===null&&(E=z);break}t&&E&&Q.alternate===null&&e(h,E),f=s(Q,f,L),S===null?_=Q:S.sibling=Q,S=Q,E=z}if(D.done)return r(h,E),ae&&gn(h,L),_;if(E===null){for(;!D.done;L++,D=g.next())D=p(h,D.value,w),D!==null&&(f=s(D,f,L),S===null?_=D:S.sibling=D,S=D);return ae&&gn(h,L),_}for(E=i(h,E);!D.done;L++,D=g.next())D=j(E,h,L,D.value,w),D!==null&&(t&&D.alternate!==null&&E.delete(D.key===null?L:D.key),f=s(D,f,L),S===null?_=D:S.sibling=D,S=D);return t&&E.forEach(function(ee){return e(h,ee)}),ae&&gn(h,L),_}function k(h,f,g,w){if(typeof g=="object"&&g!==null&&g.type===zn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bi:e:{for(var _=g.key,S=f;S!==null;){if(S.key===_){if(_=g.type,_===zn){if(S.tag===7){r(h,S.sibling),f=l(S,g.props.children),f.return=h,h=f;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&au(_)===S.type){r(h,S.sibling),f=l(S,g.props),f.ref=Er(h,S,g),f.return=h,h=f;break e}r(h,S);break}else e(h,S);S=S.sibling}g.type===zn?(f=_n(g.props.children,h.mode,w,g.key),f.return=h,h=f):(w=ll(g.type,g.key,g.props,null,h.mode,w),w.ref=Er(h,f,g),w.return=h,h=w)}return o(h);case On:e:{for(S=g.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(h,f.sibling),f=l(f,g.children||[]),f.return=h,h=f;break e}else{r(h,f);break}else e(h,f);f=f.sibling}f=Us(g,h.mode,w),f.return=h,h=f}return o(h);case Ut:return S=g._init,k(h,f,S(g._payload),w)}if(Lr(g))return v(h,f,g,w);if(Cr(g))return y(h,f,g,w);zi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(h,f.sibling),f=l(f,g),f.return=h,h=f):(r(h,f),f=$s(g,h.mode,w),f.return=h,h=f),o(h)):r(h,f)}return k}var ar=Kf(!0),Yf=Kf(!1),Ci={},St=dn(Ci),ri=dn(Ci),ii=dn(Ci);function wn(t){if(t===Ci)throw Error(T(174));return t}function _a(t,e){switch(ne(ii,e),ne(ri,t),ne(St,Ci),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:io(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=io(e,t)}se(St),ne(St,e)}function cr(){se(St),se(ri),se(ii)}function Zf(t){wn(ii.current);var e=wn(St.current),r=io(e,t.type);e!==r&&(ne(ri,t),ne(St,r))}function ka(t){ri.current===t&&(se(St),se(ri))}var ue=dn(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ms=[];function Na(){for(var t=0;t<Ms.length;t++)Ms[t]._workInProgressVersionPrimary=null;Ms.length=0}var el=Ft.ReactCurrentDispatcher,Is=Ft.ReactCurrentBatchConfig,Tn=0,de=null,ve=null,_e=null,kl=!1,Ur=!1,li=0,Vx=0;function Me(){throw Error(T(321))}function Sa(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!jt(t[r],e[r]))return!1;return!0}function Ea(t,e,r,i,l,s){if(Tn=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?Kx:Yx,t=r(i,l),Ur){s=0;do{if(Ur=!1,li=0,25<=s)throw Error(T(301));s+=1,_e=ve=null,e.updateQueue=null,el.current=Zx,t=r(i,l)}while(Ur)}if(el.current=Nl,e=ve!==null&&ve.next!==null,Tn=0,_e=ve=de=null,kl=!1,e)throw Error(T(300));return t}function Ta(){var t=li!==0;return li=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?de.memoizedState=_e=t:_e=_e.next=t,_e}function ut(){if(ve===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=_e===null?de.memoizedState:_e.next;if(e!==null)_e=e,ve=t;else{if(t===null)throw Error(T(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},_e===null?de.memoizedState=_e=t:_e=_e.next=t}return _e}function si(t,e){return typeof e=="function"?e(t):e}function Ds(t){var e=ut(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=ve,l=i.baseQueue,s=r.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}i.baseQueue=l=s,r.pending=null}if(l!==null){s=l.next,i=i.baseState;var a=o=null,c=null,u=s;do{var d=u.lane;if((Tn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,o=i):c=c.next=p,de.lanes|=d,bn|=d}u=u.next}while(u!==null&&u!==s);c===null?o=i:c.next=a,jt(i,e.memoizedState)||(We=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,r.lastRenderedState=i}if(t=r.interleaved,t!==null){l=t;do s=l.lane,de.lanes|=s,bn|=s,l=l.next;while(l!==t)}else l===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Fs(t){var e=ut(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=r.dispatch,l=r.pending,s=e.memoizedState;if(l!==null){r.pending=null;var o=l=l.next;do s=t(s,o.action),o=o.next;while(o!==l);jt(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,i]}function Jf(){}function qf(t,e){var r=de,i=ut(),l=e(),s=!jt(i.memoizedState,l);if(s&&(i.memoizedState=l,We=!0),i=i.queue,ba(nh.bind(null,r,i,t),[t]),i.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,oi(9,th.bind(null,r,i,l,e),void 0,null),ke===null)throw Error(T(349));Tn&30||eh(r,e,l)}return l}function eh(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function th(t,e,r,i){e.value=r,e.getSnapshot=i,rh(e)&&ih(t)}function nh(t,e,r){return r(function(){rh(e)&&ih(t)})}function rh(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!jt(t,r)}catch{return!0}}function ih(t){var e=It(t,1);e!==null&&gt(e,t,1,-1)}function cu(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},e.queue=t,t=t.dispatch=Gx.bind(null,de,t),[e.memoizedState,t]}function oi(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function lh(){return ut().memoizedState}function tl(t,e,r,i){var l=wt();de.flags|=t,l.memoizedState=oi(1|e,r,void 0,i===void 0?null:i)}function Xl(t,e,r,i){var l=ut();i=i===void 0?null:i;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,i!==null&&Sa(i,o.deps)){l.memoizedState=oi(e,r,s,i);return}}de.flags|=t,l.memoizedState=oi(1|e,r,s,i)}function uu(t,e){return tl(8390656,8,t,e)}function ba(t,e){return Xl(2048,8,t,e)}function sh(t,e){return Xl(4,2,t,e)}function oh(t,e){return Xl(4,4,t,e)}function ah(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ch(t,e,r){return r=r!=null?r.concat([t]):null,Xl(4,4,ah.bind(null,e,t),r)}function Ra(){}function uh(t,e){var r=ut();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Sa(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function dh(t,e){var r=ut();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Sa(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function fh(t,e,r){return Tn&21?(jt(r,e)||(r=mf(),de.lanes|=r,bn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=r)}function Xx(t,e){var r=q;q=r!==0&&4>r?r:4,t(!0);var i=Is.transition;Is.transition={};try{t(!1),e()}finally{q=r,Is.transition=i}}function hh(){return ut().memoizedState}function Qx(t,e,r){var i=nn(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},ph(t))mh(e,r);else if(r=Vf(t,e,r,i),r!==null){var l=ze();gt(r,t,i,l),xh(r,e,i)}}function Gx(t,e,r){var i=nn(t),l={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(ph(t))mh(e,l);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,r);if(l.hasEagerState=!0,l.eagerState=a,jt(a,o)){var c=e.interleaved;c===null?(l.next=l,wa(e)):(l.next=c.next,c.next=l),e.interleaved=l;return}}catch{}finally{}r=Vf(t,e,l,i),r!==null&&(l=ze(),gt(r,t,i,l),xh(r,e,i))}}function ph(t){var e=t.alternate;return t===de||e!==null&&e===de}function mh(t,e){Ur=kl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function xh(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,oa(t,r)}}var Nl={readContext:ct,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},Kx={readContext:ct,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:uu,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,tl(4194308,4,ah.bind(null,e,t),r)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var r=wt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=wt();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Qx.bind(null,de,t),[i.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:cu,useDebugValue:Ra,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=cu(!1),e=t[0];return t=Xx.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=de,l=wt();if(ae){if(r===void 0)throw Error(T(407));r=r()}else{if(r=e(),ke===null)throw Error(T(349));Tn&30||eh(i,e,r)}l.memoizedState=r;var s={value:r,getSnapshot:e};return l.queue=s,uu(nh.bind(null,i,s,t),[t]),i.flags|=2048,oi(9,th.bind(null,i,s,r,e),void 0,null),r},useId:function(){var t=wt(),e=ke.identifierPrefix;if(ae){var r=Pt,i=Lt;r=(i&~(1<<32-xt(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=li++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Vx++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yx={readContext:ct,useCallback:uh,useContext:ct,useEffect:ba,useImperativeHandle:ch,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:dh,useReducer:Ds,useRef:lh,useState:function(){return Ds(si)},useDebugValue:Ra,useDeferredValue:function(t){var e=ut();return fh(e,ve.memoizedState,t)},useTransition:function(){var t=Ds(si)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Jf,useSyncExternalStore:qf,useId:hh,unstable_isNewReconciler:!1},Zx={readContext:ct,useCallback:uh,useContext:ct,useEffect:ba,useImperativeHandle:ch,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:dh,useReducer:Fs,useRef:lh,useState:function(){return Fs(si)},useDebugValue:Ra,useDeferredValue:function(t){var e=ut();return ve===null?e.memoizedState=t:fh(e,ve.memoizedState,t)},useTransition:function(){var t=Fs(si)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Jf,useSyncExternalStore:qf,useId:hh,unstable_isNewReconciler:!1};function ur(t,e){try{var r="",i=e;do r+=Nm(i),i=i.return;while(i);var l=r}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:l,digest:null}}function Os(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function To(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Jx=typeof WeakMap=="function"?WeakMap:Map;function gh(t,e,r){r=Bt(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){El||(El=!0,Fo=i),To(t,e)},r}function jh(t,e,r){r=Bt(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=e.value;r.payload=function(){return i(l)},r.callback=function(){To(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){To(t,e),typeof i!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function du(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new Jx;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(r)||(l.add(r),t=fg.bind(null,t,e,r),e.then(t,t))}function fu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hu(t,e,r,i,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Bt(-1,1),e.tag=2,en(r,e,1))),r.lanes|=1),t)}var qx=Ft.ReactCurrentOwner,We=!1;function Oe(t,e,r,i){e.child=t===null?Yf(e,null,r,i):ar(e,t.child,r,i)}function pu(t,e,r,i,l){r=r.render;var s=e.ref;return nr(e,l),i=Ea(t,e,r,i,s,l),r=Ta(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,Dt(t,e,l)):(ae&&r&&ma(e),e.flags|=1,Oe(t,e,i,l),e.child)}function mu(t,e,r,i,l){if(t===null){var s=r.type;return typeof s=="function"&&!Fa(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,vh(t,e,s,i,l)):(t=ll(r.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&l)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:qr,r(o,i)&&t.ref===e.ref)return Dt(t,e,l)}return e.flags|=1,t=rn(s,i),t.ref=e.ref,t.return=e,e.child=t}function vh(t,e,r,i,l){if(t!==null){var s=t.memoizedProps;if(qr(s,i)&&t.ref===e.ref)if(We=!1,e.pendingProps=i=s,(t.lanes&l)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Dt(t,e,l)}return bo(t,e,r,i,l)}function yh(t,e,r){var i=e.pendingProps,l=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Yn,Ke),Ke|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Yn,Ke),Ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,ne(Yn,Ke),Ke|=i}else s!==null?(i=s.baseLanes|r,e.memoizedState=null):i=r,ne(Yn,Ke),Ke|=i;return Oe(t,e,l,r),e.child}function wh(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function bo(t,e,r,i,l){var s=Xe(r)?Sn:Fe.current;return s=sr(e,s),nr(e,l),r=Ea(t,e,r,i,s,l),i=Ta(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,Dt(t,e,l)):(ae&&i&&ma(e),e.flags|=1,Oe(t,e,r,l),e.child)}function xu(t,e,r,i,l){if(Xe(r)){var s=!0;gl(e)}else s=!1;if(nr(e,l),e.stateNode===null)nl(t,e),Gf(e,r,i),Eo(e,r,i,l),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Xe(r)?Sn:Fe.current,u=sr(e,u));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==u)&&ou(e,o,i,u),Ht=!1;var x=e.memoizedState;o.state=x,Cl(e,i,o,l),c=e.memoizedState,a!==i||x!==c||Ve.current||Ht?(typeof d=="function"&&(So(e,r,d,i),c=e.memoizedState),(a=Ht||su(e,r,a,i,x,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Xf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ht(e.type,a),o.props=u,p=e.pendingProps,x=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Xe(r)?Sn:Fe.current,c=sr(e,c));var j=r.getDerivedStateFromProps;(d=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||x!==c)&&ou(e,o,i,c),Ht=!1,x=e.memoizedState,o.state=x,Cl(e,i,o,l);var v=e.memoizedState;a!==p||x!==v||Ve.current||Ht?(typeof j=="function"&&(So(e,r,j,i),v=e.memoizedState),(u=Ht||su(e,r,u,i,x,v,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=c,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),i=!1)}return Ro(t,e,r,i,s,l)}function Ro(t,e,r,i,l,s){wh(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return l&&tu(e,r,!1),Dt(t,e,s);i=e.stateNode,qx.current=e;var a=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ar(e,t.child,null,s),e.child=ar(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=i.state,l&&tu(e,r,!0),e.child}function Ch(t){var e=t.stateNode;e.pendingContext?eu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eu(t,e.context,!1),_a(t,e.containerInfo)}function gu(t,e,r,i,l){return or(),ga(l),e.flags|=256,Oe(t,e,r,i),e.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function Po(t){return{baseLanes:t,cachePool:null,transitions:null}}function _h(t,e,r){var i=e.pendingProps,l=ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(l&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),ne(ue,l&1),t===null)return ko(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,i,0,null),t=_n(t,i,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Po(r),e.memoizedState=Lo,t):La(e,o));if(l=t.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return eg(t,e,o,i,a,l,r);if(s){s=i.fallback,o=e.mode,l=t.child,a=l.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==l?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=rn(l,c),i.subtreeFlags=l.subtreeFlags&14680064),a!==null?s=rn(a,s):(s=_n(s,o,r,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Po(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Lo,i}return s=t.child,t=s.sibling,i=rn(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function La(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $i(t,e,r,i){return i!==null&&ga(i),ar(e,t.child,null,r),t=La(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eg(t,e,r,i,l,s,o){if(r)return e.flags&256?(e.flags&=-257,i=Os(Error(T(422))),$i(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,l=e.mode,i=Kl({mode:"visible",children:i.children},l,0,null),s=_n(s,l,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ar(e,t.child,null,o),e.child.memoizedState=Po(o),e.memoizedState=Lo,s);if(!(e.mode&1))return $i(t,e,o,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(T(419)),i=Os(s,i,void 0),$i(t,e,o,i)}if(a=(o&t.childLanes)!==0,We||a){if(i=ke,i!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(i.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,It(t,l),gt(i,t,l,-1))}return Da(),i=Os(Error(T(421))),$i(t,e,o,i)}return l.data==="$?"?(e.flags|=128,e.child=t.child,e=hg.bind(null,t),l._reactRetry=e,null):(t=s.treeContext,Ze=qt(l.nextSibling),Je=e,ae=!0,mt=null,t!==null&&(lt[st++]=Lt,lt[st++]=Pt,lt[st++]=En,Lt=t.id,Pt=t.overflow,En=e),e=La(e,i.children),e.flags|=4096,e)}function ju(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),No(t.return,e,r)}function zs(t,e,r,i,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=l)}function kh(t,e,r){var i=e.pendingProps,l=i.revealOrder,s=i.tail;if(Oe(t,e,i.children,r),i=ue.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ju(t,r,e);else if(t.tag===19)ju(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ne(ue,i),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(r=e.child,l=null;r!==null;)t=r.alternate,t!==null&&_l(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=e.child,e.child=null):(l=r.sibling,r.sibling=null),zs(e,!1,l,r,s);break;case"backwards":for(r=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&_l(t)===null){e.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}zs(e,!0,r,null,s);break;case"together":zs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),bn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,r=rn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=rn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function tg(t,e,r){switch(e.tag){case 3:Ch(e),or();break;case 5:Zf(e);break;case 1:Xe(e.type)&&gl(e);break;case 4:_a(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,l=e.memoizedProps.value;ne(yl,i._currentValue),i._currentValue=l;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ne(ue,ue.current&1),e.flags|=128,null):r&e.child.childLanes?_h(t,e,r):(ne(ue,ue.current&1),t=Dt(t,e,r),t!==null?t.sibling:null);ne(ue,ue.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return kh(t,e,r);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(ue,ue.current),i)break;return null;case 22:case 23:return e.lanes=0,yh(t,e,r)}return Dt(t,e,r)}var Nh,Bo,Sh,Eh;Nh=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Bo=function(){};Sh=function(t,e,r,i){var l=t.memoizedProps;if(l!==i){t=e.stateNode,wn(St.current);var s=null;switch(r){case"input":l=eo(t,l),i=eo(t,i),s=[];break;case"select":l=he({},l,{value:void 0}),i=he({},i,{value:void 0}),s=[];break;case"textarea":l=ro(t,l),i=ro(t,i),s=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}lo(r,i);var o;r=null;for(u in l)if(!i.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(a=l!=null?l[u]:void 0,i.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ie("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}r&&(s=s||[]).push("style",r);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Eh=function(t,e,r,i){r!==i&&(e.flags|=4)};function Tr(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function ng(t,e,r){var i=e.pendingProps;switch(xa(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Xe(e.type)&&xl(),Ie(e),null;case 3:return i=e.stateNode,cr(),se(Ve),se(Fe),Na(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mt!==null&&($o(mt),mt=null))),Bo(t,e),Ie(e),null;case 5:ka(e);var l=wn(ii.current);if(r=e.type,t!==null&&e.stateNode!=null)Sh(t,e,r,i,l),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(T(166));return Ie(e),null}if(t=wn(St.current),Oi(e)){i=e.stateNode,r=e.type;var s=e.memoizedProps;switch(i[Ct]=e,i[ni]=s,t=(e.mode&1)!==0,r){case"dialog":ie("cancel",i),ie("close",i);break;case"iframe":case"object":case"embed":ie("load",i);break;case"video":case"audio":for(l=0;l<Br.length;l++)ie(Br[l],i);break;case"source":ie("error",i);break;case"img":case"image":case"link":ie("error",i),ie("load",i);break;case"details":ie("toggle",i);break;case"input":Ec(i,s),ie("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ie("invalid",i);break;case"textarea":bc(i,s),ie("invalid",i)}lo(r,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fi(i.textContent,a,t),l=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fi(i.textContent,a,t),l=["children",""+a]):Xr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",i)}switch(r){case"input":Ri(i),Tc(i,s,!0);break;case"textarea":Ri(i),Rc(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=l,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qd(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[Ct]=e,t[ni]=i,Nh(t,e,!1,!1),e.stateNode=t;e:{switch(o=so(r,i),r){case"dialog":ie("cancel",t),ie("close",t),l=i;break;case"iframe":case"object":case"embed":ie("load",t),l=i;break;case"video":case"audio":for(l=0;l<Br.length;l++)ie(Br[l],t);l=i;break;case"source":ie("error",t),l=i;break;case"img":case"image":case"link":ie("error",t),ie("load",t),l=i;break;case"details":ie("toggle",t),l=i;break;case"input":Ec(t,i),l=eo(t,i),ie("invalid",t);break;case"option":l=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},l=he({},i,{value:void 0}),ie("invalid",t);break;case"textarea":bc(t,i),l=ro(t,i),ie("invalid",t);break;default:l=i}lo(r,l),a=l;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?nf(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ef(t,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Qr(t,c):typeof c=="number"&&Qr(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ie("scroll",t):c!=null&&ta(t,s,c,o))}switch(r){case"input":Ri(t),Tc(t,i,!1);break;case"textarea":Ri(t),Rc(t);break;case"option":i.value!=null&&t.setAttribute("value",""+sn(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jn(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jn(t,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=ml)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)Eh(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(T(166));if(r=wn(ii.current),wn(St.current),Oi(e)){if(i=e.stateNode,r=e.memoizedProps,i[Ct]=e,(s=i.nodeValue!==r)&&(t=Je,t!==null))switch(t.tag){case 3:Fi(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fi(i.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ct]=e,e.stateNode=i}return Ie(e),null;case 13:if(se(ue),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&e.mode&1&&!(e.flags&128))Wf(),or(),e.flags|=98560,s=!1;else if(s=Oi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Ct]=e}else or(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else mt!==null&&($o(mt),mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?ye===0&&(ye=3):Da())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return cr(),Bo(t,e),t===null&&ei(e.stateNode.containerInfo),Ie(e),null;case 10:return ya(e.type._context),Ie(e),null;case 17:return Xe(e.type)&&xl(),Ie(e),null;case 19:if(se(ue),s=e.memoizedState,s===null)return Ie(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Tr(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_l(t),o!==null){for(e.flags|=128,Tr(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)s=r,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ne(ue,ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>dr&&(e.flags|=128,i=!0,Tr(s,!1),e.lanes=4194304)}else{if(!i)if(t=_l(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Tr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return Ie(e),null}else 2*ge()-s.renderingStartTime>dr&&r!==1073741824&&(e.flags|=128,i=!0,Tr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,r=ue.current,ne(ue,i?r&1|2:r&1),e):(Ie(e),null);case 22:case 23:return Ia(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ke&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function rg(t,e){switch(xa(e),e.tag){case 1:return Xe(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cr(),se(Ve),se(Fe),Na(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ka(e),null;case 13:if(se(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));or()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ue),null;case 4:return cr(),null;case 10:return ya(e.type._context),null;case 22:case 23:return Ia(),null;case 24:return null;default:return null}}var Ui=!1,De=!1,ig=typeof WeakSet=="function"?WeakSet:Set,A=null;function Kn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){pe(t,e,i)}else r.current=null}function Ao(t,e,r){try{r()}catch(i){pe(t,e,i)}}var vu=!1;function lg(t,e){if(go=fl,t=Lf(),pa(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,c=-1,u=0,d=0,p=t,x=null;t:for(;;){for(var j;p!==r||l!==0&&p.nodeType!==3||(a=o+l),p!==s||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(j=p.firstChild)!==null;)x=p,p=j;for(;;){if(p===t)break t;if(x===r&&++u===l&&(a=o),x===s&&++d===i&&(c=o),(j=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=j}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(jo={focusedElem:t,selectionRange:r},fl=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,h=e.stateNode,f=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ht(e.type,y),k);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=vu,vu=!1,v}function Hr(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&t)===t){var s=l.destroy;l.destroy=void 0,s!==void 0&&Ao(e,r,s)}l=l.next}while(l!==i)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Mo(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Th(t){var e=t.alternate;e!==null&&(t.alternate=null,Th(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[ni],delete e[wo],delete e[$x],delete e[Ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bh(t){return t.tag===5||t.tag===3||t.tag===4}function yu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Io(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(Io(t,e,r),t=t.sibling;t!==null;)Io(t,e,r),t=t.sibling}function Do(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Do(t,e,r),t=t.sibling;t!==null;)Do(t,e,r),t=t.sibling}var Te=null,pt=!1;function $t(t,e,r){for(r=r.child;r!==null;)Rh(t,e,r),r=r.sibling}function Rh(t,e,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ol,r)}catch{}switch(r.tag){case 5:De||Kn(r,e);case 6:var i=Te,l=pt;Te=null,$t(t,e,r),Te=i,pt=l,Te!==null&&(pt?(t=Te,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Te.removeChild(r.stateNode));break;case 18:Te!==null&&(pt?(t=Te,r=r.stateNode,t.nodeType===8?Bs(t.parentNode,r):t.nodeType===1&&Bs(t,r),Zr(t)):Bs(Te,r.stateNode));break;case 4:i=Te,l=pt,Te=r.stateNode.containerInfo,pt=!0,$t(t,e,r),Te=i,pt=l;break;case 0:case 11:case 14:case 15:if(!De&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ao(r,e,o),l=l.next}while(l!==i)}$t(t,e,r);break;case 1:if(!De&&(Kn(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(a){pe(r,e,a)}$t(t,e,r);break;case 21:$t(t,e,r);break;case 22:r.mode&1?(De=(i=De)||r.memoizedState!==null,$t(t,e,r),De=i):$t(t,e,r);break;default:$t(t,e,r)}}function wu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ig),e.forEach(function(i){var l=pg.bind(null,t,i);r.has(i)||(r.add(i),i.then(l,l))})}}function ft(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var l=r[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,pt=!1;break e;case 3:Te=a.stateNode.containerInfo,pt=!0;break e;case 4:Te=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Te===null)throw Error(T(160));Rh(s,o,l),Te=null,pt=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){pe(l,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lh(e,t),e=e.sibling}function Lh(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),yt(t),i&4){try{Hr(3,t,t.return),Ql(3,t)}catch(y){pe(t,t.return,y)}try{Hr(5,t,t.return)}catch(y){pe(t,t.return,y)}}break;case 1:ft(e,t),yt(t),i&512&&r!==null&&Kn(r,r.return);break;case 5:if(ft(e,t),yt(t),i&512&&r!==null&&Kn(r,r.return),t.flags&32){var l=t.stateNode;try{Qr(l,"")}catch(y){pe(t,t.return,y)}}if(i&4&&(l=t.stateNode,l!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zd(l,s),so(a,o);var u=so(a,s);for(o=0;o<c.length;o+=2){var d=c[o],p=c[o+1];d==="style"?nf(l,p):d==="dangerouslySetInnerHTML"?ef(l,p):d==="children"?Qr(l,p):ta(l,d,p,u)}switch(a){case"input":to(l,s);break;case"textarea":Jd(l,s);break;case"select":var x=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Jn(l,!!s.multiple,j,!1):x!==!!s.multiple&&(s.defaultValue!=null?Jn(l,!!s.multiple,s.defaultValue,!0):Jn(l,!!s.multiple,s.multiple?[]:"",!1))}l[ni]=s}catch(y){pe(t,t.return,y)}}break;case 6:if(ft(e,t),yt(t),i&4){if(t.stateNode===null)throw Error(T(162));l=t.stateNode,s=t.memoizedProps;try{l.nodeValue=s}catch(y){pe(t,t.return,y)}}break;case 3:if(ft(e,t),yt(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Zr(e.containerInfo)}catch(y){pe(t,t.return,y)}break;case 4:ft(e,t),yt(t);break;case 13:ft(e,t),yt(t),l=t.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Aa=ge())),i&4&&wu(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(De=(u=De)||d,ft(e,t),De=u):ft(e,t),yt(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(p=A=d;A!==null;){switch(x=A,j=x.child,x.tag){case 0:case 11:case 14:case 15:Hr(4,x,x.return);break;case 1:Kn(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){i=x,r=x.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){pe(i,r,y)}}break;case 5:Kn(x,x.return);break;case 22:if(x.memoizedState!==null){_u(p);continue}}j!==null?(j.return=x,A=j):_u(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{l=p.stateNode,u?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=tf("display",o))}catch(y){pe(t,t.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){pe(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ft(e,t),yt(t),i&4&&wu(t);break;case 21:break;default:ft(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(bh(r)){var i=r;break e}r=r.return}throw Error(T(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Qr(l,""),i.flags&=-33);var s=yu(t);Do(t,s,l);break;case 3:case 4:var o=i.stateNode.containerInfo,a=yu(t);Io(t,a,o);break;default:throw Error(T(161))}}catch(c){pe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sg(t,e,r){A=t,Ph(t)}function Ph(t,e,r){for(var i=(t.mode&1)!==0;A!==null;){var l=A,s=l.child;if(l.tag===22&&i){var o=l.memoizedState!==null||Ui;if(!o){var a=l.alternate,c=a!==null&&a.memoizedState!==null||De;a=Ui;var u=De;if(Ui=o,(De=c)&&!u)for(A=l;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?ku(l):c!==null?(c.return=o,A=c):ku(l);for(;s!==null;)A=s,Ph(s),s=s.sibling;A=l,Ui=a,De=u}Cu(t)}else l.subtreeFlags&8772&&s!==null?(s.return=l,A=s):Cu(t)}}function Cu(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||Ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!De)if(r===null)i.componentDidMount();else{var l=e.elementType===e.type?r.memoizedProps:ht(e.type,r.memoizedProps);i.componentDidUpdate(l,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lu(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}lu(e,o,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Zr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}De||e.flags&512&&Mo(e)}catch(x){pe(e,e.return,x)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function _u(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function ku(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Ql(4,e)}catch(c){pe(e,r,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var l=e.return;try{i.componentDidMount()}catch(c){pe(e,l,c)}}var s=e.return;try{Mo(e)}catch(c){pe(e,s,c)}break;case 5:var o=e.return;try{Mo(e)}catch(c){pe(e,o,c)}}}catch(c){pe(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var og=Math.ceil,Sl=Ft.ReactCurrentDispatcher,Pa=Ft.ReactCurrentOwner,at=Ft.ReactCurrentBatchConfig,Y=0,ke=null,je=null,Le=0,Ke=0,Yn=dn(0),ye=0,ai=null,bn=0,Gl=0,Ba=0,Wr=null,He=null,Aa=0,dr=1/0,bt=null,El=!1,Fo=null,tn=null,Hi=!1,Qt=null,Tl=0,Vr=0,Oo=null,rl=-1,il=0;function ze(){return Y&6?ge():rl!==-1?rl:rl=ge()}function nn(t){return t.mode&1?Y&2&&Le!==0?Le&-Le:Wx.transition!==null?(il===0&&(il=mf()),il):(t=q,t!==0||(t=window.event,t=t===void 0?16:Cf(t.type)),t):1}function gt(t,e,r,i){if(50<Vr)throw Vr=0,Oo=null,Error(T(185));vi(t,r,i),(!(Y&2)||t!==ke)&&(t===ke&&(!(Y&2)&&(Gl|=r),ye===4&&Vt(t,Le)),Qe(t,i),r===1&&Y===0&&!(e.mode&1)&&(dr=ge()+500,Wl&&fn()))}function Qe(t,e){var r=t.callbackNode;Wm(t,e);var i=dl(t,t===ke?Le:0);if(i===0)r!==null&&Bc(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Bc(r),e===1)t.tag===0?Hx(Nu.bind(null,t)):$f(Nu.bind(null,t)),Ox(function(){!(Y&6)&&fn()}),r=null;else{switch(xf(i)){case 1:r=sa;break;case 4:r=hf;break;case 16:r=ul;break;case 536870912:r=pf;break;default:r=ul}r=zh(r,Bh.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Bh(t,e){if(rl=-1,il=0,Y&6)throw Error(T(327));var r=t.callbackNode;if(rr()&&t.callbackNode!==r)return null;var i=dl(t,t===ke?Le:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var l=Y;Y|=2;var s=Mh();(ke!==t||Le!==e)&&(bt=null,dr=ge()+500,Cn(t,e));do try{ug();break}catch(a){Ah(t,a)}while(!0);va(),Sl.current=s,Y=l,je!==null?e=0:(ke=null,Le=0,e=ye)}if(e!==0){if(e===2&&(l=fo(t),l!==0&&(i=l,e=zo(t,l))),e===1)throw r=ai,Cn(t,0),Vt(t,i),Qe(t,ge()),r;if(e===6)Vt(t,i);else{if(l=t.current.alternate,!(i&30)&&!ag(l)&&(e=bl(t,i),e===2&&(s=fo(t),s!==0&&(i=s,e=zo(t,s))),e===1))throw r=ai,Cn(t,0),Vt(t,i),Qe(t,ge()),r;switch(t.finishedWork=l,t.finishedLanes=i,e){case 0:case 1:throw Error(T(345));case 2:jn(t,He,bt);break;case 3:if(Vt(t,i),(i&130023424)===i&&(e=Aa+500-ge(),10<e)){if(dl(t,0)!==0)break;if(l=t.suspendedLanes,(l&i)!==i){ze(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=yo(jn.bind(null,t,He,bt),e);break}jn(t,He,bt);break;case 4:if(Vt(t,i),(i&4194240)===i)break;for(e=t.eventTimes,l=-1;0<i;){var o=31-xt(i);s=1<<o,o=e[o],o>l&&(l=o),i&=~s}if(i=l,i=ge()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*og(i/1960))-i,10<i){t.timeoutHandle=yo(jn.bind(null,t,He,bt),i);break}jn(t,He,bt);break;case 5:jn(t,He,bt);break;default:throw Error(T(329))}}}return Qe(t,ge()),t.callbackNode===r?Bh.bind(null,t):null}function zo(t,e){var r=Wr;return t.current.memoizedState.isDehydrated&&(Cn(t,e).flags|=256),t=bl(t,e),t!==2&&(e=He,He=r,e!==null&&$o(e)),t}function $o(t){He===null?He=t:He.push.apply(He,t)}function ag(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var l=r[i],s=l.getSnapshot;l=l.value;try{if(!jt(s(),l))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~Ba,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-xt(e),i=1<<r;t[r]=-1,e&=~i}}function Nu(t){if(Y&6)throw Error(T(327));rr();var e=dl(t,0);if(!(e&1))return Qe(t,ge()),null;var r=bl(t,e);if(t.tag!==0&&r===2){var i=fo(t);i!==0&&(e=i,r=zo(t,i))}if(r===1)throw r=ai,Cn(t,0),Vt(t,e),Qe(t,ge()),r;if(r===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jn(t,He,bt),Qe(t,ge()),null}function Ma(t,e){var r=Y;Y|=1;try{return t(e)}finally{Y=r,Y===0&&(dr=ge()+500,Wl&&fn())}}function Rn(t){Qt!==null&&Qt.tag===0&&!(Y&6)&&rr();var e=Y;Y|=1;var r=at.transition,i=q;try{if(at.transition=null,q=1,t)return t()}finally{q=i,at.transition=r,Y=e,!(Y&6)&&fn()}}function Ia(){Ke=Yn.current,se(Yn)}function Cn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Fx(r)),je!==null)for(r=je.return;r!==null;){var i=r;switch(xa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xl();break;case 3:cr(),se(Ve),se(Fe),Na();break;case 5:ka(i);break;case 4:cr();break;case 13:se(ue);break;case 19:se(ue);break;case 10:ya(i.type._context);break;case 22:case 23:Ia()}r=r.return}if(ke=t,je=t=rn(t.current,null),Le=Ke=e,ye=0,ai=null,Ba=Gl=bn=0,He=Wr=null,yn!==null){for(e=0;e<yn.length;e++)if(r=yn[e],i=r.interleaved,i!==null){r.interleaved=null;var l=i.next,s=r.pending;if(s!==null){var o=s.next;s.next=l,i.next=o}r.pending=i}yn=null}return t}function Ah(t,e){do{var r=je;try{if(va(),el.current=Nl,kl){for(var i=de.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}kl=!1}if(Tn=0,_e=ve=de=null,Ur=!1,li=0,Pa.current=null,r===null||r.return===null){ye=1,ai=e,je=null;break}e:{var s=t,o=r.return,a=r,c=e;if(e=Le,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var x=d.alternate;x?(d.updateQueue=x.updateQueue,d.memoizedState=x.memoizedState,d.lanes=x.lanes):(d.updateQueue=null,d.memoizedState=null)}var j=fu(o);if(j!==null){j.flags&=-257,hu(j,o,a,s,e),j.mode&1&&du(s,u,e),e=j,c=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(c),e.updateQueue=y}else v.add(c);break e}else{if(!(e&1)){du(s,u,e),Da();break e}c=Error(T(426))}}else if(ae&&a.mode&1){var k=fu(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),hu(k,o,a,s,e),ga(ur(c,a));break e}}s=c=ur(c,a),ye!==4&&(ye=2),Wr===null?Wr=[s]:Wr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=gh(s,c,e);iu(s,h);break e;case 1:a=c;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tn===null||!tn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=jh(s,a,e);iu(s,w);break e}}s=s.return}while(s!==null)}Dh(r)}catch(_){e=_,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function Mh(){var t=Sl.current;return Sl.current=Nl,t===null?Nl:t}function Da(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(bn&268435455)&&!(Gl&268435455)||Vt(ke,Le)}function bl(t,e){var r=Y;Y|=2;var i=Mh();(ke!==t||Le!==e)&&(bt=null,Cn(t,e));do try{cg();break}catch(l){Ah(t,l)}while(!0);if(va(),Y=r,Sl.current=i,je!==null)throw Error(T(261));return ke=null,Le=0,ye}function cg(){for(;je!==null;)Ih(je)}function ug(){for(;je!==null&&!Mm();)Ih(je)}function Ih(t){var e=Oh(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?Dh(t):je=e,Pa.current=null}function Dh(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=rg(r,e),r!==null){r.flags&=32767,je=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,je=null;return}}else if(r=ng(r,e,Ke),r!==null){je=r;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);ye===0&&(ye=5)}function jn(t,e,r){var i=q,l=at.transition;try{at.transition=null,q=1,dg(t,e,r,i)}finally{at.transition=l,q=i}return null}function dg(t,e,r,i){do rr();while(Qt!==null);if(Y&6)throw Error(T(327));r=t.finishedWork;var l=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(Vm(t,s),t===ke&&(je=ke=null,Le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Hi||(Hi=!0,zh(ul,function(){return rr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=q;q=1;var a=Y;Y|=4,Pa.current=null,lg(t,r),Lh(r,t),Lx(jo),fl=!!go,jo=go=null,t.current=r,sg(r),Im(),Y=a,q=o,at.transition=s}else t.current=r;if(Hi&&(Hi=!1,Qt=t,Tl=l),s=t.pendingLanes,s===0&&(tn=null),Om(r.stateNode),Qe(t,ge()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)l=e[r],i(l.value,{componentStack:l.stack,digest:l.digest});if(El)throw El=!1,t=Fo,Fo=null,t;return Tl&1&&t.tag!==0&&rr(),s=t.pendingLanes,s&1?t===Oo?Vr++:(Vr=0,Oo=t):Vr=0,fn(),null}function rr(){if(Qt!==null){var t=xf(Tl),e=at.transition,r=q;try{if(at.transition=null,q=16>t?16:t,Qt===null)var i=!1;else{if(t=Qt,Qt=null,Tl=0,Y&6)throw Error(T(331));var l=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Hr(8,d,s)}var p=d.child;if(p!==null)p.return=d,A=p;else for(;A!==null;){d=A;var x=d.sibling,j=d.return;if(Th(d),d===u){A=null;break}if(x!==null){x.return=j,A=x;break}A=j}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,A=h;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ql(9,a)}}catch(_){pe(a,a.return,_)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Y=l,fn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ol,t)}catch{}i=!0}return i}finally{q=r,at.transition=e}}return!1}function Su(t,e,r){e=ur(r,e),e=gh(t,e,1),t=en(t,e,1),e=ze(),t!==null&&(vi(t,1,e),Qe(t,e))}function pe(t,e,r){if(t.tag===3)Su(t,t,r);else for(;e!==null;){if(e.tag===3){Su(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tn===null||!tn.has(i))){t=ur(r,t),t=jh(e,t,1),e=en(e,t,1),t=ze(),e!==null&&(vi(e,1,t),Qe(e,t));break}}e=e.return}}function fg(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&r,ke===t&&(Le&r)===r&&(ye===4||ye===3&&(Le&130023424)===Le&&500>ge()-Aa?Cn(t,0):Ba|=r),Qe(t,e)}function Fh(t,e){e===0&&(t.mode&1?(e=Bi,Bi<<=1,!(Bi&130023424)&&(Bi=4194304)):e=1);var r=ze();t=It(t,e),t!==null&&(vi(t,e,r),Qe(t,r))}function hg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Fh(t,r)}function pg(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(T(314))}i!==null&&i.delete(e),Fh(t,r)}var Oh;Oh=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)We=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return We=!1,tg(t,e,r);We=!!(t.flags&131072)}else We=!1,ae&&e.flags&1048576&&Uf(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var l=sr(e,Fe.current);nr(e,r),l=Ea(null,e,i,t,l,r);var s=Ta();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(i)?(s=!0,gl(e)):s=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ca(e),l.updater=Vl,e.stateNode=l,l._reactInternals=e,Eo(e,i,t,r),e=Ro(null,e,i,!0,s,r)):(e.tag=0,ae&&s&&ma(e),Oe(null,e,l,r),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,l=i._init,i=l(i._payload),e.type=i,l=e.tag=xg(i),t=ht(i,t),l){case 0:e=bo(null,e,i,t,r);break e;case 1:e=xu(null,e,i,t,r);break e;case 11:e=pu(null,e,i,t,r);break e;case 14:e=mu(null,e,i,ht(i.type,t),r);break e}throw Error(T(306,i,""))}return e;case 0:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ht(i,l),bo(t,e,i,l,r);case 1:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ht(i,l),xu(t,e,i,l,r);case 3:e:{if(Ch(e),t===null)throw Error(T(387));i=e.pendingProps,s=e.memoizedState,l=s.element,Xf(t,e),Cl(e,i,null,r);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){l=ur(Error(T(423)),e),e=gu(t,e,i,r,l);break e}else if(i!==l){l=ur(Error(T(424)),e),e=gu(t,e,i,r,l);break e}else for(Ze=qt(e.stateNode.containerInfo.firstChild),Je=e,ae=!0,mt=null,r=Yf(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(or(),i===l){e=Dt(t,e,r);break e}Oe(t,e,i,r)}e=e.child}return e;case 5:return Zf(e),t===null&&ko(e),i=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,o=l.children,vo(i,l)?o=null:s!==null&&vo(i,s)&&(e.flags|=32),wh(t,e),Oe(t,e,o,r),e.child;case 6:return t===null&&ko(e),null;case 13:return _h(t,e,r);case 4:return _a(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ar(e,null,i,r):Oe(t,e,i,r),e.child;case 11:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ht(i,l),pu(t,e,i,l,r);case 7:return Oe(t,e,e.pendingProps,r),e.child;case 8:return Oe(t,e,e.pendingProps.children,r),e.child;case 12:return Oe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,l=e.pendingProps,s=e.memoizedProps,o=l.value,ne(yl,i._currentValue),i._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===l.children&&!Ve.current){e=Dt(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Bt(-1,r&-r),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),No(s.return,r,e),a.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),No(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,l.children,r),e=e.child}return e;case 9:return l=e.type,i=e.pendingProps.children,nr(e,r),l=ct(l),i=i(l),e.flags|=1,Oe(t,e,i,r),e.child;case 14:return i=e.type,l=ht(i,e.pendingProps),l=ht(i.type,l),mu(t,e,i,l,r);case 15:return vh(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ht(i,l),nl(t,e),e.tag=1,Xe(i)?(t=!0,gl(e)):t=!1,nr(e,r),Gf(e,i,l),Eo(e,i,l,r),Ro(null,e,i,!0,t,r);case 19:return kh(t,e,r);case 22:return yh(t,e,r)}throw Error(T(156,e.tag))};function zh(t,e){return ff(t,e)}function mg(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,r,i){return new mg(t,e,r,i)}function Fa(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xg(t){if(typeof t=="function")return Fa(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ra)return 11;if(t===ia)return 14}return 2}function rn(t,e){var r=t.alternate;return r===null?(r=ot(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ll(t,e,r,i,l,s){var o=2;if(i=t,typeof t=="function")Fa(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zn:return _n(r.children,l,s,e);case na:o=8,l|=8;break;case Ys:return t=ot(12,r,e,l|2),t.elementType=Ys,t.lanes=s,t;case Zs:return t=ot(13,r,e,l),t.elementType=Zs,t.lanes=s,t;case Js:return t=ot(19,r,e,l),t.elementType=Js,t.lanes=s,t;case Gd:return Kl(r,l,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xd:o=10;break e;case Qd:o=9;break e;case ra:o=11;break e;case ia:o=14;break e;case Ut:o=16,i=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=ot(o,r,e,l),e.elementType=t,e.type=i,e.lanes=s,e}function _n(t,e,r,i){return t=ot(7,t,i,e),t.lanes=r,t}function Kl(t,e,r,i){return t=ot(22,t,i,e),t.elementType=Gd,t.lanes=r,t.stateNode={isHidden:!1},t}function $s(t,e,r){return t=ot(6,t,null,e),t.lanes=r,t}function Us(t,e,r){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gg(t,e,r,i,l){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cs(0),this.expirationTimes=Cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cs(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Oa(t,e,r,i,l,s,o,a,c){return t=new gg(t,e,r,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(s),t}function jg(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function $h(t){if(!t)return on;t=t._reactInternals;e:{if(Bn(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var r=t.type;if(Xe(r))return zf(t,r,e)}return e}function Uh(t,e,r,i,l,s,o,a,c){return t=Oa(r,i,!0,t,l,s,o,a,c),t.context=$h(null),r=t.current,i=ze(),l=nn(r),s=Bt(i,l),s.callback=e??null,en(r,s,l),t.current.lanes=l,vi(t,l,i),Qe(t,i),t}function Yl(t,e,r,i){var l=e.current,s=ze(),o=nn(l);return r=$h(r),e.context===null?e.context=r:e.pendingContext=r,e=Bt(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=en(l,e,o),t!==null&&(gt(t,l,o,s),qi(t,l,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Eu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function za(t,e){Eu(t,e),(t=t.alternate)&&Eu(t,e)}function vg(){return null}var Hh=typeof reportError=="function"?reportError:function(t){console.error(t)};function $a(t){this._internalRoot=t}Zl.prototype.render=$a.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Yl(t,e,null,null)};Zl.prototype.unmount=$a.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rn(function(){Yl(null,t,null,null)}),e[Mt]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=vf();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Wt.length&&e!==0&&e<Wt[r].priority;r++);Wt.splice(r,0,t),r===0&&wf(t)}};function Ua(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function yg(t,e,r,i,l){if(l){if(typeof i=="function"){var s=i;i=function(){var u=Rl(o);s.call(u)}}var o=Uh(e,i,t,0,null,!1,!1,"",Tu);return t._reactRootContainer=o,t[Mt]=o.current,ei(t.nodeType===8?t.parentNode:t),Rn(),o}for(;l=t.lastChild;)t.removeChild(l);if(typeof i=="function"){var a=i;i=function(){var u=Rl(c);a.call(u)}}var c=Oa(t,0,!1,null,null,!1,!1,"",Tu);return t._reactRootContainer=c,t[Mt]=c.current,ei(t.nodeType===8?t.parentNode:t),Rn(function(){Yl(e,c,r,i)}),c}function ql(t,e,r,i,l){var s=r._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var a=l;l=function(){var c=Rl(o);a.call(c)}}Yl(e,o,t,l)}else o=yg(r,e,t,l,i);return Rl(o)}gf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Pr(e.pendingLanes);r!==0&&(oa(e,r|1),Qe(e,ge()),!(Y&6)&&(dr=ge()+500,fn()))}break;case 13:Rn(function(){var i=It(t,1);if(i!==null){var l=ze();gt(i,t,1,l)}}),za(t,1)}};aa=function(t){if(t.tag===13){var e=It(t,134217728);if(e!==null){var r=ze();gt(e,t,134217728,r)}za(t,134217728)}};jf=function(t){if(t.tag===13){var e=nn(t),r=It(t,e);if(r!==null){var i=ze();gt(r,t,e,i)}za(t,e)}};vf=function(){return q};yf=function(t,e){var r=q;try{return q=t,e()}finally{q=r}};ao=function(t,e,r){switch(e){case"input":if(to(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var l=Hl(i);if(!l)throw Error(T(90));Yd(i),to(i,l)}}}break;case"textarea":Jd(t,r);break;case"select":e=r.value,e!=null&&Jn(t,!!r.multiple,e,!1)}};sf=Ma;of=Rn;var wg={usingClientEntryPoint:!1,Events:[wi,Wn,Hl,rf,lf,Ma]},br={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cg={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uf(t),t===null?null:t.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Ol=Wi.inject(Cg),Nt=Wi}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wg;nt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ua(e))throw Error(T(200));return jg(t,e,null,r)};nt.createRoot=function(t,e){if(!Ua(t))throw Error(T(299));var r=!1,i="",l=Hh;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=Oa(t,1,!1,null,null,r,!1,i,l),t[Mt]=e.current,ei(t.nodeType===8?t.parentNode:t),new $a(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=uf(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return Rn(t)};nt.hydrate=function(t,e,r){if(!Jl(e))throw Error(T(200));return ql(null,t,e,!0,r)};nt.hydrateRoot=function(t,e,r){if(!Ua(t))throw Error(T(405));var i=r!=null&&r.hydratedSources||null,l=!1,s="",o=Hh;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=Uh(e,null,t,1,r??null,l,!1,s,o),t[Mt]=e.current,ei(t),i)for(t=0;t<i.length;t++)r=i[t],l=r._getVersion,l=l(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,l]:e.mutableSourceEagerHydrationData.push(r,l);return new Zl(e)};nt.render=function(t,e,r){if(!Jl(e))throw Error(T(200));return ql(null,t,e,!1,r)};nt.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(T(40));return t._reactRootContainer?(Rn(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};nt.unstable_batchedUpdates=Ma;nt.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!Jl(r))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return ql(t,e,r,!1,i)};nt.version="18.2.0-next-9e3b772b8-20220608";function Wh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wh)}catch(t){console.error(t)}}Wh(),$d.exports=nt;var _i=$d.exports,bu=_i;Gs.createRoot=bu.createRoot,Gs.hydrateRoot=bu.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},ci.apply(this,arguments)}var Gt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gt||(Gt={}));const Ru="popstate";function _g(t){t===void 0&&(t={});function e(l,s){let{pathname:o="/",search:a="",hash:c=""}=An(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Uo("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(l,s){let o=l.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=l.location.href,u=c.indexOf("#");a=u===-1?c:c.slice(0,u)}return a+"#"+(typeof s=="string"?s:Ll(s))}function i(l,s){es(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Ng(e,r,i,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function es(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kg(){return Math.random().toString(36).substr(2,8)}function Lu(t,e){return{usr:t.state,key:t.key,idx:e}}function Uo(t,e,r,i){return r===void 0&&(r=null),ci({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?An(e):e,{state:r,key:e&&e.key||i||kg()})}function Ll(t){let{pathname:e="/",search:r="",hash:i=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function An(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Ng(t,e,r,i){i===void 0&&(i={});let{window:l=document.defaultView,v5Compat:s=!1}=i,o=l.history,a=Gt.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(ci({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){a=Gt.Pop;let k=d(),h=k==null?null:k-u;u=k,c&&c({action:a,location:y.location,delta:h})}function x(k,h){a=Gt.Push;let f=Uo(y.location,k,h);r&&r(f,k),u=d()+1;let g=Lu(f,u),w=y.createHref(f);try{o.pushState(g,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(w)}s&&c&&c({action:a,location:y.location,delta:1})}function j(k,h){a=Gt.Replace;let f=Uo(y.location,k,h);r&&r(f,k),u=d();let g=Lu(f,u),w=y.createHref(f);o.replaceState(g,"",w),s&&c&&c({action:a,location:y.location,delta:0})}function v(k){let h=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof k=="string"?k:Ll(k);return fe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return a},get location(){return t(l,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Ru,p),c=k,()=>{l.removeEventListener(Ru,p),c=null}},createHref(k){return e(l,k)},createURL:v,encodeLocation(k){let h=v(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:j,go(k){return o.go(k)}};return y}var Pu;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pu||(Pu={}));function Sg(t,e,r){r===void 0&&(r="/");let i=typeof e=="string"?An(e):e,l=ui(i.pathname||"/",r);if(l==null)return null;let s=Vh(t);Eg(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ig(s[a],Fg(l));return o}function Vh(t,e,r,i){e===void 0&&(e=[]),r===void 0&&(r=[]),i===void 0&&(i="");let l=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(fe(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=ln([i,c.relativePath]),d=r.concat(c);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vh(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ag(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))l(s,o);else for(let c of Xh(s.path))l(s,o,c)}),e}function Xh(t){let e=t.split("/");if(e.length===0)return[];let[r,...i]=e,l=r.endsWith("?"),s=r.replace(/\?$/,"");if(i.length===0)return l?[s,""]:[s];let o=Xh(i.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),l&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Eg(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Mg(e.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const Tg=/^:\w+$/,bg=3,Rg=2,Lg=1,Pg=10,Bg=-2,Bu=t=>t==="*";function Ag(t,e){let r=t.split("/"),i=r.length;return r.some(Bu)&&(i+=Bg),e&&(i+=Rg),r.filter(l=>!Bu(l)).reduce((l,s)=>l+(Tg.test(s)?bg:s===""?Lg:Pg),i)}function Mg(t,e){return t.length===e.length&&t.slice(0,-1).every((i,l)=>i===e[l])?t[t.length-1]-e[e.length-1]:0}function Ig(t,e){let{routesMeta:r}=t,i={},l="/",s=[];for(let o=0;o<r.length;++o){let a=r[o],c=o===r.length-1,u=l==="/"?e:e.slice(l.length)||"/",d=Ho({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!d)return null;Object.assign(i,d.params);let p=a.route;s.push({params:i,pathname:ln([l,d.pathname]),pathnameBase:Hg(ln([l,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(l=ln([l,d.pathnameBase]))}return s}function Ho(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,i]=Dg(t.path,t.caseSensitive,t.end),l=e.match(r);if(!l)return null;let s=l[0],o=s.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:i.reduce((u,d,p)=>{let{paramName:x,isOptional:j}=d;if(x==="*"){let y=a[p]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[p];return j&&!v?u[x]=void 0:u[x]=Og(v||"",x),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Dg(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),es(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,c)=>(i.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),i]}function Fg(t){try{return decodeURI(t)}catch(e){return es(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Og(t,e){try{return decodeURIComponent(t)}catch(r){return es(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function ui(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,i=t.charAt(r);return i&&i!=="/"?null:t.slice(r)||"/"}function zg(t,e){e===void 0&&(e="/");let{pathname:r,search:i="",hash:l=""}=typeof t=="string"?An(t):t;return{pathname:r?r.startsWith("/")?r:$g(r,e):e,search:Wg(i),hash:Vg(l)}}function $g(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Hs(t,e,r,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ug(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Ha(t,e){let r=Ug(t);return e?r.map((i,l)=>l===t.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Wa(t,e,r,i){i===void 0&&(i=!1);let l;typeof t=="string"?l=An(t):(l=ci({},t),fe(!l.pathname||!l.pathname.includes("?"),Hs("?","pathname","search",l)),fe(!l.pathname||!l.pathname.includes("#"),Hs("#","pathname","hash",l)),fe(!l.search||!l.search.includes("#"),Hs("#","search","hash",l)));let s=t===""||l.pathname==="",o=s?"/":l.pathname,a;if(o==null)a=r;else{let p=e.length-1;if(!i&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),p-=1;l.pathname=x.join("/")}a=p>=0?e[p]:"/"}let c=zg(l,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ln=t=>t.join("/").replace(/\/\/+/g,"/"),Hg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Wg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Vg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Xg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qh=["post","put","patch","delete"];new Set(Qh);const Qg=["get",...Qh];new Set(Qg);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},di.apply(this,arguments)}const ts=m.createContext(null),Gh=m.createContext(null),Ot=m.createContext(null),ns=m.createContext(null),hn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Kh=m.createContext(null);function Gg(t,e){let{relative:r}=e===void 0?{}:e;vr()||fe(!1);let{basename:i,navigator:l}=m.useContext(Ot),{hash:s,pathname:o,search:a}=rs(t,{relative:r}),c=o;return i!=="/"&&(c=o==="/"?i:ln([i,o])),l.createHref({pathname:c,search:a,hash:s})}function vr(){return m.useContext(ns)!=null}function yr(){return vr()||fe(!1),m.useContext(ns).location}function Yh(t){m.useContext(Ot).static||m.useLayoutEffect(t)}function Zh(){let{isDataRoute:t}=m.useContext(hn);return t?o0():Kg()}function Kg(){vr()||fe(!1);let t=m.useContext(ts),{basename:e,future:r,navigator:i}=m.useContext(Ot),{matches:l}=m.useContext(hn),{pathname:s}=yr(),o=JSON.stringify(Ha(l,r.v7_relativeSplatPath)),a=m.useRef(!1);return Yh(()=>{a.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let p=Wa(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ln([e,p.pathname])),(d.replace?i.replace:i.push)(p,d.state,d)},[e,i,o,s,t])}function rs(t,e){let{relative:r}=e===void 0?{}:e,{future:i}=m.useContext(Ot),{matches:l}=m.useContext(hn),{pathname:s}=yr(),o=JSON.stringify(Ha(l,i.v7_relativeSplatPath));return m.useMemo(()=>Wa(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function Yg(t,e){return Zg(t,e)}function Zg(t,e,r,i){vr()||fe(!1);let{navigator:l}=m.useContext(Ot),{matches:s}=m.useContext(hn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=yr(),d;if(e){var p;let k=typeof e=="string"?An(e):e;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||fe(!1),d=k}else d=u;let x=d.pathname||"/",j=c==="/"?x:x.slice(c.length)||"/",v=Sg(t,{pathname:j}),y=n0(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:ln([c,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:ln([c,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,r,i);return e&&y?m.createElement(ns.Provider,{value:{location:di({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gt.Pop}},y):y}function Jg(){let t=s0(),e=Xg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),r?m.createElement("pre",{style:l},r):null,s)}const qg=m.createElement(Jg,null);class e0 extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?m.createElement(hn.Provider,{value:this.props.routeContext},m.createElement(Kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t0(t){let{routeContext:e,match:r,children:i}=t,l=m.useContext(ts);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),m.createElement(hn.Provider,{value:e},i)}function n0(t,e,r,i){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),i===void 0&&(i=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,a=(l=r)==null?void 0:l.errors;if(a!=null){let d=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id]));d>=0||fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:x,errors:j}=r,v=p.route.loader&&x[p.route.id]===void 0&&(!j||j[p.route.id]===void 0);if(p.route.lazy||v){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,x)=>{let j,v=!1,y=null,k=null;r&&(j=a&&p.route.id?a[p.route.id]:void 0,y=p.route.errorElement||qg,c&&(u<0&&x===0?(a0("route-fallback",!1),v=!0,k=null):u===x&&(v=!0,k=p.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,x+1)),f=()=>{let g;return j?g=y:v?g=k:p.route.Component?g=m.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,m.createElement(t0,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:r!=null},children:g})};return r&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?m.createElement(e0,{location:r.location,revalidation:r.revalidation,component:y,error:j,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Jh=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jh||{}),Pl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pl||{});function r0(t){let e=m.useContext(ts);return e||fe(!1),e}function i0(t){let e=m.useContext(Gh);return e||fe(!1),e}function l0(t){let e=m.useContext(hn);return e||fe(!1),e}function qh(t){let e=l0(),r=e.matches[e.matches.length-1];return r.route.id||fe(!1),r.route.id}function s0(){var t;let e=m.useContext(Kh),r=i0(Pl.UseRouteError),i=qh(Pl.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[i]}function o0(){let{router:t}=r0(Jh.UseNavigateStable),e=qh(Pl.UseNavigateStable),r=m.useRef(!1);return Yh(()=>{r.current=!0}),m.useCallback(function(l,s){s===void 0&&(s={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,di({fromRouteId:e},s)))},[t,e])}const Au={};function a0(t,e,r){!e&&!Au[t]&&(Au[t]=!0)}function Vi(t){let{to:e,replace:r,state:i,relative:l}=t;vr()||fe(!1);let{future:s,static:o}=m.useContext(Ot),{matches:a}=m.useContext(hn),{pathname:c}=yr(),u=Zh(),d=Wa(e,Ha(a,s.v7_relativeSplatPath),c,l==="path"),p=JSON.stringify(d);return m.useEffect(()=>u(JSON.parse(p),{replace:r,state:i,relative:l}),[u,p,l,r,i]),null}function Z(t){fe(!1)}function c0(t){let{basename:e="/",children:r=null,location:i,navigationType:l=Gt.Pop,navigator:s,static:o=!1,future:a}=t;vr()&&fe(!1);let c=e.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:s,static:o,future:di({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof i=="string"&&(i=An(i));let{pathname:d="/",search:p="",hash:x="",state:j=null,key:v="default"}=i,y=m.useMemo(()=>{let k=ui(d,c);return k==null?null:{location:{pathname:k,search:p,hash:x,state:j,key:v},navigationType:l}},[c,d,p,x,j,v,l]);return y==null?null:m.createElement(Ot.Provider,{value:u},m.createElement(ns.Provider,{children:r,value:y}))}function is(t){let{children:e,location:r}=t;return Yg(Wo(e),r)}new Promise(()=>{});function Wo(t,e){e===void 0&&(e=[]);let r=[];return m.Children.forEach(t,(i,l)=>{if(!m.isValidElement(i))return;let s=[...e,l];if(i.type===m.Fragment){r.push.apply(r,Wo(i.props.children,s));return}i.type!==Z&&fe(!1),!i.props.index||!i.props.children||fe(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Wo(i.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Bl.apply(this,arguments)}function ep(t,e){if(t==null)return{};var r={},i=Object.keys(t),l,s;for(s=0;s<i.length;s++)l=i[s],!(e.indexOf(l)>=0)&&(r[l]=t[l]);return r}function u0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function d0(t,e){return t.button===0&&(!e||e==="_self")&&!u0(t)}const f0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],h0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],p0=m.createContext({isTransitioning:!1}),m0="startTransition",Mu=Jo[m0];function x0(t){let{basename:e,children:r,future:i,window:l}=t,s=m.useRef();s.current==null&&(s.current=_g({window:l,v5Compat:!0}));let o=s.current,[a,c]=m.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},d=m.useCallback(p=>{u&&Mu?Mu(()=>c(p)):c(p)},[c,u]);return m.useLayoutEffect(()=>o.listen(d),[o,d]),m.createElement(c0,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o,future:i})}const g0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tp=m.forwardRef(function(e,r){let{onClick:i,relative:l,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:d,unstable_viewTransition:p}=e,x=ep(e,f0),{basename:j}=m.useContext(Ot),v,y=!1;if(typeof u=="string"&&j0.test(u)&&(v=u,g0))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),_=ui(w.pathname,j);w.origin===g.origin&&_!=null?u=_+w.search+w.hash:y=!0}catch{}let k=Gg(u,{relative:l}),h=y0(u,{replace:o,state:a,target:c,preventScrollReset:d,relative:l,unstable_viewTransition:p});function f(g){i&&i(g),g.defaultPrevented||h(g)}return m.createElement("a",Bl({},x,{href:v||k,onClick:y||s?i:f,ref:r,target:c}))}),te=m.forwardRef(function(e,r){let{"aria-current":i="page",caseSensitive:l=!1,className:s="",end:o=!1,style:a,to:c,unstable_viewTransition:u,children:d}=e,p=ep(e,h0),x=rs(c,{relative:p.relative}),j=yr(),v=m.useContext(Gh),{navigator:y}=m.useContext(Ot),k=v!=null&&w0(x)&&u===!0,h=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,f=j.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(f=f.toLowerCase(),g=g?g.toLowerCase():null,h=h.toLowerCase());const w=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let _=f===h||!o&&f.startsWith(h)&&f.charAt(w)==="/",S=g!=null&&(g===h||!o&&g.startsWith(h)&&g.charAt(h.length)==="/"),E={isActive:_,isPending:S,isTransitioning:k},L=_?i:void 0,z;typeof s=="function"?z=s(E):z=[s,_?"active":null,S?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(E):a;return m.createElement(tp,Bl({},p,{"aria-current":L,className:z,ref:r,style:D,to:c,unstable_viewTransition:u}),typeof d=="function"?d(E):d)});var Vo;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vo||(Vo={}));var Iu;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Iu||(Iu={}));function v0(t){let e=m.useContext(ts);return e||fe(!1),e}function y0(t,e){let{target:r,replace:i,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=Zh(),u=yr(),d=rs(t,{relative:o});return m.useCallback(p=>{if(d0(p,r)){p.preventDefault();let x=i!==void 0?i:Ll(u)===Ll(d);c(t,{replace:x,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,c,d,i,l,r,t,s,o,a])}function w0(t,e){e===void 0&&(e={});let r=m.useContext(p0);r==null&&fe(!1);let{basename:i}=v0(Vo.useViewTransitionState),l=rs(t,{relative:e.relative});if(!r.isTransitioning)return!1;let s=ui(r.currentLocation.pathname,i)||r.currentLocation.pathname,o=ui(r.nextLocation.pathname,i)||r.nextLocation.pathname;return Ho(l.pathname,o)!=null||Ho(l.pathname,s)!=null}const np="data:image/svg+xml,%3csvg%20viewBox='0%200%20185%20185'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='185'%20xmlns:ev='http://www.w3.org/2001/xml-events'%20xmlns='http://www.w3.org/2000/svg'%20height='185'%3e%3cdefs/%3e%3cg%20transform='translate(5.5,5.5)'%20id='page1'%3e%3crect%20x='0'%20fill='%23ffffff'%20width='175'%20height='175'%20y='0'/%3e%3cpath%20stroke-width='1'%20transform='translate(1.020200,1.435200)'%20fill='%23409eff'%20stroke='%23409eff'%20d='M166.9,86.3C186.1,49.0,152.2,40.9,152.2,40.9C151.0,-0.7,109.6,12.9,109.6,12.9C88.0,-16.1,62.5,12.9,62.5,12.9C62.5,12.9,22.4,-1.3,23.7,40.9C23.7,40.9,-14.7,48.6,7.4,86.3C7.4,86.3,-16.6,117.2,21.7,131.6C21.7,131.6,21.1,169.4,60.0,159.6C60.0,159.6,80.0,189.7,109.6,159.6C109.6,159.6,148.5,173.0,148.5,131.6C148.5,131.6,187.7,126.4,166.9,86.3z'%20fill-rule='nonzero'%20id='shape1'/%3e%3cpath%20stroke-width='1'%20transform='translate(9.846800,10.261800)'%20fill='%23ffffff'%20stroke='%23409eff'%20d='M149.8,77.5C167.1,44.0,136.7,36.7,136.7,36.7C135.6,-0.6,98.4,11.6,98.4,11.6C79.0,-14.5,56.1,11.6,56.1,11.6C56.1,11.6,20.1,-1.2,21.3,36.7C21.3,36.7,-13.2,43.7,6.7,77.5C6.7,77.5,-14.9,105.2,19.5,118.2C19.5,118.2,18.9,152.1,53.9,143.3C53.9,143.3,71.8,170.3,98.4,143.3C98.4,143.3,133.3,155.3,133.3,118.2C133.3,118.2,168.6,113.5,149.8,77.5z'%20fill-rule='nonzero'%20id='shape2'/%3e%3cpath%20stroke-width='1'%20transform='translate(46.859300,47.353600)'%20fill='%23409eff'%20stroke='%23409eff'%20d='M73.6,43.5L36.3,43.5C34.7,43.5,33.9,44.2,33.9,45.6C33.9,49.0,35.7,52.3,39.5,55.3C43.2,58.4,47.2,59.9,51.5,59.9C54.0,59.9,56.8,59.4,59.9,58.4C63.0,57.4,65.6,56.2,67.6,54.8C69.4,53.5,70.8,52.9,71.9,52.9C73.2,52.9,74.6,53.8,75.9,55.4C77.2,57.1,77.9,58.9,77.9,60.7C77.9,64.5,75.5,68.2,70.8,71.7C62.3,78.0,52.6,81.1,41.6,81.1C30.5,81.1,21.2,77.9,13.7,71.5C10.1,68.3,7.1,64.5,4.7,60.0C1.6,54.0,.0,47.7,.0,41.1C.0,32.2,2.7,24.2,8.1,17.1C12.7,11.0,18.7,6.4,25.9,3.4C31.3,1.1,37.1,.0,43.4,.0C53.4,.0,62.0,2.9,69.0,8.6C72.5,11.4,75.4,14.8,77.6,18.7C80.1,23.2,81.3,27.5,81.3,31.7C81.3,35.2,80.6,38.0,79.2,40.2C77.7,42.4,75.9,43.5,73.6,43.5zM38.4,28.6L46.4,28.6C49.8,28.6,51.5,27.1,51.5,24.0C51.5,21.1,50.7,18.8,49.0,17.0C47.4,15.2,45.2,14.3,42.6,14.3C39.6,14.3,37.3,15.4,35.6,17.8C34.0,19.9,33.2,22.1,33.2,24.4C33.2,25.9,33.6,27.0,34.4,27.7C35.2,28.3,36.5,28.6,38.4,28.6z'%20fill-rule='nonzero'%20id='shape3'/%3e%3c/g%3e%3c/svg%3e";function C0(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"home-content",children:[n.jsxs("div",{className:"description",children:[n.jsx("img",{src:np,alt:"pelement-react"}),n.jsx("h1",{children:"pelement react"}),n.jsx("p",{children:"基于Element Plus 和 react，面向设计师和开发者的组件库"}),n.jsx(tp,{to:"/component/button",children:"快速开始"})]}),n.jsxs("div",{className:"join-us",children:[n.jsx("h3",{children:"加入我们"}),n.jsxs("div",{children:[n.jsx("label",{children:"Email: "}),n.jsx("span",{children:"llkui241569@163.com"})]}),n.jsxs("div",{children:[n.jsx("label",{children:"QQ: "}),n.jsx("span",{children:"1728366431"})]})]}),n.jsxs("div",{className:"footer-main text-xs",children:[n.jsxs("p",{children:["Released under the ",n.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferer",children:"MIT License"}),"."]}),n.jsxs("p",{children:["Made with ❤️ by ",n.jsx("a",{href:"https://github.com/llkui",target:"_blank",rel:"noopener noreferer",children:"llkui"})]})]})]})})}function Du(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"安装"}),`
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
`})})]})}function _0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Du,{...t})}):Du(t)}function Fu(t){const e={h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.6"}),`
`,n.jsx(e.p,{children:"2024-01-28"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Popconfirm"}),`
`,n.jsx(e.li,{children:"Components [Icon] add QuestionFilled"}),`
`,n.jsx(e.li,{children:"Components add Tag"}),`
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
`]})]})}function k0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Fu,{...t})}):Fu(t)}function Ou(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"社区精选组件"}),`
`,n.jsx(e.h2,{children:"推荐组件"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"推荐组件"}),n.jsx(e.th,{children:"pelement-react使用场景"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"浮动元素"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/floating-ui/floating-ui/",children:"Floating UI"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Tooltip"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"svg图标"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/pd4d10/vite-plugin-svgr/",children:"vite-plugin-svgr"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Icon"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Markdown 渲染"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/mdx-js/mdx/",children:"@mdx-js/rollup"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Markdown"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"代码高亮"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/highlightjs/highlight.js/",children:"highlight.js"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"CodeBlock"})})]})]})]})]})}function N0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ou,{...t})}):Ou(t)}function S0(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"基础"}),n.jsx(te,{to:"installation",children:"安装"}),n.jsx("p",{className:"sidebar-group__title",children:"进阶"}),n.jsx(te,{to:"changelog",children:"更新日志"}),n.jsx("p",{className:"sidebar-group__title",children:"其他"}),n.jsx(te,{to:"recommendation",children:"社区精选组件"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsx("div",{className:"markdown-body",children:n.jsxs(is,{children:[n.jsx(Z,{path:"installation",element:n.jsx(_0,{})}),n.jsx(Z,{path:"changelog",element:n.jsx(k0,{})}),n.jsx(Z,{path:"recommendation",element:n.jsx(N0,{})})]})})})})]})}const E0=`import { Alert } from 'pelement-react'\r
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
export default AlertBasic`,T0=`import { Alert } from 'pelement-react'\r
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
export default AlertCenter`,b0=`import { Alert } from 'pelement-react'\r
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
export default AlertClose`,R0=`import { Alert } from 'pelement-react'\r
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
export default AlertDescription`,L0=`import { Alert } from 'pelement-react'\r
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
export default AlertEffect`,P0=`import { Alert } from 'pelement-react'\r
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
export default AlertIconDescription`,B0=`import { Alert } from 'pelement-react'\r
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
export default AlertIcon`,A0=`import { Avatar, Col, Row } from 'pelement-react'\r
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
export default AvatarBasic`,M0=`import { Avatar } from 'pelement-react'\r
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
export default AvatarError`,I0=`import { Avatar } from "pelement-react"\r
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
export default AvatarFit`,D0=`import { Avatar, UserFilled } from 'pelement-react'\r
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
export default AvatarType`,F0=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
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
export default ButtonBasic`,O0=`import { Button } from 'pelement-react'\r
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
export default ButtonDisabled`,z0=`import { Button } from 'pelement-react'\r
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
export default ButtonLink`,$0=`import { Collapse, CollapseItem } from 'pelement-react'\r
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
export default CollapseBasic`,U0=`import { Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic`,H0=`import { Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic1`,W0=`import { Aside, Container, Main } from 'pelement-react'\r
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
export default ContainerBasic2`,V0=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic3`,X0=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic4`,Q0=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic5`,G0=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic6`,K0=`import { Divider } from 'pelement-react'\r
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
export default DividerBasic`,Y0=`import { Divider } from 'pelement-react'\r
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
export default DividerBorder`,Z0=`import { Divider, StarFilled } from 'pelement-react'\r
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
export default DividerContent`,J0=`import { Divider } from 'pelement-react'\r
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
export default DividerDirection`,q0=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close } from 'pelement-react'\r
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
      <Close style={{ fontSize: '20px' }} />\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,ej=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBasic`,tj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBootstrap`,nj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutGutter`,rj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutJustify`,ij=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutMix`,lj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutOffset`,sj=`import { Link } from 'pelement-react'\r
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
export default LinkBasic`,oj=`import { Link } from 'pelement-react'\r
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
export default LinkDisabled`,aj=`import { Edit, Link, View } from 'pelement-react'\r
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
export default LinkIcon`,cj=`import { Link } from 'pelement-react'\r
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
export default LinkUnderline`,uj=`import { Button, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmBasic`,dj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmEvent`,fj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmIcon`,hj=`import { Button, Popover } from 'pelement-react'\r
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
export default PopoverBasic`,pj=`import { Progress } from 'pelement-react'\r
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
export default ProgressBasic`,mj=`import { Progress } from 'pelement-react'\r
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
export default ProgressTextInside`,xj=`import { Button, Col, Result, Row } from 'pelement-react'\r
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
export default ResultBasic`,gj=`import { Button, Result } from 'pelement-react'\r
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
export default ResultIcon`,jj=`import { Hide, Switch, View } from 'pelement-react'\r
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
export default SwitchActionIcon`,vj=`import { Switch } from 'pelement-react'\r
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
export default SwitchBasic`,yj=`import { useState } from 'react'\r
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
export default SwitchBeforeChange`,wj=`import { Switch } from 'pelement-react'\r
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
export default SwitchDisabled`,Cj=`import { Check, Close, Switch } from 'pelement-react'\r
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
export default SwitchIcon`,_j=`import { Switch } from 'pelement-react'\r
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
export default SwitchLoading`,kj=`import { Switch } from 'pelement-react'\r
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
export default SwitchSize`,Nj=`import { Switch } from 'pelement-react'\r
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
export default SwitchText`,Sj=`import { Tag } from 'pelement-react'\r
\r
function TagBasic() {\r
  return (\r
    <>\r
      <Tag>Tag 1</Tag>\r
      <Tag className="ml-2" type="success">Tag 2</Tag>\r
      <Tag className="ml-2" type="info">Tag 3</Tag>\r
      <Tag className="ml-2" type="warning">Tag 4</Tag>\r
      <Tag className="ml-2" type="danger">Tag 5</Tag>\r
    </>\r
  )\r
}\r
\r
export default TagBasic`,Ej=`import { Tag } from 'pelement-react'\r
\r
function TagClosable() {\r
  const tagList = [\r
    { name: 'Tag 1', type: '' },\r
    { name: 'Tag 2', type: 'success' },\r
    { name: 'Tag 3', type: 'info' },\r
    { name: 'Tag 4', type: 'warning' },\r
    { name: 'Tag 5', type: 'danger' },\r
  ].map(tag =>\r
    <Tag\r
      className="mx-1"\r
      closable\r
      type={tag.type as any}\r
    >\r
      {tag.name}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      {tagList}\r
    </>\r
  )\r
}\r
\r
export default TagClosable`,Tj=`import { Tag } from 'pelement-react'\r
\r
function TagEffect() {\r
  const items = [\r
    { type: '', label: 'Tag 1' },\r
    { type: 'success', label: 'Tag 2' },\r
    { type: 'info', label: 'Tag 3' },\r
    { type: 'danger', label: 'Tag 4' },\r
    { type: 'warning', label: 'Tag 5' },\r
  ]\r
\r
  const darkList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const darkClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1 line-height-2">Dark</span>\r
        {darkList}\r
        {darkClosable}\r
      </div>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1">Light</span>\r
        {lightList}\r
        {lightClosable}\r
      </div>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1">Plain</span>\r
        {plainList}\r
        {plainClosable}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TagEffect`,bj=`import { Tag } from 'pelement-react'\r
\r
function TagRound() {\r
  const items = [\r
    { type: '', label: 'Tag 1' },\r
    { type: 'success', label: 'Tag 2' },\r
    { type: 'info', label: 'Tag 3' },\r
    { type: 'danger', label: 'Tag 4' },\r
    { type: 'warning', label: 'Tag 5' },\r
  ]\r
\r
  const darkList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      <div className="flex flex-wrap gap-2 my-2">\r
        {darkList}\r
      </div>\r
      <div className="flex flex-wrap gap-2">\r
        {lightList}\r
      </div>\r
      <div className="flex flex-wrap gap-2 my-2">\r
        {plainList}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TagRound`,Rj=`import { Row, Tag } from 'pelement-react'\r
\r
function TagSize() {\r
  return (\r
    <>\r
      <Row>\r
        <Tag className="mx-1" size="large">Large</Tag>\r
        <Tag className="mx-1">Default</Tag>\r
        <Tag className="mx-1" size="small">Small</Tag>\r
      </Row>\r
\r
      <Row className="mt-4">\r
        <Tag className="mx-1" size="large" closable>Large</Tag>\r
        <Tag className="mx-1" closable>Default</Tag>\r
        <Tag className="mx-1" size="small" closable>Small</Tag>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default TagSize`,Lj=`import { Text } from 'pelement-react'\r
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
export default TextBasic`,Pj=`import { Text } from 'pelement-react'\r
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
export default TextSize`,Bj=`import { Row, Text } from 'pelement-react'\r
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
export default TextTruncated`,Aj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipBasic`,Mj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipContent`,Ij=`import { useState } from 'react'\r
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
export default TooltipDisabled`,Dj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipEffect`;function rp(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const r=t[e],i=typeof r;(i==="object"||i==="function")&&!Object.isFrozen(r)&&rp(r)}),t}class zu{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ip(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Kt(t,...e){const r=Object.create(null);for(const i in t)r[i]=t[i];return e.forEach(function(i){for(const l in i)r[l]=i[l]}),r}const Fj="</span>",$u=t=>!!t.scope,Oj=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const r=t.split(".");return[`${e}${r.shift()}`,...r.map((i,l)=>`${i}${"_".repeat(l+1)}`)].join(" ")}return`${e}${t}`};class zj{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=ip(e)}openNode(e){if(!$u(e))return;const r=Oj(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){$u(e)&&(this.buffer+=Fj)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Uu=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Va{constructor(){this.rootNode=Uu(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const r=Uu({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(i=>this._walk(e,i)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{Va._collapse(r)}))}}class $j extends Va{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){const i=e.root;r&&(i.scope=`language:${r}`),this.add(i)}toHTML(){return new zj(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function fi(t){return t?typeof t=="string"?t:t.source:null}function lp(t){return Mn("(?=",t,")")}function Uj(t){return Mn("(?:",t,")*")}function Hj(t){return Mn("(?:",t,")?")}function Mn(...t){return t.map(r=>fi(r)).join("")}function Wj(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Xa(...t){return"("+(Wj(t).capture?"":"?:")+t.map(i=>fi(i)).join("|")+")"}function sp(t){return new RegExp(t.toString()+"|").exec("").length-1}function Vj(t,e){const r=t&&t.exec(e);return r&&r.index===0}const Xj=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Qa(t,{joinWith:e}){let r=0;return t.map(i=>{r+=1;const l=r;let s=fi(i),o="";for(;s.length>0;){const a=Xj.exec(s);if(!a){o+=s;break}o+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+l):(o+=a[0],a[0]==="("&&r++)}return o}).map(i=>`(${i})`).join(e)}const Qj=/\b\B/,op="[a-zA-Z]\\w*",Ga="[a-zA-Z_]\\w*",ap="\\b\\d+(\\.\\d+)?",cp="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",up="\\b(0b[01]+)",Gj="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Kj=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=Mn(e,/.*\b/,t.binary,/\b.*/)),Kt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,i)=>{r.index!==0&&i.ignoreMatch()}},t)},hi={begin:"\\\\[\\s\\S]",relevance:0},Yj={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[hi]},Zj={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[hi]},Jj={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ls=function(t,e,r={}){const i=Kt({scope:"comment",begin:t,end:e,contains:[]},r);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=Xa("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:Mn(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},qj=ls("//","$"),ev=ls("/\\*","\\*/"),tv=ls("#","$"),nv={scope:"number",begin:ap,relevance:0},rv={scope:"number",begin:cp,relevance:0},iv={scope:"number",begin:up,relevance:0},lv={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[hi,{begin:/\[/,end:/\]/,relevance:0,contains:[hi]}]},sv={scope:"title",begin:op,relevance:0},ov={scope:"title",begin:Ga,relevance:0},av={begin:"\\.\\s*"+Ga,relevance:0},cv=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})};var Xi=Object.freeze({__proto__:null,APOS_STRING_MODE:Yj,BACKSLASH_ESCAPE:hi,BINARY_NUMBER_MODE:iv,BINARY_NUMBER_RE:up,COMMENT:ls,C_BLOCK_COMMENT_MODE:ev,C_LINE_COMMENT_MODE:qj,C_NUMBER_MODE:rv,C_NUMBER_RE:cp,END_SAME_AS_BEGIN:cv,HASH_COMMENT_MODE:tv,IDENT_RE:op,MATCH_NOTHING_RE:Qj,METHOD_GUARD:av,NUMBER_MODE:nv,NUMBER_RE:ap,PHRASAL_WORDS_MODE:Jj,QUOTE_STRING_MODE:Zj,REGEXP_MODE:lv,RE_STARTERS_RE:Gj,SHEBANG:Kj,TITLE_MODE:sv,UNDERSCORE_IDENT_RE:Ga,UNDERSCORE_TITLE_MODE:ov});function uv(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function dv(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function fv(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=uv,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function hv(t,e){Array.isArray(t.illegal)&&(t.illegal=Xa(...t.illegal))}function pv(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function mv(t,e){t.relevance===void 0&&(t.relevance=1)}const xv=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},t);Object.keys(t).forEach(i=>{delete t[i]}),t.keywords=r.keywords,t.begin=Mn(r.beforeMatch,lp(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},gv=["of","and","for","in","not","or","if","then","parent","list","value"],jv="keyword";function dp(t,e,r=jv){const i=Object.create(null);return typeof t=="string"?l(r,t.split(" ")):Array.isArray(t)?l(r,t):Object.keys(t).forEach(function(s){Object.assign(i,dp(t[s],e,s))}),i;function l(s,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");i[c[0]]=[s,vv(c[0],c[1])]})}}function vv(t,e){return e?Number(e):yv(t)?0:1}function yv(t){return gv.includes(t.toLowerCase())}const Hu={},kn=t=>{console.error(t)},Wu=(t,...e)=>{console.log(`WARN: ${t}`,...e)},Fn=(t,e)=>{Hu[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Hu[`${t}/${e}`]=!0)},Al=new Error;function fp(t,e,{key:r}){let i=0;const l=t[r],s={},o={};for(let a=1;a<=e.length;a++)o[a+i]=l[a],s[a+i]=!0,i+=sp(e[a-1]);t[r]=o,t[r]._emit=s,t[r]._multi=!0}function wv(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw kn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Al;if(typeof t.beginScope!="object"||t.beginScope===null)throw kn("beginScope must be object"),Al;fp(t,t.begin,{key:"beginScope"}),t.begin=Qa(t.begin,{joinWith:""})}}function Cv(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw kn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Al;if(typeof t.endScope!="object"||t.endScope===null)throw kn("endScope must be object"),Al;fp(t,t.end,{key:"endScope"}),t.end=Qa(t.end,{joinWith:""})}}function _v(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function kv(t){_v(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),wv(t),Cv(t)}function Nv(t){function e(o,a){return new RegExp(fi(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=sp(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(Qa(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const u=c.findIndex((p,x)=>x>0&&p!==void 0),d=this.matchIndexes[u];return c.splice(0,u),Object.assign(c,d)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new r;return this.rules.slice(a).forEach(([u,d])=>c.addRule(u,d)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let u=c.exec(a);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,u=d.exec(a)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function l(o){const a=new i;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function s(o,a){const c=o;if(o.isCompiled)return c;[dv,pv,kv,xv].forEach(d=>d(o,a)),t.compilerExtensions.forEach(d=>d(o,a)),o.__beforeBegin=null,[fv,hv,mv].forEach(d=>d(o,a)),o.isCompiled=!0;let u=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),u=o.keywords.$pattern,delete o.keywords.$pattern),u=u||/\w+/,o.keywords&&(o.keywords=dp(o.keywords,t.case_insensitive)),c.keywordPatternRe=e(u,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=fi(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(d){return Sv(d==="self"?o:d)})),o.contains.forEach(function(d){s(d,c)}),o.starts&&s(o.starts,a),c.matcher=l(c),c}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Kt(t.classNameAliases||{}),s(t)}function hp(t){return t?t.endsWithParent||hp(t.starts):!1}function Sv(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Kt(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:hp(t)?Kt(t,{starts:t.starts?Kt(t.starts):null}):Object.isFrozen(t)?Kt(t):t}var Ev="11.9.0";class Tv extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}}const Ws=ip,Vu=Kt,Xu=Symbol("nomatch"),bv=7,pp=function(t){const e=Object.create(null),r=Object.create(null),i=[];let l=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:$j};function c(N){return a.noHighlightRe.test(N)}function u(N){let C=N.className+" ";C+=N.parentNode?N.parentNode.className:"";const b=a.languageDetectRe.exec(C);if(b){const B=z(b[1]);return B||(Wu(s.replace("{}",b[1])),Wu("Falling back to no-highlight mode for this block.",N)),B?b[1]:"no-highlight"}return C.split(/\s+/).find(B=>c(B)||z(B))}function d(N,C,b){let B="",$="";typeof C=="object"?(B=N,b=C.ignoreIllegals,$=C.language):(Fn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Fn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=N,B=C),b===void 0&&(b=!0);const K={code:B,language:$};H("before:highlight",K);const Be=K.result?K.result:p(K.language,K.code,b);return Be.code=K.code,H("after:highlight",Be),Be}function p(N,C,b,B){const $=Object.create(null);function K(P,F){return P.keywords[F]}function Be(){if(!V.keywords){Se.addText(re);return}let P=0;V.keywordPatternRe.lastIndex=0;let F=V.keywordPatternRe.exec(re),X="";for(;F;){X+=re.substring(P,F.index);const J=vt.case_insensitive?F[0].toLowerCase():F[0],Ae=K(V,J);if(Ae){const[Tt,Yp]=Ae;if(Se.addText(X),X="",$[J]=($[J]||0)+1,$[J]<=bv&&(Ei+=Yp),Tt.startsWith("_"))X+=F[0];else{const Zp=vt.classNameAliases[Tt]||Tt;we(F[0],Zp)}}else X+=F[0];P=V.keywordPatternRe.lastIndex,F=V.keywordPatternRe.exec(re)}X+=re.substring(P),Se.addText(X)}function it(){if(re==="")return;let P=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){Se.addText(re);return}P=p(V.subLanguage,re,!0,yc[V.subLanguage]),yc[V.subLanguage]=P._top}else P=j(re,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Ei+=P.relevance),Se.__addSublanguage(P._emitter,P.language)}function Ne(){V.subLanguage!=null?it():Be(),re=""}function we(P,F){P!==""&&(Se.startScope(F),Se.addText(P),Se.endScope())}function mn(P,F){let X=1;const J=F.length-1;for(;X<=J;){if(!P._emit[X]){X++;continue}const Ae=vt.classNameAliases[P[X]]||P[X],Tt=F[X];Ae?we(Tt,Ae):(re=Tt,Be(),re=""),X++}}function gc(P,F){return P.scope&&typeof P.scope=="string"&&Se.openNode(vt.classNameAliases[P.scope]||P.scope),P.beginScope&&(P.beginScope._wrap?(we(re,vt.classNameAliases[P.beginScope._wrap]||P.beginScope._wrap),re=""):P.beginScope._multi&&(mn(P.beginScope,F),re="")),V=Object.create(P,{parent:{value:V}}),V}function jc(P,F,X){let J=Vj(P.endRe,X);if(J){if(P["on:end"]){const Ae=new zu(P);P["on:end"](F,Ae),Ae.isMatchIgnored&&(J=!1)}if(J){for(;P.endsParent&&P.parent;)P=P.parent;return P}}if(P.endsWithParent)return jc(P.parent,F,X)}function Vp(P){return V.matcher.regexIndex===0?(re+=P[0],1):(xs=!0,0)}function Xp(P){const F=P[0],X=P.rule,J=new zu(X),Ae=[X.__beforeBegin,X["on:begin"]];for(const Tt of Ae)if(Tt&&(Tt(P,J),J.isMatchIgnored))return Vp(F);return X.skip?re+=F:(X.excludeBegin&&(re+=F),Ne(),!X.returnBegin&&!X.excludeBegin&&(re=F)),gc(X,P),X.returnBegin?0:F.length}function Qp(P){const F=P[0],X=C.substring(P.index),J=jc(V,P,X);if(!J)return Xu;const Ae=V;V.endScope&&V.endScope._wrap?(Ne(),we(F,V.endScope._wrap)):V.endScope&&V.endScope._multi?(Ne(),mn(V.endScope,P)):Ae.skip?re+=F:(Ae.returnEnd||Ae.excludeEnd||(re+=F),Ne(),Ae.excludeEnd&&(re=F));do V.scope&&Se.closeNode(),!V.skip&&!V.subLanguage&&(Ei+=V.relevance),V=V.parent;while(V!==J.parent);return J.starts&&gc(J.starts,P),Ae.returnEnd?0:F.length}function Gp(){const P=[];for(let F=V;F!==vt;F=F.parent)F.scope&&P.unshift(F.scope);P.forEach(F=>Se.openNode(F))}let Si={};function vc(P,F){const X=F&&F[0];if(re+=P,X==null)return Ne(),0;if(Si.type==="begin"&&F.type==="end"&&Si.index===F.index&&X===""){if(re+=C.slice(F.index,F.index+1),!l){const J=new Error(`0 width match regex (${N})`);throw J.languageName=N,J.badRule=Si.rule,J}return 1}if(Si=F,F.type==="begin")return Xp(F);if(F.type==="illegal"&&!b){const J=new Error('Illegal lexeme "'+X+'" for mode "'+(V.scope||"<unnamed>")+'"');throw J.mode=V,J}else if(F.type==="end"){const J=Qp(F);if(J!==Xu)return J}if(F.type==="illegal"&&X==="")return 1;if(ms>1e5&&ms>F.index*3)throw new Error("potential infinite loop, way more iterations than matches");return re+=X,X.length}const vt=z(N);if(!vt)throw kn(s.replace("{}",N)),new Error('Unknown language: "'+N+'"');const Kp=Nv(vt);let ps="",V=B||Kp;const yc={},Se=new a.__emitter(a);Gp();let re="",Ei=0,xn=0,ms=0,xs=!1;try{if(vt.__emitTokens)vt.__emitTokens(C,Se);else{for(V.matcher.considerAll();;){ms++,xs?xs=!1:V.matcher.considerAll(),V.matcher.lastIndex=xn;const P=V.matcher.exec(C);if(!P)break;const F=C.substring(xn,P.index),X=vc(F,P);xn=P.index+X}vc(C.substring(xn))}return Se.finalize(),ps=Se.toHTML(),{language:N,value:ps,relevance:Ei,illegal:!1,_emitter:Se,_top:V}}catch(P){if(P.message&&P.message.includes("Illegal"))return{language:N,value:Ws(C),illegal:!0,relevance:0,_illegalBy:{message:P.message,index:xn,context:C.slice(xn-100,xn+100),mode:P.mode,resultSoFar:ps},_emitter:Se};if(l)return{language:N,value:Ws(C),illegal:!1,relevance:0,errorRaised:P,_emitter:Se,_top:V};throw P}}function x(N){const C={value:Ws(N),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return C._emitter.addText(N),C}function j(N,C){C=C||a.languages||Object.keys(e);const b=x(N),B=C.filter(z).filter(Q).map(Ne=>p(Ne,N,!1));B.unshift(b);const $=B.sort((Ne,we)=>{if(Ne.relevance!==we.relevance)return we.relevance-Ne.relevance;if(Ne.language&&we.language){if(z(Ne.language).supersetOf===we.language)return 1;if(z(we.language).supersetOf===Ne.language)return-1}return 0}),[K,Be]=$,it=K;return it.secondBest=Be,it}function v(N,C,b){const B=C&&r[C]||b;N.classList.add("hljs"),N.classList.add(`language-${B}`)}function y(N){let C=null;const b=u(N);if(c(b))return;if(H("before:highlightElement",{el:N,language:b}),N.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",N);return}if(N.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(N)),a.throwUnescapedHTML))throw new Tv("One of your code blocks includes unescaped HTML.",N.innerHTML);C=N;const B=C.textContent,$=b?d(B,{language:b,ignoreIllegals:!0}):j(B);N.innerHTML=$.value,N.dataset.highlighted="yes",v(N,b,$.language),N.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(N.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),H("after:highlightElement",{el:N,result:$,text:B})}function k(N){a=Vu(a,N)}const h=()=>{w(),Fn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function f(){w(),Fn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let g=!1;function w(){if(document.readyState==="loading"){g=!0;return}document.querySelectorAll(a.cssSelector).forEach(y)}function _(){g&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",_,!1);function S(N,C){let b=null;try{b=C(t)}catch(B){if(kn("Language definition for '{}' could not be registered.".replace("{}",N)),l)kn(B);else throw B;b=o}b.name||(b.name=N),e[N]=b,b.rawDefinition=C.bind(null,t),b.aliases&&D(b.aliases,{languageName:N})}function E(N){delete e[N];for(const C of Object.keys(r))r[C]===N&&delete r[C]}function L(){return Object.keys(e)}function z(N){return N=(N||"").toLowerCase(),e[N]||e[r[N]]}function D(N,{languageName:C}){typeof N=="string"&&(N=[N]),N.forEach(b=>{r[b.toLowerCase()]=C})}function Q(N){const C=z(N);return C&&!C.disableAutodetect}function ee(N){N["before:highlightBlock"]&&!N["before:highlightElement"]&&(N["before:highlightElement"]=C=>{N["before:highlightBlock"](Object.assign({block:C.el},C))}),N["after:highlightBlock"]&&!N["after:highlightElement"]&&(N["after:highlightElement"]=C=>{N["after:highlightBlock"](Object.assign({block:C.el},C))})}function ce(N){ee(N),i.push(N)}function U(N){const C=i.indexOf(N);C!==-1&&i.splice(C,1)}function H(N,C){const b=N;i.forEach(function(B){B[b]&&B[b](C)})}function W(N){return Fn("10.7.0","highlightBlock will be removed entirely in v12.0"),Fn("10.7.0","Please use highlightElement now."),y(N)}Object.assign(t,{highlight:d,highlightAuto:j,highlightAll:w,highlightElement:y,highlightBlock:W,configure:k,initHighlighting:h,initHighlightingOnLoad:f,registerLanguage:S,unregisterLanguage:E,listLanguages:L,getLanguage:z,registerAliases:D,autoDetection:Q,inherit:Vu,addPlugin:ce,removePlugin:U}),t.debugMode=function(){l=!1},t.safeMode=function(){l=!0},t.versionString=Ev,t.regex={concat:Mn,lookahead:lp,either:Xa,optional:Hj,anyNumberOfTimes:Uj};for(const N in Xi)typeof Xi[N]=="object"&&rp(Xi[N]);return Object.assign(t,Xi),t},fr=pp({});fr.newInstance=()=>pp({});var Rv=fr;fr.HighlightJS=fr;fr.default=fr;const Ka=bd(Rv);function Lv(t){const e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=t.inherit(s,{begin:/\(/,end:/\)/}),a=t.inherit(t.APOS_STRING_MODE,{className:"string"}),c=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,o,c,a]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:u}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Qu="[A-Za-z$_][0-9A-Za-z$_]*",Pv=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Bv=["true","false","null","undefined","NaN","Infinity"],mp=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],xp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],gp=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Av=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Mv=[].concat(gp,mp,xp);function Iv(t){const e=t.regex,r=(C,{after:b})=>{const B="</"+C[0].slice(1);return C.input.indexOf(B,b)!==-1},i=Qu,l={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,b)=>{const B=C[0].length+C.index,$=C.input[B];if($==="<"||$===","){b.ignoreMatch();return}$===">"&&(r(C,{after:B})||b.ignoreMatch());let K;const Be=C.input.substring(B);if(K=Be.match(/^\s*=/)){b.ignoreMatch();return}if((K=Be.match(/^\s+extends\s+/))&&K.index===0){b.ignoreMatch();return}}},a={$pattern:Qu,keyword:Pv,literal:Bv,built_in:Mv,"variable.language":Av},c="[0-9](_?[0-9])*",u=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},j={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,x]},f={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},g=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,j,v,y,k,{match:/\$\d+/},p];x.contains=g.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(g)});const w=[].concat(f,x.contains),_=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),S={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_},E={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...mp,...xp]}},z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},D={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],illegal:/%/},Q={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ee(C){return e.concat("(?!",C.join("|"),")")}const ce={match:e.concat(/\b/,ee([...gp,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},U={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},H={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},S]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",N={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:_,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),z,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,j,v,y,k,f,{match:/\$\d+/},p,L,{className:"attr",begin:i+e.lookahead(":"),relevance:0},N,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,t.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:s},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},D,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[S,t.inherit(t.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},U,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[S]},ce,Q,E,H,{match:/\$[(.]/}]}}Ka.registerLanguage("xml",Lv);Ka.registerLanguage("javascript",Iv);function M({language:t="javascript",name:e,children:r}){const i=m.useRef(null),[l,s]=m.useState(!1),[o,a]=m.useState(""),c=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":E0,"../../../packages/Alert/_example/AlertCenter.tsx":T0,"../../../packages/Alert/_example/AlertClose.tsx":b0,"../../../packages/Alert/_example/AlertDescription.tsx":R0,"../../../packages/Alert/_example/AlertEffect.tsx":L0,"../../../packages/Alert/_example/AlertIconDescription.tsx":P0,"../../../packages/Alert/_example/AlertShowIcon.tsx":B0,"../../../packages/Avatar/_example/AvatarBasic.tsx":A0,"../../../packages/Avatar/_example/AvatarError.tsx":M0,"../../../packages/Avatar/_example/AvatarFit.tsx":I0,"../../../packages/Avatar/_example/AvatarType.tsx":D0,"../../../packages/Button/_example/ButtonBasic.tsx":F0,"../../../packages/Button/_example/ButtonDisabled.tsx":O0,"../../../packages/Button/_example/ButtonLink.tsx":z0,"../../../packages/Collapse/_example/CollapseBasic.tsx":$0,"../../../packages/Container/_example/ContainerBasic.tsx":U0,"../../../packages/Container/_example/ContainerBasic1.tsx":H0,"../../../packages/Container/_example/ContainerBasic2.tsx":W0,"../../../packages/Container/_example/ContainerBasic3.tsx":V0,"../../../packages/Container/_example/ContainerBasic4.tsx":X0,"../../../packages/Container/_example/ContainerBasic5.tsx":Q0,"../../../packages/Container/_example/ContainerBasic6.tsx":G0,"../../../packages/Divider/_example/DividerBasic.tsx":K0,"../../../packages/Divider/_example/DividerBorder.tsx":Y0,"../../../packages/Divider/_example/DividerContent.tsx":Z0,"../../../packages/Divider/_example/DividerDirection.tsx":J0,"../../../packages/Icon/_example/IconBasic.tsx":q0,"../../../packages/Layout/_example/LayoutBasic.tsx":ej,"../../../packages/Layout/_example/LayoutBootstrap.tsx":tj,"../../../packages/Layout/_example/LayoutGutter.tsx":nj,"../../../packages/Layout/_example/LayoutJustify.tsx":rj,"../../../packages/Layout/_example/LayoutMix.tsx":ij,"../../../packages/Layout/_example/LayoutOffset.tsx":lj,"../../../packages/Link/_example/LinkBasic.tsx":sj,"../../../packages/Link/_example/LinkDisabled.tsx":oj,"../../../packages/Link/_example/LinkIcon.tsx":aj,"../../../packages/Link/_example/LinkUnderline.tsx":cj,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":uj,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":dj,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":fj,"../../../packages/Popover/_example/PopoverBasic.tsx":hj,"../../../packages/Progress/_example/ProgressBasic.tsx":pj,"../../../packages/Progress/_example/ProgressTextInside.tsx":mj,"../../../packages/Result/_example/ResultBasic.tsx":xj,"../../../packages/Result/_example/ResultIcon.tsx":gj,"../../../packages/Switch/_example/SwitchActionIcon.tsx":jj,"../../../packages/Switch/_example/SwitchBasic.tsx":vj,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":yj,"../../../packages/Switch/_example/SwitchDisabled.tsx":wj,"../../../packages/Switch/_example/SwitchIcon.tsx":Cj,"../../../packages/Switch/_example/SwitchLoading.tsx":_j,"../../../packages/Switch/_example/SwitchSize.tsx":kj,"../../../packages/Switch/_example/SwitchText.tsx":Nj,"../../../packages/Tag/_example/TagBasic.tsx":Sj,"../../../packages/Tag/_example/TagClosable.tsx":Ej,"../../../packages/Tag/_example/TagEffect.tsx":Tj,"../../../packages/Tag/_example/TagRound.tsx":bj,"../../../packages/Tag/_example/TagSize.tsx":Rj,"../../../packages/Text/_example/TextBasic.tsx":Lj,"../../../packages/Text/_example/TextSize.tsx":Pj,"../../../packages/Text/_example/TextTruncated.tsx":Bj,"../../../packages/Tooltip/_example/TooltipBasic.tsx":Aj,"../../../packages/Tooltip/_example/TooltipContent.tsx":Mj,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":Ij,"../../../packages/Tooltip/_example/TooltipEffect.tsx":Dj});let u={display:l?"":"none"};m.useEffect(()=>{i.current&&(Object.keys(c).forEach(p=>{p.indexOf(e)!==-1&&a(c[p])}),setTimeout(()=>{Ka.highlightElement(i.current)},0))},[e]);function d(){s(!l)}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"code-block",children:[n.jsx("div",{className:"code-block-component",children:r}),n.jsx("div",{className:"op-btns",children:n.jsx("button",{onClick:d,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:n.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:n.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),n.jsx("div",{className:"code-block-wrapper",style:u,children:n.jsx("div",{className:"code-block-pre language-react",children:n.jsx("pre",{children:n.jsx("code",{id:t,ref:i,className:t,children:o})})})})]})})}function jp(t){var e,r,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=jp(t[e]))&&(i&&(i+=" "),i+=r);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function O(){for(var t,e,r=0,i="";r<arguments.length;)(t=arguments[r++])&&(e=jp(t))&&(i&&(i+=" "),i+=e);return i}const Dv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),m.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),Fv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Dv,{})})},ss=m.forwardRef(Fv);ss.displayName="Edit";const Ov=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),zv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Ov,{})})},Ya=m.forwardRef(zv);Ya.displayName="Search";const $v=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),Uv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx($v,{})})},pi=m.forwardRef(Uv);pi.displayName="Check";const Hv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),m.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),Wv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Hv,{})})},Za=m.forwardRef(Wv);Za.displayName="Message";const Vv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),Xv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Vv,{})})},Ja=m.forwardRef(Xv);Ja.displayName="Star";const Qv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),Gv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Qv,{})})},qa=m.forwardRef(Gv);qa.displayName="Delete";const Kv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),Yv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Kv,{})})},os=m.forwardRef(Yv);os.displayName="View";const Zv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),Jv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Zv,{})})},ec=m.forwardRef(Jv);ec.displayName="StarFilled";const qv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),e1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(qv,{})})},hr=m.forwardRef(e1);hr.displayName="Close";const t1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),n1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(t1,{})})},tc=m.forwardRef(n1);tc.displayName="Loading";const r1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),m.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),i1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(r1,{})})},nc=m.forwardRef(i1);nc.displayName="Hide";const l1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),s1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(l1,{})})},ki=m.forwardRef(s1);ki.displayName="InfoFilled";const o1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),a1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(o1,{})})},as=m.forwardRef(a1);as.displayName="WarningFilled";const c1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),u1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(c1,{})})},cs=m.forwardRef(u1);cs.displayName="CircleCloseFilled";const d1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),f1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(d1,{})})},rc=m.forwardRef(f1);rc.displayName="CircleCheckFilled";const h1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),p1=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),children:n.jsx(h1,{})})},ic=m.forwardRef(p1);ic.displayName="ArrowRight";const m1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),x1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),onClick:l,children:n.jsx(m1,{})})},vp=m.forwardRef(x1);vp.displayName="UserFilled";const g1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),m.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),j1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),onClick:l,children:n.jsx(g1,{})})},lc=m.forwardRef(j1);lc.displayName="CircleCheck";const v1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),y1=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),children:n.jsx(v1,{})})},yp=m.forwardRef(y1);yp.displayName="QuestionFilled";const w1=(t,e)=>{const{className:r,style:i,children:l,type:s,plain:o=!1,round:a=!1,circle:c=!1,disabled:u=!1,link:d=!1,icon:p,...x}=t,j=p?n.jsx(n.Fragment,{children:p}):n.jsx(n.Fragment,{});return n.jsxs("button",{ref:e,style:i,disabled:u,...x,className:O(r,"el-button",s?`el-button--${s}`:"",o?"is-plain":"",a?"is-round":"",c?"is-circle":"",u?"is-disabled":"",d?"is-link":""),children:[j,l]})},R=m.forwardRef(w1);R.displayName="Button";const C1=(t,e)=>{const{style:r,className:i,children:l,direction:s}=t,o=()=>s==="vertical"?!0:s==="horizontal"?!1:l?l.some(a=>{const c=a.props.children;return c==="Header"||c==="Footer"}):!1;return n.jsx("section",{ref:e,style:r,className:O(i,"el-container",o()?"is-vertical":""),children:l})},qe=m.forwardRef(C1);qe.displayName="Container";const _1=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-header-height":s};return n.jsx("header",{ref:e,style:o,className:O(i,"el-header"),children:l})},In=m.forwardRef(_1);In.displayName="Head";const k1=(t,e)=>{const{style:r,className:i,children:l}=t;return n.jsx("main",{ref:e,style:r,className:O(i,"el-main"),children:l})},pn=m.forwardRef(k1);pn.displayName="Main";const N1=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-footer-height":s};return n.jsx("footer",{ref:e,style:o,className:O(i,"el-footer"),children:l})},us=m.forwardRef(N1);us.displayName="Footer";const S1=(t,e)=>{const{style:r,className:i,children:l,width:s=200}=t,o={...r,"--el-aside-width":s};return n.jsx("aside",{ref:e,style:o,className:O(i,"el-aside"),children:l})},wr=m.forwardRef(S1);wr.displayName="Aside";const wp=m.createContext({}),E1=(t,e)=>{const{style:r,className:i,children:l,gutter:s=0,justify:o}=t,a={marginLeft:`-${s/2}px`,marginRight:`-${s/2}px`,...r},c=m.useMemo(()=>({gutter:s}),[s]);return n.jsx(wp.Provider,{value:c,children:n.jsx("div",{ref:e,style:a,className:O(i,"el-row",o?`is-justify-${o}`:""),children:l})})},le=m.forwardRef(E1);le.displayName="Row";const T1=(t,e)=>{const{style:r,className:i,children:l,span:s=24,offset:o,xs:a,sm:c,md:u,lg:d,xl:p}=t,{gutter:x}=m.useContext(wp),j={paddingLeft:`${x/2}px`,paddingRight:`${x/2}px`,...r};return n.jsx("div",{ref:e,style:j,className:O(i,"el-col",s?`el-col-${s}`:"",x?"is-guttered":"",o?`el-col-offset-${o}`:"",a?`el-col-xs-${a}`:"",c?`el-col-sm-${c}`:"",u?`el-col-md-${u}`:"",d?`el-col-lg-${d}`:"",p?`el-col-xl-${p}`:""),children:l})},I=m.forwardRef(T1);I.displayName="Col";const b1=(t,e)=>{const{style:r,className:i,children:l,type:s,href:o,target:a,disabled:c=!1,underline:u=!0,icon:d}=t,p=d?n.jsx(n.Fragment,{children:d}):n.jsx(n.Fragment,{});return n.jsxs("a",{ref:e,style:r,className:O(i,"el-link",s?`el-link--${s}`:"el-link--default",c?"is-disabled":"",u?"is-underline":""),href:c||!o?void 0:o,target:a||void 0,children:[p,n.jsx("span",{className:"el-link__inner",children:l})]})},be=m.forwardRef(b1);be.displayName="Link";const R1=(t,e)=>{const{style:r,className:i,children:l,type:s,size:o,truncated:a=!1,lineClamp:c}=t,u={WebkitLineClamp:c,...r};return n.jsx("span",{ref:e,style:u,className:O(i,"el-text",s?`el-text--${s}`:"",o?`el-text--${o}`:"",a?"is-truncated":"",c?"is-line-clamp":""),children:l})},Ye=m.forwardRef(R1);Ye.displayName="Text";const L1=(t,e)=>{const{style:r,className:i,children:l,contentPosition:s="center",borderStyle:o="solid",direction:a="horizontal"}=t,c={"--el-border-style":o,...r},u=l?n.jsx(n.Fragment,{children:n.jsx("div",{className:O("el-divider__text",`is-${s}`),children:l})}):n.jsx(n.Fragment,{});return n.jsx("div",{ref:e,style:c,className:O(i,"el-divider",`el-divider--${a}`),children:u})},Et=m.forwardRef(L1);Et.displayName="Divider";const P1=(t,e)=>{const{style:r,className:i,defaultChecked:l=!1,size:s,inactiveText:o,activeText:a,inlinePrompt:c=!1,width:u,activeIcon:d,inactiveIcon:p,disabled:x=!1,loading:j=!1,beforeChange:v,activeActionIcon:y,inactiveActionIcon:k}=t,[h,f]=m.useState(l);function g(){if(x||j)return;if(!v){w();return}const Q=v();Q instanceof Promise&&Q.then(ee=>{ee&&w()})}function w(){f(!h)}function _(){return p?n.jsx(n.Fragment,{children:p}):n.jsx(n.Fragment,{children:n.jsx("span",{children:o})})}function S(){return(o||p)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:O("el-switch__label el-switch__label--left",h?"":"is-active"),children:n.jsx(_,{})})}):n.jsx(n.Fragment,{})}function E(){return d?n.jsx(n.Fragment,{children:d}):n.jsx(n.Fragment,{children:n.jsx("span",{children:d})})}function L(){return(a||d)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:O("el-switch__label el-switch__label--right",h?"is-active":""),children:n.jsx(E,{})})}):n.jsx(n.Fragment,{})}function z(){return c&&(d||p)?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:h?d:p})}):c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:n.jsx("span",{className:"is-text",children:h?a:o})})}):n.jsx(n.Fragment,{})}function D(){return j?n.jsx(n.Fragment,{children:n.jsx(tc,{className:"is-loading"})}):y&&h?n.jsx(n.Fragment,{children:y}):k&&!h?n.jsx(n.Fragment,{children:k}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:O(i,"el-switch",h?"is-checked":"",s?`el-switch--${s}`:"",{"is-disabled":x||j}),onClick:g,children:[n.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:x||j}),n.jsx(S,{}),n.jsxs("span",{className:"el-switch__core",style:{width:`${u}px`},children:[n.jsx(z,{}),n.jsx("div",{className:"el-switch__action",children:n.jsx(D,{})})]}),n.jsx(L,{})]})},me=m.forwardRef(P1);me.displayName="Switch";const B1=(t,e)=>{const{style:r,className:i,type:l="info",title:s,effect:o="light",closable:a=!0,closeText:c,close:u,showIcon:d=!1,center:p=!1,description:x}=t,[j,v]=m.useState(!0);function y(){if(!d)return n.jsx(n.Fragment,{});let w=n.jsx(n.Fragment,{});switch(l){case"success":w=n.jsx(n.Fragment,{children:n.jsx(rc,{className:O("el-alert__icon",{"is-big":x})})});break;case"info":w=n.jsx(n.Fragment,{children:n.jsx(ki,{className:O("el-alert__icon",{"is-big":x})})});break;case"warning":w=n.jsx(n.Fragment,{children:n.jsx(as,{className:O("el-alert__icon",{"is-big":x})})});break;case"error":w=n.jsx(n.Fragment,{children:n.jsx(cs,{className:O("el-alert__icon",{"is-big":x})})});break}return w}function k(){return x?n.jsx(n.Fragment,{children:n.jsx("p",{className:"el-alert__description",children:x})}):n.jsx(n.Fragment,{})}function h(){u&&u(),v(!1)}const f={display:j?"":"none",...r};function g(){return a?c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-alert__close-btn is-customed",onClick:h,children:c})}):n.jsx(n.Fragment,{children:n.jsx(hr,{className:"el-alert__close-btn",onClick:h})}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:f,className:O("el-alert",`el-alert--${l}`,`is-${o}`,{"is-center":p},i),role:"alert",children:[n.jsx(y,{}),n.jsxs("div",{className:"el-alert__content",children:[n.jsx("span",{className:O("el-alert__title",{"is-bold":x}),children:s}),n.jsx(k,{}),n.jsx(g,{})]})]})},oe=m.forwardRef(B1);oe.displayName="Alert";const A1=m.createContext({}),M1=(t,e)=>{const{style:r,className:i,children:l,activeName:s}=t,o=m.useMemo(()=>({activeName:s}),[s]);return n.jsx(A1.Provider,{value:o,children:n.jsx("div",{ref:e,style:r,className:O(i,"el-collapse"),children:l})})},Cp=m.forwardRef(M1);Cp.displayName="Collapse";const I1=(t,e)=>{const{style:r,className:i,children:l,title:s}=t,[o,a]=m.useState(!1);function c(){a(!o)}return n.jsxs("div",{ref:e,style:r,className:O(i,"el-collapse-item",{"is-active":o}),onClick:c,children:[n.jsxs("button",{className:O("el-collapse-item__header",{"is-active":o}),type:"button",children:[s,n.jsx(ic,{className:"el-collapse-item__arrow"})]}),n.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:o?"":"none"},children:n.jsx("div",{className:"el-collapse-item__content",children:l})})]})},Ar=m.forwardRef(I1);Ar.displayName="CollapseItem";const D1=(t,e)=>{const{style:r,className:i,shape:l="circle",size:s,src:o,icon:a,fit:c="cover",onError:u,children:d}=t,p={...r,"--el-avatar-size":s&&typeof s=="number"?`${s}px`:""},[x,j]=m.useState(!0);function v(){const h=new Image(0,0);o&&(h.src=o),h.onload=()=>{j(!0)},h.onerror=f=>{f instanceof Event&&(f.preventDefault(),f.stopPropagation()),j(!1),u&&u()}}function y(){return x?n.jsx("img",{src:o,style:{objectFit:c}}):n.jsx(n.Fragment,{children:d})}function k(){return a?n.jsx(n.Fragment,{children:a}):o?(v(),n.jsx(n.Fragment,{children:n.jsx(y,{})})):n.jsx(n.Fragment,{children:d})}return n.jsx("span",{ref:e,style:p,className:O(i,"el-avatar",`el-avatar--${l}`,s?`el-avatar--${s}`:"",{"el-avatar--icon":a}),children:n.jsx(k,{})})},kt=m.forwardRef(D1);kt.displayName="Avatar";const F1=(t,e)=>{const{style:r,className:i,icon:l="info",title:s,subTitle:o,extra:a}=t;function c(){if(typeof l=="string"){let u=n.jsx(n.Fragment,{});switch(l){case"success":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return u}else return n.jsx(n.Fragment,{children:l})}return n.jsxs("div",{ref:e,style:r,className:O("el-result",i),children:[n.jsx("div",{className:"el-result__icon",children:n.jsx(c,{})}),n.jsx("div",{className:"el-result__title",children:n.jsx("p",{children:s})}),n.jsx("div",{className:"el-result__subtitle",children:n.jsx("p",{children:o})}),n.jsx("div",{className:"el-result__extra",children:a})]})},Zn=m.forwardRef(F1);Zn.displayName="Result";function an(t){return _p(t)?(t.nodeName||"").toLowerCase():"#document"}function Ge(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function zt(t){var e;return(e=(_p(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function _p(t){return t instanceof Node||t instanceof Ge(t).Node}function Re(t){return t instanceof Element||t instanceof Ge(t).Element}function tt(t){return t instanceof HTMLElement||t instanceof Ge(t).HTMLElement}function Xo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ge(t).ShadowRoot}function Ni(t){const{overflow:e,overflowX:r,overflowY:i,display:l}=dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(l)}function O1(t){return["table","td","th"].includes(an(t))}function sc(t){const e=oc(),r=dt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function z1(t){let e=pr(t);for(;tt(e)&&!ds(e);){if(sc(e))return e;e=pr(e)}return null}function oc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ds(t){return["html","body","#document"].includes(an(t))}function dt(t){return Ge(t).getComputedStyle(t)}function fs(t){return Re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function pr(t){if(an(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xo(t)&&t.host||zt(t);return Xo(e)?e.host:e}function kp(t){const e=pr(t);return ds(e)?t.ownerDocument?t.ownerDocument.body:t.body:tt(e)&&Ni(e)?e:kp(e)}function mi(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const l=kp(t),s=l===((i=t.ownerDocument)==null?void 0:i.body),o=Ge(l);return s?e.concat(o,o.visualViewport||[],Ni(l)?l:[],o.frameElement&&r?mi(o.frameElement):[]):e.concat(l,mi(l,[],r))}function Gu(t){let e=t.activeElement;for(;((r=e)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;e=e.shadowRoot.activeElement}return e}function Qo(t,e){if(!t||!e)return!1;const r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Xo(r)){let i=e;for(;i;){if(t===i)return!0;i=i.parentNode||i.host}}return!1}function Np(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function $1(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:r,version:i}=e;return r+"/"+i}).join(" "):navigator.userAgent}function U1(t){return!Ku()&&t.width===0&&t.height===0||Ku()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function H1(){return/apple/i.test(navigator.vendor)}function Ku(){const t=/android/i;return t.test(Np())||t.test($1())}function W1(){return Np().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Ml(t,e){const r=["mouse","pen"];return e||r.push("",void 0),r.includes(t)}function Mr(t){return(t==null?void 0:t.ownerDocument)||document}function V1(t){return"composedPath"in t?t.composedPath()[0]:t.target}const X1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Sp(t){return tt(t)&&t.matches(X1)}const mr=Math.min,Nn=Math.max,Il=Math.round,Qi=Math.floor,cn=t=>({x:t,y:t});function Q1(t,e,r){return Nn(t,mr(e,r))}function Ep(t,e){return typeof t=="function"?t(e):t}function ac(t){return t.split("-")[0]}function cc(t){return t.split("-")[1]}function G1(t){return t==="x"?"y":"x"}function Tp(t){return t==="y"?"height":"width"}function uc(t){return["top","bottom"].includes(ac(t))?"y":"x"}function bp(t){return G1(uc(t))}function K1(t){return{top:0,right:0,bottom:0,left:0,...t}}function Y1(t){return typeof t!="number"?K1(t):{top:t,right:t,bottom:t,left:t}}function Rp(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Yu(t,e,r){let{reference:i,floating:l}=t;const s=uc(e),o=bp(e),a=Tp(o),c=ac(e),u=s==="y",d=i.x+i.width/2-l.width/2,p=i.y+i.height/2-l.height/2,x=i[a]/2-l[a]/2;let j;switch(c){case"top":j={x:d,y:i.y-l.height};break;case"bottom":j={x:d,y:i.y+i.height};break;case"right":j={x:i.x+i.width,y:p};break;case"left":j={x:i.x-l.width,y:p};break;default:j={x:i.x,y:i.y}}switch(cc(e)){case"start":j[o]-=x*(r&&u?-1:1);break;case"end":j[o]+=x*(r&&u?-1:1);break}return j}const Z1=async(t,e,r)=>{const{placement:i="bottom",strategy:l="absolute",middleware:s=[],platform:o}=r,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:l}),{x:d,y:p}=Yu(u,i,c),x=i,j={},v=0;for(let y=0;y<a.length;y++){const{name:k,fn:h}=a[y],{x:f,y:g,data:w,reset:_}=await h({x:d,y:p,initialPlacement:i,placement:x,strategy:l,middlewareData:j,rects:u,platform:o,elements:{reference:t,floating:e}});if(d=f??d,p=g??p,j={...j,[k]:{...j[k],...w}},_&&v<=50){v++,typeof _=="object"&&(_.placement&&(x=_.placement),_.rects&&(u=_.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:l}):_.rects),{x:d,y:p}=Yu(u,x,c)),y=-1;continue}}return{x:d,y:p,placement:x,strategy:l,middlewareData:j}},J1=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:i,placement:l,rects:s,platform:o,elements:a,middlewareData:c}=e,{element:u,padding:d=0}=Ep(t,e)||{};if(u==null)return{};const p=Y1(d),x={x:r,y:i},j=bp(l),v=Tp(j),y=await o.getDimensions(u),k=j==="y",h=k?"top":"left",f=k?"bottom":"right",g=k?"clientHeight":"clientWidth",w=s.reference[v]+s.reference[j]-x[j]-s.floating[v],_=x[j]-s.reference[j],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(u));let E=S?S[g]:0;(!E||!await(o.isElement==null?void 0:o.isElement(S)))&&(E=a.floating[g]||s.floating[v]);const L=w/2-_/2,z=E/2-y[v]/2-1,D=mr(p[h],z),Q=mr(p[f],z),ee=D,ce=E-y[v]-Q,U=E/2-y[v]/2+L,H=Q1(ee,U,ce),W=!c.arrow&&cc(l)!=null&&U!=H&&s.reference[v]/2-(U<ee?D:Q)-y[v]/2<0,N=W?U<ee?U-ee:U-ce:0;return{[j]:x[j]+N,data:{[j]:H,centerOffset:U-H-N,...W&&{alignmentOffset:N}},reset:W}}});async function q1(t,e){const{placement:r,platform:i,elements:l}=t,s=await(i.isRTL==null?void 0:i.isRTL(l.floating)),o=ac(r),a=cc(r),c=uc(r)==="y",u=["left","top"].includes(o)?-1:1,d=s&&c?-1:1,p=Ep(e,t);let{mainAxis:x,crossAxis:j,alignmentAxis:v}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return a&&typeof v=="number"&&(j=a==="end"?v*-1:v),c?{x:j*d,y:x*u}:{x:x*u,y:j*d}}const dc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:l,y:s,placement:o,middlewareData:a}=e,c=await q1(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:l+c.x,y:s+c.y,data:{...c,placement:o}}}}};function Lp(t){const e=dt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const l=tt(t),s=l?t.offsetWidth:r,o=l?t.offsetHeight:i,a=Il(r)!==s||Il(i)!==o;return a&&(r=s,i=o),{width:r,height:i,$:a}}function fc(t){return Re(t)?t:t.contextElement}function ir(t){const e=fc(t);if(!tt(e))return cn(1);const r=e.getBoundingClientRect(),{width:i,height:l,$:s}=Lp(e);let o=(s?Il(r.width):r.width)/i,a=(s?Il(r.height):r.height)/l;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ey=cn(0);function Pp(t){const e=Ge(t);return!oc()||!e.visualViewport?ey:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ty(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Ge(t)?!1:e}function Ln(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const l=t.getBoundingClientRect(),s=fc(t);let o=cn(1);e&&(i?Re(i)&&(o=ir(i)):o=ir(t));const a=ty(s,r,i)?Pp(s):cn(0);let c=(l.left+a.x)/o.x,u=(l.top+a.y)/o.y,d=l.width/o.x,p=l.height/o.y;if(s){const x=Ge(s),j=i&&Re(i)?Ge(i):i;let v=x.frameElement;for(;v&&i&&j!==x;){const y=ir(v),k=v.getBoundingClientRect(),h=dt(v),f=k.left+(v.clientLeft+parseFloat(h.paddingLeft))*y.x,g=k.top+(v.clientTop+parseFloat(h.paddingTop))*y.y;c*=y.x,u*=y.y,d*=y.x,p*=y.y,c+=f,u+=g,v=Ge(v).frameElement}}return Rp({width:d,height:p,x:c,y:u})}function ny(t){let{rect:e,offsetParent:r,strategy:i}=t;const l=tt(r),s=zt(r);if(r===s)return e;let o={scrollLeft:0,scrollTop:0},a=cn(1);const c=cn(0);if((l||!l&&i!=="fixed")&&((an(r)!=="body"||Ni(s))&&(o=fs(r)),tt(r))){const u=Ln(r);a=ir(r),c.x=u.x+r.clientLeft,c.y=u.y+r.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+c.x,y:e.y*a.y-o.scrollTop*a.y+c.y}}function ry(t){return Array.from(t.getClientRects())}function Bp(t){return Ln(zt(t)).left+fs(t).scrollLeft}function iy(t){const e=zt(t),r=fs(t),i=t.ownerDocument.body,l=Nn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Nn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Bp(t);const a=-r.scrollTop;return dt(i).direction==="rtl"&&(o+=Nn(e.clientWidth,i.clientWidth)-l),{width:l,height:s,x:o,y:a}}function ly(t,e){const r=Ge(t),i=zt(t),l=r.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,c=0;if(l){s=l.width,o=l.height;const u=oc();(!u||u&&e==="fixed")&&(a=l.offsetLeft,c=l.offsetTop)}return{width:s,height:o,x:a,y:c}}function sy(t,e){const r=Ln(t,!0,e==="fixed"),i=r.top+t.clientTop,l=r.left+t.clientLeft,s=tt(t)?ir(t):cn(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,c=l*s.x,u=i*s.y;return{width:o,height:a,x:c,y:u}}function Zu(t,e,r){let i;if(e==="viewport")i=ly(t,r);else if(e==="document")i=iy(zt(t));else if(Re(e))i=sy(e,r);else{const l=Pp(t);i={...e,x:e.x-l.x,y:e.y-l.y}}return Rp(i)}function Ap(t,e){const r=pr(t);return r===e||!Re(r)||ds(r)?!1:dt(r).position==="fixed"||Ap(r,e)}function oy(t,e){const r=e.get(t);if(r)return r;let i=mi(t,[],!1).filter(a=>Re(a)&&an(a)!=="body"),l=null;const s=dt(t).position==="fixed";let o=s?pr(t):t;for(;Re(o)&&!ds(o);){const a=dt(o),c=sc(o);!c&&a.position==="fixed"&&(l=null),(s?!c&&!l:!c&&a.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||Ni(o)&&!c&&Ap(t,o))?i=i.filter(d=>d!==o):l=a,o=pr(o)}return e.set(t,i),i}function ay(t){let{element:e,boundary:r,rootBoundary:i,strategy:l}=t;const o=[...r==="clippingAncestors"?oy(e,this._c):[].concat(r),i],a=o[0],c=o.reduce((u,d)=>{const p=Zu(e,d,l);return u.top=Nn(p.top,u.top),u.right=mr(p.right,u.right),u.bottom=mr(p.bottom,u.bottom),u.left=Nn(p.left,u.left),u},Zu(e,a,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function cy(t){const{width:e,height:r}=Lp(t);return{width:e,height:r}}function uy(t,e,r){const i=tt(e),l=zt(e),s=r==="fixed",o=Ln(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=cn(0);if(i||!i&&!s)if((an(e)!=="body"||Ni(l))&&(a=fs(e)),i){const u=Ln(e,!0,s,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else l&&(c.x=Bp(l));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Ju(t,e){return!tt(t)||dt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Mp(t,e){const r=Ge(t);if(!tt(t))return r;let i=Ju(t,e);for(;i&&O1(i)&&dt(i).position==="static";)i=Ju(i,e);return i&&(an(i)==="html"||an(i)==="body"&&dt(i).position==="static"&&!sc(i))?r:i||z1(t)||r}const dy=async function(t){let{reference:e,floating:r,strategy:i}=t;const l=this.getOffsetParent||Mp,s=this.getDimensions;return{reference:uy(e,await l(r),i),floating:{x:0,y:0,...await s(r)}}};function fy(t){return dt(t).direction==="rtl"}const hy={convertOffsetParentRelativeRectToViewportRelativeRect:ny,getDocumentElement:zt,getClippingRect:ay,getOffsetParent:Mp,getElementRects:dy,getClientRects:ry,getDimensions:cy,getScale:ir,isElement:Re,isRTL:fy};function py(t,e){let r=null,i;const l=zt(t);function s(){clearTimeout(i),r&&r.disconnect(),r=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:u,top:d,width:p,height:x}=t.getBoundingClientRect();if(a||e(),!p||!x)return;const j=Qi(d),v=Qi(l.clientWidth-(u+p)),y=Qi(l.clientHeight-(d+x)),k=Qi(u),f={rootMargin:-j+"px "+-v+"px "+-y+"px "+-k+"px",threshold:Nn(0,mr(1,c))||1};let g=!0;function w(_){const S=_[0].intersectionRatio;if(S!==c){if(!g)return o();S?o(!1,S):i=setTimeout(()=>{o(!1,1e-7)},100)}g=!1}try{r=new IntersectionObserver(w,{...f,root:l.ownerDocument})}catch{r=new IntersectionObserver(w,f)}r.observe(t)}return o(!0),s}function hc(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,u=fc(t),d=l||s?[...u?mi(u):[],...mi(e)]:[];d.forEach(h=>{l&&h.addEventListener("scroll",r,{passive:!0}),s&&h.addEventListener("resize",r)});const p=u&&a?py(u,r):null;let x=-1,j=null;o&&(j=new ResizeObserver(h=>{let[f]=h;f&&f.target===u&&j&&(j.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{j&&j.observe(e)})),r()}),u&&!c&&j.observe(u),j.observe(e));let v,y=c?Ln(t):null;c&&k();function k(){const h=Ln(t);y&&(h.x!==y.x||h.y!==y.y||h.width!==y.width||h.height!==y.height)&&r(),y=h,v=requestAnimationFrame(k)}return r(),()=>{d.forEach(h=>{l&&h.removeEventListener("scroll",r),s&&h.removeEventListener("resize",r)}),p&&p(),j&&j.disconnect(),j=null,c&&cancelAnimationFrame(v)}}const qu=J1,my=(t,e,r)=>{const i=new Map,l={platform:hy,...r},s={...l.platform,_c:i};return Z1(t,e,{...l,platform:s})},pc=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:i,padding:l}=typeof t=="function"?t(r):t;return i&&e(i)?i.current!=null?qu({element:i.current,padding:l}).fn(r):{}:i?qu({element:i,padding:l}).fn(r):{}}}};var sl=typeof document<"u"?m.useLayoutEffect:m.useEffect;function Dl(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,i,l;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(i=r;i--!==0;)if(!Dl(t[i],e[i]))return!1;return!0}if(l=Object.keys(t),r=l.length,r!==Object.keys(e).length)return!1;for(i=r;i--!==0;)if(!{}.hasOwnProperty.call(e,l[i]))return!1;for(i=r;i--!==0;){const s=l[i];if(!(s==="_owner"&&t.$$typeof)&&!Dl(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Ip(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function ed(t,e){const r=Ip(t);return Math.round(e*r)/r}function td(t){const e=m.useRef(t);return sl(()=>{e.current=t}),e}function xy(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:i=[],platform:l,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:c,open:u}=t,[d,p]=m.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[x,j]=m.useState(i);Dl(x,i)||j(i);const[v,y]=m.useState(null),[k,h]=m.useState(null),f=m.useCallback(W=>{W!=S.current&&(S.current=W,y(W))},[y]),g=m.useCallback(W=>{W!==E.current&&(E.current=W,h(W))},[h]),w=s||v,_=o||k,S=m.useRef(null),E=m.useRef(null),L=m.useRef(d),z=td(c),D=td(l),Q=m.useCallback(()=>{if(!S.current||!E.current)return;const W={placement:e,strategy:r,middleware:x};D.current&&(W.platform=D.current),my(S.current,E.current,W).then(N=>{const C={...N,isPositioned:!0};ee.current&&!Dl(L.current,C)&&(L.current=C,_i.flushSync(()=>{p(C)}))})},[x,e,r,D]);sl(()=>{u===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,p(W=>({...W,isPositioned:!1})))},[u]);const ee=m.useRef(!1);sl(()=>(ee.current=!0,()=>{ee.current=!1}),[]),sl(()=>{if(w&&(S.current=w),_&&(E.current=_),w&&_){if(z.current)return z.current(w,_,Q);Q()}},[w,_,Q,z]);const ce=m.useMemo(()=>({reference:S,floating:E,setReference:f,setFloating:g}),[f,g]),U=m.useMemo(()=>({reference:w,floating:_}),[w,_]),H=m.useMemo(()=>{const W={position:r,left:0,top:0};if(!U.floating)return W;const N=ed(U.floating,d.x),C=ed(U.floating,d.y);return a?{...W,transform:"translate("+N+"px, "+C+"px)",...Ip(U.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:C}},[r,a,U.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:Q,refs:ce,elements:U,floatingStyles:H}),[d,Q,ce,U,H])}const gy=Jo.useInsertionEffect,jy=gy||(t=>t());function vy(t){const e=m.useRef(()=>{});return jy(()=>{e.current=t}),m.useCallback(function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e.current==null?void 0:e.current(...i)},[])}var xi=typeof document<"u"?m.useLayoutEffect:m.useEffect;let Vs=!1,yy=0;const nd=()=>"floating-ui-"+yy++;function wy(){const[t,e]=m.useState(()=>Vs?nd():void 0);return xi(()=>{t==null&&e(nd())},[]),m.useEffect(()=>{Vs||(Vs=!0)},[]),t}const Cy=Jo.useId,_y=Cy||wy;function ky(){const t=new Map;return{emit(e,r){var i;(i=t.get(e))==null||i.forEach(l=>l(r))},on(e,r){t.set(e,[...t.get(e)||[],r])},off(e,r){var i;t.set(e,((i=t.get(e))==null?void 0:i.filter(l=>l!==r))||[])}}}const Ny=m.createContext(null),Sy=m.createContext(null),Dp=()=>{var t;return((t=m.useContext(Ny))==null?void 0:t.id)||null},Fp=()=>m.useContext(Sy);function Op(t){return"data-floating-ui-"+t}function rd(t){const e=m.useRef(t);return xi(()=>{e.current=t}),e}const id=Op("safe-polygon");function Xs(t,e,r){return r&&!Ml(r)?0:typeof t=="number"?t:t==null?void 0:t[e]}function zp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,events:s,elements:{domReference:o,floating:a},refs:c}=t,{enabled:u=!0,delay:d=0,handleClose:p=null,mouseOnly:x=!1,restMs:j=0,move:v=!0}=e,y=Fp(),k=Dp(),h=rd(p),f=rd(d),g=m.useRef(),w=m.useRef(),_=m.useRef(),S=m.useRef(),E=m.useRef(!0),L=m.useRef(!1),z=m.useRef(()=>{}),D=m.useCallback(()=>{var U;const H=(U=l.current.openEvent)==null?void 0:U.type;return(H==null?void 0:H.includes("mouse"))&&H!=="mousedown"},[l]);m.useEffect(()=>{if(!u)return;function U(H){let{open:W}=H;W||(clearTimeout(w.current),clearTimeout(S.current),E.current=!0)}return s.on("openchange",U),()=>{s.off("openchange",U)}},[u,s]),m.useEffect(()=>{if(!u||!h.current||!r)return;function U(W){D()&&i(!1,W,"hover")}const H=Mr(a).documentElement;return H.addEventListener("mouseleave",U),()=>{H.removeEventListener("mouseleave",U)}},[a,r,i,u,h,l,D]);const Q=m.useCallback(function(U,H,W){H===void 0&&(H=!0),W===void 0&&(W="hover");const N=Xs(f.current,"close",g.current);N&&!_.current?(clearTimeout(w.current),w.current=setTimeout(()=>i(!1,U,W),N)):H&&(clearTimeout(w.current),i(!1,U,W))},[f,i]),ee=m.useCallback(()=>{z.current(),_.current=void 0},[]),ce=m.useCallback(()=>{if(L.current){const U=Mr(c.floating.current).body;U.style.pointerEvents="",U.removeAttribute(id),L.current=!1}},[c]);return m.useEffect(()=>{if(!u)return;function U(){return l.current.openEvent?["click","mousedown"].includes(l.current.openEvent.type):!1}function H(C){if(clearTimeout(w.current),E.current=!1,x&&!Ml(g.current)||j>0&&Xs(f.current,"open")===0)return;const b=Xs(f.current,"open",g.current);b?w.current=setTimeout(()=>{i(!0,C,"hover")},b):i(!0,C,"hover")}function W(C){if(U())return;z.current();const b=Mr(a);if(clearTimeout(S.current),h.current){r||clearTimeout(w.current),_.current=h.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),ee(),Q(C,!0,"safe-polygon")}});const $=_.current;b.addEventListener("mousemove",$),z.current=()=>{b.removeEventListener("mousemove",$)};return}(g.current==="touch"?!Qo(a,C.relatedTarget):!0)&&Q(C)}function N(C){U()||h.current==null||h.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),ee(),Q(C)}})(C)}if(Re(o)){const C=o;return r&&C.addEventListener("mouseleave",N),a==null||a.addEventListener("mouseleave",N),v&&C.addEventListener("mousemove",H,{once:!0}),C.addEventListener("mouseenter",H),C.addEventListener("mouseleave",W),()=>{r&&C.removeEventListener("mouseleave",N),a==null||a.removeEventListener("mouseleave",N),v&&C.removeEventListener("mousemove",H),C.removeEventListener("mouseenter",H),C.removeEventListener("mouseleave",W)}}},[o,a,u,t,x,j,v,Q,ee,ce,i,r,y,f,h,l]),xi(()=>{var U;if(u&&r&&(U=h.current)!=null&&U.__options.blockPointerEvents&&D()){const W=Mr(a).body;if(W.setAttribute(id,""),W.style.pointerEvents="none",L.current=!0,Re(o)&&a){var H;const N=o,C=y==null||(H=y.nodesRef.current.find(b=>b.id===k))==null||(H=H.context)==null?void 0:H.elements.floating;return C&&(C.style.pointerEvents=""),N.style.pointerEvents="auto",a.style.pointerEvents="auto",()=>{N.style.pointerEvents="",a.style.pointerEvents=""}}}},[u,r,k,a,o,y,h,l,D]),xi(()=>{r||(g.current=void 0,ee(),ce())},[r,ee,ce]),m.useEffect(()=>()=>{ee(),clearTimeout(w.current),clearTimeout(S.current),ce()},[u,o,ee,ce]),m.useMemo(()=>{if(!u)return{};function U(H){g.current=H.pointerType}return{reference:{onPointerDown:U,onPointerEnter:U,onMouseMove(H){r||j===0||(clearTimeout(S.current),S.current=setTimeout(()=>{E.current||i(!0,H.nativeEvent,"hover")},j))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(H){Q(H.nativeEvent,!1)}}}},[u,j,r,i,Q])}function ld(t){return tt(t.target)&&t.target.tagName==="BUTTON"}function sd(t){return Sp(t)}function gi(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,elements:{domReference:s}}=t,{enabled:o=!0,event:a="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=e,p=m.useRef(),x=m.useRef(!1);return m.useMemo(()=>o?{reference:{onPointerDown(j){p.current=j.pointerType},onMouseDown(j){j.button===0&&(Ml(p.current,!0)&&u||a!=="click"&&(r&&c&&(!l.current.openEvent||l.current.openEvent.type==="mousedown")?i(!1,j.nativeEvent,"click"):(j.preventDefault(),i(!0,j.nativeEvent,"click"))))},onClick(j){if(a==="mousedown"&&p.current){p.current=void 0;return}Ml(p.current,!0)&&u||(r&&c&&(!l.current.openEvent||l.current.openEvent.type==="click")?i(!1,j.nativeEvent,"click"):i(!0,j.nativeEvent,"click"))},onKeyDown(j){p.current=void 0,!(j.defaultPrevented||!d||ld(j))&&(j.key===" "&&!sd(s)&&(j.preventDefault(),x.current=!0),j.key==="Enter"&&i(!(r&&c),j.nativeEvent,"click"))},onKeyUp(j){j.defaultPrevented||!d||ld(j)||sd(s)||j.key===" "&&x.current&&(x.current=!1,i(!(r&&c),j.nativeEvent,"click"))}}}:{},[o,l,a,u,d,s,c,r,i])}function mc(t){var e;t===void 0&&(t={});const{open:r=!1,onOpenChange:i,nodeId:l}=t,[s,o]=m.useState(null),a=((e=t.elements)==null?void 0:e.reference)||s,c=xy(t),u=Fp(),d=Dp()!=null,p=vy((_,S,E)=>{_&&(j.current.openEvent=S),v.emit("openchange",{open:_,event:S,reason:E,nested:d}),i==null||i(_,S,E)}),x=m.useRef(null),j=m.useRef({}),v=m.useState(()=>ky())[0],y=_y(),k=m.useCallback(_=>{const S=Re(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;c.refs.setReference(S)},[c.refs]),h=m.useCallback(_=>{(Re(_)||_===null)&&(x.current=_,o(_)),(Re(c.refs.reference.current)||c.refs.reference.current===null||_!==null&&!Re(_))&&c.refs.setReference(_)},[c.refs]),f=m.useMemo(()=>({...c.refs,setReference:h,setPositionReference:k,domReference:x}),[c.refs,h,k]),g=m.useMemo(()=>({...c.elements,domReference:a}),[c.elements,a]),w=m.useMemo(()=>({...c,refs:f,elements:g,dataRef:j,nodeId:l,floatingId:y,events:v,open:r,onOpenChange:p}),[c,l,y,v,r,p,f,g]);return xi(()=>{const _=u==null?void 0:u.nodesRef.current.find(S=>S.id===l);_&&(_.context=w)}),m.useMemo(()=>({...c,context:w,refs:f,elements:g}),[c,f,g,w])}function $p(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,events:l,refs:s,elements:{floating:o,domReference:a}}=t,{enabled:c=!0,visibleOnly:u=!0}=e,d=m.useRef(!1),p=m.useRef(),x=m.useRef(!0);return m.useEffect(()=>{if(!c)return;const j=Ge(a);function v(){!r&&tt(a)&&a===Gu(Mr(a))&&(d.current=!0)}function y(){x.current=!0}return j.addEventListener("blur",v),j.addEventListener("keydown",y,!0),()=>{j.removeEventListener("blur",v),j.removeEventListener("keydown",y,!0)}},[o,a,r,c]),m.useEffect(()=>{if(!c)return;function j(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(d.current=!0)}return l.on("openchange",j),()=>{l.off("openchange",j)}},[l,c]),m.useEffect(()=>()=>{clearTimeout(p.current)},[]),m.useMemo(()=>c?{reference:{onPointerDown(j){U1(j.nativeEvent)||(x.current=!1)},onMouseLeave(){d.current=!1},onFocus(j){if(d.current)return;const v=V1(j.nativeEvent);if(u&&Re(v))try{if(H1()&&W1())throw Error();if(!v.matches(":focus-visible"))return}catch{if(!x.current&&!Sp(v))return}i(!0,j.nativeEvent,"focus")},onBlur(j){d.current=!1;const v=j.relatedTarget,y=Re(v)&&v.hasAttribute(Op("focus-guard"))&&v.getAttribute("data-type")==="outside";p.current=window.setTimeout(()=>{const k=Gu(a?a.ownerDocument:document);!v&&k===a||Qo(s.floating.current,v)||Qo(a,v)||y||i(!1,j.nativeEvent,"focus")})}}}:{},[c,u,a,s,i])}const od="active",ad="selected";function Qs(t,e,r){const i=new Map,l=r==="item";let s=t;if(l&&t){const{[od]:o,[ad]:a,...c}=t;s=c}return{...r==="floating"&&{tabIndex:-1},...s,...e.map(o=>{const a=o?o[r]:null;return typeof a=="function"?t?a(t):null:a}).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(c=>{let[u,d]=c;if(!(l&&[od,ad].includes(u)))if(u.indexOf("on")===0){if(i.has(u)||i.set(u,[]),typeof d=="function"){var p;(p=i.get(u))==null||p.push(d),o[u]=function(){for(var x,j=arguments.length,v=new Array(j),y=0;y<j;y++)v[y]=arguments[y];return(x=i.get(u))==null?void 0:x.map(k=>k(...v)).find(k=>k!==void 0)}}}else o[u]=d}),o),{})}}function xc(t){t===void 0&&(t=[]);const e=t,r=m.useCallback(s=>Qs(s,t,"reference"),e),i=m.useCallback(s=>Qs(s,t,"floating"),e),l=m.useCallback(s=>Qs(s,t,"item"),t.map(s=>s==null?void 0:s.item));return m.useMemo(()=>({getReferenceProps:r,getFloatingProps:i,getItemProps:l}),[r,i,l])}const Ey=(t,e)=>{const{style:r,className:i,placement:l,content:s,effect:o,getFloatingProps:a,children:c}=t;function u(){return typeof s=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:s})}):n.jsx(n.Fragment,{children:s})}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:r,className:O("el-popper",`is-${o}`,i),"data-popper-placement":l,...a(),children:[n.jsx(u,{}),c]})})},Up=m.forwardRef(Ey);Up.displayName="TooltipPopper";const Ty=t=>{var E,L;const{style:e,className:r,effect:i="dark",placement:l="bottom",trigger:s="hover",content:o,showAfter:a=0,hideAfter:c=200,disabled:u=!0,children:d}=t,[p,x]=m.useState(!1),j=m.useRef(null),{refs:v,floatingStyles:y,context:k,middlewareData:h}=mc({placement:l,middleware:[dc(12),pc({element:j})],open:p&&u,whileElementsMounted:hc,onOpenChange:x});let f={};switch(s){case"hover":f=zp(k,{delay:{open:a,close:c}});break;case"click":f=gi(k);break;case"focus":f=$p(k);break;case"contextmenu":f=gi(k,{event:"mousedown"});break}const{getReferenceProps:g,getFloatingProps:w}=xc([f]),_=m.cloneElement(m.Children.only(d),{ref:v.setReference,...g()}),S={...e,...y};return n.jsxs(n.Fragment,{children:[p&&_i.createPortal(n.jsx(Up,{ref:v.setFloating,style:S,className:O(r),effect:i,placement:l,content:o,getFloatingProps:w,children:n.jsx("span",{ref:j,className:"el-popper__arrow",style:{position:"absolute",left:(E=h.arrow)==null?void 0:E.x,top:(L=h.arrow)==null?void 0:L.y}})}),document.body),_]})},Ce=m.forwardRef(Ty);Ce.displayName="Tooltip";const by=(t,e)=>{const{style:r,className:i,placement:l,title:s,content:o,getFloatingProps:a,children:c}=t;function u(){return typeof o=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:o})}):n.jsx(n.Fragment,{children:o})}const d={width:"200px",...r};return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:d,className:O("el-popper is-light el-popover el-popover--plain",i),"data-popper-placement":l,...a(),children:[n.jsx("div",{className:"el-popover__title",role:"title",children:s}),n.jsx(u,{}),c]})})},Hp=m.forwardRef(by);Hp.displayName="PopoverPopper";const Ry=t=>{var S,E;const{style:e,className:r,placement:i="bottom",trigger:l="hover",title:s,content:o,showAfter:a=0,hideAfter:c=200,children:u}=t,[d,p]=m.useState(!1),x=m.useRef(null),{refs:j,floatingStyles:v,context:y,middlewareData:k}=mc({placement:i,middleware:[dc(12),pc({element:x})],open:d,whileElementsMounted:hc,onOpenChange:p});let h={};switch(l){case"hover":h=zp(y,{delay:{open:a,close:c}});break;case"click":h=gi(y);break;case"focus":h=$p(y);break;case"contextmenu":h=gi(y,{event:"mousedown"});break}const{getReferenceProps:f,getFloatingProps:g}=xc([h]),w=m.cloneElement(m.Children.only(u),{ref:j.setReference,...f()}),_={...e,...v};return n.jsxs(n.Fragment,{children:[d&&_i.createPortal(n.jsx(Hp,{ref:j.setFloating,style:_,className:O(r),placement:i,title:s,content:o,getFloatingProps:g,children:n.jsx("span",{ref:x,className:"el-popper__arrow",style:{position:"absolute",left:(S=k.arrow)==null?void 0:S.x,top:(E=k.arrow)==null?void 0:E.y}})}),document.body),w]})},Ir=m.forwardRef(Ry);Ir.displayName="Popover";const Ly=(t,e)=>{const{style:r,className:i,percentage:l=0,format:s,status:o,textInside:a=!1,strokeWidth:c=6}=t;function u(){return a?s?n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsx("span",{children:s(l)})}):n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsxs("span",{children:[l,"%"]})}):n.jsx(n.Fragment,{})}function d(){if(!a)if(o){let p;switch(o){case"success":p=n.jsx(lc,{});break;case"warning":p=n.jsx(as,{});break;case"exception":p=n.jsx(cs,{});break}return p}else return s?n.jsx("span",{children:s(l)}):n.jsxs("span",{children:[l,"%"]});return n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:O("el-progress el-progress--line",o?`is-${o}`:"",i),role:"progressbar",children:[n.jsx("div",{className:"el-progress-bar",children:n.jsx("div",{className:"el-progress-bar__outer",style:{height:`${c}px`},children:n.jsx("div",{className:"el-progress-bar__inner",style:{width:`${l}%`,animationDuration:"3s"},children:n.jsx(u,{})})})}),n.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:n.jsx(d,{})})]})},_t=m.forwardRef(Ly);_t.displayName="Progress";const Py=(t,e)=>{const{style:r,className:i,placement:l,title:s,width:o,icon:a,iconColor:c,hideIcon:u,confirmButtonText:d,cancelButtonText:p,onConfirm:x,onCancel:j,getFloatingProps:v,children:y}=t,k={width:o?typeof o=="string"?o:`${o}px`:"150px",...r};function h(){return u?n.jsx(n.Fragment,{}):m.cloneElement(a,{className:O(a==null?void 0:a.props.className,"el-popconfirm__icon"),style:{color:c}})}function f(w){j&&(console.log(w),j(w))}function g(w){x&&x(w)}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:k,className:O("el-popper is-light el-popover",i),"data-popper-placement":l,...v(),children:[n.jsxs("div",{className:"el-popconfirm",children:[n.jsxs("div",{className:"el-popconfirm__main",children:[n.jsx(h,{}),s]}),n.jsxs("div",{className:"el-popconfirm__action",children:[n.jsx(R,{onClick:f,children:p}),n.jsx(R,{type:"primary",onClick:g,children:d})]})]}),y]})})},Wp=m.forwardRef(Py);Wp.displayName="PopconfirmPopper";const By=t=>{var D,Q;const{style:e,className:r,placement:i="bottom",title:l,width:s=150,icon:o=n.jsx(yp,{}),iconColor:a="#f90",hideIcon:c=!1,confirmButtonText:u="Yes",cancelButtonText:d="No",onConfirm:p,onCancel:x,children:j}=t,[v,y]=m.useState(!1),k=m.useRef(null),{refs:h,floatingStyles:f,context:g,middlewareData:w}=mc({placement:i,middleware:[dc(12),pc({element:k})],open:v,whileElementsMounted:hc,onOpenChange:y}),_=gi(g),{getReferenceProps:S,getFloatingProps:E}=xc([_]),L=m.cloneElement(m.Children.only(j),{ref:h.setReference,...S()}),z={...e,...f};return n.jsxs(n.Fragment,{children:[v&&_i.createPortal(n.jsx(Wp,{ref:h.setFloating,style:z,className:O(r),placement:i,title:l,width:s,icon:o,iconColor:a,hideIcon:c,confirmButtonText:u,cancelButtonText:d,onConfirm:p,onCancel:x,getFloatingProps:E,children:n.jsx("span",{ref:k,className:"el-popper__arrow",style:{position:"absolute",left:(D=w.arrow)==null?void 0:D.x,top:(Q=w.arrow)==null?void 0:Q.y}})}),document.body),L]})},hs=m.forwardRef(By);hs.displayName="Popconfirm";const Ay=(t,e)=>{const{style:r,className:i,type:l="",closable:s=!1,size:o="",effect:a="light",round:c=!1,children:u}=t;function d(){return s?n.jsx(hr,{className:"el-tag__close"}):n.jsx(n.Fragment,{})}return n.jsxs("span",{ref:e,style:r,className:O("el-tag el-tag--light",l?`el-tag--${l}`:"",o?`el-tag--${o}`:"",a?`el-tag--${a}`:"",c?"is-round":"",i),children:[n.jsx("span",{className:"el-tag__content",children:u}),n.jsx(d,{})]})},xe=m.forwardRef(Ay);xe.displayName="Tag";function My(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{children:"Default"}),n.jsx(R,{type:"primary",children:"Primary"}),n.jsx(R,{type:"success",children:"Success"}),n.jsx(R,{type:"info",children:"Info"}),n.jsx(R,{type:"warning",children:"Warning"}),n.jsx(R,{type:"danger",children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{plain:!0,children:"Plain"}),n.jsx(R,{type:"primary",plain:!0,children:"Primary"}),n.jsx(R,{type:"success",plain:!0,children:"Success"}),n.jsx(R,{type:"info",plain:!0,children:"Info"}),n.jsx(R,{type:"warning",plain:!0,children:"Warning"}),n.jsx(R,{type:"danger",plain:!0,children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{round:!0,children:"Round"}),n.jsx(R,{type:"primary",round:!0,children:"Primary"}),n.jsx(R,{type:"success",round:!0,children:"Success"}),n.jsx(R,{type:"info",round:!0,children:"Info"}),n.jsx(R,{type:"warning",round:!0,children:"Warning"}),n.jsx(R,{type:"danger",round:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(R,{icon:n.jsx(Ya,{}),circle:!0}),n.jsx(R,{type:"primary",icon:n.jsx(ss,{}),circle:!0}),n.jsx(R,{type:"success",icon:n.jsx(pi,{}),circle:!0}),n.jsx(R,{type:"info",icon:n.jsx(Za,{}),circle:!0}),n.jsx(R,{type:"warning",icon:n.jsx(Ja,{}),circle:!0}),n.jsx(R,{type:"danger",icon:n.jsx(qa,{}),circle:!0})]})]})}function Iy(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(R,{disabled:!0,children:"Default"}),n.jsx(R,{type:"primary",disabled:!0,children:"Primary"}),n.jsx(R,{type:"success",disabled:!0,children:"Success"}),n.jsx(R,{type:"info",disabled:!0,children:"Info"}),n.jsx(R,{type:"warning",disabled:!0,children:"Warning"}),n.jsx(R,{type:"danger",disabled:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(R,{plain:!0,disabled:!0,children:"Plain"}),n.jsx(R,{type:"primary",plain:!0,disabled:!0,children:"Primary"}),n.jsx(R,{type:"success",plain:!0,disabled:!0,children:"Success"}),n.jsx(R,{type:"info",plain:!0,disabled:!0,children:"Info"}),n.jsx(R,{type:"warning",plain:!0,disabled:!0,children:"Warning"}),n.jsx(R,{type:"danger",plain:!0,disabled:!0,children:"Danger"})]})]})}function Dy(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic link button"}),n.jsx(R,{link:!0,children:"Default"}),n.jsx(R,{type:"primary",link:!0,children:"Primary"}),n.jsx(R,{type:"success",link:!0,children:"Success"}),n.jsx(R,{type:"info",link:!0,children:"Info"}),n.jsx(R,{type:"warning",link:!0,children:"Warning"}),n.jsx(R,{type:"danger",link:!0,children:"Danger"}),n.jsx("p",{children:"Disabled link button"}),n.jsx(R,{link:!0,disabled:!0,children:"Default"}),n.jsx(R,{type:"primary",link:!0,disabled:!0,children:"Primary"}),n.jsx(R,{type:"success",link:!0,disabled:!0,children:"Success"}),n.jsx(R,{type:"info",link:!0,disabled:!0,children:"Info"}),n.jsx(R,{type:"warning",link:!0,disabled:!0,children:"Warning"}),n.jsx(R,{type:"danger",link:!0,disabled:!0,children:"Danger"})]})}function cd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Button 按钮"}),`
`,`
`,n.jsx(e.p,{children:"常用的操作按钮。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"type"}),"、",n.jsx(e.code,{children:"plain"}),"、",n.jsx(e.code,{children:"round"})," 和 ",n.jsx(e.code,{children:"circle"})," 来定义按钮的样式。"]}),`
`,n.jsx(M,{name:"ButtonBasic",children:n.jsx(My,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.code,{children:"disabled"})," 属性来定义按钮是否被禁用。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"disabled"})," 属性来控制按钮是否为禁用状态。 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"})," 类型的值。"]}),`
`,n.jsx(M,{name:"ButtonDisabled",children:n.jsx(Iy,{})}),`
`,n.jsx(e.h2,{children:"链接按钮"}),`
`,n.jsx(M,{name:"ButtonLink",children:n.jsx(Dy,{})}),`
`,n.jsx(e.h2,{children:"Button API"}),`
`,n.jsx(e.h3,{children:"Button Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' 'success' 'warning' 'danger' 'info' 'text'(delete)"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"plain"}),n.jsx(e.td,{children:"是否为朴素按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:"是否为链接按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"是否为圆角按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"circle"}),n.jsx(e.td,{children:"是否为圆形按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"按钮是否为禁用状态"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function Fy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(cd,{...t})}):cd(t)}function Oy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(pn,{children:"Main"})]})})})}function zy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(pn,{children:"Main"}),n.jsx(us,{children:"Footer"})]})})})}function $y(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(wr,{width:"200px",children:"Aside"}),n.jsx(pn,{children:"Main"})]})})})}function Uy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(wr,{width:"200px",children:"Aside"}),n.jsx(pn,{children:"Main"})]})]})})})}function Hy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(wr,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(pn,{children:"Main"}),n.jsx(us,{children:"Footer"})]})]})]})})})}function Wy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(wr,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(pn,{children:"Main"})]})]})})})}function Vy(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(wr,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(pn,{children:"Main"}),n.jsx(us,{children:"Footer"})]})]})})})}function ud(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(M,{name:"ContainerBasic",children:n.jsx(Oy,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(M,{name:"ContainerBasic1",children:n.jsx(zy,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(M,{name:"ContainerBasic2",children:n.jsx($y,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(M,{name:"ContainerBasic3",children:n.jsx(Uy,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(M,{name:"ContainerBasic4",children:n.jsx(Hy,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(M,{name:"ContainerBasic5",children:n.jsx(Wy,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(M,{name:"ContainerBasic6",children:n.jsx(Vy,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]})]})}function Xy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ud,{...t})}):ud(t)}function Qy(){return n.jsxs(n.Fragment,{children:[n.jsx(ss,{style:{fontSize:"20px"}}),n.jsx(Ya,{style:{fontSize:"20px"}}),n.jsx(pi,{style:{fontSize:"20px"}}),n.jsx(Za,{style:{fontSize:"20px"}}),n.jsx(Ja,{style:{fontSize:"20px"}}),n.jsx(qa,{style:{fontSize:"20px"}}),n.jsx(os,{style:{fontSize:"20px"}}),n.jsx(ec,{style:{fontSize:"20px"}}),n.jsx(tc,{style:{fontSize:"20px"}}),n.jsx(nc,{style:{fontSize:"20px"}}),n.jsx(ki,{style:{fontSize:"20px"}}),n.jsx(as,{style:{fontSize:"20px"}}),n.jsx(cs,{style:{fontSize:"20px"}}),n.jsx(rc,{style:{fontSize:"20px"}}),n.jsx(ic,{style:{fontSize:"20px"}}),n.jsx(lc,{style:{fontSize:"20px"}}),n.jsx(hr,{style:{fontSize:"20px"}})]})}function dd(t){const e={h1:"h1",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Icon"}),`
`,`
`,n.jsx(M,{name:"IconBasic",children:n.jsx(Qy,{})})]})}function Gy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(dd,{...t})}):dd(t)}function Ky(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{children:n.jsx(I,{span:24,children:n.jsx("div",{className:"grid-content ep-bg-purple-dark"})})}),n.jsxs(le,{children:[n.jsx(I,{span:12,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:12,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(le,{children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]})]}),n.jsxs(le,{children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(le,{children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]})]})}function Yy(){return n.jsx(n.Fragment,{children:n.jsxs(le,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})})}function Zy(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{gutter:20,children:[n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{gutter:20,children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{gutter:20,children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function Jy(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{gutter:20,children:[n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsx(le,{gutter:20,children:n.jsx(I,{span:12,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})})]})}function qy(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{className:"row-bg",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"center",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"end",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"space-between",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"space-around",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"space-evenly",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function e2(){return n.jsx(n.Fragment,{children:n.jsxs(le,{gutter:10,children:[n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})})]})})}function fd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Layout 布局"}),`
`,`
`,n.jsx(e.p,{children:"通过基础的 24 分栏，迅速简便地创建布局。"}),`
`,n.jsx(e.h2,{children:"基础布局"}),`
`,n.jsx(e.p,{children:"使用列创建基础网格布局。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"Row"})," 和 ",n.jsx(e.code,{children:"Col"})," 组件，并通过 col 组件的 ",n.jsx(e.code,{children:"Span"})," 属性我们就可以自由地组合布局。"]}),`
`,n.jsx(M,{name:"LayoutBasic",children:n.jsx(Ky,{})}),`
`,n.jsx(e.h2,{children:"分栏间隔"}),`
`,n.jsx(e.p,{children:"支持列间距。"}),`
`,n.jsx(e.p,{children:"行提供 gutter 属性来指定列之间的间距，其默认值为0。"}),`
`,n.jsx(M,{name:"LayoutGutter",children:n.jsx(Yy,{})}),`
`,n.jsx(e.h2,{children:"混合布局"}),`
`,n.jsx(e.p,{children:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}),`
`,n.jsx(M,{name:"LayoutMix",children:n.jsx(Zy,{})}),`
`,n.jsx(e.h2,{children:"列偏移"}),`
`,n.jsx(e.p,{children:"您可以指定列偏移量。"}),`
`,n.jsxs(e.p,{children:["通过制定 col 组件的 ",n.jsx(e.code,{children:"offset"})," 属性可以指定分栏偏移的栏数。"]}),`
`,n.jsx(M,{name:"LayoutOffset",children:n.jsx(Jy,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"默认使用 flex 布局来对分栏进行灵活的对齐。"}),`
`,n.jsxs(e.p,{children:["您可以通过 ",n.jsx(e.code,{children:"justify"})," 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。"]}),`
`,n.jsx(M,{name:"LayoutJustify",children:n.jsx(qy,{})}),`
`,n.jsx(e.h2,{children:"响应式布局"}),`
`,n.jsx(e.p,{children:"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"}),`
`,n.jsx(M,{name:"LayoutBootstrap",children:n.jsx(e2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"span"}),n.jsx(e.td,{children:"栅格占据的列数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"offset"}),n.jsx(e.td,{children:"栅格左侧的间隔格数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xs"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"sm"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"md"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥992px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lg"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1200px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xl"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1920px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function t2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fd,{...t})}):fd(t)}function n2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(be,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(be,{type:"primary",children:"primary"}),n.jsx(be,{type:"success",children:"success"}),n.jsx(be,{type:"warning",children:"warning"}),n.jsx(be,{type:"danger",children:"danger"}),n.jsx(be,{type:"info",children:"info"})]})})}function r2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(be,{disabled:!0,children:"default"}),n.jsx(be,{type:"primary",disabled:!0,children:"primary"}),n.jsx(be,{type:"success",disabled:!0,children:"success"}),n.jsx(be,{type:"warning",disabled:!0,children:"warning"}),n.jsx(be,{type:"danger",disabled:!0,children:"danger"}),n.jsx(be,{type:"info",disabled:!0,children:"info"})]})})}function i2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(be,{underline:!1,children:"Without Underline"}),n.jsx(be,{children:"With Underline"})]})})}function l2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(be,{icon:n.jsx(ss,{}),children:"Edit"}),n.jsxs(be,{children:["Check",n.jsx(os,{className:"el-icon--right"})]})]})})}function hd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(M,{name:"LinkBasic",children:n.jsx(n2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(M,{name:"LinkDisabled",children:n.jsx(r2,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(M,{name:"LinkUnderline",children:n.jsx(i2,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(M,{name:"LinkIcon",children:n.jsx(l2,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]})]})}function s2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(hd,{...t})}):hd(t)}function o2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",type:"primary",children:"Primary"}),n.jsx(Ye,{className:"mx-1",type:"success",children:"Success"}),n.jsx(Ye,{className:"mx-1",type:"info",children:"Info"}),n.jsx(Ye,{className:"mx-1",type:"warning",children:"Warning"}),n.jsx(Ye,{className:"mx-1",type:"danger",children:"Danger"})]})})}function a2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",size:"large",children:"Large"}),n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",size:"small",children:"Small"})]})})}function c2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),n.jsx(le,{className:"w-150px mb-2",children:n.jsx(Ye,{truncated:!0,children:"Squeezed by parent element"})}),n.jsxs(Ye,{lineClamp:2,children:["The -webkit-line-clamp CSS property",n.jsx("br",{}),"allows limiting of the contents of",n.jsx("br",{}),"a block to the specified number of lines."]})]})})}function pd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Text"}),`
`,`
`,n.jsx(e.p,{children:"文本的常见操作"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,n.jsx(M,{name:"TextBasic",children:n.jsx(o2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"})]}),`
`,n.jsx(M,{name:"TextSize",children:n.jsx(a2,{})}),`
`,n.jsx(e.h2,{children:"省略"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",n.jsx(e.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,n.jsx(M,{name:"TextTruncated",children:n.jsx(c2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"大小"}),n.jsx(e.td,{children:"'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"truncated"}),n.jsx(e.td,{children:"显示省略号"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lineClamp"}),n.jsx(e.td,{children:"最大行数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function u2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pd,{...t})}):pd(t)}function d2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}})]})}function f2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,size:"large",activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,size:"small",activeText:"Open",inactiveText:"Close"})]})}function h2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,className:"mb-2",activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mb-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,inlinePrompt:!0,activeText:"是",inactiveText:"否"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Y",inactiveText:"N"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",width:60,inlinePrompt:!0,activeText:"超出省略",inactiveText:"超出省略"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"完整展示多个内容",inactiveText:"多个内容"})]})}function p2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeIcon:n.jsx(pi,{}),inactiveIcon:n.jsx(hr,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mt-2",style:{marginLeft:"24px"},inlinePrompt:!0,activeIcon:n.jsx(pi,{className:"is-icon"}),inactiveIcon:n.jsx(hr,{className:"is-icon"})})]})}function m2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,disabled:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2"})]})}function x2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,loading:!0}),n.jsx(me,{loading:!0,className:"ml-2"})]})}function g2(){const[t,e]=m.useState(!1),[r,i]=m.useState(!1);function l(){return e(!0),new Promise(o=>{setTimeout(()=>(e(!1),console.log("Switch success"),o(!0)),1e3)})}function s(){return i(!0),new Promise((o,a)=>{setTimeout(()=>(i(!1),console.log("Switch failed"),a(new Error("Error"))),1e3)})}return n.jsxs(n.Fragment,{children:[n.jsx(me,{loading:t,beforeChange:l}),n.jsx(me,{className:"ml-2",loading:r,beforeChange:s})]})}function j2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(os,{}),inactiveActionIcon:n.jsx(nc,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-active-action",children:"T"})}),inactiveActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-inactive-action",children:"F"})})})]})}function md(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Switch 开关"}),`
`,`
`,n.jsx(e.p,{children:"表示两种相互对立的状态间的切换，多用于触发「开/关」。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。"}),`
`,n.jsx(M,{name:"SwitchBasic",children:n.jsx(d2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsx(M,{name:"SwitchSize",children:n.jsx(f2,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制文本是否显示在点内。"]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。"]}),`
`,n.jsx(M,{name:"SwitchText",children:n.jsx(h2,{})}),`
`,n.jsx(e.h2,{children:"显示自定义图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-icon"})," 和 ",n.jsx(e.code,{children:"active-icon"})," 属性来添加图标。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制图标显示在点内。"]}),`
`,n.jsx(M,{name:"SwitchIcon",children:n.jsx(p2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"disabled"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即可禁用。"]}),`
`,n.jsx(M,{name:"SwitchDisabled",children:n.jsx(m2,{})}),`
`,n.jsx(e.h2,{children:"加载状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"loading"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即加载中状态。"]}),`
`,n.jsx(M,{name:"SwitchLoading",children:n.jsx(x2,{})}),`
`,n.jsx(e.h2,{children:"阻止切换"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"beforeChange"}),"属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"]}),`
`,n.jsx(M,{name:"SwitchBeforeChange",children:n.jsx(g2,{})}),`
`,n.jsx(e.h2,{children:"自定义动作图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-action-icon"})," 和 ",n.jsx(e.code,{children:"active-action-icon"})," 属性来添加图标。"]}),`
`,n.jsx(M,{name:"SwitchActionIcon",children:n.jsx(j2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"defaultChecked"}),n.jsx(e.td,{children:"初始是否选中"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"switch 的大小"}),n.jsx(e.td,{children:"'large' / 'small'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"switch 的宽度"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inlinePrompt"}),n.jsx(e.td,{children:"无论图标或文本是否显示在点内，只会呈现文本的第一个字符"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeIcon"}),n.jsx(e.td,{children:"switch 状态为 on 时所显示图标，设置此项会忽略 activeText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveIcon"}),n.jsx(e.td,{children:"switch 状态为 off 时所显示图标，设置此项会忽略 inactiveText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeActionIcon"}),n.jsx(e.td,{children:"on状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveActionIcon"}),n.jsx(e.td,{children:"off状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeText"}),n.jsx(e.td,{children:"switch 打开时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveText"}),n.jsx(e.td,{children:"switch 的状态为 off 时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"beforeChange"}),n.jsx(e.td,{children:"switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"}),n.jsx(e.td,{children:"boolean / Function"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function v2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(md,{...t})}):md(t)}function y2(){const t="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",e="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",r=["small","","large"],i=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{size:s,src:t})},o)),l=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:s,src:e})},o));return n.jsx(n.Fragment,{children:n.jsxs(le,{className:"common-avatar",children:[n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"circle"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{size:50,src:t})}),i]})]}),n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"square"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:50,src:e})}),l]})]})]})})}function w2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-avatar",children:[n.jsx("div",{children:n.jsx(kt,{icon:n.jsx(vp,{})})}),n.jsx("div",{children:n.jsx(kt,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})}),n.jsx("div",{children:n.jsx(kt,{children:" user "})})]})})}function C2(){function t(){console.log("error")}return n.jsx(n.Fragment,{children:n.jsx("div",{className:"demo-type",children:n.jsx(kt,{size:60,src:"https://empty",onError:t,children:n.jsx("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"})})})})}function _2(){const t=["fill","contain","cover","none","scale-down"],e="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",r=t.map((i,l)=>n.jsxs("div",{className:"block",children:[n.jsx("span",{className:"title",children:i}),n.jsx(kt,{shape:"square",size:100,fit:i,src:e})]},l));return n.jsx(n.Fragment,{children:n.jsx("div",{className:"avatar-fit",children:r})})}function xd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Avatar 头像"}),`
`,`
`,n.jsx(e.p,{children:"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"shape"})," 和 ",n.jsx(e.code,{children:"size"})," 属性来设置 Avatar 的形状和大小。"]}),`
`,n.jsx(M,{name:"AvatarBasic",children:n.jsx(y2,{})}),`
`,n.jsx(e.h2,{children:"展示类型"}),`
`,n.jsx(e.p,{children:"支持使用图片，图标或者文字作为 Avatar。"}),`
`,n.jsx(M,{name:"AvatarType",children:n.jsx(w2,{})}),`
`,n.jsx(e.h2,{children:"回退行为"}),`
`,n.jsx(e.p,{children:"图片加载失败时的回退行为。"}),`
`,n.jsx(M,{name:"AvatarError",children:n.jsx(C2,{})}),`
`,n.jsx(e.h2,{children:"适应容器"}),`
`,n.jsx(e.p,{children:"当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致"}),`
`,n.jsx(M,{name:"AvatarFit",children:n.jsx(_2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"设置 Avatar 的图标类型，具体参考 Icon 组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Avatar 大小"}),n.jsx(e.td,{children:"number / 'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"shape"}),n.jsx(e.td,{children:"Avatar 形状"}),n.jsx(e.td,{children:"'circle' / 'square'"}),n.jsx(e.td,{children:"circle"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"Avatar 图片的源地址"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"fit"}),n.jsx(e.td,{children:"当展示类型为图片的时候，设置图片如何适应容器"}),n.jsx(e.td,{children:"'fill' / 'contain' / 'cover' / 'none' / 'scale-down'"}),n.jsx(e.td,{children:"cover"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"error"}),n.jsx(e.td,{children:"图片加载失败时触发"}),n.jsx(e.td,{children:"() => void"})]})})]})]})}function k2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xd,{...t})}):xd(t)}function N2(){return n.jsx(n.Fragment,{children:n.jsxs(Cp,{children:[n.jsxs(Ar,{title:"Consistency",name:"1",children:[n.jsx("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),n.jsx("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]}),n.jsxs(Ar,{title:"Feedback",name:"2",children:[n.jsx("div",{children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"}),n.jsx("div",{children:"Visual feedback: reflect current state by updating or rearranging elements of the page."})]}),n.jsxs(Ar,{title:"Efficiency",name:"3",children:[n.jsx("div",{children:"Simplify the process: keep operating process simple and intuitive;"}),n.jsx("div",{children:"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"}),n.jsx("div",{children:"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."})]}),n.jsxs(Ar,{title:"Controllability",name:"4",children:[n.jsx("div",{children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"}),n.jsx("div",{children:"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})]})})}function gd(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Collapse 折叠面板"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可同时展开多个面板，面板之间不影响"}),`
`,n.jsx(M,{name:"CollapseBasic",children:n.jsx(N2,{})})]})}function S2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gd,{...t})}):gd(t)}function E2(){function t(e){return e===100?"Full":`${e}%`}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(_t,{percentage:50}),n.jsx(_t,{percentage:100,format:t}),n.jsx(_t,{percentage:100,status:"success"}),n.jsx(_t,{percentage:100,status:"warning"}),n.jsx(_t,{percentage:50,status:"exception"})]})})}function T2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(_t,{textInside:!0,strokeWidth:26,percentage:70}),n.jsx(_t,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),n.jsx(_t,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),n.jsx(_t,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function jd(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Progress 进度条"}),`
`,`
`,n.jsx(e.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,n.jsx(e.h2,{children:"直线进度条"}),`
`,n.jsxs(e.p,{children:["Progress 组件设置 ",n.jsx(e.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",n.jsx(e.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",n.jsx(e.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,n.jsx(M,{name:"ProgressBasic",children:n.jsx(E2,{})}),`
`,n.jsx(e.h2,{children:"进度条内显示百分比标识"}),`
`,n.jsx(e.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,n.jsxs(e.p,{children:["Progress 组件可通过 ",n.jsx(e.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",n.jsx(e.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,n.jsx(M,{name:"ProgressTextInside",children:n.jsx(T2,{})})]})}function b2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(jd,{...t})}):jd(t)}function R2(){return n.jsx(n.Fragment,{children:n.jsxs(le,{children:[n.jsx(I,{sm:12,lg:6,children:n.jsx(Zn,{icon:"success",title:"Success Tip",subTitle:"Please follow the instructions",extra:n.jsx(R,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(Zn,{icon:"warning",title:"Warning Tip",subTitle:"Please follow the instructions",extra:n.jsx(R,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(Zn,{icon:"error",title:"Error Tip",subTitle:"Please follow the instructions",extra:n.jsx(R,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(Zn,{icon:"info",title:"Info Tip",subTitle:n.jsx("p",{children:"Using slot as subtitle"}),extra:n.jsx(R,{type:"primary",children:"Back"})})})]})})}function L2(){return n.jsx(n.Fragment,{children:n.jsx(Zn,{icon:n.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),title:"404",subTitle:"Sorry, request error",extra:n.jsx(R,{type:"primary",children:"Back"})})})}function vd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Result 结果"}),`
`,`
`,n.jsx(e.p,{children:"用于对用户的操作结果或者异常状态做反馈。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(M,{name:"ResultBasic",children:n.jsx(R2,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(M,{name:"ResultIcon",children:n.jsx(L2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"result 组件的图标类型"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error' / ReactNode"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"result 组件的标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"subTitle"}),n.jsx(e.td,{children:"result 组件的副标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"extra"}),n.jsx(e.td,{children:"内容额外区域的内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"ReactNode"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function P2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vd,{...t})}):vd(t)}function B2(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{children:"Tag 1"}),n.jsx(xe,{className:"ml-2",type:"success",children:"Tag 2"}),n.jsx(xe,{className:"ml-2",type:"info",children:"Tag 3"}),n.jsx(xe,{className:"ml-2",type:"warning",children:"Tag 4"}),n.jsx(xe,{className:"ml-2",type:"danger",children:"Tag 5"})]})}function A2(){const t=[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}].map(e=>n.jsx(xe,{className:"mx-1",closable:!0,type:e.type,children:e.name}));return n.jsx(n.Fragment,{children:t})}function M2(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{children:[n.jsx(xe,{className:"mx-1",size:"large",children:"Large"}),n.jsx(xe,{className:"mx-1",children:"Default"}),n.jsx(xe,{className:"mx-1",size:"small",children:"Small"})]}),n.jsxs(le,{className:"mt-4",children:[n.jsx(xe,{className:"mx-1",size:"large",closable:!0,children:"Large"}),n.jsx(xe,{className:"mx-1",closable:!0,children:"Default"}),n.jsx(xe,{className:"mx-1",size:"small",closable:!0,children:"Small"})]})]})}function I2(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"dark",children:a.label})),r=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"dark",closable:!0,children:a.label})),i=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"light",children:a.label})),l=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"light",closable:!0,children:a.label})),s=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"plain",children:a.label})),o=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"plain",closable:!0,children:a.label}));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1 line-height-2",children:"Dark"}),e,r]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Light"}),i,l]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Plain"}),s,o]})]})}function D2(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(l=>n.jsx(xe,{type:l.type,className:"mx-1",effect:"dark",round:!0,children:l.label})),r=t.map(l=>n.jsx(xe,{type:l.type,className:"mx-1",effect:"light",round:!0,children:l.label})),i=t.map(l=>n.jsx(xe,{type:l.type,className:"mx-1",effect:"plain",round:!0,children:l.label}));return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:e}),n.jsx("div",{className:"flex flex-wrap gap-2",children:r}),n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:i})]})}function yd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tag 标签"}),`
`,`
`,n.jsx(e.p,{children:"用于标记和选择。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 tag 的类型。 也可以通过 ",n.jsx(e.code,{children:"color"})," 属性来自定义背景色。"]}),`
`,n.jsx(M,{name:"TagBasic",children:n.jsx(B2,{})}),`
`,n.jsx(e.h2,{children:"可移除标签"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"closable"})," 属性可以定义一个标签是否可移除。 它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 ",n.jsx(e.code,{children:"disable-transitions"})," 属性，它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，",n.jsx(e.code,{children:"true"})," 为关闭。 当 Tag 被移除时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(M,{name:"TagClosable",children:n.jsx(A2,{})}),`
`,n.jsx(e.h2,{children:"不同尺寸"}),`
`,n.jsx(e.p,{children:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性来设置额外尺寸, 可选值包括 ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"}),"."]}),`
`,n.jsx(M,{name:"TagSize",children:n.jsx(M2,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tag 组件提供了三个不同的主题：",n.jsx(e.code,{children:"dark"}),"、",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"plain"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 effect 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(M,{name:"TagEffect",children:n.jsx(I2,{})}),`
`,n.jsx(e.h2,{children:"圆形标签"}),`
`,n.jsx(e.p,{children:"Tag 可以向按钮组件一样变为完全圆形。"}),`
`,n.jsx(M,{name:"TagRound",children:n.jsx(D2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Tag 的类型"}),n.jsx(e.td,{children:"'success' | 'info' | 'warning' | 'danger' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Tag 的尺寸"}),n.jsx(e.td,{children:"'large' | 'default' | 'small' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tag 的主题"}),n.jsx(e.td,{children:"'dark' | 'light' | 'plain'"}),n.jsx(e.td,{children:"light"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"Tag 是否为圆形"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]})]})]})]})}function F2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yd,{...t})}):yd(t)}function O2(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success"}),n.jsx(oe,{title:"info alert",type:"info"}),n.jsx(oe,{title:"warning alert",type:"warning"}),n.jsx(oe,{title:"error alert",type:"error"})]})}function z2(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",effect:"dark"}),n.jsx(oe,{title:"info alert",type:"info",effect:"dark"}),n.jsx(oe,{title:"warning alert",type:"warning",effect:"dark"}),n.jsx(oe,{title:"error alert",type:"error",effect:"dark"})]})}function $2(){function t(){alert("Hello World!")}return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"unclosable alert",type:"success",closable:!1}),n.jsx(oe,{title:"customized close-text",type:"info",closeText:"Gotcha"}),n.jsx(oe,{title:"alert with callback",type:"warning",close:t})]})}function U2(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",showIcon:!0})]})}function H2(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",center:!0,showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",center:!0,showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function W2(){return n.jsx(n.Fragment,{children:n.jsx(oe,{title:"with description",type:"success",description:"This is a description."})})}function V2(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function wd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alert 提示"}),`
`,`
`,n.jsx(e.p,{children:"用于页面中展示重要的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供四种类型，由 ",n.jsx(e.code,{children:"type"})," 属性指定，默认值为 ",n.jsx(e.code,{children:"info"}),"。"]}),`
`,n.jsx(M,{name:"AlertBasic",children:n.jsx(O2,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供了两个不同的主题：",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"dark"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(M,{name:"AlertEffect",children:n.jsx(z2,{})}),`
`,n.jsx(e.h2,{children:"自定义关闭按钮"}),`
`,n.jsx(e.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,n.jsxs(e.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",n.jsx(e.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，默认为 ",n.jsx(e.code,{children:"false"}),"。 你可以设置 ",n.jsx(e.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",n.jsx(e.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(M,{name:"AlertClose",children:n.jsx($2,{})}),`
`,n.jsx(e.h2,{children:"使用图标"}),`
`,n.jsx(e.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,n.jsx(M,{name:"AlertShowIcon",children:n.jsx(U2,{})}),`
`,n.jsx(e.h2,{children:"文字居中"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,n.jsx(M,{name:"AlertCenter",children:n.jsx(H2,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsx(e.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,n.jsxs(e.p,{children:["除了必填的 ",n.jsx(e.code,{children:"title"})," 属性外，你可以设置 ",n.jsx(e.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,n.jsx(M,{name:"AlertDescription",children:n.jsx(W2,{})}),`
`,n.jsx(e.h2,{children:"带图标和描述"}),`
`,n.jsx(e.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,n.jsx(M,{name:"AlertIconDescription",children:n.jsx(V2,{})}),`
`,n.jsx(e.h2,{children:"Alert API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Alert 标题。"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Alert 类型。"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error'"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"description"}),n.jsx(e.td,{children:"描述性文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可以关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"center"}),n.jsx(e.td,{children:"文字是否居中"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closeText"}),n.jsx(e.td,{children:"自定义关闭按钮文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showIcon"}),n.jsx(e.td,{children:"是否显示类型图标"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"主题样式"}),n.jsx(e.td,{children:"'light' / 'dark'"}),n.jsx(e.td,{children:"light"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"close"}),n.jsx(e.td,{children:"关闭 Alert 时触发的事件"}),n.jsx(e.td,{children:"(event: MouseEvent) => void"})]})})]})]})}function X2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wd,{...t})}):wd(t)}function Q2(){return n.jsx(n.Fragment,{children:n.jsx(hs,{title:"Are you sure to delete this?",children:n.jsx(R,{children:"Delete"})})})}function G2(){return n.jsx(n.Fragment,{children:n.jsx(hs,{width:220,confirmButtonText:"OK",cancelButtonText:"No, Thanks",icon:n.jsx(ki,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",children:n.jsx(R,{children:"Delete"})})})}function K2(){function t(){console.log("confirm!")}function e(){console.log("cancel!")}return n.jsx(n.Fragment,{children:n.jsx(hs,{confirmButtonText:"Yes",cancelButtonText:"No",icon:n.jsx(ki,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:t,onCancel:e,children:n.jsx(R,{children:"Delete"})})})}function Cd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popconfirm 气泡确认框"}),`
`,`
`,n.jsx(e.p,{children:"点击某个元素弹出一个简单的气泡确认框"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。"}),`
`,n.jsx(M,{name:"PopconfirmBasic",children:n.jsx(Q2,{})}),`
`,n.jsx(e.h2,{children:"自定义弹出框的内容"}),`
`,n.jsx(e.p,{children:"可以在 Popconfirm 中自定义内容。"}),`
`,n.jsx(M,{name:"PopconfirmIcon",children:n.jsx(G2,{})}),`
`,n.jsx(e.h2,{children:"多种让 Popconfirm 出现的方法"}),`
`,n.jsx(e.p,{children:"点击按钮触发事件"}),`
`,n.jsx(M,{name:"PopconfirmEvent",children:n.jsx(K2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"标题"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"confirmButtonText"}),n.jsx(e.td,{children:"确认按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"cancelButtonText"}),n.jsx(e.td,{children:"取消按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"自定义图标"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"QuestionFilled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"iconColor"}),n.jsx(e.td,{children:"Icon 颜色"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"#f90"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideIcon"}),n.jsx(e.td,{children:"是否隐藏 Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"弹层宽度，最小宽度 150px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"number"})]}),n.jsx(e.td,{children:"150"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"事件名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onConfirm"}),n.jsx(e.td,{children:"点击确认按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onCancel"}),n.jsx(e.td,{children:"点击取消按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]})]})]})]})}function Y2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cd,{...t})}):Cd(t)}function Z2(){return n.jsxs(n.Fragment,{children:[n.jsx(Ir,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"Hover to activate"})}),n.jsx(Ir,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"Click to activate"})}),n.jsx(Ir,{placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"Focus to activate"})}),n.jsx(Ir,{title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content",children:n.jsx(R,{className:"m-2",children:"contextmenu to activate"})})]})}function _d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popover 气泡卡片"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"trigger"})," 属性被用来决定 ",n.jsx(e.code,{children:"popover"})," 的触发方式，支持的触发方式： ",n.jsx(e.code,{children:"hover"}),"、",n.jsx(e.code,{children:"click"}),"、",n.jsx(e.code,{children:"focus"})," 或 ",n.jsx(e.code,{children:"contextmenu"}),"。 如果你想手动控制它，可以设置 ",n.jsx(e.code,{children:":visible"})," 属性。"]}),`
`,n.jsx(M,{name:"PopoverBasic",children:n.jsx(Z2,{})})]})}function J2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_d,{...t})}):_d(t)}function q2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-tooltip",children:[n.jsxs("div",{className:"row center",children:[n.jsx(Ce,{className:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start",children:n.jsx(R,{children:"top-start"})}),n.jsx(Ce,{className:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top",children:n.jsx(R,{children:"top"})}),n.jsx(Ce,{className:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end",children:n.jsx(R,{children:"top-end"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(Ce,{className:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start",children:n.jsx(R,{children:"left-start"})}),n.jsx(Ce,{className:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start",children:n.jsx(R,{children:"right-start"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(Ce,{className:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left",children:n.jsx(R,{className:"mt-3 mb-3",children:"left"})}),n.jsx(Ce,{className:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right",children:n.jsx(R,{children:"right"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(Ce,{className:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end",children:n.jsx(R,{children:"left-end"})}),n.jsx(Ce,{className:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end",children:n.jsx(R,{children:"right-end"})})]}),n.jsxs("div",{className:"row center",children:[n.jsx(Ce,{className:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start",children:n.jsx(R,{children:"bottom-start"})}),n.jsx(Ce,{className:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom",children:n.jsx(R,{children:"bottom"})}),n.jsx(Ce,{className:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end",children:n.jsx(R,{children:"bottom-end"})})]})]})})}function ew(){return n.jsxs(n.Fragment,{children:[n.jsx(Ce,{content:"Top center",placement:"top",children:n.jsx(R,{children:"Dark"})}),n.jsx(Ce,{content:"Bottom center",placement:"bottom",effect:"light",children:n.jsx(R,{children:"Light"})}),n.jsx(Ce,{content:"Bottom center",effect:"customized",children:n.jsx(R,{children:"Customized theme"})})]})}function tw(){return n.jsx(n.Fragment,{children:n.jsx(Ce,{placement:"top",content:n.jsxs(n.Fragment,{children:["multiple lines",n.jsx("br",{}),"second line"]}),children:n.jsx(R,{children:"Top center"})})})}function nw(){const[t,e]=m.useState(!0);function r(){e(!t)}return n.jsx(n.Fragment,{children:n.jsx(Ce,{disabled:t,content:"click to close tooltip function",placement:"bottom",effect:"light",children:n.jsxs(R,{onClick:r,children:["click to ",t?"active":"close"," tooltip function"]})})})}function kd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tooltip 文字提示"}),`
`,`
`,n.jsx(e.p,{children:"常用于展示鼠标 hover 时的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"content"})," 属性来决定 ",n.jsx(e.code,{children:"hover"})," 时的提示信息。 由 ",n.jsx(e.code,{children:"placement"})," 属性决定展示效果： ",n.jsx(e.code,{children:"placement"}),"属性值为：[方向]-[对齐位置]；四个方向：",n.jsx(e.code,{children:"top"}),"、",n.jsx(e.code,{children:"left"}),"、",n.jsx(e.code,{children:"right"}),"、",n.jsx(e.code,{children:"bottom"}),"；三种对齐位置：",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"end"}),'，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。']}),`
`,n.jsx(M,{name:"TooltipBasic",children:n.jsx(q2,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tooltip 组件内置了两个主题：",n.jsx(e.code,{children:"dark"}),"和",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 来修改主题，默认值为 ",n.jsx(e.code,{children:"dark"}),"."]}),`
`,n.jsx(M,{name:"TooltipEffect",children:n.jsx(ew,{})}),`
`,n.jsx(e.h2,{children:"更多内容的文字提示"}),`
`,n.jsx(e.p,{children:"展示多行文本或者是设置文本内容的格式"}),`
`,n.jsx(M,{name:"TooltipContent",children:n.jsx(tw,{})}),`
`,n.jsx(e.h2,{children:"高级扩展"}),`
`,n.jsx(e.p,{children:"除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："}),`
`,n.jsxs(e.p,{children:["如果需要关闭 ",n.jsx(e.code,{children:"tooltip"})," 功能，",n.jsx(e.code,{children:"disabled"})," 属性可以满足这个需求， 你只需要将其设置为 ",n.jsx(e.code,{children:"true"}),"。"]}),`
`,n.jsx(M,{name:"TooltipDisabled",children:n.jsx(nw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tooltip 主题，内置了 dark / light 两种"}),n.jsx(e.td,{children:"'dark' / 'light'"}),n.jsx(e.td,{children:"dark"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"显示的内容"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"placement"}),n.jsx(e.td,{children:"Tooltip 组件出现的位置"}),n.jsx(e.td,{children:"'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'"}),n.jsx(e.td,{children:"bottom"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showAfter"}),n.jsx(e.td,{children:"在触发后多久显示内容，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideAfter"}),n.jsx(e.td,{children:"延迟关闭，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"200"})]})]})]})]})}function rw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(kd,{...t})}):kd(t)}function iw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes."}),n.jsx(Et,{}),n.jsx("span",{children:"There little thoughts are the rustle of leaves; they have their whisper of joy in my mind."})]})})}function lw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"What you are you do not see, what you see is your shadow. "}),n.jsx(Et,{contentPosition:"left",children:"Rabindranath Tagore"}),n.jsx("span",{children:"My wishes are fools, they shout across thy song, my Master. Let me but listen."}),n.jsx(Et,{children:n.jsx(ec,{})}),n.jsx("span",{children:"I cannot choose the best. The best chooses me."}),n.jsx(Et,{contentPosition:"right",children:"Rabindranath Tagore"})]})})}function sw(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"What language is thine, O sea?"}),n.jsx(Et,{borderStyle:"dashed"}),n.jsx("span",{children:"The language of eternal question."})]}),n.jsx(Et,{borderStyle:"dotted"}),n.jsx("span",{children:"What language is thy answer, O sky?"}),n.jsx(Et,{borderStyle:"double"}),n.jsx("span",{children:"The language of eternal silence."})]})}function ow(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"Rain"}),n.jsx(Et,{direction:"vertical"}),n.jsx("span",{children:"Home"}),n.jsx(Et,{direction:"vertical","border-style":"dashed"}),n.jsx("span",{children:"Grass"})]})})}function Nd(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Divider 分割线"}),`
`,`
`,n.jsx(e.p,{children:"区隔内容的分割线。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"对不同段落的文本进行分割。"}),`
`,n.jsx(M,{name:"DividerBasic",children:n.jsx(iw,{})}),`
`,n.jsx(e.h2,{children:"设置文案"}),`
`,n.jsx(e.p,{children:"可以在分割线上自定义文本内容。"}),`
`,n.jsx(M,{name:"DividerContent",children:n.jsx(lw,{})}),`
`,n.jsx(e.h2,{children:"虚线"}),`
`,n.jsx(e.p,{children:"您可以设置分隔符的样式。"}),`
`,n.jsx(M,{name:"DividerBorder",children:n.jsx(sw,{})}),`
`,n.jsx(e.h2,{children:"垂直分隔线"}),`
`,n.jsx(M,{name:"DividerDirection",children:n.jsx(ow,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"设置分割线方向"}),n.jsx(e.td,{children:"'horizontal' / 'vertical'"}),n.jsx(e.td,{children:"horizontal"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border-style"}),n.jsx(e.td,{children:"设置分隔符样式"}),n.jsx(e.td,{children:"'none' / 'solid' / 'hidden' / 'dashed' / ...(css/border-style)"}),n.jsx(e.td,{children:"solid"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content-position"}),n.jsx(e.td,{children:"自定义分隔线内容的位置"}),n.jsx(e.td,{children:"'left' / 'right' / 'center'"}),n.jsx(e.td,{children:"center"})]})]})]})]})}function aw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nd,{...t})}):Nd(t)}function cw({name:t}){let e;switch(t){case"button":e=n.jsx(Fy,{});break;case"container":e=n.jsx(Xy,{});break;case"icon":e=n.jsx(Gy,{});break;case"layout":e=n.jsx(t2,{});break;case"link":e=n.jsx(s2,{});break;case"text":e=n.jsx(u2,{});break;case"switch":e=n.jsx(v2,{});break;case"avatar":e=n.jsx(k2,{});break;case"collapse":e=n.jsx(S2,{});break;case"progress":e=n.jsx(b2,{});break;case"result":e=n.jsx(P2,{});break;case"tag":e=n.jsx(F2,{});break;case"alert":e=n.jsx(X2,{});break;case"popconfirm":e=n.jsx(Y2,{});break;case"popover":e=n.jsx(J2,{});break;case"tooltip":e=n.jsx(rw,{});break;case"divider":e=n.jsx(aw,{});break}return e}function Ee({name:t}){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(cw,{name:t})})})}function Sd(t){const e={h1:"h1",...t.components};return n.jsx(e.h1,{children:"Border 边框"})}function uw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Sd,{...t})}):Sd(t)}function dw(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(uw,{})})})}function fw(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"Basic 基础组件"}),n.jsx(te,{to:"button",children:"Button 按钮"}),n.jsx(te,{to:"border",children:"Border 边框"}),n.jsx(te,{to:"container",children:"Container 布局容器"}),n.jsx(te,{to:"icon",children:"Icon 图标"}),n.jsx(te,{to:"layout",children:"Layout 布局"}),n.jsx(te,{to:"link",children:"Link 链接"}),n.jsx(te,{to:"text",children:"Text 文本"}),n.jsx("p",{className:"sidebar-group__title",children:"Form 表单组件"}),n.jsx(te,{to:"switch",children:"Switch 开关"}),n.jsx("p",{className:"sidebar-group__title",children:"Data 数据展示"}),n.jsx(te,{to:"avatar",children:"Avatar 头像"}),n.jsx(te,{to:"collapse",children:"Collapse 折叠面板"}),n.jsx(te,{to:"progress",children:"Progress 进度条"}),n.jsx(te,{to:"result",children:"Result 结果"}),n.jsx(te,{to:"tag",children:"Tag 标签"}),n.jsx("p",{className:"sidebar-group__title",children:"Feedback 反馈组件"}),n.jsx(te,{to:"alert",children:"Alert 提示"}),n.jsx(te,{to:"popconfirm",children:"Popconfirm 气泡确认框"}),n.jsx(te,{to:"popover",children:"Popover 气泡卡片"}),n.jsx(te,{to:"tooltip",children:"Tooltip 文字提示"}),n.jsx("p",{className:"sidebar-group__title",children:"Others 其他"}),n.jsx(te,{to:"divider",children:"Divider 分割线"})]})})}),n.jsx("main",{className:"page-content",children:n.jsxs(is,{children:[n.jsx(Z,{path:"button",element:n.jsx(Ee,{name:"button"})}),n.jsx(Z,{path:"border",element:n.jsx(dw,{})}),n.jsx(Z,{path:"container",element:n.jsx(Ee,{name:"container"})}),n.jsx(Z,{path:"icon",element:n.jsx(Ee,{name:"icon"})}),n.jsx(Z,{path:"layout",element:n.jsx(Ee,{name:"layout"})}),n.jsx(Z,{path:"link",element:n.jsx(Ee,{name:"link"})}),n.jsx(Z,{path:"text",element:n.jsx(Ee,{name:"text"})}),n.jsx(Z,{path:"switch",element:n.jsx(Ee,{name:"switch"})}),n.jsx(Z,{path:"avatar",element:n.jsx(Ee,{name:"avatar"})}),n.jsx(Z,{path:"collapse",element:n.jsx(Ee,{name:"collapse"})}),n.jsx(Z,{path:"progress",element:n.jsx(Ee,{name:"progress"})}),n.jsx(Z,{path:"result",element:n.jsx(Ee,{name:"result"})}),n.jsx(Z,{path:"tag",element:n.jsx(Ee,{name:"tag"})}),n.jsx(Z,{path:"alert",element:n.jsx(Ee,{name:"alert"})}),n.jsx(Z,{path:"popconfirm",element:n.jsx(Ee,{name:"popconfirm"})}),n.jsx(Z,{path:"popover",element:n.jsx(Ee,{name:"popover"})}),n.jsx(Z,{path:"tooltip",element:n.jsx(Ee,{name:"tooltip"})}),n.jsx(Z,{path:"divider",element:n.jsx(Ee,{name:"divider"})})]})})]})}const hw="/pelement-react/assets/build-error-001-HBI716zv.jpg",pw="/pelement-react/assets/build-error-002-fg75_WyZ.jpg";function Ed(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错：Could not find a declaration file for module 'pelement-react'."}),`
`,n.jsx(e.p,{children:"引入pelement-react，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:hw,alt:"build-error-001"}),`
`,n.jsx(e.p,{children:"错误代码"}),`
`,n.jsx(e.p,{children:`example/pages/component/button/Button.tsx:2:24 - error TS7016: Could not find a declaration file for module 'pelement-react'. 'D:/work/pelement-react/node_modules/.pnpm/file+pelement-react-0.0.1-alpha.0.tgz/node_modules/pelement-react/dist/pelement-react.js' implicitly has an 'any' type.\r
There are types at 'D:/work/pelement-react/node_modules/pelement-react/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'pelement-react' library may need to update its package.json or typings.`}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"修改tsconfig.json文件，追加以下内容"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`"noImplicitAny": false,\r
"allowJs": true
`})}),`
`,n.jsx("img",{src:pw,alt:"build-error-002"})]})}function mw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ed,{...t})}):Ed(t)}const xw="/pelement-react/assets/cannot-find-module-001-IO4IuqQz.jpg",gw="/pelement-react/assets/cannot-find-module-002-GS1tM54Y.jpg";function Td(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错： Cannot find module '../../../packages/Button/index.zh-CN.mdx' or its corresponding type declarations."}),`
`,n.jsx(e.p,{children:"引入mdx，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:xw,alt:"cannot-find-module-001"}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"在src/vite-env.d.ts文件中添加"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`declare module '*.mdx' {\r
  const mdx: string;\r
  export default mdx;\r
}
`})}),`
`,n.jsx("img",{src:gw,alt:"cannot-find-module-002"})]})}function jw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Td,{...t})}):Td(t)}function vw(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx(te,{to:"build-error",children:"buile error"}),n.jsx(te,{to:"cannot-find-module",children:"cannot-find-module"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsxs(is,{children:[n.jsx(Z,{path:"build-error",element:n.jsx(mw,{})}),n.jsx(Z,{path:"cannot-find-module",element:n.jsx(jw,{})})]})})})]})}function yw(){return n.jsx(n.Fragment,{children:n.jsxs(is,{children:[n.jsx(Z,{path:"/",element:n.jsx(Vi,{to:"/component/button"})}),n.jsx(Z,{path:"home",element:n.jsx(C0,{})}),n.jsx(Z,{path:"guide",element:n.jsx(Vi,{to:"changelog"})}),n.jsx(Z,{path:"guide/*",element:n.jsx(S0,{})}),n.jsx(Z,{path:"component",element:n.jsx(Vi,{to:"button"})}),n.jsx(Z,{path:"component/*",element:n.jsx(fw,{})}),n.jsx(Z,{path:"blog",element:n.jsx(Vi,{to:"build-error"})}),n.jsx(Z,{path:"blog/*",element:n.jsx(vw,{})})]})})}function ww(){return n.jsx(n.Fragment,{children:n.jsx("header",{className:"navbar",children:n.jsx("div",{className:"navbar-wrapper",children:n.jsxs("div",{className:"header-container",children:[n.jsx("div",{className:"logo-container",children:n.jsxs(te,{to:"/home",children:[n.jsx("img",{src:np,alt:"pelement-react"}),"pelement-react"]})}),n.jsxs("div",{className:"content",children:[n.jsxs("nav",{className:"navbar-menu menu",children:[n.jsx(te,{className:"link-item link is-menu-link",to:"guide",children:"指南"}),n.jsx(te,{className:"link-item link is-menu-link",to:"component",children:"组件"}),n.jsx(te,{className:"link-item link is-menu-link",to:"blog",children:"博客"})]}),n.jsx("div",{className:"social-links",children:n.jsx("a",{href:"https://github.com/pelement-react/pelement-react",title:"GitHub",target:"_blank",rel:"noreferrer noopener",className:"social-link",children:n.jsx("i",{className:"el-icon",style:{fontSize:"24px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-6c8d2bba":"",children:n.jsx("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})})})})})]})]})})})})}function Cw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"App",children:[n.jsx(ww,{}),n.jsx(yw,{})]})})}Gs.createRoot(document.getElementById("root")).render(n.jsx(Od.StrictMode,{children:n.jsx(x0,{children:n.jsx(Cw,{})})}));
