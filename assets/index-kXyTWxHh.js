function lm(t,e){for(var r=0;r<e.length;r++){const l=e[r];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(l,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function Au(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mu={exports:{}},$i={},Iu={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=Symbol.for("react.element"),im=Symbol.for("react.portal"),sm=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),hm=Symbol.for("react.suspense"),fm=Symbol.for("react.memo"),pm=Symbol.for("react.lazy"),kc=Symbol.iterator;function mm(t){return t===null||typeof t!="object"?null:(t=kc&&t[kc]||t["@@iterator"],typeof t=="function"?t:null)}var Fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ou=Object.assign,zu={};function gr(t,e,r){this.props=t,this.context=e,this.refs=zu,this.updater=r||Fu}gr.prototype.isReactComponent={};gr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $u(){}$u.prototype=gr.prototype;function Zo(t,e,r){this.props=t,this.context=e,this.refs=zu,this.updater=r||Fu}var Jo=Zo.prototype=new $u;Jo.constructor=Zo;Ou(Jo,gr.prototype);Jo.isPureReactComponent=!0;var Nc=Array.isArray,Uu=Object.prototype.hasOwnProperty,qo={current:null},Hu={key:!0,ref:!0,__self:!0,__source:!0};function Wu(t,e,r){var l,i={},s=null,o=null;if(e!=null)for(l in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Uu.call(e,l)&&!Hu.hasOwnProperty(l)&&(i[l]=e[l]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(l in a=t.defaultProps,a)i[l]===void 0&&(i[l]=a[l]);return{$$typeof:wl,type:t,key:s,ref:o,props:i,_owner:qo.current}}function xm(t,e){return{$$typeof:wl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ea(t){return typeof t=="object"&&t!==null&&t.$$typeof===wl}function gm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var bc=/\/+/g;function ys(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gm(""+t.key):e.toString(36)}function Zl(t,e,r,l,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wl:case im:o=!0}}if(o)return o=t,i=i(o),t=l===""?"."+ys(o,0):l,Nc(i)?(r="",t!=null&&(r=t.replace(bc,"$&/")+"/"),Zl(i,e,r,"",function(d){return d})):i!=null&&(ea(i)&&(i=xm(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,l=l===""?".":l+":",Nc(t))for(var a=0;a<t.length;a++){s=t[a];var c=l+ys(s,a);o+=Zl(s,e,r,c,i)}else if(c=mm(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=l+ys(s,a++),o+=Zl(s,e,r,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bl(t,e,r){if(t==null)return t;var l=[],i=0;return Zl(t,l,"","",function(s){return e.call(r,s,i++)}),l}function jm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},Jl={transition:null},vm={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:qo};Q.Children={map:Bl,forEach:function(t,e,r){Bl(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Bl(t,function(){e++}),e},toArray:function(t){return Bl(t,function(e){return e})||[]},only:function(t){if(!ea(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=gr;Q.Fragment=sm;Q.Profiler=am;Q.PureComponent=Zo;Q.StrictMode=om;Q.Suspense=hm;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;Q.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var l=Ou({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qo.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Uu.call(e,c)&&!Hu.hasOwnProperty(c)&&(l[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)l.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];l.children=a}return{$$typeof:wl,type:t.type,key:i,ref:s,props:l,_owner:o}};Q.createContext=function(t){return t={$$typeof:dm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cm,_context:t},t.Consumer=t};Q.createElement=Wu;Q.createFactory=function(t){var e=Wu.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:um,render:t}};Q.isValidElement=ea;Q.lazy=function(t){return{$$typeof:pm,_payload:{_status:-1,_result:t},_init:jm}};Q.memo=function(t,e){return{$$typeof:fm,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return $e.current.useCallback(t,e)};Q.useContext=function(t){return $e.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};Q.useEffect=function(t,e){return $e.current.useEffect(t,e)};Q.useId=function(){return $e.current.useId()};Q.useImperativeHandle=function(t,e,r){return $e.current.useImperativeHandle(t,e,r)};Q.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return $e.current.useMemo(t,e)};Q.useReducer=function(t,e,r){return $e.current.useReducer(t,e,r)};Q.useRef=function(t){return $e.current.useRef(t)};Q.useState=function(t){return $e.current.useState(t)};Q.useSyncExternalStore=function(t,e,r){return $e.current.useSyncExternalStore(t,e,r)};Q.useTransition=function(){return $e.current.useTransition()};Q.version="18.2.0";Iu.exports=Q;var p=Iu.exports;const Vu=Au(p),ta=lm({__proto__:null,default:Vu},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=p,wm=Symbol.for("react.element"),Cm=Symbol.for("react.fragment"),_m=Object.prototype.hasOwnProperty,km=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nm={key:!0,ref:!0,__self:!0,__source:!0};function Xu(t,e,r){var l,i={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(l in e)_m.call(e,l)&&!Nm.hasOwnProperty(l)&&(i[l]=e[l]);if(t&&t.defaultProps)for(l in e=t.defaultProps,e)i[l]===void 0&&(i[l]=e[l]);return{$$typeof:wm,type:t,key:s,ref:o,props:i,_owner:km.current}}$i.Fragment=Cm;$i.jsx=Xu;$i.jsxs=Xu;Mu.exports=$i;var n=Mu.exports,Zs={},Gu={exports:{}},nt={},Qu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,R){var P=C.length;C.push(R);e:for(;0<P;){var $=P-1>>>1,Y=C[$];if(0<i(Y,R))C[$]=R,C[P]=Y,P=$;else break e}}function r(C){return C.length===0?null:C[0]}function l(C){if(C.length===0)return null;var R=C[0],P=C.pop();if(P!==R){C[0]=P;e:for(var $=0,Y=C.length,De=Y>>>1;$<De;){var lt=2*($+1)-1,be=C[lt],Ce=lt+1,xn=C[Ce];if(0>i(be,P))Ce<Y&&0>i(xn,be)?(C[$]=xn,C[Ce]=P,$=Ce):(C[$]=be,C[lt]=P,$=lt);else if(Ce<Y&&0>i(xn,P))C[$]=xn,C[Ce]=P,$=Ce;else break e}}return R}function i(C,R){var P=C.sortIndex-R.sortIndex;return P!==0?P:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],d=[],u=1,h=null,x=3,g=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(C){for(var R=r(d);R!==null;){if(R.callback===null)l(d);else if(R.startTime<=C)l(d),R.sortIndex=R.expirationTime,e(c,R);else break;R=r(d)}}function w(C){if(y=!1,j(C),!v)if(r(c)!==null)v=!0,W(_);else{var R=r(d);R!==null&&N(w,R.startTime-C)}}function _(C,R){v=!1,y&&(y=!1,m(B),B=-1),g=!0;var P=x;try{for(j(R),h=r(c);h!==null&&(!(h.expirationTime>R)||C&&!G());){var $=h.callback;if(typeof $=="function"){h.callback=null,x=h.priorityLevel;var Y=$(h.expirationTime<=R);R=t.unstable_now(),typeof Y=="function"?h.callback=Y:h===r(c)&&l(c),j(R)}else l(c);h=r(c)}if(h!==null)var De=!0;else{var lt=r(d);lt!==null&&N(w,lt.startTime-R),De=!1}return De}finally{h=null,x=P,g=!1}}var S=!1,T=null,B=-1,z=5,I=-1;function G(){return!(t.unstable_now()-I<z)}function te(){if(T!==null){var C=t.unstable_now();I=C;var R=!0;try{R=T(!0,C)}finally{R?ce():(S=!1,T=null)}}else S=!1}var ce;if(typeof f=="function")ce=function(){f(te)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=te,ce=function(){H.postMessage(null)}}else ce=function(){k(te,0)};function W(C){T=C,S||(S=!0,ce())}function N(C,R){B=k(function(){C(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,W(_))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(C){switch(x){case 1:case 2:case 3:var R=3;break;default:R=x}var P=x;x=R;try{return C()}finally{x=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=x;x=C;try{return R()}finally{x=P}},t.unstable_scheduleCallback=function(C,R,P){var $=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,C={id:u++,callback:R,priorityLevel:C,startTime:P,expirationTime:Y,sortIndex:-1},P>$?(C.sortIndex=P,e(d,C),r(c)===null&&C===r(d)&&(y?(m(B),B=-1):y=!0,N(w,P-$))):(C.sortIndex=Y,e(c,C),v||g||(v=!0,W(_))),C},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(C){var R=x;return function(){var P=x;x=R;try{return C.apply(this,arguments)}finally{x=P}}}})(Ku);Qu.exports=Ku;var bm=Qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=p,et=bm;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zu=new Set,Qr={};function Pn(t,e){or(t,e),or(t+"Capture",e)}function or(t,e){for(Qr[t]=e,t=0;t<e.length;t++)Zu.add(e[t])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Js=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sc={},Tc={};function Tm(t){return Js.call(Tc,t)?!0:Js.call(Sc,t)?!1:Sm.test(t)?Tc[t]=!0:(Sc[t]=!0,!1)}function Em(t,e,r,l){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Rm(t,e,r,l){if(e===null||typeof e>"u"||Em(t,e,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,r,l,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var na=/[\-:]([a-z])/g;function ra(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(na,ra);Le[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(na,ra);Le[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(na,ra);Le[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function la(t,e,r,l){var i=Le.hasOwnProperty(e)?Le[e]:null;(i!==null?i.type!==0:l||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rm(e,r,i,l)&&(r=null),l||i===null?Tm(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,l=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,l?t.setAttributeNS(l,e,r):t.setAttribute(e,r))))}var Ft=Yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),ia=Symbol.for("react.strict_mode"),qs=Symbol.for("react.profiler"),Ju=Symbol.for("react.provider"),qu=Symbol.for("react.context"),sa=Symbol.for("react.forward_ref"),eo=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),oa=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),eh=Symbol.for("react.offscreen"),Ec=Symbol.iterator;function kr(t){return t===null||typeof t!="object"?null:(t=Ec&&t[Ec]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,ws;function Lr(t){if(ws===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);ws=e&&e[1]||""}return`
`+ws+t}var Cs=!1;function _s(t,e){if(!t||Cs)return"";Cs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var l=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){l=d}t.call(e.prototype)}else{try{throw Error()}catch(d){l=d}t()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=l.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Cs=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Lr(t):""}function Bm(t){switch(t.tag){case 5:return Lr(t.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return t=_s(t.type,!1),t;case 11:return t=_s(t.type.render,!1),t;case 1:return t=_s(t.type,!0),t;default:return""}}function no(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Un:return"Fragment";case $n:return"Portal";case qs:return"Profiler";case ia:return"StrictMode";case eo:return"Suspense";case to:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qu:return(t.displayName||"Context")+".Consumer";case Ju:return(t._context.displayName||"Context")+".Provider";case sa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oa:return e=t.displayName||null,e!==null?e:no(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return no(t(e))}catch{}}return null}function Lm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return no(e);case 8:return e===ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function th(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dm(t){var e=th(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){l=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dl(t){t._valueTracker||(t._valueTracker=Dm(t))}function nh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),l="";return t&&(l=th(t)?t.checked?"true":"false":t.value),t=l,t!==r?(e.setValue(t),!0):!1}function di(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ro(t,e){var r=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Rc(t,e){var r=e.defaultValue==null?"":e.defaultValue,l=e.checked!=null?e.checked:e.defaultChecked;r=sn(e.value!=null?e.value:r),t._wrapperState={initialChecked:l,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rh(t,e){e=e.checked,e!=null&&la(t,"checked",e,!1)}function lo(t,e){rh(t,e);var r=sn(e.value),l=e.type;if(r!=null)l==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?io(t,e.type,r):e.hasOwnProperty("defaultValue")&&io(t,e.type,sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bc(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var l=e.type;if(!(l!=="submit"&&l!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function io(t,e,r){(e!=="number"||di(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Dr=Array.isArray;function er(t,e,r,l){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&l&&(t[r].defaultSelected=!0)}else{for(r=""+sn(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function so(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lc(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(E(92));if(Dr(r)){if(1<r.length)throw Error(E(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:sn(r)}}function lh(t,e){var r=sn(e.value),l=sn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),l!=null&&(t.defaultValue=""+l)}function Dc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ih(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ih(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pl,sh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,l,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,l,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pl=Pl||document.createElement("div"),Pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Kr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(t){Pm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Or[e]=Or[t]})});function oh(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Or.hasOwnProperty(t)&&Or[t]?(""+e).trim():e+"px"}function ah(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var l=r.indexOf("--")===0,i=oh(r,e[r],l);r==="float"&&(r="cssFloat"),l?t.setProperty(r,i):t[r]=i}}var Am=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(t,e){if(e){if(Am[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function co(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uo=null;function aa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ho=null,tr=null,nr=null;function Pc(t){if(t=kl(t)){if(typeof ho!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Xi(e),ho(t.stateNode,t.type,e))}}function ch(t){tr?nr?nr.push(t):nr=[t]:tr=t}function dh(){if(tr){var t=tr,e=nr;if(nr=tr=null,Pc(t),e)for(t=0;t<e.length;t++)Pc(e[t])}}function uh(t,e){return t(e)}function hh(){}var ks=!1;function fh(t,e,r){if(ks)return t(e,r);ks=!0;try{return uh(t,e,r)}finally{ks=!1,(tr!==null||nr!==null)&&(hh(),dh())}}function Yr(t,e){var r=t.stateNode;if(r===null)return null;var l=Xi(r);if(l===null)return null;r=l[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(E(231,e,typeof r));return r}var fo=!1;if(Pt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){fo=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{fo=!1}function Mm(t,e,r,l,i,s,o,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(u){this.onError(u)}}var zr=!1,ui=null,hi=!1,po=null,Im={onError:function(t){zr=!0,ui=t}};function Fm(t,e,r,l,i,s,o,a,c){zr=!1,ui=null,Mm.apply(Im,arguments)}function Om(t,e,r,l,i,s,o,a,c){if(Fm.apply(this,arguments),zr){if(zr){var d=ui;zr=!1,ui=null}else throw Error(E(198));hi||(hi=!0,po=d)}}function An(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function ph(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ac(t){if(An(t)!==t)throw Error(E(188))}function zm(t){var e=t.alternate;if(!e){if(e=An(t),e===null)throw Error(E(188));return e!==t?null:t}for(var r=t,l=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(l=i.return,l!==null){r=l;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Ac(i),t;if(s===l)return Ac(i),e;s=s.sibling}throw Error(E(188))}if(r.return!==l.return)r=i,l=s;else{for(var o=!1,a=i.child;a;){if(a===r){o=!0,r=i,l=s;break}if(a===l){o=!0,l=i,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,l=i;break}if(a===l){o=!0,l=s,r=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(r.alternate!==l)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?t:e}function mh(t){return t=zm(t),t!==null?xh(t):null}function xh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xh(t);if(e!==null)return e;t=t.sibling}return null}var gh=et.unstable_scheduleCallback,Mc=et.unstable_cancelCallback,$m=et.unstable_shouldYield,Um=et.unstable_requestPaint,ge=et.unstable_now,Hm=et.unstable_getCurrentPriorityLevel,ca=et.unstable_ImmediatePriority,jh=et.unstable_UserBlockingPriority,fi=et.unstable_NormalPriority,Wm=et.unstable_LowPriority,vh=et.unstable_IdlePriority,Ui=null,Nt=null;function Vm(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ui,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Qm,Xm=Math.log,Gm=Math.LN2;function Qm(t){return t>>>=0,t===0?32:31-(Xm(t)/Gm|0)|0}var Al=64,Ml=4194304;function Pr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,e){var r=t.pendingLanes;if(r===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var a=o&~i;a!==0?l=Pr(a):(s&=o,s!==0&&(l=Pr(s)))}else o=r&~i,o!==0?l=Pr(o):s!==0&&(l=Pr(s));if(l===0)return 0;if(e!==0&&e!==l&&!(e&i)&&(i=l&-l,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(l&4&&(l|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=l;0<e;)r=31-xt(e),i=1<<r,l|=t[r],e&=~i;return l}function Km(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(t,e){for(var r=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,c=i[o];c===-1?(!(a&r)||a&l)&&(i[o]=Km(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function mo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yh(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function Ns(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Cl(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=r}function Zm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-xt(r),s=1<<i;e[i]=0,l[i]=-1,t[i]=-1,r&=~s}}function da(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var l=31-xt(r),i=1<<l;i&e|t[l]&e&&(t[l]|=e),r&=~i}}var ee=0;function wh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ch,ua,_h,kh,Nh,xo=!1,Il=[],Yt=null,Zt=null,Jt=null,Zr=new Map,Jr=new Map,Wt=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(t,e){switch(t){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Zr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(e.pointerId)}}function br(t,e,r,l,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:l,nativeEvent:s,targetContainers:[i]},e!==null&&(e=kl(e),e!==null&&ua(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qm(t,e,r,l,i){switch(e){case"focusin":return Yt=br(Yt,t,e,r,l,i),!0;case"dragenter":return Zt=br(Zt,t,e,r,l,i),!0;case"mouseover":return Jt=br(Jt,t,e,r,l,i),!0;case"pointerover":var s=i.pointerId;return Zr.set(s,br(Zr.get(s)||null,t,e,r,l,i)),!0;case"gotpointercapture":return s=i.pointerId,Jr.set(s,br(Jr.get(s)||null,t,e,r,l,i)),!0}return!1}function bh(t){var e=yn(t.target);if(e!==null){var r=An(e);if(r!==null){if(e=r.tag,e===13){if(e=ph(r),e!==null){t.blockedOn=e,Nh(t.priority,function(){_h(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=go(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);uo=l,r.target.dispatchEvent(l),uo=null}else return e=kl(r),e!==null&&ua(e),t.blockedOn=r,!1;e.shift()}return!0}function Fc(t,e,r){ql(t)&&r.delete(e)}function ex(){xo=!1,Yt!==null&&ql(Yt)&&(Yt=null),Zt!==null&&ql(Zt)&&(Zt=null),Jt!==null&&ql(Jt)&&(Jt=null),Zr.forEach(Fc),Jr.forEach(Fc)}function Sr(t,e){t.blockedOn===e&&(t.blockedOn=null,xo||(xo=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,ex)))}function qr(t){function e(i){return Sr(i,t)}if(0<Il.length){Sr(Il[0],t);for(var r=1;r<Il.length;r++){var l=Il[r];l.blockedOn===t&&(l.blockedOn=null)}}for(Yt!==null&&Sr(Yt,t),Zt!==null&&Sr(Zt,t),Jt!==null&&Sr(Jt,t),Zr.forEach(e),Jr.forEach(e),r=0;r<Wt.length;r++)l=Wt[r],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wt.length&&(r=Wt[0],r.blockedOn===null);)bh(r),r.blockedOn===null&&Wt.shift()}var rr=Ft.ReactCurrentBatchConfig,mi=!0;function tx(t,e,r,l){var i=ee,s=rr.transition;rr.transition=null;try{ee=1,ha(t,e,r,l)}finally{ee=i,rr.transition=s}}function nx(t,e,r,l){var i=ee,s=rr.transition;rr.transition=null;try{ee=4,ha(t,e,r,l)}finally{ee=i,rr.transition=s}}function ha(t,e,r,l){if(mi){var i=go(t,e,r,l);if(i===null)As(t,e,l,xi,r),Ic(t,l);else if(qm(i,t,e,r,l))l.stopPropagation();else if(Ic(t,l),e&4&&-1<Jm.indexOf(t)){for(;i!==null;){var s=kl(i);if(s!==null&&Ch(s),s=go(t,e,r,l),s===null&&As(t,e,l,xi,r),s===i)break;i=s}i!==null&&l.stopPropagation()}else As(t,e,l,null,r)}}var xi=null;function go(t,e,r,l){if(xi=null,t=aa(l),t=yn(t),t!==null)if(e=An(t),e===null)t=null;else if(r=e.tag,r===13){if(t=ph(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xi=t,null}function Sh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hm()){case ca:return 1;case jh:return 4;case fi:case Wm:return 16;case vh:return 536870912;default:return 16}default:return 16}}var Xt=null,fa=null,ei=null;function Th(){if(ei)return ei;var t,e=fa,r=e.length,l,i="value"in Xt?Xt.value:Xt.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(l=1;l<=o&&e[r-l]===i[s-l];l++);return ei=i.slice(t,1<l?1-l:void 0)}function ti(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function Oc(){return!1}function rt(t){function e(r,l,i,s,o){this._reactName=r,this._targetInst=i,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fl:Oc,this.isPropagationStopped=Oc,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),e}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=rt(jr),_l=fe({},jr,{view:0,detail:0}),rx=rt(_l),bs,Ss,Tr,Hi=fe({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ma,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Tr&&(Tr&&t.type==="mousemove"?(bs=t.screenX-Tr.screenX,Ss=t.screenY-Tr.screenY):Ss=bs=0,Tr=t),bs)},movementY:function(t){return"movementY"in t?t.movementY:Ss}}),zc=rt(Hi),lx=fe({},Hi,{dataTransfer:0}),ix=rt(lx),sx=fe({},_l,{relatedTarget:0}),Ts=rt(sx),ox=fe({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=rt(ox),cx=fe({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=rt(cx),ux=fe({},jr,{data:0}),$c=rt(ux),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=px[t])?!!e[t]:!1}function ma(){return mx}var xx=fe({},_l,{key:function(t){if(t.key){var e=hx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ti(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ma,charCode:function(t){return t.type==="keypress"?ti(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ti(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gx=rt(xx),jx=fe({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=rt(jx),vx=fe({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ma}),yx=rt(vx),wx=fe({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=rt(wx),_x=fe({},Hi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=rt(_x),Nx=[9,13,27,32],xa=Pt&&"CompositionEvent"in window,$r=null;Pt&&"documentMode"in document&&($r=document.documentMode);var bx=Pt&&"TextEvent"in window&&!$r,Eh=Pt&&(!xa||$r&&8<$r&&11>=$r),Hc=" ",Wc=!1;function Rh(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hn=!1;function Sx(t,e){switch(t){case"compositionend":return Bh(e);case"keypress":return e.which!==32?null:(Wc=!0,Hc);case"textInput":return t=e.data,t===Hc&&Wc?null:t;default:return null}}function Tx(t,e){if(Hn)return t==="compositionend"||!xa&&Rh(t,e)?(t=Th(),ei=fa=Xt=null,Hn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eh&&e.locale!=="ko"?null:e.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ex[t.type]:e==="textarea"}function Lh(t,e,r,l){ch(l),e=gi(e,"onChange"),0<e.length&&(r=new pa("onChange","change",null,r,l),t.push({event:r,listeners:e}))}var Ur=null,el=null;function Rx(t){Hh(t,0)}function Wi(t){var e=Xn(t);if(nh(e))return t}function Bx(t,e){if(t==="change")return e}var Dh=!1;if(Pt){var Es;if(Pt){var Rs="oninput"in document;if(!Rs){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),Rs=typeof Xc.oninput=="function"}Es=Rs}else Es=!1;Dh=Es&&(!document.documentMode||9<document.documentMode)}function Gc(){Ur&&(Ur.detachEvent("onpropertychange",Ph),el=Ur=null)}function Ph(t){if(t.propertyName==="value"&&Wi(el)){var e=[];Lh(e,el,t,aa(t)),fh(Rx,e)}}function Lx(t,e,r){t==="focusin"?(Gc(),Ur=e,el=r,Ur.attachEvent("onpropertychange",Ph)):t==="focusout"&&Gc()}function Dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wi(el)}function Px(t,e){if(t==="click")return Wi(e)}function Ax(t,e){if(t==="input"||t==="change")return Wi(e)}function Mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:Mx;function tl(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),l=Object.keys(e);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var i=r[l];if(!Js.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function Qc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kc(t,e){var r=Qc(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=e&&l>=e)return{node:r,offset:e-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qc(r)}}function Ah(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ah(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mh(){for(var t=window,e=di();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=di(t.document)}return e}function ga(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ix(t){var e=Mh(),r=t.focusedElem,l=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Ah(r.ownerDocument.documentElement,r)){if(l!==null&&ga(r)){if(e=l.start,t=l.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(l.start,i);l=l.end===void 0?s:Math.min(l.end,i),!t.extend&&s>l&&(i=l,l=s,s=i),i=Kc(r,s);var o=Kc(r,l);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>l?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fx=Pt&&"documentMode"in document&&11>=document.documentMode,Wn=null,jo=null,Hr=null,vo=!1;function Yc(t,e,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vo||Wn==null||Wn!==di(l)||(l=Wn,"selectionStart"in l&&ga(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Hr&&tl(Hr,l)||(Hr=l,l=gi(jo,"onSelect"),0<l.length&&(e=new pa("onSelect","select",null,e,r),t.push({event:e,listeners:l}),e.target=Wn)))}function Ol(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Vn={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Bs={},Ih={};Pt&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Vi(t){if(Bs[t])return Bs[t];if(!Vn[t])return t;var e=Vn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Ih)return Bs[t]=e[r];return t}var Fh=Vi("animationend"),Oh=Vi("animationiteration"),zh=Vi("animationstart"),$h=Vi("transitionend"),Uh=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(t,e){Uh.set(t,e),Pn(e,[t])}for(var Ls=0;Ls<Zc.length;Ls++){var Ds=Zc[Ls],Ox=Ds.toLowerCase(),zx=Ds[0].toUpperCase()+Ds.slice(1);un(Ox,"on"+zx)}un(Fh,"onAnimationEnd");un(Oh,"onAnimationIteration");un(zh,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un($h,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Jc(t,e,r){var l=t.type||"unknown-event";t.currentTarget=r,Om(l,e,void 0,t),t.currentTarget=null}function Hh(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],i=l.event;l=l.listeners;e:{var s=void 0;if(e)for(var o=l.length-1;0<=o;o--){var a=l[o],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;Jc(i,a,d),s=c}else for(o=0;o<l.length;o++){if(a=l[o],c=a.instance,d=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;Jc(i,a,d),s=c}}}if(hi)throw t=po,hi=!1,po=null,t}function le(t,e){var r=e[ko];r===void 0&&(r=e[ko]=new Set);var l=t+"__bubble";r.has(l)||(Wh(e,t,2,!1),r.add(l))}function Ps(t,e,r){var l=0;e&&(l|=4),Wh(r,t,l,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function nl(t){if(!t[zl]){t[zl]=!0,Zu.forEach(function(r){r!=="selectionchange"&&($x.has(r)||Ps(r,!1,t),Ps(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Ps("selectionchange",!1,e))}}function Wh(t,e,r,l){switch(Sh(e)){case 1:var i=tx;break;case 4:i=nx;break;default:i=ha}r=i.bind(null,e,r,t),i=void 0,!fo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function As(t,e,r,l,i){var s=l;if(!(e&1)&&!(e&2)&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var a=l.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yn(a),o===null)return;if(c=o.tag,c===5||c===6){l=s=o;continue e}a=a.parentNode}}l=l.return}fh(function(){var d=s,u=aa(r),h=[];e:{var x=Uh.get(t);if(x!==void 0){var g=pa,v=t;switch(t){case"keypress":if(ti(r)===0)break e;case"keydown":case"keyup":g=gx;break;case"focusin":v="focus",g=Ts;break;case"focusout":v="blur",g=Ts;break;case"beforeblur":case"afterblur":g=Ts;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yx;break;case Fh:case Oh:case zh:g=ax;break;case $h:g=Cx;break;case"scroll":g=rx;break;case"wheel":g=kx;break;case"copy":case"cut":case"paste":g=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Uc}var y=(e&4)!==0,k=!y&&t==="scroll",m=y?x!==null?x+"Capture":null:x;y=[];for(var f=d,j;f!==null;){j=f;var w=j.stateNode;if(j.tag===5&&w!==null&&(j=w,m!==null&&(w=Yr(f,m),w!=null&&y.push(rl(f,w,j)))),k)break;f=f.return}0<y.length&&(x=new g(x,v,null,r,u),h.push({event:x,listeners:y}))}}if(!(e&7)){e:{if(x=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",x&&r!==uo&&(v=r.relatedTarget||r.fromElement)&&(yn(v)||v[At]))break e;if((g||x)&&(x=u.window===u?u:(x=u.ownerDocument)?x.defaultView||x.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=d,v=v?yn(v):null,v!==null&&(k=An(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(y=zc,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Uc,w="onPointerLeave",m="onPointerEnter",f="pointer"),k=g==null?x:Xn(g),j=v==null?x:Xn(v),x=new y(w,f+"leave",g,r,u),x.target=k,x.relatedTarget=j,w=null,yn(u)===d&&(y=new y(m,f+"enter",v,r,u),y.target=j,y.relatedTarget=k,w=y),k=w,g&&v)t:{for(y=g,m=v,f=0,j=y;j;j=On(j))f++;for(j=0,w=m;w;w=On(w))j++;for(;0<f-j;)y=On(y),f--;for(;0<j-f;)m=On(m),j--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=On(y),m=On(m)}y=null}else y=null;g!==null&&qc(h,x,g,y,!1),v!==null&&k!==null&&qc(h,k,v,y,!0)}}e:{if(x=d?Xn(d):window,g=x.nodeName&&x.nodeName.toLowerCase(),g==="select"||g==="input"&&x.type==="file")var _=Bx;else if(Vc(x))if(Dh)_=Ax;else{_=Dx;var S=Lx}else(g=x.nodeName)&&g.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=Px);if(_&&(_=_(t,d))){Lh(h,_,r,u);break e}S&&S(t,x,d),t==="focusout"&&(S=x._wrapperState)&&S.controlled&&x.type==="number"&&io(x,"number",x.value)}switch(S=d?Xn(d):window,t){case"focusin":(Vc(S)||S.contentEditable==="true")&&(Wn=S,jo=d,Hr=null);break;case"focusout":Hr=jo=Wn=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,Yc(h,r,u);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":Yc(h,r,u)}var T;if(xa)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Hn?Rh(t,r)&&(B="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(B="onCompositionStart");B&&(Eh&&r.locale!=="ko"&&(Hn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Hn&&(T=Th()):(Xt=u,fa="value"in Xt?Xt.value:Xt.textContent,Hn=!0)),S=gi(d,B),0<S.length&&(B=new $c(B,t,null,r,u),h.push({event:B,listeners:S}),T?B.data=T:(T=Bh(r),T!==null&&(B.data=T)))),(T=bx?Sx(t,r):Tx(t,r))&&(d=gi(d,"onBeforeInput"),0<d.length&&(u=new $c("onBeforeInput","beforeinput",null,r,u),h.push({event:u,listeners:d}),u.data=T))}Hh(h,e)})}function rl(t,e,r){return{instance:t,listener:e,currentTarget:r}}function gi(t,e){for(var r=e+"Capture",l=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yr(t,r),s!=null&&l.unshift(rl(t,s,i)),s=Yr(t,e),s!=null&&l.push(rl(t,s,i))),t=t.return}return l}function On(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qc(t,e,r,l,i){for(var s=e._reactName,o=[];r!==null&&r!==l;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===l)break;a.tag===5&&d!==null&&(a=d,i?(c=Yr(r,s),c!=null&&o.unshift(rl(r,c,a))):i||(c=Yr(r,s),c!=null&&o.push(rl(r,c,a)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Ux=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function ed(t){return(typeof t=="string"?t:""+t).replace(Ux,`
`).replace(Hx,"")}function $l(t,e,r){if(e=ed(e),ed(t)!==e&&r)throw Error(E(425))}function ji(){}var yo=null,wo=null;function Co(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(t){return td.resolve(null).then(t).catch(Xx)}:_o;function Xx(t){setTimeout(function(){throw t})}function Ms(t,e){var r=e,l=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(l===0){t.removeChild(i),qr(e);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=i}while(r);qr(e)}function qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var vr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+vr,ll="__reactProps$"+vr,At="__reactContainer$"+vr,ko="__reactEvents$"+vr,Gx="__reactListeners$"+vr,Qx="__reactHandles$"+vr;function yn(t){var e=t[Ct];if(e)return e;for(var r=t.parentNode;r;){if(e=r[At]||r[Ct]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=nd(t);t!==null;){if(r=t[Ct])return r;t=nd(t)}return e}t=r,r=t.parentNode}return null}function kl(t){return t=t[Ct]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Xi(t){return t[ll]||null}var No=[],Gn=-1;function hn(t){return{current:t}}function se(t){0>Gn||(t.current=No[Gn],No[Gn]=null,Gn--)}function ne(t,e){Gn++,No[Gn]=t.current,t.current=e}var on={},Fe=hn(on),Ve=hn(!1),Sn=on;function ar(t,e){var r=t.type.contextTypes;if(!r)return on;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===e)return l.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(t){return t=t.childContextTypes,t!=null}function vi(){se(Ve),se(Fe)}function rd(t,e,r){if(Fe.current!==on)throw Error(E(168));ne(Fe,e),ne(Ve,r)}function Vh(t,e,r){var l=t.stateNode;if(e=e.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var i in l)if(!(i in e))throw Error(E(108,Lm(t)||"Unknown",i));return fe({},r,l)}function yi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,Sn=Fe.current,ne(Fe,t),ne(Ve,Ve.current),!0}function ld(t,e,r){var l=t.stateNode;if(!l)throw Error(E(169));r?(t=Vh(t,e,Sn),l.__reactInternalMemoizedMergedChildContext=t,se(Ve),se(Fe),ne(Fe,t)):se(Ve),ne(Ve,r)}var Rt=null,Gi=!1,Is=!1;function Xh(t){Rt===null?Rt=[t]:Rt.push(t)}function Kx(t){Gi=!0,Xh(t)}function fn(){if(!Is&&Rt!==null){Is=!0;var t=0,e=ee;try{var r=Rt;for(ee=1;t<r.length;t++){var l=r[t];do l=l(!0);while(l!==null)}Rt=null,Gi=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(t+1)),gh(ca,fn),i}finally{ee=e,Is=!1}}return null}var Qn=[],Kn=0,wi=null,Ci=0,it=[],st=0,Tn=null,Bt=1,Lt="";function jn(t,e){Qn[Kn++]=Ci,Qn[Kn++]=wi,wi=t,Ci=e}function Gh(t,e,r){it[st++]=Bt,it[st++]=Lt,it[st++]=Tn,Tn=t;var l=Bt;t=Lt;var i=32-xt(l)-1;l&=~(1<<i),r+=1;var s=32-xt(e)+i;if(30<s){var o=i-i%5;s=(l&(1<<o)-1).toString(32),l>>=o,i-=o,Bt=1<<32-xt(e)+i|r<<i|l,Lt=s+t}else Bt=1<<s|r<<i|l,Lt=t}function ja(t){t.return!==null&&(jn(t,1),Gh(t,1,0))}function va(t){for(;t===wi;)wi=Qn[--Kn],Qn[Kn]=null,Ci=Qn[--Kn],Qn[Kn]=null;for(;t===Tn;)Tn=it[--st],it[st]=null,Lt=it[--st],it[st]=null,Bt=it[--st],it[st]=null}var Je=null,Ze=null,ae=!1,mt=null;function Qh(t,e){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function id(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Je=t,Ze=qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Je=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Tn!==null?{id:Bt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Je=t,Ze=null,!0):!1;default:return!1}}function bo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function So(t){if(ae){var e=Ze;if(e){var r=e;if(!id(t,e)){if(bo(t))throw Error(E(418));e=qt(r.nextSibling);var l=Je;e&&id(t,e)?Qh(l,r):(t.flags=t.flags&-4097|2,ae=!1,Je=t)}}else{if(bo(t))throw Error(E(418));t.flags=t.flags&-4097|2,ae=!1,Je=t}}}function sd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Je=t}function Ul(t){if(t!==Je)return!1;if(!ae)return sd(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Co(t.type,t.memoizedProps)),e&&(e=Ze)){if(bo(t))throw Kh(),Error(E(418));for(;e;)Qh(t,e),e=qt(e.nextSibling)}if(sd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ze=qt(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=Je?qt(t.stateNode.nextSibling):null;return!0}function Kh(){for(var t=Ze;t;)t=qt(t.nextSibling)}function cr(){Ze=Je=null,ae=!1}function ya(t){mt===null?mt=[t]:mt.push(t)}var Yx=Ft.ReactCurrentBatchConfig;function ft(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var _i=hn(null),ki=null,Yn=null,wa=null;function Ca(){wa=Yn=ki=null}function _a(t){var e=_i.current;se(_i),t._currentValue=e}function To(t,e,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===r)break;t=t.return}}function lr(t,e){ki=t,wa=Yn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(wa!==t)if(t={context:t,memoizedValue:e,next:null},Yn===null){if(ki===null)throw Error(E(308));Yn=t,ki.dependencies={lanes:0,firstContext:t}}else Yn=Yn.next=t;return e}var wn=null;function ka(t){wn===null?wn=[t]:wn.push(t)}function Yh(t,e,r,l){var i=e.interleaved;return i===null?(r.next=r,ka(e)):(r.next=i.next,i.next=r),e.interleaved=r,Mt(t,l)}function Mt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ht=!1;function Na(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,Z&2){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,Mt(t,r)}return i=l.interleaved,i===null?(e.next=e,ka(l)):(e.next=i.next,i.next=e),l.interleaved=e,Mt(t,r)}function ni(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,da(t,r)}}function od(t,e){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:l.shared,effects:l.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ni(t,e,r,l){var i=t.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=d:a.next=d,u.lastBaseUpdate=c))}if(s!==null){var h=i.baseState;o=0,u=d=c=null,a=s;do{var x=a.lane,g=a.eventTime;if((l&x)===x){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(x=e,g=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,x);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,x=typeof v=="function"?v.call(g,h,x):v,x==null)break e;h=fe({},h,x);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=i.effects,x===null?i.effects=[a]:x.push(a))}else g={eventTime:g,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(d=u=g,c=h):u=u.next=g,o|=x;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;x=a,a=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(u===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rn|=o,t.lanes=o,t.memoizedState=h}}function ad(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var l=t[e],i=l.callback;if(i!==null){if(l.callback=null,l=r,typeof i!="function")throw Error(E(191,i));i.call(l)}}}var Jh=new Yu.Component().refs;function Eo(t,e,r,l){e=t.memoizedState,r=r(l,e),r=r==null?e:fe({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Qi={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var l=ze(),i=nn(t),s=Dt(l,i);s.payload=e,r!=null&&(s.callback=r),e=en(t,s,i),e!==null&&(gt(e,t,i,l),ni(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var l=ze(),i=nn(t),s=Dt(l,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=en(t,s,i),e!==null&&(gt(e,t,i,l),ni(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ze(),l=nn(t),i=Dt(r,l);i.tag=2,e!=null&&(i.callback=e),e=en(t,i,l),e!==null&&(gt(e,t,l,r),ni(e,t,l))}};function cd(t,e,r,l,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,s,o):e.prototype&&e.prototype.isPureReactComponent?!tl(r,l)||!tl(i,s):!0}function qh(t,e,r){var l=!1,i=on,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Xe(e)?Sn:Fe.current,l=e.contextTypes,s=(l=l!=null)?ar(t,i):on),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qi,t.stateNode=e,e._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dd(t,e,r,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,l),e.state!==t&&Qi.enqueueReplaceState(e,e.state,null)}function Ro(t,e,r,l){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs=Jh,Na(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Xe(e)?Sn:Fe.current,i.context=ar(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eo(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qi.enqueueReplaceState(i,i.state,null),Ni(t,r,i,l),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Er(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var l=r.stateNode}if(!l)throw Error(E(147,t));var i=l,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Jh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,t))}return t}function Hl(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ud(t){var e=t._init;return e(t._payload)}function ef(t){function e(m,f){if(t){var j=m.deletions;j===null?(m.deletions=[f],m.flags|=16):j.push(f)}}function r(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function l(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=rn(m,f),m.index=0,m.sibling=null,m}function s(m,f,j){return m.index=j,t?(j=m.alternate,j!==null?(j=j.index,j<f?(m.flags|=2,f):j):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,j,w){return f===null||f.tag!==6?(f=Ws(j,m.mode,w),f.return=m,f):(f=i(f,j),f.return=m,f)}function c(m,f,j,w){var _=j.type;return _===Un?u(m,f,j.props.children,w,j.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&ud(_)===f.type)?(w=i(f,j.props),w.ref=Er(m,f,j),w.return=m,w):(w=ai(j.type,j.key,j.props,null,m.mode,w),w.ref=Er(m,f,j),w.return=m,w)}function d(m,f,j,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==j.containerInfo||f.stateNode.implementation!==j.implementation?(f=Vs(j,m.mode,w),f.return=m,f):(f=i(f,j.children||[]),f.return=m,f)}function u(m,f,j,w,_){return f===null||f.tag!==7?(f=kn(j,m.mode,w,_),f.return=m,f):(f=i(f,j),f.return=m,f)}function h(m,f,j){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ws(""+f,m.mode,j),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ll:return j=ai(f.type,f.key,f.props,null,m.mode,j),j.ref=Er(m,null,f),j.return=m,j;case $n:return f=Vs(f,m.mode,j),f.return=m,f;case Ut:var w=f._init;return h(m,w(f._payload),j)}if(Dr(f)||kr(f))return f=kn(f,m.mode,j,null),f.return=m,f;Hl(m,f)}return null}function x(m,f,j,w){var _=f!==null?f.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return _!==null?null:a(m,f,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ll:return j.key===_?c(m,f,j,w):null;case $n:return j.key===_?d(m,f,j,w):null;case Ut:return _=j._init,x(m,f,_(j._payload),w)}if(Dr(j)||kr(j))return _!==null?null:u(m,f,j,w,null);Hl(m,j)}return null}function g(m,f,j,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(j)||null,a(f,m,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ll:return m=m.get(w.key===null?j:w.key)||null,c(f,m,w,_);case $n:return m=m.get(w.key===null?j:w.key)||null,d(f,m,w,_);case Ut:var S=w._init;return g(m,f,j,S(w._payload),_)}if(Dr(w)||kr(w))return m=m.get(j)||null,u(f,m,w,_,null);Hl(f,w)}return null}function v(m,f,j,w){for(var _=null,S=null,T=f,B=f=0,z=null;T!==null&&B<j.length;B++){T.index>B?(z=T,T=null):z=T.sibling;var I=x(m,T,j[B],w);if(I===null){T===null&&(T=z);break}t&&T&&I.alternate===null&&e(m,T),f=s(I,f,B),S===null?_=I:S.sibling=I,S=I,T=z}if(B===j.length)return r(m,T),ae&&jn(m,B),_;if(T===null){for(;B<j.length;B++)T=h(m,j[B],w),T!==null&&(f=s(T,f,B),S===null?_=T:S.sibling=T,S=T);return ae&&jn(m,B),_}for(T=l(m,T);B<j.length;B++)z=g(T,m,B,j[B],w),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?B:z.key),f=s(z,f,B),S===null?_=z:S.sibling=z,S=z);return t&&T.forEach(function(G){return e(m,G)}),ae&&jn(m,B),_}function y(m,f,j,w){var _=kr(j);if(typeof _!="function")throw Error(E(150));if(j=_.call(j),j==null)throw Error(E(151));for(var S=_=null,T=f,B=f=0,z=null,I=j.next();T!==null&&!I.done;B++,I=j.next()){T.index>B?(z=T,T=null):z=T.sibling;var G=x(m,T,I.value,w);if(G===null){T===null&&(T=z);break}t&&T&&G.alternate===null&&e(m,T),f=s(G,f,B),S===null?_=G:S.sibling=G,S=G,T=z}if(I.done)return r(m,T),ae&&jn(m,B),_;if(T===null){for(;!I.done;B++,I=j.next())I=h(m,I.value,w),I!==null&&(f=s(I,f,B),S===null?_=I:S.sibling=I,S=I);return ae&&jn(m,B),_}for(T=l(m,T);!I.done;B++,I=j.next())I=g(T,m,B,I.value,w),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?B:I.key),f=s(I,f,B),S===null?_=I:S.sibling=I,S=I);return t&&T.forEach(function(te){return e(m,te)}),ae&&jn(m,B),_}function k(m,f,j,w){if(typeof j=="object"&&j!==null&&j.type===Un&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ll:e:{for(var _=j.key,S=f;S!==null;){if(S.key===_){if(_=j.type,_===Un){if(S.tag===7){r(m,S.sibling),f=i(S,j.props.children),f.return=m,m=f;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&ud(_)===S.type){r(m,S.sibling),f=i(S,j.props),f.ref=Er(m,S,j),f.return=m,m=f;break e}r(m,S);break}else e(m,S);S=S.sibling}j.type===Un?(f=kn(j.props.children,m.mode,w,j.key),f.return=m,m=f):(w=ai(j.type,j.key,j.props,null,m.mode,w),w.ref=Er(m,f,j),w.return=m,m=w)}return o(m);case $n:e:{for(S=j.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===j.containerInfo&&f.stateNode.implementation===j.implementation){r(m,f.sibling),f=i(f,j.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else e(m,f);f=f.sibling}f=Vs(j,m.mode,w),f.return=m,m=f}return o(m);case Ut:return S=j._init,k(m,f,S(j._payload),w)}if(Dr(j))return v(m,f,j,w);if(kr(j))return y(m,f,j,w);Hl(m,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,f!==null&&f.tag===6?(r(m,f.sibling),f=i(f,j),f.return=m,m=f):(r(m,f),f=Ws(j,m.mode,w),f.return=m,m=f),o(m)):r(m,f)}return k}var dr=ef(!0),tf=ef(!1),Nl={},bt=hn(Nl),il=hn(Nl),sl=hn(Nl);function Cn(t){if(t===Nl)throw Error(E(174));return t}function ba(t,e){switch(ne(sl,e),ne(il,t),ne(bt,Nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oo(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oo(e,t)}se(bt),ne(bt,e)}function ur(){se(bt),se(il),se(sl)}function nf(t){Cn(sl.current);var e=Cn(bt.current),r=oo(e,t.type);e!==r&&(ne(il,t),ne(bt,r))}function Sa(t){il.current===t&&(se(bt),se(il))}var de=hn(0);function bi(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fs=[];function Ta(){for(var t=0;t<Fs.length;t++)Fs[t]._workInProgressVersionPrimary=null;Fs.length=0}var ri=Ft.ReactCurrentDispatcher,Os=Ft.ReactCurrentBatchConfig,En=0,ue=null,ye=null,ke=null,Si=!1,Wr=!1,ol=0,Zx=0;function Ae(){throw Error(E(321))}function Ea(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!jt(t[r],e[r]))return!1;return!0}function Ra(t,e,r,l,i,s){if(En=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ri.current=t===null||t.memoizedState===null?tg:ng,t=r(l,i),Wr){s=0;do{if(Wr=!1,ol=0,25<=s)throw Error(E(301));s+=1,ke=ye=null,e.updateQueue=null,ri.current=rg,t=r(l,i)}while(Wr)}if(ri.current=Ti,e=ye!==null&&ye.next!==null,En=0,ke=ye=ue=null,Si=!1,e)throw Error(E(300));return t}function Ba(){var t=ol!==0;return ol=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ue.memoizedState=ke=t:ke=ke.next=t,ke}function dt(){if(ye===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=ke===null?ue.memoizedState:ke.next;if(e!==null)ke=e,ye=t;else{if(t===null)throw Error(E(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},ke===null?ue.memoizedState=ke=t:ke=ke.next=t}return ke}function al(t,e){return typeof e=="function"?e(t):e}function zs(t){var e=dt(),r=e.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=t;var l=ye,i=l.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}l.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,l=l.baseState;var a=o=null,c=null,d=s;do{var u=d.lane;if((En&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:t(l,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=h,o=l):c=c.next=h,ue.lanes|=u,Rn|=u}d=d.next}while(d!==null&&d!==s);c===null?o=l:c.next=a,jt(l,e.memoizedState)||(We=!0),e.memoizedState=l,e.baseState=o,e.baseQueue=c,r.lastRenderedState=l}if(t=r.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,Rn|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function $s(t){var e=dt(),r=e.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=t;var l=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,l]}function rf(){}function lf(t,e){var r=ue,l=dt(),i=e(),s=!jt(l.memoizedState,i);if(s&&(l.memoizedState=i,We=!0),l=l.queue,La(af.bind(null,r,l,t),[t]),l.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(r.flags|=2048,cl(9,of.bind(null,r,l,i,e),void 0,null),Ne===null)throw Error(E(349));En&30||sf(r,e,i)}return i}function sf(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function of(t,e,r,l){e.value=r,e.getSnapshot=l,cf(e)&&df(t)}function af(t,e,r){return r(function(){cf(e)&&df(t)})}function cf(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!jt(t,r)}catch{return!0}}function df(t){var e=Mt(t,1);e!==null&&gt(e,t,1,-1)}function hd(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:t},e.queue=t,t=t.dispatch=eg.bind(null,ue,t),[e.memoizedState,t]}function cl(t,e,r,l){return t={tag:t,create:e,destroy:r,deps:l,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,e.lastEffect=t)),t}function uf(){return dt().memoizedState}function li(t,e,r,l){var i=wt();ue.flags|=t,i.memoizedState=cl(1|e,r,void 0,l===void 0?null:l)}function Ki(t,e,r,l){var i=dt();l=l===void 0?null:l;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,l!==null&&Ea(l,o.deps)){i.memoizedState=cl(e,r,s,l);return}}ue.flags|=t,i.memoizedState=cl(1|e,r,s,l)}function fd(t,e){return li(8390656,8,t,e)}function La(t,e){return Ki(2048,8,t,e)}function hf(t,e){return Ki(4,2,t,e)}function ff(t,e){return Ki(4,4,t,e)}function pf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mf(t,e,r){return r=r!=null?r.concat([t]):null,Ki(4,4,pf.bind(null,e,t),r)}function Da(){}function xf(t,e){var r=dt();e=e===void 0?null:e;var l=r.memoizedState;return l!==null&&e!==null&&Ea(e,l[1])?l[0]:(r.memoizedState=[t,e],t)}function gf(t,e){var r=dt();e=e===void 0?null:e;var l=r.memoizedState;return l!==null&&e!==null&&Ea(e,l[1])?l[0]:(t=t(),r.memoizedState=[t,e],t)}function jf(t,e,r){return En&21?(jt(r,e)||(r=yh(),ue.lanes|=r,Rn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=r)}function Jx(t,e){var r=ee;ee=r!==0&&4>r?r:4,t(!0);var l=Os.transition;Os.transition={};try{t(!1),e()}finally{ee=r,Os.transition=l}}function vf(){return dt().memoizedState}function qx(t,e,r){var l=nn(t);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},yf(t))wf(e,r);else if(r=Yh(t,e,r,l),r!==null){var i=ze();gt(r,t,l,i),Cf(r,e,l)}}function eg(t,e,r){var l=nn(t),i={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(yf(t))wf(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,r);if(i.hasEagerState=!0,i.eagerState=a,jt(a,o)){var c=e.interleaved;c===null?(i.next=i,ka(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=Yh(t,e,i,l),r!==null&&(i=ze(),gt(r,t,l,i),Cf(r,e,l))}}function yf(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function wf(t,e){Wr=Si=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Cf(t,e,r){if(r&4194240){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,da(t,r)}}var Ti={readContext:ct,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},tg={readContext:ct,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:fd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,li(4194308,4,pf.bind(null,e,t),r)},useLayoutEffect:function(t,e){return li(4194308,4,t,e)},useInsertionEffect:function(t,e){return li(4,2,t,e)},useMemo:function(t,e){var r=wt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var l=wt();return e=r!==void 0?r(e):e,l.memoizedState=l.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},l.queue=t,t=t.dispatch=qx.bind(null,ue,t),[l.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:hd,useDebugValue:Da,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=hd(!1),e=t[0];return t=Jx.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var l=ue,i=wt();if(ae){if(r===void 0)throw Error(E(407));r=r()}else{if(r=e(),Ne===null)throw Error(E(349));En&30||sf(l,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,fd(af.bind(null,l,s,t),[t]),l.flags|=2048,cl(9,of.bind(null,l,s,r,e),void 0,null),r},useId:function(){var t=wt(),e=Ne.identifierPrefix;if(ae){var r=Lt,l=Bt;r=(l&~(1<<32-xt(l)-1)).toString(32)+r,e=":"+e+"R"+r,r=ol++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Zx++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ng={readContext:ct,useCallback:xf,useContext:ct,useEffect:La,useImperativeHandle:mf,useInsertionEffect:hf,useLayoutEffect:ff,useMemo:gf,useReducer:zs,useRef:uf,useState:function(){return zs(al)},useDebugValue:Da,useDeferredValue:function(t){var e=dt();return jf(e,ye.memoizedState,t)},useTransition:function(){var t=zs(al)[0],e=dt().memoizedState;return[t,e]},useMutableSource:rf,useSyncExternalStore:lf,useId:vf,unstable_isNewReconciler:!1},rg={readContext:ct,useCallback:xf,useContext:ct,useEffect:La,useImperativeHandle:mf,useInsertionEffect:hf,useLayoutEffect:ff,useMemo:gf,useReducer:$s,useRef:uf,useState:function(){return $s(al)},useDebugValue:Da,useDeferredValue:function(t){var e=dt();return ye===null?e.memoizedState=t:jf(e,ye.memoizedState,t)},useTransition:function(){var t=$s(al)[0],e=dt().memoizedState;return[t,e]},useMutableSource:rf,useSyncExternalStore:lf,useId:vf,unstable_isNewReconciler:!1};function hr(t,e){try{var r="",l=e;do r+=Bm(l),l=l.return;while(l);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Us(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Bo(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function _f(t,e,r){r=Dt(-1,r),r.tag=3,r.payload={element:null};var l=e.value;return r.callback=function(){Ri||(Ri=!0,$o=l),Bo(t,e)},r}function kf(t,e,r){r=Dt(-1,r),r.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=e.value;r.payload=function(){return l(i)},r.callback=function(){Bo(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Bo(t,e),typeof l!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function pd(t,e,r){var l=t.pingCache;if(l===null){l=t.pingCache=new lg;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(r)||(i.add(r),t=jg.bind(null,t,e,r),e.then(t,t))}function md(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xd(t,e,r,l,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Dt(-1,1),e.tag=2,en(r,e,1))),r.lanes|=1),t)}var ig=Ft.ReactCurrentOwner,We=!1;function Oe(t,e,r,l){e.child=t===null?tf(e,null,r,l):dr(e,t.child,r,l)}function gd(t,e,r,l,i){r=r.render;var s=e.ref;return lr(e,i),l=Ra(t,e,r,l,s,i),r=Ba(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,It(t,e,i)):(ae&&r&&ja(e),e.flags|=1,Oe(t,e,l,i),e.child)}function jd(t,e,r,l,i){if(t===null){var s=r.type;return typeof s=="function"&&!$a(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,Nf(t,e,s,l,i)):(t=ai(r.type,null,l,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:tl,r(o,l)&&t.ref===e.ref)return It(t,e,i)}return e.flags|=1,t=rn(s,l),t.ref=e.ref,t.return=e,e.child=t}function Nf(t,e,r,l,i){if(t!==null){var s=t.memoizedProps;if(tl(s,l)&&t.ref===e.ref)if(We=!1,e.pendingProps=l=s,(t.lanes&i)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,It(t,e,i)}return Lo(t,e,r,l,i)}function bf(t,e,r){var l=e.pendingProps,i=l.children,s=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Jn,Ke),Ke|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Jn,Ke),Ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=s!==null?s.baseLanes:r,ne(Jn,Ke),Ke|=l}else s!==null?(l=s.baseLanes|r,e.memoizedState=null):l=r,ne(Jn,Ke),Ke|=l;return Oe(t,e,i,r),e.child}function Sf(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Lo(t,e,r,l,i){var s=Xe(r)?Sn:Fe.current;return s=ar(e,s),lr(e,i),r=Ra(t,e,r,l,s,i),l=Ba(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,It(t,e,i)):(ae&&l&&ja(e),e.flags|=1,Oe(t,e,r,i),e.child)}function vd(t,e,r,l,i){if(Xe(r)){var s=!0;yi(e)}else s=!1;if(lr(e,i),e.stateNode===null)ii(t,e),qh(e,r,l),Ro(e,r,l,i),l=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=ct(d):(d=Xe(r)?Sn:Fe.current,d=ar(e,d));var u=r.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==l||c!==d)&&dd(e,o,l,d),Ht=!1;var x=e.memoizedState;o.state=x,Ni(e,l,o,i),c=e.memoizedState,a!==l||x!==c||Ve.current||Ht?(typeof u=="function"&&(Eo(e,r,u,l),c=e.memoizedState),(a=Ht||cd(e,r,a,l,x,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=c),o.props=l,o.state=c,o.context=d,l=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{o=e.stateNode,Zh(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:ft(e.type,a),o.props=d,h=e.pendingProps,x=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Xe(r)?Sn:Fe.current,c=ar(e,c));var g=r.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||x!==c)&&dd(e,o,l,c),Ht=!1,x=e.memoizedState,o.state=x,Ni(e,l,o,i);var v=e.memoizedState;a!==h||x!==v||Ve.current||Ht?(typeof g=="function"&&(Eo(e,r,g,l),v=e.memoizedState),(d=Ht||cd(e,r,d,l,x,v,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=v),o.props=l,o.state=v,o.context=c,l=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),l=!1)}return Do(t,e,r,l,s,i)}function Do(t,e,r,l,i,s){Sf(t,e);var o=(e.flags&128)!==0;if(!l&&!o)return i&&ld(e,r,!1),It(t,e,s);l=e.stateNode,ig.current=e;var a=o&&typeof r.getDerivedStateFromError!="function"?null:l.render();return e.flags|=1,t!==null&&o?(e.child=dr(e,t.child,null,s),e.child=dr(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=l.state,i&&ld(e,r,!0),e.child}function Tf(t){var e=t.stateNode;e.pendingContext?rd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rd(t,e.context,!1),ba(t,e.containerInfo)}function yd(t,e,r,l,i){return cr(),ya(i),e.flags|=256,Oe(t,e,r,l),e.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function Ao(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ef(t,e,r){var l=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(de,i&1),t===null)return So(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=l.children,t=l.fallback,s?(l=e.mode,s=e.child,o={mode:"hidden",children:o},!(l&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ji(o,l,0,null),t=kn(t,l,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ao(r),e.memoizedState=Po,t):Pa(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sg(t,e,o,l,a,i,r);if(s){s=l.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:l.children};return!(o&1)&&e.child!==i?(l=e.child,l.childLanes=0,l.pendingProps=c,e.deletions=null):(l=rn(i,c),l.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=rn(a,s):(s=kn(s,o,r,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,l=s,s=e.child,o=t.child.memoizedState,o=o===null?Ao(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Po,l}return s=t.child,t=s.sibling,l=rn(s,{mode:"visible",children:l.children}),!(e.mode&1)&&(l.lanes=r),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l}function Pa(t,e){return e=Ji({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,r,l){return l!==null&&ya(l),dr(e,t.child,null,r),t=Pa(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sg(t,e,r,l,i,s,o){if(r)return e.flags&256?(e.flags&=-257,l=Us(Error(E(422))),Wl(t,e,o,l)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=l.fallback,i=e.mode,l=Ji({mode:"visible",children:l.children},i,0,null),s=kn(s,i,o,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,e.mode&1&&dr(e,t.child,null,o),e.child.memoizedState=Ao(o),e.memoizedState=Po,s);if(!(e.mode&1))return Wl(t,e,o,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var a=l.dgst;return l=a,s=Error(E(419)),l=Us(s,l,void 0),Wl(t,e,o,l)}if(a=(o&t.childLanes)!==0,We||a){if(l=Ne,l!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),gt(l,t,i,-1))}return za(),l=Us(Error(E(421))),Wl(t,e,o,l)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ze=qt(i.nextSibling),Je=e,ae=!0,mt=null,t!==null&&(it[st++]=Bt,it[st++]=Lt,it[st++]=Tn,Bt=t.id,Lt=t.overflow,Tn=e),e=Pa(e,l.children),e.flags|=4096,e)}function wd(t,e,r){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),To(t.return,e,r)}function Hs(t,e,r,l,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=r,s.tailMode=i)}function Rf(t,e,r){var l=e.pendingProps,i=l.revealOrder,s=l.tail;if(Oe(t,e,l.children,r),l=de.current,l&2)l=l&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wd(t,r,e);else if(t.tag===19)wd(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(ne(de,l),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&bi(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Hs(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bi(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Hs(e,!0,r,null,s);break;case"together":Hs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ii(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function It(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Rn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,r=rn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=rn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function og(t,e,r){switch(e.tag){case 3:Tf(e),cr();break;case 5:nf(e);break;case 1:Xe(e.type)&&yi(e);break;case 4:ba(e,e.stateNode.containerInfo);break;case 10:var l=e.type._context,i=e.memoizedProps.value;ne(_i,l._currentValue),l._currentValue=i;break;case 13:if(l=e.memoizedState,l!==null)return l.dehydrated!==null?(ne(de,de.current&1),e.flags|=128,null):r&e.child.childLanes?Ef(t,e,r):(ne(de,de.current&1),t=It(t,e,r),t!==null?t.sibling:null);ne(de,de.current&1);break;case 19:if(l=(r&e.childLanes)!==0,t.flags&128){if(l)return Rf(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(de,de.current),l)break;return null;case 22:case 23:return e.lanes=0,bf(t,e,r)}return It(t,e,r)}var Bf,Mo,Lf,Df;Bf=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Mo=function(){};Lf=function(t,e,r,l){var i=t.memoizedProps;if(i!==l){t=e.stateNode,Cn(bt.current);var s=null;switch(r){case"input":i=ro(t,i),l=ro(t,l),s=[];break;case"select":i=fe({},i,{value:void 0}),l=fe({},l,{value:void 0}),s=[];break;case"textarea":i=so(t,i),l=so(t,l),s=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ji)}ao(r,l);var o;r=null;for(d in i)if(!l.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qr.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in l){var c=l[d];if(a=i!=null?i[d]:void 0,l.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",t),s||a===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Df=function(t,e,r,l){r!==l&&(e.flags|=4)};function Rr(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=r,e}function ag(t,e,r){var l=e.pendingProps;switch(va(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Xe(e.type)&&vi(),Me(e),null;case 3:return l=e.stateNode,ur(),se(Ve),se(Fe),Ta(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mt!==null&&(Wo(mt),mt=null))),Mo(t,e),Me(e),null;case 5:Sa(e);var i=Cn(sl.current);if(r=e.type,t!==null&&e.stateNode!=null)Lf(t,e,r,l,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!l){if(e.stateNode===null)throw Error(E(166));return Me(e),null}if(t=Cn(bt.current),Ul(e)){l=e.stateNode,r=e.type;var s=e.memoizedProps;switch(l[Ct]=e,l[ll]=s,t=(e.mode&1)!==0,r){case"dialog":le("cancel",l),le("close",l);break;case"iframe":case"object":case"embed":le("load",l);break;case"video":case"audio":for(i=0;i<Ar.length;i++)le(Ar[i],l);break;case"source":le("error",l);break;case"img":case"image":case"link":le("error",l),le("load",l);break;case"details":le("toggle",l);break;case"input":Rc(l,s),le("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!s.multiple},le("invalid",l);break;case"textarea":Lc(l,s),le("invalid",l)}ao(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?l.textContent!==a&&(s.suppressHydrationWarning!==!0&&$l(l.textContent,a,t),i=["children",a]):typeof a=="number"&&l.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$l(l.textContent,a,t),i=["children",""+a]):Qr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",l)}switch(r){case"input":Dl(l),Bc(l,s,!0);break;case"textarea":Dl(l),Dc(l);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(l.onclick=ji)}l=i,e.updateQueue=l,l!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ih(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=o.createElement(r,{is:l.is}):(t=o.createElement(r),r==="select"&&(o=t,l.multiple?o.multiple=!0:l.size&&(o.size=l.size))):t=o.createElementNS(t,r),t[Ct]=e,t[ll]=l,Bf(t,e,!1,!1),e.stateNode=t;e:{switch(o=co(r,l),r){case"dialog":le("cancel",t),le("close",t),i=l;break;case"iframe":case"object":case"embed":le("load",t),i=l;break;case"video":case"audio":for(i=0;i<Ar.length;i++)le(Ar[i],t);i=l;break;case"source":le("error",t),i=l;break;case"img":case"image":case"link":le("error",t),le("load",t),i=l;break;case"details":le("toggle",t),i=l;break;case"input":Rc(t,l),i=ro(t,l),le("invalid",t);break;case"option":i=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},i=fe({},l,{value:void 0}),le("invalid",t);break;case"textarea":Lc(t,l),i=so(t,l),le("invalid",t);break;default:i=l}ao(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?ah(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&sh(t,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Kr(t,c):typeof c=="number"&&Kr(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&le("scroll",t):c!=null&&la(t,s,c,o))}switch(r){case"input":Dl(t),Bc(t,l,!1);break;case"textarea":Dl(t),Dc(t);break;case"option":l.value!=null&&t.setAttribute("value",""+sn(l.value));break;case"select":t.multiple=!!l.multiple,s=l.value,s!=null?er(t,!!l.multiple,s,!1):l.defaultValue!=null&&er(t,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ji)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Df(t,e,t.memoizedProps,l);else{if(typeof l!="string"&&e.stateNode===null)throw Error(E(166));if(r=Cn(sl.current),Cn(bt.current),Ul(e)){if(l=e.stateNode,r=e.memoizedProps,l[Ct]=e,(s=l.nodeValue!==r)&&(t=Je,t!==null))switch(t.tag){case 3:$l(l.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$l(l.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[Ct]=e,e.stateNode=l}return Me(e),null;case 13:if(se(de),l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&e.mode&1&&!(e.flags&128))Kh(),cr(),e.flags|=98560,s=!1;else if(s=Ul(e),l!==null&&l.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ct]=e}else cr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else mt!==null&&(Wo(mt),mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?we===0&&(we=3):za())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return ur(),Mo(t,e),t===null&&nl(e.stateNode.containerInfo),Me(e),null;case 10:return _a(e.type._context),Me(e),null;case 17:return Xe(e.type)&&vi(),Me(e),null;case 19:if(se(de),s=e.memoizedState,s===null)return Me(e),null;if(l=(e.flags&128)!==0,o=s.rendering,o===null)if(l)Rr(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bi(t),o!==null){for(e.flags|=128,Rr(s,!1),l=o.updateQueue,l!==null&&(e.updateQueue=l,e.flags|=4),e.subtreeFlags=0,l=r,r=e.child;r!==null;)s=r,t=l,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ne(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>fr&&(e.flags|=128,l=!0,Rr(s,!1),e.lanes=4194304)}else{if(!l)if(t=bi(o),t!==null){if(e.flags|=128,l=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return Me(e),null}else 2*ge()-s.renderingStartTime>fr&&r!==1073741824&&(e.flags|=128,l=!0,Rr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,r=de.current,ne(de,l?r&1|2:r&1),e):(Me(e),null);case 22:case 23:return Oa(),l=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(e.flags|=8192),l&&e.mode&1?Ke&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function cg(t,e){switch(va(e),e.tag){case 1:return Xe(e.type)&&vi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ur(),se(Ve),se(Fe),Ta(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sa(e),null;case 13:if(se(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));cr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(de),null;case 4:return ur(),null;case 10:return _a(e.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var Vl=!1,Ie=!1,dg=typeof WeakSet=="function"?WeakSet:Set,A=null;function Zn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){pe(t,e,l)}else r.current=null}function Io(t,e,r){try{r()}catch(l){pe(t,e,l)}}var Cd=!1;function ug(t,e){if(yo=mi,t=Mh(),ga(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,c=-1,d=0,u=0,h=t,x=null;t:for(;;){for(var g;h!==r||i!==0&&h.nodeType!==3||(a=o+i),h!==s||l!==0&&h.nodeType!==3||(c=o+l),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)x=h,h=g;for(;;){if(h===t)break t;if(x===r&&++d===i&&(a=o),x===s&&++u===l&&(c=o),(g=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=g}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(wo={focusedElem:t,selectionRange:r},mi=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ft(e.type,y),k);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var j=e.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=Cd,Cd=!1,v}function Vr(t,e,r){var l=e.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Io(e,r,s)}i=i.next}while(i!==l)}}function Yi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var l=r.create;r.destroy=l()}r=r.next}while(r!==e)}}function Fo(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Pf(t){var e=t.alternate;e!==null&&(t.alternate=null,Pf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[ll],delete e[ko],delete e[Gx],delete e[Qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Af(t){return t.tag===5||t.tag===3||t.tag===4}function _d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Af(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oo(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ji));else if(l!==4&&(t=t.child,t!==null))for(Oo(t,e,r),t=t.sibling;t!==null;)Oo(t,e,r),t=t.sibling}function zo(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(zo(t,e,r),t=t.sibling;t!==null;)zo(t,e,r),t=t.sibling}var Te=null,pt=!1;function $t(t,e,r){for(r=r.child;r!==null;)Mf(t,e,r),r=r.sibling}function Mf(t,e,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ui,r)}catch{}switch(r.tag){case 5:Ie||Zn(r,e);case 6:var l=Te,i=pt;Te=null,$t(t,e,r),Te=l,pt=i,Te!==null&&(pt?(t=Te,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Te.removeChild(r.stateNode));break;case 18:Te!==null&&(pt?(t=Te,r=r.stateNode,t.nodeType===8?Ms(t.parentNode,r):t.nodeType===1&&Ms(t,r),qr(t)):Ms(Te,r.stateNode));break;case 4:l=Te,i=pt,Te=r.stateNode.containerInfo,pt=!0,$t(t,e,r),Te=l,pt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Io(r,e,o),i=i.next}while(i!==l)}$t(t,e,r);break;case 1:if(!Ie&&(Zn(r,e),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(a){pe(r,e,a)}$t(t,e,r);break;case 21:$t(t,e,r);break;case 22:r.mode&1?(Ie=(l=Ie)||r.memoizedState!==null,$t(t,e,r),Ie=l):$t(t,e,r);break;default:$t(t,e,r)}}function kd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new dg),e.forEach(function(l){var i=yg.bind(null,t,l);r.has(l)||(r.add(l),l.then(i,i))})}}function ht(t,e){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var i=r[l];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,pt=!1;break e;case 3:Te=a.stateNode.containerInfo,pt=!0;break e;case 4:Te=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Te===null)throw Error(E(160));Mf(s,o,i),Te=null,pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){pe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)If(e,t),e=e.sibling}function If(t,e){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),yt(t),l&4){try{Vr(3,t,t.return),Yi(3,t)}catch(y){pe(t,t.return,y)}try{Vr(5,t,t.return)}catch(y){pe(t,t.return,y)}}break;case 1:ht(e,t),yt(t),l&512&&r!==null&&Zn(r,r.return);break;case 5:if(ht(e,t),yt(t),l&512&&r!==null&&Zn(r,r.return),t.flags&32){var i=t.stateNode;try{Kr(i,"")}catch(y){pe(t,t.return,y)}}if(l&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rh(i,s),co(a,o);var d=co(a,s);for(o=0;o<c.length;o+=2){var u=c[o],h=c[o+1];u==="style"?ah(i,h):u==="dangerouslySetInnerHTML"?sh(i,h):u==="children"?Kr(i,h):la(i,u,h,d)}switch(a){case"input":lo(i,s);break;case"textarea":lh(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?er(i,!!s.multiple,g,!1):x!==!!s.multiple&&(s.defaultValue!=null?er(i,!!s.multiple,s.defaultValue,!0):er(i,!!s.multiple,s.multiple?[]:"",!1))}i[ll]=s}catch(y){pe(t,t.return,y)}}break;case 6:if(ht(e,t),yt(t),l&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){pe(t,t.return,y)}}break;case 3:if(ht(e,t),yt(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{qr(e.containerInfo)}catch(y){pe(t,t.return,y)}break;case 4:ht(e,t),yt(t);break;case 13:ht(e,t),yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ia=ge())),l&4&&kd(t);break;case 22:if(u=r!==null&&r.memoizedState!==null,t.mode&1?(Ie=(d=Ie)||u,ht(e,t),Ie=d):ht(e,t),yt(t),l&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(A=t,u=t.child;u!==null;){for(h=A=u;A!==null;){switch(x=A,g=x.child,x.tag){case 0:case 11:case 14:case 15:Vr(4,x,x.return);break;case 1:Zn(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){l=x,r=x.return;try{e=l,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){pe(l,r,y)}}break;case 5:Zn(x,x.return);break;case 22:if(x.memoizedState!==null){bd(h);continue}}g!==null?(g.return=x,A=g):bd(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{i=h.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=oh("display",o))}catch(y){pe(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){pe(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ht(e,t),yt(t),l&4&&kd(t);break;case 21:break;default:ht(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Af(r)){var l=r;break e}r=r.return}throw Error(E(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Kr(i,""),l.flags&=-33);var s=_d(t);zo(t,s,i);break;case 3:case 4:var o=l.stateNode.containerInfo,a=_d(t);Oo(t,a,o);break;default:throw Error(E(161))}}catch(c){pe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hg(t,e,r){A=t,Ff(t)}function Ff(t,e,r){for(var l=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&l){var o=i.memoizedState!==null||Vl;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ie;a=Vl;var d=Ie;if(Vl=o,(Ie=c)&&!d)for(A=i;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Sd(i):c!==null?(c.return=o,A=c):Sd(i);for(;s!==null;)A=s,Ff(s),s=s.sibling;A=i,Vl=a,Ie=d}Nd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Nd(t)}}function Nd(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Yi(5,e);break;case 1:var l=e.stateNode;if(e.flags&4&&!Ie)if(r===null)l.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:ft(e.type,r.memoizedProps);l.componentDidUpdate(i,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ad(e,s,l);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}ad(e,o,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ie||e.flags&512&&Fo(e)}catch(x){pe(e,e.return,x)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function bd(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function Sd(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Yi(4,e)}catch(c){pe(e,r,c)}break;case 1:var l=e.stateNode;if(typeof l.componentDidMount=="function"){var i=e.return;try{l.componentDidMount()}catch(c){pe(e,i,c)}}var s=e.return;try{Fo(e)}catch(c){pe(e,s,c)}break;case 5:var o=e.return;try{Fo(e)}catch(c){pe(e,o,c)}}}catch(c){pe(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var fg=Math.ceil,Ei=Ft.ReactCurrentDispatcher,Aa=Ft.ReactCurrentOwner,at=Ft.ReactCurrentBatchConfig,Z=0,Ne=null,ve=null,Be=0,Ke=0,Jn=hn(0),we=0,dl=null,Rn=0,Zi=0,Ma=0,Xr=null,He=null,Ia=0,fr=1/0,Et=null,Ri=!1,$o=null,tn=null,Xl=!1,Gt=null,Bi=0,Gr=0,Uo=null,si=-1,oi=0;function ze(){return Z&6?ge():si!==-1?si:si=ge()}function nn(t){return t.mode&1?Z&2&&Be!==0?Be&-Be:Yx.transition!==null?(oi===0&&(oi=yh()),oi):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Sh(t.type)),t):1}function gt(t,e,r,l){if(50<Gr)throw Gr=0,Uo=null,Error(E(185));Cl(t,r,l),(!(Z&2)||t!==Ne)&&(t===Ne&&(!(Z&2)&&(Zi|=r),we===4&&Vt(t,Be)),Ge(t,l),r===1&&Z===0&&!(e.mode&1)&&(fr=ge()+500,Gi&&fn()))}function Ge(t,e){var r=t.callbackNode;Ym(t,e);var l=pi(t,t===Ne?Be:0);if(l===0)r!==null&&Mc(r),t.callbackNode=null,t.callbackPriority=0;else if(e=l&-l,t.callbackPriority!==e){if(r!=null&&Mc(r),e===1)t.tag===0?Kx(Td.bind(null,t)):Xh(Td.bind(null,t)),Vx(function(){!(Z&6)&&fn()}),r=null;else{switch(wh(l)){case 1:r=ca;break;case 4:r=jh;break;case 16:r=fi;break;case 536870912:r=vh;break;default:r=fi}r=Xf(r,Of.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Of(t,e){if(si=-1,oi=0,Z&6)throw Error(E(327));var r=t.callbackNode;if(ir()&&t.callbackNode!==r)return null;var l=pi(t,t===Ne?Be:0);if(l===0)return null;if(l&30||l&t.expiredLanes||e)e=Li(t,l);else{e=l;var i=Z;Z|=2;var s=$f();(Ne!==t||Be!==e)&&(Et=null,fr=ge()+500,_n(t,e));do try{xg();break}catch(a){zf(t,a)}while(!0);Ca(),Ei.current=s,Z=i,ve!==null?e=0:(Ne=null,Be=0,e=we)}if(e!==0){if(e===2&&(i=mo(t),i!==0&&(l=i,e=Ho(t,i))),e===1)throw r=dl,_n(t,0),Vt(t,l),Ge(t,ge()),r;if(e===6)Vt(t,l);else{if(i=t.current.alternate,!(l&30)&&!pg(i)&&(e=Li(t,l),e===2&&(s=mo(t),s!==0&&(l=s,e=Ho(t,s))),e===1))throw r=dl,_n(t,0),Vt(t,l),Ge(t,ge()),r;switch(t.finishedWork=i,t.finishedLanes=l,e){case 0:case 1:throw Error(E(345));case 2:vn(t,He,Et);break;case 3:if(Vt(t,l),(l&130023424)===l&&(e=Ia+500-ge(),10<e)){if(pi(t,0)!==0)break;if(i=t.suspendedLanes,(i&l)!==l){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_o(vn.bind(null,t,He,Et),e);break}vn(t,He,Et);break;case 4:if(Vt(t,l),(l&4194240)===l)break;for(e=t.eventTimes,i=-1;0<l;){var o=31-xt(l);s=1<<o,o=e[o],o>i&&(i=o),l&=~s}if(l=i,l=ge()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*fg(l/1960))-l,10<l){t.timeoutHandle=_o(vn.bind(null,t,He,Et),l);break}vn(t,He,Et);break;case 5:vn(t,He,Et);break;default:throw Error(E(329))}}}return Ge(t,ge()),t.callbackNode===r?Of.bind(null,t):null}function Ho(t,e){var r=Xr;return t.current.memoizedState.isDehydrated&&(_n(t,e).flags|=256),t=Li(t,e),t!==2&&(e=He,He=r,e!==null&&Wo(e)),t}function Wo(t){He===null?He=t:He.push.apply(He,t)}function pg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var i=r[l],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~Ma,e&=~Zi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-xt(e),l=1<<r;t[r]=-1,e&=~l}}function Td(t){if(Z&6)throw Error(E(327));ir();var e=pi(t,0);if(!(e&1))return Ge(t,ge()),null;var r=Li(t,e);if(t.tag!==0&&r===2){var l=mo(t);l!==0&&(e=l,r=Ho(t,l))}if(r===1)throw r=dl,_n(t,0),Vt(t,e),Ge(t,ge()),r;if(r===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vn(t,He,Et),Ge(t,ge()),null}function Fa(t,e){var r=Z;Z|=1;try{return t(e)}finally{Z=r,Z===0&&(fr=ge()+500,Gi&&fn())}}function Bn(t){Gt!==null&&Gt.tag===0&&!(Z&6)&&ir();var e=Z;Z|=1;var r=at.transition,l=ee;try{if(at.transition=null,ee=1,t)return t()}finally{ee=l,at.transition=r,Z=e,!(Z&6)&&fn()}}function Oa(){Ke=Jn.current,se(Jn)}function _n(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Wx(r)),ve!==null)for(r=ve.return;r!==null;){var l=r;switch(va(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&vi();break;case 3:ur(),se(Ve),se(Fe),Ta();break;case 5:Sa(l);break;case 4:ur();break;case 13:se(de);break;case 19:se(de);break;case 10:_a(l.type._context);break;case 22:case 23:Oa()}r=r.return}if(Ne=t,ve=t=rn(t.current,null),Be=Ke=e,we=0,dl=null,Ma=Zi=Rn=0,He=Xr=null,wn!==null){for(e=0;e<wn.length;e++)if(r=wn[e],l=r.interleaved,l!==null){r.interleaved=null;var i=l.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,l.next=o}r.pending=l}wn=null}return t}function zf(t,e){do{var r=ve;try{if(Ca(),ri.current=Ti,Si){for(var l=ue.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}Si=!1}if(En=0,ke=ye=ue=null,Wr=!1,ol=0,Aa.current=null,r===null||r.return===null){we=1,dl=e,ve=null;break}e:{var s=t,o=r.return,a=r,c=e;if(e=Be,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var x=u.alternate;x?(u.updateQueue=x.updateQueue,u.memoizedState=x.memoizedState,u.lanes=x.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=md(o);if(g!==null){g.flags&=-257,xd(g,o,a,s,e),g.mode&1&&pd(s,d,e),e=g,c=d;var v=e.updateQueue;if(v===null){var y=new Set;y.add(c),e.updateQueue=y}else v.add(c);break e}else{if(!(e&1)){pd(s,d,e),za();break e}c=Error(E(426))}}else if(ae&&a.mode&1){var k=md(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),xd(k,o,a,s,e),ya(hr(c,a));break e}}s=c=hr(c,a),we!==4&&(we=2),Xr===null?Xr=[s]:Xr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=_f(s,c,e);od(s,m);break e;case 1:a=c;var f=s.type,j=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(tn===null||!tn.has(j)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=kf(s,a,e);od(s,w);break e}}s=s.return}while(s!==null)}Hf(r)}catch(_){e=_,ve===r&&r!==null&&(ve=r=r.return);continue}break}while(!0)}function $f(){var t=Ei.current;return Ei.current=Ti,t===null?Ti:t}function za(){(we===0||we===3||we===2)&&(we=4),Ne===null||!(Rn&268435455)&&!(Zi&268435455)||Vt(Ne,Be)}function Li(t,e){var r=Z;Z|=2;var l=$f();(Ne!==t||Be!==e)&&(Et=null,_n(t,e));do try{mg();break}catch(i){zf(t,i)}while(!0);if(Ca(),Z=r,Ei.current=l,ve!==null)throw Error(E(261));return Ne=null,Be=0,we}function mg(){for(;ve!==null;)Uf(ve)}function xg(){for(;ve!==null&&!$m();)Uf(ve)}function Uf(t){var e=Vf(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?Hf(t):ve=e,Aa.current=null}function Hf(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=cg(r,e),r!==null){r.flags&=32767,ve=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ve=null;return}}else if(r=ag(r,e,Ke),r!==null){ve=r;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);we===0&&(we=5)}function vn(t,e,r){var l=ee,i=at.transition;try{at.transition=null,ee=1,gg(t,e,r,l)}finally{at.transition=i,ee=l}return null}function gg(t,e,r,l){do ir();while(Gt!==null);if(Z&6)throw Error(E(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(Zm(t,s),t===Ne&&(ve=Ne=null,Be=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xl||(Xl=!0,Xf(fi,function(){return ir(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=ee;ee=1;var a=Z;Z|=4,Aa.current=null,ug(t,r),If(r,t),Ix(wo),mi=!!yo,wo=yo=null,t.current=r,hg(r),Um(),Z=a,ee=o,at.transition=s}else t.current=r;if(Xl&&(Xl=!1,Gt=t,Bi=i),s=t.pendingLanes,s===0&&(tn=null),Vm(r.stateNode),Ge(t,ge()),e!==null)for(l=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],l(i.value,{componentStack:i.stack,digest:i.digest});if(Ri)throw Ri=!1,t=$o,$o=null,t;return Bi&1&&t.tag!==0&&ir(),s=t.pendingLanes,s&1?t===Uo?Gr++:(Gr=0,Uo=t):Gr=0,fn(),null}function ir(){if(Gt!==null){var t=wh(Bi),e=at.transition,r=ee;try{if(at.transition=null,ee=16>t?16:t,Gt===null)var l=!1;else{if(t=Gt,Gt=null,Bi=0,Z&6)throw Error(E(331));var i=Z;for(Z|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(A=d;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:Vr(8,u,s)}var h=u.child;if(h!==null)h.return=u,A=h;else for(;A!==null;){u=A;var x=u.sibling,g=u.return;if(Pf(u),u===d){A=null;break}if(x!==null){x.return=g,A=x;break}A=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var j=o.child;if(o.subtreeFlags&2064&&j!==null)j.return=o,A=j;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yi(9,a)}}catch(_){pe(a,a.return,_)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Z=i,fn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ui,t)}catch{}l=!0}return l}finally{ee=r,at.transition=e}}return!1}function Ed(t,e,r){e=hr(r,e),e=_f(t,e,1),t=en(t,e,1),e=ze(),t!==null&&(Cl(t,1,e),Ge(t,e))}function pe(t,e,r){if(t.tag===3)Ed(t,t,r);else for(;e!==null;){if(e.tag===3){Ed(e,t,r);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tn===null||!tn.has(l))){t=hr(r,t),t=kf(e,t,1),e=en(e,t,1),t=ze(),e!==null&&(Cl(e,1,t),Ge(e,t));break}}e=e.return}}function jg(t,e,r){var l=t.pingCache;l!==null&&l.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&r,Ne===t&&(Be&r)===r&&(we===4||we===3&&(Be&130023424)===Be&&500>ge()-Ia?_n(t,0):Ma|=r),Ge(t,e)}function Wf(t,e){e===0&&(t.mode&1?(e=Ml,Ml<<=1,!(Ml&130023424)&&(Ml=4194304)):e=1);var r=ze();t=Mt(t,e),t!==null&&(Cl(t,e,r),Ge(t,r))}function vg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Wf(t,r)}function yg(t,e){var r=0;switch(t.tag){case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(E(314))}l!==null&&l.delete(e),Wf(t,r)}var Vf;Vf=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)We=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return We=!1,og(t,e,r);We=!!(t.flags&131072)}else We=!1,ae&&e.flags&1048576&&Gh(e,Ci,e.index);switch(e.lanes=0,e.tag){case 2:var l=e.type;ii(t,e),t=e.pendingProps;var i=ar(e,Fe.current);lr(e,r),i=Ra(null,e,l,t,i,r);var s=Ba();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(l)?(s=!0,yi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Na(e),i.updater=Qi,e.stateNode=i,i._reactInternals=e,Ro(e,l,t,r),e=Do(null,e,l,!0,s,r)):(e.tag=0,ae&&s&&ja(e),Oe(null,e,i,r),e=e.child),e;case 16:l=e.elementType;e:{switch(ii(t,e),t=e.pendingProps,i=l._init,l=i(l._payload),e.type=l,i=e.tag=Cg(l),t=ft(l,t),i){case 0:e=Lo(null,e,l,t,r);break e;case 1:e=vd(null,e,l,t,r);break e;case 11:e=gd(null,e,l,t,r);break e;case 14:e=jd(null,e,l,ft(l.type,t),r);break e}throw Error(E(306,l,""))}return e;case 0:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ft(l,i),Lo(t,e,l,i,r);case 1:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ft(l,i),vd(t,e,l,i,r);case 3:e:{if(Tf(e),t===null)throw Error(E(387));l=e.pendingProps,s=e.memoizedState,i=s.element,Zh(t,e),Ni(e,l,null,r);var o=e.memoizedState;if(l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=hr(Error(E(423)),e),e=yd(t,e,l,r,i);break e}else if(l!==i){i=hr(Error(E(424)),e),e=yd(t,e,l,r,i);break e}else for(Ze=qt(e.stateNode.containerInfo.firstChild),Je=e,ae=!0,mt=null,r=tf(e,null,l,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(cr(),l===i){e=It(t,e,r);break e}Oe(t,e,l,r)}e=e.child}return e;case 5:return nf(e),t===null&&So(e),l=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Co(l,i)?o=null:s!==null&&Co(l,s)&&(e.flags|=32),Sf(t,e),Oe(t,e,o,r),e.child;case 6:return t===null&&So(e),null;case 13:return Ef(t,e,r);case 4:return ba(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=dr(e,null,l,r):Oe(t,e,l,r),e.child;case 11:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ft(l,i),gd(t,e,l,i,r);case 7:return Oe(t,e,e.pendingProps,r),e.child;case 8:return Oe(t,e,e.pendingProps.children,r),e.child;case 12:return Oe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(l=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(_i,l._currentValue),l._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!Ve.current){e=It(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===l){if(s.tag===1){c=Dt(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),To(s.return,r,e),a.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),To(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,l=e.pendingProps.children,lr(e,r),i=ct(i),l=l(i),e.flags|=1,Oe(t,e,l,r),e.child;case 14:return l=e.type,i=ft(l,e.pendingProps),i=ft(l.type,i),jd(t,e,l,i,r);case 15:return Nf(t,e,e.type,e.pendingProps,r);case 17:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ft(l,i),ii(t,e),e.tag=1,Xe(l)?(t=!0,yi(e)):t=!1,lr(e,r),qh(e,l,i),Ro(e,l,i,r),Do(null,e,l,!0,t,r);case 19:return Rf(t,e,r);case 22:return bf(t,e,r)}throw Error(E(156,e.tag))};function Xf(t,e){return gh(t,e)}function wg(t,e,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,r,l){return new wg(t,e,r,l)}function $a(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cg(t){if(typeof t=="function")return $a(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sa)return 11;if(t===oa)return 14}return 2}function rn(t,e){var r=t.alternate;return r===null?(r=ot(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ai(t,e,r,l,i,s){var o=2;if(l=t,typeof t=="function")$a(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Un:return kn(r.children,i,s,e);case ia:o=8,i|=8;break;case qs:return t=ot(12,r,e,i|2),t.elementType=qs,t.lanes=s,t;case eo:return t=ot(13,r,e,i),t.elementType=eo,t.lanes=s,t;case to:return t=ot(19,r,e,i),t.elementType=to,t.lanes=s,t;case eh:return Ji(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ju:o=10;break e;case qu:o=9;break e;case sa:o=11;break e;case oa:o=14;break e;case Ut:o=16,l=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=ot(o,r,e,i),e.elementType=t,e.type=l,e.lanes=s,e}function kn(t,e,r,l){return t=ot(7,t,l,e),t.lanes=r,t}function Ji(t,e,r,l){return t=ot(22,t,l,e),t.elementType=eh,t.lanes=r,t.stateNode={isHidden:!1},t}function Ws(t,e,r){return t=ot(6,t,null,e),t.lanes=r,t}function Vs(t,e,r){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _g(t,e,r,l,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ns(0),this.expirationTimes=Ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ua(t,e,r,l,i,s,o,a,c){return t=new _g(t,e,r,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(s),t}function kg(t,e,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:l==null?null:""+l,children:t,containerInfo:e,implementation:r}}function Gf(t){if(!t)return on;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var r=t.type;if(Xe(r))return Vh(t,r,e)}return e}function Qf(t,e,r,l,i,s,o,a,c){return t=Ua(r,l,!0,t,i,s,o,a,c),t.context=Gf(null),r=t.current,l=ze(),i=nn(r),s=Dt(l,i),s.callback=e??null,en(r,s,i),t.current.lanes=i,Cl(t,i,l),Ge(t,l),t}function qi(t,e,r,l){var i=e.current,s=ze(),o=nn(i);return r=Gf(r),e.context===null?e.context=r:e.pendingContext=r,e=Dt(s,o),e.payload={element:t},l=l===void 0?null:l,l!==null&&(e.callback=l),t=en(i,e,o),t!==null&&(gt(t,i,o,s),ni(t,i,o)),o}function Di(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Ha(t,e){Rd(t,e),(t=t.alternate)&&Rd(t,e)}function Ng(){return null}var Kf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wa(t){this._internalRoot=t}es.prototype.render=Wa.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));qi(t,e,null,null)};es.prototype.unmount=Wa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bn(function(){qi(null,t,null,null)}),e[At]=null}};function es(t){this._internalRoot=t}es.prototype.unstable_scheduleHydration=function(t){if(t){var e=kh();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Wt.length&&e!==0&&e<Wt[r].priority;r++);Wt.splice(r,0,t),r===0&&bh(t)}};function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ts(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function bg(t,e,r,l,i){if(i){if(typeof l=="function"){var s=l;l=function(){var d=Di(o);s.call(d)}}var o=Qf(e,l,t,0,null,!1,!1,"",Bd);return t._reactRootContainer=o,t[At]=o.current,nl(t.nodeType===8?t.parentNode:t),Bn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof l=="function"){var a=l;l=function(){var d=Di(c);a.call(d)}}var c=Ua(t,0,!1,null,null,!1,!1,"",Bd);return t._reactRootContainer=c,t[At]=c.current,nl(t.nodeType===8?t.parentNode:t),Bn(function(){qi(e,c,r,l)}),c}function ns(t,e,r,l,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=Di(o);a.call(c)}}qi(e,o,t,i)}else o=bg(r,e,t,i,l);return Di(o)}Ch=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Pr(e.pendingLanes);r!==0&&(da(e,r|1),Ge(e,ge()),!(Z&6)&&(fr=ge()+500,fn()))}break;case 13:Bn(function(){var l=Mt(t,1);if(l!==null){var i=ze();gt(l,t,1,i)}}),Ha(t,1)}};ua=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var r=ze();gt(e,t,134217728,r)}Ha(t,134217728)}};_h=function(t){if(t.tag===13){var e=nn(t),r=Mt(t,e);if(r!==null){var l=ze();gt(r,t,e,l)}Ha(t,e)}};kh=function(){return ee};Nh=function(t,e){var r=ee;try{return ee=t,e()}finally{ee=r}};ho=function(t,e,r){switch(e){case"input":if(lo(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var l=r[e];if(l!==t&&l.form===t.form){var i=Xi(l);if(!i)throw Error(E(90));nh(l),lo(l,i)}}}break;case"textarea":lh(t,r);break;case"select":e=r.value,e!=null&&er(t,!!r.multiple,e,!1)}};uh=Fa;hh=Bn;var Sg={usingClientEntryPoint:!1,Events:[kl,Xn,Xi,ch,dh,Fa]},Br={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Tg={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mh(t),t===null?null:t.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{Ui=Gl.inject(Tg),Nt=Gl}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;nt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Va(e))throw Error(E(200));return kg(t,e,null,r)};nt.createRoot=function(t,e){if(!Va(t))throw Error(E(299));var r=!1,l="",i=Kf;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ua(t,1,!1,null,null,r,!1,l,i),t[At]=e.current,nl(t.nodeType===8?t.parentNode:t),new Wa(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=mh(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return Bn(t)};nt.hydrate=function(t,e,r){if(!ts(e))throw Error(E(200));return ns(null,t,e,!0,r)};nt.hydrateRoot=function(t,e,r){if(!Va(t))throw Error(E(405));var l=r!=null&&r.hydratedSources||null,i=!1,s="",o=Kf;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=Qf(e,null,t,1,r??null,i,!1,s,o),t[At]=e.current,nl(t),l)for(t=0;t<l.length;t++)r=l[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new es(e)};nt.render=function(t,e,r){if(!ts(e))throw Error(E(200));return ns(null,t,e,!1,r)};nt.unmountComponentAtNode=function(t){if(!ts(t))throw Error(E(40));return t._reactRootContainer?(Bn(function(){ns(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};nt.unstable_batchedUpdates=Fa;nt.unstable_renderSubtreeIntoContainer=function(t,e,r,l){if(!ts(r))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return ns(t,e,r,!1,l)};nt.version="18.2.0-next-9e3b772b8-20220608";function Yf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yf)}catch(t){console.error(t)}}Yf(),Gu.exports=nt;var bl=Gu.exports,Ld=bl;Zs.createRoot=Ld.createRoot,Zs.hydrateRoot=Ld.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},ul.apply(this,arguments)}var Qt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qt||(Qt={}));const Dd="popstate";function Eg(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:c=""}=Mn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Vo("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=i.location.href,d=c.indexOf("#");a=d===-1?c:c.slice(0,d)}return a+"#"+(typeof s=="string"?s:Pi(s))}function l(i,s){rs(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Bg(e,r,l,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Rg(){return Math.random().toString(36).substr(2,8)}function Pd(t,e){return{usr:t.state,key:t.key,idx:e}}function Vo(t,e,r,l){return r===void 0&&(r=null),ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mn(e):e,{state:r,key:e&&e.key||l||Rg()})}function Pi(t){let{pathname:e="/",search:r="",hash:l=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(e+=l.charAt(0)==="#"?l:"#"+l),e}function Mn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let l=t.indexOf("?");l>=0&&(e.search=t.substr(l),t=t.substr(0,l)),t&&(e.pathname=t)}return e}function Bg(t,e,r,l){l===void 0&&(l={});let{window:i=document.defaultView,v5Compat:s=!1}=l,o=i.history,a=Qt.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(ul({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=Qt.Pop;let k=u(),m=k==null?null:k-d;d=k,c&&c({action:a,location:y.location,delta:m})}function x(k,m){a=Qt.Push;let f=Vo(y.location,k,m);r&&r(f,k),d=u()+1;let j=Pd(f,d),w=y.createHref(f);try{o.pushState(j,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(w)}s&&c&&c({action:a,location:y.location,delta:1})}function g(k,m){a=Qt.Replace;let f=Vo(y.location,k,m);r&&r(f,k),d=u();let j=Pd(f,d),w=y.createHref(f);o.replaceState(j,"",w),s&&c&&c({action:a,location:y.location,delta:0})}function v(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof k=="string"?k:Pi(k);return he(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Dd,h),c=k,()=>{i.removeEventListener(Dd,h),c=null}},createHref(k){return e(i,k)},createURL:v,encodeLocation(k){let m=v(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:g,go(k){return o.go(k)}};return y}var Ad;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ad||(Ad={}));function Lg(t,e,r){r===void 0&&(r="/");let l=typeof e=="string"?Mn(e):e,i=hl(l.pathname||"/",r);if(i==null)return null;let s=Zf(t);Dg(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ug(s[a],Wg(i));return o}function Zf(t,e,r,l){e===void 0&&(e=[]),r===void 0&&(r=[]),l===void 0&&(l="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let d=ln([l,c.relativePath]),u=r.concat(c);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Zf(s.children,e,u,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:zg(d,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of Jf(s.path))i(s,o,c)}),e}function Jf(t){let e=t.split("/");if(e.length===0)return[];let[r,...l]=e,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(l.length===0)return i?[s,""]:[s];let o=Jf(l.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Dg(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:$g(e.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}const Pg=/^:\w+$/,Ag=3,Mg=2,Ig=1,Fg=10,Og=-2,Md=t=>t==="*";function zg(t,e){let r=t.split("/"),l=r.length;return r.some(Md)&&(l+=Og),e&&(l+=Mg),r.filter(i=>!Md(i)).reduce((i,s)=>i+(Pg.test(s)?Ag:s===""?Ig:Fg),l)}function $g(t,e){return t.length===e.length&&t.slice(0,-1).every((l,i)=>l===e[i])?t[t.length-1]-e[e.length-1]:0}function Ug(t,e){let{routesMeta:r}=t,l={},i="/",s=[];for(let o=0;o<r.length;++o){let a=r[o],c=o===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",u=Xo({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d);if(!u)return null;Object.assign(l,u.params);let h=a.route;s.push({params:l,pathname:ln([i,u.pathname]),pathnameBase:Kg(ln([i,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(i=ln([i,u.pathnameBase]))}return s}function Xo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,l]=Hg(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:l.reduce((d,u,h)=>{let{paramName:x,isOptional:g}=u;if(x==="*"){let y=a[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return g&&!v?d[x]=void 0:d[x]=Vg(v||"",x),d},{}),pathname:s,pathnameBase:o,pattern:t}}function Hg(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),rs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,c)=>(l.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),l]}function Wg(t){try{return decodeURI(t)}catch(e){return rs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vg(t,e){try{return decodeURIComponent(t)}catch(r){return rs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function hl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,l=t.charAt(r);return l&&l!=="/"?null:t.slice(r)||"/"}function Xg(t,e){e===void 0&&(e="/");let{pathname:r,search:l="",hash:i=""}=typeof t=="string"?Mn(t):t;return{pathname:r?r.startsWith("/")?r:Gg(r,e):e,search:Yg(l),hash:Zg(i)}}function Gg(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Xs(t,e,r,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qg(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Xa(t,e){let r=Qg(t);return e?r.map((l,i)=>i===t.length-1?l.pathname:l.pathnameBase):r.map(l=>l.pathnameBase)}function Ga(t,e,r,l){l===void 0&&(l=!1);let i;typeof t=="string"?i=Mn(t):(i=ul({},t),he(!i.pathname||!i.pathname.includes("?"),Xs("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Xs("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Xs("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=r;else{let h=e.length-1;if(!l&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),h-=1;i.pathname=x.join("/")}a=h>=0?e[h]:"/"}let c=Xg(i,a),d=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const ln=t=>t.join("/").replace(/\/\/+/g,"/"),Kg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Yg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Zg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Jg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qf=["post","put","patch","delete"];new Set(qf);const qg=["get",...qf];new Set(qg);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},fl.apply(this,arguments)}const ls=p.createContext(null),ep=p.createContext(null),Ot=p.createContext(null),is=p.createContext(null),pn=p.createContext({outlet:null,matches:[],isDataRoute:!1}),tp=p.createContext(null);function e0(t,e){let{relative:r}=e===void 0?{}:e;yr()||he(!1);let{basename:l,navigator:i}=p.useContext(Ot),{hash:s,pathname:o,search:a}=ss(t,{relative:r}),c=o;return l!=="/"&&(c=o==="/"?l:ln([l,o])),i.createHref({pathname:c,search:a,hash:s})}function yr(){return p.useContext(is)!=null}function wr(){return yr()||he(!1),p.useContext(is).location}function np(t){p.useContext(Ot).static||p.useLayoutEffect(t)}function rp(){let{isDataRoute:t}=p.useContext(pn);return t?f0():t0()}function t0(){yr()||he(!1);let t=p.useContext(ls),{basename:e,future:r,navigator:l}=p.useContext(Ot),{matches:i}=p.useContext(pn),{pathname:s}=wr(),o=JSON.stringify(Xa(i,r.v7_relativeSplatPath)),a=p.useRef(!1);return np(()=>{a.current=!0}),p.useCallback(function(d,u){if(u===void 0&&(u={}),!a.current)return;if(typeof d=="number"){l.go(d);return}let h=Ga(d,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ln([e,h.pathname])),(u.replace?l.replace:l.push)(h,u.state,u)},[e,l,o,s,t])}function ss(t,e){let{relative:r}=e===void 0?{}:e,{future:l}=p.useContext(Ot),{matches:i}=p.useContext(pn),{pathname:s}=wr(),o=JSON.stringify(Xa(i,l.v7_relativeSplatPath));return p.useMemo(()=>Ga(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function n0(t,e){return r0(t,e)}function r0(t,e,r,l){yr()||he(!1);let{navigator:i}=p.useContext(Ot),{matches:s}=p.useContext(pn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=wr(),u;if(e){var h;let k=typeof e=="string"?Mn(e):e;c==="/"||(h=k.pathname)!=null&&h.startsWith(c)||he(!1),u=k}else u=d;let x=u.pathname||"/",g=c==="/"?x:x.slice(c.length)||"/",v=Lg(t,{pathname:g}),y=a0(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:ln([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:ln([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,r,l);return e&&y?p.createElement(is.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qt.Pop}},y):y}function l0(){let t=h0(),e=Jg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},e),r?p.createElement("pre",{style:i},r):null,s)}const i0=p.createElement(l0,null);class s0 extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?p.createElement(pn.Provider,{value:this.props.routeContext},p.createElement(tp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o0(t){let{routeContext:e,match:r,children:l}=t,i=p.useContext(ls);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),p.createElement(pn.Provider,{value:e},l)}function a0(t,e,r,l){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),l===void 0&&(l=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,a=(i=r)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));u>=0||he(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(r&&l&&l.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:x,errors:g}=r,v=h.route.loader&&x[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||v){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,h,x)=>{let g,v=!1,y=null,k=null;r&&(g=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||i0,c&&(d<0&&x===0?(p0("route-fallback",!1),v=!0,k=null):d===x&&(v=!0,k=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,x+1)),f=()=>{let j;return g?j=y:v?j=k:h.route.Component?j=p.createElement(h.route.Component,null):h.route.element?j=h.route.element:j=u,p.createElement(o0,{match:h,routeContext:{outlet:u,matches:m,isDataRoute:r!=null},children:j})};return r&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?p.createElement(s0,{location:r.location,revalidation:r.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var lp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(lp||{}),Ai=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ai||{});function c0(t){let e=p.useContext(ls);return e||he(!1),e}function d0(t){let e=p.useContext(ep);return e||he(!1),e}function u0(t){let e=p.useContext(pn);return e||he(!1),e}function ip(t){let e=u0(),r=e.matches[e.matches.length-1];return r.route.id||he(!1),r.route.id}function h0(){var t;let e=p.useContext(tp),r=d0(Ai.UseRouteError),l=ip(Ai.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[l]}function f0(){let{router:t}=c0(lp.UseNavigateStable),e=ip(Ai.UseNavigateStable),r=p.useRef(!1);return np(()=>{r.current=!0}),p.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fl({fromRouteId:e},s)))},[t,e])}const Id={};function p0(t,e,r){!e&&!Id[t]&&(Id[t]=!0)}function Ql(t){let{to:e,replace:r,state:l,relative:i}=t;yr()||he(!1);let{future:s,static:o}=p.useContext(Ot),{matches:a}=p.useContext(pn),{pathname:c}=wr(),d=rp(),u=Ga(e,Xa(a,s.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(u);return p.useEffect(()=>d(JSON.parse(h),{replace:r,state:l,relative:i}),[d,h,i,r,l]),null}function K(t){he(!1)}function m0(t){let{basename:e="/",children:r=null,location:l,navigationType:i=Qt.Pop,navigator:s,static:o=!1,future:a}=t;yr()&&he(!1);let c=e.replace(/^\/*/,"/"),d=p.useMemo(()=>({basename:c,navigator:s,static:o,future:fl({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof l=="string"&&(l=Mn(l));let{pathname:u="/",search:h="",hash:x="",state:g=null,key:v="default"}=l,y=p.useMemo(()=>{let k=hl(u,c);return k==null?null:{location:{pathname:k,search:h,hash:x,state:g,key:v},navigationType:i}},[c,u,h,x,g,v,i]);return y==null?null:p.createElement(Ot.Provider,{value:d},p.createElement(is.Provider,{children:r,value:y}))}function os(t){let{children:e,location:r}=t;return n0(Go(e),r)}new Promise(()=>{});function Go(t,e){e===void 0&&(e=[]);let r=[];return p.Children.forEach(t,(l,i)=>{if(!p.isValidElement(l))return;let s=[...e,i];if(l.type===p.Fragment){r.push.apply(r,Go(l.props.children,s));return}l.type!==K&&he(!1),!l.props.index||!l.props.children||he(!1);let o={id:l.props.id||s.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(o.children=Go(l.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},Mi.apply(this,arguments)}function sp(t,e){if(t==null)return{};var r={},l=Object.keys(t),i,s;for(s=0;s<l.length;s++)i=l[s],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function x0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function g0(t,e){return t.button===0&&(!e||e==="_self")&&!x0(t)}const j0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],v0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],y0=p.createContext({isTransitioning:!1}),w0="startTransition",Fd=ta[w0];function C0(t){let{basename:e,children:r,future:l,window:i}=t,s=p.useRef();s.current==null&&(s.current=Eg({window:i,v5Compat:!0}));let o=s.current,[a,c]=p.useState({action:o.action,location:o.location}),{v7_startTransition:d}=l||{},u=p.useCallback(h=>{d&&Fd?Fd(()=>c(h)):c(h)},[c,d]);return p.useLayoutEffect(()=>o.listen(u),[o,u]),p.createElement(m0,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o,future:l})}const _0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,op=p.forwardRef(function(e,r){let{onClick:l,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:d,preventScrollReset:u,unstable_viewTransition:h}=e,x=sp(e,j0),{basename:g}=p.useContext(Ot),v,y=!1;if(typeof d=="string"&&k0.test(d)&&(v=d,_0))try{let j=new URL(window.location.href),w=d.startsWith("//")?new URL(j.protocol+d):new URL(d),_=hl(w.pathname,g);w.origin===j.origin&&_!=null?d=_+w.search+w.hash:y=!0}catch{}let k=e0(d,{relative:i}),m=b0(d,{replace:o,state:a,target:c,preventScrollReset:u,relative:i,unstable_viewTransition:h});function f(j){l&&l(j),j.defaultPrevented||m(j)}return p.createElement("a",Mi({},x,{href:v||k,onClick:y||s?l:f,ref:r,target:c}))}),J=p.forwardRef(function(e,r){let{"aria-current":l="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:c,unstable_viewTransition:d,children:u}=e,h=sp(e,v0),x=ss(c,{relative:h.relative}),g=wr(),v=p.useContext(ep),{navigator:y}=p.useContext(Ot),k=v!=null&&S0(x)&&d===!0,m=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,f=g.pathname,j=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(f=f.toLowerCase(),j=j?j.toLowerCase():null,m=m.toLowerCase());const w=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let _=f===m||!o&&f.startsWith(m)&&f.charAt(w)==="/",S=j!=null&&(j===m||!o&&j.startsWith(m)&&j.charAt(m.length)==="/"),T={isActive:_,isPending:S,isTransitioning:k},B=_?l:void 0,z;typeof s=="function"?z=s(T):z=[s,_?"active":null,S?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(T):a;return p.createElement(op,Mi({},h,{"aria-current":B,className:z,ref:r,style:I,to:c,unstable_viewTransition:d}),typeof u=="function"?u(T):u)});var Qo;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qo||(Qo={}));var Od;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Od||(Od={}));function N0(t){let e=p.useContext(ls);return e||he(!1),e}function b0(t,e){let{target:r,replace:l,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=rp(),d=wr(),u=ss(t,{relative:o});return p.useCallback(h=>{if(g0(h,r)){h.preventDefault();let x=l!==void 0?l:Pi(d)===Pi(u);c(t,{replace:x,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[d,c,u,l,i,r,t,s,o,a])}function S0(t,e){e===void 0&&(e={});let r=p.useContext(y0);r==null&&he(!1);let{basename:l}=N0(Qo.useViewTransitionState),i=ss(t,{relative:e.relative});if(!r.isTransitioning)return!1;let s=hl(r.currentLocation.pathname,l)||r.currentLocation.pathname,o=hl(r.nextLocation.pathname,l)||r.nextLocation.pathname;return Xo(i.pathname,o)!=null||Xo(i.pathname,s)!=null}const ap="data:image/svg+xml,%3csvg%20xmlns:ev='http://www.w3.org/2001/xml-events'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20height='87'%20viewBox='0%200%2087%2087'%20width='87'%3e%3cdefs/%3e%3cg%20transform='translate(5.5,5.5)'%20id='page1'%3e%3crect%20fill='%23ffffff'%20height='77'%20y='0'%20x='0'%20width='77'/%3e%3cg%20transform='translate(1.000000,1.000000)'%20id='group1'%3e%3cg%20id='group2'%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(0.000000,18.645100)'%20id='shape3'%20d='M75.4,18.9C75.4,29.3,58.5,37.7,37.7,37.7C16.9,37.7,.0,29.3,.0,18.9C.0,8.4,16.9,.0,37.7,.0C58.5,.0,75.4,8.4,75.4,18.9z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(13.803000,0.000000)'%20id='shape4'%20d='M42.8,73.8C34.6,79.0,19.6,67.0,9.2,46.9C-1.2,26.9,-3.1,6.4,5.1,1.2C13.2,-4.0,28.2,8.0,38.6,28.1C49.0,48.1,50.9,68.6,42.8,73.8z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(13.803000,0.000000)'%20id='shape5'%20d='M5.1,73.8C-3.1,68.6,-1.2,48.1,9.2,28.1C19.6,8.0,34.6,-4.0,42.8,1.2C50.9,6.4,49.0,26.9,38.6,46.9C28.2,67.0,13.2,79.0,5.1,73.8z'/%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(7.271561,7.236650)'%20id='group6'%3e%3cg%20transform='translate(2.394994,2.381675)'%20id='group7'%3e%3cpath%20fill-rule='nonzero'%20fill='%23ffffff'%20transform='translate(0.000000,14.360055)'%20id='shape8'%20d='M58.1,14.5C58.1,22.5,45.1,29.0,29.0,29.0C13.0,29.0,.0,22.5,.0,14.5C.0,6.5,13.0,.0,29.0,.0C45.1,.0,58.1,6.5,58.1,14.5z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23ffffff'%20transform='translate(10.630826,0.000000)'%20id='shape9'%20d='M32.9,56.8C26.7,60.8,15.1,51.6,7.1,36.1C-0.9,20.7,-2.4,4.9,3.9,.9C10.1,-3.1,21.7,6.2,29.7,21.6C37.8,37.1,39.2,52.8,32.9,56.8z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23ffffff'%20transform='translate(10.630826,0.000000)'%20id='shape10'%20d='M3.9,56.8C-2.4,52.8,-0.9,37.1,7.1,21.6C15.1,6.2,26.7,-3.1,32.9,.9C39.2,4.9,37.8,20.7,29.7,36.1C21.7,51.6,10.1,60.8,3.9,56.8z'/%3e%3c/g%3e%3c/g%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(25.412303,25.304562)'%20id='shape11'%20d='M6.0,2.1C12.1,-1.8,20.3,-0.1,24.3,6.0C24.5,6.3,24.7,6.7,24.9,7.0L24.9,7.1C25.0,7.4,24.9,7.8,24.6,8.0L12.3,16.0C12.0,16.2,11.5,16.1,11.3,15.8L10.7,14.8C10.1,13.9,10.3,12.8,11.2,12.2L19.1,7.1C19.5,6.8,19.6,6.4,19.3,6.1C19.3,6.0,19.3,5.9,19.2,5.9C16.0,3.3,11.6,3.1,8.1,5.3C3.8,8.1,2.6,13.9,5.4,18.3C8.2,22.6,14.0,23.8,18.3,21.0C19.2,20.5,20.4,20.7,21.0,21.6L21.6,22.5C21.8,22.9,21.7,23.3,21.4,23.5C21.1,23.8,20.8,24.0,20.4,24.3C14.3,28.2,6.1,26.5,2.1,20.4C-1.8,14.3,-0.1,6.1,6.0,2.1zM24.4,12.8C24.8,12.6,25.2,12.7,25.4,13.0L26.2,14.2C26.9,15.3,26.6,16.6,25.6,17.3L24.4,18.1C24.0,18.3,23.6,18.2,23.3,17.9L21.7,15.4C21.5,15.1,21.6,14.7,21.9,14.4L24.4,12.8z'/%3e%3c/g%3e%3c/svg%3e";function T0(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"home-content",children:[n.jsxs("div",{className:"description",children:[n.jsx("img",{src:ap,alt:"pelement-react"}),n.jsx("h1",{children:"pelement react"}),n.jsx("p",{children:"基于Element Plus 和 react，面向设计师和开发者的组件库"}),n.jsx(op,{to:"/component/button",children:"快速开始"})]}),n.jsxs("div",{className:"join-us",children:[n.jsx("h3",{children:"加入我们"}),n.jsxs("div",{children:[n.jsx("label",{children:"Email: "}),n.jsx("span",{children:"llkui241569@163.com"})]}),n.jsxs("div",{children:[n.jsx("label",{children:"QQ: "}),n.jsx("span",{children:"1728366431"})]})]}),n.jsxs("div",{className:"footer-main text-xs",children:[n.jsxs("p",{children:["Released under the ",n.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferer",children:"MIT License"}),"."]}),n.jsxs("p",{children:["Made with ❤️ by ",n.jsx("a",{href:"https://github.com/llkui",target:"_blank",rel:"noopener noreferer",children:"llkui"})]})]})]})})}function zd(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"安装"}),`
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
`})})]})}function E0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(zd,{...t})}):zd(t)}function $d(t){const e={h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.7"}),`
`,n.jsx(e.p,{children:"2024-02-03"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Dialog"}),`
`,n.jsx(e.li,{children:"Components [Button] add text bg"}),`
`,n.jsx(e.li,{children:"Components add Drawer"}),`
`]}),`
`,n.jsx(e.hr,{}),`
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
`]})]})}function R0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx($d,{...t})}):$d(t)}function Ud(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"社区精选组件"}),`
`,n.jsx(e.h2,{children:"推荐组件"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"推荐组件"}),n.jsx(e.th,{children:"pelement-react使用场景"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"浮动元素"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/floating-ui/floating-ui/",children:"Floating UI"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Tooltip"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"svg图标"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/pd4d10/vite-plugin-svgr/",children:"vite-plugin-svgr"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Icon"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Markdown 渲染"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/mdx-js/mdx/",children:"@mdx-js/rollup"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Markdown"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"代码高亮"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/highlightjs/highlight.js/",children:"highlight.js"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"CodeBlock"})})]})]})]})]})}function B0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ud,{...t})}):Ud(t)}function L0(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"基础"}),n.jsx(J,{to:"installation",children:"安装"}),n.jsx("p",{className:"sidebar-group__title",children:"进阶"}),n.jsx(J,{to:"changelog",children:"更新日志"}),n.jsx("p",{className:"sidebar-group__title",children:"其他"}),n.jsx(J,{to:"recommendation",children:"社区精选组件"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsx("div",{className:"markdown-body",children:n.jsxs(os,{children:[n.jsx(K,{path:"installation",element:n.jsx(E0,{})}),n.jsx(K,{path:"changelog",element:n.jsx(R0,{})}),n.jsx(K,{path:"recommendation",element:n.jsx(B0,{})})]})})})})]})}const D0=`import { Alert } from 'pelement-react'\r
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
export default AlertBasic`,P0=`import { Alert } from 'pelement-react'\r
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
export default AlertCenter`,A0=`import { Alert } from 'pelement-react'\r
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
export default AlertClose`,M0=`import { Alert } from 'pelement-react'\r
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
export default AlertDescription`,I0=`import { Alert } from 'pelement-react'\r
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
export default AlertEffect`,F0=`import { Alert } from 'pelement-react'\r
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
export default AlertIconDescription`,O0=`import { Alert } from 'pelement-react'\r
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
export default AlertIcon`,z0=`import { Avatar, Col, Row } from 'pelement-react'\r
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
export default AvatarBasic`,$0=`import { Avatar } from 'pelement-react'\r
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
export default AvatarError`,U0=`import { Avatar } from "pelement-react"\r
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
export default AvatarFit`,H0=`import { Avatar, UserFilled } from 'pelement-react'\r
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
export default AvatarType`,W0=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
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
export default ButtonBasic`,V0=`import { Button } from 'pelement-react'\r
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
export default ButtonDisabled`,X0=`import { Button } from 'pelement-react'\r
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
export default ButtonLink`,G0=`import { Button } from 'pelement-react'\r
\r
function ButtonText() {\r
  const buttons = [\r
    { type: '', text: 'plain' },\r
    { type: 'primary', text: 'primary' },\r
    { type: 'success', text: 'success' },\r
    { type: 'info', text: 'info' },\r
    { type: 'warning', text: 'warning' },\r
    { type: 'danger', text: 'danger' },\r
  ]\r
\r
  const textList = buttons.map(button =>\r
    <Button\r
      type={button.type as any}\r
      text\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const bgList = buttons.map(button =>\r
    <Button\r
      type={button.type as any}\r
      text\r
      bg\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const disabledList = buttons.map(button =>\r
    <Button\r
      type={button.type as any}\r
      text\r
      disabled\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  return (\r
    <>\r
      <p>Basic text button</p>\r
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">\r
        {textList}\r
      </div>\r
\r
      <p>Background color always on</p>\r
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">\r
        {bgList}\r
      </div>\r
\r
      <p>Disabled text button</p>\r
      <div className="flex justify-space-between flex-wrap gap-4">\r
        {disabledList}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonText`,Q0=`import { Collapse, CollapseItem } from 'pelement-react'\r
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
export default CollapseBasic`,K0=`import { Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic`,Y0=`import { Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic1`,Z0=`import { Aside, Container, Main } from 'pelement-react'\r
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
export default ContainerBasic2`,J0=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic3`,q0=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic4`,ej=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic5`,tj=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic6`,nj=`import { Button, Dialog } from 'pelement-react'\r
import { useState } from 'react'\r
import './DialogBasic.scss'\r
\r
function DialogBasic() {\r
  const [dialogVisible, setDialogVisible] = useState(false)\r
\r
  function handlerClick() {\r
    setDialogVisible(true)\r
  }\r
\r
  function handleClose() {\r
    setDialogVisible(false)\r
  }\r
\r
  function handleOk() {\r
    setDialogVisible(false)\r
  }\r
\r
  function handleCancel() {\r
    setDialogVisible(false)\r
  }\r
\r
  // footer\r
  function Footer() {\r
    return (\r
      <>\r
        <span className="dialog-footer">\r
          <button aria-disabled="false" type="button" className="el-button" onClick={handleOk}>\r
            <span className="">Cancel</span>\r
          </button>\r
          <button aria-disabled="false" type="button" className="el-button el-button--primary" onClick={handleCancel}>\r
            <span className=""> Confirm </span>\r
          </button>\r
        </span>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={handlerClick}>\r
        click to open the Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogVisible}\r
        title="Tips"\r
        width="30%"\r
        onClose={handleClose}\r
        footer={<Footer />}\r
      >\r
        <span>This is a message</span>\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogBasic`,rj=`import { useState } from 'react'\r
import { Button, Dialog } from 'pelement-react'\r
\r
function DialogContent() {\r
  const [dialogTableVisible, setDialogTableVisible] = useState(false)\r
  const [dialogFormVisible, setDialogFormVisible] = useState(false)\r
\r
  function handlerTable() {\r
    setDialogTableVisible(true)\r
  }\r
\r
  function handlerForm() {\r
    setDialogFormVisible(true)\r
  }\r
\r
  function FormFooter() {\r
    return (\r
      <>\r
        <span className="dialog-footer">\r
          <Button onClick={() => { setDialogFormVisible(false) }}>Cancel</Button>\r
          <Button type="primary" onClick={() => { setDialogFormVisible(false) }}>\r
            Confirm\r
          </Button>\r
        </span>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={handlerTable}>\r
        open a Table nested Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogTableVisible}\r
        title="Shipping address"\r
        onClose={() => { setDialogTableVisible(false) }}\r
      >\r
        Table组件\r
      </Dialog>\r
\r
      <Button text onClick={handlerForm}>\r
        open a Form nested Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogFormVisible}\r
        title="Shipping address"\r
        footer={<FormFooter />}\r
        onClose={() => { setDialogFormVisible(false) }}\r
      >\r
        Form 表单\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogContent`,lj=`import { useState } from 'react'\r
import { Button, CircleCloseFilled, Dialog } from 'pelement-react'\r
\r
function DialogHeader() {\r
  const [visible, setVisible] = useState(false)\r
\r
  function onClose() {\r
    setVisible(false)\r
  }\r
\r
  function Header() {\r
    return (\r
      <>\r
        <div className="dialog-header">\r
          <h4 className="el-dialog__title">This is a custom header!</h4>\r
          <Button type="danger" onClick={onClose}>\r
            <CircleCloseFilled />\r
            Close\r
          </Button>\r
        </div>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button onClick={() => setVisible(true)}>\r
        Open Dialog with customized header\r
      </Button>\r
      <Dialog open={visible} showClose={false} header={<Header />} onClose={onClose}>\r
        This is dialog content.\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogHeader`,ij=`import { Divider } from 'pelement-react'\r
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
export default DividerBasic`,sj=`import { Divider } from 'pelement-react'\r
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
export default DividerBorder`,oj=`import { Divider, StarFilled } from 'pelement-react'\r
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
export default DividerContent`,aj=`import { Divider } from 'pelement-react'\r
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
export default DividerDirection`,cj=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerBasic() {\r
  const [direction, setDirection] = useState('')\r
  const [drawer, setDrawer] = useState(false)\r
  const [drawer2, setDrawer2] = useState(false)\r
\r
  function handlerLeftToRight() {\r
    setDirection('ltr')\r
    setDrawer(true)\r
  }\r
\r
  function handlerRightToLeft() {\r
    setDirection('rtl')\r
    setDrawer(true)\r
  }\r
\r
  function handlerTopToBottom() {\r
    setDirection('ttb')\r
    setDrawer(true)\r
  }\r
\r
  function handlerBottomToTop() {\r
    setDirection('btt')\r
    setDrawer(true)\r
  }\r
\r
  function handlerLeftToRightFooter() {\r
    setDirection('ltr')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerRightToLeftFooter() {\r
    setDirection('rtl')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerTopToBottomFooter() {\r
    setDirection('ttb')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerBottomToTopFooter() {\r
    setDirection('btt')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerClose() {\r
    setDrawer(false)\r
  }\r
\r
  function handlerClose2() {\r
    setDrawer2(false)\r
  }\r
\r
  function cancelClick() {\r
    setDrawer2(false)\r
  }\r
\r
  function confirmClick() {\r
    setDrawer2(false)\r
  }\r
\r
  return (\r
    <>\r
      <div>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRight}>\r
          open left to right\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeft}>\r
          open right to left\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottom}>\r
          open top to bottom\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTop}>\r
          open bottom to top\r
        </Button>\r
      </div>\r
      <div style={{ marginTop: '20px' }}>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRightFooter}>\r
          open left to right footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeftFooter}>\r
          open right to left footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottomFooter}>\r
          open top to bottom footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTopFooter}>\r
          open bottom to top footer\r
        </Button>\r
      </div>\r
\r
      <Drawer\r
        open={drawer}\r
        title="I am the title"\r
        direction={direction as any}\r
        onClose={handlerClose}\r
      >\r
        <span>Hi, there!</span>\r
      </Drawer>\r
      <Drawer\r
        open={drawer2}\r
        direction={direction as any}\r
        onClose={handlerClose2}\r
        header={<h4>set title by slot</h4>}\r
        footer={\r
          <div style={{ flex: 'auto' }}>\r
            <Button onClick={cancelClick}>cancel</Button>\r
            <Button type="primary" onClick={confirmClick}>confirm</Button>\r
          </div>\r
        }\r
      >\r
        radio\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerBasic`,dj=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerContent() {\r
  const [table, setTable] = useState(false)\r
  const [dialog, setDialog] = useState(false)\r
\r
  function closeTable() {\r
    setTable(false)\r
  }\r
\r
  function closeDialog() {\r
    setDialog(false)\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={() => { setTable(true) }}>\r
        Open Drawer with nested table\r
      </Button>\r
\r
      <Button text onClick={() => { setDialog(true) }}>\r
        Open Drawer with nested form\r
      </Button>\r
\r
      <Drawer\r
        open={table}\r
        title="I have a nested table inside!"\r
        direction="rtl"\r
        size="50%"\r
        onClose={closeTable}\r
      >\r
        table\r
      </Drawer>\r
\r
      <Drawer\r
        open={dialog}\r
        title="I have a nested form inside!"\r
        direction="ltr"\r
        className="demo-drawer"\r
        onClose={closeDialog}\r
      >\r
        <div className="demo-drawer__content">\r
          form\r
          <div className="demo-drawer__footer">\r
            <Button onClick={closeDialog}>Cancel</Button>\r
            <Button type="primary" onClick={closeDialog}>\r
              Submit\r
            </Button>\r
          </div>\r
        </div>\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerContent`,uj=`import { useState } from 'react'\r
import { Button, CircleCloseFilled, Drawer } from 'pelement-react'\r
\r
function DrawerHeader() {\r
  const [visible, setVisible] = useState(false)\r
\r
  function handlerClose() {\r
    setVisible(false)\r
  }\r
\r
  return (\r
    <>\r
      <Button onClick={() => { setVisible(true) }}>\r
        Open Drawer with customized header\r
      </Button>\r
\r
      <Drawer\r
        open={visible}\r
        showClose={false}\r
        header={\r
          <>\r
            <h4>This is a custom header!</h4>\r
            <Button type="danger" onClick={handlerClose}>\r
              <CircleCloseFilled />\r
              Close\r
            </Button>\r
          </>\r
        }\r
      >\r
        This is drawer content.\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerHeader`,hj=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerWithHeader() {\r
  const [drawer, setDrawer] = useState(false)\r
\r
  return (\r
    <>\r
      <Button type="primary" onClick={() => setDrawer(true)}>\r
        open\r
      </Button>\r
\r
      <Drawer open={drawer} title="I am the title" withHeader={false}>\r
        <span>Hi there!</span>\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerWithHeader`,fj=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close } from 'pelement-react'\r
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
export default ButtonBasic`,pj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBasic`,mj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBootstrap`,xj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutGutter`,gj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutJustify`,jj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutMix`,vj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutOffset`,yj=`import { Link } from 'pelement-react'\r
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
export default LinkBasic`,wj=`import { Link } from 'pelement-react'\r
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
export default LinkDisabled`,Cj=`import { Edit, Link, View } from 'pelement-react'\r
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
export default LinkIcon`,_j=`import { Link } from 'pelement-react'\r
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
export default LinkUnderline`,kj=`import { Button, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmBasic`,Nj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmEvent`,bj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmIcon`,Sj=`import { Button, Popover } from 'pelement-react'\r
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
export default PopoverBasic`,Tj=`import { Progress } from 'pelement-react'\r
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
export default ProgressBasic`,Ej=`import { Progress } from 'pelement-react'\r
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
export default ProgressTextInside`,Rj=`import { Button, Col, Result, Row } from 'pelement-react'\r
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
export default ResultBasic`,Bj=`import { Button, Result } from 'pelement-react'\r
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
export default ResultIcon`,Lj=`import { Hide, Switch, View } from 'pelement-react'\r
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
export default SwitchActionIcon`,Dj=`import { Switch } from 'pelement-react'\r
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
export default SwitchBasic`,Pj=`import { useState } from 'react'\r
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
export default SwitchBeforeChange`,Aj=`import { Switch } from 'pelement-react'\r
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
export default SwitchDisabled`,Mj=`import { Check, Close, Switch } from 'pelement-react'\r
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
export default SwitchIcon`,Ij=`import { Switch } from 'pelement-react'\r
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
export default SwitchLoading`,Fj=`import { Switch } from 'pelement-react'\r
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
export default SwitchSize`,Oj=`import { Switch } from 'pelement-react'\r
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
export default SwitchText`,zj=`import { Table } from 'pelement-react'\r
\r
function TableBasic() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data}>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableBasic`,$j=`import { Table } from 'pelement-react'\r
\r
function TableBorder() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data} border>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableBorder`,Uj=`import { Table } from 'pelement-react'\r
\r
function TableStripe() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data} stripe>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableStripe`,Hj=`import { Tag } from 'pelement-react'\r
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
export default TagBasic`,Wj=`import { Tag } from 'pelement-react'\r
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
export default TagClosable`,Vj=`import { Tag } from 'pelement-react'\r
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
export default TagEffect`,Xj=`import { Tag } from 'pelement-react'\r
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
export default TagRound`,Gj=`import { Row, Tag } from 'pelement-react'\r
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
export default TagSize`,Qj=`import { Text } from 'pelement-react'\r
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
export default TextBasic`,Kj=`import { Text } from 'pelement-react'\r
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
export default TextSize`,Yj=`import { Row, Text } from 'pelement-react'\r
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
export default TextTruncated`,Zj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipBasic`,Jj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipContent`,qj=`import { useState } from 'react'\r
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
export default TooltipDisabled`,ev=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipEffect`;function cp(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const r=t[e],l=typeof r;(l==="object"||l==="function")&&!Object.isFrozen(r)&&cp(r)}),t}class Hd{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function dp(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Kt(t,...e){const r=Object.create(null);for(const l in t)r[l]=t[l];return e.forEach(function(l){for(const i in l)r[i]=l[i]}),r}const tv="</span>",Wd=t=>!!t.scope,nv=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const r=t.split(".");return[`${e}${r.shift()}`,...r.map((l,i)=>`${l}${"_".repeat(i+1)}`)].join(" ")}return`${e}${t}`};class rv{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=dp(e)}openNode(e){if(!Wd(e))return;const r=nv(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){Wd(e)&&(this.buffer+=tv)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Vd=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Qa{constructor(){this.rootNode=Vd(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const r=Vd({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(l=>this._walk(e,l)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{Qa._collapse(r)}))}}class lv extends Qa{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){const l=e.root;r&&(l.scope=`language:${r}`),this.add(l)}toHTML(){return new rv(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function pl(t){return t?typeof t=="string"?t:t.source:null}function up(t){return In("(?=",t,")")}function iv(t){return In("(?:",t,")*")}function sv(t){return In("(?:",t,")?")}function In(...t){return t.map(r=>pl(r)).join("")}function ov(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Ka(...t){return"("+(ov(t).capture?"":"?:")+t.map(l=>pl(l)).join("|")+")"}function hp(t){return new RegExp(t.toString()+"|").exec("").length-1}function av(t,e){const r=t&&t.exec(e);return r&&r.index===0}const cv=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ya(t,{joinWith:e}){let r=0;return t.map(l=>{r+=1;const i=r;let s=pl(l),o="";for(;s.length>0;){const a=cv.exec(s);if(!a){o+=s;break}o+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+i):(o+=a[0],a[0]==="("&&r++)}return o}).map(l=>`(${l})`).join(e)}const dv=/\b\B/,fp="[a-zA-Z]\\w*",Za="[a-zA-Z_]\\w*",pp="\\b\\d+(\\.\\d+)?",mp="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",xp="\\b(0b[01]+)",uv="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",hv=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=In(e,/.*\b/,t.binary,/\b.*/)),Kt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,l)=>{r.index!==0&&l.ignoreMatch()}},t)},ml={begin:"\\\\[\\s\\S]",relevance:0},fv={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ml]},pv={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ml]},mv={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},as=function(t,e,r={}){const l=Kt({scope:"comment",begin:t,end:e,contains:[]},r);l.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Ka("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return l.contains.push({begin:In(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),l},xv=as("//","$"),gv=as("/\\*","\\*/"),jv=as("#","$"),vv={scope:"number",begin:pp,relevance:0},yv={scope:"number",begin:mp,relevance:0},wv={scope:"number",begin:xp,relevance:0},Cv={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ml,{begin:/\[/,end:/\]/,relevance:0,contains:[ml]}]},_v={scope:"title",begin:fp,relevance:0},kv={scope:"title",begin:Za,relevance:0},Nv={begin:"\\.\\s*"+Za,relevance:0},bv=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})};var Kl=Object.freeze({__proto__:null,APOS_STRING_MODE:fv,BACKSLASH_ESCAPE:ml,BINARY_NUMBER_MODE:wv,BINARY_NUMBER_RE:xp,COMMENT:as,C_BLOCK_COMMENT_MODE:gv,C_LINE_COMMENT_MODE:xv,C_NUMBER_MODE:yv,C_NUMBER_RE:mp,END_SAME_AS_BEGIN:bv,HASH_COMMENT_MODE:jv,IDENT_RE:fp,MATCH_NOTHING_RE:dv,METHOD_GUARD:Nv,NUMBER_MODE:vv,NUMBER_RE:pp,PHRASAL_WORDS_MODE:mv,QUOTE_STRING_MODE:pv,REGEXP_MODE:Cv,RE_STARTERS_RE:uv,SHEBANG:hv,TITLE_MODE:_v,UNDERSCORE_IDENT_RE:Za,UNDERSCORE_TITLE_MODE:kv});function Sv(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function Tv(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Ev(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=Sv,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Rv(t,e){Array.isArray(t.illegal)&&(t.illegal=Ka(...t.illegal))}function Bv(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Lv(t,e){t.relevance===void 0&&(t.relevance=1)}const Dv=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},t);Object.keys(t).forEach(l=>{delete t[l]}),t.keywords=r.keywords,t.begin=In(r.beforeMatch,up(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},Pv=["of","and","for","in","not","or","if","then","parent","list","value"],Av="keyword";function gp(t,e,r=Av){const l=Object.create(null);return typeof t=="string"?i(r,t.split(" ")):Array.isArray(t)?i(r,t):Object.keys(t).forEach(function(s){Object.assign(l,gp(t[s],e,s))}),l;function i(s,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");l[c[0]]=[s,Mv(c[0],c[1])]})}}function Mv(t,e){return e?Number(e):Iv(t)?0:1}function Iv(t){return Pv.includes(t.toLowerCase())}const Xd={},Nn=t=>{console.error(t)},Gd=(t,...e)=>{console.log(`WARN: ${t}`,...e)},zn=(t,e)=>{Xd[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Xd[`${t}/${e}`]=!0)},Ii=new Error;function jp(t,e,{key:r}){let l=0;const i=t[r],s={},o={};for(let a=1;a<=e.length;a++)o[a+l]=i[a],s[a+l]=!0,l+=hp(e[a-1]);t[r]=o,t[r]._emit=s,t[r]._multi=!0}function Fv(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Nn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ii;if(typeof t.beginScope!="object"||t.beginScope===null)throw Nn("beginScope must be object"),Ii;jp(t,t.begin,{key:"beginScope"}),t.begin=Ya(t.begin,{joinWith:""})}}function Ov(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Nn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ii;if(typeof t.endScope!="object"||t.endScope===null)throw Nn("endScope must be object"),Ii;jp(t,t.end,{key:"endScope"}),t.end=Ya(t.end,{joinWith:""})}}function zv(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function $v(t){zv(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Fv(t),Ov(t)}function Uv(t){function e(o,a){return new RegExp(pl(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=hp(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(Ya(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const d=c.findIndex((h,x)=>x>0&&h!==void 0),u=this.matchIndexes[d];return c.splice(0,d),Object.assign(c,u)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new r;return this.rules.slice(a).forEach(([d,u])=>c.addRule(d,u)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let d=c.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function i(o){const a=new l;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function s(o,a){const c=o;if(o.isCompiled)return c;[Tv,Bv,$v,Dv].forEach(u=>u(o,a)),t.compilerExtensions.forEach(u=>u(o,a)),o.__beforeBegin=null,[Ev,Rv,Lv].forEach(u=>u(o,a)),o.isCompiled=!0;let d=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),d=o.keywords.$pattern,delete o.keywords.$pattern),d=d||/\w+/,o.keywords&&(o.keywords=gp(o.keywords,t.case_insensitive)),c.keywordPatternRe=e(d,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=pl(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(u){return Hv(u==="self"?o:u)})),o.contains.forEach(function(u){s(u,c)}),o.starts&&s(o.starts,a),c.matcher=i(c),c}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Kt(t.classNameAliases||{}),s(t)}function vp(t){return t?t.endsWithParent||vp(t.starts):!1}function Hv(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Kt(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:vp(t)?Kt(t,{starts:t.starts?Kt(t.starts):null}):Object.isFrozen(t)?Kt(t):t}var Wv="11.9.0";class Vv extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}}const Gs=dp,Qd=Kt,Kd=Symbol("nomatch"),Xv=7,yp=function(t){const e=Object.create(null),r=Object.create(null),l=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:lv};function c(N){return a.noHighlightRe.test(N)}function d(N){let C=N.className+" ";C+=N.parentNode?N.parentNode.className:"";const R=a.languageDetectRe.exec(C);if(R){const P=z(R[1]);return P||(Gd(s.replace("{}",R[1])),Gd("Falling back to no-highlight mode for this block.",N)),P?R[1]:"no-highlight"}return C.split(/\s+/).find(P=>c(P)||z(P))}function u(N,C,R){let P="",$="";typeof C=="object"?(P=N,R=C.ignoreIllegals,$=C.language):(zn("10.7.0","highlight(lang, code, ...args) has been deprecated."),zn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=N,P=C),R===void 0&&(R=!0);const Y={code:P,language:$};H("before:highlight",Y);const De=Y.result?Y.result:h(Y.language,Y.code,R);return De.code=Y.code,H("after:highlight",De),De}function h(N,C,R,P){const $=Object.create(null);function Y(D,O){return D.keywords[O]}function De(){if(!V.keywords){Se.addText(re);return}let D=0;V.keywordPatternRe.lastIndex=0;let O=V.keywordPatternRe.exec(re),X="";for(;O;){X+=re.substring(D,O.index);const q=vt.case_insensitive?O[0].toLowerCase():O[0],Pe=Y(V,q);if(Pe){const[Tt,nm]=Pe;if(Se.addText(X),X="",$[q]=($[q]||0)+1,$[q]<=Xv&&(Rl+=nm),Tt.startsWith("_"))X+=O[0];else{const rm=vt.classNameAliases[Tt]||Tt;Ce(O[0],rm)}}else X+=O[0];D=V.keywordPatternRe.lastIndex,O=V.keywordPatternRe.exec(re)}X+=re.substring(D),Se.addText(X)}function lt(){if(re==="")return;let D=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){Se.addText(re);return}D=h(V.subLanguage,re,!0,_c[V.subLanguage]),_c[V.subLanguage]=D._top}else D=g(re,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Rl+=D.relevance),Se.__addSublanguage(D._emitter,D.language)}function be(){V.subLanguage!=null?lt():De(),re=""}function Ce(D,O){D!==""&&(Se.startScope(O),Se.addText(D),Se.endScope())}function xn(D,O){let X=1;const q=O.length-1;for(;X<=q;){if(!D._emit[X]){X++;continue}const Pe=vt.classNameAliases[D[X]]||D[X],Tt=O[X];Pe?Ce(Tt,Pe):(re=Tt,De(),re=""),X++}}function yc(D,O){return D.scope&&typeof D.scope=="string"&&Se.openNode(vt.classNameAliases[D.scope]||D.scope),D.beginScope&&(D.beginScope._wrap?(Ce(re,vt.classNameAliases[D.beginScope._wrap]||D.beginScope._wrap),re=""):D.beginScope._multi&&(xn(D.beginScope,O),re="")),V=Object.create(D,{parent:{value:V}}),V}function wc(D,O,X){let q=av(D.endRe,X);if(q){if(D["on:end"]){const Pe=new Hd(D);D["on:end"](O,Pe),Pe.isMatchIgnored&&(q=!1)}if(q){for(;D.endsParent&&D.parent;)D=D.parent;return D}}if(D.endsWithParent)return wc(D.parent,O,X)}function Zp(D){return V.matcher.regexIndex===0?(re+=D[0],1):(vs=!0,0)}function Jp(D){const O=D[0],X=D.rule,q=new Hd(X),Pe=[X.__beforeBegin,X["on:begin"]];for(const Tt of Pe)if(Tt&&(Tt(D,q),q.isMatchIgnored))return Zp(O);return X.skip?re+=O:(X.excludeBegin&&(re+=O),be(),!X.returnBegin&&!X.excludeBegin&&(re=O)),yc(X,D),X.returnBegin?0:O.length}function qp(D){const O=D[0],X=C.substring(D.index),q=wc(V,D,X);if(!q)return Kd;const Pe=V;V.endScope&&V.endScope._wrap?(be(),Ce(O,V.endScope._wrap)):V.endScope&&V.endScope._multi?(be(),xn(V.endScope,D)):Pe.skip?re+=O:(Pe.returnEnd||Pe.excludeEnd||(re+=O),be(),Pe.excludeEnd&&(re=O));do V.scope&&Se.closeNode(),!V.skip&&!V.subLanguage&&(Rl+=V.relevance),V=V.parent;while(V!==q.parent);return q.starts&&yc(q.starts,D),Pe.returnEnd?0:O.length}function em(){const D=[];for(let O=V;O!==vt;O=O.parent)O.scope&&D.unshift(O.scope);D.forEach(O=>Se.openNode(O))}let El={};function Cc(D,O){const X=O&&O[0];if(re+=D,X==null)return be(),0;if(El.type==="begin"&&O.type==="end"&&El.index===O.index&&X===""){if(re+=C.slice(O.index,O.index+1),!i){const q=new Error(`0 width match regex (${N})`);throw q.languageName=N,q.badRule=El.rule,q}return 1}if(El=O,O.type==="begin")return Jp(O);if(O.type==="illegal"&&!R){const q=new Error('Illegal lexeme "'+X+'" for mode "'+(V.scope||"<unnamed>")+'"');throw q.mode=V,q}else if(O.type==="end"){const q=qp(O);if(q!==Kd)return q}if(O.type==="illegal"&&X==="")return 1;if(js>1e5&&js>O.index*3)throw new Error("potential infinite loop, way more iterations than matches");return re+=X,X.length}const vt=z(N);if(!vt)throw Nn(s.replace("{}",N)),new Error('Unknown language: "'+N+'"');const tm=Uv(vt);let gs="",V=P||tm;const _c={},Se=new a.__emitter(a);em();let re="",Rl=0,gn=0,js=0,vs=!1;try{if(vt.__emitTokens)vt.__emitTokens(C,Se);else{for(V.matcher.considerAll();;){js++,vs?vs=!1:V.matcher.considerAll(),V.matcher.lastIndex=gn;const D=V.matcher.exec(C);if(!D)break;const O=C.substring(gn,D.index),X=Cc(O,D);gn=D.index+X}Cc(C.substring(gn))}return Se.finalize(),gs=Se.toHTML(),{language:N,value:gs,relevance:Rl,illegal:!1,_emitter:Se,_top:V}}catch(D){if(D.message&&D.message.includes("Illegal"))return{language:N,value:Gs(C),illegal:!0,relevance:0,_illegalBy:{message:D.message,index:gn,context:C.slice(gn-100,gn+100),mode:D.mode,resultSoFar:gs},_emitter:Se};if(i)return{language:N,value:Gs(C),illegal:!1,relevance:0,errorRaised:D,_emitter:Se,_top:V};throw D}}function x(N){const C={value:Gs(N),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return C._emitter.addText(N),C}function g(N,C){C=C||a.languages||Object.keys(e);const R=x(N),P=C.filter(z).filter(G).map(be=>h(be,N,!1));P.unshift(R);const $=P.sort((be,Ce)=>{if(be.relevance!==Ce.relevance)return Ce.relevance-be.relevance;if(be.language&&Ce.language){if(z(be.language).supersetOf===Ce.language)return 1;if(z(Ce.language).supersetOf===be.language)return-1}return 0}),[Y,De]=$,lt=Y;return lt.secondBest=De,lt}function v(N,C,R){const P=C&&r[C]||R;N.classList.add("hljs"),N.classList.add(`language-${P}`)}function y(N){let C=null;const R=d(N);if(c(R))return;if(H("before:highlightElement",{el:N,language:R}),N.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",N);return}if(N.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(N)),a.throwUnescapedHTML))throw new Vv("One of your code blocks includes unescaped HTML.",N.innerHTML);C=N;const P=C.textContent,$=R?u(P,{language:R,ignoreIllegals:!0}):g(P);N.innerHTML=$.value,N.dataset.highlighted="yes",v(N,R,$.language),N.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(N.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),H("after:highlightElement",{el:N,result:$,text:P})}function k(N){a=Qd(a,N)}const m=()=>{w(),zn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function f(){w(),zn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let j=!1;function w(){if(document.readyState==="loading"){j=!0;return}document.querySelectorAll(a.cssSelector).forEach(y)}function _(){j&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",_,!1);function S(N,C){let R=null;try{R=C(t)}catch(P){if(Nn("Language definition for '{}' could not be registered.".replace("{}",N)),i)Nn(P);else throw P;R=o}R.name||(R.name=N),e[N]=R,R.rawDefinition=C.bind(null,t),R.aliases&&I(R.aliases,{languageName:N})}function T(N){delete e[N];for(const C of Object.keys(r))r[C]===N&&delete r[C]}function B(){return Object.keys(e)}function z(N){return N=(N||"").toLowerCase(),e[N]||e[r[N]]}function I(N,{languageName:C}){typeof N=="string"&&(N=[N]),N.forEach(R=>{r[R.toLowerCase()]=C})}function G(N){const C=z(N);return C&&!C.disableAutodetect}function te(N){N["before:highlightBlock"]&&!N["before:highlightElement"]&&(N["before:highlightElement"]=C=>{N["before:highlightBlock"](Object.assign({block:C.el},C))}),N["after:highlightBlock"]&&!N["after:highlightElement"]&&(N["after:highlightElement"]=C=>{N["after:highlightBlock"](Object.assign({block:C.el},C))})}function ce(N){te(N),l.push(N)}function U(N){const C=l.indexOf(N);C!==-1&&l.splice(C,1)}function H(N,C){const R=N;l.forEach(function(P){P[R]&&P[R](C)})}function W(N){return zn("10.7.0","highlightBlock will be removed entirely in v12.0"),zn("10.7.0","Please use highlightElement now."),y(N)}Object.assign(t,{highlight:u,highlightAuto:g,highlightAll:w,highlightElement:y,highlightBlock:W,configure:k,initHighlighting:m,initHighlightingOnLoad:f,registerLanguage:S,unregisterLanguage:T,listLanguages:B,getLanguage:z,registerAliases:I,autoDetection:G,inherit:Qd,addPlugin:ce,removePlugin:U}),t.debugMode=function(){i=!1},t.safeMode=function(){i=!0},t.versionString=Wv,t.regex={concat:In,lookahead:up,either:Ka,optional:sv,anyNumberOfTimes:iv};for(const N in Kl)typeof Kl[N]=="object"&&cp(Kl[N]);return Object.assign(t,Kl),t},pr=yp({});pr.newInstance=()=>yp({});var Gv=pr;pr.HighlightJS=pr;pr.default=pr;const Ja=Au(Gv);function Qv(t){const e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),l=/[\p{L}0-9._:-]+/u,i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=t.inherit(s,{begin:/\(/,end:/\)/}),a=t.inherit(t.APOS_STRING_MODE,{className:"string"}),c=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:l,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,o,c,a]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:d}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Yd="[A-Za-z$_][0-9A-Za-z$_]*",Kv=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Yv=["true","false","null","undefined","NaN","Infinity"],wp=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Cp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],_p=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Zv=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Jv=[].concat(_p,wp,Cp);function qv(t){const e=t.regex,r=(C,{after:R})=>{const P="</"+C[0].slice(1);return C.input.indexOf(P,R)!==-1},l=Yd,i={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,R)=>{const P=C[0].length+C.index,$=C.input[P];if($==="<"||$===","){R.ignoreMatch();return}$===">"&&(r(C,{after:P})||R.ignoreMatch());let Y;const De=C.input.substring(P);if(Y=De.match(/^\s*=/)){R.ignoreMatch();return}if((Y=De.match(/^\s+extends\s+/))&&Y.index===0){R.ignoreMatch();return}}},a={$pattern:Yd,keyword:Kv,literal:Yv,built_in:Jv,"variable.language":Zv},c="[0-9](_?[0-9])*",d=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,x]},f={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:l+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},j=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,k,{match:/\$\d+/},h];x.contains=j.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(j)});const w=[].concat(f,x.contains),_=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),S={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_},T={variants:[{match:[/class/,/\s+/,l,/\s+/,/extends/,/\s+/,e.concat(l,"(",e.concat(/\./,l),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,l],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...wp,...Cp]}},z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},I={variants:[{match:[/function/,/\s+/,l,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],illegal:/%/},G={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(C){return e.concat("(?!",C.join("|"),")")}const ce={match:e.concat(/\b/,te([..._p,"super","import"]),l,e.lookahead(/\(/)),className:"title.function",relevance:0},U={begin:e.concat(/\./,e.lookahead(e.concat(l,/(?![0-9A-Za-z$_(])/))),end:l,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},H={match:[/get|set/,/\s+/,l,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},S]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",N={match:[/const|var|let/,/\s+/,l,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:_,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),z,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,k,f,{match:/\$\d+/},h,B,{className:"attr",begin:l+e.lookahead(":"),relevance:0},N,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,t.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:s},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[S,t.inherit(t.TITLE_MODE,{begin:l,className:"title.function"})]},{match:/\.\.\./,relevance:0},U,{match:"\\$"+l,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[S]},ce,G,T,H,{match:/\$[(.]/}]}}Ja.registerLanguage("xml",Qv);Ja.registerLanguage("javascript",qv);function L({language:t="javascript",name:e,children:r}){const l=p.useRef(null),[i,s]=p.useState(!1),[o,a]=p.useState(""),c=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":D0,"../../../packages/Alert/_example/AlertCenter.tsx":P0,"../../../packages/Alert/_example/AlertClose.tsx":A0,"../../../packages/Alert/_example/AlertDescription.tsx":M0,"../../../packages/Alert/_example/AlertEffect.tsx":I0,"../../../packages/Alert/_example/AlertIconDescription.tsx":F0,"../../../packages/Alert/_example/AlertShowIcon.tsx":O0,"../../../packages/Avatar/_example/AvatarBasic.tsx":z0,"../../../packages/Avatar/_example/AvatarError.tsx":$0,"../../../packages/Avatar/_example/AvatarFit.tsx":U0,"../../../packages/Avatar/_example/AvatarType.tsx":H0,"../../../packages/Button/_example/ButtonBasic.tsx":W0,"../../../packages/Button/_example/ButtonDisabled.tsx":V0,"../../../packages/Button/_example/ButtonLink.tsx":X0,"../../../packages/Button/_example/ButtonText.tsx":G0,"../../../packages/Collapse/_example/CollapseBasic.tsx":Q0,"../../../packages/Container/_example/ContainerBasic.tsx":K0,"../../../packages/Container/_example/ContainerBasic1.tsx":Y0,"../../../packages/Container/_example/ContainerBasic2.tsx":Z0,"../../../packages/Container/_example/ContainerBasic3.tsx":J0,"../../../packages/Container/_example/ContainerBasic4.tsx":q0,"../../../packages/Container/_example/ContainerBasic5.tsx":ej,"../../../packages/Container/_example/ContainerBasic6.tsx":tj,"../../../packages/Dialog/_example/DialogBasic.tsx":nj,"../../../packages/Dialog/_example/DialogContent.tsx":rj,"../../../packages/Dialog/_example/DialogHeader.tsx":lj,"../../../packages/Divider/_example/DividerBasic.tsx":ij,"../../../packages/Divider/_example/DividerBorder.tsx":sj,"../../../packages/Divider/_example/DividerContent.tsx":oj,"../../../packages/Divider/_example/DividerDirection.tsx":aj,"../../../packages/Drawer/_example/DrawerBasic.tsx":cj,"../../../packages/Drawer/_example/DrawerContent.tsx":dj,"../../../packages/Drawer/_example/DrawerHeader.tsx":uj,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":hj,"../../../packages/Icon/_example/IconBasic.tsx":fj,"../../../packages/Layout/_example/LayoutBasic.tsx":pj,"../../../packages/Layout/_example/LayoutBootstrap.tsx":mj,"../../../packages/Layout/_example/LayoutGutter.tsx":xj,"../../../packages/Layout/_example/LayoutJustify.tsx":gj,"../../../packages/Layout/_example/LayoutMix.tsx":jj,"../../../packages/Layout/_example/LayoutOffset.tsx":vj,"../../../packages/Link/_example/LinkBasic.tsx":yj,"../../../packages/Link/_example/LinkDisabled.tsx":wj,"../../../packages/Link/_example/LinkIcon.tsx":Cj,"../../../packages/Link/_example/LinkUnderline.tsx":_j,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":kj,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":Nj,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":bj,"../../../packages/Popover/_example/PopoverBasic.tsx":Sj,"../../../packages/Progress/_example/ProgressBasic.tsx":Tj,"../../../packages/Progress/_example/ProgressTextInside.tsx":Ej,"../../../packages/Result/_example/ResultBasic.tsx":Rj,"../../../packages/Result/_example/ResultIcon.tsx":Bj,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Lj,"../../../packages/Switch/_example/SwitchBasic.tsx":Dj,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":Pj,"../../../packages/Switch/_example/SwitchDisabled.tsx":Aj,"../../../packages/Switch/_example/SwitchIcon.tsx":Mj,"../../../packages/Switch/_example/SwitchLoading.tsx":Ij,"../../../packages/Switch/_example/SwitchSize.tsx":Fj,"../../../packages/Switch/_example/SwitchText.tsx":Oj,"../../../packages/Table/_example/TableBasic.tsx":zj,"../../../packages/Table/_example/TableBorder.tsx":$j,"../../../packages/Table/_example/TableStripe.tsx":Uj,"../../../packages/Tag/_example/TagBasic.tsx":Hj,"../../../packages/Tag/_example/TagClosable.tsx":Wj,"../../../packages/Tag/_example/TagEffect.tsx":Vj,"../../../packages/Tag/_example/TagRound.tsx":Xj,"../../../packages/Tag/_example/TagSize.tsx":Gj,"../../../packages/Text/_example/TextBasic.tsx":Qj,"../../../packages/Text/_example/TextSize.tsx":Kj,"../../../packages/Text/_example/TextTruncated.tsx":Yj,"../../../packages/Tooltip/_example/TooltipBasic.tsx":Zj,"../../../packages/Tooltip/_example/TooltipContent.tsx":Jj,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":qj,"../../../packages/Tooltip/_example/TooltipEffect.tsx":ev});let d={display:i?"":"none"};p.useEffect(()=>{l.current&&(Object.keys(c).forEach(h=>{h.indexOf(e)!==-1&&a(c[h])}),setTimeout(()=>{Ja.highlightElement(l.current)},0))},[e]);function u(){s(!i)}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"code-block",children:[n.jsx("div",{className:"code-block-component",children:r}),n.jsx("div",{className:"op-btns",children:n.jsx("button",{onClick:u,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:n.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:n.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),n.jsx("div",{className:"code-block-wrapper",style:d,children:n.jsx("div",{className:"code-block-pre language-react",children:n.jsx("pre",{children:n.jsx("code",{id:t,ref:l,className:t,children:o})})})})]})})}function kp(t){var e,r,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=kp(t[e]))&&(l&&(l+=" "),l+=r);else for(e in t)t[e]&&(l&&(l+=" "),l+=e);return l}function F(){for(var t,e,r=0,l="";r<arguments.length;)(t=arguments[r++])&&(e=kp(t))&&(l&&(l+=" "),l+=e);return l}const e1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),p.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),t1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(e1,{})})},cs=p.forwardRef(t1);cs.displayName="Edit";const n1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),r1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(n1,{})})},qa=p.forwardRef(r1);qa.displayName="Search";const l1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),i1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(l1,{})})},xl=p.forwardRef(i1);xl.displayName="Check";const s1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),p.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),o1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(s1,{})})},ec=p.forwardRef(o1);ec.displayName="Message";const a1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),c1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(a1,{})})},tc=p.forwardRef(c1);tc.displayName="Star";const d1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),u1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(d1,{})})},nc=p.forwardRef(u1);nc.displayName="Delete";const h1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),f1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(h1,{})})},ds=p.forwardRef(f1);ds.displayName="View";const p1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),m1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(p1,{})})},rc=p.forwardRef(m1);rc.displayName="StarFilled";const x1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),g1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(x1,{})})},an=p.forwardRef(g1);an.displayName="Close";const j1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),v1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(j1,{})})},lc=p.forwardRef(v1);lc.displayName="Loading";const y1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),p.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),w1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(y1,{})})},ic=p.forwardRef(w1);ic.displayName="Hide";const C1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),_1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(C1,{})})},Sl=p.forwardRef(_1);Sl.displayName="InfoFilled";const k1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),N1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(k1,{})})},us=p.forwardRef(N1);us.displayName="WarningFilled";const b1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),S1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(b1,{})})},Cr=p.forwardRef(S1);Cr.displayName="CircleCloseFilled";const T1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),E1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F(l,"el-icon"),onClick:i,children:n.jsx(T1,{})})},sc=p.forwardRef(E1);sc.displayName="CircleCheckFilled";const R1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),B1=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:F("el-icon",l),children:n.jsx(R1,{})})},oc=p.forwardRef(B1);oc.displayName="ArrowRight";const L1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),D1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F("el-icon",l),onClick:i,children:n.jsx(L1,{})})},Np=p.forwardRef(D1);Np.displayName="UserFilled";const P1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),p.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),A1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:F("el-icon",l),onClick:i,children:n.jsx(P1,{})})},ac=p.forwardRef(A1);ac.displayName="CircleCheck";const M1=t=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},p.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),I1=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:F("el-icon",l),children:n.jsx(M1,{})})},bp=p.forwardRef(I1);bp.displayName="QuestionFilled";const F1=(t,e)=>{const{className:r,style:l,children:i,type:s,plain:o=!1,round:a=!1,circle:c=!1,disabled:d=!1,link:u=!1,text:h=!1,bg:x=!1,icon:g,...v}=t,y=g?n.jsx(n.Fragment,{children:g}):n.jsx(n.Fragment,{});return n.jsxs("button",{ref:e,style:l,disabled:d,...v,className:F(r,"el-button",s?`el-button--${s}`:"",o?"is-plain":"",a?"is-round":"",c?"is-circle":"",d?"is-disabled":"",u?"is-link":"",h?"is-text":"",x?"is-has-bg":""),children:[y,i]})},b=p.forwardRef(F1);b.displayName="Button";const O1=(t,e)=>{const{style:r,className:l,children:i,direction:s}=t,o=()=>s==="vertical"?!0:s==="horizontal"?!1:i?i.some(a=>{const c=a.props.children;return c==="Header"||c==="Footer"}):!1;return n.jsx("section",{ref:e,style:r,className:F(l,"el-container",o()?"is-vertical":""),children:i})},qe=p.forwardRef(O1);qe.displayName="Container";const z1=(t,e)=>{const{style:r,className:l,children:i,height:s}=t,o={...r,"--el-header-height":s};return n.jsx("header",{ref:e,style:o,className:F(l,"el-header"),children:i})},Fn=p.forwardRef(z1);Fn.displayName="Head";const $1=(t,e)=>{const{style:r,className:l,children:i}=t;return n.jsx("main",{ref:e,style:r,className:F(l,"el-main"),children:i})},mn=p.forwardRef($1);mn.displayName="Main";const U1=(t,e)=>{const{style:r,className:l,children:i,height:s}=t,o={...r,"--el-footer-height":s};return n.jsx("footer",{ref:e,style:o,className:F(l,"el-footer"),children:i})},hs=p.forwardRef(U1);hs.displayName="Footer";const H1=(t,e)=>{const{style:r,className:l,children:i,width:s=200}=t,o={...r,"--el-aside-width":s};return n.jsx("aside",{ref:e,style:o,className:F(l,"el-aside"),children:i})},_r=p.forwardRef(H1);_r.displayName="Aside";const Sp=p.createContext({}),W1=(t,e)=>{const{style:r,className:l,children:i,gutter:s=0,justify:o}=t,a={marginLeft:`-${s/2}px`,marginRight:`-${s/2}px`,...r},c=p.useMemo(()=>({gutter:s}),[s]);return n.jsx(Sp.Provider,{value:c,children:n.jsx("div",{ref:e,style:a,className:F(l,"el-row",o?`is-justify-${o}`:""),children:i})})},ie=p.forwardRef(W1);ie.displayName="Row";const V1=(t,e)=>{const{style:r,className:l,children:i,span:s=24,offset:o,xs:a,sm:c,md:d,lg:u,xl:h}=t,{gutter:x}=p.useContext(Sp),g={paddingLeft:`${x/2}px`,paddingRight:`${x/2}px`,...r};return n.jsx("div",{ref:e,style:g,className:F(l,"el-col",s?`el-col-${s}`:"",x?"is-guttered":"",o?`el-col-offset-${o}`:"",a?`el-col-xs-${a}`:"",c?`el-col-sm-${c}`:"",d?`el-col-md-${d}`:"",u?`el-col-lg-${u}`:"",h?`el-col-xl-${h}`:""),children:i})},M=p.forwardRef(V1);M.displayName="Col";const X1=(t,e)=>{const{style:r,className:l,children:i,type:s,href:o,target:a,disabled:c=!1,underline:d=!0,icon:u}=t,h=u?n.jsx(n.Fragment,{children:u}):n.jsx(n.Fragment,{});return n.jsxs("a",{ref:e,style:r,className:F(l,"el-link",s?`el-link--${s}`:"el-link--default",c?"is-disabled":"",d?"is-underline":""),href:c||!o?void 0:o,target:a||void 0,children:[h,n.jsx("span",{className:"el-link__inner",children:i})]})},Ee=p.forwardRef(X1);Ee.displayName="Link";const G1=(t,e)=>{const{style:r,className:l,children:i,type:s,size:o,truncated:a=!1,lineClamp:c}=t,d={WebkitLineClamp:c,...r};return n.jsx("span",{ref:e,style:d,className:F(l,"el-text",s?`el-text--${s}`:"",o?`el-text--${o}`:"",a?"is-truncated":"",c?"is-line-clamp":""),children:i})},Ye=p.forwardRef(G1);Ye.displayName="Text";const Q1=(t,e)=>{const{style:r,className:l,children:i,contentPosition:s="center",borderStyle:o="solid",direction:a="horizontal"}=t,c={"--el-border-style":o,...r},d=i?n.jsx(n.Fragment,{children:n.jsx("div",{className:F("el-divider__text",`is-${s}`),children:i})}):n.jsx(n.Fragment,{});return n.jsx("div",{ref:e,style:c,className:F(l,"el-divider",`el-divider--${a}`),children:d})},St=p.forwardRef(Q1);St.displayName="Divider";const K1=(t,e)=>{const{style:r,className:l,defaultChecked:i=!1,size:s,inactiveText:o,activeText:a,inlinePrompt:c=!1,width:d,activeIcon:u,inactiveIcon:h,disabled:x=!1,loading:g=!1,beforeChange:v,activeActionIcon:y,inactiveActionIcon:k}=t,[m,f]=p.useState(i);function j(){if(x||g)return;if(!v){w();return}const G=v();G instanceof Promise&&G.then(te=>{te&&w()})}function w(){f(!m)}function _(){return h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{children:n.jsx("span",{children:o})})}function S(){return(o||h)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:F("el-switch__label el-switch__label--left",m?"":"is-active"),children:n.jsx(_,{})})}):n.jsx(n.Fragment,{})}function T(){return u?n.jsx(n.Fragment,{children:u}):n.jsx(n.Fragment,{children:n.jsx("span",{children:u})})}function B(){return(a||u)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:F("el-switch__label el-switch__label--right",m?"is-active":""),children:n.jsx(T,{})})}):n.jsx(n.Fragment,{})}function z(){return c&&(u||h)?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:m?u:h})}):c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:n.jsx("span",{className:"is-text",children:m?a:o})})}):n.jsx(n.Fragment,{})}function I(){return g?n.jsx(n.Fragment,{children:n.jsx(lc,{className:"is-loading"})}):y&&m?n.jsx(n.Fragment,{children:y}):k&&!m?n.jsx(n.Fragment,{children:k}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:F(l,"el-switch",m?"is-checked":"",s?`el-switch--${s}`:"",{"is-disabled":x||g}),onClick:j,children:[n.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:x||g}),n.jsx(S,{}),n.jsxs("span",{className:"el-switch__core",style:{width:`${d}px`},children:[n.jsx(z,{}),n.jsx("div",{className:"el-switch__action",children:n.jsx(I,{})})]}),n.jsx(B,{})]})},me=p.forwardRef(K1);me.displayName="Switch";const Y1=(t,e)=>{const{style:r,className:l,type:i="info",title:s,effect:o="light",closable:a=!0,closeText:c,close:d,showIcon:u=!1,center:h=!1,description:x}=t,[g,v]=p.useState(!0);function y(){if(!u)return n.jsx(n.Fragment,{});let w=n.jsx(n.Fragment,{});switch(i){case"success":w=n.jsx(n.Fragment,{children:n.jsx(sc,{className:F("el-alert__icon",{"is-big":x})})});break;case"info":w=n.jsx(n.Fragment,{children:n.jsx(Sl,{className:F("el-alert__icon",{"is-big":x})})});break;case"warning":w=n.jsx(n.Fragment,{children:n.jsx(us,{className:F("el-alert__icon",{"is-big":x})})});break;case"error":w=n.jsx(n.Fragment,{children:n.jsx(Cr,{className:F("el-alert__icon",{"is-big":x})})});break}return w}function k(){return x?n.jsx(n.Fragment,{children:n.jsx("p",{className:"el-alert__description",children:x})}):n.jsx(n.Fragment,{})}function m(){d&&d(),v(!1)}const f={display:g?"":"none",...r};function j(){return a?c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-alert__close-btn is-customed",onClick:m,children:c})}):n.jsx(n.Fragment,{children:n.jsx(an,{className:"el-alert__close-btn",onClick:m})}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:f,className:F("el-alert",`el-alert--${i}`,`is-${o}`,{"is-center":h},l),role:"alert",children:[n.jsx(y,{}),n.jsxs("div",{className:"el-alert__content",children:[n.jsx("span",{className:F("el-alert__title",{"is-bold":x}),children:s}),n.jsx(k,{}),n.jsx(j,{})]})]})},oe=p.forwardRef(Y1);oe.displayName="Alert";const Z1=p.createContext({}),J1=(t,e)=>{const{style:r,className:l,children:i,activeName:s}=t,o=p.useMemo(()=>({activeName:s}),[s]);return n.jsx(Z1.Provider,{value:o,children:n.jsx("div",{ref:e,style:r,className:F(l,"el-collapse"),children:i})})},Tp=p.forwardRef(J1);Tp.displayName="Collapse";const q1=(t,e)=>{const{style:r,className:l,children:i,title:s}=t,[o,a]=p.useState(!1);function c(){a(!o)}return n.jsxs("div",{ref:e,style:r,className:F(l,"el-collapse-item",{"is-active":o}),onClick:c,children:[n.jsxs("button",{className:F("el-collapse-item__header",{"is-active":o}),type:"button",children:[s,n.jsx(oc,{className:"el-collapse-item__arrow"})]}),n.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:o?"":"none"},children:n.jsx("div",{className:"el-collapse-item__content",children:i})})]})},Mr=p.forwardRef(q1);Mr.displayName="CollapseItem";const ey=(t,e)=>{const{style:r,className:l,shape:i="circle",size:s,src:o,icon:a,fit:c="cover",onError:d,children:u}=t,h={...r,"--el-avatar-size":s&&typeof s=="number"?`${s}px`:""},[x,g]=p.useState(!0);function v(){const m=new Image(0,0);o&&(m.src=o),m.onload=()=>{g(!0)},m.onerror=f=>{f instanceof Event&&(f.preventDefault(),f.stopPropagation()),g(!1),d&&d()}}function y(){return x?n.jsx("img",{src:o,style:{objectFit:c}}):n.jsx(n.Fragment,{children:u})}function k(){return a?n.jsx(n.Fragment,{children:a}):o?(v(),n.jsx(n.Fragment,{children:n.jsx(y,{})})):n.jsx(n.Fragment,{children:u})}return n.jsx("span",{ref:e,style:h,className:F(l,"el-avatar",`el-avatar--${i}`,s?`el-avatar--${s}`:"",{"el-avatar--icon":a}),children:n.jsx(k,{})})},kt=p.forwardRef(ey);kt.displayName="Avatar";const ty=(t,e)=>{const{style:r,className:l,icon:i="info",title:s,subTitle:o,extra:a}=t;function c(){if(typeof i=="string"){let d=n.jsx(n.Fragment,{});switch(i){case"success":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return d}else return n.jsx(n.Fragment,{children:i})}return n.jsxs("div",{ref:e,style:r,className:F("el-result",l),children:[n.jsx("div",{className:"el-result__icon",children:n.jsx(c,{})}),n.jsx("div",{className:"el-result__title",children:n.jsx("p",{children:s})}),n.jsx("div",{className:"el-result__subtitle",children:n.jsx("p",{children:o})}),n.jsx("div",{className:"el-result__extra",children:a})]})},qn=p.forwardRef(ty);qn.displayName="Result";function cn(t){return Ep(t)?(t.nodeName||"").toLowerCase():"#document"}function Qe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function zt(t){var e;return(e=(Ep(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ep(t){return t instanceof Node||t instanceof Qe(t).Node}function Re(t){return t instanceof Element||t instanceof Qe(t).Element}function tt(t){return t instanceof HTMLElement||t instanceof Qe(t).HTMLElement}function Ko(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Qe(t).ShadowRoot}function Tl(t){const{overflow:e,overflowX:r,overflowY:l,display:i}=ut(t);return/auto|scroll|overlay|hidden|clip/.test(e+l+r)&&!["inline","contents"].includes(i)}function ny(t){return["table","td","th"].includes(cn(t))}function cc(t){const e=dc(),r=ut(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(l=>(r.willChange||"").includes(l))||["paint","layout","strict","content"].some(l=>(r.contain||"").includes(l))}function ry(t){let e=mr(t);for(;tt(e)&&!fs(e);){if(cc(e))return e;e=mr(e)}return null}function dc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fs(t){return["html","body","#document"].includes(cn(t))}function ut(t){return Qe(t).getComputedStyle(t)}function ps(t){return Re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function mr(t){if(cn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ko(t)&&t.host||zt(t);return Ko(e)?e.host:e}function Rp(t){const e=mr(t);return fs(e)?t.ownerDocument?t.ownerDocument.body:t.body:tt(e)&&Tl(e)?e:Rp(e)}function gl(t,e,r){var l;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=Rp(t),s=i===((l=t.ownerDocument)==null?void 0:l.body),o=Qe(i);return s?e.concat(o,o.visualViewport||[],Tl(i)?i:[],o.frameElement&&r?gl(o.frameElement):[]):e.concat(i,gl(i,[],r))}function Zd(t){let e=t.activeElement;for(;((r=e)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;e=e.shadowRoot.activeElement}return e}function Yo(t,e){if(!t||!e)return!1;const r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ko(r)){let l=e;for(;l;){if(t===l)return!0;l=l.parentNode||l.host}}return!1}function Bp(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function ly(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:r,version:l}=e;return r+"/"+l}).join(" "):navigator.userAgent}function iy(t){return!Jd()&&t.width===0&&t.height===0||Jd()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function sy(){return/apple/i.test(navigator.vendor)}function Jd(){const t=/android/i;return t.test(Bp())||t.test(ly())}function oy(){return Bp().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Fi(t,e){const r=["mouse","pen"];return e||r.push("",void 0),r.includes(t)}function Ir(t){return(t==null?void 0:t.ownerDocument)||document}function ay(t){return"composedPath"in t?t.composedPath()[0]:t.target}const cy="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Lp(t){return tt(t)&&t.matches(cy)}const xr=Math.min,bn=Math.max,Oi=Math.round,Yl=Math.floor,dn=t=>({x:t,y:t});function dy(t,e,r){return bn(t,xr(e,r))}function Dp(t,e){return typeof t=="function"?t(e):t}function uc(t){return t.split("-")[0]}function hc(t){return t.split("-")[1]}function uy(t){return t==="x"?"y":"x"}function Pp(t){return t==="y"?"height":"width"}function fc(t){return["top","bottom"].includes(uc(t))?"y":"x"}function Ap(t){return uy(fc(t))}function hy(t){return{top:0,right:0,bottom:0,left:0,...t}}function fy(t){return typeof t!="number"?hy(t):{top:t,right:t,bottom:t,left:t}}function Mp(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function qd(t,e,r){let{reference:l,floating:i}=t;const s=fc(e),o=Ap(e),a=Pp(o),c=uc(e),d=s==="y",u=l.x+l.width/2-i.width/2,h=l.y+l.height/2-i.height/2,x=l[a]/2-i[a]/2;let g;switch(c){case"top":g={x:u,y:l.y-i.height};break;case"bottom":g={x:u,y:l.y+l.height};break;case"right":g={x:l.x+l.width,y:h};break;case"left":g={x:l.x-i.width,y:h};break;default:g={x:l.x,y:l.y}}switch(hc(e)){case"start":g[o]-=x*(r&&d?-1:1);break;case"end":g[o]+=x*(r&&d?-1:1);break}return g}const py=async(t,e,r)=>{const{placement:l="bottom",strategy:i="absolute",middleware:s=[],platform:o}=r,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let d=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:h}=qd(d,l,c),x=l,g={},v=0;for(let y=0;y<a.length;y++){const{name:k,fn:m}=a[y],{x:f,y:j,data:w,reset:_}=await m({x:u,y:h,initialPlacement:l,placement:x,strategy:i,middlewareData:g,rects:d,platform:o,elements:{reference:t,floating:e}});if(u=f??u,h=j??h,g={...g,[k]:{...g[k],...w}},_&&v<=50){v++,typeof _=="object"&&(_.placement&&(x=_.placement),_.rects&&(d=_.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):_.rects),{x:u,y:h}=qd(d,x,c)),y=-1;continue}}return{x:u,y:h,placement:x,strategy:i,middlewareData:g}},my=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:l,placement:i,rects:s,platform:o,elements:a,middlewareData:c}=e,{element:d,padding:u=0}=Dp(t,e)||{};if(d==null)return{};const h=fy(u),x={x:r,y:l},g=Ap(i),v=Pp(g),y=await o.getDimensions(d),k=g==="y",m=k?"top":"left",f=k?"bottom":"right",j=k?"clientHeight":"clientWidth",w=s.reference[v]+s.reference[g]-x[g]-s.floating[v],_=x[g]-s.reference[g],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let T=S?S[j]:0;(!T||!await(o.isElement==null?void 0:o.isElement(S)))&&(T=a.floating[j]||s.floating[v]);const B=w/2-_/2,z=T/2-y[v]/2-1,I=xr(h[m],z),G=xr(h[f],z),te=I,ce=T-y[v]-G,U=T/2-y[v]/2+B,H=dy(te,U,ce),W=!c.arrow&&hc(i)!=null&&U!=H&&s.reference[v]/2-(U<te?I:G)-y[v]/2<0,N=W?U<te?U-te:U-ce:0;return{[g]:x[g]+N,data:{[g]:H,centerOffset:U-H-N,...W&&{alignmentOffset:N}},reset:W}}});async function xy(t,e){const{placement:r,platform:l,elements:i}=t,s=await(l.isRTL==null?void 0:l.isRTL(i.floating)),o=uc(r),a=hc(r),c=fc(r)==="y",d=["left","top"].includes(o)?-1:1,u=s&&c?-1:1,h=Dp(e,t);let{mainAxis:x,crossAxis:g,alignmentAxis:v}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),c?{x:g*u,y:x*d}:{x:x*d,y:g*u}}const pc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,l;const{x:i,y:s,placement:o,middlewareData:a}=e,c=await xy(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(l=a.arrow)!=null&&l.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:o}}}}};function Ip(t){const e=ut(t);let r=parseFloat(e.width)||0,l=parseFloat(e.height)||0;const i=tt(t),s=i?t.offsetWidth:r,o=i?t.offsetHeight:l,a=Oi(r)!==s||Oi(l)!==o;return a&&(r=s,l=o),{width:r,height:l,$:a}}function mc(t){return Re(t)?t:t.contextElement}function sr(t){const e=mc(t);if(!tt(e))return dn(1);const r=e.getBoundingClientRect(),{width:l,height:i,$:s}=Ip(e);let o=(s?Oi(r.width):r.width)/l,a=(s?Oi(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const gy=dn(0);function Fp(t){const e=Qe(t);return!dc()||!e.visualViewport?gy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function jy(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Qe(t)?!1:e}function Ln(t,e,r,l){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),s=mc(t);let o=dn(1);e&&(l?Re(l)&&(o=sr(l)):o=sr(t));const a=jy(s,r,l)?Fp(s):dn(0);let c=(i.left+a.x)/o.x,d=(i.top+a.y)/o.y,u=i.width/o.x,h=i.height/o.y;if(s){const x=Qe(s),g=l&&Re(l)?Qe(l):l;let v=x.frameElement;for(;v&&l&&g!==x;){const y=sr(v),k=v.getBoundingClientRect(),m=ut(v),f=k.left+(v.clientLeft+parseFloat(m.paddingLeft))*y.x,j=k.top+(v.clientTop+parseFloat(m.paddingTop))*y.y;c*=y.x,d*=y.y,u*=y.x,h*=y.y,c+=f,d+=j,v=Qe(v).frameElement}}return Mp({width:u,height:h,x:c,y:d})}function vy(t){let{rect:e,offsetParent:r,strategy:l}=t;const i=tt(r),s=zt(r);if(r===s)return e;let o={scrollLeft:0,scrollTop:0},a=dn(1);const c=dn(0);if((i||!i&&l!=="fixed")&&((cn(r)!=="body"||Tl(s))&&(o=ps(r)),tt(r))){const d=Ln(r);a=sr(r),c.x=d.x+r.clientLeft,c.y=d.y+r.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+c.x,y:e.y*a.y-o.scrollTop*a.y+c.y}}function yy(t){return Array.from(t.getClientRects())}function Op(t){return Ln(zt(t)).left+ps(t).scrollLeft}function wy(t){const e=zt(t),r=ps(t),l=t.ownerDocument.body,i=bn(e.scrollWidth,e.clientWidth,l.scrollWidth,l.clientWidth),s=bn(e.scrollHeight,e.clientHeight,l.scrollHeight,l.clientHeight);let o=-r.scrollLeft+Op(t);const a=-r.scrollTop;return ut(l).direction==="rtl"&&(o+=bn(e.clientWidth,l.clientWidth)-i),{width:i,height:s,x:o,y:a}}function Cy(t,e){const r=Qe(t),l=zt(t),i=r.visualViewport;let s=l.clientWidth,o=l.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;const d=dc();(!d||d&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a,y:c}}function _y(t,e){const r=Ln(t,!0,e==="fixed"),l=r.top+t.clientTop,i=r.left+t.clientLeft,s=tt(t)?sr(t):dn(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,c=i*s.x,d=l*s.y;return{width:o,height:a,x:c,y:d}}function eu(t,e,r){let l;if(e==="viewport")l=Cy(t,r);else if(e==="document")l=wy(zt(t));else if(Re(e))l=_y(e,r);else{const i=Fp(t);l={...e,x:e.x-i.x,y:e.y-i.y}}return Mp(l)}function zp(t,e){const r=mr(t);return r===e||!Re(r)||fs(r)?!1:ut(r).position==="fixed"||zp(r,e)}function ky(t,e){const r=e.get(t);if(r)return r;let l=gl(t,[],!1).filter(a=>Re(a)&&cn(a)!=="body"),i=null;const s=ut(t).position==="fixed";let o=s?mr(t):t;for(;Re(o)&&!fs(o);){const a=ut(o),c=cc(o);!c&&a.position==="fixed"&&(i=null),(s?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Tl(o)&&!c&&zp(t,o))?l=l.filter(u=>u!==o):i=a,o=mr(o)}return e.set(t,l),l}function Ny(t){let{element:e,boundary:r,rootBoundary:l,strategy:i}=t;const o=[...r==="clippingAncestors"?ky(e,this._c):[].concat(r),l],a=o[0],c=o.reduce((d,u)=>{const h=eu(e,u,i);return d.top=bn(h.top,d.top),d.right=xr(h.right,d.right),d.bottom=xr(h.bottom,d.bottom),d.left=bn(h.left,d.left),d},eu(e,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function by(t){const{width:e,height:r}=Ip(t);return{width:e,height:r}}function Sy(t,e,r){const l=tt(e),i=zt(e),s=r==="fixed",o=Ln(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=dn(0);if(l||!l&&!s)if((cn(e)!=="body"||Tl(i))&&(a=ps(e)),l){const d=Ln(e,!0,s,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&(c.x=Op(i));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function tu(t,e){return!tt(t)||ut(t).position==="fixed"?null:e?e(t):t.offsetParent}function $p(t,e){const r=Qe(t);if(!tt(t))return r;let l=tu(t,e);for(;l&&ny(l)&&ut(l).position==="static";)l=tu(l,e);return l&&(cn(l)==="html"||cn(l)==="body"&&ut(l).position==="static"&&!cc(l))?r:l||ry(t)||r}const Ty=async function(t){let{reference:e,floating:r,strategy:l}=t;const i=this.getOffsetParent||$p,s=this.getDimensions;return{reference:Sy(e,await i(r),l),floating:{x:0,y:0,...await s(r)}}};function Ey(t){return ut(t).direction==="rtl"}const Ry={convertOffsetParentRelativeRectToViewportRelativeRect:vy,getDocumentElement:zt,getClippingRect:Ny,getOffsetParent:$p,getElementRects:Ty,getClientRects:yy,getDimensions:by,getScale:sr,isElement:Re,isRTL:Ey};function By(t,e){let r=null,l;const i=zt(t);function s(){clearTimeout(l),r&&r.disconnect(),r=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:d,top:u,width:h,height:x}=t.getBoundingClientRect();if(a||e(),!h||!x)return;const g=Yl(u),v=Yl(i.clientWidth-(d+h)),y=Yl(i.clientHeight-(u+x)),k=Yl(d),f={rootMargin:-g+"px "+-v+"px "+-y+"px "+-k+"px",threshold:bn(0,xr(1,c))||1};let j=!0;function w(_){const S=_[0].intersectionRatio;if(S!==c){if(!j)return o();S?o(!1,S):l=setTimeout(()=>{o(!1,1e-7)},100)}j=!1}try{r=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,f)}r.observe(t)}return o(!0),s}function xc(t,e,r,l){l===void 0&&(l={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=l,d=mc(t),u=i||s?[...d?gl(d):[],...gl(e)]:[];u.forEach(m=>{i&&m.addEventListener("scroll",r,{passive:!0}),s&&m.addEventListener("resize",r)});const h=d&&a?By(d,r):null;let x=-1,g=null;o&&(g=new ResizeObserver(m=>{let[f]=m;f&&f.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{g&&g.observe(e)})),r()}),d&&!c&&g.observe(d),g.observe(e));let v,y=c?Ln(t):null;c&&k();function k(){const m=Ln(t);y&&(m.x!==y.x||m.y!==y.y||m.width!==y.width||m.height!==y.height)&&r(),y=m,v=requestAnimationFrame(k)}return r(),()=>{u.forEach(m=>{i&&m.removeEventListener("scroll",r),s&&m.removeEventListener("resize",r)}),h&&h(),g&&g.disconnect(),g=null,c&&cancelAnimationFrame(v)}}const nu=my,Ly=(t,e,r)=>{const l=new Map,i={platform:Ry,...r},s={...i.platform,_c:l};return py(t,e,{...i,platform:s})},gc=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:l,padding:i}=typeof t=="function"?t(r):t;return l&&e(l)?l.current!=null?nu({element:l.current,padding:i}).fn(r):{}:l?nu({element:l,padding:i}).fn(r):{}}}};var ci=typeof document<"u"?p.useLayoutEffect:p.useEffect;function zi(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,l,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(l=r;l--!==0;)if(!zi(t[l],e[l]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(e).length)return!1;for(l=r;l--!==0;)if(!{}.hasOwnProperty.call(e,i[l]))return!1;for(l=r;l--!==0;){const s=i[l];if(!(s==="_owner"&&t.$$typeof)&&!zi(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Up(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function ru(t,e){const r=Up(t);return Math.round(e*r)/r}function lu(t){const e=p.useRef(t);return ci(()=>{e.current=t}),e}function Dy(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:l=[],platform:i,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[u,h]=p.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[x,g]=p.useState(l);zi(x,l)||g(l);const[v,y]=p.useState(null),[k,m]=p.useState(null),f=p.useCallback(W=>{W!=S.current&&(S.current=W,y(W))},[y]),j=p.useCallback(W=>{W!==T.current&&(T.current=W,m(W))},[m]),w=s||v,_=o||k,S=p.useRef(null),T=p.useRef(null),B=p.useRef(u),z=lu(c),I=lu(i),G=p.useCallback(()=>{if(!S.current||!T.current)return;const W={placement:e,strategy:r,middleware:x};I.current&&(W.platform=I.current),Ly(S.current,T.current,W).then(N=>{const C={...N,isPositioned:!0};te.current&&!zi(B.current,C)&&(B.current=C,bl.flushSync(()=>{h(C)}))})},[x,e,r,I]);ci(()=>{d===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,h(W=>({...W,isPositioned:!1})))},[d]);const te=p.useRef(!1);ci(()=>(te.current=!0,()=>{te.current=!1}),[]),ci(()=>{if(w&&(S.current=w),_&&(T.current=_),w&&_){if(z.current)return z.current(w,_,G);G()}},[w,_,G,z]);const ce=p.useMemo(()=>({reference:S,floating:T,setReference:f,setFloating:j}),[f,j]),U=p.useMemo(()=>({reference:w,floating:_}),[w,_]),H=p.useMemo(()=>{const W={position:r,left:0,top:0};if(!U.floating)return W;const N=ru(U.floating,u.x),C=ru(U.floating,u.y);return a?{...W,transform:"translate("+N+"px, "+C+"px)",...Up(U.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:C}},[r,a,U.floating,u.x,u.y]);return p.useMemo(()=>({...u,update:G,refs:ce,elements:U,floatingStyles:H}),[u,G,ce,U,H])}const Py=ta.useInsertionEffect,Ay=Py||(t=>t());function My(t){const e=p.useRef(()=>{});return Ay(()=>{e.current=t}),p.useCallback(function(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return e.current==null?void 0:e.current(...l)},[])}var jl=typeof document<"u"?p.useLayoutEffect:p.useEffect;let Qs=!1,Iy=0;const iu=()=>"floating-ui-"+Iy++;function Fy(){const[t,e]=p.useState(()=>Qs?iu():void 0);return jl(()=>{t==null&&e(iu())},[]),p.useEffect(()=>{Qs||(Qs=!0)},[]),t}const Oy=ta.useId,zy=Oy||Fy;function $y(){const t=new Map;return{emit(e,r){var l;(l=t.get(e))==null||l.forEach(i=>i(r))},on(e,r){t.set(e,[...t.get(e)||[],r])},off(e,r){var l;t.set(e,((l=t.get(e))==null?void 0:l.filter(i=>i!==r))||[])}}}const Uy=p.createContext(null),Hy=p.createContext(null),Hp=()=>{var t;return((t=p.useContext(Uy))==null?void 0:t.id)||null},Wp=()=>p.useContext(Hy);function Vp(t){return"data-floating-ui-"+t}function su(t){const e=p.useRef(t);return jl(()=>{e.current=t}),e}const ou=Vp("safe-polygon");function Ks(t,e,r){return r&&!Fi(r)?0:typeof t=="number"?t:t==null?void 0:t[e]}function Xp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,dataRef:i,events:s,elements:{domReference:o,floating:a},refs:c}=t,{enabled:d=!0,delay:u=0,handleClose:h=null,mouseOnly:x=!1,restMs:g=0,move:v=!0}=e,y=Wp(),k=Hp(),m=su(h),f=su(u),j=p.useRef(),w=p.useRef(),_=p.useRef(),S=p.useRef(),T=p.useRef(!0),B=p.useRef(!1),z=p.useRef(()=>{}),I=p.useCallback(()=>{var U;const H=(U=i.current.openEvent)==null?void 0:U.type;return(H==null?void 0:H.includes("mouse"))&&H!=="mousedown"},[i]);p.useEffect(()=>{if(!d)return;function U(H){let{open:W}=H;W||(clearTimeout(w.current),clearTimeout(S.current),T.current=!0)}return s.on("openchange",U),()=>{s.off("openchange",U)}},[d,s]),p.useEffect(()=>{if(!d||!m.current||!r)return;function U(W){I()&&l(!1,W,"hover")}const H=Ir(a).documentElement;return H.addEventListener("mouseleave",U),()=>{H.removeEventListener("mouseleave",U)}},[a,r,l,d,m,i,I]);const G=p.useCallback(function(U,H,W){H===void 0&&(H=!0),W===void 0&&(W="hover");const N=Ks(f.current,"close",j.current);N&&!_.current?(clearTimeout(w.current),w.current=setTimeout(()=>l(!1,U,W),N)):H&&(clearTimeout(w.current),l(!1,U,W))},[f,l]),te=p.useCallback(()=>{z.current(),_.current=void 0},[]),ce=p.useCallback(()=>{if(B.current){const U=Ir(c.floating.current).body;U.style.pointerEvents="",U.removeAttribute(ou),B.current=!1}},[c]);return p.useEffect(()=>{if(!d)return;function U(){return i.current.openEvent?["click","mousedown"].includes(i.current.openEvent.type):!1}function H(C){if(clearTimeout(w.current),T.current=!1,x&&!Fi(j.current)||g>0&&Ks(f.current,"open")===0)return;const R=Ks(f.current,"open",j.current);R?w.current=setTimeout(()=>{l(!0,C,"hover")},R):l(!0,C,"hover")}function W(C){if(U())return;z.current();const R=Ir(a);if(clearTimeout(S.current),m.current){r||clearTimeout(w.current),_.current=m.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),te(),G(C,!0,"safe-polygon")}});const $=_.current;R.addEventListener("mousemove",$),z.current=()=>{R.removeEventListener("mousemove",$)};return}(j.current==="touch"?!Yo(a,C.relatedTarget):!0)&&G(C)}function N(C){U()||m.current==null||m.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),te(),G(C)}})(C)}if(Re(o)){const C=o;return r&&C.addEventListener("mouseleave",N),a==null||a.addEventListener("mouseleave",N),v&&C.addEventListener("mousemove",H,{once:!0}),C.addEventListener("mouseenter",H),C.addEventListener("mouseleave",W),()=>{r&&C.removeEventListener("mouseleave",N),a==null||a.removeEventListener("mouseleave",N),v&&C.removeEventListener("mousemove",H),C.removeEventListener("mouseenter",H),C.removeEventListener("mouseleave",W)}}},[o,a,d,t,x,g,v,G,te,ce,l,r,y,f,m,i]),jl(()=>{var U;if(d&&r&&(U=m.current)!=null&&U.__options.blockPointerEvents&&I()){const W=Ir(a).body;if(W.setAttribute(ou,""),W.style.pointerEvents="none",B.current=!0,Re(o)&&a){var H;const N=o,C=y==null||(H=y.nodesRef.current.find(R=>R.id===k))==null||(H=H.context)==null?void 0:H.elements.floating;return C&&(C.style.pointerEvents=""),N.style.pointerEvents="auto",a.style.pointerEvents="auto",()=>{N.style.pointerEvents="",a.style.pointerEvents=""}}}},[d,r,k,a,o,y,m,i,I]),jl(()=>{r||(j.current=void 0,te(),ce())},[r,te,ce]),p.useEffect(()=>()=>{te(),clearTimeout(w.current),clearTimeout(S.current),ce()},[d,o,te,ce]),p.useMemo(()=>{if(!d)return{};function U(H){j.current=H.pointerType}return{reference:{onPointerDown:U,onPointerEnter:U,onMouseMove(H){r||g===0||(clearTimeout(S.current),S.current=setTimeout(()=>{T.current||l(!0,H.nativeEvent,"hover")},g))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(H){G(H.nativeEvent,!1)}}}},[d,g,r,l,G])}function au(t){return tt(t.target)&&t.target.tagName==="BUTTON"}function cu(t){return Lp(t)}function vl(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,dataRef:i,elements:{domReference:s}}=t,{enabled:o=!0,event:a="click",toggle:c=!0,ignoreMouse:d=!1,keyboardHandlers:u=!0}=e,h=p.useRef(),x=p.useRef(!1);return p.useMemo(()=>o?{reference:{onPointerDown(g){h.current=g.pointerType},onMouseDown(g){g.button===0&&(Fi(h.current,!0)&&d||a!=="click"&&(r&&c&&(!i.current.openEvent||i.current.openEvent.type==="mousedown")?l(!1,g.nativeEvent,"click"):(g.preventDefault(),l(!0,g.nativeEvent,"click"))))},onClick(g){if(a==="mousedown"&&h.current){h.current=void 0;return}Fi(h.current,!0)&&d||(r&&c&&(!i.current.openEvent||i.current.openEvent.type==="click")?l(!1,g.nativeEvent,"click"):l(!0,g.nativeEvent,"click"))},onKeyDown(g){h.current=void 0,!(g.defaultPrevented||!u||au(g))&&(g.key===" "&&!cu(s)&&(g.preventDefault(),x.current=!0),g.key==="Enter"&&l(!(r&&c),g.nativeEvent,"click"))},onKeyUp(g){g.defaultPrevented||!u||au(g)||cu(s)||g.key===" "&&x.current&&(x.current=!1,l(!(r&&c),g.nativeEvent,"click"))}}}:{},[o,i,a,d,u,s,c,r,l])}function jc(t){var e;t===void 0&&(t={});const{open:r=!1,onOpenChange:l,nodeId:i}=t,[s,o]=p.useState(null),a=((e=t.elements)==null?void 0:e.reference)||s,c=Dy(t),d=Wp(),u=Hp()!=null,h=My((_,S,T)=>{_&&(g.current.openEvent=S),v.emit("openchange",{open:_,event:S,reason:T,nested:u}),l==null||l(_,S,T)}),x=p.useRef(null),g=p.useRef({}),v=p.useState(()=>$y())[0],y=zy(),k=p.useCallback(_=>{const S=Re(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;c.refs.setReference(S)},[c.refs]),m=p.useCallback(_=>{(Re(_)||_===null)&&(x.current=_,o(_)),(Re(c.refs.reference.current)||c.refs.reference.current===null||_!==null&&!Re(_))&&c.refs.setReference(_)},[c.refs]),f=p.useMemo(()=>({...c.refs,setReference:m,setPositionReference:k,domReference:x}),[c.refs,m,k]),j=p.useMemo(()=>({...c.elements,domReference:a}),[c.elements,a]),w=p.useMemo(()=>({...c,refs:f,elements:j,dataRef:g,nodeId:i,floatingId:y,events:v,open:r,onOpenChange:h}),[c,i,y,v,r,h,f,j]);return jl(()=>{const _=d==null?void 0:d.nodesRef.current.find(S=>S.id===i);_&&(_.context=w)}),p.useMemo(()=>({...c,context:w,refs:f,elements:j}),[c,f,j,w])}function Gp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,events:i,refs:s,elements:{floating:o,domReference:a}}=t,{enabled:c=!0,visibleOnly:d=!0}=e,u=p.useRef(!1),h=p.useRef(),x=p.useRef(!0);return p.useEffect(()=>{if(!c)return;const g=Qe(a);function v(){!r&&tt(a)&&a===Zd(Ir(a))&&(u.current=!0)}function y(){x.current=!0}return g.addEventListener("blur",v),g.addEventListener("keydown",y,!0),()=>{g.removeEventListener("blur",v),g.removeEventListener("keydown",y,!0)}},[o,a,r,c]),p.useEffect(()=>{if(!c)return;function g(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(u.current=!0)}return i.on("openchange",g),()=>{i.off("openchange",g)}},[i,c]),p.useEffect(()=>()=>{clearTimeout(h.current)},[]),p.useMemo(()=>c?{reference:{onPointerDown(g){iy(g.nativeEvent)||(x.current=!1)},onMouseLeave(){u.current=!1},onFocus(g){if(u.current)return;const v=ay(g.nativeEvent);if(d&&Re(v))try{if(sy()&&oy())throw Error();if(!v.matches(":focus-visible"))return}catch{if(!x.current&&!Lp(v))return}l(!0,g.nativeEvent,"focus")},onBlur(g){u.current=!1;const v=g.relatedTarget,y=Re(v)&&v.hasAttribute(Vp("focus-guard"))&&v.getAttribute("data-type")==="outside";h.current=window.setTimeout(()=>{const k=Zd(a?a.ownerDocument:document);!v&&k===a||Yo(s.floating.current,v)||Yo(a,v)||y||l(!1,g.nativeEvent,"focus")})}}}:{},[c,d,a,s,l])}const du="active",uu="selected";function Ys(t,e,r){const l=new Map,i=r==="item";let s=t;if(i&&t){const{[du]:o,[uu]:a,...c}=t;s=c}return{...r==="floating"&&{tabIndex:-1},...s,...e.map(o=>{const a=o?o[r]:null;return typeof a=="function"?t?a(t):null:a}).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(c=>{let[d,u]=c;if(!(i&&[du,uu].includes(d)))if(d.indexOf("on")===0){if(l.has(d)||l.set(d,[]),typeof u=="function"){var h;(h=l.get(d))==null||h.push(u),o[d]=function(){for(var x,g=arguments.length,v=new Array(g),y=0;y<g;y++)v[y]=arguments[y];return(x=l.get(d))==null?void 0:x.map(k=>k(...v)).find(k=>k!==void 0)}}}else o[d]=u}),o),{})}}function vc(t){t===void 0&&(t=[]);const e=t,r=p.useCallback(s=>Ys(s,t,"reference"),e),l=p.useCallback(s=>Ys(s,t,"floating"),e),i=p.useCallback(s=>Ys(s,t,"item"),t.map(s=>s==null?void 0:s.item));return p.useMemo(()=>({getReferenceProps:r,getFloatingProps:l,getItemProps:i}),[r,l,i])}const Wy=(t,e)=>{const{style:r,className:l,placement:i,content:s,effect:o,getFloatingProps:a,children:c}=t;function d(){return typeof s=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:s})}):n.jsx(n.Fragment,{children:s})}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:r,className:F("el-popper",`is-${o}`,l),"data-popper-placement":i,...a(),children:[n.jsx(d,{}),c]})})},Qp=p.forwardRef(Wy);Qp.displayName="TooltipPopper";const Vy=t=>{var T,B;const{style:e,className:r,effect:l="dark",placement:i="bottom",trigger:s="hover",content:o,showAfter:a=0,hideAfter:c=200,disabled:d=!0,children:u}=t,[h,x]=p.useState(!1),g=p.useRef(null),{refs:v,floatingStyles:y,context:k,middlewareData:m}=jc({placement:i,middleware:[pc(12),gc({element:g})],open:h&&d,whileElementsMounted:xc,onOpenChange:x});let f={};switch(s){case"hover":f=Xp(k,{delay:{open:a,close:c}});break;case"click":f=vl(k);break;case"focus":f=Gp(k);break;case"contextmenu":f=vl(k,{event:"mousedown"});break}const{getReferenceProps:j,getFloatingProps:w}=vc([f]),_=p.cloneElement(p.Children.only(u),{ref:v.setReference,...j()}),S={...e,...y};return n.jsxs(n.Fragment,{children:[h&&bl.createPortal(n.jsx(Qp,{ref:v.setFloating,style:S,className:F(r),effect:l,placement:i,content:o,getFloatingProps:w,children:n.jsx("span",{ref:g,className:"el-popper__arrow",style:{position:"absolute",left:(T=m.arrow)==null?void 0:T.x,top:(B=m.arrow)==null?void 0:B.y}})}),document.body),_]})},_e=p.forwardRef(Vy);_e.displayName="Tooltip";const Xy=(t,e)=>{const{style:r,className:l,placement:i,title:s,content:o,getFloatingProps:a,children:c}=t;function d(){return typeof o=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:o})}):n.jsx(n.Fragment,{children:o})}const u={width:"200px",...r};return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:u,className:F("el-popper is-light el-popover el-popover--plain",l),"data-popper-placement":i,...a(),children:[n.jsx("div",{className:"el-popover__title",role:"title",children:s}),n.jsx(d,{}),c]})})},Kp=p.forwardRef(Xy);Kp.displayName="PopoverPopper";const Gy=t=>{var S,T;const{style:e,className:r,placement:l="bottom",trigger:i="hover",title:s,content:o,showAfter:a=0,hideAfter:c=200,children:d}=t,[u,h]=p.useState(!1),x=p.useRef(null),{refs:g,floatingStyles:v,context:y,middlewareData:k}=jc({placement:l,middleware:[pc(12),gc({element:x})],open:u,whileElementsMounted:xc,onOpenChange:h});let m={};switch(i){case"hover":m=Xp(y,{delay:{open:a,close:c}});break;case"click":m=vl(y);break;case"focus":m=Gp(y);break;case"contextmenu":m=vl(y,{event:"mousedown"});break}const{getReferenceProps:f,getFloatingProps:j}=vc([m]),w=p.cloneElement(p.Children.only(d),{ref:g.setReference,...f()}),_={...e,...v};return n.jsxs(n.Fragment,{children:[u&&bl.createPortal(n.jsx(Kp,{ref:g.setFloating,style:_,className:F(r),placement:l,title:s,content:o,getFloatingProps:j,children:n.jsx("span",{ref:x,className:"el-popper__arrow",style:{position:"absolute",left:(S=k.arrow)==null?void 0:S.x,top:(T=k.arrow)==null?void 0:T.y}})}),document.body),w]})},Fr=p.forwardRef(Gy);Fr.displayName="Popover";const Qy=(t,e)=>{const{style:r,className:l,percentage:i=0,format:s,status:o,textInside:a=!1,strokeWidth:c=6}=t;function d(){return a?s?n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsx("span",{children:s(i)})}):n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsxs("span",{children:[i,"%"]})}):n.jsx(n.Fragment,{})}function u(){if(!a)if(o){let h;switch(o){case"success":h=n.jsx(ac,{});break;case"warning":h=n.jsx(us,{});break;case"exception":h=n.jsx(Cr,{});break}return h}else return s?n.jsx("span",{children:s(i)}):n.jsxs("span",{children:[i,"%"]});return n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:F("el-progress el-progress--line",o?`is-${o}`:"",l),role:"progressbar",children:[n.jsx("div",{className:"el-progress-bar",children:n.jsx("div",{className:"el-progress-bar__outer",style:{height:`${c}px`},children:n.jsx("div",{className:"el-progress-bar__inner",style:{width:`${i}%`,animationDuration:"3s"},children:n.jsx(d,{})})})}),n.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:n.jsx(u,{})})]})},_t=p.forwardRef(Qy);_t.displayName="Progress";const Ky=(t,e)=>{const{style:r,className:l,placement:i,title:s,width:o,icon:a,iconColor:c,hideIcon:d,confirmButtonText:u,cancelButtonText:h,onConfirm:x,onCancel:g,getFloatingProps:v,children:y}=t,k={width:o?typeof o=="string"?o:`${o}px`:"150px",...r};function m(){return d?n.jsx(n.Fragment,{}):p.cloneElement(a,{className:F(a==null?void 0:a.props.className,"el-popconfirm__icon"),style:{color:c}})}function f(w){g&&(console.log(w),g(w))}function j(w){x&&x(w)}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:k,className:F("el-popper is-light el-popover",l),"data-popper-placement":i,...v(),children:[n.jsxs("div",{className:"el-popconfirm",children:[n.jsxs("div",{className:"el-popconfirm__main",children:[n.jsx(m,{}),s]}),n.jsxs("div",{className:"el-popconfirm__action",children:[n.jsx(b,{onClick:f,children:h}),n.jsx(b,{type:"primary",onClick:j,children:u})]})]}),y]})})},Yp=p.forwardRef(Ky);Yp.displayName="PopconfirmPopper";const Yy=t=>{var I,G;const{style:e,className:r,placement:l="bottom",title:i,width:s=150,icon:o=n.jsx(bp,{}),iconColor:a="#f90",hideIcon:c=!1,confirmButtonText:d="Yes",cancelButtonText:u="No",onConfirm:h,onCancel:x,children:g}=t,[v,y]=p.useState(!1),k=p.useRef(null),{refs:m,floatingStyles:f,context:j,middlewareData:w}=jc({placement:l,middleware:[pc(12),gc({element:k})],open:v,whileElementsMounted:xc,onOpenChange:y}),_=vl(j),{getReferenceProps:S,getFloatingProps:T}=vc([_]),B=p.cloneElement(p.Children.only(g),{ref:m.setReference,...S()}),z={...e,...f};return n.jsxs(n.Fragment,{children:[v&&bl.createPortal(n.jsx(Yp,{ref:m.setFloating,style:z,className:F(r),placement:l,title:i,width:s,icon:o,iconColor:a,hideIcon:c,confirmButtonText:d,cancelButtonText:u,onConfirm:h,onCancel:x,getFloatingProps:T,children:n.jsx("span",{ref:k,className:"el-popper__arrow",style:{position:"absolute",left:(I=w.arrow)==null?void 0:I.x,top:(G=w.arrow)==null?void 0:G.y}})}),document.body),B]})},ms=p.forwardRef(Yy);ms.displayName="Popconfirm";const Zy=(t,e)=>{const{style:r,className:l,type:i="",closable:s=!1,size:o="",effect:a="light",round:c=!1,children:d}=t;function u(){return s?n.jsx(an,{className:"el-tag__close"}):n.jsx(n.Fragment,{})}return n.jsxs("span",{ref:e,style:r,className:F("el-tag el-tag--light",i?`el-tag--${i}`:"",o?`el-tag--${o}`:"",a?`el-tag--${a}`:"",c?"is-round":"",l),children:[n.jsx("span",{className:"el-tag__content",children:d}),n.jsx(u,{})]})},xe=p.forwardRef(Zy);xe.displayName="Tag";const Jy=(t,e)=>{const{style:r,className:l,open:i=!1,width:s="50%",title:o,footer:a,onClose:c,showClose:d=!0,header:u,children:h}=t,x={zIndex:2015,...r,display:i?"":"none"};function g(){return u?n.jsx(n.Fragment,{children:u}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-dialog__title",children:o})})}return n.jsx("div",{ref:e,style:x,className:F("el-overlay",l),children:n.jsx("div",{role:"dialog",className:"el-overlay-dialog",children:n.jsxs("div",{className:"el-dialog",style:{"--el-dialog-width":s},children:[n.jsxs("header",{className:"el-dialog__header",children:[n.jsx(g,{}),d&&n.jsx("button",{"aria-label":"Close this dialog",className:"el-dialog__headerbtn",type:"button",onClick:c,children:n.jsx(an,{className:"el-dialog__close"})})]}),n.jsx("div",{id:"el-id-9273-97",className:"el-dialog__body",children:h}),n.jsx("footer",{className:"el-dialog__footer",children:a})]})})})},yl=p.forwardRef(Jy);yl.displayName="Dialog";const qy=(t,e)=>{const{style:r,className:l,open:i=!1,direction:s="rtl",title:o,onClose:a,header:c,footer:d,withHeader:u=!0,size:h="30%",showClose:x=!0,children:g}=t,v={...r,display:i?"":"none"};function y(){return c?n.jsx(n.Fragment,{children:c}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-drawer__title",children:o})})}return n.jsx("div",{ref:e,style:v,className:F("el-overlay",l),children:n.jsxs("div",{className:F("el-drawer open",s),role:"dialog",style:{width:["ltr","rtl"].includes(s)?h:"",height:["ttb","btt"].includes(s)?h:""},children:[n.jsx("span",{className:"el-drawer__sr-focus"}),u&&n.jsxs("header",{className:"el-drawer__header",children:[n.jsx(y,{}),x&&n.jsx("button",{className:"el-drawer__close-btn",type:"button",onClick:a,children:n.jsx(an,{className:"el-drawer__close"})})]}),n.jsx("div",{className:"el-drawer__body",children:g}),d&&n.jsx("div",{className:"el-drawer__footer",children:d})]})})},Dn=p.forwardRef(qy);Dn.displayName="DrawerComponent";const e2=(t,e)=>{const{style:r,className:l,columns:i,data:s,stripe:o=!1,border:a=!1}=t,c={...r,width:"100%"},d=i==null?void 0:i.map(x=>n.jsx("col",{width:x.width})),u=i==null?void 0:i.map(x=>n.jsx("th",{className:"is-leaf el-table__cell",colSpan:1,rowSpan:1,children:n.jsx("div",{className:"cell",children:x.label})})),h=s==null?void 0:s.map((x,g)=>n.jsx("tr",{className:F("el-table__row",{"el-table__row--striped":g%2===1}),children:i==null?void 0:i.map(v=>n.jsx("td",{className:"el-table__cell",rowSpan:1,colSpan:1,children:n.jsx("div",{className:"cell",children:x[v.dataIndex]})}))}));return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:c,className:F("el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none",l,{"el-table--striped":o,"el-table--border":a}),children:[n.jsxs("div",{className:"el-table__inner-wrapper",children:[n.jsxs("div",{className:"hidden-columns",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("div",{className:"el-table__header-wrapper",children:n.jsxs("table",{className:"el-table__header",border:0,cellPadding:"0",cellSpacing:"0",style:{width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("thead",{className:"",children:n.jsx("tr",{className:"",children:u})})]})}),n.jsx("div",{className:"el-table__body-wrapper",children:n.jsxs("div",{className:"el-scrollbar",children:[n.jsx("div",{className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",children:n.jsx("div",{className:"el-scrollbar__view",style:{display:"inline-block",verticalAlign:"middle"},children:n.jsxs("table",{className:"el-table__body",cellSpacing:"0",cellPadding:"0",border:0,style:{tableLayout:"fixed",width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("tbody",{children:h})]})})}),n.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),n.jsx("div",{className:"el-scrollbar__bar is-vertical",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateY(0%)"}})})]})})]}),n.jsx("div",{className:"el-table__column-resize-proxy",style:{display:"none"}})]})})},xs=p.forwardRef(e2);xs.displayName="TableComponent";function t2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{children:"Default"}),n.jsx(b,{type:"primary",children:"Primary"}),n.jsx(b,{type:"success",children:"Success"}),n.jsx(b,{type:"info",children:"Info"}),n.jsx(b,{type:"warning",children:"Warning"}),n.jsx(b,{type:"danger",children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{plain:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{round:!0,children:"Round"}),n.jsx(b,{type:"primary",round:!0,children:"Primary"}),n.jsx(b,{type:"success",round:!0,children:"Success"}),n.jsx(b,{type:"info",round:!0,children:"Info"}),n.jsx(b,{type:"warning",round:!0,children:"Warning"}),n.jsx(b,{type:"danger",round:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{icon:n.jsx(qa,{}),circle:!0}),n.jsx(b,{type:"primary",icon:n.jsx(cs,{}),circle:!0}),n.jsx(b,{type:"success",icon:n.jsx(xl,{}),circle:!0}),n.jsx(b,{type:"info",icon:n.jsx(ec,{}),circle:!0}),n.jsx(b,{type:"warning",icon:n.jsx(tc,{}),circle:!0}),n.jsx(b,{type:"danger",icon:n.jsx(nc,{}),circle:!0})]})]})}function n2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",disabled:!0,children:"Success"}),n.jsx(b,{type:"info",disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",disabled:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{plain:!0,disabled:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,disabled:!0,children:"Danger"})]})]})}function r2(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic link button"}),n.jsx(b,{link:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,children:"Danger"}),n.jsx("p",{children:"Disabled link button"}),n.jsx(b,{link:!0,disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,disabled:!0,children:"Danger"})]})}function l2(){const t=[{type:"",text:"plain"},{type:"primary",text:"primary"},{type:"success",text:"success"},{type:"info",text:"info"},{type:"warning",text:"warning"},{type:"danger",text:"danger"}],e=t.map(i=>n.jsx(b,{type:i.type,text:!0,children:i.text})),r=t.map(i=>n.jsx(b,{type:i.type,text:!0,bg:!0,children:i.text})),l=t.map(i=>n.jsx(b,{type:i.type,text:!0,disabled:!0,children:i.text}));return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic text button"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:e}),n.jsx("p",{children:"Background color always on"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:r}),n.jsx("p",{children:"Disabled text button"}),n.jsx("div",{className:"flex justify-space-between flex-wrap gap-4",children:l})]})}function hu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Button 按钮"}),`
`,`
`,n.jsx(e.p,{children:"常用的操作按钮。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"type"}),"、",n.jsx(e.code,{children:"plain"}),"、",n.jsx(e.code,{children:"round"})," 和 ",n.jsx(e.code,{children:"circle"})," 来定义按钮的样式。"]}),`
`,n.jsx(L,{name:"ButtonBasic",children:n.jsx(t2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.code,{children:"disabled"})," 属性来定义按钮是否被禁用。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"disabled"})," 属性来控制按钮是否为禁用状态。 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"})," 类型的值。"]}),`
`,n.jsx(L,{name:"ButtonDisabled",children:n.jsx(n2,{})}),`
`,n.jsx(e.h2,{children:"链接按钮"}),`
`,n.jsx(L,{name:"ButtonLink",children:n.jsx(r2,{})}),`
`,n.jsx(e.h2,{children:"文字按钮"}),`
`,n.jsx(e.p,{children:"没有边框和背景色的按钮。"}),`
`,n.jsx(L,{name:"ButtonText",children:n.jsx(l2,{})}),`
`,n.jsx(e.h2,{children:"Button API"}),`
`,n.jsx(e.h3,{children:"Button Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' 'success' 'warning' 'danger' 'info' 'text'(delete)"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"plain"}),n.jsx(e.td,{children:"是否为朴素按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"text"}),n.jsx(e.td,{children:"是否为文字按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"bg"}),n.jsx(e.td,{children:"是否显示文字按钮背景颜色"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:"是否为链接按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"是否为圆角按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"circle"}),n.jsx(e.td,{children:"是否为圆形按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"按钮是否为禁用状态"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function i2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(hu,{...t})}):hu(t)}function s2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(Fn,{children:"Header"}),n.jsx(mn,{children:"Main"})]})})})}function o2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(Fn,{children:"Header"}),n.jsx(mn,{children:"Main"}),n.jsx(hs,{children:"Footer"})]})})})}function a2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsx(mn,{children:"Main"})]})})})}function c2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(Fn,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsx(mn,{children:"Main"})]})]})})})}function d2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(Fn,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(mn,{children:"Main"}),n.jsx(hs,{children:"Footer"})]})]})]})})})}function u2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(Fn,{children:"Header"}),n.jsx(mn,{children:"Main"})]})]})})})}function h2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(Fn,{children:"Header"}),n.jsx(mn,{children:"Main"}),n.jsx(hs,{children:"Footer"})]})]})})})}function fu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(L,{name:"ContainerBasic",children:n.jsx(s2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(L,{name:"ContainerBasic1",children:n.jsx(o2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(L,{name:"ContainerBasic2",children:n.jsx(a2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(L,{name:"ContainerBasic3",children:n.jsx(c2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(L,{name:"ContainerBasic4",children:n.jsx(d2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(L,{name:"ContainerBasic5",children:n.jsx(u2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(L,{name:"ContainerBasic6",children:n.jsx(h2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]})]})}function f2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fu,{...t})}):fu(t)}function p2(){return n.jsxs(n.Fragment,{children:[n.jsx(cs,{style:{fontSize:"20px"}}),n.jsx(qa,{style:{fontSize:"20px"}}),n.jsx(xl,{style:{fontSize:"20px"}}),n.jsx(ec,{style:{fontSize:"20px"}}),n.jsx(tc,{style:{fontSize:"20px"}}),n.jsx(nc,{style:{fontSize:"20px"}}),n.jsx(ds,{style:{fontSize:"20px"}}),n.jsx(rc,{style:{fontSize:"20px"}}),n.jsx(lc,{style:{fontSize:"20px"}}),n.jsx(ic,{style:{fontSize:"20px"}}),n.jsx(Sl,{style:{fontSize:"20px"}}),n.jsx(us,{style:{fontSize:"20px"}}),n.jsx(Cr,{style:{fontSize:"20px"}}),n.jsx(sc,{style:{fontSize:"20px"}}),n.jsx(oc,{style:{fontSize:"20px"}}),n.jsx(ac,{style:{fontSize:"20px"}}),n.jsx(an,{style:{fontSize:"20px"}})]})}function pu(t){const e={h1:"h1",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Icon"}),`
`,`
`,n.jsx(L,{name:"IconBasic",children:n.jsx(p2,{})})]})}function m2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pu,{...t})}):pu(t)}function x2(){return n.jsxs(n.Fragment,{children:[n.jsx(ie,{children:n.jsx(M,{span:24,children:n.jsx("div",{className:"grid-content ep-bg-purple-dark"})})}),n.jsxs(ie,{children:[n.jsx(M,{span:12,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:12,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(ie,{children:[n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]})]}),n.jsxs(ie,{children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(ie,{children:[n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]})]})}function g2(){return n.jsx(n.Fragment,{children:n.jsxs(ie,{gutter:20,children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})})}function j2(){return n.jsxs(n.Fragment,{children:[n.jsxs(ie,{gutter:20,children:[n.jsx(M,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{gutter:20,children:[n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{gutter:20,children:[n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function v2(){return n.jsxs(n.Fragment,{children:[n.jsxs(ie,{gutter:20,children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{gutter:20,children:[n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsx(ie,{gutter:20,children:n.jsx(M,{span:12,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})})]})}function y2(){return n.jsxs(n.Fragment,{children:[n.jsxs(ie,{className:"row-bg",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{className:"row-bg",justify:"center",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{className:"row-bg",justify:"end",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{className:"row-bg",justify:"space-between",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{className:"row-bg",justify:"space-around",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ie,{className:"row-bg",justify:"space-evenly",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function w2(){return n.jsx(n.Fragment,{children:n.jsxs(ie,{gutter:10,children:[n.jsx(M,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})})]})})}function mu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Layout 布局"}),`
`,`
`,n.jsx(e.p,{children:"通过基础的 24 分栏，迅速简便地创建布局。"}),`
`,n.jsx(e.h2,{children:"基础布局"}),`
`,n.jsx(e.p,{children:"使用列创建基础网格布局。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"Row"})," 和 ",n.jsx(e.code,{children:"Col"})," 组件，并通过 col 组件的 ",n.jsx(e.code,{children:"Span"})," 属性我们就可以自由地组合布局。"]}),`
`,n.jsx(L,{name:"LayoutBasic",children:n.jsx(x2,{})}),`
`,n.jsx(e.h2,{children:"分栏间隔"}),`
`,n.jsx(e.p,{children:"支持列间距。"}),`
`,n.jsx(e.p,{children:"行提供 gutter 属性来指定列之间的间距，其默认值为0。"}),`
`,n.jsx(L,{name:"LayoutGutter",children:n.jsx(g2,{})}),`
`,n.jsx(e.h2,{children:"混合布局"}),`
`,n.jsx(e.p,{children:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}),`
`,n.jsx(L,{name:"LayoutMix",children:n.jsx(j2,{})}),`
`,n.jsx(e.h2,{children:"列偏移"}),`
`,n.jsx(e.p,{children:"您可以指定列偏移量。"}),`
`,n.jsxs(e.p,{children:["通过制定 col 组件的 ",n.jsx(e.code,{children:"offset"})," 属性可以指定分栏偏移的栏数。"]}),`
`,n.jsx(L,{name:"LayoutOffset",children:n.jsx(v2,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"默认使用 flex 布局来对分栏进行灵活的对齐。"}),`
`,n.jsxs(e.p,{children:["您可以通过 ",n.jsx(e.code,{children:"justify"})," 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。"]}),`
`,n.jsx(L,{name:"LayoutJustify",children:n.jsx(y2,{})}),`
`,n.jsx(e.h2,{children:"响应式布局"}),`
`,n.jsx(e.p,{children:"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"}),`
`,n.jsx(L,{name:"LayoutBootstrap",children:n.jsx(w2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"span"}),n.jsx(e.td,{children:"栅格占据的列数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"offset"}),n.jsx(e.td,{children:"栅格左侧的间隔格数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xs"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"sm"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"md"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥992px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lg"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1200px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xl"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1920px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function C2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(mu,{...t})}):mu(t)}function _2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(Ee,{type:"primary",children:"primary"}),n.jsx(Ee,{type:"success",children:"success"}),n.jsx(Ee,{type:"warning",children:"warning"}),n.jsx(Ee,{type:"danger",children:"danger"}),n.jsx(Ee,{type:"info",children:"info"})]})})}function k2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{disabled:!0,children:"default"}),n.jsx(Ee,{type:"primary",disabled:!0,children:"primary"}),n.jsx(Ee,{type:"success",disabled:!0,children:"success"}),n.jsx(Ee,{type:"warning",disabled:!0,children:"warning"}),n.jsx(Ee,{type:"danger",disabled:!0,children:"danger"}),n.jsx(Ee,{type:"info",disabled:!0,children:"info"})]})})}function N2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{underline:!1,children:"Without Underline"}),n.jsx(Ee,{children:"With Underline"})]})})}function b2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{icon:n.jsx(cs,{}),children:"Edit"}),n.jsxs(Ee,{children:["Check",n.jsx(ds,{className:"el-icon--right"})]})]})})}function xu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(L,{name:"LinkBasic",children:n.jsx(_2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(L,{name:"LinkDisabled",children:n.jsx(k2,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(L,{name:"LinkUnderline",children:n.jsx(N2,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(L,{name:"LinkIcon",children:n.jsx(b2,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]})]})}function S2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xu,{...t})}):xu(t)}function T2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",type:"primary",children:"Primary"}),n.jsx(Ye,{className:"mx-1",type:"success",children:"Success"}),n.jsx(Ye,{className:"mx-1",type:"info",children:"Info"}),n.jsx(Ye,{className:"mx-1",type:"warning",children:"Warning"}),n.jsx(Ye,{className:"mx-1",type:"danger",children:"Danger"})]})})}function E2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",size:"large",children:"Large"}),n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",size:"small",children:"Small"})]})})}function R2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),n.jsx(ie,{className:"w-150px mb-2",children:n.jsx(Ye,{truncated:!0,children:"Squeezed by parent element"})}),n.jsxs(Ye,{lineClamp:2,children:["The -webkit-line-clamp CSS property",n.jsx("br",{}),"allows limiting of the contents of",n.jsx("br",{}),"a block to the specified number of lines."]})]})})}function gu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Text"}),`
`,`
`,n.jsx(e.p,{children:"文本的常见操作"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,n.jsx(L,{name:"TextBasic",children:n.jsx(T2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"})]}),`
`,n.jsx(L,{name:"TextSize",children:n.jsx(E2,{})}),`
`,n.jsx(e.h2,{children:"省略"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",n.jsx(e.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,n.jsx(L,{name:"TextTruncated",children:n.jsx(R2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"大小"}),n.jsx(e.td,{children:"'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"truncated"}),n.jsx(e.td,{children:"显示省略号"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lineClamp"}),n.jsx(e.td,{children:"最大行数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function B2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gu,{...t})}):gu(t)}function L2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}})]})}function D2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,size:"large",activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,size:"small",activeText:"Open",inactiveText:"Close"})]})}function P2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,className:"mb-2",activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mb-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,inlinePrompt:!0,activeText:"是",inactiveText:"否"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Y",inactiveText:"N"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",width:60,inlinePrompt:!0,activeText:"超出省略",inactiveText:"超出省略"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"完整展示多个内容",inactiveText:"多个内容"})]})}function A2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeIcon:n.jsx(xl,{}),inactiveIcon:n.jsx(an,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mt-2",style:{marginLeft:"24px"},inlinePrompt:!0,activeIcon:n.jsx(xl,{className:"is-icon"}),inactiveIcon:n.jsx(an,{className:"is-icon"})})]})}function M2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,disabled:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2"})]})}function I2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,loading:!0}),n.jsx(me,{loading:!0,className:"ml-2"})]})}function F2(){const[t,e]=p.useState(!1),[r,l]=p.useState(!1);function i(){return e(!0),new Promise(o=>{setTimeout(()=>(e(!1),console.log("Switch success"),o(!0)),1e3)})}function s(){return l(!0),new Promise((o,a)=>{setTimeout(()=>(l(!1),console.log("Switch failed"),a(new Error("Error"))),1e3)})}return n.jsxs(n.Fragment,{children:[n.jsx(me,{loading:t,beforeChange:i}),n.jsx(me,{className:"ml-2",loading:r,beforeChange:s})]})}function O2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(ds,{}),inactiveActionIcon:n.jsx(ic,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-active-action",children:"T"})}),inactiveActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-inactive-action",children:"F"})})})]})}function ju(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Switch 开关"}),`
`,`
`,n.jsx(e.p,{children:"表示两种相互对立的状态间的切换，多用于触发「开/关」。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。"}),`
`,n.jsx(L,{name:"SwitchBasic",children:n.jsx(L2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsx(L,{name:"SwitchSize",children:n.jsx(D2,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制文本是否显示在点内。"]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。"]}),`
`,n.jsx(L,{name:"SwitchText",children:n.jsx(P2,{})}),`
`,n.jsx(e.h2,{children:"显示自定义图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-icon"})," 和 ",n.jsx(e.code,{children:"active-icon"})," 属性来添加图标。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制图标显示在点内。"]}),`
`,n.jsx(L,{name:"SwitchIcon",children:n.jsx(A2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"disabled"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即可禁用。"]}),`
`,n.jsx(L,{name:"SwitchDisabled",children:n.jsx(M2,{})}),`
`,n.jsx(e.h2,{children:"加载状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"loading"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即加载中状态。"]}),`
`,n.jsx(L,{name:"SwitchLoading",children:n.jsx(I2,{})}),`
`,n.jsx(e.h2,{children:"阻止切换"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"beforeChange"}),"属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"]}),`
`,n.jsx(L,{name:"SwitchBeforeChange",children:n.jsx(F2,{})}),`
`,n.jsx(e.h2,{children:"自定义动作图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-action-icon"})," 和 ",n.jsx(e.code,{children:"active-action-icon"})," 属性来添加图标。"]}),`
`,n.jsx(L,{name:"SwitchActionIcon",children:n.jsx(O2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"defaultChecked"}),n.jsx(e.td,{children:"初始是否选中"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"switch 的大小"}),n.jsx(e.td,{children:"'large' / 'small'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"switch 的宽度"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inlinePrompt"}),n.jsx(e.td,{children:"无论图标或文本是否显示在点内，只会呈现文本的第一个字符"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeIcon"}),n.jsx(e.td,{children:"switch 状态为 on 时所显示图标，设置此项会忽略 activeText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveIcon"}),n.jsx(e.td,{children:"switch 状态为 off 时所显示图标，设置此项会忽略 inactiveText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeActionIcon"}),n.jsx(e.td,{children:"on状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveActionIcon"}),n.jsx(e.td,{children:"off状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeText"}),n.jsx(e.td,{children:"switch 打开时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveText"}),n.jsx(e.td,{children:"switch 的状态为 off 时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"beforeChange"}),n.jsx(e.td,{children:"switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"}),n.jsx(e.td,{children:"boolean / Function"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function z2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ju,{...t})}):ju(t)}function $2(){const t="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",e="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",r=["small","","large"],l=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{size:s,src:t})},o)),i=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:s,src:e})},o));return n.jsx(n.Fragment,{children:n.jsxs(ie,{className:"common-avatar",children:[n.jsxs(M,{span:12,children:[n.jsx("div",{className:"sub-title",children:"circle"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{size:50,src:t})}),l]})]}),n.jsxs(M,{span:12,children:[n.jsx("div",{className:"sub-title",children:"square"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:50,src:e})}),i]})]})]})})}function U2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-avatar",children:[n.jsx("div",{children:n.jsx(kt,{icon:n.jsx(Np,{})})}),n.jsx("div",{children:n.jsx(kt,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})}),n.jsx("div",{children:n.jsx(kt,{children:" user "})})]})})}function H2(){function t(){console.log("error")}return n.jsx(n.Fragment,{children:n.jsx("div",{className:"demo-type",children:n.jsx(kt,{size:60,src:"https://empty",onError:t,children:n.jsx("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"})})})})}function W2(){const t=["fill","contain","cover","none","scale-down"],e="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",r=t.map((l,i)=>n.jsxs("div",{className:"block",children:[n.jsx("span",{className:"title",children:l}),n.jsx(kt,{shape:"square",size:100,fit:l,src:e})]},i));return n.jsx(n.Fragment,{children:n.jsx("div",{className:"avatar-fit",children:r})})}function vu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Avatar 头像"}),`
`,`
`,n.jsx(e.p,{children:"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"shape"})," 和 ",n.jsx(e.code,{children:"size"})," 属性来设置 Avatar 的形状和大小。"]}),`
`,n.jsx(L,{name:"AvatarBasic",children:n.jsx($2,{})}),`
`,n.jsx(e.h2,{children:"展示类型"}),`
`,n.jsx(e.p,{children:"支持使用图片，图标或者文字作为 Avatar。"}),`
`,n.jsx(L,{name:"AvatarType",children:n.jsx(U2,{})}),`
`,n.jsx(e.h2,{children:"回退行为"}),`
`,n.jsx(e.p,{children:"图片加载失败时的回退行为。"}),`
`,n.jsx(L,{name:"AvatarError",children:n.jsx(H2,{})}),`
`,n.jsx(e.h2,{children:"适应容器"}),`
`,n.jsx(e.p,{children:"当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致"}),`
`,n.jsx(L,{name:"AvatarFit",children:n.jsx(W2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"设置 Avatar 的图标类型，具体参考 Icon 组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Avatar 大小"}),n.jsx(e.td,{children:"number / 'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"shape"}),n.jsx(e.td,{children:"Avatar 形状"}),n.jsx(e.td,{children:"'circle' / 'square'"}),n.jsx(e.td,{children:"circle"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"Avatar 图片的源地址"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"fit"}),n.jsx(e.td,{children:"当展示类型为图片的时候，设置图片如何适应容器"}),n.jsx(e.td,{children:"'fill' / 'contain' / 'cover' / 'none' / 'scale-down'"}),n.jsx(e.td,{children:"cover"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"error"}),n.jsx(e.td,{children:"图片加载失败时触发"}),n.jsx(e.td,{children:"() => void"})]})})]})]})}function V2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vu,{...t})}):vu(t)}function X2(){return n.jsx(n.Fragment,{children:n.jsxs(Tp,{children:[n.jsxs(Mr,{title:"Consistency",name:"1",children:[n.jsx("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),n.jsx("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]}),n.jsxs(Mr,{title:"Feedback",name:"2",children:[n.jsx("div",{children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"}),n.jsx("div",{children:"Visual feedback: reflect current state by updating or rearranging elements of the page."})]}),n.jsxs(Mr,{title:"Efficiency",name:"3",children:[n.jsx("div",{children:"Simplify the process: keep operating process simple and intuitive;"}),n.jsx("div",{children:"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"}),n.jsx("div",{children:"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."})]}),n.jsxs(Mr,{title:"Controllability",name:"4",children:[n.jsx("div",{children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"}),n.jsx("div",{children:"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})]})})}function yu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Collapse 折叠面板"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可同时展开多个面板，面板之间不影响"}),`
`,n.jsx(L,{name:"CollapseBasic",children:n.jsx(X2,{})})]})}function G2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yu,{...t})}):yu(t)}function Q2(){function t(e){return e===100?"Full":`${e}%`}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(_t,{percentage:50}),n.jsx(_t,{percentage:100,format:t}),n.jsx(_t,{percentage:100,status:"success"}),n.jsx(_t,{percentage:100,status:"warning"}),n.jsx(_t,{percentage:50,status:"exception"})]})})}function K2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(_t,{textInside:!0,strokeWidth:26,percentage:70}),n.jsx(_t,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),n.jsx(_t,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),n.jsx(_t,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function wu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Progress 进度条"}),`
`,`
`,n.jsx(e.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,n.jsx(e.h2,{children:"直线进度条"}),`
`,n.jsxs(e.p,{children:["Progress 组件设置 ",n.jsx(e.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",n.jsx(e.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",n.jsx(e.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,n.jsx(L,{name:"ProgressBasic",children:n.jsx(Q2,{})}),`
`,n.jsx(e.h2,{children:"进度条内显示百分比标识"}),`
`,n.jsx(e.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,n.jsxs(e.p,{children:["Progress 组件可通过 ",n.jsx(e.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",n.jsx(e.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,n.jsx(L,{name:"ProgressTextInside",children:n.jsx(K2,{})})]})}function Y2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wu,{...t})}):wu(t)}function Z2(){return n.jsx(n.Fragment,{children:n.jsxs(ie,{children:[n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"success",title:"Success Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"warning",title:"Warning Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"error",title:"Error Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"info",title:"Info Tip",subTitle:n.jsx("p",{children:"Using slot as subtitle"}),extra:n.jsx(b,{type:"primary",children:"Back"})})})]})})}function J2(){return n.jsx(n.Fragment,{children:n.jsx(qn,{icon:n.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),title:"404",subTitle:"Sorry, request error",extra:n.jsx(b,{type:"primary",children:"Back"})})})}function Cu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Result 结果"}),`
`,`
`,n.jsx(e.p,{children:"用于对用户的操作结果或者异常状态做反馈。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(L,{name:"ResultBasic",children:n.jsx(Z2,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(L,{name:"ResultIcon",children:n.jsx(J2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"result 组件的图标类型"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error' / ReactNode"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"result 组件的标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"subTitle"}),n.jsx(e.td,{children:"result 组件的副标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"extra"}),n.jsx(e.td,{children:"内容额外区域的内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"ReactNode"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function q2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cu,{...t})}):Cu(t)}function ew(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(xs,{columns:t,data:e})})}function tw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(xs,{columns:t,data:e,stripe:!0})})}function nw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(xs,{columns:t,data:e,border:!0})})}function _u(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Table 表格"}),`
`,`
`,n.jsx(e.p,{children:"用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。"}),`
`,n.jsx(e.h2,{children:"基础表格"}),`
`,n.jsx(e.p,{children:"基础的表格展示用法。"}),`
`,n.jsx(L,{name:"TableBasic",children:n.jsx(ew,{})}),`
`,n.jsx(e.h2,{children:"带斑马纹表格"}),`
`,n.jsx(e.p,{children:"使用带斑马纹的表格，可以更容易区分出不同行的数据。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"stripe"})," 可以创建带斑马纹的表格。 如果 ",n.jsx(e.code,{children:"true"}),", 表格将会带有斑马纹。"]}),`
`,n.jsx(L,{name:"TableStripe",children:n.jsx(tw,{})}),`
`,n.jsx(e.h2,{children:"带边框表格"}),`
`,n.jsxs(e.p,{children:["默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 ",n.jsx(e.code,{children:"border"})," 属性，把该属性设置为 ",n.jsx(e.code,{children:"true"})," 即可启用。"]}),`
`,n.jsx(L,{name:"TableBorder",children:n.jsx(nw,{})}),`
`,n.jsx(e.h2,{children:"Table 属性"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"columns"}),n.jsx(e.td,{children:"表格列的配置描述"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"data"}),n.jsx(e.td,{children:"显示的数据"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"stripe"}),n.jsx(e.td,{children:"是否为斑马纹 table"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border"}),n.jsx(e.td,{children:"是否带有纵向边框"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function rw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_u,{...t})}):_u(t)}function lw(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{children:"Tag 1"}),n.jsx(xe,{className:"ml-2",type:"success",children:"Tag 2"}),n.jsx(xe,{className:"ml-2",type:"info",children:"Tag 3"}),n.jsx(xe,{className:"ml-2",type:"warning",children:"Tag 4"}),n.jsx(xe,{className:"ml-2",type:"danger",children:"Tag 5"})]})}function iw(){const t=[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}].map(e=>n.jsx(xe,{className:"mx-1",closable:!0,type:e.type,children:e.name}));return n.jsx(n.Fragment,{children:t})}function sw(){return n.jsxs(n.Fragment,{children:[n.jsxs(ie,{children:[n.jsx(xe,{className:"mx-1",size:"large",children:"Large"}),n.jsx(xe,{className:"mx-1",children:"Default"}),n.jsx(xe,{className:"mx-1",size:"small",children:"Small"})]}),n.jsxs(ie,{className:"mt-4",children:[n.jsx(xe,{className:"mx-1",size:"large",closable:!0,children:"Large"}),n.jsx(xe,{className:"mx-1",closable:!0,children:"Default"}),n.jsx(xe,{className:"mx-1",size:"small",closable:!0,children:"Small"})]})]})}function ow(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"dark",children:a.label})),r=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"dark",closable:!0,children:a.label})),l=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"light",children:a.label})),i=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"light",closable:!0,children:a.label})),s=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"plain",children:a.label})),o=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"plain",closable:!0,children:a.label}));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1 line-height-2",children:"Dark"}),e,r]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Light"}),l,i]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Plain"}),s,o]})]})}function aw(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(i=>n.jsx(xe,{type:i.type,className:"mx-1",effect:"dark",round:!0,children:i.label})),r=t.map(i=>n.jsx(xe,{type:i.type,className:"mx-1",effect:"light",round:!0,children:i.label})),l=t.map(i=>n.jsx(xe,{type:i.type,className:"mx-1",effect:"plain",round:!0,children:i.label}));return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:e}),n.jsx("div",{className:"flex flex-wrap gap-2",children:r}),n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:l})]})}function ku(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tag 标签"}),`
`,`
`,n.jsx(e.p,{children:"用于标记和选择。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 tag 的类型。 也可以通过 ",n.jsx(e.code,{children:"color"})," 属性来自定义背景色。"]}),`
`,n.jsx(L,{name:"TagBasic",children:n.jsx(lw,{})}),`
`,n.jsx(e.h2,{children:"可移除标签"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"closable"})," 属性可以定义一个标签是否可移除。 它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 ",n.jsx(e.code,{children:"disable-transitions"})," 属性，它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，",n.jsx(e.code,{children:"true"})," 为关闭。 当 Tag 被移除时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(L,{name:"TagClosable",children:n.jsx(iw,{})}),`
`,n.jsx(e.h2,{children:"不同尺寸"}),`
`,n.jsx(e.p,{children:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性来设置额外尺寸, 可选值包括 ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"}),"."]}),`
`,n.jsx(L,{name:"TagSize",children:n.jsx(sw,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tag 组件提供了三个不同的主题：",n.jsx(e.code,{children:"dark"}),"、",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"plain"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 effect 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(L,{name:"TagEffect",children:n.jsx(ow,{})}),`
`,n.jsx(e.h2,{children:"圆形标签"}),`
`,n.jsx(e.p,{children:"Tag 可以向按钮组件一样变为完全圆形。"}),`
`,n.jsx(L,{name:"TagRound",children:n.jsx(aw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Tag 的类型"}),n.jsx(e.td,{children:"'success' | 'info' | 'warning' | 'danger' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Tag 的尺寸"}),n.jsx(e.td,{children:"'large' | 'default' | 'small' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tag 的主题"}),n.jsx(e.td,{children:"'dark' | 'light' | 'plain'"}),n.jsx(e.td,{children:"light"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"Tag 是否为圆形"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]})]})]})]})}function cw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ku,{...t})}):ku(t)}function dw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success"}),n.jsx(oe,{title:"info alert",type:"info"}),n.jsx(oe,{title:"warning alert",type:"warning"}),n.jsx(oe,{title:"error alert",type:"error"})]})}function uw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",effect:"dark"}),n.jsx(oe,{title:"info alert",type:"info",effect:"dark"}),n.jsx(oe,{title:"warning alert",type:"warning",effect:"dark"}),n.jsx(oe,{title:"error alert",type:"error",effect:"dark"})]})}function hw(){function t(){alert("Hello World!")}return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"unclosable alert",type:"success",closable:!1}),n.jsx(oe,{title:"customized close-text",type:"info",closeText:"Gotcha"}),n.jsx(oe,{title:"alert with callback",type:"warning",close:t})]})}function fw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",showIcon:!0})]})}function pw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",center:!0,showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",center:!0,showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function mw(){return n.jsx(n.Fragment,{children:n.jsx(oe,{title:"with description",type:"success",description:"This is a description."})})}function xw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function Nu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alert 提示"}),`
`,`
`,n.jsx(e.p,{children:"用于页面中展示重要的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供四种类型，由 ",n.jsx(e.code,{children:"type"})," 属性指定，默认值为 ",n.jsx(e.code,{children:"info"}),"。"]}),`
`,n.jsx(L,{name:"AlertBasic",children:n.jsx(dw,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供了两个不同的主题：",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"dark"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(L,{name:"AlertEffect",children:n.jsx(uw,{})}),`
`,n.jsx(e.h2,{children:"自定义关闭按钮"}),`
`,n.jsx(e.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,n.jsxs(e.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",n.jsx(e.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，默认为 ",n.jsx(e.code,{children:"false"}),"。 你可以设置 ",n.jsx(e.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",n.jsx(e.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(L,{name:"AlertClose",children:n.jsx(hw,{})}),`
`,n.jsx(e.h2,{children:"使用图标"}),`
`,n.jsx(e.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,n.jsx(L,{name:"AlertShowIcon",children:n.jsx(fw,{})}),`
`,n.jsx(e.h2,{children:"文字居中"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,n.jsx(L,{name:"AlertCenter",children:n.jsx(pw,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsx(e.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,n.jsxs(e.p,{children:["除了必填的 ",n.jsx(e.code,{children:"title"})," 属性外，你可以设置 ",n.jsx(e.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,n.jsx(L,{name:"AlertDescription",children:n.jsx(mw,{})}),`
`,n.jsx(e.h2,{children:"带图标和描述"}),`
`,n.jsx(e.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,n.jsx(L,{name:"AlertIconDescription",children:n.jsx(xw,{})}),`
`,n.jsx(e.h2,{children:"Alert API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Alert 标题。"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Alert 类型。"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error'"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"description"}),n.jsx(e.td,{children:"描述性文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可以关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"center"}),n.jsx(e.td,{children:"文字是否居中"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closeText"}),n.jsx(e.td,{children:"自定义关闭按钮文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showIcon"}),n.jsx(e.td,{children:"是否显示类型图标"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"主题样式"}),n.jsx(e.td,{children:"'light' / 'dark'"}),n.jsx(e.td,{children:"light"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"close"}),n.jsx(e.td,{children:"关闭 Alert 时触发的事件"}),n.jsx(e.td,{children:"(event: MouseEvent) => void"})]})})]})]})}function gw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nu,{...t})}):Nu(t)}function jw(){const[t,e]=p.useState(!1);function r(){e(!0)}function l(){e(!1)}function i(){e(!1)}function s(){e(!1)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button",onClick:i,children:n.jsx("span",{className:"",children:"Cancel"})}),n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button el-button--primary",onClick:s,children:n.jsx("span",{className:"",children:" Confirm "})})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:r,children:"click to open the Dialog"}),n.jsx(yl,{open:t,title:"Tips",width:"30%",onClose:l,footer:n.jsx(o,{}),children:n.jsx("span",{children:"This is a message"})})]})}function vw(){const[t,e]=p.useState(!1),[r,l]=p.useState(!1);function i(){e(!0)}function s(){l(!0)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx(b,{onClick:()=>{l(!1)},children:"Cancel"}),n.jsx(b,{type:"primary",onClick:()=>{l(!1)},children:"Confirm"})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:i,children:"open a Table nested Dialog"}),n.jsx(yl,{open:t,title:"Shipping address",onClose:()=>{e(!1)},children:"Table组件"}),n.jsx(b,{text:!0,onClick:s,children:"open a Form nested Dialog"}),n.jsx(yl,{open:r,title:"Shipping address",footer:n.jsx(o,{}),onClose:()=>{l(!1)},children:"Form 表单"})]})}function yw(){const[t,e]=p.useState(!1);function r(){e(!1)}function l(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"dialog-header",children:[n.jsx("h4",{className:"el-dialog__title",children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(Cr,{}),"Close"]})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>e(!0),children:"Open Dialog with customized header"}),n.jsx(yl,{open:t,showClose:!1,header:n.jsx(l,{}),onClose:r,children:"This is dialog content."})]})}function bu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dialog 对话框"}),`
`,`
`,n.jsx(e.p,{children:"在保留当前页面状态的情况下，告知用户并承载相关操作。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Dialog 弹出一个对话框，适合需要定制性更大的场景。"}),`
`,n.jsx(L,{name:"DialogBasic",children:n.jsx(jw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(e.p,{children:"对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。"}),`
`,n.jsx(L,{name:"DialogContent",children:n.jsx(vw,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(L,{name:"DialogHeader",children:n.jsx(yw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Dialog"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Dialog 对话框 Dialog 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"对话框的宽度，默认值为 50%"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function ww(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bu,{...t})}):bu(t)}function Cw(){const[t,e]=p.useState(""),[r,l]=p.useState(!1),[i,s]=p.useState(!1);function o(){e("ltr"),l(!0)}function a(){e("rtl"),l(!0)}function c(){e("ttb"),l(!0)}function d(){e("btt"),l(!0)}function u(){e("ltr"),s(!0)}function h(){e("rtl"),s(!0)}function x(){e("ttb"),s(!0)}function g(){e("btt"),s(!0)}function v(){l(!1)}function y(){s(!1)}function k(){s(!1)}function m(){s(!1)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:o,children:"open left to right"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:a,children:"open right to left"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:c,children:"open top to bottom"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:d,children:"open bottom to top"})]}),n.jsxs("div",{style:{marginTop:"20px"},children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:u,children:"open left to right footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:h,children:"open right to left footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:x,children:"open top to bottom footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:g,children:"open bottom to top footer"})]}),n.jsx(Dn,{open:r,title:"I am the title",direction:t,onClose:v,children:n.jsx("span",{children:"Hi, there!"})}),n.jsx(Dn,{open:i,direction:t,onClose:y,header:n.jsx("h4",{children:"set title by slot"}),footer:n.jsxs("div",{style:{flex:"auto"},children:[n.jsx(b,{onClick:k,children:"cancel"}),n.jsx(b,{type:"primary",onClick:m,children:"confirm"})]}),children:"radio"})]})}function _w(){const[t,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(b,{type:"primary",onClick:()=>e(!0),children:"open"}),n.jsx(Dn,{open:t,title:"I am the title",withHeader:!1,children:n.jsx("span",{children:"Hi there!"})})]})}function kw(){const[t,e]=p.useState(!1),[r,l]=p.useState(!1);function i(){e(!1)}function s(){l(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:()=>{e(!0)},children:"Open Drawer with nested table"}),n.jsx(b,{text:!0,onClick:()=>{l(!0)},children:"Open Drawer with nested form"}),n.jsx(Dn,{open:t,title:"I have a nested table inside!",direction:"rtl",size:"50%",onClose:i,children:"table"}),n.jsx(Dn,{open:r,title:"I have a nested form inside!",direction:"ltr",className:"demo-drawer",onClose:s,children:n.jsxs("div",{className:"demo-drawer__content",children:["form",n.jsxs("div",{className:"demo-drawer__footer",children:[n.jsx(b,{onClick:s,children:"Cancel"}),n.jsx(b,{type:"primary",onClick:s,children:"Submit"})]})]})})]})}function Nw(){const[t,e]=p.useState(!1);function r(){e(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>{e(!0)},children:"Open Drawer with customized header"}),n.jsx(Dn,{open:t,showClose:!1,header:n.jsxs(n.Fragment,{children:[n.jsx("h4",{children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(Cr,{}),"Close"]})]}),children:"This is drawer content."})]})}function Su(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Drawer 抽屉"}),`
`,`
`,n.jsx(e.p,{children:"有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验."}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"呼出一个临时的侧边栏, 可以从多个方向呼出"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Drawer"})," 包含三部分: ",n.jsx(e.code,{children:"title"})," & ",n.jsx(e.code,{children:"body"})," & ",n.jsx(e.code,{children:"footer"}),", 你还可以通过 title 属性来设置标题, 默认情况下它是一个空字符串, 其中 ",n.jsx(e.code,{children:"body"})," 部分是 Drawer 组件的主区域, 它包含了用户定义的主要内容. footer和title用法一致, 用来显示页脚信息. 当 Drawer 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。"]}),`
`,n.jsx(L,{name:"DrawerBasic",children:n.jsx(Cw,{})}),`
`,n.jsx(e.h2,{children:"不添加 Title"}),`
`,n.jsx(e.p,{children:"当你不需要标题的时候，你可以将它移除。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"with-header"})," 属性为 false 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 ",n.jsx(e.code,{children:"title"}),"。"]}),`
`,n.jsx(L,{name:"DrawerWithHeader",children:n.jsx(_w,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsxs(e.p,{children:["像 ",n.jsx(e.code,{children:"Dialog"})," 组件一样，",n.jsx(e.code,{children:"Drawer"})," 也可以用来显示多种不同的交互。"]}),`
`,n.jsx(L,{name:"DrawerContent",children:n.jsx(kw,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(L,{name:"DrawerHeader",children:n.jsx(Nw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Drawer"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"Drawer 打开的方向"}),n.jsx(e.td,{children:"'rtl' | 'ltr' | 'ttb' | 'btt'"}),n.jsx(e.td,{children:"rtl"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Drawer 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"Drawer 页脚部分"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"withHeader"}),n.jsx(e.td,{children:"控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title 不生效"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"30%"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]})]})]})]})}function bw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Su,{...t})}):Su(t)}function Sw(){return n.jsx(n.Fragment,{children:n.jsx(ms,{title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function Tw(){return n.jsx(n.Fragment,{children:n.jsx(ms,{width:220,confirmButtonText:"OK",cancelButtonText:"No, Thanks",icon:n.jsx(Sl,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function Ew(){function t(){console.log("confirm!")}function e(){console.log("cancel!")}return n.jsx(n.Fragment,{children:n.jsx(ms,{confirmButtonText:"Yes",cancelButtonText:"No",icon:n.jsx(Sl,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:t,onCancel:e,children:n.jsx(b,{children:"Delete"})})})}function Tu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popconfirm 气泡确认框"}),`
`,`
`,n.jsx(e.p,{children:"点击某个元素弹出一个简单的气泡确认框"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。"}),`
`,n.jsx(L,{name:"PopconfirmBasic",children:n.jsx(Sw,{})}),`
`,n.jsx(e.h2,{children:"自定义弹出框的内容"}),`
`,n.jsx(e.p,{children:"可以在 Popconfirm 中自定义内容。"}),`
`,n.jsx(L,{name:"PopconfirmIcon",children:n.jsx(Tw,{})}),`
`,n.jsx(e.h2,{children:"多种让 Popconfirm 出现的方法"}),`
`,n.jsx(e.p,{children:"点击按钮触发事件"}),`
`,n.jsx(L,{name:"PopconfirmEvent",children:n.jsx(Ew,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"标题"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"confirmButtonText"}),n.jsx(e.td,{children:"确认按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"cancelButtonText"}),n.jsx(e.td,{children:"取消按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"自定义图标"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"QuestionFilled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"iconColor"}),n.jsx(e.td,{children:"Icon 颜色"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"#f90"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideIcon"}),n.jsx(e.td,{children:"是否隐藏 Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"弹层宽度，最小宽度 150px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"number"})]}),n.jsx(e.td,{children:"150"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"事件名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onConfirm"}),n.jsx(e.td,{children:"点击确认按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onCancel"}),n.jsx(e.td,{children:"点击取消按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]})]})]})]})}function Rw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Tu,{...t})}):Tu(t)}function Bw(){return n.jsxs(n.Fragment,{children:[n.jsx(Fr,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Hover to activate"})}),n.jsx(Fr,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Click to activate"})}),n.jsx(Fr,{placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Focus to activate"})}),n.jsx(Fr,{title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"contextmenu to activate"})})]})}function Eu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popover 气泡卡片"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"trigger"})," 属性被用来决定 ",n.jsx(e.code,{children:"popover"})," 的触发方式，支持的触发方式： ",n.jsx(e.code,{children:"hover"}),"、",n.jsx(e.code,{children:"click"}),"、",n.jsx(e.code,{children:"focus"})," 或 ",n.jsx(e.code,{children:"contextmenu"}),"。 如果你想手动控制它，可以设置 ",n.jsx(e.code,{children:":visible"})," 属性。"]}),`
`,n.jsx(L,{name:"PopoverBasic",children:n.jsx(Bw,{})})]})}function Lw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Eu,{...t})}):Eu(t)}function Dw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-tooltip",children:[n.jsxs("div",{className:"row center",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start",children:n.jsx(b,{children:"top-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top",children:n.jsx(b,{children:"top"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end",children:n.jsx(b,{children:"top-end"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start",children:n.jsx(b,{children:"left-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start",children:n.jsx(b,{children:"right-start"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left",children:n.jsx(b,{className:"mt-3 mb-3",children:"left"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right",children:n.jsx(b,{children:"right"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end",children:n.jsx(b,{children:"left-end"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end",children:n.jsx(b,{children:"right-end"})})]}),n.jsxs("div",{className:"row center",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start",children:n.jsx(b,{children:"bottom-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom",children:n.jsx(b,{children:"bottom"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end",children:n.jsx(b,{children:"bottom-end"})})]})]})})}function Pw(){return n.jsxs(n.Fragment,{children:[n.jsx(_e,{content:"Top center",placement:"top",children:n.jsx(b,{children:"Dark"})}),n.jsx(_e,{content:"Bottom center",placement:"bottom",effect:"light",children:n.jsx(b,{children:"Light"})}),n.jsx(_e,{content:"Bottom center",effect:"customized",children:n.jsx(b,{children:"Customized theme"})})]})}function Aw(){return n.jsx(n.Fragment,{children:n.jsx(_e,{placement:"top",content:n.jsxs(n.Fragment,{children:["multiple lines",n.jsx("br",{}),"second line"]}),children:n.jsx(b,{children:"Top center"})})})}function Mw(){const[t,e]=p.useState(!0);function r(){e(!t)}return n.jsx(n.Fragment,{children:n.jsx(_e,{disabled:t,content:"click to close tooltip function",placement:"bottom",effect:"light",children:n.jsxs(b,{onClick:r,children:["click to ",t?"active":"close"," tooltip function"]})})})}function Ru(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tooltip 文字提示"}),`
`,`
`,n.jsx(e.p,{children:"常用于展示鼠标 hover 时的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"content"})," 属性来决定 ",n.jsx(e.code,{children:"hover"})," 时的提示信息。 由 ",n.jsx(e.code,{children:"placement"})," 属性决定展示效果： ",n.jsx(e.code,{children:"placement"}),"属性值为：[方向]-[对齐位置]；四个方向：",n.jsx(e.code,{children:"top"}),"、",n.jsx(e.code,{children:"left"}),"、",n.jsx(e.code,{children:"right"}),"、",n.jsx(e.code,{children:"bottom"}),"；三种对齐位置：",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"end"}),'，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。']}),`
`,n.jsx(L,{name:"TooltipBasic",children:n.jsx(Dw,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tooltip 组件内置了两个主题：",n.jsx(e.code,{children:"dark"}),"和",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 来修改主题，默认值为 ",n.jsx(e.code,{children:"dark"}),"."]}),`
`,n.jsx(L,{name:"TooltipEffect",children:n.jsx(Pw,{})}),`
`,n.jsx(e.h2,{children:"更多内容的文字提示"}),`
`,n.jsx(e.p,{children:"展示多行文本或者是设置文本内容的格式"}),`
`,n.jsx(L,{name:"TooltipContent",children:n.jsx(Aw,{})}),`
`,n.jsx(e.h2,{children:"高级扩展"}),`
`,n.jsx(e.p,{children:"除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："}),`
`,n.jsxs(e.p,{children:["如果需要关闭 ",n.jsx(e.code,{children:"tooltip"})," 功能，",n.jsx(e.code,{children:"disabled"})," 属性可以满足这个需求， 你只需要将其设置为 ",n.jsx(e.code,{children:"true"}),"。"]}),`
`,n.jsx(L,{name:"TooltipDisabled",children:n.jsx(Mw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tooltip 主题，内置了 dark / light 两种"}),n.jsx(e.td,{children:"'dark' / 'light'"}),n.jsx(e.td,{children:"dark"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"显示的内容"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"placement"}),n.jsx(e.td,{children:"Tooltip 组件出现的位置"}),n.jsx(e.td,{children:"'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'"}),n.jsx(e.td,{children:"bottom"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showAfter"}),n.jsx(e.td,{children:"在触发后多久显示内容，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideAfter"}),n.jsx(e.td,{children:"延迟关闭，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"200"})]})]})]})]})}function Iw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ru,{...t})}):Ru(t)}function Fw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes."}),n.jsx(St,{}),n.jsx("span",{children:"There little thoughts are the rustle of leaves; they have their whisper of joy in my mind."})]})})}function Ow(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"What you are you do not see, what you see is your shadow. "}),n.jsx(St,{contentPosition:"left",children:"Rabindranath Tagore"}),n.jsx("span",{children:"My wishes are fools, they shout across thy song, my Master. Let me but listen."}),n.jsx(St,{children:n.jsx(rc,{})}),n.jsx("span",{children:"I cannot choose the best. The best chooses me."}),n.jsx(St,{contentPosition:"right",children:"Rabindranath Tagore"})]})})}function zw(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"What language is thine, O sea?"}),n.jsx(St,{borderStyle:"dashed"}),n.jsx("span",{children:"The language of eternal question."})]}),n.jsx(St,{borderStyle:"dotted"}),n.jsx("span",{children:"What language is thy answer, O sky?"}),n.jsx(St,{borderStyle:"double"}),n.jsx("span",{children:"The language of eternal silence."})]})}function $w(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"Rain"}),n.jsx(St,{direction:"vertical"}),n.jsx("span",{children:"Home"}),n.jsx(St,{direction:"vertical","border-style":"dashed"}),n.jsx("span",{children:"Grass"})]})})}function Bu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Divider 分割线"}),`
`,`
`,n.jsx(e.p,{children:"区隔内容的分割线。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"对不同段落的文本进行分割。"}),`
`,n.jsx(L,{name:"DividerBasic",children:n.jsx(Fw,{})}),`
`,n.jsx(e.h2,{children:"设置文案"}),`
`,n.jsx(e.p,{children:"可以在分割线上自定义文本内容。"}),`
`,n.jsx(L,{name:"DividerContent",children:n.jsx(Ow,{})}),`
`,n.jsx(e.h2,{children:"虚线"}),`
`,n.jsx(e.p,{children:"您可以设置分隔符的样式。"}),`
`,n.jsx(L,{name:"DividerBorder",children:n.jsx(zw,{})}),`
`,n.jsx(e.h2,{children:"垂直分隔线"}),`
`,n.jsx(L,{name:"DividerDirection",children:n.jsx($w,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"设置分割线方向"}),n.jsx(e.td,{children:"'horizontal' / 'vertical'"}),n.jsx(e.td,{children:"horizontal"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border-style"}),n.jsx(e.td,{children:"设置分隔符样式"}),n.jsx(e.td,{children:"'none' / 'solid' / 'hidden' / 'dashed' / ...(css/border-style)"}),n.jsx(e.td,{children:"solid"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content-position"}),n.jsx(e.td,{children:"自定义分隔线内容的位置"}),n.jsx(e.td,{children:"'left' / 'right' / 'center'"}),n.jsx(e.td,{children:"center"})]})]})]})]})}function Uw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bu,{...t})}):Bu(t)}function Hw({name:t}){let e;switch(t){case"button":e=n.jsx(i2,{});break;case"container":e=n.jsx(f2,{});break;case"icon":e=n.jsx(m2,{});break;case"layout":e=n.jsx(C2,{});break;case"link":e=n.jsx(S2,{});break;case"text":e=n.jsx(B2,{});break;case"switch":e=n.jsx(z2,{});break;case"avatar":e=n.jsx(V2,{});break;case"collapse":e=n.jsx(G2,{});break;case"progress":e=n.jsx(Y2,{});break;case"result":e=n.jsx(q2,{});break;case"table":e=n.jsx(rw,{});break;case"tag":e=n.jsx(cw,{});break;case"alert":e=n.jsx(gw,{});break;case"dialog":e=n.jsx(ww,{});break;case"drawer":e=n.jsx(bw,{});break;case"popconfirm":e=n.jsx(Rw,{});break;case"popover":e=n.jsx(Lw,{});break;case"tooltip":e=n.jsx(Iw,{});break;case"divider":e=n.jsx(Uw,{});break}return e}function je({name:t}){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(Hw,{name:t})})})}function Lu(t){const e={h1:"h1",...t.components};return n.jsx(e.h1,{children:"Border 边框"})}function Ww(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Lu,{...t})}):Lu(t)}function Vw(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(Ww,{})})})}function Xw(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"Basic 基础组件"}),n.jsx(J,{to:"button",children:"Button 按钮"}),n.jsx(J,{to:"border",children:"Border 边框"}),n.jsx(J,{to:"container",children:"Container 布局容器"}),n.jsx(J,{to:"icon",children:"Icon 图标"}),n.jsx(J,{to:"layout",children:"Layout 布局"}),n.jsx(J,{to:"link",children:"Link 链接"}),n.jsx(J,{to:"text",children:"Text 文本"}),n.jsx("p",{className:"sidebar-group__title",children:"Form 表单组件"}),n.jsx(J,{to:"switch",children:"Switch 开关"}),n.jsx("p",{className:"sidebar-group__title",children:"Data 数据展示"}),n.jsx(J,{to:"avatar",children:"Avatar 头像"}),n.jsx(J,{to:"collapse",children:"Collapse 折叠面板"}),n.jsx(J,{to:"progress",children:"Progress 进度条"}),n.jsx(J,{to:"result",children:"Result 结果"}),n.jsx(J,{to:"table",children:"Table 表格"}),n.jsx(J,{to:"tag",children:"Tag 标签"}),n.jsx("p",{className:"sidebar-group__title",children:"Feedback 反馈组件"}),n.jsx(J,{to:"alert",children:"Alert 提示"}),n.jsx(J,{to:"dialog",children:"Dialog 对话框"}),n.jsx(J,{to:"drawer",children:"Drawer 抽屉"}),n.jsx(J,{to:"popconfirm",children:"Popconfirm 气泡确认框"}),n.jsx(J,{to:"popover",children:"Popover 气泡卡片"}),n.jsx(J,{to:"tooltip",children:"Tooltip 文字提示"}),n.jsx("p",{className:"sidebar-group__title",children:"Others 其他"}),n.jsx(J,{to:"divider",children:"Divider 分割线"})]})})}),n.jsx("main",{className:"page-content",children:n.jsxs(os,{children:[n.jsx(K,{path:"button",element:n.jsx(je,{name:"button"})}),n.jsx(K,{path:"border",element:n.jsx(Vw,{})}),n.jsx(K,{path:"container",element:n.jsx(je,{name:"container"})}),n.jsx(K,{path:"icon",element:n.jsx(je,{name:"icon"})}),n.jsx(K,{path:"layout",element:n.jsx(je,{name:"layout"})}),n.jsx(K,{path:"link",element:n.jsx(je,{name:"link"})}),n.jsx(K,{path:"text",element:n.jsx(je,{name:"text"})}),n.jsx(K,{path:"switch",element:n.jsx(je,{name:"switch"})}),n.jsx(K,{path:"avatar",element:n.jsx(je,{name:"avatar"})}),n.jsx(K,{path:"collapse",element:n.jsx(je,{name:"collapse"})}),n.jsx(K,{path:"progress",element:n.jsx(je,{name:"progress"})}),n.jsx(K,{path:"result",element:n.jsx(je,{name:"result"})}),n.jsx(K,{path:"table",element:n.jsx(je,{name:"table"})}),n.jsx(K,{path:"tag",element:n.jsx(je,{name:"tag"})}),n.jsx(K,{path:"alert",element:n.jsx(je,{name:"alert"})}),n.jsx(K,{path:"dialog",element:n.jsx(je,{name:"dialog"})}),n.jsx(K,{path:"drawer",element:n.jsx(je,{name:"drawer"})}),n.jsx(K,{path:"popconfirm",element:n.jsx(je,{name:"popconfirm"})}),n.jsx(K,{path:"popover",element:n.jsx(je,{name:"popover"})}),n.jsx(K,{path:"tooltip",element:n.jsx(je,{name:"tooltip"})}),n.jsx(K,{path:"divider",element:n.jsx(je,{name:"divider"})})]})})]})}const Gw="/pelement-react/assets/build-error-001-HBI716zv.jpg",Qw="/pelement-react/assets/build-error-002-fg75_WyZ.jpg";function Du(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错：Could not find a declaration file for module 'pelement-react'."}),`
`,n.jsx(e.p,{children:"引入pelement-react，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:Gw,alt:"build-error-001"}),`
`,n.jsx(e.p,{children:"错误代码"}),`
`,n.jsx(e.p,{children:`example/pages/component/button/Button.tsx:2:24 - error TS7016: Could not find a declaration file for module 'pelement-react'. 'D:/work/pelement-react/node_modules/.pnpm/file+pelement-react-0.0.1-alpha.0.tgz/node_modules/pelement-react/dist/pelement-react.js' implicitly has an 'any' type.\r
There are types at 'D:/work/pelement-react/node_modules/pelement-react/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'pelement-react' library may need to update its package.json or typings.`}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"修改tsconfig.json文件，追加以下内容"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`"noImplicitAny": false,\r
"allowJs": true
`})}),`
`,n.jsx("img",{src:Qw,alt:"build-error-002"})]})}function Kw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Du,{...t})}):Du(t)}const Yw="/pelement-react/assets/cannot-find-module-001-IO4IuqQz.jpg",Zw="/pelement-react/assets/cannot-find-module-002-GS1tM54Y.jpg";function Pu(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错： Cannot find module '../../../packages/Button/index.zh-CN.mdx' or its corresponding type declarations."}),`
`,n.jsx(e.p,{children:"引入mdx，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:Yw,alt:"cannot-find-module-001"}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"在src/vite-env.d.ts文件中添加"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`declare module '*.mdx' {\r
  const mdx: string;\r
  export default mdx;\r
}
`})}),`
`,n.jsx("img",{src:Zw,alt:"cannot-find-module-002"})]})}function Jw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Pu,{...t})}):Pu(t)}function qw(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx(J,{to:"build-error",children:"buile error"}),n.jsx(J,{to:"cannot-find-module",children:"cannot-find-module"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsxs(os,{children:[n.jsx(K,{path:"build-error",element:n.jsx(Kw,{})}),n.jsx(K,{path:"cannot-find-module",element:n.jsx(Jw,{})})]})})})]})}function e4(){return n.jsx(n.Fragment,{children:n.jsxs(os,{children:[n.jsx(K,{path:"/",element:n.jsx(Ql,{to:"/component/button"})}),n.jsx(K,{path:"home",element:n.jsx(T0,{})}),n.jsx(K,{path:"guide",element:n.jsx(Ql,{to:"changelog"})}),n.jsx(K,{path:"guide/*",element:n.jsx(L0,{})}),n.jsx(K,{path:"component",element:n.jsx(Ql,{to:"button"})}),n.jsx(K,{path:"component/*",element:n.jsx(Xw,{})}),n.jsx(K,{path:"blog",element:n.jsx(Ql,{to:"build-error"})}),n.jsx(K,{path:"blog/*",element:n.jsx(qw,{})})]})})}function t4(){return n.jsx(n.Fragment,{children:n.jsx("header",{className:"navbar",children:n.jsx("div",{className:"navbar-wrapper",children:n.jsxs("div",{className:"header-container",children:[n.jsx("div",{className:"logo-container",children:n.jsxs(J,{to:"/home",children:[n.jsx("img",{src:ap,alt:"pelement-react"}),"pelement-react"]})}),n.jsxs("div",{className:"content",children:[n.jsxs("nav",{className:"navbar-menu menu",children:[n.jsx(J,{className:"link-item link is-menu-link",to:"guide",children:"指南"}),n.jsx(J,{className:"link-item link is-menu-link",to:"component",children:"组件"}),n.jsx(J,{className:"link-item link is-menu-link",to:"blog",children:"博客"})]}),n.jsx("div",{className:"social-links",children:n.jsx("a",{href:"https://github.com/pelement-react/pelement-react",title:"GitHub",target:"_blank",rel:"noreferrer noopener",className:"social-link",children:n.jsx("i",{className:"el-icon",style:{fontSize:"24px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-6c8d2bba":"",children:n.jsx("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})})})})})]})]})})})})}function n4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"App",children:[n.jsx(t4,{}),n.jsx(e4,{})]})})}Zs.createRoot(document.getElementById("root")).render(n.jsx(Vu.StrictMode,{children:n.jsx(C0,{children:n.jsx(n4,{})})}));
