function nm(t,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in t)){const s=Object.getOwnPropertyDescriptor(i,l);s&&Object.defineProperty(t,l,s.get?s:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();function Dd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pd={exports:{}},$l={},Ad={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),rm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),sm=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),am=Symbol.for("react.context"),cm=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),hm=Symbol.for("react.lazy"),_c=Symbol.iterator;function fm(t){return t===null||typeof t!="object"?null:(t=_c&&t[_c]||t["@@iterator"],typeof t=="function"?t:null)}var Md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fd=Object.assign,Id={};function gr(t,e,r){this.props=t,this.context=e,this.refs=Id,this.updater=r||Md}gr.prototype.isReactComponent={};gr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Od(){}Od.prototype=gr.prototype;function Yo(t,e,r){this.props=t,this.context=e,this.refs=Id,this.updater=r||Md}var Zo=Yo.prototype=new Od;Zo.constructor=Yo;Fd(Zo,gr.prototype);Zo.isPureReactComponent=!0;var kc=Array.isArray,zd=Object.prototype.hasOwnProperty,Jo={current:null},$d={key:!0,ref:!0,__self:!0,__source:!0};function Ud(t,e,r){var i,l={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zd.call(e,i)&&!$d.hasOwnProperty(i)&&(l[i]=e[i]);var a=arguments.length-2;if(a===1)l.children=r;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];l.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)l[i]===void 0&&(l[i]=a[i]);return{$$typeof:wi,type:t,key:s,ref:o,props:l,_owner:Jo.current}}function pm(t,e){return{$$typeof:wi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qo(t){return typeof t=="object"&&t!==null&&t.$$typeof===wi}function mm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Nc=/\/+/g;function vs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mm(""+t.key):e.toString(36)}function Zi(t,e,r,i,l){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wi:case rm:o=!0}}if(o)return o=t,l=l(o),t=i===""?"."+vs(o,0):i,kc(l)?(r="",t!=null&&(r=t.replace(Nc,"$&/")+"/"),Zi(l,e,r,"",function(u){return u})):l!=null&&(qo(l)&&(l=pm(l,r+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Nc,"$&/")+"/")+t)),e.push(l)),1;if(o=0,i=i===""?".":i+":",kc(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+vs(s,a);o+=Zi(s,e,r,c,l)}else if(c=fm(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+vs(s,a++),o+=Zi(s,e,r,c,l);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bi(t,e,r){if(t==null)return t;var i=[],l=0;return Zi(t,i,"","",function(s){return e.call(r,s,l++)}),i}function xm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},Ji={transition:null},gm={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:Jo};G.Children={map:Bi,forEach:function(t,e,r){Bi(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Bi(t,function(){e++}),e},toArray:function(t){return Bi(t,function(e){return e})||[]},only:function(t){if(!qo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=gr;G.Fragment=im;G.Profiler=sm;G.PureComponent=Yo;G.StrictMode=lm;G.Suspense=um;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;G.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Fd({},t.props),l=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jo.current),e.key!==void 0&&(l=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)zd.call(e,c)&&!$d.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:wi,type:t.type,key:l,ref:s,props:i,_owner:o}};G.createContext=function(t){return t={$$typeof:am,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:om,_context:t},t.Consumer=t};G.createElement=Ud;G.createFactory=function(t){var e=Ud.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:cm,render:t}};G.isValidElement=qo;G.lazy=function(t){return{$$typeof:hm,_payload:{_status:-1,_result:t},_init:xm}};G.memo=function(t,e){return{$$typeof:dm,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Ji.transition;Ji.transition={};try{t()}finally{Ji.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return $e.current.useCallback(t,e)};G.useContext=function(t){return $e.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};G.useEffect=function(t,e){return $e.current.useEffect(t,e)};G.useId=function(){return $e.current.useId()};G.useImperativeHandle=function(t,e,r){return $e.current.useImperativeHandle(t,e,r)};G.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return $e.current.useMemo(t,e)};G.useReducer=function(t,e,r){return $e.current.useReducer(t,e,r)};G.useRef=function(t){return $e.current.useRef(t)};G.useState=function(t){return $e.current.useState(t)};G.useSyncExternalStore=function(t,e,r){return $e.current.useSyncExternalStore(t,e,r)};G.useTransition=function(){return $e.current.useTransition()};G.version="18.2.0";Ad.exports=G;var m=Ad.exports;const Hd=Dd(m),ea=nm({__proto__:null,default:Hd},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=m,vm=Symbol.for("react.element"),ym=Symbol.for("react.fragment"),wm=Object.prototype.hasOwnProperty,Cm=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_m={key:!0,ref:!0,__self:!0,__source:!0};function Wd(t,e,r){var i,l={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wm.call(e,i)&&!_m.hasOwnProperty(i)&&(l[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)l[i]===void 0&&(l[i]=e[i]);return{$$typeof:vm,type:t,key:s,ref:o,props:l,_owner:Cm.current}}$l.Fragment=ym;$l.jsx=Wd;$l.jsxs=Wd;Pd.exports=$l;var n=Pd.exports,Ys={},Vd={exports:{}},nt={},Xd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,R){var P=C.length;C.push(R);e:for(;0<P;){var $=P-1>>>1,K=C[$];if(0<l(K,R))C[$]=R,C[P]=K,P=$;else break e}}function r(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var R=C[0],P=C.pop();if(P!==R){C[0]=P;e:for(var $=0,K=C.length,De=K>>>1;$<De;){var it=2*($+1)-1,be=C[it],Ce=it+1,xn=C[Ce];if(0>l(be,P))Ce<K&&0>l(xn,be)?(C[$]=xn,C[Ce]=P,$=Ce):(C[$]=be,C[it]=P,$=it);else if(Ce<K&&0>l(xn,P))C[$]=xn,C[Ce]=P,$=Ce;else break e}}return R}function l(C,R){var P=C.sortIndex-R.sortIndex;return P!==0?P:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,f=null,x=3,g=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(C){for(var R=r(u);R!==null;){if(R.callback===null)i(u);else if(R.startTime<=C)i(u),R.sortIndex=R.expirationTime,e(c,R);else break;R=r(u)}}function w(C){if(y=!1,j(C),!v)if(r(c)!==null)v=!0,W(_);else{var R=r(u);R!==null&&N(w,R.startTime-C)}}function _(C,R){v=!1,y&&(y=!1,p(B),B=-1),g=!0;var P=x;try{for(j(R),f=r(c);f!==null&&(!(f.expirationTime>R)||C&&!Q());){var $=f.callback;if(typeof $=="function"){f.callback=null,x=f.priorityLevel;var K=$(f.expirationTime<=R);R=t.unstable_now(),typeof K=="function"?f.callback=K:f===r(c)&&i(c),j(R)}else i(c);f=r(c)}if(f!==null)var De=!0;else{var it=r(u);it!==null&&N(w,it.startTime-R),De=!1}return De}finally{f=null,x=P,g=!1}}var S=!1,E=null,B=-1,z=5,F=-1;function Q(){return!(t.unstable_now()-F<z)}function te(){if(E!==null){var C=t.unstable_now();F=C;var R=!0;try{R=E(!0,C)}finally{R?ce():(S=!1,E=null)}}else S=!1}var ce;if(typeof h=="function")ce=function(){h(te)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=te,ce=function(){H.postMessage(null)}}else ce=function(){k(te,0)};function W(C){E=C,S||(S=!0,ce())}function N(C,R){B=k(function(){C(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,W(_))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(C){switch(x){case 1:case 2:case 3:var R=3;break;default:R=x}var P=x;x=R;try{return C()}finally{x=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=x;x=C;try{return R()}finally{x=P}},t.unstable_scheduleCallback=function(C,R,P){var $=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,C={id:d++,callback:R,priorityLevel:C,startTime:P,expirationTime:K,sortIndex:-1},P>$?(C.sortIndex=P,e(u,C),r(c)===null&&C===r(u)&&(y?(p(B),B=-1):y=!0,N(w,P-$))):(C.sortIndex=K,e(c,C),v||g||(v=!0,W(_))),C},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(C){var R=x;return function(){var P=x;x=R;try{return C.apply(this,arguments)}finally{x=P}}}})(Qd);Xd.exports=Qd;var km=Xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=m,et=km;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kd=new Set,Gr={};function Pn(t,e){or(t,e),or(t+"Capture",e)}function or(t,e){for(Gr[t]=e,t=0;t<e.length;t++)Kd.add(e[t])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zs=Object.prototype.hasOwnProperty,Nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},Sc={};function bm(t){return Zs.call(Sc,t)?!0:Zs.call(bc,t)?!1:Nm.test(t)?Sc[t]=!0:(bc[t]=!0,!1)}function Sm(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Em(t,e,r,i){if(e===null||typeof e>"u"||Sm(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,r,i,l,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var ta=/[\-:]([a-z])/g;function na(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ta,na);Le[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ta,na);Le[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ta,na);Le[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function ra(t,e,r,i){var l=Le.hasOwnProperty(e)?Le[e]:null;(l!==null?l.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Em(e,r,l,i)&&(r=null),i||l===null?bm(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):l.mustUseProperty?t[l.propertyName]=r===null?l.type===3?!1:"":r:(e=l.attributeName,i=l.attributeNamespace,r===null?t.removeAttribute(e):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var It=Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Li=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),ia=Symbol.for("react.strict_mode"),Js=Symbol.for("react.profiler"),Yd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),la=Symbol.for("react.forward_ref"),qs=Symbol.for("react.suspense"),eo=Symbol.for("react.suspense_list"),sa=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Jd=Symbol.for("react.offscreen"),Ec=Symbol.iterator;function kr(t){return t===null||typeof t!="object"?null:(t=Ec&&t[Ec]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,ys;function Lr(t){if(ys===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);ys=e&&e[1]||""}return`
`+ys+t}var ws=!1;function Cs(t,e){if(!t||ws)return"";ws=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),s=i.stack.split(`
`),o=l.length-1,a=s.length-1;1<=o&&0<=a&&l[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==s[a]){var c=`
`+l[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{ws=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Lr(t):""}function Tm(t){switch(t.tag){case 5:return Lr(t.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return t=Cs(t.type,!1),t;case 11:return t=Cs(t.type.render,!1),t;case 1:return t=Cs(t.type,!0),t;default:return""}}function to(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Un:return"Fragment";case $n:return"Portal";case Js:return"Profiler";case ia:return"StrictMode";case qs:return"Suspense";case eo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zd:return(t.displayName||"Context")+".Consumer";case Yd:return(t._context.displayName||"Context")+".Provider";case la:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sa:return e=t.displayName||null,e!==null?e:to(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return to(t(e))}catch{}}return null}function Rm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return to(e);case 8:return e===ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bm(t){var e=qd(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Di(t){t._valueTracker||(t._valueTracker=Bm(t))}function eh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=qd(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function no(t,e){var r=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Tc(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=sn(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function th(t,e){e=e.checked,e!=null&&ra(t,"checked",e,!1)}function ro(t,e){th(t,e);var r=sn(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?io(t,e.type,r):e.hasOwnProperty("defaultValue")&&io(t,e.type,sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rc(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function io(t,e,r){(e!=="number"||ul(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Dr=Array.isArray;function er(t,e,r,i){if(t=t.options,e){e={};for(var l=0;l<r.length;l++)e["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=e.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&i&&(t[r].defaultSelected=!0)}else{for(r=""+sn(r),e=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function lo(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bc(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(T(92));if(Dr(r)){if(1<r.length)throw Error(T(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:sn(r)}}function nh(t,e){var r=sn(e.value),i=sn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function Lc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pi,ih=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,l){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,l)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Kr(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(t){Lm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Or[e]=Or[t]})});function lh(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Or.hasOwnProperty(t)&&Or[t]?(""+e).trim():e+"px"}function sh(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,l=lh(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,l):t[r]=l}}var Dm=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oo(t,e){if(e){if(Dm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function ao(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var co=null;function oa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uo=null,tr=null,nr=null;function Dc(t){if(t=ki(t)){if(typeof uo!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Xl(e),uo(t.stateNode,t.type,e))}}function oh(t){tr?nr?nr.push(t):nr=[t]:tr=t}function ah(){if(tr){var t=tr,e=nr;if(nr=tr=null,Dc(t),e)for(t=0;t<e.length;t++)Dc(e[t])}}function ch(t,e){return t(e)}function uh(){}var _s=!1;function dh(t,e,r){if(_s)return t(e,r);_s=!0;try{return ch(t,e,r)}finally{_s=!1,(tr!==null||nr!==null)&&(uh(),ah())}}function Yr(t,e){var r=t.stateNode;if(r===null)return null;var i=Xl(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(T(231,e,typeof r));return r}var ho=!1;if(Pt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){ho=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{ho=!1}function Pm(t,e,r,i,l,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var zr=!1,dl=null,hl=!1,fo=null,Am={onError:function(t){zr=!0,dl=t}};function Mm(t,e,r,i,l,s,o,a,c){zr=!1,dl=null,Pm.apply(Am,arguments)}function Fm(t,e,r,i,l,s,o,a,c){if(Mm.apply(this,arguments),zr){if(zr){var u=dl;zr=!1,dl=null}else throw Error(T(198));hl||(hl=!0,fo=u)}}function An(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function hh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pc(t){if(An(t)!==t)throw Error(T(188))}function Im(t){var e=t.alternate;if(!e){if(e=An(t),e===null)throw Error(T(188));return e!==t?null:t}for(var r=t,i=e;;){var l=r.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){r=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===r)return Pc(l),t;if(s===i)return Pc(l),e;s=s.sibling}throw Error(T(188))}if(r.return!==i.return)r=l,i=s;else{for(var o=!1,a=l.child;a;){if(a===r){o=!0,r=l,i=s;break}if(a===i){o=!0,i=l,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,i=l;break}if(a===i){o=!0,i=s,r=l;break}a=a.sibling}if(!o)throw Error(T(189))}}if(r.alternate!==i)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?t:e}function fh(t){return t=Im(t),t!==null?ph(t):null}function ph(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ph(t);if(e!==null)return e;t=t.sibling}return null}var mh=et.unstable_scheduleCallback,Ac=et.unstable_cancelCallback,Om=et.unstable_shouldYield,zm=et.unstable_requestPaint,ge=et.unstable_now,$m=et.unstable_getCurrentPriorityLevel,aa=et.unstable_ImmediatePriority,xh=et.unstable_UserBlockingPriority,fl=et.unstable_NormalPriority,Um=et.unstable_LowPriority,gh=et.unstable_IdlePriority,Ul=null,Nt=null;function Hm(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Xm,Wm=Math.log,Vm=Math.LN2;function Xm(t){return t>>>=0,t===0?32:31-(Wm(t)/Vm|0)|0}var Ai=64,Mi=4194304;function Pr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,l=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var a=o&~l;a!==0?i=Pr(a):(s&=o,s!==0&&(i=Pr(s)))}else o=r&~l,o!==0?i=Pr(o):s!==0&&(i=Pr(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&l)&&(l=i&-i,s=e&-e,l>=s||l===16&&(s&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-xt(e),l=1<<r,i|=t[r],e&=~l;return i}function Qm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gm(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,c=l[o];c===-1?(!(a&r)||a&i)&&(l[o]=Qm(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function po(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jh(){var t=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),t}function ks(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ci(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=r}function Km(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var l=31-xt(r),s=1<<l;e[l]=0,i[l]=-1,t[l]=-1,r&=~s}}function ca(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-xt(r),l=1<<i;l&e|t[i]&e&&(t[i]|=e),r&=~l}}var ee=0;function vh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yh,ua,wh,Ch,_h,mo=!1,Fi=[],Yt=null,Zt=null,Jt=null,Zr=new Map,Jr=new Map,Wt=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mc(t,e){switch(t){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Zr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(e.pointerId)}}function br(t,e,r,i,l,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},e!==null&&(e=ki(e),e!==null&&ua(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Zm(t,e,r,i,l){switch(e){case"focusin":return Yt=br(Yt,t,e,r,i,l),!0;case"dragenter":return Zt=br(Zt,t,e,r,i,l),!0;case"mouseover":return Jt=br(Jt,t,e,r,i,l),!0;case"pointerover":var s=l.pointerId;return Zr.set(s,br(Zr.get(s)||null,t,e,r,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Jr.set(s,br(Jr.get(s)||null,t,e,r,i,l)),!0}return!1}function kh(t){var e=yn(t.target);if(e!==null){var r=An(e);if(r!==null){if(e=r.tag,e===13){if(e=hh(r),e!==null){t.blockedOn=e,_h(t.priority,function(){wh(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=xo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);co=i,r.target.dispatchEvent(i),co=null}else return e=ki(r),e!==null&&ua(e),t.blockedOn=r,!1;e.shift()}return!0}function Fc(t,e,r){qi(t)&&r.delete(e)}function Jm(){mo=!1,Yt!==null&&qi(Yt)&&(Yt=null),Zt!==null&&qi(Zt)&&(Zt=null),Jt!==null&&qi(Jt)&&(Jt=null),Zr.forEach(Fc),Jr.forEach(Fc)}function Sr(t,e){t.blockedOn===e&&(t.blockedOn=null,mo||(mo=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Jm)))}function qr(t){function e(l){return Sr(l,t)}if(0<Fi.length){Sr(Fi[0],t);for(var r=1;r<Fi.length;r++){var i=Fi[r];i.blockedOn===t&&(i.blockedOn=null)}}for(Yt!==null&&Sr(Yt,t),Zt!==null&&Sr(Zt,t),Jt!==null&&Sr(Jt,t),Zr.forEach(e),Jr.forEach(e),r=0;r<Wt.length;r++)i=Wt[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wt.length&&(r=Wt[0],r.blockedOn===null);)kh(r),r.blockedOn===null&&Wt.shift()}var rr=It.ReactCurrentBatchConfig,ml=!0;function qm(t,e,r,i){var l=ee,s=rr.transition;rr.transition=null;try{ee=1,da(t,e,r,i)}finally{ee=l,rr.transition=s}}function ex(t,e,r,i){var l=ee,s=rr.transition;rr.transition=null;try{ee=4,da(t,e,r,i)}finally{ee=l,rr.transition=s}}function da(t,e,r,i){if(ml){var l=xo(t,e,r,i);if(l===null)Ps(t,e,i,xl,r),Mc(t,i);else if(Zm(l,t,e,r,i))i.stopPropagation();else if(Mc(t,i),e&4&&-1<Ym.indexOf(t)){for(;l!==null;){var s=ki(l);if(s!==null&&yh(s),s=xo(t,e,r,i),s===null&&Ps(t,e,i,xl,r),s===l)break;l=s}l!==null&&i.stopPropagation()}else Ps(t,e,i,null,r)}}var xl=null;function xo(t,e,r,i){if(xl=null,t=oa(i),t=yn(t),t!==null)if(e=An(t),e===null)t=null;else if(r=e.tag,r===13){if(t=hh(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Nh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case aa:return 1;case xh:return 4;case fl:case Um:return 16;case gh:return 536870912;default:return 16}default:return 16}}var Xt=null,ha=null,el=null;function bh(){if(el)return el;var t,e=ha,r=e.length,i,l="value"in Xt?Xt.value:Xt.textContent,s=l.length;for(t=0;t<r&&e[t]===l[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===l[s-i];i++);return el=l.slice(t,1<i?1-i:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ii(){return!0}function Ic(){return!1}function rt(t){function e(r,i,l,s,o){this._reactName=r,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ii:Ic,this.isPropagationStopped=Ic,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),e}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=rt(jr),_i=fe({},jr,{view:0,detail:0}),tx=rt(_i),Ns,bs,Er,Hl=fe({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Er&&(Er&&t.type==="mousemove"?(Ns=t.screenX-Er.screenX,bs=t.screenY-Er.screenY):bs=Ns=0,Er=t),Ns)},movementY:function(t){return"movementY"in t?t.movementY:bs}}),Oc=rt(Hl),nx=fe({},Hl,{dataTransfer:0}),rx=rt(nx),ix=fe({},_i,{relatedTarget:0}),Ss=rt(ix),lx=fe({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=rt(lx),ox=fe({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ax=rt(ox),cx=fe({},jr,{data:0}),zc=rt(cx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hx[t])?!!e[t]:!1}function pa(){return fx}var px=fe({},_i,{key:function(t){if(t.key){var e=ux[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mx=rt(px),xx=fe({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=rt(xx),gx=fe({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),jx=rt(gx),vx=fe({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yx=rt(vx),wx=fe({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=rt(wx),_x=[9,13,27,32],ma=Pt&&"CompositionEvent"in window,$r=null;Pt&&"documentMode"in document&&($r=document.documentMode);var kx=Pt&&"TextEvent"in window&&!$r,Sh=Pt&&(!ma||$r&&8<$r&&11>=$r),Uc=" ",Hc=!1;function Eh(t,e){switch(t){case"keyup":return _x.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hn=!1;function Nx(t,e){switch(t){case"compositionend":return Th(e);case"keypress":return e.which!==32?null:(Hc=!0,Uc);case"textInput":return t=e.data,t===Uc&&Hc?null:t;default:return null}}function bx(t,e){if(Hn)return t==="compositionend"||!ma&&Eh(t,e)?(t=bh(),el=ha=Xt=null,Hn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sh&&e.locale!=="ko"?null:e.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sx[t.type]:e==="textarea"}function Rh(t,e,r,i){oh(i),e=gl(e,"onChange"),0<e.length&&(r=new fa("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var Ur=null,ei=null;function Ex(t){$h(t,0)}function Wl(t){var e=Xn(t);if(eh(e))return t}function Tx(t,e){if(t==="change")return e}var Bh=!1;if(Pt){var Es;if(Pt){var Ts="oninput"in document;if(!Ts){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),Ts=typeof Vc.oninput=="function"}Es=Ts}else Es=!1;Bh=Es&&(!document.documentMode||9<document.documentMode)}function Xc(){Ur&&(Ur.detachEvent("onpropertychange",Lh),ei=Ur=null)}function Lh(t){if(t.propertyName==="value"&&Wl(ei)){var e=[];Rh(e,ei,t,oa(t)),dh(Ex,e)}}function Rx(t,e,r){t==="focusin"?(Xc(),Ur=e,ei=r,Ur.attachEvent("onpropertychange",Lh)):t==="focusout"&&Xc()}function Bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(ei)}function Lx(t,e){if(t==="click")return Wl(e)}function Dx(t,e){if(t==="input"||t==="change")return Wl(e)}function Px(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:Px;function ti(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var l=r[i];if(!Zs.call(e,l)||!jt(t[l],e[l]))return!1}return!0}function Qc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gc(t,e){var r=Qc(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qc(r)}}function Dh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ph(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=ul(t.document)}return e}function xa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ax(t){var e=Ph(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Dh(r.ownerDocument.documentElement,r)){if(i!==null&&xa(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=r.textContent.length,s=Math.min(i.start,l);i=i.end===void 0?s:Math.min(i.end,l),!t.extend&&s>i&&(l=i,i=s,s=l),l=Gc(r,s);var o=Gc(r,i);l&&o&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mx=Pt&&"documentMode"in document&&11>=document.documentMode,Wn=null,go=null,Hr=null,jo=!1;function Kc(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jo||Wn==null||Wn!==ul(i)||(i=Wn,"selectionStart"in i&&xa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hr&&ti(Hr,i)||(Hr=i,i=gl(go,"onSelect"),0<i.length&&(e=new fa("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Wn)))}function Oi(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Vn={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionend:Oi("Transition","TransitionEnd")},Rs={},Ah={};Pt&&(Ah=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Vl(t){if(Rs[t])return Rs[t];if(!Vn[t])return t;var e=Vn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Ah)return Rs[t]=e[r];return t}var Mh=Vl("animationend"),Fh=Vl("animationiteration"),Ih=Vl("animationstart"),Oh=Vl("transitionend"),zh=new Map,Yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(t,e){zh.set(t,e),Pn(e,[t])}for(var Bs=0;Bs<Yc.length;Bs++){var Ls=Yc[Bs],Fx=Ls.toLowerCase(),Ix=Ls[0].toUpperCase()+Ls.slice(1);dn(Fx,"on"+Ix)}dn(Mh,"onAnimationEnd");dn(Fh,"onAnimationIteration");dn(Ih,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Oh,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Zc(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,Fm(i,e,void 0,t),t.currentTarget=null}function $h(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],l=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&l.isPropagationStopped())break e;Zc(l,a,u),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&l.isPropagationStopped())break e;Zc(l,a,u),s=c}}}if(hl)throw t=fo,hl=!1,fo=null,t}function ie(t,e){var r=e[_o];r===void 0&&(r=e[_o]=new Set);var i=t+"__bubble";r.has(i)||(Uh(e,t,2,!1),r.add(i))}function Ds(t,e,r){var i=0;e&&(i|=4),Uh(r,t,i,e)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ni(t){if(!t[zi]){t[zi]=!0,Kd.forEach(function(r){r!=="selectionchange"&&(Ox.has(r)||Ds(r,!1,t),Ds(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zi]||(e[zi]=!0,Ds("selectionchange",!1,e))}}function Uh(t,e,r,i){switch(Nh(e)){case 1:var l=qm;break;case 4:l=ex;break;default:l=da}r=l.bind(null,e,r,t),l=void 0,!ho||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,r,{capture:!0,passive:l}):t.addEventListener(e,r,!0):l!==void 0?t.addEventListener(e,r,{passive:l}):t.addEventListener(e,r,!1)}function Ps(t,e,r,i,l){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;a!==null;){if(o=yn(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dh(function(){var u=s,d=oa(r),f=[];e:{var x=zh.get(t);if(x!==void 0){var g=fa,v=t;switch(t){case"keypress":if(tl(r)===0)break e;case"keydown":case"keyup":g=mx;break;case"focusin":v="focus",g=Ss;break;case"focusout":v="blur",g=Ss;break;case"beforeblur":case"afterblur":g=Ss;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jx;break;case Mh:case Fh:case Ih:g=sx;break;case Oh:g=yx;break;case"scroll":g=tx;break;case"wheel":g=Cx;break;case"copy":case"cut":case"paste":g=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$c}var y=(e&4)!==0,k=!y&&t==="scroll",p=y?x!==null?x+"Capture":null:x;y=[];for(var h=u,j;h!==null;){j=h;var w=j.stateNode;if(j.tag===5&&w!==null&&(j=w,p!==null&&(w=Yr(h,p),w!=null&&y.push(ri(h,w,j)))),k)break;h=h.return}0<y.length&&(x=new g(x,v,null,r,d),f.push({event:x,listeners:y}))}}if(!(e&7)){e:{if(x=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",x&&r!==co&&(v=r.relatedTarget||r.fromElement)&&(yn(v)||v[At]))break e;if((g||x)&&(x=d.window===d?d:(x=d.ownerDocument)?x.defaultView||x.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=u,v=v?yn(v):null,v!==null&&(k=An(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Oc,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=$c,w="onPointerLeave",p="onPointerEnter",h="pointer"),k=g==null?x:Xn(g),j=v==null?x:Xn(v),x=new y(w,h+"leave",g,r,d),x.target=k,x.relatedTarget=j,w=null,yn(d)===u&&(y=new y(p,h+"enter",v,r,d),y.target=j,y.relatedTarget=k,w=y),k=w,g&&v)t:{for(y=g,p=v,h=0,j=y;j;j=On(j))h++;for(j=0,w=p;w;w=On(w))j++;for(;0<h-j;)y=On(y),h--;for(;0<j-h;)p=On(p),j--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=On(y),p=On(p)}y=null}else y=null;g!==null&&Jc(f,x,g,y,!1),v!==null&&k!==null&&Jc(f,k,v,y,!0)}}e:{if(x=u?Xn(u):window,g=x.nodeName&&x.nodeName.toLowerCase(),g==="select"||g==="input"&&x.type==="file")var _=Tx;else if(Wc(x))if(Bh)_=Dx;else{_=Bx;var S=Rx}else(g=x.nodeName)&&g.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=Lx);if(_&&(_=_(t,u))){Rh(f,_,r,d);break e}S&&S(t,x,u),t==="focusout"&&(S=x._wrapperState)&&S.controlled&&x.type==="number"&&io(x,"number",x.value)}switch(S=u?Xn(u):window,t){case"focusin":(Wc(S)||S.contentEditable==="true")&&(Wn=S,go=u,Hr=null);break;case"focusout":Hr=go=Wn=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,Kc(f,r,d);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":Kc(f,r,d)}var E;if(ma)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Hn?Eh(t,r)&&(B="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(B="onCompositionStart");B&&(Sh&&r.locale!=="ko"&&(Hn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Hn&&(E=bh()):(Xt=d,ha="value"in Xt?Xt.value:Xt.textContent,Hn=!0)),S=gl(u,B),0<S.length&&(B=new zc(B,t,null,r,d),f.push({event:B,listeners:S}),E?B.data=E:(E=Th(r),E!==null&&(B.data=E)))),(E=kx?Nx(t,r):bx(t,r))&&(u=gl(u,"onBeforeInput"),0<u.length&&(d=new zc("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=E))}$h(f,e)})}function ri(t,e,r){return{instance:t,listener:e,currentTarget:r}}function gl(t,e){for(var r=e+"Capture",i=[];t!==null;){var l=t,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Yr(t,r),s!=null&&i.unshift(ri(t,s,l)),s=Yr(t,e),s!=null&&i.push(ri(t,s,l))),t=t.return}return i}function On(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jc(t,e,r,i,l){for(var s=e._reactName,o=[];r!==null&&r!==i;){var a=r,c=a.alternate,u=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&u!==null&&(a=u,l?(c=Yr(r,s),c!=null&&o.unshift(ri(r,c,a))):l||(c=Yr(r,s),c!=null&&o.push(ri(r,c,a)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var zx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function qc(t){return(typeof t=="string"?t:""+t).replace(zx,`
`).replace($x,"")}function $i(t,e,r){if(e=qc(e),qc(t)!==e&&r)throw Error(T(425))}function jl(){}var vo=null,yo=null;function wo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,eu=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof eu<"u"?function(t){return eu.resolve(null).then(t).catch(Wx)}:Co;function Wx(t){setTimeout(function(){throw t})}function As(t,e){var r=e,i=0;do{var l=r.nextSibling;if(t.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(i===0){t.removeChild(l),qr(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=l}while(r);qr(e)}function qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var vr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+vr,ii="__reactProps$"+vr,At="__reactContainer$"+vr,_o="__reactEvents$"+vr,Vx="__reactListeners$"+vr,Xx="__reactHandles$"+vr;function yn(t){var e=t[Ct];if(e)return e;for(var r=t.parentNode;r;){if(e=r[At]||r[Ct]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=tu(t);t!==null;){if(r=t[Ct])return r;t=tu(t)}return e}t=r,r=t.parentNode}return null}function ki(t){return t=t[Ct]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Xl(t){return t[ii]||null}var ko=[],Qn=-1;function hn(t){return{current:t}}function se(t){0>Qn||(t.current=ko[Qn],ko[Qn]=null,Qn--)}function ne(t,e){Qn++,ko[Qn]=t.current,t.current=e}var on={},Ie=hn(on),Ve=hn(!1),Sn=on;function ar(t,e){var r=t.type.contextTypes;if(!r)return on;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in r)l[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=l),l}function Xe(t){return t=t.childContextTypes,t!=null}function vl(){se(Ve),se(Ie)}function nu(t,e,r){if(Ie.current!==on)throw Error(T(168));ne(Ie,e),ne(Ve,r)}function Hh(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var l in i)if(!(l in e))throw Error(T(108,Rm(t)||"Unknown",l));return fe({},r,i)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,Sn=Ie.current,ne(Ie,t),ne(Ve,Ve.current),!0}function ru(t,e,r){var i=t.stateNode;if(!i)throw Error(T(169));r?(t=Hh(t,e,Sn),i.__reactInternalMemoizedMergedChildContext=t,se(Ve),se(Ie),ne(Ie,t)):se(Ve),ne(Ve,r)}var Rt=null,Ql=!1,Ms=!1;function Wh(t){Rt===null?Rt=[t]:Rt.push(t)}function Qx(t){Ql=!0,Wh(t)}function fn(){if(!Ms&&Rt!==null){Ms=!0;var t=0,e=ee;try{var r=Rt;for(ee=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}Rt=null,Ql=!1}catch(l){throw Rt!==null&&(Rt=Rt.slice(t+1)),mh(aa,fn),l}finally{ee=e,Ms=!1}}return null}var Gn=[],Kn=0,wl=null,Cl=0,lt=[],st=0,En=null,Bt=1,Lt="";function jn(t,e){Gn[Kn++]=Cl,Gn[Kn++]=wl,wl=t,Cl=e}function Vh(t,e,r){lt[st++]=Bt,lt[st++]=Lt,lt[st++]=En,En=t;var i=Bt;t=Lt;var l=32-xt(i)-1;i&=~(1<<l),r+=1;var s=32-xt(e)+l;if(30<s){var o=l-l%5;s=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Bt=1<<32-xt(e)+l|r<<l|i,Lt=s+t}else Bt=1<<s|r<<l|i,Lt=t}function ga(t){t.return!==null&&(jn(t,1),Vh(t,1,0))}function ja(t){for(;t===wl;)wl=Gn[--Kn],Gn[Kn]=null,Cl=Gn[--Kn],Gn[Kn]=null;for(;t===En;)En=lt[--st],lt[st]=null,Lt=lt[--st],lt[st]=null,Bt=lt[--st],lt[st]=null}var Je=null,Ze=null,ae=!1,mt=null;function Xh(t,e){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function iu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Je=t,Ze=qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Je=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=En!==null?{id:Bt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Je=t,Ze=null,!0):!1;default:return!1}}function No(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bo(t){if(ae){var e=Ze;if(e){var r=e;if(!iu(t,e)){if(No(t))throw Error(T(418));e=qt(r.nextSibling);var i=Je;e&&iu(t,e)?Xh(i,r):(t.flags=t.flags&-4097|2,ae=!1,Je=t)}}else{if(No(t))throw Error(T(418));t.flags=t.flags&-4097|2,ae=!1,Je=t}}}function lu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Je=t}function Ui(t){if(t!==Je)return!1;if(!ae)return lu(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wo(t.type,t.memoizedProps)),e&&(e=Ze)){if(No(t))throw Qh(),Error(T(418));for(;e;)Xh(t,e),e=qt(e.nextSibling)}if(lu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ze=qt(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=Je?qt(t.stateNode.nextSibling):null;return!0}function Qh(){for(var t=Ze;t;)t=qt(t.nextSibling)}function cr(){Ze=Je=null,ae=!1}function va(t){mt===null?mt=[t]:mt.push(t)}var Gx=It.ReactCurrentBatchConfig;function ft(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var _l=hn(null),kl=null,Yn=null,ya=null;function wa(){ya=Yn=kl=null}function Ca(t){var e=_l.current;se(_l),t._currentValue=e}function So(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function ir(t,e){kl=t,ya=Yn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(ya!==t)if(t={context:t,memoizedValue:e,next:null},Yn===null){if(kl===null)throw Error(T(308));Yn=t,kl.dependencies={lanes:0,firstContext:t}}else Yn=Yn.next=t;return e}var wn=null;function _a(t){wn===null?wn=[t]:wn.push(t)}function Gh(t,e,r,i){var l=e.interleaved;return l===null?(r.next=r,_a(e)):(r.next=l.next,l.next=r),e.interleaved=r,Mt(t,i)}function Mt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ht=!1;function ka(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Z&2){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,Mt(t,r)}return l=i.interleaved,l===null?(e.next=e,_a(i)):(e.next=l.next,l.next=e),i.interleaved=e,Mt(t,r)}function nl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,ca(t,r)}}function su(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var l=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?l=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?l=s=e:s=s.next=e}else l=s=e;r={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Nl(t,e,r,i){var l=t.updateQueue;Ht=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=l.baseState;o=0,d=u=c=null,a=s;do{var x=a.lane,g=a.eventTime;if((i&x)===x){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(x=e,g=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,x);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,x=typeof v=="function"?v.call(g,f,x):v,x==null)break e;f=fe({},f,x);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=l.effects,x===null?l.effects=[a]:x.push(a))}else g={eventTime:g,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,c=f):d=d.next=g,o|=x;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;x=a,a=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);if(d===null&&(c=f),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=d,e=l.shared.interleaved,e!==null){l=e;do o|=l.lane,l=l.next;while(l!==e)}else s===null&&(l.shared.lanes=0);Rn|=o,t.lanes=o,t.memoizedState=f}}function ou(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],l=i.callback;if(l!==null){if(i.callback=null,i=r,typeof l!="function")throw Error(T(191,l));l.call(i)}}}var Yh=new Gd.Component().refs;function Eo(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:fe({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Gl={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=ze(),l=nn(t),s=Dt(i,l);s.payload=e,r!=null&&(s.callback=r),e=en(t,s,l),e!==null&&(gt(e,t,l,i),nl(e,t,l))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=ze(),l=nn(t),s=Dt(i,l);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=en(t,s,l),e!==null&&(gt(e,t,l,i),nl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ze(),i=nn(t),l=Dt(r,i);l.tag=2,e!=null&&(l.callback=e),e=en(t,l,i),e!==null&&(gt(e,t,i,r),nl(e,t,i))}};function au(t,e,r,i,l,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ti(r,i)||!ti(l,s):!0}function Zh(t,e,r){var i=!1,l=on,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(l=Xe(e)?Sn:Ie.current,i=e.contextTypes,s=(i=i!=null)?ar(t,l):on),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=s),e}function cu(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Gl.enqueueReplaceState(e,e.state,null)}function To(t,e,r,i){var l=t.stateNode;l.props=r,l.state=t.memoizedState,l.refs=Yh,ka(t);var s=e.contextType;typeof s=="object"&&s!==null?l.context=ct(s):(s=Xe(e)?Sn:Ie.current,l.context=ar(t,s)),l.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eo(t,e,s,r),l.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&Gl.enqueueReplaceState(l,l.state,null),Nl(t,r,l,i),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Tr(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var i=r.stateNode}if(!i)throw Error(T(147,t));var l=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=l.refs;a===Yh&&(a=l.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,t))}return t}function Hi(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uu(t){var e=t._init;return e(t._payload)}function Jh(t){function e(p,h){if(t){var j=p.deletions;j===null?(p.deletions=[h],p.flags|=16):j.push(h)}}function r(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function i(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function l(p,h){return p=rn(p,h),p.index=0,p.sibling=null,p}function s(p,h,j){return p.index=j,t?(j=p.alternate,j!==null?(j=j.index,j<h?(p.flags|=2,h):j):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,j,w){return h===null||h.tag!==6?(h=Hs(j,p.mode,w),h.return=p,h):(h=l(h,j),h.return=p,h)}function c(p,h,j,w){var _=j.type;return _===Un?d(p,h,j.props.children,w,j.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&uu(_)===h.type)?(w=l(h,j.props),w.ref=Tr(p,h,j),w.return=p,w):(w=al(j.type,j.key,j.props,null,p.mode,w),w.ref=Tr(p,h,j),w.return=p,w)}function u(p,h,j,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==j.containerInfo||h.stateNode.implementation!==j.implementation?(h=Ws(j,p.mode,w),h.return=p,h):(h=l(h,j.children||[]),h.return=p,h)}function d(p,h,j,w,_){return h===null||h.tag!==7?(h=kn(j,p.mode,w,_),h.return=p,h):(h=l(h,j),h.return=p,h)}function f(p,h,j){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Hs(""+h,p.mode,j),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Li:return j=al(h.type,h.key,h.props,null,p.mode,j),j.ref=Tr(p,null,h),j.return=p,j;case $n:return h=Ws(h,p.mode,j),h.return=p,h;case Ut:var w=h._init;return f(p,w(h._payload),j)}if(Dr(h)||kr(h))return h=kn(h,p.mode,j,null),h.return=p,h;Hi(p,h)}return null}function x(p,h,j,w){var _=h!==null?h.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return _!==null?null:a(p,h,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Li:return j.key===_?c(p,h,j,w):null;case $n:return j.key===_?u(p,h,j,w):null;case Ut:return _=j._init,x(p,h,_(j._payload),w)}if(Dr(j)||kr(j))return _!==null?null:d(p,h,j,w,null);Hi(p,j)}return null}function g(p,h,j,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(j)||null,a(h,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Li:return p=p.get(w.key===null?j:w.key)||null,c(h,p,w,_);case $n:return p=p.get(w.key===null?j:w.key)||null,u(h,p,w,_);case Ut:var S=w._init;return g(p,h,j,S(w._payload),_)}if(Dr(w)||kr(w))return p=p.get(j)||null,d(h,p,w,_,null);Hi(h,w)}return null}function v(p,h,j,w){for(var _=null,S=null,E=h,B=h=0,z=null;E!==null&&B<j.length;B++){E.index>B?(z=E,E=null):z=E.sibling;var F=x(p,E,j[B],w);if(F===null){E===null&&(E=z);break}t&&E&&F.alternate===null&&e(p,E),h=s(F,h,B),S===null?_=F:S.sibling=F,S=F,E=z}if(B===j.length)return r(p,E),ae&&jn(p,B),_;if(E===null){for(;B<j.length;B++)E=f(p,j[B],w),E!==null&&(h=s(E,h,B),S===null?_=E:S.sibling=E,S=E);return ae&&jn(p,B),_}for(E=i(p,E);B<j.length;B++)z=g(E,p,B,j[B],w),z!==null&&(t&&z.alternate!==null&&E.delete(z.key===null?B:z.key),h=s(z,h,B),S===null?_=z:S.sibling=z,S=z);return t&&E.forEach(function(Q){return e(p,Q)}),ae&&jn(p,B),_}function y(p,h,j,w){var _=kr(j);if(typeof _!="function")throw Error(T(150));if(j=_.call(j),j==null)throw Error(T(151));for(var S=_=null,E=h,B=h=0,z=null,F=j.next();E!==null&&!F.done;B++,F=j.next()){E.index>B?(z=E,E=null):z=E.sibling;var Q=x(p,E,F.value,w);if(Q===null){E===null&&(E=z);break}t&&E&&Q.alternate===null&&e(p,E),h=s(Q,h,B),S===null?_=Q:S.sibling=Q,S=Q,E=z}if(F.done)return r(p,E),ae&&jn(p,B),_;if(E===null){for(;!F.done;B++,F=j.next())F=f(p,F.value,w),F!==null&&(h=s(F,h,B),S===null?_=F:S.sibling=F,S=F);return ae&&jn(p,B),_}for(E=i(p,E);!F.done;B++,F=j.next())F=g(E,p,B,F.value,w),F!==null&&(t&&F.alternate!==null&&E.delete(F.key===null?B:F.key),h=s(F,h,B),S===null?_=F:S.sibling=F,S=F);return t&&E.forEach(function(te){return e(p,te)}),ae&&jn(p,B),_}function k(p,h,j,w){if(typeof j=="object"&&j!==null&&j.type===Un&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Li:e:{for(var _=j.key,S=h;S!==null;){if(S.key===_){if(_=j.type,_===Un){if(S.tag===7){r(p,S.sibling),h=l(S,j.props.children),h.return=p,p=h;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&uu(_)===S.type){r(p,S.sibling),h=l(S,j.props),h.ref=Tr(p,S,j),h.return=p,p=h;break e}r(p,S);break}else e(p,S);S=S.sibling}j.type===Un?(h=kn(j.props.children,p.mode,w,j.key),h.return=p,p=h):(w=al(j.type,j.key,j.props,null,p.mode,w),w.ref=Tr(p,h,j),w.return=p,p=w)}return o(p);case $n:e:{for(S=j.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===j.containerInfo&&h.stateNode.implementation===j.implementation){r(p,h.sibling),h=l(h,j.children||[]),h.return=p,p=h;break e}else{r(p,h);break}else e(p,h);h=h.sibling}h=Ws(j,p.mode,w),h.return=p,p=h}return o(p);case Ut:return S=j._init,k(p,h,S(j._payload),w)}if(Dr(j))return v(p,h,j,w);if(kr(j))return y(p,h,j,w);Hi(p,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,h!==null&&h.tag===6?(r(p,h.sibling),h=l(h,j),h.return=p,p=h):(r(p,h),h=Hs(j,p.mode,w),h.return=p,p=h),o(p)):r(p,h)}return k}var ur=Jh(!0),qh=Jh(!1),Ni={},bt=hn(Ni),li=hn(Ni),si=hn(Ni);function Cn(t){if(t===Ni)throw Error(T(174));return t}function Na(t,e){switch(ne(si,e),ne(li,t),ne(bt,Ni),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:so(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=so(e,t)}se(bt),ne(bt,e)}function dr(){se(bt),se(li),se(si)}function ef(t){Cn(si.current);var e=Cn(bt.current),r=so(e,t.type);e!==r&&(ne(li,t),ne(bt,r))}function ba(t){li.current===t&&(se(bt),se(li))}var ue=hn(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fs=[];function Sa(){for(var t=0;t<Fs.length;t++)Fs[t]._workInProgressVersionPrimary=null;Fs.length=0}var rl=It.ReactCurrentDispatcher,Is=It.ReactCurrentBatchConfig,Tn=0,de=null,ye=null,ke=null,Sl=!1,Wr=!1,oi=0,Kx=0;function Ae(){throw Error(T(321))}function Ea(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!jt(t[r],e[r]))return!1;return!0}function Ta(t,e,r,i,l,s){if(Tn=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?qx:eg,t=r(i,l),Wr){s=0;do{if(Wr=!1,oi=0,25<=s)throw Error(T(301));s+=1,ke=ye=null,e.updateQueue=null,rl.current=tg,t=r(i,l)}while(Wr)}if(rl.current=El,e=ye!==null&&ye.next!==null,Tn=0,ke=ye=de=null,Sl=!1,e)throw Error(T(300));return t}function Ra(){var t=oi!==0;return oi=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?de.memoizedState=ke=t:ke=ke.next=t,ke}function ut(){if(ye===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=ke===null?de.memoizedState:ke.next;if(e!==null)ke=e,ye=t;else{if(t===null)throw Error(T(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},ke===null?de.memoizedState=ke=t:ke=ke.next=t}return ke}function ai(t,e){return typeof e=="function"?e(t):e}function Os(t){var e=ut(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=ye,l=i.baseQueue,s=r.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}i.baseQueue=l=s,r.pending=null}if(l!==null){s=l.next,i=i.baseState;var a=o=null,c=null,u=s;do{var d=u.lane;if((Tn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,o=i):c=c.next=f,de.lanes|=d,Rn|=d}u=u.next}while(u!==null&&u!==s);c===null?o=i:c.next=a,jt(i,e.memoizedState)||(We=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,r.lastRenderedState=i}if(t=r.interleaved,t!==null){l=t;do s=l.lane,de.lanes|=s,Rn|=s,l=l.next;while(l!==t)}else l===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function zs(t){var e=ut(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=r.dispatch,l=r.pending,s=e.memoizedState;if(l!==null){r.pending=null;var o=l=l.next;do s=t(s,o.action),o=o.next;while(o!==l);jt(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,i]}function tf(){}function nf(t,e){var r=de,i=ut(),l=e(),s=!jt(i.memoizedState,l);if(s&&(i.memoizedState=l,We=!0),i=i.queue,Ba(sf.bind(null,r,i,t),[t]),i.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(r.flags|=2048,ci(9,lf.bind(null,r,i,l,e),void 0,null),Ne===null)throw Error(T(349));Tn&30||rf(r,e,l)}return l}function rf(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function lf(t,e,r,i){e.value=r,e.getSnapshot=i,of(e)&&af(t)}function sf(t,e,r){return r(function(){of(e)&&af(t)})}function of(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!jt(t,r)}catch{return!0}}function af(t){var e=Mt(t,1);e!==null&&gt(e,t,1,-1)}function du(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:t},e.queue=t,t=t.dispatch=Jx.bind(null,de,t),[e.memoizedState,t]}function ci(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function cf(){return ut().memoizedState}function il(t,e,r,i){var l=wt();de.flags|=t,l.memoizedState=ci(1|e,r,void 0,i===void 0?null:i)}function Kl(t,e,r,i){var l=ut();i=i===void 0?null:i;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,i!==null&&Ea(i,o.deps)){l.memoizedState=ci(e,r,s,i);return}}de.flags|=t,l.memoizedState=ci(1|e,r,s,i)}function hu(t,e){return il(8390656,8,t,e)}function Ba(t,e){return Kl(2048,8,t,e)}function uf(t,e){return Kl(4,2,t,e)}function df(t,e){return Kl(4,4,t,e)}function hf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ff(t,e,r){return r=r!=null?r.concat([t]):null,Kl(4,4,hf.bind(null,e,t),r)}function La(){}function pf(t,e){var r=ut();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Ea(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function mf(t,e){var r=ut();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Ea(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function xf(t,e,r){return Tn&21?(jt(r,e)||(r=jh(),de.lanes|=r,Rn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=r)}function Yx(t,e){var r=ee;ee=r!==0&&4>r?r:4,t(!0);var i=Is.transition;Is.transition={};try{t(!1),e()}finally{ee=r,Is.transition=i}}function gf(){return ut().memoizedState}function Zx(t,e,r){var i=nn(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},jf(t))vf(e,r);else if(r=Gh(t,e,r,i),r!==null){var l=ze();gt(r,t,i,l),yf(r,e,i)}}function Jx(t,e,r){var i=nn(t),l={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(jf(t))vf(e,l);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,r);if(l.hasEagerState=!0,l.eagerState=a,jt(a,o)){var c=e.interleaved;c===null?(l.next=l,_a(e)):(l.next=c.next,c.next=l),e.interleaved=l;return}}catch{}finally{}r=Gh(t,e,l,i),r!==null&&(l=ze(),gt(r,t,i,l),yf(r,e,i))}}function jf(t){var e=t.alternate;return t===de||e!==null&&e===de}function vf(t,e){Wr=Sl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function yf(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,ca(t,r)}}var El={readContext:ct,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},qx={readContext:ct,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:hu,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,il(4194308,4,hf.bind(null,e,t),r)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var r=wt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=wt();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Zx.bind(null,de,t),[i.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:du,useDebugValue:La,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=du(!1),e=t[0];return t=Yx.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=de,l=wt();if(ae){if(r===void 0)throw Error(T(407));r=r()}else{if(r=e(),Ne===null)throw Error(T(349));Tn&30||rf(i,e,r)}l.memoizedState=r;var s={value:r,getSnapshot:e};return l.queue=s,hu(sf.bind(null,i,s,t),[t]),i.flags|=2048,ci(9,lf.bind(null,i,s,r,e),void 0,null),r},useId:function(){var t=wt(),e=Ne.identifierPrefix;if(ae){var r=Lt,i=Bt;r=(i&~(1<<32-xt(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=oi++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Kx++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eg={readContext:ct,useCallback:pf,useContext:ct,useEffect:Ba,useImperativeHandle:ff,useInsertionEffect:uf,useLayoutEffect:df,useMemo:mf,useReducer:Os,useRef:cf,useState:function(){return Os(ai)},useDebugValue:La,useDeferredValue:function(t){var e=ut();return xf(e,ye.memoizedState,t)},useTransition:function(){var t=Os(ai)[0],e=ut().memoizedState;return[t,e]},useMutableSource:tf,useSyncExternalStore:nf,useId:gf,unstable_isNewReconciler:!1},tg={readContext:ct,useCallback:pf,useContext:ct,useEffect:Ba,useImperativeHandle:ff,useInsertionEffect:uf,useLayoutEffect:df,useMemo:mf,useReducer:zs,useRef:cf,useState:function(){return zs(ai)},useDebugValue:La,useDeferredValue:function(t){var e=ut();return ye===null?e.memoizedState=t:xf(e,ye.memoizedState,t)},useTransition:function(){var t=zs(ai)[0],e=ut().memoizedState;return[t,e]},useMutableSource:tf,useSyncExternalStore:nf,useId:gf,unstable_isNewReconciler:!1};function hr(t,e){try{var r="",i=e;do r+=Tm(i),i=i.return;while(i);var l=r}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:l,digest:null}}function $s(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ro(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var ng=typeof WeakMap=="function"?WeakMap:Map;function wf(t,e,r){r=Dt(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Rl||(Rl=!0,zo=i),Ro(t,e)},r}function Cf(t,e,r){r=Dt(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=e.value;r.payload=function(){return i(l)},r.callback=function(){Ro(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Ro(t,e),typeof i!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function fu(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new ng;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(r)||(l.add(r),t=xg.bind(null,t,e,r),e.then(t,t))}function pu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mu(t,e,r,i,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Dt(-1,1),e.tag=2,en(r,e,1))),r.lanes|=1),t)}var rg=It.ReactCurrentOwner,We=!1;function Oe(t,e,r,i){e.child=t===null?qh(e,null,r,i):ur(e,t.child,r,i)}function xu(t,e,r,i,l){r=r.render;var s=e.ref;return ir(e,l),i=Ta(t,e,r,i,s,l),r=Ra(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,Ft(t,e,l)):(ae&&r&&ga(e),e.flags|=1,Oe(t,e,i,l),e.child)}function gu(t,e,r,i,l){if(t===null){var s=r.type;return typeof s=="function"&&!za(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,_f(t,e,s,i,l)):(t=al(r.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&l)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:ti,r(o,i)&&t.ref===e.ref)return Ft(t,e,l)}return e.flags|=1,t=rn(s,i),t.ref=e.ref,t.return=e,e.child=t}function _f(t,e,r,i,l){if(t!==null){var s=t.memoizedProps;if(ti(s,i)&&t.ref===e.ref)if(We=!1,e.pendingProps=i=s,(t.lanes&l)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Ft(t,e,l)}return Bo(t,e,r,i,l)}function kf(t,e,r){var i=e.pendingProps,l=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Jn,Ke),Ke|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Jn,Ke),Ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,ne(Jn,Ke),Ke|=i}else s!==null?(i=s.baseLanes|r,e.memoizedState=null):i=r,ne(Jn,Ke),Ke|=i;return Oe(t,e,l,r),e.child}function Nf(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Bo(t,e,r,i,l){var s=Xe(r)?Sn:Ie.current;return s=ar(e,s),ir(e,l),r=Ta(t,e,r,i,s,l),i=Ra(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,Ft(t,e,l)):(ae&&i&&ga(e),e.flags|=1,Oe(t,e,r,l),e.child)}function ju(t,e,r,i,l){if(Xe(r)){var s=!0;yl(e)}else s=!1;if(ir(e,l),e.stateNode===null)ll(t,e),Zh(e,r,i),To(e,r,i,l),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Xe(r)?Sn:Ie.current,u=ar(e,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==u)&&cu(e,o,i,u),Ht=!1;var x=e.memoizedState;o.state=x,Nl(e,i,o,l),c=e.memoizedState,a!==i||x!==c||Ve.current||Ht?(typeof d=="function"&&(Eo(e,r,d,i),c=e.memoizedState),(a=Ht||au(e,r,a,i,x,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Kh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ft(e.type,a),o.props=u,f=e.pendingProps,x=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Xe(r)?Sn:Ie.current,c=ar(e,c));var g=r.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||x!==c)&&cu(e,o,i,c),Ht=!1,x=e.memoizedState,o.state=x,Nl(e,i,o,l);var v=e.memoizedState;a!==f||x!==v||Ve.current||Ht?(typeof g=="function"&&(Eo(e,r,g,i),v=e.memoizedState),(u=Ht||au(e,r,u,i,x,v,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=c,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(e.flags|=1024),i=!1)}return Lo(t,e,r,i,s,l)}function Lo(t,e,r,i,l,s){Nf(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return l&&ru(e,r,!1),Ft(t,e,s);i=e.stateNode,rg.current=e;var a=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ur(e,t.child,null,s),e.child=ur(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=i.state,l&&ru(e,r,!0),e.child}function bf(t){var e=t.stateNode;e.pendingContext?nu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nu(t,e.context,!1),Na(t,e.containerInfo)}function vu(t,e,r,i,l){return cr(),va(l),e.flags|=256,Oe(t,e,r,i),e.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Po(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sf(t,e,r){var i=e.pendingProps,l=ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(l&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),ne(ue,l&1),t===null)return bo(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,i,0,null),t=kn(t,i,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Po(r),e.memoizedState=Do,t):Da(e,o));if(l=t.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return ig(t,e,o,i,a,l,r);if(s){s=i.fallback,o=e.mode,l=t.child,a=l.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==l?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=rn(l,c),i.subtreeFlags=l.subtreeFlags&14680064),a!==null?s=rn(a,s):(s=kn(s,o,r,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Po(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Do,i}return s=t.child,t=s.sibling,i=rn(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Da(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wi(t,e,r,i){return i!==null&&va(i),ur(e,t.child,null,r),t=Da(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ig(t,e,r,i,l,s,o){if(r)return e.flags&256?(e.flags&=-257,i=$s(Error(T(422))),Wi(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,l=e.mode,i=Jl({mode:"visible",children:i.children},l,0,null),s=kn(s,l,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ur(e,t.child,null,o),e.child.memoizedState=Po(o),e.memoizedState=Do,s);if(!(e.mode&1))return Wi(t,e,o,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(T(419)),i=$s(s,i,void 0),Wi(t,e,o,i)}if(a=(o&t.childLanes)!==0,We||a){if(i=Ne,i!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(i.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Mt(t,l),gt(i,t,l,-1))}return Oa(),i=$s(Error(T(421))),Wi(t,e,o,i)}return l.data==="$?"?(e.flags|=128,e.child=t.child,e=gg.bind(null,t),l._reactRetry=e,null):(t=s.treeContext,Ze=qt(l.nextSibling),Je=e,ae=!0,mt=null,t!==null&&(lt[st++]=Bt,lt[st++]=Lt,lt[st++]=En,Bt=t.id,Lt=t.overflow,En=e),e=Da(e,i.children),e.flags|=4096,e)}function yu(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),So(t.return,e,r)}function Us(t,e,r,i,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=l)}function Ef(t,e,r){var i=e.pendingProps,l=i.revealOrder,s=i.tail;if(Oe(t,e,i.children,r),i=ue.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yu(t,r,e);else if(t.tag===19)yu(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ne(ue,i),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(r=e.child,l=null;r!==null;)t=r.alternate,t!==null&&bl(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=e.child,e.child=null):(l=r.sibling,r.sibling=null),Us(e,!1,l,r,s);break;case"backwards":for(r=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&bl(t)===null){e.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}Us(e,!0,r,null,s);break;case"together":Us(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Rn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,r=rn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=rn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function lg(t,e,r){switch(e.tag){case 3:bf(e),cr();break;case 5:ef(e);break;case 1:Xe(e.type)&&yl(e);break;case 4:Na(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,l=e.memoizedProps.value;ne(_l,i._currentValue),i._currentValue=l;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ne(ue,ue.current&1),e.flags|=128,null):r&e.child.childLanes?Sf(t,e,r):(ne(ue,ue.current&1),t=Ft(t,e,r),t!==null?t.sibling:null);ne(ue,ue.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Ef(t,e,r);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(ue,ue.current),i)break;return null;case 22:case 23:return e.lanes=0,kf(t,e,r)}return Ft(t,e,r)}var Tf,Ao,Rf,Bf;Tf=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ao=function(){};Rf=function(t,e,r,i){var l=t.memoizedProps;if(l!==i){t=e.stateNode,Cn(bt.current);var s=null;switch(r){case"input":l=no(t,l),i=no(t,i),s=[];break;case"select":l=fe({},l,{value:void 0}),i=fe({},i,{value:void 0}),s=[];break;case"textarea":l=lo(t,l),i=lo(t,i),s=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=jl)}oo(r,i);var o;r=null;for(u in l)if(!i.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(a=l!=null?l[u]:void 0,i.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ie("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}r&&(s=s||[]).push("style",r);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bf=function(t,e,r,i){r!==i&&(e.flags|=4)};function Rr(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function sg(t,e,r){var i=e.pendingProps;switch(ja(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Xe(e.type)&&vl(),Me(e),null;case 3:return i=e.stateNode,dr(),se(Ve),se(Ie),Sa(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ui(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mt!==null&&(Ho(mt),mt=null))),Ao(t,e),Me(e),null;case 5:ba(e);var l=Cn(si.current);if(r=e.type,t!==null&&e.stateNode!=null)Rf(t,e,r,i,l),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(T(166));return Me(e),null}if(t=Cn(bt.current),Ui(e)){i=e.stateNode,r=e.type;var s=e.memoizedProps;switch(i[Ct]=e,i[ii]=s,t=(e.mode&1)!==0,r){case"dialog":ie("cancel",i),ie("close",i);break;case"iframe":case"object":case"embed":ie("load",i);break;case"video":case"audio":for(l=0;l<Ar.length;l++)ie(Ar[l],i);break;case"source":ie("error",i);break;case"img":case"image":case"link":ie("error",i),ie("load",i);break;case"details":ie("toggle",i);break;case"input":Tc(i,s),ie("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ie("invalid",i);break;case"textarea":Bc(i,s),ie("invalid",i)}oo(r,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$i(i.textContent,a,t),l=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$i(i.textContent,a,t),l=["children",""+a]):Gr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",i)}switch(r){case"input":Di(i),Rc(i,s,!0);break;case"textarea":Di(i),Lc(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=jl)}i=l,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rh(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[Ct]=e,t[ii]=i,Tf(t,e,!1,!1),e.stateNode=t;e:{switch(o=ao(r,i),r){case"dialog":ie("cancel",t),ie("close",t),l=i;break;case"iframe":case"object":case"embed":ie("load",t),l=i;break;case"video":case"audio":for(l=0;l<Ar.length;l++)ie(Ar[l],t);l=i;break;case"source":ie("error",t),l=i;break;case"img":case"image":case"link":ie("error",t),ie("load",t),l=i;break;case"details":ie("toggle",t),l=i;break;case"input":Tc(t,i),l=no(t,i),ie("invalid",t);break;case"option":l=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},l=fe({},i,{value:void 0}),ie("invalid",t);break;case"textarea":Bc(t,i),l=lo(t,i),ie("invalid",t);break;default:l=i}oo(r,l),a=l;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?sh(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ih(t,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Kr(t,c):typeof c=="number"&&Kr(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ie("scroll",t):c!=null&&ra(t,s,c,o))}switch(r){case"input":Di(t),Rc(t,i,!1);break;case"textarea":Di(t),Lc(t);break;case"option":i.value!=null&&t.setAttribute("value",""+sn(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?er(t,!!i.multiple,s,!1):i.defaultValue!=null&&er(t,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=jl)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Bf(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(T(166));if(r=Cn(si.current),Cn(bt.current),Ui(e)){if(i=e.stateNode,r=e.memoizedProps,i[Ct]=e,(s=i.nodeValue!==r)&&(t=Je,t!==null))switch(t.tag){case 3:$i(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$i(i.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ct]=e,e.stateNode=i}return Me(e),null;case 13:if(se(ue),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&e.mode&1&&!(e.flags&128))Qh(),cr(),e.flags|=98560,s=!1;else if(s=Ui(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Ct]=e}else cr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else mt!==null&&(Ho(mt),mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?we===0&&(we=3):Oa())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return dr(),Ao(t,e),t===null&&ni(e.stateNode.containerInfo),Me(e),null;case 10:return Ca(e.type._context),Me(e),null;case 17:return Xe(e.type)&&vl(),Me(e),null;case 19:if(se(ue),s=e.memoizedState,s===null)return Me(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Rr(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,Rr(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)s=r,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ne(ue,ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>fr&&(e.flags|=128,i=!0,Rr(s,!1),e.lanes=4194304)}else{if(!i)if(t=bl(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return Me(e),null}else 2*ge()-s.renderingStartTime>fr&&r!==1073741824&&(e.flags|=128,i=!0,Rr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,r=ue.current,ne(ue,i?r&1|2:r&1),e):(Me(e),null);case 22:case 23:return Ia(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ke&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function og(t,e){switch(ja(e),e.tag){case 1:return Xe(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return dr(),se(Ve),se(Ie),Sa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ba(e),null;case 13:if(se(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));cr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ue),null;case 4:return dr(),null;case 10:return Ca(e.type._context),null;case 22:case 23:return Ia(),null;case 24:return null;default:return null}}var Vi=!1,Fe=!1,ag=typeof WeakSet=="function"?WeakSet:Set,A=null;function Zn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){pe(t,e,i)}else r.current=null}function Mo(t,e,r){try{r()}catch(i){pe(t,e,i)}}var wu=!1;function cg(t,e){if(vo=ml,t=Ph(),xa(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,c=-1,u=0,d=0,f=t,x=null;t:for(;;){for(var g;f!==r||l!==0&&f.nodeType!==3||(a=o+l),f!==s||i!==0&&f.nodeType!==3||(c=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)x=f,f=g;for(;;){if(f===t)break t;if(x===r&&++u===l&&(a=o),x===s&&++d===i&&(c=o),(g=f.nextSibling)!==null)break;f=x,x=f.parentNode}f=g}r=a===-1||c===-1?null:{start:a,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(yo={focusedElem:t,selectionRange:r},ml=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:ft(e.type,y),k);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var j=e.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=wu,wu=!1,v}function Vr(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&t)===t){var s=l.destroy;l.destroy=void 0,s!==void 0&&Mo(e,r,s)}l=l.next}while(l!==i)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Fo(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Lf(t){var e=t.alternate;e!==null&&(t.alternate=null,Lf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[ii],delete e[_o],delete e[Vx],delete e[Xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Df(t){return t.tag===5||t.tag===3||t.tag===4}function Cu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Df(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Io(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=jl));else if(i!==4&&(t=t.child,t!==null))for(Io(t,e,r),t=t.sibling;t!==null;)Io(t,e,r),t=t.sibling}function Oo(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Oo(t,e,r),t=t.sibling;t!==null;)Oo(t,e,r),t=t.sibling}var Ee=null,pt=!1;function $t(t,e,r){for(r=r.child;r!==null;)Pf(t,e,r),r=r.sibling}function Pf(t,e,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ul,r)}catch{}switch(r.tag){case 5:Fe||Zn(r,e);case 6:var i=Ee,l=pt;Ee=null,$t(t,e,r),Ee=i,pt=l,Ee!==null&&(pt?(t=Ee,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ee.removeChild(r.stateNode));break;case 18:Ee!==null&&(pt?(t=Ee,r=r.stateNode,t.nodeType===8?As(t.parentNode,r):t.nodeType===1&&As(t,r),qr(t)):As(Ee,r.stateNode));break;case 4:i=Ee,l=pt,Ee=r.stateNode.containerInfo,pt=!0,$t(t,e,r),Ee=i,pt=l;break;case 0:case 11:case 14:case 15:if(!Fe&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mo(r,e,o),l=l.next}while(l!==i)}$t(t,e,r);break;case 1:if(!Fe&&(Zn(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(a){pe(r,e,a)}$t(t,e,r);break;case 21:$t(t,e,r);break;case 22:r.mode&1?(Fe=(i=Fe)||r.memoizedState!==null,$t(t,e,r),Fe=i):$t(t,e,r);break;default:$t(t,e,r)}}function _u(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ag),e.forEach(function(i){var l=jg.bind(null,t,i);r.has(i)||(r.add(i),i.then(l,l))})}}function ht(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var l=r[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,pt=!1;break e;case 3:Ee=a.stateNode.containerInfo,pt=!0;break e;case 4:Ee=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Ee===null)throw Error(T(160));Pf(s,o,l),Ee=null,pt=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){pe(l,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Af(e,t),e=e.sibling}function Af(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),yt(t),i&4){try{Vr(3,t,t.return),Yl(3,t)}catch(y){pe(t,t.return,y)}try{Vr(5,t,t.return)}catch(y){pe(t,t.return,y)}}break;case 1:ht(e,t),yt(t),i&512&&r!==null&&Zn(r,r.return);break;case 5:if(ht(e,t),yt(t),i&512&&r!==null&&Zn(r,r.return),t.flags&32){var l=t.stateNode;try{Kr(l,"")}catch(y){pe(t,t.return,y)}}if(i&4&&(l=t.stateNode,l!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&th(l,s),ao(a,o);var u=ao(a,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?sh(l,f):d==="dangerouslySetInnerHTML"?ih(l,f):d==="children"?Kr(l,f):ra(l,d,f,u)}switch(a){case"input":ro(l,s);break;case"textarea":nh(l,s);break;case"select":var x=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?er(l,!!s.multiple,g,!1):x!==!!s.multiple&&(s.defaultValue!=null?er(l,!!s.multiple,s.defaultValue,!0):er(l,!!s.multiple,s.multiple?[]:"",!1))}l[ii]=s}catch(y){pe(t,t.return,y)}}break;case 6:if(ht(e,t),yt(t),i&4){if(t.stateNode===null)throw Error(T(162));l=t.stateNode,s=t.memoizedProps;try{l.nodeValue=s}catch(y){pe(t,t.return,y)}}break;case 3:if(ht(e,t),yt(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{qr(e.containerInfo)}catch(y){pe(t,t.return,y)}break;case 4:ht(e,t),yt(t);break;case 13:ht(e,t),yt(t),l=t.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Ma=ge())),i&4&&_u(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||d,ht(e,t),Fe=u):ht(e,t),yt(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(f=A=d;A!==null;){switch(x=A,g=x.child,x.tag){case 0:case 11:case 14:case 15:Vr(4,x,x.return);break;case 1:Zn(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){i=x,r=x.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){pe(i,r,y)}}break;case 5:Zn(x,x.return);break;case 22:if(x.memoizedState!==null){Nu(f);continue}}g!==null?(g.return=x,A=g):Nu(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{l=f.stateNode,u?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=lh("display",o))}catch(y){pe(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){pe(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ht(e,t),yt(t),i&4&&_u(t);break;case 21:break;default:ht(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Df(r)){var i=r;break e}r=r.return}throw Error(T(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Kr(l,""),i.flags&=-33);var s=Cu(t);Oo(t,s,l);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cu(t);Io(t,a,o);break;default:throw Error(T(161))}}catch(c){pe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ug(t,e,r){A=t,Mf(t)}function Mf(t,e,r){for(var i=(t.mode&1)!==0;A!==null;){var l=A,s=l.child;if(l.tag===22&&i){var o=l.memoizedState!==null||Vi;if(!o){var a=l.alternate,c=a!==null&&a.memoizedState!==null||Fe;a=Vi;var u=Fe;if(Vi=o,(Fe=c)&&!u)for(A=l;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?bu(l):c!==null?(c.return=o,A=c):bu(l);for(;s!==null;)A=s,Mf(s),s=s.sibling;A=l,Vi=a,Fe=u}ku(t)}else l.subtreeFlags&8772&&s!==null?(s.return=l,A=s):ku(t)}}function ku(t){for(;A!==null;){var e=A;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Fe)if(r===null)i.componentDidMount();else{var l=e.elementType===e.type?r.memoizedProps:ft(e.type,r.memoizedProps);i.componentDidUpdate(l,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ou(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}ou(e,o,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&qr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Fe||e.flags&512&&Fo(e)}catch(x){pe(e,e.return,x)}}if(e===t){A=null;break}if(r=e.sibling,r!==null){r.return=e.return,A=r;break}A=e.return}}function Nu(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var r=e.sibling;if(r!==null){r.return=e.return,A=r;break}A=e.return}}function bu(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Yl(4,e)}catch(c){pe(e,r,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var l=e.return;try{i.componentDidMount()}catch(c){pe(e,l,c)}}var s=e.return;try{Fo(e)}catch(c){pe(e,s,c)}break;case 5:var o=e.return;try{Fo(e)}catch(c){pe(e,o,c)}}}catch(c){pe(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var dg=Math.ceil,Tl=It.ReactCurrentDispatcher,Pa=It.ReactCurrentOwner,at=It.ReactCurrentBatchConfig,Z=0,Ne=null,je=null,Be=0,Ke=0,Jn=hn(0),we=0,ui=null,Rn=0,Zl=0,Aa=0,Xr=null,He=null,Ma=0,fr=1/0,Tt=null,Rl=!1,zo=null,tn=null,Xi=!1,Qt=null,Bl=0,Qr=0,$o=null,sl=-1,ol=0;function ze(){return Z&6?ge():sl!==-1?sl:sl=ge()}function nn(t){return t.mode&1?Z&2&&Be!==0?Be&-Be:Gx.transition!==null?(ol===0&&(ol=jh()),ol):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Nh(t.type)),t):1}function gt(t,e,r,i){if(50<Qr)throw Qr=0,$o=null,Error(T(185));Ci(t,r,i),(!(Z&2)||t!==Ne)&&(t===Ne&&(!(Z&2)&&(Zl|=r),we===4&&Vt(t,Be)),Qe(t,i),r===1&&Z===0&&!(e.mode&1)&&(fr=ge()+500,Ql&&fn()))}function Qe(t,e){var r=t.callbackNode;Gm(t,e);var i=pl(t,t===Ne?Be:0);if(i===0)r!==null&&Ac(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Ac(r),e===1)t.tag===0?Qx(Su.bind(null,t)):Wh(Su.bind(null,t)),Hx(function(){!(Z&6)&&fn()}),r=null;else{switch(vh(i)){case 1:r=aa;break;case 4:r=xh;break;case 16:r=fl;break;case 536870912:r=gh;break;default:r=fl}r=Wf(r,Ff.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Ff(t,e){if(sl=-1,ol=0,Z&6)throw Error(T(327));var r=t.callbackNode;if(lr()&&t.callbackNode!==r)return null;var i=pl(t,t===Ne?Be:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ll(t,i);else{e=i;var l=Z;Z|=2;var s=Of();(Ne!==t||Be!==e)&&(Tt=null,fr=ge()+500,_n(t,e));do try{pg();break}catch(a){If(t,a)}while(!0);wa(),Tl.current=s,Z=l,je!==null?e=0:(Ne=null,Be=0,e=we)}if(e!==0){if(e===2&&(l=po(t),l!==0&&(i=l,e=Uo(t,l))),e===1)throw r=ui,_n(t,0),Vt(t,i),Qe(t,ge()),r;if(e===6)Vt(t,i);else{if(l=t.current.alternate,!(i&30)&&!hg(l)&&(e=Ll(t,i),e===2&&(s=po(t),s!==0&&(i=s,e=Uo(t,s))),e===1))throw r=ui,_n(t,0),Vt(t,i),Qe(t,ge()),r;switch(t.finishedWork=l,t.finishedLanes=i,e){case 0:case 1:throw Error(T(345));case 2:vn(t,He,Tt);break;case 3:if(Vt(t,i),(i&130023424)===i&&(e=Ma+500-ge(),10<e)){if(pl(t,0)!==0)break;if(l=t.suspendedLanes,(l&i)!==i){ze(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=Co(vn.bind(null,t,He,Tt),e);break}vn(t,He,Tt);break;case 4:if(Vt(t,i),(i&4194240)===i)break;for(e=t.eventTimes,l=-1;0<i;){var o=31-xt(i);s=1<<o,o=e[o],o>l&&(l=o),i&=~s}if(i=l,i=ge()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dg(i/1960))-i,10<i){t.timeoutHandle=Co(vn.bind(null,t,He,Tt),i);break}vn(t,He,Tt);break;case 5:vn(t,He,Tt);break;default:throw Error(T(329))}}}return Qe(t,ge()),t.callbackNode===r?Ff.bind(null,t):null}function Uo(t,e){var r=Xr;return t.current.memoizedState.isDehydrated&&(_n(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=He,He=r,e!==null&&Ho(e)),t}function Ho(t){He===null?He=t:He.push.apply(He,t)}function hg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var l=r[i],s=l.getSnapshot;l=l.value;try{if(!jt(s(),l))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~Aa,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-xt(e),i=1<<r;t[r]=-1,e&=~i}}function Su(t){if(Z&6)throw Error(T(327));lr();var e=pl(t,0);if(!(e&1))return Qe(t,ge()),null;var r=Ll(t,e);if(t.tag!==0&&r===2){var i=po(t);i!==0&&(e=i,r=Uo(t,i))}if(r===1)throw r=ui,_n(t,0),Vt(t,e),Qe(t,ge()),r;if(r===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vn(t,He,Tt),Qe(t,ge()),null}function Fa(t,e){var r=Z;Z|=1;try{return t(e)}finally{Z=r,Z===0&&(fr=ge()+500,Ql&&fn())}}function Bn(t){Qt!==null&&Qt.tag===0&&!(Z&6)&&lr();var e=Z;Z|=1;var r=at.transition,i=ee;try{if(at.transition=null,ee=1,t)return t()}finally{ee=i,at.transition=r,Z=e,!(Z&6)&&fn()}}function Ia(){Ke=Jn.current,se(Jn)}function _n(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Ux(r)),je!==null)for(r=je.return;r!==null;){var i=r;switch(ja(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:dr(),se(Ve),se(Ie),Sa();break;case 5:ba(i);break;case 4:dr();break;case 13:se(ue);break;case 19:se(ue);break;case 10:Ca(i.type._context);break;case 22:case 23:Ia()}r=r.return}if(Ne=t,je=t=rn(t.current,null),Be=Ke=e,we=0,ui=null,Aa=Zl=Rn=0,He=Xr=null,wn!==null){for(e=0;e<wn.length;e++)if(r=wn[e],i=r.interleaved,i!==null){r.interleaved=null;var l=i.next,s=r.pending;if(s!==null){var o=s.next;s.next=l,i.next=o}r.pending=i}wn=null}return t}function If(t,e){do{var r=je;try{if(wa(),rl.current=El,Sl){for(var i=de.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}Sl=!1}if(Tn=0,ke=ye=de=null,Wr=!1,oi=0,Pa.current=null,r===null||r.return===null){we=1,ui=e,je=null;break}e:{var s=t,o=r.return,a=r,c=e;if(e=Be,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var x=d.alternate;x?(d.updateQueue=x.updateQueue,d.memoizedState=x.memoizedState,d.lanes=x.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=pu(o);if(g!==null){g.flags&=-257,mu(g,o,a,s,e),g.mode&1&&fu(s,u,e),e=g,c=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(c),e.updateQueue=y}else v.add(c);break e}else{if(!(e&1)){fu(s,u,e),Oa();break e}c=Error(T(426))}}else if(ae&&a.mode&1){var k=pu(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),mu(k,o,a,s,e),va(hr(c,a));break e}}s=c=hr(c,a),we!==4&&(we=2),Xr===null?Xr=[s]:Xr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=wf(s,c,e);su(s,p);break e;case 1:a=c;var h=s.type,j=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(tn===null||!tn.has(j)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Cf(s,a,e);su(s,w);break e}}s=s.return}while(s!==null)}$f(r)}catch(_){e=_,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function Of(){var t=Tl.current;return Tl.current=El,t===null?El:t}function Oa(){(we===0||we===3||we===2)&&(we=4),Ne===null||!(Rn&268435455)&&!(Zl&268435455)||Vt(Ne,Be)}function Ll(t,e){var r=Z;Z|=2;var i=Of();(Ne!==t||Be!==e)&&(Tt=null,_n(t,e));do try{fg();break}catch(l){If(t,l)}while(!0);if(wa(),Z=r,Tl.current=i,je!==null)throw Error(T(261));return Ne=null,Be=0,we}function fg(){for(;je!==null;)zf(je)}function pg(){for(;je!==null&&!Om();)zf(je)}function zf(t){var e=Hf(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?$f(t):je=e,Pa.current=null}function $f(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=og(r,e),r!==null){r.flags&=32767,je=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,je=null;return}}else if(r=sg(r,e,Ke),r!==null){je=r;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);we===0&&(we=5)}function vn(t,e,r){var i=ee,l=at.transition;try{at.transition=null,ee=1,mg(t,e,r,i)}finally{at.transition=l,ee=i}return null}function mg(t,e,r,i){do lr();while(Qt!==null);if(Z&6)throw Error(T(327));r=t.finishedWork;var l=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(Km(t,s),t===Ne&&(je=Ne=null,Be=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xi||(Xi=!0,Wf(fl,function(){return lr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=ee;ee=1;var a=Z;Z|=4,Pa.current=null,cg(t,r),Af(r,t),Ax(yo),ml=!!vo,yo=vo=null,t.current=r,ug(r),zm(),Z=a,ee=o,at.transition=s}else t.current=r;if(Xi&&(Xi=!1,Qt=t,Bl=l),s=t.pendingLanes,s===0&&(tn=null),Hm(r.stateNode),Qe(t,ge()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)l=e[r],i(l.value,{componentStack:l.stack,digest:l.digest});if(Rl)throw Rl=!1,t=zo,zo=null,t;return Bl&1&&t.tag!==0&&lr(),s=t.pendingLanes,s&1?t===$o?Qr++:(Qr=0,$o=t):Qr=0,fn(),null}function lr(){if(Qt!==null){var t=vh(Bl),e=at.transition,r=ee;try{if(at.transition=null,ee=16>t?16:t,Qt===null)var i=!1;else{if(t=Qt,Qt=null,Bl=0,Z&6)throw Error(T(331));var l=Z;for(Z|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Vr(8,d,s)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var x=d.sibling,g=d.return;if(Lf(d),d===u){A=null;break}if(x!==null){x.return=g,A=x;break}A=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var h=t.current;for(A=h;A!==null;){o=A;var j=o.child;if(o.subtreeFlags&2064&&j!==null)j.return=o,A=j;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(_){pe(a,a.return,_)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Z=l,fn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{ee=r,at.transition=e}}return!1}function Eu(t,e,r){e=hr(r,e),e=wf(t,e,1),t=en(t,e,1),e=ze(),t!==null&&(Ci(t,1,e),Qe(t,e))}function pe(t,e,r){if(t.tag===3)Eu(t,t,r);else for(;e!==null;){if(e.tag===3){Eu(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tn===null||!tn.has(i))){t=hr(r,t),t=Cf(e,t,1),e=en(e,t,1),t=ze(),e!==null&&(Ci(e,1,t),Qe(e,t));break}}e=e.return}}function xg(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&r,Ne===t&&(Be&r)===r&&(we===4||we===3&&(Be&130023424)===Be&&500>ge()-Ma?_n(t,0):Aa|=r),Qe(t,e)}function Uf(t,e){e===0&&(t.mode&1?(e=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):e=1);var r=ze();t=Mt(t,e),t!==null&&(Ci(t,e,r),Qe(t,r))}function gg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Uf(t,r)}function jg(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(T(314))}i!==null&&i.delete(e),Uf(t,r)}var Hf;Hf=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)We=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return We=!1,lg(t,e,r);We=!!(t.flags&131072)}else We=!1,ae&&e.flags&1048576&&Vh(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var l=ar(e,Ie.current);ir(e,r),l=Ta(null,e,i,t,l,r);var s=Ra();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(i)?(s=!0,yl(e)):s=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ka(e),l.updater=Gl,e.stateNode=l,l._reactInternals=e,To(e,i,t,r),e=Lo(null,e,i,!0,s,r)):(e.tag=0,ae&&s&&ga(e),Oe(null,e,l,r),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,l=i._init,i=l(i._payload),e.type=i,l=e.tag=yg(i),t=ft(i,t),l){case 0:e=Bo(null,e,i,t,r);break e;case 1:e=ju(null,e,i,t,r);break e;case 11:e=xu(null,e,i,t,r);break e;case 14:e=gu(null,e,i,ft(i.type,t),r);break e}throw Error(T(306,i,""))}return e;case 0:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),Bo(t,e,i,l,r);case 1:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),ju(t,e,i,l,r);case 3:e:{if(bf(e),t===null)throw Error(T(387));i=e.pendingProps,s=e.memoizedState,l=s.element,Kh(t,e),Nl(e,i,null,r);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){l=hr(Error(T(423)),e),e=vu(t,e,i,r,l);break e}else if(i!==l){l=hr(Error(T(424)),e),e=vu(t,e,i,r,l);break e}else for(Ze=qt(e.stateNode.containerInfo.firstChild),Je=e,ae=!0,mt=null,r=qh(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(cr(),i===l){e=Ft(t,e,r);break e}Oe(t,e,i,r)}e=e.child}return e;case 5:return ef(e),t===null&&bo(e),i=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,o=l.children,wo(i,l)?o=null:s!==null&&wo(i,s)&&(e.flags|=32),Nf(t,e),Oe(t,e,o,r),e.child;case 6:return t===null&&bo(e),null;case 13:return Sf(t,e,r);case 4:return Na(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ur(e,null,i,r):Oe(t,e,i,r),e.child;case 11:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),xu(t,e,i,l,r);case 7:return Oe(t,e,e.pendingProps,r),e.child;case 8:return Oe(t,e,e.pendingProps.children,r),e.child;case 12:return Oe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,l=e.pendingProps,s=e.memoizedProps,o=l.value,ne(_l,i._currentValue),i._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===l.children&&!Ve.current){e=Ft(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Dt(-1,r&-r),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),So(s.return,r,e),a.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),So(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,l.children,r),e=e.child}return e;case 9:return l=e.type,i=e.pendingProps.children,ir(e,r),l=ct(l),i=i(l),e.flags|=1,Oe(t,e,i,r),e.child;case 14:return i=e.type,l=ft(i,e.pendingProps),l=ft(i.type,l),gu(t,e,i,l,r);case 15:return _f(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:ft(i,l),ll(t,e),e.tag=1,Xe(i)?(t=!0,yl(e)):t=!1,ir(e,r),Zh(e,i,l),To(e,i,l,r),Lo(null,e,i,!0,t,r);case 19:return Ef(t,e,r);case 22:return kf(t,e,r)}throw Error(T(156,e.tag))};function Wf(t,e){return mh(t,e)}function vg(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,r,i){return new vg(t,e,r,i)}function za(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yg(t){if(typeof t=="function")return za(t)?1:0;if(t!=null){if(t=t.$$typeof,t===la)return 11;if(t===sa)return 14}return 2}function rn(t,e){var r=t.alternate;return r===null?(r=ot(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function al(t,e,r,i,l,s){var o=2;if(i=t,typeof t=="function")za(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Un:return kn(r.children,l,s,e);case ia:o=8,l|=8;break;case Js:return t=ot(12,r,e,l|2),t.elementType=Js,t.lanes=s,t;case qs:return t=ot(13,r,e,l),t.elementType=qs,t.lanes=s,t;case eo:return t=ot(19,r,e,l),t.elementType=eo,t.lanes=s,t;case Jd:return Jl(r,l,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yd:o=10;break e;case Zd:o=9;break e;case la:o=11;break e;case sa:o=14;break e;case Ut:o=16,i=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=ot(o,r,e,l),e.elementType=t,e.type=i,e.lanes=s,e}function kn(t,e,r,i){return t=ot(7,t,i,e),t.lanes=r,t}function Jl(t,e,r,i){return t=ot(22,t,i,e),t.elementType=Jd,t.lanes=r,t.stateNode={isHidden:!1},t}function Hs(t,e,r){return t=ot(6,t,null,e),t.lanes=r,t}function Ws(t,e,r){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wg(t,e,r,i,l){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function $a(t,e,r,i,l,s,o,a,c){return t=new wg(t,e,r,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(s),t}function Cg(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Vf(t){if(!t)return on;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var r=t.type;if(Xe(r))return Hh(t,r,e)}return e}function Xf(t,e,r,i,l,s,o,a,c){return t=$a(r,i,!0,t,l,s,o,a,c),t.context=Vf(null),r=t.current,i=ze(),l=nn(r),s=Dt(i,l),s.callback=e??null,en(r,s,l),t.current.lanes=l,Ci(t,l,i),Qe(t,i),t}function ql(t,e,r,i){var l=e.current,s=ze(),o=nn(l);return r=Vf(r),e.context===null?e.context=r:e.pendingContext=r,e=Dt(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=en(l,e,o),t!==null&&(gt(t,l,o,s),nl(t,l,o)),o}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Ua(t,e){Tu(t,e),(t=t.alternate)&&Tu(t,e)}function _g(){return null}var Qf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ha(t){this._internalRoot=t}es.prototype.render=Ha.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));ql(t,e,null,null)};es.prototype.unmount=Ha.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bn(function(){ql(null,t,null,null)}),e[At]=null}};function es(t){this._internalRoot=t}es.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ch();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Wt.length&&e!==0&&e<Wt[r].priority;r++);Wt.splice(r,0,t),r===0&&kh(t)}};function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ts(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function kg(t,e,r,i,l){if(l){if(typeof i=="function"){var s=i;i=function(){var u=Dl(o);s.call(u)}}var o=Xf(e,i,t,0,null,!1,!1,"",Ru);return t._reactRootContainer=o,t[At]=o.current,ni(t.nodeType===8?t.parentNode:t),Bn(),o}for(;l=t.lastChild;)t.removeChild(l);if(typeof i=="function"){var a=i;i=function(){var u=Dl(c);a.call(u)}}var c=$a(t,0,!1,null,null,!1,!1,"",Ru);return t._reactRootContainer=c,t[At]=c.current,ni(t.nodeType===8?t.parentNode:t),Bn(function(){ql(e,c,r,i)}),c}function ns(t,e,r,i,l){var s=r._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var a=l;l=function(){var c=Dl(o);a.call(c)}}ql(e,o,t,l)}else o=kg(r,e,t,l,i);return Dl(o)}yh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Pr(e.pendingLanes);r!==0&&(ca(e,r|1),Qe(e,ge()),!(Z&6)&&(fr=ge()+500,fn()))}break;case 13:Bn(function(){var i=Mt(t,1);if(i!==null){var l=ze();gt(i,t,1,l)}}),Ua(t,1)}};ua=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var r=ze();gt(e,t,134217728,r)}Ua(t,134217728)}};wh=function(t){if(t.tag===13){var e=nn(t),r=Mt(t,e);if(r!==null){var i=ze();gt(r,t,e,i)}Ua(t,e)}};Ch=function(){return ee};_h=function(t,e){var r=ee;try{return ee=t,e()}finally{ee=r}};uo=function(t,e,r){switch(e){case"input":if(ro(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var l=Xl(i);if(!l)throw Error(T(90));eh(i),ro(i,l)}}}break;case"textarea":nh(t,r);break;case"select":e=r.value,e!=null&&er(t,!!r.multiple,e,!1)}};ch=Fa;uh=Bn;var Ng={usingClientEntryPoint:!1,Events:[ki,Xn,Xl,oh,ah,Fa]},Br={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bg={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fh(t),t===null?null:t.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||_g,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{Ul=Qi.inject(bg),Nt=Qi}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ng;nt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wa(e))throw Error(T(200));return Cg(t,e,null,r)};nt.createRoot=function(t,e){if(!Wa(t))throw Error(T(299));var r=!1,i="",l=Qf;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=$a(t,1,!1,null,null,r,!1,i,l),t[At]=e.current,ni(t.nodeType===8?t.parentNode:t),new Ha(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=fh(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return Bn(t)};nt.hydrate=function(t,e,r){if(!ts(e))throw Error(T(200));return ns(null,t,e,!0,r)};nt.hydrateRoot=function(t,e,r){if(!Wa(t))throw Error(T(405));var i=r!=null&&r.hydratedSources||null,l=!1,s="",o=Qf;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=Xf(e,null,t,1,r??null,l,!1,s,o),t[At]=e.current,ni(t),i)for(t=0;t<i.length;t++)r=i[t],l=r._getVersion,l=l(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,l]:e.mutableSourceEagerHydrationData.push(r,l);return new es(e)};nt.render=function(t,e,r){if(!ts(e))throw Error(T(200));return ns(null,t,e,!1,r)};nt.unmountComponentAtNode=function(t){if(!ts(t))throw Error(T(40));return t._reactRootContainer?(Bn(function(){ns(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};nt.unstable_batchedUpdates=Fa;nt.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!ts(r))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return ns(t,e,r,!1,i)};nt.version="18.2.0-next-9e3b772b8-20220608";function Gf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gf)}catch(t){console.error(t)}}Gf(),Vd.exports=nt;var bi=Vd.exports,Bu=bi;Ys.createRoot=Bu.createRoot,Ys.hydrateRoot=Bu.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},di.apply(this,arguments)}var Gt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gt||(Gt={}));const Lu="popstate";function Sg(t){t===void 0&&(t={});function e(l,s){let{pathname:o="/",search:a="",hash:c=""}=Mn(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Wo("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(l,s){let o=l.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=l.location.href,u=c.indexOf("#");a=u===-1?c:c.slice(0,u)}return a+"#"+(typeof s=="string"?s:Pl(s))}function i(l,s){rs(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Tg(e,r,i,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Eg(){return Math.random().toString(36).substr(2,8)}function Du(t,e){return{usr:t.state,key:t.key,idx:e}}function Wo(t,e,r,i){return r===void 0&&(r=null),di({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mn(e):e,{state:r,key:e&&e.key||i||Eg()})}function Pl(t){let{pathname:e="/",search:r="",hash:i=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Mn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Tg(t,e,r,i){i===void 0&&(i={});let{window:l=document.defaultView,v5Compat:s=!1}=i,o=l.history,a=Gt.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(di({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Gt.Pop;let k=d(),p=k==null?null:k-u;u=k,c&&c({action:a,location:y.location,delta:p})}function x(k,p){a=Gt.Push;let h=Wo(y.location,k,p);r&&r(h,k),u=d()+1;let j=Du(h,u),w=y.createHref(h);try{o.pushState(j,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(w)}s&&c&&c({action:a,location:y.location,delta:1})}function g(k,p){a=Gt.Replace;let h=Wo(y.location,k,p);r&&r(h,k),u=d();let j=Du(h,u),w=y.createHref(h);o.replaceState(j,"",w),s&&c&&c({action:a,location:y.location,delta:0})}function v(k){let p=l.location.origin!=="null"?l.location.origin:l.location.href,h=typeof k=="string"?k:Pl(k);return he(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return a},get location(){return t(l,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Lu,f),c=k,()=>{l.removeEventListener(Lu,f),c=null}},createHref(k){return e(l,k)},createURL:v,encodeLocation(k){let p=v(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:x,replace:g,go(k){return o.go(k)}};return y}var Pu;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pu||(Pu={}));function Rg(t,e,r){r===void 0&&(r="/");let i=typeof e=="string"?Mn(e):e,l=hi(i.pathname||"/",r);if(l==null)return null;let s=Kf(t);Bg(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=zg(s[a],Ug(l));return o}function Kf(t,e,r,i){e===void 0&&(e=[]),r===void 0&&(r=[]),i===void 0&&(i="");let l=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=ln([i,c.relativePath]),d=r.concat(c);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kf(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ig(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))l(s,o);else for(let c of Yf(s.path))l(s,o,c)}),e}function Yf(t){let e=t.split("/");if(e.length===0)return[];let[r,...i]=e,l=r.endsWith("?"),s=r.replace(/\?$/,"");if(i.length===0)return l?[s,""]:[s];let o=Yf(i.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),l&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Bg(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Og(e.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const Lg=/^:\w+$/,Dg=3,Pg=2,Ag=1,Mg=10,Fg=-2,Au=t=>t==="*";function Ig(t,e){let r=t.split("/"),i=r.length;return r.some(Au)&&(i+=Fg),e&&(i+=Pg),r.filter(l=>!Au(l)).reduce((l,s)=>l+(Lg.test(s)?Dg:s===""?Ag:Mg),i)}function Og(t,e){return t.length===e.length&&t.slice(0,-1).every((i,l)=>i===e[l])?t[t.length-1]-e[e.length-1]:0}function zg(t,e){let{routesMeta:r}=t,i={},l="/",s=[];for(let o=0;o<r.length;++o){let a=r[o],c=o===r.length-1,u=l==="/"?e:e.slice(l.length)||"/",d=Vo({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!d)return null;Object.assign(i,d.params);let f=a.route;s.push({params:i,pathname:ln([l,d.pathname]),pathnameBase:Qg(ln([l,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(l=ln([l,d.pathnameBase]))}return s}function Vo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,i]=$g(t.path,t.caseSensitive,t.end),l=e.match(r);if(!l)return null;let s=l[0],o=s.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:i.reduce((u,d,f)=>{let{paramName:x,isOptional:g}=d;if(x==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?u[x]=void 0:u[x]=Hg(v||"",x),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $g(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),rs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,c)=>(i.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),i]}function Ug(t){try{return decodeURI(t)}catch(e){return rs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hg(t,e){try{return decodeURIComponent(t)}catch(r){return rs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function hi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,i=t.charAt(r);return i&&i!=="/"?null:t.slice(r)||"/"}function Wg(t,e){e===void 0&&(e="/");let{pathname:r,search:i="",hash:l=""}=typeof t=="string"?Mn(t):t;return{pathname:r?r.startsWith("/")?r:Vg(r,e):e,search:Gg(i),hash:Kg(l)}}function Vg(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Vs(t,e,r,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xg(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Va(t,e){let r=Xg(t);return e?r.map((i,l)=>l===t.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Xa(t,e,r,i){i===void 0&&(i=!1);let l;typeof t=="string"?l=Mn(t):(l=di({},t),he(!l.pathname||!l.pathname.includes("?"),Vs("?","pathname","search",l)),he(!l.pathname||!l.pathname.includes("#"),Vs("#","pathname","hash",l)),he(!l.search||!l.search.includes("#"),Vs("#","search","hash",l)));let s=t===""||l.pathname==="",o=s?"/":l.pathname,a;if(o==null)a=r;else{let f=e.length-1;if(!i&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),f-=1;l.pathname=x.join("/")}a=f>=0?e[f]:"/"}let c=Wg(l,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ln=t=>t.join("/").replace(/\/\/+/g,"/"),Qg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Gg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Kg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Yg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Zf=["post","put","patch","delete"];new Set(Zf);const Zg=["get",...Zf];new Set(Zg);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},fi.apply(this,arguments)}const is=m.createContext(null),Jf=m.createContext(null),Ot=m.createContext(null),ls=m.createContext(null),pn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),qf=m.createContext(null);function Jg(t,e){let{relative:r}=e===void 0?{}:e;yr()||he(!1);let{basename:i,navigator:l}=m.useContext(Ot),{hash:s,pathname:o,search:a}=ss(t,{relative:r}),c=o;return i!=="/"&&(c=o==="/"?i:ln([i,o])),l.createHref({pathname:c,search:a,hash:s})}function yr(){return m.useContext(ls)!=null}function wr(){return yr()||he(!1),m.useContext(ls).location}function ep(t){m.useContext(Ot).static||m.useLayoutEffect(t)}function tp(){let{isDataRoute:t}=m.useContext(pn);return t?d0():qg()}function qg(){yr()||he(!1);let t=m.useContext(is),{basename:e,future:r,navigator:i}=m.useContext(Ot),{matches:l}=m.useContext(pn),{pathname:s}=wr(),o=JSON.stringify(Va(l,r.v7_relativeSplatPath)),a=m.useRef(!1);return ep(()=>{a.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=Xa(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ln([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,o,s,t])}function ss(t,e){let{relative:r}=e===void 0?{}:e,{future:i}=m.useContext(Ot),{matches:l}=m.useContext(pn),{pathname:s}=wr(),o=JSON.stringify(Va(l,i.v7_relativeSplatPath));return m.useMemo(()=>Xa(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function e0(t,e){return t0(t,e)}function t0(t,e,r,i){yr()||he(!1);let{navigator:l}=m.useContext(Ot),{matches:s}=m.useContext(pn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=wr(),d;if(e){var f;let k=typeof e=="string"?Mn(e):e;c==="/"||(f=k.pathname)!=null&&f.startsWith(c)||he(!1),d=k}else d=u;let x=d.pathname||"/",g=c==="/"?x:x.slice(c.length)||"/",v=Rg(t,{pathname:g}),y=s0(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:ln([c,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:ln([c,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,r,i);return e&&y?m.createElement(ls.Provider,{value:{location:fi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gt.Pop}},y):y}function n0(){let t=u0(),e=Yg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),r?m.createElement("pre",{style:l},r):null,s)}const r0=m.createElement(n0,null);class i0 extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?m.createElement(pn.Provider,{value:this.props.routeContext},m.createElement(qf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l0(t){let{routeContext:e,match:r,children:i}=t,l=m.useContext(is);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),m.createElement(pn.Provider,{value:e},i)}function s0(t,e,r,i){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),i===void 0&&(i=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,a=(l=r)==null?void 0:l.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));d>=0||he(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:x,errors:g}=r,v=f.route.loader&&x[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,x)=>{let g,v=!1,y=null,k=null;r&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||r0,c&&(u<0&&x===0?(h0("route-fallback",!1),v=!0,k=null):u===x&&(v=!0,k=f.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,x+1)),h=()=>{let j;return g?j=y:v?j=k:f.route.Component?j=m.createElement(f.route.Component,null):f.route.element?j=f.route.element:j=d,m.createElement(l0,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:r!=null},children:j})};return r&&(f.route.ErrorBoundary||f.route.errorElement||x===0)?m.createElement(i0,{location:r.location,revalidation:r.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var np=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(np||{}),Al=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Al||{});function o0(t){let e=m.useContext(is);return e||he(!1),e}function a0(t){let e=m.useContext(Jf);return e||he(!1),e}function c0(t){let e=m.useContext(pn);return e||he(!1),e}function rp(t){let e=c0(),r=e.matches[e.matches.length-1];return r.route.id||he(!1),r.route.id}function u0(){var t;let e=m.useContext(qf),r=a0(Al.UseRouteError),i=rp(Al.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[i]}function d0(){let{router:t}=o0(np.UseNavigateStable),e=rp(Al.UseNavigateStable),r=m.useRef(!1);return ep(()=>{r.current=!0}),m.useCallback(function(l,s){s===void 0&&(s={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,fi({fromRouteId:e},s)))},[t,e])}const Mu={};function h0(t,e,r){!e&&!Mu[t]&&(Mu[t]=!0)}function Gi(t){let{to:e,replace:r,state:i,relative:l}=t;yr()||he(!1);let{future:s,static:o}=m.useContext(Ot),{matches:a}=m.useContext(pn),{pathname:c}=wr(),u=tp(),d=Xa(e,Va(a,s.v7_relativeSplatPath),c,l==="path"),f=JSON.stringify(d);return m.useEffect(()=>u(JSON.parse(f),{replace:r,state:i,relative:l}),[u,f,l,r,i]),null}function Y(t){he(!1)}function f0(t){let{basename:e="/",children:r=null,location:i,navigationType:l=Gt.Pop,navigator:s,static:o=!1,future:a}=t;yr()&&he(!1);let c=e.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:s,static:o,future:fi({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof i=="string"&&(i=Mn(i));let{pathname:d="/",search:f="",hash:x="",state:g=null,key:v="default"}=i,y=m.useMemo(()=>{let k=hi(d,c);return k==null?null:{location:{pathname:k,search:f,hash:x,state:g,key:v},navigationType:l}},[c,d,f,x,g,v,l]);return y==null?null:m.createElement(Ot.Provider,{value:u},m.createElement(ls.Provider,{children:r,value:y}))}function os(t){let{children:e,location:r}=t;return e0(Xo(e),r)}new Promise(()=>{});function Xo(t,e){e===void 0&&(e=[]);let r=[];return m.Children.forEach(t,(i,l)=>{if(!m.isValidElement(i))return;let s=[...e,l];if(i.type===m.Fragment){r.push.apply(r,Xo(i.props.children,s));return}i.type!==Y&&he(!1),!i.props.index||!i.props.children||he(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Xo(i.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Ml.apply(this,arguments)}function ip(t,e){if(t==null)return{};var r={},i=Object.keys(t),l,s;for(s=0;s<i.length;s++)l=i[s],!(e.indexOf(l)>=0)&&(r[l]=t[l]);return r}function p0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function m0(t,e){return t.button===0&&(!e||e==="_self")&&!p0(t)}const x0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],g0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],j0=m.createContext({isTransitioning:!1}),v0="startTransition",Fu=ea[v0];function y0(t){let{basename:e,children:r,future:i,window:l}=t,s=m.useRef();s.current==null&&(s.current=Sg({window:l,v5Compat:!0}));let o=s.current,[a,c]=m.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},d=m.useCallback(f=>{u&&Fu?Fu(()=>c(f)):c(f)},[c,u]);return m.useLayoutEffect(()=>o.listen(d),[o,d]),m.createElement(f0,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o,future:i})}const w0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lp=m.forwardRef(function(e,r){let{onClick:i,relative:l,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=e,x=ip(e,x0),{basename:g}=m.useContext(Ot),v,y=!1;if(typeof u=="string"&&C0.test(u)&&(v=u,w0))try{let j=new URL(window.location.href),w=u.startsWith("//")?new URL(j.protocol+u):new URL(u),_=hi(w.pathname,g);w.origin===j.origin&&_!=null?u=_+w.search+w.hash:y=!0}catch{}let k=Jg(u,{relative:l}),p=k0(u,{replace:o,state:a,target:c,preventScrollReset:d,relative:l,unstable_viewTransition:f});function h(j){i&&i(j),j.defaultPrevented||p(j)}return m.createElement("a",Ml({},x,{href:v||k,onClick:y||s?i:h,ref:r,target:c}))}),q=m.forwardRef(function(e,r){let{"aria-current":i="page",caseSensitive:l=!1,className:s="",end:o=!1,style:a,to:c,unstable_viewTransition:u,children:d}=e,f=ip(e,g0),x=ss(c,{relative:f.relative}),g=wr(),v=m.useContext(Jf),{navigator:y}=m.useContext(Ot),k=v!=null&&N0(x)&&u===!0,p=y.encodeLocation?y.encodeLocation(x).pathname:x.pathname,h=g.pathname,j=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(h=h.toLowerCase(),j=j?j.toLowerCase():null,p=p.toLowerCase());const w=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let _=h===p||!o&&h.startsWith(p)&&h.charAt(w)==="/",S=j!=null&&(j===p||!o&&j.startsWith(p)&&j.charAt(p.length)==="/"),E={isActive:_,isPending:S,isTransitioning:k},B=_?i:void 0,z;typeof s=="function"?z=s(E):z=[s,_?"active":null,S?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(E):a;return m.createElement(lp,Ml({},f,{"aria-current":B,className:z,ref:r,style:F,to:c,unstable_viewTransition:u}),typeof d=="function"?d(E):d)});var Qo;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qo||(Qo={}));var Iu;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Iu||(Iu={}));function _0(t){let e=m.useContext(is);return e||he(!1),e}function k0(t,e){let{target:r,replace:i,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=tp(),u=wr(),d=ss(t,{relative:o});return m.useCallback(f=>{if(m0(f,r)){f.preventDefault();let x=i!==void 0?i:Pl(u)===Pl(d);c(t,{replace:x,state:l,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,c,d,i,l,r,t,s,o,a])}function N0(t,e){e===void 0&&(e={});let r=m.useContext(j0);r==null&&he(!1);let{basename:i}=_0(Qo.useViewTransitionState),l=ss(t,{relative:e.relative});if(!r.isTransitioning)return!1;let s=hi(r.currentLocation.pathname,i)||r.currentLocation.pathname,o=hi(r.nextLocation.pathname,i)||r.nextLocation.pathname;return Vo(l.pathname,o)!=null||Vo(l.pathname,s)!=null}const sp="data:image/svg+xml,%3csvg%20xmlns:ev='http://www.w3.org/2001/xml-events'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20height='87'%20viewBox='0%200%2087%2087'%20width='87'%3e%3cdefs/%3e%3cg%20transform='translate(5.5,5.5)'%20id='page1'%3e%3crect%20fill='%23ffffff'%20height='77'%20y='0'%20x='0'%20width='77'/%3e%3cg%20transform='translate(1.000000,1.000000)'%20id='group1'%3e%3cg%20id='group2'%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(0.000000,18.645100)'%20id='shape3'%20d='M75.4,18.9C75.4,29.3,58.5,37.7,37.7,37.7C16.9,37.7,.0,29.3,.0,18.9C.0,8.4,16.9,.0,37.7,.0C58.5,.0,75.4,8.4,75.4,18.9z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(13.803000,0.000000)'%20id='shape4'%20d='M42.8,73.8C34.6,79.0,19.6,67.0,9.2,46.9C-1.2,26.9,-3.1,6.4,5.1,1.2C13.2,-4.0,28.2,8.0,38.6,28.1C49.0,48.1,50.9,68.6,42.8,73.8z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(13.803000,0.000000)'%20id='shape5'%20d='M5.1,73.8C-3.1,68.6,-1.2,48.1,9.2,28.1C19.6,8.0,34.6,-4.0,42.8,1.2C50.9,6.4,49.0,26.9,38.6,46.9C28.2,67.0,13.2,79.0,5.1,73.8z'/%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(7.271561,7.236650)'%20id='group6'%3e%3cg%20transform='translate(2.394994,2.381675)'%20id='group7'%3e%3cpath%20fill-rule='nonzero'%20fill='%23ffffff'%20transform='translate(0.000000,14.360055)'%20id='shape8'%20d='M58.1,14.5C58.1,22.5,45.1,29.0,29.0,29.0C13.0,29.0,.0,22.5,.0,14.5C.0,6.5,13.0,.0,29.0,.0C45.1,.0,58.1,6.5,58.1,14.5z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23ffffff'%20transform='translate(10.630826,0.000000)'%20id='shape9'%20d='M32.9,56.8C26.7,60.8,15.1,51.6,7.1,36.1C-0.9,20.7,-2.4,4.9,3.9,.9C10.1,-3.1,21.7,6.2,29.7,21.6C37.8,37.1,39.2,52.8,32.9,56.8z'/%3e%3cpath%20fill-rule='nonzero'%20fill='%23ffffff'%20transform='translate(10.630826,0.000000)'%20id='shape10'%20d='M3.9,56.8C-2.4,52.8,-0.9,37.1,7.1,21.6C15.1,6.2,26.7,-3.1,32.9,.9C39.2,4.9,37.8,20.7,29.7,36.1C21.7,51.6,10.1,60.8,3.9,56.8z'/%3e%3c/g%3e%3c/g%3e%3cpath%20fill-rule='nonzero'%20fill='%23409eff'%20transform='translate(25.412303,25.304562)'%20id='shape11'%20d='M6.0,2.1C12.1,-1.8,20.3,-0.1,24.3,6.0C24.5,6.3,24.7,6.7,24.9,7.0L24.9,7.1C25.0,7.4,24.9,7.8,24.6,8.0L12.3,16.0C12.0,16.2,11.5,16.1,11.3,15.8L10.7,14.8C10.1,13.9,10.3,12.8,11.2,12.2L19.1,7.1C19.5,6.8,19.6,6.4,19.3,6.1C19.3,6.0,19.3,5.9,19.2,5.9C16.0,3.3,11.6,3.1,8.1,5.3C3.8,8.1,2.6,13.9,5.4,18.3C8.2,22.6,14.0,23.8,18.3,21.0C19.2,20.5,20.4,20.7,21.0,21.6L21.6,22.5C21.8,22.9,21.7,23.3,21.4,23.5C21.1,23.8,20.8,24.0,20.4,24.3C14.3,28.2,6.1,26.5,2.1,20.4C-1.8,14.3,-0.1,6.1,6.0,2.1zM24.4,12.8C24.8,12.6,25.2,12.7,25.4,13.0L26.2,14.2C26.9,15.3,26.6,16.6,25.6,17.3L24.4,18.1C24.0,18.3,23.6,18.2,23.3,17.9L21.7,15.4C21.5,15.1,21.6,14.7,21.9,14.4L24.4,12.8z'/%3e%3c/g%3e%3c/svg%3e";function b0(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"home-content",children:[n.jsxs("div",{className:"description",children:[n.jsx("img",{src:sp,alt:"pelement-react"}),n.jsx("h1",{children:"pelement react"}),n.jsx("p",{children:"基于Element Plus 和 react，面向设计师和开发者的组件库"}),n.jsx(lp,{to:"/component/button",children:"快速开始"})]}),n.jsxs("div",{className:"join-us",children:[n.jsx("h3",{children:"加入我们"}),n.jsxs("div",{children:[n.jsx("label",{children:"Email: "}),n.jsx("span",{children:"llkui241569@163.com"})]}),n.jsxs("div",{children:[n.jsx("label",{children:"QQ: "}),n.jsx("span",{children:"1728366431"})]})]}),n.jsxs("div",{className:"footer-main text-xs",children:[n.jsxs("p",{children:["Released under the ",n.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferer",children:"MIT License"}),"."]}),n.jsxs("p",{children:["Made with ❤️ by ",n.jsx("a",{href:"https://github.com/llkui",target:"_blank",rel:"noopener noreferer",children:"llkui"})]})]})]})})}function Ou(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"安装"}),`
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
`})})]})}function S0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ou,{...t})}):Ou(t)}function zu(t){const e={h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
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
`]})]})}function E0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(zu,{...t})}):zu(t)}function $u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"社区精选组件"}),`
`,n.jsx(e.h2,{children:"推荐组件"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"推荐组件"}),n.jsx(e.th,{children:"pelement-react使用场景"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"浮动元素"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/floating-ui/floating-ui/",children:"Floating UI"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Tooltip"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"svg图标"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/pd4d10/vite-plugin-svgr/",children:"vite-plugin-svgr"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Icon"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Markdown 渲染"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/mdx-js/mdx/",children:"@mdx-js/rollup"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Markdown"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"代码高亮"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/highlightjs/highlight.js/",children:"highlight.js"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"CodeBlock"})})]})]})]})]})}function T0(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx($u,{...t})}):$u(t)}function R0(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"基础"}),n.jsx(q,{to:"installation",children:"安装"}),n.jsx("p",{className:"sidebar-group__title",children:"进阶"}),n.jsx(q,{to:"changelog",children:"更新日志"}),n.jsx("p",{className:"sidebar-group__title",children:"其他"}),n.jsx(q,{to:"recommendation",children:"社区精选组件"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsx("div",{className:"markdown-body",children:n.jsxs(os,{children:[n.jsx(Y,{path:"installation",element:n.jsx(S0,{})}),n.jsx(Y,{path:"changelog",element:n.jsx(E0,{})}),n.jsx(Y,{path:"recommendation",element:n.jsx(T0,{})})]})})})})]})}const B0=`import { Alert } from 'pelement-react'\r
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
export default AlertBasic`,L0=`import { Alert } from 'pelement-react'\r
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
export default AlertCenter`,D0=`import { Alert } from 'pelement-react'\r
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
export default AlertClose`,P0=`import { Alert } from 'pelement-react'\r
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
export default AlertDescription`,A0=`import { Alert } from 'pelement-react'\r
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
export default AlertEffect`,M0=`import { Alert } from 'pelement-react'\r
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
export default AlertIconDescription`,F0=`import { Alert } from 'pelement-react'\r
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
export default AlertIcon`,I0=`import { Avatar, Col, Row } from 'pelement-react'\r
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
export default AvatarBasic`,O0=`import { Avatar } from 'pelement-react'\r
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
export default AvatarError`,z0=`import { Avatar } from "pelement-react"\r
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
export default AvatarFit`,$0=`import { Avatar, UserFilled } from 'pelement-react'\r
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
export default AvatarType`,U0=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
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
export default ButtonBasic`,H0=`import { Button } from 'pelement-react'\r
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
export default ButtonDisabled`,W0=`import { Button } from 'pelement-react'\r
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
export default ButtonLink`,V0=`import { Button } from 'pelement-react'\r
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
export default ButtonText`,X0=`import { Collapse, CollapseItem } from 'pelement-react'\r
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
export default CollapseBasic`,Q0=`import { Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic`,G0=`import { Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic1`,K0=`import { Aside, Container, Main } from 'pelement-react'\r
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
export default ContainerBasic2`,Y0=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic3`,Z0=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic4`,J0=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic5`,q0=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic6`,ej=`import { Button, Dialog } from 'pelement-react'\r
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
export default DialogBasic`,tj=`import { useState } from 'react'\r
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
export default DialogContent`,nj=`import { useState } from 'react'\r
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
export default DialogHeader`,rj=`import { Divider } from 'pelement-react'\r
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
export default DividerBasic`,ij=`import { Divider } from 'pelement-react'\r
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
export default DividerBorder`,lj=`import { Divider, StarFilled } from 'pelement-react'\r
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
export default DividerContent`,sj=`import { Divider } from 'pelement-react'\r
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
export default DividerDirection`,oj=`import { useState } from 'react'\r
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
export default DrawerBasic`,aj=`import { useState } from 'react'\r
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
export default DrawerContent`,cj=`import { useState } from 'react'\r
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
export default DrawerHeader`,uj=`import { useState } from 'react'\r
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
export default DrawerWithHeader`,dj=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close } from 'pelement-react'\r
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
export default ButtonBasic`,hj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBasic`,fj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBootstrap`,pj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutGutter`,mj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutJustify`,xj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutMix`,gj=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutOffset`,jj=`import { Link } from 'pelement-react'\r
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
export default LinkBasic`,vj=`import { Link } from 'pelement-react'\r
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
export default LinkDisabled`,yj=`import { Edit, Link, View } from 'pelement-react'\r
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
export default LinkIcon`,wj=`import { Link } from 'pelement-react'\r
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
export default LinkUnderline`,Cj=`import { Button, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmBasic`,_j=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmEvent`,kj=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmIcon`,Nj=`import { Button, Popover } from 'pelement-react'\r
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
export default PopoverBasic`,bj=`import { Progress } from 'pelement-react'\r
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
export default ProgressBasic`,Sj=`import { Progress } from 'pelement-react'\r
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
export default ProgressTextInside`,Ej=`import { Button, Col, Result, Row } from 'pelement-react'\r
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
export default ResultBasic`,Tj=`import { Button, Result } from 'pelement-react'\r
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
export default ResultIcon`,Rj=`import { Hide, Switch, View } from 'pelement-react'\r
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
export default SwitchActionIcon`,Bj=`import { Switch } from 'pelement-react'\r
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
export default SwitchBasic`,Lj=`import { useState } from 'react'\r
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
export default SwitchBeforeChange`,Dj=`import { Switch } from 'pelement-react'\r
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
export default SwitchDisabled`,Pj=`import { Check, Close, Switch } from 'pelement-react'\r
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
export default SwitchIcon`,Aj=`import { Switch } from 'pelement-react'\r
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
export default SwitchLoading`,Mj=`import { Switch } from 'pelement-react'\r
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
export default SwitchSize`,Fj=`import { Switch } from 'pelement-react'\r
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
export default SwitchText`,Ij=`import { Tag } from 'pelement-react'\r
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
export default TagBasic`,Oj=`import { Tag } from 'pelement-react'\r
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
export default TagClosable`,zj=`import { Tag } from 'pelement-react'\r
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
export default TagEffect`,$j=`import { Tag } from 'pelement-react'\r
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
export default TagRound`,Uj=`import { Row, Tag } from 'pelement-react'\r
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
export default TagSize`,Hj=`import { Text } from 'pelement-react'\r
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
export default TextBasic`,Wj=`import { Text } from 'pelement-react'\r
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
export default TextSize`,Vj=`import { Row, Text } from 'pelement-react'\r
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
export default TextTruncated`,Xj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipBasic`,Qj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipContent`,Gj=`import { useState } from 'react'\r
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
export default TooltipDisabled`,Kj=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipEffect`;function op(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const r=t[e],i=typeof r;(i==="object"||i==="function")&&!Object.isFrozen(r)&&op(r)}),t}class Uu{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ap(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Kt(t,...e){const r=Object.create(null);for(const i in t)r[i]=t[i];return e.forEach(function(i){for(const l in i)r[l]=i[l]}),r}const Yj="</span>",Hu=t=>!!t.scope,Zj=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const r=t.split(".");return[`${e}${r.shift()}`,...r.map((i,l)=>`${i}${"_".repeat(l+1)}`)].join(" ")}return`${e}${t}`};class Jj{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=ap(e)}openNode(e){if(!Hu(e))return;const r=Zj(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){Hu(e)&&(this.buffer+=Yj)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Wu=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Qa{constructor(){this.rootNode=Wu(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const r=Wu({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(i=>this._walk(e,i)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{Qa._collapse(r)}))}}class qj extends Qa{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){const i=e.root;r&&(i.scope=`language:${r}`),this.add(i)}toHTML(){return new Jj(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function pi(t){return t?typeof t=="string"?t:t.source:null}function cp(t){return Fn("(?=",t,")")}function ev(t){return Fn("(?:",t,")*")}function tv(t){return Fn("(?:",t,")?")}function Fn(...t){return t.map(r=>pi(r)).join("")}function nv(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Ga(...t){return"("+(nv(t).capture?"":"?:")+t.map(i=>pi(i)).join("|")+")"}function up(t){return new RegExp(t.toString()+"|").exec("").length-1}function rv(t,e){const r=t&&t.exec(e);return r&&r.index===0}const iv=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ka(t,{joinWith:e}){let r=0;return t.map(i=>{r+=1;const l=r;let s=pi(i),o="";for(;s.length>0;){const a=iv.exec(s);if(!a){o+=s;break}o+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+l):(o+=a[0],a[0]==="("&&r++)}return o}).map(i=>`(${i})`).join(e)}const lv=/\b\B/,dp="[a-zA-Z]\\w*",Ya="[a-zA-Z_]\\w*",hp="\\b\\d+(\\.\\d+)?",fp="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",pp="\\b(0b[01]+)",sv="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",ov=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=Fn(e,/.*\b/,t.binary,/\b.*/)),Kt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,i)=>{r.index!==0&&i.ignoreMatch()}},t)},mi={begin:"\\\\[\\s\\S]",relevance:0},av={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[mi]},cv={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[mi]},uv={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},as=function(t,e,r={}){const i=Kt({scope:"comment",begin:t,end:e,contains:[]},r);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=Ga("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:Fn(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},dv=as("//","$"),hv=as("/\\*","\\*/"),fv=as("#","$"),pv={scope:"number",begin:hp,relevance:0},mv={scope:"number",begin:fp,relevance:0},xv={scope:"number",begin:pp,relevance:0},gv={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[mi,{begin:/\[/,end:/\]/,relevance:0,contains:[mi]}]},jv={scope:"title",begin:dp,relevance:0},vv={scope:"title",begin:Ya,relevance:0},yv={begin:"\\.\\s*"+Ya,relevance:0},wv=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})};var Ki=Object.freeze({__proto__:null,APOS_STRING_MODE:av,BACKSLASH_ESCAPE:mi,BINARY_NUMBER_MODE:xv,BINARY_NUMBER_RE:pp,COMMENT:as,C_BLOCK_COMMENT_MODE:hv,C_LINE_COMMENT_MODE:dv,C_NUMBER_MODE:mv,C_NUMBER_RE:fp,END_SAME_AS_BEGIN:wv,HASH_COMMENT_MODE:fv,IDENT_RE:dp,MATCH_NOTHING_RE:lv,METHOD_GUARD:yv,NUMBER_MODE:pv,NUMBER_RE:hp,PHRASAL_WORDS_MODE:uv,QUOTE_STRING_MODE:cv,REGEXP_MODE:gv,RE_STARTERS_RE:sv,SHEBANG:ov,TITLE_MODE:jv,UNDERSCORE_IDENT_RE:Ya,UNDERSCORE_TITLE_MODE:vv});function Cv(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function _v(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function kv(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=Cv,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Nv(t,e){Array.isArray(t.illegal)&&(t.illegal=Ga(...t.illegal))}function bv(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Sv(t,e){t.relevance===void 0&&(t.relevance=1)}const Ev=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},t);Object.keys(t).forEach(i=>{delete t[i]}),t.keywords=r.keywords,t.begin=Fn(r.beforeMatch,cp(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},Tv=["of","and","for","in","not","or","if","then","parent","list","value"],Rv="keyword";function mp(t,e,r=Rv){const i=Object.create(null);return typeof t=="string"?l(r,t.split(" ")):Array.isArray(t)?l(r,t):Object.keys(t).forEach(function(s){Object.assign(i,mp(t[s],e,s))}),i;function l(s,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");i[c[0]]=[s,Bv(c[0],c[1])]})}}function Bv(t,e){return e?Number(e):Lv(t)?0:1}function Lv(t){return Tv.includes(t.toLowerCase())}const Vu={},Nn=t=>{console.error(t)},Xu=(t,...e)=>{console.log(`WARN: ${t}`,...e)},zn=(t,e)=>{Vu[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Vu[`${t}/${e}`]=!0)},Fl=new Error;function xp(t,e,{key:r}){let i=0;const l=t[r],s={},o={};for(let a=1;a<=e.length;a++)o[a+i]=l[a],s[a+i]=!0,i+=up(e[a-1]);t[r]=o,t[r]._emit=s,t[r]._multi=!0}function Dv(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Nn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Fl;if(typeof t.beginScope!="object"||t.beginScope===null)throw Nn("beginScope must be object"),Fl;xp(t,t.begin,{key:"beginScope"}),t.begin=Ka(t.begin,{joinWith:""})}}function Pv(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Nn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Fl;if(typeof t.endScope!="object"||t.endScope===null)throw Nn("endScope must be object"),Fl;xp(t,t.end,{key:"endScope"}),t.end=Ka(t.end,{joinWith:""})}}function Av(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function Mv(t){Av(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Dv(t),Pv(t)}function Fv(t){function e(o,a){return new RegExp(pi(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=up(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(Ka(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const u=c.findIndex((f,x)=>x>0&&f!==void 0),d=this.matchIndexes[u];return c.splice(0,u),Object.assign(c,d)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new r;return this.rules.slice(a).forEach(([u,d])=>c.addRule(u,d)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let u=c.exec(a);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,u=d.exec(a)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function l(o){const a=new i;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function s(o,a){const c=o;if(o.isCompiled)return c;[_v,bv,Mv,Ev].forEach(d=>d(o,a)),t.compilerExtensions.forEach(d=>d(o,a)),o.__beforeBegin=null,[kv,Nv,Sv].forEach(d=>d(o,a)),o.isCompiled=!0;let u=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),u=o.keywords.$pattern,delete o.keywords.$pattern),u=u||/\w+/,o.keywords&&(o.keywords=mp(o.keywords,t.case_insensitive)),c.keywordPatternRe=e(u,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=pi(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(d){return Iv(d==="self"?o:d)})),o.contains.forEach(function(d){s(d,c)}),o.starts&&s(o.starts,a),c.matcher=l(c),c}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=Kt(t.classNameAliases||{}),s(t)}function gp(t){return t?t.endsWithParent||gp(t.starts):!1}function Iv(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return Kt(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:gp(t)?Kt(t,{starts:t.starts?Kt(t.starts):null}):Object.isFrozen(t)?Kt(t):t}var Ov="11.9.0";class zv extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}}const Xs=ap,Qu=Kt,Gu=Symbol("nomatch"),$v=7,jp=function(t){const e=Object.create(null),r=Object.create(null),i=[];let l=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:qj};function c(N){return a.noHighlightRe.test(N)}function u(N){let C=N.className+" ";C+=N.parentNode?N.parentNode.className:"";const R=a.languageDetectRe.exec(C);if(R){const P=z(R[1]);return P||(Xu(s.replace("{}",R[1])),Xu("Falling back to no-highlight mode for this block.",N)),P?R[1]:"no-highlight"}return C.split(/\s+/).find(P=>c(P)||z(P))}function d(N,C,R){let P="",$="";typeof C=="object"?(P=N,R=C.ignoreIllegals,$=C.language):(zn("10.7.0","highlight(lang, code, ...args) has been deprecated."),zn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),$=N,P=C),R===void 0&&(R=!0);const K={code:P,language:$};H("before:highlight",K);const De=K.result?K.result:f(K.language,K.code,R);return De.code=K.code,H("after:highlight",De),De}function f(N,C,R,P){const $=Object.create(null);function K(L,I){return L.keywords[I]}function De(){if(!V.keywords){Se.addText(re);return}let L=0;V.keywordPatternRe.lastIndex=0;let I=V.keywordPatternRe.exec(re),X="";for(;I;){X+=re.substring(L,I.index);const J=vt.case_insensitive?I[0].toLowerCase():I[0],Pe=K(V,J);if(Pe){const[Et,em]=Pe;if(Se.addText(X),X="",$[J]=($[J]||0)+1,$[J]<=$v&&(Ri+=em),Et.startsWith("_"))X+=I[0];else{const tm=vt.classNameAliases[Et]||Et;Ce(I[0],tm)}}else X+=I[0];L=V.keywordPatternRe.lastIndex,I=V.keywordPatternRe.exec(re)}X+=re.substring(L),Se.addText(X)}function it(){if(re==="")return;let L=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){Se.addText(re);return}L=f(V.subLanguage,re,!0,Cc[V.subLanguage]),Cc[V.subLanguage]=L._top}else L=g(re,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Ri+=L.relevance),Se.__addSublanguage(L._emitter,L.language)}function be(){V.subLanguage!=null?it():De(),re=""}function Ce(L,I){L!==""&&(Se.startScope(I),Se.addText(L),Se.endScope())}function xn(L,I){let X=1;const J=I.length-1;for(;X<=J;){if(!L._emit[X]){X++;continue}const Pe=vt.classNameAliases[L[X]]||L[X],Et=I[X];Pe?Ce(Et,Pe):(re=Et,De(),re=""),X++}}function vc(L,I){return L.scope&&typeof L.scope=="string"&&Se.openNode(vt.classNameAliases[L.scope]||L.scope),L.beginScope&&(L.beginScope._wrap?(Ce(re,vt.classNameAliases[L.beginScope._wrap]||L.beginScope._wrap),re=""):L.beginScope._multi&&(xn(L.beginScope,I),re="")),V=Object.create(L,{parent:{value:V}}),V}function yc(L,I,X){let J=rv(L.endRe,X);if(J){if(L["on:end"]){const Pe=new Uu(L);L["on:end"](I,Pe),Pe.isMatchIgnored&&(J=!1)}if(J){for(;L.endsParent&&L.parent;)L=L.parent;return L}}if(L.endsWithParent)return yc(L.parent,I,X)}function Kp(L){return V.matcher.regexIndex===0?(re+=L[0],1):(js=!0,0)}function Yp(L){const I=L[0],X=L.rule,J=new Uu(X),Pe=[X.__beforeBegin,X["on:begin"]];for(const Et of Pe)if(Et&&(Et(L,J),J.isMatchIgnored))return Kp(I);return X.skip?re+=I:(X.excludeBegin&&(re+=I),be(),!X.returnBegin&&!X.excludeBegin&&(re=I)),vc(X,L),X.returnBegin?0:I.length}function Zp(L){const I=L[0],X=C.substring(L.index),J=yc(V,L,X);if(!J)return Gu;const Pe=V;V.endScope&&V.endScope._wrap?(be(),Ce(I,V.endScope._wrap)):V.endScope&&V.endScope._multi?(be(),xn(V.endScope,L)):Pe.skip?re+=I:(Pe.returnEnd||Pe.excludeEnd||(re+=I),be(),Pe.excludeEnd&&(re=I));do V.scope&&Se.closeNode(),!V.skip&&!V.subLanguage&&(Ri+=V.relevance),V=V.parent;while(V!==J.parent);return J.starts&&vc(J.starts,L),Pe.returnEnd?0:I.length}function Jp(){const L=[];for(let I=V;I!==vt;I=I.parent)I.scope&&L.unshift(I.scope);L.forEach(I=>Se.openNode(I))}let Ti={};function wc(L,I){const X=I&&I[0];if(re+=L,X==null)return be(),0;if(Ti.type==="begin"&&I.type==="end"&&Ti.index===I.index&&X===""){if(re+=C.slice(I.index,I.index+1),!l){const J=new Error(`0 width match regex (${N})`);throw J.languageName=N,J.badRule=Ti.rule,J}return 1}if(Ti=I,I.type==="begin")return Yp(I);if(I.type==="illegal"&&!R){const J=new Error('Illegal lexeme "'+X+'" for mode "'+(V.scope||"<unnamed>")+'"');throw J.mode=V,J}else if(I.type==="end"){const J=Zp(I);if(J!==Gu)return J}if(I.type==="illegal"&&X==="")return 1;if(gs>1e5&&gs>I.index*3)throw new Error("potential infinite loop, way more iterations than matches");return re+=X,X.length}const vt=z(N);if(!vt)throw Nn(s.replace("{}",N)),new Error('Unknown language: "'+N+'"');const qp=Fv(vt);let xs="",V=P||qp;const Cc={},Se=new a.__emitter(a);Jp();let re="",Ri=0,gn=0,gs=0,js=!1;try{if(vt.__emitTokens)vt.__emitTokens(C,Se);else{for(V.matcher.considerAll();;){gs++,js?js=!1:V.matcher.considerAll(),V.matcher.lastIndex=gn;const L=V.matcher.exec(C);if(!L)break;const I=C.substring(gn,L.index),X=wc(I,L);gn=L.index+X}wc(C.substring(gn))}return Se.finalize(),xs=Se.toHTML(),{language:N,value:xs,relevance:Ri,illegal:!1,_emitter:Se,_top:V}}catch(L){if(L.message&&L.message.includes("Illegal"))return{language:N,value:Xs(C),illegal:!0,relevance:0,_illegalBy:{message:L.message,index:gn,context:C.slice(gn-100,gn+100),mode:L.mode,resultSoFar:xs},_emitter:Se};if(l)return{language:N,value:Xs(C),illegal:!1,relevance:0,errorRaised:L,_emitter:Se,_top:V};throw L}}function x(N){const C={value:Xs(N),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return C._emitter.addText(N),C}function g(N,C){C=C||a.languages||Object.keys(e);const R=x(N),P=C.filter(z).filter(Q).map(be=>f(be,N,!1));P.unshift(R);const $=P.sort((be,Ce)=>{if(be.relevance!==Ce.relevance)return Ce.relevance-be.relevance;if(be.language&&Ce.language){if(z(be.language).supersetOf===Ce.language)return 1;if(z(Ce.language).supersetOf===be.language)return-1}return 0}),[K,De]=$,it=K;return it.secondBest=De,it}function v(N,C,R){const P=C&&r[C]||R;N.classList.add("hljs"),N.classList.add(`language-${P}`)}function y(N){let C=null;const R=u(N);if(c(R))return;if(H("before:highlightElement",{el:N,language:R}),N.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",N);return}if(N.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(N)),a.throwUnescapedHTML))throw new zv("One of your code blocks includes unescaped HTML.",N.innerHTML);C=N;const P=C.textContent,$=R?d(P,{language:R,ignoreIllegals:!0}):g(P);N.innerHTML=$.value,N.dataset.highlighted="yes",v(N,R,$.language),N.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(N.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),H("after:highlightElement",{el:N,result:$,text:P})}function k(N){a=Qu(a,N)}const p=()=>{w(),zn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function h(){w(),zn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let j=!1;function w(){if(document.readyState==="loading"){j=!0;return}document.querySelectorAll(a.cssSelector).forEach(y)}function _(){j&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",_,!1);function S(N,C){let R=null;try{R=C(t)}catch(P){if(Nn("Language definition for '{}' could not be registered.".replace("{}",N)),l)Nn(P);else throw P;R=o}R.name||(R.name=N),e[N]=R,R.rawDefinition=C.bind(null,t),R.aliases&&F(R.aliases,{languageName:N})}function E(N){delete e[N];for(const C of Object.keys(r))r[C]===N&&delete r[C]}function B(){return Object.keys(e)}function z(N){return N=(N||"").toLowerCase(),e[N]||e[r[N]]}function F(N,{languageName:C}){typeof N=="string"&&(N=[N]),N.forEach(R=>{r[R.toLowerCase()]=C})}function Q(N){const C=z(N);return C&&!C.disableAutodetect}function te(N){N["before:highlightBlock"]&&!N["before:highlightElement"]&&(N["before:highlightElement"]=C=>{N["before:highlightBlock"](Object.assign({block:C.el},C))}),N["after:highlightBlock"]&&!N["after:highlightElement"]&&(N["after:highlightElement"]=C=>{N["after:highlightBlock"](Object.assign({block:C.el},C))})}function ce(N){te(N),i.push(N)}function U(N){const C=i.indexOf(N);C!==-1&&i.splice(C,1)}function H(N,C){const R=N;i.forEach(function(P){P[R]&&P[R](C)})}function W(N){return zn("10.7.0","highlightBlock will be removed entirely in v12.0"),zn("10.7.0","Please use highlightElement now."),y(N)}Object.assign(t,{highlight:d,highlightAuto:g,highlightAll:w,highlightElement:y,highlightBlock:W,configure:k,initHighlighting:p,initHighlightingOnLoad:h,registerLanguage:S,unregisterLanguage:E,listLanguages:B,getLanguage:z,registerAliases:F,autoDetection:Q,inherit:Qu,addPlugin:ce,removePlugin:U}),t.debugMode=function(){l=!1},t.safeMode=function(){l=!0},t.versionString=Ov,t.regex={concat:Fn,lookahead:cp,either:Ga,optional:tv,anyNumberOfTimes:ev};for(const N in Ki)typeof Ki[N]=="object"&&op(Ki[N]);return Object.assign(t,Ki),t},pr=jp({});pr.newInstance=()=>jp({});var Uv=pr;pr.HighlightJS=pr;pr.default=pr;const Za=Dd(Uv);function Hv(t){const e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=t.inherit(s,{begin:/\(/,end:/\)/}),a=t.inherit(t.APOS_STRING_MODE,{className:"string"}),c=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,o,c,a]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:u}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ku="[A-Za-z$_][0-9A-Za-z$_]*",Wv=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Vv=["true","false","null","undefined","NaN","Infinity"],vp=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],yp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wp=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Xv=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Qv=[].concat(wp,vp,yp);function Gv(t){const e=t.regex,r=(C,{after:R})=>{const P="</"+C[0].slice(1);return C.input.indexOf(P,R)!==-1},i=Ku,l={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,R)=>{const P=C[0].length+C.index,$=C.input[P];if($==="<"||$===","){R.ignoreMatch();return}$===">"&&(r(C,{after:P})||R.ignoreMatch());let K;const De=C.input.substring(P);if(K=De.match(/^\s*=/)){R.ignoreMatch();return}if((K=De.match(/^\s+extends\s+/))&&K.index===0){R.ignoreMatch();return}}},a={$pattern:Ku,keyword:Wv,literal:Vv,built_in:Qv,"variable.language":Xv},c="[0-9](_?[0-9])*",u=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"css"}},y={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,x]},h={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},j=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,k,{match:/\$\d+/},f];x.contains=j.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(j)});const w=[].concat(h,x.contains),_=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),S={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_},E={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...vp,...yp]}},z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],illegal:/%/},Q={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(C){return e.concat("(?!",C.join("|"),")")}const ce={match:e.concat(/\b/,te([...wp,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},U={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},H={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},S]},W="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",N={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(W)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:_,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),z,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,v,y,k,h,{match:/\$\d+/},f,B,{className:"attr",begin:i+e.lookahead(":"),relevance:0},N,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[h,t.REGEXP_MODE,{className:"function",begin:W,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:s},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[S,t.inherit(t.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},U,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[S]},ce,Q,E,H,{match:/\$[(.]/}]}}Za.registerLanguage("xml",Hv);Za.registerLanguage("javascript",Gv);function D({language:t="javascript",name:e,children:r}){const i=m.useRef(null),[l,s]=m.useState(!1),[o,a]=m.useState(""),c=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":B0,"../../../packages/Alert/_example/AlertCenter.tsx":L0,"../../../packages/Alert/_example/AlertClose.tsx":D0,"../../../packages/Alert/_example/AlertDescription.tsx":P0,"../../../packages/Alert/_example/AlertEffect.tsx":A0,"../../../packages/Alert/_example/AlertIconDescription.tsx":M0,"../../../packages/Alert/_example/AlertShowIcon.tsx":F0,"../../../packages/Avatar/_example/AvatarBasic.tsx":I0,"../../../packages/Avatar/_example/AvatarError.tsx":O0,"../../../packages/Avatar/_example/AvatarFit.tsx":z0,"../../../packages/Avatar/_example/AvatarType.tsx":$0,"../../../packages/Button/_example/ButtonBasic.tsx":U0,"../../../packages/Button/_example/ButtonDisabled.tsx":H0,"../../../packages/Button/_example/ButtonLink.tsx":W0,"../../../packages/Button/_example/ButtonText.tsx":V0,"../../../packages/Collapse/_example/CollapseBasic.tsx":X0,"../../../packages/Container/_example/ContainerBasic.tsx":Q0,"../../../packages/Container/_example/ContainerBasic1.tsx":G0,"../../../packages/Container/_example/ContainerBasic2.tsx":K0,"../../../packages/Container/_example/ContainerBasic3.tsx":Y0,"../../../packages/Container/_example/ContainerBasic4.tsx":Z0,"../../../packages/Container/_example/ContainerBasic5.tsx":J0,"../../../packages/Container/_example/ContainerBasic6.tsx":q0,"../../../packages/Dialog/_example/DialogBasic.tsx":ej,"../../../packages/Dialog/_example/DialogContent.tsx":tj,"../../../packages/Dialog/_example/DialogHeader.tsx":nj,"../../../packages/Divider/_example/DividerBasic.tsx":rj,"../../../packages/Divider/_example/DividerBorder.tsx":ij,"../../../packages/Divider/_example/DividerContent.tsx":lj,"../../../packages/Divider/_example/DividerDirection.tsx":sj,"../../../packages/Drawer/_example/DrawerBasic.tsx":oj,"../../../packages/Drawer/_example/DrawerContent.tsx":aj,"../../../packages/Drawer/_example/DrawerHeader.tsx":cj,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":uj,"../../../packages/Icon/_example/IconBasic.tsx":dj,"../../../packages/Layout/_example/LayoutBasic.tsx":hj,"../../../packages/Layout/_example/LayoutBootstrap.tsx":fj,"../../../packages/Layout/_example/LayoutGutter.tsx":pj,"../../../packages/Layout/_example/LayoutJustify.tsx":mj,"../../../packages/Layout/_example/LayoutMix.tsx":xj,"../../../packages/Layout/_example/LayoutOffset.tsx":gj,"../../../packages/Link/_example/LinkBasic.tsx":jj,"../../../packages/Link/_example/LinkDisabled.tsx":vj,"../../../packages/Link/_example/LinkIcon.tsx":yj,"../../../packages/Link/_example/LinkUnderline.tsx":wj,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":Cj,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":_j,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":kj,"../../../packages/Popover/_example/PopoverBasic.tsx":Nj,"../../../packages/Progress/_example/ProgressBasic.tsx":bj,"../../../packages/Progress/_example/ProgressTextInside.tsx":Sj,"../../../packages/Result/_example/ResultBasic.tsx":Ej,"../../../packages/Result/_example/ResultIcon.tsx":Tj,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Rj,"../../../packages/Switch/_example/SwitchBasic.tsx":Bj,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":Lj,"../../../packages/Switch/_example/SwitchDisabled.tsx":Dj,"../../../packages/Switch/_example/SwitchIcon.tsx":Pj,"../../../packages/Switch/_example/SwitchLoading.tsx":Aj,"../../../packages/Switch/_example/SwitchSize.tsx":Mj,"../../../packages/Switch/_example/SwitchText.tsx":Fj,"../../../packages/Tag/_example/TagBasic.tsx":Ij,"../../../packages/Tag/_example/TagClosable.tsx":Oj,"../../../packages/Tag/_example/TagEffect.tsx":zj,"../../../packages/Tag/_example/TagRound.tsx":$j,"../../../packages/Tag/_example/TagSize.tsx":Uj,"../../../packages/Text/_example/TextBasic.tsx":Hj,"../../../packages/Text/_example/TextSize.tsx":Wj,"../../../packages/Text/_example/TextTruncated.tsx":Vj,"../../../packages/Tooltip/_example/TooltipBasic.tsx":Xj,"../../../packages/Tooltip/_example/TooltipContent.tsx":Qj,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":Gj,"../../../packages/Tooltip/_example/TooltipEffect.tsx":Kj});let u={display:l?"":"none"};m.useEffect(()=>{i.current&&(Object.keys(c).forEach(f=>{f.indexOf(e)!==-1&&a(c[f])}),setTimeout(()=>{Za.highlightElement(i.current)},0))},[e]);function d(){s(!l)}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"code-block",children:[n.jsx("div",{className:"code-block-component",children:r}),n.jsx("div",{className:"op-btns",children:n.jsx("button",{onClick:d,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:n.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:n.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),n.jsx("div",{className:"code-block-wrapper",style:u,children:n.jsx("div",{className:"code-block-pre language-react",children:n.jsx("pre",{children:n.jsx("code",{id:t,ref:i,className:t,children:o})})})})]})})}function Cp(t){var e,r,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=Cp(t[e]))&&(i&&(i+=" "),i+=r);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function O(){for(var t,e,r=0,i="";r<arguments.length;)(t=arguments[r++])&&(e=Cp(t))&&(i&&(i+=" "),i+=e);return i}const Kv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),m.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),Yv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Kv,{})})},cs=m.forwardRef(Yv);cs.displayName="Edit";const Zv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),Jv=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(Zv,{})})},Ja=m.forwardRef(Jv);Ja.displayName="Search";const qv=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),e1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(qv,{})})},xi=m.forwardRef(e1);xi.displayName="Check";const t1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),m.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),n1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(t1,{})})},qa=m.forwardRef(n1);qa.displayName="Message";const r1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),i1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(r1,{})})},ec=m.forwardRef(i1);ec.displayName="Star";const l1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),s1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(l1,{})})},tc=m.forwardRef(s1);tc.displayName="Delete";const o1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),a1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(o1,{})})},us=m.forwardRef(a1);us.displayName="View";const c1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),u1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(c1,{})})},nc=m.forwardRef(u1);nc.displayName="StarFilled";const d1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),h1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(d1,{})})},an=m.forwardRef(h1);an.displayName="Close";const f1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),p1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(f1,{})})},rc=m.forwardRef(p1);rc.displayName="Loading";const m1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),m.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),x1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(m1,{})})},ic=m.forwardRef(x1);ic.displayName="Hide";const g1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),j1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(g1,{})})},Si=m.forwardRef(j1);Si.displayName="InfoFilled";const v1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),y1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(v1,{})})},ds=m.forwardRef(y1);ds.displayName="WarningFilled";const w1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),C1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(w1,{})})},Cr=m.forwardRef(C1);Cr.displayName="CircleCloseFilled";const _1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),k1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O(i,"el-icon"),onClick:l,children:n.jsx(_1,{})})},lc=m.forwardRef(k1);lc.displayName="CircleCheckFilled";const N1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),b1=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),children:n.jsx(N1,{})})},sc=m.forwardRef(b1);sc.displayName="ArrowRight";const S1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),E1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),onClick:l,children:n.jsx(S1,{})})},_p=m.forwardRef(E1);_p.displayName="UserFilled";const T1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),m.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),R1=(t,e)=>{const{style:r,className:i,onClick:l}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),onClick:l,children:n.jsx(T1,{})})},oc=m.forwardRef(R1);oc.displayName="CircleCheck";const B1=t=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...t},m.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),L1=(t,e)=>{const{style:r,className:i}=t;return n.jsx("i",{ref:e,style:r,className:O("el-icon",i),children:n.jsx(B1,{})})},kp=m.forwardRef(L1);kp.displayName="QuestionFilled";const D1=(t,e)=>{const{className:r,style:i,children:l,type:s,plain:o=!1,round:a=!1,circle:c=!1,disabled:u=!1,link:d=!1,text:f=!1,bg:x=!1,icon:g,...v}=t,y=g?n.jsx(n.Fragment,{children:g}):n.jsx(n.Fragment,{});return n.jsxs("button",{ref:e,style:i,disabled:u,...v,className:O(r,"el-button",s?`el-button--${s}`:"",o?"is-plain":"",a?"is-round":"",c?"is-circle":"",u?"is-disabled":"",d?"is-link":"",f?"is-text":"",x?"is-has-bg":""),children:[y,l]})},b=m.forwardRef(D1);b.displayName="Button";const P1=(t,e)=>{const{style:r,className:i,children:l,direction:s}=t,o=()=>s==="vertical"?!0:s==="horizontal"?!1:l?l.some(a=>{const c=a.props.children;return c==="Header"||c==="Footer"}):!1;return n.jsx("section",{ref:e,style:r,className:O(i,"el-container",o()?"is-vertical":""),children:l})},qe=m.forwardRef(P1);qe.displayName="Container";const A1=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-header-height":s};return n.jsx("header",{ref:e,style:o,className:O(i,"el-header"),children:l})},In=m.forwardRef(A1);In.displayName="Head";const M1=(t,e)=>{const{style:r,className:i,children:l}=t;return n.jsx("main",{ref:e,style:r,className:O(i,"el-main"),children:l})},mn=m.forwardRef(M1);mn.displayName="Main";const F1=(t,e)=>{const{style:r,className:i,children:l,height:s}=t,o={...r,"--el-footer-height":s};return n.jsx("footer",{ref:e,style:o,className:O(i,"el-footer"),children:l})},hs=m.forwardRef(F1);hs.displayName="Footer";const I1=(t,e)=>{const{style:r,className:i,children:l,width:s=200}=t,o={...r,"--el-aside-width":s};return n.jsx("aside",{ref:e,style:o,className:O(i,"el-aside"),children:l})},_r=m.forwardRef(I1);_r.displayName="Aside";const Np=m.createContext({}),O1=(t,e)=>{const{style:r,className:i,children:l,gutter:s=0,justify:o}=t,a={marginLeft:`-${s/2}px`,marginRight:`-${s/2}px`,...r},c=m.useMemo(()=>({gutter:s}),[s]);return n.jsx(Np.Provider,{value:c,children:n.jsx("div",{ref:e,style:a,className:O(i,"el-row",o?`is-justify-${o}`:""),children:l})})},le=m.forwardRef(O1);le.displayName="Row";const z1=(t,e)=>{const{style:r,className:i,children:l,span:s=24,offset:o,xs:a,sm:c,md:u,lg:d,xl:f}=t,{gutter:x}=m.useContext(Np),g={paddingLeft:`${x/2}px`,paddingRight:`${x/2}px`,...r};return n.jsx("div",{ref:e,style:g,className:O(i,"el-col",s?`el-col-${s}`:"",x?"is-guttered":"",o?`el-col-offset-${o}`:"",a?`el-col-xs-${a}`:"",c?`el-col-sm-${c}`:"",u?`el-col-md-${u}`:"",d?`el-col-lg-${d}`:"",f?`el-col-xl-${f}`:""),children:l})},M=m.forwardRef(z1);M.displayName="Col";const $1=(t,e)=>{const{style:r,className:i,children:l,type:s,href:o,target:a,disabled:c=!1,underline:u=!0,icon:d}=t,f=d?n.jsx(n.Fragment,{children:d}):n.jsx(n.Fragment,{});return n.jsxs("a",{ref:e,style:r,className:O(i,"el-link",s?`el-link--${s}`:"el-link--default",c?"is-disabled":"",u?"is-underline":""),href:c||!o?void 0:o,target:a||void 0,children:[f,n.jsx("span",{className:"el-link__inner",children:l})]})},Te=m.forwardRef($1);Te.displayName="Link";const U1=(t,e)=>{const{style:r,className:i,children:l,type:s,size:o,truncated:a=!1,lineClamp:c}=t,u={WebkitLineClamp:c,...r};return n.jsx("span",{ref:e,style:u,className:O(i,"el-text",s?`el-text--${s}`:"",o?`el-text--${o}`:"",a?"is-truncated":"",c?"is-line-clamp":""),children:l})},Ye=m.forwardRef(U1);Ye.displayName="Text";const H1=(t,e)=>{const{style:r,className:i,children:l,contentPosition:s="center",borderStyle:o="solid",direction:a="horizontal"}=t,c={"--el-border-style":o,...r},u=l?n.jsx(n.Fragment,{children:n.jsx("div",{className:O("el-divider__text",`is-${s}`),children:l})}):n.jsx(n.Fragment,{});return n.jsx("div",{ref:e,style:c,className:O(i,"el-divider",`el-divider--${a}`),children:u})},St=m.forwardRef(H1);St.displayName="Divider";const W1=(t,e)=>{const{style:r,className:i,defaultChecked:l=!1,size:s,inactiveText:o,activeText:a,inlinePrompt:c=!1,width:u,activeIcon:d,inactiveIcon:f,disabled:x=!1,loading:g=!1,beforeChange:v,activeActionIcon:y,inactiveActionIcon:k}=t,[p,h]=m.useState(l);function j(){if(x||g)return;if(!v){w();return}const Q=v();Q instanceof Promise&&Q.then(te=>{te&&w()})}function w(){h(!p)}function _(){return f?n.jsx(n.Fragment,{children:f}):n.jsx(n.Fragment,{children:n.jsx("span",{children:o})})}function S(){return(o||f)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:O("el-switch__label el-switch__label--left",p?"":"is-active"),children:n.jsx(_,{})})}):n.jsx(n.Fragment,{})}function E(){return d?n.jsx(n.Fragment,{children:d}):n.jsx(n.Fragment,{children:n.jsx("span",{children:d})})}function B(){return(a||d)&&!c?n.jsx(n.Fragment,{children:n.jsx("span",{className:O("el-switch__label el-switch__label--right",p?"is-active":""),children:n.jsx(E,{})})}):n.jsx(n.Fragment,{})}function z(){return c&&(d||f)?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:p?d:f})}):c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-switch__inner",children:n.jsx("span",{className:"is-text",children:p?a:o})})}):n.jsx(n.Fragment,{})}function F(){return g?n.jsx(n.Fragment,{children:n.jsx(rc,{className:"is-loading"})}):y&&p?n.jsx(n.Fragment,{children:y}):k&&!p?n.jsx(n.Fragment,{children:k}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:O(i,"el-switch",p?"is-checked":"",s?`el-switch--${s}`:"",{"is-disabled":x||g}),onClick:j,children:[n.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:x||g}),n.jsx(S,{}),n.jsxs("span",{className:"el-switch__core",style:{width:`${u}px`},children:[n.jsx(z,{}),n.jsx("div",{className:"el-switch__action",children:n.jsx(F,{})})]}),n.jsx(B,{})]})},me=m.forwardRef(W1);me.displayName="Switch";const V1=(t,e)=>{const{style:r,className:i,type:l="info",title:s,effect:o="light",closable:a=!0,closeText:c,close:u,showIcon:d=!1,center:f=!1,description:x}=t,[g,v]=m.useState(!0);function y(){if(!d)return n.jsx(n.Fragment,{});let w=n.jsx(n.Fragment,{});switch(l){case"success":w=n.jsx(n.Fragment,{children:n.jsx(lc,{className:O("el-alert__icon",{"is-big":x})})});break;case"info":w=n.jsx(n.Fragment,{children:n.jsx(Si,{className:O("el-alert__icon",{"is-big":x})})});break;case"warning":w=n.jsx(n.Fragment,{children:n.jsx(ds,{className:O("el-alert__icon",{"is-big":x})})});break;case"error":w=n.jsx(n.Fragment,{children:n.jsx(Cr,{className:O("el-alert__icon",{"is-big":x})})});break}return w}function k(){return x?n.jsx(n.Fragment,{children:n.jsx("p",{className:"el-alert__description",children:x})}):n.jsx(n.Fragment,{})}function p(){u&&u(),v(!1)}const h={display:g?"":"none",...r};function j(){return a?c?n.jsx(n.Fragment,{children:n.jsx("div",{className:"el-alert__close-btn is-customed",onClick:p,children:c})}):n.jsx(n.Fragment,{children:n.jsx(an,{className:"el-alert__close-btn",onClick:p})}):n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:h,className:O("el-alert",`el-alert--${l}`,`is-${o}`,{"is-center":f},i),role:"alert",children:[n.jsx(y,{}),n.jsxs("div",{className:"el-alert__content",children:[n.jsx("span",{className:O("el-alert__title",{"is-bold":x}),children:s}),n.jsx(k,{}),n.jsx(j,{})]})]})},oe=m.forwardRef(V1);oe.displayName="Alert";const X1=m.createContext({}),Q1=(t,e)=>{const{style:r,className:i,children:l,activeName:s}=t,o=m.useMemo(()=>({activeName:s}),[s]);return n.jsx(X1.Provider,{value:o,children:n.jsx("div",{ref:e,style:r,className:O(i,"el-collapse"),children:l})})},bp=m.forwardRef(Q1);bp.displayName="Collapse";const G1=(t,e)=>{const{style:r,className:i,children:l,title:s}=t,[o,a]=m.useState(!1);function c(){a(!o)}return n.jsxs("div",{ref:e,style:r,className:O(i,"el-collapse-item",{"is-active":o}),onClick:c,children:[n.jsxs("button",{className:O("el-collapse-item__header",{"is-active":o}),type:"button",children:[s,n.jsx(sc,{className:"el-collapse-item__arrow"})]}),n.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:o?"":"none"},children:n.jsx("div",{className:"el-collapse-item__content",children:l})})]})},Mr=m.forwardRef(G1);Mr.displayName="CollapseItem";const K1=(t,e)=>{const{style:r,className:i,shape:l="circle",size:s,src:o,icon:a,fit:c="cover",onError:u,children:d}=t,f={...r,"--el-avatar-size":s&&typeof s=="number"?`${s}px`:""},[x,g]=m.useState(!0);function v(){const p=new Image(0,0);o&&(p.src=o),p.onload=()=>{g(!0)},p.onerror=h=>{h instanceof Event&&(h.preventDefault(),h.stopPropagation()),g(!1),u&&u()}}function y(){return x?n.jsx("img",{src:o,style:{objectFit:c}}):n.jsx(n.Fragment,{children:d})}function k(){return a?n.jsx(n.Fragment,{children:a}):o?(v(),n.jsx(n.Fragment,{children:n.jsx(y,{})})):n.jsx(n.Fragment,{children:d})}return n.jsx("span",{ref:e,style:f,className:O(i,"el-avatar",`el-avatar--${l}`,s?`el-avatar--${s}`:"",{"el-avatar--icon":a}),children:n.jsx(k,{})})},kt=m.forwardRef(K1);kt.displayName="Avatar";const Y1=(t,e)=>{const{style:r,className:i,icon:l="info",title:s,subTitle:o,extra:a}=t;function c(){if(typeof l=="string"){let u=n.jsx(n.Fragment,{});switch(l){case"success":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":u=n.jsx(n.Fragment,{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:n.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return u}else return n.jsx(n.Fragment,{children:l})}return n.jsxs("div",{ref:e,style:r,className:O("el-result",i),children:[n.jsx("div",{className:"el-result__icon",children:n.jsx(c,{})}),n.jsx("div",{className:"el-result__title",children:n.jsx("p",{children:s})}),n.jsx("div",{className:"el-result__subtitle",children:n.jsx("p",{children:o})}),n.jsx("div",{className:"el-result__extra",children:a})]})},qn=m.forwardRef(Y1);qn.displayName="Result";function cn(t){return Sp(t)?(t.nodeName||"").toLowerCase():"#document"}function Ge(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function zt(t){var e;return(e=(Sp(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Sp(t){return t instanceof Node||t instanceof Ge(t).Node}function Re(t){return t instanceof Element||t instanceof Ge(t).Element}function tt(t){return t instanceof HTMLElement||t instanceof Ge(t).HTMLElement}function Go(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ge(t).ShadowRoot}function Ei(t){const{overflow:e,overflowX:r,overflowY:i,display:l}=dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(l)}function Z1(t){return["table","td","th"].includes(cn(t))}function ac(t){const e=cc(),r=dt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function J1(t){let e=mr(t);for(;tt(e)&&!fs(e);){if(ac(e))return e;e=mr(e)}return null}function cc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fs(t){return["html","body","#document"].includes(cn(t))}function dt(t){return Ge(t).getComputedStyle(t)}function ps(t){return Re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function mr(t){if(cn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Go(t)&&t.host||zt(t);return Go(e)?e.host:e}function Ep(t){const e=mr(t);return fs(e)?t.ownerDocument?t.ownerDocument.body:t.body:tt(e)&&Ei(e)?e:Ep(e)}function gi(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const l=Ep(t),s=l===((i=t.ownerDocument)==null?void 0:i.body),o=Ge(l);return s?e.concat(o,o.visualViewport||[],Ei(l)?l:[],o.frameElement&&r?gi(o.frameElement):[]):e.concat(l,gi(l,[],r))}function Yu(t){let e=t.activeElement;for(;((r=e)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;e=e.shadowRoot.activeElement}return e}function Ko(t,e){if(!t||!e)return!1;const r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Go(r)){let i=e;for(;i;){if(t===i)return!0;i=i.parentNode||i.host}}return!1}function Tp(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function q1(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:r,version:i}=e;return r+"/"+i}).join(" "):navigator.userAgent}function ey(t){return!Zu()&&t.width===0&&t.height===0||Zu()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function ty(){return/apple/i.test(navigator.vendor)}function Zu(){const t=/android/i;return t.test(Tp())||t.test(q1())}function ny(){return Tp().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Il(t,e){const r=["mouse","pen"];return e||r.push("",void 0),r.includes(t)}function Fr(t){return(t==null?void 0:t.ownerDocument)||document}function ry(t){return"composedPath"in t?t.composedPath()[0]:t.target}const iy="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Rp(t){return tt(t)&&t.matches(iy)}const xr=Math.min,bn=Math.max,Ol=Math.round,Yi=Math.floor,un=t=>({x:t,y:t});function ly(t,e,r){return bn(t,xr(e,r))}function Bp(t,e){return typeof t=="function"?t(e):t}function uc(t){return t.split("-")[0]}function dc(t){return t.split("-")[1]}function sy(t){return t==="x"?"y":"x"}function Lp(t){return t==="y"?"height":"width"}function hc(t){return["top","bottom"].includes(uc(t))?"y":"x"}function Dp(t){return sy(hc(t))}function oy(t){return{top:0,right:0,bottom:0,left:0,...t}}function ay(t){return typeof t!="number"?oy(t):{top:t,right:t,bottom:t,left:t}}function Pp(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ju(t,e,r){let{reference:i,floating:l}=t;const s=hc(e),o=Dp(e),a=Lp(o),c=uc(e),u=s==="y",d=i.x+i.width/2-l.width/2,f=i.y+i.height/2-l.height/2,x=i[a]/2-l[a]/2;let g;switch(c){case"top":g={x:d,y:i.y-l.height};break;case"bottom":g={x:d,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:f};break;case"left":g={x:i.x-l.width,y:f};break;default:g={x:i.x,y:i.y}}switch(dc(e)){case"start":g[o]-=x*(r&&u?-1:1);break;case"end":g[o]+=x*(r&&u?-1:1);break}return g}const cy=async(t,e,r)=>{const{placement:i="bottom",strategy:l="absolute",middleware:s=[],platform:o}=r,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:l}),{x:d,y:f}=Ju(u,i,c),x=i,g={},v=0;for(let y=0;y<a.length;y++){const{name:k,fn:p}=a[y],{x:h,y:j,data:w,reset:_}=await p({x:d,y:f,initialPlacement:i,placement:x,strategy:l,middlewareData:g,rects:u,platform:o,elements:{reference:t,floating:e}});if(d=h??d,f=j??f,g={...g,[k]:{...g[k],...w}},_&&v<=50){v++,typeof _=="object"&&(_.placement&&(x=_.placement),_.rects&&(u=_.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:l}):_.rects),{x:d,y:f}=Ju(u,x,c)),y=-1;continue}}return{x:d,y:f,placement:x,strategy:l,middlewareData:g}},uy=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:i,placement:l,rects:s,platform:o,elements:a,middlewareData:c}=e,{element:u,padding:d=0}=Bp(t,e)||{};if(u==null)return{};const f=ay(d),x={x:r,y:i},g=Dp(l),v=Lp(g),y=await o.getDimensions(u),k=g==="y",p=k?"top":"left",h=k?"bottom":"right",j=k?"clientHeight":"clientWidth",w=s.reference[v]+s.reference[g]-x[g]-s.floating[v],_=x[g]-s.reference[g],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(u));let E=S?S[j]:0;(!E||!await(o.isElement==null?void 0:o.isElement(S)))&&(E=a.floating[j]||s.floating[v]);const B=w/2-_/2,z=E/2-y[v]/2-1,F=xr(f[p],z),Q=xr(f[h],z),te=F,ce=E-y[v]-Q,U=E/2-y[v]/2+B,H=ly(te,U,ce),W=!c.arrow&&dc(l)!=null&&U!=H&&s.reference[v]/2-(U<te?F:Q)-y[v]/2<0,N=W?U<te?U-te:U-ce:0;return{[g]:x[g]+N,data:{[g]:H,centerOffset:U-H-N,...W&&{alignmentOffset:N}},reset:W}}});async function dy(t,e){const{placement:r,platform:i,elements:l}=t,s=await(i.isRTL==null?void 0:i.isRTL(l.floating)),o=uc(r),a=dc(r),c=hc(r)==="y",u=["left","top"].includes(o)?-1:1,d=s&&c?-1:1,f=Bp(e,t);let{mainAxis:x,crossAxis:g,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),c?{x:g*d,y:x*u}:{x:x*u,y:g*d}}const fc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:l,y:s,placement:o,middlewareData:a}=e,c=await dy(e,t);return o===((r=a.offset)==null?void 0:r.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:l+c.x,y:s+c.y,data:{...c,placement:o}}}}};function Ap(t){const e=dt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const l=tt(t),s=l?t.offsetWidth:r,o=l?t.offsetHeight:i,a=Ol(r)!==s||Ol(i)!==o;return a&&(r=s,i=o),{width:r,height:i,$:a}}function pc(t){return Re(t)?t:t.contextElement}function sr(t){const e=pc(t);if(!tt(e))return un(1);const r=e.getBoundingClientRect(),{width:i,height:l,$:s}=Ap(e);let o=(s?Ol(r.width):r.width)/i,a=(s?Ol(r.height):r.height)/l;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const hy=un(0);function Mp(t){const e=Ge(t);return!cc()||!e.visualViewport?hy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function fy(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Ge(t)?!1:e}function Ln(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const l=t.getBoundingClientRect(),s=pc(t);let o=un(1);e&&(i?Re(i)&&(o=sr(i)):o=sr(t));const a=fy(s,r,i)?Mp(s):un(0);let c=(l.left+a.x)/o.x,u=(l.top+a.y)/o.y,d=l.width/o.x,f=l.height/o.y;if(s){const x=Ge(s),g=i&&Re(i)?Ge(i):i;let v=x.frameElement;for(;v&&i&&g!==x;){const y=sr(v),k=v.getBoundingClientRect(),p=dt(v),h=k.left+(v.clientLeft+parseFloat(p.paddingLeft))*y.x,j=k.top+(v.clientTop+parseFloat(p.paddingTop))*y.y;c*=y.x,u*=y.y,d*=y.x,f*=y.y,c+=h,u+=j,v=Ge(v).frameElement}}return Pp({width:d,height:f,x:c,y:u})}function py(t){let{rect:e,offsetParent:r,strategy:i}=t;const l=tt(r),s=zt(r);if(r===s)return e;let o={scrollLeft:0,scrollTop:0},a=un(1);const c=un(0);if((l||!l&&i!=="fixed")&&((cn(r)!=="body"||Ei(s))&&(o=ps(r)),tt(r))){const u=Ln(r);a=sr(r),c.x=u.x+r.clientLeft,c.y=u.y+r.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+c.x,y:e.y*a.y-o.scrollTop*a.y+c.y}}function my(t){return Array.from(t.getClientRects())}function Fp(t){return Ln(zt(t)).left+ps(t).scrollLeft}function xy(t){const e=zt(t),r=ps(t),i=t.ownerDocument.body,l=bn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=bn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Fp(t);const a=-r.scrollTop;return dt(i).direction==="rtl"&&(o+=bn(e.clientWidth,i.clientWidth)-l),{width:l,height:s,x:o,y:a}}function gy(t,e){const r=Ge(t),i=zt(t),l=r.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,c=0;if(l){s=l.width,o=l.height;const u=cc();(!u||u&&e==="fixed")&&(a=l.offsetLeft,c=l.offsetTop)}return{width:s,height:o,x:a,y:c}}function jy(t,e){const r=Ln(t,!0,e==="fixed"),i=r.top+t.clientTop,l=r.left+t.clientLeft,s=tt(t)?sr(t):un(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,c=l*s.x,u=i*s.y;return{width:o,height:a,x:c,y:u}}function qu(t,e,r){let i;if(e==="viewport")i=gy(t,r);else if(e==="document")i=xy(zt(t));else if(Re(e))i=jy(e,r);else{const l=Mp(t);i={...e,x:e.x-l.x,y:e.y-l.y}}return Pp(i)}function Ip(t,e){const r=mr(t);return r===e||!Re(r)||fs(r)?!1:dt(r).position==="fixed"||Ip(r,e)}function vy(t,e){const r=e.get(t);if(r)return r;let i=gi(t,[],!1).filter(a=>Re(a)&&cn(a)!=="body"),l=null;const s=dt(t).position==="fixed";let o=s?mr(t):t;for(;Re(o)&&!fs(o);){const a=dt(o),c=ac(o);!c&&a.position==="fixed"&&(l=null),(s?!c&&!l:!c&&a.position==="static"&&!!l&&["absolute","fixed"].includes(l.position)||Ei(o)&&!c&&Ip(t,o))?i=i.filter(d=>d!==o):l=a,o=mr(o)}return e.set(t,i),i}function yy(t){let{element:e,boundary:r,rootBoundary:i,strategy:l}=t;const o=[...r==="clippingAncestors"?vy(e,this._c):[].concat(r),i],a=o[0],c=o.reduce((u,d)=>{const f=qu(e,d,l);return u.top=bn(f.top,u.top),u.right=xr(f.right,u.right),u.bottom=xr(f.bottom,u.bottom),u.left=bn(f.left,u.left),u},qu(e,a,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function wy(t){const{width:e,height:r}=Ap(t);return{width:e,height:r}}function Cy(t,e,r){const i=tt(e),l=zt(e),s=r==="fixed",o=Ln(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=un(0);if(i||!i&&!s)if((cn(e)!=="body"||Ei(l))&&(a=ps(e)),i){const u=Ln(e,!0,s,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else l&&(c.x=Fp(l));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function ed(t,e){return!tt(t)||dt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Op(t,e){const r=Ge(t);if(!tt(t))return r;let i=ed(t,e);for(;i&&Z1(i)&&dt(i).position==="static";)i=ed(i,e);return i&&(cn(i)==="html"||cn(i)==="body"&&dt(i).position==="static"&&!ac(i))?r:i||J1(t)||r}const _y=async function(t){let{reference:e,floating:r,strategy:i}=t;const l=this.getOffsetParent||Op,s=this.getDimensions;return{reference:Cy(e,await l(r),i),floating:{x:0,y:0,...await s(r)}}};function ky(t){return dt(t).direction==="rtl"}const Ny={convertOffsetParentRelativeRectToViewportRelativeRect:py,getDocumentElement:zt,getClippingRect:yy,getOffsetParent:Op,getElementRects:_y,getClientRects:my,getDimensions:wy,getScale:sr,isElement:Re,isRTL:ky};function by(t,e){let r=null,i;const l=zt(t);function s(){clearTimeout(i),r&&r.disconnect(),r=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:u,top:d,width:f,height:x}=t.getBoundingClientRect();if(a||e(),!f||!x)return;const g=Yi(d),v=Yi(l.clientWidth-(u+f)),y=Yi(l.clientHeight-(d+x)),k=Yi(u),h={rootMargin:-g+"px "+-v+"px "+-y+"px "+-k+"px",threshold:bn(0,xr(1,c))||1};let j=!0;function w(_){const S=_[0].intersectionRatio;if(S!==c){if(!j)return o();S?o(!1,S):i=setTimeout(()=>{o(!1,1e-7)},100)}j=!1}try{r=new IntersectionObserver(w,{...h,root:l.ownerDocument})}catch{r=new IntersectionObserver(w,h)}r.observe(t)}return o(!0),s}function mc(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,u=pc(t),d=l||s?[...u?gi(u):[],...gi(e)]:[];d.forEach(p=>{l&&p.addEventListener("scroll",r,{passive:!0}),s&&p.addEventListener("resize",r)});const f=u&&a?by(u,r):null;let x=-1,g=null;o&&(g=new ResizeObserver(p=>{let[h]=p;h&&h.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{g&&g.observe(e)})),r()}),u&&!c&&g.observe(u),g.observe(e));let v,y=c?Ln(t):null;c&&k();function k(){const p=Ln(t);y&&(p.x!==y.x||p.y!==y.y||p.width!==y.width||p.height!==y.height)&&r(),y=p,v=requestAnimationFrame(k)}return r(),()=>{d.forEach(p=>{l&&p.removeEventListener("scroll",r),s&&p.removeEventListener("resize",r)}),f&&f(),g&&g.disconnect(),g=null,c&&cancelAnimationFrame(v)}}const td=uy,Sy=(t,e,r)=>{const i=new Map,l={platform:Ny,...r},s={...l.platform,_c:i};return cy(t,e,{...l,platform:s})},xc=t=>{function e(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){const{element:i,padding:l}=typeof t=="function"?t(r):t;return i&&e(i)?i.current!=null?td({element:i.current,padding:l}).fn(r):{}:i?td({element:i,padding:l}).fn(r):{}}}};var cl=typeof document<"u"?m.useLayoutEffect:m.useEffect;function zl(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let r,i,l;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(i=r;i--!==0;)if(!zl(t[i],e[i]))return!1;return!0}if(l=Object.keys(t),r=l.length,r!==Object.keys(e).length)return!1;for(i=r;i--!==0;)if(!{}.hasOwnProperty.call(e,l[i]))return!1;for(i=r;i--!==0;){const s=l[i];if(!(s==="_owner"&&t.$$typeof)&&!zl(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function zp(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function nd(t,e){const r=zp(t);return Math.round(e*r)/r}function rd(t){const e=m.useRef(t);return cl(()=>{e.current=t}),e}function Ey(t){t===void 0&&(t={});const{placement:e="bottom",strategy:r="absolute",middleware:i=[],platform:l,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:c,open:u}=t,[d,f]=m.useState({x:0,y:0,strategy:r,placement:e,middlewareData:{},isPositioned:!1}),[x,g]=m.useState(i);zl(x,i)||g(i);const[v,y]=m.useState(null),[k,p]=m.useState(null),h=m.useCallback(W=>{W!=S.current&&(S.current=W,y(W))},[y]),j=m.useCallback(W=>{W!==E.current&&(E.current=W,p(W))},[p]),w=s||v,_=o||k,S=m.useRef(null),E=m.useRef(null),B=m.useRef(d),z=rd(c),F=rd(l),Q=m.useCallback(()=>{if(!S.current||!E.current)return;const W={placement:e,strategy:r,middleware:x};F.current&&(W.platform=F.current),Sy(S.current,E.current,W).then(N=>{const C={...N,isPositioned:!0};te.current&&!zl(B.current,C)&&(B.current=C,bi.flushSync(()=>{f(C)}))})},[x,e,r,F]);cl(()=>{u===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,f(W=>({...W,isPositioned:!1})))},[u]);const te=m.useRef(!1);cl(()=>(te.current=!0,()=>{te.current=!1}),[]),cl(()=>{if(w&&(S.current=w),_&&(E.current=_),w&&_){if(z.current)return z.current(w,_,Q);Q()}},[w,_,Q,z]);const ce=m.useMemo(()=>({reference:S,floating:E,setReference:h,setFloating:j}),[h,j]),U=m.useMemo(()=>({reference:w,floating:_}),[w,_]),H=m.useMemo(()=>{const W={position:r,left:0,top:0};if(!U.floating)return W;const N=nd(U.floating,d.x),C=nd(U.floating,d.y);return a?{...W,transform:"translate("+N+"px, "+C+"px)",...zp(U.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:N,top:C}},[r,a,U.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:Q,refs:ce,elements:U,floatingStyles:H}),[d,Q,ce,U,H])}const Ty=ea.useInsertionEffect,Ry=Ty||(t=>t());function By(t){const e=m.useRef(()=>{});return Ry(()=>{e.current=t}),m.useCallback(function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e.current==null?void 0:e.current(...i)},[])}var ji=typeof document<"u"?m.useLayoutEffect:m.useEffect;let Qs=!1,Ly=0;const id=()=>"floating-ui-"+Ly++;function Dy(){const[t,e]=m.useState(()=>Qs?id():void 0);return ji(()=>{t==null&&e(id())},[]),m.useEffect(()=>{Qs||(Qs=!0)},[]),t}const Py=ea.useId,Ay=Py||Dy;function My(){const t=new Map;return{emit(e,r){var i;(i=t.get(e))==null||i.forEach(l=>l(r))},on(e,r){t.set(e,[...t.get(e)||[],r])},off(e,r){var i;t.set(e,((i=t.get(e))==null?void 0:i.filter(l=>l!==r))||[])}}}const Fy=m.createContext(null),Iy=m.createContext(null),$p=()=>{var t;return((t=m.useContext(Fy))==null?void 0:t.id)||null},Up=()=>m.useContext(Iy);function Hp(t){return"data-floating-ui-"+t}function ld(t){const e=m.useRef(t);return ji(()=>{e.current=t}),e}const sd=Hp("safe-polygon");function Gs(t,e,r){return r&&!Il(r)?0:typeof t=="number"?t:t==null?void 0:t[e]}function Wp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,events:s,elements:{domReference:o,floating:a},refs:c}=t,{enabled:u=!0,delay:d=0,handleClose:f=null,mouseOnly:x=!1,restMs:g=0,move:v=!0}=e,y=Up(),k=$p(),p=ld(f),h=ld(d),j=m.useRef(),w=m.useRef(),_=m.useRef(),S=m.useRef(),E=m.useRef(!0),B=m.useRef(!1),z=m.useRef(()=>{}),F=m.useCallback(()=>{var U;const H=(U=l.current.openEvent)==null?void 0:U.type;return(H==null?void 0:H.includes("mouse"))&&H!=="mousedown"},[l]);m.useEffect(()=>{if(!u)return;function U(H){let{open:W}=H;W||(clearTimeout(w.current),clearTimeout(S.current),E.current=!0)}return s.on("openchange",U),()=>{s.off("openchange",U)}},[u,s]),m.useEffect(()=>{if(!u||!p.current||!r)return;function U(W){F()&&i(!1,W,"hover")}const H=Fr(a).documentElement;return H.addEventListener("mouseleave",U),()=>{H.removeEventListener("mouseleave",U)}},[a,r,i,u,p,l,F]);const Q=m.useCallback(function(U,H,W){H===void 0&&(H=!0),W===void 0&&(W="hover");const N=Gs(h.current,"close",j.current);N&&!_.current?(clearTimeout(w.current),w.current=setTimeout(()=>i(!1,U,W),N)):H&&(clearTimeout(w.current),i(!1,U,W))},[h,i]),te=m.useCallback(()=>{z.current(),_.current=void 0},[]),ce=m.useCallback(()=>{if(B.current){const U=Fr(c.floating.current).body;U.style.pointerEvents="",U.removeAttribute(sd),B.current=!1}},[c]);return m.useEffect(()=>{if(!u)return;function U(){return l.current.openEvent?["click","mousedown"].includes(l.current.openEvent.type):!1}function H(C){if(clearTimeout(w.current),E.current=!1,x&&!Il(j.current)||g>0&&Gs(h.current,"open")===0)return;const R=Gs(h.current,"open",j.current);R?w.current=setTimeout(()=>{i(!0,C,"hover")},R):i(!0,C,"hover")}function W(C){if(U())return;z.current();const R=Fr(a);if(clearTimeout(S.current),p.current){r||clearTimeout(w.current),_.current=p.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),te(),Q(C,!0,"safe-polygon")}});const $=_.current;R.addEventListener("mousemove",$),z.current=()=>{R.removeEventListener("mousemove",$)};return}(j.current==="touch"?!Ko(a,C.relatedTarget):!0)&&Q(C)}function N(C){U()||p.current==null||p.current({...t,tree:y,x:C.clientX,y:C.clientY,onClose(){ce(),te(),Q(C)}})(C)}if(Re(o)){const C=o;return r&&C.addEventListener("mouseleave",N),a==null||a.addEventListener("mouseleave",N),v&&C.addEventListener("mousemove",H,{once:!0}),C.addEventListener("mouseenter",H),C.addEventListener("mouseleave",W),()=>{r&&C.removeEventListener("mouseleave",N),a==null||a.removeEventListener("mouseleave",N),v&&C.removeEventListener("mousemove",H),C.removeEventListener("mouseenter",H),C.removeEventListener("mouseleave",W)}}},[o,a,u,t,x,g,v,Q,te,ce,i,r,y,h,p,l]),ji(()=>{var U;if(u&&r&&(U=p.current)!=null&&U.__options.blockPointerEvents&&F()){const W=Fr(a).body;if(W.setAttribute(sd,""),W.style.pointerEvents="none",B.current=!0,Re(o)&&a){var H;const N=o,C=y==null||(H=y.nodesRef.current.find(R=>R.id===k))==null||(H=H.context)==null?void 0:H.elements.floating;return C&&(C.style.pointerEvents=""),N.style.pointerEvents="auto",a.style.pointerEvents="auto",()=>{N.style.pointerEvents="",a.style.pointerEvents=""}}}},[u,r,k,a,o,y,p,l,F]),ji(()=>{r||(j.current=void 0,te(),ce())},[r,te,ce]),m.useEffect(()=>()=>{te(),clearTimeout(w.current),clearTimeout(S.current),ce()},[u,o,te,ce]),m.useMemo(()=>{if(!u)return{};function U(H){j.current=H.pointerType}return{reference:{onPointerDown:U,onPointerEnter:U,onMouseMove(H){r||g===0||(clearTimeout(S.current),S.current=setTimeout(()=>{E.current||i(!0,H.nativeEvent,"hover")},g))}},floating:{onMouseEnter(){clearTimeout(w.current)},onMouseLeave(H){Q(H.nativeEvent,!1)}}}},[u,g,r,i,Q])}function od(t){return tt(t.target)&&t.target.tagName==="BUTTON"}function ad(t){return Rp(t)}function vi(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,dataRef:l,elements:{domReference:s}}=t,{enabled:o=!0,event:a="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=e,f=m.useRef(),x=m.useRef(!1);return m.useMemo(()=>o?{reference:{onPointerDown(g){f.current=g.pointerType},onMouseDown(g){g.button===0&&(Il(f.current,!0)&&u||a!=="click"&&(r&&c&&(!l.current.openEvent||l.current.openEvent.type==="mousedown")?i(!1,g.nativeEvent,"click"):(g.preventDefault(),i(!0,g.nativeEvent,"click"))))},onClick(g){if(a==="mousedown"&&f.current){f.current=void 0;return}Il(f.current,!0)&&u||(r&&c&&(!l.current.openEvent||l.current.openEvent.type==="click")?i(!1,g.nativeEvent,"click"):i(!0,g.nativeEvent,"click"))},onKeyDown(g){f.current=void 0,!(g.defaultPrevented||!d||od(g))&&(g.key===" "&&!ad(s)&&(g.preventDefault(),x.current=!0),g.key==="Enter"&&i(!(r&&c),g.nativeEvent,"click"))},onKeyUp(g){g.defaultPrevented||!d||od(g)||ad(s)||g.key===" "&&x.current&&(x.current=!1,i(!(r&&c),g.nativeEvent,"click"))}}}:{},[o,l,a,u,d,s,c,r,i])}function gc(t){var e;t===void 0&&(t={});const{open:r=!1,onOpenChange:i,nodeId:l}=t,[s,o]=m.useState(null),a=((e=t.elements)==null?void 0:e.reference)||s,c=Ey(t),u=Up(),d=$p()!=null,f=By((_,S,E)=>{_&&(g.current.openEvent=S),v.emit("openchange",{open:_,event:S,reason:E,nested:d}),i==null||i(_,S,E)}),x=m.useRef(null),g=m.useRef({}),v=m.useState(()=>My())[0],y=Ay(),k=m.useCallback(_=>{const S=Re(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;c.refs.setReference(S)},[c.refs]),p=m.useCallback(_=>{(Re(_)||_===null)&&(x.current=_,o(_)),(Re(c.refs.reference.current)||c.refs.reference.current===null||_!==null&&!Re(_))&&c.refs.setReference(_)},[c.refs]),h=m.useMemo(()=>({...c.refs,setReference:p,setPositionReference:k,domReference:x}),[c.refs,p,k]),j=m.useMemo(()=>({...c.elements,domReference:a}),[c.elements,a]),w=m.useMemo(()=>({...c,refs:h,elements:j,dataRef:g,nodeId:l,floatingId:y,events:v,open:r,onOpenChange:f}),[c,l,y,v,r,f,h,j]);return ji(()=>{const _=u==null?void 0:u.nodesRef.current.find(S=>S.id===l);_&&(_.context=w)}),m.useMemo(()=>({...c,context:w,refs:h,elements:j}),[c,h,j,w])}function Vp(t,e){e===void 0&&(e={});const{open:r,onOpenChange:i,events:l,refs:s,elements:{floating:o,domReference:a}}=t,{enabled:c=!0,visibleOnly:u=!0}=e,d=m.useRef(!1),f=m.useRef(),x=m.useRef(!0);return m.useEffect(()=>{if(!c)return;const g=Ge(a);function v(){!r&&tt(a)&&a===Yu(Fr(a))&&(d.current=!0)}function y(){x.current=!0}return g.addEventListener("blur",v),g.addEventListener("keydown",y,!0),()=>{g.removeEventListener("blur",v),g.removeEventListener("keydown",y,!0)}},[o,a,r,c]),m.useEffect(()=>{if(!c)return;function g(v){let{reason:y}=v;(y==="reference-press"||y==="escape-key")&&(d.current=!0)}return l.on("openchange",g),()=>{l.off("openchange",g)}},[l,c]),m.useEffect(()=>()=>{clearTimeout(f.current)},[]),m.useMemo(()=>c?{reference:{onPointerDown(g){ey(g.nativeEvent)||(x.current=!1)},onMouseLeave(){d.current=!1},onFocus(g){if(d.current)return;const v=ry(g.nativeEvent);if(u&&Re(v))try{if(ty()&&ny())throw Error();if(!v.matches(":focus-visible"))return}catch{if(!x.current&&!Rp(v))return}i(!0,g.nativeEvent,"focus")},onBlur(g){d.current=!1;const v=g.relatedTarget,y=Re(v)&&v.hasAttribute(Hp("focus-guard"))&&v.getAttribute("data-type")==="outside";f.current=window.setTimeout(()=>{const k=Yu(a?a.ownerDocument:document);!v&&k===a||Ko(s.floating.current,v)||Ko(a,v)||y||i(!1,g.nativeEvent,"focus")})}}}:{},[c,u,a,s,i])}const cd="active",ud="selected";function Ks(t,e,r){const i=new Map,l=r==="item";let s=t;if(l&&t){const{[cd]:o,[ud]:a,...c}=t;s=c}return{...r==="floating"&&{tabIndex:-1},...s,...e.map(o=>{const a=o?o[r]:null;return typeof a=="function"?t?a(t):null:a}).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(c=>{let[u,d]=c;if(!(l&&[cd,ud].includes(u)))if(u.indexOf("on")===0){if(i.has(u)||i.set(u,[]),typeof d=="function"){var f;(f=i.get(u))==null||f.push(d),o[u]=function(){for(var x,g=arguments.length,v=new Array(g),y=0;y<g;y++)v[y]=arguments[y];return(x=i.get(u))==null?void 0:x.map(k=>k(...v)).find(k=>k!==void 0)}}}else o[u]=d}),o),{})}}function jc(t){t===void 0&&(t=[]);const e=t,r=m.useCallback(s=>Ks(s,t,"reference"),e),i=m.useCallback(s=>Ks(s,t,"floating"),e),l=m.useCallback(s=>Ks(s,t,"item"),t.map(s=>s==null?void 0:s.item));return m.useMemo(()=>({getReferenceProps:r,getFloatingProps:i,getItemProps:l}),[r,i,l])}const Oy=(t,e)=>{const{style:r,className:i,placement:l,content:s,effect:o,getFloatingProps:a,children:c}=t;function u(){return typeof s=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:s})}):n.jsx(n.Fragment,{children:s})}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:r,className:O("el-popper",`is-${o}`,i),"data-popper-placement":l,...a(),children:[n.jsx(u,{}),c]})})},Xp=m.forwardRef(Oy);Xp.displayName="TooltipPopper";const zy=t=>{var E,B;const{style:e,className:r,effect:i="dark",placement:l="bottom",trigger:s="hover",content:o,showAfter:a=0,hideAfter:c=200,disabled:u=!0,children:d}=t,[f,x]=m.useState(!1),g=m.useRef(null),{refs:v,floatingStyles:y,context:k,middlewareData:p}=gc({placement:l,middleware:[fc(12),xc({element:g})],open:f&&u,whileElementsMounted:mc,onOpenChange:x});let h={};switch(s){case"hover":h=Wp(k,{delay:{open:a,close:c}});break;case"click":h=vi(k);break;case"focus":h=Vp(k);break;case"contextmenu":h=vi(k,{event:"mousedown"});break}const{getReferenceProps:j,getFloatingProps:w}=jc([h]),_=m.cloneElement(m.Children.only(d),{ref:v.setReference,...j()}),S={...e,...y};return n.jsxs(n.Fragment,{children:[f&&bi.createPortal(n.jsx(Xp,{ref:v.setFloating,style:S,className:O(r),effect:i,placement:l,content:o,getFloatingProps:w,children:n.jsx("span",{ref:g,className:"el-popper__arrow",style:{position:"absolute",left:(E=p.arrow)==null?void 0:E.x,top:(B=p.arrow)==null?void 0:B.y}})}),document.body),_]})},_e=m.forwardRef(zy);_e.displayName="Tooltip";const $y=(t,e)=>{const{style:r,className:i,placement:l,title:s,content:o,getFloatingProps:a,children:c}=t;function u(){return typeof o=="string"?n.jsx(n.Fragment,{children:n.jsx("span",{children:o})}):n.jsx(n.Fragment,{children:o})}const d={width:"200px",...r};return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:d,className:O("el-popper is-light el-popover el-popover--plain",i),"data-popper-placement":l,...a(),children:[n.jsx("div",{className:"el-popover__title",role:"title",children:s}),n.jsx(u,{}),c]})})},Qp=m.forwardRef($y);Qp.displayName="PopoverPopper";const Uy=t=>{var S,E;const{style:e,className:r,placement:i="bottom",trigger:l="hover",title:s,content:o,showAfter:a=0,hideAfter:c=200,children:u}=t,[d,f]=m.useState(!1),x=m.useRef(null),{refs:g,floatingStyles:v,context:y,middlewareData:k}=gc({placement:i,middleware:[fc(12),xc({element:x})],open:d,whileElementsMounted:mc,onOpenChange:f});let p={};switch(l){case"hover":p=Wp(y,{delay:{open:a,close:c}});break;case"click":p=vi(y);break;case"focus":p=Vp(y);break;case"contextmenu":p=vi(y,{event:"mousedown"});break}const{getReferenceProps:h,getFloatingProps:j}=jc([p]),w=m.cloneElement(m.Children.only(u),{ref:g.setReference,...h()}),_={...e,...v};return n.jsxs(n.Fragment,{children:[d&&bi.createPortal(n.jsx(Qp,{ref:g.setFloating,style:_,className:O(r),placement:i,title:s,content:o,getFloatingProps:j,children:n.jsx("span",{ref:x,className:"el-popper__arrow",style:{position:"absolute",left:(S=k.arrow)==null?void 0:S.x,top:(E=k.arrow)==null?void 0:E.y}})}),document.body),w]})},Ir=m.forwardRef(Uy);Ir.displayName="Popover";const Hy=(t,e)=>{const{style:r,className:i,percentage:l=0,format:s,status:o,textInside:a=!1,strokeWidth:c=6}=t;function u(){return a?s?n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsx("span",{children:s(l)})}):n.jsx("div",{className:"el-progress-bar__innerText",children:n.jsxs("span",{children:[l,"%"]})}):n.jsx(n.Fragment,{})}function d(){if(!a)if(o){let f;switch(o){case"success":f=n.jsx(oc,{});break;case"warning":f=n.jsx(ds,{});break;case"exception":f=n.jsx(Cr,{});break}return f}else return s?n.jsx("span",{children:s(l)}):n.jsxs("span",{children:[l,"%"]});return n.jsx(n.Fragment,{})}return n.jsxs("div",{ref:e,style:r,className:O("el-progress el-progress--line",o?`is-${o}`:"",i),role:"progressbar",children:[n.jsx("div",{className:"el-progress-bar",children:n.jsx("div",{className:"el-progress-bar__outer",style:{height:`${c}px`},children:n.jsx("div",{className:"el-progress-bar__inner",style:{width:`${l}%`,animationDuration:"3s"},children:n.jsx(u,{})})})}),n.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:n.jsx(d,{})})]})},_t=m.forwardRef(Hy);_t.displayName="Progress";const Wy=(t,e)=>{const{style:r,className:i,placement:l,title:s,width:o,icon:a,iconColor:c,hideIcon:u,confirmButtonText:d,cancelButtonText:f,onConfirm:x,onCancel:g,getFloatingProps:v,children:y}=t,k={width:o?typeof o=="string"?o:`${o}px`:"150px",...r};function p(){return u?n.jsx(n.Fragment,{}):m.cloneElement(a,{className:O(a==null?void 0:a.props.className,"el-popconfirm__icon"),style:{color:c}})}function h(w){g&&(console.log(w),g(w))}function j(w){x&&x(w)}return n.jsx(n.Fragment,{children:n.jsxs("div",{ref:e,style:k,className:O("el-popper is-light el-popover",i),"data-popper-placement":l,...v(),children:[n.jsxs("div",{className:"el-popconfirm",children:[n.jsxs("div",{className:"el-popconfirm__main",children:[n.jsx(p,{}),s]}),n.jsxs("div",{className:"el-popconfirm__action",children:[n.jsx(b,{onClick:h,children:f}),n.jsx(b,{type:"primary",onClick:j,children:d})]})]}),y]})})},Gp=m.forwardRef(Wy);Gp.displayName="PopconfirmPopper";const Vy=t=>{var F,Q;const{style:e,className:r,placement:i="bottom",title:l,width:s=150,icon:o=n.jsx(kp,{}),iconColor:a="#f90",hideIcon:c=!1,confirmButtonText:u="Yes",cancelButtonText:d="No",onConfirm:f,onCancel:x,children:g}=t,[v,y]=m.useState(!1),k=m.useRef(null),{refs:p,floatingStyles:h,context:j,middlewareData:w}=gc({placement:i,middleware:[fc(12),xc({element:k})],open:v,whileElementsMounted:mc,onOpenChange:y}),_=vi(j),{getReferenceProps:S,getFloatingProps:E}=jc([_]),B=m.cloneElement(m.Children.only(g),{ref:p.setReference,...S()}),z={...e,...h};return n.jsxs(n.Fragment,{children:[v&&bi.createPortal(n.jsx(Gp,{ref:p.setFloating,style:z,className:O(r),placement:i,title:l,width:s,icon:o,iconColor:a,hideIcon:c,confirmButtonText:u,cancelButtonText:d,onConfirm:f,onCancel:x,getFloatingProps:E,children:n.jsx("span",{ref:k,className:"el-popper__arrow",style:{position:"absolute",left:(F=w.arrow)==null?void 0:F.x,top:(Q=w.arrow)==null?void 0:Q.y}})}),document.body),B]})},ms=m.forwardRef(Vy);ms.displayName="Popconfirm";const Xy=(t,e)=>{const{style:r,className:i,type:l="",closable:s=!1,size:o="",effect:a="light",round:c=!1,children:u}=t;function d(){return s?n.jsx(an,{className:"el-tag__close"}):n.jsx(n.Fragment,{})}return n.jsxs("span",{ref:e,style:r,className:O("el-tag el-tag--light",l?`el-tag--${l}`:"",o?`el-tag--${o}`:"",a?`el-tag--${a}`:"",c?"is-round":"",i),children:[n.jsx("span",{className:"el-tag__content",children:u}),n.jsx(d,{})]})},xe=m.forwardRef(Xy);xe.displayName="Tag";const Qy=(t,e)=>{const{style:r,className:i,open:l=!1,width:s="50%",title:o,footer:a,onClose:c,showClose:u=!0,header:d,children:f}=t,x={zIndex:2015,...r,display:l?"":"none"};function g(){return d?n.jsx(n.Fragment,{children:d}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-dialog__title",children:o})})}return n.jsx("div",{ref:e,style:x,className:O("el-overlay",i),children:n.jsx("div",{role:"dialog",className:"el-overlay-dialog",children:n.jsxs("div",{className:"el-dialog",style:{"--el-dialog-width":s},children:[n.jsxs("header",{className:"el-dialog__header",children:[n.jsx(g,{}),u&&n.jsx("button",{"aria-label":"Close this dialog",className:"el-dialog__headerbtn",type:"button",onClick:c,children:n.jsx(an,{className:"el-dialog__close"})})]}),n.jsx("div",{id:"el-id-9273-97",className:"el-dialog__body",children:f}),n.jsx("footer",{className:"el-dialog__footer",children:a})]})})})},yi=m.forwardRef(Qy);yi.displayName="Dialog";const Gy=(t,e)=>{const{style:r,className:i,open:l=!1,direction:s="rtl",title:o,onClose:a,header:c,footer:u,withHeader:d=!0,size:f="30%",showClose:x=!0,children:g}=t,v={...r,display:l?"":"none"};function y(){return c?n.jsx(n.Fragment,{children:c}):n.jsx(n.Fragment,{children:n.jsx("span",{role:"heading",className:"el-drawer__title",children:o})})}return n.jsx("div",{ref:e,style:v,className:O("el-overlay",i),children:n.jsxs("div",{className:O("el-drawer open",s),role:"dialog",style:{width:["ltr","rtl"].includes(s)?f:"",height:["ttb","btt"].includes(s)?f:""},children:[n.jsx("span",{className:"el-drawer__sr-focus"}),d&&n.jsxs("header",{className:"el-drawer__header",children:[n.jsx(y,{}),x&&n.jsx("button",{className:"el-drawer__close-btn",type:"button",onClick:a,children:n.jsx(an,{className:"el-drawer__close"})})]}),n.jsx("div",{className:"el-drawer__body",children:g}),u&&n.jsx("div",{className:"el-drawer__footer",children:u})]})})},Dn=m.forwardRef(Gy);Dn.displayName="DrawerComponent";function Ky(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{children:"Default"}),n.jsx(b,{type:"primary",children:"Primary"}),n.jsx(b,{type:"success",children:"Success"}),n.jsx(b,{type:"info",children:"Info"}),n.jsx(b,{type:"warning",children:"Warning"}),n.jsx(b,{type:"danger",children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{plain:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,children:"Danger"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{round:!0,children:"Round"}),n.jsx(b,{type:"primary",round:!0,children:"Primary"}),n.jsx(b,{type:"success",round:!0,children:"Success"}),n.jsx(b,{type:"info",round:!0,children:"Info"}),n.jsx(b,{type:"warning",round:!0,children:"Warning"}),n.jsx(b,{type:"danger",round:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{icon:n.jsx(Ja,{}),circle:!0}),n.jsx(b,{type:"primary",icon:n.jsx(cs,{}),circle:!0}),n.jsx(b,{type:"success",icon:n.jsx(xi,{}),circle:!0}),n.jsx(b,{type:"info",icon:n.jsx(qa,{}),circle:!0}),n.jsx(b,{type:"warning",icon:n.jsx(ec,{}),circle:!0}),n.jsx(b,{type:"danger",icon:n.jsx(tc,{}),circle:!0})]})]})}function Yy(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-4",children:[n.jsx(b,{disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",disabled:!0,children:"Success"}),n.jsx(b,{type:"info",disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",disabled:!0,children:"Danger"})]}),n.jsxs("div",{children:[n.jsx(b,{plain:!0,disabled:!0,children:"Plain"}),n.jsx(b,{type:"primary",plain:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",plain:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",plain:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",plain:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",plain:!0,disabled:!0,children:"Danger"})]})]})}function Zy(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic link button"}),n.jsx(b,{link:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,children:"Danger"}),n.jsx("p",{children:"Disabled link button"}),n.jsx(b,{link:!0,disabled:!0,children:"Default"}),n.jsx(b,{type:"primary",link:!0,disabled:!0,children:"Primary"}),n.jsx(b,{type:"success",link:!0,disabled:!0,children:"Success"}),n.jsx(b,{type:"info",link:!0,disabled:!0,children:"Info"}),n.jsx(b,{type:"warning",link:!0,disabled:!0,children:"Warning"}),n.jsx(b,{type:"danger",link:!0,disabled:!0,children:"Danger"})]})}function Jy(){const t=[{type:"",text:"plain"},{type:"primary",text:"primary"},{type:"success",text:"success"},{type:"info",text:"info"},{type:"warning",text:"warning"},{type:"danger",text:"danger"}],e=t.map(l=>n.jsx(b,{type:l.type,text:!0,children:l.text})),r=t.map(l=>n.jsx(b,{type:l.type,text:!0,bg:!0,children:l.text})),i=t.map(l=>n.jsx(b,{type:l.type,text:!0,disabled:!0,children:l.text}));return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Basic text button"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:e}),n.jsx("p",{children:"Background color always on"}),n.jsx("div",{className:"flex justify-space-between mb-4 flex-wrap gap-4",children:r}),n.jsx("p",{children:"Disabled text button"}),n.jsx("div",{className:"flex justify-space-between flex-wrap gap-4",children:i})]})}function dd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Button 按钮"}),`
`,`
`,n.jsx(e.p,{children:"常用的操作按钮。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"type"}),"、",n.jsx(e.code,{children:"plain"}),"、",n.jsx(e.code,{children:"round"})," 和 ",n.jsx(e.code,{children:"circle"})," 来定义按钮的样式。"]}),`
`,n.jsx(D,{name:"ButtonBasic",children:n.jsx(Ky,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.code,{children:"disabled"})," 属性来定义按钮是否被禁用。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"disabled"})," 属性来控制按钮是否为禁用状态。 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"})," 类型的值。"]}),`
`,n.jsx(D,{name:"ButtonDisabled",children:n.jsx(Yy,{})}),`
`,n.jsx(e.h2,{children:"链接按钮"}),`
`,n.jsx(D,{name:"ButtonLink",children:n.jsx(Zy,{})}),`
`,n.jsx(e.h2,{children:"文字按钮"}),`
`,n.jsx(e.p,{children:"没有边框和背景色的按钮。"}),`
`,n.jsx(D,{name:"ButtonText",children:n.jsx(Jy,{})}),`
`,n.jsx(e.h2,{children:"Button API"}),`
`,n.jsx(e.h3,{children:"Button Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' 'success' 'warning' 'danger' 'info' 'text'(delete)"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"plain"}),n.jsx(e.td,{children:"是否为朴素按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"text"}),n.jsx(e.td,{children:"是否为文字按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"bg"}),n.jsx(e.td,{children:"是否显示文字按钮背景颜色"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:"是否为链接按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"是否为圆角按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"circle"}),n.jsx(e.td,{children:"是否为圆形按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"按钮是否为禁用状态"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]})]})]})]})}function qy(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(dd,{...t})}):dd(t)}function e2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(mn,{children:"Main"})]})})})}function t2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(mn,{children:"Main"}),n.jsx(hs,{children:"Footer"})]})})})}function n2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsx(mn,{children:"Main"})]})})})}function r2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsx(mn,{children:"Main"})]})]})})})}function i2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(mn,{children:"Main"}),n.jsx(hs,{children:"Footer"})]})]})]})})})}function l2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(mn,{children:"Main"})]})]})})})}function s2(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(qe,{children:[n.jsx(_r,{width:"200px",children:"Aside"}),n.jsxs(qe,{children:[n.jsx(In,{children:"Header"}),n.jsx(mn,{children:"Main"}),n.jsx(hs,{children:"Footer"})]})]})})})}function hd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(D,{name:"ContainerBasic",children:n.jsx(e2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(D,{name:"ContainerBasic1",children:n.jsx(t2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(D,{name:"ContainerBasic2",children:n.jsx(n2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(D,{name:"ContainerBasic3",children:n.jsx(r2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(D,{name:"ContainerBasic4",children:n.jsx(i2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(D,{name:"ContainerBasic5",children:n.jsx(l2,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(D,{name:"ContainerBasic6",children:n.jsx(s2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]})]})}function o2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(hd,{...t})}):hd(t)}function a2(){return n.jsxs(n.Fragment,{children:[n.jsx(cs,{style:{fontSize:"20px"}}),n.jsx(Ja,{style:{fontSize:"20px"}}),n.jsx(xi,{style:{fontSize:"20px"}}),n.jsx(qa,{style:{fontSize:"20px"}}),n.jsx(ec,{style:{fontSize:"20px"}}),n.jsx(tc,{style:{fontSize:"20px"}}),n.jsx(us,{style:{fontSize:"20px"}}),n.jsx(nc,{style:{fontSize:"20px"}}),n.jsx(rc,{style:{fontSize:"20px"}}),n.jsx(ic,{style:{fontSize:"20px"}}),n.jsx(Si,{style:{fontSize:"20px"}}),n.jsx(ds,{style:{fontSize:"20px"}}),n.jsx(Cr,{style:{fontSize:"20px"}}),n.jsx(lc,{style:{fontSize:"20px"}}),n.jsx(sc,{style:{fontSize:"20px"}}),n.jsx(oc,{style:{fontSize:"20px"}}),n.jsx(an,{style:{fontSize:"20px"}})]})}function fd(t){const e={h1:"h1",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Icon"}),`
`,`
`,n.jsx(D,{name:"IconBasic",children:n.jsx(a2,{})})]})}function c2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fd,{...t})}):fd(t)}function u2(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{children:n.jsx(M,{span:24,children:n.jsx("div",{className:"grid-content ep-bg-purple-dark"})})}),n.jsxs(le,{children:[n.jsx(M,{span:12,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:12,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(le,{children:[n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:8,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]})]}),n.jsxs(le,{children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:6,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]}),n.jsxs(le,{children:[n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple"})]}),n.jsxs(M,{span:4,children:[" ",n.jsx("div",{className:"grid-content ep-bg-purple-light"})]})]})]})}function d2(){return n.jsx(n.Fragment,{children:n.jsxs(le,{gutter:20,children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})})}function h2(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{gutter:20,children:[n.jsx(M,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{gutter:20,children:[n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:8,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{gutter:20,children:[n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:16,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:4,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function f2(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{gutter:20,children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{gutter:20,children:[n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsx(le,{gutter:20,children:n.jsx(M,{span:12,offset:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})})]})}function p2(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{className:"row-bg",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"center",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"end",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"space-between",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"space-around",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]}),n.jsxs(le,{className:"row-bg",justify:"space-evenly",children:[n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{span:6,children:n.jsx("div",{className:"grid-content ep-bg-purple"})})]})]})}function m2(){return n.jsx(n.Fragment,{children:n.jsxs(le,{gutter:10,children:[n.jsx(M,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})}),n.jsx(M,{xs:4,sm:6,md:8,lg:9,xl:11,children:n.jsx("div",{className:"grid-content ep-bg-purple"})}),n.jsx(M,{xs:8,sm:6,md:4,lg:3,xl:1,children:n.jsx("div",{className:"grid-content ep-bg-purple-light"})})]})})}function pd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Layout 布局"}),`
`,`
`,n.jsx(e.p,{children:"通过基础的 24 分栏，迅速简便地创建布局。"}),`
`,n.jsx(e.h2,{children:"基础布局"}),`
`,n.jsx(e.p,{children:"使用列创建基础网格布局。"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"Row"})," 和 ",n.jsx(e.code,{children:"Col"})," 组件，并通过 col 组件的 ",n.jsx(e.code,{children:"Span"})," 属性我们就可以自由地组合布局。"]}),`
`,n.jsx(D,{name:"LayoutBasic",children:n.jsx(u2,{})}),`
`,n.jsx(e.h2,{children:"分栏间隔"}),`
`,n.jsx(e.p,{children:"支持列间距。"}),`
`,n.jsx(e.p,{children:"行提供 gutter 属性来指定列之间的间距，其默认值为0。"}),`
`,n.jsx(D,{name:"LayoutGutter",children:n.jsx(d2,{})}),`
`,n.jsx(e.h2,{children:"混合布局"}),`
`,n.jsx(e.p,{children:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}),`
`,n.jsx(D,{name:"LayoutMix",children:n.jsx(h2,{})}),`
`,n.jsx(e.h2,{children:"列偏移"}),`
`,n.jsx(e.p,{children:"您可以指定列偏移量。"}),`
`,n.jsxs(e.p,{children:["通过制定 col 组件的 ",n.jsx(e.code,{children:"offset"})," 属性可以指定分栏偏移的栏数。"]}),`
`,n.jsx(D,{name:"LayoutOffset",children:n.jsx(f2,{})}),`
`,n.jsx(e.h2,{children:"对齐方式"}),`
`,n.jsx(e.p,{children:"默认使用 flex 布局来对分栏进行灵活的对齐。"}),`
`,n.jsxs(e.p,{children:["您可以通过 ",n.jsx(e.code,{children:"justify"})," 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。"]}),`
`,n.jsx(D,{name:"LayoutJustify",children:n.jsx(p2,{})}),`
`,n.jsx(e.h2,{children:"响应式布局"}),`
`,n.jsx(e.p,{children:"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"}),`
`,n.jsx(D,{name:"LayoutBootstrap",children:n.jsx(m2,{})}),`
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
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"span"}),n.jsx(e.td,{children:"栅格占据的列数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"24"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"offset"}),n.jsx(e.td,{children:"栅格左侧的间隔格数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xs"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"sm"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥768px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"md"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥992px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lg"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1200px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"xl"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"≥1920px"})," 响应式栅格数或者栅格属性对象"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function x2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(pd,{...t})}):pd(t)}function g2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Te,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(Te,{type:"primary",children:"primary"}),n.jsx(Te,{type:"success",children:"success"}),n.jsx(Te,{type:"warning",children:"warning"}),n.jsx(Te,{type:"danger",children:"danger"}),n.jsx(Te,{type:"info",children:"info"})]})})}function j2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Te,{disabled:!0,children:"default"}),n.jsx(Te,{type:"primary",disabled:!0,children:"primary"}),n.jsx(Te,{type:"success",disabled:!0,children:"success"}),n.jsx(Te,{type:"warning",disabled:!0,children:"warning"}),n.jsx(Te,{type:"danger",disabled:!0,children:"danger"}),n.jsx(Te,{type:"info",disabled:!0,children:"info"})]})})}function v2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Te,{underline:!1,children:"Without Underline"}),n.jsx(Te,{children:"With Underline"})]})})}function y2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(Te,{icon:n.jsx(cs,{}),children:"Edit"}),n.jsxs(Te,{children:["Check",n.jsx(us,{className:"el-icon--right"})]})]})})}function md(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(D,{name:"LinkBasic",children:n.jsx(g2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(D,{name:"LinkDisabled",children:n.jsx(j2,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(D,{name:"LinkUnderline",children:n.jsx(v2,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(D,{name:"LinkIcon",children:n.jsx(y2,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]})]})}function w2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(md,{...t})}):md(t)}function C2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",type:"primary",children:"Primary"}),n.jsx(Ye,{className:"mx-1",type:"success",children:"Success"}),n.jsx(Ye,{className:"mx-1",type:"info",children:"Info"}),n.jsx(Ye,{className:"mx-1",type:"warning",children:"Warning"}),n.jsx(Ye,{className:"mx-1",type:"danger",children:"Danger"})]})})}function _2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"mx-1",size:"large",children:"Large"}),n.jsx(Ye,{className:"mx-1",children:"Default"}),n.jsx(Ye,{className:"mx-1",size:"small",children:"Small"})]})})}function k2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-text",children:[n.jsx(Ye,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),n.jsx(le,{className:"w-150px mb-2",children:n.jsx(Ye,{truncated:!0,children:"Squeezed by parent element"})}),n.jsxs(Ye,{lineClamp:2,children:["The -webkit-line-clamp CSS property",n.jsx("br",{}),"allows limiting of the contents of",n.jsx("br",{}),"a block to the specified number of lines."]})]})})}function xd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Text"}),`
`,`
`,n.jsx(e.p,{children:"文本的常见操作"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,n.jsx(D,{name:"TextBasic",children:n.jsx(C2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"})]}),`
`,n.jsx(D,{name:"TextSize",children:n.jsx(_2,{})}),`
`,n.jsx(e.h2,{children:"省略"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",n.jsx(e.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,n.jsx(D,{name:"TextTruncated",children:n.jsx(k2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"大小"}),n.jsx(e.td,{children:"'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"truncated"}),n.jsx(e.td,{children:"显示省略号"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"lineClamp"}),n.jsx(e.td,{children:"最大行数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function N2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(xd,{...t})}):xd(t)}function b2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}})]})}function S2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,size:"large",activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeText:"Open",inactiveText:"Close"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,size:"small",activeText:"Open",inactiveText:"Close"})]})}function E2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,className:"mb-2",activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mb-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Pay by month",inactiveText:"Pay by year"}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,inlinePrompt:!0,activeText:"是",inactiveText:"否"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"Y",inactiveText:"N"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",width:60,inlinePrompt:!0,activeText:"超出省略",inactiveText:"超出省略"}),n.jsx(me,{defaultChecked:!0,className:"ml-2",inlinePrompt:!0,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},activeText:"完整展示多个内容",inactiveText:"多个内容"})]})}function T2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeIcon:n.jsx(xi,{}),inactiveIcon:n.jsx(an,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,className:"mt-2",style:{marginLeft:"24px"},inlinePrompt:!0,activeIcon:n.jsx(xi,{className:"is-icon"}),inactiveIcon:n.jsx(an,{className:"is-icon"})})]})}function R2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,disabled:!0}),n.jsx(me,{defaultChecked:!0,className:"ml-2"})]})}function B2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,loading:!0}),n.jsx(me,{loading:!0,className:"ml-2"})]})}function L2(){const[t,e]=m.useState(!1),[r,i]=m.useState(!1);function l(){return e(!0),new Promise(o=>{setTimeout(()=>(e(!1),console.log("Switch success"),o(!0)),1e3)})}function s(){return i(!0),new Promise((o,a)=>{setTimeout(()=>(i(!1),console.log("Switch failed"),a(new Error("Error"))),1e3)})}return n.jsxs(n.Fragment,{children:[n.jsx(me,{loading:t,beforeChange:l}),n.jsx(me,{className:"ml-2",loading:r,beforeChange:s})]})}function D2(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(us,{}),inactiveActionIcon:n.jsx(ic,{})}),n.jsx("br",{}),n.jsx(me,{defaultChecked:!0,activeActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-active-action",children:"T"})}),inactiveActionIcon:n.jsx(n.Fragment,{children:n.jsx("span",{className:"custom-inactive-action",children:"F"})})})]})}function gd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Switch 开关"}),`
`,`
`,n.jsx(e.p,{children:"表示两种相互对立的状态间的切换，多用于触发「开/关」。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。"}),`
`,n.jsx(D,{name:"SwitchBasic",children:n.jsx(b2,{})}),`
`,n.jsx(e.h2,{children:"尺寸"}),`
`,n.jsx(D,{name:"SwitchSize",children:n.jsx(S2,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制文本是否显示在点内。"]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.code,{children:"active-text"}),"属性与",n.jsx(e.code,{children:"inactive-text"}),"属性来设置开关的文字描述。"]}),`
`,n.jsx(D,{name:"SwitchText",children:n.jsx(E2,{})}),`
`,n.jsx(e.h2,{children:"显示自定义图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-icon"})," 和 ",n.jsx(e.code,{children:"active-icon"})," 属性来添加图标。 使用 ",n.jsx(e.code,{children:"inline-prompt"})," 属性来控制图标显示在点内。"]}),`
`,n.jsx(D,{name:"SwitchIcon",children:n.jsx(T2,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"disabled"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即可禁用。"]}),`
`,n.jsx(D,{name:"SwitchDisabled",children:n.jsx(R2,{})}),`
`,n.jsx(e.h2,{children:"加载状态"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"loading"}),"属性，接受一个",n.jsx(e.code,{children:"Boolean"}),"，设置",n.jsx(e.code,{children:"true"}),"即加载中状态。"]}),`
`,n.jsx(D,{name:"SwitchLoading",children:n.jsx(B2,{})}),`
`,n.jsx(e.h2,{children:"阻止切换"}),`
`,n.jsxs(e.p,{children:["设置",n.jsx(e.code,{children:"beforeChange"}),"属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"]}),`
`,n.jsx(D,{name:"SwitchBeforeChange",children:n.jsx(L2,{})}),`
`,n.jsx(e.h2,{children:"自定义动作图标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"inactive-action-icon"})," 和 ",n.jsx(e.code,{children:"active-action-icon"})," 属性来添加图标。"]}),`
`,n.jsx(D,{name:"SwitchActionIcon",children:n.jsx(D2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"defaultChecked"}),n.jsx(e.td,{children:"初始是否选中"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"switch 的大小"}),n.jsx(e.td,{children:"'large' / 'small'"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"switch 的宽度"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inlinePrompt"}),n.jsx(e.td,{children:"无论图标或文本是否显示在点内，只会呈现文本的第一个字符"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeIcon"}),n.jsx(e.td,{children:"switch 状态为 on 时所显示图标，设置此项会忽略 activeText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveIcon"}),n.jsx(e.td,{children:"switch 状态为 off 时所显示图标，设置此项会忽略 inactiveText"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeActionIcon"}),n.jsx(e.td,{children:"on状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveActionIcon"}),n.jsx(e.td,{children:"off状态下显示的图标组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"activeText"}),n.jsx(e.td,{children:"switch 打开时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"inactiveText"}),n.jsx(e.td,{children:"switch 的状态为 off 时的文字描述"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"beforeChange"}),n.jsx(e.td,{children:"switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"}),n.jsx(e.td,{children:"boolean / Function"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function P2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gd,{...t})}):gd(t)}function A2(){const t="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",e="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",r=["small","","large"],i=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{size:s,src:t})},o)),l=r.map((s,o)=>n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:s,src:e})},o));return n.jsx(n.Fragment,{children:n.jsxs(le,{className:"common-avatar",children:[n.jsxs(M,{span:12,children:[n.jsx("div",{className:"sub-title",children:"circle"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{size:50,src:t})}),i]})]}),n.jsxs(M,{span:12,children:[n.jsx("div",{className:"sub-title",children:"square"}),n.jsxs("div",{className:"demo-basic--circle",children:[n.jsx("div",{className:"block",children:n.jsx(kt,{shape:"square",size:50,src:e})}),l]})]})]})})}function M2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-avatar",children:[n.jsx("div",{children:n.jsx(kt,{icon:n.jsx(_p,{})})}),n.jsx("div",{children:n.jsx(kt,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})}),n.jsx("div",{children:n.jsx(kt,{children:" user "})})]})})}function F2(){function t(){console.log("error")}return n.jsx(n.Fragment,{children:n.jsx("div",{className:"demo-type",children:n.jsx(kt,{size:60,src:"https://empty",onError:t,children:n.jsx("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"})})})})}function I2(){const t=["fill","contain","cover","none","scale-down"],e="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",r=t.map((i,l)=>n.jsxs("div",{className:"block",children:[n.jsx("span",{className:"title",children:i}),n.jsx(kt,{shape:"square",size:100,fit:i,src:e})]},l));return n.jsx(n.Fragment,{children:n.jsx("div",{className:"avatar-fit",children:r})})}function jd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Avatar 头像"}),`
`,`
`,n.jsx(e.p,{children:"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"shape"})," 和 ",n.jsx(e.code,{children:"size"})," 属性来设置 Avatar 的形状和大小。"]}),`
`,n.jsx(D,{name:"AvatarBasic",children:n.jsx(A2,{})}),`
`,n.jsx(e.h2,{children:"展示类型"}),`
`,n.jsx(e.p,{children:"支持使用图片，图标或者文字作为 Avatar。"}),`
`,n.jsx(D,{name:"AvatarType",children:n.jsx(M2,{})}),`
`,n.jsx(e.h2,{children:"回退行为"}),`
`,n.jsx(e.p,{children:"图片加载失败时的回退行为。"}),`
`,n.jsx(D,{name:"AvatarError",children:n.jsx(F2,{})}),`
`,n.jsx(e.h2,{children:"适应容器"}),`
`,n.jsx(e.p,{children:"当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致"}),`
`,n.jsx(D,{name:"AvatarFit",children:n.jsx(I2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"设置 Avatar 的图标类型，具体参考 Icon 组件"}),n.jsx(e.td,{children:"Component"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Avatar 大小"}),n.jsx(e.td,{children:"number / 'large' / 'default' / 'small'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"shape"}),n.jsx(e.td,{children:"Avatar 形状"}),n.jsx(e.td,{children:"'circle' / 'square'"}),n.jsx(e.td,{children:"circle"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"Avatar 图片的源地址"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"fit"}),n.jsx(e.td,{children:"当展示类型为图片的时候，设置图片如何适应容器"}),n.jsx(e.td,{children:"'fill' / 'contain' / 'cover' / 'none' / 'scale-down'"}),n.jsx(e.td,{children:"cover"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"error"}),n.jsx(e.td,{children:"图片加载失败时触发"}),n.jsx(e.td,{children:"() => void"})]})})]})]})}function O2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(jd,{...t})}):jd(t)}function z2(){return n.jsx(n.Fragment,{children:n.jsxs(bp,{children:[n.jsxs(Mr,{title:"Consistency",name:"1",children:[n.jsx("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),n.jsx("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]}),n.jsxs(Mr,{title:"Feedback",name:"2",children:[n.jsx("div",{children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"}),n.jsx("div",{children:"Visual feedback: reflect current state by updating or rearranging elements of the page."})]}),n.jsxs(Mr,{title:"Efficiency",name:"3",children:[n.jsx("div",{children:"Simplify the process: keep operating process simple and intuitive;"}),n.jsx("div",{children:"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"}),n.jsx("div",{children:"Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."})]}),n.jsxs(Mr,{title:"Controllability",name:"4",children:[n.jsx("div",{children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"}),n.jsx("div",{children:"Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})]})})}function vd(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Collapse 折叠面板"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"可同时展开多个面板，面板之间不影响"}),`
`,n.jsx(D,{name:"CollapseBasic",children:n.jsx(z2,{})})]})}function $2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vd,{...t})}):vd(t)}function U2(){function t(e){return e===100?"Full":`${e}%`}return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(_t,{percentage:50}),n.jsx(_t,{percentage:100,format:t}),n.jsx(_t,{percentage:100,status:"success"}),n.jsx(_t,{percentage:100,status:"warning"}),n.jsx(_t,{percentage:50,status:"exception"})]})})}function H2(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-progress",children:[n.jsx(_t,{textInside:!0,strokeWidth:26,percentage:70}),n.jsx(_t,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),n.jsx(_t,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),n.jsx(_t,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function yd(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Progress 进度条"}),`
`,`
`,n.jsx(e.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,n.jsx(e.h2,{children:"直线进度条"}),`
`,n.jsxs(e.p,{children:["Progress 组件设置 ",n.jsx(e.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",n.jsx(e.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",n.jsx(e.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,n.jsx(D,{name:"ProgressBasic",children:n.jsx(U2,{})}),`
`,n.jsx(e.h2,{children:"进度条内显示百分比标识"}),`
`,n.jsx(e.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,n.jsxs(e.p,{children:["Progress 组件可通过 ",n.jsx(e.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",n.jsx(e.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,n.jsx(D,{name:"ProgressTextInside",children:n.jsx(H2,{})})]})}function W2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(yd,{...t})}):yd(t)}function V2(){return n.jsx(n.Fragment,{children:n.jsxs(le,{children:[n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"success",title:"Success Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"warning",title:"Warning Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"error",title:"Error Tip",subTitle:"Please follow the instructions",extra:n.jsx(b,{type:"primary",children:"Back"})})}),n.jsx(M,{sm:12,lg:6,children:n.jsx(qn,{icon:"info",title:"Info Tip",subTitle:n.jsx("p",{children:"Using slot as subtitle"}),extra:n.jsx(b,{type:"primary",children:"Back"})})})]})})}function X2(){return n.jsx(n.Fragment,{children:n.jsx(qn,{icon:n.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),title:"404",subTitle:"Sorry, request error",extra:n.jsx(b,{type:"primary",children:"Back"})})})}function wd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Result 结果"}),`
`,`
`,n.jsx(e.p,{children:"用于对用户的操作结果或者异常状态做反馈。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(D,{name:"ResultBasic",children:n.jsx(V2,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(D,{name:"ResultIcon",children:n.jsx(X2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"result 组件的图标类型"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error' / ReactNode"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"result 组件的标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"subTitle"}),n.jsx(e.td,{children:"result 组件的副标题"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"extra"}),n.jsx(e.td,{children:"内容额外区域的内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"ReactNode"})}),n.jsx(e.td,{children:"—"})]})]})]})]})}function Q2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(wd,{...t})}):wd(t)}function G2(){return n.jsxs(n.Fragment,{children:[n.jsx(xe,{children:"Tag 1"}),n.jsx(xe,{className:"ml-2",type:"success",children:"Tag 2"}),n.jsx(xe,{className:"ml-2",type:"info",children:"Tag 3"}),n.jsx(xe,{className:"ml-2",type:"warning",children:"Tag 4"}),n.jsx(xe,{className:"ml-2",type:"danger",children:"Tag 5"})]})}function K2(){const t=[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}].map(e=>n.jsx(xe,{className:"mx-1",closable:!0,type:e.type,children:e.name}));return n.jsx(n.Fragment,{children:t})}function Y2(){return n.jsxs(n.Fragment,{children:[n.jsxs(le,{children:[n.jsx(xe,{className:"mx-1",size:"large",children:"Large"}),n.jsx(xe,{className:"mx-1",children:"Default"}),n.jsx(xe,{className:"mx-1",size:"small",children:"Small"})]}),n.jsxs(le,{className:"mt-4",children:[n.jsx(xe,{className:"mx-1",size:"large",closable:!0,children:"Large"}),n.jsx(xe,{className:"mx-1",closable:!0,children:"Default"}),n.jsx(xe,{className:"mx-1",size:"small",closable:!0,children:"Small"})]})]})}function Z2(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"dark",children:a.label})),r=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"dark",closable:!0,children:a.label})),i=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"light",children:a.label})),l=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"light",closable:!0,children:a.label})),s=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"plain",children:a.label})),o=t.map(a=>n.jsx(xe,{type:a.type,className:"mx-1",effect:"plain",closable:!0,children:a.label}));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1 line-height-2",children:"Dark"}),e,r]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Light"}),i,l]}),n.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[n.jsx("span",{className:"tag-group__title m-1",children:"Plain"}),s,o]})]})}function J2(){const t=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],e=t.map(l=>n.jsx(xe,{type:l.type,className:"mx-1",effect:"dark",round:!0,children:l.label})),r=t.map(l=>n.jsx(xe,{type:l.type,className:"mx-1",effect:"light",round:!0,children:l.label})),i=t.map(l=>n.jsx(xe,{type:l.type,className:"mx-1",effect:"plain",round:!0,children:l.label}));return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:e}),n.jsx("div",{className:"flex flex-wrap gap-2",children:r}),n.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:i})]})}function Cd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tag 标签"}),`
`,`
`,n.jsx(e.p,{children:"用于标记和选择。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["由 ",n.jsx(e.code,{children:"type"})," 属性来选择 tag 的类型。 也可以通过 ",n.jsx(e.code,{children:"color"})," 属性来自定义背景色。"]}),`
`,n.jsx(D,{name:"TagBasic",children:n.jsx(G2,{})}),`
`,n.jsx(e.h2,{children:"可移除标签"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"closable"})," 属性可以定义一个标签是否可移除。 它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 ",n.jsx(e.code,{children:"disable-transitions"})," 属性，它接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，",n.jsx(e.code,{children:"true"})," 为关闭。 当 Tag 被移除时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(D,{name:"TagClosable",children:n.jsx(K2,{})}),`
`,n.jsx(e.h2,{children:"不同尺寸"}),`
`,n.jsx(e.p,{children:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 属性来设置额外尺寸, 可选值包括 ",n.jsx(e.code,{children:"large"}),", ",n.jsx(e.code,{children:"default"})," 或 ",n.jsx(e.code,{children:"small"}),"."]}),`
`,n.jsx(D,{name:"TagSize",children:n.jsx(Y2,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tag 组件提供了三个不同的主题：",n.jsx(e.code,{children:"dark"}),"、",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"plain"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 effect 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(D,{name:"TagEffect",children:n.jsx(Z2,{})}),`
`,n.jsx(e.h2,{children:"圆形标签"}),`
`,n.jsx(e.p,{children:"Tag 可以向按钮组件一样变为完全圆形。"}),`
`,n.jsx(D,{name:"TagRound",children:n.jsx(J2,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Tag 的类型"}),n.jsx(e.td,{children:"'success' | 'info' | 'warning' | 'danger' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Tag 的尺寸"}),n.jsx(e.td,{children:"'large' | 'default' | 'small' | ''"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tag 的主题"}),n.jsx(e.td,{children:"'dark' | 'light' | 'plain'"}),n.jsx(e.td,{children:"light"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"round"}),n.jsx(e.td,{children:"Tag 是否为圆形"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]})]})]})]})}function q2(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cd,{...t})}):Cd(t)}function ew(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success"}),n.jsx(oe,{title:"info alert",type:"info"}),n.jsx(oe,{title:"warning alert",type:"warning"}),n.jsx(oe,{title:"error alert",type:"error"})]})}function tw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",effect:"dark"}),n.jsx(oe,{title:"info alert",type:"info",effect:"dark"}),n.jsx(oe,{title:"warning alert",type:"warning",effect:"dark"}),n.jsx(oe,{title:"error alert",type:"error",effect:"dark"})]})}function nw(){function t(){alert("Hello World!")}return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"unclosable alert",type:"success",closable:!1}),n.jsx(oe,{title:"customized close-text",type:"info",closeText:"Gotcha"}),n.jsx(oe,{title:"alert with callback",type:"warning",close:t})]})}function rw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",showIcon:!0})]})}function iw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",center:!0,showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",center:!0,showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function lw(){return n.jsx(n.Fragment,{children:n.jsx(oe,{title:"with description",type:"success",description:"This is a description."})})}function sw(){return n.jsxs(n.Fragment,{children:[n.jsx(oe,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),n.jsx(oe,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function _d(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alert 提示"}),`
`,`
`,n.jsx(e.p,{children:"用于页面中展示重要的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供四种类型，由 ",n.jsx(e.code,{children:"type"})," 属性指定，默认值为 ",n.jsx(e.code,{children:"info"}),"。"]}),`
`,n.jsx(D,{name:"AlertBasic",children:n.jsx(ew,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Alert 组件提供了两个不同的主题：",n.jsx(e.code,{children:"light"})," 和 ",n.jsx(e.code,{children:"dark"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 属性来改变主题，默认为 ",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsx(D,{name:"AlertEffect",children:n.jsx(tw,{})}),`
`,n.jsx(e.h2,{children:"自定义关闭按钮"}),`
`,n.jsx(e.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,n.jsxs(e.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",n.jsx(e.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",n.jsx(e.code,{children:"Boolean"}),"，默认为 ",n.jsx(e.code,{children:"false"}),"。 你可以设置 ",n.jsx(e.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",n.jsx(e.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",n.jsx(e.code,{children:"close"})," 事件。"]}),`
`,n.jsx(D,{name:"AlertClose",children:n.jsx(nw,{})}),`
`,n.jsx(e.h2,{children:"使用图标"}),`
`,n.jsx(e.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,n.jsx(D,{name:"AlertShowIcon",children:n.jsx(rw,{})}),`
`,n.jsx(e.h2,{children:"文字居中"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,n.jsx(D,{name:"AlertCenter",children:n.jsx(iw,{})}),`
`,n.jsx(e.h2,{children:"文字描述"}),`
`,n.jsx(e.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,n.jsxs(e.p,{children:["除了必填的 ",n.jsx(e.code,{children:"title"})," 属性外，你可以设置 ",n.jsx(e.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,n.jsx(D,{name:"AlertDescription",children:n.jsx(lw,{})}),`
`,n.jsx(e.h2,{children:"带图标和描述"}),`
`,n.jsx(e.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,n.jsx(D,{name:"AlertIconDescription",children:n.jsx(sw,{})}),`
`,n.jsx(e.h2,{children:"Alert API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Alert 标题。"}),n.jsx(e.td,{children:"string"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"Alert 类型。"}),n.jsx(e.td,{children:"'success' / 'warning' / 'info' / 'error'"}),n.jsx(e.td,{children:"info"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"description"}),n.jsx(e.td,{children:"描述性文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closable"}),n.jsx(e.td,{children:"是否可以关闭"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"center"}),n.jsx(e.td,{children:"文字是否居中"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"closeText"}),n.jsx(e.td,{children:"自定义关闭按钮文本"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showIcon"}),n.jsx(e.td,{children:"是否显示类型图标"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"主题样式"}),n.jsx(e.td,{children:"'light' / 'dark'"}),n.jsx(e.td,{children:"light"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"名称"}),n.jsx(e.th,{children:"描述"}),n.jsx(e.th,{children:"类型"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"close"}),n.jsx(e.td,{children:"关闭 Alert 时触发的事件"}),n.jsx(e.td,{children:"(event: MouseEvent) => void"})]})})]})]})}function ow(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_d,{...t})}):_d(t)}function aw(){const[t,e]=m.useState(!1);function r(){e(!0)}function i(){e(!1)}function l(){e(!1)}function s(){e(!1)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button",onClick:l,children:n.jsx("span",{className:"",children:"Cancel"})}),n.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button el-button--primary",onClick:s,children:n.jsx("span",{className:"",children:" Confirm "})})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:r,children:"click to open the Dialog"}),n.jsx(yi,{open:t,title:"Tips",width:"30%",onClose:i,footer:n.jsx(o,{}),children:n.jsx("span",{children:"This is a message"})})]})}function cw(){const[t,e]=m.useState(!1),[r,i]=m.useState(!1);function l(){e(!0)}function s(){i(!0)}function o(){return n.jsx(n.Fragment,{children:n.jsxs("span",{className:"dialog-footer",children:[n.jsx(b,{onClick:()=>{i(!1)},children:"Cancel"}),n.jsx(b,{type:"primary",onClick:()=>{i(!1)},children:"Confirm"})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:l,children:"open a Table nested Dialog"}),n.jsx(yi,{open:t,title:"Shipping address",onClose:()=>{e(!1)},children:"Table组件"}),n.jsx(b,{text:!0,onClick:s,children:"open a Form nested Dialog"}),n.jsx(yi,{open:r,title:"Shipping address",footer:n.jsx(o,{}),onClose:()=>{i(!1)},children:"Form 表单"})]})}function uw(){const[t,e]=m.useState(!1);function r(){e(!1)}function i(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"dialog-header",children:[n.jsx("h4",{className:"el-dialog__title",children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(Cr,{}),"Close"]})]})})}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>e(!0),children:"Open Dialog with customized header"}),n.jsx(yi,{open:t,showClose:!1,header:n.jsx(i,{}),onClose:r,children:"This is dialog content."})]})}function kd(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Dialog 对话框"}),`
`,`
`,n.jsx(e.p,{children:"在保留当前页面状态的情况下，告知用户并承载相关操作。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Dialog 弹出一个对话框，适合需要定制性更大的场景。"}),`
`,n.jsx(D,{name:"DialogBasic",children:n.jsx(aw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsx(e.p,{children:"对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。"}),`
`,n.jsx(D,{name:"DialogContent",children:n.jsx(cw,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(D,{name:"DialogHeader",children:n.jsx(uw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Dialog"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Dialog 对话框 Dialog 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"对话框的宽度，默认值为 50%"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]})]})]})]})}function dw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(kd,{...t})}):kd(t)}function hw(){const[t,e]=m.useState(""),[r,i]=m.useState(!1),[l,s]=m.useState(!1);function o(){e("ltr"),i(!0)}function a(){e("rtl"),i(!0)}function c(){e("ttb"),i(!0)}function u(){e("btt"),i(!0)}function d(){e("ltr"),s(!0)}function f(){e("rtl"),s(!0)}function x(){e("ttb"),s(!0)}function g(){e("btt"),s(!0)}function v(){i(!1)}function y(){s(!1)}function k(){s(!1)}function p(){s(!1)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:o,children:"open left to right"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:a,children:"open right to left"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:c,children:"open top to bottom"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:u,children:"open bottom to top"})]}),n.jsxs("div",{style:{marginTop:"20px"},children:[n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:d,children:"open left to right footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:f,children:"open right to left footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:x,children:"open top to bottom footer"}),n.jsx(b,{type:"primary",style:{marginRight:"16px"},onClick:g,children:"open bottom to top footer"})]}),n.jsx(Dn,{open:r,title:"I am the title",direction:t,onClose:v,children:n.jsx("span",{children:"Hi, there!"})}),n.jsx(Dn,{open:l,direction:t,onClose:y,header:n.jsx("h4",{children:"set title by slot"}),footer:n.jsxs("div",{style:{flex:"auto"},children:[n.jsx(b,{onClick:k,children:"cancel"}),n.jsx(b,{type:"primary",onClick:p,children:"confirm"})]}),children:"radio"})]})}function fw(){const[t,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(b,{type:"primary",onClick:()=>e(!0),children:"open"}),n.jsx(Dn,{open:t,title:"I am the title",withHeader:!1,children:n.jsx("span",{children:"Hi there!"})})]})}function pw(){const[t,e]=m.useState(!1),[r,i]=m.useState(!1);function l(){e(!1)}function s(){i(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{text:!0,onClick:()=>{e(!0)},children:"Open Drawer with nested table"}),n.jsx(b,{text:!0,onClick:()=>{i(!0)},children:"Open Drawer with nested form"}),n.jsx(Dn,{open:t,title:"I have a nested table inside!",direction:"rtl",size:"50%",onClose:l,children:"table"}),n.jsx(Dn,{open:r,title:"I have a nested form inside!",direction:"ltr",className:"demo-drawer",onClose:s,children:n.jsxs("div",{className:"demo-drawer__content",children:["form",n.jsxs("div",{className:"demo-drawer__footer",children:[n.jsx(b,{onClick:s,children:"Cancel"}),n.jsx(b,{type:"primary",onClick:s,children:"Submit"})]})]})})]})}function mw(){const[t,e]=m.useState(!1);function r(){e(!1)}return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:()=>{e(!0)},children:"Open Drawer with customized header"}),n.jsx(Dn,{open:t,showClose:!1,header:n.jsxs(n.Fragment,{children:[n.jsx("h4",{children:"This is a custom header!"}),n.jsxs(b,{type:"danger",onClick:r,children:[n.jsx(Cr,{}),"Close"]})]}),children:"This is drawer content."})]})}function Nd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Drawer 抽屉"}),`
`,`
`,n.jsx(e.p,{children:"有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验."}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"呼出一个临时的侧边栏, 可以从多个方向呼出"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Drawer"})," 包含三部分: ",n.jsx(e.code,{children:"title"})," & ",n.jsx(e.code,{children:"body"})," & ",n.jsx(e.code,{children:"footer"}),", 你还可以通过 title 属性来设置标题, 默认情况下它是一个空字符串, 其中 ",n.jsx(e.code,{children:"body"})," 部分是 Drawer 组件的主区域, 它包含了用户定义的主要内容. footer和title用法一致, 用来显示页脚信息. 当 Drawer 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。"]}),`
`,n.jsx(D,{name:"DrawerBasic",children:n.jsx(hw,{})}),`
`,n.jsx(e.h2,{children:"不添加 Title"}),`
`,n.jsx(e.p,{children:"当你不需要标题的时候，你可以将它移除。"}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"with-header"})," 属性为 false 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 ",n.jsx(e.code,{children:"title"}),"。"]}),`
`,n.jsx(D,{name:"DrawerWithHeader",children:n.jsx(fw,{})}),`
`,n.jsx(e.h2,{children:"自定义内容"}),`
`,n.jsxs(e.p,{children:["像 ",n.jsx(e.code,{children:"Dialog"})," 组件一样，",n.jsx(e.code,{children:"Drawer"})," 也可以用来显示多种不同的交互。"]}),`
`,n.jsx(D,{name:"DrawerContent",children:n.jsx(pw,{})}),`
`,n.jsx(e.h2,{children:"自定义头部"}),`
`,n.jsx(e.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,n.jsx(D,{name:"DrawerHeader",children:n.jsx(mw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"open"}),n.jsx(e.td,{children:"是否显示 Drawer"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"Drawer 打开的方向"}),n.jsx(e.td,{children:"'rtl' | 'ltr' | 'ttb' | 'btt'"}),n.jsx(e.td,{children:"rtl"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"Drawer 的标题"}),n.jsx(e.td,{children:"string | ReactNode"}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onClose"}),n.jsx(e.td,{children:"点击遮罩层或右上角叉的回调"}),n.jsx(e.td,{children:"() => void"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"header"}),n.jsx(e.td,{children:"Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"footer"}),n.jsx(e.td,{children:"Drawer 页脚部分"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"withHeader"}),n.jsx(e.td,{children:"控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title 不生效"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"size"}),n.jsx(e.td,{children:"Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释"}),n.jsx(e.td,{children:"string | number"}),n.jsx(e.td,{children:"30%"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showClose"}),n.jsx(e.td,{children:"是否显示关闭按钮"}),n.jsx(e.td,{children:"boolean"}),n.jsx(e.td,{children:"true"})]})]})]})]})}function xw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nd,{...t})}):Nd(t)}function gw(){return n.jsx(n.Fragment,{children:n.jsx(ms,{title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function jw(){return n.jsx(n.Fragment,{children:n.jsx(ms,{width:220,confirmButtonText:"OK",cancelButtonText:"No, Thanks",icon:n.jsx(Si,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",children:n.jsx(b,{children:"Delete"})})})}function vw(){function t(){console.log("confirm!")}function e(){console.log("cancel!")}return n.jsx(n.Fragment,{children:n.jsx(ms,{confirmButtonText:"Yes",cancelButtonText:"No",icon:n.jsx(Si,{}),iconColor:"#626AEF",title:"Are you sure to delete this?",onConfirm:t,onCancel:e,children:n.jsx(b,{children:"Delete"})})})}function bd(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popconfirm 气泡确认框"}),`
`,`
`,n.jsx(e.p,{children:"点击某个元素弹出一个简单的气泡确认框"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在 Popconfirm 中，只有 title 属性可用，content 属性会被忽略。"}),`
`,n.jsx(D,{name:"PopconfirmBasic",children:n.jsx(gw,{})}),`
`,n.jsx(e.h2,{children:"自定义弹出框的内容"}),`
`,n.jsx(e.p,{children:"可以在 Popconfirm 中自定义内容。"}),`
`,n.jsx(D,{name:"PopconfirmIcon",children:n.jsx(jw,{})}),`
`,n.jsx(e.h2,{children:"多种让 Popconfirm 出现的方法"}),`
`,n.jsx(e.p,{children:"点击按钮触发事件"}),`
`,n.jsx(D,{name:"PopconfirmEvent",children:n.jsx(vw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"title"}),n.jsx(e.td,{children:"标题"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"confirmButtonText"}),n.jsx(e.td,{children:"确认按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"cancelButtonText"}),n.jsx(e.td,{children:"取消按钮文字"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"自定义图标"}),n.jsx(e.td,{children:"ReactNode"}),n.jsx(e.td,{children:"QuestionFilled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"iconColor"}),n.jsx(e.td,{children:"Icon 颜色"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"#f90"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideIcon"}),n.jsx(e.td,{children:"是否隐藏 Icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"弹层宽度，最小宽度 150px"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"number"})]}),n.jsx(e.td,{children:"150"})]})]})]}),`
`,n.jsx(e.h3,{children:"Events"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"事件名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onConfirm"}),n.jsx(e.td,{children:"点击确认按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"onCancel"}),n.jsx(e.td,{children:"点击取消按钮时触发"}),n.jsxs(e.td,{children:["(e: React.MouseEvent<",", MouseEvent>) => void"]})]})]})]})]})}function yw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bd,{...t})}):bd(t)}function ww(){return n.jsxs(n.Fragment,{children:[n.jsx(Ir,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Hover to activate"})}),n.jsx(Ir,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Click to activate"})}),n.jsx(Ir,{placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"Focus to activate"})}),n.jsx(Ir,{title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content",children:n.jsx(b,{className:"m-2",children:"contextmenu to activate"})})]})}function Sd(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Popover 气泡卡片"}),`
`,`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"trigger"})," 属性被用来决定 ",n.jsx(e.code,{children:"popover"})," 的触发方式，支持的触发方式： ",n.jsx(e.code,{children:"hover"}),"、",n.jsx(e.code,{children:"click"}),"、",n.jsx(e.code,{children:"focus"})," 或 ",n.jsx(e.code,{children:"contextmenu"}),"。 如果你想手动控制它，可以设置 ",n.jsx(e.code,{children:":visible"})," 属性。"]}),`
`,n.jsx(D,{name:"PopoverBasic",children:n.jsx(ww,{})})]})}function Cw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Sd,{...t})}):Sd(t)}function _w(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-tooltip",children:[n.jsxs("div",{className:"row center",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start",children:n.jsx(b,{children:"top-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top",children:n.jsx(b,{children:"top"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end",children:n.jsx(b,{children:"top-end"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start",children:n.jsx(b,{children:"left-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start",children:n.jsx(b,{children:"right-start"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left",children:n.jsx(b,{className:"mt-3 mb-3",children:"left"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right",children:n.jsx(b,{children:"right"})})]}),n.jsxs("div",{className:"row",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end",children:n.jsx(b,{children:"left-end"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end",children:n.jsx(b,{children:"right-end"})})]}),n.jsxs("div",{className:"row center",children:[n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start",children:n.jsx(b,{children:"bottom-start"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom",children:n.jsx(b,{children:"bottom"})}),n.jsx(_e,{className:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end",children:n.jsx(b,{children:"bottom-end"})})]})]})})}function kw(){return n.jsxs(n.Fragment,{children:[n.jsx(_e,{content:"Top center",placement:"top",children:n.jsx(b,{children:"Dark"})}),n.jsx(_e,{content:"Bottom center",placement:"bottom",effect:"light",children:n.jsx(b,{children:"Light"})}),n.jsx(_e,{content:"Bottom center",effect:"customized",children:n.jsx(b,{children:"Customized theme"})})]})}function Nw(){return n.jsx(n.Fragment,{children:n.jsx(_e,{placement:"top",content:n.jsxs(n.Fragment,{children:["multiple lines",n.jsx("br",{}),"second line"]}),children:n.jsx(b,{children:"Top center"})})})}function bw(){const[t,e]=m.useState(!0);function r(){e(!t)}return n.jsx(n.Fragment,{children:n.jsx(_e,{disabled:t,content:"click to close tooltip function",placement:"bottom",effect:"light",children:n.jsxs(b,{onClick:r,children:["click to ",t?"active":"close"," tooltip function"]})})})}function Ed(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Tooltip 文字提示"}),`
`,`
`,n.jsx(e.p,{children:"常用于展示鼠标 hover 时的提示信息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"content"})," 属性来决定 ",n.jsx(e.code,{children:"hover"})," 时的提示信息。 由 ",n.jsx(e.code,{children:"placement"})," 属性决定展示效果： ",n.jsx(e.code,{children:"placement"}),"属性值为：[方向]-[对齐位置]；四个方向：",n.jsx(e.code,{children:"top"}),"、",n.jsx(e.code,{children:"left"}),"、",n.jsx(e.code,{children:"right"}),"、",n.jsx(e.code,{children:"bottom"}),"；三种对齐位置：",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"end"}),'，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。']}),`
`,n.jsx(D,{name:"TooltipBasic",children:n.jsx(_w,{})}),`
`,n.jsx(e.h2,{children:"主题"}),`
`,n.jsxs(e.p,{children:["Tooltip 组件内置了两个主题：",n.jsx(e.code,{children:"dark"}),"和",n.jsx(e.code,{children:"light"}),"。"]}),`
`,n.jsxs(e.p,{children:["通过设置 ",n.jsx(e.code,{children:"effect"})," 来修改主题，默认值为 ",n.jsx(e.code,{children:"dark"}),"."]}),`
`,n.jsx(D,{name:"TooltipEffect",children:n.jsx(kw,{})}),`
`,n.jsx(e.h2,{children:"更多内容的文字提示"}),`
`,n.jsx(e.p,{children:"展示多行文本或者是设置文本内容的格式"}),`
`,n.jsx(D,{name:"TooltipContent",children:n.jsx(Nw,{})}),`
`,n.jsx(e.h2,{children:"高级扩展"}),`
`,n.jsx(e.p,{children:"除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："}),`
`,n.jsxs(e.p,{children:["如果需要关闭 ",n.jsx(e.code,{children:"tooltip"})," 功能，",n.jsx(e.code,{children:"disabled"})," 属性可以满足这个需求， 你只需要将其设置为 ",n.jsx(e.code,{children:"true"}),"。"]}),`
`,n.jsx(D,{name:"TooltipDisabled",children:n.jsx(bw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"effect"}),n.jsx(e.td,{children:"Tooltip 主题，内置了 dark / light 两种"}),n.jsx(e.td,{children:"'dark' / 'light'"}),n.jsx(e.td,{children:"dark"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"显示的内容"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"ReactNode"})]}),n.jsx(e.td,{children:"''"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"placement"}),n.jsx(e.td,{children:"Tooltip 组件出现的位置"}),n.jsx(e.td,{children:"'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'"}),n.jsx(e.td,{children:"bottom"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"showAfter"}),n.jsx(e.td,{children:"在触发后多久显示内容，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"0"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"hideAfter"}),n.jsx(e.td,{children:"延迟关闭，单位毫秒"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"200"})]})]})]})]})}function Sw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ed,{...t})}):Ed(t)}function Ew(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes."}),n.jsx(St,{}),n.jsx("span",{children:"There little thoughts are the rustle of leaves; they have their whisper of joy in my mind."})]})})}function Tw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"What you are you do not see, what you see is your shadow. "}),n.jsx(St,{contentPosition:"left",children:"Rabindranath Tagore"}),n.jsx("span",{children:"My wishes are fools, they shout across thy song, my Master. Let me but listen."}),n.jsx(St,{children:n.jsx(nc,{})}),n.jsx("span",{children:"I cannot choose the best. The best chooses me."}),n.jsx(St,{contentPosition:"right",children:"Rabindranath Tagore"})]})})}function Rw(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"What language is thine, O sea?"}),n.jsx(St,{borderStyle:"dashed"}),n.jsx("span",{children:"The language of eternal question."})]}),n.jsx(St,{borderStyle:"dotted"}),n.jsx("span",{children:"What language is thy answer, O sky?"}),n.jsx(St,{borderStyle:"double"}),n.jsx("span",{children:"The language of eternal silence."})]})}function Bw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsx("span",{children:"Rain"}),n.jsx(St,{direction:"vertical"}),n.jsx("span",{children:"Home"}),n.jsx(St,{direction:"vertical","border-style":"dashed"}),n.jsx("span",{children:"Grass"})]})})}function Td(t){const e={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Divider 分割线"}),`
`,`
`,n.jsx(e.p,{children:"区隔内容的分割线。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"对不同段落的文本进行分割。"}),`
`,n.jsx(D,{name:"DividerBasic",children:n.jsx(Ew,{})}),`
`,n.jsx(e.h2,{children:"设置文案"}),`
`,n.jsx(e.p,{children:"可以在分割线上自定义文本内容。"}),`
`,n.jsx(D,{name:"DividerContent",children:n.jsx(Tw,{})}),`
`,n.jsx(e.h2,{children:"虚线"}),`
`,n.jsx(e.p,{children:"您可以设置分隔符的样式。"}),`
`,n.jsx(D,{name:"DividerBorder",children:n.jsx(Rw,{})}),`
`,n.jsx(e.h2,{children:"垂直分隔线"}),`
`,n.jsx(D,{name:"DividerDirection",children:n.jsx(Bw,{})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"设置分割线方向"}),n.jsx(e.td,{children:"'horizontal' / 'vertical'"}),n.jsx(e.td,{children:"horizontal"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"border-style"}),n.jsx(e.td,{children:"设置分隔符样式"}),n.jsx(e.td,{children:"'none' / 'solid' / 'hidden' / 'dashed' / ...(css/border-style)"}),n.jsx(e.td,{children:"solid"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content-position"}),n.jsx(e.td,{children:"自定义分隔线内容的位置"}),n.jsx(e.td,{children:"'left' / 'right' / 'center'"}),n.jsx(e.td,{children:"center"})]})]})]})]})}function Lw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Td,{...t})}):Td(t)}function Dw({name:t}){let e;switch(t){case"button":e=n.jsx(qy,{});break;case"container":e=n.jsx(o2,{});break;case"icon":e=n.jsx(c2,{});break;case"layout":e=n.jsx(x2,{});break;case"link":e=n.jsx(w2,{});break;case"text":e=n.jsx(N2,{});break;case"switch":e=n.jsx(P2,{});break;case"avatar":e=n.jsx(O2,{});break;case"collapse":e=n.jsx($2,{});break;case"progress":e=n.jsx(W2,{});break;case"result":e=n.jsx(Q2,{});break;case"tag":e=n.jsx(q2,{});break;case"alert":e=n.jsx(ow,{});break;case"dialog":e=n.jsx(dw,{});break;case"drawer":e=n.jsx(xw,{});break;case"popconfirm":e=n.jsx(yw,{});break;case"popover":e=n.jsx(Cw,{});break;case"tooltip":e=n.jsx(Sw,{});break;case"divider":e=n.jsx(Lw,{});break}return e}function ve({name:t}){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(Dw,{name:t})})})}function Rd(t){const e={h1:"h1",...t.components};return n.jsx(e.h1,{children:"Border 边框"})}function Pw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Rd,{...t})}):Rd(t)}function Aw(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"markdown-body",children:n.jsx(Pw,{})})})}function Mw(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx("p",{className:"sidebar-group__title",children:"Basic 基础组件"}),n.jsx(q,{to:"button",children:"Button 按钮"}),n.jsx(q,{to:"border",children:"Border 边框"}),n.jsx(q,{to:"container",children:"Container 布局容器"}),n.jsx(q,{to:"icon",children:"Icon 图标"}),n.jsx(q,{to:"layout",children:"Layout 布局"}),n.jsx(q,{to:"link",children:"Link 链接"}),n.jsx(q,{to:"text",children:"Text 文本"}),n.jsx("p",{className:"sidebar-group__title",children:"Form 表单组件"}),n.jsx(q,{to:"switch",children:"Switch 开关"}),n.jsx("p",{className:"sidebar-group__title",children:"Data 数据展示"}),n.jsx(q,{to:"avatar",children:"Avatar 头像"}),n.jsx(q,{to:"collapse",children:"Collapse 折叠面板"}),n.jsx(q,{to:"progress",children:"Progress 进度条"}),n.jsx(q,{to:"result",children:"Result 结果"}),n.jsx(q,{to:"tag",children:"Tag 标签"}),n.jsx("p",{className:"sidebar-group__title",children:"Feedback 反馈组件"}),n.jsx(q,{to:"alert",children:"Alert 提示"}),n.jsx(q,{to:"dialog",children:"Dialog 对话框"}),n.jsx(q,{to:"drawer",children:"Drawer 抽屉"}),n.jsx(q,{to:"popconfirm",children:"Popconfirm 气泡确认框"}),n.jsx(q,{to:"popover",children:"Popover 气泡卡片"}),n.jsx(q,{to:"tooltip",children:"Tooltip 文字提示"}),n.jsx("p",{className:"sidebar-group__title",children:"Others 其他"}),n.jsx(q,{to:"divider",children:"Divider 分割线"})]})})}),n.jsx("main",{className:"page-content",children:n.jsxs(os,{children:[n.jsx(Y,{path:"button",element:n.jsx(ve,{name:"button"})}),n.jsx(Y,{path:"border",element:n.jsx(Aw,{})}),n.jsx(Y,{path:"container",element:n.jsx(ve,{name:"container"})}),n.jsx(Y,{path:"icon",element:n.jsx(ve,{name:"icon"})}),n.jsx(Y,{path:"layout",element:n.jsx(ve,{name:"layout"})}),n.jsx(Y,{path:"link",element:n.jsx(ve,{name:"link"})}),n.jsx(Y,{path:"text",element:n.jsx(ve,{name:"text"})}),n.jsx(Y,{path:"switch",element:n.jsx(ve,{name:"switch"})}),n.jsx(Y,{path:"avatar",element:n.jsx(ve,{name:"avatar"})}),n.jsx(Y,{path:"collapse",element:n.jsx(ve,{name:"collapse"})}),n.jsx(Y,{path:"progress",element:n.jsx(ve,{name:"progress"})}),n.jsx(Y,{path:"result",element:n.jsx(ve,{name:"result"})}),n.jsx(Y,{path:"tag",element:n.jsx(ve,{name:"tag"})}),n.jsx(Y,{path:"alert",element:n.jsx(ve,{name:"alert"})}),n.jsx(Y,{path:"dialog",element:n.jsx(ve,{name:"dialog"})}),n.jsx(Y,{path:"drawer",element:n.jsx(ve,{name:"drawer"})}),n.jsx(Y,{path:"popconfirm",element:n.jsx(ve,{name:"popconfirm"})}),n.jsx(Y,{path:"popover",element:n.jsx(ve,{name:"popover"})}),n.jsx(Y,{path:"tooltip",element:n.jsx(ve,{name:"tooltip"})}),n.jsx(Y,{path:"divider",element:n.jsx(ve,{name:"divider"})})]})})]})}const Fw="/pelement-react/assets/build-error-001-HBI716zv.jpg",Iw="/pelement-react/assets/build-error-002-fg75_WyZ.jpg";function Bd(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错：Could not find a declaration file for module 'pelement-react'."}),`
`,n.jsx(e.p,{children:"引入pelement-react，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:Fw,alt:"build-error-001"}),`
`,n.jsx(e.p,{children:"错误代码"}),`
`,n.jsx(e.p,{children:`example/pages/component/button/Button.tsx:2:24 - error TS7016: Could not find a declaration file for module 'pelement-react'. 'D:/work/pelement-react/node_modules/.pnpm/file+pelement-react-0.0.1-alpha.0.tgz/node_modules/pelement-react/dist/pelement-react.js' implicitly has an 'any' type.\r
There are types at 'D:/work/pelement-react/node_modules/pelement-react/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'pelement-react' library may need to update its package.json or typings.`}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"修改tsconfig.json文件，追加以下内容"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`"noImplicitAny": false,\r
"allowJs": true
`})}),`
`,n.jsx("img",{src:Iw,alt:"build-error-002"})]})}function Ow(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bd,{...t})}):Bd(t)}const zw="/pelement-react/assets/cannot-find-module-001-IO4IuqQz.jpg",$w="/pelement-react/assets/cannot-find-module-002-GS1tM54Y.jpg";function Ld(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错： Cannot find module '../../../packages/Button/index.zh-CN.mdx' or its corresponding type declarations."}),`
`,n.jsx(e.p,{children:"引入mdx，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:zw,alt:"cannot-find-module-001"}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"在src/vite-env.d.ts文件中添加"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`declare module '*.mdx' {\r
  const mdx: string;\r
  export default mdx;\r
}
`})}),`
`,n.jsx("img",{src:$w,alt:"cannot-find-module-002"})]})}function Uw(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ld,{...t})}):Ld(t)}function Hw(){return n.jsxs(n.Fragment,{children:[n.jsx("aside",{className:"sidebar",children:n.jsx("div",{className:"sidebar-groups",children:n.jsxs("section",{className:"sidebar-group",children:[n.jsx(q,{to:"build-error",children:"buile error"}),n.jsx(q,{to:"cannot-find-module",children:"cannot-find-module"})]})})}),n.jsx("main",{className:"page-content",children:n.jsx("div",{className:"blog-content",children:n.jsxs(os,{children:[n.jsx(Y,{path:"build-error",element:n.jsx(Ow,{})}),n.jsx(Y,{path:"cannot-find-module",element:n.jsx(Uw,{})})]})})})]})}function Ww(){return n.jsx(n.Fragment,{children:n.jsxs(os,{children:[n.jsx(Y,{path:"/",element:n.jsx(Gi,{to:"/component/button"})}),n.jsx(Y,{path:"home",element:n.jsx(b0,{})}),n.jsx(Y,{path:"guide",element:n.jsx(Gi,{to:"changelog"})}),n.jsx(Y,{path:"guide/*",element:n.jsx(R0,{})}),n.jsx(Y,{path:"component",element:n.jsx(Gi,{to:"button"})}),n.jsx(Y,{path:"component/*",element:n.jsx(Mw,{})}),n.jsx(Y,{path:"blog",element:n.jsx(Gi,{to:"build-error"})}),n.jsx(Y,{path:"blog/*",element:n.jsx(Hw,{})})]})})}function Vw(){return n.jsx(n.Fragment,{children:n.jsx("header",{className:"navbar",children:n.jsx("div",{className:"navbar-wrapper",children:n.jsxs("div",{className:"header-container",children:[n.jsx("div",{className:"logo-container",children:n.jsxs(q,{to:"/home",children:[n.jsx("img",{src:sp,alt:"pelement-react"}),"pelement-react"]})}),n.jsxs("div",{className:"content",children:[n.jsxs("nav",{className:"navbar-menu menu",children:[n.jsx(q,{className:"link-item link is-menu-link",to:"guide",children:"指南"}),n.jsx(q,{className:"link-item link is-menu-link",to:"component",children:"组件"}),n.jsx(q,{className:"link-item link is-menu-link",to:"blog",children:"博客"})]}),n.jsx("div",{className:"social-links",children:n.jsx("a",{href:"https://github.com/pelement-react/pelement-react",title:"GitHub",target:"_blank",rel:"noreferrer noopener",className:"social-link",children:n.jsx("i",{className:"el-icon",style:{fontSize:"24px"},children:n.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-6c8d2bba":"",children:n.jsx("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})})})})})]})]})})})})}function Xw(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"App",children:[n.jsx(Vw,{}),n.jsx(Ww,{})]})})}Ys.createRoot(document.getElementById("root")).render(n.jsx(Hd.StrictMode,{children:n.jsx(y0,{children:n.jsx(Xw,{})})}));
