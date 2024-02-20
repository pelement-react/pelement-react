function um(t,e){for(var r=0;r<e.length;r++){const l=e[r];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(l,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function zu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $u={exports:{}},Hs={},Hu={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),hm=Symbol.for("react.portal"),fm=Symbol.for("react.fragment"),pm=Symbol.for("react.strict_mode"),mm=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),jm=Symbol.for("react.forward_ref"),vm=Symbol.for("react.suspense"),ym=Symbol.for("react.memo"),wm=Symbol.for("react.lazy"),kc=Symbol.iterator;function Cm(t){return t===null||typeof t!="object"?null:(t=kc&&t[kc]||t["@@iterator"],typeof t=="function"?t:null)}var Uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu=Object.assign,Vu={};function jr(t,e,r){this.props=t,this.context=e,this.refs=Vu,this.updater=r||Uu}jr.prototype.isReactComponent={};jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xu(){}Xu.prototype=jr.prototype;function Jo(t,e,r){this.props=t,this.context=e,this.refs=Vu,this.updater=r||Uu}var qo=Jo.prototype=new Xu;qo.constructor=Jo;Wu(qo,jr.prototype);qo.isPureReactComponent=!0;var Sc=Array.isArray,Gu=Object.prototype.hasOwnProperty,ea={current:null},Qu={key:!0,ref:!0,__self:!0,__source:!0};function Ku(t,e,r){var l,s={},i=null,o=null;if(e!=null)for(l in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Gu.call(e,l)&&!Qu.hasOwnProperty(l)&&(s[l]=e[l]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(l in a=t.defaultProps,a)s[l]===void 0&&(s[l]=a[l]);return{$$typeof:Cl,type:t,key:i,ref:o,props:s,_owner:ea.current}}function _m(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ta(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function bm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Tc=/\/+/g;function wi(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bm(""+t.key):e.toString(36)}function Jl(t,e,r,l,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cl:case hm:o=!0}}if(o)return o=t,s=s(o),t=l===""?"."+wi(o,0):l,Sc(s)?(r="",t!=null&&(r=t.replace(Tc,"$&/")+"/"),Jl(s,e,r,"",function(d){return d})):s!=null&&(ta(s)&&(s=_m(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Tc,"$&/")+"/")+t)),e.push(s)),1;if(o=0,l=l===""?".":l+":",Sc(t))for(var a=0;a<t.length;a++){i=t[a];var c=l+wi(i,a);o+=Jl(i,e,r,c,s)}else if(c=Cm(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=l+wi(i,a++),o+=Jl(i,e,r,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ll(t,e,r){if(t==null)return t;var l=[],s=0;return Jl(t,l,"","",function(i){return e.call(r,i,s++)}),l}function Nm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},ql={transition:null},km={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ql,ReactCurrentOwner:ea};K.Children={map:Ll,forEach:function(t,e,r){Ll(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ll(t,function(){e++}),e},toArray:function(t){return Ll(t,function(e){return e})||[]},only:function(t){if(!ta(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=jr;K.Fragment=fm;K.Profiler=mm;K.PureComponent=Jo;K.StrictMode=pm;K.Suspense=vm;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;K.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var l=Wu({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ea.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Gu.call(e,c)&&!Qu.hasOwnProperty(c)&&(l[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)l.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];l.children=a}return{$$typeof:Cl,type:t.type,key:s,ref:i,props:l,_owner:o}};K.createContext=function(t){return t={$$typeof:gm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xm,_context:t},t.Consumer=t};K.createElement=Ku;K.createFactory=function(t){var e=Ku.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:jm,render:t}};K.isValidElement=ta;K.lazy=function(t){return{$$typeof:wm,_payload:{_status:-1,_result:t},_init:Nm}};K.memo=function(t,e){return{$$typeof:ym,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return $e.current.useCallback(t,e)};K.useContext=function(t){return $e.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};K.useEffect=function(t,e){return $e.current.useEffect(t,e)};K.useId=function(){return $e.current.useId()};K.useImperativeHandle=function(t,e,r){return $e.current.useImperativeHandle(t,e,r)};K.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return $e.current.useMemo(t,e)};K.useReducer=function(t,e,r){return $e.current.useReducer(t,e,r)};K.useRef=function(t){return $e.current.useRef(t)};K.useState=function(t){return $e.current.useState(t)};K.useSyncExternalStore=function(t,e,r){return $e.current.useSyncExternalStore(t,e,r)};K.useTransition=function(){return $e.current.useTransition()};K.version="18.2.0";Hu.exports=K;var u=Hu.exports;const Yu=zu(u),na=um({__proto__:null,default:Yu},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=u,Tm=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),Bm=Object.prototype.hasOwnProperty,Rm=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lm={key:!0,ref:!0,__self:!0,__source:!0};function Zu(t,e,r){var l,s={},i=null,o=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(l in e)Bm.call(e,l)&&!Lm.hasOwnProperty(l)&&(s[l]=e[l]);if(t&&t.defaultProps)for(l in e=t.defaultProps,e)s[l]===void 0&&(s[l]=e[l]);return{$$typeof:Tm,type:t,key:i,ref:o,props:s,_owner:Rm.current}}Hs.Fragment=Em;Hs.jsx=Zu;Hs.jsxs=Zu;$u.exports=Hs;var n=$u.exports,Ji={},Ju={exports:{}},nt={},qu={exports:{}},eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,B){var P=C.length;C.push(B);e:for(;0<P;){var $=P-1>>>1,Y=C[$];if(0<s(Y,B))C[$]=B,C[P]=Y,P=$;else break e}}function r(C){return C.length===0?null:C[0]}function l(C){if(C.length===0)return null;var B=C[0],P=C.pop();if(P!==B){C[0]=P;e:for(var $=0,Y=C.length,De=Y>>>1;$<De;){var lt=2*($+1)-1,ke=C[lt],Ce=lt+1,gn=C[Ce];if(0>s(ke,P))Ce<Y&&0>s(gn,ke)?(C[$]=gn,C[Ce]=P,$=Ce):(C[$]=ke,C[lt]=P,$=lt);else if(Ce<Y&&0>s(gn,P))C[$]=gn,C[Ce]=P,$=Ce;else break e}}return B}function s(C,B){var P=C.sortIndex-B.sortIndex;return P!==0?P:C.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],d=[],h=1,f=null,x=3,g=!1,v=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(C){for(var B=r(d);B!==null;){if(B.callback===null)l(d);else if(B.startTime<=C)l(d),B.sortIndex=B.expirationTime,e(c,B);else break;B=r(d)}}function w(C){if(y=!1,j(C),!v)if(r(c)!==null)v=!0,W(_);else{var B=r(d);B!==null&&k(w,B.startTime-C)}}function _(C,B){v=!1,y&&(y=!1,m(L),L=-1),g=!0;var P=x;try{for(j(B),f=r(c);f!==null&&(!(f.expirationTime>B)||C&&!G());){var $=f.callback;if(typeof $=="function"){f.callback=null,x=f.priorityLevel;var Y=$(f.expirationTime<=B);B=t.unstable_now(),typeof Y=="function"?f.callback=Y:f===r(c)&&l(c),j(B)}else l(c);f=r(c)}if(f!==null)var De=!0;else{var lt=r(d);lt!==null&&k(w,lt.startTime-B),De=!1}return De}finally{f=null,x=P,g=!1}}var S=!1,T=null,L=-1,z=5,F=-1;function G(){return!(t.unstable_now()-F<z)}function te(){if(T!==null){var C=t.unstable_now();F=C;var B=!0;try{B=T(!0,C)}finally{B?ce():(S=!1,T=null)}}else S=!1}var ce;if(typeof p=="function")ce=function(){p(te)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,U=H.port2;H.port1.onmessage=te,ce=function(){U.postMessage(null)}}else ce=function(){b(te,0)};function W(C){T=C,S||(S=!0,ce())}function k(C,B){L=b(function(){C(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,W(_))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(C){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var P=x;x=B;try{return C()}finally{x=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,B){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=x;x=C;try{return B()}finally{x=P}},t.unstable_scheduleCallback=function(C,B,P){var $=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,C={id:h++,callback:B,priorityLevel:C,startTime:P,expirationTime:Y,sortIndex:-1},P>$?(C.sortIndex=P,e(d,C),r(c)===null&&C===r(d)&&(y?(m(L),L=-1):y=!0,k(w,P-$))):(C.sortIndex=Y,e(c,C),v||g||(v=!0,W(_))),C},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(C){var B=x;return function(){var P=x;x=B;try{return C.apply(this,arguments)}finally{x=P}}}})(eh);qu.exports=eh;var Dm=qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=u,et=Dm;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nh=new Set,Kr={};function An(t,e){ar(t,e),ar(t+"Capture",e)}function ar(t,e){for(Kr[t]=e,t=0;t<e.length;t++)nh.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=Object.prototype.hasOwnProperty,Pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ec={},Bc={};function Am(t){return qi.call(Bc,t)?!0:qi.call(Ec,t)?!1:Pm.test(t)?Bc[t]=!0:(Ec[t]=!0,!1)}function Mm(t,e,r,l){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Im(t,e,r,l){if(e===null||typeof e>"u"||Mm(t,e,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function He(t,e,r,l,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=l,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new He(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new He(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new He(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new He(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new He(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new He(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new He(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new He(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new He(t,5,!1,t.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function la(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ra,la);Le[e]=new He(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ra,la);Le[e]=new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ra,la);Le[e]=new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new He(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new He(t,1,!1,t.toLowerCase(),null,!0,!0)});function sa(t,e,r,l){var s=Le.hasOwnProperty(e)?Le[e]:null;(s!==null?s.type!==0:l||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Im(e,r,s,l)&&(r=null),l||s===null?Am(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,l=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,l?t.setAttributeNS(l,e,r):t.setAttribute(e,r))))}var Ot=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),ia=Symbol.for("react.strict_mode"),eo=Symbol.for("react.profiler"),rh=Symbol.for("react.provider"),lh=Symbol.for("react.context"),oa=Symbol.for("react.forward_ref"),to=Symbol.for("react.suspense"),no=Symbol.for("react.suspense_list"),aa=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),sh=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Nr(t){return t===null||typeof t!="object"?null:(t=Rc&&t[Rc]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Ci;function Dr(t){if(Ci===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Ci=e&&e[1]||""}return`
`+Ci+t}var _i=!1;function bi(t,e){if(!t||_i)return"";_i=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var l=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){l=d}t.call(e.prototype)}else{try{throw Error()}catch(d){l=d}t()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=l.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{_i=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Dr(t):""}function Fm(t){switch(t.tag){case 5:return Dr(t.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return t=bi(t.type,!1),t;case 11:return t=bi(t.type.render,!1),t;case 1:return t=bi(t.type,!0),t;default:return""}}function ro(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Un:return"Fragment";case Hn:return"Portal";case eo:return"Profiler";case ia:return"StrictMode";case to:return"Suspense";case no:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lh:return(t.displayName||"Context")+".Consumer";case rh:return(t._context.displayName||"Context")+".Provider";case oa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case aa:return e=t.displayName||null,e!==null?e:ro(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return ro(t(e))}catch{}}return null}function Om(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ro(e);case 8:return e===ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function on(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ih(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zm(t){var e=ih(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pl(t){t._valueTracker||(t._valueTracker=zm(t))}function oh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),l="";return t&&(l=ih(t)?t.checked?"true":"false":t.value),t=l,t!==r?(e.setValue(t),!0):!1}function us(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lo(t,e){var r=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Lc(t,e){var r=e.defaultValue==null?"":e.defaultValue,l=e.checked!=null?e.checked:e.defaultChecked;r=on(e.value!=null?e.value:r),t._wrapperState={initialChecked:l,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ah(t,e){e=e.checked,e!=null&&sa(t,"checked",e,!1)}function so(t,e){ah(t,e);var r=on(e.value),l=e.type;if(r!=null)l==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?io(t,e.type,r):e.hasOwnProperty("defaultValue")&&io(t,e.type,on(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dc(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var l=e.type;if(!(l!=="submit"&&l!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function io(t,e,r){(e!=="number"||us(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Pr=Array.isArray;function tr(t,e,r,l){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&l&&(t[r].defaultSelected=!0)}else{for(r=""+on(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,l&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function oo(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pc(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(E(92));if(Pr(r)){if(1<r.length)throw Error(E(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:on(r)}}function ch(t,e){var r=on(e.value),l=on(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),l!=null&&(t.defaultValue=""+l)}function Ac(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ao(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,uh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,l,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,l,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$m=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(t){$m.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zr[e]=zr[t]})});function hh(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||zr.hasOwnProperty(t)&&zr[t]?(""+e).trim():e+"px"}function fh(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var l=r.indexOf("--")===0,s=hh(r,e[r],l);r==="float"&&(r="cssFloat"),l?t.setProperty(r,s):t[r]=s}}var Hm=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(t,e){if(e){if(Hm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function uo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ho=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fo=null,nr=null,rr=null;function Mc(t){if(t=Nl(t)){if(typeof fo!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Gs(e),fo(t.stateNode,t.type,e))}}function ph(t){nr?rr?rr.push(t):rr=[t]:nr=t}function mh(){if(nr){var t=nr,e=rr;if(rr=nr=null,Mc(t),e)for(t=0;t<e.length;t++)Mc(e[t])}}function xh(t,e){return t(e)}function gh(){}var Ni=!1;function jh(t,e,r){if(Ni)return t(e,r);Ni=!0;try{return xh(t,e,r)}finally{Ni=!1,(nr!==null||rr!==null)&&(gh(),mh())}}function Zr(t,e){var r=t.stateNode;if(r===null)return null;var l=Gs(r);if(l===null)return null;r=l[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(E(231,e,typeof r));return r}var po=!1;if(At)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){po=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{po=!1}function Um(t,e,r,l,s,i,o,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(h){this.onError(h)}}var $r=!1,hs=null,fs=!1,mo=null,Wm={onError:function(t){$r=!0,hs=t}};function Vm(t,e,r,l,s,i,o,a,c){$r=!1,hs=null,Um.apply(Wm,arguments)}function Xm(t,e,r,l,s,i,o,a,c){if(Vm.apply(this,arguments),$r){if($r){var d=hs;$r=!1,hs=null}else throw Error(E(198));fs||(fs=!0,mo=d)}}function Mn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function vh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ic(t){if(Mn(t)!==t)throw Error(E(188))}function Gm(t){var e=t.alternate;if(!e){if(e=Mn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var r=t,l=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(l=s.return,l!==null){r=l;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return Ic(s),t;if(i===l)return Ic(s),e;i=i.sibling}throw Error(E(188))}if(r.return!==l.return)r=s,l=i;else{for(var o=!1,a=s.child;a;){if(a===r){o=!0,r=s,l=i;break}if(a===l){o=!0,l=s,r=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===r){o=!0,r=i,l=s;break}if(a===l){o=!0,l=i,r=s;break}a=a.sibling}if(!o)throw Error(E(189))}}if(r.alternate!==l)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?t:e}function yh(t){return t=Gm(t),t!==null?wh(t):null}function wh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wh(t);if(e!==null)return e;t=t.sibling}return null}var Ch=et.unstable_scheduleCallback,Fc=et.unstable_cancelCallback,Qm=et.unstable_shouldYield,Km=et.unstable_requestPaint,je=et.unstable_now,Ym=et.unstable_getCurrentPriorityLevel,da=et.unstable_ImmediatePriority,_h=et.unstable_UserBlockingPriority,ps=et.unstable_NormalPriority,Zm=et.unstable_LowPriority,bh=et.unstable_IdlePriority,Us=null,kt=null;function Jm(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Us,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:tx,qm=Math.log,ex=Math.LN2;function tx(t){return t>>>=0,t===0?32:31-(qm(t)/ex|0)|0}var Ml=64,Il=4194304;function Ar(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ms(t,e){var r=t.pendingLanes;if(r===0)return 0;var l=0,s=t.suspendedLanes,i=t.pingedLanes,o=r&268435455;if(o!==0){var a=o&~s;a!==0?l=Ar(a):(i&=o,i!==0&&(l=Ar(i)))}else o=r&~s,o!==0?l=Ar(o):i!==0&&(l=Ar(i));if(l===0)return 0;if(e!==0&&e!==l&&!(e&s)&&(s=l&-l,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(l&4&&(l|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=l;0<e;)r=31-gt(e),s=1<<r,l|=t[r],e&=~s;return l}function nx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(t,e){for(var r=t.suspendedLanes,l=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-gt(i),a=1<<o,c=s[o];c===-1?(!(a&r)||a&l)&&(s[o]=nx(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function xo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nh(){var t=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),t}function ki(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function _l(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=r}function lx(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-gt(r),i=1<<s;e[s]=0,l[s]=-1,t[s]=-1,r&=~i}}function ua(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var l=31-gt(r),s=1<<l;s&e|t[l]&e&&(t[l]|=e),r&=~s}}var ee=0;function kh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sh,ha,Th,Eh,Bh,go=!1,Fl=[],Zt=null,Jt=null,qt=null,Jr=new Map,qr=new Map,Vt=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oc(t,e){switch(t){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Jr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(e.pointerId)}}function Sr(t,e,r,l,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:l,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Nl(e),e!==null&&ha(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function ix(t,e,r,l,s){switch(e){case"focusin":return Zt=Sr(Zt,t,e,r,l,s),!0;case"dragenter":return Jt=Sr(Jt,t,e,r,l,s),!0;case"mouseover":return qt=Sr(qt,t,e,r,l,s),!0;case"pointerover":var i=s.pointerId;return Jr.set(i,Sr(Jr.get(i)||null,t,e,r,l,s)),!0;case"gotpointercapture":return i=s.pointerId,qr.set(i,Sr(qr.get(i)||null,t,e,r,l,s)),!0}return!1}function Rh(t){var e=wn(t.target);if(e!==null){var r=Mn(e);if(r!==null){if(e=r.tag,e===13){if(e=vh(r),e!==null){t.blockedOn=e,Bh(t.priority,function(){Th(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function es(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=jo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);ho=l,r.target.dispatchEvent(l),ho=null}else return e=Nl(r),e!==null&&ha(e),t.blockedOn=r,!1;e.shift()}return!0}function zc(t,e,r){es(t)&&r.delete(e)}function ox(){go=!1,Zt!==null&&es(Zt)&&(Zt=null),Jt!==null&&es(Jt)&&(Jt=null),qt!==null&&es(qt)&&(qt=null),Jr.forEach(zc),qr.forEach(zc)}function Tr(t,e){t.blockedOn===e&&(t.blockedOn=null,go||(go=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,ox)))}function el(t){function e(s){return Tr(s,t)}if(0<Fl.length){Tr(Fl[0],t);for(var r=1;r<Fl.length;r++){var l=Fl[r];l.blockedOn===t&&(l.blockedOn=null)}}for(Zt!==null&&Tr(Zt,t),Jt!==null&&Tr(Jt,t),qt!==null&&Tr(qt,t),Jr.forEach(e),qr.forEach(e),r=0;r<Vt.length;r++)l=Vt[r],l.blockedOn===t&&(l.blockedOn=null);for(;0<Vt.length&&(r=Vt[0],r.blockedOn===null);)Rh(r),r.blockedOn===null&&Vt.shift()}var lr=Ot.ReactCurrentBatchConfig,xs=!0;function ax(t,e,r,l){var s=ee,i=lr.transition;lr.transition=null;try{ee=1,fa(t,e,r,l)}finally{ee=s,lr.transition=i}}function cx(t,e,r,l){var s=ee,i=lr.transition;lr.transition=null;try{ee=4,fa(t,e,r,l)}finally{ee=s,lr.transition=i}}function fa(t,e,r,l){if(xs){var s=jo(t,e,r,l);if(s===null)Mi(t,e,l,gs,r),Oc(t,l);else if(ix(s,t,e,r,l))l.stopPropagation();else if(Oc(t,l),e&4&&-1<sx.indexOf(t)){for(;s!==null;){var i=Nl(s);if(i!==null&&Sh(i),i=jo(t,e,r,l),i===null&&Mi(t,e,l,gs,r),i===s)break;s=i}s!==null&&l.stopPropagation()}else Mi(t,e,l,null,r)}}var gs=null;function jo(t,e,r,l){if(gs=null,t=ca(l),t=wn(t),t!==null)if(e=Mn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=vh(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gs=t,null}function Lh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ym()){case da:return 1;case _h:return 4;case ps:case Zm:return 16;case bh:return 536870912;default:return 16}default:return 16}}var Gt=null,pa=null,ts=null;function Dh(){if(ts)return ts;var t,e=pa,r=e.length,l,s="value"in Gt?Gt.value:Gt.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var o=r-t;for(l=1;l<=o&&e[r-l]===s[i-l];l++);return ts=s.slice(t,1<l?1-l:void 0)}function ns(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function $c(){return!1}function rt(t){function e(r,l,s,i,o){this._reactName=r,this._targetInst=s,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ol:$c,this.isPropagationStopped=$c,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=rt(vr),bl=pe({},vr,{view:0,detail:0}),dx=rt(bl),Si,Ti,Er,Ws=pe({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Er&&(Er&&t.type==="mousemove"?(Si=t.screenX-Er.screenX,Ti=t.screenY-Er.screenY):Ti=Si=0,Er=t),Si)},movementY:function(t){return"movementY"in t?t.movementY:Ti}}),Hc=rt(Ws),ux=pe({},Ws,{dataTransfer:0}),hx=rt(ux),fx=pe({},bl,{relatedTarget:0}),Ei=rt(fx),px=pe({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),mx=rt(px),xx=pe({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gx=rt(xx),jx=pe({},vr,{data:0}),Uc=rt(jx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wx[t])?!!e[t]:!1}function xa(){return Cx}var _x=pe({},bl,{key:function(t){if(t.key){var e=vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ns(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(t){return t.type==="keypress"?ns(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ns(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bx=rt(_x),Nx=pe({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wc=rt(Nx),kx=pe({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Sx=rt(kx),Tx=pe({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=rt(Tx),Bx=pe({},Ws,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=rt(Bx),Lx=[9,13,27,32],ga=At&&"CompositionEvent"in window,Hr=null;At&&"documentMode"in document&&(Hr=document.documentMode);var Dx=At&&"TextEvent"in window&&!Hr,Ph=At&&(!ga||Hr&&8<Hr&&11>=Hr),Vc=" ",Xc=!1;function Ah(t,e){switch(t){case"keyup":return Lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wn=!1;function Px(t,e){switch(t){case"compositionend":return Mh(e);case"keypress":return e.which!==32?null:(Xc=!0,Vc);case"textInput":return t=e.data,t===Vc&&Xc?null:t;default:return null}}function Ax(t,e){if(Wn)return t==="compositionend"||!ga&&Ah(t,e)?(t=Dh(),ts=pa=Gt=null,Wn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ph&&e.locale!=="ko"?null:e.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mx[t.type]:e==="textarea"}function Ih(t,e,r,l){ph(l),e=js(e,"onChange"),0<e.length&&(r=new ma("onChange","change",null,r,l),t.push({event:r,listeners:e}))}var Ur=null,tl=null;function Ix(t){Qh(t,0)}function Vs(t){var e=Gn(t);if(oh(e))return t}function Fx(t,e){if(t==="change")return e}var Fh=!1;if(At){var Bi;if(At){var Ri="oninput"in document;if(!Ri){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Ri=typeof Qc.oninput=="function"}Bi=Ri}else Bi=!1;Fh=Bi&&(!document.documentMode||9<document.documentMode)}function Kc(){Ur&&(Ur.detachEvent("onpropertychange",Oh),tl=Ur=null)}function Oh(t){if(t.propertyName==="value"&&Vs(tl)){var e=[];Ih(e,tl,t,ca(t)),jh(Ix,e)}}function Ox(t,e,r){t==="focusin"?(Kc(),Ur=e,tl=r,Ur.attachEvent("onpropertychange",Oh)):t==="focusout"&&Kc()}function zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vs(tl)}function $x(t,e){if(t==="click")return Vs(e)}function Hx(t,e){if(t==="input"||t==="change")return Vs(e)}function Ux(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:Ux;function nl(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),l=Object.keys(e);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var s=r[l];if(!qi.call(e,s)||!vt(t[s],e[s]))return!1}return!0}function Yc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zc(t,e){var r=Yc(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=e&&l>=e)return{node:r,offset:e-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yc(r)}}function zh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $h(){for(var t=window,e=us();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=us(t.document)}return e}function ja(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Wx(t){var e=$h(),r=t.focusedElem,l=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&zh(r.ownerDocument.documentElement,r)){if(l!==null&&ja(r)){if(e=l.start,t=l.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(l.start,s);l=l.end===void 0?i:Math.min(l.end,s),!t.extend&&i>l&&(s=l,l=i,i=s),s=Zc(r,i);var o=Zc(r,l);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>l?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vx=At&&"documentMode"in document&&11>=document.documentMode,Vn=null,vo=null,Wr=null,yo=!1;function Jc(t,e,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;yo||Vn==null||Vn!==us(l)||(l=Vn,"selectionStart"in l&&ja(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wr&&nl(Wr,l)||(Wr=l,l=js(vo,"onSelect"),0<l.length&&(e=new ma("onSelect","select",null,e,r),t.push({event:e,listeners:l}),e.target=Vn)))}function zl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Xn={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},Li={},Hh={};At&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Xs(t){if(Li[t])return Li[t];if(!Xn[t])return t;var e=Xn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Hh)return Li[t]=e[r];return t}var Uh=Xs("animationend"),Wh=Xs("animationiteration"),Vh=Xs("animationstart"),Xh=Xs("transitionend"),Gh=new Map,qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(t,e){Gh.set(t,e),An(e,[t])}for(var Di=0;Di<qc.length;Di++){var Pi=qc[Di],Xx=Pi.toLowerCase(),Gx=Pi[0].toUpperCase()+Pi.slice(1);hn(Xx,"on"+Gx)}hn(Uh,"onAnimationEnd");hn(Wh,"onAnimationIteration");hn(Vh,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Xh,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function ed(t,e,r){var l=t.type||"unknown-event";t.currentTarget=r,Xm(l,e,void 0,t),t.currentTarget=null}function Qh(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],s=l.event;l=l.listeners;e:{var i=void 0;if(e)for(var o=l.length-1;0<=o;o--){var a=l[o],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;ed(s,a,d),i=c}else for(o=0;o<l.length;o++){if(a=l[o],c=a.instance,d=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;ed(s,a,d),i=c}}}if(fs)throw t=mo,fs=!1,mo=null,t}function le(t,e){var r=e[No];r===void 0&&(r=e[No]=new Set);var l=t+"__bubble";r.has(l)||(Kh(e,t,2,!1),r.add(l))}function Ai(t,e,r){var l=0;e&&(l|=4),Kh(r,t,l,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function rl(t){if(!t[$l]){t[$l]=!0,nh.forEach(function(r){r!=="selectionchange"&&(Qx.has(r)||Ai(r,!1,t),Ai(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,Ai("selectionchange",!1,e))}}function Kh(t,e,r,l){switch(Lh(e)){case 1:var s=ax;break;case 4:s=cx;break;default:s=fa}r=s.bind(null,e,r,t),s=void 0,!po||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),l?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Mi(t,e,r,l,s){var i=l;if(!(e&1)&&!(e&2)&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var a=l.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;a!==null;){if(o=wn(a),o===null)return;if(c=o.tag,c===5||c===6){l=i=o;continue e}a=a.parentNode}}l=l.return}jh(function(){var d=i,h=ca(r),f=[];e:{var x=Gh.get(t);if(x!==void 0){var g=ma,v=t;switch(t){case"keypress":if(ns(r)===0)break e;case"keydown":case"keyup":g=bx;break;case"focusin":v="focus",g=Ei;break;case"focusout":v="blur",g=Ei;break;case"beforeblur":case"afterblur":g=Ei;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Sx;break;case Uh:case Wh:case Vh:g=mx;break;case Xh:g=Ex;break;case"scroll":g=dx;break;case"wheel":g=Rx;break;case"copy":case"cut":case"paste":g=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wc}var y=(e&4)!==0,b=!y&&t==="scroll",m=y?x!==null?x+"Capture":null:x;y=[];for(var p=d,j;p!==null;){j=p;var w=j.stateNode;if(j.tag===5&&w!==null&&(j=w,m!==null&&(w=Zr(p,m),w!=null&&y.push(ll(p,w,j)))),b)break;p=p.return}0<y.length&&(x=new g(x,v,null,r,h),f.push({event:x,listeners:y}))}}if(!(e&7)){e:{if(x=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",x&&r!==ho&&(v=r.relatedTarget||r.fromElement)&&(wn(v)||v[Mt]))break e;if((g||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=d,v=v?wn(v):null,v!==null&&(b=Mn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(y=Hc,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Wc,w="onPointerLeave",m="onPointerEnter",p="pointer"),b=g==null?x:Gn(g),j=v==null?x:Gn(v),x=new y(w,p+"leave",g,r,h),x.target=b,x.relatedTarget=j,w=null,wn(h)===d&&(y=new y(m,p+"enter",v,r,h),y.target=j,y.relatedTarget=b,w=y),b=w,g&&v)t:{for(y=g,m=v,p=0,j=y;j;j=zn(j))p++;for(j=0,w=m;w;w=zn(w))j++;for(;0<p-j;)y=zn(y),p--;for(;0<j-p;)m=zn(m),j--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=zn(y),m=zn(m)}y=null}else y=null;g!==null&&td(f,x,g,y,!1),v!==null&&b!==null&&td(f,b,v,y,!0)}}e:{if(x=d?Gn(d):window,g=x.nodeName&&x.nodeName.toLowerCase(),g==="select"||g==="input"&&x.type==="file")var _=Fx;else if(Gc(x))if(Fh)_=Hx;else{_=zx;var S=Ox}else(g=x.nodeName)&&g.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=$x);if(_&&(_=_(t,d))){Ih(f,_,r,h);break e}S&&S(t,x,d),t==="focusout"&&(S=x._wrapperState)&&S.controlled&&x.type==="number"&&io(x,"number",x.value)}switch(S=d?Gn(d):window,t){case"focusin":(Gc(S)||S.contentEditable==="true")&&(Vn=S,vo=d,Wr=null);break;case"focusout":Wr=vo=Vn=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,Jc(f,r,h);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":Jc(f,r,h)}var T;if(ga)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Wn?Ah(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Ph&&r.locale!=="ko"&&(Wn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Wn&&(T=Dh()):(Gt=h,pa="value"in Gt?Gt.value:Gt.textContent,Wn=!0)),S=js(d,L),0<S.length&&(L=new Uc(L,t,null,r,h),f.push({event:L,listeners:S}),T?L.data=T:(T=Mh(r),T!==null&&(L.data=T)))),(T=Dx?Px(t,r):Ax(t,r))&&(d=js(d,"onBeforeInput"),0<d.length&&(h=new Uc("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:d}),h.data=T))}Qh(f,e)})}function ll(t,e,r){return{instance:t,listener:e,currentTarget:r}}function js(t,e){for(var r=e+"Capture",l=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Zr(t,r),i!=null&&l.unshift(ll(t,i,s)),i=Zr(t,e),i!=null&&l.push(ll(t,i,s))),t=t.return}return l}function zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function td(t,e,r,l,s){for(var i=e._reactName,o=[];r!==null&&r!==l;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===l)break;a.tag===5&&d!==null&&(a=d,s?(c=Zr(r,i),c!=null&&o.unshift(ll(r,c,a))):s||(c=Zr(r,i),c!=null&&o.push(ll(r,c,a)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Kx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function nd(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(Yx,"")}function Hl(t,e,r){if(e=nd(e),nd(t)!==e&&r)throw Error(E(425))}function vs(){}var wo=null,Co=null;function _o(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(t){return rd.resolve(null).then(t).catch(qx)}:bo;function qx(t){setTimeout(function(){throw t})}function Ii(t,e){var r=e,l=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(l===0){t.removeChild(s),el(e);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=s}while(r);el(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var yr=Math.random().toString(36).slice(2),_t="__reactFiber$"+yr,sl="__reactProps$"+yr,Mt="__reactContainer$"+yr,No="__reactEvents$"+yr,eg="__reactListeners$"+yr,tg="__reactHandles$"+yr;function wn(t){var e=t[_t];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Mt]||r[_t]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=ld(t);t!==null;){if(r=t[_t])return r;t=ld(t)}return e}t=r,r=t.parentNode}return null}function Nl(t){return t=t[_t]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Gs(t){return t[sl]||null}var ko=[],Qn=-1;function fn(t){return{current:t}}function ie(t){0>Qn||(t.current=ko[Qn],ko[Qn]=null,Qn--)}function ne(t,e){Qn++,ko[Qn]=t.current,t.current=e}var an={},Fe=fn(an),Ve=fn(!1),Tn=an;function cr(t,e){var r=t.type.contextTypes;if(!r)return an;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===e)return l.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Xe(t){return t=t.childContextTypes,t!=null}function ys(){ie(Ve),ie(Fe)}function sd(t,e,r){if(Fe.current!==an)throw Error(E(168));ne(Fe,e),ne(Ve,r)}function Yh(t,e,r){var l=t.stateNode;if(e=e.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var s in l)if(!(s in e))throw Error(E(108,Om(t)||"Unknown",s));return pe({},r,l)}function ws(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||an,Tn=Fe.current,ne(Fe,t),ne(Ve,Ve.current),!0}function id(t,e,r){var l=t.stateNode;if(!l)throw Error(E(169));r?(t=Yh(t,e,Tn),l.__reactInternalMemoizedMergedChildContext=t,ie(Ve),ie(Fe),ne(Fe,t)):ie(Ve),ne(Ve,r)}var Rt=null,Qs=!1,Fi=!1;function Zh(t){Rt===null?Rt=[t]:Rt.push(t)}function ng(t){Qs=!0,Zh(t)}function pn(){if(!Fi&&Rt!==null){Fi=!0;var t=0,e=ee;try{var r=Rt;for(ee=1;t<r.length;t++){var l=r[t];do l=l(!0);while(l!==null)}Rt=null,Qs=!1}catch(s){throw Rt!==null&&(Rt=Rt.slice(t+1)),Ch(da,pn),s}finally{ee=e,Fi=!1}}return null}var Kn=[],Yn=0,Cs=null,_s=0,st=[],it=0,En=null,Lt=1,Dt="";function vn(t,e){Kn[Yn++]=_s,Kn[Yn++]=Cs,Cs=t,_s=e}function Jh(t,e,r){st[it++]=Lt,st[it++]=Dt,st[it++]=En,En=t;var l=Lt;t=Dt;var s=32-gt(l)-1;l&=~(1<<s),r+=1;var i=32-gt(e)+s;if(30<i){var o=s-s%5;i=(l&(1<<o)-1).toString(32),l>>=o,s-=o,Lt=1<<32-gt(e)+s|r<<s|l,Dt=i+t}else Lt=1<<i|r<<s|l,Dt=t}function va(t){t.return!==null&&(vn(t,1),Jh(t,1,0))}function ya(t){for(;t===Cs;)Cs=Kn[--Yn],Kn[Yn]=null,_s=Kn[--Yn],Kn[Yn]=null;for(;t===En;)En=st[--it],st[it]=null,Dt=st[--it],st[it]=null,Lt=st[--it],st[it]=null}var Je=null,Ze=null,ae=!1,mt=null;function qh(t,e){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function od(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Je=t,Ze=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Je=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=En!==null?{id:Lt,overflow:Dt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Je=t,Ze=null,!0):!1;default:return!1}}function So(t){return(t.mode&1)!==0&&(t.flags&128)===0}function To(t){if(ae){var e=Ze;if(e){var r=e;if(!od(t,e)){if(So(t))throw Error(E(418));e=en(r.nextSibling);var l=Je;e&&od(t,e)?qh(l,r):(t.flags=t.flags&-4097|2,ae=!1,Je=t)}}else{if(So(t))throw Error(E(418));t.flags=t.flags&-4097|2,ae=!1,Je=t}}}function ad(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Je=t}function Ul(t){if(t!==Je)return!1;if(!ae)return ad(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_o(t.type,t.memoizedProps)),e&&(e=Ze)){if(So(t))throw ef(),Error(E(418));for(;e;)qh(t,e),e=en(e.nextSibling)}if(ad(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ze=en(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=Je?en(t.stateNode.nextSibling):null;return!0}function ef(){for(var t=Ze;t;)t=en(t.nextSibling)}function dr(){Ze=Je=null,ae=!1}function wa(t){mt===null?mt=[t]:mt.push(t)}var rg=Ot.ReactCurrentBatchConfig;function ft(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var bs=fn(null),Ns=null,Zn=null,Ca=null;function _a(){Ca=Zn=Ns=null}function ba(t){var e=bs.current;ie(bs),t._currentValue=e}function Eo(t,e,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===r)break;t=t.return}}function sr(t,e){Ns=t,Ca=Zn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(Ca!==t)if(t={context:t,memoizedValue:e,next:null},Zn===null){if(Ns===null)throw Error(E(308));Zn=t,Ns.dependencies={lanes:0,firstContext:t}}else Zn=Zn.next=t;return e}var Cn=null;function Na(t){Cn===null?Cn=[t]:Cn.push(t)}function tf(t,e,r,l){var s=e.interleaved;return s===null?(r.next=r,Na(e)):(r.next=s.next,s.next=r),e.interleaved=r,It(t,l)}function It(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Wt=!1;function ka(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,J&2){var s=l.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),l.pending=e,It(t,r)}return s=l.interleaved,s===null?(e.next=e,Na(l)):(e.next=s.next,s.next=e),l.interleaved=e,It(t,r)}function rs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,ua(t,r)}}function cd(t,e){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:l.shared,effects:l.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ks(t,e,r,l){var s=t.updateQueue;Wt=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=c))}if(i!==null){var f=s.baseState;o=0,h=d=c=null,a=i;do{var x=a.lane,g=a.eventTime;if((l&x)===x){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(x=e,g=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,x);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,x=typeof v=="function"?v.call(g,f,x):v,x==null)break e;f=pe({},f,x);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=s.effects,x===null?s.effects=[a]:x.push(a))}else g={eventTime:g,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=g,c=f):h=h.next=g,o|=x;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;x=a,a=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);if(h===null&&(c=f),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Rn|=o,t.lanes=o,t.memoizedState=f}}function dd(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var l=t[e],s=l.callback;if(s!==null){if(l.callback=null,l=r,typeof s!="function")throw Error(E(191,s));s.call(l)}}}var rf=new th.Component().refs;function Bo(t,e,r,l){e=t.memoizedState,r=r(l,e),r=r==null?e:pe({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ks={isMounted:function(t){return(t=t._reactInternals)?Mn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var l=ze(),s=rn(t),i=Pt(l,s);i.payload=e,r!=null&&(i.callback=r),e=tn(t,i,s),e!==null&&(jt(e,t,s,l),rs(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var l=ze(),s=rn(t),i=Pt(l,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=tn(t,i,s),e!==null&&(jt(e,t,s,l),rs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ze(),l=rn(t),s=Pt(r,l);s.tag=2,e!=null&&(s.callback=e),e=tn(t,s,l),e!==null&&(jt(e,t,l,r),rs(e,t,l))}};function ud(t,e,r,l,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,o):e.prototype&&e.prototype.isPureReactComponent?!nl(r,l)||!nl(s,i):!0}function lf(t,e,r){var l=!1,s=an,i=e.contextType;return typeof i=="object"&&i!==null?i=ct(i):(s=Xe(e)?Tn:Fe.current,l=e.contextTypes,i=(l=l!=null)?cr(t,s):an),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ks,t.stateNode=e,e._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function hd(t,e,r,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,l),e.state!==t&&Ks.enqueueReplaceState(e,e.state,null)}function Ro(t,e,r,l){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs=rf,ka(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ct(i):(i=Xe(e)?Tn:Fe.current,s.context=cr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Bo(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ks.enqueueReplaceState(s,s.state,null),ks(t,r,s,l),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Br(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var l=r.stateNode}if(!l)throw Error(E(147,t));var s=l,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;a===rf&&(a=s.refs={}),o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fd(t){var e=t._init;return e(t._payload)}function sf(t){function e(m,p){if(t){var j=m.deletions;j===null?(m.deletions=[p],m.flags|=16):j.push(p)}}function r(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function l(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=ln(m,p),m.index=0,m.sibling=null,m}function i(m,p,j){return m.index=j,t?(j=m.alternate,j!==null?(j=j.index,j<p?(m.flags|=2,p):j):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,j,w){return p===null||p.tag!==6?(p=Vi(j,m.mode,w),p.return=m,p):(p=s(p,j),p.return=m,p)}function c(m,p,j,w){var _=j.type;return _===Un?h(m,p,j.props.children,w,j.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&fd(_)===p.type)?(w=s(p,j.props),w.ref=Br(m,p,j),w.return=m,w):(w=cs(j.type,j.key,j.props,null,m.mode,w),w.ref=Br(m,p,j),w.return=m,w)}function d(m,p,j,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==j.containerInfo||p.stateNode.implementation!==j.implementation?(p=Xi(j,m.mode,w),p.return=m,p):(p=s(p,j.children||[]),p.return=m,p)}function h(m,p,j,w,_){return p===null||p.tag!==7?(p=Nn(j,m.mode,w,_),p.return=m,p):(p=s(p,j),p.return=m,p)}function f(m,p,j){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Vi(""+p,m.mode,j),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Dl:return j=cs(p.type,p.key,p.props,null,m.mode,j),j.ref=Br(m,null,p),j.return=m,j;case Hn:return p=Xi(p,m.mode,j),p.return=m,p;case Ut:var w=p._init;return f(m,w(p._payload),j)}if(Pr(p)||Nr(p))return p=Nn(p,m.mode,j,null),p.return=m,p;Wl(m,p)}return null}function x(m,p,j,w){var _=p!==null?p.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return _!==null?null:a(m,p,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Dl:return j.key===_?c(m,p,j,w):null;case Hn:return j.key===_?d(m,p,j,w):null;case Ut:return _=j._init,x(m,p,_(j._payload),w)}if(Pr(j)||Nr(j))return _!==null?null:h(m,p,j,w,null);Wl(m,j)}return null}function g(m,p,j,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(j)||null,a(p,m,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Dl:return m=m.get(w.key===null?j:w.key)||null,c(p,m,w,_);case Hn:return m=m.get(w.key===null?j:w.key)||null,d(p,m,w,_);case Ut:var S=w._init;return g(m,p,j,S(w._payload),_)}if(Pr(w)||Nr(w))return m=m.get(j)||null,h(p,m,w,_,null);Wl(p,w)}return null}function v(m,p,j,w){for(var _=null,S=null,T=p,L=p=0,z=null;T!==null&&L<j.length;L++){T.index>L?(z=T,T=null):z=T.sibling;var F=x(m,T,j[L],w);if(F===null){T===null&&(T=z);break}t&&T&&F.alternate===null&&e(m,T),p=i(F,p,L),S===null?_=F:S.sibling=F,S=F,T=z}if(L===j.length)return r(m,T),ae&&vn(m,L),_;if(T===null){for(;L<j.length;L++)T=f(m,j[L],w),T!==null&&(p=i(T,p,L),S===null?_=T:S.sibling=T,S=T);return ae&&vn(m,L),_}for(T=l(m,T);L<j.length;L++)z=g(T,m,L,j[L],w),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?L:z.key),p=i(z,p,L),S===null?_=z:S.sibling=z,S=z);return t&&T.forEach(function(G){return e(m,G)}),ae&&vn(m,L),_}function y(m,p,j,w){var _=Nr(j);if(typeof _!="function")throw Error(E(150));if(j=_.call(j),j==null)throw Error(E(151));for(var S=_=null,T=p,L=p=0,z=null,F=j.next();T!==null&&!F.done;L++,F=j.next()){T.index>L?(z=T,T=null):z=T.sibling;var G=x(m,T,F.value,w);if(G===null){T===null&&(T=z);break}t&&T&&G.alternate===null&&e(m,T),p=i(G,p,L),S===null?_=G:S.sibling=G,S=G,T=z}if(F.done)return r(m,T),ae&&vn(m,L),_;if(T===null){for(;!F.done;L++,F=j.next())F=f(m,F.value,w),F!==null&&(p=i(F,p,L),S===null?_=F:S.sibling=F,S=F);return ae&&vn(m,L),_}for(T=l(m,T);!F.done;L++,F=j.next())F=g(T,m,L,F.value,w),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?L:F.key),p=i(F,p,L),S===null?_=F:S.sibling=F,S=F);return t&&T.forEach(function(te){return e(m,te)}),ae&&vn(m,L),_}function b(m,p,j,w){if(typeof j=="object"&&j!==null&&j.type===Un&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Dl:e:{for(var _=j.key,S=p;S!==null;){if(S.key===_){if(_=j.type,_===Un){if(S.tag===7){r(m,S.sibling),p=s(S,j.props.children),p.return=m,m=p;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&fd(_)===S.type){r(m,S.sibling),p=s(S,j.props),p.ref=Br(m,S,j),p.return=m,m=p;break e}r(m,S);break}else e(m,S);S=S.sibling}j.type===Un?(p=Nn(j.props.children,m.mode,w,j.key),p.return=m,m=p):(w=cs(j.type,j.key,j.props,null,m.mode,w),w.ref=Br(m,p,j),w.return=m,m=w)}return o(m);case Hn:e:{for(S=j.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===j.containerInfo&&p.stateNode.implementation===j.implementation){r(m,p.sibling),p=s(p,j.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else e(m,p);p=p.sibling}p=Xi(j,m.mode,w),p.return=m,m=p}return o(m);case Ut:return S=j._init,b(m,p,S(j._payload),w)}if(Pr(j))return v(m,p,j,w);if(Nr(j))return y(m,p,j,w);Wl(m,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,p!==null&&p.tag===6?(r(m,p.sibling),p=s(p,j),p.return=m,m=p):(r(m,p),p=Vi(j,m.mode,w),p.return=m,m=p),o(m)):r(m,p)}return b}var ur=sf(!0),of=sf(!1),kl={},St=fn(kl),il=fn(kl),ol=fn(kl);function _n(t){if(t===kl)throw Error(E(174));return t}function Sa(t,e){switch(ne(ol,e),ne(il,t),ne(St,kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ao(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ao(e,t)}ie(St),ne(St,e)}function hr(){ie(St),ie(il),ie(ol)}function af(t){_n(ol.current);var e=_n(St.current),r=ao(e,t.type);e!==r&&(ne(il,t),ne(St,r))}function Ta(t){il.current===t&&(ie(St),ie(il))}var ue=fn(0);function Ss(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oi=[];function Ea(){for(var t=0;t<Oi.length;t++)Oi[t]._workInProgressVersionPrimary=null;Oi.length=0}var ls=Ot.ReactCurrentDispatcher,zi=Ot.ReactCurrentBatchConfig,Bn=0,he=null,ye=null,be=null,Ts=!1,Vr=!1,al=0,lg=0;function Ae(){throw Error(E(321))}function Ba(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!vt(t[r],e[r]))return!1;return!0}function Ra(t,e,r,l,s,i){if(Bn=i,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ls.current=t===null||t.memoizedState===null?ag:cg,t=r(l,s),Vr){i=0;do{if(Vr=!1,al=0,25<=i)throw Error(E(301));i+=1,be=ye=null,e.updateQueue=null,ls.current=dg,t=r(l,s)}while(Vr)}if(ls.current=Es,e=ye!==null&&ye.next!==null,Bn=0,be=ye=he=null,Ts=!1,e)throw Error(E(300));return t}function La(){var t=al!==0;return al=0,t}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?he.memoizedState=be=t:be=be.next=t,be}function dt(){if(ye===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=be===null?he.memoizedState:be.next;if(e!==null)be=e,ye=t;else{if(t===null)throw Error(E(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},be===null?he.memoizedState=be=t:be=be.next=t}return be}function cl(t,e){return typeof e=="function"?e(t):e}function $i(t){var e=dt(),r=e.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=t;var l=ye,s=l.baseQueue,i=r.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}l.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,l=l.baseState;var a=o=null,c=null,d=i;do{var h=d.lane;if((Bn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:t(l,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=f,o=l):c=c.next=f,he.lanes|=h,Rn|=h}d=d.next}while(d!==null&&d!==i);c===null?o=l:c.next=a,vt(l,e.memoizedState)||(We=!0),e.memoizedState=l,e.baseState=o,e.baseQueue=c,r.lastRenderedState=l}if(t=r.interleaved,t!==null){s=t;do i=s.lane,he.lanes|=i,Rn|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Hi(t){var e=dt(),r=e.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=t;var l=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);vt(i,e.memoizedState)||(We=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,l]}function cf(){}function df(t,e){var r=he,l=dt(),s=e(),i=!vt(l.memoizedState,s);if(i&&(l.memoizedState=s,We=!0),l=l.queue,Da(ff.bind(null,r,l,t),[t]),l.getSnapshot!==e||i||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,dl(9,hf.bind(null,r,l,s,e),void 0,null),Ne===null)throw Error(E(349));Bn&30||uf(r,e,s)}return s}function uf(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function hf(t,e,r,l){e.value=r,e.getSnapshot=l,pf(e)&&mf(t)}function ff(t,e,r){return r(function(){pf(e)&&mf(t)})}function pf(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!vt(t,r)}catch{return!0}}function mf(t){var e=It(t,1);e!==null&&jt(e,t,1,-1)}function pd(t){var e=Ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=og.bind(null,he,t),[e.memoizedState,t]}function dl(t,e,r,l){return t={tag:t,create:e,destroy:r,deps:l,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,e.lastEffect=t)),t}function xf(){return dt().memoizedState}function ss(t,e,r,l){var s=Ct();he.flags|=t,s.memoizedState=dl(1|e,r,void 0,l===void 0?null:l)}function Ys(t,e,r,l){var s=dt();l=l===void 0?null:l;var i=void 0;if(ye!==null){var o=ye.memoizedState;if(i=o.destroy,l!==null&&Ba(l,o.deps)){s.memoizedState=dl(e,r,i,l);return}}he.flags|=t,s.memoizedState=dl(1|e,r,i,l)}function md(t,e){return ss(8390656,8,t,e)}function Da(t,e){return Ys(2048,8,t,e)}function gf(t,e){return Ys(4,2,t,e)}function jf(t,e){return Ys(4,4,t,e)}function vf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yf(t,e,r){return r=r!=null?r.concat([t]):null,Ys(4,4,vf.bind(null,e,t),r)}function Pa(){}function wf(t,e){var r=dt();e=e===void 0?null:e;var l=r.memoizedState;return l!==null&&e!==null&&Ba(e,l[1])?l[0]:(r.memoizedState=[t,e],t)}function Cf(t,e){var r=dt();e=e===void 0?null:e;var l=r.memoizedState;return l!==null&&e!==null&&Ba(e,l[1])?l[0]:(t=t(),r.memoizedState=[t,e],t)}function _f(t,e,r){return Bn&21?(vt(r,e)||(r=Nh(),he.lanes|=r,Rn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=r)}function sg(t,e){var r=ee;ee=r!==0&&4>r?r:4,t(!0);var l=zi.transition;zi.transition={};try{t(!1),e()}finally{ee=r,zi.transition=l}}function bf(){return dt().memoizedState}function ig(t,e,r){var l=rn(t);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},Nf(t))kf(e,r);else if(r=tf(t,e,r,l),r!==null){var s=ze();jt(r,t,l,s),Sf(r,e,l)}}function og(t,e,r){var l=rn(t),s={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nf(t))kf(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,r);if(s.hasEagerState=!0,s.eagerState=a,vt(a,o)){var c=e.interleaved;c===null?(s.next=s,Na(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}r=tf(t,e,s,l),r!==null&&(s=ze(),jt(r,t,l,s),Sf(r,e,l))}}function Nf(t){var e=t.alternate;return t===he||e!==null&&e===he}function kf(t,e){Vr=Ts=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Sf(t,e,r){if(r&4194240){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,ua(t,r)}}var Es={readContext:ct,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},ag={readContext:ct,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:md,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,ss(4194308,4,vf.bind(null,e,t),r)},useLayoutEffect:function(t,e){return ss(4194308,4,t,e)},useInsertionEffect:function(t,e){return ss(4,2,t,e)},useMemo:function(t,e){var r=Ct();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var l=Ct();return e=r!==void 0?r(e):e,l.memoizedState=l.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},l.queue=t,t=t.dispatch=ig.bind(null,he,t),[l.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:pd,useDebugValue:Pa,useDeferredValue:function(t){return Ct().memoizedState=t},useTransition:function(){var t=pd(!1),e=t[0];return t=sg.bind(null,t[1]),Ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var l=he,s=Ct();if(ae){if(r===void 0)throw Error(E(407));r=r()}else{if(r=e(),Ne===null)throw Error(E(349));Bn&30||uf(l,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,md(ff.bind(null,l,i,t),[t]),l.flags|=2048,dl(9,hf.bind(null,l,i,r,e),void 0,null),r},useId:function(){var t=Ct(),e=Ne.identifierPrefix;if(ae){var r=Dt,l=Lt;r=(l&~(1<<32-gt(l)-1)).toString(32)+r,e=":"+e+"R"+r,r=al++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=lg++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cg={readContext:ct,useCallback:wf,useContext:ct,useEffect:Da,useImperativeHandle:yf,useInsertionEffect:gf,useLayoutEffect:jf,useMemo:Cf,useReducer:$i,useRef:xf,useState:function(){return $i(cl)},useDebugValue:Pa,useDeferredValue:function(t){var e=dt();return _f(e,ye.memoizedState,t)},useTransition:function(){var t=$i(cl)[0],e=dt().memoizedState;return[t,e]},useMutableSource:cf,useSyncExternalStore:df,useId:bf,unstable_isNewReconciler:!1},dg={readContext:ct,useCallback:wf,useContext:ct,useEffect:Da,useImperativeHandle:yf,useInsertionEffect:gf,useLayoutEffect:jf,useMemo:Cf,useReducer:Hi,useRef:xf,useState:function(){return Hi(cl)},useDebugValue:Pa,useDeferredValue:function(t){var e=dt();return ye===null?e.memoizedState=t:_f(e,ye.memoizedState,t)},useTransition:function(){var t=Hi(cl)[0],e=dt().memoizedState;return[t,e]},useMutableSource:cf,useSyncExternalStore:df,useId:bf,unstable_isNewReconciler:!1};function fr(t,e){try{var r="",l=e;do r+=Fm(l),l=l.return;while(l);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ui(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Lo(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var ug=typeof WeakMap=="function"?WeakMap:Map;function Tf(t,e,r){r=Pt(-1,r),r.tag=3,r.payload={element:null};var l=e.value;return r.callback=function(){Rs||(Rs=!0,Ho=l),Lo(t,e)},r}function Ef(t,e,r){r=Pt(-1,r),r.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var s=e.value;r.payload=function(){return l(s)},r.callback=function(){Lo(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Lo(t,e),typeof l!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function xd(t,e,r){var l=t.pingCache;if(l===null){l=t.pingCache=new ug;var s=new Set;l.set(e,s)}else s=l.get(e),s===void 0&&(s=new Set,l.set(e,s));s.has(r)||(s.add(r),t=Ng.bind(null,t,e,r),e.then(t,t))}function gd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jd(t,e,r,l,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Pt(-1,1),e.tag=2,tn(r,e,1))),r.lanes|=1),t)}var hg=Ot.ReactCurrentOwner,We=!1;function Oe(t,e,r,l){e.child=t===null?of(e,null,r,l):ur(e,t.child,r,l)}function vd(t,e,r,l,s){r=r.render;var i=e.ref;return sr(e,s),l=Ra(t,e,r,l,i,s),r=La(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ft(t,e,s)):(ae&&r&&va(e),e.flags|=1,Oe(t,e,l,s),e.child)}function yd(t,e,r,l,s){if(t===null){var i=r.type;return typeof i=="function"&&!Ha(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,Bf(t,e,i,l,s)):(t=cs(r.type,null,l,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:nl,r(o,l)&&t.ref===e.ref)return Ft(t,e,s)}return e.flags|=1,t=ln(i,l),t.ref=e.ref,t.return=e,e.child=t}function Bf(t,e,r,l,s){if(t!==null){var i=t.memoizedProps;if(nl(i,l)&&t.ref===e.ref)if(We=!1,e.pendingProps=l=i,(t.lanes&s)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Ft(t,e,s)}return Do(t,e,r,l,s)}function Rf(t,e,r){var l=e.pendingProps,s=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(qn,Ke),Ke|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(qn,Ke),Ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=i!==null?i.baseLanes:r,ne(qn,Ke),Ke|=l}else i!==null?(l=i.baseLanes|r,e.memoizedState=null):l=r,ne(qn,Ke),Ke|=l;return Oe(t,e,s,r),e.child}function Lf(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Do(t,e,r,l,s){var i=Xe(r)?Tn:Fe.current;return i=cr(e,i),sr(e,s),r=Ra(t,e,r,l,i,s),l=La(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ft(t,e,s)):(ae&&l&&va(e),e.flags|=1,Oe(t,e,r,s),e.child)}function wd(t,e,r,l,s){if(Xe(r)){var i=!0;ws(e)}else i=!1;if(sr(e,s),e.stateNode===null)is(t,e),lf(e,r,l),Ro(e,r,l,s),l=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=ct(d):(d=Xe(r)?Tn:Fe.current,d=cr(e,d));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==l||c!==d)&&hd(e,o,l,d),Wt=!1;var x=e.memoizedState;o.state=x,ks(e,l,o,s),c=e.memoizedState,a!==l||x!==c||Ve.current||Wt?(typeof h=="function"&&(Bo(e,r,h,l),c=e.memoizedState),(a=Wt||ud(e,r,a,l,x,c,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=c),o.props=l,o.state=c,o.context=d,l=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{o=e.stateNode,nf(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:ft(e.type,a),o.props=d,f=e.pendingProps,x=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Xe(r)?Tn:Fe.current,c=cr(e,c));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||x!==c)&&hd(e,o,l,c),Wt=!1,x=e.memoizedState,o.state=x,ks(e,l,o,s);var v=e.memoizedState;a!==f||x!==v||Ve.current||Wt?(typeof g=="function"&&(Bo(e,r,g,l),v=e.memoizedState),(d=Wt||ud(e,r,d,l,x,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=v),o.props=l,o.state=v,o.context=c,l=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),l=!1)}return Po(t,e,r,l,i,s)}function Po(t,e,r,l,s,i){Lf(t,e);var o=(e.flags&128)!==0;if(!l&&!o)return s&&id(e,r,!1),Ft(t,e,i);l=e.stateNode,hg.current=e;var a=o&&typeof r.getDerivedStateFromError!="function"?null:l.render();return e.flags|=1,t!==null&&o?(e.child=ur(e,t.child,null,i),e.child=ur(e,null,a,i)):Oe(t,e,a,i),e.memoizedState=l.state,s&&id(e,r,!0),e.child}function Df(t){var e=t.stateNode;e.pendingContext?sd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sd(t,e.context,!1),Sa(t,e.containerInfo)}function Cd(t,e,r,l,s){return dr(),wa(s),e.flags|=256,Oe(t,e,r,l),e.child}var Ao={dehydrated:null,treeContext:null,retryLane:0};function Mo(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pf(t,e,r){var l=e.pendingProps,s=ue.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ne(ue,s&1),t===null)return To(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=l.children,t=l.fallback,i?(l=e.mode,i=e.child,o={mode:"hidden",children:o},!(l&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=qs(o,l,0,null),t=Nn(t,l,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Mo(r),e.memoizedState=Ao,t):Aa(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return fg(t,e,o,l,a,s,r);if(i){i=l.fallback,o=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:l.children};return!(o&1)&&e.child!==s?(l=e.child,l.childLanes=0,l.pendingProps=c,e.deletions=null):(l=ln(s,c),l.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ln(a,i):(i=Nn(i,o,r,null),i.flags|=2),i.return=e,l.return=e,l.sibling=i,e.child=l,l=i,i=e.child,o=t.child.memoizedState,o=o===null?Mo(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~r,e.memoizedState=Ao,l}return i=t.child,t=i.sibling,l=ln(i,{mode:"visible",children:l.children}),!(e.mode&1)&&(l.lanes=r),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l}function Aa(t,e){return e=qs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vl(t,e,r,l){return l!==null&&wa(l),ur(e,t.child,null,r),t=Aa(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fg(t,e,r,l,s,i,o){if(r)return e.flags&256?(e.flags&=-257,l=Ui(Error(E(422))),Vl(t,e,o,l)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=l.fallback,s=e.mode,l=qs({mode:"visible",children:l.children},s,0,null),i=Nn(i,s,o,null),i.flags|=2,l.return=e,i.return=e,l.sibling=i,e.child=l,e.mode&1&&ur(e,t.child,null,o),e.child.memoizedState=Mo(o),e.memoizedState=Ao,i);if(!(e.mode&1))return Vl(t,e,o,null);if(s.data==="$!"){if(l=s.nextSibling&&s.nextSibling.dataset,l)var a=l.dgst;return l=a,i=Error(E(419)),l=Ui(i,l,void 0),Vl(t,e,o,l)}if(a=(o&t.childLanes)!==0,We||a){if(l=Ne,l!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(l.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,It(t,s),jt(l,t,s,-1))}return $a(),l=Ui(Error(E(421))),Vl(t,e,o,l)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=kg.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ze=en(s.nextSibling),Je=e,ae=!0,mt=null,t!==null&&(st[it++]=Lt,st[it++]=Dt,st[it++]=En,Lt=t.id,Dt=t.overflow,En=e),e=Aa(e,l.children),e.flags|=4096,e)}function _d(t,e,r){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Eo(t.return,e,r)}function Wi(t,e,r,l,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=r,i.tailMode=s)}function Af(t,e,r){var l=e.pendingProps,s=l.revealOrder,i=l.tail;if(Oe(t,e,l.children,r),l=ue.current,l&2)l=l&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_d(t,r,e);else if(t.tag===19)_d(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(ne(ue,l),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&Ss(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),Wi(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ss(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}Wi(e,!0,r,null,i);break;case"together":Wi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function is(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Rn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,r=ln(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=ln(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function pg(t,e,r){switch(e.tag){case 3:Df(e),dr();break;case 5:af(e);break;case 1:Xe(e.type)&&ws(e);break;case 4:Sa(e,e.stateNode.containerInfo);break;case 10:var l=e.type._context,s=e.memoizedProps.value;ne(bs,l._currentValue),l._currentValue=s;break;case 13:if(l=e.memoizedState,l!==null)return l.dehydrated!==null?(ne(ue,ue.current&1),e.flags|=128,null):r&e.child.childLanes?Pf(t,e,r):(ne(ue,ue.current&1),t=Ft(t,e,r),t!==null?t.sibling:null);ne(ue,ue.current&1);break;case 19:if(l=(r&e.childLanes)!==0,t.flags&128){if(l)return Af(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(ue,ue.current),l)break;return null;case 22:case 23:return e.lanes=0,Rf(t,e,r)}return Ft(t,e,r)}var Mf,Io,If,Ff;Mf=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Io=function(){};If=function(t,e,r,l){var s=t.memoizedProps;if(s!==l){t=e.stateNode,_n(St.current);var i=null;switch(r){case"input":s=lo(t,s),l=lo(t,l),i=[];break;case"select":s=pe({},s,{value:void 0}),l=pe({},l,{value:void 0}),i=[];break;case"textarea":s=oo(t,s),l=oo(t,l),i=[];break;default:typeof s.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=vs)}co(r,l);var o;r=null;for(d in s)if(!l.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in l){var c=l[d];if(a=s!=null?s[d]:void 0,l.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",t),i||a===c||(i=[])):(i=i||[]).push(d,c))}r&&(i=i||[]).push("style",r);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Ff=function(t,e,r,l){r!==l&&(e.flags|=4)};function Rr(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags&14680064,l|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=l,t.childLanes=r,e}function mg(t,e,r){var l=e.pendingProps;switch(ya(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Xe(e.type)&&ys(),Me(e),null;case 3:return l=e.stateNode,hr(),ie(Ve),ie(Fe),Ea(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mt!==null&&(Vo(mt),mt=null))),Io(t,e),Me(e),null;case 5:Ta(e);var s=_n(ol.current);if(r=e.type,t!==null&&e.stateNode!=null)If(t,e,r,l,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!l){if(e.stateNode===null)throw Error(E(166));return Me(e),null}if(t=_n(St.current),Ul(e)){l=e.stateNode,r=e.type;var i=e.memoizedProps;switch(l[_t]=e,l[sl]=i,t=(e.mode&1)!==0,r){case"dialog":le("cancel",l),le("close",l);break;case"iframe":case"object":case"embed":le("load",l);break;case"video":case"audio":for(s=0;s<Mr.length;s++)le(Mr[s],l);break;case"source":le("error",l);break;case"img":case"image":case"link":le("error",l),le("load",l);break;case"details":le("toggle",l);break;case"input":Lc(l,i),le("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!i.multiple},le("invalid",l);break;case"textarea":Pc(l,i),le("invalid",l)}co(r,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?l.textContent!==a&&(i.suppressHydrationWarning!==!0&&Hl(l.textContent,a,t),s=["children",a]):typeof a=="number"&&l.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Hl(l.textContent,a,t),s=["children",""+a]):Kr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",l)}switch(r){case"input":Pl(l),Dc(l,i,!0);break;case"textarea":Pl(l),Ac(l);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(l.onclick=vs)}l=s,e.updateQueue=l,l!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dh(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=o.createElement(r,{is:l.is}):(t=o.createElement(r),r==="select"&&(o=t,l.multiple?o.multiple=!0:l.size&&(o.size=l.size))):t=o.createElementNS(t,r),t[_t]=e,t[sl]=l,Mf(t,e,!1,!1),e.stateNode=t;e:{switch(o=uo(r,l),r){case"dialog":le("cancel",t),le("close",t),s=l;break;case"iframe":case"object":case"embed":le("load",t),s=l;break;case"video":case"audio":for(s=0;s<Mr.length;s++)le(Mr[s],t);s=l;break;case"source":le("error",t),s=l;break;case"img":case"image":case"link":le("error",t),le("load",t),s=l;break;case"details":le("toggle",t),s=l;break;case"input":Lc(t,l),s=lo(t,l),le("invalid",t);break;case"option":s=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},s=pe({},l,{value:void 0}),le("invalid",t);break;case"textarea":Pc(t,l),s=oo(t,l),le("invalid",t);break;default:s=l}co(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?fh(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&uh(t,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Yr(t,c):typeof c=="number"&&Yr(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&le("scroll",t):c!=null&&sa(t,i,c,o))}switch(r){case"input":Pl(t),Dc(t,l,!1);break;case"textarea":Pl(t),Ac(t);break;case"option":l.value!=null&&t.setAttribute("value",""+on(l.value));break;case"select":t.multiple=!!l.multiple,i=l.value,i!=null?tr(t,!!l.multiple,i,!1):l.defaultValue!=null&&tr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=vs)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Ff(t,e,t.memoizedProps,l);else{if(typeof l!="string"&&e.stateNode===null)throw Error(E(166));if(r=_n(ol.current),_n(St.current),Ul(e)){if(l=e.stateNode,r=e.memoizedProps,l[_t]=e,(i=l.nodeValue!==r)&&(t=Je,t!==null))switch(t.tag){case 3:Hl(l.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(l.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[_t]=e,e.stateNode=l}return Me(e),null;case 13:if(ie(ue),l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&e.mode&1&&!(e.flags&128))ef(),dr(),e.flags|=98560,i=!1;else if(i=Ul(e),l!==null&&l.dehydrated!==null){if(t===null){if(!i)throw Error(E(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[_t]=e}else dr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),i=!1}else mt!==null&&(Vo(mt),mt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?we===0&&(we=3):$a())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return hr(),Io(t,e),t===null&&rl(e.stateNode.containerInfo),Me(e),null;case 10:return ba(e.type._context),Me(e),null;case 17:return Xe(e.type)&&ys(),Me(e),null;case 19:if(ie(ue),i=e.memoizedState,i===null)return Me(e),null;if(l=(e.flags&128)!==0,o=i.rendering,o===null)if(l)Rr(i,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ss(t),o!==null){for(e.flags|=128,Rr(i,!1),l=o.updateQueue,l!==null&&(e.updateQueue=l,e.flags|=4),e.subtreeFlags=0,l=r,r=e.child;r!==null;)i=r,t=l,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ne(ue,ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&je()>pr&&(e.flags|=128,l=!0,Rr(i,!1),e.lanes=4194304)}else{if(!l)if(t=Ss(o),t!==null){if(e.flags|=128,l=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Rr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ae)return Me(e),null}else 2*je()-i.renderingStartTime>pr&&r!==1073741824&&(e.flags|=128,l=!0,Rr(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(r=i.last,r!==null?r.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=je(),e.sibling=null,r=ue.current,ne(ue,l?r&1|2:r&1),e):(Me(e),null);case 22:case 23:return za(),l=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(e.flags|=8192),l&&e.mode&1?Ke&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function xg(t,e){switch(ya(e),e.tag){case 1:return Xe(e.type)&&ys(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hr(),ie(Ve),ie(Fe),Ea(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ta(e),null;case 13:if(ie(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));dr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ue),null;case 4:return hr(),null;case 10:return ba(e.type._context),null;case 22:case 23:return za(),null;case 24:return null;default:return null}}var Xl=!1,Ie=!1,gg=typeof WeakSet=="function"?WeakSet:Set,A=null;function Jn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){me(t,e,l)}else r.current=null}function Fo(t,e,r){try{r()}catch(l){me(t,e,l)}}var bd=!1;function jg(t,e){if(wo=xs,t=$h(),ja(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var s=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,a=-1,c=-1,d=0,h=0,f=t,x=null;t:for(;;){for(var g;f!==r||s!==0&&f.nodeType!==3||(a=o+s),f!==i||l!==0&&f.nodeType!==3||(c=o+l),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)x=f,f=g;for(;;){if(f===t)break t;if(x===r&&++d===s&&(a=o),x===i&&++h===l&&(c=o),(g=f.nextSibling)!==null)break;f=x,x=f.parentNode}f=g}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Co={focusedElem:t,selectionRange:r},xs=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,b=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ft(e.type,y),b);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var j=e.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){me(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=bd,bd=!1,v}function Xr(t,e,r){var l=e.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Fo(e,r,i)}s=s.next}while(s!==l)}}function Zs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var l=r.create;r.destroy=l()}r=r.next}while(r!==e)}}function Oo(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Of(t){var e=t.alternate;e!==null&&(t.alternate=null,Of(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[sl],delete e[No],delete e[eg],delete e[tg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zf(t){return t.tag===5||t.tag===3||t.tag===4}function Nd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zo(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=vs));else if(l!==4&&(t=t.child,t!==null))for(zo(t,e,r),t=t.sibling;t!==null;)zo(t,e,r),t=t.sibling}function $o(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($o(t,e,r),t=t.sibling;t!==null;)$o(t,e,r),t=t.sibling}var Te=null,pt=!1;function Ht(t,e,r){for(r=r.child;r!==null;)$f(t,e,r),r=r.sibling}function $f(t,e,r){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Us,r)}catch{}switch(r.tag){case 5:Ie||Jn(r,e);case 6:var l=Te,s=pt;Te=null,Ht(t,e,r),Te=l,pt=s,Te!==null&&(pt?(t=Te,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Te.removeChild(r.stateNode));break;case 18:Te!==null&&(pt?(t=Te,r=r.stateNode,t.nodeType===8?Ii(t.parentNode,r):t.nodeType===1&&Ii(t,r),el(t)):Ii(Te,r.stateNode));break;case 4:l=Te,s=pt,Te=r.stateNode.containerInfo,pt=!0,Ht(t,e,r),Te=l,pt=s;break;case 0:case 11:case 14:case 15:if(!Ie&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){s=l=l.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Fo(r,e,o),s=s.next}while(s!==l)}Ht(t,e,r);break;case 1:if(!Ie&&(Jn(r,e),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(a){me(r,e,a)}Ht(t,e,r);break;case 21:Ht(t,e,r);break;case 22:r.mode&1?(Ie=(l=Ie)||r.memoizedState!==null,Ht(t,e,r),Ie=l):Ht(t,e,r);break;default:Ht(t,e,r)}}function kd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new gg),e.forEach(function(l){var s=Sg.bind(null,t,l);r.has(l)||(r.add(l),l.then(s,s))})}}function ht(t,e){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var s=r[l];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,pt=!1;break e;case 3:Te=a.stateNode.containerInfo,pt=!0;break e;case 4:Te=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Te===null)throw Error(E(160));$f(i,o,s),Te=null,pt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){me(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hf(e,t),e=e.sibling}function Hf(t,e){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),wt(t),l&4){try{Xr(3,t,t.return),Zs(3,t)}catch(y){me(t,t.return,y)}try{Xr(5,t,t.return)}catch(y){me(t,t.return,y)}}break;case 1:ht(e,t),wt(t),l&512&&r!==null&&Jn(r,r.return);break;case 5:if(ht(e,t),wt(t),l&512&&r!==null&&Jn(r,r.return),t.flags&32){var s=t.stateNode;try{Yr(s,"")}catch(y){me(t,t.return,y)}}if(l&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=r!==null?r.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ah(s,i),uo(a,o);var d=uo(a,i);for(o=0;o<c.length;o+=2){var h=c[o],f=c[o+1];h==="style"?fh(s,f):h==="dangerouslySetInnerHTML"?uh(s,f):h==="children"?Yr(s,f):sa(s,h,f,d)}switch(a){case"input":so(s,i);break;case"textarea":ch(s,i);break;case"select":var x=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?tr(s,!!i.multiple,g,!1):x!==!!i.multiple&&(i.defaultValue!=null?tr(s,!!i.multiple,i.defaultValue,!0):tr(s,!!i.multiple,i.multiple?[]:"",!1))}s[sl]=i}catch(y){me(t,t.return,y)}}break;case 6:if(ht(e,t),wt(t),l&4){if(t.stateNode===null)throw Error(E(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){me(t,t.return,y)}}break;case 3:if(ht(e,t),wt(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(y){me(t,t.return,y)}break;case 4:ht(e,t),wt(t);break;case 13:ht(e,t),wt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Fa=je())),l&4&&kd(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(Ie=(d=Ie)||h,ht(e,t),Ie=d):ht(e,t),wt(t),l&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(A=t,h=t.child;h!==null;){for(f=A=h;A!==null;){switch(x=A,g=x.child,x.tag){case 0:case 11:case 14:case 15:Xr(4,x,x.return);break;case 1:Jn(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){l=x,r=x.return;try{e=l,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){me(l,r,y)}}break;case 5:Jn(x,x.return);break;case 22:if(x.memoizedState!==null){Td(f);continue}}g!==null?(g.return=x,A=g):Td(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=hh("display",o))}catch(y){me(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){me(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ht(e,t),wt(t),l&4&&kd(t);break;case 21:break;default:ht(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(zf(r)){var l=r;break e}r=r.return}throw Error(E(160))}switch(l.tag){case 5:var s=l.stateNode;l.flags&32&&(Yr(s,""),l.flags&=-33);var i=Nd(t);$o(t,i,s);break;case 3:case 4:var o=l.stateNode.containerInfo,a=Nd(t);zo(t,a,o);break;default:throw Error(E(161))}}catch(c){me(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vg(t,e,r){A=t,Uf(t)}function Uf(t,e,r){for(var l=(t.mode&1)!==0;A!==null;){var s=A,i=s.child;if(s.tag===22&&l){var o=s.memoizedState!==null||Xl;if(!o){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Ie;a=Xl;var d=Ie;if(Xl=o,(Ie=c)&&!d)for(A=s;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Ed(s):c!==null?(c.return=o,A=c):Ed(s);for(;i!==null;)A=i,Uf(i),i=i.sibling;A=s,Xl=a,Ie=d}Sd(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,A=i):Sd(t)}}function Sd(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Zs(5,e);break;case 1:var l=e.stateNode;if(e.flags&4&&!Ie)if(r===null)l.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:ft(e.type,r.memoizedProps);l.componentDidUpdate(s,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&dd(e,i,l);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}dd(e,o,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&el(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ie||e.flags&512&&Oo(e)}catch(x){me(e,e.return,x)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function Td(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function Ed(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Zs(4,e)}catch(c){me(e,r,c)}break;case 1:var l=e.stateNode;if(typeof l.componentDidMount=="function"){var s=e.return;try{l.componentDidMount()}catch(c){me(e,s,c)}}var i=e.return;try{Oo(e)}catch(c){me(e,i,c)}break;case 5:var o=e.return;try{Oo(e)}catch(c){me(e,o,c)}}}catch(c){me(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var yg=Math.ceil,Bs=Ot.ReactCurrentDispatcher,Ma=Ot.ReactCurrentOwner,at=Ot.ReactCurrentBatchConfig,J=0,Ne=null,ve=null,Re=0,Ke=0,qn=fn(0),we=0,ul=null,Rn=0,Js=0,Ia=0,Gr=null,Ue=null,Fa=0,pr=1/0,Bt=null,Rs=!1,Ho=null,nn=null,Gl=!1,Qt=null,Ls=0,Qr=0,Uo=null,os=-1,as=0;function ze(){return J&6?je():os!==-1?os:os=je()}function rn(t){return t.mode&1?J&2&&Re!==0?Re&-Re:rg.transition!==null?(as===0&&(as=Nh()),as):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Lh(t.type)),t):1}function jt(t,e,r,l){if(50<Qr)throw Qr=0,Uo=null,Error(E(185));_l(t,r,l),(!(J&2)||t!==Ne)&&(t===Ne&&(!(J&2)&&(Js|=r),we===4&&Xt(t,Re)),Ge(t,l),r===1&&J===0&&!(e.mode&1)&&(pr=je()+500,Qs&&pn()))}function Ge(t,e){var r=t.callbackNode;rx(t,e);var l=ms(t,t===Ne?Re:0);if(l===0)r!==null&&Fc(r),t.callbackNode=null,t.callbackPriority=0;else if(e=l&-l,t.callbackPriority!==e){if(r!=null&&Fc(r),e===1)t.tag===0?ng(Bd.bind(null,t)):Zh(Bd.bind(null,t)),Jx(function(){!(J&6)&&pn()}),r=null;else{switch(kh(l)){case 1:r=da;break;case 4:r=_h;break;case 16:r=ps;break;case 536870912:r=bh;break;default:r=ps}r=Zf(r,Wf.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Wf(t,e){if(os=-1,as=0,J&6)throw Error(E(327));var r=t.callbackNode;if(ir()&&t.callbackNode!==r)return null;var l=ms(t,t===Ne?Re:0);if(l===0)return null;if(l&30||l&t.expiredLanes||e)e=Ds(t,l);else{e=l;var s=J;J|=2;var i=Xf();(Ne!==t||Re!==e)&&(Bt=null,pr=je()+500,bn(t,e));do try{_g();break}catch(a){Vf(t,a)}while(!0);_a(),Bs.current=i,J=s,ve!==null?e=0:(Ne=null,Re=0,e=we)}if(e!==0){if(e===2&&(s=xo(t),s!==0&&(l=s,e=Wo(t,s))),e===1)throw r=ul,bn(t,0),Xt(t,l),Ge(t,je()),r;if(e===6)Xt(t,l);else{if(s=t.current.alternate,!(l&30)&&!wg(s)&&(e=Ds(t,l),e===2&&(i=xo(t),i!==0&&(l=i,e=Wo(t,i))),e===1))throw r=ul,bn(t,0),Xt(t,l),Ge(t,je()),r;switch(t.finishedWork=s,t.finishedLanes=l,e){case 0:case 1:throw Error(E(345));case 2:yn(t,Ue,Bt);break;case 3:if(Xt(t,l),(l&130023424)===l&&(e=Fa+500-je(),10<e)){if(ms(t,0)!==0)break;if(s=t.suspendedLanes,(s&l)!==l){ze(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=bo(yn.bind(null,t,Ue,Bt),e);break}yn(t,Ue,Bt);break;case 4:if(Xt(t,l),(l&4194240)===l)break;for(e=t.eventTimes,s=-1;0<l;){var o=31-gt(l);i=1<<o,o=e[o],o>s&&(s=o),l&=~i}if(l=s,l=je()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*yg(l/1960))-l,10<l){t.timeoutHandle=bo(yn.bind(null,t,Ue,Bt),l);break}yn(t,Ue,Bt);break;case 5:yn(t,Ue,Bt);break;default:throw Error(E(329))}}}return Ge(t,je()),t.callbackNode===r?Wf.bind(null,t):null}function Wo(t,e){var r=Gr;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Ds(t,e),t!==2&&(e=Ue,Ue=r,e!==null&&Vo(e)),t}function Vo(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function wg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var s=r[l],i=s.getSnapshot;s=s.value;try{if(!vt(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(t,e){for(e&=~Ia,e&=~Js,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-gt(e),l=1<<r;t[r]=-1,e&=~l}}function Bd(t){if(J&6)throw Error(E(327));ir();var e=ms(t,0);if(!(e&1))return Ge(t,je()),null;var r=Ds(t,e);if(t.tag!==0&&r===2){var l=xo(t);l!==0&&(e=l,r=Wo(t,l))}if(r===1)throw r=ul,bn(t,0),Xt(t,e),Ge(t,je()),r;if(r===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yn(t,Ue,Bt),Ge(t,je()),null}function Oa(t,e){var r=J;J|=1;try{return t(e)}finally{J=r,J===0&&(pr=je()+500,Qs&&pn())}}function Ln(t){Qt!==null&&Qt.tag===0&&!(J&6)&&ir();var e=J;J|=1;var r=at.transition,l=ee;try{if(at.transition=null,ee=1,t)return t()}finally{ee=l,at.transition=r,J=e,!(J&6)&&pn()}}function za(){Ke=qn.current,ie(qn)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Zx(r)),ve!==null)for(r=ve.return;r!==null;){var l=r;switch(ya(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ys();break;case 3:hr(),ie(Ve),ie(Fe),Ea();break;case 5:Ta(l);break;case 4:hr();break;case 13:ie(ue);break;case 19:ie(ue);break;case 10:ba(l.type._context);break;case 22:case 23:za()}r=r.return}if(Ne=t,ve=t=ln(t.current,null),Re=Ke=e,we=0,ul=null,Ia=Js=Rn=0,Ue=Gr=null,Cn!==null){for(e=0;e<Cn.length;e++)if(r=Cn[e],l=r.interleaved,l!==null){r.interleaved=null;var s=l.next,i=r.pending;if(i!==null){var o=i.next;i.next=s,l.next=o}r.pending=l}Cn=null}return t}function Vf(t,e){do{var r=ve;try{if(_a(),ls.current=Es,Ts){for(var l=he.memoizedState;l!==null;){var s=l.queue;s!==null&&(s.pending=null),l=l.next}Ts=!1}if(Bn=0,be=ye=he=null,Vr=!1,al=0,Ma.current=null,r===null||r.return===null){we=1,ul=e,ve=null;break}e:{var i=t,o=r.return,a=r,c=e;if(e=Re,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=gd(o);if(g!==null){g.flags&=-257,jd(g,o,a,i,e),g.mode&1&&xd(i,d,e),e=g,c=d;var v=e.updateQueue;if(v===null){var y=new Set;y.add(c),e.updateQueue=y}else v.add(c);break e}else{if(!(e&1)){xd(i,d,e),$a();break e}c=Error(E(426))}}else if(ae&&a.mode&1){var b=gd(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),jd(b,o,a,i,e),wa(fr(c,a));break e}}i=c=fr(c,a),we!==4&&(we=2),Gr===null?Gr=[i]:Gr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Tf(i,c,e);cd(i,m);break e;case 1:a=c;var p=i.type,j=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(nn===null||!nn.has(j)))){i.flags|=65536,e&=-e,i.lanes|=e;var w=Ef(i,a,e);cd(i,w);break e}}i=i.return}while(i!==null)}Qf(r)}catch(_){e=_,ve===r&&r!==null&&(ve=r=r.return);continue}break}while(!0)}function Xf(){var t=Bs.current;return Bs.current=Es,t===null?Es:t}function $a(){(we===0||we===3||we===2)&&(we=4),Ne===null||!(Rn&268435455)&&!(Js&268435455)||Xt(Ne,Re)}function Ds(t,e){var r=J;J|=2;var l=Xf();(Ne!==t||Re!==e)&&(Bt=null,bn(t,e));do try{Cg();break}catch(s){Vf(t,s)}while(!0);if(_a(),J=r,Bs.current=l,ve!==null)throw Error(E(261));return Ne=null,Re=0,we}function Cg(){for(;ve!==null;)Gf(ve)}function _g(){for(;ve!==null&&!Qm();)Gf(ve)}function Gf(t){var e=Yf(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?Qf(t):ve=e,Ma.current=null}function Qf(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=xg(r,e),r!==null){r.flags&=32767,ve=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ve=null;return}}else if(r=mg(r,e,Ke),r!==null){ve=r;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);we===0&&(we=5)}function yn(t,e,r){var l=ee,s=at.transition;try{at.transition=null,ee=1,bg(t,e,r,l)}finally{at.transition=s,ee=l}return null}function bg(t,e,r,l){do ir();while(Qt!==null);if(J&6)throw Error(E(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(lx(t,i),t===Ne&&(ve=Ne=null,Re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Gl||(Gl=!0,Zf(ps,function(){return ir(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=at.transition,at.transition=null;var o=ee;ee=1;var a=J;J|=4,Ma.current=null,jg(t,r),Hf(r,t),Wx(Co),xs=!!wo,Co=wo=null,t.current=r,vg(r),Km(),J=a,ee=o,at.transition=i}else t.current=r;if(Gl&&(Gl=!1,Qt=t,Ls=s),i=t.pendingLanes,i===0&&(nn=null),Jm(r.stateNode),Ge(t,je()),e!==null)for(l=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],l(s.value,{componentStack:s.stack,digest:s.digest});if(Rs)throw Rs=!1,t=Ho,Ho=null,t;return Ls&1&&t.tag!==0&&ir(),i=t.pendingLanes,i&1?t===Uo?Qr++:(Qr=0,Uo=t):Qr=0,pn(),null}function ir(){if(Qt!==null){var t=kh(Ls),e=at.transition,r=ee;try{if(at.transition=null,ee=16>t?16:t,Qt===null)var l=!1;else{if(t=Qt,Qt=null,Ls=0,J&6)throw Error(E(331));var s=J;for(J|=4,A=t.current;A!==null;){var i=A,o=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(A=d;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:Xr(8,h,i)}var f=h.child;if(f!==null)f.return=h,A=f;else for(;A!==null;){h=A;var x=h.sibling,g=h.return;if(Of(h),h===d){A=null;break}if(x!==null){x.return=g,A=x;break}A=g}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}A=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,A=o;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,A=m;break e}A=i.return}}var p=t.current;for(A=p;A!==null;){o=A;var j=o.child;if(o.subtreeFlags&2064&&j!==null)j.return=o,A=j;else e:for(o=p;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zs(9,a)}}catch(_){me(a,a.return,_)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(J=s,pn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Us,t)}catch{}l=!0}return l}finally{ee=r,at.transition=e}}return!1}function Rd(t,e,r){e=fr(r,e),e=Tf(t,e,1),t=tn(t,e,1),e=ze(),t!==null&&(_l(t,1,e),Ge(t,e))}function me(t,e,r){if(t.tag===3)Rd(t,t,r);else for(;e!==null;){if(e.tag===3){Rd(e,t,r);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nn===null||!nn.has(l))){t=fr(r,t),t=Ef(e,t,1),e=tn(e,t,1),t=ze(),e!==null&&(_l(e,1,t),Ge(e,t));break}}e=e.return}}function Ng(t,e,r){var l=t.pingCache;l!==null&&l.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&r,Ne===t&&(Re&r)===r&&(we===4||we===3&&(Re&130023424)===Re&&500>je()-Fa?bn(t,0):Ia|=r),Ge(t,e)}function Kf(t,e){e===0&&(t.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var r=ze();t=It(t,e),t!==null&&(_l(t,e,r),Ge(t,r))}function kg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Kf(t,r)}function Sg(t,e){var r=0;switch(t.tag){case 13:var l=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(E(314))}l!==null&&l.delete(e),Kf(t,r)}var Yf;Yf=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)We=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return We=!1,pg(t,e,r);We=!!(t.flags&131072)}else We=!1,ae&&e.flags&1048576&&Jh(e,_s,e.index);switch(e.lanes=0,e.tag){case 2:var l=e.type;is(t,e),t=e.pendingProps;var s=cr(e,Fe.current);sr(e,r),s=Ra(null,e,l,t,s,r);var i=La();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(l)?(i=!0,ws(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ka(e),s.updater=Ks,e.stateNode=s,s._reactInternals=e,Ro(e,l,t,r),e=Po(null,e,l,!0,i,r)):(e.tag=0,ae&&i&&va(e),Oe(null,e,s,r),e=e.child),e;case 16:l=e.elementType;e:{switch(is(t,e),t=e.pendingProps,s=l._init,l=s(l._payload),e.type=l,s=e.tag=Eg(l),t=ft(l,t),s){case 0:e=Do(null,e,l,t,r);break e;case 1:e=wd(null,e,l,t,r);break e;case 11:e=vd(null,e,l,t,r);break e;case 14:e=yd(null,e,l,ft(l.type,t),r);break e}throw Error(E(306,l,""))}return e;case 0:return l=e.type,s=e.pendingProps,s=e.elementType===l?s:ft(l,s),Do(t,e,l,s,r);case 1:return l=e.type,s=e.pendingProps,s=e.elementType===l?s:ft(l,s),wd(t,e,l,s,r);case 3:e:{if(Df(e),t===null)throw Error(E(387));l=e.pendingProps,i=e.memoizedState,s=i.element,nf(t,e),ks(e,l,null,r);var o=e.memoizedState;if(l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=fr(Error(E(423)),e),e=Cd(t,e,l,r,s);break e}else if(l!==s){s=fr(Error(E(424)),e),e=Cd(t,e,l,r,s);break e}else for(Ze=en(e.stateNode.containerInfo.firstChild),Je=e,ae=!0,mt=null,r=of(e,null,l,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dr(),l===s){e=Ft(t,e,r);break e}Oe(t,e,l,r)}e=e.child}return e;case 5:return af(e),t===null&&To(e),l=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,_o(l,s)?o=null:i!==null&&_o(l,i)&&(e.flags|=32),Lf(t,e),Oe(t,e,o,r),e.child;case 6:return t===null&&To(e),null;case 13:return Pf(t,e,r);case 4:return Sa(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=ur(e,null,l,r):Oe(t,e,l,r),e.child;case 11:return l=e.type,s=e.pendingProps,s=e.elementType===l?s:ft(l,s),vd(t,e,l,s,r);case 7:return Oe(t,e,e.pendingProps,r),e.child;case 8:return Oe(t,e,e.pendingProps.children,r),e.child;case 12:return Oe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(l=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ne(bs,l._currentValue),l._currentValue=o,i!==null)if(vt(i.value,o)){if(i.children===s.children&&!Ve.current){e=Ft(t,e,r);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var c=a.firstContext;c!==null;){if(c.context===l){if(i.tag===1){c=Pt(-1,r&-r),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Eo(i.return,r,e),a.lanes|=r;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(E(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),Eo(o,r,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Oe(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,l=e.pendingProps.children,sr(e,r),s=ct(s),l=l(s),e.flags|=1,Oe(t,e,l,r),e.child;case 14:return l=e.type,s=ft(l,e.pendingProps),s=ft(l.type,s),yd(t,e,l,s,r);case 15:return Bf(t,e,e.type,e.pendingProps,r);case 17:return l=e.type,s=e.pendingProps,s=e.elementType===l?s:ft(l,s),is(t,e),e.tag=1,Xe(l)?(t=!0,ws(e)):t=!1,sr(e,r),lf(e,l,s),Ro(e,l,s,r),Po(null,e,l,!0,t,r);case 19:return Af(t,e,r);case 22:return Rf(t,e,r)}throw Error(E(156,e.tag))};function Zf(t,e){return Ch(t,e)}function Tg(t,e,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,r,l){return new Tg(t,e,r,l)}function Ha(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Eg(t){if(typeof t=="function")return Ha(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oa)return 11;if(t===aa)return 14}return 2}function ln(t,e){var r=t.alternate;return r===null?(r=ot(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function cs(t,e,r,l,s,i){var o=2;if(l=t,typeof t=="function")Ha(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Un:return Nn(r.children,s,i,e);case ia:o=8,s|=8;break;case eo:return t=ot(12,r,e,s|2),t.elementType=eo,t.lanes=i,t;case to:return t=ot(13,r,e,s),t.elementType=to,t.lanes=i,t;case no:return t=ot(19,r,e,s),t.elementType=no,t.lanes=i,t;case sh:return qs(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rh:o=10;break e;case lh:o=9;break e;case oa:o=11;break e;case aa:o=14;break e;case Ut:o=16,l=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=ot(o,r,e,s),e.elementType=t,e.type=l,e.lanes=i,e}function Nn(t,e,r,l){return t=ot(7,t,l,e),t.lanes=r,t}function qs(t,e,r,l){return t=ot(22,t,l,e),t.elementType=sh,t.lanes=r,t.stateNode={isHidden:!1},t}function Vi(t,e,r){return t=ot(6,t,null,e),t.lanes=r,t}function Xi(t,e,r){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Bg(t,e,r,l,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=l,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ua(t,e,r,l,s,i,o,a,c){return t=new Bg(t,e,r,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ot(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(i),t}function Rg(t,e,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:l==null?null:""+l,children:t,containerInfo:e,implementation:r}}function Jf(t){if(!t)return an;t=t._reactInternals;e:{if(Mn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var r=t.type;if(Xe(r))return Yh(t,r,e)}return e}function qf(t,e,r,l,s,i,o,a,c){return t=Ua(r,l,!0,t,s,i,o,a,c),t.context=Jf(null),r=t.current,l=ze(),s=rn(r),i=Pt(l,s),i.callback=e??null,tn(r,i,s),t.current.lanes=s,_l(t,s,l),Ge(t,l),t}function ei(t,e,r,l){var s=e.current,i=ze(),o=rn(s);return r=Jf(r),e.context===null?e.context=r:e.pendingContext=r,e=Pt(i,o),e.payload={element:t},l=l===void 0?null:l,l!==null&&(e.callback=l),t=tn(s,e,o),t!==null&&(jt(t,s,o,i),rs(t,s,o)),o}function Ps(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ld(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Wa(t,e){Ld(t,e),(t=t.alternate)&&Ld(t,e)}function Lg(){return null}var ep=typeof reportError=="function"?reportError:function(t){console.error(t)};function Va(t){this._internalRoot=t}ti.prototype.render=Va.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ei(t,e,null,null)};ti.prototype.unmount=Va.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ln(function(){ei(null,t,null,null)}),e[Mt]=null}};function ti(t){this._internalRoot=t}ti.prototype.unstable_scheduleHydration=function(t){if(t){var e=Eh();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Vt.length&&e!==0&&e<Vt[r].priority;r++);Vt.splice(r,0,t),r===0&&Rh(t)}};function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ni(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function Dg(t,e,r,l,s){if(s){if(typeof l=="function"){var i=l;l=function(){var d=Ps(o);i.call(d)}}var o=qf(e,l,t,0,null,!1,!1,"",Dd);return t._reactRootContainer=o,t[Mt]=o.current,rl(t.nodeType===8?t.parentNode:t),Ln(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof l=="function"){var a=l;l=function(){var d=Ps(c);a.call(d)}}var c=Ua(t,0,!1,null,null,!1,!1,"",Dd);return t._reactRootContainer=c,t[Mt]=c.current,rl(t.nodeType===8?t.parentNode:t),Ln(function(){ei(e,c,r,l)}),c}function ri(t,e,r,l,s){var i=r._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var c=Ps(o);a.call(c)}}ei(e,o,t,s)}else o=Dg(r,e,t,s,l);return Ps(o)}Sh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ar(e.pendingLanes);r!==0&&(ua(e,r|1),Ge(e,je()),!(J&6)&&(pr=je()+500,pn()))}break;case 13:Ln(function(){var l=It(t,1);if(l!==null){var s=ze();jt(l,t,1,s)}}),Wa(t,1)}};ha=function(t){if(t.tag===13){var e=It(t,134217728);if(e!==null){var r=ze();jt(e,t,134217728,r)}Wa(t,134217728)}};Th=function(t){if(t.tag===13){var e=rn(t),r=It(t,e);if(r!==null){var l=ze();jt(r,t,e,l)}Wa(t,e)}};Eh=function(){return ee};Bh=function(t,e){var r=ee;try{return ee=t,e()}finally{ee=r}};fo=function(t,e,r){switch(e){case"input":if(so(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var l=r[e];if(l!==t&&l.form===t.form){var s=Gs(l);if(!s)throw Error(E(90));oh(l),so(l,s)}}}break;case"textarea":ch(t,r);break;case"select":e=r.value,e!=null&&tr(t,!!r.multiple,e,!1)}};xh=Oa;gh=Ln;var Pg={usingClientEntryPoint:!1,Events:[Nl,Gn,Gs,ph,mh,Oa]},Lr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ag={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yh(t),t===null?null:t.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Us=Ql.inject(Ag),kt=Ql}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;nt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xa(e))throw Error(E(200));return Rg(t,e,null,r)};nt.createRoot=function(t,e){if(!Xa(t))throw Error(E(299));var r=!1,l="",s=ep;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ua(t,1,!1,null,null,r,!1,l,s),t[Mt]=e.current,rl(t.nodeType===8?t.parentNode:t),new Va(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=yh(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return Ln(t)};nt.hydrate=function(t,e,r){if(!ni(e))throw Error(E(200));return ri(null,t,e,!0,r)};nt.hydrateRoot=function(t,e,r){if(!Xa(t))throw Error(E(405));var l=r!=null&&r.hydratedSources||null,s=!1,i="",o=ep;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=qf(e,null,t,1,r??null,s,!1,i,o),t[Mt]=e.current,rl(t),l)for(t=0;t<l.length;t++)r=l[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new ti(e)};nt.render=function(t,e,r){if(!ni(e))throw Error(E(200));return ri(null,t,e,!1,r)};nt.unmountComponentAtNode=function(t){if(!ni(t))throw Error(E(40));return t._reactRootContainer?(Ln(function(){ri(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};nt.unstable_batchedUpdates=Oa;nt.unstable_renderSubtreeIntoContainer=function(t,e,r,l){if(!ni(r))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return ri(t,e,r,!1,l)};nt.version="18.2.0-next-9e3b772b8-20220608";function tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)}catch(t){console.error(t)}}tp(),Ju.exports=nt;var Sl=Ju.exports,Pd=Sl;Ji.createRoot=Pd.createRoot,Ji.hydrateRoot=Pd.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},hl.apply(this,arguments)}var Kt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kt||(Kt={}));const Ad="popstate";function Mg(t){t===void 0&&(t={});function e(s,i){let{pathname:o="/",search:a="",hash:c=""}=In(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Xo("",{pathname:o,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(s,i){let o=s.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=s.location.href,d=c.indexOf("#");a=d===-1?c:c.slice(0,d)}return a+"#"+(typeof i=="string"?i:As(i))}function l(s,i){li(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Fg(e,r,l,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function li(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ig(){return Math.random().toString(36).substr(2,8)}function Md(t,e){return{usr:t.state,key:t.key,idx:e}}function Xo(t,e,r,l){return r===void 0&&(r=null),hl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?In(e):e,{state:r,key:e&&e.key||l||Ig()})}function As(t){let{pathname:e="/",search:r="",hash:l=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(e+=l.charAt(0)==="#"?l:"#"+l),e}function In(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let l=t.indexOf("?");l>=0&&(e.search=t.substr(l),t=t.substr(0,l)),t&&(e.pathname=t)}return e}function Fg(t,e,r,l){l===void 0&&(l={});let{window:s=document.defaultView,v5Compat:i=!1}=l,o=s.history,a=Kt.Pop,c=null,d=h();d==null&&(d=0,o.replaceState(hl({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Kt.Pop;let b=h(),m=b==null?null:b-d;d=b,c&&c({action:a,location:y.location,delta:m})}function x(b,m){a=Kt.Push;let p=Xo(y.location,b,m);r&&r(p,b),d=h()+1;let j=Md(p,d),w=y.createHref(p);try{o.pushState(j,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;s.location.assign(w)}i&&c&&c({action:a,location:y.location,delta:1})}function g(b,m){a=Kt.Replace;let p=Xo(y.location,b,m);r&&r(p,b),d=h();let j=Md(p,d),w=y.createHref(p);o.replaceState(j,"",w),i&&c&&c({action:a,location:y.location,delta:0})}function v(b){let m=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof b=="string"?b:As(b);return fe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(s,o)},listen(b){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Ad,f),c=b,()=>{s.removeEventListener(Ad,f),c=null}},createHref(b){return e(s,b)},createURL:v,encodeLocation(b){let m=v(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:g,go(b){return o.go(b)}};return y}var Id;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Id||(Id={}));function Og(t,e,r){r===void 0&&(r="/");let l=typeof e=="string"?In(e):e,s=fl(l.pathname||"/",r);if(s==null)return null;let i=np(t);zg(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=Kg(i[a],Zg(s));return o}function np(t,e,r,l){e===void 0&&(e=[]),r===void 0&&(r=[]),l===void 0&&(l="");let s=(i,o,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(fe(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let d=sn([l,c.relativePath]),h=r.concat(c);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),np(i.children,e,h,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:Gg(d,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let c of rp(i.path))s(i,o,c)}),e}function rp(t){let e=t.split("/");if(e.length===0)return[];let[r,...l]=e,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(l.length===0)return s?[i,""]:[i];let o=rp(l.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function zg(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Qg(e.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}const $g=/^:\w+$/,Hg=3,Ug=2,Wg=1,Vg=10,Xg=-2,Fd=t=>t==="*";function Gg(t,e){let r=t.split("/"),l=r.length;return r.some(Fd)&&(l+=Xg),e&&(l+=Ug),r.filter(s=>!Fd(s)).reduce((s,i)=>s+($g.test(i)?Hg:i===""?Wg:Vg),l)}function Qg(t,e){return t.length===e.length&&t.slice(0,-1).every((l,s)=>l===e[s])?t[t.length-1]-e[e.length-1]:0}function Kg(t,e){let{routesMeta:r}=t,l={},s="/",i=[];for(let o=0;o<r.length;++o){let a=r[o],c=o===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=Go({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d);if(!h)return null;Object.assign(l,h.params);let f=a.route;i.push({params:l,pathname:sn([s,h.pathname]),pathnameBase:n0(sn([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=sn([s,h.pathnameBase]))}return i}function Go(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,l]=Yg(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:l.reduce((d,h,f)=>{let{paramName:x,isOptional:g}=h;if(x==="*"){let y=a[f]||"";o=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?d[x]=void 0:d[x]=Jg(v||"",x),d},{}),pathname:i,pathnameBase:o,pattern:t}}function Yg(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),li(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,c)=>(l.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),l]}function Zg(t){try{return decodeURI(t)}catch(e){return li(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jg(t,e){try{return decodeURIComponent(t)}catch(r){return li(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function fl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,l=t.charAt(r);return l&&l!=="/"?null:t.slice(r)||"/"}function qg(t,e){e===void 0&&(e="/");let{pathname:r,search:l="",hash:s=""}=typeof t=="string"?In(t):t;return{pathname:r?r.startsWith("/")?r:e0(r,e):e,search:r0(l),hash:l0(s)}}function e0(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Gi(t,e,r,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t0(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Ga(t,e){let r=t0(t);return e?r.map((l,s)=>s===t.length-1?l.pathname:l.pathnameBase):r.map(l=>l.pathnameBase)}function Qa(t,e,r,l){l===void 0&&(l=!1);let s;typeof t=="string"?s=In(t):(s=hl({},t),fe(!s.pathname||!s.pathname.includes("?"),Gi("?","pathname","search",s)),fe(!s.pathname||!s.pathname.includes("#"),Gi("#","pathname","hash",s)),fe(!s.search||!s.search.includes("#"),Gi("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=r;else{let f=e.length-1;if(!l&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),f-=1;s.pathname=x.join("/")}a=f>=0?e[f]:"/"}let c=qg(s,a),d=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const sn=t=>t.join("/").replace(/\/\/+/g,"/"),n0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),r0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function s0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lp=["post","put","patch","delete"];new Set(lp);const i0=["get",...lp];new Set(i0);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},pl.apply(this,arguments)}const si=u.createContext(null),sp=u.createContext(null),zt=u.createContext(null),ii=u.createContext(null),mn=u.createContext({outlet:null,matches:[],isDataRoute:!1}),ip=u.createContext(null);function o0(t,e){let{relative:r}=e===void 0?{}:e;wr()||fe(!1);let{basename:l,navigator:s}=u.useContext(zt),{hash:i,pathname:o,search:a}=oi(t,{relative:r}),c=o;return l!=="/"&&(c=o==="/"?l:sn([l,o])),s.createHref({pathname:c,search:a,hash:i})}function wr(){return u.useContext(ii)!=null}function Cr(){return wr()||fe(!1),u.useContext(ii).location}function op(t){u.useContext(zt).static||u.useLayoutEffect(t)}function ap(){let{isDataRoute:t}=u.useContext(mn);return t?y0():a0()}function a0(){wr()||fe(!1);let t=u.useContext(si),{basename:e,future:r,navigator:l}=u.useContext(zt),{matches:s}=u.useContext(mn),{pathname:i}=Cr(),o=JSON.stringify(Ga(s,r.v7_relativeSplatPath)),a=u.useRef(!1);return op(()=>{a.current=!0}),u.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){l.go(d);return}let f=Qa(d,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:sn([e,f.pathname])),(h.replace?l.replace:l.push)(f,h.state,h)},[e,l,o,i,t])}function oi(t,e){let{relative:r}=e===void 0?{}:e,{future:l}=u.useContext(zt),{matches:s}=u.useContext(mn),{pathname:i}=Cr(),o=JSON.stringify(Ga(s,l.v7_relativeSplatPath));return u.useMemo(()=>Qa(t,JSON.parse(o),i,r==="path"),[t,o,i,r])}function c0(t,e){return d0(t,e)}function d0(t,e,r,l){wr()||fe(!1);let{navigator:s}=u.useContext(zt),{matches:i}=u.useContext(mn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Cr(),h;if(e){var f;let b=typeof e=="string"?In(e):e;c==="/"||(f=b.pathname)!=null&&f.startsWith(c)||fe(!1),h=b}else h=d;let x=h.pathname||"/",g=c==="/"?x:x.slice(c.length)||"/",v=Og(t,{pathname:g}),y=m0(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:sn([c,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:sn([c,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,r,l);return e&&y?u.createElement(ii.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Kt.Pop}},y):y}function u0(){let t=v0(),e=s0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},e),r?u.createElement("pre",{style:s},r):null,i)}const h0=u.createElement(u0,null);class f0 extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?u.createElement(mn.Provider,{value:this.props.routeContext},u.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p0(t){let{routeContext:e,match:r,children:l}=t,s=u.useContext(si);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(mn.Provider,{value:e},l)}function m0(t,e,r,l){var s;if(e===void 0&&(e=[]),r===void 0&&(r=null),l===void 0&&(l=null),t==null){var i;if((i=r)!=null&&i.errors)t=r.matches;else return null}let o=t,a=(s=r)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));h>=0||fe(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,d=-1;if(r&&l&&l.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:x,errors:g}=r,v=f.route.loader&&x[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,f,x)=>{let g,v=!1,y=null,b=null;r&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||h0,c&&(d<0&&x===0?(w0("route-fallback",!1),v=!0,b=null):d===x&&(v=!0,b=f.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,x+1)),p=()=>{let j;return g?j=y:v?j=b:f.route.Component?j=u.createElement(f.route.Component,null):f.route.element?j=f.route.element:j=h,u.createElement(p0,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:j})};return r&&(f.route.ErrorBoundary||f.route.errorElement||x===0)?u.createElement(f0,{location:r.location,revalidation:r.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var cp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cp||{}),Ms=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ms||{});function x0(t){let e=u.useContext(si);return e||fe(!1),e}function g0(t){let e=u.useContext(sp);return e||fe(!1),e}function j0(t){let e=u.useContext(mn);return e||fe(!1),e}function dp(t){let e=j0(),r=e.matches[e.matches.length-1];return r.route.id||fe(!1),r.route.id}function v0(){var t;let e=u.useContext(ip),r=g0(Ms.UseRouteError),l=dp(Ms.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[l]}function y0(){let{router:t}=x0(cp.UseNavigateStable),e=dp(Ms.UseNavigateStable),r=u.useRef(!1);return op(()=>{r.current=!0}),u.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,pl({fromRouteId:e},i)))},[t,e])}const Od={};function w0(t,e,r){!e&&!Od[t]&&(Od[t]=!0)}function Kl(t){let{to:e,replace:r,state:l,relative:s}=t;wr()||fe(!1);let{future:i,static:o}=u.useContext(zt),{matches:a}=u.useContext(mn),{pathname:c}=Cr(),d=ap(),h=Qa(e,Ga(a,i.v7_relativeSplatPath),c,s==="path"),f=JSON.stringify(h);return u.useEffect(()=>d(JSON.parse(f),{replace:r,state:l,relative:s}),[d,f,s,r,l]),null}function Q(t){fe(!1)}function C0(t){let{basename:e="/",children:r=null,location:l,navigationType:s=Kt.Pop,navigator:i,static:o=!1,future:a}=t;wr()&&fe(!1);let c=e.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:i,static:o,future:pl({v7_relativeSplatPath:!1},a)}),[c,a,i,o]);typeof l=="string"&&(l=In(l));let{pathname:h="/",search:f="",hash:x="",state:g=null,key:v="default"}=l,y=u.useMemo(()=>{let b=fl(h,c);return b==null?null:{location:{pathname:b,search:f,hash:x,state:g,key:v},navigationType:s}},[c,h,f,x,g,v,s]);return y==null?null:u.createElement(zt.Provider,{value:d},u.createElement(ii.Provider,{children:r,value:y}))}function ai(t){let{children:e,location:r}=t;return c0(Qo(e),r)}new Promise(()=>{});function Qo(t,e){e===void 0&&(e=[]);let r=[];return u.Children.forEach(t,(l,s)=>{if(!u.isValidElement(l))return;let i=[...e,s];if(l.type===u.Fragment){r.push.apply(r,Qo(l.props.children,i));return}l.type!==Q&&fe(!1),!l.props.index||!l.props.children||fe(!1);let o={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(o.children=Qo(l.props.children,i)),r.push(o)}),r}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},Is.apply(this,arguments)}function up(t,e){if(t==null)return{};var r={},l=Object.keys(t),s,i;for(i=0;i<l.length;i++)s=l[i],!(e.indexOf(s)>=0)&&(r[s]=t[s]);return r}function _0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function b0(t,e){return t.button===0&&(!e||e==="_self")&&!_0(t)}const N0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],k0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],S0=u.createContext({isTransitioning:!1}),T0="startTransition",zd=na[T0];function E0(t){let{basename:e,children:r,future:l,window:s}=t,i=u.useRef();i.current==null&&(i.current=Mg({window:s,v5Compat:!0}));let o=i.current,[a,c]=u.useState({action:o.action,location:o.location}),{v7_startTransition:d}=l||{},h=u.useCallback(f=>{d&&zd?zd(()=>c(f)):c(f)},[c,d]);return u.useLayoutEffect(()=>o.listen(h),[o,h]),u.createElement(C0,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o,future:l})}const B0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hp=u.forwardRef(function(e,r){let{onClick:l,relative:s,reloadDocument:i,replace:o,state:a,target:c,to:d,preventScrollReset:h,unstable_viewTransition:f}=e,x=up(e,N0),{basename:g}=u.useContext(zt),v,y=!1;if(typeof d=="string"&&R0.test(d)&&(v=d,B0))try{let j=new URL(window.location.href),w=d.startsWith("//")?new URL(j.protocol+d):new URL(d),_=fl(w.pathname,g);w.origin===j.origin&&_!=null?d=_+w.search+w.hash:y=!0}catch{}let b=o0(d,{relative:s}),m=D0(d,{replace:o,state:a,target:c,preventScrollReset:h,relative:s,unstable_viewTransition:f});function p(j){l&&l(j),j.defaultPrevented||m(j)}return u.createElement("a",Is({},x,{href:v||b,onClick:y||i?l:p,ref:r,target:c}))}),Z=u.forwardRef(function(e,r){let{"aria-current":l="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:c,unstable_viewTransition:d,children:h}=e,f=up(e,k0),x=oi(c,{relative:f.relative}),g=Cr(),v=u.useContext(sp),{navigator:y}=u.useContext(zt),b=v!=null&&P0(x)&&d===!0,m=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,p=g.pathname,j=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;s||(p=p.toLowerCase(),j=j?j.toLowerCase():null,m=m.toLowerCase());const w=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let _=p===m||!o&&p.startsWith(m)&&p.charAt(w)==="/",S=j!=null&&(j===m||!o&&j.startsWith(m)&&j.charAt(m.length)==="/"),T={isActive:_,isPending:S,isTransitioning:b},L=_?l:void 0,z;typeof i=="function"?z=i(T):z=[i,_?"active":null,S?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(T):a;return u.createElement(hp,Is({},f,{"aria-current":L,className:z,ref:r,style:F,to:c,unstable_viewTransition:d}),typeof h=="function"?h(T):h)});var Ko;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ko||(Ko={}));var $d;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($d||($d={}));function L0(t){let e=u.useContext(si);return e||fe(!1),e}function D0(t,e){let{target:r,replace:l,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=ap(),d=Cr(),h=oi(t,{relative:o});return u.useCallback(f=>{if(b0(f,r)){f.preventDefault();let x=l!==void 0?l:As(d)===As(h);c(t,{replace:x,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:a})}},[d,c,h,l,s,r,t,i,o,a])}function P0(t,e){e===void 0&&(e={});let r=u.useContext(S0);r==null&&fe(!1);let{basename:l}=L0(Ko.useViewTransitionState),s=oi(t,{relative:e.relative});if(!r.isTransitioning)return!1;let i=fl(r.currentLocation.pathname,l)||r.currentLocation.pathname,o=fl(r.nextLocation.pathname,l)||r.nextLocation.pathname;return Go(s.pathname,o)!=null||Go(s.pathname,i)!=null}const fp="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMTAuNSAtOS42MCAyMSAxOS4yIiBmaWxsPSJub25lIg0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZGVmcyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxzdHlsZT4uY2xzLTF7ZmlsbDojNDA5ZWZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7c3Ryb2tlOiM0MDllZmY7fTwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHRleHQgeD0iLTMuNCIgeT0iMy4wIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZvbnQtc2l6ZT0iMC43ZW0iIGNsYXNzPSJjbHMtMSI+ZTwvdGV4dD4NCiAgPGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgY2xhc3M9ImNscy0yIj4NCiAgICA8ZWxsaXBzZSByeD0iMTAiIHJ5PSI1LjgiPjwvZWxsaXBzZT4NCiAgICA8ZWxsaXBzZSByeD0iMTAiIHJ5PSI1LjgiIHRyYW5zZm9ybT0icm90YXRlKDYwKSI+PC9lbGxpcHNlPg0KICAgIDxlbGxpcHNlIHJ4PSIxMCIgcnk9IjUuOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSI+PC9lbGxpcHNlPg0KICA8L2c+DQo8L3N2Zz4=";function A0(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"home-content",children:[n.jsxs("div",{className:"description",children:[n.jsx("img",{src:fp,alt:"pelement-react",className:"logo"}),n.jsx("h1",{children:"pelement react"}),n.jsx("p",{children:"基于Element Plus 和 react，面向设计师和开发者的组件库"}),n.jsx(hp,{to:"/component/button",children:"快速开始"})]}),n.jsxs("div",{className:"join-us",children:[n.jsx("h3",{children:"加入我们"}),n.jsxs("div",{children:[n.jsx("label",{children:"Email: "}),n.jsx("span",{children:"llkui241569@163.com"})]}),n.jsxs("div",{children:[n.jsx("label",{children:"QQ: "}),n.jsx("span",{children:"1728366431"})]})]}),n.jsxs("div",{className:"footer-main text-xs",children:[n.jsxs("p",{children:["Released under the ",n.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferer",children:"MIT License"}),"."]}),n.jsxs("p",{children:["Made with ❤️ by ",n.jsx("a",{href:"https://github.com/llkui",target:"_blank",rel:"noopener noreferer",children:"llkui"})]})]})]})})}function Hd(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"安装"}),`
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
`})})]})}function M0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Hd,{...t})}):Hd(t)}function Ud(t){const e={h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.10"}),`
`,n.jsx(e.p,{children:"be pending"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Rate"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.9"}),`
`,n.jsx(e.p,{children:"2024-02-18"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Badge"}),`
`,n.jsx(e.li,{children:"Components [Icon] add Share"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"0.0.1-alpha.8"}),`
`,n.jsx(e.p,{children:"2024-02-07"}),`
`,n.jsx(e.h4,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Components add Table"}),`
`,n.jsx(e.li,{children:"Components add Scrollbar"}),`
`]}),`
`,n.jsx(e.hr,{}),`
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
`]})]})}function I0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ud,{...t})}):Ud(t)}function Wd(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"社区精选组件"}),`
`,n.jsx(e.h2,{children:"推荐组件"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"推荐组件"}),n.jsx(e.th,{children:"pelement-react使用场景"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"浮动元素"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/floating-ui/floating-ui/",children:"Floating UI"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Tooltip"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"svg图标"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/pd4d10/vite-plugin-svgr/",children:"vite-plugin-svgr"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Icon"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Markdown 渲染"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/mdx-js/mdx/",children:"@mdx-js/rollup"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Markdown"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"代码高亮"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/highlightjs/highlight.js/",children:"highlight.js"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"CodeBlock"})})]})]})]})]})}function F0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Wd,{...t})}):Wd(t)}function O0(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"基础"}),n.jsx(Z,{to:"installation",children:"安装"}),n.jsx("p",{className:"sidebar-group__title",children:"进阶"}),n.jsx(Z,{to:"changelog",children:"更新日志"}),n.jsx("p",{className:"sidebar-group__title",children:"其他"}),n.jsx(Z,{to:"recommendation",children:"社区精选组件"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsx("div",{className:"markdown-body",children:n.jsxs(ai,{children:[n.jsx(Q,{path:"installation",element:n.jsx(M0,{})}),n.jsx(Q,{path:"changelog",element:n.jsx(I0,{})}),n.jsx(Q,{path:"recommendation",element:n.jsx(F0,{})})]})})})})]})}const z0=`import { Alert } from 'pelement-react'\r
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
export default AlertBasic`,$0=`import { Alert } from 'pelement-react'\r
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
export default AlertCenter`,H0=`import { Alert } from 'pelement-react'\r
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
export default AlertClose`,U0=`import { Alert } from 'pelement-react'\r
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
export default AlertDescription`,W0=`import { Alert } from 'pelement-react'\r
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
export default AlertEffect`,V0=`import { Alert } from 'pelement-react'\r
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
export default AlertIconDescription`,X0=`import { Alert } from 'pelement-react'\r
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
export default AlertIcon`,G0=`import { Avatar, Col, Row } from 'pelement-react'\r
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
export default AvatarBasic`,Q0=`import { Avatar } from 'pelement-react'\r
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
export default AvatarError`,K0=`import { Avatar } from "pelement-react"\r
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
export default AvatarFit`,Y0=`import { Avatar, UserFilled } from 'pelement-react'\r
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
export default AvatarType`,Z0=`import { Badge, Button } from 'pelement-react'\r
import './BadgeBasic.scss'\r
\r
function BadgeBasic() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value={12} className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={3} className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
        <Badge value={1} className="item" type="primary">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={2} className="item" type="warning">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeBasic`,J0=`import { Badge, Button, Share } from 'pelement-react'\r
\r
function BadgeIsDot() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge isDot className="item">query</Badge>\r
        <Badge isDot className="item">\r
          <Button className="share-button" icon={<Share />} type="primary" />\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeIsDot`,q0=`import { Badge, Button } from 'pelement-react'\r
\r
function BadgeMax() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value={200} max={99} className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={100} max={10} className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeMax`,ej=`import { Badge, Button } from 'pelement-react'\r
\r
function BadgeValue() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value="new" className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value="hot" className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeValue`,tj=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
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
export default ButtonBasic`,nj=`import { Button } from 'pelement-react'\r
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
export default ButtonDisabled`,rj=`import { Button } from 'pelement-react'\r
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
export default ButtonLink`,lj=`import { Button } from 'pelement-react'\r
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
  const textList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const bgList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
      bg\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const disabledList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
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
export default ButtonText`,sj=`import { Collapse, CollapseItem } from 'pelement-react'\r
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
export default CollapseBasic`,ij=`import { Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic`,oj=`import { Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic1`,aj=`import { Aside, Container, Main } from 'pelement-react'\r
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
export default ContainerBasic2`,cj=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic3`,dj=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic4`,uj=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic5`,hj=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic6`,fj=`import { Button, Dialog } from 'pelement-react'\r
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
export default DialogBasic`,pj=`import { useState } from 'react'\r
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
export default DialogContent`,mj=`import { useState } from 'react'\r
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
export default DialogHeader`,xj=`import { Divider } from 'pelement-react'\r
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
export default DividerBasic`,gj=`import { Divider } from 'pelement-react'\r
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
export default DividerBorder`,jj=`import { Divider, StarFilled } from 'pelement-react'\r
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
export default DividerContent`,vj=`import { Divider } from 'pelement-react'\r
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
export default DividerDirection`,yj=`import { useState } from 'react'\r
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
export default DrawerBasic`,wj=`import { useState } from 'react'\r
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
export default DrawerContent`,Cj=`import { useState } from 'react'\r
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
export default DrawerHeader`,_j=`import { useState } from 'react'\r
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
export default DrawerWithHeader`,bj=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share } from 'pelement-react'\r
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
      <Share style={{ fontSize: '20px' }} />\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,Nj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBasic`,kj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBootstrap`,Sj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutGutter`,Tj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutJustify`,Ej=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutMix`,Bj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutOffset`,Rj=`import { Link } from 'pelement-react'\r
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
export default LinkBasic`,Lj=`import { Link } from 'pelement-react'\r
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
export default LinkDisabled`,Dj=`import { Edit, Link, View } from 'pelement-react'\r
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
export default LinkIcon`,Pj=`import { Link } from 'pelement-react'\r
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
export default LinkUnderline`,Aj=`import { Button, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmBasic`,Mj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmEvent`,Ij=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmIcon`,Fj=`import { Button, Popover } from 'pelement-react'\r
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
export default PopoverBasic`,Oj=`import { Progress } from 'pelement-react'\r
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
export default ProgressBasic`,zj=`import { Progress } from 'pelement-react'\r
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
export default ProgressTextInside`,$j=`import { Rate } from 'pelement-react'\r
\r
function RateBasic() {\r
  return (\r
    <>\r
      <Rate></Rate>\r
    </>\r
  )\r
}\r
\r
export default RateBasic`,Hj=`import { Button, Col, Result, Row } from 'pelement-react'\r
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
export default ResultBasic`,Uj=`import { Button, Result } from 'pelement-react'\r
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
export default ResultIcon`,Wj=`import { Scrollbar } from 'pelement-react'\r
import './ScrollbarBasic.css'\r
\r
function ScrollbarBasic() {\r
  return (\r
    <>\r
      <Scrollbar height="400px">\r
        {\r
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>\r
\r
            <p key={index} className="scrollbar-demo-item">{item}</p>\r
          )\r
        }\r
      </Scrollbar>\r
    </>\r
  )\r
}\r
\r
export default ScrollbarBasic`,Vj=`import { Hide, Switch, View } from 'pelement-react'\r
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
export default SwitchActionIcon`,Xj=`import { Switch } from 'pelement-react'\r
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
export default SwitchBasic`,Gj=`import { useState } from 'react'\r
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
export default SwitchBeforeChange`,Qj=`import { Switch } from 'pelement-react'\r
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
export default SwitchDisabled`,Kj=`import { Check, Close, Switch } from 'pelement-react'\r
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
export default SwitchIcon`,Yj=`import { Switch } from 'pelement-react'\r
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
export default SwitchLoading`,Zj=`import { Switch } from 'pelement-react'\r
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
export default SwitchSize`,Jj=`import { Switch } from 'pelement-react'\r
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
export default SwitchText`,qj=`import { Table } from 'pelement-react'\r
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
export default TableBasic`,ev=`import { Table } from 'pelement-react'\r
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
export default TableBorder`,tv=`import { Table } from 'pelement-react'\r
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
export default TableStripe`,nv=`import { Tag } from 'pelement-react'\r
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
export default TagBasic`,rv=`import { Tag } from 'pelement-react'\r
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
export default TagClosable`,lv=`import { Tag } from 'pelement-react'\r
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
export default TagEffect`,sv=`import { Tag } from 'pelement-react'\r
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
export default TagRound`,iv=`import { Row, Tag } from 'pelement-react'\r
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
export default TagSize`,ov=`import { Text } from 'pelement-react'\r
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
export default TextBasic`,av=`import { Text } from 'pelement-react'\r
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
export default TextSize`,cv=`import { Row, Text } from 'pelement-react'\r
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
export default TextTruncated`,dv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipBasic`,uv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipContent`,hv=`import { useState } from 'react'\r
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
export default TooltipDisabled`,fv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipEffect`;function pp(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const r=t[e],l=typeof r;(l==="object"||l==="function")&&!Object.isFrozen(r)&&pp(r)}),t}class Vd{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function mp(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Yt(t,...e){const r=Object.create(null);for(const l in t)r[l]=t[l];return e.forEach(function(l){for(const s in l)r[s]=l[s]}),r}const pv="</span>",Xd=t=>!!t.scope,mv=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const r=t.split(".");return[`${e}${r.shift()}`,...r.map((l,s)=>`${l}${"_".repeat(s+1)}`)].join(" ")}return`${e}${t}`};class xv{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=mp(e)}openNode(e){if(!Xd(e))return;const r=mv(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){Xd(e)&&(this.buffer+=pv)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Gd=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Ka{constructor(){this.rootNode=Gd(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const r=Gd({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(l=>this._walk(e,l)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{Ka._collapse(r)}))}}class gv extends Ka{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){const l=e.root;r&&(l.scope=`language:${r}`),this.add(l)}toHTML(){return new xv(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function ml(t){return t?typeof t=="string"?t:t.source:null}function xp(t){return Fn("(?=",t,")")}function jv(t){return Fn("(?:",t,")*")}function vv(t){return Fn("(?:",t,")?")}function Fn(...t){return t.map(r=>ml(r)).join("")}function yv(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Ya(...t){return"("+(yv(t).capture?"":"?:")+t.map(l=>ml(l)).join("|")+")"}function gp(t){return new RegExp(t.toString()+"|").exec("").length-1}function wv(t,e){const r=t&&t.exec(e);return r&&r.index===0}const Cv=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Za(t,{joinWith:e}){let r=0;return t.map(l=>{r+=1;const s=r;let i=ml(l),o="";for(;i.length>0;){const a=Cv.exec(i);if(!a){o+=i;break}o+=i.substring(0,a.index),i=i.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+s):(o+=a[0],a[0]==="("&&r++)}return o}).map(l=>`(${l})`).join(e)}const _v=/\b\B/,jp="[a-zA-Z]\\w*",Ja="[a-zA-Z_]\\w*",vp="\\b\\d+(\\.\\d+)?",yp="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",wp="\\b(0b[01]+)",bv="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Nv=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=Fn(e,/.*\b/,t.binary,/\b.*/)),Yt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,l)=>{r.index!==0&&l.ignoreMatch()}},t)},xl={begin:"\\\\[\\s\\S]",relevance:0},kv={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[xl]},Sv={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[xl]},Tv={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ci=function(t,e,r={}){const l=Yt({scope:"comment",begin:t,end:e,contains:[]},r);l.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=Ya("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return l.contains.push({begin:Fn(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),l},Ev=ci("//","$"),Bv=ci("/\\*","\\*/"),Rv=ci("#","$"),Lv={scope:"number",begin:vp,relevance:0},Dv={scope:"number",begin:yp,relevance:0},Pv={scope:"number",begin:wp,relevance:0},Av={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[xl,{begin:/\[/,end:/\]/,relevance:0,contains:[xl]}]},Mv={scope:"title",begin:jp,relevance:0},Iv={scope:"title",begin:Ja,relevance:0},Fv={begin:"\\.\\s*"+Ja,relevance:0},Ov=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})};var Yl=Object.freeze({__proto__:null,APOS_STRING_MODE:kv,BACKSLASH_ESCAPE:xl,BINARY_NUMBER_MODE:Pv,BINARY_NUMBER_RE:wp,COMMENT:ci,C_BLOCK_COMMENT_MODE:Bv,C_LINE_COMMENT_MODE:Ev,C_NUMBER_MODE:Dv,C_NUMBER_RE:yp,END_SAME_AS_BEGIN:Ov,HASH_COMMENT_MODE:Rv,IDENT_RE:jp,MATCH_NOTHING_RE:_v,METHOD_GUARD:Fv,NUMBER_MODE:Lv,NUMBER_RE:vp,PHRASAL_WORDS_MODE:Tv,QUOTE_STRING_MODE:Sv,REGEXP_MODE:Av,RE_STARTERS_RE:bv,SHEBANG:Nv,TITLE_MODE:Mv,UNDERSCORE_IDENT_RE:Ja,UNDERSCORE_TITLE_MODE:Iv});function zv(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function $v(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Hv(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=zv,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Uv(t,e){Array.isArray(t.illegal)&&(t.illegal=Ya(...t.illegal))}function Wv(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Vv(t,e){t.relevance===void 0&&(t.relevance=1)}const Xv=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},t);Object.keys(t).forEach(l=>{delete t[l]}),t.keywords=r.keywords,t.begin=Fn(r.beforeMatch,xp(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},Gv=["of","and","for","in","not","or","if","then","parent","list","value"],Qv="keyword";function Cp(t,e,r=Qv){const l=Object.create(null);return typeof t=="string"?s(r,t.split(" ")):Array.isArray(t)?s(r,t):Object.keys(t).forEach(function(i){Object.assign(l,Cp(t[i],e,i))}),l;function s(i,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");l[c[0]]=[i,Kv(c[0],c[1])]})}}function Kv(t,e){return e?Number(e):Yv(t)?0:1}function Yv(t){return Gv.includes(t.toLowerCase())}const Qd={},kn=t=>{console.error(t)},Kd=(t,...e)=>{console.log(`WARN: ${t}`,...e)},$n=(t,e)=>{Qd[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Qd[`${t}/${e}`]=!0)},Fs=new Error;function _p(t,e,{key:r}){let l=0;const s=t[r],i={},o={};for(let a=1;a<=e.length;a++)o[a+l]=s[a],i[a+l]=!0,l+=gp(e[a-1]);t[r]=o,t[r]._emit=i,t[r]._multi=!0}function Zv(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw kn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Fs;if(typeof t.beginScope!="object"||t.beginScope===null)throw kn("beginScope must be object"),Fs;_p(t,t.begin,{key:"beginScope"}),t.begin=Za(t.begin,{joinWith:""})}}function Jv(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw kn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Fs;if(typeof t.endScope!="object"||t.endScope===null)throw kn("endScope must be object"),Fs;_p(t,t.end,{key:"endScope"}),t.end=Za(t.end,{joinWith:""})}}function qv(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function e1(t){qv(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Zv(t),Jv(t)}function t1(t){function e(o,a){return new RegExp(ml(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=gp(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(Za(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const d=c.findIndex((f,x)=>x>0&&f!==void 0),h=this.matchIndexes[d];return c.splice(0,d),Object.assign(c,h)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new r;return this.rules.slice(a).forEach(([d,h])=>c.addRule(d,h)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let d=c.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,d=h.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function s(o){const a=new l;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function i(o,a){const c=o;if(o.isCompiled)return c;[$v,Wv,e1,Xv].forEach(h=>h(o,a)),t.compilerExtensions.forEach(h=>h(o,a)),o.__beforeBegin=null,[Hv,Uv,Vv].forEach(h=>h(o,a)),o.isCompiled=!0;let d=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),d=o.keywords.$pattern,delete o.keywords.$pattern),d=d||/\w+/,o.keywords&&(o.keywords=Cp(o.keywords,t.case_insensitive)),c.keywordPatternRe=e(d,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=ml(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(h){return n1(h==="self"?o:h)})),o.contains.forEach(function(h){i(h,c)}),o.starts&&i(o.starts,a),c.matcher=s(c),c}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Yt(t.classNameAliases||{}),i(t)}function bp(t){return t?t.endsWithParent||bp(t.starts):!1}function n1(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Yt(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:bp(t)?Yt(t,{starts:t.starts?Yt(t.starts):null}):Object.isFrozen(t)?Yt(t):t}var r1="11.9.0";class l1 extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}}const Qi=mp,Yd=Yt,Zd=Symbol("nomatch"),s1=7,Np=function(t){const e=Object.create(null),r=Object.create(null),l=[];let s=!0;const i="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:gv};function c(k){return a.noHighlightRe.test(k)}function d(k){let C=k.className+" ";C+=k.parentNode?k.parentNode.className:"";const B=a.languageDetectRe.exec(C);if(B){const P=z(B[1]);return P||(Kd(i.replace("{}",B[1])),Kd("Falling back to no-highlight mode for this block.",k)),P?B[1]:"no-highlight"}return C.split(/\s+/).find(P=>c(P)||z(P))}function h(k,C,B){let P="",$="";typeof C=="object"?(P=k,B=C.ignoreIllegals,$=C.language):($n("10.7.0","highlight(lang, code, ...args) has been deprecated."),$n("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=k,P=C),B===void 0&&(B=!0);const Y={code:P,language:$};U("before:highlight",Y);const De=Y.result?Y.result:f(Y.language,Y.code,B);return De.code=Y.code,U("after:highlight",De),De}function f(k,C,B,P){const $=Object.create(null);function Y(D,O){return D.keywords[O]}function De(){if(!V.keywords){Se.addText(re);return}let D=0;V.keywordPatternRe.lastIndex=0;let O=V.keywordPatternRe.exec(re),X="";for(;O;){X+=re.substring(D,O.index);const q=yt.case_insensitive?O[0].toLowerCase():O[0],Pe=Y(V,q);if(Pe){const[Et,cm]=Pe;if(Se.addText(X),X="",$[q]=($[q]||0)+1,$[q]<=s1&&(Rl+=cm),Et.startsWith("_"))X+=O[0];else{const dm=yt.classNameAliases[Et]||Et;Ce(O[0],dm)}}else X+=O[0];D=V.keywordPatternRe.lastIndex,O=V.keywordPatternRe.exec(re)}X+=re.substring(D),Se.addText(X)}function lt(){if(re==="")return;let D=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){Se.addText(re);return}D=f(V.subLanguage,re,!0,Nc[V.subLanguage]),Nc[V.subLanguage]=D._top}else D=g(re,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Rl+=D.relevance),Se.__addSublanguage(D._emitter,D.language)}function ke(){V.subLanguage!=null?lt():De(),re=""}function Ce(D,O){D!==""&&(Se.startScope(O),Se.addText(D),Se.endScope())}function gn(D,O){let X=1;const q=O.length-1;for(;X<=q;){if(!D._emit[X]){X++;continue}const Pe=yt.classNameAliases[D[X]]||D[X],Et=O[X];Pe?Ce(Et,Pe):(re=Et,De(),re=""),X++}}function Cc(D,O){return D.scope&&typeof D.scope=="string"&&Se.openNode(yt.classNameAliases[D.scope]||D.scope),D.beginScope&&(D.beginScope._wrap?(Ce(re,yt.classNameAliases[D.beginScope._wrap]||D.beginScope._wrap),re=""):D.beginScope._multi&&(gn(D.beginScope,O),re="")),V=Object.create(D,{parent:{value:V}}),V}function _c(D,O,X){let q=wv(D.endRe,X);if(q){if(D["on:end"]){const Pe=new Vd(D);D["on:end"](O,Pe),Pe.isMatchIgnored&&(q=!1)}if(q){for(;D.endsParent&&D.parent;)D=D.parent;return D}}if(D.endsWithParent)return _c(D.parent,O,X)}function lm(D){return V.matcher.regexIndex===0?(re+=D[0],1):(yi=!0,0)}function sm(D){const O=D[0],X=D.rule,q=new Vd(X),Pe=[X.__beforeBegin,X["on:begin"]];for(const Et of Pe)if(Et&&(Et(D,q),q.isMatchIgnored))return lm(O);return X.skip?re+=O:(X.excludeBegin&&(re+=O),ke(),!X.returnBegin&&!X.excludeBegin&&(re=O)),Cc(X,D),X.returnBegin?0:O.length}function im(D){const O=D[0],X=C.substring(D.index),q=_c(V,D,X);if(!q)return Zd;const Pe=V;V.endScope&&V.endScope._wrap?(ke(),Ce(O,V.endScope._wrap)):V.endScope&&V.endScope._multi?(ke(),gn(V.endScope,D)):Pe.skip?re+=O:(Pe.returnEnd||Pe.excludeEnd||(re+=O),ke(),Pe.excludeEnd&&(re=O));do V.scope&&Se.closeNode(),!V.skip&&!V.subLanguage&&(Rl+=V.relevance),V=V.parent;while(V!==q.parent);return q.starts&&Cc(q.starts,D),Pe.returnEnd?0:O.length}function om(){const D=[];for(let O=V;O!==yt;O=O.parent)O.scope&&D.unshift(O.scope);D.forEach(O=>Se.openNode(O))}let Bl={};function bc(D,O){const X=O&&O[0];if(re+=D,X==null)return ke(),0;if(Bl.type==="begin"&&O.type==="end"&&Bl.index===O.index&&X===""){if(re+=C.slice(O.index,O.index+1),!s){const q=new Error(`0 width match regex (${k})`);throw q.languageName=k,q.badRule=Bl.rule,q}return 1}if(Bl=O,O.type==="begin")return sm(O);if(O.type==="illegal"&&!B){const q=new Error('Illegal lexeme "'+X+'" for mode "'+(V.scope||"<unnamed>")+'"');throw q.mode=V,q}else if(O.type==="end"){const q=im(O);if(q!==Zd)return q}if(O.type==="illegal"&&X==="")return 1;if(vi>1e5&&vi>O.index*3)throw new Error("potential infinite loop, way more iterations than matches");return re+=X,X.length}const yt=z(k);if(!yt)throw kn(i.replace("{}",k)),new Error('Unknown language: "'+k+'"');const am=t1(yt);let ji="",V=P||am;const Nc={},Se=new a.__emitter(a);om();let re="",Rl=0,jn=0,vi=0,yi=!1;try{if(yt.__emitTokens)yt.__emitTokens(C,Se);else{for(V.matcher.considerAll();;){vi++,yi?yi=!1:V.matcher.considerAll(),V.matcher.lastIndex=jn;const D=V.matcher.exec(C);if(!D)break;const O=C.substring(jn,D.index),X=bc(O,D);jn=D.index+X}bc(C.substring(jn))}return Se.finalize(),ji=Se.toHTML(),{language:k,value:ji,relevance:Rl,illegal:!1,_emitter:Se,_top:V}}catch(D){if(D.message&&D.message.includes("Illegal"))return{language:k,value:Qi(C),illegal:!0,relevance:0,_illegalBy:{message:D.message,index:jn,context:C.slice(jn-100,jn+100),mode:D.mode,resultSoFar:ji},_emitter:Se};if(s)return{language:k,value:Qi(C),illegal:!1,relevance:0,errorRaised:D,_emitter:Se,_top:V};throw D}}function x(k){const C={value:Qi(k),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return C._emitter.addText(k),C}function g(k,C){C=C||a.languages||Object.keys(e);const B=x(k),P=C.filter(z).filter(G).map(ke=>f(ke,k,!1));P.unshift(B);const $=P.sort((ke,Ce)=>{if(ke.relevance!==Ce.relevance)return Ce.relevance-ke.relevance;if(ke.language&&Ce.language){if(z(ke.language).supersetOf===Ce.language)return 1;if(z(Ce.language).supersetOf===ke.language)return-1}return 0}),[Y,De]=$,lt=Y;return lt.secondBest=De,lt}function v(k,C,B){const P=C&&r[C]||B;k.classList.add("hljs"),k.classList.add(`language-${P}`)}function y(k){let C=null;const B=d(k);if(c(B))return;if(U("before:highlightElement",{el:k,language:B}),k.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",k);return}if(k.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(k)),a.throwUnescapedHTML))throw new l1("One of your code blocks includes unescaped HTML.",k.innerHTML);C=k;const P=C.textContent,$=B?h(P,{language:B,ignoreIllegals:!0}):g(P);k.innerHTML=$.value,k.dataset.highlighted="yes",v(k,B,$.language),k.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(k.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),U("after:highlightElement",{el:k,result:$,text:P})}function b(k){a=Yd(a,k)}const m=()=>{w(),$n("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function p(){w(),$n("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let j=!1;function w(){if(document.readyState==="loading"){j=!0;return}document.querySelectorAll(a.cssSelector).forEach(y)}function _(){j&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",_,!1);function S(k,C){let B=null;try{B=C(t)}catch(P){if(kn("Language definition for '{}' could not be registered.".replace("{}",k)),s)kn(P);else throw P;B=o}B.name||(B.name=k),e[k]=B,B.rawDefinition=C.bind(null,t),B.aliases&&F(B.aliases,{languageName:k})}function T(k){delete e[k];for(const C of Object.keys(r))r[C]===k&&delete r[C]}function L(){return Object.keys(e)}function z(k){return k=(k||"").toLowerCase(),e[k]||e[r[k]]}function F(k,{languageName:C}){typeof k=="string"&&(k=[k]),k.forEach(B=>{r[B.toLowerCase()]=C})}function G(k){const C=z(k);return C&&!C.disableAutodetect}function te(k){k["before:highlightBlock"]&&!k["before:highlightElement"]&&(k["before:highlightElement"]=C=>{k["before:highlightBlock"](Object.assign({block:C.el},C))}),k["after:highlightBlock"]&&!k["after:highlightElement"]&&(k["after:highlightElement"]=C=>{k["after:highlightBlock"](Object.assign({block:C.el},C))})}function ce(k){te(k),l.push(k)}function H(k){const C=l.indexOf(k);C!==-1&&l.splice(C,1)}function U(k,C){const B=k;l.forEach(function(P){P[B]&&P[B](C)})}function W(k){return $n("10.7.0","highlightBlock will be removed entirely in v12.0"),$n("10.7.0","Please use highlightElement now."),y(k)}Object.assign(t,{highlight:h,highlightAuto:g,highlightAll:w,highlightElement:y,highlightBlock:W,configure:b,initHighlighting:m,initHighlightingOnLoad:p,registerLanguage:S,unregisterLanguage:T,listLanguages:L,getLanguage:z,registerAliases:F,autoDetection:G,inherit:Yd,addPlugin:ce,removePlugin:H}),t.debugMode=function(){s=!1},t.safeMode=function(){s=!0},t.versionString=r1,t.regex={concat:Fn,lookahead:xp,either:Ya,optional:vv,anyNumberOfTimes:jv};for(const k in Yl)typeof Yl[k]=="object"&&pp(Yl[k]);return Object.assign(t,Yl),t},mr=Np({});mr.newInstance=()=>Np({});var i1=mr;mr.HighlightJS=mr;mr.default=mr;const qa=zu(i1);function o1(t){const e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),l=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=t.inherit(i,{begin:/\(/,end:/\)/}),a=t.inherit(t.APOS_STRING_MODE,{className:"string"}),c=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:l,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,o,c,a]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:d}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Jd="[A-Za-z$_][0-9A-Za-z$_]*",a1=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],c1=["true","false","null","undefined","NaN","Infinity"],kp=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Sp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Tp=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],d1=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],u1=[].concat(Tp,kp,Sp);function h1(t){const e=t.regex,r=(C,{after:B})=>{const P="</"+C[0].slice(1);return C.input.indexOf(P,B)!==-1},l=Jd,s={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,B)=>{const P=C[0].length+C.index,$=C.input[P];if($==="<"||$===","){B.ignoreMatch();return}$===">"&&(r(C,{after:P})||B.ignoreMatch());let Y;const De=C.input.substring(P);if(Y=De.match(/^\s*=/)){B.ignoreMatch();return}if((Y=De.match(/^\s+extends\s+/))&&Y.index===0){B.ignoreMatch();return}}},a={$pattern:Jd,keyword:a1,literal:c1,built_in:u1,"variable.language":d1},c="[0-9](_?[0-9])*",d=`\\.(${c})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},b={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,x]},p={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:l+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},j=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,b,{match:/\$\d+/},f];x.contains=j.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(j)});const w=[].concat(p,x.contains),_=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),S={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_},T={variants:[{match:[/class/,/\s+/,l,/\s+/,/extends/,/\s+/,e.concat(l,"(",e.concat(/\./,l),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,l],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...kp,...Sp]}},z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,l,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],illegal:/%/},G={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(C){return e.concat("(?!",C.join("|"),")")}const ce={match:e.concat(/\b/,te([...Tp,"super","import"]),l,e.lookahead(/\(/)),className:"title.function",relevance:0},H={begin:e.concat(/\./,e.lookahead(e.concat(l,/(?![0-9A-Za-z$_(])/))),end:l,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,l,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},S]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",k={match:[/const|var|let/,/\s+/,l,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:_,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),z,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,b,p,{match:/\$\d+/},f,L,{className:"attr",begin:l+e.lookahead(":"),relevance:0},k,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[p,t.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:i},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[S,t.inherit(t.TITLE_MODE,{begin:l,className:"title.function"})]},{match:/\.\.\./,relevance:0},H,{match:"\\$"+l,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[S]},ce,G,T,U,{match:/\$[(.]/}]}}qa.registerLanguage("xml",o1);qa.registerLanguage("javascript",h1);function R({language:t="javascript",name:e,children:r}){const l=u.useRef(null),[s,i]=u.useState(!1),[o,a]=u.useState(""),c=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":z0,"../../../packages/Alert/_example/AlertCenter.tsx":$0,"../../../packages/Alert/_example/AlertClose.tsx":H0,"../../../packages/Alert/_example/AlertDescription.tsx":U0,"../../../packages/Alert/_example/AlertEffect.tsx":W0,"../../../packages/Alert/_example/AlertIconDescription.tsx":V0,"../../../packages/Alert/_example/AlertShowIcon.tsx":X0,"../../../packages/Avatar/_example/AvatarBasic.tsx":G0,"../../../packages/Avatar/_example/AvatarError.tsx":Q0,"../../../packages/Avatar/_example/AvatarFit.tsx":K0,"../../../packages/Avatar/_example/AvatarType.tsx":Y0,"../../../packages/Badge/_example/BadgeBasic.tsx":Z0,"../../../packages/Badge/_example/BadgeIsDot.tsx":J0,"../../../packages/Badge/_example/BadgeMax.tsx":q0,"../../../packages/Badge/_example/BadgeValue.tsx":ej,"../../../packages/Button/_example/ButtonBasic.tsx":tj,"../../../packages/Button/_example/ButtonDisabled.tsx":nj,"../../../packages/Button/_example/ButtonLink.tsx":rj,"../../../packages/Button/_example/ButtonText.tsx":lj,"../../../packages/Collapse/_example/CollapseBasic.tsx":sj,"../../../packages/Container/_example/ContainerBasic.tsx":ij,"../../../packages/Container/_example/ContainerBasic1.tsx":oj,"../../../packages/Container/_example/ContainerBasic2.tsx":aj,"../../../packages/Container/_example/ContainerBasic3.tsx":cj,"../../../packages/Container/_example/ContainerBasic4.tsx":dj,"../../../packages/Container/_example/ContainerBasic5.tsx":uj,"../../../packages/Container/_example/ContainerBasic6.tsx":hj,"../../../packages/Dialog/_example/DialogBasic.tsx":fj,"../../../packages/Dialog/_example/DialogContent.tsx":pj,"../../../packages/Dialog/_example/DialogHeader.tsx":mj,"../../../packages/Divider/_example/DividerBasic.tsx":xj,"../../../packages/Divider/_example/DividerBorder.tsx":gj,"../../../packages/Divider/_example/DividerContent.tsx":jj,"../../../packages/Divider/_example/DividerDirection.tsx":vj,"../../../packages/Drawer/_example/DrawerBasic.tsx":yj,"../../../packages/Drawer/_example/DrawerContent.tsx":wj,"../../../packages/Drawer/_example/DrawerHeader.tsx":Cj,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":_j,"../../../packages/Icon/_example/IconBasic.tsx":bj,"../../../packages/Layout/_example/LayoutBasic.tsx":Nj,"../../../packages/Layout/_example/LayoutBootstrap.tsx":kj,"../../../packages/Layout/_example/LayoutGutter.tsx":Sj,"../../../packages/Layout/_example/LayoutJustify.tsx":Tj,"../../../packages/Layout/_example/LayoutMix.tsx":Ej,"../../../packages/Layout/_example/LayoutOffset.tsx":Bj,"../../../packages/Link/_example/LinkBasic.tsx":Rj,"../../../packages/Link/_example/LinkDisabled.tsx":Lj,"../../../packages/Link/_example/LinkIcon.tsx":Dj,"../../../packages/Link/_example/LinkUnderline.tsx":Pj,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":Aj,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":Mj,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":Ij,"../../../packages/Popover/_example/PopoverBasic.tsx":Fj,"../../../packages/Progress/_example/ProgressBasic.tsx":Oj,"../../../packages/Progress/_example/ProgressTextInside.tsx":zj,"../../../packages/Rate/_example/RateBasic.tsx":$j,"../../../packages/Result/_example/ResultBasic.tsx":Hj,"../../../packages/Result/_example/ResultIcon.tsx":Uj,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":Wj,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Vj,"../../../packages/Switch/_example/SwitchBasic.tsx":Xj,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":Gj,"../../../packages/Switch/_example/SwitchDisabled.tsx":Qj,"../../../packages/Switch/_example/SwitchIcon.tsx":Kj,"../../../packages/Switch/_example/SwitchLoading.tsx":Yj,"../../../packages/Switch/_example/SwitchSize.tsx":Zj,"../../../packages/Switch/_example/SwitchText.tsx":Jj,"../../../packages/Table/_example/TableBasic.tsx":qj,"../../../packages/Table/_example/TableBorder.tsx":ev,"../../../packages/Table/_example/TableStripe.tsx":tv,"../../../packages/Tag/_example/TagBasic.tsx":nv,"../../../packages/Tag/_example/TagClosable.tsx":rv,"../../../packages/Tag/_example/TagEffect.tsx":lv,"../../../packages/Tag/_example/TagRound.tsx":sv,"../../../packages/Tag/_example/TagSize.tsx":iv,"../../../packages/Text/_example/TextBasic.tsx":ov,"../../../packages/Text/_example/TextSize.tsx":av,"../../../packages/Text/_example/TextTruncated.tsx":cv,"../../../packages/Tooltip/_example/TooltipBasic.tsx":dv,"../../../packages/Tooltip/_example/TooltipContent.tsx":uv,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":hv,"../../../packages/Tooltip/_example/TooltipEffect.tsx":fv});let d={display:s?"":"none"};u.useEffect(()=>{l.current&&(Object.keys(c).forEach(f=>{f.indexOf(e)!==-1&&a(c[f])}),setTimeout(()=>{qa.highlightElement(l.current)},0))},[e]);function h(){i(!s)}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"code-block",children:[n.jsx("div",{className:"code-block-component",children:r}),n.jsx("div",{className:"op-btns",children:n.jsx("button",{onClick:h,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:n.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:n.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),n.jsx("div",{className:"code-block-wrapper",style:d,children:n.jsx("div",{className:"code-block-pre language-react",children:n.jsx("pre",{children:n.jsx("code",{id:t,ref:l,className:t,children:o})})})})]})})}function Ep(t){var e,r,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=Ep(t[e]))&&(l&&(l+=" "),l+=r);else for(e in t)t[e]&&(l&&(l+=" "),l+=e);return l}function M(){for(var t,e,r=0,l="";r<arguments.length;)(t=arguments[r++])&&(e=Ep(t))&&(l&&(l+=" "),l+=e);return l}const f1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),u.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),p1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(f1,{})})},di=u.forwardRef(p1);di.displayName="Edit";const m1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),x1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(m1,{})})},ec=u.forwardRef(x1);ec.displayName="Search";const g1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),j1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(g1,{})})},gl=u.forwardRef(j1);gl.displayName="Check";const v1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),u.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),y1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(v1,{})})},tc=u.forwardRef(y1);tc.displayName="Message";const w1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),C1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(w1,{})})},nc=u.forwardRef(C1);nc.displayName="Star";const _1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),b1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(_1,{})})},rc=u.forwardRef(b1);rc.displayName="Delete";const N1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),k1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(N1,{})})},ui=u.forwardRef(k1);ui.displayName="View";const S1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),T1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(S1,{})})},lc=u.forwardRef(T1);lc.displayName="StarFilled";const E1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),B1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(E1,{})})},cn=u.forwardRef(B1);cn.displayName="Close";const R1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),L1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(R1,{})})},sc=u.forwardRef(L1);sc.displayName="Loading";const D1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),u.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),P1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(D1,{})})},ic=u.forwardRef(P1);ic.displayName="Hide";const A1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),M1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(A1,{})})},Tl=u.forwardRef(M1);Tl.displayName="InfoFilled";const I1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),F1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(I1,{})})},hi=u.forwardRef(F1);hi.displayName="WarningFilled";const O1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),z1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx(O1,{})})},_r=u.forwardRef(z1);_r.displayName="CircleCloseFilled";const $1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),H1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:s,children:n.jsx($1,{})})},oc=u.forwardRef(H1);oc.displayName="CircleCheckFilled";const U1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),W1=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),children:n.jsx(U1,{})})},ac=u.forwardRef(W1);ac.displayName="ArrowRight";const V1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),X1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),onClick:s,children:n.jsx(V1,{})})},Bp=u.forwardRef(X1);Bp.displayName="UserFilled";const G1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),u.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),Q1=(t,e)=>{const{style:r,className:l,onClick:s}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),onClick:s,children:n.jsx(G1,{})})},cc=u.forwardRef(Q1);cc.displayName="CircleCheck";const K1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),Y1=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),children:n.jsx(K1,{})})},Rp=u.forwardRef(Y1);Rp.displayName="QuestionFilled";const Z1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"})),J1=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),children:n.jsx(Z1,{})})},dc=u.forwardRef(J1);dc.displayName="Share";const q1=(t,e)=>{const{className:r,style:l,children:s,type:i,plain:o=!1,round:a=!1,circle:c=!1,disabled:d=!1,link:h=!1,text:f=!1,bg:x=!1,icon:g,...v}=t,y=g?n.jsx(n.Fragment,{children:g}):n.jsx(n.Fragment,{});return n.jsxs("button",{ref:e,style:l,disabled:d,...v,className:M(r,"el-button",i?`el-button--${i}`:"",o?"is-plain":"",a?"is-round":"",c?"is-circle":"",d?"is-disabled":"",h?"is-link":"",f?"is-text":"",x?"is-has-bg":""),children:[y,s]})},N=u.forwardRef(q1);N.displayName="Button";const ey=(t,e)=>{const{style:r,className:l,children:s,direction:i}=t,o=()=>i==="vertical"?!0:i==="horizontal"?!1:s?s.some(a=>{const c=a.props.children;return c==="Header"||c==="Footer"}):!1;return n.jsx("section",{ref:e,style:r,className:M(l,"el-container",o()?"is-vertical":""),children:s})},qe=u.forwardRef(ey);qe.displayName="Container";const ty=(t,e)=>{const{style:r,className:l,children:s,height:i}=t,o={...r,"--el-header-height":i};return n.jsx("header",{ref:e,style:o,className:M(l,"el-header"),children:s})},On=u.forwardRef(ty);On.displayName="Head";const ny=(t,e)=>{const{style:r,className:l,children:s}=t;return n.jsx("main",{ref:e,style:r,className:M(l,"el-main"),children:s})},xn=u.forwardRef(ny);xn.displayName="Main";const ry=(t,e)=>{const{style:r,className:l,children:s,height:i}=t,o={...r,"--el-footer-height":i};return n.jsx("footer",{ref:e,style:o,className:M(l,"el-footer"),children:s})},fi=u.forwardRef(ry);fi.displayName="Footer";const ly=(t,e)=>{const{style:r,className:l,children:s,width:i=200}=t,o={...r,"--el-aside-width":i};return n.jsx("aside",{ref:e,style:o,className:M(l,"el-aside"),children:s})},br=u.forwardRef(ly);br.displayName="Aside";const Lp=u.createContext({}),sy=(t,e)=>{const{style:r,className:l,children:s,gutter:i=0,justify:o}=t,a={marginLeft:`-${i/2}px`,marginRight:`-${i/2}px`,...r},c=u.useMemo(()=>({gutter:i}),[i]);return n.jsx(Lp.Provider,{value:c,children:n.jsx("div",{ref:e,style:a,className:M(l,"el-row",o?`is-justify-${o}`:""),children:s})})},se=u.forwardRef(sy);se.displayName="Row";const iy=(t,e)=>{const{style:r,className:l,children:s,span:i=24,offset:o,xs:a,sm:c,md:d,lg:h,xl:f}=t,{gutter:x}=u.useContext(Lp),g={paddingLeft:`${x/2}px`,paddingRight:`${x/2}px`,...r};return n.jsx("div",{ref:e,style:g,className:M(l,"el-col",i?`el-col-${i}`:"",x?"is-guttered":"",o?`el-col-offset-${o}`:"",a?`el-col-xs-${a}`:"",c?`el-col-sm-${c}`:"",d?`el-col-md-${d}`:"",h?`el-col-lg-${h}`:"",f?`el-col-xl-${f}`:""),children:s})},I=u.forwardRef(iy);I.displayName="Col";const oy=(t,e)=>{const{style:r,className:l,children:s,type:i,href:o,target:a,disabled:c=!1,underline:d=!0,icon:h}=t,f=h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{});return n.jsxs("a",{ref:e,style:r,className:M(l,"el-link",i?`el-link--${i}`:"el-link--default",c?"is-disabled":"",d?"is-underline":""),href:c||!o?void 0:o,target:a||void 0,children:[f,n.jsx("span",{className:"el-link__inner",children:s})]})},Ee=u.forwardRef(oy);Ee.displayName="Link";const ay=(t,e)=>{const{style:r,className:l,children:s,type:i,size:o,truncated:a=!1,lineClamp:c}=t,d={WebkitLineClamp:c,...r};return n.jsx("span",{ref:e,style:d,className:M(l,"el-text",i?`el-text--${i}`:"",o?`el-text--${o}`:"",a?"is-truncated":"",c?"is-line-clamp":""),children:s})},Ye=u.forwardRef(ay);Ye.displayName="Text";const cy=(t,e)=>{const{style:r,className:l,children:s,contentPosition:i="center",borderStyle:o="solid",direction:a="horizontal"}=t,c={"--el-border-style":o,...r},d=s?n.jsx(n.Fragment,{children:n.jsx("div",{className:M("el-divider__text",`is-${i}`),children:s})}):n.jsx(n.Fragment,{});return n.jsx("div",{ref:e,style:c,className:M(l,"el-divider",`el-divider--${a}`),children:d})},Tt=u.forwardRef(cy);Tt.displayName="Divider";const dy=(t,e)=>{const{style:r,className:l,defaultChecked:s=!1,size:i,inactiveText:o,activeText:a,inlinePrompt:c=!1,width:d,activeIcon:h,inactiveIcon:f,disabled:x=!1,loading:g=!1,beforeChange:v,activeActionIcon:y,inactiveActionIcon:b}=t,[m,p]=u.useState(s);function j(){if(x||g)return;if(!v){w();return}const G=v();G instanceof Promise&&G.then(te=>{te&&w()})}function w(){p(!m)}function _(){return f?n.jsx(n.Fragment,{children:f}):n.jsx(n.Fragment,{children:n.jsx("span",{children:o})})}function S(){return(o||f)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:M("el-switch__label el-switch__label--left",m?"":"is-active"),children:n.jsx(_,{})})}):n.jsx(n.Fragment,{})}function T(){return h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{children:n.jsx("span",{children:h})})}function L(){return(a||h)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:M("el-switch__label el-switch__label--right",m?"is-active":""),children:n.jsx(T,{})})}):n.jsx(n.Fragment,{})}function z(){return c&&(h||f)?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:m?h:f})}):c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:n.jsx("span",{className:"is-text",children:m?a:o})})}):n.jsx(n.Fragment,{})}function F(){return g?n.jsx(n.Fragment,{children:n.jsx(sc,{className:"is-loading"})}):y&&m?n.jsx(n.Fragment,{children:y}):b&&!m?n.jsx(n.Fragment,{children:b}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:M(l,"el-switch",m?"is-checked":"",i?`el-switch--${i}`:"",{"is-disabled":x||g}),onClick:j,children:[n.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:x||g}),n.jsx(S,{}),n.jsxs("span",{className:"el-switch__core",style:{width:`${d}px`},children:[n.jsx(z,{}),n.jsx("div",{className:"el-switch__action",children:n.jsx(F,{})})]}),n.jsx(L,{})]})},xe=u.forwardRef(dy);xe.displayName="Switch";const uy=(t,e)=>{const{style:r,className:l,type:s="info",title:i,effect:o="light",closable:a=!0,closeText:c,close:d,showIcon:h=!1,center:f=!1,description:x}=t,[g,v]=u.useState(!0);function y(){if(!h)return n.jsx(n.Fragment,{});let w=n.jsx(n.Fragment,{});switch(s){case"success":w=n.jsx(n.Fragment,{children:n.jsx(oc,{className:M("el-alert__icon",{"is-big":x})})});break;case"info":w=n.jsx(n.Fragment,{children:n.jsx(Tl,{className:M("el-alert__icon",{"is-big":x})})});break;case"warning":w=n.jsx(n.Fragment,{children:n.jsx(hi,{className:M("el-alert__icon",{"is-big":x})})});break;case"error":w=n.jsx(n.Fragment,{children:n.jsx(_r,{className:M("el-alert__icon",{"is-big":x})})});break}return w}function b(){return x?n.jsx(n.Fragment,{children:n.jsx("p",{className:"el-alert__description",children:x})}):n.jsx(n.Fragment,{})}function m(){d&&d(),v(!1)}const p={display:g?"":"none",...r};function j(){return a?c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-alert__close-btn is-customed",onClick:m,children:c})}):n.jsx(n.Fragment,{children:n.jsx(cn,{className:"el-alert__close-btn",onClick:m})}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:p,className:M("el-alert",`el-alert--${s}`,`is-${o}`,{"is-center":f},l),role:"alert",children:[n.jsx(y,{}),n.jsxs("div",{className:"el-alert__content",children:[n.jsx("span",{className:M("el-alert__title",{"is-bold":x}),children:i}),n.jsx(b,{}),n.jsx(j,{})]})]})},oe=u.forwardRef(uy);oe.displayName="Alert";const hy=u.createContext({}),fy=(t,e)=>{const{style:r,className:l,children:s,activeName:i}=t,o=u.useMemo(()=>({activeName:i}),[i]);return n.jsx(hy.Provider,{value:o,children:n.jsx("div",{ref:e,style:r,className:M(l,"el-collapse"),children:s})})},Dp=u.forwardRef(fy);Dp.displayName="Collapse";const py=(t,e)=>{const{style:r,className:l,children:s,title:i}=t,[o,a]=u.useState(!1);function c(){a(!o)}return n.jsxs("div",{ref:e,style:r,className:M(l,"el-collapse-item",{"is-active":o}),onClick:c,children:[n.jsxs("button",{className:M("el-collapse-item__header",{"is-active":o}),type:"button",children:[i,n.jsx(ac,{className:"el-collapse-item__arrow"})]}),n.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:o?"":"none"},children:n.jsx("div",{className:"el-collapse-item__content",children:s})})]})},Ir=u.forwardRef(py);Ir.displayName="CollapseItem";const my=(t,e)=>{const{style:r,className:l,shape:s="circle",size:i,src:o,icon:a,fit:c="cover",onError:d,children:h}=t,f={...r,"--el-avatar-size":i&&typeof i=="number"?`${i}px`:""},[x,g]=u.useState(!0);function v(){const m=new Image(0,0);o&&(m.src=o),m.onload=()=>{g(!0)},m.onerror=p=>{p instanceof Event&&(p.preventDefault(),p.stopPropagation()),g(!1),d&&d()}}function y(){return x?n.jsx("img",{src:o,style:{objectFit:c}}):n.jsx(n.Fragment,{children:h})}function b(){return a?n.jsx(n.Fragment,{children:a}):o?(v(),n.jsx(n.Fragment,{children:n.jsx(y,{})})):n.jsx(n.Fragment,{children:h})}return n.jsx("span",{ref:e,style:f,className:M(l,"el-avatar",`el-avatar--${s}`,i?`el-avatar--${i}`:"",{"el-avatar--icon":a}),children:n.jsx(b,{})})},Nt=u.forwardRef(my);Nt.displayName="Avatar";const xy=(t,e)=>{const{style:r,className:l,icon:s="info",title:i,subTitle:o,extra:a}=t;function c(){if(typeof s=="string"){let d=n.jsx(n.Fragment,{});switch(s){case"success":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return d}else return n.jsx(n.Fragment,{children:s})}return n.jsxs("div",{ref:e,style:r,className:M("el-result",l),children:[n.jsx("div",{className:"el-result__icon",children:n.jsx(c,{})}),n.jsx("div",{className:"el-result__title",children:n.jsx("p",{children:i})}),n.jsx("div",{className:"el-result__subtitle",children:n.jsx("p",{children:o})}),n.jsx("div",{className:"el-result__extra",children:a})]})},er=u.forwardRef(xy);er.displayName="Result";function dn(t){return Pp(t)?(t.nodeName||"").toLowerCase():"#document"}function Qe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $t(t){var e;return(e=(Pp(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pp(t){return t instanceof Node||t instanceof Qe(t).Node}function Be(t){return t instanceof Element||t instanceof Qe(t).Element}function tt(t){return t instanceof HTMLElement||t instanceof Qe(t).HTMLElement}function Yo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Qe(t).ShadowRoot}function El(t){const{overflow:e,overflowX:r,overflowY:l,display:s}=ut(t);return/auto|scroll|overlay|hidden|clip/.test(e+l+r)&&!["inline","contents"].includes(s)}function gy(t){return["table","td","th"].includes(dn(t))}function uc(t){const e=hc(),r=ut(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(l=>(r.willChange||"").includes(l))||["paint","layout","strict","content"].some(l=>(r.contain||"").includes(l))}function jy(t){let e=xr(t);for(;tt(e)&&!pi(e);){if(uc(e))return e;e=xr(e)}return null}function hc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pi(t){return["html","body","#document"].includes(dn(t))}function ut(t){return Qe(t).getComputedStyle(t)}function mi(t){return Be(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function xr(t){if(dn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Yo(t)&&t.host||$t(t);return Yo(e)?e.host:e}function Ap(t){const e=xr(t);return pi(e)?t.ownerDocument?t.ownerDocument.body:t.body:tt(e)&&El(e)?e:Ap(e)}function jl(t,e,r){var l;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Ap(t),i=s===((l=t.ownerDocument)==null?void 0:l.body),o=Qe(s);return i?e.concat(o,o.visualViewport||[],El(s)?s:[],o.frameElement&&r?jl(o.frameElement):[]):e.concat(s,jl(s,[],r))}function qd(t){let e=t.activeElement;for(;((r=e)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;e=e.shadowRoot.activeElement}return e}function Zo(t,e){if(!t||!e)return!1;const r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Yo(r)){let l=e;for(;l;){if(t===l)return!0;l=l.parentNode||l.host}}return!1}function Mp(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function vy(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:r,version:l}=e;return r+"/"+l}).join(" "):navigator.userAgent}function yy(t){return!eu()&&t.width===0&&t.height===0||eu()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function wy(){return/apple/i.test(navigator.vendor)}function eu(){const t=/android/i;return t.test(Mp())||t.test(vy())}function Cy(){return Mp().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Os(t,e){const r=["mouse","pen"];return e||r.push("",void 0),r.includes(t)}function Fr(t){return(t==null?void 0:t.ownerDocument)||document}function _y(t){return"composedPath"in t?t.composedPath()[0]:t.target}const by="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Ip(t){return tt(t)&&t.matches(by)}const gr=Math.min,Sn=Math.max,zs=Math.round,Zl=Math.floor,un=t=>({x:t,y:t});function Ny(t,e,r){return Sn(t,gr(e,r))}function Fp(t,e){return typeof t=="function"?t(e):t}function fc(t){return t.split("-")[0]}function pc(t){return t.split("-")[1]}function ky(t){return t==="x"?"y":"x"}function Op(t){return t==="y"?"height":"width"}function mc(t){return["top","bottom"].includes(fc(t))?"y":"x"}function zp(t){return ky(mc(t))}function Sy(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ty(t){return typeof t!="number"?Sy(t):{top:t,right:t,bottom:t,left:t}}function $p(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function tu(t,e,r){let{reference:l,floating:s}=t;const i=mc(e),o=zp(e),a=Op(o),c=fc(e),d=i==="y",h=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,x=l[a]/2-s[a]/2;let g;switch(c){case"top":g={x:h,y:l.y-s.height};break;case"bottom":g={x:h,y:l.y+l.height};break;case"right":g={x:l.x+l.width,y:f};break;case"left":g={x:l.x-s.width,y:f};break;default:g={x:l.x,y:l.y}}switch(pc(e)){case"start":g[o]-=x*(r&&d?-1:1);break;case"end":g[o]+=x*(r&&d?-1:1);break}return g}const Ey=async(t,e,r)=>{const{placement:l="bottom",strategy:s="absolute",middleware:i=[],platform:o}=r,a=i.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let d=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:f}=tu(d,l,c),x=l,g={},v=0;for(let y=0;y<a.length;y++){const{name:b,fn:m}=a[y],{x:p,y:j,data:w,reset:_}=await m({x:h,y:f,initialPlacement:l,placement:x,strategy:s,middlewareData:g,rects:d,platform:o,elements:{reference:t,floating:e}});if(h=p??h,f=j??f,g={...g,[b]:{...g[b],...w}},_&&v<=50){v++,typeof _=="object"&&(_.placement&&(x=_.placement),_.rects&&(d=_.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):_.rects),{x:h,y:f}=tu(d,x,c)),y=-1;continue}}return{x:h,y:f,placement:x,strategy:s,middlewareData:g}},By=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:l,placement:s,rects:i,platform:o,elements:a,middlewareData:c}=e,{element:d,padding:h=0}=Fp(t,e)||{};if(d==null)return{};const f=Ty(h),x={x:r,y:l},g=zp(s),v=Op(g),y=await o.getDimensions(d),b=g==="y",m=b?"top":"left",p=b?"bottom":"right",j=b?"clientHeight":"clientWidth",w=i.reference[v]+i.reference[g]-x[g]-i.floating[v],_=x[g]-i.reference[g],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let T=S?S[j]:0;(!T||!await(o.isElement==null?void 0:o.isElement(S)))&&(T=a.floating[j]||i.floating[v]);const L=w/2-_/2,z=T/2-y[v]/2-1,F=gr(f[m],z),G=gr(f[p],z),te=F,ce=T-y[v]-G,H=T/2-y[v]/2+L,U=Ny(te,H,ce),W=!c.arrow&&pc(s)!=null&&H!=U&&i.reference[v]/2-(H<te?F:G)-y[v]/2<0,k=W?H<te?H-te:H-ce:0;return{[g]:x[g]+k,data:{[g]:U,centerOffset:H-U-k,...W&&{alignmentOffset:k}},reset:W}}});async function Ry(t,e){const{placement:r,platform:l,elements:s}=t,i=await(l.isRTL==null?void 0:l.isRTL(s.floating)),o=fc(r),a=pc(r),c=mc(r)==="y",d=["left","top"].includes(o)?-1:1,h=i&&c?-1:1,f=Fp(e,t);let{mainAxis:x,crossAxis:g,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),c?{x:g*h,y:x*d}:{x:x*d,y:g*h}}const xc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,l;const{x:s,y:i,placement:o,middlewareData:a}=e,c=await Ry(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(l=a.arrow)!=null&&l.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:o}}}}};function Hp(t){const e=ut(t);let r=parseFloat(e.width)||0,l=parseFloat(e.height)||0;const s=tt(t),i=s?t.offsetWidth:r,o=s?t.offsetHeight:l,a=zs(r)!==i||zs(l)!==o;return a&&(r=i,l=o),{width:r,height:l,$:a}}function gc(t){return Be(t)?t:t.contextElement}function or(t){const e=gc(t);if(!tt(e))return un(1);const r=e.getBoundingClientRect(),{width:l,height:s,$:i}=Hp(e);let o=(i?zs(r.width):r.width)/l,a=(i?zs(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Ly=un(0);function Up(t){const e=Qe(t);return!hc()||!e.visualViewport?Ly:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Dy(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Qe(t)?!1:e}function Dn(t,e,r,l){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),i=gc(t);let o=un(1);e&&(l?Be(l)&&(o=or(l)):o=or(t));const a=Dy(i,r,l)?Up(i):un(0);let c=(s.left+a.x)/o.x,d=(s.top+a.y)/o.y,h=s.width/o.x,f=s.height/o.y;if(i){const x=Qe(i),g=l&&Be(l)?Qe(l):l;let v=x.frameElement;for(;v&&l&&g!==x;){const y=or(v),b=v.getBoundingClientRect(),m=ut(v),p=b.left+(v.clientLeft+parseFloat(m.paddingLeft))*y.x,j=b.top+(v.clientTop+parseFloat(m.paddingTop))*y.y;c*=y.x,d*=y.y,h*=y.x,f*=y.y,c+=p,d+=j,v=Qe(v).frameElement}}return $p({width:h,height:f,x:c,y:d})}function Py(t){let{rect:e,offsetParent:r,strategy:l}=t;const s=tt(r),i=$t(r);if(r===i)return e;let o={scrollLeft:0,scrollTop:0},a=un(1);const c=un(0);if((s||!s&&l!=="fixed")&&((dn(r)!=="body"||El(i))&&(o=mi(r)),tt(r))){const d=Dn(r);a=or(r),c.x=d.x+r.clientLeft,c.y=d.y+r.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+c.x,y:e.y*a.y-o.scrollTop*a.y+c.y}}function Ay(t){return Array.from(t.getClientRects())}function Wp(t){return Dn($t(t)).left+mi(t).scrollLeft}function My(t){const e=$t(t),r=mi(t),l=t.ownerDocument.body,s=Sn(e.scrollWidth,e.clientWidth,l.scrollWidth,l.clientWidth),i=Sn(e.scrollHeight,e.clientHeight,l.scrollHeight,l.clientHeight);let o=-r.scrollLeft+Wp(t);const a=-r.scrollTop;return ut(l).direction==="rtl"&&(o+=Sn(e.clientWidth,l.clientWidth)-s),{width:s,height:i,x:o,y:a}}function Iy(t,e){const r=Qe(t),l=$t(t),s=r.visualViewport;let i=l.clientWidth,o=l.clientHeight,a=0,c=0;if(s){i=s.width,o=s.height;const d=hc();(!d||d&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:i,height:o,x:a,y:c}}function Fy(t,e){const r=Dn(t,!0,e==="fixed"),l=r.top+t.clientTop,s=r.left+t.clientLeft,i=tt(t)?or(t):un(1),o=t.clientWidth*i.x,a=t.clientHeight*i.y,c=s*i.x,d=l*i.y;return{width:o,height:a,x:c,y:d}}function nu(t,e,r){let l;if(e==="viewport")l=Iy(t,r);else if(e==="document")l=My($t(t));else if(Be(e))l=Fy(e,r);else{const s=Up(t);l={...e,x:e.x-s.x,y:e.y-s.y}}return $p(l)}function Vp(t,e){const r=xr(t);return r===e||!Be(r)||pi(r)?!1:ut(r).position==="fixed"||Vp(r,e)}function Oy(t,e){const r=e.get(t);if(r)return r;let l=jl(t,[],!1).filter(a=>Be(a)&&dn(a)!=="body"),s=null;const i=ut(t).position==="fixed";let o=i?xr(t):t;for(;Be(o)&&!pi(o);){const a=ut(o),c=uc(o);!c&&a.position==="fixed"&&(s=null),(i?!c&&!s:!c&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||El(o)&&!c&&Vp(t,o))?l=l.filter(h=>h!==o):s=a,o=xr(o)}return e.set(t,l),l}function zy(t){let{element:e,boundary:r,rootBoundary:l,strategy:s}=t;const o=[...r==="clippingAncestors"?Oy(e,this._c):[].concat(r),l],a=o[0],c=o.reduce((d,h)=>{const f=nu(e,h,s);return d.top=Sn(f.top,d.top),d.right=gr(f.right,d.right),d.bottom=gr(f.bottom,d.bottom),d.left=Sn(f.left,d.left),d},nu(e,a,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function $y(t){const{width:e,height:r}=Hp(t);return{width:e,height:r}}function Hy(t,e,r){const l=tt(e),s=$t(e),i=r==="fixed",o=Dn(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const c=un(0);if(l||!l&&!i)if((dn(e)!=="body"||El(s))&&(a=mi(e)),l){const d=Dn(e,!0,i,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else s&&(c.x=Wp(s));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function ru(t,e){return!tt(t)||ut(t).position==="fixed"?null:e?e(t):t.offsetParent}function Xp(t,e){const r=Qe(t);if(!tt(t))return r;let l=ru(t,e);for(;l&&gy(l)&&ut(l).position==="static";)l=ru(l,e);return l&&(dn(l)==="html"||dn(l)==="body"&&ut(l).position==="static"&&!uc(l))?r:l||jy(t)||r}const Uy=async function(t){let{reference:e,floating:r,strategy:l}=t;const s=this.getOffsetParent||Xp,i=this.getDimensions;return{reference:Hy(e,await s(r),l),floating:{x:0,y:0,...await i(r)}}};function Wy(t){return ut(t).direction==="rtl"}const Vy={convertOffsetParentRelativeRectToViewportRelativeRect:Py,getDocumentElement:$t,getClippingRect:zy,getOffsetParent:Xp,getElementRects:Uy,getClientRects:Ay,getDimensions:$y,getScale:or,isElement:Be,isRTL:Wy};function Xy(t,e){let r=null,l;const s=$t(t);function i(){clearTimeout(l),r&&r.disconnect(),r=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),i();const{left:d,top:h,width:f,height:x}=t.getBoundingClientRect();if(a||e(),!f||!x)return;const g=Zl(h),v=Zl(s.clientWidth-(d+f)),y=Zl(s.clientHeight-(h+x)),b=Zl(d),p={rootMargin:-g+"px "+-v+"px "+-y+"px "+-b+"px",threshold:Sn(0,gr(1,c))||1};let j=!0;function w(_){const S=_[0].intersectionRatio;if(S!==c){if(!j)return o();S?o(!1,S):l=setTimeout(()=>{o(!1,1e-7)},100)}j=!1}try{r=new IntersectionObserver(w,{...p,root:s.ownerDocument})}catch{r=new IntersectionObserver(w,p)}r.observe(t)}return o(!0),i}function jc(t,e,r,l){l===void 0&&(l={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=l,d=gc(t),h=s||i?[...d?jl(d):[],...jl(e)]:[];h.forEach(m=>{s&&m.addEventListener("scroll",r,{passive:!0}),i&&m.addEventListener("resize",r)});const f=d&&a?Xy(d,r):null;let x=-1,g=null;o&&(g=new ResizeObserver(m=>{let[p]=m;p&&p.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{g&&g.observe(e)})),r()}),d&&!c&&g.observe(d),g.observe(e));let v,y=c?Dn(t):null;c&&b();function b(){const m=Dn(t);y&&(m.x!==y.x||m.y!==y.y||m.width!==y.width||m.height!==y.height)&&r(),y=m,v=requestAnimationFrame(b)}return r(),()=>{h.forEach(m=>{s&&m.removeEventListener("scroll",r),i&&m.removeEventListener("resize",r)}),f&&f(),g&&g.disconnect(),g=null,c&&cancelAnimationFrame(v)}}const lu=By,Gy=(t,e,r)=>{const l=new Map,s={platform:Vy,...r},i={...s.platform,_c:l};return Ey(t,e,{...s,platform:i})},vc=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:l,padding:s}=typeof t=="function"?t(r):t;return l&&e(l)?l.current!=null?lu({element:l.current,padding:s}).fn(r):{}:l?lu({element:l,padding:s}).fn(r):{}}}};var ds=typeof document<"u"?u.useLayoutEffect:u.useEffect;function $s(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,l,s;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(l=r;l--!==0;)if(!$s(t[l],e[l]))return!1;return!0}if(s=Object.keys(t),r=s.length,r!==Object.keys(e).length)return!1;for(l=r;l--!==0;)if(!{}.hasOwnProperty.call(e,s[l]))return!1;for(l=r;l--!==0;){const i=s[l];if(!(i==="_owner"&&t.$$typeof)&&!$s(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function Gp(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function su(t,e){const r=Gp(t);return Math.round(e*r)/r}function iu(t){const e=u.useRef(t);return ds(()=>{e.current=t}),e}function Qy(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:l=[],platform:s,elements:{reference:i,floating:o}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[h,f]=u.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[x,g]=u.useState(l);$s(x,l)||g(l);const[v,y]=u.useState(null),[b,m]=u.useState(null),p=u.useCallback(W=>{W!=S.current&&(S.current=W,y(W))},[y]),j=u.useCallback(W=>{W!==T.current&&(T.current=W,m(W))},[m]),w=i||v,_=o||b,S=u.useRef(null),T=u.useRef(null),L=u.useRef(h),z=iu(c),F=iu(s),G=u.useCallback(()=>{if(!S.current||!T.current)return;const W={placement:e,strategy:r,middleware:x};F.current&&(W.platform=F.current),Gy(S.current,T.current,W).then(k=>{const C={...k,isPositioned:!0};te.current&&!$s(L.current,C)&&(L.current=C,Sl.flushSync(()=>{f(C)}))})},[x,e,r,F]);ds(()=>{d===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,f(W=>({...W,isPositioned:!1})))},[d]);const te=u.useRef(!1);ds(()=>(te.current=!0,()=>{te.current=!1}),[]),ds(()=>{if(w&&(S.current=w),_&&(T.current=_),w&&_){if(z.current)return z.current(w,_,G);G()}},[w,_,G,z]);const ce=u.useMemo(()=>({reference:S,floating:T,setReference:p,setFloating:j}),[p,j]),H=u.useMemo(()=>({reference:w,floating:_}),[w,_]),U=u.useMemo(()=>{const W={position:r,left:0,top:0};if(!H.floating)return W;const k=su(H.floating,h.x),C=su(H.floating,h.y);return a?{...W,transform:"translate("+k+"px, "+C+"px)",...Gp(H.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:k,top:C}},[r,a,H.floating,h.x,h.y]);return u.useMemo(()=>({...h,update:G,refs:ce,elements:H,floatingStyles:U}),[h,G,ce,H,U])}const Ky=na.useInsertionEffect,Yy=Ky||(t=>t());function Zy(t){const e=u.useRef(()=>{});return Yy(()=>{e.current=t}),u.useCallback(function(){for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return e.current==null?void 0:e.current(...l)},[])}var vl=typeof document<"u"?u.useLayoutEffect:u.useEffect;let Ki=!1,Jy=0;const ou=()=>"floating-ui-"+Jy++;function qy(){const[t,e]=u.useState(()=>Ki?ou():void 0);return vl(()=>{t==null&&e(ou())},[]),u.useEffect(()=>{Ki||(Ki=!0)},[]),t}const e2=na.useId,t2=e2||qy;function n2(){const t=new Map;return{emit(e,r){var l;(l=t.get(e))==null||l.forEach(s=>s(r))},on(e,r){t.set(e,[...t.get(e)||[],r])},off(e,r){var l;t.set(e,((l=t.get(e))==null?void 0:l.filter(s=>s!==r))||[])}}}const r2=u.createContext(null),l2=u.createContext(null),Qp=()=>{var t;return((t=u.useContext(r2))==null?void 0:t.id)||null},Kp=()=>u.useContext(l2);function Yp(t){return"data-floating-ui-"+t}function au(t){const e=u.useRef(t);return vl(()=>{e.current=t}),e}const cu=Yp("safe-polygon");function Yi(t,e,r){return r&&!Os(r)?0:typeof t=="number"?t:t==null?void 0:t[e]}function Zp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,dataRef:s,events:i,elements:{domReference:o,floating:a},refs:c}=t,{enabled:d=!0,delay:h=0,handleClose:f=null,mouseOnly:x=!1,restMs:g=0,move:v=!0}=e,y=Kp(),b=Qp(),m=au(f),p=au(h),j=u.useRef(),w=u.useRef(),_=u.useRef(),S=u.useRef(),T=u.useRef(!0),L=u.useRef(!1),z=u.useRef(()=>{}),F=u.useCallback(()=>{var H;const U=(H=s.current.openEvent)==null?void 0:H.type;return(U==null?void 0:U.includes("mouse"))&&U!=="mousedown"},[s]);u.useEffect(()=>{if(!d)return;function H(U){let{open:W}=U;W||(clearTimeout(w.current),clearTimeout(S.current),T.current=!0)}return i.on("openchange",H),()=>{i.off("openchange",H)}},[d,i]),u.useEffect(()=>{if(!d||!m.current||!r)return;function H(W){F()&&l(!1,W,"hover")}const U=Fr(a).documentElement;return U.addEventListener("mouseleave",H),()=>{U.removeEventListener("mouseleave",H)}},[a,r,l,d,m,s,F]);const G=u.useCallback(function(H,U,W){U===void 0&&(U=!0),W===void 0&&(W="hover");const k=Yi(p.current,"close",j.current);k&&!_.current?(clearTimeout(w.current),w.current=setTimeout(()=>l(!1,H,W),k)):U&&(clearTimeout(w.current),l(!1,H,W))},[p,l]),te=u.useCallback(()=>{z.current(),_.current=void 0},[]),ce=u.useCallback(()=>{if(L.current){const H=Fr(c.floating.current).body;H.style.pointerEvents="",H.removeAttribute(cu),L.current=!1}},[c]);return u.useEffect(()=>{if(!d)return;function H(){return s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1}function U(C){if(clearTimeout(w.current),T.current=!1,x&&!Os(j.current)||g>0&&Yi(p.current,"open")===0)return;const B=Yi(p.current,"open",j.current);B?w.current=setTimeout(()=>{l(!0,C,"hover")},B):l(!0,C,"hover")}function W(C){if(H())return;z.current();const B=Fr(a);if(clearTimeout(S.current),m.current){r||clearTimeout(w.current),_.current=m.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),te(),G(C,!0,"safe-polygon")}});const $=_.current;B.addEventListener("mousemove",$),z.current=()=>{B.removeEventListener("mousemove",$)};return}(j.current==="touch"?!Zo(a,C.relatedTarget):!0)&&G(C)}function k(C){H()||m.current==null||m.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),te(),G(C)}})(C)}if(Be(o)){const C=o;return r&&C.addEventListener("mouseleave",k),a==null||a.addEventListener("mouseleave",k),v&&C.addEventListener("mousemove",U,{once:!0}),C.addEventListener("mouseenter",U),C.addEventListener("mouseleave",W),()=>{r&&C.removeEventListener("mouseleave",k),a==null||a.removeEventListener("mouseleave",k),v&&C.removeEventListener("mousemove",U),C.removeEventListener("mouseenter",U),C.removeEventListener("mouseleave",W)}}},[o,a,d,t,x,g,v,G,te,ce,l,r,y,p,m,s]),vl(()=>{var H;if(d&&r&&(H=m.current)!=null&&H.__options.blockPointerEvents&&F()){const W=Fr(a).body;if(W.setAttribute(cu,""),W.style.pointerEvents="none",L.current=!0,Be(o)&&a){var U;const k=o,C=y==null||(U=y.nodesRef.current.find(B=>B.id===b))==null||(U=U.context)==null?void 0:U.elements.floating;return C&&(C.style.pointerEvents=""),k.style.pointerEvents="auto",a.style.pointerEvents="auto",()=>{k.style.pointerEvents="",a.style.pointerEvents=""}}}},[d,r,b,a,o,y,m,s,F]),vl(()=>{r||(j.current=void 0,te(),ce())},[r,te,ce]),u.useEffect(()=>()=>{te(),clearTimeout(w.current),clearTimeout(S.current),ce()},[d,o,te,ce]),u.useMemo(()=>{if(!d)return{};function H(U){j.current=U.pointerType}return{reference:{onPointerDown:H,onPointerEnter:H,onMouseMove(U){r||g===0||(clearTimeout(S.current),S.current=setTimeout(()=>{T.current||l(!0,U.nativeEvent,"hover")},g))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(U){G(U.nativeEvent,!1)}}}},[d,g,r,l,G])}function du(t){return tt(t.target)&&t.target.tagName==="BUTTON"}function uu(t){return Ip(t)}function yl(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,dataRef:s,elements:{domReference:i}}=t,{enabled:o=!0,event:a="click",toggle:c=!0,ignoreMouse:d=!1,keyboardHandlers:h=!0}=e,f=u.useRef(),x=u.useRef(!1);return u.useMemo(()=>o?{reference:{onPointerDown(g){f.current=g.pointerType},onMouseDown(g){g.button===0&&(Os(f.current,!0)&&d||a!=="click"&&(r&&c&&(!s.current.openEvent||s.current.openEvent.type==="mousedown")?l(!1,g.nativeEvent,"click"):(g.preventDefault(),l(!0,g.nativeEvent,"click"))))},onClick(g){if(a==="mousedown"&&f.current){f.current=void 0;return}Os(f.current,!0)&&d||(r&&c&&(!s.current.openEvent||s.current.openEvent.type==="click")?l(!1,g.nativeEvent,"click"):l(!0,g.nativeEvent,"click"))},onKeyDown(g){f.current=void 0,!(g.defaultPrevented||!h||du(g))&&(g.key===" "&&!uu(i)&&(g.preventDefault(),x.current=!0),g.key==="Enter"&&l(!(r&&c),g.nativeEvent,"click"))},onKeyUp(g){g.defaultPrevented||!h||du(g)||uu(i)||g.key===" "&&x.current&&(x.current=!1,l(!(r&&c),g.nativeEvent,"click"))}}}:{},[o,s,a,d,h,i,c,r,l])}function yc(t){var e;t===void 0&&(t={});const{open:r=!1,onOpenChange:l,nodeId:s}=t,[i,o]=u.useState(null),a=((e=t.elements)==null?void 0:e.reference)||i,c=Qy(t),d=Kp(),h=Qp()!=null,f=Zy((_,S,T)=>{_&&(g.current.openEvent=S),v.emit("openchange",{open:_,event:S,reason:T,nested:h}),l==null||l(_,S,T)}),x=u.useRef(null),g=u.useRef({}),v=u.useState(()=>n2())[0],y=t2(),b=u.useCallback(_=>{const S=Be(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;c.refs.setReference(S)},[c.refs]),m=u.useCallback(_=>{(Be(_)||_===null)&&(x.current=_,o(_)),(Be(c.refs.reference.current)||c.refs.reference.current===null||_!==null&&!Be(_))&&c.refs.setReference(_)},[c.refs]),p=u.useMemo(()=>({...c.refs,setReference:m,setPositionReference:b,domReference:x}),[c.refs,m,b]),j=u.useMemo(()=>({...c.elements,domReference:a}),[c.elements,a]),w=u.useMemo(()=>({...c,refs:p,elements:j,dataRef:g,nodeId:s,floatingId:y,events:v,open:r,onOpenChange:f}),[c,s,y,v,r,f,p,j]);return vl(()=>{const _=d==null?void 0:d.nodesRef.current.find(S=>S.id===s);_&&(_.context=w)}),u.useMemo(()=>({...c,context:w,refs:p,elements:j}),[c,p,j,w])}function Jp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,events:s,refs:i,elements:{floating:o,domReference:a}}=t,{enabled:c=!0,visibleOnly:d=!0}=e,h=u.useRef(!1),f=u.useRef(),x=u.useRef(!0);return u.useEffect(()=>{if(!c)return;const g=Qe(a);function v(){!r&&tt(a)&&a===qd(Fr(a))&&(h.current=!0)}function y(){x.current=!0}return g.addEventListener("blur",v),g.addEventListener("keydown",y,!0),()=>{g.removeEventListener("blur",v),g.removeEventListener("keydown",y,!0)}},[o,a,r,c]),u.useEffect(()=>{if(!c)return;function g(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(h.current=!0)}return s.on("openchange",g),()=>{s.off("openchange",g)}},[s,c]),u.useEffect(()=>()=>{clearTimeout(f.current)},[]),u.useMemo(()=>c?{reference:{onPointerDown(g){yy(g.nativeEvent)||(x.current=!1)},onMouseLeave(){h.current=!1},onFocus(g){if(h.current)return;const v=_y(g.nativeEvent);if(d&&Be(v))try{if(wy()&&Cy())throw Error();if(!v.matches(":focus-visible"))return}catch{if(!x.current&&!Ip(v))return}l(!0,g.nativeEvent,"focus")},onBlur(g){h.current=!1;const v=g.relatedTarget,y=Be(v)&&v.hasAttribute(Yp("focus-guard"))&&v.getAttribute("data-type")==="outside";f.current=window.setTimeout(()=>{const b=qd(a?a.ownerDocument:document);!v&&b===a||Zo(i.floating.current,v)||Zo(a,v)||y||l(!1,g.nativeEvent,"focus")})}}}:{},[c,d,a,i,l])}const hu="active",fu="selected";function Zi(t,e,r){const l=new Map,s=r==="item";let i=t;if(s&&t){const{[hu]:o,[fu]:a,...c}=t;i=c}return{...r==="floating"&&{tabIndex:-1},...i,...e.map(o=>{const a=o?o[r]:null;return typeof a=="function"?t?a(t):null:a}).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(c=>{let[d,h]=c;if(!(s&&[hu,fu].includes(d)))if(d.indexOf("on")===0){if(l.has(d)||l.set(d,[]),typeof h=="function"){var f;(f=l.get(d))==null||f.push(h),o[d]=function(){for(var x,g=arguments.length,v=new Array(g),y=0;y<g;y++)v[y]=arguments[y];return(x=l.get(d))==null?void 0:x.map(b=>b(...v)).find(b=>b!==void 0)}}}else o[d]=h}),o),{})}}function wc(t){t===void 0&&(t=[]);const e=t,r=u.useCallback(i=>Zi(i,t,"reference"),e),l=u.useCallback(i=>Zi(i,t,"floating"),e),s=u.useCallback(i=>Zi(i,t,"item"),t.map(i=>i==null?void 0:i.item));return u.useMemo(()=>({getReferenceProps:r,getFloatingProps:l,getItemProps:s}),[r,l,s])}const s2=(t,e)=>{const{style:r,className:l,placement:s,content:i,effect:o,getFloatingProps:a,children:c}=t;function d(){return typeof i=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:i})}):n.jsx(n.Fragment,{children:i})}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:r,className:M("el-popper",`is-${o}`,l),"data-popper-placement":s,...a(),children:[n.jsx(d,{}),c]})})},qp=u.forwardRef(s2);qp.displayName="TooltipPopper";const i2=t=>{var T,L;const{style:e,className:r,effect:l="dark",placement:s="bottom",trigger:i="hover",content:o,showAfter:a=0,hideAfter:c=200,disabled:d=!0,children:h}=t,[f,x]=u.useState(!1),g=u.useRef(null),{refs:v,floatingStyles:y,context:b,middlewareData:m}=yc({placement:s,middleware:[xc(12),vc({element:g})],open:f&&d,whileElementsMounted:jc,onOpenChange:x});let p={};switch(i){case"hover":p=Zp(b,{delay:{open:a,close:c}});break;case"click":p=yl(b);break;case"focus":p=Jp(b);break;case"contextmenu":p=yl(b,{event:"mousedown"});break}const{getReferenceProps:j,getFloatingProps:w}=wc([p]),_=u.cloneElement(u.Children.only(h),{ref:v.setReference,...j()}),S={...e,...y};return n.jsxs(n.Fragment,{children:[f&&Sl.createPortal(n.jsx(qp,{ref:v.setFloating,style:S,className:M(r),effect:l,placement:s,content:o,getFloatingProps:w,children:n.jsx("span",{ref:g,className:"el-popper__arrow",style:{position:"absolute",left:(T=m.arrow)==null?void 0:T.x,top:(L=m.arrow)==null?void 0:L.y}})}),document.body),_]})},_e=u.forwardRef(i2);_e.displayName="Tooltip";const o2=(t,e)=>{const{style:r,className:l,placement:s,title:i,content:o,getFloatingProps:a,children:c}=t;function d(){return typeof o=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:o})}):n.jsx(n.Fragment,{children:o})}const h={width:"200px",...r};return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:h,className:M("el-popper is-light el-popover el-popover--plain",l),"data-popper-placement":s,...a(),children:[n.jsx("div",{className:"el-popover__title",role:"title",children:i}),n.jsx(d,{}),c]})})},em=u.forwardRef(o2);em.displayName="PopoverPopper";const a2=t=>{var S,T;const{style:e,className:r,placement:l="bottom",trigger:s="hover",title:i,content:o,showAfter:a=0,hideAfter:c=200,children:d}=t,[h,f]=u.useState(!1),x=u.useRef(null),{refs:g,floatingStyles:v,context:y,middlewareData:b}=yc({placement:l,middleware:[xc(12),vc({element:x})],open:h,whileElementsMounted:jc,onOpenChange:f});let m={};switch(s){case"hover":m=Zp(y,{delay:{open:a,close:c}});break;case"click":m=yl(y);break;case"focus":m=Jp(y);break;case"contextmenu":m=yl(y,{event:"mousedown"});break}const{getReferenceProps:p,getFloatingProps:j}=wc([m]),w=u.cloneElement(u.Children.only(d),{ref:g.setReference,...p()}),_={...e,...v};return n.jsxs(n.Fragment,{children:[h&&Sl.createPortal(n.jsx(em,{ref:g.setFloating,style:_,className:M(r),placement:l,title:i,content:o,getFloatingProps:j,children:n.jsx("span",{ref:x,className:"el-popper__arrow",style:{position:"absolute",left:(S=b.arrow)==null?void 0:S.x,top:(T=b.arrow)==null?void 0:T.y}})}),document.body),w]})},Or=u.forwardRef(a2);Or.displayName="Popover";const c2=(t,e)=>{const{style:r,className:l,percentage:s=0,format:i,status:o,textInside:a=!1,strokeWidth:c=6}=t;function d(){return a?i?n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsx("span",{children:i(s)})}):n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsxs("span",{children:[s,"%"]})}):n.jsx(n.Fragment,{})}function h(){if(!a)if(o){let f;switch(o){case"success":f=n.jsx(cc,{});break;case"warning":f=n.jsx(hi,{});break;case"exception":f=n.jsx(_r,{});break}return f}else return i?n.jsx("span",{children:i(s)}):n.jsxs("span",{children:[s,"%"]});return n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:M("el-progress el-progress--line",o?`is-${o}`:"",l),role:"progressbar",children:[n.jsx("div",{className:"el-progress-bar",children:n.jsx("div",{className:"el-progress-bar__outer",style:{height:`${c}px`},children:n.jsx("div",{className:"el-progress-bar__inner",style:{width:`${s}%`,animationDuration:"3s"},children:n.jsx(d,{})})})}),n.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:n.jsx(h,{})})]})},bt=u.forwardRef(c2);bt.displayName="Progress";const d2=(t,e)=>{const{style:r,className:l,placement:s,title:i,width:o,icon:a,iconColor:c,hideIcon:d,confirmButtonText:h,cancelButtonText:f,onConfirm:x,onCancel:g,getFloatingProps:v,children:y}=t,b={width:o?typeof o=="string"?o:`${o}px`:"150px",...r};function m(){return d?n.jsx(n.Fragment,{}):u.cloneElement(a,{className:M(a==null?void 0:a.props.className,"el-popconfirm__icon"),style:{color:c}})}function p(w){g&&(console.log(w),g(w))}function j(w){x&&x(w)}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:b,className:M("el-popper is-light el-popover",l),"data-popper-placement":s,...v(),children:[n.jsxs("div",{className:"el-popconfirm",children:[n.jsxs("div",{className:"el-popconfirm__main",children:[n.jsx(m,{}),i]}),n.jsxs("div",{className:"el-popconfirm__action",children:[n.jsx(N,{onClick:p,children:f}),n.jsx(N,{type:"primary",onClick:j,children:h})]})]}),y]})})},tm=u.forwardRef(d2);tm.displayName="PopconfirmPopper";const u2=t=>{var F,G;const{style:e,className:r,placement:l="bottom",title:s,width:i=150,icon:o=n.jsx(Rp,{}),iconColor:a="#f90",hideIcon:c=!1,confirmButtonText:d="Yes",cancelButtonText:h="No",onConfirm:f,onCancel:x,children:g}=t,[v,y]=u.useState(!1),b=u.useRef(null),{refs:m,floatingStyles:p,context:j,middlewareData:w}=yc({placement:l,middleware:[xc(12),vc({element:b})],open:v,whileElementsMounted:jc,onOpenChange:y}),_=yl(j),{getReferenceProps:S,getFloatingProps:T}=wc([_]),L=u.cloneElement(u.Children.only(g),{ref:m.setReference,...S()}),z={...e,...p};return n.jsxs(n.Fragment,{children:[v&&Sl.createPortal(n.jsx(tm,{ref:m.setFloating,style:z,className:M(r),placement:l,title:s,width:i,icon:o,iconColor:a,hideIcon:c,confirmButtonText:d,cancelButtonText:h,onConfirm:f,onCancel:x,getFloatingProps:T,children:n.jsx("span",{ref:b,className:"el-popper__arrow",style:{position:"absolute",left:(F=w.arrow)==null?void 0:F.x,top:(G=w.arrow)==null?void 0:G.y}})}),document.body),L]})},xi=u.forwardRef(u2);xi.displayName="Popconfirm";const h2=(t,e)=>{const{style:r,className:l,type:s="",closable:i=!1,size:o="",effect:a="light",round:c=!1,children:d}=t;function h(){return i?n.jsx(cn,{className:"el-tag__close"}):n.jsx(n.Fragment,{})}return n.jsxs("span",{ref:e,style:r,className:M("el-tag el-tag--light",s?`el-tag--${s}`:"",o?`el-tag--${o}`:"",a?`el-tag--${a}`:"",c?"is-round":"",l),children:[n.jsx("span",{className:"el-tag__content",children:d}),n.jsx(h,{})]})},ge=u.forwardRef(h2);ge.displayName="Tag";const f2=(t,e)=>{const{style:r,className:l,open:s=!1,width:i="50%",title:o,footer:a,onClose:c,showClose:d=!0,header:h,children:f}=t,x={zIndex:2015,...r,display:s?"":"none"};function g(){return h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-dialog__title",children:o})})}return n.jsx("div",{ref:e,style:x,className:M("el-overlay",l),children:n.jsx("div",{role:"dialog",className:"el-overlay-dialog",children:n.jsxs("div",{className:"el-dialog",style:{"--el-dialog-width":i},children:[n.jsxs("header",{className:"el-dialog__header",children:[n.jsx(g,{}),d&&n.jsx("button",{"aria-label":"Close this dialog",className:"el-dialog__headerbtn",type:"button",onClick:c,children:n.jsx(cn,{className:"el-dialog__close"})})]}),n.jsx("div",{id:"el-id-9273-97",className:"el-dialog__body",children:f}),n.jsx("footer",{className:"el-dialog__footer",children:a})]})})})},wl=u.forwardRef(f2);wl.displayName="Dialog";function p2(t,e){const r=u.useRef(e);u.useEffect(()=>{r.current=e},[e]),u.useEffect(()=>{const l=s=>{var i;(((i=t.current)==null?void 0:i.contains(s.target))??!1)||r.current&&r.current()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[t])}const m2=(t,e)=>{const{style:r,className:l,open:s=!1,direction:i="rtl",title:o,onClose:a,header:c,footer:d,withHeader:h=!0,size:f="30%",showClose:x=!0,children:g}=t,v=u.useRef(null),y={...r,display:s?"":"none"};p2(v,()=>{s&&a&&a()});function b(){return c?n.jsx(n.Fragment,{children:c}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-drawer__title",children:o})})}return n.jsx("div",{ref:e,style:y,className:M("el-overlay",l),children:n.jsxs("div",{ref:v,className:M("el-drawer open",i),role:"dialog",style:{width:["ltr","rtl"].includes(i)?f:"",height:["ttb","btt"].includes(i)?f:""},children:[n.jsx("span",{className:"el-drawer__sr-focus"}),h&&n.jsxs("header",{className:"el-drawer__header",children:[n.jsx(b,{}),x&&n.jsx("button",{className:"el-drawer__close-btn",type:"button",onClick:a,children:n.jsx(cn,{className:"el-drawer__close"})})]}),n.jsx("div",{className:"el-drawer__body",children:g}),d&&n.jsx("div",{className:"el-drawer__footer",children:d})]})})},Pn=u.forwardRef(m2);Pn.displayName="DrawerComponent";const x2=(t,e)=>{const{style:r,className:l,columns:s,data:i,stripe:o=!1,border:a=!1}=t,c={...r,width:"100%"},d=s==null?void 0:s.map(x=>n.jsx("col",{width:x.width})),h=s==null?void 0:s.map(x=>n.jsx("th",{className:"is-leaf el-table__cell",colSpan:1,rowSpan:1,children:n.jsx("div",{className:"cell",children:x.label})})),f=i==null?void 0:i.map((x,g)=>n.jsx("tr",{className:M("el-table__row",{"el-table__row--striped":g%2===1}),children:s==null?void 0:s.map(v=>n.jsx("td",{className:"el-table__cell",rowSpan:1,colSpan:1,children:n.jsx("div",{className:"cell",children:x[v.dataIndex]})}))}));return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:c,className:M("el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none",l,{"el-table--striped":o,"el-table--border":a}),children:[n.jsxs("div",{className:"el-table__inner-wrapper",children:[n.jsxs("div",{className:"hidden-columns",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("div",{className:"el-table__header-wrapper",children:n.jsxs("table",{className:"el-table__header",border:0,cellPadding:"0",cellSpacing:"0",style:{width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("thead",{className:"",children:n.jsx("tr",{className:"",children:h})})]})}),n.jsx("div",{className:"el-table__body-wrapper",children:n.jsxs("div",{className:"el-scrollbar",children:[n.jsx("div",{className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",children:n.jsx("div",{className:"el-scrollbar__view",style:{display:"inline-block",verticalAlign:"middle"},children:n.jsxs("table",{className:"el-table__body",cellSpacing:"0",cellPadding:"0",border:0,style:{tableLayout:"fixed",width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("tbody",{children:f})]})})}),n.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),n.jsx("div",{className:"el-scrollbar__bar is-vertical",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateY(0%)"}})})]})})]}),n.jsx("div",{className:"el-table__column-resize-proxy",style:{display:"none"}})]})})},gi=u.forwardRef(x2);gi.displayName="TableComponent";function g2(t,e){const r=u.useRef(e);u.useEffect(()=>{r.current=e},[e]),u.useEffect(()=>{var i,o;const l=a=>{r.current&&r.current(a,"mouseenter")},s=a=>{r.current&&r.current(a,"mouseleave")};return(i=t.current)==null||i.addEventListener("mouseenter",l),(o=t.current)==null||o.addEventListener("mouseleave",s),()=>{var a,c;(a=t.current)==null||a.removeEventListener("mouseenter",l),(c=t.current)==null||c.removeEventListener("mouseleave",s)}},[t])}const j2=t=>{const{style:e,className:r,minSize:l=20,children:s}=t,i=u.useRef(null),o=u.useRef(null),a=u.useRef(null),c=u.useRef(null),[d,h]=u.useState(!1),[f,x]=u.useState(!1),[g,v]=u.useState(0),[y,b]=u.useState("translateY(0%)");g2(i,(w,_)=>{h(_==="mouseenter")}),u.useEffect(()=>{if(i.current&&o.current&&a.current){const w=o.current.offsetHeight,_=a.current.scrollHeight,S=_>w;x(S),v(Math.max(w/_*w,l))}},[s]);function m(){if(o.current&&a.current&&c.current){const w=o.current.offsetHeight,_=o.current.scrollHeight,S=o.current.scrollTop,T=c.current.offsetHeight;b(`translateY(${S/(_-w)*((T-g)/g)*100}%)`)}}function p(w){console.log(w)}function j(w){w.stopPropagation()}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:i,style:e,className:M("el-scrollbar",r),children:[n.jsx("div",{ref:o,className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",style:{height:"400px"},onScroll:m,children:n.jsx("div",{ref:a,className:"el-scrollbar__view",children:s})}),n.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),n.jsx("div",{ref:c,className:"el-scrollbar__bar is-vertical",style:{display:f&&d?"":"none"},onClick:p,children:n.jsx("div",{onClick:j,className:"el-scrollbar__thumb",style:{height:`${g}px`,transform:y}})})]})})},nm=u.forwardRef(j2);nm.displayName="ScrollbarComponent";const v2=(t,e)=>{const{style:r,className:l,value:s="",type:i="danger",max:o=99,isDot:a=!1,children:c}=t;function d(){return typeof s=="number"&&s>o?`${o}+`:s}return n.jsxs("div",{ref:e,style:r,className:M("el-badge",l),children:[c,n.jsx("sup",{className:M("el-badge__content is-fixed",`el-badge__content--${i}`,{"is-dot":a}),children:d()})]})},xt=u.forwardRef(v2);xt.displayName="Badge";const y2=(t,e)=>{const{style:r,className:l}=t;return n.jsxs("div",{ref:e,style:r,className:M(l,"el-rate"),role:"slider",children:[n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})})]})},rm=u.forwardRef(y2);rm.displayName="Rate";function w2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(N,{children:"Default"}),n.jsx(N,{type:"primary",children:"Primary"}),n.jsx(N,{type:"success",children:"Success"}),n.jsx(N,{type:"info",children:"Info"}),n.jsx(N,{type:"warning",children:"Warning"}),n.jsx(N,{type:"danger",children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(N,{plain:!0,children:"Plain"}),n.jsx(N,{type:"primary",plain:!0,children:"Primary"}),n.jsx(N,{type:"success",plain:!0,children:"Success"}),n.jsx(N,{type:"info",plain:!0,children:"Info"}),n.jsx(N,{type:"warning",plain:!0,children:"Warning"}),n.jsx(N,{type:"danger",plain:!0,children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(N,{round:!0,children:"Round"}),n.jsx(N,{type:"primary",round:!0,children:"Primary"}),n.jsx(N,{type:"success",round:!0,children:"Success"}),n.jsx(N,{type:"info",round:!0,children:"Info"}),n.jsx(N,{type:"warning",round:!0,children:"Warning"}),n.jsx(N,{type:"danger",round:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(N,{icon:n.jsx(ec,{}),circle:!0}),n.jsx(N,{type:"primary",icon:n.jsx(di,{}),circle:!0}),n.jsx(N,{type:"success",icon:n.jsx(gl,{}),circle:!0}),n.jsx(N,{type:"info",icon:n.jsx(tc,{}),circle:!0}),n.jsx(N,{type:"warning",icon:n.jsx(nc,{}),circle:!0}),n.jsx(N,{type:"danger",icon:n.jsx(rc,{}),circle:!0})]})]})}function C2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(N,{disabled:!0,children:"Default"}),n.jsx(N,{type:"primary",disabled:!0,children:"Primary"}),n.jsx(N,{type:"success",disabled:!0,children:"Success"}),n.jsx(N,{type:"info",disabled:!0,children:"Info"}),n.jsx(N,{type:"warning",disabled:!0,children:"Warning"}),n.jsx(N,{type:"danger",disabled:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(N,{plain:!0,disabled:!0,children:"Plain"}),n.jsx(N,{type:"primary",plain:!0,disabled:!0,children:"Primary"}),n.jsx(N,{type:"success",plain:!0,disabled:!0,children:"Success"}),n.jsx(N,{type:"info",plain:!0,disabled:!0,children:"Info"}),n.jsx(N,{type:"warning",plain:!0,disabled:!0,children:"Warning"}),n.jsx(N,{type:"danger",plain:!0,disabled:!0,children:"Danger"})]})]})}function _2(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic link button"}),n.jsx(N,{link:!0,children:"Default"}),n.jsx(N,{type:"primary",link:!0,children:"Primary"}),n.jsx(N,{type:"success",link:!0,children:"Success"}),n.jsx(N,{type:"info",link:!0,children:"Info"}),n.jsx(N,{type:"warning",link:!0,children:"Warning"}),n.jsx(N,{type:"danger",link:!0,children:"Danger"}),n.jsx("p",{children:"Disabled link button"}),n.jsx(N,{link:!0,disabled:!0,children:"Default"}),n.jsx(N,{type:"primary",link:!0,disabled:!0,children:"Primary"}),n.jsx(N,{type:"success",link:!0,disabled:!0,children:"Success"}),n.jsx(N,{type:"info",link:!0,disabled:!0,children:"Info"}),n.jsx(N,{type:"warning",link:!0,disabled:!0,children:"Warning"}),n.jsx(N,{type:"danger",link:!0,disabled:!0,children:"Danger"})]})}function b2(){const t=[{type:"",text:"plain"},{type:"primary",text:"primary"},{type:"success",text:"success"},{type:"info",text:"info"},{type:"warning",text:"warning"},{type:"danger",text:"danger"}],e=t.map((s,i)=>n.jsx(N,{type:s.type,text:!0,children:s.text},i)),r=t.map((s,i)=>n.jsx(N,{type:s.type,text:!0,bg:!0,children:s.text},i)),l=t.map((s,i)=>n.jsx(N,{type:s.type,text:!0,disabled:!0,children:s.text},i));return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic text button"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:e}),n.jsx("p",{children:"Background color always on"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:r}),n.jsx("p",{children:"Disabled text button"}),n.jsx("div",{className:"flex justify-space-between flex-wrap gap-4",children:l})]})}function pu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Button 按钮"}),`
`,`
`,n.jsx(e.p,{children:"常用的操作按钮。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"type"}),"、",n.jsx(e.code,{children:"plain"}),"、",n.jsx(e.code,{children:"round"})," 和 ",n.jsx(e.code,{children:"circle"})," 来定义按钮的样式。"]}),`
`,n.jsx(R,{name:"ButtonBasic",children:n.jsx(w2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.code,{children:"disabled"})," 属性来定义按钮是否被禁用。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"disabled"})," 属性来控制按钮是否为禁用状态。 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"})," 类型的值。"]}),`
`,n.jsx(R,{name:"ButtonDisabled",children:n.jsx(C2,{})}),`
`,n.jsx(e.h2,{children:"链接按钮"}),`
`,n.jsx(R,{name:"ButtonLink",children:n.jsx(_2,{})}),`
`,n.jsx(e.h2,{children:"文字按钮"}),`
`,n.jsx(e.p,{children:"没有边框和背景色的按钮。"}),`
`,n.jsx(R,{name:"ButtonText",children:n.jsx(b2,{})}),`
`,n.jsx(e.h2,{children:"Button API"}),`
`,n.jsx(e.h3,{children:"Button Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' 'success' 'warning' 'danger' 'info' 'text'(delete)"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"plain"}),n.jsx(e.td,{children:"是否为朴素按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"text"}),n.jsx(e.td,{children:"是否为文字按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"bg"}),n.jsx(e.td,{children:"是否显示文字按钮背景颜色"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:"是否为链接按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"是否为圆角按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"circle"}),n.jsx(e.td,{children:"是否为圆形按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"按钮是否为禁用状态"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function N2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pu,{...t})}):pu(t)}function k2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(On,{children:"Header"}),n.jsx(xn,{children:"Main"})]})})})}function S2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(On,{children:"Header"}),n.jsx(xn,{children:"Main"}),n.jsx(fi,{children:"Footer"})]})})})}function T2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsx(xn,{children:"Main"})]})})})}function E2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(On,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsx(xn,{children:"Main"})]})]})})})}function B2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(On,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(xn,{children:"Main"}),n.jsx(fi,{children:"Footer"})]})]})]})})})}function R2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(On,{children:"Header"}),n.jsx(xn,{children:"Main"})]})]})})})}function L2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(On,{children:"Header"}),n.jsx(xn,{children:"Main"}),n.jsx(fi,{children:"Footer"})]})]})})})}function mu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(R,{name:"ContainerBasic",children:n.jsx(k2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic1",children:n.jsx(S2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic2",children:n.jsx(T2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic3",children:n.jsx(E2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic4",children:n.jsx(B2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic5",children:n.jsx(R2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic6",children:n.jsx(L2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]})]})}function D2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(mu,{...t})}):mu(t)}function P2(){return n.jsxs(n.Fragment,{children:[n.jsx(di,{style:{fontSize:"20px"}}),n.jsx(ec,{style:{fontSize:"20px"}}),n.jsx(gl,{style:{fontSize:"20px"}}),n.jsx(tc,{style:{fontSize:"20px"}}),n.jsx(nc,{style:{fontSize:"20px"}}),n.jsx(rc,{style:{fontSize:"20px"}}),n.jsx(ui,{style:{fontSize:"20px"}}),n.jsx(lc,{style:{fontSize:"20px"}}),n.jsx(sc,{style:{fontSize:"20px"}}),n.jsx(ic,{style:{fontSize:"20px"}}),n.jsx(Tl,{style:{fontSize:"20px"}}),n.jsx(hi,{style:{fontSize:"20px"}}),n.jsx(_r,{style:{fontSize:"20px"}}),n.jsx(oc,{style:{fontSize:"20px"}}),n.jsx(ac,{style:{fontSize:"20px"}}),n.jsx(cc,{style:{fontSize:"20px"}}),n.jsx(cn,{style:{fontSize:"20px"}}),n.jsx(dc,{style:{fontSize:"20px"}})]})}function xu(t){const e={h1:"h1",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Icon"}),`
`,`
`,n.jsx(R,{name:"IconBasic",children:n.jsx(P2,{})})]})}function A2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xu,{...t})}):xu(t)}function M2(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{children:n.jsx(I,{span:24,children:n.jsx("div",{className:"grid-content ep-bg-purple-dark"})})}),n.jsxs(se,{children:[n.jsx(I,{span:12,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:12,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(se,{children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]})]}),n.jsxs(se,{children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(se,{children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]})]})}function I2(){return n.jsx(n.Fragment,{children:n.jsxs(se,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})})}function F2(){return n.jsxs(n.Fragment,{children:[n.jsxs(se,{gutter:20,children:[n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{gutter:20,children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{gutter:20,children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function O2(){return n.jsxs(n.Fragment,{children:[n.jsxs(se,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{gutter:20,children:[n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsx(se,{gutter:20,children:n.jsx(I,{span:12,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})})]})}function z2(){return n.jsxs(n.Fragment,{children:[n.jsxs(se,{className:"row-bg",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{className:"row-bg",justify:"center",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{className:"row-bg",justify:"end",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{className:"row-bg",justify:"space-between",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{className:"row-bg",justify:"space-around",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(se,{className:"row-bg",justify:"space-evenly",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function $2(){return n.jsx(n.Fragment,{children:n.jsxs(se,{gutter:10,children:[n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})})]})})}function gu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Layout 布局"}),`
`,`
`,n.jsx(e.p,{children:"通过基础的 24 分栏，迅速简便地创建布局。"}),`
`,n.jsx(e.h2,{children:"基础布局"}),`
`,n.jsx(e.p,{children:"使用列创建基础网格布局。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"Row"})," 和 ",n.jsx(e.code,{children:"Col"})," 组件，并通过 col 组件的 ",n.jsx(e.code,{children:"Span"})," 属性我们就可以自由地组合布局。"]}),`
`,n.jsx(R,{name:"LayoutBasic",children:n.jsx(M2,{})}),`
`,n.jsx(e.h2,{children:"分栏间隔"}),`
`,n.jsx(e.p,{children:"支持列间距。"}),`
`,n.jsx(e.p,{children:"行提供 gutter 属性来指定列之间的间距，其默认值为0。"}),`
`,n.jsx(R,{name:"LayoutGutter",children:n.jsx(I2,{})}),`
`,n.jsx(e.h2,{children:"混合布局"}),`
`,n.jsx(e.p,{children:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}),`
`,n.jsx(R,{name:"LayoutMix",children:n.jsx(F2,{})}),`
`,n.jsx(e.h2,{children:"列偏移"}),`
`,n.jsx(e.p,{children:"您可以指定列偏移量。"}),`
`,n.jsxs(e.p,{children:["通过制定 col 组件的 ",n.jsx(e.code,{children:"offset"})," 属性可以指定分栏偏移的栏数。"]}),`
`,n.jsx(R,{name:"LayoutOffset",children:n.jsx(O2,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"默认使用 flex 布局来对分栏进行灵活的对齐。"}),`
`,n.jsxs(e.p,{children:["您可以通过 ",n.jsx(e.code,{children:"justify"})," 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。"]}),`
`,n.jsx(R,{name:"LayoutJustify",children:n.jsx(z2,{})}),`
`,n.jsx(e.h2,{children:"响应式布局"}),`
`,n.jsx(e.p,{children:"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"}),`
`,n.jsx(R,{name:"LayoutBootstrap",children:n.jsx($2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"span"}),n.jsx(e.td,{children:"栅格占据的列数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"offset"}),n.jsx(e.td,{children:"栅格左侧的间隔格数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xs"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"sm"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"md"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥992px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lg"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1200px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xl"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1920px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function H2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gu,{...t})}):gu(t)}function U2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(Ee,{type:"primary",children:"primary"}),n.jsx(Ee,{type:"success",children:"success"}),n.jsx(Ee,{type:"warning",children:"warning"}),n.jsx(Ee,{type:"danger",children:"danger"}),n.jsx(Ee,{type:"info",children:"info"})]})})}function W2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{disabled:!0,children:"default"}),n.jsx(Ee,{type:"primary",disabled:!0,children:"primary"}),n.jsx(Ee,{type:"success",disabled:!0,children:"success"}),n.jsx(Ee,{type:"warning",disabled:!0,children:"warning"}),n.jsx(Ee,{type:"danger",disabled:!0,children:"danger"}),n.jsx(Ee,{type:"info",disabled:!0,children:"info"})]})})}function V2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{underline:!1,children:"Without Underline"}),n.jsx(Ee,{children:"With Underline"})]})})}function X2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ee,{icon:n.jsx(di,{}),children:"Edit"}),n.jsxs(Ee,{children:["Check",n.jsx(ui,{className:"el-icon--right"})]})]})})}function ju(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(R,{name:"LinkBasic",children:n.jsx(U2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(R,{name:"LinkDisabled",children:n.jsx(W2,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(R,{name:"LinkUnderline",children:n.jsx(V2,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(R,{name:"LinkIcon",children:n.jsx(X2,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]})]})}function G2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ju,{...t})}):ju(t)}function Q2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",type:"primary",children:"Primary"}),n.jsx(Ye,{className:"mx-1",type:"success",children:"Success"}),n.jsx(Ye,{className:"mx-1",type:"info",children:"Info"}),n.jsx(Ye,{className:"mx-1",type:"warning",children:"Warning"}),n.jsx(Ye,{className:"mx-1",type:"danger",children:"Danger"})]})})}function K2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",size:"large",children:"Large"}),n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",size:"small",children:"Small"})]})})}function Y2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),n.jsx(se,{className:"w-150px mb-2",children:n.jsx(Ye,{truncated:!0,children:"Squeezed by parent element"})}),n.jsxs(Ye,{lineClamp:2,children:["The -webkit-line-clamp CSS property",n.jsx("br",{}),"allows limiting of the contents of",n.jsx("br",{}),"a block to the specified number of lines."]})]})})}function vu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Text"}),`
`,`
`,n.jsx(e.p,{children:"文本的常见操作"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,n.jsx(R,{name:"TextBasic",children:n.jsx(Q2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"})]}),`
`,n.jsx(R,{name:"TextSize",children:n.jsx(K2,{})}),`
`,n.jsx(e.h2,{children:"省略"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",n.jsx(e.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,n.jsx(R,{name:"TextTruncated",children:n.jsx(Y2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"大小"}),n.jsx(e.td,{children:"'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"truncated"}),n.jsx(e.td,{children:"显示省略号"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lineClamp"}),n.jsx(e.td,{children:"最大行数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Z2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vu,{...t})}):vu(t)}function J2(){return n.jsx(n.Fragment,{children:n.jsx(nm,{height:"400px",children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((t,e)=>n.jsx("p",{className:"scrollbar-demo-item",children:t},e))})})}function yu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Scrollbar 滚动条"}),`
`,`
`,n.jsx(e.p,{children:"用于替换浏览器原生滚动条。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"height"})," 属性设置滚动条高度，若不设置则根据父容器高度自适应。"]}),`
`,n.jsx(R,{name:"ScrollbarBasic",children:n.jsx(J2,{})})]})}function q2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yu,{...t})}):yu(t)}function ew(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{defaultChecked:!0}),n.jsx(xe,{defaultChecked:!0,className:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}})]})}function tw(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{defaultChecked:!0,size:"large",activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(xe,{defaultChecked:!0,activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(xe,{defaultChecked:!0,size:"small",activeText:"Open",inactiveText:"Close"})]})}function nw(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{defaultChecked:!0,className:"mb-2",activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(xe,{defaultChecked:!0,className:"mb-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(xe,{defaultChecked:!0,inlinePrompt:!0,activeText:"是",inactiveText:"否"}),n.jsx(xe,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Y",inactiveText:"N"}),n.jsx(xe,{defaultChecked:!0,className:"ml-2",width:60,inlinePrompt:!0,activeText:"超出省略",inactiveText:"超出省略"}),n.jsx(xe,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"完整展示多个内容",inactiveText:"多个内容"})]})}function rw(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{defaultChecked:!0,activeIcon:n.jsx(gl,{}),inactiveIcon:n.jsx(cn,{})}),n.jsx("br",{}),n.jsx(xe,{defaultChecked:!0,className:"mt-2",style:{marginLeft:"24px"},inlinePrompt:!0,activeIcon:n.jsx(gl,{className:"is-icon"}),inactiveIcon:n.jsx(cn,{className:"is-icon"})})]})}function lw(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{defaultChecked:!0,disabled:!0}),n.jsx(xe,{defaultChecked:!0,className:"ml-2"})]})}function sw(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{defaultChecked:!0,loading:!0}),n.jsx(xe,{loading:!0,className:"ml-2"})]})}function iw(){const[t,e]=u.useState(!1),[r,l]=u.useState(!1);function s(){return e(!0),new Promise(o=>{setTimeout(()=>(e(!1),console.log("Switch success"),o(!0)),1e3)})}function i(){return l(!0),new Promise((o,a)=>{setTimeout(()=>(l(!1),console.log("Switch failed"),a(new Error("Error"))),1e3)})}return n.jsxs(n.Fragment,{children:[n.jsx(xe,{loading:t,beforeChange:s}),n.jsx(xe,{className:"ml-2",loading:r,beforeChange:i})]})}function ow(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{defaultChecked:!0,activeActionIcon:n.jsx(ui,{}),inactiveActionIcon:n.jsx(ic,{})}),n.jsx("br",{}),n.jsx(xe,{defaultChecked:!0,activeActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-active-action",children:"T"})}),inactiveActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-inactive-action",children:"F"})})})]})}function wu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Switch 开关"}),`
`,`
`,n.jsx(e.p,{children:"表示两种相互对立的状态间的切换，多用于触发「开/关」。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。"}),`
`,n.jsx(R,{name:"SwitchBasic",children:n.jsx(ew,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsx(R,{name:"SwitchSize",children:n.jsx(tw,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制文本是否显示在点内。"]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。"]}),`
`,n.jsx(R,{name:"SwitchText",children:n.jsx(nw,{})}),`
`,n.jsx(e.h2,{children:"显示自定义图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-icon"})," 和 ",n.jsx(e.code,{children:"active-icon"})," 属性来添加图标。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制图标显示在点内。"]}),`
`,n.jsx(R,{name:"SwitchIcon",children:n.jsx(rw,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"disabled"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即可禁用。"]}),`
`,n.jsx(R,{name:"SwitchDisabled",children:n.jsx(lw,{})}),`
`,n.jsx(e.h2,{children:"加载状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"loading"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即加载中状态。"]}),`
`,n.jsx(R,{name:"SwitchLoading",children:n.jsx(sw,{})}),`
`,n.jsx(e.h2,{children:"阻止切换"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"beforeChange"}),"属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"]}),`
`,n.jsx(R,{name:"SwitchBeforeChange",children:n.jsx(iw,{})}),`
`,n.jsx(e.h2,{children:"自定义动作图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-action-icon"})," 和 ",n.jsx(e.code,{children:"active-action-icon"})," 属性来添加图标。"]}),`
`,n.jsx(R,{name:"SwitchActionIcon",children:n.jsx(ow,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"defaultChecked"}),n.jsx(e.td,{children:"初始是否选中"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"switch 的大小"}),n.jsx(e.td,{children:"'large' / 'small'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"switch 的宽度"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inlinePrompt"}),n.jsx(e.td,{children:"无论图标或文本是否显示在点内，只会呈现文本的第一个字符"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeIcon"}),n.jsx(e.td,{children:"switch 状态为 on 时所显示图标，设置此项会忽略 activeText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveIcon"}),n.jsx(e.td,{children:"switch 状态为 off 时所显示图标，设置此项会忽略 inactiveText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeActionIcon"}),n.jsx(e.td,{children:"on状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveActionIcon"}),n.jsx(e.td,{children:"off状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeText"}),n.jsx(e.td,{children:"switch 打开时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveText"}),n.jsx(e.td,{children:"switch 的状态为 off 时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"beforeChange"}),n.jsx(e.td,{children:"switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"}),n.jsx(e.td,{children:"boolean / Function"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function aw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wu,{...t})}):wu(t)}function cw(){return n.jsx(n.Fragment,{children:n.jsx(rm,{})})}function Cu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Rate 评分"}),`
`,`
`,n.jsx(e.p,{children:"用于评分"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。 三个等级所对应的颜色用 colors 属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。"}),`
`,n.jsx(R,{name:"RateBasic",children:n.jsx(cw,{})})]})}function dw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cu,{...t})}):Cu(t)}function uw(){const t="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",e="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",r=["small","","large"],l=r.map((i,o)=>n.jsx("div",{className:"block",children:n.jsx(Nt,{size:i,src:t})},o)),s=r.map((i,o)=>n.jsx("div",{className:"block",children:n.jsx(Nt,{shape:"square",size:i,src:e})},o));return n.jsx(n.Fragment,{children:n.jsxs(se,{className:"common-avatar",children:[n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"circle"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(Nt,{size:50,src:t})}),l]})]}),n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"square"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(Nt,{shape:"square",size:50,src:e})}),s]})]})]})})}function hw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-avatar",children:[n.jsx("div",{children:n.jsx(Nt,{icon:n.jsx(Bp,{})})}),n.jsx("div",{children:n.jsx(Nt,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})}),n.jsx("div",{children:n.jsx(Nt,{children:" user "})})]})})}function fw(){function t(){console.log("error")}return n.jsx(n.Fragment,{children:n.jsx("div",{className:"demo-type",children:n.jsx(Nt,{size:60,src:"https://empty",onError:t,children:n.jsx("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"})})})})}function pw(){const t=["fill","contain","cover","none","scale-down"],e="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",r=t.map((l,s)=>n.jsxs("div",{className:"block",children:[n.jsx("span",{className:"title",children:l}),n.jsx(Nt,{shape:"square",size:100,fit:l,src:e})]},s));return n.jsx(n.Fragment,{children:n.jsx("div",{className:"avatar-fit",children:r})})}function _u(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Avatar 头像"}),`
`,`
`,n.jsx(e.p,{children:"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"shape"})," 和 ",n.jsx(e.code,{children:"size"})," 属性来设置 Avatar 的形状和大小。"]}),`
`,n.jsx(R,{name:"AvatarBasic",children:n.jsx(uw,{})}),`
`,n.jsx(e.h2,{children:"展示类型"}),`
`,n.jsx(e.p,{children:"支持使用图片，图标或者文字作为 Avatar。"}),`
`,n.jsx(R,{name:"AvatarType",children:n.jsx(hw,{})}),`
`,n.jsx(e.h2,{children:"回退行为"}),`
`,n.jsx(e.p,{children:"图片加载失败时的回退行为。"}),`
`,n.jsx(R,{name:"AvatarError",children:n.jsx(fw,{})}),`
`,n.jsx(e.h2,{children:"适应容器"}),`
`,n.jsx(e.p,{children:"当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致"}),`
`,n.jsx(R,{name:"AvatarFit",children:n.jsx(pw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"设置 Avatar 的图标类型，具体参考 Icon 组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Avatar 大小"}),n.jsx(e.td,{children:"number / 'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"shape"}),n.jsx(e.td,{children:"Avatar 形状"}),n.jsx(e.td,{children:"'circle' / 'square'"}),n.jsx(e.td,{children:"circle"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"Avatar 图片的源地址"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"fit"}),n.jsx(e.td,{children:"当展示类型为图片的时候，设置图片如何适应容器"}),n.jsx(e.td,{children:"'fill' / 'contain' / 'cover' / 'none' / 'scale-down'"}),n.jsx(e.td,{children:"cover"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"error"}),n.jsx(e.td,{children:"图片加载失败时触发"}),n.jsx(e.td,{children:"() => void"})]})})]})]})}function mw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_u,{...t})}):_u(t)}function xw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{value:12,className:"item",children:n.jsx(N,{children:"comments"})}),n.jsx(xt,{value:3,className:"item",children:n.jsx(N,{children:"replies"})}),n.jsx(xt,{value:1,className:"item",type:"primary",children:n.jsx(N,{children:"comments"})}),n.jsx(xt,{value:2,className:"item",type:"warning",children:n.jsx(N,{children:"replies"})})]})})}function gw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{value:200,max:99,className:"item",children:n.jsx(N,{children:"comments"})}),n.jsx(xt,{value:100,max:10,className:"item",children:n.jsx(N,{children:"replies"})})]})})}function jw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{value:"new",className:"item",children:n.jsx(N,{children:"comments"})}),n.jsx(xt,{value:"hot",className:"item",children:n.jsx(N,{children:"replies"})})]})})}function vw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{isDot:!0,className:"item",children:"query"}),n.jsx(xt,{isDot:!0,className:"item",children:n.jsx(N,{className:"share-button",icon:n.jsx(dc,{}),type:"primary"})})]})})}function bu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Badge 徽章"}),`
`,`
`,n.jsx(e.p,{children:"按钮和图标上的数字或状态标记。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以用来展示新消息的数量。"}),`
`,n.jsx(e.p,{children:"数量值可接受 Number 或 String。"}),`
`,n.jsx(R,{name:"BadgeBasic",children:n.jsx(xw,{})}),`
`,n.jsx(e.h2,{children:"最大值"}),`
`,n.jsx(e.p,{children:"你还可以自定义最大值"}),`
`,n.jsx(e.p,{children:"由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。"}),`
`,n.jsx(R,{name:"BadgeMax",children:n.jsx(gw,{})}),`
`,n.jsx(e.h2,{children:"自定义显示内容"}),`
`,n.jsx(e.p,{children:"你也可以展示除数字以外你想要展示的任何值。"}),`
`,n.jsx(e.p,{children:"当 value 是 String 时，可以显示自定义文字。"}),`
`,n.jsx(R,{name:"BadgeValue",children:n.jsx(jw,{})}),`
`,n.jsx(e.h2,{children:"小红点"}),`
`,n.jsx(e.p,{children:"通过一个小红点标记来告知用户有新内容。"}),`
`,n.jsx(e.p,{children:"使用 is-dot 属性。 是个布尔值。"}),`
`,n.jsx(R,{name:"BadgeIsDot",children:n.jsx(vw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"value"}),n.jsx(e.td,{children:"显示值"}),n.jsx(e.td,{children:"string / number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"max"}),n.jsx(e.td,{children:"最大值，超过最大值会显示 max+。 只有当 value 是数字类型时起作用。"}),n.jsx(e.td,{children:"number"}),n.jsx(e.td,{children:"99"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"isDot"}),n.jsx(e.td,{children:"是否显示小圆点。"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"badge type."}),n.jsx(e.td,{children:"'primary' | 'success' | 'warning' | 'danger' | 'info'"}),n.jsx(e.td,{children:"danger"})]})]})]})]})}function yw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bu,{...t})}):bu(t)}function ww(){return n.jsx(n.Fragment,{children:n.jsxs(Dp,{children:[n.jsxs(Ir,{title:"Consistency",name:"1",children:[n.jsx("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),n.jsx("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]}),n.jsxs(Ir,{title:"Feedback",name:"2",children:[n.jsx("div",{children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"}),n.jsx("div",{children:"Visual feedback: reflect current state by updating or rearranging elements of the page."})]}),n.jsxs(Ir,{title:"Efficiency",name:"3",children:[n.jsx("div",{children:"Simplify the process: keep operating process simple and intuitive;"}),n.jsx("div",{children:"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"}),n.jsx("div",{children:"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."})]}),n.jsxs(Ir,{title:"Controllability",name:"4",children:[n.jsx("div",{children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"}),n.jsx("div",{children:"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})]})})}function Nu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Collapse 折叠面板"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可同时展开多个面板，面板之间不影响"}),`
`,n.jsx(R,{name:"CollapseBasic",children:n.jsx(ww,{})})]})}function Cw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nu,{...t})}):Nu(t)}function _w(){function t(e){return e===100?"Full":`${e}%`}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(bt,{percentage:50}),n.jsx(bt,{percentage:100,format:t}),n.jsx(bt,{percentage:100,status:"success"}),n.jsx(bt,{percentage:100,status:"warning"}),n.jsx(bt,{percentage:50,status:"exception"})]})})}function bw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(bt,{textInside:!0,strokeWidth:26,percentage:70}),n.jsx(bt,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),n.jsx(bt,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),n.jsx(bt,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function ku(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Progress 进度条"}),`
`,`
`,n.jsx(e.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,n.jsx(e.h2,{children:"直线进度条"}),`
`,n.jsxs(e.p,{children:["Progress 组件设置 ",n.jsx(e.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",n.jsx(e.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",n.jsx(e.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,n.jsx(R,{name:"ProgressBasic",children:n.jsx(_w,{})}),`
`,n.jsx(e.h2,{children:"进度条内显示百分比标识"}),`
`,n.jsx(e.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,n.jsxs(e.p,{children:["Progress 组件可通过 ",n.jsx(e.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",n.jsx(e.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,n.jsx(R,{name:"ProgressTextInside",children:n.jsx(bw,{})})]})}function Nw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ku,{...t})}):ku(t)}function kw(){return n.jsx(n.Fragment,{children:n.jsxs(se,{children:[n.jsx(I,{sm:12,lg:6,children:n.jsx(er,{icon:"success",title:"Success Tip",subTitle:"Please follow the instructions",extra:n.jsx(N,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(er,{icon:"warning",title:"Warning Tip",subTitle:"Please follow the instructions",extra:n.jsx(N,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(er,{icon:"error",title:"Error Tip",subTitle:"Please follow the instructions",extra:n.jsx(N,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(er,{icon:"info",title:"Info Tip",subTitle:n.jsx("p",{children:"Using slot as subtitle"}),extra:n.jsx(N,{type:"primary",children:"Back"})})})]})})}function Sw(){return n.jsx(n.Fragment,{children:n.jsx(er,{icon:n.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),title:"404",subTitle:"Sorry, request error",extra:n.jsx(N,{type:"primary",children:"Back"})})})}function Su(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Result 结果"}),`
`,`
`,n.jsx(e.p,{children:"用于对用户的操作结果或者异常状态做反馈。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(R,{name:"ResultBasic",children:n.jsx(kw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(R,{name:"ResultIcon",children:n.jsx(Sw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"result 组件的图标类型"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error' / ReactNode"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"result 组件的标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"subTitle"}),n.jsx(e.td,{children:"result 组件的副标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"extra"}),n.jsx(e.td,{children:"内容额外区域的内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"ReactNode"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Tw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Su,{...t})}):Su(t)}function Ew(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(gi,{columns:t,data:e})})}function Bw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(gi,{columns:t,data:e,stripe:!0})})}function Rw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(gi,{columns:t,data:e,border:!0})})}function Tu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Table 表格"}),`
`,`
`,n.jsx(e.p,{children:"用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。"}),`
`,n.jsx(e.h2,{children:"基础表格"}),`
`,n.jsx(e.p,{children:"基础的表格展示用法。"}),`
`,n.jsx(R,{name:"TableBasic",children:n.jsx(Ew,{})}),`
`,n.jsx(e.h2,{children:"带斑马纹表格"}),`
`,n.jsx(e.p,{children:"使用带斑马纹的表格，可以更容易区分出不同行的数据。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"stripe"})," 可以创建带斑马纹的表格。 如果 ",n.jsx(e.code,{children:"true"}),", 表格将会带有斑马纹。"]}),`
`,n.jsx(R,{name:"TableStripe",children:n.jsx(Bw,{})}),`
`,n.jsx(e.h2,{children:"带边框表格"}),`
`,n.jsxs(e.p,{children:["默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 ",n.jsx(e.code,{children:"border"})," 属性，把该属性设置为 ",n.jsx(e.code,{children:"true"})," 即可启用。"]}),`
`,n.jsx(R,{name:"TableBorder",children:n.jsx(Rw,{})}),`
`,n.jsx(e.h2,{children:"Table 属性"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"columns"}),n.jsx(e.td,{children:"表格列的配置描述"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"data"}),n.jsx(e.td,{children:"显示的数据"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"stripe"}),n.jsx(e.td,{children:"是否为斑马纹 table"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border"}),n.jsx(e.td,{children:"是否带有纵向边框"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function Lw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Tu,{...t})}):Tu(t)}function Dw(){return n.jsxs(n.Fragment,{children:[n.jsx(ge,{children:"Tag 1"}),n.jsx(ge,{className:"ml-2",type:"success",children:"Tag 2"}),n.jsx(ge,{className:"ml-2",type:"info",children:"Tag 3"}),n.jsx(ge,{className:"ml-2",type:"warning",children:"Tag 4"}),n.jsx(ge,{className:"ml-2",type:"danger",children:"Tag 5"})]})}function Pw(){const t=[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}].map(e=>n.jsx(ge,{className:"mx-1",closable:!0,type:e.type,children:e.name}));return n.jsx(n.Fragment,{children:t})}function Aw(){return n.jsxs(n.Fragment,{children:[n.jsxs(se,{children:[n.jsx(ge,{className:"mx-1",size:"large",children:"Large"}),n.jsx(ge,{className:"mx-1",children:"Default"}),n.jsx(ge,{className:"mx-1",size:"small",children:"Small"})]}),n.jsxs(se,{className:"mt-4",children:[n.jsx(ge,{className:"mx-1",size:"large",closable:!0,children:"Large"}),n.jsx(ge,{className:"mx-1",closable:!0,children:"Default"}),n.jsx(ge,{className:"mx-1",size:"small",closable:!0,children:"Small"})]})]})}function Mw(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(a=>n.jsx(ge,{type:a.type,className:"mx-1",effect:"dark",children:a.label})),r=t.map(a=>n.jsx(ge,{type:a.type,className:"mx-1",effect:"dark",closable:!0,children:a.label})),l=t.map(a=>n.jsx(ge,{type:a.type,className:"mx-1",effect:"light",children:a.label})),s=t.map(a=>n.jsx(ge,{type:a.type,className:"mx-1",effect:"light",closable:!0,children:a.label})),i=t.map(a=>n.jsx(ge,{type:a.type,className:"mx-1",effect:"plain",children:a.label})),o=t.map(a=>n.jsx(ge,{type:a.type,className:"mx-1",effect:"plain",closable:!0,children:a.label}));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1 line-height-2",children:"Dark"}),e,r]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Light"}),l,s]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Plain"}),i,o]})]})}function Iw(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(s=>n.jsx(ge,{type:s.type,className:"mx-1",effect:"dark",round:!0,children:s.label})),r=t.map(s=>n.jsx(ge,{type:s.type,className:"mx-1",effect:"light",round:!0,children:s.label})),l=t.map(s=>n.jsx(ge,{type:s.type,className:"mx-1",effect:"plain",round:!0,children:s.label}));return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:e}),n.jsx("div",{className:"flex flex-wrap gap-2",children:r}),n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:l})]})}function Eu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tag 标签"}),`
`,`
`,n.jsx(e.p,{children:"用于标记和选择。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 tag 的类型。 也可以通过 ",n.jsx(e.code,{children:"color"})," 属性来自定义背景色。"]}),`
`,n.jsx(R,{name:"TagBasic",children:n.jsx(Dw,{})}),`
`,n.jsx(e.h2,{children:"可移除标签"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"closable"})," 属性可以定义一个标签是否可移除。 它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 ",n.jsx(e.code,{children:"disable-transitions"})," 属性，它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，",n.jsx(e.code,{children:"true"})," 为关闭。 当 Tag 被移除时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(R,{name:"TagClosable",children:n.jsx(Pw,{})}),`
`,n.jsx(e.h2,{children:"不同尺寸"}),`
`,n.jsx(e.p,{children:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性来设置额外尺寸, 可选值包括 ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"}),"."]}),`
`,n.jsx(R,{name:"TagSize",children:n.jsx(Aw,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tag 组件提供了三个不同的主题：",n.jsx(e.code,{children:"dark"}),"、",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"plain"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 effect 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(R,{name:"TagEffect",children:n.jsx(Mw,{})}),`
`,n.jsx(e.h2,{children:"圆形标签"}),`
`,n.jsx(e.p,{children:"Tag 可以向按钮组件一样变为完全圆形。"}),`
`,n.jsx(R,{name:"TagRound",children:n.jsx(Iw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Tag 的类型"}),n.jsx(e.td,{children:"'success' | 'info' | 'warning' | 'danger' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Tag 的尺寸"}),n.jsx(e.td,{children:"'large' | 'default' | 'small' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tag 的主题"}),n.jsx(e.td,{children:"'dark' | 'light' | 'plain'"}),n.jsx(e.td,{children:"light"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"Tag 是否为圆形"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]})]})]})]})}function Fw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Eu,{...t})}):Eu(t)}function Ow(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success"}),n.jsx(oe,{title:"info alert",type:"info"}),n.jsx(oe,{title:"warning alert",type:"warning"}),n.jsx(oe,{title:"error alert",type:"error"})]})}function zw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",effect:"dark"}),n.jsx(oe,{title:"info alert",type:"info",effect:"dark"}),n.jsx(oe,{title:"warning alert",type:"warning",effect:"dark"}),n.jsx(oe,{title:"error alert",type:"error",effect:"dark"})]})}function $w(){function t(){alert("Hello World!")}return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"unclosable alert",type:"success",closable:!1}),n.jsx(oe,{title:"customized close-text",type:"info",closeText:"Gotcha"}),n.jsx(oe,{title:"alert with callback",type:"warning",close:t})]})}function Hw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",showIcon:!0})]})}function Uw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",center:!0,showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",center:!0,showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function Ww(){return n.jsx(n.Fragment,{children:n.jsx(oe,{title:"with description",type:"success",description:"This is a description."})})}function Vw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function Bu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alert 提示"}),`
`,`
`,n.jsx(e.p,{children:"用于页面中展示重要的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供四种类型，由 ",n.jsx(e.code,{children:"type"})," 属性指定，默认值为 ",n.jsx(e.code,{children:"info"}),"。"]}),`
`,n.jsx(R,{name:"AlertBasic",children:n.jsx(Ow,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供了两个不同的主题：",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"dark"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(R,{name:"AlertEffect",children:n.jsx(zw,{})}),`
`,n.jsx(e.h2,{children:"自定义关闭按钮"}),`
`,n.jsx(e.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,n.jsxs(e.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",n.jsx(e.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，默认为 ",n.jsx(e.code,{children:"false"}),"。 你可以设置 ",n.jsx(e.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",n.jsx(e.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(R,{name:"AlertClose",children:n.jsx($w,{})}),`
`,n.jsx(e.h2,{children:"使用图标"}),`
`,n.jsx(e.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,n.jsx(R,{name:"AlertShowIcon",children:n.jsx(Hw,{})}),`
`,n.jsx(e.h2,{children:"文字居中"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,n.jsx(R,{name:"AlertCenter",children:n.jsx(Uw,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsx(e.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,n.jsxs(e.p,{children:["除了必填的 ",n.jsx(e.code,{children:"title"})," 属性外，你可以设置 ",n.jsx(e.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,n.jsx(R,{name:"AlertDescription",children:n.jsx(Ww,{})}),`
`,n.jsx(e.h2,{children:"带图标和描述"}),`
`,n.jsx(e.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,n.jsx(R,{name:"AlertIconDescription",children:n.jsx(Vw,{})}),`
`,n.jsx(e.h2,{children:"Alert API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Alert 标题。"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Alert 类型。"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error'"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"description"}),n.jsx(e.td,{children:"描述性文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可以关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"center"}),n.jsx(e.td,{children:"文字是否居中"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closeText"}),n.jsx(e.td,{children:"自定义关闭按钮文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showIcon"}),n.jsx(e.td,{children:"是否显示类型图标"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"主题样式"}),n.jsx(e.td,{children:"'light' / 'dark'"}),n.jsx(e.td,{children:"light"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"close"}),n.jsx(e.td,{children:"关闭 Alert 时触发的事件"}),n.jsx(e.td,{children:"(event: MouseEvent) => void"})]})})]})]})}function Xw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bu,{...t})}):Bu(t)}function Gw(){const[t,e]=u.useState(!1);function r(){e(!0)}function l(){e(!1)}function s(){e(!1)}function i(){e(!1)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button",onClick:s,children:n.jsx("span",{className:"",children:"Cancel"})}),n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button el-button--primary",onClick:i,children:n.jsx("span",{className:"",children:" Confirm "})})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(N,{text:!0,onClick:r,children:"click to open the Dialog"}),n.jsx(wl,{open:t,title:"Tips",width:"30%",onClose:l,footer:n.jsx(o,{}),children:n.jsx("span",{children:"This is a message"})})]})}function Qw(){const[t,e]=u.useState(!1),[r,l]=u.useState(!1);function s(){e(!0)}function i(){l(!0)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx(N,{onClick:()=>{l(!1)},children:"Cancel"}),n.jsx(N,{type:"primary",onClick:()=>{l(!1)},children:"Confirm"})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(N,{text:!0,onClick:s,children:"open a Table nested Dialog"}),n.jsx(wl,{open:t,title:"Shipping address",onClose:()=>{e(!1)},children:"Table组件"}),n.jsx(N,{text:!0,onClick:i,children:"open a Form nested Dialog"}),n.jsx(wl,{open:r,title:"Shipping address",footer:n.jsx(o,{}),onClose:()=>{l(!1)},children:"Form 表单"})]})}function Kw(){const[t,e]=u.useState(!1);function r(){e(!1)}function l(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"dialog-header",children:[n.jsx("h4",{className:"el-dialog__title",children:"This is a custom header!"}),n.jsxs(N,{type:"danger",onClick:r,children:[n.jsx(_r,{}),"Close"]})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(N,{onClick:()=>e(!0),children:"Open Dialog with customized header"}),n.jsx(wl,{open:t,showClose:!1,header:n.jsx(l,{}),onClose:r,children:"This is dialog content."})]})}function Ru(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dialog 对话框"}),`
`,`
`,n.jsx(e.p,{children:"在保留当前页面状态的情况下，告知用户并承载相关操作。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Dialog 弹出一个对话框，适合需要定制性更大的场景。"}),`
`,n.jsx(R,{name:"DialogBasic",children:n.jsx(Gw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(e.p,{children:"对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。"}),`
`,n.jsx(R,{name:"DialogContent",children:n.jsx(Qw,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(R,{name:"DialogHeader",children:n.jsx(Kw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Dialog"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Dialog 对话框 Dialog 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"对话框的宽度，默认值为 50%"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Yw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ru,{...t})}):Ru(t)}function Zw(){const[t,e]=u.useState(""),[r,l]=u.useState(!1),[s,i]=u.useState(!1);function o(){e("ltr"),l(!0)}function a(){e("rtl"),l(!0)}function c(){e("ttb"),l(!0)}function d(){e("btt"),l(!0)}function h(){e("ltr"),i(!0)}function f(){e("rtl"),i(!0)}function x(){e("ttb"),i(!0)}function g(){e("btt"),i(!0)}function v(){l(!1)}function y(){i(!1)}function b(){i(!1)}function m(){i(!1)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:o,children:"open left to right"}),n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:a,children:"open right to left"}),n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:c,children:"open top to bottom"}),n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:d,children:"open bottom to top"})]}),n.jsxs("div",{style:{marginTop:"20px"},children:[n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:h,children:"open left to right footer"}),n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:f,children:"open right to left footer"}),n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:x,children:"open top to bottom footer"}),n.jsx(N,{type:"primary",style:{marginRight:"16px"},onClick:g,children:"open bottom to top footer"})]}),n.jsx(Pn,{open:r,title:"I am the title",direction:t,onClose:v,children:n.jsx("span",{children:"Hi, there!"})}),n.jsx(Pn,{open:s,direction:t,onClose:y,header:n.jsx("h4",{children:"set title by slot"}),footer:n.jsxs("div",{style:{flex:"auto"},children:[n.jsx(N,{onClick:b,children:"cancel"}),n.jsx(N,{type:"primary",onClick:m,children:"confirm"})]}),children:"radio"})]})}function Jw(){const[t,e]=u.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(N,{type:"primary",onClick:()=>e(!0),children:"open"}),n.jsx(Pn,{open:t,title:"I am the title",withHeader:!1,children:n.jsx("span",{children:"Hi there!"})})]})}function qw(){const[t,e]=u.useState(!1),[r,l]=u.useState(!1);function s(){e(!1)}function i(){l(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(N,{text:!0,onClick:()=>{e(!0)},children:"Open Drawer with nested table"}),n.jsx(N,{text:!0,onClick:()=>{l(!0)},children:"Open Drawer with nested form"}),n.jsx(Pn,{open:t,title:"I have a nested table inside!",direction:"rtl",size:"50%",onClose:s,children:"table"}),n.jsx(Pn,{open:r,title:"I have a nested form inside!",direction:"ltr",className:"demo-drawer",onClose:i,children:n.jsxs("div",{className:"demo-drawer__content",children:["form",n.jsxs("div",{className:"demo-drawer__footer",children:[n.jsx(N,{onClick:i,children:"Cancel"}),n.jsx(N,{type:"primary",onClick:i,children:"Submit"})]})]})})]})}function e4(){const[t,e]=u.useState(!1);function r(){e(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(N,{onClick:()=>{e(!0)},children:"Open Drawer with customized header"}),n.jsx(Pn,{open:t,showClose:!1,header:n.jsxs(n.Fragment,{children:[n.jsx("h4",{children:"This is a custom header!"}),n.jsxs(N,{type:"danger",onClick:r,children:[n.jsx(_r,{}),"Close"]})]}),children:"This is drawer content."})]})}function Lu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Drawer 抽屉"}),`
`,`
`,n.jsx(e.p,{children:"有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验."}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"呼出一个临时的侧边栏, 可以从多个方向呼出"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Drawer"})," 包含三部分: ",n.jsx(e.code,{children:"title"})," & ",n.jsx(e.code,{children:"body"})," & ",n.jsx(e.code,{children:"footer"}),", 你还可以通过 title 属性来设置标题, 默认情况下它是一个空字符串, 其中 ",n.jsx(e.code,{children:"body"})," 部分是 Drawer 组件的主区域, 它包含了用户定义的主要内容. footer和title用法一致, 用来显示页脚信息. 当 Drawer 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。"]}),`
`,n.jsx(R,{name:"DrawerBasic",children:n.jsx(Zw,{})}),`
`,n.jsx(e.h2,{children:"不添加 Title"}),`
`,n.jsx(e.p,{children:"当你不需要标题的时候，你可以将它移除。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"with-header"})," 属性为 false 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 ",n.jsx(e.code,{children:"title"}),"。"]}),`
`,n.jsx(R,{name:"DrawerWithHeader",children:n.jsx(Jw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsxs(e.p,{children:["像 ",n.jsx(e.code,{children:"Dialog"})," 组件一样，",n.jsx(e.code,{children:"Drawer"})," 也可以用来显示多种不同的交互。"]}),`
`,n.jsx(R,{name:"DrawerContent",children:n.jsx(qw,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(R,{name:"DrawerHeader",children:n.jsx(e4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Drawer"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"Drawer 打开的方向"}),n.jsx(e.td,{children:"'rtl' | 'ltr' | 'ttb' | 'btt'"}),n.jsx(e.td,{children:"rtl"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Drawer 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"Drawer 页脚部分"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"withHeader"}),n.jsx(e.td,{children:"控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title 不生效"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"30%"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]})]})]})]})}function t4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Lu,{...t})}):Lu(t)}function n4(){return n.jsx(n.Fragment,{children:n.jsx(xi,{title:"Are you sure to delete this?",children:n.jsx(N,{children:"Delete"})})})}function r4(){return n.jsx(n.Fragment,{children:n.jsx(xi,{width:220,confirmButtonText:"OK",cancelButtonText:"No, Thanks",icon:n.jsx(Tl,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",children:n.jsx(N,{children:"Delete"})})})}function l4(){function t(){console.log("confirm!")}function e(){console.log("cancel!")}return n.jsx(n.Fragment,{children:n.jsx(xi,{confirmButtonText:"Yes",cancelButtonText:"No",icon:n.jsx(Tl,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:t,onCancel:e,children:n.jsx(N,{children:"Delete"})})})}function Du(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popconfirm 气泡确认框"}),`
`,`
`,n.jsx(e.p,{children:"点击某个元素弹出一个简单的气泡确认框"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。"}),`
`,n.jsx(R,{name:"PopconfirmBasic",children:n.jsx(n4,{})}),`
`,n.jsx(e.h2,{children:"自定义弹出框的内容"}),`
`,n.jsx(e.p,{children:"可以在 Popconfirm 中自定义内容。"}),`
`,n.jsx(R,{name:"PopconfirmIcon",children:n.jsx(r4,{})}),`
`,n.jsx(e.h2,{children:"多种让 Popconfirm 出现的方法"}),`
`,n.jsx(e.p,{children:"点击按钮触发事件"}),`
`,n.jsx(R,{name:"PopconfirmEvent",children:n.jsx(l4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"标题"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"confirmButtonText"}),n.jsx(e.td,{children:"确认按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"cancelButtonText"}),n.jsx(e.td,{children:"取消按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"自定义图标"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"QuestionFilled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"iconColor"}),n.jsx(e.td,{children:"Icon 颜色"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"#f90"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideIcon"}),n.jsx(e.td,{children:"是否隐藏 Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"弹层宽度，最小宽度 150px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"number"})]}),n.jsx(e.td,{children:"150"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"事件名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onConfirm"}),n.jsx(e.td,{children:"点击确认按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onCancel"}),n.jsx(e.td,{children:"点击取消按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]})]})]})]})}function s4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Du,{...t})}):Du(t)}function i4(){return n.jsxs(n.Fragment,{children:[n.jsx(Or,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content",children:n.jsx(N,{className:"m-2",children:"Hover to activate"})}),n.jsx(Or,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content",children:n.jsx(N,{className:"m-2",children:"Click to activate"})}),n.jsx(Or,{placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content",children:n.jsx(N,{className:"m-2",children:"Focus to activate"})}),n.jsx(Or,{title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content",children:n.jsx(N,{className:"m-2",children:"contextmenu to activate"})})]})}function Pu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popover 气泡卡片"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"trigger"})," 属性被用来决定 ",n.jsx(e.code,{children:"popover"})," 的触发方式，支持的触发方式： ",n.jsx(e.code,{children:"hover"}),"、",n.jsx(e.code,{children:"click"}),"、",n.jsx(e.code,{children:"focus"})," 或 ",n.jsx(e.code,{children:"contextmenu"}),"。 如果你想手动控制它，可以设置 ",n.jsx(e.code,{children:":visible"})," 属性。"]}),`
`,n.jsx(R,{name:"PopoverBasic",children:n.jsx(i4,{})})]})}function o4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Pu,{...t})}):Pu(t)}function a4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-tooltip",children:[n.jsxs("div",{className:"row center",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start",children:n.jsx(N,{children:"top-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top",children:n.jsx(N,{children:"top"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end",children:n.jsx(N,{children:"top-end"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start",children:n.jsx(N,{children:"left-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start",children:n.jsx(N,{children:"right-start"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left",children:n.jsx(N,{className:"mt-3 mb-3",children:"left"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right",children:n.jsx(N,{children:"right"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end",children:n.jsx(N,{children:"left-end"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end",children:n.jsx(N,{children:"right-end"})})]}),n.jsxs("div",{className:"row center",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start",children:n.jsx(N,{children:"bottom-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom",children:n.jsx(N,{children:"bottom"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end",children:n.jsx(N,{children:"bottom-end"})})]})]})})}function c4(){return n.jsxs(n.Fragment,{children:[n.jsx(_e,{content:"Top center",placement:"top",children:n.jsx(N,{children:"Dark"})}),n.jsx(_e,{content:"Bottom center",placement:"bottom",effect:"light",children:n.jsx(N,{children:"Light"})}),n.jsx(_e,{content:"Bottom center",effect:"customized",children:n.jsx(N,{children:"Customized theme"})})]})}function d4(){return n.jsx(n.Fragment,{children:n.jsx(_e,{placement:"top",content:n.jsxs(n.Fragment,{children:["multiple lines",n.jsx("br",{}),"second line"]}),children:n.jsx(N,{children:"Top center"})})})}function u4(){const[t,e]=u.useState(!0);function r(){e(!t)}return n.jsx(n.Fragment,{children:n.jsx(_e,{disabled:t,content:"click to close tooltip function",placement:"bottom",effect:"light",children:n.jsxs(N,{onClick:r,children:["click to ",t?"active":"close"," tooltip function"]})})})}function Au(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tooltip 文字提示"}),`
`,`
`,n.jsx(e.p,{children:"常用于展示鼠标 hover 时的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"content"})," 属性来决定 ",n.jsx(e.code,{children:"hover"})," 时的提示信息。 由 ",n.jsx(e.code,{children:"placement"})," 属性决定展示效果： ",n.jsx(e.code,{children:"placement"}),"属性值为：[方向]-[对齐位置]；四个方向：",n.jsx(e.code,{children:"top"}),"、",n.jsx(e.code,{children:"left"}),"、",n.jsx(e.code,{children:"right"}),"、",n.jsx(e.code,{children:"bottom"}),"；三种对齐位置：",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"end"}),'，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。']}),`
`,n.jsx(R,{name:"TooltipBasic",children:n.jsx(a4,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tooltip 组件内置了两个主题：",n.jsx(e.code,{children:"dark"}),"和",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 来修改主题，默认值为 ",n.jsx(e.code,{children:"dark"}),"."]}),`
`,n.jsx(R,{name:"TooltipEffect",children:n.jsx(c4,{})}),`
`,n.jsx(e.h2,{children:"更多内容的文字提示"}),`
`,n.jsx(e.p,{children:"展示多行文本或者是设置文本内容的格式"}),`
`,n.jsx(R,{name:"TooltipContent",children:n.jsx(d4,{})}),`
`,n.jsx(e.h2,{children:"高级扩展"}),`
`,n.jsx(e.p,{children:"除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："}),`
`,n.jsxs(e.p,{children:["如果需要关闭 ",n.jsx(e.code,{children:"tooltip"})," 功能，",n.jsx(e.code,{children:"disabled"})," 属性可以满足这个需求， 你只需要将其设置为 ",n.jsx(e.code,{children:"true"}),"。"]}),`
`,n.jsx(R,{name:"TooltipDisabled",children:n.jsx(u4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tooltip 主题，内置了 dark / light 两种"}),n.jsx(e.td,{children:"'dark' / 'light'"}),n.jsx(e.td,{children:"dark"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"显示的内容"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"placement"}),n.jsx(e.td,{children:"Tooltip 组件出现的位置"}),n.jsx(e.td,{children:"'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'"}),n.jsx(e.td,{children:"bottom"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showAfter"}),n.jsx(e.td,{children:"在触发后多久显示内容，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideAfter"}),n.jsx(e.td,{children:"延迟关闭，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"200"})]})]})]})]})}function h4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Au,{...t})}):Au(t)}function f4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes."}),n.jsx(Tt,{}),n.jsx("span",{children:"There little thoughts are the rustle of leaves; they have their whisper of joy in my mind."})]})})}function p4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"What you are you do not see, what you see is your shadow. "}),n.jsx(Tt,{contentPosition:"left",children:"Rabindranath Tagore"}),n.jsx("span",{children:"My wishes are fools, they shout across thy song, my Master. Let me but listen."}),n.jsx(Tt,{children:n.jsx(lc,{})}),n.jsx("span",{children:"I cannot choose the best. The best chooses me."}),n.jsx(Tt,{contentPosition:"right",children:"Rabindranath Tagore"})]})})}function m4(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"What language is thine, O sea?"}),n.jsx(Tt,{borderStyle:"dashed"}),n.jsx("span",{children:"The language of eternal question."})]}),n.jsx(Tt,{borderStyle:"dotted"}),n.jsx("span",{children:"What language is thy answer, O sky?"}),n.jsx(Tt,{borderStyle:"double"}),n.jsx("span",{children:"The language of eternal silence."})]})}function x4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"Rain"}),n.jsx(Tt,{direction:"vertical"}),n.jsx("span",{children:"Home"}),n.jsx(Tt,{direction:"vertical","border-style":"dashed"}),n.jsx("span",{children:"Grass"})]})})}function Mu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Divider 分割线"}),`
`,`
`,n.jsx(e.p,{children:"区隔内容的分割线。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"对不同段落的文本进行分割。"}),`
`,n.jsx(R,{name:"DividerBasic",children:n.jsx(f4,{})}),`
`,n.jsx(e.h2,{children:"设置文案"}),`
`,n.jsx(e.p,{children:"可以在分割线上自定义文本内容。"}),`
`,n.jsx(R,{name:"DividerContent",children:n.jsx(p4,{})}),`
`,n.jsx(e.h2,{children:"虚线"}),`
`,n.jsx(e.p,{children:"您可以设置分隔符的样式。"}),`
`,n.jsx(R,{name:"DividerBorder",children:n.jsx(m4,{})}),`
`,n.jsx(e.h2,{children:"垂直分隔线"}),`
`,n.jsx(R,{name:"DividerDirection",children:n.jsx(x4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"设置分割线方向"}),n.jsx(e.td,{children:"'horizontal' / 'vertical'"}),n.jsx(e.td,{children:"horizontal"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border-style"}),n.jsx(e.td,{children:"设置分隔符样式"}),n.jsx(e.td,{children:"'none' / 'solid' / 'hidden' / 'dashed' / ...(css/border-style)"}),n.jsx(e.td,{children:"solid"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content-position"}),n.jsx(e.td,{children:"自定义分隔线内容的位置"}),n.jsx(e.td,{children:"'left' / 'right' / 'center'"}),n.jsx(e.td,{children:"center"})]})]})]})]})}function g4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Mu,{...t})}):Mu(t)}function j4({name:t}){let e;switch(t){case"button":e=n.jsx(N2,{});break;case"container":e=n.jsx(D2,{});break;case"icon":e=n.jsx(A2,{});break;case"layout":e=n.jsx(H2,{});break;case"link":e=n.jsx(G2,{});break;case"text":e=n.jsx(Z2,{});break;case"scrollbar":e=n.jsx(q2,{});break;case"switch":e=n.jsx(aw,{});break;case"rate":e=n.jsx(dw,{});break;case"avatar":e=n.jsx(mw,{});break;case"badge":e=n.jsx(yw,{});break;case"collapse":e=n.jsx(Cw,{});break;case"progress":e=n.jsx(Nw,{});break;case"result":e=n.jsx(Tw,{});break;case"table":e=n.jsx(Lw,{});break;case"tag":e=n.jsx(Fw,{});break;case"alert":e=n.jsx(Xw,{});break;case"dialog":e=n.jsx(Yw,{});break;case"drawer":e=n.jsx(t4,{});break;case"popconfirm":e=n.jsx(s4,{});break;case"popover":e=n.jsx(o4,{});break;case"tooltip":e=n.jsx(h4,{});break;case"divider":e=n.jsx(g4,{});break}return e}function de({name:t}){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(j4,{name:t})})})}function Iu(t){const e={h1:"h1",...t.components};return n.jsx(e.h1,{children:"Border 边框"})}function v4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Iu,{...t})}):Iu(t)}function y4(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(v4,{})})})}function w4(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"Basic 基础组件"}),n.jsx(Z,{to:"button",children:"Button 按钮"}),n.jsx(Z,{to:"border",children:"Border 边框"}),n.jsx(Z,{to:"container",children:"Container 布局容器"}),n.jsx(Z,{to:"icon",children:"Icon 图标"}),n.jsx(Z,{to:"layout",children:"Layout 布局"}),n.jsx(Z,{to:"link",children:"Link 链接"}),n.jsx(Z,{to:"text",children:"Text 文本"}),n.jsx(Z,{to:"scrollbar",children:"Scrollbar 滚动条"}),n.jsx("p",{className:"sidebar-group__title",children:"Form 表单组件"}),n.jsx(Z,{to:"switch",children:"Switch 开关"}),n.jsx(Z,{to:"rate",children:"Rate 评分"}),n.jsx("p",{className:"sidebar-group__title",children:"Data 数据展示"}),n.jsx(Z,{to:"avatar",children:"Avatar 头像"}),n.jsx(Z,{to:"badge",children:"Badge 徽章"}),n.jsx(Z,{to:"collapse",children:"Collapse 折叠面板"}),n.jsx(Z,{to:"progress",children:"Progress 进度条"}),n.jsx(Z,{to:"result",children:"Result 结果"}),n.jsx(Z,{to:"table",children:"Table 表格"}),n.jsx(Z,{to:"tag",children:"Tag 标签"}),n.jsx("p",{className:"sidebar-group__title",children:"Feedback 反馈组件"}),n.jsx(Z,{to:"alert",children:"Alert 提示"}),n.jsx(Z,{to:"dialog",children:"Dialog 对话框"}),n.jsx(Z,{to:"drawer",children:"Drawer 抽屉"}),n.jsx(Z,{to:"popconfirm",children:"Popconfirm 气泡确认框"}),n.jsx(Z,{to:"popover",children:"Popover 气泡卡片"}),n.jsx(Z,{to:"tooltip",children:"Tooltip 文字提示"}),n.jsx("p",{className:"sidebar-group__title",children:"Others 其他"}),n.jsx(Z,{to:"divider",children:"Divider 分割线"})]})})}),n.jsx("main",{className:"page-content",children:n.jsxs(ai,{children:[n.jsx(Q,{path:"button",element:n.jsx(de,{name:"button"})}),n.jsx(Q,{path:"border",element:n.jsx(y4,{})}),n.jsx(Q,{path:"container",element:n.jsx(de,{name:"container"})}),n.jsx(Q,{path:"icon",element:n.jsx(de,{name:"icon"})}),n.jsx(Q,{path:"layout",element:n.jsx(de,{name:"layout"})}),n.jsx(Q,{path:"link",element:n.jsx(de,{name:"link"})}),n.jsx(Q,{path:"text",element:n.jsx(de,{name:"text"})}),n.jsx(Q,{path:"scrollbar",element:n.jsx(de,{name:"scrollbar"})}),n.jsx(Q,{path:"switch",element:n.jsx(de,{name:"switch"})}),n.jsx(Q,{path:"rate",element:n.jsx(de,{name:"rate"})}),n.jsx(Q,{path:"avatar",element:n.jsx(de,{name:"avatar"})}),n.jsx(Q,{path:"badge",element:n.jsx(de,{name:"badge"})}),n.jsx(Q,{path:"collapse",element:n.jsx(de,{name:"collapse"})}),n.jsx(Q,{path:"progress",element:n.jsx(de,{name:"progress"})}),n.jsx(Q,{path:"result",element:n.jsx(de,{name:"result"})}),n.jsx(Q,{path:"table",element:n.jsx(de,{name:"table"})}),n.jsx(Q,{path:"tag",element:n.jsx(de,{name:"tag"})}),n.jsx(Q,{path:"alert",element:n.jsx(de,{name:"alert"})}),n.jsx(Q,{path:"dialog",element:n.jsx(de,{name:"dialog"})}),n.jsx(Q,{path:"drawer",element:n.jsx(de,{name:"drawer"})}),n.jsx(Q,{path:"popconfirm",element:n.jsx(de,{name:"popconfirm"})}),n.jsx(Q,{path:"popover",element:n.jsx(de,{name:"popover"})}),n.jsx(Q,{path:"tooltip",element:n.jsx(de,{name:"tooltip"})}),n.jsx(Q,{path:"divider",element:n.jsx(de,{name:"divider"})})]})})]})}const C4="/pelement-react/assets/build-error-001-HBI716zv.jpg",_4="/pelement-react/assets/build-error-002-fg75_WyZ.jpg";function Fu(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错：Could not find a declaration file for module 'pelement-react'."}),`
`,n.jsx(e.p,{children:"引入pelement-react，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:C4,alt:"build-error-001"}),`
`,n.jsx(e.p,{children:"错误代码"}),`
`,n.jsx(e.p,{children:`example/pages/component/button/Button.tsx:2:24 - error TS7016: Could not find a declaration file for module 'pelement-react'. 'D:/work/pelement-react/node_modules/.pnpm/file+pelement-react-0.0.1-alpha.0.tgz/node_modules/pelement-react/dist/pelement-react.js' implicitly has an 'any' type.\r
There are types at 'D:/work/pelement-react/node_modules/pelement-react/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'pelement-react' library may need to update its package.json or typings.`}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"修改tsconfig.json文件，追加以下内容"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`"noImplicitAny": false,\r
"allowJs": true
`})}),`
`,n.jsx("img",{src:_4,alt:"build-error-002"})]})}function b4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Fu,{...t})}):Fu(t)}const N4="/pelement-react/assets/cannot-find-module-001-IO4IuqQz.jpg",k4="/pelement-react/assets/cannot-find-module-002-GS1tM54Y.jpg";function Ou(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错： Cannot find module '../../../packages/Button/index.zh-CN.mdx' or its corresponding type declarations."}),`
`,n.jsx(e.p,{children:"引入mdx，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:N4,alt:"cannot-find-module-001"}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"在src/vite-env.d.ts文件中添加"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`declare module '*.mdx' {\r
  const mdx: string;\r
  export default mdx;\r
}
`})}),`
`,n.jsx("img",{src:k4,alt:"cannot-find-module-002"})]})}function S4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ou,{...t})}):Ou(t)}function T4(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx(Z,{to:"build-error",children:"buile error"}),n.jsx(Z,{to:"cannot-find-module",children:"cannot-find-module"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsxs(ai,{children:[n.jsx(Q,{path:"build-error",element:n.jsx(b4,{})}),n.jsx(Q,{path:"cannot-find-module",element:n.jsx(S4,{})})]})})})]})}function E4(){return n.jsx(n.Fragment,{children:n.jsxs(ai,{children:[n.jsx(Q,{path:"/",element:n.jsx(Kl,{to:"/component/button"})}),n.jsx(Q,{path:"home",element:n.jsx(A0,{})}),n.jsx(Q,{path:"guide",element:n.jsx(Kl,{to:"changelog"})}),n.jsx(Q,{path:"guide/*",element:n.jsx(O0,{})}),n.jsx(Q,{path:"component",element:n.jsx(Kl,{to:"button"})}),n.jsx(Q,{path:"component/*",element:n.jsx(w4,{})}),n.jsx(Q,{path:"blog",element:n.jsx(Kl,{to:"build-error"})}),n.jsx(Q,{path:"blog/*",element:n.jsx(T4,{})})]})})}function B4(){return n.jsx(n.Fragment,{children:n.jsx("header",{className:"navbar",children:n.jsx("div",{className:"navbar-wrapper",children:n.jsxs("div",{className:"header-container",children:[n.jsx("div",{className:"logo-container",children:n.jsxs(Z,{to:"/home",children:[n.jsx("img",{src:fp,alt:"pelement-react"}),"pelement-react"]})}),n.jsxs("div",{className:"content",children:[n.jsxs("nav",{className:"navbar-menu menu",children:[n.jsx(Z,{className:"link-item link is-menu-link",to:"guide",children:"指南"}),n.jsx(Z,{className:"link-item link is-menu-link",to:"component",children:"组件"}),n.jsx(Z,{className:"link-item link is-menu-link",to:"blog",children:"博客"})]}),n.jsx("div",{className:"social-links",children:n.jsx("a",{href:"https://github.com/pelement-react/pelement-react",title:"GitHub",target:"_blank",rel:"noreferrer noopener",className:"social-link",children:n.jsx("i",{className:"el-icon",style:{fontSize:"24px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-6c8d2bba":"",children:n.jsx("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})})})})})]})]})})})})}function R4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"App",children:[n.jsx(B4,{}),n.jsx(E4,{})]})})}Ji.createRoot(document.getElementById("root")).render(n.jsx(Yu.StrictMode,{children:n.jsx(E0,{children:n.jsx(R4,{})})}));
