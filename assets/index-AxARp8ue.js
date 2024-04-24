function om(t,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in t)){const s=Object.getOwnPropertyDescriptor(i,l);s&&Object.defineProperty(t,l,s.get?s:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();function Iu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fu={exports:{}},Wl={},zu={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),am=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),dm=Symbol.for("react.strict_mode"),um=Symbol.for("react.profiler"),hm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),mm=Symbol.for("react.suspense"),xm=Symbol.for("react.memo"),gm=Symbol.for("react.lazy"),Nc=Symbol.iterator;function jm(t){return t===null||typeof t!="object"?null:(t=Nc&&t[Nc]||t["@@iterator"],typeof t=="function"?t:null)}var Ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$u=Object.assign,Hu={};function yr(t,e,r){this.props=t,this.context=e,this.refs=Hu,this.updater=r||Ou}yr.prototype.isReactComponent={};yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uu(){}Uu.prototype=yr.prototype;function Jo(t,e,r){this.props=t,this.context=e,this.refs=Hu,this.updater=r||Ou}var qo=Jo.prototype=new Uu;qo.constructor=Jo;$u(qo,yr.prototype);qo.isPureReactComponent=!0;var Ec=Array.isArray,Wu=Object.prototype.hasOwnProperty,ea={current:null},Vu={key:!0,ref:!0,__self:!0,__source:!0};function Xu(t,e,r){var i,l={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wu.call(e,i)&&!Vu.hasOwnProperty(i)&&(l[i]=e[i]);var a=arguments.length-2;if(a===1)l.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];l.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)l[i]===void 0&&(l[i]=a[i]);return{$$typeof:Ci,type:t,key:s,ref:o,props:l,_owner:ea.current}}function vm(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ta(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function ym(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Tc=/\/+/g;function _s(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ym(""+t.key):e.toString(36)}function el(t,e,r,i,l){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ci:case am:o=!0}}if(o)return o=t,l=l(o),t=i===""?"."+_s(o,0):i,Ec(l)?(r="",t!=null&&(r=t.replace(Tc,"$&/")+"/"),el(l,e,r,"",function(d){return d})):l!=null&&(ta(l)&&(l=vm(l,r+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Tc,"$&/")+"/")+t)),e.push(l)),1;if(o=0,i=i===""?".":i+":",Ec(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+_s(s,a);o+=el(s,e,r,c,l)}else if(c=jm(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+_s(s,a++),o+=el(s,e,r,c,l);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Di(t,e,r){if(t==null)return t;var i=[],l=0;return el(t,i,"","",function(s){return e.call(r,s,l++)}),i}function wm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},tl={transition:null},_m={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:tl,ReactCurrentOwner:ea};Q.Children={map:Di,forEach:function(t,e,r){Di(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Di(t,function(){e++}),e},toArray:function(t){return Di(t,function(e){return e})||[]},only:function(t){if(!ta(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=yr;Q.Fragment=cm;Q.Profiler=um;Q.PureComponent=Jo;Q.StrictMode=dm;Q.Suspense=mm;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;Q.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$u({},t.props),l=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ea.current),e.key!==void 0&&(l=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Wu.call(e,c)&&!Vu.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];i.children=a}return{$$typeof:Ci,type:t.type,key:l,ref:s,props:i,_owner:o}};Q.createContext=function(t){return t={$$typeof:fm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hm,_context:t},t.Consumer=t};Q.createElement=Xu;Q.createFactory=function(t){var e=Xu.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:pm,render:t}};Q.isValidElement=ta;Q.lazy=function(t){return{$$typeof:gm,_payload:{_status:-1,_result:t},_init:wm}};Q.memo=function(t,e){return{$$typeof:xm,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return Oe.current.useCallback(t,e)};Q.useContext=function(t){return Oe.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};Q.useEffect=function(t,e){return Oe.current.useEffect(t,e)};Q.useId=function(){return Oe.current.useId()};Q.useImperativeHandle=function(t,e,r){return Oe.current.useImperativeHandle(t,e,r)};Q.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return Oe.current.useMemo(t,e)};Q.useReducer=function(t,e,r){return Oe.current.useReducer(t,e,r)};Q.useRef=function(t){return Oe.current.useRef(t)};Q.useState=function(t){return Oe.current.useState(t)};Q.useSyncExternalStore=function(t,e,r){return Oe.current.useSyncExternalStore(t,e,r)};Q.useTransition=function(){return Oe.current.useTransition()};Q.version="18.2.0";zu.exports=Q;var u=zu.exports;const na=Iu(u),ra=om({__proto__:null,default:na},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=u,km=Symbol.for("react.element"),bm=Symbol.for("react.fragment"),Sm=Object.prototype.hasOwnProperty,Nm=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Em={key:!0,ref:!0,__self:!0,__source:!0};function Gu(t,e,r){var i,l={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Sm.call(e,i)&&!Em.hasOwnProperty(i)&&(l[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)l[i]===void 0&&(l[i]=e[i]);return{$$typeof:km,type:t,key:s,ref:o,props:l,_owner:Nm.current}}Wl.Fragment=bm;Wl.jsx=Gu;Wl.jsxs=Gu;Fu.exports=Wl;var n=Fu.exports,qs={},Qu={exports:{}},tt={},Ku={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(_,B){var P=_.length;_.push(B);e:for(;0<P;){var $=P-1>>>1,K=_[$];if(0<l(K,B))_[$]=B,_[P]=K,P=$;else break e}}function r(_){return _.length===0?null:_[0]}function i(_){if(_.length===0)return null;var B=_[0],P=_.pop();if(P!==B){_[0]=P;e:for(var $=0,K=_.length,Re=K>>>1;$<Re;){var rt=2*($+1)-1,ke=_[rt],ye=rt+1,jn=_[ye];if(0>l(ke,P))ye<K&&0>l(jn,ke)?(_[$]=jn,_[ye]=P,$=ye):(_[$]=ke,_[rt]=P,$=rt);else if(ye<K&&0>l(jn,P))_[$]=jn,_[ye]=P,$=ye;else break e}}return B}function l(_,B){var P=_.sortIndex-B.sortIndex;return P!==0?P:_.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],d=[],h=1,f=null,x=3,g=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(_){for(var B=r(d);B!==null;){if(B.callback===null)i(d);else if(B.startTime<=_)i(d),B.sortIndex=B.expirationTime,e(c,B);else break;B=r(d)}}function w(_){if(y=!1,j(_),!v)if(r(c)!==null)v=!0,W(C);else{var B=r(d);B!==null&&S(w,B.startTime-_)}}function C(_,B){v=!1,y&&(y=!1,m(L),L=-1),g=!0;var P=x;try{for(j(B),f=r(c);f!==null&&(!(f.expirationTime>B)||_&&!G());){var $=f.callback;if(typeof $=="function"){f.callback=null,x=f.priorityLevel;var K=$(f.expirationTime<=B);B=t.unstable_now(),typeof K=="function"?f.callback=K:f===r(c)&&i(c),j(B)}else i(c);f=r(c)}if(f!==null)var Re=!0;else{var rt=r(d);rt!==null&&S(w,rt.startTime-B),Re=!1}return Re}finally{f=null,x=P,g=!1}}var N=!1,E=null,L=-1,O=5,F=-1;function G(){return!(t.unstable_now()-F<O)}function q(){if(E!==null){var _=t.unstable_now();F=_;var B=!0;try{B=E(!0,_)}finally{B?ae():(N=!1,E=null)}}else N=!1}var ae;if(typeof p=="function")ae=function(){p(q)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,U=H.port2;H.port1.onmessage=q,ae=function(){U.postMessage(null)}}else ae=function(){k(q,0)};function W(_){E=_,N||(N=!0,ae())}function S(_,B){L=k(function(){_(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,W(C))},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(_){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var P=x;x=B;try{return _()}finally{x=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(_,B){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=x;x=_;try{return B()}finally{x=P}},t.unstable_scheduleCallback=function(_,B,P){var $=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,_){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,_={id:h++,callback:B,priorityLevel:_,startTime:P,expirationTime:K,sortIndex:-1},P>$?(_.sortIndex=P,e(d,_),r(c)===null&&_===r(d)&&(y?(m(L),L=-1):y=!0,S(w,P-$))):(_.sortIndex=K,e(c,_),v||g||(v=!0,W(C))),_},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(_){var B=x;return function(){var P=x;x=B;try{return _.apply(this,arguments)}finally{x=P}}}})(Yu);Ku.exports=Yu;var Tm=Ku.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=u,qe=Tm;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ju=new Set,Yr={};function Mn(t,e){dr(t,e),dr(t+"Capture",e)}function dr(t,e){for(Yr[t]=e,t=0;t<e.length;t++)Ju.add(e[t])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,Bm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bc={},Rc={};function Rm(t){return eo.call(Rc,t)?!0:eo.call(Bc,t)?!1:Bm.test(t)?Rc[t]=!0:(Bc[t]=!0,!1)}function Lm(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dm(t,e,r,i){if(e===null||typeof e>"u"||Lm(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,r,i,l,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function la(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ia,la);Be[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ia,la);Be[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ia,la);Be[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function sa(t,e,r,i){var l=Be.hasOwnProperty(e)?Be[e]:null;(l!==null?l.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dm(e,r,l,i)&&(r=null),i||l===null?Rm(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):l.mustUseProperty?t[l.propertyName]=r===null?l.type===3?!1:"":r:(e=l.attributeName,i=l.attributeNamespace,r===null?t.removeAttribute(e):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Ot=Zu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pi=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),oa=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),eh=Symbol.for("react.context"),aa=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),ca=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),th=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function Sr(t){return t===null||typeof t!="object"?null:(t=Lc&&t[Lc]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,Cs;function Pr(t){if(Cs===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Cs=e&&e[1]||""}return`
`+Cs+t}var ks=!1;function bs(t,e){if(!t||ks)return"";ks=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),s=i.stack.split(`
`),o=l.length-1,a=s.length-1;1<=o&&0<=a&&l[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==s[a]){var c=`
`+l[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{ks=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Pr(t):""}function Pm(t){switch(t.tag){case 5:return Pr(t.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return t=bs(t.type,!1),t;case 11:return t=bs(t.type.render,!1),t;case 1:return t=bs(t.type,!0),t;default:return""}}function io(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vn:return"Fragment";case Wn:return"Portal";case to:return"Profiler";case oa:return"StrictMode";case no:return"Suspense";case ro:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eh:return(t.displayName||"Context")+".Consumer";case qu:return(t._context.displayName||"Context")+".Provider";case aa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ca:return e=t.displayName||null,e!==null?e:io(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return io(t(e))}catch{}}return null}function Am(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return io(e);case 8:return e===oa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mm(t){var e=nh(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ai(t){t._valueTracker||(t._valueTracker=Mm(t))}function rh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=nh(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lo(t,e){var r=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Dc(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=cn(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ih(t,e){e=e.checked,e!=null&&sa(t,"checked",e,!1)}function so(t,e){ih(t,e);var r=cn(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oo(t,e.type,r):e.hasOwnProperty("defaultValue")&&oo(t,e.type,cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pc(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function oo(t,e,r){(e!=="number"||fl(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ar=Array.isArray;function rr(t,e,r,i){if(t=t.options,e){e={};for(var l=0;l<r.length;l++)e["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=e.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&i&&(t[r].defaultSelected=!0)}else{for(r=""+cn(r),e=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function ao(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ac(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(T(92));if(Ar(r)){if(1<r.length)throw Error(T(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:cn(r)}}function lh(t,e){var r=cn(e.value),i=cn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function Mc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function co(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mi,oh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,l){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,l)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mi=Mi||document.createElement("div"),Mi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(t){Im.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$r[e]=$r[t]})});function ah(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||$r.hasOwnProperty(t)&&$r[t]?(""+e).trim():e+"px"}function ch(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,l=ah(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,l):t[r]=l}}var Fm=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(t,e){if(e){if(Fm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function ho(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function da(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var po=null,ir=null,lr=null;function Ic(t){if(t=Si(t)){if(typeof po!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Kl(e),po(t.stateNode,t.type,e))}}function dh(t){ir?lr?lr.push(t):lr=[t]:ir=t}function uh(){if(ir){var t=ir,e=lr;if(lr=ir=null,Ic(t),e)for(t=0;t<e.length;t++)Ic(e[t])}}function hh(t,e){return t(e)}function fh(){}var Ss=!1;function ph(t,e,r){if(Ss)return t(e,r);Ss=!0;try{return hh(t,e,r)}finally{Ss=!1,(ir!==null||lr!==null)&&(fh(),uh())}}function Jr(t,e){var r=t.stateNode;if(r===null)return null;var i=Kl(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(T(231,e,typeof r));return r}var mo=!1;if(Mt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{mo=!1}function zm(t,e,r,i,l,s,o,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(h){this.onError(h)}}var Hr=!1,pl=null,ml=!1,xo=null,Om={onError:function(t){Hr=!0,pl=t}};function $m(t,e,r,i,l,s,o,a,c){Hr=!1,pl=null,zm.apply(Om,arguments)}function Hm(t,e,r,i,l,s,o,a,c){if($m.apply(this,arguments),Hr){if(Hr){var d=pl;Hr=!1,pl=null}else throw Error(T(198));ml||(ml=!0,xo=d)}}function In(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function mh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fc(t){if(In(t)!==t)throw Error(T(188))}function Um(t){var e=t.alternate;if(!e){if(e=In(t),e===null)throw Error(T(188));return e!==t?null:t}for(var r=t,i=e;;){var l=r.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){r=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===r)return Fc(l),t;if(s===i)return Fc(l),e;s=s.sibling}throw Error(T(188))}if(r.return!==i.return)r=l,i=s;else{for(var o=!1,a=l.child;a;){if(a===r){o=!0,r=l,i=s;break}if(a===i){o=!0,i=l,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,i=l;break}if(a===i){o=!0,i=s,r=l;break}a=a.sibling}if(!o)throw Error(T(189))}}if(r.alternate!==i)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?t:e}function xh(t){return t=Um(t),t!==null?gh(t):null}function gh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gh(t);if(e!==null)return e;t=t.sibling}return null}var jh=qe.unstable_scheduleCallback,zc=qe.unstable_cancelCallback,Wm=qe.unstable_shouldYield,Vm=qe.unstable_requestPaint,me=qe.unstable_now,Xm=qe.unstable_getCurrentPriorityLevel,ua=qe.unstable_ImmediatePriority,vh=qe.unstable_UserBlockingPriority,xl=qe.unstable_NormalPriority,Gm=qe.unstable_LowPriority,yh=qe.unstable_IdlePriority,Vl=null,Et=null;function Qm(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Zm,Km=Math.log,Ym=Math.LN2;function Zm(t){return t>>>=0,t===0?32:31-(Km(t)/Ym|0)|0}var Ii=64,Fi=4194304;function Mr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,l=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var a=o&~l;a!==0?i=Mr(a):(s&=o,s!==0&&(i=Mr(s)))}else o=r&~l,o!==0?i=Mr(o):s!==0&&(i=Mr(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&l)&&(l=i&-i,s=e&-e,l>=s||l===16&&(s&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-gt(e),l=1<<r,i|=t[r],e&=~l;return i}function Jm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qm(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gt(s),a=1<<o,c=l[o];c===-1?(!(a&r)||a&i)&&(l[o]=Jm(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function go(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wh(){var t=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),t}function Ns(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function ki(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=r}function ex(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var l=31-gt(r),s=1<<l;e[l]=0,i[l]=-1,t[l]=-1,r&=~s}}function ha(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-gt(r),l=1<<i;l&e|t[i]&e&&(t[i]|=e),r&=~l}}var J=0;function _h(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ch,fa,kh,bh,Sh,jo=!1,zi=[],qt=null,en=null,tn=null,qr=new Map,ei=new Map,Gt=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oc(t,e){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":qr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(e.pointerId)}}function Er(t,e,r,i,l,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},e!==null&&(e=Si(e),e!==null&&fa(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function nx(t,e,r,i,l){switch(e){case"focusin":return qt=Er(qt,t,e,r,i,l),!0;case"dragenter":return en=Er(en,t,e,r,i,l),!0;case"mouseover":return tn=Er(tn,t,e,r,i,l),!0;case"pointerover":var s=l.pointerId;return qr.set(s,Er(qr.get(s)||null,t,e,r,i,l)),!0;case"gotpointercapture":return s=l.pointerId,ei.set(s,Er(ei.get(s)||null,t,e,r,i,l)),!0}return!1}function Nh(t){var e=_n(t.target);if(e!==null){var r=In(e);if(r!==null){if(e=r.tag,e===13){if(e=mh(r),e!==null){t.blockedOn=e,Sh(t.priority,function(){kh(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=vo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);fo=i,r.target.dispatchEvent(i),fo=null}else return e=Si(r),e!==null&&fa(e),t.blockedOn=r,!1;e.shift()}return!0}function $c(t,e,r){nl(t)&&r.delete(e)}function rx(){jo=!1,qt!==null&&nl(qt)&&(qt=null),en!==null&&nl(en)&&(en=null),tn!==null&&nl(tn)&&(tn=null),qr.forEach($c),ei.forEach($c)}function Tr(t,e){t.blockedOn===e&&(t.blockedOn=null,jo||(jo=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,rx)))}function ti(t){function e(l){return Tr(l,t)}if(0<zi.length){Tr(zi[0],t);for(var r=1;r<zi.length;r++){var i=zi[r];i.blockedOn===t&&(i.blockedOn=null)}}for(qt!==null&&Tr(qt,t),en!==null&&Tr(en,t),tn!==null&&Tr(tn,t),qr.forEach(e),ei.forEach(e),r=0;r<Gt.length;r++)i=Gt[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gt.length&&(r=Gt[0],r.blockedOn===null);)Nh(r),r.blockedOn===null&&Gt.shift()}var sr=Ot.ReactCurrentBatchConfig,jl=!0;function ix(t,e,r,i){var l=J,s=sr.transition;sr.transition=null;try{J=1,pa(t,e,r,i)}finally{J=l,sr.transition=s}}function lx(t,e,r,i){var l=J,s=sr.transition;sr.transition=null;try{J=4,pa(t,e,r,i)}finally{J=l,sr.transition=s}}function pa(t,e,r,i){if(jl){var l=vo(t,e,r,i);if(l===null)Is(t,e,i,vl,r),Oc(t,i);else if(nx(l,t,e,r,i))i.stopPropagation();else if(Oc(t,i),e&4&&-1<tx.indexOf(t)){for(;l!==null;){var s=Si(l);if(s!==null&&Ch(s),s=vo(t,e,r,i),s===null&&Is(t,e,i,vl,r),s===l)break;l=s}l!==null&&i.stopPropagation()}else Is(t,e,i,null,r)}}var vl=null;function vo(t,e,r,i){if(vl=null,t=da(i),t=_n(t),t!==null)if(e=In(t),e===null)t=null;else if(r=e.tag,r===13){if(t=mh(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Eh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xm()){case ua:return 1;case vh:return 4;case xl:case Gm:return 16;case yh:return 536870912;default:return 16}default:return 16}}var Kt=null,ma=null,rl=null;function Th(){if(rl)return rl;var t,e=ma,r=e.length,i,l="value"in Kt?Kt.value:Kt.textContent,s=l.length;for(t=0;t<r&&e[t]===l[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===l[s-i];i++);return rl=l.slice(t,1<i?1-i:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oi(){return!0}function Hc(){return!1}function nt(t){function e(r,i,l,s,o){this._reactName=r,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oi:Hc,this.isPropagationStopped=Hc,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),e}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=nt(wr),bi=ue({},wr,{view:0,detail:0}),sx=nt(bi),Es,Ts,Br,Xl=ue({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Br&&(Br&&t.type==="mousemove"?(Es=t.screenX-Br.screenX,Ts=t.screenY-Br.screenY):Ts=Es=0,Br=t),Es)},movementY:function(t){return"movementY"in t?t.movementY:Ts}}),Uc=nt(Xl),ox=ue({},Xl,{dataTransfer:0}),ax=nt(ox),cx=ue({},bi,{relatedTarget:0}),Bs=nt(cx),dx=ue({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=nt(dx),hx=ue({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=nt(hx),px=ue({},wr,{data:0}),Wc=nt(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gx[t])?!!e[t]:!1}function ga(){return jx}var vx=ue({},bi,{key:function(t){if(t.key){var e=mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yx=nt(vx),wx=ue({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=nt(wx),_x=ue({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),Cx=nt(_x),kx=ue({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=nt(kx),Sx=ue({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=nt(Sx),Ex=[9,13,27,32],ja=Mt&&"CompositionEvent"in window,Ur=null;Mt&&"documentMode"in document&&(Ur=document.documentMode);var Tx=Mt&&"TextEvent"in window&&!Ur,Bh=Mt&&(!ja||Ur&&8<Ur&&11>=Ur),Xc=" ",Gc=!1;function Rh(t,e){switch(t){case"keyup":return Ex.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xn=!1;function Bx(t,e){switch(t){case"compositionend":return Lh(e);case"keypress":return e.which!==32?null:(Gc=!0,Xc);case"textInput":return t=e.data,t===Xc&&Gc?null:t;default:return null}}function Rx(t,e){if(Xn)return t==="compositionend"||!ja&&Rh(t,e)?(t=Th(),rl=ma=Kt=null,Xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bh&&e.locale!=="ko"?null:e.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Lx[t.type]:e==="textarea"}function Dh(t,e,r,i){dh(i),e=yl(e,"onChange"),0<e.length&&(r=new xa("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var Wr=null,ni=null;function Dx(t){Wh(t,0)}function Gl(t){var e=Kn(t);if(rh(e))return t}function Px(t,e){if(t==="change")return e}var Ph=!1;if(Mt){var Rs;if(Mt){var Ls="oninput"in document;if(!Ls){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),Ls=typeof Kc.oninput=="function"}Rs=Ls}else Rs=!1;Ph=Rs&&(!document.documentMode||9<document.documentMode)}function Yc(){Wr&&(Wr.detachEvent("onpropertychange",Ah),ni=Wr=null)}function Ah(t){if(t.propertyName==="value"&&Gl(ni)){var e=[];Dh(e,ni,t,da(t)),ph(Dx,e)}}function Ax(t,e,r){t==="focusin"?(Yc(),Wr=e,ni=r,Wr.attachEvent("onpropertychange",Ah)):t==="focusout"&&Yc()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(ni)}function Ix(t,e){if(t==="click")return Gl(e)}function Fx(t,e){if(t==="input"||t==="change")return Gl(e)}function zx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:zx;function ri(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var l=r[i];if(!eo.call(e,l)||!yt(t[l],e[l]))return!1}return!0}function Zc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jc(t,e){var r=Zc(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zc(r)}}function Mh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ih(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=fl(t.document)}return e}function va(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ox(t){var e=Ih(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Mh(r.ownerDocument.documentElement,r)){if(i!==null&&va(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=r.textContent.length,s=Math.min(i.start,l);i=i.end===void 0?s:Math.min(i.end,l),!t.extend&&s>i&&(l=i,i=s,s=l),l=Jc(r,s);var o=Jc(r,i);l&&o&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=Mt&&"documentMode"in document&&11>=document.documentMode,Gn=null,yo=null,Vr=null,wo=!1;function qc(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wo||Gn==null||Gn!==fl(i)||(i=Gn,"selectionStart"in i&&va(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vr&&ri(Vr,i)||(Vr=i,i=yl(yo,"onSelect"),0<i.length&&(e=new xa("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Gn)))}function $i(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Qn={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},Ds={},Fh={};Mt&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Ql(t){if(Ds[t])return Ds[t];if(!Qn[t])return t;var e=Qn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Fh)return Ds[t]=e[r];return t}var zh=Ql("animationend"),Oh=Ql("animationiteration"),$h=Ql("animationstart"),Hh=Ql("transitionend"),Uh=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(t,e){Uh.set(t,e),Mn(e,[t])}for(var Ps=0;Ps<ed.length;Ps++){var As=ed[Ps],Hx=As.toLowerCase(),Ux=As[0].toUpperCase()+As.slice(1);pn(Hx,"on"+Ux)}pn(zh,"onAnimationEnd");pn(Oh,"onAnimationIteration");pn($h,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Hh,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function td(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,Hm(i,e,void 0,t),t.currentTarget=null}function Wh(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],l=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==s&&l.isPropagationStopped())break e;td(l,a,d),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,d=a.currentTarget,a=a.listener,c!==s&&l.isPropagationStopped())break e;td(l,a,d),s=c}}}if(ml)throw t=xo,ml=!1,xo=null,t}function ne(t,e){var r=e[So];r===void 0&&(r=e[So]=new Set);var i=t+"__bubble";r.has(i)||(Vh(e,t,2,!1),r.add(i))}function Ms(t,e,r){var i=0;e&&(i|=4),Vh(r,t,i,e)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function ii(t){if(!t[Hi]){t[Hi]=!0,Ju.forEach(function(r){r!=="selectionchange"&&(Wx.has(r)||Ms(r,!1,t),Ms(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hi]||(e[Hi]=!0,Ms("selectionchange",!1,e))}}function Vh(t,e,r,i){switch(Eh(e)){case 1:var l=ix;break;case 4:l=lx;break;default:l=pa}r=l.bind(null,e,r,t),l=void 0,!mo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,r,{capture:!0,passive:l}):t.addEventListener(e,r,!0):l!==void 0?t.addEventListener(e,r,{passive:l}):t.addEventListener(e,r,!1)}function Is(t,e,r,i,l){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;a!==null;){if(o=_n(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ph(function(){var d=s,h=da(r),f=[];e:{var x=Uh.get(t);if(x!==void 0){var g=xa,v=t;switch(t){case"keypress":if(il(r)===0)break e;case"keydown":case"keyup":g=yx;break;case"focusin":v="focus",g=Bs;break;case"focusout":v="blur",g=Bs;break;case"beforeblur":case"afterblur":g=Bs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cx;break;case zh:case Oh:case $h:g=ux;break;case Hh:g=bx;break;case"scroll":g=sx;break;case"wheel":g=Nx;break;case"copy":case"cut":case"paste":g=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vc}var y=(e&4)!==0,k=!y&&t==="scroll",m=y?x!==null?x+"Capture":null:x;y=[];for(var p=d,j;p!==null;){j=p;var w=j.stateNode;if(j.tag===5&&w!==null&&(j=w,m!==null&&(w=Jr(p,m),w!=null&&y.push(li(p,w,j)))),k)break;p=p.return}0<y.length&&(x=new g(x,v,null,r,h),f.push({event:x,listeners:y}))}}if(!(e&7)){e:{if(x=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",x&&r!==fo&&(v=r.relatedTarget||r.fromElement)&&(_n(v)||v[It]))break e;if((g||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=d,v=v?_n(v):null,v!==null&&(k=In(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(y=Uc,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vc,w="onPointerLeave",m="onPointerEnter",p="pointer"),k=g==null?x:Kn(g),j=v==null?x:Kn(v),x=new y(w,p+"leave",g,r,h),x.target=k,x.relatedTarget=j,w=null,_n(h)===d&&(y=new y(m,p+"enter",v,r,h),y.target=j,y.relatedTarget=k,w=y),k=w,g&&v)t:{for(y=g,m=v,p=0,j=y;j;j=Hn(j))p++;for(j=0,w=m;w;w=Hn(w))j++;for(;0<p-j;)y=Hn(y),p--;for(;0<j-p;)m=Hn(m),j--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Hn(y),m=Hn(m)}y=null}else y=null;g!==null&&nd(f,x,g,y,!1),v!==null&&k!==null&&nd(f,k,v,y,!0)}}e:{if(x=d?Kn(d):window,g=x.nodeName&&x.nodeName.toLowerCase(),g==="select"||g==="input"&&x.type==="file")var C=Px;else if(Qc(x))if(Ph)C=Fx;else{C=Mx;var N=Ax}else(g=x.nodeName)&&g.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(C=Ix);if(C&&(C=C(t,d))){Dh(f,C,r,h);break e}N&&N(t,x,d),t==="focusout"&&(N=x._wrapperState)&&N.controlled&&x.type==="number"&&oo(x,"number",x.value)}switch(N=d?Kn(d):window,t){case"focusin":(Qc(N)||N.contentEditable==="true")&&(Gn=N,yo=d,Vr=null);break;case"focusout":Vr=yo=Gn=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,qc(f,r,h);break;case"selectionchange":if($x)break;case"keydown":case"keyup":qc(f,r,h)}var E;if(ja)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Xn?Rh(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Bh&&r.locale!=="ko"&&(Xn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Xn&&(E=Th()):(Kt=h,ma="value"in Kt?Kt.value:Kt.textContent,Xn=!0)),N=yl(d,L),0<N.length&&(L=new Wc(L,t,null,r,h),f.push({event:L,listeners:N}),E?L.data=E:(E=Lh(r),E!==null&&(L.data=E)))),(E=Tx?Bx(t,r):Rx(t,r))&&(d=yl(d,"onBeforeInput"),0<d.length&&(h=new Wc("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:d}),h.data=E))}Wh(f,e)})}function li(t,e,r){return{instance:t,listener:e,currentTarget:r}}function yl(t,e){for(var r=e+"Capture",i=[];t!==null;){var l=t,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Jr(t,r),s!=null&&i.unshift(li(t,s,l)),s=Jr(t,e),s!=null&&i.push(li(t,s,l))),t=t.return}return i}function Hn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nd(t,e,r,i,l){for(var s=e._reactName,o=[];r!==null&&r!==i;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&d!==null&&(a=d,l?(c=Jr(r,s),c!=null&&o.unshift(li(r,c,a))):l||(c=Jr(r,s),c!=null&&o.push(li(r,c,a)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Vx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function rd(t){return(typeof t=="string"?t:""+t).replace(Vx,`
`).replace(Xx,"")}function Ui(t,e,r){if(e=rd(e),rd(t)!==e&&r)throw Error(T(425))}function wl(){}var _o=null,Co=null;function ko(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(t){return id.resolve(null).then(t).catch(Kx)}:bo;function Kx(t){setTimeout(function(){throw t})}function Fs(t,e){var r=e,i=0;do{var l=r.nextSibling;if(t.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(i===0){t.removeChild(l),ti(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=l}while(r);ti(e)}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var _r=Math.random().toString(36).slice(2),bt="__reactFiber$"+_r,si="__reactProps$"+_r,It="__reactContainer$"+_r,So="__reactEvents$"+_r,Yx="__reactListeners$"+_r,Zx="__reactHandles$"+_r;function _n(t){var e=t[bt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[It]||r[bt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=ld(t);t!==null;){if(r=t[bt])return r;t=ld(t)}return e}t=r,r=t.parentNode}return null}function Si(t){return t=t[bt]||t[It],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Kl(t){return t[si]||null}var No=[],Yn=-1;function mn(t){return{current:t}}function ie(t){0>Yn||(t.current=No[Yn],No[Yn]=null,Yn--)}function ee(t,e){Yn++,No[Yn]=t.current,t.current=e}var dn={},Me=mn(dn),We=mn(!1),Tn=dn;function ur(t,e){var r=t.type.contextTypes;if(!r)return dn;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in r)l[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=l),l}function Ve(t){return t=t.childContextTypes,t!=null}function _l(){ie(We),ie(Me)}function sd(t,e,r){if(Me.current!==dn)throw Error(T(168));ee(Me,e),ee(We,r)}function Xh(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var l in i)if(!(l in e))throw Error(T(108,Am(t)||"Unknown",l));return ue({},r,i)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dn,Tn=Me.current,ee(Me,t),ee(We,We.current),!0}function od(t,e,r){var i=t.stateNode;if(!i)throw Error(T(169));r?(t=Xh(t,e,Tn),i.__reactInternalMemoizedMergedChildContext=t,ie(We),ie(Me),ee(Me,t)):ie(We),ee(We,r)}var Lt=null,Yl=!1,zs=!1;function Gh(t){Lt===null?Lt=[t]:Lt.push(t)}function Jx(t){Yl=!0,Gh(t)}function xn(){if(!zs&&Lt!==null){zs=!0;var t=0,e=J;try{var r=Lt;for(J=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}Lt=null,Yl=!1}catch(l){throw Lt!==null&&(Lt=Lt.slice(t+1)),jh(ua,xn),l}finally{J=e,zs=!1}}return null}var Zn=[],Jn=0,kl=null,bl=0,it=[],lt=0,Bn=null,Dt=1,Pt="";function yn(t,e){Zn[Jn++]=bl,Zn[Jn++]=kl,kl=t,bl=e}function Qh(t,e,r){it[lt++]=Dt,it[lt++]=Pt,it[lt++]=Bn,Bn=t;var i=Dt;t=Pt;var l=32-gt(i)-1;i&=~(1<<l),r+=1;var s=32-gt(e)+l;if(30<s){var o=l-l%5;s=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Dt=1<<32-gt(e)+l|r<<l|i,Pt=s+t}else Dt=1<<s|r<<l|i,Pt=t}function ya(t){t.return!==null&&(yn(t,1),Qh(t,1,0))}function wa(t){for(;t===kl;)kl=Zn[--Jn],Zn[Jn]=null,bl=Zn[--Jn],Zn[Jn]=null;for(;t===Bn;)Bn=it[--lt],it[lt]=null,Pt=it[--lt],it[lt]=null,Dt=it[--lt],it[lt]=null}var Ze=null,Ye=null,oe=!1,mt=null;function Kh(t,e){var r=st(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function ad(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Ye=nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Bn!==null?{id:Dt,overflow:Pt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=st(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ze=t,Ye=null,!0):!1;default:return!1}}function Eo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function To(t){if(oe){var e=Ye;if(e){var r=e;if(!ad(t,e)){if(Eo(t))throw Error(T(418));e=nn(r.nextSibling);var i=Ze;e&&ad(t,e)?Kh(i,r):(t.flags=t.flags&-4097|2,oe=!1,Ze=t)}}else{if(Eo(t))throw Error(T(418));t.flags=t.flags&-4097|2,oe=!1,Ze=t}}}function cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function Wi(t){if(t!==Ze)return!1;if(!oe)return cd(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ko(t.type,t.memoizedProps)),e&&(e=Ye)){if(Eo(t))throw Yh(),Error(T(418));for(;e;)Kh(t,e),e=nn(e.nextSibling)}if(cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ye=nn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ye=null}}else Ye=Ze?nn(t.stateNode.nextSibling):null;return!0}function Yh(){for(var t=Ye;t;)t=nn(t.nextSibling)}function hr(){Ye=Ze=null,oe=!1}function _a(t){mt===null?mt=[t]:mt.push(t)}var qx=Ot.ReactCurrentBatchConfig;function ft(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var Sl=mn(null),Nl=null,qn=null,Ca=null;function ka(){Ca=qn=Nl=null}function ba(t){var e=Sl.current;ie(Sl),t._currentValue=e}function Bo(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function or(t,e){Nl=t,Ca=qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(Ca!==t)if(t={context:t,memoizedValue:e,next:null},qn===null){if(Nl===null)throw Error(T(308));qn=t,Nl.dependencies={lanes:0,firstContext:t}}else qn=qn.next=t;return e}var Cn=null;function Sa(t){Cn===null?Cn=[t]:Cn.push(t)}function Zh(t,e,r,i){var l=e.interleaved;return l===null?(r.next=r,Sa(e)):(r.next=l.next,l.next=r),e.interleaved=r,Ft(t,i)}function Ft(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Xt=!1;function Na(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rn(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Y&2){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,Ft(t,r)}return l=i.interleaved,l===null?(e.next=e,Sa(i)):(e.next=l.next,l.next=e),i.interleaved=e,Ft(t,r)}function ll(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,ha(t,r)}}function dd(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var l=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?l=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?l=s=e:s=s.next=e}else l=s=e;r={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function El(t,e,r,i){var l=t.updateQueue;Xt=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var c=a,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=c))}if(s!==null){var f=l.baseState;o=0,h=d=c=null,a=s;do{var x=a.lane,g=a.eventTime;if((i&x)===x){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(x=e,g=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,x);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,x=typeof v=="function"?v.call(g,f,x):v,x==null)break e;f=ue({},f,x);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=l.effects,x===null?l.effects=[a]:x.push(a))}else g={eventTime:g,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=g,c=f):h=h.next=g,o|=x;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;x=a,a=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);if(h===null&&(c=f),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=h,e=l.shared.interleaved,e!==null){l=e;do o|=l.lane,l=l.next;while(l!==e)}else s===null&&(l.shared.lanes=0);Ln|=o,t.lanes=o,t.memoizedState=f}}function ud(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],l=i.callback;if(l!==null){if(i.callback=null,i=r,typeof l!="function")throw Error(T(191,l));l.call(i)}}}var qh=new Zu.Component().refs;function Ro(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:ue({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Zl={isMounted:function(t){return(t=t._reactInternals)?In(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Fe(),l=sn(t),s=At(i,l);s.payload=e,r!=null&&(s.callback=r),e=rn(t,s,l),e!==null&&(jt(e,t,l,i),ll(e,t,l))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Fe(),l=sn(t),s=At(i,l);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=rn(t,s,l),e!==null&&(jt(e,t,l,i),ll(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Fe(),i=sn(t),l=At(r,i);l.tag=2,e!=null&&(l.callback=e),e=rn(t,l,i),e!==null&&(jt(e,t,i,r),ll(e,t,i))}};function hd(t,e,r,i,l,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ri(r,i)||!ri(l,s):!0}function ef(t,e,r){var i=!1,l=dn,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(l=Ve(e)?Tn:Me.current,i=e.contextTypes,s=(i=i!=null)?ur(t,l):dn),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=s),e}function fd(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Lo(t,e,r,i){var l=t.stateNode;l.props=r,l.state=t.memoizedState,l.refs=qh,Na(t);var s=e.contextType;typeof s=="object"&&s!==null?l.context=at(s):(s=Ve(e)?Tn:Me.current,l.context=ur(t,s)),l.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ro(t,e,s,r),l.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&Zl.enqueueReplaceState(l,l.state,null),El(t,r,l,i),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Rr(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var i=r.stateNode}if(!i)throw Error(T(147,t));var l=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=l.refs;a===qh&&(a=l.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,t))}return t}function Vi(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pd(t){var e=t._init;return e(t._payload)}function tf(t){function e(m,p){if(t){var j=m.deletions;j===null?(m.deletions=[p],m.flags|=16):j.push(p)}}function r(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function i(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function l(m,p){return m=on(m,p),m.index=0,m.sibling=null,m}function s(m,p,j){return m.index=j,t?(j=m.alternate,j!==null?(j=j.index,j<p?(m.flags|=2,p):j):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,j,w){return p===null||p.tag!==6?(p=Xs(j,m.mode,w),p.return=m,p):(p=l(p,j),p.return=m,p)}function c(m,p,j,w){var C=j.type;return C===Vn?h(m,p,j.props.children,w,j.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&pd(C)===p.type)?(w=l(p,j.props),w.ref=Rr(m,p,j),w.return=m,w):(w=ul(j.type,j.key,j.props,null,m.mode,w),w.ref=Rr(m,p,j),w.return=m,w)}function d(m,p,j,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==j.containerInfo||p.stateNode.implementation!==j.implementation?(p=Gs(j,m.mode,w),p.return=m,p):(p=l(p,j.children||[]),p.return=m,p)}function h(m,p,j,w,C){return p===null||p.tag!==7?(p=Sn(j,m.mode,w,C),p.return=m,p):(p=l(p,j),p.return=m,p)}function f(m,p,j){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xs(""+p,m.mode,j),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Pi:return j=ul(p.type,p.key,p.props,null,m.mode,j),j.ref=Rr(m,null,p),j.return=m,j;case Wn:return p=Gs(p,m.mode,j),p.return=m,p;case Vt:var w=p._init;return f(m,w(p._payload),j)}if(Ar(p)||Sr(p))return p=Sn(p,m.mode,j,null),p.return=m,p;Vi(m,p)}return null}function x(m,p,j,w){var C=p!==null?p.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return C!==null?null:a(m,p,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Pi:return j.key===C?c(m,p,j,w):null;case Wn:return j.key===C?d(m,p,j,w):null;case Vt:return C=j._init,x(m,p,C(j._payload),w)}if(Ar(j)||Sr(j))return C!==null?null:h(m,p,j,w,null);Vi(m,j)}return null}function g(m,p,j,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(j)||null,a(p,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pi:return m=m.get(w.key===null?j:w.key)||null,c(p,m,w,C);case Wn:return m=m.get(w.key===null?j:w.key)||null,d(p,m,w,C);case Vt:var N=w._init;return g(m,p,j,N(w._payload),C)}if(Ar(w)||Sr(w))return m=m.get(j)||null,h(p,m,w,C,null);Vi(p,w)}return null}function v(m,p,j,w){for(var C=null,N=null,E=p,L=p=0,O=null;E!==null&&L<j.length;L++){E.index>L?(O=E,E=null):O=E.sibling;var F=x(m,E,j[L],w);if(F===null){E===null&&(E=O);break}t&&E&&F.alternate===null&&e(m,E),p=s(F,p,L),N===null?C=F:N.sibling=F,N=F,E=O}if(L===j.length)return r(m,E),oe&&yn(m,L),C;if(E===null){for(;L<j.length;L++)E=f(m,j[L],w),E!==null&&(p=s(E,p,L),N===null?C=E:N.sibling=E,N=E);return oe&&yn(m,L),C}for(E=i(m,E);L<j.length;L++)O=g(E,m,L,j[L],w),O!==null&&(t&&O.alternate!==null&&E.delete(O.key===null?L:O.key),p=s(O,p,L),N===null?C=O:N.sibling=O,N=O);return t&&E.forEach(function(G){return e(m,G)}),oe&&yn(m,L),C}function y(m,p,j,w){var C=Sr(j);if(typeof C!="function")throw Error(T(150));if(j=C.call(j),j==null)throw Error(T(151));for(var N=C=null,E=p,L=p=0,O=null,F=j.next();E!==null&&!F.done;L++,F=j.next()){E.index>L?(O=E,E=null):O=E.sibling;var G=x(m,E,F.value,w);if(G===null){E===null&&(E=O);break}t&&E&&G.alternate===null&&e(m,E),p=s(G,p,L),N===null?C=G:N.sibling=G,N=G,E=O}if(F.done)return r(m,E),oe&&yn(m,L),C;if(E===null){for(;!F.done;L++,F=j.next())F=f(m,F.value,w),F!==null&&(p=s(F,p,L),N===null?C=F:N.sibling=F,N=F);return oe&&yn(m,L),C}for(E=i(m,E);!F.done;L++,F=j.next())F=g(E,m,L,F.value,w),F!==null&&(t&&F.alternate!==null&&E.delete(F.key===null?L:F.key),p=s(F,p,L),N===null?C=F:N.sibling=F,N=F);return t&&E.forEach(function(q){return e(m,q)}),oe&&yn(m,L),C}function k(m,p,j,w){if(typeof j=="object"&&j!==null&&j.type===Vn&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Pi:e:{for(var C=j.key,N=p;N!==null;){if(N.key===C){if(C=j.type,C===Vn){if(N.tag===7){r(m,N.sibling),p=l(N,j.props.children),p.return=m,m=p;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&pd(C)===N.type){r(m,N.sibling),p=l(N,j.props),p.ref=Rr(m,N,j),p.return=m,m=p;break e}r(m,N);break}else e(m,N);N=N.sibling}j.type===Vn?(p=Sn(j.props.children,m.mode,w,j.key),p.return=m,m=p):(w=ul(j.type,j.key,j.props,null,m.mode,w),w.ref=Rr(m,p,j),w.return=m,m=w)}return o(m);case Wn:e:{for(N=j.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===j.containerInfo&&p.stateNode.implementation===j.implementation){r(m,p.sibling),p=l(p,j.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else e(m,p);p=p.sibling}p=Gs(j,m.mode,w),p.return=m,m=p}return o(m);case Vt:return N=j._init,k(m,p,N(j._payload),w)}if(Ar(j))return v(m,p,j,w);if(Sr(j))return y(m,p,j,w);Vi(m,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,p!==null&&p.tag===6?(r(m,p.sibling),p=l(p,j),p.return=m,m=p):(r(m,p),p=Xs(j,m.mode,w),p.return=m,m=p),o(m)):r(m,p)}return k}var fr=tf(!0),nf=tf(!1),Ni={},Tt=mn(Ni),oi=mn(Ni),ai=mn(Ni);function kn(t){if(t===Ni)throw Error(T(174));return t}function Ea(t,e){switch(ee(ai,e),ee(oi,t),ee(Tt,Ni),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:co(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=co(e,t)}ie(Tt),ee(Tt,e)}function pr(){ie(Tt),ie(oi),ie(ai)}function rf(t){kn(ai.current);var e=kn(Tt.current),r=co(e,t.type);e!==r&&(ee(oi,t),ee(Tt,r))}function Ta(t){oi.current===t&&(ie(Tt),ie(oi))}var ce=mn(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Os=[];function Ba(){for(var t=0;t<Os.length;t++)Os[t]._workInProgressVersionPrimary=null;Os.length=0}var sl=Ot.ReactCurrentDispatcher,$s=Ot.ReactCurrentBatchConfig,Rn=0,de=null,je=null,_e=null,Bl=!1,Xr=!1,ci=0,eg=0;function De(){throw Error(T(321))}function Ra(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!yt(t[r],e[r]))return!1;return!0}function La(t,e,r,i,l,s){if(Rn=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?ig:lg,t=r(i,l),Xr){s=0;do{if(Xr=!1,ci=0,25<=s)throw Error(T(301));s+=1,_e=je=null,e.updateQueue=null,sl.current=sg,t=r(i,l)}while(Xr)}if(sl.current=Rl,e=je!==null&&je.next!==null,Rn=0,_e=je=de=null,Bl=!1,e)throw Error(T(300));return t}function Da(){var t=ci!==0;return ci=0,t}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?de.memoizedState=_e=t:_e=_e.next=t,_e}function ct(){if(je===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=_e===null?de.memoizedState:_e.next;if(e!==null)_e=e,je=t;else{if(t===null)throw Error(T(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},_e===null?de.memoizedState=_e=t:_e=_e.next=t}return _e}function di(t,e){return typeof e=="function"?e(t):e}function Hs(t){var e=ct(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=je,l=i.baseQueue,s=r.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}i.baseQueue=l=s,r.pending=null}if(l!==null){s=l.next,i=i.baseState;var a=o=null,c=null,d=s;do{var h=d.lane;if((Rn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=f,o=i):c=c.next=f,de.lanes|=h,Ln|=h}d=d.next}while(d!==null&&d!==s);c===null?o=i:c.next=a,yt(i,e.memoizedState)||(Ue=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,r.lastRenderedState=i}if(t=r.interleaved,t!==null){l=t;do s=l.lane,de.lanes|=s,Ln|=s,l=l.next;while(l!==t)}else l===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Us(t){var e=ct(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=r.dispatch,l=r.pending,s=e.memoizedState;if(l!==null){r.pending=null;var o=l=l.next;do s=t(s,o.action),o=o.next;while(o!==l);yt(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,i]}function lf(){}function sf(t,e){var r=de,i=ct(),l=e(),s=!yt(i.memoizedState,l);if(s&&(i.memoizedState=l,Ue=!0),i=i.queue,Pa(cf.bind(null,r,i,t),[t]),i.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,ui(9,af.bind(null,r,i,l,e),void 0,null),Ce===null)throw Error(T(349));Rn&30||of(r,e,l)}return l}function of(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function af(t,e,r,i){e.value=r,e.getSnapshot=i,df(e)&&uf(t)}function cf(t,e,r){return r(function(){df(e)&&uf(t)})}function df(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!yt(t,r)}catch{return!0}}function uf(t){var e=Ft(t,1);e!==null&&jt(e,t,1,-1)}function md(t){var e=kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:t},e.queue=t,t=t.dispatch=rg.bind(null,de,t),[e.memoizedState,t]}function ui(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function hf(){return ct().memoizedState}function ol(t,e,r,i){var l=kt();de.flags|=t,l.memoizedState=ui(1|e,r,void 0,i===void 0?null:i)}function Jl(t,e,r,i){var l=ct();i=i===void 0?null:i;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,i!==null&&Ra(i,o.deps)){l.memoizedState=ui(e,r,s,i);return}}de.flags|=t,l.memoizedState=ui(1|e,r,s,i)}function xd(t,e){return ol(8390656,8,t,e)}function Pa(t,e){return Jl(2048,8,t,e)}function ff(t,e){return Jl(4,2,t,e)}function pf(t,e){return Jl(4,4,t,e)}function mf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xf(t,e,r){return r=r!=null?r.concat([t]):null,Jl(4,4,mf.bind(null,e,t),r)}function Aa(){}function gf(t,e){var r=ct();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Ra(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function jf(t,e){var r=ct();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Ra(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function vf(t,e,r){return Rn&21?(yt(r,e)||(r=wh(),de.lanes|=r,Ln|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=r)}function tg(t,e){var r=J;J=r!==0&&4>r?r:4,t(!0);var i=$s.transition;$s.transition={};try{t(!1),e()}finally{J=r,$s.transition=i}}function yf(){return ct().memoizedState}function ng(t,e,r){var i=sn(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},wf(t))_f(e,r);else if(r=Zh(t,e,r,i),r!==null){var l=Fe();jt(r,t,i,l),Cf(r,e,i)}}function rg(t,e,r){var i=sn(t),l={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(wf(t))_f(e,l);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,r);if(l.hasEagerState=!0,l.eagerState=a,yt(a,o)){var c=e.interleaved;c===null?(l.next=l,Sa(e)):(l.next=c.next,c.next=l),e.interleaved=l;return}}catch{}finally{}r=Zh(t,e,l,i),r!==null&&(l=Fe(),jt(r,t,i,l),Cf(r,e,i))}}function wf(t){var e=t.alternate;return t===de||e!==null&&e===de}function _f(t,e){Xr=Bl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Cf(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,ha(t,r)}}var Rl={readContext:at,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},ig={readContext:at,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:xd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,ol(4194308,4,mf.bind(null,e,t),r)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var r=kt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=kt();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ng.bind(null,de,t),[i.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:md,useDebugValue:Aa,useDeferredValue:function(t){return kt().memoizedState=t},useTransition:function(){var t=md(!1),e=t[0];return t=tg.bind(null,t[1]),kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=de,l=kt();if(oe){if(r===void 0)throw Error(T(407));r=r()}else{if(r=e(),Ce===null)throw Error(T(349));Rn&30||of(i,e,r)}l.memoizedState=r;var s={value:r,getSnapshot:e};return l.queue=s,xd(cf.bind(null,i,s,t),[t]),i.flags|=2048,ui(9,af.bind(null,i,s,r,e),void 0,null),r},useId:function(){var t=kt(),e=Ce.identifierPrefix;if(oe){var r=Pt,i=Dt;r=(i&~(1<<32-gt(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=ci++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=eg++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lg={readContext:at,useCallback:gf,useContext:at,useEffect:Pa,useImperativeHandle:xf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:jf,useReducer:Hs,useRef:hf,useState:function(){return Hs(di)},useDebugValue:Aa,useDeferredValue:function(t){var e=ct();return vf(e,je.memoizedState,t)},useTransition:function(){var t=Hs(di)[0],e=ct().memoizedState;return[t,e]},useMutableSource:lf,useSyncExternalStore:sf,useId:yf,unstable_isNewReconciler:!1},sg={readContext:at,useCallback:gf,useContext:at,useEffect:Pa,useImperativeHandle:xf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:jf,useReducer:Us,useRef:hf,useState:function(){return Us(di)},useDebugValue:Aa,useDeferredValue:function(t){var e=ct();return je===null?e.memoizedState=t:vf(e,je.memoizedState,t)},useTransition:function(){var t=Us(di)[0],e=ct().memoizedState;return[t,e]},useMutableSource:lf,useSyncExternalStore:sf,useId:yf,unstable_isNewReconciler:!1};function mr(t,e){try{var r="",i=e;do r+=Pm(i),i=i.return;while(i);var l=r}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:l,digest:null}}function Ws(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Do(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var og=typeof WeakMap=="function"?WeakMap:Map;function kf(t,e,r){r=At(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Dl||(Dl=!0,Uo=i),Do(t,e)},r}function bf(t,e,r){r=At(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=e.value;r.payload=function(){return i(l)},r.callback=function(){Do(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Do(t,e),typeof i!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function gd(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new og;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(r)||(l.add(r),t=wg.bind(null,t,e,r),e.then(t,t))}function jd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vd(t,e,r,i,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=At(-1,1),e.tag=2,rn(r,e,1))),r.lanes|=1),t)}var ag=Ot.ReactCurrentOwner,Ue=!1;function Ie(t,e,r,i){e.child=t===null?nf(e,null,r,i):fr(e,t.child,r,i)}function yd(t,e,r,i,l){r=r.render;var s=e.ref;return or(e,l),i=La(t,e,r,i,s,l),r=Da(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,zt(t,e,l)):(oe&&r&&ya(e),e.flags|=1,Ie(t,e,i,l),e.child)}function wd(t,e,r,i,l){if(t===null){var s=r.type;return typeof s=="function"&&!Ua(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,Sf(t,e,s,i,l)):(t=ul(r.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&l)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:ri,r(o,i)&&t.ref===e.ref)return zt(t,e,l)}return e.flags|=1,t=on(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sf(t,e,r,i,l){if(t!==null){var s=t.memoizedProps;if(ri(s,i)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=i=s,(t.lanes&l)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,zt(t,e,l)}return Po(t,e,r,i,l)}function Nf(t,e,r){var i=e.pendingProps,l=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(tr,Qe),Qe|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(tr,Qe),Qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,ee(tr,Qe),Qe|=i}else s!==null?(i=s.baseLanes|r,e.memoizedState=null):i=r,ee(tr,Qe),Qe|=i;return Ie(t,e,l,r),e.child}function Ef(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Po(t,e,r,i,l){var s=Ve(r)?Tn:Me.current;return s=ur(e,s),or(e,l),r=La(t,e,r,i,s,l),i=Da(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,zt(t,e,l)):(oe&&i&&ya(e),e.flags|=1,Ie(t,e,r,l),e.child)}function _d(t,e,r,i,l){if(Ve(r)){var s=!0;Cl(e)}else s=!1;if(or(e,l),e.stateNode===null)al(t,e),ef(e,r,i),Lo(e,r,i,l),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=at(d):(d=Ve(r)?Tn:Me.current,d=ur(e,d));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==d)&&fd(e,o,i,d),Xt=!1;var x=e.memoizedState;o.state=x,El(e,i,o,l),c=e.memoizedState,a!==i||x!==c||We.current||Xt?(typeof h=="function"&&(Ro(e,r,h,i),c=e.memoizedState),(a=Xt||hd(e,r,a,i,x,c,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=d,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jh(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:ft(e.type,a),o.props=d,f=e.pendingProps,x=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=at(c):(c=Ve(r)?Tn:Me.current,c=ur(e,c));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||x!==c)&&fd(e,o,i,c),Xt=!1,x=e.memoizedState,o.state=x,El(e,i,o,l);var v=e.memoizedState;a!==f||x!==v||We.current||Xt?(typeof g=="function"&&(Ro(e,r,g,i),v=e.memoizedState),(d=Xt||hd(e,r,d,i,x,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),i=!1)}return Ao(t,e,r,i,s,l)}function Ao(t,e,r,i,l,s){Ef(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return l&&od(e,r,!1),zt(t,e,s);i=e.stateNode,ag.current=e;var a=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fr(e,t.child,null,s),e.child=fr(e,null,a,s)):Ie(t,e,a,s),e.memoizedState=i.state,l&&od(e,r,!0),e.child}function Tf(t){var e=t.stateNode;e.pendingContext?sd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sd(t,e.context,!1),Ea(t,e.containerInfo)}function Cd(t,e,r,i,l){return hr(),_a(l),e.flags|=256,Ie(t,e,r,i),e.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Io(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bf(t,e,r){var i=e.pendingProps,l=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(l&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),ee(ce,l&1),t===null)return To(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ts(o,i,0,null),t=Sn(t,i,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Io(r),e.memoizedState=Mo,t):Ma(e,o));if(l=t.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return cg(t,e,o,i,a,l,r);if(s){s=i.fallback,o=e.mode,l=t.child,a=l.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==l?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=on(l,c),i.subtreeFlags=l.subtreeFlags&14680064),a!==null?s=on(a,s):(s=Sn(s,o,r,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Io(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Mo,i}return s=t.child,t=s.sibling,i=on(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Ma(t,e){return e=ts({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xi(t,e,r,i){return i!==null&&_a(i),fr(e,t.child,null,r),t=Ma(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cg(t,e,r,i,l,s,o){if(r)return e.flags&256?(e.flags&=-257,i=Ws(Error(T(422))),Xi(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,l=e.mode,i=ts({mode:"visible",children:i.children},l,0,null),s=Sn(s,l,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fr(e,t.child,null,o),e.child.memoizedState=Io(o),e.memoizedState=Mo,s);if(!(e.mode&1))return Xi(t,e,o,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(T(419)),i=Ws(s,i,void 0),Xi(t,e,o,i)}if(a=(o&t.childLanes)!==0,Ue||a){if(i=Ce,i!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(i.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Ft(t,l),jt(i,t,l,-1))}return Ha(),i=Ws(Error(T(421))),Xi(t,e,o,i)}return l.data==="$?"?(e.flags|=128,e.child=t.child,e=_g.bind(null,t),l._reactRetry=e,null):(t=s.treeContext,Ye=nn(l.nextSibling),Ze=e,oe=!0,mt=null,t!==null&&(it[lt++]=Dt,it[lt++]=Pt,it[lt++]=Bn,Dt=t.id,Pt=t.overflow,Bn=e),e=Ma(e,i.children),e.flags|=4096,e)}function kd(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bo(t.return,e,r)}function Vs(t,e,r,i,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=l)}function Rf(t,e,r){var i=e.pendingProps,l=i.revealOrder,s=i.tail;if(Ie(t,e,i.children,r),i=ce.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kd(t,r,e);else if(t.tag===19)kd(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ee(ce,i),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(r=e.child,l=null;r!==null;)t=r.alternate,t!==null&&Tl(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=e.child,e.child=null):(l=r.sibling,r.sibling=null),Vs(e,!1,l,r,s);break;case"backwards":for(r=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Tl(t)===null){e.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}Vs(e,!0,r,null,s);break;case"together":Vs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Ln|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,r=on(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=on(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function dg(t,e,r){switch(e.tag){case 3:Tf(e),hr();break;case 5:rf(e);break;case 1:Ve(e.type)&&Cl(e);break;case 4:Ea(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,l=e.memoizedProps.value;ee(Sl,i._currentValue),i._currentValue=l;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ee(ce,ce.current&1),e.flags|=128,null):r&e.child.childLanes?Bf(t,e,r):(ee(ce,ce.current&1),t=zt(t,e,r),t!==null?t.sibling:null);ee(ce,ce.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Rf(t,e,r);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ee(ce,ce.current),i)break;return null;case 22:case 23:return e.lanes=0,Nf(t,e,r)}return zt(t,e,r)}var Lf,Fo,Df,Pf;Lf=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Fo=function(){};Df=function(t,e,r,i){var l=t.memoizedProps;if(l!==i){t=e.stateNode,kn(Tt.current);var s=null;switch(r){case"input":l=lo(t,l),i=lo(t,i),s=[];break;case"select":l=ue({},l,{value:void 0}),i=ue({},i,{value:void 0}),s=[];break;case"textarea":l=ao(t,l),i=ao(t,i),s=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}uo(r,i);var o;r=null;for(d in l)if(!i.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yr.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(a=l!=null?l[d]:void 0,i.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ne("scroll",t),s||a===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Pf=function(t,e,r,i){r!==i&&(e.flags|=4)};function Lr(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function ug(t,e,r){var i=e.pendingProps;switch(wa(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ve(e.type)&&_l(),Pe(e),null;case 3:return i=e.stateNode,pr(),ie(We),ie(Me),Ba(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mt!==null&&(Xo(mt),mt=null))),Fo(t,e),Pe(e),null;case 5:Ta(e);var l=kn(ai.current);if(r=e.type,t!==null&&e.stateNode!=null)Df(t,e,r,i,l),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(T(166));return Pe(e),null}if(t=kn(Tt.current),Wi(e)){i=e.stateNode,r=e.type;var s=e.memoizedProps;switch(i[bt]=e,i[si]=s,t=(e.mode&1)!==0,r){case"dialog":ne("cancel",i),ne("close",i);break;case"iframe":case"object":case"embed":ne("load",i);break;case"video":case"audio":for(l=0;l<Ir.length;l++)ne(Ir[l],i);break;case"source":ne("error",i);break;case"img":case"image":case"link":ne("error",i),ne("load",i);break;case"details":ne("toggle",i);break;case"input":Dc(i,s),ne("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ne("invalid",i);break;case"textarea":Ac(i,s),ne("invalid",i)}uo(r,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ui(i.textContent,a,t),l=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ui(i.textContent,a,t),l=["children",""+a]):Yr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",i)}switch(r){case"input":Ai(i),Pc(i,s,!0);break;case"textarea":Ai(i),Mc(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=l,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sh(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[bt]=e,t[si]=i,Lf(t,e,!1,!1),e.stateNode=t;e:{switch(o=ho(r,i),r){case"dialog":ne("cancel",t),ne("close",t),l=i;break;case"iframe":case"object":case"embed":ne("load",t),l=i;break;case"video":case"audio":for(l=0;l<Ir.length;l++)ne(Ir[l],t);l=i;break;case"source":ne("error",t),l=i;break;case"img":case"image":case"link":ne("error",t),ne("load",t),l=i;break;case"details":ne("toggle",t),l=i;break;case"input":Dc(t,i),l=lo(t,i),ne("invalid",t);break;case"option":l=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},l=ue({},i,{value:void 0}),ne("invalid",t);break;case"textarea":Ac(t,i),l=ao(t,i),ne("invalid",t);break;default:l=i}uo(r,l),a=l;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?ch(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&oh(t,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Zr(t,c):typeof c=="number"&&Zr(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ne("scroll",t):c!=null&&sa(t,s,c,o))}switch(r){case"input":Ai(t),Pc(t,i,!1);break;case"textarea":Ai(t),Mc(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cn(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?rr(t,!!i.multiple,s,!1):i.defaultValue!=null&&rr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=wl)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Pf(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(T(166));if(r=kn(ai.current),kn(Tt.current),Wi(e)){if(i=e.stateNode,r=e.memoizedProps,i[bt]=e,(s=i.nodeValue!==r)&&(t=Ze,t!==null))switch(t.tag){case 3:Ui(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ui(i.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[bt]=e,e.stateNode=i}return Pe(e),null;case 13:if(ie(ce),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Ye!==null&&e.mode&1&&!(e.flags&128))Yh(),hr(),e.flags|=98560,s=!1;else if(s=Wi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[bt]=e}else hr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else mt!==null&&(Xo(mt),mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?ve===0&&(ve=3):Ha())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return pr(),Fo(t,e),t===null&&ii(e.stateNode.containerInfo),Pe(e),null;case 10:return ba(e.type._context),Pe(e),null;case 17:return Ve(e.type)&&_l(),Pe(e),null;case 19:if(ie(ce),s=e.memoizedState,s===null)return Pe(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Lr(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,Lr(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)s=r,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ee(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>xr&&(e.flags|=128,i=!0,Lr(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Lr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Pe(e),null}else 2*me()-s.renderingStartTime>xr&&r!==1073741824&&(e.flags|=128,i=!0,Lr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,r=ce.current,ee(ce,i?r&1|2:r&1),e):(Pe(e),null);case 22:case 23:return $a(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Qe&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function hg(t,e){switch(wa(e),e.tag){case 1:return Ve(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pr(),ie(We),ie(Me),Ba(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ta(e),null;case 13:if(ie(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));hr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ce),null;case 4:return pr(),null;case 10:return ba(e.type._context),null;case 22:case 23:return $a(),null;case 24:return null;default:return null}}var Gi=!1,Ae=!1,fg=typeof WeakSet=="function"?WeakSet:Set,A=null;function er(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){he(t,e,i)}else r.current=null}function zo(t,e,r){try{r()}catch(i){he(t,e,i)}}var bd=!1;function pg(t,e){if(_o=jl,t=Ih(),va(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,c=-1,d=0,h=0,f=t,x=null;t:for(;;){for(var g;f!==r||l!==0&&f.nodeType!==3||(a=o+l),f!==s||i!==0&&f.nodeType!==3||(c=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)x=f,f=g;for(;;){if(f===t)break t;if(x===r&&++d===l&&(a=o),x===s&&++h===i&&(c=o),(g=f.nextSibling)!==null)break;f=x,x=f.parentNode}f=g}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Co={focusedElem:t,selectionRange:r},jl=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ft(e.type,y),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var j=e.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){he(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=bd,bd=!1,v}function Gr(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&t)===t){var s=l.destroy;l.destroy=void 0,s!==void 0&&zo(e,r,s)}l=l.next}while(l!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Oo(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Af(t){var e=t.alternate;e!==null&&(t.alternate=null,Af(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[si],delete e[So],delete e[Yx],delete e[Zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mf(t){return t.tag===5||t.tag===3||t.tag===4}function Sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $o(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for($o(t,e,r),t=t.sibling;t!==null;)$o(t,e,r),t=t.sibling}function Ho(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ho(t,e,r),t=t.sibling;t!==null;)Ho(t,e,r),t=t.sibling}var Se=null,pt=!1;function Wt(t,e,r){for(r=r.child;r!==null;)If(t,e,r),r=r.sibling}function If(t,e,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Vl,r)}catch{}switch(r.tag){case 5:Ae||er(r,e);case 6:var i=Se,l=pt;Se=null,Wt(t,e,r),Se=i,pt=l,Se!==null&&(pt?(t=Se,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(pt?(t=Se,r=r.stateNode,t.nodeType===8?Fs(t.parentNode,r):t.nodeType===1&&Fs(t,r),ti(t)):Fs(Se,r.stateNode));break;case 4:i=Se,l=pt,Se=r.stateNode.containerInfo,pt=!0,Wt(t,e,r),Se=i,pt=l;break;case 0:case 11:case 14:case 15:if(!Ae&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zo(r,e,o),l=l.next}while(l!==i)}Wt(t,e,r);break;case 1:if(!Ae&&(er(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(a){he(r,e,a)}Wt(t,e,r);break;case 21:Wt(t,e,r);break;case 22:r.mode&1?(Ae=(i=Ae)||r.memoizedState!==null,Wt(t,e,r),Ae=i):Wt(t,e,r);break;default:Wt(t,e,r)}}function Nd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new fg),e.forEach(function(i){var l=Cg.bind(null,t,i);r.has(i)||(r.add(i),i.then(l,l))})}}function ut(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var l=r[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,pt=!1;break e;case 3:Se=a.stateNode.containerInfo,pt=!0;break e;case 4:Se=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Se===null)throw Error(T(160));If(s,o,l),Se=null,pt=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){he(l,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ff(e,t),e=e.sibling}function Ff(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ut(e,t),Ct(t),i&4){try{Gr(3,t,t.return),ql(3,t)}catch(y){he(t,t.return,y)}try{Gr(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:ut(e,t),Ct(t),i&512&&r!==null&&er(r,r.return);break;case 5:if(ut(e,t),Ct(t),i&512&&r!==null&&er(r,r.return),t.flags&32){var l=t.stateNode;try{Zr(l,"")}catch(y){he(t,t.return,y)}}if(i&4&&(l=t.stateNode,l!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ih(l,s),ho(a,o);var d=ho(a,s);for(o=0;o<c.length;o+=2){var h=c[o],f=c[o+1];h==="style"?ch(l,f):h==="dangerouslySetInnerHTML"?oh(l,f):h==="children"?Zr(l,f):sa(l,h,f,d)}switch(a){case"input":so(l,s);break;case"textarea":lh(l,s);break;case"select":var x=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?rr(l,!!s.multiple,g,!1):x!==!!s.multiple&&(s.defaultValue!=null?rr(l,!!s.multiple,s.defaultValue,!0):rr(l,!!s.multiple,s.multiple?[]:"",!1))}l[si]=s}catch(y){he(t,t.return,y)}}break;case 6:if(ut(e,t),Ct(t),i&4){if(t.stateNode===null)throw Error(T(162));l=t.stateNode,s=t.memoizedProps;try{l.nodeValue=s}catch(y){he(t,t.return,y)}}break;case 3:if(ut(e,t),Ct(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ti(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:ut(e,t),Ct(t);break;case 13:ut(e,t),Ct(t),l=t.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(za=me())),i&4&&Nd(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(Ae=(d=Ae)||h,ut(e,t),Ae=d):ut(e,t),Ct(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(A=t,h=t.child;h!==null;){for(f=A=h;A!==null;){switch(x=A,g=x.child,x.tag){case 0:case 11:case 14:case 15:Gr(4,x,x.return);break;case 1:er(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){i=x,r=x.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){he(i,r,y)}}break;case 5:er(x,x.return);break;case 22:if(x.memoizedState!==null){Td(f);continue}}g!==null?(g.return=x,A=g):Td(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{l=f.stateNode,d?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=ah("display",o))}catch(y){he(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){he(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ut(e,t),Ct(t),i&4&&Nd(t);break;case 21:break;default:ut(e,t),Ct(t)}}function Ct(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Mf(r)){var i=r;break e}r=r.return}throw Error(T(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Zr(l,""),i.flags&=-33);var s=Sd(t);Ho(t,s,l);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sd(t);$o(t,a,o);break;default:throw Error(T(161))}}catch(c){he(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mg(t,e,r){A=t,zf(t)}function zf(t,e,r){for(var i=(t.mode&1)!==0;A!==null;){var l=A,s=l.child;if(l.tag===22&&i){var o=l.memoizedState!==null||Gi;if(!o){var a=l.alternate,c=a!==null&&a.memoizedState!==null||Ae;a=Gi;var d=Ae;if(Gi=o,(Ae=c)&&!d)for(A=l;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Bd(l):c!==null?(c.return=o,A=c):Bd(l);for(;s!==null;)A=s,zf(s),s=s.sibling;A=l,Gi=a,Ae=d}Ed(t)}else l.subtreeFlags&8772&&s!==null?(s.return=l,A=s):Ed(t)}}function Ed(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ae)if(r===null)i.componentDidMount();else{var l=e.elementType===e.type?r.memoizedProps:ft(e.type,r.memoizedProps);i.componentDidUpdate(l,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ud(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}ud(e,o,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ae||e.flags&512&&Oo(e)}catch(x){he(e,e.return,x)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function Td(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function Bd(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ql(4,e)}catch(c){he(e,r,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var l=e.return;try{i.componentDidMount()}catch(c){he(e,l,c)}}var s=e.return;try{Oo(e)}catch(c){he(e,s,c)}break;case 5:var o=e.return;try{Oo(e)}catch(c){he(e,o,c)}}}catch(c){he(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var xg=Math.ceil,Ll=Ot.ReactCurrentDispatcher,Ia=Ot.ReactCurrentOwner,ot=Ot.ReactCurrentBatchConfig,Y=0,Ce=null,xe=null,Te=0,Qe=0,tr=mn(0),ve=0,hi=null,Ln=0,es=0,Fa=0,Qr=null,He=null,za=0,xr=1/0,Rt=null,Dl=!1,Uo=null,ln=null,Qi=!1,Yt=null,Pl=0,Kr=0,Wo=null,cl=-1,dl=0;function Fe(){return Y&6?me():cl!==-1?cl:cl=me()}function sn(t){return t.mode&1?Y&2&&Te!==0?Te&-Te:qx.transition!==null?(dl===0&&(dl=wh()),dl):(t=J,t!==0||(t=window.event,t=t===void 0?16:Eh(t.type)),t):1}function jt(t,e,r,i){if(50<Kr)throw Kr=0,Wo=null,Error(T(185));ki(t,r,i),(!(Y&2)||t!==Ce)&&(t===Ce&&(!(Y&2)&&(es|=r),ve===4&&Qt(t,Te)),Xe(t,i),r===1&&Y===0&&!(e.mode&1)&&(xr=me()+500,Yl&&xn()))}function Xe(t,e){var r=t.callbackNode;qm(t,e);var i=gl(t,t===Ce?Te:0);if(i===0)r!==null&&zc(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&zc(r),e===1)t.tag===0?Jx(Rd.bind(null,t)):Gh(Rd.bind(null,t)),Qx(function(){!(Y&6)&&xn()}),r=null;else{switch(_h(i)){case 1:r=ua;break;case 4:r=vh;break;case 16:r=xl;break;case 536870912:r=yh;break;default:r=xl}r=Gf(r,Of.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Of(t,e){if(cl=-1,dl=0,Y&6)throw Error(T(327));var r=t.callbackNode;if(ar()&&t.callbackNode!==r)return null;var i=gl(t,t===Ce?Te:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var l=Y;Y|=2;var s=Hf();(Ce!==t||Te!==e)&&(Rt=null,xr=me()+500,bn(t,e));do try{vg();break}catch(a){$f(t,a)}while(!0);ka(),Ll.current=s,Y=l,xe!==null?e=0:(Ce=null,Te=0,e=ve)}if(e!==0){if(e===2&&(l=go(t),l!==0&&(i=l,e=Vo(t,l))),e===1)throw r=hi,bn(t,0),Qt(t,i),Xe(t,me()),r;if(e===6)Qt(t,i);else{if(l=t.current.alternate,!(i&30)&&!gg(l)&&(e=Al(t,i),e===2&&(s=go(t),s!==0&&(i=s,e=Vo(t,s))),e===1))throw r=hi,bn(t,0),Qt(t,i),Xe(t,me()),r;switch(t.finishedWork=l,t.finishedLanes=i,e){case 0:case 1:throw Error(T(345));case 2:wn(t,He,Rt);break;case 3:if(Qt(t,i),(i&130023424)===i&&(e=za+500-me(),10<e)){if(gl(t,0)!==0)break;if(l=t.suspendedLanes,(l&i)!==i){Fe(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=bo(wn.bind(null,t,He,Rt),e);break}wn(t,He,Rt);break;case 4:if(Qt(t,i),(i&4194240)===i)break;for(e=t.eventTimes,l=-1;0<i;){var o=31-gt(i);s=1<<o,o=e[o],o>l&&(l=o),i&=~s}if(i=l,i=me()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xg(i/1960))-i,10<i){t.timeoutHandle=bo(wn.bind(null,t,He,Rt),i);break}wn(t,He,Rt);break;case 5:wn(t,He,Rt);break;default:throw Error(T(329))}}}return Xe(t,me()),t.callbackNode===r?Of.bind(null,t):null}function Vo(t,e){var r=Qr;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Al(t,e),t!==2&&(e=He,He=r,e!==null&&Xo(e)),t}function Xo(t){He===null?He=t:He.push.apply(He,t)}function gg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var l=r[i],s=l.getSnapshot;l=l.value;try{if(!yt(s(),l))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~Fa,e&=~es,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-gt(e),i=1<<r;t[r]=-1,e&=~i}}function Rd(t){if(Y&6)throw Error(T(327));ar();var e=gl(t,0);if(!(e&1))return Xe(t,me()),null;var r=Al(t,e);if(t.tag!==0&&r===2){var i=go(t);i!==0&&(e=i,r=Vo(t,i))}if(r===1)throw r=hi,bn(t,0),Qt(t,e),Xe(t,me()),r;if(r===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t,He,Rt),Xe(t,me()),null}function Oa(t,e){var r=Y;Y|=1;try{return t(e)}finally{Y=r,Y===0&&(xr=me()+500,Yl&&xn())}}function Dn(t){Yt!==null&&Yt.tag===0&&!(Y&6)&&ar();var e=Y;Y|=1;var r=ot.transition,i=J;try{if(ot.transition=null,J=1,t)return t()}finally{J=i,ot.transition=r,Y=e,!(Y&6)&&xn()}}function $a(){Qe=tr.current,ie(tr)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Gx(r)),xe!==null)for(r=xe.return;r!==null;){var i=r;switch(wa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:pr(),ie(We),ie(Me),Ba();break;case 5:Ta(i);break;case 4:pr();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:ba(i.type._context);break;case 22:case 23:$a()}r=r.return}if(Ce=t,xe=t=on(t.current,null),Te=Qe=e,ve=0,hi=null,Fa=es=Ln=0,He=Qr=null,Cn!==null){for(e=0;e<Cn.length;e++)if(r=Cn[e],i=r.interleaved,i!==null){r.interleaved=null;var l=i.next,s=r.pending;if(s!==null){var o=s.next;s.next=l,i.next=o}r.pending=i}Cn=null}return t}function $f(t,e){do{var r=xe;try{if(ka(),sl.current=Rl,Bl){for(var i=de.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}Bl=!1}if(Rn=0,_e=je=de=null,Xr=!1,ci=0,Ia.current=null,r===null||r.return===null){ve=1,hi=e,xe=null;break}e:{var s=t,o=r.return,a=r,c=e;if(e=Te,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=jd(o);if(g!==null){g.flags&=-257,vd(g,o,a,s,e),g.mode&1&&gd(s,d,e),e=g,c=d;var v=e.updateQueue;if(v===null){var y=new Set;y.add(c),e.updateQueue=y}else v.add(c);break e}else{if(!(e&1)){gd(s,d,e),Ha();break e}c=Error(T(426))}}else if(oe&&a.mode&1){var k=jd(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),vd(k,o,a,s,e),_a(mr(c,a));break e}}s=c=mr(c,a),ve!==4&&(ve=2),Qr===null?Qr=[s]:Qr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=kf(s,c,e);dd(s,m);break e;case 1:a=c;var p=s.type,j=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ln===null||!ln.has(j)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=bf(s,a,e);dd(s,w);break e}}s=s.return}while(s!==null)}Wf(r)}catch(C){e=C,xe===r&&r!==null&&(xe=r=r.return);continue}break}while(!0)}function Hf(){var t=Ll.current;return Ll.current=Rl,t===null?Rl:t}function Ha(){(ve===0||ve===3||ve===2)&&(ve=4),Ce===null||!(Ln&268435455)&&!(es&268435455)||Qt(Ce,Te)}function Al(t,e){var r=Y;Y|=2;var i=Hf();(Ce!==t||Te!==e)&&(Rt=null,bn(t,e));do try{jg();break}catch(l){$f(t,l)}while(!0);if(ka(),Y=r,Ll.current=i,xe!==null)throw Error(T(261));return Ce=null,Te=0,ve}function jg(){for(;xe!==null;)Uf(xe)}function vg(){for(;xe!==null&&!Wm();)Uf(xe)}function Uf(t){var e=Xf(t.alternate,t,Qe);t.memoizedProps=t.pendingProps,e===null?Wf(t):xe=e,Ia.current=null}function Wf(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=hg(r,e),r!==null){r.flags&=32767,xe=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,xe=null;return}}else if(r=ug(r,e,Qe),r!==null){xe=r;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);ve===0&&(ve=5)}function wn(t,e,r){var i=J,l=ot.transition;try{ot.transition=null,J=1,yg(t,e,r,i)}finally{ot.transition=l,J=i}return null}function yg(t,e,r,i){do ar();while(Yt!==null);if(Y&6)throw Error(T(327));r=t.finishedWork;var l=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(ex(t,s),t===Ce&&(xe=Ce=null,Te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Qi||(Qi=!0,Gf(xl,function(){return ar(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=J;J=1;var a=Y;Y|=4,Ia.current=null,pg(t,r),Ff(r,t),Ox(Co),jl=!!_o,Co=_o=null,t.current=r,mg(r),Vm(),Y=a,J=o,ot.transition=s}else t.current=r;if(Qi&&(Qi=!1,Yt=t,Pl=l),s=t.pendingLanes,s===0&&(ln=null),Qm(r.stateNode),Xe(t,me()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)l=e[r],i(l.value,{componentStack:l.stack,digest:l.digest});if(Dl)throw Dl=!1,t=Uo,Uo=null,t;return Pl&1&&t.tag!==0&&ar(),s=t.pendingLanes,s&1?t===Wo?Kr++:(Kr=0,Wo=t):Kr=0,xn(),null}function ar(){if(Yt!==null){var t=_h(Pl),e=ot.transition,r=J;try{if(ot.transition=null,J=16>t?16:t,Yt===null)var i=!1;else{if(t=Yt,Yt=null,Pl=0,Y&6)throw Error(T(331));var l=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(A=d;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:Gr(8,h,s)}var f=h.child;if(f!==null)f.return=h,A=f;else for(;A!==null;){h=A;var x=h.sibling,g=h.return;if(Af(h),h===d){A=null;break}if(x!==null){x.return=g,A=x;break}A=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var p=t.current;for(A=p;A!==null;){o=A;var j=o.child;if(o.subtreeFlags&2064&&j!==null)j.return=o,A=j;else e:for(o=p;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ql(9,a)}}catch(C){he(a,a.return,C)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Y=l,xn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{J=r,ot.transition=e}}return!1}function Ld(t,e,r){e=mr(r,e),e=kf(t,e,1),t=rn(t,e,1),e=Fe(),t!==null&&(ki(t,1,e),Xe(t,e))}function he(t,e,r){if(t.tag===3)Ld(t,t,r);else for(;e!==null;){if(e.tag===3){Ld(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ln===null||!ln.has(i))){t=mr(r,t),t=bf(e,t,1),e=rn(e,t,1),t=Fe(),e!==null&&(ki(e,1,t),Xe(e,t));break}}e=e.return}}function wg(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&r,Ce===t&&(Te&r)===r&&(ve===4||ve===3&&(Te&130023424)===Te&&500>me()-za?bn(t,0):Fa|=r),Xe(t,e)}function Vf(t,e){e===0&&(t.mode&1?(e=Fi,Fi<<=1,!(Fi&130023424)&&(Fi=4194304)):e=1);var r=Fe();t=Ft(t,e),t!==null&&(ki(t,e,r),Xe(t,r))}function _g(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Vf(t,r)}function Cg(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(T(314))}i!==null&&i.delete(e),Vf(t,r)}var Xf;Xf=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Ue=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Ue=!1,dg(t,e,r);Ue=!!(t.flags&131072)}else Ue=!1,oe&&e.flags&1048576&&Qh(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var l=ur(e,Me.current);or(e,r),l=La(null,e,i,t,l,r);var s=Da();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(i)?(s=!0,Cl(e)):s=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Na(e),l.updater=Zl,e.stateNode=l,l._reactInternals=e,Lo(e,i,t,r),e=Ao(null,e,i,!0,s,r)):(e.tag=0,oe&&s&&ya(e),Ie(null,e,l,r),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,l=i._init,i=l(i._payload),e.type=i,l=e.tag=bg(i),t=ft(i,t),l){case 0:e=Po(null,e,i,t,r);break e;case 1:e=_d(null,e,i,t,r);break e;case 11:e=yd(null,e,i,t,r);break e;case 14:e=wd(null,e,i,ft(i.type,t),r);break e}throw Error(T(306,i,""))}return e;case 0:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),Po(t,e,i,l,r);case 1:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),_d(t,e,i,l,r);case 3:e:{if(Tf(e),t===null)throw Error(T(387));i=e.pendingProps,s=e.memoizedState,l=s.element,Jh(t,e),El(e,i,null,r);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){l=mr(Error(T(423)),e),e=Cd(t,e,i,r,l);break e}else if(i!==l){l=mr(Error(T(424)),e),e=Cd(t,e,i,r,l);break e}else for(Ye=nn(e.stateNode.containerInfo.firstChild),Ze=e,oe=!0,mt=null,r=nf(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hr(),i===l){e=zt(t,e,r);break e}Ie(t,e,i,r)}e=e.child}return e;case 5:return rf(e),t===null&&To(e),i=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,o=l.children,ko(i,l)?o=null:s!==null&&ko(i,s)&&(e.flags|=32),Ef(t,e),Ie(t,e,o,r),e.child;case 6:return t===null&&To(e),null;case 13:return Bf(t,e,r);case 4:return Ea(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fr(e,null,i,r):Ie(t,e,i,r),e.child;case 11:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),yd(t,e,i,l,r);case 7:return Ie(t,e,e.pendingProps,r),e.child;case 8:return Ie(t,e,e.pendingProps.children,r),e.child;case 12:return Ie(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,l=e.pendingProps,s=e.memoizedProps,o=l.value,ee(Sl,i._currentValue),i._currentValue=o,s!==null)if(yt(s.value,o)){if(s.children===l.children&&!We.current){e=zt(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=At(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Bo(s.return,r,e),a.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),Bo(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,l.children,r),e=e.child}return e;case 9:return l=e.type,i=e.pendingProps.children,or(e,r),l=at(l),i=i(l),e.flags|=1,Ie(t,e,i,r),e.child;case 14:return i=e.type,l=ft(i,e.pendingProps),l=ft(i.type,l),wd(t,e,i,l,r);case 15:return Sf(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),al(t,e),e.tag=1,Ve(i)?(t=!0,Cl(e)):t=!1,or(e,r),ef(e,i,l),Lo(e,i,l,r),Ao(null,e,i,!0,t,r);case 19:return Rf(t,e,r);case 22:return Nf(t,e,r)}throw Error(T(156,e.tag))};function Gf(t,e){return jh(t,e)}function kg(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,r,i){return new kg(t,e,r,i)}function Ua(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bg(t){if(typeof t=="function")return Ua(t)?1:0;if(t!=null){if(t=t.$$typeof,t===aa)return 11;if(t===ca)return 14}return 2}function on(t,e){var r=t.alternate;return r===null?(r=st(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ul(t,e,r,i,l,s){var o=2;if(i=t,typeof t=="function")Ua(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vn:return Sn(r.children,l,s,e);case oa:o=8,l|=8;break;case to:return t=st(12,r,e,l|2),t.elementType=to,t.lanes=s,t;case no:return t=st(13,r,e,l),t.elementType=no,t.lanes=s,t;case ro:return t=st(19,r,e,l),t.elementType=ro,t.lanes=s,t;case th:return ts(r,l,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qu:o=10;break e;case eh:o=9;break e;case aa:o=11;break e;case ca:o=14;break e;case Vt:o=16,i=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=st(o,r,e,l),e.elementType=t,e.type=i,e.lanes=s,e}function Sn(t,e,r,i){return t=st(7,t,i,e),t.lanes=r,t}function ts(t,e,r,i){return t=st(22,t,i,e),t.elementType=th,t.lanes=r,t.stateNode={isHidden:!1},t}function Xs(t,e,r){return t=st(6,t,null,e),t.lanes=r,t}function Gs(t,e,r){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sg(t,e,r,i,l){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ns(0),this.expirationTimes=Ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Wa(t,e,r,i,l,s,o,a,c){return t=new Sg(t,e,r,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=st(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(s),t}function Ng(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Qf(t){if(!t)return dn;t=t._reactInternals;e:{if(In(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var r=t.type;if(Ve(r))return Xh(t,r,e)}return e}function Kf(t,e,r,i,l,s,o,a,c){return t=Wa(r,i,!0,t,l,s,o,a,c),t.context=Qf(null),r=t.current,i=Fe(),l=sn(r),s=At(i,l),s.callback=e??null,rn(r,s,l),t.current.lanes=l,ki(t,l,i),Xe(t,i),t}function ns(t,e,r,i){var l=e.current,s=Fe(),o=sn(l);return r=Qf(r),e.context===null?e.context=r:e.pendingContext=r,e=At(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rn(l,e,o),t!==null&&(jt(t,l,o,s),ll(t,l,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Va(t,e){Dd(t,e),(t=t.alternate)&&Dd(t,e)}function Eg(){return null}var Yf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xa(t){this._internalRoot=t}rs.prototype.render=Xa.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));ns(t,e,null,null)};rs.prototype.unmount=Xa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dn(function(){ns(null,t,null,null)}),e[It]=null}};function rs(t){this._internalRoot=t}rs.prototype.unstable_scheduleHydration=function(t){if(t){var e=bh();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Gt.length&&e!==0&&e<Gt[r].priority;r++);Gt.splice(r,0,t),r===0&&Nh(t)}};function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function is(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pd(){}function Tg(t,e,r,i,l){if(l){if(typeof i=="function"){var s=i;i=function(){var d=Ml(o);s.call(d)}}var o=Kf(e,i,t,0,null,!1,!1,"",Pd);return t._reactRootContainer=o,t[It]=o.current,ii(t.nodeType===8?t.parentNode:t),Dn(),o}for(;l=t.lastChild;)t.removeChild(l);if(typeof i=="function"){var a=i;i=function(){var d=Ml(c);a.call(d)}}var c=Wa(t,0,!1,null,null,!1,!1,"",Pd);return t._reactRootContainer=c,t[It]=c.current,ii(t.nodeType===8?t.parentNode:t),Dn(function(){ns(e,c,r,i)}),c}function ls(t,e,r,i,l){var s=r._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var a=l;l=function(){var c=Ml(o);a.call(c)}}ns(e,o,t,l)}else o=Tg(r,e,t,l,i);return Ml(o)}Ch=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Mr(e.pendingLanes);r!==0&&(ha(e,r|1),Xe(e,me()),!(Y&6)&&(xr=me()+500,xn()))}break;case 13:Dn(function(){var i=Ft(t,1);if(i!==null){var l=Fe();jt(i,t,1,l)}}),Va(t,1)}};fa=function(t){if(t.tag===13){var e=Ft(t,134217728);if(e!==null){var r=Fe();jt(e,t,134217728,r)}Va(t,134217728)}};kh=function(t){if(t.tag===13){var e=sn(t),r=Ft(t,e);if(r!==null){var i=Fe();jt(r,t,e,i)}Va(t,e)}};bh=function(){return J};Sh=function(t,e){var r=J;try{return J=t,e()}finally{J=r}};po=function(t,e,r){switch(e){case"input":if(so(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var l=Kl(i);if(!l)throw Error(T(90));rh(i),so(i,l)}}}break;case"textarea":lh(t,r);break;case"select":e=r.value,e!=null&&rr(t,!!r.multiple,e,!1)}};hh=Oa;fh=Dn;var Bg={usingClientEntryPoint:!1,Events:[Si,Kn,Kl,dh,uh,Oa]},Dr={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Rg={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xh(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Eg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{Vl=Ki.inject(Rg),Et=Ki}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg;tt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(e))throw Error(T(200));return Ng(t,e,null,r)};tt.createRoot=function(t,e){if(!Ga(t))throw Error(T(299));var r=!1,i="",l=Yf;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=Wa(t,1,!1,null,null,r,!1,i,l),t[It]=e.current,ii(t.nodeType===8?t.parentNode:t),new Xa(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=xh(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return Dn(t)};tt.hydrate=function(t,e,r){if(!is(e))throw Error(T(200));return ls(null,t,e,!0,r)};tt.hydrateRoot=function(t,e,r){if(!Ga(t))throw Error(T(405));var i=r!=null&&r.hydratedSources||null,l=!1,s="",o=Yf;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=Kf(e,null,t,1,r??null,l,!1,s,o),t[It]=e.current,ii(t),i)for(t=0;t<i.length;t++)r=i[t],l=r._getVersion,l=l(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,l]:e.mutableSourceEagerHydrationData.push(r,l);return new rs(e)};tt.render=function(t,e,r){if(!is(e))throw Error(T(200));return ls(null,t,e,!1,r)};tt.unmountComponentAtNode=function(t){if(!is(t))throw Error(T(40));return t._reactRootContainer?(Dn(function(){ls(null,null,t,!1,function(){t._reactRootContainer=null,t[It]=null})}),!0):!1};tt.unstable_batchedUpdates=Oa;tt.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!is(r))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return ls(t,e,r,!1,i)};tt.version="18.2.0-next-9e3b772b8-20220608";function Zf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zf)}catch(t){console.error(t)}}Zf(),Qu.exports=tt;var Ei=Qu.exports,Ad=Ei;qs.createRoot=Ad.createRoot,qs.hydrateRoot=Ad.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},fi.apply(this,arguments)}var Zt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zt||(Zt={}));const Md="popstate";function Lg(t){t===void 0&&(t={});function e(l,s){let{pathname:o="/",search:a="",hash:c=""}=Fn(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Go("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(l,s){let o=l.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=l.location.href,d=c.indexOf("#");a=d===-1?c:c.slice(0,d)}return a+"#"+(typeof s=="string"?s:Il(s))}function i(l,s){ss(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Pg(e,r,i,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ss(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Dg(){return Math.random().toString(36).substr(2,8)}function Id(t,e){return{usr:t.state,key:t.key,idx:e}}function Go(t,e,r,i){return r===void 0&&(r=null),fi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fn(e):e,{state:r,key:e&&e.key||i||Dg()})}function Il(t){let{pathname:e="/",search:r="",hash:i=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Fn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Pg(t,e,r,i){i===void 0&&(i={});let{window:l=document.defaultView,v5Compat:s=!1}=i,o=l.history,a=Zt.Pop,c=null,d=h();d==null&&(d=0,o.replaceState(fi({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Zt.Pop;let k=h(),m=k==null?null:k-d;d=k,c&&c({action:a,location:y.location,delta:m})}function x(k,m){a=Zt.Push;let p=Go(y.location,k,m);r&&r(p,k),d=h()+1;let j=Id(p,d),w=y.createHref(p);try{o.pushState(j,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(w)}s&&c&&c({action:a,location:y.location,delta:1})}function g(k,m){a=Zt.Replace;let p=Go(y.location,k,m);r&&r(p,k),d=h();let j=Id(p,d),w=y.createHref(p);o.replaceState(j,"",w),s&&c&&c({action:a,location:y.location,delta:0})}function v(k){let m=l.location.origin!=="null"?l.location.origin:l.location.href,p=typeof k=="string"?k:Il(k);return ge(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(l,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Md,f),c=k,()=>{l.removeEventListener(Md,f),c=null}},createHref(k){return e(l,k)},createURL:v,encodeLocation(k){let m=v(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:g,go(k){return o.go(k)}};return y}var Fd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fd||(Fd={}));function Ag(t,e,r){r===void 0&&(r="/");let i=typeof e=="string"?Fn(e):e,l=pi(i.pathname||"/",r);if(l==null)return null;let s=Jf(t);Mg(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Vg(s[a],Gg(l));return o}function Jf(t,e,r,i){e===void 0&&(e=[]),r===void 0&&(r=[]),i===void 0&&(i="");let l=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let d=an([i,c.relativePath]),h=r.concat(c);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Jf(s.children,e,h,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:Ug(d,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))l(s,o);else for(let c of qf(s.path))l(s,o,c)}),e}function qf(t){let e=t.split("/");if(e.length===0)return[];let[r,...i]=e,l=r.endsWith("?"),s=r.replace(/\?$/,"");if(i.length===0)return l?[s,""]:[s];let o=qf(i.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),l&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Mg(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Wg(e.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const Ig=/^:\w+$/,Fg=3,zg=2,Og=1,$g=10,Hg=-2,zd=t=>t==="*";function Ug(t,e){let r=t.split("/"),i=r.length;return r.some(zd)&&(i+=Hg),e&&(i+=zg),r.filter(l=>!zd(l)).reduce((l,s)=>l+(Ig.test(s)?Fg:s===""?Og:$g),i)}function Wg(t,e){return t.length===e.length&&t.slice(0,-1).every((i,l)=>i===e[l])?t[t.length-1]-e[e.length-1]:0}function Vg(t,e){let{routesMeta:r}=t,i={},l="/",s=[];for(let o=0;o<r.length;++o){let a=r[o],c=o===r.length-1,d=l==="/"?e:e.slice(l.length)||"/",h=Qo({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d);if(!h)return null;Object.assign(i,h.params);let f=a.route;s.push({params:i,pathname:an([l,h.pathname]),pathnameBase:Jg(an([l,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(l=an([l,h.pathnameBase]))}return s}function Qo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,i]=Xg(t.path,t.caseSensitive,t.end),l=e.match(r);if(!l)return null;let s=l[0],o=s.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:i.reduce((d,h,f)=>{let{paramName:x,isOptional:g}=h;if(x==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?d[x]=void 0:d[x]=Qg(v||"",x),d},{}),pathname:s,pathnameBase:o,pattern:t}}function Xg(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),ss(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,c)=>(i.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),i]}function Gg(t){try{return decodeURI(t)}catch(e){return ss(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qg(t,e){try{return decodeURIComponent(t)}catch(r){return ss(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function pi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,i=t.charAt(r);return i&&i!=="/"?null:t.slice(r)||"/"}function Kg(t,e){e===void 0&&(e="/");let{pathname:r,search:i="",hash:l=""}=typeof t=="string"?Fn(t):t;return{pathname:r?r.startsWith("/")?r:Yg(r,e):e,search:qg(i),hash:e0(l)}}function Yg(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Qs(t,e,r,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zg(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Qa(t,e){let r=Zg(t);return e?r.map((i,l)=>l===t.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Ka(t,e,r,i){i===void 0&&(i=!1);let l;typeof t=="string"?l=Fn(t):(l=fi({},t),ge(!l.pathname||!l.pathname.includes("?"),Qs("?","pathname","search",l)),ge(!l.pathname||!l.pathname.includes("#"),Qs("#","pathname","hash",l)),ge(!l.search||!l.search.includes("#"),Qs("#","search","hash",l)));let s=t===""||l.pathname==="",o=s?"/":l.pathname,a;if(o==null)a=r;else{let f=e.length-1;if(!i&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),f-=1;l.pathname=x.join("/")}a=f>=0?e[f]:"/"}let c=Kg(l,a),d=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const an=t=>t.join("/").replace(/\/\/+/g,"/"),Jg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,e0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function t0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ep=["post","put","patch","delete"];new Set(ep);const n0=["get",...ep];new Set(n0);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},mi.apply(this,arguments)}const os=u.createContext(null),tp=u.createContext(null),$t=u.createContext(null),as=u.createContext(null),Ht=u.createContext({outlet:null,matches:[],isDataRoute:!1}),np=u.createContext(null);function r0(t,e){let{relative:r}=e===void 0?{}:e;Cr()||ge(!1);let{basename:i,navigator:l}=u.useContext($t),{hash:s,pathname:o,search:a}=cs(t,{relative:r}),c=o;return i!=="/"&&(c=o==="/"?i:an([i,o])),l.createHref({pathname:c,search:a,hash:s})}function Cr(){return u.useContext(as)!=null}function zn(){return Cr()||ge(!1),u.useContext(as).location}function rp(t){u.useContext($t).static||u.useLayoutEffect(t)}function ip(){let{isDataRoute:t}=u.useContext(Ht);return t?j0():i0()}function i0(){Cr()||ge(!1);let t=u.useContext(os),{basename:e,future:r,navigator:i}=u.useContext($t),{matches:l}=u.useContext(Ht),{pathname:s}=zn(),o=JSON.stringify(Qa(l,r.v7_relativeSplatPath)),a=u.useRef(!1);return rp(()=>{a.current=!0}),u.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){i.go(d);return}let f=Ka(d,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:an([e,f.pathname])),(h.replace?i.replace:i.push)(f,h.state,h)},[e,i,o,s,t])}const l0=u.createContext(null);function s0(t){let e=u.useContext(Ht).outlet;return e&&u.createElement(l0.Provider,{value:t},e)}function cs(t,e){let{relative:r}=e===void 0?{}:e,{future:i}=u.useContext($t),{matches:l}=u.useContext(Ht),{pathname:s}=zn(),o=JSON.stringify(Qa(l,i.v7_relativeSplatPath));return u.useMemo(()=>Ka(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function o0(t,e){return a0(t,e)}function a0(t,e,r,i){Cr()||ge(!1);let{navigator:l}=u.useContext($t),{matches:s}=u.useContext(Ht),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=zn(),h;if(e){var f;let k=typeof e=="string"?Fn(e):e;c==="/"||(f=k.pathname)!=null&&f.startsWith(c)||ge(!1),h=k}else h=d;let x=h.pathname||"/",g=c==="/"?x:x.slice(c.length)||"/",v=Ag(t,{pathname:g}),y=f0(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:an([c,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:an([c,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,r,i);return e&&y?u.createElement(as.Provider,{value:{location:mi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Zt.Pop}},y):y}function c0(){let t=g0(),e=t0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},e),r?u.createElement("pre",{style:l},r):null,s)}const d0=u.createElement(c0,null);class u0 extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?u.createElement(Ht.Provider,{value:this.props.routeContext},u.createElement(np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function h0(t){let{routeContext:e,match:r,children:i}=t,l=u.useContext(os);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(Ht.Provider,{value:e},i)}function f0(t,e,r,i){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),i===void 0&&(i=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,a=(l=r)==null?void 0:l.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));h>=0||ge(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:x,errors:g}=r,v=f.route.loader&&x[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,f,x)=>{let g,v=!1,y=null,k=null;r&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||d0,c&&(d<0&&x===0?(v0("route-fallback",!1),v=!0,k=null):d===x&&(v=!0,k=f.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,x+1)),p=()=>{let j;return g?j=y:v?j=k:f.route.Component?j=u.createElement(f.route.Component,null):f.route.element?j=f.route.element:j=h,u.createElement(h0,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:j})};return r&&(f.route.ErrorBoundary||f.route.errorElement||x===0)?u.createElement(u0,{location:r.location,revalidation:r.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var lp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(lp||{}),Fl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fl||{});function p0(t){let e=u.useContext(os);return e||ge(!1),e}function m0(t){let e=u.useContext(tp);return e||ge(!1),e}function x0(t){let e=u.useContext(Ht);return e||ge(!1),e}function sp(t){let e=x0(),r=e.matches[e.matches.length-1];return r.route.id||ge(!1),r.route.id}function g0(){var t;let e=u.useContext(np),r=m0(Fl.UseRouteError),i=sp(Fl.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[i]}function j0(){let{router:t}=p0(lp.UseNavigateStable),e=sp(Fl.UseNavigateStable),r=u.useRef(!1);return rp(()=>{r.current=!0}),u.useCallback(function(l,s){s===void 0&&(s={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,mi({fromRouteId:e},s)))},[t,e])}const Od={};function v0(t,e,r){!e&&!Od[t]&&(Od[t]=!0)}function Yi(t){let{to:e,replace:r,state:i,relative:l}=t;Cr()||ge(!1);let{future:s,static:o}=u.useContext($t),{matches:a}=u.useContext(Ht),{pathname:c}=zn(),d=ip(),h=Ka(e,Qa(a,s.v7_relativeSplatPath),c,l==="path"),f=JSON.stringify(h);return u.useEffect(()=>d(JSON.parse(f),{replace:r,state:i,relative:l}),[d,f,l,r,i]),null}function y0(t){return s0(t.context)}function w0(t){let{basename:e="/",children:r=null,location:i,navigationType:l=Zt.Pop,navigator:s,static:o=!1,future:a}=t;Cr()&&ge(!1);let c=e.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:s,static:o,future:mi({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof i=="string"&&(i=Fn(i));let{pathname:h="/",search:f="",hash:x="",state:g=null,key:v="default"}=i,y=u.useMemo(()=>{let k=pi(h,c);return k==null?null:{location:{pathname:k,search:f,hash:x,state:g,key:v},navigationType:l}},[c,h,f,x,g,v,l]);return y==null?null:u.createElement($t.Provider,{value:d},u.createElement(as.Provider,{children:r,value:y}))}new Promise(()=>{});/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},zl.apply(this,arguments)}function op(t,e){if(t==null)return{};var r={},i=Object.keys(t),l,s;for(s=0;s<i.length;s++)l=i[s],!(e.indexOf(l)>=0)&&(r[l]=t[l]);return r}function _0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function C0(t,e){return t.button===0&&(!e||e==="_self")&&!_0(t)}const k0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],b0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],S0=u.createContext({isTransitioning:!1}),N0="startTransition",$d=ra[N0];function E0(t){let{basename:e,children:r,future:i,window:l}=t,s=u.useRef();s.current==null&&(s.current=Lg({window:l,v5Compat:!0}));let o=s.current,[a,c]=u.useState({action:o.action,location:o.location}),{v7_startTransition:d}=i||{},h=u.useCallback(f=>{d&&$d?$d(()=>c(f)):c(f)},[c,d]);return u.useLayoutEffect(()=>o.listen(h),[o,h]),u.createElement(w0,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o,future:i})}const T0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ap=u.forwardRef(function(e,r){let{onClick:i,relative:l,reloadDocument:s,replace:o,state:a,target:c,to:d,preventScrollReset:h,unstable_viewTransition:f}=e,x=op(e,k0),{basename:g}=u.useContext($t),v,y=!1;if(typeof d=="string"&&B0.test(d)&&(v=d,T0))try{let j=new URL(window.location.href),w=d.startsWith("//")?new URL(j.protocol+d):new URL(d),C=pi(w.pathname,g);w.origin===j.origin&&C!=null?d=C+w.search+w.hash:y=!0}catch{}let k=r0(d,{relative:l}),m=L0(d,{replace:o,state:a,target:c,preventScrollReset:h,relative:l,unstable_viewTransition:f});function p(j){i&&i(j),j.defaultPrevented||m(j)}return u.createElement("a",zl({},x,{href:v||k,onClick:y||s?i:p,ref:r,target:c}))}),Zi=u.forwardRef(function(e,r){let{"aria-current":i="page",caseSensitive:l=!1,className:s="",end:o=!1,style:a,to:c,unstable_viewTransition:d,children:h}=e,f=op(e,b0),x=cs(c,{relative:f.relative}),g=zn(),v=u.useContext(tp),{navigator:y}=u.useContext($t),k=v!=null&&D0(x)&&d===!0,m=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,p=g.pathname,j=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(p=p.toLowerCase(),j=j?j.toLowerCase():null,m=m.toLowerCase());const w=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=p===m||!o&&p.startsWith(m)&&p.charAt(w)==="/",N=j!=null&&(j===m||!o&&j.startsWith(m)&&j.charAt(m.length)==="/"),E={isActive:C,isPending:N,isTransitioning:k},L=C?i:void 0,O;typeof s=="function"?O=s(E):O=[s,C?"active":null,N?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(E):a;return u.createElement(ap,zl({},f,{"aria-current":L,className:O,ref:r,style:F,to:c,unstable_viewTransition:d}),typeof h=="function"?h(E):h)});var Ko;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ko||(Ko={}));var Hd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hd||(Hd={}));function R0(t){let e=u.useContext(os);return e||ge(!1),e}function L0(t,e){let{target:r,replace:i,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=ip(),d=zn(),h=cs(t,{relative:o});return u.useCallback(f=>{if(C0(f,r)){f.preventDefault();let x=i!==void 0?i:Il(d)===Il(h);c(t,{replace:x,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[d,c,h,i,l,r,t,s,o,a])}function D0(t,e){e===void 0&&(e={});let r=u.useContext(S0);r==null&&ge(!1);let{basename:i}=R0(Ko.useViewTransitionState),l=cs(t,{relative:e.relative});if(!r.isTransitioning)return!1;let s=pi(r.currentLocation.pathname,i)||r.currentLocation.pathname,o=pi(r.nextLocation.pathname,i)||r.nextLocation.pathname;return Qo(l.pathname,o)!=null||Qo(l.pathname,s)!=null}const cp="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMTAuNSAtOS42MCAyMSAxOS4yIiBmaWxsPSJub25lIg0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZGVmcyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxzdHlsZT4uY2xzLTF7ZmlsbDojNDA5ZWZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7c3Ryb2tlOiM0MDllZmY7fTwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHRleHQgeD0iLTMuNCIgeT0iMy4wIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZvbnQtc2l6ZT0iMC43ZW0iIGNsYXNzPSJjbHMtMSI+ZTwvdGV4dD4NCiAgPGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgY2xhc3M9ImNscy0yIj4NCiAgICA8ZWxsaXBzZSByeD0iMTAiIHJ5PSI1LjgiPjwvZWxsaXBzZT4NCiAgICA8ZWxsaXBzZSByeD0iMTAiIHJ5PSI1LjgiIHRyYW5zZm9ybT0icm90YXRlKDYwKSI+PC9lbGxpcHNlPg0KICAgIDxlbGxpcHNlIHJ4PSIxMCIgcnk9IjUuOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSI+PC9lbGxpcHNlPg0KICA8L2c+DQo8L3N2Zz4=";function P0(){return n.jsx(n.Fragment,{children:n.jsx("header",{className:"navbar",children:n.jsx("div",{className:"navbar-wrapper",children:n.jsxs("div",{className:"header-container",children:[n.jsx("div",{className:"logo-container",children:n.jsxs(Zi,{to:"/home",children:[n.jsx("img",{src:cp,alt:"pelement-react"}),"pelement-react"]})}),n.jsxs("div",{className:"content",children:[n.jsxs("nav",{className:"navbar-menu menu",children:[n.jsx(Zi,{className:"link-item link is-menu-link",to:"guide",children:"指南"}),n.jsx(Zi,{className:"link-item link is-menu-link",to:"component",children:"组件"}),n.jsx(Zi,{className:"link-item link is-menu-link",to:"blog",children:"博客"})]}),n.jsx("div",{className:"social-links",children:n.jsx("a",{href:"https://github.com/pelement-react/pelement-react",title:"GitHub",target:"_blank",rel:"noreferrer noopener",className:"social-link",children:n.jsx("i",{className:"el-icon",style:{fontSize:"24px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-6c8d2bba":"",children:n.jsx("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})})})})})]})]})})})})}function A0(){const{pathname:t}=zn();return u.useEffect(()=>{window.scrollTo(0,0)},[t]),n.jsx(n.Fragment,{children:n.jsxs("div",{className:"App",children:[n.jsx(P0,{}),n.jsx(y0,{})]})})}const M0="modulepreload",I0=function(t){return"/pelement-react/"+t},Ud={},wt=function(e,r,i){let l=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link");l=Promise.all(r.map(o=>{if(o=I0(o),o in Ud)return;Ud[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!i)for(let f=s.length-1;f>=0;f--){const x=s[f];if(x.href===o&&(!a||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":M0,a||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),a)return new Promise((f,x)=>{h.addEventListener("load",f),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})}))}return l.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},F0=`import { Alert } from 'pelement-react'\r
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
export default AlertBasic`,z0=`import { Alert } from 'pelement-react'\r
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
export default AlertCenter`,O0=`import { Alert } from 'pelement-react'\r
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
export default AlertClose`,$0=`import { Alert } from 'pelement-react'\r
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
export default AlertDescription`,H0=`import { Alert } from 'pelement-react'\r
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
export default AlertEffect`,U0=`import { Alert } from 'pelement-react'\r
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
export default AlertIconDescription`,W0=`import { Alert } from 'pelement-react'\r
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
export default AlertIcon`,V0=`import { Avatar, Col, Row } from 'pelement-react'\r
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
export default AvatarBasic`,X0=`import { Avatar } from 'pelement-react'\r
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
export default AvatarError`,G0=`import { Avatar } from "pelement-react"\r
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
export default AvatarFit`,Q0=`import { Avatar, UserFilled } from 'pelement-react'\r
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
export default AvatarType`,K0=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeBasic`,Y0=`import { Badge, Button, Share } from 'pelement-react'\r
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
export default BadgeIsDot`,Z0=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeMax`,J0=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeValue`,q0=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
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
export default ButtonBasic`,ej=`import { Button } from 'pelement-react'\r
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
export default ButtonDisabled`,tj=`import { Button } from 'pelement-react'\r
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
export default ButtonLink`,nj=`import { Button } from 'pelement-react'\r
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
export default ButtonText`,rj=`import { Collapse, CollapseItem } from 'pelement-react'\r
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
export default ContainerBasic`,lj=`import { Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic1`,sj=`import { Aside, Container, Main } from 'pelement-react'\r
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
export default ContainerBasic2`,oj=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic3`,aj=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic4`,cj=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic5`,dj=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic6`,uj=`import { Button, Dialog } from 'pelement-react'\r
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
export default DialogBasic`,hj=`import { useState } from 'react'\r
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
export default DialogContent`,fj=`import { useState } from 'react'\r
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
export default DialogHeader`,pj=`import { Divider } from 'pelement-react'\r
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
export default DividerBasic`,mj=`import { Divider } from 'pelement-react'\r
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
export default DividerBorder`,xj=`import { Divider, StarFilled } from 'pelement-react'\r
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
export default DividerContent`,gj=`import { Divider } from 'pelement-react'\r
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
export default DividerDirection`,jj=`import { useState } from 'react'\r
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
export default DrawerBasic`,vj=`import { useState } from 'react'\r
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
export default DrawerContent`,yj=`import { useState } from 'react'\r
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
export default DrawerHeader`,wj=`import { useState } from 'react'\r
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
export default DrawerWithHeader`,_j=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share } from 'pelement-react'\r
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
export default ButtonBasic`,Cj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBootstrap`,bj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutGutter`,Sj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutJustify`,Nj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutMix`,Ej=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutOffset`,Tj=`import { Link } from 'pelement-react'\r
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
export default LinkBasic`,Bj=`import { Link } from 'pelement-react'\r
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
export default LinkDisabled`,Rj=`import { Edit, Link, View } from 'pelement-react'\r
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
export default LinkIcon`,Lj=`import { Link } from 'pelement-react'\r
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
export default LinkUnderline`,Dj=`import { Button, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmBasic`,Pj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmEvent`,Aj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmIcon`,Mj=`import { Button, Popover } from 'pelement-react'\r
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
export default PopoverBasic`,Ij=`import { Progress } from 'pelement-react'\r
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
export default ProgressBasic`,Fj=`import { Progress } from 'pelement-react'\r
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
export default ProgressTextInside`,zj=`import { Rate } from 'pelement-react'\r
\r
function RateBasic() {\r
  return (\r
    <>\r
      <Rate></Rate>\r
    </>\r
  )\r
}\r
\r
export default RateBasic`,Oj=`import { Button, Col, Result, Row } from 'pelement-react'\r
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
export default ResultBasic`,$j=`import { Button, Result } from 'pelement-react'\r
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
export default ResultIcon`,Hj=`import { Scrollbar } from 'pelement-react'\r
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
export default ScrollbarBasic`,Uj=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceAlignment() {\r
  return (\r
    <>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>\r
        <Space>\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>1</div>\r
        </Space>\r
      </div>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>\r
        <Space alignment="flex-start">\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>2</div>\r
        </Space>\r
      </div>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px' }}>\r
        <Space alignment="flex-end">\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>3</div>\r
        </Space>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default SpaceAlignment`,Wj=`import { Space } from 'pelement-react'\r
\r
function SpaceBasic() {\r
  return (\r
    <>\r
      <Space wrap>\r
        {\r
          [1, 2, 3].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceBasic`,Vj=`import { Space } from 'pelement-react'\r
\r
function SpaceDirection() {\r
  return (\r
    <>\r
      <Space direction="vertical">\r
        {\r
          [1, 2, 3].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceDirection`,Xj=`import { Space } from 'pelement-react'\r
\r
function SpaceSize() {\r
  return (\r
    <>\r
      <Space wrap size="large">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size="default">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size="small">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSize`,Gj=`import { Space } from 'pelement-react'\r
\r
function SpaceSize2() {\r
  return (\r
    <>\r
      <Space wrap size={0}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size={50}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size={100}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSize2`,Qj=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceSpacer() {\r
  return (\r
    <>\r
      <Space size={10} spacer="|">\r
        <Button> button 1 </Button>\r
        <Button> button 2 </Button>\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSpacer`,Kj=`import { Button, Divider, Space } from 'pelement-react'\r
\r
function SpaceSpacer2() {\r
  return (\r
    <>\r
      <Space size={10} spacer={<Divider direction="vertical" />}>\r
        <Button> button 1 </Button>\r
        <Button> button 2 </Button>\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSpacer2`,Yj=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceWrap() {\r
  return (\r
    <>\r
      <Space wrap>\r
        {\r
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>\r
            <div key={index}>\r
              <Button text> Text button {item} </Button>\r
            </div>\r
          )\r
        }\r
      </Space >\r
    </>\r
  )\r
}\r
\r
export default SpaceWrap`,Zj=`import { Hide, Switch, View } from 'pelement-react'\r
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
export default SwitchActionIcon`,Jj=`import { Switch } from 'pelement-react'\r
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
export default SwitchBasic`,qj=`import { useState } from 'react'\r
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
export default SwitchBeforeChange`,ev=`import { Switch } from 'pelement-react'\r
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
export default SwitchDisabled`,tv=`import { Check, Close, Switch } from 'pelement-react'\r
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
export default SwitchIcon`,nv=`import { Switch } from 'pelement-react'\r
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
export default SwitchLoading`,rv=`import { Switch } from 'pelement-react'\r
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
export default SwitchSize`,iv=`import { Switch } from 'pelement-react'\r
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
export default SwitchText`,lv=`import { Table } from 'pelement-react'\r
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
export default TableBasic`,sv=`import { Table } from 'pelement-react'\r
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
export default TableBorder`,ov=`import { Table } from 'pelement-react'\r
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
export default TableStripe`,av=`import { Tag } from 'pelement-react'\r
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
export default TagBasic`,cv=`import { Tag } from 'pelement-react'\r
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
export default TagClosable`,dv=`import { Tag } from 'pelement-react'\r
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
export default TagEffect`,uv=`import { Tag } from 'pelement-react'\r
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
export default TagRound`,hv=`import { Row, Tag } from 'pelement-react'\r
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
export default TagSize`,fv=`import { Text } from 'pelement-react'\r
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
export default TextBasic`,pv=`import { Text } from 'pelement-react'\r
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
export default TextSize`,mv=`import { Row, Text } from 'pelement-react'\r
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
export default TextTruncated`,xv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipBasic`,gv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipContent`,jv=`import { useState } from 'react'\r
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
export default TooltipDisabled`,vv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipEffect`;function dp(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const r=t[e],i=typeof r;(i==="object"||i==="function")&&!Object.isFrozen(r)&&dp(r)}),t}class Wd{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function up(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Jt(t,...e){const r=Object.create(null);for(const i in t)r[i]=t[i];return e.forEach(function(i){for(const l in i)r[l]=i[l]}),r}const yv="</span>",Vd=t=>!!t.scope,wv=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const r=t.split(".");return[`${e}${r.shift()}`,...r.map((i,l)=>`${i}${"_".repeat(l+1)}`)].join(" ")}return`${e}${t}`};class _v{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=up(e)}openNode(e){if(!Vd(e))return;const r=wv(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){Vd(e)&&(this.buffer+=yv)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Xd=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Ya{constructor(){this.rootNode=Xd(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const r=Xd({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(i=>this._walk(e,i)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{Ya._collapse(r)}))}}class Cv extends Ya{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){const i=e.root;r&&(i.scope=`language:${r}`),this.add(i)}toHTML(){return new _v(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function xi(t){return t?typeof t=="string"?t:t.source:null}function hp(t){return On("(?=",t,")")}function kv(t){return On("(?:",t,")*")}function bv(t){return On("(?:",t,")?")}function On(...t){return t.map(r=>xi(r)).join("")}function Sv(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Za(...t){return"("+(Sv(t).capture?"":"?:")+t.map(i=>xi(i)).join("|")+")"}function fp(t){return new RegExp(t.toString()+"|").exec("").length-1}function Nv(t,e){const r=t&&t.exec(e);return r&&r.index===0}const Ev=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ja(t,{joinWith:e}){let r=0;return t.map(i=>{r+=1;const l=r;let s=xi(i),o="";for(;s.length>0;){const a=Ev.exec(s);if(!a){o+=s;break}o+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+l):(o+=a[0],a[0]==="("&&r++)}return o}).map(i=>`(${i})`).join(e)}const Tv=/\b\B/,pp="[a-zA-Z]\\w*",qa="[a-zA-Z_]\\w*",mp="\\b\\d+(\\.\\d+)?",xp="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",gp="\\b(0b[01]+)",Bv="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Rv=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=On(e,/.*\b/,t.binary,/\b.*/)),Jt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,i)=>{r.index!==0&&i.ignoreMatch()}},t)},gi={begin:"\\\\[\\s\\S]",relevance:0},Lv={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[gi]},Dv={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[gi]},Pv={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ds=function(t,e,r={}){const i=Jt({scope:"comment",begin:t,end:e,contains:[]},r);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=Za("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:On(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},Av=ds("//","$"),Mv=ds("/\\*","\\*/"),Iv=ds("#","$"),Fv={scope:"number",begin:mp,relevance:0},zv={scope:"number",begin:xp,relevance:0},Ov={scope:"number",begin:gp,relevance:0},$v={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[gi,{begin:/\[/,end:/\]/,relevance:0,contains:[gi]}]},Hv={scope:"title",begin:pp,relevance:0},Uv={scope:"title",begin:qa,relevance:0},Wv={begin:"\\.\\s*"+qa,relevance:0},Vv=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})};var Ji=Object.freeze({__proto__:null,APOS_STRING_MODE:Lv,BACKSLASH_ESCAPE:gi,BINARY_NUMBER_MODE:Ov,BINARY_NUMBER_RE:gp,COMMENT:ds,C_BLOCK_COMMENT_MODE:Mv,C_LINE_COMMENT_MODE:Av,C_NUMBER_MODE:zv,C_NUMBER_RE:xp,END_SAME_AS_BEGIN:Vv,HASH_COMMENT_MODE:Iv,IDENT_RE:pp,MATCH_NOTHING_RE:Tv,METHOD_GUARD:Wv,NUMBER_MODE:Fv,NUMBER_RE:mp,PHRASAL_WORDS_MODE:Pv,QUOTE_STRING_MODE:Dv,REGEXP_MODE:$v,RE_STARTERS_RE:Bv,SHEBANG:Rv,TITLE_MODE:Hv,UNDERSCORE_IDENT_RE:qa,UNDERSCORE_TITLE_MODE:Uv});function Xv(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function Gv(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Qv(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=Xv,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Kv(t,e){Array.isArray(t.illegal)&&(t.illegal=Za(...t.illegal))}function Yv(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Zv(t,e){t.relevance===void 0&&(t.relevance=1)}const Jv=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},t);Object.keys(t).forEach(i=>{delete t[i]}),t.keywords=r.keywords,t.begin=On(r.beforeMatch,hp(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},qv=["of","and","for","in","not","or","if","then","parent","list","value"],e1="keyword";function jp(t,e,r=e1){const i=Object.create(null);return typeof t=="string"?l(r,t.split(" ")):Array.isArray(t)?l(r,t):Object.keys(t).forEach(function(s){Object.assign(i,jp(t[s],e,s))}),i;function l(s,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");i[c[0]]=[s,t1(c[0],c[1])]})}}function t1(t,e){return e?Number(e):n1(t)?0:1}function n1(t){return qv.includes(t.toLowerCase())}const Gd={},Nn=t=>{console.error(t)},Qd=(t,...e)=>{console.log(`WARN: ${t}`,...e)},Un=(t,e)=>{Gd[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Gd[`${t}/${e}`]=!0)},Ol=new Error;function vp(t,e,{key:r}){let i=0;const l=t[r],s={},o={};for(let a=1;a<=e.length;a++)o[a+i]=l[a],s[a+i]=!0,i+=fp(e[a-1]);t[r]=o,t[r]._emit=s,t[r]._multi=!0}function r1(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Nn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ol;if(typeof t.beginScope!="object"||t.beginScope===null)throw Nn("beginScope must be object"),Ol;vp(t,t.begin,{key:"beginScope"}),t.begin=Ja(t.begin,{joinWith:""})}}function i1(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Nn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ol;if(typeof t.endScope!="object"||t.endScope===null)throw Nn("endScope must be object"),Ol;vp(t,t.end,{key:"endScope"}),t.end=Ja(t.end,{joinWith:""})}}function l1(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function s1(t){l1(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),r1(t),i1(t)}function o1(t){function e(o,a){return new RegExp(xi(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=fp(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(Ja(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const d=c.findIndex((f,x)=>x>0&&f!==void 0),h=this.matchIndexes[d];return c.splice(0,d),Object.assign(c,h)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new r;return this.rules.slice(a).forEach(([d,h])=>c.addRule(d,h)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let d=c.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,d=h.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function l(o){const a=new i;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function s(o,a){const c=o;if(o.isCompiled)return c;[Gv,Yv,s1,Jv].forEach(h=>h(o,a)),t.compilerExtensions.forEach(h=>h(o,a)),o.__beforeBegin=null,[Qv,Kv,Zv].forEach(h=>h(o,a)),o.isCompiled=!0;let d=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),d=o.keywords.$pattern,delete o.keywords.$pattern),d=d||/\w+/,o.keywords&&(o.keywords=jp(o.keywords,t.case_insensitive)),c.keywordPatternRe=e(d,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=xi(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(h){return a1(h==="self"?o:h)})),o.contains.forEach(function(h){s(h,c)}),o.starts&&s(o.starts,a),c.matcher=l(c),c}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Jt(t.classNameAliases||{}),s(t)}function yp(t){return t?t.endsWithParent||yp(t.starts):!1}function a1(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Jt(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:yp(t)?Jt(t,{starts:t.starts?Jt(t.starts):null}):Object.isFrozen(t)?Jt(t):t}var c1="11.9.0";class d1 extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}}const Ks=up,Kd=Jt,Yd=Symbol("nomatch"),u1=7,wp=function(t){const e=Object.create(null),r=Object.create(null),i=[];let l=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Cv};function c(S){return a.noHighlightRe.test(S)}function d(S){let _=S.className+" ";_+=S.parentNode?S.parentNode.className:"";const B=a.languageDetectRe.exec(_);if(B){const P=O(B[1]);return P||(Qd(s.replace("{}",B[1])),Qd("Falling back to no-highlight mode for this block.",S)),P?B[1]:"no-highlight"}return _.split(/\s+/).find(P=>c(P)||O(P))}function h(S,_,B){let P="",$="";typeof _=="object"?(P=S,B=_.ignoreIllegals,$=_.language):(Un("10.7.0","highlight(lang, code, ...args) has been deprecated."),Un("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=S,P=_),B===void 0&&(B=!0);const K={code:P,language:$};U("before:highlight",K);const Re=K.result?K.result:f(K.language,K.code,B);return Re.code=K.code,U("after:highlight",Re),Re}function f(S,_,B,P){const $=Object.create(null);function K(D,z){return D.keywords[z]}function Re(){if(!V.keywords){be.addText(te);return}let D=0;V.keywordPatternRe.lastIndex=0;let z=V.keywordPatternRe.exec(te),X="";for(;z;){X+=te.substring(D,z.index);const Z=_t.case_insensitive?z[0].toLowerCase():z[0],Le=K(V,Z);if(Le){const[Bt,lm]=Le;if(be.addText(X),X="",$[Z]=($[Z]||0)+1,$[Z]<=u1&&(Li+=lm),Bt.startsWith("_"))X+=z[0];else{const sm=_t.classNameAliases[Bt]||Bt;ye(z[0],sm)}}else X+=z[0];D=V.keywordPatternRe.lastIndex,z=V.keywordPatternRe.exec(te)}X+=te.substring(D),be.addText(X)}function rt(){if(te==="")return;let D=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){be.addText(te);return}D=f(V.subLanguage,te,!0,Sc[V.subLanguage]),Sc[V.subLanguage]=D._top}else D=g(te,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Li+=D.relevance),be.__addSublanguage(D._emitter,D.language)}function ke(){V.subLanguage!=null?rt():Re(),te=""}function ye(D,z){D!==""&&(be.startScope(z),be.addText(D),be.endScope())}function jn(D,z){let X=1;const Z=z.length-1;for(;X<=Z;){if(!D._emit[X]){X++;continue}const Le=_t.classNameAliases[D[X]]||D[X],Bt=z[X];Le?ye(Bt,Le):(te=Bt,Re(),te=""),X++}}function Cc(D,z){return D.scope&&typeof D.scope=="string"&&be.openNode(_t.classNameAliases[D.scope]||D.scope),D.beginScope&&(D.beginScope._wrap?(ye(te,_t.classNameAliases[D.beginScope._wrap]||D.beginScope._wrap),te=""):D.beginScope._multi&&(jn(D.beginScope,z),te="")),V=Object.create(D,{parent:{value:V}}),V}function kc(D,z,X){let Z=Nv(D.endRe,X);if(Z){if(D["on:end"]){const Le=new Wd(D);D["on:end"](z,Le),Le.isMatchIgnored&&(Z=!1)}if(Z){for(;D.endsParent&&D.parent;)D=D.parent;return D}}if(D.endsWithParent)return kc(D.parent,z,X)}function em(D){return V.matcher.regexIndex===0?(te+=D[0],1):(ws=!0,0)}function tm(D){const z=D[0],X=D.rule,Z=new Wd(X),Le=[X.__beforeBegin,X["on:begin"]];for(const Bt of Le)if(Bt&&(Bt(D,Z),Z.isMatchIgnored))return em(z);return X.skip?te+=z:(X.excludeBegin&&(te+=z),ke(),!X.returnBegin&&!X.excludeBegin&&(te=z)),Cc(X,D),X.returnBegin?0:z.length}function nm(D){const z=D[0],X=_.substring(D.index),Z=kc(V,D,X);if(!Z)return Yd;const Le=V;V.endScope&&V.endScope._wrap?(ke(),ye(z,V.endScope._wrap)):V.endScope&&V.endScope._multi?(ke(),jn(V.endScope,D)):Le.skip?te+=z:(Le.returnEnd||Le.excludeEnd||(te+=z),ke(),Le.excludeEnd&&(te=z));do V.scope&&be.closeNode(),!V.skip&&!V.subLanguage&&(Li+=V.relevance),V=V.parent;while(V!==Z.parent);return Z.starts&&Cc(Z.starts,D),Le.returnEnd?0:z.length}function rm(){const D=[];for(let z=V;z!==_t;z=z.parent)z.scope&&D.unshift(z.scope);D.forEach(z=>be.openNode(z))}let Ri={};function bc(D,z){const X=z&&z[0];if(te+=D,X==null)return ke(),0;if(Ri.type==="begin"&&z.type==="end"&&Ri.index===z.index&&X===""){if(te+=_.slice(z.index,z.index+1),!l){const Z=new Error(`0 width match regex (${S})`);throw Z.languageName=S,Z.badRule=Ri.rule,Z}return 1}if(Ri=z,z.type==="begin")return tm(z);if(z.type==="illegal"&&!B){const Z=new Error('Illegal lexeme "'+X+'" for mode "'+(V.scope||"<unnamed>")+'"');throw Z.mode=V,Z}else if(z.type==="end"){const Z=nm(z);if(Z!==Yd)return Z}if(z.type==="illegal"&&X==="")return 1;if(ys>1e5&&ys>z.index*3)throw new Error("potential infinite loop, way more iterations than matches");return te+=X,X.length}const _t=O(S);if(!_t)throw Nn(s.replace("{}",S)),new Error('Unknown language: "'+S+'"');const im=o1(_t);let vs="",V=P||im;const Sc={},be=new a.__emitter(a);rm();let te="",Li=0,vn=0,ys=0,ws=!1;try{if(_t.__emitTokens)_t.__emitTokens(_,be);else{for(V.matcher.considerAll();;){ys++,ws?ws=!1:V.matcher.considerAll(),V.matcher.lastIndex=vn;const D=V.matcher.exec(_);if(!D)break;const z=_.substring(vn,D.index),X=bc(z,D);vn=D.index+X}bc(_.substring(vn))}return be.finalize(),vs=be.toHTML(),{language:S,value:vs,relevance:Li,illegal:!1,_emitter:be,_top:V}}catch(D){if(D.message&&D.message.includes("Illegal"))return{language:S,value:Ks(_),illegal:!0,relevance:0,_illegalBy:{message:D.message,index:vn,context:_.slice(vn-100,vn+100),mode:D.mode,resultSoFar:vs},_emitter:be};if(l)return{language:S,value:Ks(_),illegal:!1,relevance:0,errorRaised:D,_emitter:be,_top:V};throw D}}function x(S){const _={value:Ks(S),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return _._emitter.addText(S),_}function g(S,_){_=_||a.languages||Object.keys(e);const B=x(S),P=_.filter(O).filter(G).map(ke=>f(ke,S,!1));P.unshift(B);const $=P.sort((ke,ye)=>{if(ke.relevance!==ye.relevance)return ye.relevance-ke.relevance;if(ke.language&&ye.language){if(O(ke.language).supersetOf===ye.language)return 1;if(O(ye.language).supersetOf===ke.language)return-1}return 0}),[K,Re]=$,rt=K;return rt.secondBest=Re,rt}function v(S,_,B){const P=_&&r[_]||B;S.classList.add("hljs"),S.classList.add(`language-${P}`)}function y(S){let _=null;const B=d(S);if(c(B))return;if(U("before:highlightElement",{el:S,language:B}),S.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",S);return}if(S.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(S)),a.throwUnescapedHTML))throw new d1("One of your code blocks includes unescaped HTML.",S.innerHTML);_=S;const P=_.textContent,$=B?h(P,{language:B,ignoreIllegals:!0}):g(P);S.innerHTML=$.value,S.dataset.highlighted="yes",v(S,B,$.language),S.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(S.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),U("after:highlightElement",{el:S,result:$,text:P})}function k(S){a=Kd(a,S)}const m=()=>{w(),Un("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function p(){w(),Un("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let j=!1;function w(){if(document.readyState==="loading"){j=!0;return}document.querySelectorAll(a.cssSelector).forEach(y)}function C(){j&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",C,!1);function N(S,_){let B=null;try{B=_(t)}catch(P){if(Nn("Language definition for '{}' could not be registered.".replace("{}",S)),l)Nn(P);else throw P;B=o}B.name||(B.name=S),e[S]=B,B.rawDefinition=_.bind(null,t),B.aliases&&F(B.aliases,{languageName:S})}function E(S){delete e[S];for(const _ of Object.keys(r))r[_]===S&&delete r[_]}function L(){return Object.keys(e)}function O(S){return S=(S||"").toLowerCase(),e[S]||e[r[S]]}function F(S,{languageName:_}){typeof S=="string"&&(S=[S]),S.forEach(B=>{r[B.toLowerCase()]=_})}function G(S){const _=O(S);return _&&!_.disableAutodetect}function q(S){S["before:highlightBlock"]&&!S["before:highlightElement"]&&(S["before:highlightElement"]=_=>{S["before:highlightBlock"](Object.assign({block:_.el},_))}),S["after:highlightBlock"]&&!S["after:highlightElement"]&&(S["after:highlightElement"]=_=>{S["after:highlightBlock"](Object.assign({block:_.el},_))})}function ae(S){q(S),i.push(S)}function H(S){const _=i.indexOf(S);_!==-1&&i.splice(_,1)}function U(S,_){const B=S;i.forEach(function(P){P[B]&&P[B](_)})}function W(S){return Un("10.7.0","highlightBlock will be removed entirely in v12.0"),Un("10.7.0","Please use highlightElement now."),y(S)}Object.assign(t,{highlight:h,highlightAuto:g,highlightAll:w,highlightElement:y,highlightBlock:W,configure:k,initHighlighting:m,initHighlightingOnLoad:p,registerLanguage:N,unregisterLanguage:E,listLanguages:L,getLanguage:O,registerAliases:F,autoDetection:G,inherit:Kd,addPlugin:ae,removePlugin:H}),t.debugMode=function(){l=!1},t.safeMode=function(){l=!0},t.versionString=c1,t.regex={concat:On,lookahead:hp,either:Za,optional:bv,anyNumberOfTimes:kv};for(const S in Ji)typeof Ji[S]=="object"&&dp(Ji[S]);return Object.assign(t,Ji),t},gr=wp({});gr.newInstance=()=>wp({});var h1=gr;gr.HighlightJS=gr;gr.default=gr;const ec=Iu(h1);function f1(t){const e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=t.inherit(s,{begin:/\(/,end:/\)/}),a=t.inherit(t.APOS_STRING_MODE,{className:"string"}),c=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,o,c,a]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:d}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Zd="[A-Za-z$_][0-9A-Za-z$_]*",p1=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],m1=["true","false","null","undefined","NaN","Infinity"],_p=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Cp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],kp=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],x1=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],g1=[].concat(kp,_p,Cp);function j1(t){const e=t.regex,r=(_,{after:B})=>{const P="</"+_[0].slice(1);return _.input.indexOf(P,B)!==-1},i=Zd,l={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(_,B)=>{const P=_[0].length+_.index,$=_.input[P];if($==="<"||$===","){B.ignoreMatch();return}$===">"&&(r(_,{after:P})||B.ignoreMatch());let K;const Re=_.input.substring(P);if(K=Re.match(/^\s*=/)){B.ignoreMatch();return}if((K=Re.match(/^\s+extends\s+/))&&K.index===0){B.ignoreMatch();return}}},a={$pattern:Zd,keyword:p1,literal:m1,built_in:g1,"variable.language":x1},c="[0-9](_?[0-9])*",d=`\\.(${c})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,x]},p={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},j=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,k,{match:/\$\d+/},f];x.contains=j.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(j)});const w=[].concat(p,x.contains),C=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:C},E={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[..._p,...Cp]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},G={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function q(_){return e.concat("(?!",_.join("|"),")")}const ae={match:e.concat(/\b/,q([...kp,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},H={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",S={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,k,p,{match:/\$\d+/},f,L,{className:"attr",begin:i+e.lookahead(":"),relevance:0},S,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[p,t.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:s},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,t.inherit(t.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},H,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},ae,G,E,U,{match:/\$[(.]/}]}}ec.registerLanguage("xml",f1);ec.registerLanguage("javascript",j1);function R({language:t="javascript",name:e,children:r}){const i=u.useRef(null),[l,s]=u.useState(!1),[o,a]=u.useState(""),c=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":F0,"../../../packages/Alert/_example/AlertCenter.tsx":z0,"../../../packages/Alert/_example/AlertClose.tsx":O0,"../../../packages/Alert/_example/AlertDescription.tsx":$0,"../../../packages/Alert/_example/AlertEffect.tsx":H0,"../../../packages/Alert/_example/AlertIconDescription.tsx":U0,"../../../packages/Alert/_example/AlertShowIcon.tsx":W0,"../../../packages/Avatar/_example/AvatarBasic.tsx":V0,"../../../packages/Avatar/_example/AvatarError.tsx":X0,"../../../packages/Avatar/_example/AvatarFit.tsx":G0,"../../../packages/Avatar/_example/AvatarType.tsx":Q0,"../../../packages/Badge/_example/BadgeBasic.tsx":K0,"../../../packages/Badge/_example/BadgeIsDot.tsx":Y0,"../../../packages/Badge/_example/BadgeMax.tsx":Z0,"../../../packages/Badge/_example/BadgeValue.tsx":J0,"../../../packages/Button/_example/ButtonBasic.tsx":q0,"../../../packages/Button/_example/ButtonDisabled.tsx":ej,"../../../packages/Button/_example/ButtonLink.tsx":tj,"../../../packages/Button/_example/ButtonText.tsx":nj,"../../../packages/Collapse/_example/CollapseBasic.tsx":rj,"../../../packages/Container/_example/ContainerBasic.tsx":ij,"../../../packages/Container/_example/ContainerBasic1.tsx":lj,"../../../packages/Container/_example/ContainerBasic2.tsx":sj,"../../../packages/Container/_example/ContainerBasic3.tsx":oj,"../../../packages/Container/_example/ContainerBasic4.tsx":aj,"../../../packages/Container/_example/ContainerBasic5.tsx":cj,"../../../packages/Container/_example/ContainerBasic6.tsx":dj,"../../../packages/Dialog/_example/DialogBasic.tsx":uj,"../../../packages/Dialog/_example/DialogContent.tsx":hj,"../../../packages/Dialog/_example/DialogHeader.tsx":fj,"../../../packages/Divider/_example/DividerBasic.tsx":pj,"../../../packages/Divider/_example/DividerBorder.tsx":mj,"../../../packages/Divider/_example/DividerContent.tsx":xj,"../../../packages/Divider/_example/DividerDirection.tsx":gj,"../../../packages/Drawer/_example/DrawerBasic.tsx":jj,"../../../packages/Drawer/_example/DrawerContent.tsx":vj,"../../../packages/Drawer/_example/DrawerHeader.tsx":yj,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":wj,"../../../packages/Icon/_example/IconBasic.tsx":_j,"../../../packages/Layout/_example/LayoutBasic.tsx":Cj,"../../../packages/Layout/_example/LayoutBootstrap.tsx":kj,"../../../packages/Layout/_example/LayoutGutter.tsx":bj,"../../../packages/Layout/_example/LayoutJustify.tsx":Sj,"../../../packages/Layout/_example/LayoutMix.tsx":Nj,"../../../packages/Layout/_example/LayoutOffset.tsx":Ej,"../../../packages/Link/_example/LinkBasic.tsx":Tj,"../../../packages/Link/_example/LinkDisabled.tsx":Bj,"../../../packages/Link/_example/LinkIcon.tsx":Rj,"../../../packages/Link/_example/LinkUnderline.tsx":Lj,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":Dj,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":Pj,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":Aj,"../../../packages/Popover/_example/PopoverBasic.tsx":Mj,"../../../packages/Progress/_example/ProgressBasic.tsx":Ij,"../../../packages/Progress/_example/ProgressTextInside.tsx":Fj,"../../../packages/Rate/_example/RateBasic.tsx":zj,"../../../packages/Result/_example/ResultBasic.tsx":Oj,"../../../packages/Result/_example/ResultIcon.tsx":$j,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":Hj,"../../../packages/Space/_example/SpaceAlignment.tsx":Uj,"../../../packages/Space/_example/SpaceBasic.tsx":Wj,"../../../packages/Space/_example/SpaceDirection.tsx":Vj,"../../../packages/Space/_example/SpaceSize.tsx":Xj,"../../../packages/Space/_example/SpaceSize2.tsx":Gj,"../../../packages/Space/_example/SpaceSpacer.tsx":Qj,"../../../packages/Space/_example/SpaceSpacer2.tsx":Kj,"../../../packages/Space/_example/SpaceWrap.tsx":Yj,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Zj,"../../../packages/Switch/_example/SwitchBasic.tsx":Jj,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":qj,"../../../packages/Switch/_example/SwitchDisabled.tsx":ev,"../../../packages/Switch/_example/SwitchIcon.tsx":tv,"../../../packages/Switch/_example/SwitchLoading.tsx":nv,"../../../packages/Switch/_example/SwitchSize.tsx":rv,"../../../packages/Switch/_example/SwitchText.tsx":iv,"../../../packages/Table/_example/TableBasic.tsx":lv,"../../../packages/Table/_example/TableBorder.tsx":sv,"../../../packages/Table/_example/TableStripe.tsx":ov,"../../../packages/Tag/_example/TagBasic.tsx":av,"../../../packages/Tag/_example/TagClosable.tsx":cv,"../../../packages/Tag/_example/TagEffect.tsx":dv,"../../../packages/Tag/_example/TagRound.tsx":uv,"../../../packages/Tag/_example/TagSize.tsx":hv,"../../../packages/Text/_example/TextBasic.tsx":fv,"../../../packages/Text/_example/TextSize.tsx":pv,"../../../packages/Text/_example/TextTruncated.tsx":mv,"../../../packages/Tooltip/_example/TooltipBasic.tsx":xv,"../../../packages/Tooltip/_example/TooltipContent.tsx":gv,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":jv,"../../../packages/Tooltip/_example/TooltipEffect.tsx":vv});let d={display:l?"":"none"};u.useEffect(()=>{i.current&&(Object.keys(c).forEach(f=>{f.indexOf(e)!==-1&&a(c[f])}),setTimeout(()=>{ec.highlightElement(i.current)},0))},[e]);function h(){s(!l)}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"code-block",children:[n.jsx("div",{className:"code-block-component",children:r}),n.jsx("div",{className:"op-btns",children:n.jsx("button",{onClick:h,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:n.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:n.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),n.jsx("div",{className:"code-block-wrapper",style:d,children:n.jsx("div",{className:"code-block-pre language-react",children:n.jsx("pre",{children:n.jsx("code",{id:t,ref:i,className:t,children:o})})})})]})})}function bp(t){var e,r,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=bp(t[e]))&&(i&&(i+=" "),i+=r);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function M(){for(var t,e,r=0,i="";r<arguments.length;)(t=arguments[r++])&&(e=bp(t))&&(i&&(i+=" "),i+=e);return i}const v1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),u.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),y1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(v1,{})})},us=u.forwardRef(y1);us.displayName="Edit";const w1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),_1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(w1,{})})},tc=u.forwardRef(_1);tc.displayName="Search";const C1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),k1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(C1,{})})},ji=u.forwardRef(k1);ji.displayName="Check";const b1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),u.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),S1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(b1,{})})},nc=u.forwardRef(S1);nc.displayName="Message";const N1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),E1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(N1,{})})},rc=u.forwardRef(E1);rc.displayName="Star";const T1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),B1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(T1,{})})},ic=u.forwardRef(B1);ic.displayName="Delete";const R1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),L1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(R1,{})})},hs=u.forwardRef(L1);hs.displayName="View";const D1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),P1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(D1,{})})},lc=u.forwardRef(P1);lc.displayName="StarFilled";const A1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),M1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(A1,{})})},un=u.forwardRef(M1);un.displayName="Close";const I1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),F1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(I1,{})})},sc=u.forwardRef(F1);sc.displayName="Loading";const z1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),u.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),O1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(z1,{})})},oc=u.forwardRef(O1);oc.displayName="Hide";const $1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),H1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx($1,{})})},Ti=u.forwardRef(H1);Ti.displayName="InfoFilled";const U1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),W1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(U1,{})})},fs=u.forwardRef(W1);fs.displayName="WarningFilled";const V1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),X1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(V1,{})})},kr=u.forwardRef(X1);kr.displayName="CircleCloseFilled";const G1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),Q1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M(i,"el-icon"),onClick:l,children:n.jsx(G1,{})})},ac=u.forwardRef(Q1);ac.displayName="CircleCheckFilled";const K1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),Y1=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",i),children:n.jsx(K1,{})})},cc=u.forwardRef(Y1);cc.displayName="ArrowRight";const Z1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),J1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",i),onClick:l,children:n.jsx(Z1,{})})},Sp=u.forwardRef(J1);Sp.displayName="UserFilled";const q1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),u.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),ey=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",i),onClick:l,children:n.jsx(q1,{})})},dc=u.forwardRef(ey);dc.displayName="CircleCheck";const ty=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),ny=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",i),children:n.jsx(ty,{})})},Np=u.forwardRef(ny);Np.displayName="QuestionFilled";const ry=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"})),iy=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",i),children:n.jsx(ry,{})})},uc=u.forwardRef(iy);uc.displayName="Share";const ly=(t,e)=>{const{className:r,style:i,children:l,type:s,plain:o=!1,round:a=!1,circle:c=!1,disabled:d=!1,link:h=!1,text:f=!1,bg:x=!1,icon:g,...v}=t,y=g?n.jsx(n.Fragment,{children:g}):n.jsx(n.Fragment,{});return n.jsxs("button",{ref:e,style:i,disabled:d,...v,className:M(r,"el-button",s?`el-button--${s}`:"",o?"is-plain":"",a?"is-round":"",c?"is-circle":"",d?"is-disabled":"",h?"is-link":"",f?"is-text":"",x?"is-has-bg":""),children:[y,l]})},b=u.forwardRef(ly);b.displayName="Button";const sy=(t,e)=>{const{style:r,className:i,children:l,direction:s}=t,o=()=>s==="vertical"?!0:s==="horizontal"?!1:l?l.some(a=>{const c=a.props.children;return c==="Header"||c==="Footer"}):!1;return n.jsx("section",{ref:e,style:r,className:M(i,"el-container",o()?"is-vertical":""),children:l})},Je=u.forwardRef(sy);Je.displayName="Container";const oy=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-header-height":s};return n.jsx("header",{ref:e,style:o,className:M(i,"el-header"),children:l})},$n=u.forwardRef(oy);$n.displayName="Head";const ay=(t,e)=>{const{style:r,className:i,children:l}=t;return n.jsx("main",{ref:e,style:r,className:M(i,"el-main"),children:l})},gn=u.forwardRef(ay);gn.displayName="Main";const cy=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-footer-height":s};return n.jsx("footer",{ref:e,style:o,className:M(i,"el-footer"),children:l})},ps=u.forwardRef(cy);ps.displayName="Footer";const dy=(t,e)=>{const{style:r,className:i,children:l,width:s=200}=t,o={...r,"--el-aside-width":s};return n.jsx("aside",{ref:e,style:o,className:M(i,"el-aside"),children:l})},br=u.forwardRef(dy);br.displayName="Aside";const Ep=u.createContext({}),uy=(t,e)=>{const{style:r,className:i,children:l,gutter:s=0,justify:o}=t,a={marginLeft:`-${s/2}px`,marginRight:`-${s/2}px`,...r},c=u.useMemo(()=>({gutter:s}),[s]);return n.jsx(Ep.Provider,{value:c,children:n.jsx("div",{ref:e,style:a,className:M(i,"el-row",o?`is-justify-${o}`:""),children:l})})},re=u.forwardRef(uy);re.displayName="Row";const hy=(t,e)=>{const{style:r,className:i,children:l,span:s=24,offset:o,xs:a,sm:c,md:d,lg:h,xl:f}=t,{gutter:x}=u.useContext(Ep),g={paddingLeft:`${x/2}px`,paddingRight:`${x/2}px`,...r};return n.jsx("div",{ref:e,style:g,className:M(i,"el-col",s?`el-col-${s}`:"",x?"is-guttered":"",o?`el-col-offset-${o}`:"",a?`el-col-xs-${a}`:"",c?`el-col-sm-${c}`:"",d?`el-col-md-${d}`:"",h?`el-col-lg-${h}`:"",f?`el-col-xl-${f}`:""),children:l})},I=u.forwardRef(hy);I.displayName="Col";const fy=(t,e)=>{const{style:r,className:i,children:l,type:s,href:o,target:a,disabled:c=!1,underline:d=!0,icon:h}=t,f=h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{});return n.jsxs("a",{ref:e,style:r,className:M(i,"el-link",s?`el-link--${s}`:"el-link--default",c?"is-disabled":"",d?"is-underline":""),href:c||!o?void 0:o,target:a||void 0,children:[f,n.jsx("span",{className:"el-link__inner",children:l})]})},Ne=u.forwardRef(fy);Ne.displayName="Link";const py=(t,e)=>{const{style:r,className:i,children:l,type:s,size:o,truncated:a=!1,lineClamp:c}=t,d={WebkitLineClamp:c,...r};return n.jsx("span",{ref:e,style:d,className:M(i,"el-text",s?`el-text--${s}`:"",o?`el-text--${o}`:"",a?"is-truncated":"",c?"is-line-clamp":""),children:l})},Ke=u.forwardRef(py);Ke.displayName="Text";const my=(t,e)=>{const{style:r,className:i,children:l,contentPosition:s="center",borderStyle:o="solid",direction:a="horizontal"}=t,c={"--el-border-style":o,...r},d=l?n.jsx(n.Fragment,{children:n.jsx("div",{className:M("el-divider__text",`is-${s}`),children:l})}):n.jsx(n.Fragment,{});return n.jsx("div",{ref:e,style:c,className:M(i,"el-divider",`el-divider--${a}`),children:d})},vt=u.forwardRef(my);vt.displayName="Divider";const xy=(t,e)=>{const{style:r,className:i,defaultChecked:l=!1,size:s,inactiveText:o,activeText:a,inlinePrompt:c=!1,width:d,activeIcon:h,inactiveIcon:f,disabled:x=!1,loading:g=!1,beforeChange:v,activeActionIcon:y,inactiveActionIcon:k}=t,[m,p]=u.useState(l);function j(){if(x||g)return;if(!v){w();return}const G=v();G instanceof Promise&&G.then(q=>{q&&w()})}function w(){p(!m)}function C(){return f?n.jsx(n.Fragment,{children:f}):n.jsx(n.Fragment,{children:n.jsx("span",{children:o})})}function N(){return(o||f)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:M("el-switch__label el-switch__label--left",m?"":"is-active"),children:n.jsx(C,{})})}):n.jsx(n.Fragment,{})}function E(){return h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{children:n.jsx("span",{children:h})})}function L(){return(a||h)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:M("el-switch__label el-switch__label--right",m?"is-active":""),children:n.jsx(E,{})})}):n.jsx(n.Fragment,{})}function O(){return c&&(h||f)?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:m?h:f})}):c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:n.jsx("span",{className:"is-text",children:m?a:o})})}):n.jsx(n.Fragment,{})}function F(){return g?n.jsx(n.Fragment,{children:n.jsx(sc,{className:"is-loading"})}):y&&m?n.jsx(n.Fragment,{children:y}):k&&!m?n.jsx(n.Fragment,{children:k}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:M(i,"el-switch",m?"is-checked":"",s?`el-switch--${s}`:"",{"is-disabled":x||g}),onClick:j,children:[n.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:x||g}),n.jsx(N,{}),n.jsxs("span",{className:"el-switch__core",style:{width:`${d}px`},children:[n.jsx(O,{}),n.jsx("div",{className:"el-switch__action",children:n.jsx(F,{})})]}),n.jsx(L,{})]})},fe=u.forwardRef(xy);fe.displayName="Switch";const gy=(t,e)=>{const{style:r,className:i,type:l="info",title:s,effect:o="light",closable:a=!0,closeText:c,close:d,showIcon:h=!1,center:f=!1,description:x}=t,[g,v]=u.useState(!0);function y(){if(!h)return n.jsx(n.Fragment,{});let w=n.jsx(n.Fragment,{});switch(l){case"success":w=n.jsx(n.Fragment,{children:n.jsx(ac,{className:M("el-alert__icon",{"is-big":x})})});break;case"info":w=n.jsx(n.Fragment,{children:n.jsx(Ti,{className:M("el-alert__icon",{"is-big":x})})});break;case"warning":w=n.jsx(n.Fragment,{children:n.jsx(fs,{className:M("el-alert__icon",{"is-big":x})})});break;case"error":w=n.jsx(n.Fragment,{children:n.jsx(kr,{className:M("el-alert__icon",{"is-big":x})})});break}return w}function k(){return x?n.jsx(n.Fragment,{children:n.jsx("p",{className:"el-alert__description",children:x})}):n.jsx(n.Fragment,{})}function m(){d&&d(),v(!1)}const p={display:g?"":"none",...r};function j(){return a?c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-alert__close-btn is-customed",onClick:m,children:c})}):n.jsx(n.Fragment,{children:n.jsx(un,{className:"el-alert__close-btn",onClick:m})}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:p,className:M("el-alert",`el-alert--${l}`,`is-${o}`,{"is-center":f},i),role:"alert",children:[n.jsx(y,{}),n.jsxs("div",{className:"el-alert__content",children:[n.jsx("span",{className:M("el-alert__title",{"is-bold":x}),children:s}),n.jsx(k,{}),n.jsx(j,{})]})]})},le=u.forwardRef(gy);le.displayName="Alert";const jy=u.createContext({}),vy=(t,e)=>{const{style:r,className:i,children:l,activeName:s}=t,o=u.useMemo(()=>({activeName:s}),[s]);return n.jsx(jy.Provider,{value:o,children:n.jsx("div",{ref:e,style:r,className:M(i,"el-collapse"),children:l})})},Tp=u.forwardRef(vy);Tp.displayName="Collapse";const yy=(t,e)=>{const{style:r,className:i,children:l,title:s}=t,[o,a]=u.useState(!1);function c(){a(!o)}return n.jsxs("div",{ref:e,style:r,className:M(i,"el-collapse-item",{"is-active":o}),onClick:c,children:[n.jsxs("button",{className:M("el-collapse-item__header",{"is-active":o}),type:"button",children:[s,n.jsx(cc,{className:"el-collapse-item__arrow"})]}),n.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:o?"":"none"},children:n.jsx("div",{className:"el-collapse-item__content",children:l})})]})},Fr=u.forwardRef(yy);Fr.displayName="CollapseItem";const wy=(t,e)=>{const{style:r,className:i,shape:l="circle",size:s,src:o,icon:a,fit:c="cover",onError:d,children:h}=t,f={...r,"--el-avatar-size":s&&typeof s=="number"?`${s}px`:""},[x,g]=u.useState(!0);function v(){const m=new Image(0,0);o&&(m.src=o),m.onload=()=>{g(!0)},m.onerror=p=>{p instanceof Event&&(p.preventDefault(),p.stopPropagation()),g(!1),d&&d()}}function y(){return x?n.jsx("img",{src:o,style:{objectFit:c}}):n.jsx(n.Fragment,{children:h})}function k(){return a?n.jsx(n.Fragment,{children:a}):o?(v(),n.jsx(n.Fragment,{children:n.jsx(y,{})})):n.jsx(n.Fragment,{children:h})}return n.jsx("span",{ref:e,style:f,className:M(i,"el-avatar",`el-avatar--${l}`,s?`el-avatar--${s}`:"",{"el-avatar--icon":a}),children:n.jsx(k,{})})},Nt=u.forwardRef(wy);Nt.displayName="Avatar";const _y=(t,e)=>{const{style:r,className:i,icon:l="info",title:s,subTitle:o,extra:a}=t;function c(){if(typeof l=="string"){let d=n.jsx(n.Fragment,{});switch(l){case"success":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return d}else return n.jsx(n.Fragment,{children:l})}return n.jsxs("div",{ref:e,style:r,className:M("el-result",i),children:[n.jsx("div",{className:"el-result__icon",children:n.jsx(c,{})}),n.jsx("div",{className:"el-result__title",children:n.jsx("p",{children:s})}),n.jsx("div",{className:"el-result__subtitle",children:n.jsx("p",{children:o})}),n.jsx("div",{className:"el-result__extra",children:a})]})},nr=u.forwardRef(_y);nr.displayName="Result";function hn(t){return Bp(t)?(t.nodeName||"").toLowerCase():"#document"}function Ge(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ut(t){var e;return(e=(Bp(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bp(t){return t instanceof Node||t instanceof Ge(t).Node}function Ee(t){return t instanceof Element||t instanceof Ge(t).Element}function et(t){return t instanceof HTMLElement||t instanceof Ge(t).HTMLElement}function Yo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ge(t).ShadowRoot}function Bi(t){const{overflow:e,overflowX:r,overflowY:i,display:l}=dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(l)}function Cy(t){return["table","td","th"].includes(hn(t))}function hc(t){const e=fc(),r=dt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function ky(t){let e=jr(t);for(;et(e)&&!ms(e);){if(hc(e))return e;e=jr(e)}return null}function fc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ms(t){return["html","body","#document"].includes(hn(t))}function dt(t){return Ge(t).getComputedStyle(t)}function xs(t){return Ee(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function jr(t){if(hn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Yo(t)&&t.host||Ut(t);return Yo(e)?e.host:e}function Rp(t){const e=jr(t);return ms(e)?t.ownerDocument?t.ownerDocument.body:t.body:et(e)&&Bi(e)?e:Rp(e)}function vi(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const l=Rp(t),s=l===((i=t.ownerDocument)==null?void 0:i.body),o=Ge(l);return s?e.concat(o,o.visualViewport||[],Bi(l)?l:[],o.frameElement&&r?vi(o.frameElement):[]):e.concat(l,vi(l,[],r))}function Jd(t){let e=t.activeElement;for(;((r=e)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;e=e.shadowRoot.activeElement}return e}function Zo(t,e){if(!t||!e)return!1;const r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Yo(r)){let i=e;for(;i;){if(t===i)return!0;i=i.parentNode||i.host}}return!1}function Lp(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function by(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:r,version:i}=e;return r+"/"+i}).join(" "):navigator.userAgent}function Sy(t){return!qd()&&t.width===0&&t.height===0||qd()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function Ny(){return/apple/i.test(navigator.vendor)}function qd(){const t=/android/i;return t.test(Lp())||t.test(by())}function Ey(){return Lp().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function $l(t,e){const r=["mouse","pen"];return e||r.push("",void 0),r.includes(t)}function zr(t){return(t==null?void 0:t.ownerDocument)||document}function Ty(t){return"composedPath"in t?t.composedPath()[0]:t.target}const By="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Dp(t){return et(t)&&t.matches(By)}const vr=Math.min,En=Math.max,Hl=Math.round,qi=Math.floor,fn=t=>({x:t,y:t});function Ry(t,e,r){return En(t,vr(e,r))}function Pp(t,e){return typeof t=="function"?t(e):t}function pc(t){return t.split("-")[0]}function mc(t){return t.split("-")[1]}function Ly(t){return t==="x"?"y":"x"}function Ap(t){return t==="y"?"height":"width"}function xc(t){return["top","bottom"].includes(pc(t))?"y":"x"}function Mp(t){return Ly(xc(t))}function Dy(t){return{top:0,right:0,bottom:0,left:0,...t}}function Py(t){return typeof t!="number"?Dy(t):{top:t,right:t,bottom:t,left:t}}function Ip(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function eu(t,e,r){let{reference:i,floating:l}=t;const s=xc(e),o=Mp(e),a=Ap(o),c=pc(e),d=s==="y",h=i.x+i.width/2-l.width/2,f=i.y+i.height/2-l.height/2,x=i[a]/2-l[a]/2;let g;switch(c){case"top":g={x:h,y:i.y-l.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:f};break;case"left":g={x:i.x-l.width,y:f};break;default:g={x:i.x,y:i.y}}switch(mc(e)){case"start":g[o]-=x*(r&&d?-1:1);break;case"end":g[o]+=x*(r&&d?-1:1);break}return g}const Ay=async(t,e,r)=>{const{placement:i="bottom",strategy:l="absolute",middleware:s=[],platform:o}=r,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let d=await o.getElementRects({reference:t,floating:e,strategy:l}),{x:h,y:f}=eu(d,i,c),x=i,g={},v=0;for(let y=0;y<a.length;y++){const{name:k,fn:m}=a[y],{x:p,y:j,data:w,reset:C}=await m({x:h,y:f,initialPlacement:i,placement:x,strategy:l,middlewareData:g,rects:d,platform:o,elements:{reference:t,floating:e}});if(h=p??h,f=j??f,g={...g,[k]:{...g[k],...w}},C&&v<=50){v++,typeof C=="object"&&(C.placement&&(x=C.placement),C.rects&&(d=C.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:l}):C.rects),{x:h,y:f}=eu(d,x,c)),y=-1;continue}}return{x:h,y:f,placement:x,strategy:l,middlewareData:g}},My=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:i,placement:l,rects:s,platform:o,elements:a,middlewareData:c}=e,{element:d,padding:h=0}=Pp(t,e)||{};if(d==null)return{};const f=Py(h),x={x:r,y:i},g=Mp(l),v=Ap(g),y=await o.getDimensions(d),k=g==="y",m=k?"top":"left",p=k?"bottom":"right",j=k?"clientHeight":"clientWidth",w=s.reference[v]+s.reference[g]-x[g]-s.floating[v],C=x[g]-s.reference[g],N=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let E=N?N[j]:0;(!E||!await(o.isElement==null?void 0:o.isElement(N)))&&(E=a.floating[j]||s.floating[v]);const L=w/2-C/2,O=E/2-y[v]/2-1,F=vr(f[m],O),G=vr(f[p],O),q=F,ae=E-y[v]-G,H=E/2-y[v]/2+L,U=Ry(q,H,ae),W=!c.arrow&&mc(l)!=null&&H!=U&&s.reference[v]/2-(H<q?F:G)-y[v]/2<0,S=W?H<q?H-q:H-ae:0;return{[g]:x[g]+S,data:{[g]:U,centerOffset:H-U-S,...W&&{alignmentOffset:S}},reset:W}}});async function Iy(t,e){const{placement:r,platform:i,elements:l}=t,s=await(i.isRTL==null?void 0:i.isRTL(l.floating)),o=pc(r),a=mc(r),c=xc(r)==="y",d=["left","top"].includes(o)?-1:1,h=s&&c?-1:1,f=Pp(e,t);let{mainAxis:x,crossAxis:g,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),c?{x:g*h,y:x*d}:{x:x*d,y:g*h}}const gc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:l,y:s,placement:o,middlewareData:a}=e,c=await Iy(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:l+c.x,y:s+c.y,data:{...c,placement:o}}}}};function Fp(t){const e=dt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const l=et(t),s=l?t.offsetWidth:r,o=l?t.offsetHeight:i,a=Hl(r)!==s||Hl(i)!==o;return a&&(r=s,i=o),{width:r,height:i,$:a}}function jc(t){return Ee(t)?t:t.contextElement}function cr(t){const e=jc(t);if(!et(e))return fn(1);const r=e.getBoundingClientRect(),{width:i,height:l,$:s}=Fp(e);let o=(s?Hl(r.width):r.width)/i,a=(s?Hl(r.height):r.height)/l;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Fy=fn(0);function zp(t){const e=Ge(t);return!fc()||!e.visualViewport?Fy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function zy(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Ge(t)?!1:e}function Pn(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const l=t.getBoundingClientRect(),s=jc(t);let o=fn(1);e&&(i?Ee(i)&&(o=cr(i)):o=cr(t));const a=zy(s,r,i)?zp(s):fn(0);let c=(l.left+a.x)/o.x,d=(l.top+a.y)/o.y,h=l.width/o.x,f=l.height/o.y;if(s){const x=Ge(s),g=i&&Ee(i)?Ge(i):i;let v=x.frameElement;for(;v&&i&&g!==x;){const y=cr(v),k=v.getBoundingClientRect(),m=dt(v),p=k.left+(v.clientLeft+parseFloat(m.paddingLeft))*y.x,j=k.top+(v.clientTop+parseFloat(m.paddingTop))*y.y;c*=y.x,d*=y.y,h*=y.x,f*=y.y,c+=p,d+=j,v=Ge(v).frameElement}}return Ip({width:h,height:f,x:c,y:d})}function Oy(t){let{rect:e,offsetParent:r,strategy:i}=t;const l=et(r),s=Ut(r);if(r===s)return e;let o={scrollLeft:0,scrollTop:0},a=fn(1);const c=fn(0);if((l||!l&&i!=="fixed")&&((hn(r)!=="body"||Bi(s))&&(o=xs(r)),et(r))){const d=Pn(r);a=cr(r),c.x=d.x+r.clientLeft,c.y=d.y+r.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+c.x,y:e.y*a.y-o.scrollTop*a.y+c.y}}function $y(t){return Array.from(t.getClientRects())}function Op(t){return Pn(Ut(t)).left+xs(t).scrollLeft}function Hy(t){const e=Ut(t),r=xs(t),i=t.ownerDocument.body,l=En(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=En(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Op(t);const a=-r.scrollTop;return dt(i).direction==="rtl"&&(o+=En(e.clientWidth,i.clientWidth)-l),{width:l,height:s,x:o,y:a}}function Uy(t,e){const r=Ge(t),i=Ut(t),l=r.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,c=0;if(l){s=l.width,o=l.height;const d=fc();(!d||d&&e==="fixed")&&(a=l.offsetLeft,c=l.offsetTop)}return{width:s,height:o,x:a,y:c}}function Wy(t,e){const r=Pn(t,!0,e==="fixed"),i=r.top+t.clientTop,l=r.left+t.clientLeft,s=et(t)?cr(t):fn(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,c=l*s.x,d=i*s.y;return{width:o,height:a,x:c,y:d}}function tu(t,e,r){let i;if(e==="viewport")i=Uy(t,r);else if(e==="document")i=Hy(Ut(t));else if(Ee(e))i=Wy(e,r);else{const l=zp(t);i={...e,x:e.x-l.x,y:e.y-l.y}}return Ip(i)}function $p(t,e){const r=jr(t);return r===e||!Ee(r)||ms(r)?!1:dt(r).position==="fixed"||$p(r,e)}function Vy(t,e){const r=e.get(t);if(r)return r;let i=vi(t,[],!1).filter(a=>Ee(a)&&hn(a)!=="body"),l=null;const s=dt(t).position==="fixed";let o=s?jr(t):t;for(;Ee(o)&&!ms(o);){const a=dt(o),c=hc(o);!c&&a.position==="fixed"&&(l=null),(s?!c&&!l:!c&&a.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||Bi(o)&&!c&&$p(t,o))?i=i.filter(h=>h!==o):l=a,o=jr(o)}return e.set(t,i),i}function Xy(t){let{element:e,boundary:r,rootBoundary:i,strategy:l}=t;const o=[...r==="clippingAncestors"?Vy(e,this._c):[].concat(r),i],a=o[0],c=o.reduce((d,h)=>{const f=tu(e,h,l);return d.top=En(f.top,d.top),d.right=vr(f.right,d.right),d.bottom=vr(f.bottom,d.bottom),d.left=En(f.left,d.left),d},tu(e,a,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Gy(t){const{width:e,height:r}=Fp(t);return{width:e,height:r}}function Qy(t,e,r){const i=et(e),l=Ut(e),s=r==="fixed",o=Pn(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=fn(0);if(i||!i&&!s)if((hn(e)!=="body"||Bi(l))&&(a=xs(e)),i){const d=Pn(e,!0,s,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else l&&(c.x=Op(l));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function nu(t,e){return!et(t)||dt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Hp(t,e){const r=Ge(t);if(!et(t))return r;let i=nu(t,e);for(;i&&Cy(i)&&dt(i).position==="static";)i=nu(i,e);return i&&(hn(i)==="html"||hn(i)==="body"&&dt(i).position==="static"&&!hc(i))?r:i||ky(t)||r}const Ky=async function(t){let{reference:e,floating:r,strategy:i}=t;const l=this.getOffsetParent||Hp,s=this.getDimensions;return{reference:Qy(e,await l(r),i),floating:{x:0,y:0,...await s(r)}}};function Yy(t){return dt(t).direction==="rtl"}const Zy={convertOffsetParentRelativeRectToViewportRelativeRect:Oy,getDocumentElement:Ut,getClippingRect:Xy,getOffsetParent:Hp,getElementRects:Ky,getClientRects:$y,getDimensions:Gy,getScale:cr,isElement:Ee,isRTL:Yy};function Jy(t,e){let r=null,i;const l=Ut(t);function s(){clearTimeout(i),r&&r.disconnect(),r=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:d,top:h,width:f,height:x}=t.getBoundingClientRect();if(a||e(),!f||!x)return;const g=qi(h),v=qi(l.clientWidth-(d+f)),y=qi(l.clientHeight-(h+x)),k=qi(d),p={rootMargin:-g+"px "+-v+"px "+-y+"px "+-k+"px",threshold:En(0,vr(1,c))||1};let j=!0;function w(C){const N=C[0].intersectionRatio;if(N!==c){if(!j)return o();N?o(!1,N):i=setTimeout(()=>{o(!1,1e-7)},100)}j=!1}try{r=new IntersectionObserver(w,{...p,root:l.ownerDocument})}catch{r=new IntersectionObserver(w,p)}r.observe(t)}return o(!0),s}function vc(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,d=jc(t),h=l||s?[...d?vi(d):[],...vi(e)]:[];h.forEach(m=>{l&&m.addEventListener("scroll",r,{passive:!0}),s&&m.addEventListener("resize",r)});const f=d&&a?Jy(d,r):null;let x=-1,g=null;o&&(g=new ResizeObserver(m=>{let[p]=m;p&&p.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{g&&g.observe(e)})),r()}),d&&!c&&g.observe(d),g.observe(e));let v,y=c?Pn(t):null;c&&k();function k(){const m=Pn(t);y&&(m.x!==y.x||m.y!==y.y||m.width!==y.width||m.height!==y.height)&&r(),y=m,v=requestAnimationFrame(k)}return r(),()=>{h.forEach(m=>{l&&m.removeEventListener("scroll",r),s&&m.removeEventListener("resize",r)}),f&&f(),g&&g.disconnect(),g=null,c&&cancelAnimationFrame(v)}}const ru=My,qy=(t,e,r)=>{const i=new Map,l={platform:Zy,...r},s={...l.platform,_c:i};return Ay(t,e,{...l,platform:s})},yc=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:i,padding:l}=typeof t=="function"?t(r):t;return i&&e(i)?i.current!=null?ru({element:i.current,padding:l}).fn(r):{}:i?ru({element:i,padding:l}).fn(r):{}}}};var hl=typeof document<"u"?u.useLayoutEffect:u.useEffect;function Ul(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,i,l;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(i=r;i--!==0;)if(!Ul(t[i],e[i]))return!1;return!0}if(l=Object.keys(t),r=l.length,r!==Object.keys(e).length)return!1;for(i=r;i--!==0;)if(!{}.hasOwnProperty.call(e,l[i]))return!1;for(i=r;i--!==0;){const s=l[i];if(!(s==="_owner"&&t.$$typeof)&&!Ul(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Up(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function iu(t,e){const r=Up(t);return Math.round(e*r)/r}function lu(t){const e=u.useRef(t);return hl(()=>{e.current=t}),e}function e2(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:i=[],platform:l,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[h,f]=u.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[x,g]=u.useState(i);Ul(x,i)||g(i);const[v,y]=u.useState(null),[k,m]=u.useState(null),p=u.useCallback(W=>{W!=N.current&&(N.current=W,y(W))},[y]),j=u.useCallback(W=>{W!==E.current&&(E.current=W,m(W))},[m]),w=s||v,C=o||k,N=u.useRef(null),E=u.useRef(null),L=u.useRef(h),O=lu(c),F=lu(l),G=u.useCallback(()=>{if(!N.current||!E.current)return;const W={placement:e,strategy:r,middleware:x};F.current&&(W.platform=F.current),qy(N.current,E.current,W).then(S=>{const _={...S,isPositioned:!0};q.current&&!Ul(L.current,_)&&(L.current=_,Ei.flushSync(()=>{f(_)}))})},[x,e,r,F]);hl(()=>{d===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,f(W=>({...W,isPositioned:!1})))},[d]);const q=u.useRef(!1);hl(()=>(q.current=!0,()=>{q.current=!1}),[]),hl(()=>{if(w&&(N.current=w),C&&(E.current=C),w&&C){if(O.current)return O.current(w,C,G);G()}},[w,C,G,O]);const ae=u.useMemo(()=>({reference:N,floating:E,setReference:p,setFloating:j}),[p,j]),H=u.useMemo(()=>({reference:w,floating:C}),[w,C]),U=u.useMemo(()=>{const W={position:r,left:0,top:0};if(!H.floating)return W;const S=iu(H.floating,h.x),_=iu(H.floating,h.y);return a?{...W,transform:"translate("+S+"px, "+_+"px)",...Up(H.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:S,top:_}},[r,a,H.floating,h.x,h.y]);return u.useMemo(()=>({...h,update:G,refs:ae,elements:H,floatingStyles:U}),[h,G,ae,H,U])}const t2=ra.useInsertionEffect,n2=t2||(t=>t());function r2(t){const e=u.useRef(()=>{});return n2(()=>{e.current=t}),u.useCallback(function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e.current==null?void 0:e.current(...i)},[])}var yi=typeof document<"u"?u.useLayoutEffect:u.useEffect;let Ys=!1,i2=0;const su=()=>"floating-ui-"+i2++;function l2(){const[t,e]=u.useState(()=>Ys?su():void 0);return yi(()=>{t==null&&e(su())},[]),u.useEffect(()=>{Ys||(Ys=!0)},[]),t}const s2=ra.useId,o2=s2||l2;function a2(){const t=new Map;return{emit(e,r){var i;(i=t.get(e))==null||i.forEach(l=>l(r))},on(e,r){t.set(e,[...t.get(e)||[],r])},off(e,r){var i;t.set(e,((i=t.get(e))==null?void 0:i.filter(l=>l!==r))||[])}}}const c2=u.createContext(null),d2=u.createContext(null),Wp=()=>{var t;return((t=u.useContext(c2))==null?void 0:t.id)||null},Vp=()=>u.useContext(d2);function Xp(t){return"data-floating-ui-"+t}function ou(t){const e=u.useRef(t);return yi(()=>{e.current=t}),e}const au=Xp("safe-polygon");function Zs(t,e,r){return r&&!$l(r)?0:typeof t=="number"?t:t==null?void 0:t[e]}function Gp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,events:s,elements:{domReference:o,floating:a},refs:c}=t,{enabled:d=!0,delay:h=0,handleClose:f=null,mouseOnly:x=!1,restMs:g=0,move:v=!0}=e,y=Vp(),k=Wp(),m=ou(f),p=ou(h),j=u.useRef(),w=u.useRef(),C=u.useRef(),N=u.useRef(),E=u.useRef(!0),L=u.useRef(!1),O=u.useRef(()=>{}),F=u.useCallback(()=>{var H;const U=(H=l.current.openEvent)==null?void 0:H.type;return(U==null?void 0:U.includes("mouse"))&&U!=="mousedown"},[l]);u.useEffect(()=>{if(!d)return;function H(U){let{open:W}=U;W||(clearTimeout(w.current),clearTimeout(N.current),E.current=!0)}return s.on("openchange",H),()=>{s.off("openchange",H)}},[d,s]),u.useEffect(()=>{if(!d||!m.current||!r)return;function H(W){F()&&i(!1,W,"hover")}const U=zr(a).documentElement;return U.addEventListener("mouseleave",H),()=>{U.removeEventListener("mouseleave",H)}},[a,r,i,d,m,l,F]);const G=u.useCallback(function(H,U,W){U===void 0&&(U=!0),W===void 0&&(W="hover");const S=Zs(p.current,"close",j.current);S&&!C.current?(clearTimeout(w.current),w.current=setTimeout(()=>i(!1,H,W),S)):U&&(clearTimeout(w.current),i(!1,H,W))},[p,i]),q=u.useCallback(()=>{O.current(),C.current=void 0},[]),ae=u.useCallback(()=>{if(L.current){const H=zr(c.floating.current).body;H.style.pointerEvents="",H.removeAttribute(au),L.current=!1}},[c]);return u.useEffect(()=>{if(!d)return;function H(){return l.current.openEvent?["click","mousedown"].includes(l.current.openEvent.type):!1}function U(_){if(clearTimeout(w.current),E.current=!1,x&&!$l(j.current)||g>0&&Zs(p.current,"open")===0)return;const B=Zs(p.current,"open",j.current);B?w.current=setTimeout(()=>{i(!0,_,"hover")},B):i(!0,_,"hover")}function W(_){if(H())return;O.current();const B=zr(a);if(clearTimeout(N.current),m.current){r||clearTimeout(w.current),C.current=m.current({...t,tree:y,x:_.clientX,y:_.clientY,onClose(){ae(),q(),G(_,!0,"safe-polygon")}});const $=C.current;B.addEventListener("mousemove",$),O.current=()=>{B.removeEventListener("mousemove",$)};return}(j.current==="touch"?!Zo(a,_.relatedTarget):!0)&&G(_)}function S(_){H()||m.current==null||m.current({...t,tree:y,x:_.clientX,y:_.clientY,onClose(){ae(),q(),G(_)}})(_)}if(Ee(o)){const _=o;return r&&_.addEventListener("mouseleave",S),a==null||a.addEventListener("mouseleave",S),v&&_.addEventListener("mousemove",U,{once:!0}),_.addEventListener("mouseenter",U),_.addEventListener("mouseleave",W),()=>{r&&_.removeEventListener("mouseleave",S),a==null||a.removeEventListener("mouseleave",S),v&&_.removeEventListener("mousemove",U),_.removeEventListener("mouseenter",U),_.removeEventListener("mouseleave",W)}}},[o,a,d,t,x,g,v,G,q,ae,i,r,y,p,m,l]),yi(()=>{var H;if(d&&r&&(H=m.current)!=null&&H.__options.blockPointerEvents&&F()){const W=zr(a).body;if(W.setAttribute(au,""),W.style.pointerEvents="none",L.current=!0,Ee(o)&&a){var U;const S=o,_=y==null||(U=y.nodesRef.current.find(B=>B.id===k))==null||(U=U.context)==null?void 0:U.elements.floating;return _&&(_.style.pointerEvents=""),S.style.pointerEvents="auto",a.style.pointerEvents="auto",()=>{S.style.pointerEvents="",a.style.pointerEvents=""}}}},[d,r,k,a,o,y,m,l,F]),yi(()=>{r||(j.current=void 0,q(),ae())},[r,q,ae]),u.useEffect(()=>()=>{q(),clearTimeout(w.current),clearTimeout(N.current),ae()},[d,o,q,ae]),u.useMemo(()=>{if(!d)return{};function H(U){j.current=U.pointerType}return{reference:{onPointerDown:H,onPointerEnter:H,onMouseMove(U){r||g===0||(clearTimeout(N.current),N.current=setTimeout(()=>{E.current||i(!0,U.nativeEvent,"hover")},g))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(U){G(U.nativeEvent,!1)}}}},[d,g,r,i,G])}function cu(t){return et(t.target)&&t.target.tagName==="BUTTON"}function du(t){return Dp(t)}function wi(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,elements:{domReference:s}}=t,{enabled:o=!0,event:a="click",toggle:c=!0,ignoreMouse:d=!1,keyboardHandlers:h=!0}=e,f=u.useRef(),x=u.useRef(!1);return u.useMemo(()=>o?{reference:{onPointerDown(g){f.current=g.pointerType},onMouseDown(g){g.button===0&&($l(f.current,!0)&&d||a!=="click"&&(r&&c&&(!l.current.openEvent||l.current.openEvent.type==="mousedown")?i(!1,g.nativeEvent,"click"):(g.preventDefault(),i(!0,g.nativeEvent,"click"))))},onClick(g){if(a==="mousedown"&&f.current){f.current=void 0;return}$l(f.current,!0)&&d||(r&&c&&(!l.current.openEvent||l.current.openEvent.type==="click")?i(!1,g.nativeEvent,"click"):i(!0,g.nativeEvent,"click"))},onKeyDown(g){f.current=void 0,!(g.defaultPrevented||!h||cu(g))&&(g.key===" "&&!du(s)&&(g.preventDefault(),x.current=!0),g.key==="Enter"&&i(!(r&&c),g.nativeEvent,"click"))},onKeyUp(g){g.defaultPrevented||!h||cu(g)||du(s)||g.key===" "&&x.current&&(x.current=!1,i(!(r&&c),g.nativeEvent,"click"))}}}:{},[o,l,a,d,h,s,c,r,i])}function wc(t){var e;t===void 0&&(t={});const{open:r=!1,onOpenChange:i,nodeId:l}=t,[s,o]=u.useState(null),a=((e=t.elements)==null?void 0:e.reference)||s,c=e2(t),d=Vp(),h=Wp()!=null,f=r2((C,N,E)=>{C&&(g.current.openEvent=N),v.emit("openchange",{open:C,event:N,reason:E,nested:h}),i==null||i(C,N,E)}),x=u.useRef(null),g=u.useRef({}),v=u.useState(()=>a2())[0],y=o2(),k=u.useCallback(C=>{const N=Ee(C)?{getBoundingClientRect:()=>C.getBoundingClientRect(),contextElement:C}:C;c.refs.setReference(N)},[c.refs]),m=u.useCallback(C=>{(Ee(C)||C===null)&&(x.current=C,o(C)),(Ee(c.refs.reference.current)||c.refs.reference.current===null||C!==null&&!Ee(C))&&c.refs.setReference(C)},[c.refs]),p=u.useMemo(()=>({...c.refs,setReference:m,setPositionReference:k,domReference:x}),[c.refs,m,k]),j=u.useMemo(()=>({...c.elements,domReference:a}),[c.elements,a]),w=u.useMemo(()=>({...c,refs:p,elements:j,dataRef:g,nodeId:l,floatingId:y,events:v,open:r,onOpenChange:f}),[c,l,y,v,r,f,p,j]);return yi(()=>{const C=d==null?void 0:d.nodesRef.current.find(N=>N.id===l);C&&(C.context=w)}),u.useMemo(()=>({...c,context:w,refs:p,elements:j}),[c,p,j,w])}function Qp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,events:l,refs:s,elements:{floating:o,domReference:a}}=t,{enabled:c=!0,visibleOnly:d=!0}=e,h=u.useRef(!1),f=u.useRef(),x=u.useRef(!0);return u.useEffect(()=>{if(!c)return;const g=Ge(a);function v(){!r&&et(a)&&a===Jd(zr(a))&&(h.current=!0)}function y(){x.current=!0}return g.addEventListener("blur",v),g.addEventListener("keydown",y,!0),()=>{g.removeEventListener("blur",v),g.removeEventListener("keydown",y,!0)}},[o,a,r,c]),u.useEffect(()=>{if(!c)return;function g(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(h.current=!0)}return l.on("openchange",g),()=>{l.off("openchange",g)}},[l,c]),u.useEffect(()=>()=>{clearTimeout(f.current)},[]),u.useMemo(()=>c?{reference:{onPointerDown(g){Sy(g.nativeEvent)||(x.current=!1)},onMouseLeave(){h.current=!1},onFocus(g){if(h.current)return;const v=Ty(g.nativeEvent);if(d&&Ee(v))try{if(Ny()&&Ey())throw Error();if(!v.matches(":focus-visible"))return}catch{if(!x.current&&!Dp(v))return}i(!0,g.nativeEvent,"focus")},onBlur(g){h.current=!1;const v=g.relatedTarget,y=Ee(v)&&v.hasAttribute(Xp("focus-guard"))&&v.getAttribute("data-type")==="outside";f.current=window.setTimeout(()=>{const k=Jd(a?a.ownerDocument:document);!v&&k===a||Zo(s.floating.current,v)||Zo(a,v)||y||i(!1,g.nativeEvent,"focus")})}}}:{},[c,d,a,s,i])}const uu="active",hu="selected";function Js(t,e,r){const i=new Map,l=r==="item";let s=t;if(l&&t){const{[uu]:o,[hu]:a,...c}=t;s=c}return{...r==="floating"&&{tabIndex:-1},...s,...e.map(o=>{const a=o?o[r]:null;return typeof a=="function"?t?a(t):null:a}).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(c=>{let[d,h]=c;if(!(l&&[uu,hu].includes(d)))if(d.indexOf("on")===0){if(i.has(d)||i.set(d,[]),typeof h=="function"){var f;(f=i.get(d))==null||f.push(h),o[d]=function(){for(var x,g=arguments.length,v=new Array(g),y=0;y<g;y++)v[y]=arguments[y];return(x=i.get(d))==null?void 0:x.map(k=>k(...v)).find(k=>k!==void 0)}}}else o[d]=h}),o),{})}}function _c(t){t===void 0&&(t=[]);const e=t,r=u.useCallback(s=>Js(s,t,"reference"),e),i=u.useCallback(s=>Js(s,t,"floating"),e),l=u.useCallback(s=>Js(s,t,"item"),t.map(s=>s==null?void 0:s.item));return u.useMemo(()=>({getReferenceProps:r,getFloatingProps:i,getItemProps:l}),[r,i,l])}const u2=(t,e)=>{const{style:r,className:i,placement:l,content:s,effect:o,getFloatingProps:a,children:c}=t;function d(){return typeof s=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:s})}):n.jsx(n.Fragment,{children:s})}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:r,className:M("el-popper",`is-${o}`,i),"data-popper-placement":l,...a(),children:[n.jsx(d,{}),c]})})},Kp=u.forwardRef(u2);Kp.displayName="TooltipPopper";const h2=t=>{var E,L;const{style:e,className:r,effect:i="dark",placement:l="bottom",trigger:s="hover",content:o,showAfter:a=0,hideAfter:c=200,disabled:d=!0,children:h}=t,[f,x]=u.useState(!1),g=u.useRef(null),{refs:v,floatingStyles:y,context:k,middlewareData:m}=wc({placement:l,middleware:[gc(12),yc({element:g})],open:f&&d,whileElementsMounted:vc,onOpenChange:x});let p={};switch(s){case"hover":p=Gp(k,{delay:{open:a,close:c}});break;case"click":p=wi(k);break;case"focus":p=Qp(k);break;case"contextmenu":p=wi(k,{event:"mousedown"});break}const{getReferenceProps:j,getFloatingProps:w}=_c([p]),C=u.cloneElement(u.Children.only(h),{ref:v.setReference,...j()}),N={...e,...y};return n.jsxs(n.Fragment,{children:[f&&Ei.createPortal(n.jsx(Kp,{ref:v.setFloating,style:N,className:M(r),effect:i,placement:l,content:o,getFloatingProps:w,children:n.jsx("span",{ref:g,className:"el-popper__arrow",style:{position:"absolute",left:(E=m.arrow)==null?void 0:E.x,top:(L=m.arrow)==null?void 0:L.y}})}),document.body),C]})},we=u.forwardRef(h2);we.displayName="Tooltip";const f2=(t,e)=>{const{style:r,className:i,placement:l,title:s,content:o,getFloatingProps:a,children:c}=t;function d(){return typeof o=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:o})}):n.jsx(n.Fragment,{children:o})}const h={width:"200px",...r};return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:h,className:M("el-popper is-light el-popover el-popover--plain",i),"data-popper-placement":l,...a(),children:[n.jsx("div",{className:"el-popover__title",role:"title",children:s}),n.jsx(d,{}),c]})})},Yp=u.forwardRef(f2);Yp.displayName="PopoverPopper";const p2=t=>{var N,E;const{style:e,className:r,placement:i="bottom",trigger:l="hover",title:s,content:o,showAfter:a=0,hideAfter:c=200,children:d}=t,[h,f]=u.useState(!1),x=u.useRef(null),{refs:g,floatingStyles:v,context:y,middlewareData:k}=wc({placement:i,middleware:[gc(12),yc({element:x})],open:h,whileElementsMounted:vc,onOpenChange:f});let m={};switch(l){case"hover":m=Gp(y,{delay:{open:a,close:c}});break;case"click":m=wi(y);break;case"focus":m=Qp(y);break;case"contextmenu":m=wi(y,{event:"mousedown"});break}const{getReferenceProps:p,getFloatingProps:j}=_c([m]),w=u.cloneElement(u.Children.only(d),{ref:g.setReference,...p()}),C={...e,...v};return n.jsxs(n.Fragment,{children:[h&&Ei.createPortal(n.jsx(Yp,{ref:g.setFloating,style:C,className:M(r),placement:i,title:s,content:o,getFloatingProps:j,children:n.jsx("span",{ref:x,className:"el-popper__arrow",style:{position:"absolute",left:(N=k.arrow)==null?void 0:N.x,top:(E=k.arrow)==null?void 0:E.y}})}),document.body),w]})},Or=u.forwardRef(p2);Or.displayName="Popover";const m2=(t,e)=>{const{style:r,className:i,percentage:l=0,format:s,status:o,textInside:a=!1,strokeWidth:c=6}=t;function d(){return a?s?n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsx("span",{children:s(l)})}):n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsxs("span",{children:[l,"%"]})}):n.jsx(n.Fragment,{})}function h(){if(!a)if(o){let f;switch(o){case"success":f=n.jsx(dc,{});break;case"warning":f=n.jsx(fs,{});break;case"exception":f=n.jsx(kr,{});break}return f}else return s?n.jsx("span",{children:s(l)}):n.jsxs("span",{children:[l,"%"]});return n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:M("el-progress el-progress--line",o?`is-${o}`:"",i),role:"progressbar",children:[n.jsx("div",{className:"el-progress-bar",children:n.jsx("div",{className:"el-progress-bar__outer",style:{height:`${c}px`},children:n.jsx("div",{className:"el-progress-bar__inner",style:{width:`${l}%`,animationDuration:"3s"},children:n.jsx(d,{})})})}),n.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:n.jsx(h,{})})]})},St=u.forwardRef(m2);St.displayName="Progress";const x2=(t,e)=>{const{style:r,className:i,placement:l,title:s,width:o,icon:a,iconColor:c,hideIcon:d,confirmButtonText:h,cancelButtonText:f,onConfirm:x,onCancel:g,getFloatingProps:v,children:y}=t,k={width:o?typeof o=="string"?o:`${o}px`:"150px",...r};function m(){return d?n.jsx(n.Fragment,{}):u.cloneElement(a,{className:M(a==null?void 0:a.props.className,"el-popconfirm__icon"),style:{color:c}})}function p(w){g&&(console.log(w),g(w))}function j(w){x&&x(w)}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:k,className:M("el-popper is-light el-popover",i),"data-popper-placement":l,...v(),children:[n.jsxs("div",{className:"el-popconfirm",children:[n.jsxs("div",{className:"el-popconfirm__main",children:[n.jsx(m,{}),s]}),n.jsxs("div",{className:"el-popconfirm__action",children:[n.jsx(b,{onClick:p,children:f}),n.jsx(b,{type:"primary",onClick:j,children:h})]})]}),y]})})},Zp=u.forwardRef(x2);Zp.displayName="PopconfirmPopper";const g2=t=>{var F,G;const{style:e,className:r,placement:i="bottom",title:l,width:s=150,icon:o=n.jsx(Np,{}),iconColor:a="#f90",hideIcon:c=!1,confirmButtonText:d="Yes",cancelButtonText:h="No",onConfirm:f,onCancel:x,children:g}=t,[v,y]=u.useState(!1),k=u.useRef(null),{refs:m,floatingStyles:p,context:j,middlewareData:w}=wc({placement:i,middleware:[gc(12),yc({element:k})],open:v,whileElementsMounted:vc,onOpenChange:y}),C=wi(j),{getReferenceProps:N,getFloatingProps:E}=_c([C]),L=u.cloneElement(u.Children.only(g),{ref:m.setReference,...N()}),O={...e,...p};return n.jsxs(n.Fragment,{children:[v&&Ei.createPortal(n.jsx(Zp,{ref:m.setFloating,style:O,className:M(r),placement:i,title:l,width:s,icon:o,iconColor:a,hideIcon:c,confirmButtonText:d,cancelButtonText:h,onConfirm:f,onCancel:x,getFloatingProps:E,children:n.jsx("span",{ref:k,className:"el-popper__arrow",style:{position:"absolute",left:(F=w.arrow)==null?void 0:F.x,top:(G=w.arrow)==null?void 0:G.y}})}),document.body),L]})},gs=u.forwardRef(g2);gs.displayName="Popconfirm";const j2=(t,e)=>{const{style:r,className:i,type:l="",closable:s=!1,size:o="",effect:a="light",round:c=!1,children:d}=t;function h(){return s?n.jsx(un,{className:"el-tag__close"}):n.jsx(n.Fragment,{})}return n.jsxs("span",{ref:e,style:r,className:M("el-tag el-tag--light",l?`el-tag--${l}`:"",o?`el-tag--${o}`:"",a?`el-tag--${a}`:"",c?"is-round":"",i),children:[n.jsx("span",{className:"el-tag__content",children:d}),n.jsx(h,{})]})},pe=u.forwardRef(j2);pe.displayName="Tag";const v2=(t,e)=>{const{style:r,className:i,open:l=!1,width:s="50%",title:o,footer:a,onClose:c,showClose:d=!0,header:h,children:f}=t,x={zIndex:2015,...r,display:l?"":"none"};function g(){return h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-dialog__title",children:o})})}return n.jsx("div",{ref:e,style:x,className:M("el-overlay",i),children:n.jsx("div",{role:"dialog",className:"el-overlay-dialog",children:n.jsxs("div",{className:"el-dialog",style:{"--el-dialog-width":s},children:[n.jsxs("header",{className:"el-dialog__header",children:[n.jsx(g,{}),d&&n.jsx("button",{"aria-label":"Close this dialog",className:"el-dialog__headerbtn",type:"button",onClick:c,children:n.jsx(un,{className:"el-dialog__close"})})]}),n.jsx("div",{id:"el-id-9273-97",className:"el-dialog__body",children:f}),n.jsx("footer",{className:"el-dialog__footer",children:a})]})})})},_i=u.forwardRef(v2);_i.displayName="Dialog";function y2(t,e){const r=u.useRef(e);u.useEffect(()=>{r.current=e},[e]),u.useEffect(()=>{const i=l=>{var s;(((s=t.current)==null?void 0:s.contains(l.target))??!1)||r.current&&r.current()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[t])}const w2=(t,e)=>{const{style:r,className:i,open:l=!1,direction:s="rtl",title:o,onClose:a,header:c,footer:d,withHeader:h=!0,size:f="30%",showClose:x=!0,children:g}=t,v=u.useRef(null),y={...r,display:l?"":"none"};y2(v,()=>{l&&a&&a()});function k(){return c?n.jsx(n.Fragment,{children:c}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-drawer__title",children:o})})}return n.jsx("div",{ref:e,style:y,className:M("el-overlay",i),children:n.jsxs("div",{ref:v,className:M("el-drawer open",s),role:"dialog",style:{width:["ltr","rtl"].includes(s)?f:"",height:["ttb","btt"].includes(s)?f:""},children:[n.jsx("span",{className:"el-drawer__sr-focus"}),h&&n.jsxs("header",{className:"el-drawer__header",children:[n.jsx(k,{}),x&&n.jsx("button",{className:"el-drawer__close-btn",type:"button",onClick:a,children:n.jsx(un,{className:"el-drawer__close"})})]}),n.jsx("div",{className:"el-drawer__body",children:g}),d&&n.jsx("div",{className:"el-drawer__footer",children:d})]})})},An=u.forwardRef(w2);An.displayName="DrawerComponent";const _2=(t,e)=>{const{style:r,className:i,columns:l,data:s,stripe:o=!1,border:a=!1}=t,c={...r,width:"100%"},d=l==null?void 0:l.map(x=>n.jsx("col",{width:x.width})),h=l==null?void 0:l.map(x=>n.jsx("th",{className:"is-leaf el-table__cell",colSpan:1,rowSpan:1,children:n.jsx("div",{className:"cell",children:x.label})})),f=s==null?void 0:s.map((x,g)=>n.jsx("tr",{className:M("el-table__row",{"el-table__row--striped":g%2===1}),children:l==null?void 0:l.map(v=>n.jsx("td",{className:"el-table__cell",rowSpan:1,colSpan:1,children:n.jsx("div",{className:"cell",children:x[v.dataIndex]})}))}));return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:c,className:M("el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none",i,{"el-table--striped":o,"el-table--border":a}),children:[n.jsxs("div",{className:"el-table__inner-wrapper",children:[n.jsxs("div",{className:"hidden-columns",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("div",{className:"el-table__header-wrapper",children:n.jsxs("table",{className:"el-table__header",border:0,cellPadding:"0",cellSpacing:"0",style:{width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("thead",{className:"",children:n.jsx("tr",{className:"",children:h})})]})}),n.jsx("div",{className:"el-table__body-wrapper",children:n.jsxs("div",{className:"el-scrollbar",children:[n.jsx("div",{className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",children:n.jsx("div",{className:"el-scrollbar__view",style:{display:"inline-block",verticalAlign:"middle"},children:n.jsxs("table",{className:"el-table__body",cellSpacing:"0",cellPadding:"0",border:0,style:{tableLayout:"fixed",width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("tbody",{children:f})]})})}),n.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),n.jsx("div",{className:"el-scrollbar__bar is-vertical",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateY(0%)"}})})]})})]}),n.jsx("div",{className:"el-table__column-resize-proxy",style:{display:"none"}})]})})},js=u.forwardRef(_2);js.displayName="TableComponent";function C2(t,e){const r=u.useRef(e);u.useEffect(()=>{r.current=e},[e]),u.useEffect(()=>{var s,o;const i=a=>{r.current&&r.current(a,"mouseenter")},l=a=>{r.current&&r.current(a,"mouseleave")};return(s=t.current)==null||s.addEventListener("mouseenter",i),(o=t.current)==null||o.addEventListener("mouseleave",l),()=>{var a,c;(a=t.current)==null||a.removeEventListener("mouseenter",i),(c=t.current)==null||c.removeEventListener("mouseleave",l)}},[t])}const k2=t=>{const{style:e,className:r,minSize:i=20,children:l}=t,s=u.useRef(null),o=u.useRef(null),a=u.useRef(null),c=u.useRef(null),[d,h]=u.useState(!1),[f,x]=u.useState(!1),[g,v]=u.useState(0),[y,k]=u.useState("translateY(0%)");C2(s,(w,C)=>{h(C==="mouseenter")}),u.useEffect(()=>{if(s.current&&o.current&&a.current){const w=o.current.offsetHeight,C=a.current.scrollHeight,N=C>w;x(N),v(Math.max(w/C*w,i))}},[l]);function m(){if(o.current&&a.current&&c.current){const w=o.current.offsetHeight,C=o.current.scrollHeight,N=o.current.scrollTop,E=c.current.offsetHeight;k(`translateY(${N/(C-w)*((E-g)/g)*100}%)`)}}function p(w){console.log(w)}function j(w){w.stopPropagation()}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:s,style:e,className:M("el-scrollbar",r),children:[n.jsx("div",{ref:o,className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",style:{height:"400px"},onScroll:m,children:n.jsx("div",{ref:a,className:"el-scrollbar__view",children:l})}),n.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),n.jsx("div",{ref:c,className:"el-scrollbar__bar is-vertical",style:{display:f&&d?"":"none"},onClick:p,children:n.jsx("div",{onClick:j,className:"el-scrollbar__thumb",style:{height:`${g}px`,transform:y}})})]})})},Jp=u.forwardRef(k2);Jp.displayName="ScrollbarComponent";const b2=(t,e)=>{const{style:r,className:i,value:l="",type:s="danger",max:o=99,isDot:a=!1,children:c}=t;function d(){return typeof l=="number"&&l>o?`${o}+`:l}return n.jsxs("div",{ref:e,style:r,className:M("el-badge",i),children:[c,n.jsx("sup",{className:M("el-badge__content is-fixed",`el-badge__content--${s}`,{"is-dot":a}),children:d()})]})},xt=u.forwardRef(b2);xt.displayName="Badge";const S2=(t,e)=>{const{style:r,className:i}=t;return n.jsxs("div",{ref:e,style:r,className:M(i,"el-rate"),role:"slider",children:[n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})})]})},qp=u.forwardRef(S2);qp.displayName="Rate";const N2=(t,e)=>{const{style:r,className:i,wrap:l=!1,direction:s="horizontal",size:o="small",spacer:a,alignment:c="center",children:d}=t,f={flexWrap:l?"wrap":null,alignItems:c,gap:{large:"16px",default:"12px",small:"8px"}[o]||`${o}px`,...r};function x(g){const{count:v,index:y}=g;return!a||v-1===y?n.jsx(n.Fragment,{}):n.jsx(n.Fragment,{children:n.jsx("span",{children:a})})}return n.jsx("div",{ref:e,style:f,className:M("el-space",`el-space--${s}`,i),children:u.Children.map(d,(g,v)=>n.jsxs(na.Fragment,{children:[n.jsx("div",{className:"el-space__item",children:g}),n.jsx(x,{count:u.Children.count(d),index:v})]},v))})},ze=u.forwardRef(N2);ze.displayName="Space";function E2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{children:"Default"}),n.jsx(b,{type:"primary",children:"Primary"}),n.jsx(b,{type:"success",children:"Success"}),n.jsx(b,{type:"info",children:"Info"}),n.jsx(b,{type:"warning",children:"Warning"}),n.jsx(b,{type:"danger",children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{plain:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{round:!0,children:"Round"}),n.jsx(b,{type:"primary",round:!0,children:"Primary"}),n.jsx(b,{type:"success",round:!0,children:"Success"}),n.jsx(b,{type:"info",round:!0,children:"Info"}),n.jsx(b,{type:"warning",round:!0,children:"Warning"}),n.jsx(b,{type:"danger",round:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{icon:n.jsx(tc,{}),circle:!0}),n.jsx(b,{type:"primary",icon:n.jsx(us,{}),circle:!0}),n.jsx(b,{type:"success",icon:n.jsx(ji,{}),circle:!0}),n.jsx(b,{type:"info",icon:n.jsx(nc,{}),circle:!0}),n.jsx(b,{type:"warning",icon:n.jsx(rc,{}),circle:!0}),n.jsx(b,{type:"danger",icon:n.jsx(ic,{}),circle:!0})]})]})}function T2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",disabled:!0,children:"Success"}),n.jsx(b,{type:"info",disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",disabled:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{plain:!0,disabled:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,disabled:!0,children:"Danger"})]})]})}function B2(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic link button"}),n.jsx(b,{link:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,children:"Danger"}),n.jsx("p",{children:"Disabled link button"}),n.jsx(b,{link:!0,disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,disabled:!0,children:"Danger"})]})}function R2(){const t=[{type:"",text:"plain"},{type:"primary",text:"primary"},{type:"success",text:"success"},{type:"info",text:"info"},{type:"warning",text:"warning"},{type:"danger",text:"danger"}],e=t.map((l,s)=>n.jsx(b,{type:l.type,text:!0,children:l.text},s)),r=t.map((l,s)=>n.jsx(b,{type:l.type,text:!0,bg:!0,children:l.text},s)),i=t.map((l,s)=>n.jsx(b,{type:l.type,text:!0,disabled:!0,children:l.text},s));return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic text button"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:e}),n.jsx("p",{children:"Background color always on"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:r}),n.jsx("p",{children:"Disabled text button"}),n.jsx("div",{className:"flex justify-space-between flex-wrap gap-4",children:i})]})}function fu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Button 按钮"}),`
`,`
`,n.jsx(e.p,{children:"常用的操作按钮。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"type"}),"、",n.jsx(e.code,{children:"plain"}),"、",n.jsx(e.code,{children:"round"})," 和 ",n.jsx(e.code,{children:"circle"})," 来定义按钮的样式。"]}),`
`,n.jsx(R,{name:"ButtonBasic",children:n.jsx(E2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.code,{children:"disabled"})," 属性来定义按钮是否被禁用。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"disabled"})," 属性来控制按钮是否为禁用状态。 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"})," 类型的值。"]}),`
`,n.jsx(R,{name:"ButtonDisabled",children:n.jsx(T2,{})}),`
`,n.jsx(e.h2,{children:"链接按钮"}),`
`,n.jsx(R,{name:"ButtonLink",children:n.jsx(B2,{})}),`
`,n.jsx(e.h2,{children:"文字按钮"}),`
`,n.jsx(e.p,{children:"没有边框和背景色的按钮。"}),`
`,n.jsx(R,{name:"ButtonText",children:n.jsx(R2,{})}),`
`,n.jsx(e.h2,{children:"Button API"}),`
`,n.jsx(e.h3,{children:"Button Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' 'success' 'warning' 'danger' 'info' 'text'(delete)"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"plain"}),n.jsx(e.td,{children:"是否为朴素按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"text"}),n.jsx(e.td,{children:"是否为文字按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"bg"}),n.jsx(e.td,{children:"是否显示文字按钮背景颜色"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:"是否为链接按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"是否为圆角按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"circle"}),n.jsx(e.td,{children:"是否为圆形按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"按钮是否为禁用状态"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function L2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fu,{...t})}):fu(t)}function D2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"})]})})})}function P2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"}),n.jsx(ps,{children:"Footer"})]})})})}function A2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsx(gn,{children:"Main"})]})})})}function M2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsx(gn,{children:"Main"})]})]})})})}function I2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx(gn,{children:"Main"}),n.jsx(ps,{children:"Footer"})]})]})]})})})}function F2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"})]})]})})})}function z2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"}),n.jsx(ps,{children:"Footer"})]})]})})})}function pu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(R,{name:"ContainerBasic",children:n.jsx(D2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic1",children:n.jsx(P2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic2",children:n.jsx(A2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic3",children:n.jsx(M2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic4",children:n.jsx(I2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic5",children:n.jsx(F2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(R,{name:"ContainerBasic6",children:n.jsx(z2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]})]})}function O2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pu,{...t})}):pu(t)}function $2(){return n.jsxs(n.Fragment,{children:[n.jsx(us,{style:{fontSize:"20px"}}),n.jsx(tc,{style:{fontSize:"20px"}}),n.jsx(ji,{style:{fontSize:"20px"}}),n.jsx(nc,{style:{fontSize:"20px"}}),n.jsx(rc,{style:{fontSize:"20px"}}),n.jsx(ic,{style:{fontSize:"20px"}}),n.jsx(hs,{style:{fontSize:"20px"}}),n.jsx(lc,{style:{fontSize:"20px"}}),n.jsx(sc,{style:{fontSize:"20px"}}),n.jsx(oc,{style:{fontSize:"20px"}}),n.jsx(Ti,{style:{fontSize:"20px"}}),n.jsx(fs,{style:{fontSize:"20px"}}),n.jsx(kr,{style:{fontSize:"20px"}}),n.jsx(ac,{style:{fontSize:"20px"}}),n.jsx(cc,{style:{fontSize:"20px"}}),n.jsx(dc,{style:{fontSize:"20px"}}),n.jsx(un,{style:{fontSize:"20px"}}),n.jsx(uc,{style:{fontSize:"20px"}})]})}function mu(t){const e={h1:"h1",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Icon"}),`
`,`
`,n.jsx(R,{name:"IconBasic",children:n.jsx($2,{})})]})}function H2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(mu,{...t})}):mu(t)}function U2(){return n.jsxs(n.Fragment,{children:[n.jsx(re,{children:n.jsx(I,{span:24,children:n.jsx("div",{className:"grid-content ep-bg-purple-dark"})})}),n.jsxs(re,{children:[n.jsx(I,{span:12,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:12,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(re,{children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]})]}),n.jsxs(re,{children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(re,{children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]})]})}function W2(){return n.jsx(n.Fragment,{children:n.jsxs(re,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})})}function V2(){return n.jsxs(n.Fragment,{children:[n.jsxs(re,{gutter:20,children:[n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{gutter:20,children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{gutter:20,children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function X2(){return n.jsxs(n.Fragment,{children:[n.jsxs(re,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{gutter:20,children:[n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsx(re,{gutter:20,children:n.jsx(I,{span:12,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})})]})}function G2(){return n.jsxs(n.Fragment,{children:[n.jsxs(re,{className:"row-bg",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{className:"row-bg",justify:"center",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{className:"row-bg",justify:"end",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{className:"row-bg",justify:"space-between",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{className:"row-bg",justify:"space-around",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(re,{className:"row-bg",justify:"space-evenly",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function Q2(){return n.jsx(n.Fragment,{children:n.jsxs(re,{gutter:10,children:[n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})})]})})}function xu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Layout 布局"}),`
`,`
`,n.jsx(e.p,{children:"通过基础的 24 分栏，迅速简便地创建布局。"}),`
`,n.jsx(e.h2,{children:"基础布局"}),`
`,n.jsx(e.p,{children:"使用列创建基础网格布局。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"Row"})," 和 ",n.jsx(e.code,{children:"Col"})," 组件，并通过 col 组件的 ",n.jsx(e.code,{children:"Span"})," 属性我们就可以自由地组合布局。"]}),`
`,n.jsx(R,{name:"LayoutBasic",children:n.jsx(U2,{})}),`
`,n.jsx(e.h2,{children:"分栏间隔"}),`
`,n.jsx(e.p,{children:"支持列间距。"}),`
`,n.jsx(e.p,{children:"行提供 gutter 属性来指定列之间的间距，其默认值为0。"}),`
`,n.jsx(R,{name:"LayoutGutter",children:n.jsx(W2,{})}),`
`,n.jsx(e.h2,{children:"混合布局"}),`
`,n.jsx(e.p,{children:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}),`
`,n.jsx(R,{name:"LayoutMix",children:n.jsx(V2,{})}),`
`,n.jsx(e.h2,{children:"列偏移"}),`
`,n.jsx(e.p,{children:"您可以指定列偏移量。"}),`
`,n.jsxs(e.p,{children:["通过制定 col 组件的 ",n.jsx(e.code,{children:"offset"})," 属性可以指定分栏偏移的栏数。"]}),`
`,n.jsx(R,{name:"LayoutOffset",children:n.jsx(X2,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"默认使用 flex 布局来对分栏进行灵活的对齐。"}),`
`,n.jsxs(e.p,{children:["您可以通过 ",n.jsx(e.code,{children:"justify"})," 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。"]}),`
`,n.jsx(R,{name:"LayoutJustify",children:n.jsx(G2,{})}),`
`,n.jsx(e.h2,{children:"响应式布局"}),`
`,n.jsx(e.p,{children:"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"}),`
`,n.jsx(R,{name:"LayoutBootstrap",children:n.jsx(Q2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"span"}),n.jsx(e.td,{children:"栅格占据的列数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"offset"}),n.jsx(e.td,{children:"栅格左侧的间隔格数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xs"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"sm"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"md"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥992px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lg"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1200px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xl"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1920px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function K2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xu,{...t})}):xu(t)}function Y2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ne,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(Ne,{type:"primary",children:"primary"}),n.jsx(Ne,{type:"success",children:"success"}),n.jsx(Ne,{type:"warning",children:"warning"}),n.jsx(Ne,{type:"danger",children:"danger"}),n.jsx(Ne,{type:"info",children:"info"})]})})}function Z2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ne,{disabled:!0,children:"default"}),n.jsx(Ne,{type:"primary",disabled:!0,children:"primary"}),n.jsx(Ne,{type:"success",disabled:!0,children:"success"}),n.jsx(Ne,{type:"warning",disabled:!0,children:"warning"}),n.jsx(Ne,{type:"danger",disabled:!0,children:"danger"}),n.jsx(Ne,{type:"info",disabled:!0,children:"info"})]})})}function J2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ne,{underline:!1,children:"Without Underline"}),n.jsx(Ne,{children:"With Underline"})]})})}function q2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Ne,{icon:n.jsx(us,{}),children:"Edit"}),n.jsxs(Ne,{children:["Check",n.jsx(hs,{className:"el-icon--right"})]})]})})}function gu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(R,{name:"LinkBasic",children:n.jsx(Y2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(R,{name:"LinkDisabled",children:n.jsx(Z2,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(R,{name:"LinkUnderline",children:n.jsx(J2,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(R,{name:"LinkIcon",children:n.jsx(q2,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]})]})}function ew(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gu,{...t})}):gu(t)}function tw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"mx-1",children:"Default"}),n.jsx(Ke,{className:"mx-1",type:"primary",children:"Primary"}),n.jsx(Ke,{className:"mx-1",type:"success",children:"Success"}),n.jsx(Ke,{className:"mx-1",type:"info",children:"Info"}),n.jsx(Ke,{className:"mx-1",type:"warning",children:"Warning"}),n.jsx(Ke,{className:"mx-1",type:"danger",children:"Danger"})]})})}function nw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"mx-1",size:"large",children:"Large"}),n.jsx(Ke,{className:"mx-1",children:"Default"}),n.jsx(Ke,{className:"mx-1",size:"small",children:"Small"})]})})}function rw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),n.jsx(re,{className:"w-150px mb-2",children:n.jsx(Ke,{truncated:!0,children:"Squeezed by parent element"})}),n.jsxs(Ke,{lineClamp:2,children:["The -webkit-line-clamp CSS property",n.jsx("br",{}),"allows limiting of the contents of",n.jsx("br",{}),"a block to the specified number of lines."]})]})})}function ju(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Text"}),`
`,`
`,n.jsx(e.p,{children:"文本的常见操作"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,n.jsx(R,{name:"TextBasic",children:n.jsx(tw,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"})]}),`
`,n.jsx(R,{name:"TextSize",children:n.jsx(nw,{})}),`
`,n.jsx(e.h2,{children:"省略"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",n.jsx(e.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,n.jsx(R,{name:"TextTruncated",children:n.jsx(rw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"大小"}),n.jsx(e.td,{children:"'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"truncated"}),n.jsx(e.td,{children:"显示省略号"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lineClamp"}),n.jsx(e.td,{children:"最大行数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function iw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ju,{...t})}):ju(t)}function lw(){return n.jsx(n.Fragment,{children:n.jsx(Jp,{height:"400px",children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((t,e)=>n.jsx("p",{className:"scrollbar-demo-item",children:t},e))})})}function vu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Scrollbar 滚动条"}),`
`,`
`,n.jsx(e.p,{children:"用于替换浏览器原生滚动条。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"height"})," 属性设置滚动条高度，若不设置则根据父容器高度自适应。"]}),`
`,n.jsx(R,{name:"ScrollbarBasic",children:n.jsx(lw,{})})]})}function sw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vu,{...t})}):vu(t)}function ow(){return n.jsx(n.Fragment,{children:n.jsx(ze,{wrap:!0,children:[1,2,3].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})})}function aw(){return n.jsx(n.Fragment,{children:n.jsx(ze,{direction:"vertical",children:[1,2,3].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})})}function cw(){return n.jsxs(n.Fragment,{children:[n.jsx(ze,{wrap:!0,size:"large",children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:"default",children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:"small",children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})]})}function dw(){return n.jsxs(n.Fragment,{children:[n.jsx(ze,{wrap:!0,size:0,children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:50,children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:100,children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})]})}function uw(){return n.jsx(n.Fragment,{children:n.jsx(ze,{wrap:!0,children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((t,e)=>n.jsx("div",{children:n.jsxs(b,{text:!0,children:[" Text button ",t," "]})},e))})})}function hw(){return n.jsx(n.Fragment,{children:n.jsxs(ze,{size:10,spacer:"|",children:[n.jsx(b,{children:" button 1 "}),n.jsx(b,{children:" button 2 "})]})})}function fw(){return n.jsx(n.Fragment,{children:n.jsxs(ze,{size:10,spacer:n.jsx(vt,{direction:"vertical"}),children:[n.jsx(b,{children:" button 1 "}),n.jsx(b,{children:" button 2 "})]})})}function pw(){return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px",marginBottom:"10px"},children:n.jsxs(ze,{children:["string",n.jsx(b,{children:" button "}),n.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"1"})]})}),n.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px",marginBottom:"10px"},children:n.jsxs(ze,{alignment:"flex-start",children:["string",n.jsx(b,{children:" button "}),n.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"2"})]})}),n.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px"},children:n.jsxs(ze,{alignment:"flex-end",children:["string",n.jsx(b,{children:" button "}),n.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"3"})]})})]})}function yu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Space 间距"}),`
`,`
`,n.jsx(e.p,{children:"虽然我们拥有 Divider 组件，但很多时候我们需要不是一个被 Divider 组件 分割开的页面结构，因此我们会重复的使用很多的 Divider 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"最基础的用法，通过这个组件来给组件之间提供统一的间距。"}),`
`,n.jsx(e.p,{children:"通过间距组件来给多个组件之间提供间距"}),`
`,n.jsx(R,{name:"SpaceBasic",children:n.jsx(ow,{})}),`
`,n.jsx(e.h2,{children:"垂直布局"}),`
`,n.jsx(e.p,{children:"使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制."}),`
`,n.jsx(e.p,{children:"我们也提供垂直布局方式。"}),`
`,n.jsx(R,{name:"SpaceDirection",children:n.jsx(aw,{})}),`
`,n.jsx(e.h2,{children:"控制间距的大小"}),`
`,n.jsx(e.p,{children:"通过调整 size 的值来控制间距的大小"}),`
`,n.jsx(e.p,{children:"使用内置的 small、default、large 来设置间距大小，分别对应 8px、12px 和 16px 的间距。 默认的间距大小为 small，也就是 8px。"}),`
`,n.jsx(e.p,{children:"您也可以通过自定义的 size 来控制大小， 参见下一个部分。"}),`
`,n.jsx(R,{name:"SpaceSize",children:n.jsx(cw,{})}),`
`,n.jsx(e.h2,{children:"自定义 Size"}),`
`,n.jsx(e.p,{children:"很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。"}),`
`,n.jsx(R,{name:"SpaceSize2",children:n.jsx(dw,{})}),`
`,n.jsx(e.h2,{children:"自动换行"}),`
`,n.jsx(e.p,{children:"在 **水平 (horizontal) ** 模式下，通过使用 wrap（布尔类型）来控制自动换行行为。"}),`
`,n.jsx(e.p,{children:"利用 wrap 属性控制换行"}),`
`,n.jsx(R,{name:"SpaceWrap",children:n.jsx(uw,{})}),`
`,n.jsx(e.h2,{children:"行间分隔符"}),`
`,n.jsx(e.p,{children:"有时候，仅仅在行间加空白并不能满足我们的日常需求，此时分隔符 (spacer) 就可以发挥非常好的作用了。"}),`
`,n.jsx(e.h2,{children:"字母数字类型分隔符"}),`
`,n.jsx(R,{name:"SpaceSpacer",children:n.jsx(hw,{})}),`
`,n.jsx(e.h2,{children:"分隔符还可以是 ReactNode 类型"}),`
`,n.jsx(R,{name:"SpaceSpacer2",children:n.jsx(fw,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items 一致。"}),`
`,n.jsx(e.p,{children:"使用 alignment 属性来对齐"}),`
`,n.jsx(R,{name:"SpaceAlignment",children:n.jsx(pw,{})})]})}function mw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yu,{...t})}):yu(t)}function xw(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{defaultChecked:!0}),n.jsx(fe,{defaultChecked:!0,className:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}})]})}function gw(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{defaultChecked:!0,size:"large",activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(fe,{defaultChecked:!0,activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(fe,{defaultChecked:!0,size:"small",activeText:"Open",inactiveText:"Close"})]})}function jw(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{defaultChecked:!0,className:"mb-2",activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(fe,{defaultChecked:!0,className:"mb-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(fe,{defaultChecked:!0,inlinePrompt:!0,activeText:"是",inactiveText:"否"}),n.jsx(fe,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Y",inactiveText:"N"}),n.jsx(fe,{defaultChecked:!0,className:"ml-2",width:60,inlinePrompt:!0,activeText:"超出省略",inactiveText:"超出省略"}),n.jsx(fe,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"完整展示多个内容",inactiveText:"多个内容"})]})}function vw(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{defaultChecked:!0,activeIcon:n.jsx(ji,{}),inactiveIcon:n.jsx(un,{})}),n.jsx("br",{}),n.jsx(fe,{defaultChecked:!0,className:"mt-2",style:{marginLeft:"24px"},inlinePrompt:!0,activeIcon:n.jsx(ji,{className:"is-icon"}),inactiveIcon:n.jsx(un,{className:"is-icon"})})]})}function yw(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{defaultChecked:!0,disabled:!0}),n.jsx(fe,{defaultChecked:!0,className:"ml-2"})]})}function ww(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{defaultChecked:!0,loading:!0}),n.jsx(fe,{loading:!0,className:"ml-2"})]})}function _w(){const[t,e]=u.useState(!1),[r,i]=u.useState(!1);function l(){return e(!0),new Promise(o=>{setTimeout(()=>(e(!1),console.log("Switch success"),o(!0)),1e3)})}function s(){return i(!0),new Promise((o,a)=>{setTimeout(()=>(i(!1),console.log("Switch failed"),a(new Error("Error"))),1e3)})}return n.jsxs(n.Fragment,{children:[n.jsx(fe,{loading:t,beforeChange:l}),n.jsx(fe,{className:"ml-2",loading:r,beforeChange:s})]})}function Cw(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{defaultChecked:!0,activeActionIcon:n.jsx(hs,{}),inactiveActionIcon:n.jsx(oc,{})}),n.jsx("br",{}),n.jsx(fe,{defaultChecked:!0,activeActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-active-action",children:"T"})}),inactiveActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-inactive-action",children:"F"})})})]})}function wu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Switch 开关"}),`
`,`
`,n.jsx(e.p,{children:"表示两种相互对立的状态间的切换，多用于触发「开/关」。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。"}),`
`,n.jsx(R,{name:"SwitchBasic",children:n.jsx(xw,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsx(R,{name:"SwitchSize",children:n.jsx(gw,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制文本是否显示在点内。"]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。"]}),`
`,n.jsx(R,{name:"SwitchText",children:n.jsx(jw,{})}),`
`,n.jsx(e.h2,{children:"显示自定义图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-icon"})," 和 ",n.jsx(e.code,{children:"active-icon"})," 属性来添加图标。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制图标显示在点内。"]}),`
`,n.jsx(R,{name:"SwitchIcon",children:n.jsx(vw,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"disabled"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即可禁用。"]}),`
`,n.jsx(R,{name:"SwitchDisabled",children:n.jsx(yw,{})}),`
`,n.jsx(e.h2,{children:"加载状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"loading"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即加载中状态。"]}),`
`,n.jsx(R,{name:"SwitchLoading",children:n.jsx(ww,{})}),`
`,n.jsx(e.h2,{children:"阻止切换"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"beforeChange"}),"属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"]}),`
`,n.jsx(R,{name:"SwitchBeforeChange",children:n.jsx(_w,{})}),`
`,n.jsx(e.h2,{children:"自定义动作图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-action-icon"})," 和 ",n.jsx(e.code,{children:"active-action-icon"})," 属性来添加图标。"]}),`
`,n.jsx(R,{name:"SwitchActionIcon",children:n.jsx(Cw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"defaultChecked"}),n.jsx(e.td,{children:"初始是否选中"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"switch 的大小"}),n.jsx(e.td,{children:"'large' / 'small'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"switch 的宽度"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inlinePrompt"}),n.jsx(e.td,{children:"无论图标或文本是否显示在点内，只会呈现文本的第一个字符"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeIcon"}),n.jsx(e.td,{children:"switch 状态为 on 时所显示图标，设置此项会忽略 activeText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveIcon"}),n.jsx(e.td,{children:"switch 状态为 off 时所显示图标，设置此项会忽略 inactiveText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeActionIcon"}),n.jsx(e.td,{children:"on状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveActionIcon"}),n.jsx(e.td,{children:"off状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeText"}),n.jsx(e.td,{children:"switch 打开时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveText"}),n.jsx(e.td,{children:"switch 的状态为 off 时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"beforeChange"}),n.jsx(e.td,{children:"switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"}),n.jsx(e.td,{children:"boolean / Function"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function kw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wu,{...t})}):wu(t)}function bw(){return n.jsx(n.Fragment,{children:n.jsx(qp,{})})}function _u(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Rate 评分"}),`
`,`
`,n.jsx(e.p,{children:"用于评分"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。 三个等级所对应的颜色用 colors 属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。"}),`
`,n.jsx(R,{name:"RateBasic",children:n.jsx(bw,{})})]})}function Sw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_u,{...t})}):_u(t)}function Nw(){const t="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",e="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",r=["small","","large"],i=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(Nt,{size:s,src:t})},o)),l=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(Nt,{shape:"square",size:s,src:e})},o));return n.jsx(n.Fragment,{children:n.jsxs(re,{className:"common-avatar",children:[n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"circle"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(Nt,{size:50,src:t})}),i]})]}),n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"square"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(Nt,{shape:"square",size:50,src:e})}),l]})]})]})})}function Ew(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-avatar",children:[n.jsx("div",{children:n.jsx(Nt,{icon:n.jsx(Sp,{})})}),n.jsx("div",{children:n.jsx(Nt,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})}),n.jsx("div",{children:n.jsx(Nt,{children:" user "})})]})})}function Tw(){function t(){console.log("error")}return n.jsx(n.Fragment,{children:n.jsx("div",{className:"demo-type",children:n.jsx(Nt,{size:60,src:"https://empty",onError:t,children:n.jsx("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"})})})})}function Bw(){const t=["fill","contain","cover","none","scale-down"],e="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",r=t.map((i,l)=>n.jsxs("div",{className:"block",children:[n.jsx("span",{className:"title",children:i}),n.jsx(Nt,{shape:"square",size:100,fit:i,src:e})]},l));return n.jsx(n.Fragment,{children:n.jsx("div",{className:"avatar-fit",children:r})})}function Cu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Avatar 头像"}),`
`,`
`,n.jsx(e.p,{children:"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"shape"})," 和 ",n.jsx(e.code,{children:"size"})," 属性来设置 Avatar 的形状和大小。"]}),`
`,n.jsx(R,{name:"AvatarBasic",children:n.jsx(Nw,{})}),`
`,n.jsx(e.h2,{children:"展示类型"}),`
`,n.jsx(e.p,{children:"支持使用图片，图标或者文字作为 Avatar。"}),`
`,n.jsx(R,{name:"AvatarType",children:n.jsx(Ew,{})}),`
`,n.jsx(e.h2,{children:"回退行为"}),`
`,n.jsx(e.p,{children:"图片加载失败时的回退行为。"}),`
`,n.jsx(R,{name:"AvatarError",children:n.jsx(Tw,{})}),`
`,n.jsx(e.h2,{children:"适应容器"}),`
`,n.jsx(e.p,{children:"当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致"}),`
`,n.jsx(R,{name:"AvatarFit",children:n.jsx(Bw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"设置 Avatar 的图标类型，具体参考 Icon 组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Avatar 大小"}),n.jsx(e.td,{children:"number / 'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"shape"}),n.jsx(e.td,{children:"Avatar 形状"}),n.jsx(e.td,{children:"'circle' / 'square'"}),n.jsx(e.td,{children:"circle"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"Avatar 图片的源地址"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"fit"}),n.jsx(e.td,{children:"当展示类型为图片的时候，设置图片如何适应容器"}),n.jsx(e.td,{children:"'fill' / 'contain' / 'cover' / 'none' / 'scale-down'"}),n.jsx(e.td,{children:"cover"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"error"}),n.jsx(e.td,{children:"图片加载失败时触发"}),n.jsx(e.td,{children:"() => void"})]})})]})]})}function Rw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cu,{...t})}):Cu(t)}function Lw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{value:12,className:"item",children:n.jsx(b,{children:"comments"})}),n.jsx(xt,{value:3,className:"item",children:n.jsx(b,{children:"replies"})}),n.jsx(xt,{value:1,className:"item",type:"primary",children:n.jsx(b,{children:"comments"})}),n.jsx(xt,{value:2,className:"item",type:"warning",children:n.jsx(b,{children:"replies"})})]})})}function Dw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{value:200,max:99,className:"item",children:n.jsx(b,{children:"comments"})}),n.jsx(xt,{value:100,max:10,className:"item",children:n.jsx(b,{children:"replies"})})]})})}function Pw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{value:"new",className:"item",children:n.jsx(b,{children:"comments"})}),n.jsx(xt,{value:"hot",className:"item",children:n.jsx(b,{children:"replies"})})]})})}function Aw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(xt,{isDot:!0,className:"item",children:"query"}),n.jsx(xt,{isDot:!0,className:"item",children:n.jsx(b,{className:"share-button",icon:n.jsx(uc,{}),type:"primary"})})]})})}function ku(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Badge 徽章"}),`
`,`
`,n.jsx(e.p,{children:"按钮和图标上的数字或状态标记。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以用来展示新消息的数量。"}),`
`,n.jsx(e.p,{children:"数量值可接受 Number 或 String。"}),`
`,n.jsx(R,{name:"BadgeBasic",children:n.jsx(Lw,{})}),`
`,n.jsx(e.h2,{children:"最大值"}),`
`,n.jsx(e.p,{children:"你还可以自定义最大值"}),`
`,n.jsx(e.p,{children:"由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。"}),`
`,n.jsx(R,{name:"BadgeMax",children:n.jsx(Dw,{})}),`
`,n.jsx(e.h2,{children:"自定义显示内容"}),`
`,n.jsx(e.p,{children:"你也可以展示除数字以外你想要展示的任何值。"}),`
`,n.jsx(e.p,{children:"当 value 是 String 时，可以显示自定义文字。"}),`
`,n.jsx(R,{name:"BadgeValue",children:n.jsx(Pw,{})}),`
`,n.jsx(e.h2,{children:"小红点"}),`
`,n.jsx(e.p,{children:"通过一个小红点标记来告知用户有新内容。"}),`
`,n.jsx(e.p,{children:"使用 is-dot 属性。 是个布尔值。"}),`
`,n.jsx(R,{name:"BadgeIsDot",children:n.jsx(Aw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"value"}),n.jsx(e.td,{children:"显示值"}),n.jsx(e.td,{children:"string / number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"max"}),n.jsx(e.td,{children:"最大值，超过最大值会显示 max+。 只有当 value 是数字类型时起作用。"}),n.jsx(e.td,{children:"number"}),n.jsx(e.td,{children:"99"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"isDot"}),n.jsx(e.td,{children:"是否显示小圆点。"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"badge type."}),n.jsx(e.td,{children:"'primary' | 'success' | 'warning' | 'danger' | 'info'"}),n.jsx(e.td,{children:"danger"})]})]})]})]})}function Mw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ku,{...t})}):ku(t)}function Iw(){return n.jsx(n.Fragment,{children:n.jsxs(Tp,{children:[n.jsxs(Fr,{title:"Consistency",name:"1",children:[n.jsx("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),n.jsx("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]}),n.jsxs(Fr,{title:"Feedback",name:"2",children:[n.jsx("div",{children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"}),n.jsx("div",{children:"Visual feedback: reflect current state by updating or rearranging elements of the page."})]}),n.jsxs(Fr,{title:"Efficiency",name:"3",children:[n.jsx("div",{children:"Simplify the process: keep operating process simple and intuitive;"}),n.jsx("div",{children:"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"}),n.jsx("div",{children:"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."})]}),n.jsxs(Fr,{title:"Controllability",name:"4",children:[n.jsx("div",{children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"}),n.jsx("div",{children:"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})]})})}function bu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Collapse 折叠面板"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可同时展开多个面板，面板之间不影响"}),`
`,n.jsx(R,{name:"CollapseBasic",children:n.jsx(Iw,{})})]})}function Fw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bu,{...t})}):bu(t)}function zw(){function t(e){return e===100?"Full":`${e}%`}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(St,{percentage:50}),n.jsx(St,{percentage:100,format:t}),n.jsx(St,{percentage:100,status:"success"}),n.jsx(St,{percentage:100,status:"warning"}),n.jsx(St,{percentage:50,status:"exception"})]})})}function Ow(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(St,{textInside:!0,strokeWidth:26,percentage:70}),n.jsx(St,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),n.jsx(St,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),n.jsx(St,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function Su(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Progress 进度条"}),`
`,`
`,n.jsx(e.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,n.jsx(e.h2,{children:"直线进度条"}),`
`,n.jsxs(e.p,{children:["Progress 组件设置 ",n.jsx(e.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",n.jsx(e.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",n.jsx(e.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,n.jsx(R,{name:"ProgressBasic",children:n.jsx(zw,{})}),`
`,n.jsx(e.h2,{children:"进度条内显示百分比标识"}),`
`,n.jsx(e.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,n.jsxs(e.p,{children:["Progress 组件可通过 ",n.jsx(e.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",n.jsx(e.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,n.jsx(R,{name:"ProgressTextInside",children:n.jsx(Ow,{})})]})}function $w(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Su,{...t})}):Su(t)}function Hw(){return n.jsx(n.Fragment,{children:n.jsxs(re,{children:[n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"success",title:"Success Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"warning",title:"Warning Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"error",title:"Error Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"info",title:"Info Tip",subTitle:n.jsx("p",{children:"Using slot as subtitle"}),extra:n.jsx(b,{type:"primary",children:"Back"})})})]})})}function Uw(){return n.jsx(n.Fragment,{children:n.jsx(nr,{icon:n.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),title:"404",subTitle:"Sorry, request error",extra:n.jsx(b,{type:"primary",children:"Back"})})})}function Nu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Result 结果"}),`
`,`
`,n.jsx(e.p,{children:"用于对用户的操作结果或者异常状态做反馈。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(R,{name:"ResultBasic",children:n.jsx(Hw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(R,{name:"ResultIcon",children:n.jsx(Uw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"result 组件的图标类型"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error' / ReactNode"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"result 组件的标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"subTitle"}),n.jsx(e.td,{children:"result 组件的副标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"extra"}),n.jsx(e.td,{children:"内容额外区域的内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"ReactNode"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Ww(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nu,{...t})}):Nu(t)}function Vw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(js,{columns:t,data:e})})}function Xw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(js,{columns:t,data:e,stripe:!0})})}function Gw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(js,{columns:t,data:e,border:!0})})}function Eu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Table 表格"}),`
`,`
`,n.jsx(e.p,{children:"用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。"}),`
`,n.jsx(e.h2,{children:"基础表格"}),`
`,n.jsx(e.p,{children:"基础的表格展示用法。"}),`
`,n.jsx(R,{name:"TableBasic",children:n.jsx(Vw,{})}),`
`,n.jsx(e.h2,{children:"带斑马纹表格"}),`
`,n.jsx(e.p,{children:"使用带斑马纹的表格，可以更容易区分出不同行的数据。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"stripe"})," 可以创建带斑马纹的表格。 如果 ",n.jsx(e.code,{children:"true"}),", 表格将会带有斑马纹。"]}),`
`,n.jsx(R,{name:"TableStripe",children:n.jsx(Xw,{})}),`
`,n.jsx(e.h2,{children:"带边框表格"}),`
`,n.jsxs(e.p,{children:["默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 ",n.jsx(e.code,{children:"border"})," 属性，把该属性设置为 ",n.jsx(e.code,{children:"true"})," 即可启用。"]}),`
`,n.jsx(R,{name:"TableBorder",children:n.jsx(Gw,{})}),`
`,n.jsx(e.h2,{children:"Table 属性"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"columns"}),n.jsx(e.td,{children:"表格列的配置描述"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"data"}),n.jsx(e.td,{children:"显示的数据"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"stripe"}),n.jsx(e.td,{children:"是否为斑马纹 table"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border"}),n.jsx(e.td,{children:"是否带有纵向边框"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function Qw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Eu,{...t})}):Eu(t)}function Kw(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{children:"Tag 1"}),n.jsx(pe,{className:"ml-2",type:"success",children:"Tag 2"}),n.jsx(pe,{className:"ml-2",type:"info",children:"Tag 3"}),n.jsx(pe,{className:"ml-2",type:"warning",children:"Tag 4"}),n.jsx(pe,{className:"ml-2",type:"danger",children:"Tag 5"})]})}function Yw(){const t=[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}].map(e=>n.jsx(pe,{className:"mx-1",closable:!0,type:e.type,children:e.name}));return n.jsx(n.Fragment,{children:t})}function Zw(){return n.jsxs(n.Fragment,{children:[n.jsxs(re,{children:[n.jsx(pe,{className:"mx-1",size:"large",children:"Large"}),n.jsx(pe,{className:"mx-1",children:"Default"}),n.jsx(pe,{className:"mx-1",size:"small",children:"Small"})]}),n.jsxs(re,{className:"mt-4",children:[n.jsx(pe,{className:"mx-1",size:"large",closable:!0,children:"Large"}),n.jsx(pe,{className:"mx-1",closable:!0,children:"Default"}),n.jsx(pe,{className:"mx-1",size:"small",closable:!0,children:"Small"})]})]})}function Jw(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(a=>n.jsx(pe,{type:a.type,className:"mx-1",effect:"dark",children:a.label})),r=t.map(a=>n.jsx(pe,{type:a.type,className:"mx-1",effect:"dark",closable:!0,children:a.label})),i=t.map(a=>n.jsx(pe,{type:a.type,className:"mx-1",effect:"light",children:a.label})),l=t.map(a=>n.jsx(pe,{type:a.type,className:"mx-1",effect:"light",closable:!0,children:a.label})),s=t.map(a=>n.jsx(pe,{type:a.type,className:"mx-1",effect:"plain",children:a.label})),o=t.map(a=>n.jsx(pe,{type:a.type,className:"mx-1",effect:"plain",closable:!0,children:a.label}));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1 line-height-2",children:"Dark"}),e,r]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Light"}),i,l]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Plain"}),s,o]})]})}function qw(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(l=>n.jsx(pe,{type:l.type,className:"mx-1",effect:"dark",round:!0,children:l.label})),r=t.map(l=>n.jsx(pe,{type:l.type,className:"mx-1",effect:"light",round:!0,children:l.label})),i=t.map(l=>n.jsx(pe,{type:l.type,className:"mx-1",effect:"plain",round:!0,children:l.label}));return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:e}),n.jsx("div",{className:"flex flex-wrap gap-2",children:r}),n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:i})]})}function Tu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tag 标签"}),`
`,`
`,n.jsx(e.p,{children:"用于标记和选择。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 tag 的类型。 也可以通过 ",n.jsx(e.code,{children:"color"})," 属性来自定义背景色。"]}),`
`,n.jsx(R,{name:"TagBasic",children:n.jsx(Kw,{})}),`
`,n.jsx(e.h2,{children:"可移除标签"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"closable"})," 属性可以定义一个标签是否可移除。 它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 ",n.jsx(e.code,{children:"disable-transitions"})," 属性，它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，",n.jsx(e.code,{children:"true"})," 为关闭。 当 Tag 被移除时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(R,{name:"TagClosable",children:n.jsx(Yw,{})}),`
`,n.jsx(e.h2,{children:"不同尺寸"}),`
`,n.jsx(e.p,{children:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性来设置额外尺寸, 可选值包括 ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"}),"."]}),`
`,n.jsx(R,{name:"TagSize",children:n.jsx(Zw,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tag 组件提供了三个不同的主题：",n.jsx(e.code,{children:"dark"}),"、",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"plain"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 effect 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(R,{name:"TagEffect",children:n.jsx(Jw,{})}),`
`,n.jsx(e.h2,{children:"圆形标签"}),`
`,n.jsx(e.p,{children:"Tag 可以向按钮组件一样变为完全圆形。"}),`
`,n.jsx(R,{name:"TagRound",children:n.jsx(qw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Tag 的类型"}),n.jsx(e.td,{children:"'success' | 'info' | 'warning' | 'danger' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Tag 的尺寸"}),n.jsx(e.td,{children:"'large' | 'default' | 'small' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tag 的主题"}),n.jsx(e.td,{children:"'dark' | 'light' | 'plain'"}),n.jsx(e.td,{children:"light"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"Tag 是否为圆形"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]})]})]})]})}function e4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Tu,{...t})}):Tu(t)}function t4(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{title:"success alert",type:"success"}),n.jsx(le,{title:"info alert",type:"info"}),n.jsx(le,{title:"warning alert",type:"warning"}),n.jsx(le,{title:"error alert",type:"error"})]})}function n4(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{title:"success alert",type:"success",effect:"dark"}),n.jsx(le,{title:"info alert",type:"info",effect:"dark"}),n.jsx(le,{title:"warning alert",type:"warning",effect:"dark"}),n.jsx(le,{title:"error alert",type:"error",effect:"dark"})]})}function r4(){function t(){alert("Hello World!")}return n.jsxs(n.Fragment,{children:[n.jsx(le,{title:"unclosable alert",type:"success",closable:!1}),n.jsx(le,{title:"customized close-text",type:"info",closeText:"Gotcha"}),n.jsx(le,{title:"alert with callback",type:"warning",close:t})]})}function i4(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{title:"success alert",type:"success",showIcon:!0}),n.jsx(le,{title:"info alert",type:"info",showIcon:!0}),n.jsx(le,{title:"warning alert",type:"warning",showIcon:!0}),n.jsx(le,{title:"error alert",type:"error",showIcon:!0})]})}function l4(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{title:"success alert",type:"success",center:!0,showIcon:!0}),n.jsx(le,{title:"info alert",type:"info",center:!0,showIcon:!0}),n.jsx(le,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),n.jsx(le,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function s4(){return n.jsx(n.Fragment,{children:n.jsx(le,{title:"with description",type:"success",description:"This is a description."})})}function o4(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),n.jsx(le,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),n.jsx(le,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),n.jsx(le,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function Bu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alert 提示"}),`
`,`
`,n.jsx(e.p,{children:"用于页面中展示重要的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供四种类型，由 ",n.jsx(e.code,{children:"type"})," 属性指定，默认值为 ",n.jsx(e.code,{children:"info"}),"。"]}),`
`,n.jsx(R,{name:"AlertBasic",children:n.jsx(t4,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供了两个不同的主题：",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"dark"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(R,{name:"AlertEffect",children:n.jsx(n4,{})}),`
`,n.jsx(e.h2,{children:"自定义关闭按钮"}),`
`,n.jsx(e.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,n.jsxs(e.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",n.jsx(e.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，默认为 ",n.jsx(e.code,{children:"false"}),"。 你可以设置 ",n.jsx(e.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",n.jsx(e.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(R,{name:"AlertClose",children:n.jsx(r4,{})}),`
`,n.jsx(e.h2,{children:"使用图标"}),`
`,n.jsx(e.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,n.jsx(R,{name:"AlertShowIcon",children:n.jsx(i4,{})}),`
`,n.jsx(e.h2,{children:"文字居中"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,n.jsx(R,{name:"AlertCenter",children:n.jsx(l4,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsx(e.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,n.jsxs(e.p,{children:["除了必填的 ",n.jsx(e.code,{children:"title"})," 属性外，你可以设置 ",n.jsx(e.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,n.jsx(R,{name:"AlertDescription",children:n.jsx(s4,{})}),`
`,n.jsx(e.h2,{children:"带图标和描述"}),`
`,n.jsx(e.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,n.jsx(R,{name:"AlertIconDescription",children:n.jsx(o4,{})}),`
`,n.jsx(e.h2,{children:"Alert API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Alert 标题。"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Alert 类型。"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error'"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"description"}),n.jsx(e.td,{children:"描述性文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可以关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"center"}),n.jsx(e.td,{children:"文字是否居中"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closeText"}),n.jsx(e.td,{children:"自定义关闭按钮文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showIcon"}),n.jsx(e.td,{children:"是否显示类型图标"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"主题样式"}),n.jsx(e.td,{children:"'light' / 'dark'"}),n.jsx(e.td,{children:"light"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"close"}),n.jsx(e.td,{children:"关闭 Alert 时触发的事件"}),n.jsx(e.td,{children:"(event: MouseEvent) => void"})]})})]})]})}function a4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bu,{...t})}):Bu(t)}function c4(){const[t,e]=u.useState(!1);function r(){e(!0)}function i(){e(!1)}function l(){e(!1)}function s(){e(!1)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button",onClick:l,children:n.jsx("span",{className:"",children:"Cancel"})}),n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button el-button--primary",onClick:s,children:n.jsx("span",{className:"",children:" Confirm "})})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:r,children:"click to open the Dialog"}),n.jsx(_i,{open:t,title:"Tips",width:"30%",onClose:i,footer:n.jsx(o,{}),children:n.jsx("span",{children:"This is a message"})})]})}function d4(){const[t,e]=u.useState(!1),[r,i]=u.useState(!1);function l(){e(!0)}function s(){i(!0)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx(b,{onClick:()=>{i(!1)},children:"Cancel"}),n.jsx(b,{type:"primary",onClick:()=>{i(!1)},children:"Confirm"})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:l,children:"open a Table nested Dialog"}),n.jsx(_i,{open:t,title:"Shipping address",onClose:()=>{e(!1)},children:"Table组件"}),n.jsx(b,{text:!0,onClick:s,children:"open a Form nested Dialog"}),n.jsx(_i,{open:r,title:"Shipping address",footer:n.jsx(o,{}),onClose:()=>{i(!1)},children:"Form 表单"})]})}function u4(){const[t,e]=u.useState(!1);function r(){e(!1)}function i(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"dialog-header",children:[n.jsx("h4",{className:"el-dialog__title",children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(kr,{}),"Close"]})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>e(!0),children:"Open Dialog with customized header"}),n.jsx(_i,{open:t,showClose:!1,header:n.jsx(i,{}),onClose:r,children:"This is dialog content."})]})}function Ru(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dialog 对话框"}),`
`,`
`,n.jsx(e.p,{children:"在保留当前页面状态的情况下，告知用户并承载相关操作。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Dialog 弹出一个对话框，适合需要定制性更大的场景。"}),`
`,n.jsx(R,{name:"DialogBasic",children:n.jsx(c4,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(e.p,{children:"对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。"}),`
`,n.jsx(R,{name:"DialogContent",children:n.jsx(d4,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(R,{name:"DialogHeader",children:n.jsx(u4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Dialog"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Dialog 对话框 Dialog 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"对话框的宽度，默认值为 50%"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function h4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ru,{...t})}):Ru(t)}function f4(){const[t,e]=u.useState(""),[r,i]=u.useState(!1),[l,s]=u.useState(!1);function o(){e("ltr"),i(!0)}function a(){e("rtl"),i(!0)}function c(){e("ttb"),i(!0)}function d(){e("btt"),i(!0)}function h(){e("ltr"),s(!0)}function f(){e("rtl"),s(!0)}function x(){e("ttb"),s(!0)}function g(){e("btt"),s(!0)}function v(){i(!1)}function y(){s(!1)}function k(){s(!1)}function m(){s(!1)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:o,children:"open left to right"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:a,children:"open right to left"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:c,children:"open top to bottom"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:d,children:"open bottom to top"})]}),n.jsxs("div",{style:{marginTop:"20px"},children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:h,children:"open left to right footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:f,children:"open right to left footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:x,children:"open top to bottom footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:g,children:"open bottom to top footer"})]}),n.jsx(An,{open:r,title:"I am the title",direction:t,onClose:v,children:n.jsx("span",{children:"Hi, there!"})}),n.jsx(An,{open:l,direction:t,onClose:y,header:n.jsx("h4",{children:"set title by slot"}),footer:n.jsxs("div",{style:{flex:"auto"},children:[n.jsx(b,{onClick:k,children:"cancel"}),n.jsx(b,{type:"primary",onClick:m,children:"confirm"})]}),children:"radio"})]})}function p4(){const[t,e]=u.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(b,{type:"primary",onClick:()=>e(!0),children:"open"}),n.jsx(An,{open:t,title:"I am the title",withHeader:!1,children:n.jsx("span",{children:"Hi there!"})})]})}function m4(){const[t,e]=u.useState(!1),[r,i]=u.useState(!1);function l(){e(!1)}function s(){i(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:()=>{e(!0)},children:"Open Drawer with nested table"}),n.jsx(b,{text:!0,onClick:()=>{i(!0)},children:"Open Drawer with nested form"}),n.jsx(An,{open:t,title:"I have a nested table inside!",direction:"rtl",size:"50%",onClose:l,children:"table"}),n.jsx(An,{open:r,title:"I have a nested form inside!",direction:"ltr",className:"demo-drawer",onClose:s,children:n.jsxs("div",{className:"demo-drawer__content",children:["form",n.jsxs("div",{className:"demo-drawer__footer",children:[n.jsx(b,{onClick:s,children:"Cancel"}),n.jsx(b,{type:"primary",onClick:s,children:"Submit"})]})]})})]})}function x4(){const[t,e]=u.useState(!1);function r(){e(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>{e(!0)},children:"Open Drawer with customized header"}),n.jsx(An,{open:t,showClose:!1,header:n.jsxs(n.Fragment,{children:[n.jsx("h4",{children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(kr,{}),"Close"]})]}),children:"This is drawer content."})]})}function Lu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Drawer 抽屉"}),`
`,`
`,n.jsx(e.p,{children:"有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验."}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"呼出一个临时的侧边栏, 可以从多个方向呼出"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Drawer"})," 包含三部分: ",n.jsx(e.code,{children:"title"})," & ",n.jsx(e.code,{children:"body"})," & ",n.jsx(e.code,{children:"footer"}),", 你还可以通过 title 属性来设置标题, 默认情况下它是一个空字符串, 其中 ",n.jsx(e.code,{children:"body"})," 部分是 Drawer 组件的主区域, 它包含了用户定义的主要内容. footer和title用法一致, 用来显示页脚信息. 当 Drawer 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。"]}),`
`,n.jsx(R,{name:"DrawerBasic",children:n.jsx(f4,{})}),`
`,n.jsx(e.h2,{children:"不添加 Title"}),`
`,n.jsx(e.p,{children:"当你不需要标题的时候，你可以将它移除。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"with-header"})," 属性为 false 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 ",n.jsx(e.code,{children:"title"}),"。"]}),`
`,n.jsx(R,{name:"DrawerWithHeader",children:n.jsx(p4,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsxs(e.p,{children:["像 ",n.jsx(e.code,{children:"Dialog"})," 组件一样，",n.jsx(e.code,{children:"Drawer"})," 也可以用来显示多种不同的交互。"]}),`
`,n.jsx(R,{name:"DrawerContent",children:n.jsx(m4,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(R,{name:"DrawerHeader",children:n.jsx(x4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Drawer"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"Drawer 打开的方向"}),n.jsx(e.td,{children:"'rtl' | 'ltr' | 'ttb' | 'btt'"}),n.jsx(e.td,{children:"rtl"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Drawer 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"Drawer 页脚部分"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"withHeader"}),n.jsx(e.td,{children:"控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title 不生效"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"30%"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]})]})]})]})}function g4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Lu,{...t})}):Lu(t)}function j4(){return n.jsx(n.Fragment,{children:n.jsx(gs,{title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function v4(){return n.jsx(n.Fragment,{children:n.jsx(gs,{width:220,confirmButtonText:"OK",cancelButtonText:"No, Thanks",icon:n.jsx(Ti,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function y4(){function t(){console.log("confirm!")}function e(){console.log("cancel!")}return n.jsx(n.Fragment,{children:n.jsx(gs,{confirmButtonText:"Yes",cancelButtonText:"No",icon:n.jsx(Ti,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:t,onCancel:e,children:n.jsx(b,{children:"Delete"})})})}function Du(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popconfirm 气泡确认框"}),`
`,`
`,n.jsx(e.p,{children:"点击某个元素弹出一个简单的气泡确认框"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。"}),`
`,n.jsx(R,{name:"PopconfirmBasic",children:n.jsx(j4,{})}),`
`,n.jsx(e.h2,{children:"自定义弹出框的内容"}),`
`,n.jsx(e.p,{children:"可以在 Popconfirm 中自定义内容。"}),`
`,n.jsx(R,{name:"PopconfirmIcon",children:n.jsx(v4,{})}),`
`,n.jsx(e.h2,{children:"多种让 Popconfirm 出现的方法"}),`
`,n.jsx(e.p,{children:"点击按钮触发事件"}),`
`,n.jsx(R,{name:"PopconfirmEvent",children:n.jsx(y4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"标题"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"confirmButtonText"}),n.jsx(e.td,{children:"确认按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"cancelButtonText"}),n.jsx(e.td,{children:"取消按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"自定义图标"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"QuestionFilled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"iconColor"}),n.jsx(e.td,{children:"Icon 颜色"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"#f90"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideIcon"}),n.jsx(e.td,{children:"是否隐藏 Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"弹层宽度，最小宽度 150px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"number"})]}),n.jsx(e.td,{children:"150"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"事件名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onConfirm"}),n.jsx(e.td,{children:"点击确认按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onCancel"}),n.jsx(e.td,{children:"点击取消按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]})]})]})]})}function w4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Du,{...t})}):Du(t)}function _4(){return n.jsxs(n.Fragment,{children:[n.jsx(Or,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Hover to activate"})}),n.jsx(Or,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Click to activate"})}),n.jsx(Or,{placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Focus to activate"})}),n.jsx(Or,{title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"contextmenu to activate"})})]})}function Pu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popover 气泡卡片"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"trigger"})," 属性被用来决定 ",n.jsx(e.code,{children:"popover"})," 的触发方式，支持的触发方式： ",n.jsx(e.code,{children:"hover"}),"、",n.jsx(e.code,{children:"click"}),"、",n.jsx(e.code,{children:"focus"})," 或 ",n.jsx(e.code,{children:"contextmenu"}),"。 如果你想手动控制它，可以设置 ",n.jsx(e.code,{children:":visible"})," 属性。"]}),`
`,n.jsx(R,{name:"PopoverBasic",children:n.jsx(_4,{})})]})}function C4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Pu,{...t})}):Pu(t)}function k4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-tooltip",children:[n.jsxs("div",{className:"row center",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start",children:n.jsx(b,{children:"top-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top",children:n.jsx(b,{children:"top"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end",children:n.jsx(b,{children:"top-end"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start",children:n.jsx(b,{children:"left-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start",children:n.jsx(b,{children:"right-start"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left",children:n.jsx(b,{className:"mt-3 mb-3",children:"left"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right",children:n.jsx(b,{children:"right"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end",children:n.jsx(b,{children:"left-end"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end",children:n.jsx(b,{children:"right-end"})})]}),n.jsxs("div",{className:"row center",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start",children:n.jsx(b,{children:"bottom-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom",children:n.jsx(b,{children:"bottom"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end",children:n.jsx(b,{children:"bottom-end"})})]})]})})}function b4(){return n.jsxs(n.Fragment,{children:[n.jsx(we,{content:"Top center",placement:"top",children:n.jsx(b,{children:"Dark"})}),n.jsx(we,{content:"Bottom center",placement:"bottom",effect:"light",children:n.jsx(b,{children:"Light"})}),n.jsx(we,{content:"Bottom center",effect:"customized",children:n.jsx(b,{children:"Customized theme"})})]})}function S4(){return n.jsx(n.Fragment,{children:n.jsx(we,{placement:"top",content:n.jsxs(n.Fragment,{children:["multiple lines",n.jsx("br",{}),"second line"]}),children:n.jsx(b,{children:"Top center"})})})}function N4(){const[t,e]=u.useState(!0);function r(){e(!t)}return n.jsx(n.Fragment,{children:n.jsx(we,{disabled:t,content:"click to close tooltip function",placement:"bottom",effect:"light",children:n.jsxs(b,{onClick:r,children:["click to ",t?"active":"close"," tooltip function"]})})})}function Au(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tooltip 文字提示"}),`
`,`
`,n.jsx(e.p,{children:"常用于展示鼠标 hover 时的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"content"})," 属性来决定 ",n.jsx(e.code,{children:"hover"})," 时的提示信息。 由 ",n.jsx(e.code,{children:"placement"})," 属性决定展示效果： ",n.jsx(e.code,{children:"placement"}),"属性值为：[方向]-[对齐位置]；四个方向：",n.jsx(e.code,{children:"top"}),"、",n.jsx(e.code,{children:"left"}),"、",n.jsx(e.code,{children:"right"}),"、",n.jsx(e.code,{children:"bottom"}),"；三种对齐位置：",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"end"}),'，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。']}),`
`,n.jsx(R,{name:"TooltipBasic",children:n.jsx(k4,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tooltip 组件内置了两个主题：",n.jsx(e.code,{children:"dark"}),"和",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 来修改主题，默认值为 ",n.jsx(e.code,{children:"dark"}),"."]}),`
`,n.jsx(R,{name:"TooltipEffect",children:n.jsx(b4,{})}),`
`,n.jsx(e.h2,{children:"更多内容的文字提示"}),`
`,n.jsx(e.p,{children:"展示多行文本或者是设置文本内容的格式"}),`
`,n.jsx(R,{name:"TooltipContent",children:n.jsx(S4,{})}),`
`,n.jsx(e.h2,{children:"高级扩展"}),`
`,n.jsx(e.p,{children:"除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："}),`
`,n.jsxs(e.p,{children:["如果需要关闭 ",n.jsx(e.code,{children:"tooltip"})," 功能，",n.jsx(e.code,{children:"disabled"})," 属性可以满足这个需求， 你只需要将其设置为 ",n.jsx(e.code,{children:"true"}),"。"]}),`
`,n.jsx(R,{name:"TooltipDisabled",children:n.jsx(N4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tooltip 主题，内置了 dark / light 两种"}),n.jsx(e.td,{children:"'dark' / 'light'"}),n.jsx(e.td,{children:"dark"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"显示的内容"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"placement"}),n.jsx(e.td,{children:"Tooltip 组件出现的位置"}),n.jsx(e.td,{children:"'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'"}),n.jsx(e.td,{children:"bottom"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showAfter"}),n.jsx(e.td,{children:"在触发后多久显示内容，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideAfter"}),n.jsx(e.td,{children:"延迟关闭，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"200"})]})]})]})]})}function E4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Au,{...t})}):Au(t)}function T4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes."}),n.jsx(vt,{}),n.jsx("span",{children:"There little thoughts are the rustle of leaves; they have their whisper of joy in my mind."})]})})}function B4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"What you are you do not see, what you see is your shadow. "}),n.jsx(vt,{contentPosition:"left",children:"Rabindranath Tagore"}),n.jsx("span",{children:"My wishes are fools, they shout across thy song, my Master. Let me but listen."}),n.jsx(vt,{children:n.jsx(lc,{})}),n.jsx("span",{children:"I cannot choose the best. The best chooses me."}),n.jsx(vt,{contentPosition:"right",children:"Rabindranath Tagore"})]})})}function R4(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"What language is thine, O sea?"}),n.jsx(vt,{borderStyle:"dashed"}),n.jsx("span",{children:"The language of eternal question."})]}),n.jsx(vt,{borderStyle:"dotted"}),n.jsx("span",{children:"What language is thy answer, O sky?"}),n.jsx(vt,{borderStyle:"double"}),n.jsx("span",{children:"The language of eternal silence."})]})}function L4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"Rain"}),n.jsx(vt,{direction:"vertical"}),n.jsx("span",{children:"Home"}),n.jsx(vt,{direction:"vertical","border-style":"dashed"}),n.jsx("span",{children:"Grass"})]})})}function Mu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Divider 分割线"}),`
`,`
`,n.jsx(e.p,{children:"区隔内容的分割线。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"对不同段落的文本进行分割。"}),`
`,n.jsx(R,{name:"DividerBasic",children:n.jsx(T4,{})}),`
`,n.jsx(e.h2,{children:"设置文案"}),`
`,n.jsx(e.p,{children:"可以在分割线上自定义文本内容。"}),`
`,n.jsx(R,{name:"DividerContent",children:n.jsx(B4,{})}),`
`,n.jsx(e.h2,{children:"虚线"}),`
`,n.jsx(e.p,{children:"您可以设置分隔符的样式。"}),`
`,n.jsx(R,{name:"DividerBorder",children:n.jsx(R4,{})}),`
`,n.jsx(e.h2,{children:"垂直分隔线"}),`
`,n.jsx(R,{name:"DividerDirection",children:n.jsx(L4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"设置分割线方向"}),n.jsx(e.td,{children:"'horizontal' / 'vertical'"}),n.jsx(e.td,{children:"horizontal"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border-style"}),n.jsx(e.td,{children:"设置分隔符样式"}),n.jsx(e.td,{children:"'none' / 'solid' / 'hidden' / 'dashed' / ...(css/border-style)"}),n.jsx(e.td,{children:"solid"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content-position"}),n.jsx(e.td,{children:"自定义分隔线内容的位置"}),n.jsx(e.td,{children:"'left' / 'right' / 'center'"}),n.jsx(e.td,{children:"center"})]})]})]})]})}function D4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Mu,{...t})}):Mu(t)}function P4({name:t}){let e;switch(t){case"button":e=n.jsx(L2,{});break;case"container":e=n.jsx(O2,{});break;case"icon":e=n.jsx(H2,{});break;case"layout":e=n.jsx(K2,{});break;case"link":e=n.jsx(ew,{});break;case"text":e=n.jsx(iw,{});break;case"scrollbar":e=n.jsx(sw,{});break;case"space":e=n.jsx(mw,{});break;case"switch":e=n.jsx(kw,{});break;case"rate":e=n.jsx(Sw,{});break;case"avatar":e=n.jsx(Rw,{});break;case"badge":e=n.jsx(Mw,{});break;case"collapse":e=n.jsx(Fw,{});break;case"progress":e=n.jsx($w,{});break;case"result":e=n.jsx(Ww,{});break;case"table":e=n.jsx(Qw,{});break;case"tag":e=n.jsx(e4,{});break;case"alert":e=n.jsx(a4,{});break;case"dialog":e=n.jsx(h4,{});break;case"drawer":e=n.jsx(g4,{});break;case"popconfirm":e=n.jsx(w4,{});break;case"popover":e=n.jsx(C4,{});break;case"tooltip":e=n.jsx(E4,{});break;case"divider":e=n.jsx(D4,{});break}return e}function se({name:t}){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(P4,{name:t})})})}function A4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"home-content",children:[n.jsxs("div",{className:"description",children:[n.jsx("img",{src:cp,alt:"pelement-react",className:"logo"}),n.jsx("h1",{children:"pelement react"}),n.jsx("p",{children:"基于Element Plus 和 react，面向设计师和开发者的组件库"}),n.jsx(ap,{to:"/component/button",children:"快速开始"})]}),n.jsxs("div",{className:"join-us",children:[n.jsx("h3",{children:"加入我们"}),n.jsxs("div",{children:[n.jsx("label",{children:"Email: "}),n.jsx("span",{children:"llkui241569@163.com"})]}),n.jsxs("div",{children:[n.jsx("label",{children:"QQ: "}),n.jsx("span",{children:"1728366431"})]})]}),n.jsxs("div",{className:"footer-main text-xs",children:[n.jsxs("p",{children:["Released under the ",n.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferer",children:"MIT License"}),"."]}),n.jsxs("p",{children:["Made with ❤️ by ",n.jsx("a",{href:"https://github.com/llkui",target:"_blank",rel:"noopener noreferer",children:"llkui"})]})]})]})})}const M4=u.lazy(()=>wt(()=>import("./Guide-4dslH183.js"),__vite__mapDeps([]))),I4=u.lazy(()=>wt(()=>import("./installation.zh-CN-9ba8kIH3.js"),__vite__mapDeps([]))),F4=u.lazy(()=>wt(()=>import("./changelog.zh-CN-NAkUSQ3v.js"),__vite__mapDeps([]))),z4=u.lazy(()=>wt(()=>import("./recommendation.zh-CN-wRWzDJnj.js"),__vite__mapDeps([]))),O4=u.lazy(()=>wt(()=>import("./Component-Q4wTqjLe.js"),__vite__mapDeps([]))),$4=u.lazy(()=>wt(()=>import("./Overview-p6qTReFR.js"),__vite__mapDeps([0,1]))),H4=u.lazy(()=>wt(()=>import("./Border-sASi4EU5.js"),__vite__mapDeps([]))),U4=u.lazy(()=>wt(()=>import("./Blog-yzSYUwz_.js"),__vite__mapDeps([]))),W4=u.lazy(()=>wt(()=>import("./build-error.zh-CN-wP8ekkBQ.js"),__vite__mapDeps([]))),V4=u.lazy(()=>wt(()=>import("./cannot-find-module.zh-CN-NW6JGFtw.js"),__vite__mapDeps([]))),X4=u.lazy(()=>wt(()=>import("./NotFound-UHD46n_T.js"),__vite__mapDeps([2,3])));function ht(t){const{children:e}=t;return n.jsx(n.Fragment,{children:n.jsx(u.Suspense,{fallback:n.jsx("div",{children:"Loading..."}),children:e})})}const G4=()=>o0([{path:"/",element:n.jsx(Yi,{to:"/component/button"})},{path:"home",element:n.jsx(A4,{})},{path:"guide",element:n.jsx(Yi,{to:"changelog"})},{path:"guide",element:n.jsx(ht,{children:n.jsx(M4,{})}),children:[{path:"installation",element:n.jsx(ht,{children:n.jsx(I4,{})})},{path:"changelog",element:n.jsx(ht,{children:n.jsx(F4,{})})},{path:"recommendation",element:n.jsx(ht,{children:n.jsx(z4,{})})}]},{path:"component",element:n.jsx(Yi,{to:"overview"})},{path:"component",element:n.jsx(ht,{children:n.jsx(O4,{})}),children:[{path:"overview",element:n.jsx(ht,{children:n.jsx($4,{})})},{path:"button",element:n.jsx(se,{name:"button"})},{path:"border",element:n.jsx(ht,{children:n.jsx(H4,{})})},{path:"container",element:n.jsx(se,{name:"container"})},{path:"icon",element:n.jsx(se,{name:"icon"})},{path:"layout",element:n.jsx(se,{name:"layout"})},{path:"link",element:n.jsx(se,{name:"link"})},{path:"text",element:n.jsx(se,{name:"text"})},{path:"scrollbar",element:n.jsx(se,{name:"scrollbar"})},{path:"space",element:n.jsx(se,{name:"space"})},{path:"switch",element:n.jsx(se,{name:"switch"})},{path:"rate",element:n.jsx(se,{name:"rate"})},{path:"avatar",element:n.jsx(se,{name:"avatar"})},{path:"badge",element:n.jsx(se,{name:"badge"})},{path:"collapse",element:n.jsx(se,{name:"collapse"})},{path:"progress",element:n.jsx(se,{name:"progress"})},{path:"result",element:n.jsx(se,{name:"result"})},{path:"table",element:n.jsx(se,{name:"table"})},{path:"tag",element:n.jsx(se,{name:"tag"})},{path:"alert",element:n.jsx(se,{name:"alert"})},{path:"dialog",element:n.jsx(se,{name:"dialog"})},{path:"drawer",element:n.jsx(se,{name:"drawer"})},{path:"popconfirm",element:n.jsx(se,{name:"popconfirm"})},{path:"popover",element:n.jsx(se,{name:"popover"})},{path:"tooltip",element:n.jsx(se,{name:"tooltip"})},{path:"divider",element:n.jsx(se,{name:"divider"})}]},{path:"blog",element:n.jsx(Yi,{to:"build-error"})},{path:"blog",element:n.jsx(ht,{children:n.jsx(U4,{})}),children:[{path:"build-error",element:n.jsx(ht,{children:n.jsx(W4,{})})},{path:"cannot-find-module",element:n.jsx(ht,{children:n.jsx(V4,{})})}]},{path:"*",element:n.jsx(ht,{children:n.jsx(X4,{})})}]);qs.createRoot(document.getElementById("root")).render(n.jsx(na.StrictMode,{children:n.jsxs(E0,{children:[n.jsx(G4,{}),n.jsx(A0,{})]})}));export{Zi as N,y0 as O,n as j,u as r,ip as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Overview-p6qTReFR.js","assets/Overview-_X6MYKkE.css","assets/NotFound-UHD46n_T.js","assets/NotFound-36NBZRJX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}