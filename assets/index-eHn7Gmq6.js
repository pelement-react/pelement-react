function am(t,e){for(var r=0;r<e.length;r++){const l=e[r];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(l,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function Fu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zu={exports:{}},Wi={},Ou={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),cm=Symbol.for("react.portal"),dm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),hm=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),xm=Symbol.for("react.suspense"),gm=Symbol.for("react.memo"),jm=Symbol.for("react.lazy"),kc=Symbol.iterator;function vm(t){return t===null||typeof t!="object"?null:(t=kc&&t[kc]||t["@@iterator"],typeof t=="function"?t:null)}var $u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hu=Object.assign,Uu={};function yr(t,e,r){this.props=t,this.context=e,this.refs=Uu,this.updater=r||$u}yr.prototype.isReactComponent={};yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wu(){}Wu.prototype=yr.prototype;function Jo(t,e,r){this.props=t,this.context=e,this.refs=Uu,this.updater=r||$u}var qo=Jo.prototype=new Wu;qo.constructor=Jo;Hu(qo,yr.prototype);qo.isPureReactComponent=!0;var Ec=Array.isArray,Vu=Object.prototype.hasOwnProperty,ea={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Gu(t,e,r){var l,i={},s=null,o=null;if(e!=null)for(l in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vu.call(e,l)&&!Xu.hasOwnProperty(l)&&(i[l]=e[l]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(l in a=t.defaultProps,a)i[l]===void 0&&(i[l]=a[l]);return{$$typeof:Cl,type:t,key:s,ref:o,props:i,_owner:ea.current}}function ym(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ta(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function wm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Tc=/\/+/g;function _s(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wm(""+t.key):e.toString(36)}function ei(t,e,r,l,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cl:case cm:o=!0}}if(o)return o=t,i=i(o),t=l===""?"."+_s(o,0):l,Ec(i)?(r="",t!=null&&(r=t.replace(Tc,"$&/")+"/"),ei(i,e,r,"",function(d){return d})):i!=null&&(ta(i)&&(i=ym(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,l=l===""?".":l+":",Ec(t))for(var a=0;a<t.length;a++){s=t[a];var c=l+_s(s,a);o+=ei(s,e,r,c,i)}else if(c=vm(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=l+_s(s,a++),o+=ei(s,e,r,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dl(t,e,r){if(t==null)return t;var l=[],i=0;return ei(t,l,"","",function(s){return e.call(r,s,i++)}),l}function _m(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},ti={transition:null},Cm={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ti,ReactCurrentOwner:ea};Q.Children={map:Dl,forEach:function(t,e,r){Dl(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Dl(t,function(){e++}),e},toArray:function(t){return Dl(t,function(e){return e})||[]},only:function(t){if(!ta(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=yr;Q.Fragment=dm;Q.Profiler=hm;Q.PureComponent=Jo;Q.StrictMode=um;Q.Suspense=xm;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;Q.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var l=Hu({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ea.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Vu.call(e,c)&&!Xu.hasOwnProperty(c)&&(l[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)l.children=r;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];l.children=a}return{$$typeof:Cl,type:t.type,key:i,ref:s,props:l,_owner:o}};Q.createContext=function(t){return t={$$typeof:fm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pm,_context:t},t.Consumer=t};Q.createElement=Gu;Q.createFactory=function(t){var e=Gu.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:mm,render:t}};Q.isValidElement=ta;Q.lazy=function(t){return{$$typeof:jm,_payload:{_status:-1,_result:t},_init:_m}};Q.memo=function(t,e){return{$$typeof:gm,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=ti.transition;ti.transition={};try{t()}finally{ti.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return Oe.current.useCallback(t,e)};Q.useContext=function(t){return Oe.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};Q.useEffect=function(t,e){return Oe.current.useEffect(t,e)};Q.useId=function(){return Oe.current.useId()};Q.useImperativeHandle=function(t,e,r){return Oe.current.useImperativeHandle(t,e,r)};Q.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return Oe.current.useMemo(t,e)};Q.useReducer=function(t,e,r){return Oe.current.useReducer(t,e,r)};Q.useRef=function(t){return Oe.current.useRef(t)};Q.useState=function(t){return Oe.current.useState(t)};Q.useSyncExternalStore=function(t,e,r){return Oe.current.useSyncExternalStore(t,e,r)};Q.useTransition=function(){return Oe.current.useTransition()};Q.version="18.2.0";Ou.exports=Q;var u=Ou.exports;const na=Fu(u),ra=am({__proto__:null,default:na},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm=u,bm=Symbol.for("react.element"),Sm=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Em=Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tm={key:!0,ref:!0,__self:!0,__source:!0};function Qu(t,e,r){var l,i={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(l in e)km.call(e,l)&&!Tm.hasOwnProperty(l)&&(i[l]=e[l]);if(t&&t.defaultProps)for(l in e=t.defaultProps,e)i[l]===void 0&&(i[l]=e[l]);return{$$typeof:bm,type:t,key:s,ref:o,props:i,_owner:Em.current}}Wi.Fragment=Sm;Wi.jsx=Qu;Wi.jsxs=Qu;zu.exports=Wi;var n=zu.exports,qs={},Ku={exports:{}},tt={},Yu={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(_,R){var P=_.length;_.push(R);e:for(;0<P;){var $=P-1>>>1,K=_[$];if(0<i(K,R))_[$]=R,_[P]=K,P=$;else break e}}function r(_){return _.length===0?null:_[0]}function l(_){if(_.length===0)return null;var R=_[0],P=_.pop();if(P!==R){_[0]=P;e:for(var $=0,K=_.length,Re=K>>>1;$<Re;){var rt=2*($+1)-1,Ne=_[rt],ye=rt+1,jn=_[ye];if(0>i(Ne,P))ye<K&&0>i(jn,Ne)?(_[$]=jn,_[ye]=P,$=ye):(_[$]=Ne,_[rt]=P,$=rt);else if(ye<K&&0>i(jn,P))_[$]=jn,_[ye]=P,$=ye;else break e}}return R}function i(_,R){var P=_.sortIndex-R.sortIndex;return P!==0?P:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],d=[],h=1,p=null,x=3,g=!1,v=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(_){for(var R=r(d);R!==null;){if(R.callback===null)l(d);else if(R.startTime<=_)l(d),R.sortIndex=R.expirationTime,e(c,R);else break;R=r(d)}}function w(_){if(y=!1,j(_),!v)if(r(c)!==null)v=!0,W(C);else{var R=r(d);R!==null&&S(w,R.startTime-_)}}function C(_,R){v=!1,y&&(y=!1,m(L),L=-1),g=!0;var P=x;try{for(j(R),p=r(c);p!==null&&(!(p.expirationTime>R)||_&&!G());){var $=p.callback;if(typeof $=="function"){p.callback=null,x=p.priorityLevel;var K=$(p.expirationTime<=R);R=t.unstable_now(),typeof K=="function"?p.callback=K:p===r(c)&&l(c),j(R)}else l(c);p=r(c)}if(p!==null)var Re=!0;else{var rt=r(d);rt!==null&&S(w,rt.startTime-R),Re=!1}return Re}finally{p=null,x=P,g=!1}}var k=!1,E=null,L=-1,O=5,F=-1;function G(){return!(t.unstable_now()-F<O)}function q(){if(E!==null){var _=t.unstable_now();F=_;var R=!0;try{R=E(!0,_)}finally{R?ae():(k=!1,E=null)}}else k=!1}var ae;if(typeof f=="function")ae=function(){f(q)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,U=H.port2;H.port1.onmessage=q,ae=function(){U.postMessage(null)}}else ae=function(){N(q,0)};function W(_){E=_,k||(k=!0,ae())}function S(_,R){L=N(function(){_(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,W(C))},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(_){switch(x){case 1:case 2:case 3:var R=3;break;default:R=x}var P=x;x=R;try{return _()}finally{x=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=x;x=_;try{return R()}finally{x=P}},t.unstable_scheduleCallback=function(_,R,P){var $=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,_){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,_={id:h++,callback:R,priorityLevel:_,startTime:P,expirationTime:K,sortIndex:-1},P>$?(_.sortIndex=P,e(d,_),r(c)===null&&_===r(d)&&(y?(m(L),L=-1):y=!0,S(w,P-$))):(_.sortIndex=K,e(c,_),v||g||(v=!0,W(C))),_},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(_){var R=x;return function(){var P=x;x=R;try{return _.apply(this,arguments)}finally{x=P}}}})(Zu);Yu.exports=Zu;var Bm=Yu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju=u,qe=Bm;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qu=new Set,Yr={};function Mn(t,e){dr(t,e),dr(t+"Capture",e)}function dr(t,e){for(Yr[t]=e,t=0;t<e.length;t++)qu.add(e[t])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bc={},Rc={};function Lm(t){return eo.call(Rc,t)?!0:eo.call(Bc,t)?!1:Rm.test(t)?Rc[t]=!0:(Bc[t]=!0,!1)}function Dm(t,e,r,l){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pm(t,e,r,l){if(e===null||typeof e>"u"||Dm(t,e,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,r,l,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function ia(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(la,ia);Be[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(la,ia);Be[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(la,ia);Be[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function sa(t,e,r,l){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:l||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pm(e,r,i,l)&&(r=null),l||i===null?Lm(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,l=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,l?t.setAttributeNS(l,e,r):t.setAttribute(e,r))))}var Ot=Ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pl=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),oa=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),aa=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),ca=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),nh=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function Sr(t){return t===null||typeof t!="object"?null:(t=Lc&&t[Lc]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,Cs;function Pr(t){if(Cs===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Cs=e&&e[1]||""}return`
`+Cs+t}var Ns=!1;function bs(t,e){if(!t||Ns)return"";Ns=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var l=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){l=d}t.call(e.prototype)}else{try{throw Error()}catch(d){l=d}t()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=l.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Ns=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Pr(t):""}function Am(t){switch(t.tag){case 5:return Pr(t.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return t=bs(t.type,!1),t;case 11:return t=bs(t.type.render,!1),t;case 1:return t=bs(t.type,!0),t;default:return""}}function lo(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vn:return"Fragment";case Wn:return"Portal";case to:return"Profiler";case oa:return"StrictMode";case no:return"Suspense";case ro:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case th:return(t.displayName||"Context")+".Consumer";case eh:return(t._context.displayName||"Context")+".Provider";case aa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ca:return e=t.displayName||null,e!==null?e:lo(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return lo(t(e))}catch{}}return null}function Mm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lo(e);case 8:return e===oa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Im(t){var e=rh(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){l=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Al(t){t._valueTracker||(t._valueTracker=Im(t))}function lh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),l="";return t&&(l=rh(t)?t.checked?"true":"false":t.value),t=l,t!==r?(e.setValue(t),!0):!1}function pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function io(t,e){var r=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Dc(t,e){var r=e.defaultValue==null?"":e.defaultValue,l=e.checked!=null?e.checked:e.defaultChecked;r=cn(e.value!=null?e.value:r),t._wrapperState={initialChecked:l,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ih(t,e){e=e.checked,e!=null&&sa(t,"checked",e,!1)}function so(t,e){ih(t,e);var r=cn(e.value),l=e.type;if(r!=null)l==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oo(t,e.type,r):e.hasOwnProperty("defaultValue")&&oo(t,e.type,cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pc(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var l=e.type;if(!(l!=="submit"&&l!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function oo(t,e,r){(e!=="number"||pi(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ar=Array.isArray;function rr(t,e,r,l){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&l&&(t[r].defaultSelected=!0)}else{for(r=""+cn(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ao(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ac(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(B(92));if(Ar(r)){if(1<r.length)throw Error(B(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:cn(r)}}function sh(t,e){var r=cn(e.value),l=cn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),l!=null&&(t.defaultValue=""+l)}function Mc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function oh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function co(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?oh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,ah=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,l,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,l,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fm=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(t){Fm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$r[e]=$r[t]})});function ch(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||$r.hasOwnProperty(t)&&$r[t]?(""+e).trim():e+"px"}function dh(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var l=r.indexOf("--")===0,i=ch(r,e[r],l);r==="float"&&(r="cssFloat"),l?t.setProperty(r,i):t[r]=i}}var zm=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(t,e){if(e){if(zm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function ho(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function da(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fo=null,lr=null,ir=null;function Ic(t){if(t=Sl(t)){if(typeof fo!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Ki(e),fo(t.stateNode,t.type,e))}}function uh(t){lr?ir?ir.push(t):ir=[t]:lr=t}function hh(){if(lr){var t=lr,e=ir;if(ir=lr=null,Ic(t),e)for(t=0;t<e.length;t++)Ic(e[t])}}function ph(t,e){return t(e)}function fh(){}var Ss=!1;function mh(t,e,r){if(Ss)return t(e,r);Ss=!0;try{return ph(t,e,r)}finally{Ss=!1,(lr!==null||ir!==null)&&(fh(),hh())}}function Jr(t,e){var r=t.stateNode;if(r===null)return null;var l=Ki(r);if(l===null)return null;r=l[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(B(231,e,typeof r));return r}var mo=!1;if(Mt)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){mo=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{mo=!1}function Om(t,e,r,l,i,s,o,a,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(r,d)}catch(h){this.onError(h)}}var Hr=!1,fi=null,mi=!1,xo=null,$m={onError:function(t){Hr=!0,fi=t}};function Hm(t,e,r,l,i,s,o,a,c){Hr=!1,fi=null,Om.apply($m,arguments)}function Um(t,e,r,l,i,s,o,a,c){if(Hm.apply(this,arguments),Hr){if(Hr){var d=fi;Hr=!1,fi=null}else throw Error(B(198));mi||(mi=!0,xo=d)}}function In(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function xh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fc(t){if(In(t)!==t)throw Error(B(188))}function Wm(t){var e=t.alternate;if(!e){if(e=In(t),e===null)throw Error(B(188));return e!==t?null:t}for(var r=t,l=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(l=i.return,l!==null){r=l;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Fc(i),t;if(s===l)return Fc(i),e;s=s.sibling}throw Error(B(188))}if(r.return!==l.return)r=i,l=s;else{for(var o=!1,a=i.child;a;){if(a===r){o=!0,r=i,l=s;break}if(a===l){o=!0,l=i,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,l=i;break}if(a===l){o=!0,l=s,r=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(r.alternate!==l)throw Error(B(190))}if(r.tag!==3)throw Error(B(188));return r.stateNode.current===r?t:e}function gh(t){return t=Wm(t),t!==null?jh(t):null}function jh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jh(t);if(e!==null)return e;t=t.sibling}return null}var vh=qe.unstable_scheduleCallback,zc=qe.unstable_cancelCallback,Vm=qe.unstable_shouldYield,Xm=qe.unstable_requestPaint,me=qe.unstable_now,Gm=qe.unstable_getCurrentPriorityLevel,ua=qe.unstable_ImmediatePriority,yh=qe.unstable_UserBlockingPriority,xi=qe.unstable_NormalPriority,Qm=qe.unstable_LowPriority,wh=qe.unstable_IdlePriority,Vi=null,kt=null;function Km(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Vi,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Jm,Ym=Math.log,Zm=Math.LN2;function Jm(t){return t>>>=0,t===0?32:31-(Ym(t)/Zm|0)|0}var Il=64,Fl=4194304;function Mr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gi(t,e){var r=t.pendingLanes;if(r===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var a=o&~i;a!==0?l=Mr(a):(s&=o,s!==0&&(l=Mr(s)))}else o=r&~i,o!==0?l=Mr(o):s!==0&&(l=Mr(s));if(l===0)return 0;if(e!==0&&e!==l&&!(e&i)&&(i=l&-l,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(l&4&&(l|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=l;0<e;)r=31-xt(e),i=1<<r,l|=t[r],e&=~i;return l}function qm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ex(t,e){for(var r=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,c=i[o];c===-1?(!(a&r)||a&l)&&(i[o]=qm(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function go(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _h(){var t=Il;return Il<<=1,!(Il&4194240)&&(Il=64),t}function ks(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Nl(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=r}function tx(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-xt(r),s=1<<i;e[i]=0,l[i]=-1,t[i]=-1,r&=~s}}function ha(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var l=31-xt(r),i=1<<l;i&e|t[l]&e&&(t[l]|=e),r&=~i}}var J=0;function Ch(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nh,pa,bh,Sh,kh,jo=!1,zl=[],qt=null,en=null,tn=null,qr=new Map,el=new Map,Gt=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oc(t,e){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":qr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function Er(t,e,r,l,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:l,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sl(e),e!==null&&pa(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rx(t,e,r,l,i){switch(e){case"focusin":return qt=Er(qt,t,e,r,l,i),!0;case"dragenter":return en=Er(en,t,e,r,l,i),!0;case"mouseover":return tn=Er(tn,t,e,r,l,i),!0;case"pointerover":var s=i.pointerId;return qr.set(s,Er(qr.get(s)||null,t,e,r,l,i)),!0;case"gotpointercapture":return s=i.pointerId,el.set(s,Er(el.get(s)||null,t,e,r,l,i)),!0}return!1}function Eh(t){var e=_n(t.target);if(e!==null){var r=In(e);if(r!==null){if(e=r.tag,e===13){if(e=xh(r),e!==null){t.blockedOn=e,kh(t.priority,function(){bh(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ni(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=vo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);po=l,r.target.dispatchEvent(l),po=null}else return e=Sl(r),e!==null&&pa(e),t.blockedOn=r,!1;e.shift()}return!0}function $c(t,e,r){ni(t)&&r.delete(e)}function lx(){jo=!1,qt!==null&&ni(qt)&&(qt=null),en!==null&&ni(en)&&(en=null),tn!==null&&ni(tn)&&(tn=null),qr.forEach($c),el.forEach($c)}function Tr(t,e){t.blockedOn===e&&(t.blockedOn=null,jo||(jo=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,lx)))}function tl(t){function e(i){return Tr(i,t)}if(0<zl.length){Tr(zl[0],t);for(var r=1;r<zl.length;r++){var l=zl[r];l.blockedOn===t&&(l.blockedOn=null)}}for(qt!==null&&Tr(qt,t),en!==null&&Tr(en,t),tn!==null&&Tr(tn,t),qr.forEach(e),el.forEach(e),r=0;r<Gt.length;r++)l=Gt[r],l.blockedOn===t&&(l.blockedOn=null);for(;0<Gt.length&&(r=Gt[0],r.blockedOn===null);)Eh(r),r.blockedOn===null&&Gt.shift()}var sr=Ot.ReactCurrentBatchConfig,ji=!0;function ix(t,e,r,l){var i=J,s=sr.transition;sr.transition=null;try{J=1,fa(t,e,r,l)}finally{J=i,sr.transition=s}}function sx(t,e,r,l){var i=J,s=sr.transition;sr.transition=null;try{J=4,fa(t,e,r,l)}finally{J=i,sr.transition=s}}function fa(t,e,r,l){if(ji){var i=vo(t,e,r,l);if(i===null)Is(t,e,l,vi,r),Oc(t,l);else if(rx(i,t,e,r,l))l.stopPropagation();else if(Oc(t,l),e&4&&-1<nx.indexOf(t)){for(;i!==null;){var s=Sl(i);if(s!==null&&Nh(s),s=vo(t,e,r,l),s===null&&Is(t,e,l,vi,r),s===i)break;i=s}i!==null&&l.stopPropagation()}else Is(t,e,l,null,r)}}var vi=null;function vo(t,e,r,l){if(vi=null,t=da(l),t=_n(t),t!==null)if(e=In(t),e===null)t=null;else if(r=e.tag,r===13){if(t=xh(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vi=t,null}function Th(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gm()){case ua:return 1;case yh:return 4;case xi:case Qm:return 16;case wh:return 536870912;default:return 16}default:return 16}}var Kt=null,ma=null,ri=null;function Bh(){if(ri)return ri;var t,e=ma,r=e.length,l,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(l=1;l<=o&&e[r-l]===i[s-l];l++);return ri=i.slice(t,1<l?1-l:void 0)}function li(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function Hc(){return!1}function nt(t){function e(r,l,i,s,o){this._reactName=r,this._targetInst=i,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ol:Hc,this.isPropagationStopped=Hc,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=nt(wr),bl=ue({},wr,{view:0,detail:0}),ox=nt(bl),Es,Ts,Br,Xi=ue({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Br&&(Br&&t.type==="mousemove"?(Es=t.screenX-Br.screenX,Ts=t.screenY-Br.screenY):Ts=Es=0,Br=t),Es)},movementY:function(t){return"movementY"in t?t.movementY:Ts}}),Uc=nt(Xi),ax=ue({},Xi,{dataTransfer:0}),cx=nt(ax),dx=ue({},bl,{relatedTarget:0}),Bs=nt(dx),ux=ue({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=nt(ux),px=ue({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=nt(px),mx=ue({},wr,{data:0}),Wc=nt(mx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jx[t])?!!e[t]:!1}function ga(){return vx}var yx=ue({},bl,{key:function(t){if(t.key){var e=xx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(t){return t.type==="keypress"?li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wx=nt(yx),_x=ue({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=nt(_x),Cx=ue({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),Nx=nt(Cx),bx=ue({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=nt(bx),kx=ue({},Xi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=nt(kx),Tx=[9,13,27,32],ja=Mt&&"CompositionEvent"in window,Ur=null;Mt&&"documentMode"in document&&(Ur=document.documentMode);var Bx=Mt&&"TextEvent"in window&&!Ur,Rh=Mt&&(!ja||Ur&&8<Ur&&11>=Ur),Xc=" ",Gc=!1;function Lh(t,e){switch(t){case"keyup":return Tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xn=!1;function Rx(t,e){switch(t){case"compositionend":return Dh(e);case"keypress":return e.which!==32?null:(Gc=!0,Xc);case"textInput":return t=e.data,t===Xc&&Gc?null:t;default:return null}}function Lx(t,e){if(Xn)return t==="compositionend"||!ja&&Lh(t,e)?(t=Bh(),ri=ma=Kt=null,Xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rh&&e.locale!=="ko"?null:e.data;default:return null}}var Dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dx[t.type]:e==="textarea"}function Ph(t,e,r,l){uh(l),e=yi(e,"onChange"),0<e.length&&(r=new xa("onChange","change",null,r,l),t.push({event:r,listeners:e}))}var Wr=null,nl=null;function Px(t){Vh(t,0)}function Gi(t){var e=Kn(t);if(lh(e))return t}function Ax(t,e){if(t==="change")return e}var Ah=!1;if(Mt){var Rs;if(Mt){var Ls="oninput"in document;if(!Ls){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),Ls=typeof Kc.oninput=="function"}Rs=Ls}else Rs=!1;Ah=Rs&&(!document.documentMode||9<document.documentMode)}function Yc(){Wr&&(Wr.detachEvent("onpropertychange",Mh),nl=Wr=null)}function Mh(t){if(t.propertyName==="value"&&Gi(nl)){var e=[];Ph(e,nl,t,da(t)),mh(Px,e)}}function Mx(t,e,r){t==="focusin"?(Yc(),Wr=e,nl=r,Wr.attachEvent("onpropertychange",Mh)):t==="focusout"&&Yc()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gi(nl)}function Fx(t,e){if(t==="click")return Gi(e)}function zx(t,e){if(t==="input"||t==="change")return Gi(e)}function Ox(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:Ox;function rl(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),l=Object.keys(e);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var i=r[l];if(!eo.call(e,i)||!vt(t[i],e[i]))return!1}return!0}function Zc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jc(t,e){var r=Zc(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=e&&l>=e)return{node:r,offset:e-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zc(r)}}function Ih(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ih(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fh(){for(var t=window,e=pi();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=pi(t.document)}return e}function va(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $x(t){var e=Fh(),r=t.focusedElem,l=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Ih(r.ownerDocument.documentElement,r)){if(l!==null&&va(r)){if(e=l.start,t=l.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(l.start,i);l=l.end===void 0?s:Math.min(l.end,i),!t.extend&&s>l&&(i=l,l=s,s=i),i=Jc(r,s);var o=Jc(r,l);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>l?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hx=Mt&&"documentMode"in document&&11>=document.documentMode,Gn=null,yo=null,Vr=null,wo=!1;function qc(t,e,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wo||Gn==null||Gn!==pi(l)||(l=Gn,"selectionStart"in l&&va(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vr&&rl(Vr,l)||(Vr=l,l=yi(yo,"onSelect"),0<l.length&&(e=new xa("onSelect","select",null,e,r),t.push({event:e,listeners:l}),e.target=Gn)))}function $l(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Qn={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},Ds={},zh={};Mt&&(zh=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Qi(t){if(Ds[t])return Ds[t];if(!Qn[t])return t;var e=Qn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in zh)return Ds[t]=e[r];return t}var Oh=Qi("animationend"),$h=Qi("animationiteration"),Hh=Qi("animationstart"),Uh=Qi("transitionend"),Wh=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(t,e){Wh.set(t,e),Mn(e,[t])}for(var Ps=0;Ps<ed.length;Ps++){var As=ed[Ps],Ux=As.toLowerCase(),Wx=As[0].toUpperCase()+As.slice(1);fn(Ux,"on"+Wx)}fn(Oh,"onAnimationEnd");fn($h,"onAnimationIteration");fn(Hh,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Uh,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function td(t,e,r){var l=t.type||"unknown-event";t.currentTarget=r,Um(l,e,void 0,t),t.currentTarget=null}function Vh(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],i=l.event;l=l.listeners;e:{var s=void 0;if(e)for(var o=l.length-1;0<=o;o--){var a=l[o],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;td(i,a,d),s=c}else for(o=0;o<l.length;o++){if(a=l[o],c=a.instance,d=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;td(i,a,d),s=c}}}if(mi)throw t=xo,mi=!1,xo=null,t}function le(t,e){var r=e[So];r===void 0&&(r=e[So]=new Set);var l=t+"__bubble";r.has(l)||(Xh(e,t,2,!1),r.add(l))}function Ms(t,e,r){var l=0;e&&(l|=4),Xh(r,t,l,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[Hl]){t[Hl]=!0,qu.forEach(function(r){r!=="selectionchange"&&(Vx.has(r)||Ms(r,!1,t),Ms(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,Ms("selectionchange",!1,e))}}function Xh(t,e,r,l){switch(Th(e)){case 1:var i=ix;break;case 4:i=sx;break;default:i=fa}r=i.bind(null,e,r,t),i=void 0,!mo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Is(t,e,r,l,i){var s=l;if(!(e&1)&&!(e&2)&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var a=l.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_n(a),o===null)return;if(c=o.tag,c===5||c===6){l=s=o;continue e}a=a.parentNode}}l=l.return}mh(function(){var d=s,h=da(r),p=[];e:{var x=Wh.get(t);if(x!==void 0){var g=xa,v=t;switch(t){case"keypress":if(li(r)===0)break e;case"keydown":case"keyup":g=wx;break;case"focusin":v="focus",g=Bs;break;case"focusout":v="blur",g=Bs;break;case"beforeblur":case"afterblur":g=Bs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Nx;break;case Oh:case $h:case Hh:g=hx;break;case Uh:g=Sx;break;case"scroll":g=ox;break;case"wheel":g=Ex;break;case"copy":case"cut":case"paste":g=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vc}var y=(e&4)!==0,N=!y&&t==="scroll",m=y?x!==null?x+"Capture":null:x;y=[];for(var f=d,j;f!==null;){j=f;var w=j.stateNode;if(j.tag===5&&w!==null&&(j=w,m!==null&&(w=Jr(f,m),w!=null&&y.push(il(f,w,j)))),N)break;f=f.return}0<y.length&&(x=new g(x,v,null,r,h),p.push({event:x,listeners:y}))}}if(!(e&7)){e:{if(x=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",x&&r!==po&&(v=r.relatedTarget||r.fromElement)&&(_n(v)||v[It]))break e;if((g||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=d,v=v?_n(v):null,v!==null&&(N=In(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(y=Uc,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vc,w="onPointerLeave",m="onPointerEnter",f="pointer"),N=g==null?x:Kn(g),j=v==null?x:Kn(v),x=new y(w,f+"leave",g,r,h),x.target=N,x.relatedTarget=j,w=null,_n(h)===d&&(y=new y(m,f+"enter",v,r,h),y.target=j,y.relatedTarget=N,w=y),N=w,g&&v)t:{for(y=g,m=v,f=0,j=y;j;j=Hn(j))f++;for(j=0,w=m;w;w=Hn(w))j++;for(;0<f-j;)y=Hn(y),f--;for(;0<j-f;)m=Hn(m),j--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Hn(y),m=Hn(m)}y=null}else y=null;g!==null&&nd(p,x,g,y,!1),v!==null&&N!==null&&nd(p,N,v,y,!0)}}e:{if(x=d?Kn(d):window,g=x.nodeName&&x.nodeName.toLowerCase(),g==="select"||g==="input"&&x.type==="file")var C=Ax;else if(Qc(x))if(Ah)C=zx;else{C=Ix;var k=Mx}else(g=x.nodeName)&&g.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(C=Fx);if(C&&(C=C(t,d))){Ph(p,C,r,h);break e}k&&k(t,x,d),t==="focusout"&&(k=x._wrapperState)&&k.controlled&&x.type==="number"&&oo(x,"number",x.value)}switch(k=d?Kn(d):window,t){case"focusin":(Qc(k)||k.contentEditable==="true")&&(Gn=k,yo=d,Vr=null);break;case"focusout":Vr=yo=Gn=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,qc(p,r,h);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":qc(p,r,h)}var E;if(ja)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Xn?Lh(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Rh&&r.locale!=="ko"&&(Xn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Xn&&(E=Bh()):(Kt=h,ma="value"in Kt?Kt.value:Kt.textContent,Xn=!0)),k=yi(d,L),0<k.length&&(L=new Wc(L,t,null,r,h),p.push({event:L,listeners:k}),E?L.data=E:(E=Dh(r),E!==null&&(L.data=E)))),(E=Bx?Rx(t,r):Lx(t,r))&&(d=yi(d,"onBeforeInput"),0<d.length&&(h=new Wc("onBeforeInput","beforeinput",null,r,h),p.push({event:h,listeners:d}),h.data=E))}Vh(p,e)})}function il(t,e,r){return{instance:t,listener:e,currentTarget:r}}function yi(t,e){for(var r=e+"Capture",l=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jr(t,r),s!=null&&l.unshift(il(t,s,i)),s=Jr(t,e),s!=null&&l.push(il(t,s,i))),t=t.return}return l}function Hn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nd(t,e,r,l,i){for(var s=e._reactName,o=[];r!==null&&r!==l;){var a=r,c=a.alternate,d=a.stateNode;if(c!==null&&c===l)break;a.tag===5&&d!==null&&(a=d,i?(c=Jr(r,s),c!=null&&o.unshift(il(r,c,a))):i||(c=Jr(r,s),c!=null&&o.push(il(r,c,a)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Xx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function rd(t){return(typeof t=="string"?t:""+t).replace(Xx,`
`).replace(Gx,"")}function Ul(t,e,r){if(e=rd(e),rd(t)!==e&&r)throw Error(B(425))}function wi(){}var _o=null,Co=null;function No(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(t){return ld.resolve(null).then(t).catch(Yx)}:bo;function Yx(t){setTimeout(function(){throw t})}function Fs(t,e){var r=e,l=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(l===0){t.removeChild(i),tl(e);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=i}while(r);tl(e)}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function id(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Nt="__reactFiber$"+_r,sl="__reactProps$"+_r,It="__reactContainer$"+_r,So="__reactEvents$"+_r,Zx="__reactListeners$"+_r,Jx="__reactHandles$"+_r;function _n(t){var e=t[Nt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[It]||r[Nt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=id(t);t!==null;){if(r=t[Nt])return r;t=id(t)}return e}t=r,r=t.parentNode}return null}function Sl(t){return t=t[Nt]||t[It],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Ki(t){return t[sl]||null}var ko=[],Yn=-1;function mn(t){return{current:t}}function ie(t){0>Yn||(t.current=ko[Yn],ko[Yn]=null,Yn--)}function te(t,e){Yn++,ko[Yn]=t.current,t.current=e}var dn={},Me=mn(dn),We=mn(!1),Tn=dn;function ur(t,e){var r=t.type.contextTypes;if(!r)return dn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===e)return l.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(t){return t=t.childContextTypes,t!=null}function _i(){ie(We),ie(Me)}function sd(t,e,r){if(Me.current!==dn)throw Error(B(168));te(Me,e),te(We,r)}function Gh(t,e,r){var l=t.stateNode;if(e=e.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var i in l)if(!(i in e))throw Error(B(108,Mm(t)||"Unknown",i));return ue({},r,l)}function Ci(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dn,Tn=Me.current,te(Me,t),te(We,We.current),!0}function od(t,e,r){var l=t.stateNode;if(!l)throw Error(B(169));r?(t=Gh(t,e,Tn),l.__reactInternalMemoizedMergedChildContext=t,ie(We),ie(Me),te(Me,t)):ie(We),te(We,r)}var Lt=null,Yi=!1,zs=!1;function Qh(t){Lt===null?Lt=[t]:Lt.push(t)}function qx(t){Yi=!0,Qh(t)}function xn(){if(!zs&&Lt!==null){zs=!0;var t=0,e=J;try{var r=Lt;for(J=1;t<r.length;t++){var l=r[t];do l=l(!0);while(l!==null)}Lt=null,Yi=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(t+1)),vh(ua,xn),i}finally{J=e,zs=!1}}return null}var Zn=[],Jn=0,Ni=null,bi=0,lt=[],it=0,Bn=null,Dt=1,Pt="";function yn(t,e){Zn[Jn++]=bi,Zn[Jn++]=Ni,Ni=t,bi=e}function Kh(t,e,r){lt[it++]=Dt,lt[it++]=Pt,lt[it++]=Bn,Bn=t;var l=Dt;t=Pt;var i=32-xt(l)-1;l&=~(1<<i),r+=1;var s=32-xt(e)+i;if(30<s){var o=i-i%5;s=(l&(1<<o)-1).toString(32),l>>=o,i-=o,Dt=1<<32-xt(e)+i|r<<i|l,Pt=s+t}else Dt=1<<s|r<<i|l,Pt=t}function ya(t){t.return!==null&&(yn(t,1),Kh(t,1,0))}function wa(t){for(;t===Ni;)Ni=Zn[--Jn],Zn[Jn]=null,bi=Zn[--Jn],Zn[Jn]=null;for(;t===Bn;)Bn=lt[--it],lt[it]=null,Pt=lt[--it],lt[it]=null,Dt=lt[--it],lt[it]=null}var Ze=null,Ye=null,oe=!1,ft=null;function Yh(t,e){var r=st(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function ad(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Ye=nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Bn!==null?{id:Dt,overflow:Pt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=st(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ze=t,Ye=null,!0):!1;default:return!1}}function Eo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function To(t){if(oe){var e=Ye;if(e){var r=e;if(!ad(t,e)){if(Eo(t))throw Error(B(418));e=nn(r.nextSibling);var l=Ze;e&&ad(t,e)?Yh(l,r):(t.flags=t.flags&-4097|2,oe=!1,Ze=t)}}else{if(Eo(t))throw Error(B(418));t.flags=t.flags&-4097|2,oe=!1,Ze=t}}}function cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function Wl(t){if(t!==Ze)return!1;if(!oe)return cd(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!No(t.type,t.memoizedProps)),e&&(e=Ye)){if(Eo(t))throw Zh(),Error(B(418));for(;e;)Yh(t,e),e=nn(e.nextSibling)}if(cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ye=nn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ye=null}}else Ye=Ze?nn(t.stateNode.nextSibling):null;return!0}function Zh(){for(var t=Ye;t;)t=nn(t.nextSibling)}function hr(){Ye=Ze=null,oe=!1}function _a(t){ft===null?ft=[t]:ft.push(t)}var eg=Ot.ReactCurrentBatchConfig;function ht(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var Si=mn(null),ki=null,qn=null,Ca=null;function Na(){Ca=qn=ki=null}function ba(t){var e=Si.current;ie(Si),t._currentValue=e}function Bo(t,e,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===r)break;t=t.return}}function or(t,e){ki=t,Ca=qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(Ca!==t)if(t={context:t,memoizedValue:e,next:null},qn===null){if(ki===null)throw Error(B(308));qn=t,ki.dependencies={lanes:0,firstContext:t}}else qn=qn.next=t;return e}var Cn=null;function Sa(t){Cn===null?Cn=[t]:Cn.push(t)}function Jh(t,e,r,l){var i=e.interleaved;return i===null?(r.next=r,Sa(e)):(r.next=i.next,i.next=r),e.interleaved=r,Ft(t,l)}function Ft(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Xt=!1;function ka(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rn(t,e,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,Y&2){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,Ft(t,r)}return i=l.interleaved,i===null?(e.next=e,Sa(l)):(e.next=i.next,i.next=e),l.interleaved=e,Ft(t,r)}function ii(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,ha(t,r)}}function dd(t,e){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:l.shared,effects:l.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ei(t,e,r,l){var i=t.updateQueue;Xt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,h=d=c=null,a=s;do{var x=a.lane,g=a.eventTime;if((l&x)===x){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(x=e,g=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(g,p,x);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,x=typeof v=="function"?v.call(g,p,x):v,x==null)break e;p=ue({},p,x);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=i.effects,x===null?i.effects=[a]:x.push(a))}else g={eventTime:g,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=g,c=p):h=h.next=g,o|=x;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;x=a,a=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(h===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ln|=o,t.lanes=o,t.memoizedState=p}}function ud(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var l=t[e],i=l.callback;if(i!==null){if(l.callback=null,l=r,typeof i!="function")throw Error(B(191,i));i.call(l)}}}var ep=new Ju.Component().refs;function Ro(t,e,r,l){e=t.memoizedState,r=r(l,e),r=r==null?e:ue({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Zi={isMounted:function(t){return(t=t._reactInternals)?In(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var l=Fe(),i=sn(t),s=At(l,i);s.payload=e,r!=null&&(s.callback=r),e=rn(t,s,i),e!==null&&(gt(e,t,i,l),ii(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var l=Fe(),i=sn(t),s=At(l,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=rn(t,s,i),e!==null&&(gt(e,t,i,l),ii(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Fe(),l=sn(t),i=At(r,l);i.tag=2,e!=null&&(i.callback=e),e=rn(t,i,l),e!==null&&(gt(e,t,l,r),ii(e,t,l))}};function hd(t,e,r,l,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,s,o):e.prototype&&e.prototype.isPureReactComponent?!rl(r,l)||!rl(i,s):!0}function tp(t,e,r){var l=!1,i=dn,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=Ve(e)?Tn:Me.current,l=e.contextTypes,s=(l=l!=null)?ur(t,i):dn),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zi,t.stateNode=e,e._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pd(t,e,r,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,l),e.state!==t&&Zi.enqueueReplaceState(e,e.state,null)}function Lo(t,e,r,l){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs=ep,ka(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=Ve(e)?Tn:Me.current,i.context=ur(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ro(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zi.enqueueReplaceState(i,i.state,null),Ei(t,r,i,l),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rr(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(B(309));var l=r.stateNode}if(!l)throw Error(B(147,t));var i=l,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ep&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!r._owner)throw Error(B(290,t))}return t}function Vl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fd(t){var e=t._init;return e(t._payload)}function np(t){function e(m,f){if(t){var j=m.deletions;j===null?(m.deletions=[f],m.flags|=16):j.push(f)}}function r(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function l(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=on(m,f),m.index=0,m.sibling=null,m}function s(m,f,j){return m.index=j,t?(j=m.alternate,j!==null?(j=j.index,j<f?(m.flags|=2,f):j):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,j,w){return f===null||f.tag!==6?(f=Xs(j,m.mode,w),f.return=m,f):(f=i(f,j),f.return=m,f)}function c(m,f,j,w){var C=j.type;return C===Vn?h(m,f,j.props.children,w,j.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&fd(C)===f.type)?(w=i(f,j.props),w.ref=Rr(m,f,j),w.return=m,w):(w=ui(j.type,j.key,j.props,null,m.mode,w),w.ref=Rr(m,f,j),w.return=m,w)}function d(m,f,j,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==j.containerInfo||f.stateNode.implementation!==j.implementation?(f=Gs(j,m.mode,w),f.return=m,f):(f=i(f,j.children||[]),f.return=m,f)}function h(m,f,j,w,C){return f===null||f.tag!==7?(f=Sn(j,m.mode,w,C),f.return=m,f):(f=i(f,j),f.return=m,f)}function p(m,f,j){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xs(""+f,m.mode,j),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Pl:return j=ui(f.type,f.key,f.props,null,m.mode,j),j.ref=Rr(m,null,f),j.return=m,j;case Wn:return f=Gs(f,m.mode,j),f.return=m,f;case Vt:var w=f._init;return p(m,w(f._payload),j)}if(Ar(f)||Sr(f))return f=Sn(f,m.mode,j,null),f.return=m,f;Vl(m,f)}return null}function x(m,f,j,w){var C=f!==null?f.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return C!==null?null:a(m,f,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Pl:return j.key===C?c(m,f,j,w):null;case Wn:return j.key===C?d(m,f,j,w):null;case Vt:return C=j._init,x(m,f,C(j._payload),w)}if(Ar(j)||Sr(j))return C!==null?null:h(m,f,j,w,null);Vl(m,j)}return null}function g(m,f,j,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(j)||null,a(f,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pl:return m=m.get(w.key===null?j:w.key)||null,c(f,m,w,C);case Wn:return m=m.get(w.key===null?j:w.key)||null,d(f,m,w,C);case Vt:var k=w._init;return g(m,f,j,k(w._payload),C)}if(Ar(w)||Sr(w))return m=m.get(j)||null,h(f,m,w,C,null);Vl(f,w)}return null}function v(m,f,j,w){for(var C=null,k=null,E=f,L=f=0,O=null;E!==null&&L<j.length;L++){E.index>L?(O=E,E=null):O=E.sibling;var F=x(m,E,j[L],w);if(F===null){E===null&&(E=O);break}t&&E&&F.alternate===null&&e(m,E),f=s(F,f,L),k===null?C=F:k.sibling=F,k=F,E=O}if(L===j.length)return r(m,E),oe&&yn(m,L),C;if(E===null){for(;L<j.length;L++)E=p(m,j[L],w),E!==null&&(f=s(E,f,L),k===null?C=E:k.sibling=E,k=E);return oe&&yn(m,L),C}for(E=l(m,E);L<j.length;L++)O=g(E,m,L,j[L],w),O!==null&&(t&&O.alternate!==null&&E.delete(O.key===null?L:O.key),f=s(O,f,L),k===null?C=O:k.sibling=O,k=O);return t&&E.forEach(function(G){return e(m,G)}),oe&&yn(m,L),C}function y(m,f,j,w){var C=Sr(j);if(typeof C!="function")throw Error(B(150));if(j=C.call(j),j==null)throw Error(B(151));for(var k=C=null,E=f,L=f=0,O=null,F=j.next();E!==null&&!F.done;L++,F=j.next()){E.index>L?(O=E,E=null):O=E.sibling;var G=x(m,E,F.value,w);if(G===null){E===null&&(E=O);break}t&&E&&G.alternate===null&&e(m,E),f=s(G,f,L),k===null?C=G:k.sibling=G,k=G,E=O}if(F.done)return r(m,E),oe&&yn(m,L),C;if(E===null){for(;!F.done;L++,F=j.next())F=p(m,F.value,w),F!==null&&(f=s(F,f,L),k===null?C=F:k.sibling=F,k=F);return oe&&yn(m,L),C}for(E=l(m,E);!F.done;L++,F=j.next())F=g(E,m,L,F.value,w),F!==null&&(t&&F.alternate!==null&&E.delete(F.key===null?L:F.key),f=s(F,f,L),k===null?C=F:k.sibling=F,k=F);return t&&E.forEach(function(q){return e(m,q)}),oe&&yn(m,L),C}function N(m,f,j,w){if(typeof j=="object"&&j!==null&&j.type===Vn&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Pl:e:{for(var C=j.key,k=f;k!==null;){if(k.key===C){if(C=j.type,C===Vn){if(k.tag===7){r(m,k.sibling),f=i(k,j.props.children),f.return=m,m=f;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&fd(C)===k.type){r(m,k.sibling),f=i(k,j.props),f.ref=Rr(m,k,j),f.return=m,m=f;break e}r(m,k);break}else e(m,k);k=k.sibling}j.type===Vn?(f=Sn(j.props.children,m.mode,w,j.key),f.return=m,m=f):(w=ui(j.type,j.key,j.props,null,m.mode,w),w.ref=Rr(m,f,j),w.return=m,m=w)}return o(m);case Wn:e:{for(k=j.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===j.containerInfo&&f.stateNode.implementation===j.implementation){r(m,f.sibling),f=i(f,j.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else e(m,f);f=f.sibling}f=Gs(j,m.mode,w),f.return=m,m=f}return o(m);case Vt:return k=j._init,N(m,f,k(j._payload),w)}if(Ar(j))return v(m,f,j,w);if(Sr(j))return y(m,f,j,w);Vl(m,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,f!==null&&f.tag===6?(r(m,f.sibling),f=i(f,j),f.return=m,m=f):(r(m,f),f=Xs(j,m.mode,w),f.return=m,m=f),o(m)):r(m,f)}return N}var pr=np(!0),rp=np(!1),kl={},Et=mn(kl),ol=mn(kl),al=mn(kl);function Nn(t){if(t===kl)throw Error(B(174));return t}function Ea(t,e){switch(te(al,e),te(ol,t),te(Et,kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:co(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=co(e,t)}ie(Et),te(Et,e)}function fr(){ie(Et),ie(ol),ie(al)}function lp(t){Nn(al.current);var e=Nn(Et.current),r=co(e,t.type);e!==r&&(te(ol,t),te(Et,r))}function Ta(t){ol.current===t&&(ie(Et),ie(ol))}var ce=mn(0);function Ti(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Os=[];function Ba(){for(var t=0;t<Os.length;t++)Os[t]._workInProgressVersionPrimary=null;Os.length=0}var si=Ot.ReactCurrentDispatcher,$s=Ot.ReactCurrentBatchConfig,Rn=0,de=null,je=null,_e=null,Bi=!1,Xr=!1,cl=0,tg=0;function De(){throw Error(B(321))}function Ra(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!vt(t[r],e[r]))return!1;return!0}function La(t,e,r,l,i,s){if(Rn=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,si.current=t===null||t.memoizedState===null?ig:sg,t=r(l,i),Xr){s=0;do{if(Xr=!1,cl=0,25<=s)throw Error(B(301));s+=1,_e=je=null,e.updateQueue=null,si.current=og,t=r(l,i)}while(Xr)}if(si.current=Ri,e=je!==null&&je.next!==null,Rn=0,_e=je=de=null,Bi=!1,e)throw Error(B(300));return t}function Da(){var t=cl!==0;return cl=0,t}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?de.memoizedState=_e=t:_e=_e.next=t,_e}function ct(){if(je===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=_e===null?de.memoizedState:_e.next;if(e!==null)_e=e,je=t;else{if(t===null)throw Error(B(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},_e===null?de.memoizedState=_e=t:_e=_e.next=t}return _e}function dl(t,e){return typeof e=="function"?e(t):e}function Hs(t){var e=ct(),r=e.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=t;var l=je,i=l.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}l.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,l=l.baseState;var a=o=null,c=null,d=s;do{var h=d.lane;if((Rn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:t(l,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=p,o=l):c=c.next=p,de.lanes|=h,Ln|=h}d=d.next}while(d!==null&&d!==s);c===null?o=l:c.next=a,vt(l,e.memoizedState)||(Ue=!0),e.memoizedState=l,e.baseState=o,e.baseQueue=c,r.lastRenderedState=l}if(t=r.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,Ln|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Us(t){var e=ct(),r=e.queue;if(r===null)throw Error(B(311));r.lastRenderedReducer=t;var l=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vt(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,l]}function ip(){}function sp(t,e){var r=de,l=ct(),i=e(),s=!vt(l.memoizedState,i);if(s&&(l.memoizedState=i,Ue=!0),l=l.queue,Pa(cp.bind(null,r,l,t),[t]),l.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,ul(9,ap.bind(null,r,l,i,e),void 0,null),Ce===null)throw Error(B(349));Rn&30||op(r,e,i)}return i}function op(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function ap(t,e,r,l){e.value=r,e.getSnapshot=l,dp(e)&&up(t)}function cp(t,e,r){return r(function(){dp(e)&&up(t)})}function dp(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!vt(t,r)}catch{return!0}}function up(t){var e=Ft(t,1);e!==null&&gt(e,t,1,-1)}function md(t){var e=Ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e.queue=t,t=t.dispatch=lg.bind(null,de,t),[e.memoizedState,t]}function ul(t,e,r,l){return t={tag:t,create:e,destroy:r,deps:l,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,e.lastEffect=t)),t}function hp(){return ct().memoizedState}function oi(t,e,r,l){var i=Ct();de.flags|=t,i.memoizedState=ul(1|e,r,void 0,l===void 0?null:l)}function Ji(t,e,r,l){var i=ct();l=l===void 0?null:l;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,l!==null&&Ra(l,o.deps)){i.memoizedState=ul(e,r,s,l);return}}de.flags|=t,i.memoizedState=ul(1|e,r,s,l)}function xd(t,e){return oi(8390656,8,t,e)}function Pa(t,e){return Ji(2048,8,t,e)}function pp(t,e){return Ji(4,2,t,e)}function fp(t,e){return Ji(4,4,t,e)}function mp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xp(t,e,r){return r=r!=null?r.concat([t]):null,Ji(4,4,mp.bind(null,e,t),r)}function Aa(){}function gp(t,e){var r=ct();e=e===void 0?null:e;var l=r.memoizedState;return l!==null&&e!==null&&Ra(e,l[1])?l[0]:(r.memoizedState=[t,e],t)}function jp(t,e){var r=ct();e=e===void 0?null:e;var l=r.memoizedState;return l!==null&&e!==null&&Ra(e,l[1])?l[0]:(t=t(),r.memoizedState=[t,e],t)}function vp(t,e,r){return Rn&21?(vt(r,e)||(r=_h(),de.lanes|=r,Ln|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=r)}function ng(t,e){var r=J;J=r!==0&&4>r?r:4,t(!0);var l=$s.transition;$s.transition={};try{t(!1),e()}finally{J=r,$s.transition=l}}function yp(){return ct().memoizedState}function rg(t,e,r){var l=sn(t);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},wp(t))_p(e,r);else if(r=Jh(t,e,r,l),r!==null){var i=Fe();gt(r,t,l,i),Cp(r,e,l)}}function lg(t,e,r){var l=sn(t),i={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(wp(t))_p(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,r);if(i.hasEagerState=!0,i.eagerState=a,vt(a,o)){var c=e.interleaved;c===null?(i.next=i,Sa(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=Jh(t,e,i,l),r!==null&&(i=Fe(),gt(r,t,l,i),Cp(r,e,l))}}function wp(t){var e=t.alternate;return t===de||e!==null&&e===de}function _p(t,e){Xr=Bi=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Cp(t,e,r){if(r&4194240){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,ha(t,r)}}var Ri={readContext:at,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},ig={readContext:at,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:xd,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,oi(4194308,4,mp.bind(null,e,t),r)},useLayoutEffect:function(t,e){return oi(4194308,4,t,e)},useInsertionEffect:function(t,e){return oi(4,2,t,e)},useMemo:function(t,e){var r=Ct();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var l=Ct();return e=r!==void 0?r(e):e,l.memoizedState=l.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},l.queue=t,t=t.dispatch=rg.bind(null,de,t),[l.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:md,useDebugValue:Aa,useDeferredValue:function(t){return Ct().memoizedState=t},useTransition:function(){var t=md(!1),e=t[0];return t=ng.bind(null,t[1]),Ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var l=de,i=Ct();if(oe){if(r===void 0)throw Error(B(407));r=r()}else{if(r=e(),Ce===null)throw Error(B(349));Rn&30||op(l,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,xd(cp.bind(null,l,s,t),[t]),l.flags|=2048,ul(9,ap.bind(null,l,s,r,e),void 0,null),r},useId:function(){var t=Ct(),e=Ce.identifierPrefix;if(oe){var r=Pt,l=Dt;r=(l&~(1<<32-xt(l)-1)).toString(32)+r,e=":"+e+"R"+r,r=cl++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=tg++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sg={readContext:at,useCallback:gp,useContext:at,useEffect:Pa,useImperativeHandle:xp,useInsertionEffect:pp,useLayoutEffect:fp,useMemo:jp,useReducer:Hs,useRef:hp,useState:function(){return Hs(dl)},useDebugValue:Aa,useDeferredValue:function(t){var e=ct();return vp(e,je.memoizedState,t)},useTransition:function(){var t=Hs(dl)[0],e=ct().memoizedState;return[t,e]},useMutableSource:ip,useSyncExternalStore:sp,useId:yp,unstable_isNewReconciler:!1},og={readContext:at,useCallback:gp,useContext:at,useEffect:Pa,useImperativeHandle:xp,useInsertionEffect:pp,useLayoutEffect:fp,useMemo:jp,useReducer:Us,useRef:hp,useState:function(){return Us(dl)},useDebugValue:Aa,useDeferredValue:function(t){var e=ct();return je===null?e.memoizedState=t:vp(e,je.memoizedState,t)},useTransition:function(){var t=Us(dl)[0],e=ct().memoizedState;return[t,e]},useMutableSource:ip,useSyncExternalStore:sp,useId:yp,unstable_isNewReconciler:!1};function mr(t,e){try{var r="",l=e;do r+=Am(l),l=l.return;while(l);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ws(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Do(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var ag=typeof WeakMap=="function"?WeakMap:Map;function Np(t,e,r){r=At(-1,r),r.tag=3,r.payload={element:null};var l=e.value;return r.callback=function(){Di||(Di=!0,Uo=l),Do(t,e)},r}function bp(t,e,r){r=At(-1,r),r.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=e.value;r.payload=function(){return l(i)},r.callback=function(){Do(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Do(t,e),typeof l!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function gd(t,e,r){var l=t.pingCache;if(l===null){l=t.pingCache=new ag;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(r)||(i.add(r),t=_g.bind(null,t,e,r),e.then(t,t))}function jd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vd(t,e,r,l,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=At(-1,1),e.tag=2,rn(r,e,1))),r.lanes|=1),t)}var cg=Ot.ReactCurrentOwner,Ue=!1;function Ie(t,e,r,l){e.child=t===null?rp(e,null,r,l):pr(e,t.child,r,l)}function yd(t,e,r,l,i){r=r.render;var s=e.ref;return or(e,i),l=La(t,e,r,l,s,i),r=Da(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(oe&&r&&ya(e),e.flags|=1,Ie(t,e,l,i),e.child)}function wd(t,e,r,l,i){if(t===null){var s=r.type;return typeof s=="function"&&!Ua(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,Sp(t,e,s,l,i)):(t=ui(r.type,null,l,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:rl,r(o,l)&&t.ref===e.ref)return zt(t,e,i)}return e.flags|=1,t=on(s,l),t.ref=e.ref,t.return=e,e.child=t}function Sp(t,e,r,l,i){if(t!==null){var s=t.memoizedProps;if(rl(s,l)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=l=s,(t.lanes&i)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,zt(t,e,i)}return Po(t,e,r,l,i)}function kp(t,e,r){var l=e.pendingProps,i=l.children,s=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(tr,Qe),Qe|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(tr,Qe),Qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=s!==null?s.baseLanes:r,te(tr,Qe),Qe|=l}else s!==null?(l=s.baseLanes|r,e.memoizedState=null):l=r,te(tr,Qe),Qe|=l;return Ie(t,e,i,r),e.child}function Ep(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Po(t,e,r,l,i){var s=Ve(r)?Tn:Me.current;return s=ur(e,s),or(e,i),r=La(t,e,r,l,s,i),l=Da(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(oe&&l&&ya(e),e.flags|=1,Ie(t,e,r,i),e.child)}function _d(t,e,r,l,i){if(Ve(r)){var s=!0;Ci(e)}else s=!1;if(or(e,i),e.stateNode===null)ai(t,e),tp(e,r,l),Lo(e,r,l,i),l=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=at(d):(d=Ve(r)?Tn:Me.current,d=ur(e,d));var h=r.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==l||c!==d)&&pd(e,o,l,d),Xt=!1;var x=e.memoizedState;o.state=x,Ei(e,l,o,i),c=e.memoizedState,a!==l||x!==c||We.current||Xt?(typeof h=="function"&&(Ro(e,r,h,l),c=e.memoizedState),(a=Xt||hd(e,r,a,l,x,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=c),o.props=l,o.state=c,o.context=d,l=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{o=e.stateNode,qh(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:ht(e.type,a),o.props=d,p=e.pendingProps,x=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=at(c):(c=Ve(r)?Tn:Me.current,c=ur(e,c));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||x!==c)&&pd(e,o,l,c),Xt=!1,x=e.memoizedState,o.state=x,Ei(e,l,o,i);var v=e.memoizedState;a!==p||x!==v||We.current||Xt?(typeof g=="function"&&(Ro(e,r,g,l),v=e.memoizedState),(d=Xt||hd(e,r,d,l,x,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=v),o.props=l,o.state=v,o.context=c,l=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),l=!1)}return Ao(t,e,r,l,s,i)}function Ao(t,e,r,l,i,s){Ep(t,e);var o=(e.flags&128)!==0;if(!l&&!o)return i&&od(e,r,!1),zt(t,e,s);l=e.stateNode,cg.current=e;var a=o&&typeof r.getDerivedStateFromError!="function"?null:l.render();return e.flags|=1,t!==null&&o?(e.child=pr(e,t.child,null,s),e.child=pr(e,null,a,s)):Ie(t,e,a,s),e.memoizedState=l.state,i&&od(e,r,!0),e.child}function Tp(t){var e=t.stateNode;e.pendingContext?sd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sd(t,e.context,!1),Ea(t,e.containerInfo)}function Cd(t,e,r,l,i){return hr(),_a(i),e.flags|=256,Ie(t,e,r,l),e.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Io(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bp(t,e,r){var l=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(ce,i&1),t===null)return To(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=l.children,t=l.fallback,s?(l=e.mode,s=e.child,o={mode:"hidden",children:o},!(l&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ts(o,l,0,null),t=Sn(t,l,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Io(r),e.memoizedState=Mo,t):Ma(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dg(t,e,o,l,a,i,r);if(s){s=l.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:l.children};return!(o&1)&&e.child!==i?(l=e.child,l.childLanes=0,l.pendingProps=c,e.deletions=null):(l=on(i,c),l.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=on(a,s):(s=Sn(s,o,r,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,l=s,s=e.child,o=t.child.memoizedState,o=o===null?Io(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Mo,l}return s=t.child,t=s.sibling,l=on(s,{mode:"visible",children:l.children}),!(e.mode&1)&&(l.lanes=r),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l}function Ma(t,e){return e=ts({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xl(t,e,r,l){return l!==null&&_a(l),pr(e,t.child,null,r),t=Ma(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dg(t,e,r,l,i,s,o){if(r)return e.flags&256?(e.flags&=-257,l=Ws(Error(B(422))),Xl(t,e,o,l)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=l.fallback,i=e.mode,l=ts({mode:"visible",children:l.children},i,0,null),s=Sn(s,i,o,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,e.mode&1&&pr(e,t.child,null,o),e.child.memoizedState=Io(o),e.memoizedState=Mo,s);if(!(e.mode&1))return Xl(t,e,o,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var a=l.dgst;return l=a,s=Error(B(419)),l=Ws(s,l,void 0),Xl(t,e,o,l)}if(a=(o&t.childLanes)!==0,Ue||a){if(l=Ce,l!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ft(t,i),gt(l,t,i,-1))}return Ha(),l=Ws(Error(B(421))),Xl(t,e,o,l)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Cg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ye=nn(i.nextSibling),Ze=e,oe=!0,ft=null,t!==null&&(lt[it++]=Dt,lt[it++]=Pt,lt[it++]=Bn,Dt=t.id,Pt=t.overflow,Bn=e),e=Ma(e,l.children),e.flags|=4096,e)}function Nd(t,e,r){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Bo(t.return,e,r)}function Vs(t,e,r,l,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=r,s.tailMode=i)}function Rp(t,e,r){var l=e.pendingProps,i=l.revealOrder,s=l.tail;if(Ie(t,e,l.children,r),l=ce.current,l&2)l=l&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nd(t,r,e);else if(t.tag===19)Nd(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(te(ce,l),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Ti(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Vs(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ti(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Vs(e,!0,r,null,s);break;case"together":Vs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ai(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Ln|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,r=on(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=on(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function ug(t,e,r){switch(e.tag){case 3:Tp(e),hr();break;case 5:lp(e);break;case 1:Ve(e.type)&&Ci(e);break;case 4:Ea(e,e.stateNode.containerInfo);break;case 10:var l=e.type._context,i=e.memoizedProps.value;te(Si,l._currentValue),l._currentValue=i;break;case 13:if(l=e.memoizedState,l!==null)return l.dehydrated!==null?(te(ce,ce.current&1),e.flags|=128,null):r&e.child.childLanes?Bp(t,e,r):(te(ce,ce.current&1),t=zt(t,e,r),t!==null?t.sibling:null);te(ce,ce.current&1);break;case 19:if(l=(r&e.childLanes)!==0,t.flags&128){if(l)return Rp(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ce,ce.current),l)break;return null;case 22:case 23:return e.lanes=0,kp(t,e,r)}return zt(t,e,r)}var Lp,Fo,Dp,Pp;Lp=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Fo=function(){};Dp=function(t,e,r,l){var i=t.memoizedProps;if(i!==l){t=e.stateNode,Nn(Et.current);var s=null;switch(r){case"input":i=io(t,i),l=io(t,l),s=[];break;case"select":i=ue({},i,{value:void 0}),l=ue({},l,{value:void 0}),s=[];break;case"textarea":i=ao(t,i),l=ao(t,l),s=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=wi)}uo(r,l);var o;r=null;for(d in i)if(!l.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yr.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in l){var c=l[d];if(a=i!=null?i[d]:void 0,l.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",t),s||a===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Pp=function(t,e,r,l){r!==l&&(e.flags|=4)};function Lr(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=r,e}function hg(t,e,r){var l=e.pendingProps;switch(wa(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ve(e.type)&&_i(),Pe(e),null;case 3:return l=e.stateNode,fr(),ie(We),ie(Me),Ba(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ft!==null&&(Xo(ft),ft=null))),Fo(t,e),Pe(e),null;case 5:Ta(e);var i=Nn(al.current);if(r=e.type,t!==null&&e.stateNode!=null)Dp(t,e,r,l,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!l){if(e.stateNode===null)throw Error(B(166));return Pe(e),null}if(t=Nn(Et.current),Wl(e)){l=e.stateNode,r=e.type;var s=e.memoizedProps;switch(l[Nt]=e,l[sl]=s,t=(e.mode&1)!==0,r){case"dialog":le("cancel",l),le("close",l);break;case"iframe":case"object":case"embed":le("load",l);break;case"video":case"audio":for(i=0;i<Ir.length;i++)le(Ir[i],l);break;case"source":le("error",l);break;case"img":case"image":case"link":le("error",l),le("load",l);break;case"details":le("toggle",l);break;case"input":Dc(l,s),le("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!s.multiple},le("invalid",l);break;case"textarea":Ac(l,s),le("invalid",l)}uo(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?l.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(l.textContent,a,t),i=["children",a]):typeof a=="number"&&l.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(l.textContent,a,t),i=["children",""+a]):Yr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",l)}switch(r){case"input":Al(l),Pc(l,s,!0);break;case"textarea":Al(l),Mc(l);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(l.onclick=wi)}l=i,e.updateQueue=l,l!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=oh(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=o.createElement(r,{is:l.is}):(t=o.createElement(r),r==="select"&&(o=t,l.multiple?o.multiple=!0:l.size&&(o.size=l.size))):t=o.createElementNS(t,r),t[Nt]=e,t[sl]=l,Lp(t,e,!1,!1),e.stateNode=t;e:{switch(o=ho(r,l),r){case"dialog":le("cancel",t),le("close",t),i=l;break;case"iframe":case"object":case"embed":le("load",t),i=l;break;case"video":case"audio":for(i=0;i<Ir.length;i++)le(Ir[i],t);i=l;break;case"source":le("error",t),i=l;break;case"img":case"image":case"link":le("error",t),le("load",t),i=l;break;case"details":le("toggle",t),i=l;break;case"input":Dc(t,l),i=io(t,l),le("invalid",t);break;case"option":i=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},i=ue({},l,{value:void 0}),le("invalid",t);break;case"textarea":Ac(t,l),i=ao(t,l),le("invalid",t);break;default:i=l}uo(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?dh(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ah(t,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Zr(t,c):typeof c=="number"&&Zr(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&le("scroll",t):c!=null&&sa(t,s,c,o))}switch(r){case"input":Al(t),Pc(t,l,!1);break;case"textarea":Al(t),Mc(t);break;case"option":l.value!=null&&t.setAttribute("value",""+cn(l.value));break;case"select":t.multiple=!!l.multiple,s=l.value,s!=null?rr(t,!!l.multiple,s,!1):l.defaultValue!=null&&rr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wi)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Pp(t,e,t.memoizedProps,l);else{if(typeof l!="string"&&e.stateNode===null)throw Error(B(166));if(r=Nn(al.current),Nn(Et.current),Wl(e)){if(l=e.stateNode,r=e.memoizedProps,l[Nt]=e,(s=l.nodeValue!==r)&&(t=Ze,t!==null))switch(t.tag){case 3:Ul(l.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(l.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[Nt]=e,e.stateNode=l}return Pe(e),null;case 13:if(ie(ce),l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Ye!==null&&e.mode&1&&!(e.flags&128))Zh(),hr(),e.flags|=98560,s=!1;else if(s=Wl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Nt]=e}else hr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else ft!==null&&(Xo(ft),ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?ve===0&&(ve=3):Ha())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return fr(),Fo(t,e),t===null&&ll(e.stateNode.containerInfo),Pe(e),null;case 10:return ba(e.type._context),Pe(e),null;case 17:return Ve(e.type)&&_i(),Pe(e),null;case 19:if(ie(ce),s=e.memoizedState,s===null)return Pe(e),null;if(l=(e.flags&128)!==0,o=s.rendering,o===null)if(l)Lr(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ti(t),o!==null){for(e.flags|=128,Lr(s,!1),l=o.updateQueue,l!==null&&(e.updateQueue=l,e.flags|=4),e.subtreeFlags=0,l=r,r=e.child;r!==null;)s=r,t=l,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return te(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>xr&&(e.flags|=128,l=!0,Lr(s,!1),e.lanes=4194304)}else{if(!l)if(t=Ti(o),t!==null){if(e.flags|=128,l=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Lr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Pe(e),null}else 2*me()-s.renderingStartTime>xr&&r!==1073741824&&(e.flags|=128,l=!0,Lr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,r=ce.current,te(ce,l?r&1|2:r&1),e):(Pe(e),null);case 22:case 23:return $a(),l=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(e.flags|=8192),l&&e.mode&1?Qe&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function pg(t,e){switch(wa(e),e.tag){case 1:return Ve(e.type)&&_i(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fr(),ie(We),ie(Me),Ba(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ta(e),null;case 13:if(ie(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));hr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ce),null;case 4:return fr(),null;case 10:return ba(e.type._context),null;case 22:case 23:return $a(),null;case 24:return null;default:return null}}var Gl=!1,Ae=!1,fg=typeof WeakSet=="function"?WeakSet:Set,A=null;function er(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){he(t,e,l)}else r.current=null}function zo(t,e,r){try{r()}catch(l){he(t,e,l)}}var bd=!1;function mg(t,e){if(_o=ji,t=Fh(),va(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,c=-1,d=0,h=0,p=t,x=null;t:for(;;){for(var g;p!==r||i!==0&&p.nodeType!==3||(a=o+i),p!==s||l!==0&&p.nodeType!==3||(c=o+l),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)x=p,p=g;for(;;){if(p===t)break t;if(x===r&&++d===i&&(a=o),x===s&&++h===l&&(c=o),(g=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=g}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Co={focusedElem:t,selectionRange:r},ji=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,N=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ht(e.type,y),N);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var j=e.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(w){he(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=bd,bd=!1,v}function Gr(t,e,r){var l=e.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zo(e,r,s)}i=i.next}while(i!==l)}}function qi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var l=r.create;r.destroy=l()}r=r.next}while(r!==e)}}function Oo(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Ap(t){var e=t.alternate;e!==null&&(t.alternate=null,Ap(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nt],delete e[sl],delete e[So],delete e[Zx],delete e[Jx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mp(t){return t.tag===5||t.tag===3||t.tag===4}function Sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $o(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=wi));else if(l!==4&&(t=t.child,t!==null))for($o(t,e,r),t=t.sibling;t!==null;)$o(t,e,r),t=t.sibling}function Ho(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ho(t,e,r),t=t.sibling;t!==null;)Ho(t,e,r),t=t.sibling}var Se=null,pt=!1;function Wt(t,e,r){for(r=r.child;r!==null;)Ip(t,e,r),r=r.sibling}function Ip(t,e,r){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Vi,r)}catch{}switch(r.tag){case 5:Ae||er(r,e);case 6:var l=Se,i=pt;Se=null,Wt(t,e,r),Se=l,pt=i,Se!==null&&(pt?(t=Se,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(pt?(t=Se,r=r.stateNode,t.nodeType===8?Fs(t.parentNode,r):t.nodeType===1&&Fs(t,r),tl(t)):Fs(Se,r.stateNode));break;case 4:l=Se,i=pt,Se=r.stateNode.containerInfo,pt=!0,Wt(t,e,r),Se=l,pt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zo(r,e,o),i=i.next}while(i!==l)}Wt(t,e,r);break;case 1:if(!Ae&&(er(r,e),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(a){he(r,e,a)}Wt(t,e,r);break;case 21:Wt(t,e,r);break;case 22:r.mode&1?(Ae=(l=Ae)||r.memoizedState!==null,Wt(t,e,r),Ae=l):Wt(t,e,r);break;default:Wt(t,e,r)}}function kd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new fg),e.forEach(function(l){var i=Ng.bind(null,t,l);r.has(l)||(r.add(l),l.then(i,i))})}}function ut(t,e){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var i=r[l];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,pt=!1;break e;case 3:Se=a.stateNode.containerInfo,pt=!0;break e;case 4:Se=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Se===null)throw Error(B(160));Ip(s,o,i),Se=null,pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){he(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fp(e,t),e=e.sibling}function Fp(t,e){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ut(e,t),wt(t),l&4){try{Gr(3,t,t.return),qi(3,t)}catch(y){he(t,t.return,y)}try{Gr(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:ut(e,t),wt(t),l&512&&r!==null&&er(r,r.return);break;case 5:if(ut(e,t),wt(t),l&512&&r!==null&&er(r,r.return),t.flags&32){var i=t.stateNode;try{Zr(i,"")}catch(y){he(t,t.return,y)}}if(l&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ih(i,s),ho(a,o);var d=ho(a,s);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?dh(i,p):h==="dangerouslySetInnerHTML"?ah(i,p):h==="children"?Zr(i,p):sa(i,h,p,d)}switch(a){case"input":so(i,s);break;case"textarea":sh(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?rr(i,!!s.multiple,g,!1):x!==!!s.multiple&&(s.defaultValue!=null?rr(i,!!s.multiple,s.defaultValue,!0):rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[sl]=s}catch(y){he(t,t.return,y)}}break;case 6:if(ut(e,t),wt(t),l&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){he(t,t.return,y)}}break;case 3:if(ut(e,t),wt(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:ut(e,t),wt(t);break;case 13:ut(e,t),wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(za=me())),l&4&&kd(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(Ae=(d=Ae)||h,ut(e,t),Ae=d):ut(e,t),wt(t),l&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(A=t,h=t.child;h!==null;){for(p=A=h;A!==null;){switch(x=A,g=x.child,x.tag){case 0:case 11:case 14:case 15:Gr(4,x,x.return);break;case 1:er(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){l=x,r=x.return;try{e=l,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){he(l,r,y)}}break;case 5:er(x,x.return);break;case 22:if(x.memoizedState!==null){Td(p);continue}}g!==null?(g.return=x,A=g):Td(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=ch("display",o))}catch(y){he(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){he(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ut(e,t),wt(t),l&4&&kd(t);break;case 21:break;default:ut(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Mp(r)){var l=r;break e}r=r.return}throw Error(B(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Zr(i,""),l.flags&=-33);var s=Sd(t);Ho(t,s,i);break;case 3:case 4:var o=l.stateNode.containerInfo,a=Sd(t);$o(t,a,o);break;default:throw Error(B(161))}}catch(c){he(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xg(t,e,r){A=t,zp(t)}function zp(t,e,r){for(var l=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&l){var o=i.memoizedState!==null||Gl;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ae;a=Gl;var d=Ae;if(Gl=o,(Ae=c)&&!d)for(A=i;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Bd(i):c!==null?(c.return=o,A=c):Bd(i);for(;s!==null;)A=s,zp(s),s=s.sibling;A=i,Gl=a,Ae=d}Ed(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Ed(t)}}function Ed(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||qi(5,e);break;case 1:var l=e.stateNode;if(e.flags&4&&!Ae)if(r===null)l.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:ht(e.type,r.memoizedProps);l.componentDidUpdate(i,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ud(e,s,l);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}ud(e,o,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&tl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ae||e.flags&512&&Oo(e)}catch(x){he(e,e.return,x)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function Td(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function Bd(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{qi(4,e)}catch(c){he(e,r,c)}break;case 1:var l=e.stateNode;if(typeof l.componentDidMount=="function"){var i=e.return;try{l.componentDidMount()}catch(c){he(e,i,c)}}var s=e.return;try{Oo(e)}catch(c){he(e,s,c)}break;case 5:var o=e.return;try{Oo(e)}catch(c){he(e,o,c)}}}catch(c){he(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var gg=Math.ceil,Li=Ot.ReactCurrentDispatcher,Ia=Ot.ReactCurrentOwner,ot=Ot.ReactCurrentBatchConfig,Y=0,Ce=null,xe=null,Te=0,Qe=0,tr=mn(0),ve=0,hl=null,Ln=0,es=0,Fa=0,Qr=null,He=null,za=0,xr=1/0,Rt=null,Di=!1,Uo=null,ln=null,Ql=!1,Yt=null,Pi=0,Kr=0,Wo=null,ci=-1,di=0;function Fe(){return Y&6?me():ci!==-1?ci:ci=me()}function sn(t){return t.mode&1?Y&2&&Te!==0?Te&-Te:eg.transition!==null?(di===0&&(di=_h()),di):(t=J,t!==0||(t=window.event,t=t===void 0?16:Th(t.type)),t):1}function gt(t,e,r,l){if(50<Kr)throw Kr=0,Wo=null,Error(B(185));Nl(t,r,l),(!(Y&2)||t!==Ce)&&(t===Ce&&(!(Y&2)&&(es|=r),ve===4&&Qt(t,Te)),Xe(t,l),r===1&&Y===0&&!(e.mode&1)&&(xr=me()+500,Yi&&xn()))}function Xe(t,e){var r=t.callbackNode;ex(t,e);var l=gi(t,t===Ce?Te:0);if(l===0)r!==null&&zc(r),t.callbackNode=null,t.callbackPriority=0;else if(e=l&-l,t.callbackPriority!==e){if(r!=null&&zc(r),e===1)t.tag===0?qx(Rd.bind(null,t)):Qh(Rd.bind(null,t)),Kx(function(){!(Y&6)&&xn()}),r=null;else{switch(Ch(l)){case 1:r=ua;break;case 4:r=yh;break;case 16:r=xi;break;case 536870912:r=wh;break;default:r=xi}r=Gp(r,Op.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Op(t,e){if(ci=-1,di=0,Y&6)throw Error(B(327));var r=t.callbackNode;if(ar()&&t.callbackNode!==r)return null;var l=gi(t,t===Ce?Te:0);if(l===0)return null;if(l&30||l&t.expiredLanes||e)e=Ai(t,l);else{e=l;var i=Y;Y|=2;var s=Hp();(Ce!==t||Te!==e)&&(Rt=null,xr=me()+500,bn(t,e));do try{yg();break}catch(a){$p(t,a)}while(!0);Na(),Li.current=s,Y=i,xe!==null?e=0:(Ce=null,Te=0,e=ve)}if(e!==0){if(e===2&&(i=go(t),i!==0&&(l=i,e=Vo(t,i))),e===1)throw r=hl,bn(t,0),Qt(t,l),Xe(t,me()),r;if(e===6)Qt(t,l);else{if(i=t.current.alternate,!(l&30)&&!jg(i)&&(e=Ai(t,l),e===2&&(s=go(t),s!==0&&(l=s,e=Vo(t,s))),e===1))throw r=hl,bn(t,0),Qt(t,l),Xe(t,me()),r;switch(t.finishedWork=i,t.finishedLanes=l,e){case 0:case 1:throw Error(B(345));case 2:wn(t,He,Rt);break;case 3:if(Qt(t,l),(l&130023424)===l&&(e=za+500-me(),10<e)){if(gi(t,0)!==0)break;if(i=t.suspendedLanes,(i&l)!==l){Fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bo(wn.bind(null,t,He,Rt),e);break}wn(t,He,Rt);break;case 4:if(Qt(t,l),(l&4194240)===l)break;for(e=t.eventTimes,i=-1;0<l;){var o=31-xt(l);s=1<<o,o=e[o],o>i&&(i=o),l&=~s}if(l=i,l=me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*gg(l/1960))-l,10<l){t.timeoutHandle=bo(wn.bind(null,t,He,Rt),l);break}wn(t,He,Rt);break;case 5:wn(t,He,Rt);break;default:throw Error(B(329))}}}return Xe(t,me()),t.callbackNode===r?Op.bind(null,t):null}function Vo(t,e){var r=Qr;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Ai(t,e),t!==2&&(e=He,He=r,e!==null&&Xo(e)),t}function Xo(t){He===null?He=t:He.push.apply(He,t)}function jg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var i=r[l],s=i.getSnapshot;i=i.value;try{if(!vt(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~Fa,e&=~es,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-xt(e),l=1<<r;t[r]=-1,e&=~l}}function Rd(t){if(Y&6)throw Error(B(327));ar();var e=gi(t,0);if(!(e&1))return Xe(t,me()),null;var r=Ai(t,e);if(t.tag!==0&&r===2){var l=go(t);l!==0&&(e=l,r=Vo(t,l))}if(r===1)throw r=hl,bn(t,0),Qt(t,e),Xe(t,me()),r;if(r===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t,He,Rt),Xe(t,me()),null}function Oa(t,e){var r=Y;Y|=1;try{return t(e)}finally{Y=r,Y===0&&(xr=me()+500,Yi&&xn())}}function Dn(t){Yt!==null&&Yt.tag===0&&!(Y&6)&&ar();var e=Y;Y|=1;var r=ot.transition,l=J;try{if(ot.transition=null,J=1,t)return t()}finally{J=l,ot.transition=r,Y=e,!(Y&6)&&xn()}}function $a(){Qe=tr.current,ie(tr)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Qx(r)),xe!==null)for(r=xe.return;r!==null;){var l=r;switch(wa(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_i();break;case 3:fr(),ie(We),ie(Me),Ba();break;case 5:Ta(l);break;case 4:fr();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:ba(l.type._context);break;case 22:case 23:$a()}r=r.return}if(Ce=t,xe=t=on(t.current,null),Te=Qe=e,ve=0,hl=null,Fa=es=Ln=0,He=Qr=null,Cn!==null){for(e=0;e<Cn.length;e++)if(r=Cn[e],l=r.interleaved,l!==null){r.interleaved=null;var i=l.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,l.next=o}r.pending=l}Cn=null}return t}function $p(t,e){do{var r=xe;try{if(Na(),si.current=Ri,Bi){for(var l=de.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}Bi=!1}if(Rn=0,_e=je=de=null,Xr=!1,cl=0,Ia.current=null,r===null||r.return===null){ve=1,hl=e,xe=null;break}e:{var s=t,o=r.return,a=r,c=e;if(e=Te,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=jd(o);if(g!==null){g.flags&=-257,vd(g,o,a,s,e),g.mode&1&&gd(s,d,e),e=g,c=d;var v=e.updateQueue;if(v===null){var y=new Set;y.add(c),e.updateQueue=y}else v.add(c);break e}else{if(!(e&1)){gd(s,d,e),Ha();break e}c=Error(B(426))}}else if(oe&&a.mode&1){var N=jd(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),vd(N,o,a,s,e),_a(mr(c,a));break e}}s=c=mr(c,a),ve!==4&&(ve=2),Qr===null?Qr=[s]:Qr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Np(s,c,e);dd(s,m);break e;case 1:a=c;var f=s.type,j=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ln===null||!ln.has(j)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=bp(s,a,e);dd(s,w);break e}}s=s.return}while(s!==null)}Wp(r)}catch(C){e=C,xe===r&&r!==null&&(xe=r=r.return);continue}break}while(!0)}function Hp(){var t=Li.current;return Li.current=Ri,t===null?Ri:t}function Ha(){(ve===0||ve===3||ve===2)&&(ve=4),Ce===null||!(Ln&268435455)&&!(es&268435455)||Qt(Ce,Te)}function Ai(t,e){var r=Y;Y|=2;var l=Hp();(Ce!==t||Te!==e)&&(Rt=null,bn(t,e));do try{vg();break}catch(i){$p(t,i)}while(!0);if(Na(),Y=r,Li.current=l,xe!==null)throw Error(B(261));return Ce=null,Te=0,ve}function vg(){for(;xe!==null;)Up(xe)}function yg(){for(;xe!==null&&!Vm();)Up(xe)}function Up(t){var e=Xp(t.alternate,t,Qe);t.memoizedProps=t.pendingProps,e===null?Wp(t):xe=e,Ia.current=null}function Wp(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=pg(r,e),r!==null){r.flags&=32767,xe=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,xe=null;return}}else if(r=hg(r,e,Qe),r!==null){xe=r;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);ve===0&&(ve=5)}function wn(t,e,r){var l=J,i=ot.transition;try{ot.transition=null,J=1,wg(t,e,r,l)}finally{ot.transition=i,J=l}return null}function wg(t,e,r,l){do ar();while(Yt!==null);if(Y&6)throw Error(B(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(tx(t,s),t===Ce&&(xe=Ce=null,Te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ql||(Ql=!0,Gp(xi,function(){return ar(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=J;J=1;var a=Y;Y|=4,Ia.current=null,mg(t,r),Fp(r,t),$x(Co),ji=!!_o,Co=_o=null,t.current=r,xg(r),Xm(),Y=a,J=o,ot.transition=s}else t.current=r;if(Ql&&(Ql=!1,Yt=t,Pi=i),s=t.pendingLanes,s===0&&(ln=null),Km(r.stateNode),Xe(t,me()),e!==null)for(l=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],l(i.value,{componentStack:i.stack,digest:i.digest});if(Di)throw Di=!1,t=Uo,Uo=null,t;return Pi&1&&t.tag!==0&&ar(),s=t.pendingLanes,s&1?t===Wo?Kr++:(Kr=0,Wo=t):Kr=0,xn(),null}function ar(){if(Yt!==null){var t=Ch(Pi),e=ot.transition,r=J;try{if(ot.transition=null,J=16>t?16:t,Yt===null)var l=!1;else{if(t=Yt,Yt=null,Pi=0,Y&6)throw Error(B(331));var i=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(A=d;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:Gr(8,h,s)}var p=h.child;if(p!==null)p.return=h,A=p;else for(;A!==null;){h=A;var x=h.sibling,g=h.return;if(Ap(h),h===d){A=null;break}if(x!==null){x.return=g,A=x;break}A=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var j=o.child;if(o.subtreeFlags&2064&&j!==null)j.return=o,A=j;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qi(9,a)}}catch(C){he(a,a.return,C)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Y=i,xn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Vi,t)}catch{}l=!0}return l}finally{J=r,ot.transition=e}}return!1}function Ld(t,e,r){e=mr(r,e),e=Np(t,e,1),t=rn(t,e,1),e=Fe(),t!==null&&(Nl(t,1,e),Xe(t,e))}function he(t,e,r){if(t.tag===3)Ld(t,t,r);else for(;e!==null;){if(e.tag===3){Ld(e,t,r);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ln===null||!ln.has(l))){t=mr(r,t),t=bp(e,t,1),e=rn(e,t,1),t=Fe(),e!==null&&(Nl(e,1,t),Xe(e,t));break}}e=e.return}}function _g(t,e,r){var l=t.pingCache;l!==null&&l.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&r,Ce===t&&(Te&r)===r&&(ve===4||ve===3&&(Te&130023424)===Te&&500>me()-za?bn(t,0):Fa|=r),Xe(t,e)}function Vp(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var r=Fe();t=Ft(t,e),t!==null&&(Nl(t,e,r),Xe(t,r))}function Cg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Vp(t,r)}function Ng(t,e){var r=0;switch(t.tag){case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(B(314))}l!==null&&l.delete(e),Vp(t,r)}var Xp;Xp=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Ue=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Ue=!1,ug(t,e,r);Ue=!!(t.flags&131072)}else Ue=!1,oe&&e.flags&1048576&&Kh(e,bi,e.index);switch(e.lanes=0,e.tag){case 2:var l=e.type;ai(t,e),t=e.pendingProps;var i=ur(e,Me.current);or(e,r),i=La(null,e,l,t,i,r);var s=Da();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(l)?(s=!0,Ci(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ka(e),i.updater=Zi,e.stateNode=i,i._reactInternals=e,Lo(e,l,t,r),e=Ao(null,e,l,!0,s,r)):(e.tag=0,oe&&s&&ya(e),Ie(null,e,i,r),e=e.child),e;case 16:l=e.elementType;e:{switch(ai(t,e),t=e.pendingProps,i=l._init,l=i(l._payload),e.type=l,i=e.tag=Sg(l),t=ht(l,t),i){case 0:e=Po(null,e,l,t,r);break e;case 1:e=_d(null,e,l,t,r);break e;case 11:e=yd(null,e,l,t,r);break e;case 14:e=wd(null,e,l,ht(l.type,t),r);break e}throw Error(B(306,l,""))}return e;case 0:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ht(l,i),Po(t,e,l,i,r);case 1:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ht(l,i),_d(t,e,l,i,r);case 3:e:{if(Tp(e),t===null)throw Error(B(387));l=e.pendingProps,s=e.memoizedState,i=s.element,qh(t,e),Ei(e,l,null,r);var o=e.memoizedState;if(l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mr(Error(B(423)),e),e=Cd(t,e,l,r,i);break e}else if(l!==i){i=mr(Error(B(424)),e),e=Cd(t,e,l,r,i);break e}else for(Ye=nn(e.stateNode.containerInfo.firstChild),Ze=e,oe=!0,ft=null,r=rp(e,null,l,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hr(),l===i){e=zt(t,e,r);break e}Ie(t,e,l,r)}e=e.child}return e;case 5:return lp(e),t===null&&To(e),l=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,No(l,i)?o=null:s!==null&&No(l,s)&&(e.flags|=32),Ep(t,e),Ie(t,e,o,r),e.child;case 6:return t===null&&To(e),null;case 13:return Bp(t,e,r);case 4:return Ea(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=pr(e,null,l,r):Ie(t,e,l,r),e.child;case 11:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ht(l,i),yd(t,e,l,i,r);case 7:return Ie(t,e,e.pendingProps,r),e.child;case 8:return Ie(t,e,e.pendingProps.children,r),e.child;case 12:return Ie(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(l=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(Si,l._currentValue),l._currentValue=o,s!==null)if(vt(s.value,o)){if(s.children===i.children&&!We.current){e=zt(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===l){if(s.tag===1){c=At(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Bo(s.return,r,e),a.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),Bo(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,l=e.pendingProps.children,or(e,r),i=at(i),l=l(i),e.flags|=1,Ie(t,e,l,r),e.child;case 14:return l=e.type,i=ht(l,e.pendingProps),i=ht(l.type,i),wd(t,e,l,i,r);case 15:return Sp(t,e,e.type,e.pendingProps,r);case 17:return l=e.type,i=e.pendingProps,i=e.elementType===l?i:ht(l,i),ai(t,e),e.tag=1,Ve(l)?(t=!0,Ci(e)):t=!1,or(e,r),tp(e,l,i),Lo(e,l,i,r),Ao(null,e,l,!0,t,r);case 19:return Rp(t,e,r);case 22:return kp(t,e,r)}throw Error(B(156,e.tag))};function Gp(t,e){return vh(t,e)}function bg(t,e,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,r,l){return new bg(t,e,r,l)}function Ua(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sg(t){if(typeof t=="function")return Ua(t)?1:0;if(t!=null){if(t=t.$$typeof,t===aa)return 11;if(t===ca)return 14}return 2}function on(t,e){var r=t.alternate;return r===null?(r=st(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ui(t,e,r,l,i,s){var o=2;if(l=t,typeof t=="function")Ua(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vn:return Sn(r.children,i,s,e);case oa:o=8,i|=8;break;case to:return t=st(12,r,e,i|2),t.elementType=to,t.lanes=s,t;case no:return t=st(13,r,e,i),t.elementType=no,t.lanes=s,t;case ro:return t=st(19,r,e,i),t.elementType=ro,t.lanes=s,t;case nh:return ts(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eh:o=10;break e;case th:o=9;break e;case aa:o=11;break e;case ca:o=14;break e;case Vt:o=16,l=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=st(o,r,e,i),e.elementType=t,e.type=l,e.lanes=s,e}function Sn(t,e,r,l){return t=st(7,t,l,e),t.lanes=r,t}function ts(t,e,r,l){return t=st(22,t,l,e),t.elementType=nh,t.lanes=r,t.stateNode={isHidden:!1},t}function Xs(t,e,r){return t=st(6,t,null,e),t.lanes=r,t}function Gs(t,e,r){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kg(t,e,r,l,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wa(t,e,r,l,i,s,o,a,c){return t=new kg(t,e,r,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=st(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(s),t}function Eg(t,e,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:l==null?null:""+l,children:t,containerInfo:e,implementation:r}}function Qp(t){if(!t)return dn;t=t._reactInternals;e:{if(In(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var r=t.type;if(Ve(r))return Gh(t,r,e)}return e}function Kp(t,e,r,l,i,s,o,a,c){return t=Wa(r,l,!0,t,i,s,o,a,c),t.context=Qp(null),r=t.current,l=Fe(),i=sn(r),s=At(l,i),s.callback=e??null,rn(r,s,i),t.current.lanes=i,Nl(t,i,l),Xe(t,l),t}function ns(t,e,r,l){var i=e.current,s=Fe(),o=sn(i);return r=Qp(r),e.context===null?e.context=r:e.pendingContext=r,e=At(s,o),e.payload={element:t},l=l===void 0?null:l,l!==null&&(e.callback=l),t=rn(i,e,o),t!==null&&(gt(t,i,o,s),ii(t,i,o)),o}function Mi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Va(t,e){Dd(t,e),(t=t.alternate)&&Dd(t,e)}function Tg(){return null}var Yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xa(t){this._internalRoot=t}rs.prototype.render=Xa.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ns(t,e,null,null)};rs.prototype.unmount=Xa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dn(function(){ns(null,t,null,null)}),e[It]=null}};function rs(t){this._internalRoot=t}rs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sh();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Gt.length&&e!==0&&e<Gt[r].priority;r++);Gt.splice(r,0,t),r===0&&Eh(t)}};function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ls(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pd(){}function Bg(t,e,r,l,i){if(i){if(typeof l=="function"){var s=l;l=function(){var d=Mi(o);s.call(d)}}var o=Kp(e,l,t,0,null,!1,!1,"",Pd);return t._reactRootContainer=o,t[It]=o.current,ll(t.nodeType===8?t.parentNode:t),Dn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof l=="function"){var a=l;l=function(){var d=Mi(c);a.call(d)}}var c=Wa(t,0,!1,null,null,!1,!1,"",Pd);return t._reactRootContainer=c,t[It]=c.current,ll(t.nodeType===8?t.parentNode:t),Dn(function(){ns(e,c,r,l)}),c}function is(t,e,r,l,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=Mi(o);a.call(c)}}ns(e,o,t,i)}else o=Bg(r,e,t,i,l);return Mi(o)}Nh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Mr(e.pendingLanes);r!==0&&(ha(e,r|1),Xe(e,me()),!(Y&6)&&(xr=me()+500,xn()))}break;case 13:Dn(function(){var l=Ft(t,1);if(l!==null){var i=Fe();gt(l,t,1,i)}}),Va(t,1)}};pa=function(t){if(t.tag===13){var e=Ft(t,134217728);if(e!==null){var r=Fe();gt(e,t,134217728,r)}Va(t,134217728)}};bh=function(t){if(t.tag===13){var e=sn(t),r=Ft(t,e);if(r!==null){var l=Fe();gt(r,t,e,l)}Va(t,e)}};Sh=function(){return J};kh=function(t,e){var r=J;try{return J=t,e()}finally{J=r}};fo=function(t,e,r){switch(e){case"input":if(so(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var l=r[e];if(l!==t&&l.form===t.form){var i=Ki(l);if(!i)throw Error(B(90));lh(l),so(l,i)}}}break;case"textarea":sh(t,r);break;case"select":e=r.value,e!=null&&rr(t,!!r.multiple,e,!1)}};ph=Oa;fh=Dn;var Rg={usingClientEntryPoint:!1,Events:[Sl,Kn,Ki,uh,hh,Oa]},Dr={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lg={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gh(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Vi=Kl.inject(Lg),kt=Kl}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;tt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(e))throw Error(B(200));return Eg(t,e,null,r)};tt.createRoot=function(t,e){if(!Ga(t))throw Error(B(299));var r=!1,l="",i=Yp;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wa(t,1,!1,null,null,r,!1,l,i),t[It]=e.current,ll(t.nodeType===8?t.parentNode:t),new Xa(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=gh(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return Dn(t)};tt.hydrate=function(t,e,r){if(!ls(e))throw Error(B(200));return is(null,t,e,!0,r)};tt.hydrateRoot=function(t,e,r){if(!Ga(t))throw Error(B(405));var l=r!=null&&r.hydratedSources||null,i=!1,s="",o=Yp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=Kp(e,null,t,1,r??null,i,!1,s,o),t[It]=e.current,ll(t),l)for(t=0;t<l.length;t++)r=l[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new rs(e)};tt.render=function(t,e,r){if(!ls(e))throw Error(B(200));return is(null,t,e,!1,r)};tt.unmountComponentAtNode=function(t){if(!ls(t))throw Error(B(40));return t._reactRootContainer?(Dn(function(){is(null,null,t,!1,function(){t._reactRootContainer=null,t[It]=null})}),!0):!1};tt.unstable_batchedUpdates=Oa;tt.unstable_renderSubtreeIntoContainer=function(t,e,r,l){if(!ls(r))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return is(t,e,r,!1,l)};tt.version="18.2.0-next-9e3b772b8-20220608";function Zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zp)}catch(t){console.error(t)}}Zp(),Ku.exports=tt;var El=Ku.exports,Ad=El;qs.createRoot=Ad.createRoot,qs.hydrateRoot=Ad.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},pl.apply(this,arguments)}var Zt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zt||(Zt={}));const Md="popstate";function Dg(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:c=""}=Fn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Go("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=i.location.href,d=c.indexOf("#");a=d===-1?c:c.slice(0,d)}return a+"#"+(typeof s=="string"?s:Ii(s))}function l(i,s){ss(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Ag(e,r,l,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ss(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Pg(){return Math.random().toString(36).substr(2,8)}function Id(t,e){return{usr:t.state,key:t.key,idx:e}}function Go(t,e,r,l){return r===void 0&&(r=null),pl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fn(e):e,{state:r,key:e&&e.key||l||Pg()})}function Ii(t){let{pathname:e="/",search:r="",hash:l=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(e+=l.charAt(0)==="#"?l:"#"+l),e}function Fn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let l=t.indexOf("?");l>=0&&(e.search=t.substr(l),t=t.substr(0,l)),t&&(e.pathname=t)}return e}function Ag(t,e,r,l){l===void 0&&(l={});let{window:i=document.defaultView,v5Compat:s=!1}=l,o=i.history,a=Zt.Pop,c=null,d=h();d==null&&(d=0,o.replaceState(pl({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Zt.Pop;let N=h(),m=N==null?null:N-d;d=N,c&&c({action:a,location:y.location,delta:m})}function x(N,m){a=Zt.Push;let f=Go(y.location,N,m);r&&r(f,N),d=h()+1;let j=Id(f,d),w=y.createHref(f);try{o.pushState(j,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}s&&c&&c({action:a,location:y.location,delta:1})}function g(N,m){a=Zt.Replace;let f=Go(y.location,N,m);r&&r(f,N),d=h();let j=Id(f,d),w=y.createHref(f);o.replaceState(j,"",w),s&&c&&c({action:a,location:y.location,delta:0})}function v(N){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof N=="string"?N:Ii(N);return ge(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Md,p),c=N,()=>{i.removeEventListener(Md,p),c=null}},createHref(N){return e(i,N)},createURL:v,encodeLocation(N){let m=v(N);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:g,go(N){return o.go(N)}};return y}var Fd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fd||(Fd={}));function Mg(t,e,r){r===void 0&&(r="/");let l=typeof e=="string"?Fn(e):e,i=fl(l.pathname||"/",r);if(i==null)return null;let s=Jp(t);Ig(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Xg(s[a],Qg(i));return o}function Jp(t,e,r,l){e===void 0&&(e=[]),r===void 0&&(r=[]),l===void 0&&(l="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let d=an([l,c.relativePath]),h=r.concat(c);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Jp(s.children,e,h,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:Wg(d,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of qp(s.path))i(s,o,c)}),e}function qp(t){let e=t.split("/");if(e.length===0)return[];let[r,...l]=e,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(l.length===0)return i?[s,""]:[s];let o=qp(l.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Ig(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Vg(e.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}const Fg=/^:\w+$/,zg=3,Og=2,$g=1,Hg=10,Ug=-2,zd=t=>t==="*";function Wg(t,e){let r=t.split("/"),l=r.length;return r.some(zd)&&(l+=Ug),e&&(l+=Og),r.filter(i=>!zd(i)).reduce((i,s)=>i+(Fg.test(s)?zg:s===""?$g:Hg),l)}function Vg(t,e){return t.length===e.length&&t.slice(0,-1).every((l,i)=>l===e[i])?t[t.length-1]-e[e.length-1]:0}function Xg(t,e){let{routesMeta:r}=t,l={},i="/",s=[];for(let o=0;o<r.length;++o){let a=r[o],c=o===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",h=Qo({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d);if(!h)return null;Object.assign(l,h.params);let p=a.route;s.push({params:l,pathname:an([i,h.pathname]),pathnameBase:qg(an([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=an([i,h.pathnameBase]))}return s}function Qo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,l]=Gg(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:l.reduce((d,h,p)=>{let{paramName:x,isOptional:g}=h;if(x==="*"){let y=a[p]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[p];return g&&!v?d[x]=void 0:d[x]=Kg(v||"",x),d},{}),pathname:s,pathnameBase:o,pattern:t}}function Gg(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),ss(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,c)=>(l.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),l]}function Qg(t){try{return decodeURI(t)}catch(e){return ss(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kg(t,e){try{return decodeURIComponent(t)}catch(r){return ss(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function fl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,l=t.charAt(r);return l&&l!=="/"?null:t.slice(r)||"/"}function Yg(t,e){e===void 0&&(e="/");let{pathname:r,search:l="",hash:i=""}=typeof t=="string"?Fn(t):t;return{pathname:r?r.startsWith("/")?r:Zg(r,e):e,search:e0(l),hash:t0(i)}}function Zg(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Qs(t,e,r,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jg(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Qa(t,e){let r=Jg(t);return e?r.map((l,i)=>i===t.length-1?l.pathname:l.pathnameBase):r.map(l=>l.pathnameBase)}function Ka(t,e,r,l){l===void 0&&(l=!1);let i;typeof t=="string"?i=Fn(t):(i=pl({},t),ge(!i.pathname||!i.pathname.includes("?"),Qs("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Qs("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Qs("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=r;else{let p=e.length-1;if(!l&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),p-=1;i.pathname=x.join("/")}a=p>=0?e[p]:"/"}let c=Yg(i,a),d=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const an=t=>t.join("/").replace(/\/\/+/g,"/"),qg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),e0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,t0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function n0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ef=["post","put","patch","delete"];new Set(ef);const r0=["get",...ef];new Set(r0);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},ml.apply(this,arguments)}const os=u.createContext(null),tf=u.createContext(null),$t=u.createContext(null),as=u.createContext(null),Ht=u.createContext({outlet:null,matches:[],isDataRoute:!1}),nf=u.createContext(null);function l0(t,e){let{relative:r}=e===void 0?{}:e;Cr()||ge(!1);let{basename:l,navigator:i}=u.useContext($t),{hash:s,pathname:o,search:a}=cs(t,{relative:r}),c=o;return l!=="/"&&(c=o==="/"?l:an([l,o])),i.createHref({pathname:c,search:a,hash:s})}function Cr(){return u.useContext(as)!=null}function zn(){return Cr()||ge(!1),u.useContext(as).location}function rf(t){u.useContext($t).static||u.useLayoutEffect(t)}function lf(){let{isDataRoute:t}=u.useContext(Ht);return t?v0():i0()}function i0(){Cr()||ge(!1);let t=u.useContext(os),{basename:e,future:r,navigator:l}=u.useContext($t),{matches:i}=u.useContext(Ht),{pathname:s}=zn(),o=JSON.stringify(Qa(i,r.v7_relativeSplatPath)),a=u.useRef(!1);return rf(()=>{a.current=!0}),u.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){l.go(d);return}let p=Ka(d,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:an([e,p.pathname])),(h.replace?l.replace:l.push)(p,h.state,h)},[e,l,o,s,t])}const s0=u.createContext(null);function o0(t){let e=u.useContext(Ht).outlet;return e&&u.createElement(s0.Provider,{value:t},e)}function cs(t,e){let{relative:r}=e===void 0?{}:e,{future:l}=u.useContext($t),{matches:i}=u.useContext(Ht),{pathname:s}=zn(),o=JSON.stringify(Qa(i,l.v7_relativeSplatPath));return u.useMemo(()=>Ka(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function a0(t,e){return c0(t,e)}function c0(t,e,r,l){Cr()||ge(!1);let{navigator:i}=u.useContext($t),{matches:s}=u.useContext(Ht),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=zn(),h;if(e){var p;let N=typeof e=="string"?Fn(e):e;c==="/"||(p=N.pathname)!=null&&p.startsWith(c)||ge(!1),h=N}else h=d;let x=h.pathname||"/",g=c==="/"?x:x.slice(c.length)||"/",v=Mg(t,{pathname:g}),y=f0(v&&v.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:an([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:an([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,r,l);return e&&y?u.createElement(as.Provider,{value:{location:ml({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Zt.Pop}},y):y}function d0(){let t=j0(),e=n0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},e),r?u.createElement("pre",{style:i},r):null,s)}const u0=u.createElement(d0,null);class h0 extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?u.createElement(Ht.Provider,{value:this.props.routeContext},u.createElement(nf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p0(t){let{routeContext:e,match:r,children:l}=t,i=u.useContext(os);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(Ht.Provider,{value:e},l)}function f0(t,e,r,l){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),l===void 0&&(l=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,a=(i=r)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id]));h>=0||ge(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,d=-1;if(r&&l&&l.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=h),p.route.id){let{loaderData:x,errors:g}=r,v=p.route.loader&&x[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||v){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,p,x)=>{let g,v=!1,y=null,N=null;r&&(g=a&&p.route.id?a[p.route.id]:void 0,y=p.route.errorElement||u0,c&&(d<0&&x===0?(y0("route-fallback",!1),v=!0,N=null):d===x&&(v=!0,N=p.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,x+1)),f=()=>{let j;return g?j=y:v?j=N:p.route.Component?j=u.createElement(p.route.Component,null):p.route.element?j=p.route.element:j=h,u.createElement(p0,{match:p,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:j})};return r&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?u.createElement(h0,{location:r.location,revalidation:r.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var sf=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sf||{}),Fi=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fi||{});function m0(t){let e=u.useContext(os);return e||ge(!1),e}function x0(t){let e=u.useContext(tf);return e||ge(!1),e}function g0(t){let e=u.useContext(Ht);return e||ge(!1),e}function of(t){let e=g0(),r=e.matches[e.matches.length-1];return r.route.id||ge(!1),r.route.id}function j0(){var t;let e=u.useContext(nf),r=x0(Fi.UseRouteError),l=of(Fi.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[l]}function v0(){let{router:t}=m0(sf.UseNavigateStable),e=of(Fi.UseNavigateStable),r=u.useRef(!1);return rf(()=>{r.current=!0}),u.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ml({fromRouteId:e},s)))},[t,e])}const Od={};function y0(t,e,r){!e&&!Od[t]&&(Od[t]=!0)}function Yl(t){let{to:e,replace:r,state:l,relative:i}=t;Cr()||ge(!1);let{future:s,static:o}=u.useContext($t),{matches:a}=u.useContext(Ht),{pathname:c}=zn(),d=lf(),h=Ka(e,Qa(a,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(h);return u.useEffect(()=>d(JSON.parse(p),{replace:r,state:l,relative:i}),[d,p,i,r,l]),null}function w0(t){return o0(t.context)}function _0(t){let{basename:e="/",children:r=null,location:l,navigationType:i=Zt.Pop,navigator:s,static:o=!1,future:a}=t;Cr()&&ge(!1);let c=e.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:s,static:o,future:ml({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof l=="string"&&(l=Fn(l));let{pathname:h="/",search:p="",hash:x="",state:g=null,key:v="default"}=l,y=u.useMemo(()=>{let N=fl(h,c);return N==null?null:{location:{pathname:N,search:p,hash:x,state:g,key:v},navigationType:i}},[c,h,p,x,g,v,i]);return y==null?null:u.createElement($t.Provider,{value:d},u.createElement(as.Provider,{children:r,value:y}))}new Promise(()=>{});/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},zi.apply(this,arguments)}function af(t,e){if(t==null)return{};var r={},l=Object.keys(t),i,s;for(s=0;s<l.length;s++)i=l[s],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function C0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function N0(t,e){return t.button===0&&(!e||e==="_self")&&!C0(t)}const b0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],S0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],k0=u.createContext({isTransitioning:!1}),E0="startTransition",$d=ra[E0];function T0(t){let{basename:e,children:r,future:l,window:i}=t,s=u.useRef();s.current==null&&(s.current=Dg({window:i,v5Compat:!0}));let o=s.current,[a,c]=u.useState({action:o.action,location:o.location}),{v7_startTransition:d}=l||{},h=u.useCallback(p=>{d&&$d?$d(()=>c(p)):c(p)},[c,d]);return u.useLayoutEffect(()=>o.listen(h),[o,h]),u.createElement(_0,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o,future:l})}const B0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cf=u.forwardRef(function(e,r){let{onClick:l,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:d,preventScrollReset:h,unstable_viewTransition:p}=e,x=af(e,b0),{basename:g}=u.useContext($t),v,y=!1;if(typeof d=="string"&&R0.test(d)&&(v=d,B0))try{let j=new URL(window.location.href),w=d.startsWith("//")?new URL(j.protocol+d):new URL(d),C=fl(w.pathname,g);w.origin===j.origin&&C!=null?d=C+w.search+w.hash:y=!0}catch{}let N=l0(d,{relative:i}),m=D0(d,{replace:o,state:a,target:c,preventScrollReset:h,relative:i,unstable_viewTransition:p});function f(j){l&&l(j),j.defaultPrevented||m(j)}return u.createElement("a",zi({},x,{href:v||N,onClick:y||s?l:f,ref:r,target:c}))}),Zl=u.forwardRef(function(e,r){let{"aria-current":l="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:c,unstable_viewTransition:d,children:h}=e,p=af(e,S0),x=cs(c,{relative:p.relative}),g=zn(),v=u.useContext(tf),{navigator:y}=u.useContext($t),N=v!=null&&P0(x)&&d===!0,m=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,f=g.pathname,j=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(f=f.toLowerCase(),j=j?j.toLowerCase():null,m=m.toLowerCase());const w=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=f===m||!o&&f.startsWith(m)&&f.charAt(w)==="/",k=j!=null&&(j===m||!o&&j.startsWith(m)&&j.charAt(m.length)==="/"),E={isActive:C,isPending:k,isTransitioning:N},L=C?l:void 0,O;typeof s=="function"?O=s(E):O=[s,C?"active":null,k?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(E):a;return u.createElement(cf,zi({},p,{"aria-current":L,className:O,ref:r,style:F,to:c,unstable_viewTransition:d}),typeof h=="function"?h(E):h)});var Ko;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ko||(Ko={}));var Hd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hd||(Hd={}));function L0(t){let e=u.useContext(os);return e||ge(!1),e}function D0(t,e){let{target:r,replace:l,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=lf(),d=zn(),h=cs(t,{relative:o});return u.useCallback(p=>{if(N0(p,r)){p.preventDefault();let x=l!==void 0?l:Ii(d)===Ii(h);c(t,{replace:x,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[d,c,h,l,i,r,t,s,o,a])}function P0(t,e){e===void 0&&(e={});let r=u.useContext(k0);r==null&&ge(!1);let{basename:l}=L0(Ko.useViewTransitionState),i=cs(t,{relative:e.relative});if(!r.isTransitioning)return!1;let s=fl(r.currentLocation.pathname,l)||r.currentLocation.pathname,o=fl(r.nextLocation.pathname,l)||r.nextLocation.pathname;return Qo(i.pathname,o)!=null||Qo(i.pathname,s)!=null}const df="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMTAuNSAtOS42MCAyMSAxOS4yIiBmaWxsPSJub25lIg0KICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8ZGVmcyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxzdHlsZT4uY2xzLTF7ZmlsbDojNDA5ZWZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7c3Ryb2tlOiM0MDllZmY7fTwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHRleHQgeD0iLTMuNCIgeT0iMy4wIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZvbnQtc2l6ZT0iMC43ZW0iIGNsYXNzPSJjbHMtMSI+ZTwvdGV4dD4NCiAgPGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgY2xhc3M9ImNscy0yIj4NCiAgICA8ZWxsaXBzZSByeD0iMTAiIHJ5PSI1LjgiPjwvZWxsaXBzZT4NCiAgICA8ZWxsaXBzZSByeD0iMTAiIHJ5PSI1LjgiIHRyYW5zZm9ybT0icm90YXRlKDYwKSI+PC9lbGxpcHNlPg0KICAgIDxlbGxpcHNlIHJ4PSIxMCIgcnk9IjUuOCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSI+PC9lbGxpcHNlPg0KICA8L2c+DQo8L3N2Zz4=";function A0(){return n.jsx(n.Fragment,{children:n.jsx("header",{className:"navbar",children:n.jsx("div",{className:"navbar-wrapper",children:n.jsxs("div",{className:"header-container",children:[n.jsx("div",{className:"logo-container",children:n.jsxs(Zl,{to:"/home",children:[n.jsx("img",{src:df,alt:"pelement-react"}),"pelement-react"]})}),n.jsxs("div",{className:"content",children:[n.jsxs("nav",{className:"navbar-menu menu",children:[n.jsx(Zl,{className:"link-item link is-menu-link",to:"guide",children:"指南"}),n.jsx(Zl,{className:"link-item link is-menu-link",to:"component",children:"组件"}),n.jsx(Zl,{className:"link-item link is-menu-link",to:"blog",children:"博客"})]}),n.jsx("div",{className:"social-links",children:n.jsx("a",{href:"https://github.com/pelement-react/pelement-react",title:"GitHub",target:"_blank",rel:"noreferrer noopener",className:"social-link",children:n.jsx("i",{className:"el-icon",style:{fontSize:"24px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-6c8d2bba":"",children:n.jsx("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})})})})})]})]})})})})}function M0(){const{pathname:t}=zn();return u.useEffect(()=>{window.scrollTo(0,0)},[t]),n.jsx(n.Fragment,{children:n.jsxs("div",{className:"App",children:[n.jsx(A0,{}),n.jsx(w0,{})]})})}const I0="modulepreload",F0=function(t){return"/pelement-react/"+t},Ud={},Tt=function(e,r,l){let i=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link");i=Promise.all(r.map(o=>{if(o=F0(o),o in Ud)return;Ud[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!l)for(let p=s.length-1;p>=0;p--){const x=s[p];if(x.href===o&&(!a||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":I0,a||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),a)return new Promise((p,x)=>{h.addEventListener("load",p),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},z0=`import { Alert } from 'pelement-react'\r
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
export default AlertBasic`,O0=`import { Alert } from 'pelement-react'\r
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
export default AlertCenter`,$0=`import { Alert } from 'pelement-react'\r
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
export default AlertClose`,H0=`import { Alert } from 'pelement-react'\r
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
export default AlertDescription`,U0=`import { Alert } from 'pelement-react'\r
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
export default AlertEffect`,W0=`import { Alert } from 'pelement-react'\r
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
export default AlertIconDescription`,V0=`import { Alert } from 'pelement-react'\r
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
export default AlertIcon`,X0=`import { Avatar, Col, Row } from 'pelement-react'\r
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
export default AvatarBasic`,G0=`import { Avatar } from 'pelement-react'\r
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
export default AvatarError`,Q0=`import { Avatar } from "pelement-react"\r
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
export default AvatarFit`,K0=`import { Avatar, UserFilled } from 'pelement-react'\r
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
export default AvatarType`,Y0=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeBasic`,Z0=`import { Badge, Button, Share } from 'pelement-react'\r
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
export default BadgeIsDot`,J0=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeMax`,q0=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeValue`,ej=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
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
export default ButtonBasic`,tj=`import { Button } from 'pelement-react'\r
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
export default ButtonDisabled`,nj=`import { Button } from 'pelement-react'\r
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
export default ButtonLink`,rj=`import { Button } from 'pelement-react'\r
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
export default ButtonText`,lj=`import { Collapse, CollapseItem } from 'pelement-react'\r
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
export default ContainerBasic`,sj=`import { Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic1`,oj=`import { Aside, Container, Main } from 'pelement-react'\r
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
export default ContainerBasic2`,aj=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic3`,cj=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic4`,dj=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic5`,uj=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic6`,hj=`import { Button, Dialog } from 'pelement-react'\r
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
export default DialogHeader`,mj=`import { Divider } from 'pelement-react'\r
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
export default DividerBasic`,xj=`import { Divider } from 'pelement-react'\r
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
export default DividerBorder`,gj=`import { Divider, StarFilled } from 'pelement-react'\r
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
export default DividerContent`,jj=`import { Divider } from 'pelement-react'\r
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
export default DividerDirection`,vj=`import { useState } from 'react'\r
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
export default DrawerBasic`,yj=`import { useState } from 'react'\r
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
export default DrawerContent`,wj=`import { useState } from 'react'\r
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
export default DrawerWithHeader`,Cj=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share } from 'pelement-react'\r
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
export default LayoutBasic`,bj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutGutter`,kj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutMix`,Tj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutOffset`,Bj=`import { Link } from 'pelement-react'\r
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
export default LinkBasic`,Rj=`import { Link } from 'pelement-react'\r
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
export default LinkDisabled`,Lj=`import { Edit, Link, View } from 'pelement-react'\r
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
export default LinkIcon`,Dj=`import { Link } from 'pelement-react'\r
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
export default LinkUnderline`,Pj=`import { Button, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmBasic`,Aj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmEvent`,Mj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmIcon`,Ij=`import { Button, Popover } from 'pelement-react'\r
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
export default PopoverBasic`,Fj=`import { Progress } from 'pelement-react'\r
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
export default ProgressTextInside`,Oj=`import { Rate } from 'pelement-react'\r
\r
function RateBasic() {\r
  return (\r
    <>\r
      <Rate></Rate>\r
    </>\r
  )\r
}\r
\r
export default RateBasic`,$j=`import { Button, Col, Result, Row } from 'pelement-react'\r
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
export default ResultBasic`,Hj=`import { Button, Result } from 'pelement-react'\r
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
export default ResultIcon`,Uj=`import { Scrollbar } from 'pelement-react'\r
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
export default ScrollbarBasic`,Wj=`import { Button, Space } from 'pelement-react'\r
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
export default SpaceAlignment`,Vj=`import { Space } from 'pelement-react'\r
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
export default SpaceBasic`,Xj=`import { Space } from 'pelement-react'\r
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
export default SpaceDirection`,Gj=`import { Space } from 'pelement-react'\r
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
export default SpaceSize`,Qj=`import { Space } from 'pelement-react'\r
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
export default SpaceSize2`,Kj=`import { Button, Space } from 'pelement-react'\r
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
export default SpaceSpacer`,Yj=`import { Button, Divider, Space } from 'pelement-react'\r
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
export default SpaceSpacer2`,Zj=`import { Button, Space } from 'pelement-react'\r
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
export default SpaceWrap`,Jj=`import { Hide, Switch, View } from 'pelement-react'\r
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
export default SwitchActionIcon`,qj=`import { Switch } from 'pelement-react'\r
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
export default SwitchBasic`,ev=`import { useState } from 'react'\r
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
export default SwitchBeforeChange`,tv=`import { Switch } from 'pelement-react'\r
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
export default SwitchDisabled`,nv=`import { Check, Close, Switch } from 'pelement-react'\r
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
export default SwitchIcon`,rv=`import { Switch } from 'pelement-react'\r
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
export default SwitchLoading`,lv=`import { Switch } from 'pelement-react'\r
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
export default SwitchText`,sv=`import { Table } from 'pelement-react'\r
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
export default TableBasic`,ov=`import { Table } from 'pelement-react'\r
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
export default TableBorder`,av=`import { Table } from 'pelement-react'\r
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
export default TableStripe`,cv=`import { Tag } from 'pelement-react'\r
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
export default TagBasic`,dv=`import { Tag } from 'pelement-react'\r
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
export default TagClosable`,uv=`import { Tag } from 'pelement-react'\r
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
export default TagEffect`,hv=`import { Tag } from 'pelement-react'\r
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
export default TagRound`,pv=`import { Row, Tag } from 'pelement-react'\r
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
export default TextBasic`,mv=`import { Text } from 'pelement-react'\r
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
export default TextSize`,xv=`import { Row, Text } from 'pelement-react'\r
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
export default TextTruncated`,gv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipBasic`,jv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipContent`,vv=`import { useState } from 'react'\r
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
export default TooltipDisabled`,yv=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipEffect`;function uf(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const r=t[e],l=typeof r;(l==="object"||l==="function")&&!Object.isFrozen(r)&&uf(r)}),t}class Wd{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function hf(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Jt(t,...e){const r=Object.create(null);for(const l in t)r[l]=t[l];return e.forEach(function(l){for(const i in l)r[i]=l[i]}),r}const wv="</span>",Vd=t=>!!t.scope,_v=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const r=t.split(".");return[`${e}${r.shift()}`,...r.map((l,i)=>`${l}${"_".repeat(i+1)}`)].join(" ")}return`${e}${t}`};class Cv{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=hf(e)}openNode(e){if(!Vd(e))return;const r=_v(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){Vd(e)&&(this.buffer+=wv)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Xd=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Ya{constructor(){this.rootNode=Xd(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const r=Xd({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(l=>this._walk(e,l)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{Ya._collapse(r)}))}}class Nv extends Ya{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){const l=e.root;r&&(l.scope=`language:${r}`),this.add(l)}toHTML(){return new Cv(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function xl(t){return t?typeof t=="string"?t:t.source:null}function pf(t){return On("(?=",t,")")}function bv(t){return On("(?:",t,")*")}function Sv(t){return On("(?:",t,")?")}function On(...t){return t.map(r=>xl(r)).join("")}function kv(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Za(...t){return"("+(kv(t).capture?"":"?:")+t.map(l=>xl(l)).join("|")+")"}function ff(t){return new RegExp(t.toString()+"|").exec("").length-1}function Ev(t,e){const r=t&&t.exec(e);return r&&r.index===0}const Tv=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ja(t,{joinWith:e}){let r=0;return t.map(l=>{r+=1;const i=r;let s=xl(l),o="";for(;s.length>0;){const a=Tv.exec(s);if(!a){o+=s;break}o+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+i):(o+=a[0],a[0]==="("&&r++)}return o}).map(l=>`(${l})`).join(e)}const Bv=/\b\B/,mf="[a-zA-Z]\\w*",qa="[a-zA-Z_]\\w*",xf="\\b\\d+(\\.\\d+)?",gf="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",jf="\\b(0b[01]+)",Rv="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Lv=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=On(e,/.*\b/,t.binary,/\b.*/)),Jt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,l)=>{r.index!==0&&l.ignoreMatch()}},t)},gl={begin:"\\\\[\\s\\S]",relevance:0},Dv={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[gl]},Pv={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[gl]},Av={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ds=function(t,e,r={}){const l=Jt({scope:"comment",begin:t,end:e,contains:[]},r);l.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Za("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return l.contains.push({begin:On(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),l},Mv=ds("//","$"),Iv=ds("/\\*","\\*/"),Fv=ds("#","$"),zv={scope:"number",begin:xf,relevance:0},Ov={scope:"number",begin:gf,relevance:0},$v={scope:"number",begin:jf,relevance:0},Hv={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[gl,{begin:/\[/,end:/\]/,relevance:0,contains:[gl]}]},Uv={scope:"title",begin:mf,relevance:0},Wv={scope:"title",begin:qa,relevance:0},Vv={begin:"\\.\\s*"+qa,relevance:0},Xv=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})};var Jl=Object.freeze({__proto__:null,APOS_STRING_MODE:Dv,BACKSLASH_ESCAPE:gl,BINARY_NUMBER_MODE:$v,BINARY_NUMBER_RE:jf,COMMENT:ds,C_BLOCK_COMMENT_MODE:Iv,C_LINE_COMMENT_MODE:Mv,C_NUMBER_MODE:Ov,C_NUMBER_RE:gf,END_SAME_AS_BEGIN:Xv,HASH_COMMENT_MODE:Fv,IDENT_RE:mf,MATCH_NOTHING_RE:Bv,METHOD_GUARD:Vv,NUMBER_MODE:zv,NUMBER_RE:xf,PHRASAL_WORDS_MODE:Av,QUOTE_STRING_MODE:Pv,REGEXP_MODE:Hv,RE_STARTERS_RE:Rv,SHEBANG:Lv,TITLE_MODE:Uv,UNDERSCORE_IDENT_RE:qa,UNDERSCORE_TITLE_MODE:Wv});function Gv(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function Qv(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Kv(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=Gv,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Yv(t,e){Array.isArray(t.illegal)&&(t.illegal=Za(...t.illegal))}function Zv(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Jv(t,e){t.relevance===void 0&&(t.relevance=1)}const qv=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},t);Object.keys(t).forEach(l=>{delete t[l]}),t.keywords=r.keywords,t.begin=On(r.beforeMatch,pf(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},e1=["of","and","for","in","not","or","if","then","parent","list","value"],t1="keyword";function vf(t,e,r=t1){const l=Object.create(null);return typeof t=="string"?i(r,t.split(" ")):Array.isArray(t)?i(r,t):Object.keys(t).forEach(function(s){Object.assign(l,vf(t[s],e,s))}),l;function i(s,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");l[c[0]]=[s,n1(c[0],c[1])]})}}function n1(t,e){return e?Number(e):r1(t)?0:1}function r1(t){return e1.includes(t.toLowerCase())}const Gd={},kn=t=>{console.error(t)},Qd=(t,...e)=>{console.log(`WARN: ${t}`,...e)},Un=(t,e)=>{Gd[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Gd[`${t}/${e}`]=!0)},Oi=new Error;function yf(t,e,{key:r}){let l=0;const i=t[r],s={},o={};for(let a=1;a<=e.length;a++)o[a+l]=i[a],s[a+l]=!0,l+=ff(e[a-1]);t[r]=o,t[r]._emit=s,t[r]._multi=!0}function l1(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw kn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Oi;if(typeof t.beginScope!="object"||t.beginScope===null)throw kn("beginScope must be object"),Oi;yf(t,t.begin,{key:"beginScope"}),t.begin=Ja(t.begin,{joinWith:""})}}function i1(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw kn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Oi;if(typeof t.endScope!="object"||t.endScope===null)throw kn("endScope must be object"),Oi;yf(t,t.end,{key:"endScope"}),t.end=Ja(t.end,{joinWith:""})}}function s1(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function o1(t){s1(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),l1(t),i1(t)}function a1(t){function e(o,a){return new RegExp(xl(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=ff(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(Ja(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const d=c.findIndex((p,x)=>x>0&&p!==void 0),h=this.matchIndexes[d];return c.splice(0,d),Object.assign(c,h)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new r;return this.rules.slice(a).forEach(([d,h])=>c.addRule(d,h)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let d=c.exec(a);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,d=h.exec(a)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function i(o){const a=new l;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function s(o,a){const c=o;if(o.isCompiled)return c;[Qv,Zv,o1,qv].forEach(h=>h(o,a)),t.compilerExtensions.forEach(h=>h(o,a)),o.__beforeBegin=null,[Kv,Yv,Jv].forEach(h=>h(o,a)),o.isCompiled=!0;let d=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),d=o.keywords.$pattern,delete o.keywords.$pattern),d=d||/\w+/,o.keywords&&(o.keywords=vf(o.keywords,t.case_insensitive)),c.keywordPatternRe=e(d,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=xl(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(h){return c1(h==="self"?o:h)})),o.contains.forEach(function(h){s(h,c)}),o.starts&&s(o.starts,a),c.matcher=i(c),c}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Jt(t.classNameAliases||{}),s(t)}function wf(t){return t?t.endsWithParent||wf(t.starts):!1}function c1(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Jt(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:wf(t)?Jt(t,{starts:t.starts?Jt(t.starts):null}):Object.isFrozen(t)?Jt(t):t}var d1="11.9.0";class u1 extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}}const Ks=hf,Kd=Jt,Yd=Symbol("nomatch"),h1=7,_f=function(t){const e=Object.create(null),r=Object.create(null),l=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Nv};function c(S){return a.noHighlightRe.test(S)}function d(S){let _=S.className+" ";_+=S.parentNode?S.parentNode.className:"";const R=a.languageDetectRe.exec(_);if(R){const P=O(R[1]);return P||(Qd(s.replace("{}",R[1])),Qd("Falling back to no-highlight mode for this block.",S)),P?R[1]:"no-highlight"}return _.split(/\s+/).find(P=>c(P)||O(P))}function h(S,_,R){let P="",$="";typeof _=="object"?(P=S,R=_.ignoreIllegals,$=_.language):(Un("10.7.0","highlight(lang, code, ...args) has been deprecated."),Un("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=S,P=_),R===void 0&&(R=!0);const K={code:P,language:$};U("before:highlight",K);const Re=K.result?K.result:p(K.language,K.code,R);return Re.code=K.code,U("after:highlight",Re),Re}function p(S,_,R,P){const $=Object.create(null);function K(D,z){return D.keywords[z]}function Re(){if(!V.keywords){be.addText(ne);return}let D=0;V.keywordPatternRe.lastIndex=0;let z=V.keywordPatternRe.exec(ne),X="";for(;z;){X+=ne.substring(D,z.index);const Z=yt.case_insensitive?z[0].toLowerCase():z[0],Le=K(V,Z);if(Le){const[Bt,sm]=Le;if(be.addText(X),X="",$[Z]=($[Z]||0)+1,$[Z]<=h1&&(Ll+=sm),Bt.startsWith("_"))X+=z[0];else{const om=yt.classNameAliases[Bt]||Bt;ye(z[0],om)}}else X+=z[0];D=V.keywordPatternRe.lastIndex,z=V.keywordPatternRe.exec(ne)}X+=ne.substring(D),be.addText(X)}function rt(){if(ne==="")return;let D=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){be.addText(ne);return}D=p(V.subLanguage,ne,!0,Sc[V.subLanguage]),Sc[V.subLanguage]=D._top}else D=g(ne,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Ll+=D.relevance),be.__addSublanguage(D._emitter,D.language)}function Ne(){V.subLanguage!=null?rt():Re(),ne=""}function ye(D,z){D!==""&&(be.startScope(z),be.addText(D),be.endScope())}function jn(D,z){let X=1;const Z=z.length-1;for(;X<=Z;){if(!D._emit[X]){X++;continue}const Le=yt.classNameAliases[D[X]]||D[X],Bt=z[X];Le?ye(Bt,Le):(ne=Bt,Re(),ne=""),X++}}function Cc(D,z){return D.scope&&typeof D.scope=="string"&&be.openNode(yt.classNameAliases[D.scope]||D.scope),D.beginScope&&(D.beginScope._wrap?(ye(ne,yt.classNameAliases[D.beginScope._wrap]||D.beginScope._wrap),ne=""):D.beginScope._multi&&(jn(D.beginScope,z),ne="")),V=Object.create(D,{parent:{value:V}}),V}function Nc(D,z,X){let Z=Ev(D.endRe,X);if(Z){if(D["on:end"]){const Le=new Wd(D);D["on:end"](z,Le),Le.isMatchIgnored&&(Z=!1)}if(Z){for(;D.endsParent&&D.parent;)D=D.parent;return D}}if(D.endsWithParent)return Nc(D.parent,z,X)}function tm(D){return V.matcher.regexIndex===0?(ne+=D[0],1):(ws=!0,0)}function nm(D){const z=D[0],X=D.rule,Z=new Wd(X),Le=[X.__beforeBegin,X["on:begin"]];for(const Bt of Le)if(Bt&&(Bt(D,Z),Z.isMatchIgnored))return tm(z);return X.skip?ne+=z:(X.excludeBegin&&(ne+=z),Ne(),!X.returnBegin&&!X.excludeBegin&&(ne=z)),Cc(X,D),X.returnBegin?0:z.length}function rm(D){const z=D[0],X=_.substring(D.index),Z=Nc(V,D,X);if(!Z)return Yd;const Le=V;V.endScope&&V.endScope._wrap?(Ne(),ye(z,V.endScope._wrap)):V.endScope&&V.endScope._multi?(Ne(),jn(V.endScope,D)):Le.skip?ne+=z:(Le.returnEnd||Le.excludeEnd||(ne+=z),Ne(),Le.excludeEnd&&(ne=z));do V.scope&&be.closeNode(),!V.skip&&!V.subLanguage&&(Ll+=V.relevance),V=V.parent;while(V!==Z.parent);return Z.starts&&Cc(Z.starts,D),Le.returnEnd?0:z.length}function lm(){const D=[];for(let z=V;z!==yt;z=z.parent)z.scope&&D.unshift(z.scope);D.forEach(z=>be.openNode(z))}let Rl={};function bc(D,z){const X=z&&z[0];if(ne+=D,X==null)return Ne(),0;if(Rl.type==="begin"&&z.type==="end"&&Rl.index===z.index&&X===""){if(ne+=_.slice(z.index,z.index+1),!i){const Z=new Error(`0 width match regex (${S})`);throw Z.languageName=S,Z.badRule=Rl.rule,Z}return 1}if(Rl=z,z.type==="begin")return nm(z);if(z.type==="illegal"&&!R){const Z=new Error('Illegal lexeme "'+X+'" for mode "'+(V.scope||"<unnamed>")+'"');throw Z.mode=V,Z}else if(z.type==="end"){const Z=rm(z);if(Z!==Yd)return Z}if(z.type==="illegal"&&X==="")return 1;if(ys>1e5&&ys>z.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ne+=X,X.length}const yt=O(S);if(!yt)throw kn(s.replace("{}",S)),new Error('Unknown language: "'+S+'"');const im=a1(yt);let vs="",V=P||im;const Sc={},be=new a.__emitter(a);lm();let ne="",Ll=0,vn=0,ys=0,ws=!1;try{if(yt.__emitTokens)yt.__emitTokens(_,be);else{for(V.matcher.considerAll();;){ys++,ws?ws=!1:V.matcher.considerAll(),V.matcher.lastIndex=vn;const D=V.matcher.exec(_);if(!D)break;const z=_.substring(vn,D.index),X=bc(z,D);vn=D.index+X}bc(_.substring(vn))}return be.finalize(),vs=be.toHTML(),{language:S,value:vs,relevance:Ll,illegal:!1,_emitter:be,_top:V}}catch(D){if(D.message&&D.message.includes("Illegal"))return{language:S,value:Ks(_),illegal:!0,relevance:0,_illegalBy:{message:D.message,index:vn,context:_.slice(vn-100,vn+100),mode:D.mode,resultSoFar:vs},_emitter:be};if(i)return{language:S,value:Ks(_),illegal:!1,relevance:0,errorRaised:D,_emitter:be,_top:V};throw D}}function x(S){const _={value:Ks(S),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return _._emitter.addText(S),_}function g(S,_){_=_||a.languages||Object.keys(e);const R=x(S),P=_.filter(O).filter(G).map(Ne=>p(Ne,S,!1));P.unshift(R);const $=P.sort((Ne,ye)=>{if(Ne.relevance!==ye.relevance)return ye.relevance-Ne.relevance;if(Ne.language&&ye.language){if(O(Ne.language).supersetOf===ye.language)return 1;if(O(ye.language).supersetOf===Ne.language)return-1}return 0}),[K,Re]=$,rt=K;return rt.secondBest=Re,rt}function v(S,_,R){const P=_&&r[_]||R;S.classList.add("hljs"),S.classList.add(`language-${P}`)}function y(S){let _=null;const R=d(S);if(c(R))return;if(U("before:highlightElement",{el:S,language:R}),S.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",S);return}if(S.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(S)),a.throwUnescapedHTML))throw new u1("One of your code blocks includes unescaped HTML.",S.innerHTML);_=S;const P=_.textContent,$=R?h(P,{language:R,ignoreIllegals:!0}):g(P);S.innerHTML=$.value,S.dataset.highlighted="yes",v(S,R,$.language),S.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(S.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),U("after:highlightElement",{el:S,result:$,text:P})}function N(S){a=Kd(a,S)}const m=()=>{w(),Un("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function f(){w(),Un("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let j=!1;function w(){if(document.readyState==="loading"){j=!0;return}document.querySelectorAll(a.cssSelector).forEach(y)}function C(){j&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",C,!1);function k(S,_){let R=null;try{R=_(t)}catch(P){if(kn("Language definition for '{}' could not be registered.".replace("{}",S)),i)kn(P);else throw P;R=o}R.name||(R.name=S),e[S]=R,R.rawDefinition=_.bind(null,t),R.aliases&&F(R.aliases,{languageName:S})}function E(S){delete e[S];for(const _ of Object.keys(r))r[_]===S&&delete r[_]}function L(){return Object.keys(e)}function O(S){return S=(S||"").toLowerCase(),e[S]||e[r[S]]}function F(S,{languageName:_}){typeof S=="string"&&(S=[S]),S.forEach(R=>{r[R.toLowerCase()]=_})}function G(S){const _=O(S);return _&&!_.disableAutodetect}function q(S){S["before:highlightBlock"]&&!S["before:highlightElement"]&&(S["before:highlightElement"]=_=>{S["before:highlightBlock"](Object.assign({block:_.el},_))}),S["after:highlightBlock"]&&!S["after:highlightElement"]&&(S["after:highlightElement"]=_=>{S["after:highlightBlock"](Object.assign({block:_.el},_))})}function ae(S){q(S),l.push(S)}function H(S){const _=l.indexOf(S);_!==-1&&l.splice(_,1)}function U(S,_){const R=S;l.forEach(function(P){P[R]&&P[R](_)})}function W(S){return Un("10.7.0","highlightBlock will be removed entirely in v12.0"),Un("10.7.0","Please use highlightElement now."),y(S)}Object.assign(t,{highlight:h,highlightAuto:g,highlightAll:w,highlightElement:y,highlightBlock:W,configure:N,initHighlighting:m,initHighlightingOnLoad:f,registerLanguage:k,unregisterLanguage:E,listLanguages:L,getLanguage:O,registerAliases:F,autoDetection:G,inherit:Kd,addPlugin:ae,removePlugin:H}),t.debugMode=function(){i=!1},t.safeMode=function(){i=!0},t.versionString=d1,t.regex={concat:On,lookahead:pf,either:Za,optional:Sv,anyNumberOfTimes:bv};for(const S in Jl)typeof Jl[S]=="object"&&uf(Jl[S]);return Object.assign(t,Jl),t},gr=_f({});gr.newInstance=()=>_f({});var p1=gr;gr.HighlightJS=gr;gr.default=gr;const ec=Fu(p1);function f1(t){const e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),l=/[\p{L}0-9._:-]+/u,i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=t.inherit(s,{begin:/\(/,end:/\)/}),a=t.inherit(t.APOS_STRING_MODE,{className:"string"}),c=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:l,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,o,c,a]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:d}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Zd="[A-Za-z$_][0-9A-Za-z$_]*",m1=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],x1=["true","false","null","undefined","NaN","Infinity"],Cf=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Nf=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],bf=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],g1=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],j1=[].concat(bf,Cf,Nf);function v1(t){const e=t.regex,r=(_,{after:R})=>{const P="</"+_[0].slice(1);return _.input.indexOf(P,R)!==-1},l=Zd,i={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(_,R)=>{const P=_[0].length+_.index,$=_.input[P];if($==="<"||$===","){R.ignoreMatch();return}$===">"&&(r(_,{after:P})||R.ignoreMatch());let K;const Re=_.input.substring(P);if(K=Re.match(/^\s*=/)){R.ignoreMatch();return}if((K=Re.match(/^\s+extends\s+/))&&K.index===0){R.ignoreMatch();return}}},a={$pattern:Zd,keyword:m1,literal:x1,built_in:j1,"variable.language":g1},c="[0-9](_?[0-9])*",d=`\\.(${c})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},N={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,x]},f={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:l+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},j=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,N,{match:/\$\d+/},p];x.contains=j.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(j)});const w=[].concat(f,x.contains),C=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),k={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:C},E={variants:[{match:[/class/,/\s+/,l,/\s+/,/extends/,/\s+/,e.concat(l,"(",e.concat(/\./,l),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,l],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Cf,...Nf]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,l,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[k],illegal:/%/},G={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function q(_){return e.concat("(?!",_.join("|"),")")}const ae={match:e.concat(/\b/,q([...bf,"super","import"]),l,e.lookahead(/\(/)),className:"title.function",relevance:0},H={begin:e.concat(/\./,e.lookahead(e.concat(l,/(?![0-9A-Za-z$_(])/))),end:l,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,l,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},k]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",S={match:[/const|var|let/,/\s+/,l,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[k]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,N,f,{match:/\$\d+/},p,L,{className:"attr",begin:l+e.lookahead(":"),relevance:0},S,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,t.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:s},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[k,t.inherit(t.TITLE_MODE,{begin:l,className:"title.function"})]},{match:/\.\.\./,relevance:0},H,{match:"\\$"+l,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[k]},ae,G,E,U,{match:/\$[(.]/}]}}ec.registerLanguage("xml",f1);ec.registerLanguage("javascript",v1);function T({language:t="javascript",name:e,children:r}){const l=u.useRef(null),[i,s]=u.useState(!1),[o,a]=u.useState(""),c=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":z0,"../../../packages/Alert/_example/AlertCenter.tsx":O0,"../../../packages/Alert/_example/AlertClose.tsx":$0,"../../../packages/Alert/_example/AlertDescription.tsx":H0,"../../../packages/Alert/_example/AlertEffect.tsx":U0,"../../../packages/Alert/_example/AlertIconDescription.tsx":W0,"../../../packages/Alert/_example/AlertShowIcon.tsx":V0,"../../../packages/Avatar/_example/AvatarBasic.tsx":X0,"../../../packages/Avatar/_example/AvatarError.tsx":G0,"../../../packages/Avatar/_example/AvatarFit.tsx":Q0,"../../../packages/Avatar/_example/AvatarType.tsx":K0,"../../../packages/Badge/_example/BadgeBasic.tsx":Y0,"../../../packages/Badge/_example/BadgeIsDot.tsx":Z0,"../../../packages/Badge/_example/BadgeMax.tsx":J0,"../../../packages/Badge/_example/BadgeValue.tsx":q0,"../../../packages/Button/_example/ButtonBasic.tsx":ej,"../../../packages/Button/_example/ButtonDisabled.tsx":tj,"../../../packages/Button/_example/ButtonLink.tsx":nj,"../../../packages/Button/_example/ButtonText.tsx":rj,"../../../packages/Collapse/_example/CollapseBasic.tsx":lj,"../../../packages/Container/_example/ContainerBasic.tsx":ij,"../../../packages/Container/_example/ContainerBasic1.tsx":sj,"../../../packages/Container/_example/ContainerBasic2.tsx":oj,"../../../packages/Container/_example/ContainerBasic3.tsx":aj,"../../../packages/Container/_example/ContainerBasic4.tsx":cj,"../../../packages/Container/_example/ContainerBasic5.tsx":dj,"../../../packages/Container/_example/ContainerBasic6.tsx":uj,"../../../packages/Dialog/_example/DialogBasic.tsx":hj,"../../../packages/Dialog/_example/DialogContent.tsx":pj,"../../../packages/Dialog/_example/DialogHeader.tsx":fj,"../../../packages/Divider/_example/DividerBasic.tsx":mj,"../../../packages/Divider/_example/DividerBorder.tsx":xj,"../../../packages/Divider/_example/DividerContent.tsx":gj,"../../../packages/Divider/_example/DividerDirection.tsx":jj,"../../../packages/Drawer/_example/DrawerBasic.tsx":vj,"../../../packages/Drawer/_example/DrawerContent.tsx":yj,"../../../packages/Drawer/_example/DrawerHeader.tsx":wj,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":_j,"../../../packages/Icon/_example/IconBasic.tsx":Cj,"../../../packages/Layout/_example/LayoutBasic.tsx":Nj,"../../../packages/Layout/_example/LayoutBootstrap.tsx":bj,"../../../packages/Layout/_example/LayoutGutter.tsx":Sj,"../../../packages/Layout/_example/LayoutJustify.tsx":kj,"../../../packages/Layout/_example/LayoutMix.tsx":Ej,"../../../packages/Layout/_example/LayoutOffset.tsx":Tj,"../../../packages/Link/_example/LinkBasic.tsx":Bj,"../../../packages/Link/_example/LinkDisabled.tsx":Rj,"../../../packages/Link/_example/LinkIcon.tsx":Lj,"../../../packages/Link/_example/LinkUnderline.tsx":Dj,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":Pj,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":Aj,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":Mj,"../../../packages/Popover/_example/PopoverBasic.tsx":Ij,"../../../packages/Progress/_example/ProgressBasic.tsx":Fj,"../../../packages/Progress/_example/ProgressTextInside.tsx":zj,"../../../packages/Rate/_example/RateBasic.tsx":Oj,"../../../packages/Result/_example/ResultBasic.tsx":$j,"../../../packages/Result/_example/ResultIcon.tsx":Hj,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":Uj,"../../../packages/Space/_example/SpaceAlignment.tsx":Wj,"../../../packages/Space/_example/SpaceBasic.tsx":Vj,"../../../packages/Space/_example/SpaceDirection.tsx":Xj,"../../../packages/Space/_example/SpaceSize.tsx":Gj,"../../../packages/Space/_example/SpaceSize2.tsx":Qj,"../../../packages/Space/_example/SpaceSpacer.tsx":Kj,"../../../packages/Space/_example/SpaceSpacer2.tsx":Yj,"../../../packages/Space/_example/SpaceWrap.tsx":Zj,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Jj,"../../../packages/Switch/_example/SwitchBasic.tsx":qj,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":ev,"../../../packages/Switch/_example/SwitchDisabled.tsx":tv,"../../../packages/Switch/_example/SwitchIcon.tsx":nv,"../../../packages/Switch/_example/SwitchLoading.tsx":rv,"../../../packages/Switch/_example/SwitchSize.tsx":lv,"../../../packages/Switch/_example/SwitchText.tsx":iv,"../../../packages/Table/_example/TableBasic.tsx":sv,"../../../packages/Table/_example/TableBorder.tsx":ov,"../../../packages/Table/_example/TableStripe.tsx":av,"../../../packages/Tag/_example/TagBasic.tsx":cv,"../../../packages/Tag/_example/TagClosable.tsx":dv,"../../../packages/Tag/_example/TagEffect.tsx":uv,"../../../packages/Tag/_example/TagRound.tsx":hv,"../../../packages/Tag/_example/TagSize.tsx":pv,"../../../packages/Text/_example/TextBasic.tsx":fv,"../../../packages/Text/_example/TextSize.tsx":mv,"../../../packages/Text/_example/TextTruncated.tsx":xv,"../../../packages/Tooltip/_example/TooltipBasic.tsx":gv,"../../../packages/Tooltip/_example/TooltipContent.tsx":jv,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":vv,"../../../packages/Tooltip/_example/TooltipEffect.tsx":yv});let d={display:i?"":"none"};u.useEffect(()=>{l.current&&(Object.keys(c).forEach(p=>{p.indexOf(e)!==-1&&a(c[p])}),setTimeout(()=>{ec.highlightElement(l.current)},0))},[e]);function h(){s(!i)}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"code-block",children:[n.jsx("div",{className:"code-block-component",children:r}),n.jsx("div",{className:"op-btns",children:n.jsx("button",{onClick:h,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:n.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:n.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),n.jsx("div",{className:"code-block-wrapper",style:d,children:n.jsx("div",{className:"code-block-pre language-react",children:n.jsx("pre",{children:n.jsx("code",{id:t,ref:l,className:t,children:o})})})})]})})}function Sf(t){var e,r,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=Sf(t[e]))&&(l&&(l+=" "),l+=r);else for(e in t)t[e]&&(l&&(l+=" "),l+=e);return l}function M(){for(var t,e,r=0,l="";r<arguments.length;)(t=arguments[r++])&&(e=Sf(t))&&(l&&(l+=" "),l+=e);return l}const y1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),u.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),w1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(y1,{})})},us=u.forwardRef(w1);us.displayName="Edit";const _1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),C1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(_1,{})})},tc=u.forwardRef(C1);tc.displayName="Search";const N1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),b1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(N1,{})})},jl=u.forwardRef(b1);jl.displayName="Check";const S1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),u.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),k1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(S1,{})})},nc=u.forwardRef(k1);nc.displayName="Message";const E1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),T1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(E1,{})})},rc=u.forwardRef(T1);rc.displayName="Star";const B1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),R1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(B1,{})})},lc=u.forwardRef(R1);lc.displayName="Delete";const L1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),D1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(L1,{})})},hs=u.forwardRef(D1);hs.displayName="View";const P1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),A1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(P1,{})})},ic=u.forwardRef(A1);ic.displayName="StarFilled";const M1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),I1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(M1,{})})},un=u.forwardRef(I1);un.displayName="Close";const F1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),z1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(F1,{})})},sc=u.forwardRef(z1);sc.displayName="Loading";const O1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),u.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),$1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(O1,{})})},oc=u.forwardRef($1);oc.displayName="Hide";const H1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),U1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(H1,{})})},Tl=u.forwardRef(U1);Tl.displayName="InfoFilled";const W1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),V1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(W1,{})})},ps=u.forwardRef(V1);ps.displayName="WarningFilled";const X1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),G1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(X1,{})})},Nr=u.forwardRef(G1);Nr.displayName="CircleCloseFilled";const Q1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),K1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M(l,"el-icon"),onClick:i,children:n.jsx(Q1,{})})},ac=u.forwardRef(K1);ac.displayName="CircleCheckFilled";const Y1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),Z1=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),children:n.jsx(Y1,{})})},cc=u.forwardRef(Z1);cc.displayName="ArrowRight";const J1=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),q1=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),onClick:i,children:n.jsx(J1,{})})},kf=u.forwardRef(q1);kf.displayName="UserFilled";const ey=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),u.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),ty=(t,e)=>{const{style:r,className:l,onClick:i}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),onClick:i,children:n.jsx(ey,{})})},dc=u.forwardRef(ty);dc.displayName="CircleCheck";const ny=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),ry=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),children:n.jsx(ny,{})})},Ef=u.forwardRef(ry);Ef.displayName="QuestionFilled";const ly=t=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},u.createElement("path",{fill:"currentColor",d:"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"})),iy=(t,e)=>{const{style:r,className:l}=t;return n.jsx("i",{ref:e,style:r,className:M("el-icon",l),children:n.jsx(ly,{})})},uc=u.forwardRef(iy);uc.displayName="Share";const sy=(t,e)=>{const{className:r,style:l,children:i,type:s,plain:o=!1,round:a=!1,circle:c=!1,disabled:d=!1,link:h=!1,text:p=!1,bg:x=!1,icon:g,...v}=t,y=g?n.jsx(n.Fragment,{children:g}):n.jsx(n.Fragment,{});return n.jsxs("button",{ref:e,style:l,disabled:d,...v,className:M(r,"el-button",s?`el-button--${s}`:"",o?"is-plain":"",a?"is-round":"",c?"is-circle":"",d?"is-disabled":"",h?"is-link":"",p?"is-text":"",x?"is-has-bg":""),children:[y,i]})},b=u.forwardRef(sy);b.displayName="Button";const oy=(t,e)=>{const{style:r,className:l,children:i,direction:s}=t,o=()=>s==="vertical"?!0:s==="horizontal"?!1:i?i.some(a=>{const c=a.props.children;return c==="Header"||c==="Footer"}):!1;return n.jsx("section",{ref:e,style:r,className:M(l,"el-container",o()?"is-vertical":""),children:i})},Je=u.forwardRef(oy);Je.displayName="Container";const ay=(t,e)=>{const{style:r,className:l,children:i,height:s}=t,o={...r,"--el-header-height":s};return n.jsx("header",{ref:e,style:o,className:M(l,"el-header"),children:i})},$n=u.forwardRef(ay);$n.displayName="Head";const cy=(t,e)=>{const{style:r,className:l,children:i}=t;return n.jsx("main",{ref:e,style:r,className:M(l,"el-main"),children:i})},gn=u.forwardRef(cy);gn.displayName="Main";const dy=(t,e)=>{const{style:r,className:l,children:i,height:s}=t,o={...r,"--el-footer-height":s};return n.jsx("footer",{ref:e,style:o,className:M(l,"el-footer"),children:i})},fs=u.forwardRef(dy);fs.displayName="Footer";const uy=(t,e)=>{const{style:r,className:l,children:i,width:s=200}=t,o={...r,"--el-aside-width":s};return n.jsx("aside",{ref:e,style:o,className:M(l,"el-aside"),children:i})},br=u.forwardRef(uy);br.displayName="Aside";const Tf=u.createContext({}),hy=(t,e)=>{const{style:r,className:l,children:i,gutter:s=0,justify:o}=t,a={marginLeft:`-${s/2}px`,marginRight:`-${s/2}px`,...r},c=u.useMemo(()=>({gutter:s}),[s]);return n.jsx(Tf.Provider,{value:c,children:n.jsx("div",{ref:e,style:a,className:M(l,"el-row",o?`is-justify-${o}`:""),children:i})})},ee=u.forwardRef(hy);ee.displayName="Row";const py=(t,e)=>{const{style:r,className:l,children:i,span:s=24,offset:o,xs:a,sm:c,md:d,lg:h,xl:p}=t,{gutter:x}=u.useContext(Tf),g={paddingLeft:`${x/2}px`,paddingRight:`${x/2}px`,...r};return n.jsx("div",{ref:e,style:g,className:M(l,"el-col",s?`el-col-${s}`:"",x?"is-guttered":"",o?`el-col-offset-${o}`:"",a?`el-col-xs-${a}`:"",c?`el-col-sm-${c}`:"",d?`el-col-md-${d}`:"",h?`el-col-lg-${h}`:"",p?`el-col-xl-${p}`:""),children:i})},I=u.forwardRef(py);I.displayName="Col";const fy=(t,e)=>{const{style:r,className:l,children:i,type:s,href:o,target:a,disabled:c=!1,underline:d=!0,icon:h}=t,p=h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{});return n.jsxs("a",{ref:e,style:r,className:M(l,"el-link",s?`el-link--${s}`:"el-link--default",c?"is-disabled":"",d?"is-underline":""),href:c||!o?void 0:o,target:a||void 0,children:[p,n.jsx("span",{className:"el-link__inner",children:i})]})},ke=u.forwardRef(fy);ke.displayName="Link";const my=(t,e)=>{const{style:r,className:l,children:i,type:s,size:o,truncated:a=!1,lineClamp:c}=t,d={WebkitLineClamp:c,...r};return n.jsx("span",{ref:e,style:d,className:M(l,"el-text",s?`el-text--${s}`:"",o?`el-text--${o}`:"",a?"is-truncated":"",c?"is-line-clamp":""),children:i})},Ke=u.forwardRef(my);Ke.displayName="Text";const xy=(t,e)=>{const{style:r,className:l,children:i,contentPosition:s="center",borderStyle:o="solid",direction:a="horizontal"}=t,c={"--el-border-style":o,...r},d=i?n.jsx(n.Fragment,{children:n.jsx("div",{className:M("el-divider__text",`is-${s}`),children:i})}):n.jsx(n.Fragment,{});return n.jsx("div",{ref:e,style:c,className:M(l,"el-divider",`el-divider--${a}`),children:d})},jt=u.forwardRef(xy);jt.displayName="Divider";const gy=(t,e)=>{const{style:r,className:l,defaultChecked:i=!1,size:s,inactiveText:o,activeText:a,inlinePrompt:c=!1,width:d,activeIcon:h,inactiveIcon:p,disabled:x=!1,loading:g=!1,beforeChange:v,activeActionIcon:y,inactiveActionIcon:N}=t,[m,f]=u.useState(i);function j(){if(x||g)return;if(!v){w();return}const G=v();G instanceof Promise&&G.then(q=>{q&&w()})}function w(){f(!m)}function C(){return p?n.jsx(n.Fragment,{children:p}):n.jsx(n.Fragment,{children:n.jsx("span",{children:o})})}function k(){return(o||p)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:M("el-switch__label el-switch__label--left",m?"":"is-active"),children:n.jsx(C,{})})}):n.jsx(n.Fragment,{})}function E(){return h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{children:n.jsx("span",{children:h})})}function L(){return(a||h)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:M("el-switch__label el-switch__label--right",m?"is-active":""),children:n.jsx(E,{})})}):n.jsx(n.Fragment,{})}function O(){return c&&(h||p)?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:m?h:p})}):c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:n.jsx("span",{className:"is-text",children:m?a:o})})}):n.jsx(n.Fragment,{})}function F(){return g?n.jsx(n.Fragment,{children:n.jsx(sc,{className:"is-loading"})}):y&&m?n.jsx(n.Fragment,{children:y}):N&&!m?n.jsx(n.Fragment,{children:N}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:M(l,"el-switch",m?"is-checked":"",s?`el-switch--${s}`:"",{"is-disabled":x||g}),onClick:j,children:[n.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:x||g}),n.jsx(k,{}),n.jsxs("span",{className:"el-switch__core",style:{width:`${d}px`},children:[n.jsx(O,{}),n.jsx("div",{className:"el-switch__action",children:n.jsx(F,{})})]}),n.jsx(L,{})]})},pe=u.forwardRef(gy);pe.displayName="Switch";const jy=(t,e)=>{const{style:r,className:l,type:i="info",title:s,effect:o="light",closable:a=!0,closeText:c,close:d,showIcon:h=!1,center:p=!1,description:x}=t,[g,v]=u.useState(!0);function y(){if(!h)return n.jsx(n.Fragment,{});let w=n.jsx(n.Fragment,{});switch(i){case"success":w=n.jsx(n.Fragment,{children:n.jsx(ac,{className:M("el-alert__icon",{"is-big":x})})});break;case"info":w=n.jsx(n.Fragment,{children:n.jsx(Tl,{className:M("el-alert__icon",{"is-big":x})})});break;case"warning":w=n.jsx(n.Fragment,{children:n.jsx(ps,{className:M("el-alert__icon",{"is-big":x})})});break;case"error":w=n.jsx(n.Fragment,{children:n.jsx(Nr,{className:M("el-alert__icon",{"is-big":x})})});break}return w}function N(){return x?n.jsx(n.Fragment,{children:n.jsx("p",{className:"el-alert__description",children:x})}):n.jsx(n.Fragment,{})}function m(){d&&d(),v(!1)}const f={display:g?"":"none",...r};function j(){return a?c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-alert__close-btn is-customed",onClick:m,children:c})}):n.jsx(n.Fragment,{children:n.jsx(un,{className:"el-alert__close-btn",onClick:m})}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:f,className:M("el-alert",`el-alert--${i}`,`is-${o}`,{"is-center":p},l),role:"alert",children:[n.jsx(y,{}),n.jsxs("div",{className:"el-alert__content",children:[n.jsx("span",{className:M("el-alert__title",{"is-bold":x}),children:s}),n.jsx(N,{}),n.jsx(j,{})]})]})},se=u.forwardRef(jy);se.displayName="Alert";const vy=u.createContext({}),yy=(t,e)=>{const{style:r,className:l,children:i,activeName:s}=t,o=u.useMemo(()=>({activeName:s}),[s]);return n.jsx(vy.Provider,{value:o,children:n.jsx("div",{ref:e,style:r,className:M(l,"el-collapse"),children:i})})},Bf=u.forwardRef(yy);Bf.displayName="Collapse";const wy=(t,e)=>{const{style:r,className:l,children:i,title:s}=t,[o,a]=u.useState(!1);function c(){a(!o)}return n.jsxs("div",{ref:e,style:r,className:M(l,"el-collapse-item",{"is-active":o}),onClick:c,children:[n.jsxs("button",{className:M("el-collapse-item__header",{"is-active":o}),type:"button",children:[s,n.jsx(cc,{className:"el-collapse-item__arrow"})]}),n.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:o?"":"none"},children:n.jsx("div",{className:"el-collapse-item__content",children:i})})]})},Fr=u.forwardRef(wy);Fr.displayName="CollapseItem";const _y=(t,e)=>{const{style:r,className:l,shape:i="circle",size:s,src:o,icon:a,fit:c="cover",onError:d,children:h}=t,p={...r,"--el-avatar-size":s&&typeof s=="number"?`${s}px`:""},[x,g]=u.useState(!0);function v(){const m=new Image(0,0);o&&(m.src=o),m.onload=()=>{g(!0)},m.onerror=f=>{f instanceof Event&&(f.preventDefault(),f.stopPropagation()),g(!1),d&&d()}}function y(){return x?n.jsx("img",{src:o,style:{objectFit:c}}):n.jsx(n.Fragment,{children:h})}function N(){return a?n.jsx(n.Fragment,{children:a}):o?(v(),n.jsx(n.Fragment,{children:n.jsx(y,{})})):n.jsx(n.Fragment,{children:h})}return n.jsx("span",{ref:e,style:p,className:M(l,"el-avatar",`el-avatar--${i}`,s?`el-avatar--${s}`:"",{"el-avatar--icon":a}),children:n.jsx(N,{})})},St=u.forwardRef(_y);St.displayName="Avatar";const Cy=(t,e)=>{const{style:r,className:l,icon:i="info",title:s,subTitle:o,extra:a}=t;function c(){if(typeof i=="string"){let d=n.jsx(n.Fragment,{});switch(i){case"success":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":d=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return d}else return n.jsx(n.Fragment,{children:i})}return n.jsxs("div",{ref:e,style:r,className:M("el-result",l),children:[n.jsx("div",{className:"el-result__icon",children:n.jsx(c,{})}),n.jsx("div",{className:"el-result__title",children:n.jsx("p",{children:s})}),n.jsx("div",{className:"el-result__subtitle",children:n.jsx("p",{children:o})}),n.jsx("div",{className:"el-result__extra",children:a})]})},nr=u.forwardRef(Cy);nr.displayName="Result";function hn(t){return Rf(t)?(t.nodeName||"").toLowerCase():"#document"}function Ge(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ut(t){var e;return(e=(Rf(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Rf(t){return t instanceof Node||t instanceof Ge(t).Node}function Ee(t){return t instanceof Element||t instanceof Ge(t).Element}function et(t){return t instanceof HTMLElement||t instanceof Ge(t).HTMLElement}function Yo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ge(t).ShadowRoot}function Bl(t){const{overflow:e,overflowX:r,overflowY:l,display:i}=dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+l+r)&&!["inline","contents"].includes(i)}function Ny(t){return["table","td","th"].includes(hn(t))}function hc(t){const e=pc(),r=dt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(l=>(r.willChange||"").includes(l))||["paint","layout","strict","content"].some(l=>(r.contain||"").includes(l))}function by(t){let e=jr(t);for(;et(e)&&!ms(e);){if(hc(e))return e;e=jr(e)}return null}function pc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ms(t){return["html","body","#document"].includes(hn(t))}function dt(t){return Ge(t).getComputedStyle(t)}function xs(t){return Ee(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function jr(t){if(hn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Yo(t)&&t.host||Ut(t);return Yo(e)?e.host:e}function Lf(t){const e=jr(t);return ms(e)?t.ownerDocument?t.ownerDocument.body:t.body:et(e)&&Bl(e)?e:Lf(e)}function vl(t,e,r){var l;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=Lf(t),s=i===((l=t.ownerDocument)==null?void 0:l.body),o=Ge(i);return s?e.concat(o,o.visualViewport||[],Bl(i)?i:[],o.frameElement&&r?vl(o.frameElement):[]):e.concat(i,vl(i,[],r))}function Jd(t){let e=t.activeElement;for(;((r=e)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;e=e.shadowRoot.activeElement}return e}function Zo(t,e){if(!t||!e)return!1;const r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Yo(r)){let l=e;for(;l;){if(t===l)return!0;l=l.parentNode||l.host}}return!1}function Df(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function Sy(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:r,version:l}=e;return r+"/"+l}).join(" "):navigator.userAgent}function ky(t){return!qd()&&t.width===0&&t.height===0||qd()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function Ey(){return/apple/i.test(navigator.vendor)}function qd(){const t=/android/i;return t.test(Df())||t.test(Sy())}function Ty(){return Df().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function $i(t,e){const r=["mouse","pen"];return e||r.push("",void 0),r.includes(t)}function zr(t){return(t==null?void 0:t.ownerDocument)||document}function By(t){return"composedPath"in t?t.composedPath()[0]:t.target}const Ry="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Pf(t){return et(t)&&t.matches(Ry)}const vr=Math.min,En=Math.max,Hi=Math.round,ql=Math.floor,pn=t=>({x:t,y:t});function Ly(t,e,r){return En(t,vr(e,r))}function Af(t,e){return typeof t=="function"?t(e):t}function fc(t){return t.split("-")[0]}function mc(t){return t.split("-")[1]}function Dy(t){return t==="x"?"y":"x"}function Mf(t){return t==="y"?"height":"width"}function xc(t){return["top","bottom"].includes(fc(t))?"y":"x"}function If(t){return Dy(xc(t))}function Py(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ay(t){return typeof t!="number"?Py(t):{top:t,right:t,bottom:t,left:t}}function Ff(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function eu(t,e,r){let{reference:l,floating:i}=t;const s=xc(e),o=If(e),a=Mf(o),c=fc(e),d=s==="y",h=l.x+l.width/2-i.width/2,p=l.y+l.height/2-i.height/2,x=l[a]/2-i[a]/2;let g;switch(c){case"top":g={x:h,y:l.y-i.height};break;case"bottom":g={x:h,y:l.y+l.height};break;case"right":g={x:l.x+l.width,y:p};break;case"left":g={x:l.x-i.width,y:p};break;default:g={x:l.x,y:l.y}}switch(mc(e)){case"start":g[o]-=x*(r&&d?-1:1);break;case"end":g[o]+=x*(r&&d?-1:1);break}return g}const My=async(t,e,r)=>{const{placement:l="bottom",strategy:i="absolute",middleware:s=[],platform:o}=r,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let d=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=eu(d,l,c),x=l,g={},v=0;for(let y=0;y<a.length;y++){const{name:N,fn:m}=a[y],{x:f,y:j,data:w,reset:C}=await m({x:h,y:p,initialPlacement:l,placement:x,strategy:i,middlewareData:g,rects:d,platform:o,elements:{reference:t,floating:e}});if(h=f??h,p=j??p,g={...g,[N]:{...g[N],...w}},C&&v<=50){v++,typeof C=="object"&&(C.placement&&(x=C.placement),C.rects&&(d=C.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):C.rects),{x:h,y:p}=eu(d,x,c)),y=-1;continue}}return{x:h,y:p,placement:x,strategy:i,middlewareData:g}},Iy=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:l,placement:i,rects:s,platform:o,elements:a,middlewareData:c}=e,{element:d,padding:h=0}=Af(t,e)||{};if(d==null)return{};const p=Ay(h),x={x:r,y:l},g=If(i),v=Mf(g),y=await o.getDimensions(d),N=g==="y",m=N?"top":"left",f=N?"bottom":"right",j=N?"clientHeight":"clientWidth",w=s.reference[v]+s.reference[g]-x[g]-s.floating[v],C=x[g]-s.reference[g],k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let E=k?k[j]:0;(!E||!await(o.isElement==null?void 0:o.isElement(k)))&&(E=a.floating[j]||s.floating[v]);const L=w/2-C/2,O=E/2-y[v]/2-1,F=vr(p[m],O),G=vr(p[f],O),q=F,ae=E-y[v]-G,H=E/2-y[v]/2+L,U=Ly(q,H,ae),W=!c.arrow&&mc(i)!=null&&H!=U&&s.reference[v]/2-(H<q?F:G)-y[v]/2<0,S=W?H<q?H-q:H-ae:0;return{[g]:x[g]+S,data:{[g]:U,centerOffset:H-U-S,...W&&{alignmentOffset:S}},reset:W}}});async function Fy(t,e){const{placement:r,platform:l,elements:i}=t,s=await(l.isRTL==null?void 0:l.isRTL(i.floating)),o=fc(r),a=mc(r),c=xc(r)==="y",d=["left","top"].includes(o)?-1:1,h=s&&c?-1:1,p=Af(e,t);let{mainAxis:x,crossAxis:g,alignmentAxis:v}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),c?{x:g*h,y:x*d}:{x:x*d,y:g*h}}const gc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,l;const{x:i,y:s,placement:o,middlewareData:a}=e,c=await Fy(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(l=a.arrow)!=null&&l.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:o}}}}};function zf(t){const e=dt(t);let r=parseFloat(e.width)||0,l=parseFloat(e.height)||0;const i=et(t),s=i?t.offsetWidth:r,o=i?t.offsetHeight:l,a=Hi(r)!==s||Hi(l)!==o;return a&&(r=s,l=o),{width:r,height:l,$:a}}function jc(t){return Ee(t)?t:t.contextElement}function cr(t){const e=jc(t);if(!et(e))return pn(1);const r=e.getBoundingClientRect(),{width:l,height:i,$:s}=zf(e);let o=(s?Hi(r.width):r.width)/l,a=(s?Hi(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const zy=pn(0);function Of(t){const e=Ge(t);return!pc()||!e.visualViewport?zy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Oy(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Ge(t)?!1:e}function Pn(t,e,r,l){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),s=jc(t);let o=pn(1);e&&(l?Ee(l)&&(o=cr(l)):o=cr(t));const a=Oy(s,r,l)?Of(s):pn(0);let c=(i.left+a.x)/o.x,d=(i.top+a.y)/o.y,h=i.width/o.x,p=i.height/o.y;if(s){const x=Ge(s),g=l&&Ee(l)?Ge(l):l;let v=x.frameElement;for(;v&&l&&g!==x;){const y=cr(v),N=v.getBoundingClientRect(),m=dt(v),f=N.left+(v.clientLeft+parseFloat(m.paddingLeft))*y.x,j=N.top+(v.clientTop+parseFloat(m.paddingTop))*y.y;c*=y.x,d*=y.y,h*=y.x,p*=y.y,c+=f,d+=j,v=Ge(v).frameElement}}return Ff({width:h,height:p,x:c,y:d})}function $y(t){let{rect:e,offsetParent:r,strategy:l}=t;const i=et(r),s=Ut(r);if(r===s)return e;let o={scrollLeft:0,scrollTop:0},a=pn(1);const c=pn(0);if((i||!i&&l!=="fixed")&&((hn(r)!=="body"||Bl(s))&&(o=xs(r)),et(r))){const d=Pn(r);a=cr(r),c.x=d.x+r.clientLeft,c.y=d.y+r.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+c.x,y:e.y*a.y-o.scrollTop*a.y+c.y}}function Hy(t){return Array.from(t.getClientRects())}function $f(t){return Pn(Ut(t)).left+xs(t).scrollLeft}function Uy(t){const e=Ut(t),r=xs(t),l=t.ownerDocument.body,i=En(e.scrollWidth,e.clientWidth,l.scrollWidth,l.clientWidth),s=En(e.scrollHeight,e.clientHeight,l.scrollHeight,l.clientHeight);let o=-r.scrollLeft+$f(t);const a=-r.scrollTop;return dt(l).direction==="rtl"&&(o+=En(e.clientWidth,l.clientWidth)-i),{width:i,height:s,x:o,y:a}}function Wy(t,e){const r=Ge(t),l=Ut(t),i=r.visualViewport;let s=l.clientWidth,o=l.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;const d=pc();(!d||d&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a,y:c}}function Vy(t,e){const r=Pn(t,!0,e==="fixed"),l=r.top+t.clientTop,i=r.left+t.clientLeft,s=et(t)?cr(t):pn(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,c=i*s.x,d=l*s.y;return{width:o,height:a,x:c,y:d}}function tu(t,e,r){let l;if(e==="viewport")l=Wy(t,r);else if(e==="document")l=Uy(Ut(t));else if(Ee(e))l=Vy(e,r);else{const i=Of(t);l={...e,x:e.x-i.x,y:e.y-i.y}}return Ff(l)}function Hf(t,e){const r=jr(t);return r===e||!Ee(r)||ms(r)?!1:dt(r).position==="fixed"||Hf(r,e)}function Xy(t,e){const r=e.get(t);if(r)return r;let l=vl(t,[],!1).filter(a=>Ee(a)&&hn(a)!=="body"),i=null;const s=dt(t).position==="fixed";let o=s?jr(t):t;for(;Ee(o)&&!ms(o);){const a=dt(o),c=hc(o);!c&&a.position==="fixed"&&(i=null),(s?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Bl(o)&&!c&&Hf(t,o))?l=l.filter(h=>h!==o):i=a,o=jr(o)}return e.set(t,l),l}function Gy(t){let{element:e,boundary:r,rootBoundary:l,strategy:i}=t;const o=[...r==="clippingAncestors"?Xy(e,this._c):[].concat(r),l],a=o[0],c=o.reduce((d,h)=>{const p=tu(e,h,i);return d.top=En(p.top,d.top),d.right=vr(p.right,d.right),d.bottom=vr(p.bottom,d.bottom),d.left=En(p.left,d.left),d},tu(e,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Qy(t){const{width:e,height:r}=zf(t);return{width:e,height:r}}function Ky(t,e,r){const l=et(e),i=Ut(e),s=r==="fixed",o=Pn(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=pn(0);if(l||!l&&!s)if((hn(e)!=="body"||Bl(i))&&(a=xs(e)),l){const d=Pn(e,!0,s,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&(c.x=$f(i));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function nu(t,e){return!et(t)||dt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Uf(t,e){const r=Ge(t);if(!et(t))return r;let l=nu(t,e);for(;l&&Ny(l)&&dt(l).position==="static";)l=nu(l,e);return l&&(hn(l)==="html"||hn(l)==="body"&&dt(l).position==="static"&&!hc(l))?r:l||by(t)||r}const Yy=async function(t){let{reference:e,floating:r,strategy:l}=t;const i=this.getOffsetParent||Uf,s=this.getDimensions;return{reference:Ky(e,await i(r),l),floating:{x:0,y:0,...await s(r)}}};function Zy(t){return dt(t).direction==="rtl"}const Jy={convertOffsetParentRelativeRectToViewportRelativeRect:$y,getDocumentElement:Ut,getClippingRect:Gy,getOffsetParent:Uf,getElementRects:Yy,getClientRects:Hy,getDimensions:Qy,getScale:cr,isElement:Ee,isRTL:Zy};function qy(t,e){let r=null,l;const i=Ut(t);function s(){clearTimeout(l),r&&r.disconnect(),r=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:d,top:h,width:p,height:x}=t.getBoundingClientRect();if(a||e(),!p||!x)return;const g=ql(h),v=ql(i.clientWidth-(d+p)),y=ql(i.clientHeight-(h+x)),N=ql(d),f={rootMargin:-g+"px "+-v+"px "+-y+"px "+-N+"px",threshold:En(0,vr(1,c))||1};let j=!0;function w(C){const k=C[0].intersectionRatio;if(k!==c){if(!j)return o();k?o(!1,k):l=setTimeout(()=>{o(!1,1e-7)},100)}j=!1}try{r=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,f)}r.observe(t)}return o(!0),s}function vc(t,e,r,l){l===void 0&&(l={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=l,d=jc(t),h=i||s?[...d?vl(d):[],...vl(e)]:[];h.forEach(m=>{i&&m.addEventListener("scroll",r,{passive:!0}),s&&m.addEventListener("resize",r)});const p=d&&a?qy(d,r):null;let x=-1,g=null;o&&(g=new ResizeObserver(m=>{let[f]=m;f&&f.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{g&&g.observe(e)})),r()}),d&&!c&&g.observe(d),g.observe(e));let v,y=c?Pn(t):null;c&&N();function N(){const m=Pn(t);y&&(m.x!==y.x||m.y!==y.y||m.width!==y.width||m.height!==y.height)&&r(),y=m,v=requestAnimationFrame(N)}return r(),()=>{h.forEach(m=>{i&&m.removeEventListener("scroll",r),s&&m.removeEventListener("resize",r)}),p&&p(),g&&g.disconnect(),g=null,c&&cancelAnimationFrame(v)}}const ru=Iy,e2=(t,e,r)=>{const l=new Map,i={platform:Jy,...r},s={...i.platform,_c:l};return My(t,e,{...i,platform:s})},yc=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:l,padding:i}=typeof t=="function"?t(r):t;return l&&e(l)?l.current!=null?ru({element:l.current,padding:i}).fn(r):{}:l?ru({element:l,padding:i}).fn(r):{}}}};var hi=typeof document<"u"?u.useLayoutEffect:u.useEffect;function Ui(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,l,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(l=r;l--!==0;)if(!Ui(t[l],e[l]))return!1;return!0}if(i=Object.keys(t),r=i.length,r!==Object.keys(e).length)return!1;for(l=r;l--!==0;)if(!{}.hasOwnProperty.call(e,i[l]))return!1;for(l=r;l--!==0;){const s=i[l];if(!(s==="_owner"&&t.$$typeof)&&!Ui(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Wf(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function lu(t,e){const r=Wf(t);return Math.round(e*r)/r}function iu(t){const e=u.useRef(t);return hi(()=>{e.current=t}),e}function t2(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:l=[],platform:i,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:c,open:d}=t,[h,p]=u.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[x,g]=u.useState(l);Ui(x,l)||g(l);const[v,y]=u.useState(null),[N,m]=u.useState(null),f=u.useCallback(W=>{W!=k.current&&(k.current=W,y(W))},[y]),j=u.useCallback(W=>{W!==E.current&&(E.current=W,m(W))},[m]),w=s||v,C=o||N,k=u.useRef(null),E=u.useRef(null),L=u.useRef(h),O=iu(c),F=iu(i),G=u.useCallback(()=>{if(!k.current||!E.current)return;const W={placement:e,strategy:r,middleware:x};F.current&&(W.platform=F.current),e2(k.current,E.current,W).then(S=>{const _={...S,isPositioned:!0};q.current&&!Ui(L.current,_)&&(L.current=_,El.flushSync(()=>{p(_)}))})},[x,e,r,F]);hi(()=>{d===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,p(W=>({...W,isPositioned:!1})))},[d]);const q=u.useRef(!1);hi(()=>(q.current=!0,()=>{q.current=!1}),[]),hi(()=>{if(w&&(k.current=w),C&&(E.current=C),w&&C){if(O.current)return O.current(w,C,G);G()}},[w,C,G,O]);const ae=u.useMemo(()=>({reference:k,floating:E,setReference:f,setFloating:j}),[f,j]),H=u.useMemo(()=>({reference:w,floating:C}),[w,C]),U=u.useMemo(()=>{const W={position:r,left:0,top:0};if(!H.floating)return W;const S=lu(H.floating,h.x),_=lu(H.floating,h.y);return a?{...W,transform:"translate("+S+"px, "+_+"px)",...Wf(H.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:S,top:_}},[r,a,H.floating,h.x,h.y]);return u.useMemo(()=>({...h,update:G,refs:ae,elements:H,floatingStyles:U}),[h,G,ae,H,U])}const n2=ra.useInsertionEffect,r2=n2||(t=>t());function l2(t){const e=u.useRef(()=>{});return r2(()=>{e.current=t}),u.useCallback(function(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return e.current==null?void 0:e.current(...l)},[])}var yl=typeof document<"u"?u.useLayoutEffect:u.useEffect;let Ys=!1,i2=0;const su=()=>"floating-ui-"+i2++;function s2(){const[t,e]=u.useState(()=>Ys?su():void 0);return yl(()=>{t==null&&e(su())},[]),u.useEffect(()=>{Ys||(Ys=!0)},[]),t}const o2=ra.useId,a2=o2||s2;function c2(){const t=new Map;return{emit(e,r){var l;(l=t.get(e))==null||l.forEach(i=>i(r))},on(e,r){t.set(e,[...t.get(e)||[],r])},off(e,r){var l;t.set(e,((l=t.get(e))==null?void 0:l.filter(i=>i!==r))||[])}}}const d2=u.createContext(null),u2=u.createContext(null),Vf=()=>{var t;return((t=u.useContext(d2))==null?void 0:t.id)||null},Xf=()=>u.useContext(u2);function Gf(t){return"data-floating-ui-"+t}function ou(t){const e=u.useRef(t);return yl(()=>{e.current=t}),e}const au=Gf("safe-polygon");function Zs(t,e,r){return r&&!$i(r)?0:typeof t=="number"?t:t==null?void 0:t[e]}function Qf(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,dataRef:i,events:s,elements:{domReference:o,floating:a},refs:c}=t,{enabled:d=!0,delay:h=0,handleClose:p=null,mouseOnly:x=!1,restMs:g=0,move:v=!0}=e,y=Xf(),N=Vf(),m=ou(p),f=ou(h),j=u.useRef(),w=u.useRef(),C=u.useRef(),k=u.useRef(),E=u.useRef(!0),L=u.useRef(!1),O=u.useRef(()=>{}),F=u.useCallback(()=>{var H;const U=(H=i.current.openEvent)==null?void 0:H.type;return(U==null?void 0:U.includes("mouse"))&&U!=="mousedown"},[i]);u.useEffect(()=>{if(!d)return;function H(U){let{open:W}=U;W||(clearTimeout(w.current),clearTimeout(k.current),E.current=!0)}return s.on("openchange",H),()=>{s.off("openchange",H)}},[d,s]),u.useEffect(()=>{if(!d||!m.current||!r)return;function H(W){F()&&l(!1,W,"hover")}const U=zr(a).documentElement;return U.addEventListener("mouseleave",H),()=>{U.removeEventListener("mouseleave",H)}},[a,r,l,d,m,i,F]);const G=u.useCallback(function(H,U,W){U===void 0&&(U=!0),W===void 0&&(W="hover");const S=Zs(f.current,"close",j.current);S&&!C.current?(clearTimeout(w.current),w.current=setTimeout(()=>l(!1,H,W),S)):U&&(clearTimeout(w.current),l(!1,H,W))},[f,l]),q=u.useCallback(()=>{O.current(),C.current=void 0},[]),ae=u.useCallback(()=>{if(L.current){const H=zr(c.floating.current).body;H.style.pointerEvents="",H.removeAttribute(au),L.current=!1}},[c]);return u.useEffect(()=>{if(!d)return;function H(){return i.current.openEvent?["click","mousedown"].includes(i.current.openEvent.type):!1}function U(_){if(clearTimeout(w.current),E.current=!1,x&&!$i(j.current)||g>0&&Zs(f.current,"open")===0)return;const R=Zs(f.current,"open",j.current);R?w.current=setTimeout(()=>{l(!0,_,"hover")},R):l(!0,_,"hover")}function W(_){if(H())return;O.current();const R=zr(a);if(clearTimeout(k.current),m.current){r||clearTimeout(w.current),C.current=m.current({...t,tree:y,x:_.clientX,y:_.clientY,onClose(){ae(),q(),G(_,!0,"safe-polygon")}});const $=C.current;R.addEventListener("mousemove",$),O.current=()=>{R.removeEventListener("mousemove",$)};return}(j.current==="touch"?!Zo(a,_.relatedTarget):!0)&&G(_)}function S(_){H()||m.current==null||m.current({...t,tree:y,x:_.clientX,y:_.clientY,onClose(){ae(),q(),G(_)}})(_)}if(Ee(o)){const _=o;return r&&_.addEventListener("mouseleave",S),a==null||a.addEventListener("mouseleave",S),v&&_.addEventListener("mousemove",U,{once:!0}),_.addEventListener("mouseenter",U),_.addEventListener("mouseleave",W),()=>{r&&_.removeEventListener("mouseleave",S),a==null||a.removeEventListener("mouseleave",S),v&&_.removeEventListener("mousemove",U),_.removeEventListener("mouseenter",U),_.removeEventListener("mouseleave",W)}}},[o,a,d,t,x,g,v,G,q,ae,l,r,y,f,m,i]),yl(()=>{var H;if(d&&r&&(H=m.current)!=null&&H.__options.blockPointerEvents&&F()){const W=zr(a).body;if(W.setAttribute(au,""),W.style.pointerEvents="none",L.current=!0,Ee(o)&&a){var U;const S=o,_=y==null||(U=y.nodesRef.current.find(R=>R.id===N))==null||(U=U.context)==null?void 0:U.elements.floating;return _&&(_.style.pointerEvents=""),S.style.pointerEvents="auto",a.style.pointerEvents="auto",()=>{S.style.pointerEvents="",a.style.pointerEvents=""}}}},[d,r,N,a,o,y,m,i,F]),yl(()=>{r||(j.current=void 0,q(),ae())},[r,q,ae]),u.useEffect(()=>()=>{q(),clearTimeout(w.current),clearTimeout(k.current),ae()},[d,o,q,ae]),u.useMemo(()=>{if(!d)return{};function H(U){j.current=U.pointerType}return{reference:{onPointerDown:H,onPointerEnter:H,onMouseMove(U){r||g===0||(clearTimeout(k.current),k.current=setTimeout(()=>{E.current||l(!0,U.nativeEvent,"hover")},g))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(U){G(U.nativeEvent,!1)}}}},[d,g,r,l,G])}function cu(t){return et(t.target)&&t.target.tagName==="BUTTON"}function du(t){return Pf(t)}function wl(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,dataRef:i,elements:{domReference:s}}=t,{enabled:o=!0,event:a="click",toggle:c=!0,ignoreMouse:d=!1,keyboardHandlers:h=!0}=e,p=u.useRef(),x=u.useRef(!1);return u.useMemo(()=>o?{reference:{onPointerDown(g){p.current=g.pointerType},onMouseDown(g){g.button===0&&($i(p.current,!0)&&d||a!=="click"&&(r&&c&&(!i.current.openEvent||i.current.openEvent.type==="mousedown")?l(!1,g.nativeEvent,"click"):(g.preventDefault(),l(!0,g.nativeEvent,"click"))))},onClick(g){if(a==="mousedown"&&p.current){p.current=void 0;return}$i(p.current,!0)&&d||(r&&c&&(!i.current.openEvent||i.current.openEvent.type==="click")?l(!1,g.nativeEvent,"click"):l(!0,g.nativeEvent,"click"))},onKeyDown(g){p.current=void 0,!(g.defaultPrevented||!h||cu(g))&&(g.key===" "&&!du(s)&&(g.preventDefault(),x.current=!0),g.key==="Enter"&&l(!(r&&c),g.nativeEvent,"click"))},onKeyUp(g){g.defaultPrevented||!h||cu(g)||du(s)||g.key===" "&&x.current&&(x.current=!1,l(!(r&&c),g.nativeEvent,"click"))}}}:{},[o,i,a,d,h,s,c,r,l])}function wc(t){var e;t===void 0&&(t={});const{open:r=!1,onOpenChange:l,nodeId:i}=t,[s,o]=u.useState(null),a=((e=t.elements)==null?void 0:e.reference)||s,c=t2(t),d=Xf(),h=Vf()!=null,p=l2((C,k,E)=>{C&&(g.current.openEvent=k),v.emit("openchange",{open:C,event:k,reason:E,nested:h}),l==null||l(C,k,E)}),x=u.useRef(null),g=u.useRef({}),v=u.useState(()=>c2())[0],y=a2(),N=u.useCallback(C=>{const k=Ee(C)?{getBoundingClientRect:()=>C.getBoundingClientRect(),contextElement:C}:C;c.refs.setReference(k)},[c.refs]),m=u.useCallback(C=>{(Ee(C)||C===null)&&(x.current=C,o(C)),(Ee(c.refs.reference.current)||c.refs.reference.current===null||C!==null&&!Ee(C))&&c.refs.setReference(C)},[c.refs]),f=u.useMemo(()=>({...c.refs,setReference:m,setPositionReference:N,domReference:x}),[c.refs,m,N]),j=u.useMemo(()=>({...c.elements,domReference:a}),[c.elements,a]),w=u.useMemo(()=>({...c,refs:f,elements:j,dataRef:g,nodeId:i,floatingId:y,events:v,open:r,onOpenChange:p}),[c,i,y,v,r,p,f,j]);return yl(()=>{const C=d==null?void 0:d.nodesRef.current.find(k=>k.id===i);C&&(C.context=w)}),u.useMemo(()=>({...c,context:w,refs:f,elements:j}),[c,f,j,w])}function Kf(t,e){e===void 0&&(e={});const{open:r,onOpenChange:l,events:i,refs:s,elements:{floating:o,domReference:a}}=t,{enabled:c=!0,visibleOnly:d=!0}=e,h=u.useRef(!1),p=u.useRef(),x=u.useRef(!0);return u.useEffect(()=>{if(!c)return;const g=Ge(a);function v(){!r&&et(a)&&a===Jd(zr(a))&&(h.current=!0)}function y(){x.current=!0}return g.addEventListener("blur",v),g.addEventListener("keydown",y,!0),()=>{g.removeEventListener("blur",v),g.removeEventListener("keydown",y,!0)}},[o,a,r,c]),u.useEffect(()=>{if(!c)return;function g(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(h.current=!0)}return i.on("openchange",g),()=>{i.off("openchange",g)}},[i,c]),u.useEffect(()=>()=>{clearTimeout(p.current)},[]),u.useMemo(()=>c?{reference:{onPointerDown(g){ky(g.nativeEvent)||(x.current=!1)},onMouseLeave(){h.current=!1},onFocus(g){if(h.current)return;const v=By(g.nativeEvent);if(d&&Ee(v))try{if(Ey()&&Ty())throw Error();if(!v.matches(":focus-visible"))return}catch{if(!x.current&&!Pf(v))return}l(!0,g.nativeEvent,"focus")},onBlur(g){h.current=!1;const v=g.relatedTarget,y=Ee(v)&&v.hasAttribute(Gf("focus-guard"))&&v.getAttribute("data-type")==="outside";p.current=window.setTimeout(()=>{const N=Jd(a?a.ownerDocument:document);!v&&N===a||Zo(s.floating.current,v)||Zo(a,v)||y||l(!1,g.nativeEvent,"focus")})}}}:{},[c,d,a,s,l])}const uu="active",hu="selected";function Js(t,e,r){const l=new Map,i=r==="item";let s=t;if(i&&t){const{[uu]:o,[hu]:a,...c}=t;s=c}return{...r==="floating"&&{tabIndex:-1},...s,...e.map(o=>{const a=o?o[r]:null;return typeof a=="function"?t?a(t):null:a}).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(c=>{let[d,h]=c;if(!(i&&[uu,hu].includes(d)))if(d.indexOf("on")===0){if(l.has(d)||l.set(d,[]),typeof h=="function"){var p;(p=l.get(d))==null||p.push(h),o[d]=function(){for(var x,g=arguments.length,v=new Array(g),y=0;y<g;y++)v[y]=arguments[y];return(x=l.get(d))==null?void 0:x.map(N=>N(...v)).find(N=>N!==void 0)}}}else o[d]=h}),o),{})}}function _c(t){t===void 0&&(t=[]);const e=t,r=u.useCallback(s=>Js(s,t,"reference"),e),l=u.useCallback(s=>Js(s,t,"floating"),e),i=u.useCallback(s=>Js(s,t,"item"),t.map(s=>s==null?void 0:s.item));return u.useMemo(()=>({getReferenceProps:r,getFloatingProps:l,getItemProps:i}),[r,l,i])}const h2=(t,e)=>{const{style:r,className:l,placement:i,content:s,effect:o,getFloatingProps:a,children:c}=t;function d(){return typeof s=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:s})}):n.jsx(n.Fragment,{children:s})}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:r,className:M("el-popper",`is-${o}`,l),"data-popper-placement":i,...a(),children:[n.jsx(d,{}),c]})})},Yf=u.forwardRef(h2);Yf.displayName="TooltipPopper";const p2=t=>{var E,L;const{style:e,className:r,effect:l="dark",placement:i="bottom",trigger:s="hover",content:o,showAfter:a=0,hideAfter:c=200,disabled:d=!0,children:h}=t,[p,x]=u.useState(!1),g=u.useRef(null),{refs:v,floatingStyles:y,context:N,middlewareData:m}=wc({placement:i,middleware:[gc(12),yc({element:g})],open:p&&d,whileElementsMounted:vc,onOpenChange:x});let f={};switch(s){case"hover":f=Qf(N,{delay:{open:a,close:c}});break;case"click":f=wl(N);break;case"focus":f=Kf(N);break;case"contextmenu":f=wl(N,{event:"mousedown"});break}const{getReferenceProps:j,getFloatingProps:w}=_c([f]),C=u.cloneElement(u.Children.only(h),{ref:v.setReference,...j()}),k={...e,...y};return n.jsxs(n.Fragment,{children:[p&&El.createPortal(n.jsx(Yf,{ref:v.setFloating,style:k,className:M(r),effect:l,placement:i,content:o,getFloatingProps:w,children:n.jsx("span",{ref:g,className:"el-popper__arrow",style:{position:"absolute",left:(E=m.arrow)==null?void 0:E.x,top:(L=m.arrow)==null?void 0:L.y}})}),document.body),C]})},we=u.forwardRef(p2);we.displayName="Tooltip";const f2=(t,e)=>{const{style:r,className:l,placement:i,title:s,content:o,getFloatingProps:a,children:c}=t;function d(){return typeof o=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:o})}):n.jsx(n.Fragment,{children:o})}const h={width:"200px",...r};return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:h,className:M("el-popper is-light el-popover el-popover--plain",l),"data-popper-placement":i,...a(),children:[n.jsx("div",{className:"el-popover__title",role:"title",children:s}),n.jsx(d,{}),c]})})},Zf=u.forwardRef(f2);Zf.displayName="PopoverPopper";const m2=t=>{var k,E;const{style:e,className:r,placement:l="bottom",trigger:i="hover",title:s,content:o,showAfter:a=0,hideAfter:c=200,children:d}=t,[h,p]=u.useState(!1),x=u.useRef(null),{refs:g,floatingStyles:v,context:y,middlewareData:N}=wc({placement:l,middleware:[gc(12),yc({element:x})],open:h,whileElementsMounted:vc,onOpenChange:p});let m={};switch(i){case"hover":m=Qf(y,{delay:{open:a,close:c}});break;case"click":m=wl(y);break;case"focus":m=Kf(y);break;case"contextmenu":m=wl(y,{event:"mousedown"});break}const{getReferenceProps:f,getFloatingProps:j}=_c([m]),w=u.cloneElement(u.Children.only(d),{ref:g.setReference,...f()}),C={...e,...v};return n.jsxs(n.Fragment,{children:[h&&El.createPortal(n.jsx(Zf,{ref:g.setFloating,style:C,className:M(r),placement:l,title:s,content:o,getFloatingProps:j,children:n.jsx("span",{ref:x,className:"el-popper__arrow",style:{position:"absolute",left:(k=N.arrow)==null?void 0:k.x,top:(E=N.arrow)==null?void 0:E.y}})}),document.body),w]})},Or=u.forwardRef(m2);Or.displayName="Popover";const x2=(t,e)=>{const{style:r,className:l,percentage:i=0,format:s,status:o,textInside:a=!1,strokeWidth:c=6}=t;function d(){return a?s?n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsx("span",{children:s(i)})}):n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsxs("span",{children:[i,"%"]})}):n.jsx(n.Fragment,{})}function h(){if(!a)if(o){let p;switch(o){case"success":p=n.jsx(dc,{});break;case"warning":p=n.jsx(ps,{});break;case"exception":p=n.jsx(Nr,{});break}return p}else return s?n.jsx("span",{children:s(i)}):n.jsxs("span",{children:[i,"%"]});return n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:M("el-progress el-progress--line",o?`is-${o}`:"",l),role:"progressbar",children:[n.jsx("div",{className:"el-progress-bar",children:n.jsx("div",{className:"el-progress-bar__outer",style:{height:`${c}px`},children:n.jsx("div",{className:"el-progress-bar__inner",style:{width:`${i}%`,animationDuration:"3s"},children:n.jsx(d,{})})})}),n.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:n.jsx(h,{})})]})},bt=u.forwardRef(x2);bt.displayName="Progress";const g2=(t,e)=>{const{style:r,className:l,placement:i,title:s,width:o,icon:a,iconColor:c,hideIcon:d,confirmButtonText:h,cancelButtonText:p,onConfirm:x,onCancel:g,getFloatingProps:v,children:y}=t,N={width:o?typeof o=="string"?o:`${o}px`:"150px",...r};function m(){return d?n.jsx(n.Fragment,{}):u.cloneElement(a,{className:M(a==null?void 0:a.props.className,"el-popconfirm__icon"),style:{color:c}})}function f(w){g&&(console.log(w),g(w))}function j(w){x&&x(w)}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:N,className:M("el-popper is-light el-popover",l),"data-popper-placement":i,...v(),children:[n.jsxs("div",{className:"el-popconfirm",children:[n.jsxs("div",{className:"el-popconfirm__main",children:[n.jsx(m,{}),s]}),n.jsxs("div",{className:"el-popconfirm__action",children:[n.jsx(b,{onClick:f,children:p}),n.jsx(b,{type:"primary",onClick:j,children:h})]})]}),y]})})},Jf=u.forwardRef(g2);Jf.displayName="PopconfirmPopper";const j2=t=>{var F,G;const{style:e,className:r,placement:l="bottom",title:i,width:s=150,icon:o=n.jsx(Ef,{}),iconColor:a="#f90",hideIcon:c=!1,confirmButtonText:d="Yes",cancelButtonText:h="No",onConfirm:p,onCancel:x,children:g}=t,[v,y]=u.useState(!1),N=u.useRef(null),{refs:m,floatingStyles:f,context:j,middlewareData:w}=wc({placement:l,middleware:[gc(12),yc({element:N})],open:v,whileElementsMounted:vc,onOpenChange:y}),C=wl(j),{getReferenceProps:k,getFloatingProps:E}=_c([C]),L=u.cloneElement(u.Children.only(g),{ref:m.setReference,...k()}),O={...e,...f};return n.jsxs(n.Fragment,{children:[v&&El.createPortal(n.jsx(Jf,{ref:m.setFloating,style:O,className:M(r),placement:l,title:i,width:s,icon:o,iconColor:a,hideIcon:c,confirmButtonText:d,cancelButtonText:h,onConfirm:p,onCancel:x,getFloatingProps:E,children:n.jsx("span",{ref:N,className:"el-popper__arrow",style:{position:"absolute",left:(F=w.arrow)==null?void 0:F.x,top:(G=w.arrow)==null?void 0:G.y}})}),document.body),L]})},gs=u.forwardRef(j2);gs.displayName="Popconfirm";const v2=(t,e)=>{const{style:r,className:l,type:i="",closable:s=!1,size:o="",effect:a="light",round:c=!1,children:d}=t;function h(){return s?n.jsx(un,{className:"el-tag__close"}):n.jsx(n.Fragment,{})}return n.jsxs("span",{ref:e,style:r,className:M("el-tag el-tag--light",i?`el-tag--${i}`:"",o?`el-tag--${o}`:"",a?`el-tag--${a}`:"",c?"is-round":"",l),children:[n.jsx("span",{className:"el-tag__content",children:d}),n.jsx(h,{})]})},fe=u.forwardRef(v2);fe.displayName="Tag";const y2=(t,e)=>{const{style:r,className:l,open:i=!1,width:s="50%",title:o,footer:a,onClose:c,showClose:d=!0,header:h,children:p}=t,x={zIndex:2015,...r,display:i?"":"none"};function g(){return h?n.jsx(n.Fragment,{children:h}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-dialog__title",children:o})})}return n.jsx("div",{ref:e,style:x,className:M("el-overlay",l),children:n.jsx("div",{role:"dialog",className:"el-overlay-dialog",children:n.jsxs("div",{className:"el-dialog",style:{"--el-dialog-width":s},children:[n.jsxs("header",{className:"el-dialog__header",children:[n.jsx(g,{}),d&&n.jsx("button",{"aria-label":"Close this dialog",className:"el-dialog__headerbtn",type:"button",onClick:c,children:n.jsx(un,{className:"el-dialog__close"})})]}),n.jsx("div",{id:"el-id-9273-97",className:"el-dialog__body",children:p}),n.jsx("footer",{className:"el-dialog__footer",children:a})]})})})},_l=u.forwardRef(y2);_l.displayName="Dialog";function w2(t,e){const r=u.useRef(e);u.useEffect(()=>{r.current=e},[e]),u.useEffect(()=>{const l=i=>{var s;(((s=t.current)==null?void 0:s.contains(i.target))??!1)||r.current&&r.current()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[t])}const _2=(t,e)=>{const{style:r,className:l,open:i=!1,direction:s="rtl",title:o,onClose:a,header:c,footer:d,withHeader:h=!0,size:p="30%",showClose:x=!0,children:g}=t,v=u.useRef(null),y={...r,display:i?"":"none"};w2(v,()=>{i&&a&&a()});function N(){return c?n.jsx(n.Fragment,{children:c}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-drawer__title",children:o})})}return n.jsx("div",{ref:e,style:y,className:M("el-overlay",l),children:n.jsxs("div",{ref:v,className:M("el-drawer open",s),role:"dialog",style:{width:["ltr","rtl"].includes(s)?p:"",height:["ttb","btt"].includes(s)?p:""},children:[n.jsx("span",{className:"el-drawer__sr-focus"}),h&&n.jsxs("header",{className:"el-drawer__header",children:[n.jsx(N,{}),x&&n.jsx("button",{className:"el-drawer__close-btn",type:"button",onClick:a,children:n.jsx(un,{className:"el-drawer__close"})})]}),n.jsx("div",{className:"el-drawer__body",children:g}),d&&n.jsx("div",{className:"el-drawer__footer",children:d})]})})},An=u.forwardRef(_2);An.displayName="DrawerComponent";const C2=(t,e)=>{const{style:r,className:l,columns:i,data:s,stripe:o=!1,border:a=!1}=t,c={...r,width:"100%"},d=i==null?void 0:i.map(x=>n.jsx("col",{width:x.width})),h=i==null?void 0:i.map(x=>n.jsx("th",{className:"is-leaf el-table__cell",colSpan:1,rowSpan:1,children:n.jsx("div",{className:"cell",children:x.label})})),p=s==null?void 0:s.map((x,g)=>n.jsx("tr",{className:M("el-table__row",{"el-table__row--striped":g%2===1}),children:i==null?void 0:i.map(v=>n.jsx("td",{className:"el-table__cell",rowSpan:1,colSpan:1,children:n.jsx("div",{className:"cell",children:x[v.dataIndex]})}))}));return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:c,className:M("el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none",l,{"el-table--striped":o,"el-table--border":a}),children:[n.jsxs("div",{className:"el-table__inner-wrapper",children:[n.jsxs("div",{className:"hidden-columns",children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]}),n.jsx("div",{className:"el-table__header-wrapper",children:n.jsxs("table",{className:"el-table__header",border:0,cellPadding:"0",cellSpacing:"0",style:{width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("thead",{className:"",children:n.jsx("tr",{className:"",children:h})})]})}),n.jsx("div",{className:"el-table__body-wrapper",children:n.jsxs("div",{className:"el-scrollbar",children:[n.jsx("div",{className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",children:n.jsx("div",{className:"el-scrollbar__view",style:{display:"inline-block",verticalAlign:"middle"},children:n.jsxs("table",{className:"el-table__body",cellSpacing:"0",cellPadding:"0",border:0,style:{tableLayout:"fixed",width:"749px"},children:[n.jsx("colgroup",{children:d}),n.jsx("tbody",{children:p})]})})}),n.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),n.jsx("div",{className:"el-scrollbar__bar is-vertical",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateY(0%)"}})})]})})]}),n.jsx("div",{className:"el-table__column-resize-proxy",style:{display:"none"}})]})})},js=u.forwardRef(C2);js.displayName="TableComponent";function N2(t,e){const r=u.useRef(e);u.useEffect(()=>{r.current=e},[e]),u.useEffect(()=>{var s,o;const l=a=>{r.current&&r.current(a,"mouseenter")},i=a=>{r.current&&r.current(a,"mouseleave")};return(s=t.current)==null||s.addEventListener("mouseenter",l),(o=t.current)==null||o.addEventListener("mouseleave",i),()=>{var a,c;(a=t.current)==null||a.removeEventListener("mouseenter",l),(c=t.current)==null||c.removeEventListener("mouseleave",i)}},[t])}const b2=t=>{const{style:e,className:r,minSize:l=20,children:i}=t,s=u.useRef(null),o=u.useRef(null),a=u.useRef(null),c=u.useRef(null),[d,h]=u.useState(!1),[p,x]=u.useState(!1),[g,v]=u.useState(0),[y,N]=u.useState("translateY(0%)");N2(s,(w,C)=>{h(C==="mouseenter")}),u.useEffect(()=>{if(s.current&&o.current&&a.current){const w=o.current.offsetHeight,C=a.current.scrollHeight,k=C>w;x(k),v(Math.max(w/C*w,l))}},[i]);function m(){if(o.current&&a.current&&c.current){const w=o.current.offsetHeight,C=o.current.scrollHeight,k=o.current.scrollTop,E=c.current.offsetHeight;N(`translateY(${k/(C-w)*((E-g)/g)*100}%)`)}}function f(w){console.log(w)}function j(w){w.stopPropagation()}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:s,style:e,className:M("el-scrollbar",r),children:[n.jsx("div",{ref:o,className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",style:{height:"400px"},onScroll:m,children:n.jsx("div",{ref:a,className:"el-scrollbar__view",children:i})}),n.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:n.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),n.jsx("div",{ref:c,className:"el-scrollbar__bar is-vertical",style:{display:p&&d?"":"none"},onClick:f,children:n.jsx("div",{onClick:j,className:"el-scrollbar__thumb",style:{height:`${g}px`,transform:y}})})]})})},qf=u.forwardRef(b2);qf.displayName="ScrollbarComponent";const S2=(t,e)=>{const{style:r,className:l,value:i="",type:s="danger",max:o=99,isDot:a=!1,children:c}=t;function d(){return typeof i=="number"&&i>o?`${o}+`:i}return n.jsxs("div",{ref:e,style:r,className:M("el-badge",l),children:[c,n.jsx("sup",{className:M("el-badge__content is-fixed",`el-badge__content--${s}`,{"is-dot":a}),children:d()})]})},mt=u.forwardRef(S2);mt.displayName="Badge";const k2=(t,e)=>{const{style:r,className:l}=t;return n.jsxs("div",{ref:e,style:r,className:M(l,"el-rate"),role:"slider",children:[n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),n.jsx("span",{className:"el-rate__item",children:n.jsxs("i",{className:"el-icon el-rate__icon",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:n.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:n.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})})]})},em=u.forwardRef(k2);em.displayName="Rate";const E2=(t,e)=>{const{style:r,className:l,wrap:i=!1,direction:s="horizontal",size:o="small",spacer:a,alignment:c="center",children:d}=t,p={flexWrap:i?"wrap":null,alignItems:c,gap:{large:"16px",default:"12px",small:"8px"}[o]||`${o}px`,...r};function x(g){const{count:v,index:y}=g;return!a||v-1===y?n.jsx(n.Fragment,{}):n.jsx(n.Fragment,{children:n.jsx("span",{children:a})})}return n.jsx("div",{ref:e,style:p,className:M("el-space",`el-space--${s}`,l),children:u.Children.map(d,(g,v)=>n.jsxs(na.Fragment,{children:[n.jsx("div",{className:"el-space__item",children:g}),n.jsx(x,{count:u.Children.count(d),index:v})]},v))})},ze=u.forwardRef(E2);ze.displayName="Space";function T2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{children:"Default"}),n.jsx(b,{type:"primary",children:"Primary"}),n.jsx(b,{type:"success",children:"Success"}),n.jsx(b,{type:"info",children:"Info"}),n.jsx(b,{type:"warning",children:"Warning"}),n.jsx(b,{type:"danger",children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{plain:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{round:!0,children:"Round"}),n.jsx(b,{type:"primary",round:!0,children:"Primary"}),n.jsx(b,{type:"success",round:!0,children:"Success"}),n.jsx(b,{type:"info",round:!0,children:"Info"}),n.jsx(b,{type:"warning",round:!0,children:"Warning"}),n.jsx(b,{type:"danger",round:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{icon:n.jsx(tc,{}),circle:!0}),n.jsx(b,{type:"primary",icon:n.jsx(us,{}),circle:!0}),n.jsx(b,{type:"success",icon:n.jsx(jl,{}),circle:!0}),n.jsx(b,{type:"info",icon:n.jsx(nc,{}),circle:!0}),n.jsx(b,{type:"warning",icon:n.jsx(rc,{}),circle:!0}),n.jsx(b,{type:"danger",icon:n.jsx(lc,{}),circle:!0})]})]})}function B2(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",disabled:!0,children:"Success"}),n.jsx(b,{type:"info",disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",disabled:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{plain:!0,disabled:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,disabled:!0,children:"Danger"})]})]})}function R2(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic link button"}),n.jsx(b,{link:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,children:"Danger"}),n.jsx("p",{children:"Disabled link button"}),n.jsx(b,{link:!0,disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,disabled:!0,children:"Danger"})]})}function L2(){const t=[{type:"",text:"plain"},{type:"primary",text:"primary"},{type:"success",text:"success"},{type:"info",text:"info"},{type:"warning",text:"warning"},{type:"danger",text:"danger"}],e=t.map((i,s)=>n.jsx(b,{type:i.type,text:!0,children:i.text},s)),r=t.map((i,s)=>n.jsx(b,{type:i.type,text:!0,bg:!0,children:i.text},s)),l=t.map((i,s)=>n.jsx(b,{type:i.type,text:!0,disabled:!0,children:i.text},s));return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic text button"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:e}),n.jsx("p",{children:"Background color always on"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:r}),n.jsx("p",{children:"Disabled text button"}),n.jsx("div",{className:"flex justify-space-between flex-wrap gap-4",children:l})]})}function pu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Button 按钮"}),`
`,`
`,n.jsx(e.p,{children:"常用的操作按钮。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"type"}),"、",n.jsx(e.code,{children:"plain"}),"、",n.jsx(e.code,{children:"round"})," 和 ",n.jsx(e.code,{children:"circle"})," 来定义按钮的样式。"]}),`
`,n.jsx(T,{name:"ButtonBasic",children:n.jsx(T2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.code,{children:"disabled"})," 属性来定义按钮是否被禁用。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"disabled"})," 属性来控制按钮是否为禁用状态。 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"})," 类型的值。"]}),`
`,n.jsx(T,{name:"ButtonDisabled",children:n.jsx(B2,{})}),`
`,n.jsx(e.h2,{children:"链接按钮"}),`
`,n.jsx(T,{name:"ButtonLink",children:n.jsx(R2,{})}),`
`,n.jsx(e.h2,{children:"文字按钮"}),`
`,n.jsx(e.p,{children:"没有边框和背景色的按钮。"}),`
`,n.jsx(T,{name:"ButtonText",children:n.jsx(L2,{})}),`
`,n.jsx(e.h2,{children:"Button API"}),`
`,n.jsx(e.h3,{children:"Button Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' 'success' 'warning' 'danger' 'info' 'text'(delete)"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"plain"}),n.jsx(e.td,{children:"是否为朴素按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"text"}),n.jsx(e.td,{children:"是否为文字按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"bg"}),n.jsx(e.td,{children:"是否显示文字按钮背景颜色"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:"是否为链接按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"是否为圆角按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"circle"}),n.jsx(e.td,{children:"是否为圆形按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"按钮是否为禁用状态"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function D2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pu,{...t})}):pu(t)}function P2(){return n.jsx(n.Fragment,{children:n.jsx("table",{className:"demo-border",children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"text",children:"Name"}),n.jsx("td",{className:"text",children:"Thickness"}),n.jsx("td",{className:"line",children:"Demo"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"text",children:"Solid"}),n.jsx("td",{className:"text",children:"1px"}),n.jsx("td",{className:"line",children:n.jsx("div",{})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"text",children:"Dashed"}),n.jsx("td",{className:"text",children:"2px"}),n.jsx("td",{className:"line",children:n.jsx("div",{className:"dashed"})})]})]})})})}function A2(){const t=[{name:"No Radius",type:""},{name:"Small Radius",type:"small"},{name:"Large Radius",type:"base"},{name:"Round Radius",type:"round"}];function e(r){return((i,s)=>getComputedStyle(document.documentElement).getPropertyValue(`--el-${i}-${s}`))("border-radius",r)}return n.jsx(n.Fragment,{children:n.jsx(ee,{gutter:12,className:"demo-radius",children:t.map((r,l)=>n.jsxs(I,{span:6,children:[n.jsx("div",{className:"title",children:r.name}),n.jsx("div",{className:"value",children:n.jsxs("code",{children:["border-radius: ",e(r.type)||"0px"]})}),n.jsx("div",{className:"radius",style:{borderRadius:r.type?`var(--el-border-radius-${r.type})`:""}})]},l))})})}function M2(){const t=[{name:"Basic Shadow",type:""},{name:"Light Shadow",type:"light"},{name:"Lighter Shadow",type:"lighter"},{name:"Dark Shadow",type:"dark"}],e=r=>`--el-box-shadow${r?"-":""}${r}`;return n.jsx(n.Fragment,{children:n.jsx("div",{className:"border-shadow",children:n.jsx("div",{className:"flex justify-between items-center flex-wrap",children:t.map((r,l)=>n.jsxs("div",{className:"flex flex-col justify-center items-center",children:[n.jsx("div",{className:"inline-flex",style:{boxShadow:`var(${e(r.type)})`}}),n.jsx("span",{className:"demo-shadow-text",children:r.name}),n.jsx("code",{className:"xs",children:e(r.type)})]},l))})})})}function fu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Border 边框"}),`
`,`
`,n.jsx(e.p,{children:"我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。"}),`
`,n.jsx(e.h2,{children:"边框样式"}),`
`,n.jsx(e.p,{children:"我们提供了以下几种边框样式，以供选择。"}),`
`,n.jsx(T,{name:"BorderStyle",children:n.jsx(P2,{})}),`
`,n.jsx(e.h2,{children:"圆角"}),`
`,n.jsx(e.p,{children:"我们提供了以下几种圆角样式，以供选择。"}),`
`,n.jsx(T,{name:"BorderRadius",children:n.jsx(A2,{})}),`
`,n.jsx(e.h2,{children:"阴影"}),`
`,n.jsx(e.p,{children:"我们提供了以下几种投影样式，以供选择。"}),`
`,n.jsx(T,{name:"BorderShadow",children:n.jsx(M2,{})})]})}function I2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fu,{...t})}):fu(t)}function F2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"})]})})})}function z2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"}),n.jsx(fs,{children:"Footer"})]})})})}function O2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsx(gn,{children:"Main"})]})})})}function $2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsx(gn,{children:"Main"})]})]})})})}function H2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx(gn,{children:"Main"}),n.jsx(fs,{children:"Footer"})]})]})]})})})}function U2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"})]})]})})})}function W2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(Je,{children:[n.jsx(br,{width:"200px",children:"Aside"}),n.jsxs(Je,{children:[n.jsx($n,{children:"Header"}),n.jsx(gn,{children:"Main"}),n.jsx(fs,{children:"Footer"})]})]})})})}function mu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(T,{name:"ContainerBasic",children:n.jsx(F2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(T,{name:"ContainerBasic1",children:n.jsx(z2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(T,{name:"ContainerBasic2",children:n.jsx(O2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(T,{name:"ContainerBasic3",children:n.jsx($2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(T,{name:"ContainerBasic4",children:n.jsx(H2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(T,{name:"ContainerBasic5",children:n.jsx(U2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(T,{name:"ContainerBasic6",children:n.jsx(W2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]})]})}function V2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(mu,{...t})}):mu(t)}function X2(){return n.jsxs(n.Fragment,{children:[n.jsx(us,{style:{fontSize:"20px"}}),n.jsx(tc,{style:{fontSize:"20px"}}),n.jsx(jl,{style:{fontSize:"20px"}}),n.jsx(nc,{style:{fontSize:"20px"}}),n.jsx(rc,{style:{fontSize:"20px"}}),n.jsx(lc,{style:{fontSize:"20px"}}),n.jsx(hs,{style:{fontSize:"20px"}}),n.jsx(ic,{style:{fontSize:"20px"}}),n.jsx(sc,{style:{fontSize:"20px"}}),n.jsx(oc,{style:{fontSize:"20px"}}),n.jsx(Tl,{style:{fontSize:"20px"}}),n.jsx(ps,{style:{fontSize:"20px"}}),n.jsx(Nr,{style:{fontSize:"20px"}}),n.jsx(ac,{style:{fontSize:"20px"}}),n.jsx(cc,{style:{fontSize:"20px"}}),n.jsx(dc,{style:{fontSize:"20px"}}),n.jsx(un,{style:{fontSize:"20px"}}),n.jsx(uc,{style:{fontSize:"20px"}})]})}function xu(t){const e={h1:"h1",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Icon"}),`
`,`
`,n.jsx(T,{name:"IconBasic",children:n.jsx(X2,{})})]})}function G2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xu,{...t})}):xu(t)}function Q2(){return n.jsxs(n.Fragment,{children:[n.jsx(ee,{children:n.jsx(I,{span:24,children:n.jsx("div",{className:"grid-content ep-bg-purple-dark"})})}),n.jsxs(ee,{children:[n.jsx(I,{span:12,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:12,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(ee,{children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]})]}),n.jsxs(ee,{children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(ee,{children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(I,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]})]})}function K2(){return n.jsx(n.Fragment,{children:n.jsxs(ee,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})})}function Y2(){return n.jsxs(n.Fragment,{children:[n.jsxs(ee,{gutter:20,children:[n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{gutter:20,children:[n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{gutter:20,children:[n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function Z2(){return n.jsxs(n.Fragment,{children:[n.jsxs(ee,{gutter:20,children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{gutter:20,children:[n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsx(ee,{gutter:20,children:n.jsx(I,{span:12,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})})]})}function J2(){return n.jsxs(n.Fragment,{children:[n.jsxs(ee,{className:"row-bg",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{className:"row-bg",justify:"center",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{className:"row-bg",justify:"end",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{className:"row-bg",justify:"space-between",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{className:"row-bg",justify:"space-around",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(ee,{className:"row-bg",justify:"space-evenly",children:[n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function q2(){return n.jsx(n.Fragment,{children:n.jsxs(ee,{gutter:10,children:[n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(I,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(I,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})})]})})}function gu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Layout 布局"}),`
`,`
`,n.jsx(e.p,{children:"通过基础的 24 分栏，迅速简便地创建布局。"}),`
`,n.jsx(e.h2,{children:"基础布局"}),`
`,n.jsx(e.p,{children:"使用列创建基础网格布局。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"Row"})," 和 ",n.jsx(e.code,{children:"Col"})," 组件，并通过 col 组件的 ",n.jsx(e.code,{children:"Span"})," 属性我们就可以自由地组合布局。"]}),`
`,n.jsx(T,{name:"LayoutBasic",children:n.jsx(Q2,{})}),`
`,n.jsx(e.h2,{children:"分栏间隔"}),`
`,n.jsx(e.p,{children:"支持列间距。"}),`
`,n.jsx(e.p,{children:"行提供 gutter 属性来指定列之间的间距，其默认值为0。"}),`
`,n.jsx(T,{name:"LayoutGutter",children:n.jsx(K2,{})}),`
`,n.jsx(e.h2,{children:"混合布局"}),`
`,n.jsx(e.p,{children:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}),`
`,n.jsx(T,{name:"LayoutMix",children:n.jsx(Y2,{})}),`
`,n.jsx(e.h2,{children:"列偏移"}),`
`,n.jsx(e.p,{children:"您可以指定列偏移量。"}),`
`,n.jsxs(e.p,{children:["通过制定 col 组件的 ",n.jsx(e.code,{children:"offset"})," 属性可以指定分栏偏移的栏数。"]}),`
`,n.jsx(T,{name:"LayoutOffset",children:n.jsx(Z2,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"默认使用 flex 布局来对分栏进行灵活的对齐。"}),`
`,n.jsxs(e.p,{children:["您可以通过 ",n.jsx(e.code,{children:"justify"})," 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。"]}),`
`,n.jsx(T,{name:"LayoutJustify",children:n.jsx(J2,{})}),`
`,n.jsx(e.h2,{children:"响应式布局"}),`
`,n.jsx(e.p,{children:"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"}),`
`,n.jsx(T,{name:"LayoutBootstrap",children:n.jsx(q2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"span"}),n.jsx(e.td,{children:"栅格占据的列数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"offset"}),n.jsx(e.td,{children:"栅格左侧的间隔格数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xs"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"sm"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"md"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥992px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lg"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1200px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xl"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1920px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function ew(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gu,{...t})}):gu(t)}function tw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(ke,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(ke,{type:"primary",children:"primary"}),n.jsx(ke,{type:"success",children:"success"}),n.jsx(ke,{type:"warning",children:"warning"}),n.jsx(ke,{type:"danger",children:"danger"}),n.jsx(ke,{type:"info",children:"info"})]})})}function nw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(ke,{disabled:!0,children:"default"}),n.jsx(ke,{type:"primary",disabled:!0,children:"primary"}),n.jsx(ke,{type:"success",disabled:!0,children:"success"}),n.jsx(ke,{type:"warning",disabled:!0,children:"warning"}),n.jsx(ke,{type:"danger",disabled:!0,children:"danger"}),n.jsx(ke,{type:"info",disabled:!0,children:"info"})]})})}function rw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(ke,{underline:!1,children:"Without Underline"}),n.jsx(ke,{children:"With Underline"})]})})}function lw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(ke,{icon:n.jsx(us,{}),children:"Edit"}),n.jsxs(ke,{children:["Check",n.jsx(hs,{className:"el-icon--right"})]})]})})}function ju(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(T,{name:"LinkBasic",children:n.jsx(tw,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(T,{name:"LinkDisabled",children:n.jsx(nw,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(T,{name:"LinkUnderline",children:n.jsx(rw,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(T,{name:"LinkIcon",children:n.jsx(lw,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]})]})}function iw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ju,{...t})}):ju(t)}function sw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"mx-1",children:"Default"}),n.jsx(Ke,{className:"mx-1",type:"primary",children:"Primary"}),n.jsx(Ke,{className:"mx-1",type:"success",children:"Success"}),n.jsx(Ke,{className:"mx-1",type:"info",children:"Info"}),n.jsx(Ke,{className:"mx-1",type:"warning",children:"Warning"}),n.jsx(Ke,{className:"mx-1",type:"danger",children:"Danger"})]})})}function ow(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"mx-1",size:"large",children:"Large"}),n.jsx(Ke,{className:"mx-1",children:"Default"}),n.jsx(Ke,{className:"mx-1",size:"small",children:"Small"})]})})}function aw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ke,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),n.jsx(ee,{className:"w-150px mb-2",children:n.jsx(Ke,{truncated:!0,children:"Squeezed by parent element"})}),n.jsxs(Ke,{lineClamp:2,children:["The -webkit-line-clamp CSS property",n.jsx("br",{}),"allows limiting of the contents of",n.jsx("br",{}),"a block to the specified number of lines."]})]})})}function vu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Text"}),`
`,`
`,n.jsx(e.p,{children:"文本的常见操作"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,n.jsx(T,{name:"TextBasic",children:n.jsx(sw,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"})]}),`
`,n.jsx(T,{name:"TextSize",children:n.jsx(ow,{})}),`
`,n.jsx(e.h2,{children:"省略"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",n.jsx(e.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,n.jsx(T,{name:"TextTruncated",children:n.jsx(aw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"大小"}),n.jsx(e.td,{children:"'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"truncated"}),n.jsx(e.td,{children:"显示省略号"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lineClamp"}),n.jsx(e.td,{children:"最大行数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function cw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vu,{...t})}):vu(t)}function dw(){return n.jsx(n.Fragment,{children:n.jsx(qf,{height:"400px",children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((t,e)=>n.jsx("p",{className:"scrollbar-demo-item",children:t},e))})})}function yu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Scrollbar 滚动条"}),`
`,`
`,n.jsx(e.p,{children:"用于替换浏览器原生滚动条。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"height"})," 属性设置滚动条高度，若不设置则根据父容器高度自适应。"]}),`
`,n.jsx(T,{name:"ScrollbarBasic",children:n.jsx(dw,{})})]})}function uw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yu,{...t})}):yu(t)}function hw(){return n.jsx(n.Fragment,{children:n.jsx(ze,{wrap:!0,children:[1,2,3].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})})}function pw(){return n.jsx(n.Fragment,{children:n.jsx(ze,{direction:"vertical",children:[1,2,3].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})})}function fw(){return n.jsxs(n.Fragment,{children:[n.jsx(ze,{wrap:!0,size:"large",children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:"default",children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:"small",children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})]})}function mw(){return n.jsxs(n.Fragment,{children:[n.jsx(ze,{wrap:!0,size:0,children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:50,children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))}),n.jsx(ze,{wrap:!0,size:100,children:[1,2].map((t,e)=>n.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:t},e))})]})}function xw(){return n.jsx(n.Fragment,{children:n.jsx(ze,{wrap:!0,children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((t,e)=>n.jsx("div",{children:n.jsxs(b,{text:!0,children:[" Text button ",t," "]})},e))})})}function gw(){return n.jsx(n.Fragment,{children:n.jsxs(ze,{size:10,spacer:"|",children:[n.jsx(b,{children:" button 1 "}),n.jsx(b,{children:" button 2 "})]})})}function jw(){return n.jsx(n.Fragment,{children:n.jsxs(ze,{size:10,spacer:n.jsx(jt,{direction:"vertical"}),children:[n.jsx(b,{children:" button 1 "}),n.jsx(b,{children:" button 2 "})]})})}function vw(){return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px",marginBottom:"10px"},children:n.jsxs(ze,{children:["string",n.jsx(b,{children:" button "}),n.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"1"})]})}),n.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px",marginBottom:"10px"},children:n.jsxs(ze,{alignment:"flex-start",children:["string",n.jsx(b,{children:" button "}),n.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"2"})]})}),n.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px"},children:n.jsxs(ze,{alignment:"flex-end",children:["string",n.jsx(b,{children:" button "}),n.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"3"})]})})]})}function wu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Space 间距"}),`
`,`
`,n.jsx(e.p,{children:"虽然我们拥有 Divider 组件，但很多时候我们需要不是一个被 Divider 组件 分割开的页面结构，因此我们会重复的使用很多的 Divider 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"最基础的用法，通过这个组件来给组件之间提供统一的间距。"}),`
`,n.jsx(e.p,{children:"通过间距组件来给多个组件之间提供间距"}),`
`,n.jsx(T,{name:"SpaceBasic",children:n.jsx(hw,{})}),`
`,n.jsx(e.h2,{children:"垂直布局"}),`
`,n.jsx(e.p,{children:"使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制."}),`
`,n.jsx(e.p,{children:"我们也提供垂直布局方式。"}),`
`,n.jsx(T,{name:"SpaceDirection",children:n.jsx(pw,{})}),`
`,n.jsx(e.h2,{children:"控制间距的大小"}),`
`,n.jsx(e.p,{children:"通过调整 size 的值来控制间距的大小"}),`
`,n.jsx(e.p,{children:"使用内置的 small、default、large 来设置间距大小，分别对应 8px、12px 和 16px 的间距。 默认的间距大小为 small，也就是 8px。"}),`
`,n.jsx(e.p,{children:"您也可以通过自定义的 size 来控制大小， 参见下一个部分。"}),`
`,n.jsx(T,{name:"SpaceSize",children:n.jsx(fw,{})}),`
`,n.jsx(e.h2,{children:"自定义 Size"}),`
`,n.jsx(e.p,{children:"很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。"}),`
`,n.jsx(T,{name:"SpaceSize2",children:n.jsx(mw,{})}),`
`,n.jsx(e.h2,{children:"自动换行"}),`
`,n.jsx(e.p,{children:"在 **水平 (horizontal) ** 模式下，通过使用 wrap（布尔类型）来控制自动换行行为。"}),`
`,n.jsx(e.p,{children:"利用 wrap 属性控制换行"}),`
`,n.jsx(T,{name:"SpaceWrap",children:n.jsx(xw,{})}),`
`,n.jsx(e.h2,{children:"行间分隔符"}),`
`,n.jsx(e.p,{children:"有时候，仅仅在行间加空白并不能满足我们的日常需求，此时分隔符 (spacer) 就可以发挥非常好的作用了。"}),`
`,n.jsx(e.h2,{children:"字母数字类型分隔符"}),`
`,n.jsx(T,{name:"SpaceSpacer",children:n.jsx(gw,{})}),`
`,n.jsx(e.h2,{children:"分隔符还可以是 ReactNode 类型"}),`
`,n.jsx(T,{name:"SpaceSpacer2",children:n.jsx(jw,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items 一致。"}),`
`,n.jsx(e.p,{children:"使用 alignment 属性来对齐"}),`
`,n.jsx(T,{name:"SpaceAlignment",children:n.jsx(vw,{})})]})}function yw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wu,{...t})}):wu(t)}function ww(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{defaultChecked:!0}),n.jsx(pe,{defaultChecked:!0,className:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}})]})}function _w(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{defaultChecked:!0,size:"large",activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(pe,{defaultChecked:!0,activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(pe,{defaultChecked:!0,size:"small",activeText:"Open",inactiveText:"Close"})]})}function Cw(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{defaultChecked:!0,className:"mb-2",activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(pe,{defaultChecked:!0,className:"mb-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(pe,{defaultChecked:!0,inlinePrompt:!0,activeText:"是",inactiveText:"否"}),n.jsx(pe,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Y",inactiveText:"N"}),n.jsx(pe,{defaultChecked:!0,className:"ml-2",width:60,inlinePrompt:!0,activeText:"超出省略",inactiveText:"超出省略"}),n.jsx(pe,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"完整展示多个内容",inactiveText:"多个内容"})]})}function Nw(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{defaultChecked:!0,activeIcon:n.jsx(jl,{}),inactiveIcon:n.jsx(un,{})}),n.jsx("br",{}),n.jsx(pe,{defaultChecked:!0,className:"mt-2",style:{marginLeft:"24px"},inlinePrompt:!0,activeIcon:n.jsx(jl,{className:"is-icon"}),inactiveIcon:n.jsx(un,{className:"is-icon"})})]})}function bw(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{defaultChecked:!0,disabled:!0}),n.jsx(pe,{defaultChecked:!0,className:"ml-2"})]})}function Sw(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{defaultChecked:!0,loading:!0}),n.jsx(pe,{loading:!0,className:"ml-2"})]})}function kw(){const[t,e]=u.useState(!1),[r,l]=u.useState(!1);function i(){return e(!0),new Promise(o=>{setTimeout(()=>(e(!1),console.log("Switch success"),o(!0)),1e3)})}function s(){return l(!0),new Promise((o,a)=>{setTimeout(()=>(l(!1),console.log("Switch failed"),a(new Error("Error"))),1e3)})}return n.jsxs(n.Fragment,{children:[n.jsx(pe,{loading:t,beforeChange:i}),n.jsx(pe,{className:"ml-2",loading:r,beforeChange:s})]})}function Ew(){return n.jsxs(n.Fragment,{children:[n.jsx(pe,{defaultChecked:!0,activeActionIcon:n.jsx(hs,{}),inactiveActionIcon:n.jsx(oc,{})}),n.jsx("br",{}),n.jsx(pe,{defaultChecked:!0,activeActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-active-action",children:"T"})}),inactiveActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-inactive-action",children:"F"})})})]})}function _u(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Switch 开关"}),`
`,`
`,n.jsx(e.p,{children:"表示两种相互对立的状态间的切换，多用于触发「开/关」。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。"}),`
`,n.jsx(T,{name:"SwitchBasic",children:n.jsx(ww,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsx(T,{name:"SwitchSize",children:n.jsx(_w,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制文本是否显示在点内。"]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。"]}),`
`,n.jsx(T,{name:"SwitchText",children:n.jsx(Cw,{})}),`
`,n.jsx(e.h2,{children:"显示自定义图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-icon"})," 和 ",n.jsx(e.code,{children:"active-icon"})," 属性来添加图标。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制图标显示在点内。"]}),`
`,n.jsx(T,{name:"SwitchIcon",children:n.jsx(Nw,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"disabled"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即可禁用。"]}),`
`,n.jsx(T,{name:"SwitchDisabled",children:n.jsx(bw,{})}),`
`,n.jsx(e.h2,{children:"加载状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"loading"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即加载中状态。"]}),`
`,n.jsx(T,{name:"SwitchLoading",children:n.jsx(Sw,{})}),`
`,n.jsx(e.h2,{children:"阻止切换"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"beforeChange"}),"属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"]}),`
`,n.jsx(T,{name:"SwitchBeforeChange",children:n.jsx(kw,{})}),`
`,n.jsx(e.h2,{children:"自定义动作图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-action-icon"})," 和 ",n.jsx(e.code,{children:"active-action-icon"})," 属性来添加图标。"]}),`
`,n.jsx(T,{name:"SwitchActionIcon",children:n.jsx(Ew,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"defaultChecked"}),n.jsx(e.td,{children:"初始是否选中"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"switch 的大小"}),n.jsx(e.td,{children:"'large' / 'small'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"switch 的宽度"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inlinePrompt"}),n.jsx(e.td,{children:"无论图标或文本是否显示在点内，只会呈现文本的第一个字符"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeIcon"}),n.jsx(e.td,{children:"switch 状态为 on 时所显示图标，设置此项会忽略 activeText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveIcon"}),n.jsx(e.td,{children:"switch 状态为 off 时所显示图标，设置此项会忽略 inactiveText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeActionIcon"}),n.jsx(e.td,{children:"on状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveActionIcon"}),n.jsx(e.td,{children:"off状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeText"}),n.jsx(e.td,{children:"switch 打开时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveText"}),n.jsx(e.td,{children:"switch 的状态为 off 时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"beforeChange"}),n.jsx(e.td,{children:"switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"}),n.jsx(e.td,{children:"boolean / Function"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Tw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_u,{...t})}):_u(t)}function Bw(){return n.jsx(n.Fragment,{children:n.jsx(em,{})})}function Cu(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Rate 评分"}),`
`,`
`,n.jsx(e.p,{children:"用于评分"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。 三个等级所对应的颜色用 colors 属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。"}),`
`,n.jsx(T,{name:"RateBasic",children:n.jsx(Bw,{})})]})}function Rw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cu,{...t})}):Cu(t)}function Lw(){const t="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",e="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",r=["small","","large"],l=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(St,{size:s,src:t})},o)),i=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(St,{shape:"square",size:s,src:e})},o));return n.jsx(n.Fragment,{children:n.jsxs(ee,{className:"common-avatar",children:[n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"circle"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(St,{size:50,src:t})}),l]})]}),n.jsxs(I,{span:12,children:[n.jsx("div",{className:"sub-title",children:"square"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(St,{shape:"square",size:50,src:e})}),i]})]})]})})}function Dw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-avatar",children:[n.jsx("div",{children:n.jsx(St,{icon:n.jsx(kf,{})})}),n.jsx("div",{children:n.jsx(St,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})}),n.jsx("div",{children:n.jsx(St,{children:" user "})})]})})}function Pw(){function t(){console.log("error")}return n.jsx(n.Fragment,{children:n.jsx("div",{className:"demo-type",children:n.jsx(St,{size:60,src:"https://empty",onError:t,children:n.jsx("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"})})})})}function Aw(){const t=["fill","contain","cover","none","scale-down"],e="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",r=t.map((l,i)=>n.jsxs("div",{className:"block",children:[n.jsx("span",{className:"title",children:l}),n.jsx(St,{shape:"square",size:100,fit:l,src:e})]},i));return n.jsx(n.Fragment,{children:n.jsx("div",{className:"avatar-fit",children:r})})}function Nu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Avatar 头像"}),`
`,`
`,n.jsx(e.p,{children:"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"shape"})," 和 ",n.jsx(e.code,{children:"size"})," 属性来设置 Avatar 的形状和大小。"]}),`
`,n.jsx(T,{name:"AvatarBasic",children:n.jsx(Lw,{})}),`
`,n.jsx(e.h2,{children:"展示类型"}),`
`,n.jsx(e.p,{children:"支持使用图片，图标或者文字作为 Avatar。"}),`
`,n.jsx(T,{name:"AvatarType",children:n.jsx(Dw,{})}),`
`,n.jsx(e.h2,{children:"回退行为"}),`
`,n.jsx(e.p,{children:"图片加载失败时的回退行为。"}),`
`,n.jsx(T,{name:"AvatarError",children:n.jsx(Pw,{})}),`
`,n.jsx(e.h2,{children:"适应容器"}),`
`,n.jsx(e.p,{children:"当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致"}),`
`,n.jsx(T,{name:"AvatarFit",children:n.jsx(Aw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"设置 Avatar 的图标类型，具体参考 Icon 组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Avatar 大小"}),n.jsx(e.td,{children:"number / 'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"shape"}),n.jsx(e.td,{children:"Avatar 形状"}),n.jsx(e.td,{children:"'circle' / 'square'"}),n.jsx(e.td,{children:"circle"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"Avatar 图片的源地址"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"fit"}),n.jsx(e.td,{children:"当展示类型为图片的时候，设置图片如何适应容器"}),n.jsx(e.td,{children:"'fill' / 'contain' / 'cover' / 'none' / 'scale-down'"}),n.jsx(e.td,{children:"cover"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"error"}),n.jsx(e.td,{children:"图片加载失败时触发"}),n.jsx(e.td,{children:"() => void"})]})})]})]})}function Mw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nu,{...t})}):Nu(t)}function Iw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(mt,{value:12,className:"item",children:n.jsx(b,{children:"comments"})}),n.jsx(mt,{value:3,className:"item",children:n.jsx(b,{children:"replies"})}),n.jsx(mt,{value:1,className:"item",type:"primary",children:n.jsx(b,{children:"comments"})}),n.jsx(mt,{value:2,className:"item",type:"warning",children:n.jsx(b,{children:"replies"})})]})})}function Fw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(mt,{value:200,max:99,className:"item",children:n.jsx(b,{children:"comments"})}),n.jsx(mt,{value:100,max:10,className:"item",children:n.jsx(b,{children:"replies"})})]})})}function zw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(mt,{value:"new",className:"item",children:n.jsx(b,{children:"comments"})}),n.jsx(mt,{value:"hot",className:"item",children:n.jsx(b,{children:"replies"})})]})})}function Ow(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-badge",children:[n.jsx(mt,{isDot:!0,className:"item",children:"query"}),n.jsx(mt,{isDot:!0,className:"item",children:n.jsx(b,{className:"share-button",icon:n.jsx(uc,{}),type:"primary"})})]})})}function bu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Badge 徽章"}),`
`,`
`,n.jsx(e.p,{children:"按钮和图标上的数字或状态标记。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以用来展示新消息的数量。"}),`
`,n.jsx(e.p,{children:"数量值可接受 Number 或 String。"}),`
`,n.jsx(T,{name:"BadgeBasic",children:n.jsx(Iw,{})}),`
`,n.jsx(e.h2,{children:"最大值"}),`
`,n.jsx(e.p,{children:"你还可以自定义最大值"}),`
`,n.jsx(e.p,{children:"由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。"}),`
`,n.jsx(T,{name:"BadgeMax",children:n.jsx(Fw,{})}),`
`,n.jsx(e.h2,{children:"自定义显示内容"}),`
`,n.jsx(e.p,{children:"你也可以展示除数字以外你想要展示的任何值。"}),`
`,n.jsx(e.p,{children:"当 value 是 String 时，可以显示自定义文字。"}),`
`,n.jsx(T,{name:"BadgeValue",children:n.jsx(zw,{})}),`
`,n.jsx(e.h2,{children:"小红点"}),`
`,n.jsx(e.p,{children:"通过一个小红点标记来告知用户有新内容。"}),`
`,n.jsx(e.p,{children:"使用 is-dot 属性。 是个布尔值。"}),`
`,n.jsx(T,{name:"BadgeIsDot",children:n.jsx(Ow,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"value"}),n.jsx(e.td,{children:"显示值"}),n.jsx(e.td,{children:"string / number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"max"}),n.jsx(e.td,{children:"最大值，超过最大值会显示 max+。 只有当 value 是数字类型时起作用。"}),n.jsx(e.td,{children:"number"}),n.jsx(e.td,{children:"99"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"isDot"}),n.jsx(e.td,{children:"是否显示小圆点。"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"badge type."}),n.jsx(e.td,{children:"'primary' | 'success' | 'warning' | 'danger' | 'info'"}),n.jsx(e.td,{children:"danger"})]})]})]})]})}function $w(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bu,{...t})}):bu(t)}function Hw(){return n.jsx(n.Fragment,{children:n.jsxs(Bf,{children:[n.jsxs(Fr,{title:"Consistency",name:"1",children:[n.jsx("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),n.jsx("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]}),n.jsxs(Fr,{title:"Feedback",name:"2",children:[n.jsx("div",{children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"}),n.jsx("div",{children:"Visual feedback: reflect current state by updating or rearranging elements of the page."})]}),n.jsxs(Fr,{title:"Efficiency",name:"3",children:[n.jsx("div",{children:"Simplify the process: keep operating process simple and intuitive;"}),n.jsx("div",{children:"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"}),n.jsx("div",{children:"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."})]}),n.jsxs(Fr,{title:"Controllability",name:"4",children:[n.jsx("div",{children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"}),n.jsx("div",{children:"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})]})})}function Su(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Collapse 折叠面板"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可同时展开多个面板，面板之间不影响"}),`
`,n.jsx(T,{name:"CollapseBasic",children:n.jsx(Hw,{})})]})}function Uw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Su,{...t})}):Su(t)}function Ww(){function t(e){return e===100?"Full":`${e}%`}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(bt,{percentage:50}),n.jsx(bt,{percentage:100,format:t}),n.jsx(bt,{percentage:100,status:"success"}),n.jsx(bt,{percentage:100,status:"warning"}),n.jsx(bt,{percentage:50,status:"exception"})]})})}function Vw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(bt,{textInside:!0,strokeWidth:26,percentage:70}),n.jsx(bt,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),n.jsx(bt,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),n.jsx(bt,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function ku(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Progress 进度条"}),`
`,`
`,n.jsx(e.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,n.jsx(e.h2,{children:"直线进度条"}),`
`,n.jsxs(e.p,{children:["Progress 组件设置 ",n.jsx(e.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",n.jsx(e.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",n.jsx(e.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,n.jsx(T,{name:"ProgressBasic",children:n.jsx(Ww,{})}),`
`,n.jsx(e.h2,{children:"进度条内显示百分比标识"}),`
`,n.jsx(e.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,n.jsxs(e.p,{children:["Progress 组件可通过 ",n.jsx(e.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",n.jsx(e.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,n.jsx(T,{name:"ProgressTextInside",children:n.jsx(Vw,{})})]})}function Xw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ku,{...t})}):ku(t)}function Gw(){return n.jsx(n.Fragment,{children:n.jsxs(ee,{children:[n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"success",title:"Success Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"warning",title:"Warning Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"error",title:"Error Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(I,{sm:12,lg:6,children:n.jsx(nr,{icon:"info",title:"Info Tip",subTitle:n.jsx("p",{children:"Using slot as subtitle"}),extra:n.jsx(b,{type:"primary",children:"Back"})})})]})})}function Qw(){return n.jsx(n.Fragment,{children:n.jsx(nr,{icon:n.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),title:"404",subTitle:"Sorry, request error",extra:n.jsx(b,{type:"primary",children:"Back"})})})}function Eu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Result 结果"}),`
`,`
`,n.jsx(e.p,{children:"用于对用户的操作结果或者异常状态做反馈。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(T,{name:"ResultBasic",children:n.jsx(Gw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(T,{name:"ResultIcon",children:n.jsx(Qw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"result 组件的图标类型"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error' / ReactNode"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"result 组件的标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"subTitle"}),n.jsx(e.td,{children:"result 组件的副标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"extra"}),n.jsx(e.td,{children:"内容额外区域的内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"ReactNode"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Kw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Eu,{...t})}):Eu(t)}function Yw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(js,{columns:t,data:e})})}function Zw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(js,{columns:t,data:e,stripe:!0})})}function Jw(){const t=[{key:"date",dataIndex:"date",label:"Date",width:180},{key:"name",dataIndex:"name",label:"Name",width:180},{key:"address",dataIndex:"address",label:"Address"}],e=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return n.jsx(n.Fragment,{children:n.jsx(js,{columns:t,data:e,border:!0})})}function Tu(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Table 表格"}),`
`,`
`,n.jsx(e.p,{children:"用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。"}),`
`,n.jsx(e.h2,{children:"基础表格"}),`
`,n.jsx(e.p,{children:"基础的表格展示用法。"}),`
`,n.jsx(T,{name:"TableBasic",children:n.jsx(Yw,{})}),`
`,n.jsx(e.h2,{children:"带斑马纹表格"}),`
`,n.jsx(e.p,{children:"使用带斑马纹的表格，可以更容易区分出不同行的数据。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"stripe"})," 可以创建带斑马纹的表格。 如果 ",n.jsx(e.code,{children:"true"}),", 表格将会带有斑马纹。"]}),`
`,n.jsx(T,{name:"TableStripe",children:n.jsx(Zw,{})}),`
`,n.jsx(e.h2,{children:"带边框表格"}),`
`,n.jsxs(e.p,{children:["默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 ",n.jsx(e.code,{children:"border"})," 属性，把该属性设置为 ",n.jsx(e.code,{children:"true"})," 即可启用。"]}),`
`,n.jsx(T,{name:"TableBorder",children:n.jsx(Jw,{})}),`
`,n.jsx(e.h2,{children:"Table 属性"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"columns"}),n.jsx(e.td,{children:"表格列的配置描述"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"data"}),n.jsx(e.td,{children:"显示的数据"}),n.jsx(e.td,{children:"any[]"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"stripe"}),n.jsx(e.td,{children:"是否为斑马纹 table"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border"}),n.jsx(e.td,{children:"是否带有纵向边框"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function qw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Tu,{...t})}):Tu(t)}function e4(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{children:"Tag 1"}),n.jsx(fe,{className:"ml-2",type:"success",children:"Tag 2"}),n.jsx(fe,{className:"ml-2",type:"info",children:"Tag 3"}),n.jsx(fe,{className:"ml-2",type:"warning",children:"Tag 4"}),n.jsx(fe,{className:"ml-2",type:"danger",children:"Tag 5"})]})}function t4(){const t=[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}].map(e=>n.jsx(fe,{className:"mx-1",closable:!0,type:e.type,children:e.name}));return n.jsx(n.Fragment,{children:t})}function n4(){return n.jsxs(n.Fragment,{children:[n.jsxs(ee,{children:[n.jsx(fe,{className:"mx-1",size:"large",children:"Large"}),n.jsx(fe,{className:"mx-1",children:"Default"}),n.jsx(fe,{className:"mx-1",size:"small",children:"Small"})]}),n.jsxs(ee,{className:"mt-4",children:[n.jsx(fe,{className:"mx-1",size:"large",closable:!0,children:"Large"}),n.jsx(fe,{className:"mx-1",closable:!0,children:"Default"}),n.jsx(fe,{className:"mx-1",size:"small",closable:!0,children:"Small"})]})]})}function r4(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(a=>n.jsx(fe,{type:a.type,className:"mx-1",effect:"dark",children:a.label})),r=t.map(a=>n.jsx(fe,{type:a.type,className:"mx-1",effect:"dark",closable:!0,children:a.label})),l=t.map(a=>n.jsx(fe,{type:a.type,className:"mx-1",effect:"light",children:a.label})),i=t.map(a=>n.jsx(fe,{type:a.type,className:"mx-1",effect:"light",closable:!0,children:a.label})),s=t.map(a=>n.jsx(fe,{type:a.type,className:"mx-1",effect:"plain",children:a.label})),o=t.map(a=>n.jsx(fe,{type:a.type,className:"mx-1",effect:"plain",closable:!0,children:a.label}));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1 line-height-2",children:"Dark"}),e,r]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Light"}),l,i]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Plain"}),s,o]})]})}function l4(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(i=>n.jsx(fe,{type:i.type,className:"mx-1",effect:"dark",round:!0,children:i.label})),r=t.map(i=>n.jsx(fe,{type:i.type,className:"mx-1",effect:"light",round:!0,children:i.label})),l=t.map(i=>n.jsx(fe,{type:i.type,className:"mx-1",effect:"plain",round:!0,children:i.label}));return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:e}),n.jsx("div",{className:"flex flex-wrap gap-2",children:r}),n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:l})]})}function Bu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tag 标签"}),`
`,`
`,n.jsx(e.p,{children:"用于标记和选择。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 tag 的类型。 也可以通过 ",n.jsx(e.code,{children:"color"})," 属性来自定义背景色。"]}),`
`,n.jsx(T,{name:"TagBasic",children:n.jsx(e4,{})}),`
`,n.jsx(e.h2,{children:"可移除标签"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"closable"})," 属性可以定义一个标签是否可移除。 它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 ",n.jsx(e.code,{children:"disable-transitions"})," 属性，它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，",n.jsx(e.code,{children:"true"})," 为关闭。 当 Tag 被移除时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(T,{name:"TagClosable",children:n.jsx(t4,{})}),`
`,n.jsx(e.h2,{children:"不同尺寸"}),`
`,n.jsx(e.p,{children:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性来设置额外尺寸, 可选值包括 ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"}),"."]}),`
`,n.jsx(T,{name:"TagSize",children:n.jsx(n4,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tag 组件提供了三个不同的主题：",n.jsx(e.code,{children:"dark"}),"、",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"plain"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 effect 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(T,{name:"TagEffect",children:n.jsx(r4,{})}),`
`,n.jsx(e.h2,{children:"圆形标签"}),`
`,n.jsx(e.p,{children:"Tag 可以向按钮组件一样变为完全圆形。"}),`
`,n.jsx(T,{name:"TagRound",children:n.jsx(l4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Tag 的类型"}),n.jsx(e.td,{children:"'success' | 'info' | 'warning' | 'danger' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Tag 的尺寸"}),n.jsx(e.td,{children:"'large' | 'default' | 'small' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tag 的主题"}),n.jsx(e.td,{children:"'dark' | 'light' | 'plain'"}),n.jsx(e.td,{children:"light"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"Tag 是否为圆形"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]})]})]})]})}function i4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bu,{...t})}):Bu(t)}function s4(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success"}),n.jsx(se,{title:"info alert",type:"info"}),n.jsx(se,{title:"warning alert",type:"warning"}),n.jsx(se,{title:"error alert",type:"error"})]})}function o4(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",effect:"dark"}),n.jsx(se,{title:"info alert",type:"info",effect:"dark"}),n.jsx(se,{title:"warning alert",type:"warning",effect:"dark"}),n.jsx(se,{title:"error alert",type:"error",effect:"dark"})]})}function a4(){function t(){alert("Hello World!")}return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"unclosable alert",type:"success",closable:!1}),n.jsx(se,{title:"customized close-text",type:"info",closeText:"Gotcha"}),n.jsx(se,{title:"alert with callback",type:"warning",close:t})]})}function c4(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",showIcon:!0}),n.jsx(se,{title:"info alert",type:"info",showIcon:!0}),n.jsx(se,{title:"warning alert",type:"warning",showIcon:!0}),n.jsx(se,{title:"error alert",type:"error",showIcon:!0})]})}function d4(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",center:!0,showIcon:!0}),n.jsx(se,{title:"info alert",type:"info",center:!0,showIcon:!0}),n.jsx(se,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),n.jsx(se,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function u4(){return n.jsx(n.Fragment,{children:n.jsx(se,{title:"with description",type:"success",description:"This is a description."})})}function h4(){return n.jsxs(n.Fragment,{children:[n.jsx(se,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),n.jsx(se,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),n.jsx(se,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),n.jsx(se,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function Ru(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alert 提示"}),`
`,`
`,n.jsx(e.p,{children:"用于页面中展示重要的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供四种类型，由 ",n.jsx(e.code,{children:"type"})," 属性指定，默认值为 ",n.jsx(e.code,{children:"info"}),"。"]}),`
`,n.jsx(T,{name:"AlertBasic",children:n.jsx(s4,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供了两个不同的主题：",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"dark"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(T,{name:"AlertEffect",children:n.jsx(o4,{})}),`
`,n.jsx(e.h2,{children:"自定义关闭按钮"}),`
`,n.jsx(e.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,n.jsxs(e.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",n.jsx(e.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，默认为 ",n.jsx(e.code,{children:"false"}),"。 你可以设置 ",n.jsx(e.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",n.jsx(e.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(T,{name:"AlertClose",children:n.jsx(a4,{})}),`
`,n.jsx(e.h2,{children:"使用图标"}),`
`,n.jsx(e.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,n.jsx(T,{name:"AlertShowIcon",children:n.jsx(c4,{})}),`
`,n.jsx(e.h2,{children:"文字居中"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,n.jsx(T,{name:"AlertCenter",children:n.jsx(d4,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsx(e.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,n.jsxs(e.p,{children:["除了必填的 ",n.jsx(e.code,{children:"title"})," 属性外，你可以设置 ",n.jsx(e.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,n.jsx(T,{name:"AlertDescription",children:n.jsx(u4,{})}),`
`,n.jsx(e.h2,{children:"带图标和描述"}),`
`,n.jsx(e.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,n.jsx(T,{name:"AlertIconDescription",children:n.jsx(h4,{})}),`
`,n.jsx(e.h2,{children:"Alert API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Alert 标题。"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Alert 类型。"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error'"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"description"}),n.jsx(e.td,{children:"描述性文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可以关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"center"}),n.jsx(e.td,{children:"文字是否居中"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closeText"}),n.jsx(e.td,{children:"自定义关闭按钮文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showIcon"}),n.jsx(e.td,{children:"是否显示类型图标"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"主题样式"}),n.jsx(e.td,{children:"'light' / 'dark'"}),n.jsx(e.td,{children:"light"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"close"}),n.jsx(e.td,{children:"关闭 Alert 时触发的事件"}),n.jsx(e.td,{children:"(event: MouseEvent) => void"})]})})]})]})}function p4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ru,{...t})}):Ru(t)}function f4(){const[t,e]=u.useState(!1);function r(){e(!0)}function l(){e(!1)}function i(){e(!1)}function s(){e(!1)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button",onClick:i,children:n.jsx("span",{className:"",children:"Cancel"})}),n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button el-button--primary",onClick:s,children:n.jsx("span",{className:"",children:" Confirm "})})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:r,children:"click to open the Dialog"}),n.jsx(_l,{open:t,title:"Tips",width:"30%",onClose:l,footer:n.jsx(o,{}),children:n.jsx("span",{children:"This is a message"})})]})}function m4(){const[t,e]=u.useState(!1),[r,l]=u.useState(!1);function i(){e(!0)}function s(){l(!0)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx(b,{onClick:()=>{l(!1)},children:"Cancel"}),n.jsx(b,{type:"primary",onClick:()=>{l(!1)},children:"Confirm"})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:i,children:"open a Table nested Dialog"}),n.jsx(_l,{open:t,title:"Shipping address",onClose:()=>{e(!1)},children:"Table组件"}),n.jsx(b,{text:!0,onClick:s,children:"open a Form nested Dialog"}),n.jsx(_l,{open:r,title:"Shipping address",footer:n.jsx(o,{}),onClose:()=>{l(!1)},children:"Form 表单"})]})}function x4(){const[t,e]=u.useState(!1);function r(){e(!1)}function l(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"dialog-header",children:[n.jsx("h4",{className:"el-dialog__title",children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(Nr,{}),"Close"]})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>e(!0),children:"Open Dialog with customized header"}),n.jsx(_l,{open:t,showClose:!1,header:n.jsx(l,{}),onClose:r,children:"This is dialog content."})]})}function Lu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dialog 对话框"}),`
`,`
`,n.jsx(e.p,{children:"在保留当前页面状态的情况下，告知用户并承载相关操作。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Dialog 弹出一个对话框，适合需要定制性更大的场景。"}),`
`,n.jsx(T,{name:"DialogBasic",children:n.jsx(f4,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(e.p,{children:"对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。"}),`
`,n.jsx(T,{name:"DialogContent",children:n.jsx(m4,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(T,{name:"DialogHeader",children:n.jsx(x4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Dialog"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Dialog 对话框 Dialog 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"对话框的宽度，默认值为 50%"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function g4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Lu,{...t})}):Lu(t)}function j4(){const[t,e]=u.useState(""),[r,l]=u.useState(!1),[i,s]=u.useState(!1);function o(){e("ltr"),l(!0)}function a(){e("rtl"),l(!0)}function c(){e("ttb"),l(!0)}function d(){e("btt"),l(!0)}function h(){e("ltr"),s(!0)}function p(){e("rtl"),s(!0)}function x(){e("ttb"),s(!0)}function g(){e("btt"),s(!0)}function v(){l(!1)}function y(){s(!1)}function N(){s(!1)}function m(){s(!1)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:o,children:"open left to right"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:a,children:"open right to left"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:c,children:"open top to bottom"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:d,children:"open bottom to top"})]}),n.jsxs("div",{style:{marginTop:"20px"},children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:h,children:"open left to right footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:p,children:"open right to left footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:x,children:"open top to bottom footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:g,children:"open bottom to top footer"})]}),n.jsx(An,{open:r,title:"I am the title",direction:t,onClose:v,children:n.jsx("span",{children:"Hi, there!"})}),n.jsx(An,{open:i,direction:t,onClose:y,header:n.jsx("h4",{children:"set title by slot"}),footer:n.jsxs("div",{style:{flex:"auto"},children:[n.jsx(b,{onClick:N,children:"cancel"}),n.jsx(b,{type:"primary",onClick:m,children:"confirm"})]}),children:"radio"})]})}function v4(){const[t,e]=u.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(b,{type:"primary",onClick:()=>e(!0),children:"open"}),n.jsx(An,{open:t,title:"I am the title",withHeader:!1,children:n.jsx("span",{children:"Hi there!"})})]})}function y4(){const[t,e]=u.useState(!1),[r,l]=u.useState(!1);function i(){e(!1)}function s(){l(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:()=>{e(!0)},children:"Open Drawer with nested table"}),n.jsx(b,{text:!0,onClick:()=>{l(!0)},children:"Open Drawer with nested form"}),n.jsx(An,{open:t,title:"I have a nested table inside!",direction:"rtl",size:"50%",onClose:i,children:"table"}),n.jsx(An,{open:r,title:"I have a nested form inside!",direction:"ltr",className:"demo-drawer",onClose:s,children:n.jsxs("div",{className:"demo-drawer__content",children:["form",n.jsxs("div",{className:"demo-drawer__footer",children:[n.jsx(b,{onClick:s,children:"Cancel"}),n.jsx(b,{type:"primary",onClick:s,children:"Submit"})]})]})})]})}function w4(){const[t,e]=u.useState(!1);function r(){e(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>{e(!0)},children:"Open Drawer with customized header"}),n.jsx(An,{open:t,showClose:!1,header:n.jsxs(n.Fragment,{children:[n.jsx("h4",{children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(Nr,{}),"Close"]})]}),children:"This is drawer content."})]})}function Du(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Drawer 抽屉"}),`
`,`
`,n.jsx(e.p,{children:"有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验."}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"呼出一个临时的侧边栏, 可以从多个方向呼出"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Drawer"})," 包含三部分: ",n.jsx(e.code,{children:"title"})," & ",n.jsx(e.code,{children:"body"})," & ",n.jsx(e.code,{children:"footer"}),", 你还可以通过 title 属性来设置标题, 默认情况下它是一个空字符串, 其中 ",n.jsx(e.code,{children:"body"})," 部分是 Drawer 组件的主区域, 它包含了用户定义的主要内容. footer和title用法一致, 用来显示页脚信息. 当 Drawer 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。"]}),`
`,n.jsx(T,{name:"DrawerBasic",children:n.jsx(j4,{})}),`
`,n.jsx(e.h2,{children:"不添加 Title"}),`
`,n.jsx(e.p,{children:"当你不需要标题的时候，你可以将它移除。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"with-header"})," 属性为 false 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 ",n.jsx(e.code,{children:"title"}),"。"]}),`
`,n.jsx(T,{name:"DrawerWithHeader",children:n.jsx(v4,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsxs(e.p,{children:["像 ",n.jsx(e.code,{children:"Dialog"})," 组件一样，",n.jsx(e.code,{children:"Drawer"})," 也可以用来显示多种不同的交互。"]}),`
`,n.jsx(T,{name:"DrawerContent",children:n.jsx(y4,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(T,{name:"DrawerHeader",children:n.jsx(w4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Drawer"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"Drawer 打开的方向"}),n.jsx(e.td,{children:"'rtl' | 'ltr' | 'ttb' | 'btt'"}),n.jsx(e.td,{children:"rtl"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Drawer 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"Drawer 页脚部分"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"withHeader"}),n.jsx(e.td,{children:"控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title 不生效"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"30%"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]})]})]})]})}function _4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Du,{...t})}):Du(t)}function C4(){return n.jsx(n.Fragment,{children:n.jsx(gs,{title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function N4(){return n.jsx(n.Fragment,{children:n.jsx(gs,{width:220,confirmButtonText:"OK",cancelButtonText:"No, Thanks",icon:n.jsx(Tl,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function b4(){function t(){console.log("confirm!")}function e(){console.log("cancel!")}return n.jsx(n.Fragment,{children:n.jsx(gs,{confirmButtonText:"Yes",cancelButtonText:"No",icon:n.jsx(Tl,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:t,onCancel:e,children:n.jsx(b,{children:"Delete"})})})}function Pu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popconfirm 气泡确认框"}),`
`,`
`,n.jsx(e.p,{children:"点击某个元素弹出一个简单的气泡确认框"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。"}),`
`,n.jsx(T,{name:"PopconfirmBasic",children:n.jsx(C4,{})}),`
`,n.jsx(e.h2,{children:"自定义弹出框的内容"}),`
`,n.jsx(e.p,{children:"可以在 Popconfirm 中自定义内容。"}),`
`,n.jsx(T,{name:"PopconfirmIcon",children:n.jsx(N4,{})}),`
`,n.jsx(e.h2,{children:"多种让 Popconfirm 出现的方法"}),`
`,n.jsx(e.p,{children:"点击按钮触发事件"}),`
`,n.jsx(T,{name:"PopconfirmEvent",children:n.jsx(b4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"标题"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"confirmButtonText"}),n.jsx(e.td,{children:"确认按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"cancelButtonText"}),n.jsx(e.td,{children:"取消按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"自定义图标"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"QuestionFilled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"iconColor"}),n.jsx(e.td,{children:"Icon 颜色"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"#f90"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideIcon"}),n.jsx(e.td,{children:"是否隐藏 Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"弹层宽度，最小宽度 150px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"number"})]}),n.jsx(e.td,{children:"150"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"事件名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onConfirm"}),n.jsx(e.td,{children:"点击确认按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onCancel"}),n.jsx(e.td,{children:"点击取消按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]})]})]})]})}function S4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Pu,{...t})}):Pu(t)}function k4(){return n.jsxs(n.Fragment,{children:[n.jsx(Or,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Hover to activate"})}),n.jsx(Or,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Click to activate"})}),n.jsx(Or,{placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Focus to activate"})}),n.jsx(Or,{title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"contextmenu to activate"})})]})}function Au(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popover 气泡卡片"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"trigger"})," 属性被用来决定 ",n.jsx(e.code,{children:"popover"})," 的触发方式，支持的触发方式： ",n.jsx(e.code,{children:"hover"}),"、",n.jsx(e.code,{children:"click"}),"、",n.jsx(e.code,{children:"focus"})," 或 ",n.jsx(e.code,{children:"contextmenu"}),"。 如果你想手动控制它，可以设置 ",n.jsx(e.code,{children:":visible"})," 属性。"]}),`
`,n.jsx(T,{name:"PopoverBasic",children:n.jsx(k4,{})})]})}function E4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Au,{...t})}):Au(t)}function T4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-tooltip",children:[n.jsxs("div",{className:"row center",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start",children:n.jsx(b,{children:"top-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top",children:n.jsx(b,{children:"top"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end",children:n.jsx(b,{children:"top-end"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start",children:n.jsx(b,{children:"left-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start",children:n.jsx(b,{children:"right-start"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left",children:n.jsx(b,{className:"mt-3 mb-3",children:"left"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right",children:n.jsx(b,{children:"right"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end",children:n.jsx(b,{children:"left-end"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end",children:n.jsx(b,{children:"right-end"})})]}),n.jsxs("div",{className:"row center",children:[n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start",children:n.jsx(b,{children:"bottom-start"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom",children:n.jsx(b,{children:"bottom"})}),n.jsx(we,{className:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end",children:n.jsx(b,{children:"bottom-end"})})]})]})})}function B4(){return n.jsxs(n.Fragment,{children:[n.jsx(we,{content:"Top center",placement:"top",children:n.jsx(b,{children:"Dark"})}),n.jsx(we,{content:"Bottom center",placement:"bottom",effect:"light",children:n.jsx(b,{children:"Light"})}),n.jsx(we,{content:"Bottom center",effect:"customized",children:n.jsx(b,{children:"Customized theme"})})]})}function R4(){return n.jsx(n.Fragment,{children:n.jsx(we,{placement:"top",content:n.jsxs(n.Fragment,{children:["multiple lines",n.jsx("br",{}),"second line"]}),children:n.jsx(b,{children:"Top center"})})})}function L4(){const[t,e]=u.useState(!0);function r(){e(!t)}return n.jsx(n.Fragment,{children:n.jsx(we,{disabled:t,content:"click to close tooltip function",placement:"bottom",effect:"light",children:n.jsxs(b,{onClick:r,children:["click to ",t?"active":"close"," tooltip function"]})})})}function Mu(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tooltip 文字提示"}),`
`,`
`,n.jsx(e.p,{children:"常用于展示鼠标 hover 时的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"content"})," 属性来决定 ",n.jsx(e.code,{children:"hover"})," 时的提示信息。 由 ",n.jsx(e.code,{children:"placement"})," 属性决定展示效果： ",n.jsx(e.code,{children:"placement"}),"属性值为：[方向]-[对齐位置]；四个方向：",n.jsx(e.code,{children:"top"}),"、",n.jsx(e.code,{children:"left"}),"、",n.jsx(e.code,{children:"right"}),"、",n.jsx(e.code,{children:"bottom"}),"；三种对齐位置：",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"end"}),'，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。']}),`
`,n.jsx(T,{name:"TooltipBasic",children:n.jsx(T4,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tooltip 组件内置了两个主题：",n.jsx(e.code,{children:"dark"}),"和",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 来修改主题，默认值为 ",n.jsx(e.code,{children:"dark"}),"."]}),`
`,n.jsx(T,{name:"TooltipEffect",children:n.jsx(B4,{})}),`
`,n.jsx(e.h2,{children:"更多内容的文字提示"}),`
`,n.jsx(e.p,{children:"展示多行文本或者是设置文本内容的格式"}),`
`,n.jsx(T,{name:"TooltipContent",children:n.jsx(R4,{})}),`
`,n.jsx(e.h2,{children:"高级扩展"}),`
`,n.jsx(e.p,{children:"除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："}),`
`,n.jsxs(e.p,{children:["如果需要关闭 ",n.jsx(e.code,{children:"tooltip"})," 功能，",n.jsx(e.code,{children:"disabled"})," 属性可以满足这个需求， 你只需要将其设置为 ",n.jsx(e.code,{children:"true"}),"。"]}),`
`,n.jsx(T,{name:"TooltipDisabled",children:n.jsx(L4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tooltip 主题，内置了 dark / light 两种"}),n.jsx(e.td,{children:"'dark' / 'light'"}),n.jsx(e.td,{children:"dark"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"显示的内容"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"placement"}),n.jsx(e.td,{children:"Tooltip 组件出现的位置"}),n.jsx(e.td,{children:"'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'"}),n.jsx(e.td,{children:"bottom"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showAfter"}),n.jsx(e.td,{children:"在触发后多久显示内容，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideAfter"}),n.jsx(e.td,{children:"延迟关闭，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"200"})]})]})]})]})}function D4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Mu,{...t})}):Mu(t)}function P4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes."}),n.jsx(jt,{}),n.jsx("span",{children:"There little thoughts are the rustle of leaves; they have their whisper of joy in my mind."})]})})}function A4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"What you are you do not see, what you see is your shadow. "}),n.jsx(jt,{contentPosition:"left",children:"Rabindranath Tagore"}),n.jsx("span",{children:"My wishes are fools, they shout across thy song, my Master. Let me but listen."}),n.jsx(jt,{children:n.jsx(ic,{})}),n.jsx("span",{children:"I cannot choose the best. The best chooses me."}),n.jsx(jt,{contentPosition:"right",children:"Rabindranath Tagore"})]})})}function M4(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"What language is thine, O sea?"}),n.jsx(jt,{borderStyle:"dashed"}),n.jsx("span",{children:"The language of eternal question."})]}),n.jsx(jt,{borderStyle:"dotted"}),n.jsx("span",{children:"What language is thy answer, O sky?"}),n.jsx(jt,{borderStyle:"double"}),n.jsx("span",{children:"The language of eternal silence."})]})}function I4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"Rain"}),n.jsx(jt,{direction:"vertical"}),n.jsx("span",{children:"Home"}),n.jsx(jt,{direction:"vertical","border-style":"dashed"}),n.jsx("span",{children:"Grass"})]})})}function Iu(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Divider 分割线"}),`
`,`
`,n.jsx(e.p,{children:"区隔内容的分割线。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"对不同段落的文本进行分割。"}),`
`,n.jsx(T,{name:"DividerBasic",children:n.jsx(P4,{})}),`
`,n.jsx(e.h2,{children:"设置文案"}),`
`,n.jsx(e.p,{children:"可以在分割线上自定义文本内容。"}),`
`,n.jsx(T,{name:"DividerContent",children:n.jsx(A4,{})}),`
`,n.jsx(e.h2,{children:"虚线"}),`
`,n.jsx(e.p,{children:"您可以设置分隔符的样式。"}),`
`,n.jsx(T,{name:"DividerBorder",children:n.jsx(M4,{})}),`
`,n.jsx(e.h2,{children:"垂直分隔线"}),`
`,n.jsx(T,{name:"DividerDirection",children:n.jsx(I4,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"设置分割线方向"}),n.jsx(e.td,{children:"'horizontal' / 'vertical'"}),n.jsx(e.td,{children:"horizontal"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border-style"}),n.jsx(e.td,{children:"设置分隔符样式"}),n.jsx(e.td,{children:"'none' / 'solid' / 'hidden' / 'dashed' / ...(css/border-style)"}),n.jsx(e.td,{children:"solid"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content-position"}),n.jsx(e.td,{children:"自定义分隔线内容的位置"}),n.jsx(e.td,{children:"'left' / 'right' / 'center'"}),n.jsx(e.td,{children:"center"})]})]})]})]})}function F4(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Iu,{...t})}):Iu(t)}function z4({name:t}){let e;switch(t){case"button":e=n.jsx(D2,{});break;case"border":e=n.jsx(I2,{});break;case"container":e=n.jsx(V2,{});break;case"icon":e=n.jsx(G2,{});break;case"layout":e=n.jsx(ew,{});break;case"link":e=n.jsx(iw,{});break;case"text":e=n.jsx(cw,{});break;case"scrollbar":e=n.jsx(uw,{});break;case"space":e=n.jsx(yw,{});break;case"switch":e=n.jsx(Tw,{});break;case"rate":e=n.jsx(Rw,{});break;case"avatar":e=n.jsx(Mw,{});break;case"badge":e=n.jsx($w,{});break;case"collapse":e=n.jsx(Uw,{});break;case"progress":e=n.jsx(Xw,{});break;case"result":e=n.jsx(Kw,{});break;case"table":e=n.jsx(qw,{});break;case"tag":e=n.jsx(i4,{});break;case"alert":e=n.jsx(p4,{});break;case"dialog":e=n.jsx(g4,{});break;case"drawer":e=n.jsx(_4,{});break;case"popconfirm":e=n.jsx(S4,{});break;case"popover":e=n.jsx(E4,{});break;case"tooltip":e=n.jsx(D4,{});break;case"divider":e=n.jsx(F4,{});break}return e}function re({name:t}){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(z4,{name:t})})})}function O4(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"home-content",children:[n.jsxs("div",{className:"description",children:[n.jsx("img",{src:df,alt:"pelement-react",className:"logo"}),n.jsx("h1",{children:"pelement react"}),n.jsx("p",{children:"基于Element Plus 和 react，面向设计师和开发者的组件库"}),n.jsx(cf,{to:"/component/button",children:"快速开始"})]}),n.jsxs("div",{className:"join-us",children:[n.jsx("h3",{children:"加入我们"}),n.jsxs("div",{children:[n.jsx("label",{children:"Email: "}),n.jsx("span",{children:"llkui241569@163.com"})]}),n.jsxs("div",{children:[n.jsx("label",{children:"QQ: "}),n.jsx("span",{children:"1728366431"})]})]}),n.jsxs("div",{className:"footer-main text-xs",children:[n.jsxs("p",{children:["Released under the ",n.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferer",children:"MIT License"}),"."]}),n.jsxs("p",{children:["Made with ❤️ by ",n.jsx("a",{href:"https://github.com/llkui",target:"_blank",rel:"noopener noreferer",children:"llkui"})]})]})]})})}const $4=u.lazy(()=>Tt(()=>import("./Guide-s-GDBPdX.js"),__vite__mapDeps([]))),H4=u.lazy(()=>Tt(()=>import("./installation.zh-CN-ngeieXGU.js"),__vite__mapDeps([]))),U4=u.lazy(()=>Tt(()=>import("./changelog.zh-CN-w6SYCsC5.js"),__vite__mapDeps([]))),W4=u.lazy(()=>Tt(()=>import("./recommendation.zh-CN-qXB9QsRj.js"),__vite__mapDeps([]))),V4=u.lazy(()=>Tt(()=>import("./Component-3laYcnhg.js"),__vite__mapDeps([]))),X4=u.lazy(()=>Tt(()=>import("./Overview-UZ5Sj6Ai.js"),__vite__mapDeps([0,1]))),G4=u.lazy(()=>Tt(()=>import("./Blog-3wiPX2iC.js"),__vite__mapDeps([]))),Q4=u.lazy(()=>Tt(()=>import("./build-error.zh-CN-jfY_3ylK.js"),__vite__mapDeps([]))),K4=u.lazy(()=>Tt(()=>import("./cannot-find-module.zh-CN-M1j400aX.js"),__vite__mapDeps([]))),Y4=u.lazy(()=>Tt(()=>import("./NotFound-CWzhvXua.js"),__vite__mapDeps([2,3])));function _t(t){const{children:e}=t;return n.jsx(n.Fragment,{children:n.jsx(u.Suspense,{fallback:n.jsx("div",{children:"Loading..."}),children:e})})}const Z4=()=>a0([{path:"/",element:n.jsx(Yl,{to:"/component/button"})},{path:"home",element:n.jsx(O4,{})},{path:"guide",element:n.jsx(Yl,{to:"changelog"})},{path:"guide",element:n.jsx(_t,{children:n.jsx($4,{})}),children:[{path:"installation",element:n.jsx(_t,{children:n.jsx(H4,{})})},{path:"changelog",element:n.jsx(_t,{children:n.jsx(U4,{})})},{path:"recommendation",element:n.jsx(_t,{children:n.jsx(W4,{})})}]},{path:"component",element:n.jsx(Yl,{to:"overview"})},{path:"component",element:n.jsx(_t,{children:n.jsx(V4,{})}),children:[{path:"overview",element:n.jsx(_t,{children:n.jsx(X4,{})})},{path:"button",element:n.jsx(re,{name:"button"})},{path:"border",element:n.jsx(re,{name:"border"})},{path:"container",element:n.jsx(re,{name:"container"})},{path:"icon",element:n.jsx(re,{name:"icon"})},{path:"layout",element:n.jsx(re,{name:"layout"})},{path:"link",element:n.jsx(re,{name:"link"})},{path:"text",element:n.jsx(re,{name:"text"})},{path:"scrollbar",element:n.jsx(re,{name:"scrollbar"})},{path:"space",element:n.jsx(re,{name:"space"})},{path:"switch",element:n.jsx(re,{name:"switch"})},{path:"rate",element:n.jsx(re,{name:"rate"})},{path:"avatar",element:n.jsx(re,{name:"avatar"})},{path:"badge",element:n.jsx(re,{name:"badge"})},{path:"collapse",element:n.jsx(re,{name:"collapse"})},{path:"progress",element:n.jsx(re,{name:"progress"})},{path:"result",element:n.jsx(re,{name:"result"})},{path:"table",element:n.jsx(re,{name:"table"})},{path:"tag",element:n.jsx(re,{name:"tag"})},{path:"alert",element:n.jsx(re,{name:"alert"})},{path:"dialog",element:n.jsx(re,{name:"dialog"})},{path:"drawer",element:n.jsx(re,{name:"drawer"})},{path:"popconfirm",element:n.jsx(re,{name:"popconfirm"})},{path:"popover",element:n.jsx(re,{name:"popover"})},{path:"tooltip",element:n.jsx(re,{name:"tooltip"})},{path:"divider",element:n.jsx(re,{name:"divider"})}]},{path:"blog",element:n.jsx(Yl,{to:"build-error"})},{path:"blog",element:n.jsx(_t,{children:n.jsx(G4,{})}),children:[{path:"build-error",element:n.jsx(_t,{children:n.jsx(Q4,{})})},{path:"cannot-find-module",element:n.jsx(_t,{children:n.jsx(K4,{})})}]},{path:"*",element:n.jsx(_t,{children:n.jsx(Y4,{})})}]);qs.createRoot(document.getElementById("root")).render(n.jsx(na.StrictMode,{children:n.jsxs(T0,{children:[n.jsx(Z4,{}),n.jsx(M0,{})]})}));export{Zl as N,w0 as O,n as j,u as r,lf as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Overview-UZ5Sj6Ai.js","assets/Overview-_X6MYKkE.css","assets/NotFound-CWzhvXua.js","assets/NotFound-36NBZRJX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}