(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const G={},tn=[],Xe=()=>{},oh=()=>!1,Ws=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_r=t=>t.startsWith("onUpdate:"),he=Object.assign,gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lh=Object.prototype.hasOwnProperty,H=(t,e)=>lh.call(t,e),x=Array.isArray,nn=t=>Jn(t)==="[object Map]",Jl=t=>Jn(t)==="[object Set]",yo=t=>Jn(t)==="[object Date]",P=t=>typeof t=="function",se=t=>typeof t=="string",tt=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Xl=t=>(ee(t)||P(t))&&P(t.then)&&P(t.catch),Zl=Object.prototype.toString,Jn=t=>Zl.call(t),ah=t=>Jn(t).slice(8,-1),ea=t=>Jn(t)==="[object Object]",mr=t=>se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nn=pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),js=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ch=/-(\w)/g,Le=js(t=>t.replace(ch,(e,n)=>n?n.toUpperCase():"")),uh=/\B([A-Z])/g,Gt=js(t=>t.replace(uh,"-$1").toLowerCase()),Vs=js(t=>t.charAt(0).toUpperCase()+t.slice(1)),hi=js(t=>t?`on${Vs(t)}`:""),Bt=(t,e)=>!Object.is(t,e),gs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ta=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},hh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vo;const qs=()=>vo||(vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Un(t){if(x(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=se(s)?_h(s):Un(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(se(t)||ee(t))return t}const fh=/;(?![^(]*\))/g,dh=/:([^]+)/,ph=/\/\*[^]*?\*\//g;function _h(t){const e={};return t.replace(ph,"").split(fh).forEach(n=>{if(n){const s=n.split(dh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $n(t){let e="";if(se(t))e=t;else if(x(t))for(let n=0;n<t.length;n++){const s=$n(t[n]);s&&(e+=s+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mh=pr(gh);function na(t){return!!t||t===""}function yh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Cs(t[s],e[s]);return n}function Cs(t,e){if(t===e)return!0;let n=yo(t),s=yo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=tt(t),s=tt(e),n||s)return t===e;if(n=x(t),s=x(e),n||s)return n&&s?yh(t,e):!1;if(n=ee(t),s=ee(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Cs(t[o],e[o]))return!1}}return String(t)===String(e)}const sa=t=>!!(t&&t.__v_isRef===!0),mt=t=>se(t)?t:t==null?"":x(t)||ee(t)&&(t.toString===Zl||!P(t.toString))?sa(t)?mt(t.value):JSON.stringify(t,ia,2):String(t),ia=(t,e)=>sa(e)?ia(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[fi(s,r)+" =>"]=i,n),{})}:Jl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fi(n))}:tt(e)?fi(e):ee(e)&&!x(e)&&!ea(e)?String(e):e,fi=(t,e="")=>{var n;return tt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class vh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function bh(){return Oe}let Q;const di=new WeakSet;class ra{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,di.has(this)&&(di.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||la(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bo(this),aa(this);const e=Q,n=We;Q=this,We=!0;try{return this.fn()}finally{ca(this),Q=e,We=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)br(e);this.deps=this.depsTail=void 0,bo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?di.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bi(this)&&this.run()}get dirty(){return Bi(this)}}let oa=0,On,xn;function la(t,e=!1){if(t.flags|=8,e){t.next=xn,xn=t;return}t.next=On,On=t}function yr(){oa++}function vr(){if(--oa>0)return;if(xn){let e=xn;for(xn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;On;){let e=On;for(On=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function aa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ca(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),br(s),Ch(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Bi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ua(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ua(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wn))return;t.globalVersion=Wn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Bi(t)){t.flags&=-3;return}const n=Q,s=We;Q=t,We=!0;try{aa(t);const i=t.fn(t._value);(e.version===0||Bt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Q=n,We=s,ca(t),t.flags&=-3}}function br(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)br(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ch(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let We=!0;const ha=[];function St(){ha.push(We),We=!1}function Tt(){const t=ha.pop();We=t===void 0?!0:t}function bo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Q;Q=void 0;try{e()}finally{Q=n}}}let Wn=0;class wh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Q||!We||Q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Q)n=this.activeLink=new wh(Q,this),Q.deps?(n.prevDep=Q.depsTail,Q.depsTail.nextDep=n,Q.depsTail=n):Q.deps=Q.depsTail=n,da(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Q.depsTail,n.nextDep=void 0,Q.depsTail.nextDep=n,Q.depsTail=n,Q.deps===n&&(Q.deps=s)}return n}trigger(e){this.version++,Wn++,this.notify(e)}notify(e){yr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vr()}}}function da(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)da(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hi=new WeakMap,Ht=Symbol(""),Ui=Symbol(""),jn=Symbol("");function de(t,e,n){if(We&&Q){let s=Hi.get(t);s||Hi.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new fa),i.map=s,i.key=n),i.track()}}function rt(t,e,n,s,i,r){const o=Hi.get(t);if(!o){Wn++;return}const l=a=>{a&&a.trigger()};if(yr(),e==="clear")o.forEach(l);else{const a=x(t),c=a&&mr(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,p)=>{(p==="length"||p===jn||!tt(p)&&p>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(jn)),e){case"add":a?c&&l(o.get("length")):(l(o.get(Ht)),nn(t)&&l(o.get(Ui)));break;case"delete":a||(l(o.get(Ht)),nn(t)&&l(o.get(Ui)));break;case"set":nn(t)&&l(o.get(Ht));break}}vr()}function Jt(t){const e=j(t);return e===t?e:(de(e,"iterate",jn),je(t)?e:e.map(Ce))}function Gs(t){return de(t=j(t),"iterate",jn),t}const Eh={__proto__:null,[Symbol.iterator](){return pi(this,Symbol.iterator,Ce)},concat(...t){return Jt(this).concat(...t.map(e=>x(e)?Jt(e):e))},entries(){return pi(this,"entries",t=>(t[1]=Ce(t[1]),t))},every(t,e){return st(this,"every",t,e,void 0,arguments)},filter(t,e){return st(this,"filter",t,e,n=>n.map(Ce),arguments)},find(t,e){return st(this,"find",t,e,Ce,arguments)},findIndex(t,e){return st(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return st(this,"findLast",t,e,Ce,arguments)},findLastIndex(t,e){return st(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return st(this,"forEach",t,e,void 0,arguments)},includes(...t){return _i(this,"includes",t)},indexOf(...t){return _i(this,"indexOf",t)},join(t){return Jt(this).join(t)},lastIndexOf(...t){return _i(this,"lastIndexOf",t)},map(t,e){return st(this,"map",t,e,void 0,arguments)},pop(){return wn(this,"pop")},push(...t){return wn(this,"push",t)},reduce(t,...e){return Co(this,"reduce",t,e)},reduceRight(t,...e){return Co(this,"reduceRight",t,e)},shift(){return wn(this,"shift")},some(t,e){return st(this,"some",t,e,void 0,arguments)},splice(...t){return wn(this,"splice",t)},toReversed(){return Jt(this).toReversed()},toSorted(t){return Jt(this).toSorted(t)},toSpliced(...t){return Jt(this).toSpliced(...t)},unshift(...t){return wn(this,"unshift",t)},values(){return pi(this,"values",Ce)}};function pi(t,e,n){const s=Gs(t),i=s[e]();return s!==t&&!je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Ih=Array.prototype;function st(t,e,n,s,i,r){const o=Gs(t),l=o!==t&&!je(t),a=o[e];if(a!==Ih[e]){const h=a.apply(t,r);return l?Ce(h):h}let c=n;o!==t&&(l?c=function(h,p){return n.call(this,Ce(h),p,t)}:n.length>2&&(c=function(h,p){return n.call(this,h,p,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Co(t,e,n,s){const i=Gs(t);let r=n;return i!==t&&(je(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Ce(l),a,t)}),i[e](r,...s)}function _i(t,e,n){const s=j(t);de(s,"iterate",jn);const i=s[e](...n);return(i===-1||i===!1)&&Ir(n[0])?(n[0]=j(n[0]),s[e](...n)):i}function wn(t,e,n=[]){St(),yr();const s=j(t)[e].apply(t,n);return vr(),Tt(),s}const Sh=pr("__proto__,__v_isRef,__isVue"),pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tt));function Th(t){tt(t)||(t=String(t));const e=j(this);return de(e,"has",t),e.hasOwnProperty(t)}class _a{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Lh:va:r?ya:ma).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=x(e);if(!i){let a;if(o&&(a=Eh[n]))return a;if(n==="hasOwnProperty")return Th}const l=Reflect.get(e,n,be(e)?e:s);return(tt(n)?pa.has(n):Sh(n))||(i||de(e,"get",n),r)?l:be(l)?o&&mr(n)?l:l.value:ee(l)?i?ba(l):wr(l):l}}class ga extends _a{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=cn(r);if(!je(s)&&!cn(s)&&(r=j(r),s=j(s)),!x(e)&&be(r)&&!be(s))return a?!1:(r.value=s,!0)}const o=x(e)&&mr(n)?Number(n)<e.length:H(e,n),l=Reflect.set(e,n,s,be(e)?e:i);return e===j(i)&&(o?Bt(s,r)&&rt(e,"set",n,s):rt(e,"add",n,s)),l}deleteProperty(e,n){const s=H(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&rt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!tt(n)||!pa.has(n))&&de(e,"has",n),s}ownKeys(e){return de(e,"iterate",x(e)?"length":Ht),Reflect.ownKeys(e)}}class Ah extends _a{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rh=new ga,Nh=new Ah,Oh=new ga(!0);const $i=t=>t,us=t=>Reflect.getPrototypeOf(t);function xh(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=nn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?$i:e?Wi:Ce;return!e&&de(r,"iterate",a?Ui:Ht),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:l?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function hs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dh(t,e){const n={get(i){const r=this.__v_raw,o=j(r),l=j(i);t||(Bt(i,l)&&de(o,"get",i),de(o,"get",l));const{has:a}=us(o),c=e?$i:t?Wi:Ce;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&de(j(i),"iterate",Ht),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=j(r),l=j(i);return t||(Bt(i,l)&&de(o,"has",i),de(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=j(l),c=e?$i:t?Wi:Ce;return!t&&de(a,"iterate",Ht),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return he(n,t?{add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear")}:{add(i){!e&&!je(i)&&!cn(i)&&(i=j(i));const r=j(this);return us(r).has.call(r,i)||(r.add(i),rt(r,"add",i,i)),this},set(i,r){!e&&!je(r)&&!cn(r)&&(r=j(r));const o=j(this),{has:l,get:a}=us(o);let c=l.call(o,i);c||(i=j(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Bt(r,u)&&rt(o,"set",i,r):rt(o,"add",i,r),this},delete(i){const r=j(this),{has:o,get:l}=us(r);let a=o.call(r,i);a||(i=j(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&rt(r,"delete",i,void 0),c},clear(){const i=j(this),r=i.size!==0,o=i.clear();return r&&rt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=xh(i,t,e)}),n}function Cr(t,e){const n=Dh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const Ph={get:Cr(!1,!1)},Mh={get:Cr(!1,!0)},kh={get:Cr(!0,!1)};const ma=new WeakMap,ya=new WeakMap,va=new WeakMap,Lh=new WeakMap;function Fh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bh(t){return t.__v_skip||!Object.isExtensible(t)?0:Fh(ah(t))}function wr(t){return cn(t)?t:Er(t,!1,Rh,Ph,ma)}function Hh(t){return Er(t,!1,Oh,Mh,ya)}function ba(t){return Er(t,!0,Nh,kh,va)}function Er(t,e,n,s,i){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Bh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function sn(t){return cn(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function Ir(t){return t?!!t.__v_raw:!1}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Uh(t){return!H(t,"__v_skip")&&Object.isExtensible(t)&&ta(t,"__v_skip",!0),t}const Ce=t=>ee(t)?wr(t):t,Wi=t=>ee(t)?ba(t):t;function be(t){return t?t.__v_isRef===!0:!1}function $h(t){return be(t)?t.value:t}const Wh={get:(t,e,n)=>e==="__v_raw"?t:$h(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return be(i)&&!be(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ca(t){return sn(t)?t:new Proxy(t,Wh)}class jh{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Q!==this)return la(this,!0),!0}get value(){const e=this.dep.track();return ua(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vh(t,e,n=!1){let s,i;return P(t)?s=t:(s=t.get,i=t.set),new jh(s,i,n)}const fs={},ws=new WeakMap;let Dt;function qh(t,e=!1,n=Dt){if(n){let s=ws.get(n);s||ws.set(n,s=[]),s.push(t)}}function Gh(t,e,n=G){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=O=>i?O:je(O)||i===!1||i===0?ot(O,1):ot(O);let u,h,p,g,I=!1,R=!1;if(be(t)?(h=()=>t.value,I=je(t)):sn(t)?(h=()=>c(t),I=!0):x(t)?(R=!0,I=t.some(O=>sn(O)||je(O)),h=()=>t.map(O=>{if(be(O))return O.value;if(sn(O))return c(O);if(P(O))return a?a(O,2):O()})):P(t)?e?h=a?()=>a(t,2):t:h=()=>{if(p){St();try{p()}finally{Tt()}}const O=Dt;Dt=u;try{return a?a(t,3,[g]):t(g)}finally{Dt=O}}:h=Xe,e&&i){const O=h,ie=i===!0?1/0:i;h=()=>ot(O(),ie)}const $=bh(),B=()=>{u.stop(),$&&$.active&&gr($.effects,u)};if(r&&e){const O=e;e=(...ie)=>{O(...ie),B()}}let q=R?new Array(t.length).fill(fs):fs;const K=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const ie=u.run();if(i||I||(R?ie.some((_t,qe)=>Bt(_t,q[qe])):Bt(ie,q))){p&&p();const _t=Dt;Dt=u;try{const qe=[ie,q===fs?void 0:R&&q[0]===fs?[]:q,g];a?a(e,3,qe):e(...qe),q=ie}finally{Dt=_t}}}else u.run()};return l&&l(K),u=new ra(h),u.scheduler=o?()=>o(K,!1):K,g=O=>qh(O,!1,u),p=u.onStop=()=>{const O=ws.get(u);if(O){if(a)a(O,4);else for(const ie of O)ie();ws.delete(u)}},e?s?K(!0):q=u.run():o?o(K.bind(null,!0),!0):u.run(),B.pause=u.pause.bind(u),B.resume=u.resume.bind(u),B.stop=B,B}function ot(t,e=1/0,n){if(e<=0||!ee(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,be(t))ot(t.value,e,n);else if(x(t))for(let s=0;s<t.length;s++)ot(t[s],e,n);else if(Jl(t)||nn(t))t.forEach(s=>{ot(s,e,n)});else if(ea(t)){for(const s in t)ot(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ot(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xn(t,e,n,s){try{return s?t(...s):t()}catch(i){Ks(i,e,n)}}function nt(t,e,n,s){if(P(t)){const i=Xn(t,e,n,s);return i&&Xl(i)&&i.catch(r=>{Ks(r,e,n)}),i}if(x(t)){const i=[];for(let r=0;r<t.length;r++)i.push(nt(t[r],e,n,s));return i}}function Ks(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||G;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){St(),Xn(r,null,10,[t,a,c]),Tt();return}}Kh(t,n,i,s,o)}function Kh(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const ve=[];let Ye=-1;const rn=[];let yt=null,Zt=0;const wa=Promise.resolve();let Es=null;function zh(t){const e=Es||wa;return t?e.then(this?t.bind(this):t):e}function Yh(t){let e=Ye+1,n=ve.length;for(;e<n;){const s=e+n>>>1,i=ve[s],r=Vn(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Sr(t){if(!(t.flags&1)){const e=Vn(t),n=ve[ve.length-1];!n||!(t.flags&2)&&e>=Vn(n)?ve.push(t):ve.splice(Yh(e),0,t),t.flags|=1,Ea()}}function Ea(){Es||(Es=wa.then(Sa))}function Qh(t){x(t)?rn.push(...t):yt&&t.id===-1?yt.splice(Zt+1,0,t):t.flags&1||(rn.push(t),t.flags|=1),Ea()}function wo(t,e,n=Ye+1){for(;n<ve.length;n++){const s=ve[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ve.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ia(t){if(rn.length){const e=[...new Set(rn)].sort((n,s)=>Vn(n)-Vn(s));if(rn.length=0,yt){yt.push(...e);return}for(yt=e,Zt=0;Zt<yt.length;Zt++){const n=yt[Zt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,Zt=0}}const Vn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sa(t){try{for(Ye=0;Ye<ve.length;Ye++){const e=ve[Ye];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ye<ve.length;Ye++){const e=ve[Ye];e&&(e.flags&=-2)}Ye=-1,ve.length=0,Ia(),Es=null,(ve.length||rn.length)&&Sa()}}let De=null,Ta=null;function Is(t){const e=De;return De=t,Ta=t&&t.type.__scopeId||null,e}function Jh(t,e=De,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Do(-1);const r=Is(e);let o;try{o=t(...i)}finally{Is(r),s._d&&Do(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Eo(t,e){if(De===null)return t;const n=Js(De),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=G]=e[i];r&&(P(r)&&(r={mounted:r,updated:r}),r.deep&&ot(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Ot(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(St(),nt(a,n,8,[t.el,l,t,e]),Tt())}}const Xh=Symbol("_vte"),Zh=t=>t.__isTeleport;function Tr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Tr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Aa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ss(t,e,n,s,i=!1){if(x(t)){t.forEach((I,R)=>Ss(I,e&&(x(e)?e[R]:e),n,s,i));return}if(Dn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ss(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Js(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===G?l.refs={}:l.refs,h=l.setupState,p=j(h),g=h===G?()=>!1:I=>H(p,I);if(c!=null&&c!==a&&(se(c)?(u[c]=null,g(c)&&(h[c]=null)):be(c)&&(c.value=null)),P(a))Xn(a,l,12,[o,u]);else{const I=se(a),R=be(a);if(I||R){const $=()=>{if(t.f){const B=I?g(a)?h[a]:u[a]:a.value;i?x(B)&&gr(B,r):x(B)?B.includes(r)||B.push(r):I?(u[a]=[r],g(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else I?(u[a]=o,g(a)&&(h[a]=o)):R&&(a.value=o,t.k&&(u[t.k]=o))};o?($.id=-1,Re($,n)):$()}}}qs().requestIdleCallback;qs().cancelIdleCallback;const Dn=t=>!!t.type.__asyncLoader,Ra=t=>t.type.__isKeepAlive;function ef(t,e){Na(t,"a",e)}function tf(t,e){Na(t,"da",e)}function Na(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(zs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ra(i.parent.vnode)&&nf(s,e,n,i),i=i.parent}}function nf(t,e,n,s){const i=zs(e,t,s,!0);Oa(()=>{gr(s[e],i)},n)}function zs(t,e,n=_e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{St();const l=Zn(n),a=nt(e,n,t,o);return l(),Tt(),a});return s?i.unshift(r):i.push(r),r}}const dt=t=>(e,n=_e)=>{(!Gn||t==="sp")&&zs(t,(...s)=>e(...s),n)},sf=dt("bm"),rf=dt("m"),of=dt("bu"),lf=dt("u"),af=dt("bum"),Oa=dt("um"),cf=dt("sp"),uf=dt("rtg"),hf=dt("rtc");function ff(t,e=_e){zs("ec",t,e)}const df="components";function pf(t,e){return gf(df,t,!0,e)||t}const _f=Symbol.for("v-ndc");function gf(t,e,n=!0,s=!1){const i=De||_e;if(i){const r=i.type;{const l=rd(r,!1);if(l&&(l===e||l===Le(e)||l===Vs(Le(e))))return r}const o=Io(i[t]||r[t],e)||Io(i.appContext[t],e);return!o&&s?r:o}}function Io(t,e){return t&&(t[e]||t[Le(e)]||t[Vs(Le(e))])}function ds(t,e,n,s){let i;const r=n,o=x(t);if(o||se(t)){const l=o&&sn(t);let a=!1;l&&(a=!je(t),t=Gs(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?Ce(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(ee(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const ji=t=>t?Xa(t)?Js(t):ji(t.parent):null,Pn=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ji(t.parent),$root:t=>ji(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ar(t),$forceUpdate:t=>t.f||(t.f=()=>{Sr(t.update)}),$nextTick:t=>t.n||(t.n=zh.bind(t.proxy)),$watch:t=>Bf.bind(t)}),gi=(t,e)=>t!==G&&!t.__isScriptSetup&&H(t,e),mf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(gi(s,e))return o[e]=1,s[e];if(i!==G&&H(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==G&&H(n,e))return o[e]=4,n[e];Vi&&(o[e]=0)}}const u=Pn[e];let h,p;if(u)return e==="$attrs"&&de(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==G&&H(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,H(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return gi(i,e)?(i[e]=n,!0):s!==G&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==G&&H(t,o)||gi(e,o)||(l=r[0])&&H(l,o)||H(s,o)||H(Pn,o)||H(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function So(t){return x(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vi=!0;function yf(t){const e=Ar(t),n=t.proxy,s=t.ctx;Vi=!1,e.beforeCreate&&To(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:I,activated:R,deactivated:$,beforeDestroy:B,beforeUnmount:q,destroyed:K,unmounted:O,render:ie,renderTracked:_t,renderTriggered:qe,errorCaptured:gt,serverPrefetch:rs,expose:At,inheritAttrs:yn,components:os,directives:ls,filters:ci}=e;if(c&&vf(c,s,null),o)for(const ne in o){const z=o[ne];P(z)&&(s[ne]=z.bind(n))}if(i){const ne=i.call(n,n);ee(ne)&&(t.data=wr(ne))}if(Vi=!0,r)for(const ne in r){const z=r[ne],Rt=P(z)?z.bind(n,n):P(z.get)?z.get.bind(n,n):Xe,as=!P(z)&&P(z.set)?z.set.bind(n):Xe,Nt=ld({get:Rt,set:as});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Ge=>Nt.value=Ge})}if(l)for(const ne in l)xa(l[ne],s,n,ne);if(a){const ne=P(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(z=>{Sf(z,ne[z])})}u&&To(u,t,"c");function me(ne,z){x(z)?z.forEach(Rt=>ne(Rt.bind(n))):z&&ne(z.bind(n))}if(me(sf,h),me(rf,p),me(of,g),me(lf,I),me(ef,R),me(tf,$),me(ff,gt),me(hf,_t),me(uf,qe),me(af,q),me(Oa,O),me(cf,rs),x(At))if(At.length){const ne=t.exposed||(t.exposed={});At.forEach(z=>{Object.defineProperty(ne,z,{get:()=>n[z],set:Rt=>n[z]=Rt})})}else t.exposed||(t.exposed={});ie&&t.render===Xe&&(t.render=ie),yn!=null&&(t.inheritAttrs=yn),os&&(t.components=os),ls&&(t.directives=ls),rs&&Aa(t)}function vf(t,e,n=Xe){x(t)&&(t=qi(t));for(const s in t){const i=t[s];let r;ee(i)?"default"in i?r=ms(i.from||s,i.default,!0):r=ms(i.from||s):r=ms(i),be(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function To(t,e,n){nt(x(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,s){let i=s.includes(".")?qa(n,s):()=>n[s];if(se(t)){const r=e[t];P(r)&&yi(i,r)}else if(P(t))yi(i,t.bind(n));else if(ee(t))if(x(t))t.forEach(r=>xa(r,e,n,s));else{const r=P(t.handler)?t.handler.bind(n):e[t.handler];P(r)&&yi(i,r,t)}}function Ar(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ts(a,c,o,!0)),Ts(a,e,o)),ee(e)&&r.set(e,a),a}function Ts(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ts(t,r,n,!0),i&&i.forEach(o=>Ts(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=bf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const bf={data:Ao,props:Ro,emits:Ro,methods:Rn,computed:Rn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Rn,directives:Rn,watch:wf,provide:Ao,inject:Cf};function Ao(t,e){return e?t?function(){return he(P(t)?t.call(this,this):t,P(e)?e.call(this,this):e)}:e:t}function Cf(t,e){return Rn(qi(t),qi(e))}function qi(t){if(x(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Rn(t,e){return t?he(Object.create(null),t,e):e}function Ro(t,e){return t?x(t)&&x(e)?[...new Set([...t,...e])]:he(Object.create(null),So(t),So(e??{})):e}function wf(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const s in e)n[s]=ye(t[s],e[s]);return n}function Da(){return{app:null,config:{isNativeTag:oh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function If(t,e){return function(s,i=null){P(s)||(s=he({},s)),i!=null&&!ee(i)&&(i=null);const r=Da(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Ef++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ad,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&P(u.install)?(o.add(u),u.install(c,...h)):P(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,p){if(!a){const g=c._ceVNode||Ze(s,i);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,u):t(g,u,p),a=!0,c._container=u,u.__vue_app__=c,Js(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(nt(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=on;on=c;try{return u()}finally{on=h}}};return c}}let on=null;function Sf(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function ms(t,e,n=!1){const s=_e||De;if(s||on){const i=on?on._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&P(e)?e.call(s&&s.proxy):e}}const Pa={},Ma=()=>Object.create(Pa),ka=t=>Object.getPrototypeOf(t)===Pa;function Tf(t,e,n,s=!1){const i={},r=Ma();t.propsDefaults=Object.create(null),La(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Hh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Af(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Ys(t.emitsOptions,p))continue;const g=e[p];if(a)if(H(r,p))g!==r[p]&&(r[p]=g,c=!0);else{const I=Le(p);i[I]=Gi(a,l,I,g,t,!1)}else g!==r[p]&&(r[p]=g,c=!0)}}}else{La(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!H(e,h)&&((u=Gt(h))===h||!H(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Gi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!H(e,h))&&(delete r[h],c=!0)}c&&rt(t.attrs,"set","")}function La(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Nn(a))continue;const c=e[a];let u;i&&H(i,u=Le(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Ys(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||G;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Gi(i,a,h,c[h],t,!H(c,h))}}return o}function Gi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&P(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Zn(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Gt(n))&&(s=!0))}return s}const Rf=new WeakMap;function Fa(t,e,n=!1){const s=n?Rf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!P(t)){const u=h=>{a=!0;const[p,g]=Fa(h,e,!0);he(o,p),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ee(t)&&s.set(t,tn),tn;if(x(r))for(let u=0;u<r.length;u++){const h=Le(r[u]);No(h)&&(o[h]=G)}else if(r)for(const u in r){const h=Le(u);if(No(h)){const p=r[u],g=o[h]=x(p)||P(p)?{type:p}:he({},p),I=g.type;let R=!1,$=!0;if(x(I))for(let B=0;B<I.length;++B){const q=I[B],K=P(q)&&q.name;if(K==="Boolean"){R=!0;break}else K==="String"&&($=!1)}else R=P(I)&&I.name==="Boolean";g[0]=R,g[1]=$,(R||H(g,"default"))&&l.push(h)}}const c=[o,l];return ee(t)&&s.set(t,c),c}function No(t){return t[0]!=="$"&&!Nn(t)}const Ba=t=>t[0]==="_"||t==="$stable",Rr=t=>x(t)?t.map(Qe):[Qe(t)],Nf=(t,e,n)=>{if(e._n)return e;const s=Jh((...i)=>Rr(e(...i)),n);return s._c=!1,s},Ha=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ba(i))continue;const r=t[i];if(P(r))e[i]=Nf(i,r,s);else if(r!=null){const o=Rr(r);e[i]=()=>o}}},Ua=(t,e)=>{const n=Rr(e);t.slots.default=()=>n},$a=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Of=(t,e,n)=>{const s=t.slots=Ma();if(t.vnode.shapeFlag&32){const i=e._;i?($a(s,e,n),n&&ta(s,"_",i,!0)):Ha(e,s)}else e&&Ua(t,e)},xf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=G;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:$a(i,e,n):(r=!e.$stable,Ha(e,i)),o=e}else e&&(Ua(t,e),o={default:1});if(r)for(const l in i)!Ba(l)&&o[l]==null&&delete i[l]},Re=qf;function Df(t){return Pf(t)}function Pf(t,e){const n=qs();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=Xe,insertStaticContent:I}=t,R=(f,d,_,v=null,m=null,y=null,S=void 0,w=null,C=!!d.dynamicChildren)=>{if(f===d)return;f&&!En(f,d)&&(v=cs(f),Ge(f,m,y,!0),f=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:T}=d;switch(b){case Qs:$(f,d,_,v);break;case Ut:B(f,d,_,v);break;case bi:f==null&&q(d,_,v,S);break;case xe:os(f,d,_,v,m,y,S,w,C);break;default:T&1?ie(f,d,_,v,m,y,S,w,C):T&6?ls(f,d,_,v,m,y,S,w,C):(T&64||T&128)&&b.process(f,d,_,v,m,y,S,w,C,bn)}N!=null&&m&&Ss(N,f&&f.ref,y,d||f,!d)},$=(f,d,_,v)=>{if(f==null)s(d.el=l(d.children),_,v);else{const m=d.el=f.el;d.children!==f.children&&c(m,d.children)}},B=(f,d,_,v)=>{f==null?s(d.el=a(d.children||""),_,v):d.el=f.el},q=(f,d,_,v)=>{[f.el,f.anchor]=I(f.children,d,_,v,f.el,f.anchor)},K=({el:f,anchor:d},_,v)=>{let m;for(;f&&f!==d;)m=p(f),s(f,_,v),f=m;s(d,_,v)},O=({el:f,anchor:d})=>{let _;for(;f&&f!==d;)_=p(f),i(f),f=_;i(d)},ie=(f,d,_,v,m,y,S,w,C)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?_t(d,_,v,m,y,S,w,C):rs(f,d,m,y,S,w,C)},_t=(f,d,_,v,m,y,S,w)=>{let C,b;const{props:N,shapeFlag:T,transition:A,dirs:D}=f;if(C=f.el=o(f.type,y,N&&N.is,N),T&8?u(C,f.children):T&16&&gt(f.children,C,null,v,m,mi(f,y),S,w),D&&Ot(f,null,v,"created"),qe(C,f,f.scopeId,S,v),N){for(const Y in N)Y!=="value"&&!Nn(Y)&&r(C,Y,null,N[Y],y,v);"value"in N&&r(C,"value",null,N.value,y),(b=N.onVnodeBeforeMount)&&ze(b,v,f)}D&&Ot(f,null,v,"beforeMount");const L=Mf(m,A);L&&A.beforeEnter(C),s(C,d,_),((b=N&&N.onVnodeMounted)||L||D)&&Re(()=>{b&&ze(b,v,f),L&&A.enter(C),D&&Ot(f,null,v,"mounted")},m)},qe=(f,d,_,v,m)=>{if(_&&g(f,_),v)for(let y=0;y<v.length;y++)g(f,v[y]);if(m){let y=m.subTree;if(d===y||Ka(y.type)&&(y.ssContent===d||y.ssFallback===d)){const S=m.vnode;qe(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},gt=(f,d,_,v,m,y,S,w,C=0)=>{for(let b=C;b<f.length;b++){const N=f[b]=w?vt(f[b]):Qe(f[b]);R(null,N,d,_,v,m,y,S,w)}},rs=(f,d,_,v,m,y,S)=>{const w=d.el=f.el;let{patchFlag:C,dynamicChildren:b,dirs:N}=d;C|=f.patchFlag&16;const T=f.props||G,A=d.props||G;let D;if(_&&xt(_,!1),(D=A.onVnodeBeforeUpdate)&&ze(D,_,d,f),N&&Ot(d,f,_,"beforeUpdate"),_&&xt(_,!0),(T.innerHTML&&A.innerHTML==null||T.textContent&&A.textContent==null)&&u(w,""),b?At(f.dynamicChildren,b,w,_,v,mi(d,m),y):S||z(f,d,w,null,_,v,mi(d,m),y,!1),C>0){if(C&16)yn(w,T,A,_,m);else if(C&2&&T.class!==A.class&&r(w,"class",null,A.class,m),C&4&&r(w,"style",T.style,A.style,m),C&8){const L=d.dynamicProps;for(let Y=0;Y<L.length;Y++){const W=L[Y],Se=T[W],fe=A[W];(fe!==Se||W==="value")&&r(w,W,Se,fe,m,_)}}C&1&&f.children!==d.children&&u(w,d.children)}else!S&&b==null&&yn(w,T,A,_,m);((D=A.onVnodeUpdated)||N)&&Re(()=>{D&&ze(D,_,d,f),N&&Ot(d,f,_,"updated")},v)},At=(f,d,_,v,m,y,S)=>{for(let w=0;w<d.length;w++){const C=f[w],b=d[w],N=C.el&&(C.type===xe||!En(C,b)||C.shapeFlag&70)?h(C.el):_;R(C,b,N,null,v,m,y,S,!0)}},yn=(f,d,_,v,m)=>{if(d!==_){if(d!==G)for(const y in d)!Nn(y)&&!(y in _)&&r(f,y,d[y],null,m,v);for(const y in _){if(Nn(y))continue;const S=_[y],w=d[y];S!==w&&y!=="value"&&r(f,y,w,S,m,v)}"value"in _&&r(f,"value",d.value,_.value,m)}},os=(f,d,_,v,m,y,S,w,C)=>{const b=d.el=f?f.el:l(""),N=d.anchor=f?f.anchor:l("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:D}=d;D&&(w=w?w.concat(D):D),f==null?(s(b,_,v),s(N,_,v),gt(d.children||[],_,N,m,y,S,w,C)):T>0&&T&64&&A&&f.dynamicChildren?(At(f.dynamicChildren,A,_,m,y,S,w),(d.key!=null||m&&d===m.subTree)&&Wa(f,d,!0)):z(f,d,_,N,m,y,S,w,C)},ls=(f,d,_,v,m,y,S,w,C)=>{d.slotScopeIds=w,f==null?d.shapeFlag&512?m.ctx.activate(d,_,v,S,C):ci(d,_,v,m,y,S,C):uo(f,d,C)},ci=(f,d,_,v,m,y,S)=>{const w=f.component=ed(f,v,m);if(Ra(f)&&(w.ctx.renderer=bn),td(w,!1,S),w.asyncDep){if(m&&m.registerDep(w,me,S),!f.el){const C=w.subTree=Ze(Ut);B(null,C,d,_)}}else me(w,f,d,_,m,y,S)},uo=(f,d,_)=>{const v=d.component=f.component;if(jf(f,d,_))if(v.asyncDep&&!v.asyncResolved){ne(v,d,_);return}else v.next=d,v.update();else d.el=f.el,v.vnode=d},me=(f,d,_,v,m,y,S)=>{const w=()=>{if(f.isMounted){let{next:T,bu:A,u:D,parent:L,vnode:Y}=f;{const Te=ja(f);if(Te){T&&(T.el=Y.el,ne(f,T,S)),Te.asyncDep.then(()=>{f.isUnmounted||w()});return}}let W=T,Se;xt(f,!1),T?(T.el=Y.el,ne(f,T,S)):T=Y,A&&gs(A),(Se=T.props&&T.props.onVnodeBeforeUpdate)&&ze(Se,L,T,Y),xt(f,!0);const fe=vi(f),Be=f.subTree;f.subTree=fe,R(Be,fe,h(Be.el),cs(Be),f,m,y),T.el=fe.el,W===null&&Vf(f,fe.el),D&&Re(D,m),(Se=T.props&&T.props.onVnodeUpdated)&&Re(()=>ze(Se,L,T,Y),m)}else{let T;const{el:A,props:D}=d,{bm:L,m:Y,parent:W,root:Se,type:fe}=f,Be=Dn(d);if(xt(f,!1),L&&gs(L),!Be&&(T=D&&D.onVnodeBeforeMount)&&ze(T,W,d),xt(f,!0),A&&_o){const Te=()=>{f.subTree=vi(f),_o(A,f.subTree,f,m,null)};Be&&fe.__asyncHydrate?fe.__asyncHydrate(A,f,Te):Te()}else{Se.ce&&Se.ce._injectChildStyle(fe);const Te=f.subTree=vi(f);R(null,Te,_,v,f,m,y),d.el=Te.el}if(Y&&Re(Y,m),!Be&&(T=D&&D.onVnodeMounted)){const Te=d;Re(()=>ze(T,W,Te),m)}(d.shapeFlag&256||W&&Dn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&Re(f.a,m),f.isMounted=!0,d=_=v=null}};f.scope.on();const C=f.effect=new ra(w);f.scope.off();const b=f.update=C.run.bind(C),N=f.job=C.runIfDirty.bind(C);N.i=f,N.id=f.uid,C.scheduler=()=>Sr(N),xt(f,!0),b()},ne=(f,d,_)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Af(f,d.props,v,_),xf(f,d.children,_),St(),wo(f),Tt()},z=(f,d,_,v,m,y,S,w,C=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,T=d.children,{patchFlag:A,shapeFlag:D}=d;if(A>0){if(A&128){as(b,T,_,v,m,y,S,w,C);return}else if(A&256){Rt(b,T,_,v,m,y,S,w,C);return}}D&8?(N&16&&vn(b,m,y),T!==b&&u(_,T)):N&16?D&16?as(b,T,_,v,m,y,S,w,C):vn(b,m,y,!0):(N&8&&u(_,""),D&16&&gt(T,_,v,m,y,S,w,C))},Rt=(f,d,_,v,m,y,S,w,C)=>{f=f||tn,d=d||tn;const b=f.length,N=d.length,T=Math.min(b,N);let A;for(A=0;A<T;A++){const D=d[A]=C?vt(d[A]):Qe(d[A]);R(f[A],D,_,null,m,y,S,w,C)}b>N?vn(f,m,y,!0,!1,T):gt(d,_,v,m,y,S,w,C,T)},as=(f,d,_,v,m,y,S,w,C)=>{let b=0;const N=d.length;let T=f.length-1,A=N-1;for(;b<=T&&b<=A;){const D=f[b],L=d[b]=C?vt(d[b]):Qe(d[b]);if(En(D,L))R(D,L,_,null,m,y,S,w,C);else break;b++}for(;b<=T&&b<=A;){const D=f[T],L=d[A]=C?vt(d[A]):Qe(d[A]);if(En(D,L))R(D,L,_,null,m,y,S,w,C);else break;T--,A--}if(b>T){if(b<=A){const D=A+1,L=D<N?d[D].el:v;for(;b<=A;)R(null,d[b]=C?vt(d[b]):Qe(d[b]),_,L,m,y,S,w,C),b++}}else if(b>A)for(;b<=T;)Ge(f[b],m,y,!0),b++;else{const D=b,L=b,Y=new Map;for(b=L;b<=A;b++){const Ae=d[b]=C?vt(d[b]):Qe(d[b]);Ae.key!=null&&Y.set(Ae.key,b)}let W,Se=0;const fe=A-L+1;let Be=!1,Te=0;const Cn=new Array(fe);for(b=0;b<fe;b++)Cn[b]=0;for(b=D;b<=T;b++){const Ae=f[b];if(Se>=fe){Ge(Ae,m,y,!0);continue}let Ke;if(Ae.key!=null)Ke=Y.get(Ae.key);else for(W=L;W<=A;W++)if(Cn[W-L]===0&&En(Ae,d[W])){Ke=W;break}Ke===void 0?Ge(Ae,m,y,!0):(Cn[Ke-L]=b+1,Ke>=Te?Te=Ke:Be=!0,R(Ae,d[Ke],_,null,m,y,S,w,C),Se++)}const go=Be?kf(Cn):tn;for(W=go.length-1,b=fe-1;b>=0;b--){const Ae=L+b,Ke=d[Ae],mo=Ae+1<N?d[Ae+1].el:v;Cn[b]===0?R(null,Ke,_,mo,m,y,S,w,C):Be&&(W<0||b!==go[W]?Nt(Ke,_,mo,2):W--)}}},Nt=(f,d,_,v,m=null)=>{const{el:y,type:S,transition:w,children:C,shapeFlag:b}=f;if(b&6){Nt(f.component.subTree,d,_,v);return}if(b&128){f.suspense.move(d,_,v);return}if(b&64){S.move(f,d,_,bn);return}if(S===xe){s(y,d,_);for(let T=0;T<C.length;T++)Nt(C[T],d,_,v);s(f.anchor,d,_);return}if(S===bi){K(f,d,_);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(y),s(y,d,_),Re(()=>w.enter(y),m);else{const{leave:T,delayLeave:A,afterLeave:D}=w,L=()=>s(y,d,_),Y=()=>{T(y,()=>{L(),D&&D()})};A?A(y,L,Y):Y()}else s(y,d,_)},Ge=(f,d,_,v=!1,m=!1)=>{const{type:y,props:S,ref:w,children:C,dynamicChildren:b,shapeFlag:N,patchFlag:T,dirs:A,cacheIndex:D}=f;if(T===-2&&(m=!1),w!=null&&Ss(w,null,_,f,!0),D!=null&&(d.renderCache[D]=void 0),N&256){d.ctx.deactivate(f);return}const L=N&1&&A,Y=!Dn(f);let W;if(Y&&(W=S&&S.onVnodeBeforeUnmount)&&ze(W,d,f),N&6)rh(f.component,_,v);else{if(N&128){f.suspense.unmount(_,v);return}L&&Ot(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,_,bn,v):b&&!b.hasOnce&&(y!==xe||T>0&&T&64)?vn(b,d,_,!1,!0):(y===xe&&T&384||!m&&N&16)&&vn(C,d,_),v&&ho(f)}(Y&&(W=S&&S.onVnodeUnmounted)||L)&&Re(()=>{W&&ze(W,d,f),L&&Ot(f,null,d,"unmounted")},_)},ho=f=>{const{type:d,el:_,anchor:v,transition:m}=f;if(d===xe){ih(_,v);return}if(d===bi){O(f);return}const y=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:w}=m,C=()=>S(_,y);w?w(f.el,y,C):C()}else y()},ih=(f,d)=>{let _;for(;f!==d;)_=p(f),i(f),f=_;i(d)},rh=(f,d,_)=>{const{bum:v,scope:m,job:y,subTree:S,um:w,m:C,a:b}=f;Oo(C),Oo(b),v&&gs(v),m.stop(),y&&(y.flags|=8,Ge(S,f,d,_)),w&&Re(w,d),Re(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},vn=(f,d,_,v=!1,m=!1,y=0)=>{for(let S=y;S<f.length;S++)Ge(f[S],d,_,v,m)},cs=f=>{if(f.shapeFlag&6)return cs(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=p(f.anchor||f.el),_=d&&d[Xh];return _?p(_):d};let ui=!1;const fo=(f,d,_)=>{f==null?d._vnode&&Ge(d._vnode,null,null,!0):R(d._vnode||null,f,d,null,null,null,_),d._vnode=f,ui||(ui=!0,wo(),Ia(),ui=!1)},bn={p:R,um:Ge,m:Nt,r:ho,mt:ci,mc:gt,pc:z,pbc:At,n:cs,o:t};let po,_o;return{render:fo,hydrate:po,createApp:If(fo,po)}}function mi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wa(t,e,n=!1){const s=t.children,i=e.children;if(x(s)&&x(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=vt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Wa(o,l)),l.type===Qs&&(l.el=o.el)}}function kf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ja(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ja(e)}function Oo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Lf=Symbol.for("v-scx"),Ff=()=>ms(Lf);function yi(t,e,n){return Va(t,e,n)}function Va(t,e,n=G){const{immediate:s,deep:i,flush:r,once:o}=n,l=he({},n),a=e&&s||!e&&r!=="post";let c;if(Gn){if(r==="sync"){const g=Ff();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=Xe,g.resume=Xe,g.pause=Xe,g}}const u=_e;l.call=(g,I,R)=>nt(g,u,I,R);let h=!1;r==="post"?l.scheduler=g=>{Re(g,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(g,I)=>{I?g():Sr(g)}),l.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=Gh(t,e,l);return Gn&&(c?c.push(p):a&&p()),p}function Bf(t,e,n){const s=this.proxy,i=se(t)?t.includes(".")?qa(s,t):()=>s[t]:t.bind(s,s);let r;P(e)?r=e:(r=e.handler,n=e);const o=Zn(this),l=Va(i,r.bind(s),n);return o(),l}function qa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Hf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Le(e)}Modifiers`]||t[`${Gt(e)}Modifiers`];function Uf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||G;let i=n;const r=e.startsWith("update:"),o=r&&Hf(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>se(u)?u.trim():u)),o.number&&(i=n.map(hh)));let l,a=s[l=hi(e)]||s[l=hi(Le(e))];!a&&r&&(a=s[l=hi(Gt(e))]),a&&nt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,nt(c,t,6,i)}}function Ga(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!P(t)){const a=c=>{const u=Ga(c,e,!0);u&&(l=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ee(t)&&s.set(t,null),null):(x(r)?r.forEach(a=>o[a]=null):he(o,r),ee(t)&&s.set(t,o),o)}function Ys(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Gt(e))||H(t,e))}function vi(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:p,setupState:g,ctx:I,inheritAttrs:R}=t,$=Is(t);let B,q;try{if(n.shapeFlag&4){const O=i||s,ie=O;B=Qe(c.call(ie,O,u,h,g,p,I)),q=l}else{const O=e;B=Qe(O.length>1?O(h,{attrs:l,slots:o,emit:a}):O(h,null)),q=e.props?l:$f(l)}}catch(O){Mn.length=0,Ks(O,t,1),B=Ze(Ut)}let K=B;if(q&&R!==!1){const O=Object.keys(q),{shapeFlag:ie}=K;O.length&&ie&7&&(r&&O.some(_r)&&(q=Wf(q,r)),K=un(K,q,!1,!0))}return n.dirs&&(K=un(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&Tr(K,n.transition),B=K,Is($),B}const $f=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},Wf=(t,e)=>{const n={};for(const s in t)(!_r(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?xo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==s[p]&&!Ys(c,p))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?xo(s,o,c):!0:!!o;return!1}function xo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ys(n,r))return!0}return!1}function Vf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ka=t=>t.__isSuspense;function qf(t,e){e&&e.pendingBranch?x(t)?e.effects.push(...t):e.effects.push(t):Qh(t)}const xe=Symbol.for("v-fgt"),Qs=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),bi=Symbol.for("v-stc"),Mn=[];let Pe=null;function Ne(t=!1){Mn.push(Pe=t?null:[])}function Gf(){Mn.pop(),Pe=Mn[Mn.length-1]||null}let qn=1;function Do(t,e=!1){qn+=t,t<0&&Pe&&e&&(Pe.hasOnce=!0)}function za(t){return t.dynamicChildren=qn>0?Pe||tn:null,Gf(),qn>0&&Pe&&Pe.push(t),t}function He(t,e,n,s,i,r){return za(oe(t,e,n,s,i,r,!0))}function Ya(t,e,n,s,i){return za(Ze(t,e,n,s,i,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function En(t,e){return t.type===e.type&&t.key===e.key}const Ja=({key:t})=>t??null,ys=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?se(t)||be(t)||P(t)?{i:De,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,s=0,i=null,r=t===xe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ja(e),ref:e&&ys(e),scopeId:Ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return l?(Nr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=se(n)?8:16),qn>0&&!o&&Pe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Pe.push(a),a}const Ze=Kf;function Kf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_f)&&(t=Ut),Qa(t)){const l=un(t,e,!0);return n&&Nr(l,n),qn>0&&!r&&Pe&&(l.shapeFlag&6?Pe[Pe.indexOf(t)]=l:Pe.push(l)),l.patchFlag=-2,l}if(od(t)&&(t=t.__vccOpts),e){e=zf(e);let{class:l,style:a}=e;l&&!se(l)&&(e.class=$n(l)),ee(a)&&(Ir(a)&&!x(a)&&(a=he({},a)),e.style=Un(a))}const o=se(t)?1:Ka(t)?128:Zh(t)?64:ee(t)?4:P(t)?2:0;return oe(t,e,n,s,i,o,r,!0)}function zf(t){return t?Ir(t)||ka(t)?he({},t):t:null}function un(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Jf(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ja(c),ref:e&&e.ref?n&&r?x(r)?r.concat(ys(e)):[r,ys(e)]:ys(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Tr(u,a.clone(u)),u}function Yf(t=" ",e=0){return Ze(Qs,null,t,e)}function Qf(t="",e=!1){return e?(Ne(),Ya(Ut,null,t)):Ze(Ut,null,t)}function Qe(t){return t==null||typeof t=="boolean"?Ze(Ut):x(t)?Ze(xe,null,t.slice()):Qa(t)?vt(t):Ze(Qs,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function Nr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(x(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Nr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ka(e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else P(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[Yf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=$n([e.class,s.class]));else if(i==="style")e.style=Un([e.style,s.style]);else if(Ws(i)){const r=e[i],o=s[i];o&&r!==o&&!(x(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ze(t,e,n,s=null){nt(t,e,7,[n,s])}const Xf=Da();let Zf=0;function ed(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Xf,r={uid:Zf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fa(s,i),emitsOptions:Ga(s,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Uf.bind(null,r),t.ce&&t.ce(r),r}let _e=null,As,Ki;{const t=qs(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};As=e("__VUE_INSTANCE_SETTERS__",n=>_e=n),Ki=e("__VUE_SSR_SETTERS__",n=>Gn=n)}const Zn=t=>{const e=_e;return As(t),t.scope.on(),()=>{t.scope.off(),As(e)}},Po=()=>{_e&&_e.scope.off(),As(null)};function Xa(t){return t.vnode.shapeFlag&4}let Gn=!1;function td(t,e=!1,n=!1){e&&Ki(e);const{props:s,children:i}=t.vnode,r=Xa(t);Tf(t,s,r,e),Of(t,i,n);const o=r?nd(t,e):void 0;return e&&Ki(!1),o}function nd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mf);const{setup:s}=n;if(s){St();const i=t.setupContext=s.length>1?id(t):null,r=Zn(t),o=Xn(s,t,0,[t.props,i]),l=Xl(o);if(Tt(),r(),(l||t.sp)&&!Dn(t)&&Aa(t),l){if(o.then(Po,Po),e)return o.then(a=>{Mo(t,a,e)}).catch(a=>{Ks(a,t,0)});t.asyncDep=o}else Mo(t,o,e)}else Za(t,e)}function Mo(t,e,n){P(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=Ca(e)),Za(t,n)}let ko;function Za(t,e,n){const s=t.type;if(!t.render){if(!e&&ko&&!s.render){const i=s.template||Ar(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=he(he({isCustomElement:r,delimiters:l},o),a);s.render=ko(i,c)}}t.render=s.render||Xe}{const i=Zn(t);St();try{yf(t)}finally{Tt(),i()}}}const sd={get(t,e){return de(t,"get",""),t[e]}};function id(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sd),slots:t.slots,emit:t.emit,expose:e}}function Js(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ca(Uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pn)return Pn[n](t)},has(e,n){return n in e||n in Pn}})):t.proxy}function rd(t,e=!0){return P(t)?t.displayName||t.name:t.name||e&&t.__name}function od(t){return P(t)&&"__vccOpts"in t}const ld=(t,e)=>Vh(t,e,Gn),ad="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zi;const Lo=typeof window<"u"&&window.trustedTypes;if(Lo)try{zi=Lo.createPolicy("vue",{createHTML:t=>t})}catch{}const ec=zi?t=>zi.createHTML(t):t=>t,cd="http://www.w3.org/2000/svg",ud="http://www.w3.org/1998/Math/MathML",it=typeof document<"u"?document:null,Fo=it&&it.createElement("template"),hd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?it.createElementNS(cd,t):e==="mathml"?it.createElementNS(ud,t):n?it.createElement(t,{is:n}):it.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>it.createTextNode(t),createComment:t=>it.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>it.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fo.innerHTML=ec(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Fo.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fd=Symbol("_vtc");function dd(t,e,n){const s=t[fd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bo=Symbol("_vod"),pd=Symbol("_vsh"),_d=Symbol(""),gd=/(^|;)\s*display\s*:/;function md(t,e,n){const s=t.style,i=se(n);let r=!1;if(n&&!i){if(e)if(se(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&vs(s,l,"")}else for(const o in e)n[o]==null&&vs(s,o,"");for(const o in n)o==="display"&&(r=!0),vs(s,o,n[o])}else if(i){if(e!==n){const o=s[_d];o&&(n+=";"+o),s.cssText=n,r=gd.test(n)}}else e&&t.removeAttribute("style");Bo in t&&(t[Bo]=r?s.display:"",t[pd]&&(s.display="none"))}const Ho=/\s*!important$/;function vs(t,e,n){if(x(n))n.forEach(s=>vs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=yd(t,e);Ho.test(n)?t.setProperty(Gt(s),n.replace(Ho,""),"important"):t[s]=n}}const Uo=["Webkit","Moz","ms"],Ci={};function yd(t,e){const n=Ci[e];if(n)return n;let s=Le(e);if(s!=="filter"&&s in t)return Ci[e]=s;s=Vs(s);for(let i=0;i<Uo.length;i++){const r=Uo[i]+s;if(r in t)return Ci[e]=r}return e}const $o="http://www.w3.org/1999/xlink";function Wo(t,e,n,s,i,r=mh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($o,e.slice(6,e.length)):t.setAttributeNS($o,e,n):n==null||r&&!na(n)?t.removeAttribute(e):t.setAttribute(e,r?"":tt(n)?String(n):n)}function jo(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ec(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=na(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function tc(t,e,n,s){t.addEventListener(e,n,s)}function vd(t,e,n,s){t.removeEventListener(e,n,s)}const Vo=Symbol("_vei");function bd(t,e,n,s,i=null){const r=t[Vo]||(t[Vo]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Cd(e);if(s){const c=r[e]=Id(s,i);tc(t,l,c,a)}else o&&(vd(t,l,o,a),r[e]=void 0)}}const qo=/(?:Once|Passive|Capture)$/;function Cd(t){let e;if(qo.test(t)){e={};let s;for(;s=t.match(qo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gt(t.slice(2)),e]}let wi=0;const wd=Promise.resolve(),Ed=()=>wi||(wd.then(()=>wi=0),wi=Date.now());function Id(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(Sd(s,n.value),e,5,[s])};return n.value=t,n.attached=Ed(),n}function Sd(t,e){if(x(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Td=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?dd(t,s,o):e==="style"?md(t,n,s):Ws(e)?_r(e)||bd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ad(t,e,s,o))?(jo(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wo(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!se(s))?jo(t,Le(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wo(t,e,s,o))};function Ad(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Go(e)&&P(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Go(e)&&se(n)?!1:e in t}const Ko=t=>{const e=t.props["onUpdate:modelValue"]||!1;return x(e)?n=>gs(e,n):e},Ei=Symbol("_assign"),zo={created(t,{value:e},n){t.checked=Cs(e,n.props.value),t[Ei]=Ko(n),tc(t,"change",()=>{t[Ei](Rd(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Ei]=Ko(s),e!==n&&(t.checked=Cs(e,s.props.value))}};function Rd(t){return"_value"in t?t._value:t.value}const Nd=he({patchProp:Td},hd);let Yo;function Od(){return Yo||(Yo=Df(Nd))}const xd=(...t)=>{const e=Od().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Pd(s);if(!i)return;const r=e._component;!P(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Dd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Dd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pd(t){return se(t)?document.querySelector(t):t}const Or=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Md={data(){return{phaseHaute:["Insomnie","Augmentation estime de soi","Tachypsychie","Hyperactivité","Flux de parole élevé","Euphorie / désinhibition","Visage hyper expressif","Humeur changeante rapide","Idée de grandeur","Grande confiance en soi"],phaseBasse:["Humeur dépressive","État de stress","Sentiment de vide, tristesse/mélancolie","Perte d'intérêt","Irritabilité","Hypersomnie","Lenteur","Fatigue sans effort physique","Dévalorisation / culpabilité","Pensées négatives","Anxiété"],phaseHauteOptions:[{value:3,label:"++",color:"#2563eb"},{value:2,label:"+",color:"#3b82f6"},{value:1,label:"-",color:"#60a5fa"},{value:0,label:"--",color:"#d1d5db"}],phaseBasseOptions:[{value:-3,label:"++",color:"#ef4444"},{value:-2,label:"+",color:"#f87171"},{value:-1,label:"-",color:"#fca5a5"},{value:0,label:"--",color:"#d1d5db"}],phaseHauteResponses:{},phaseBasseResponses:{},result:null}},methods:{calculateScore(){const t=Object.values(this.phaseHauteResponses).reduce((s,i)=>s+(parseInt(i)||0),0),e=Object.values(this.phaseBasseResponses).reduce((s,i)=>s+(parseInt(i)||0),0),n=t+e;this.result={phaseHaute:t,phaseBasse:e,totalScore:n}}}},kd={class:"questionnaire"},Ld={class:"options"},Fd=["name","value","onUpdate:modelValue"],Bd=["aria-label"],Hd={class:"options"},Ud=["name","value","onUpdate:modelValue"],$d=["aria-label"],Wd={key:0,class:"result"};function jd(t,e,n,s,i,r){return Ne(),He("div",kd,[e[1]||(e[1]=oe("h2",null,"Phase haute",-1)),(Ne(!0),He(xe,null,ds(i.phaseHaute,(o,l)=>(Ne(),He("div",{key:"haute-"+l,class:"question"},[oe("p",null,mt(o),1),oe("div",Ld,[(Ne(!0),He(xe,null,ds(i.phaseHauteOptions,a=>(Ne(),He("label",{key:"haute-"+l+"-"+a.value,class:"option"},[Eo(oe("input",{type:"radio",name:"phaseHaute-"+l,value:a.value,"onUpdate:modelValue":c=>i.phaseHauteResponses[l]=c},null,8,Fd),[[zo,i.phaseHauteResponses[l]]]),oe("span",{class:$n(["option-box phase-haute",{selected:i.phaseHauteResponses[l]===a.value}]),style:Un({backgroundColor:a.color}),"aria-label":a.label},mt(a.label),15,Bd)]))),128))])]))),128)),e[2]||(e[2]=oe("h2",null,"Phase basse",-1)),(Ne(!0),He(xe,null,ds(i.phaseBasse,(o,l)=>(Ne(),He("div",{key:"basse-"+l,class:"question"},[oe("p",null,mt(o),1),oe("div",Hd,[(Ne(!0),He(xe,null,ds(i.phaseBasseOptions,a=>(Ne(),He("label",{key:"basse-"+l+"-"+a.value,class:"option"},[Eo(oe("input",{type:"radio",name:"phaseBasse-"+l,value:a.value,"onUpdate:modelValue":c=>i.phaseBasseResponses[l]=c},null,8,Ud),[[zo,i.phaseBasseResponses[l]]]),oe("span",{class:$n(["option-box phase-basse",{selected:i.phaseBasseResponses[l]===a.value}]),style:Un({backgroundColor:a.color}),"aria-label":a.label},mt(a.label),15,$d)]))),128))])]))),128)),oe("button",{onClick:e[0]||(e[0]=(...o)=>r.calculateScore&&r.calculateScore(...o))},"Calculer"),i.result!==null?(Ne(),He("div",Wd,[oe("p",null,"Résultat Phase haute : "+mt(i.result.phaseHaute),1),oe("p",null,"Résultat Phase basse : "+mt(i.result.phaseBasse),1),oe("p",null,"Score Final : "+mt(i.result.totalScore),1)])):Qf("v-if",!0)])}const Vd=Or(Md,[["render",jd],["__scopeId","data-v-c3029a61"]]);var Qo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw pn(e)},pn=function(t){return new Error("Firebase Database ("+nc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let p=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(p=64)),s.push(n[u],n[h],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Gd;const p=r<<2|l>>4;if(s.push(p),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ic=function(t){const e=sc(t);return xr.encodeByteArray(e,!0)},Rs=function(t){return ic(t).replace(/\./g,"")},Yi=function(t){try{return xr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t){return rc(void 0,t)}function rc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zd(n)||(t[n]=rc(t[n],e[n]));return t}function zd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=()=>Yd().__FIREBASE_DEFAULTS__,Jd=()=>{if(typeof process>"u"||typeof Qo>"u")return;const t=Qo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yi(t[1]);return e&&JSON.parse(e)},oc=()=>{try{return Qd()||Jd()||Xd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zd=t=>{var e,n;return(n=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ep=t=>{const e=Zd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},lc=()=>{var t;return(t=oc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rs(JSON.stringify(n)),Rs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ac(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(np())}function sp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cc(){return nc.NODE_ADMIN===!0}function uc(){try{return typeof indexedDB=="object"}catch{return!1}}function hc(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function rp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="FirebaseError";class Kt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=op,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?lp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,l,s)}}function lp(t,e){return t.replace(ap,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ap=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Kn(Yi(r[0])||""),n=Kn(Yi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},cp=function(t){const e=fc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},up=function(t){const e=fc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Os(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Xo(r)&&Xo(o)){if(!Os(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Xo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const p=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Dr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ei=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=1e3,_p=2,gp=4*60*60*1e3,mp=.5;function Zo(t,e=pp,n=_p){const s=e*Math.pow(n,t),i=Math.round(mp*s*(Math.random()-.5)*2);return Math.min(gp,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){return t&&t._delegate?t._delegate:t}class ct{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bp(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vp(t){return t===Pt?void 0:t}function bp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const wp={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Ep=J.INFO,Ip={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Sp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ip[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pr{constructor(e){this.name=e,this._logLevel=Ep,this._logHandler=Sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Tp=(t,e)=>e.some(n=>t instanceof n);let el,tl;function Ap(){return el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rp(){return tl||(tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dc=new WeakMap,Qi=new WeakMap,pc=new WeakMap,Ii=new WeakMap,Mr=new WeakMap;function Np(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dc.set(n,t)}).catch(()=>{}),Mr.set(e,t),e}function Op(t){if(Qi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Qi.set(t,e)}let Ji={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xp(t){Ji=t(Ji)}function Dp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Si(this),e,...n);return pc.set(s,e.sort?e.sort():[e]),bt(s)}:Rp().includes(t)?function(...e){return t.apply(Si(this),e),bt(dc.get(this))}:function(...e){return bt(t.apply(Si(this),e))}}function Pp(t){return typeof t=="function"?Dp(t):(t instanceof IDBTransaction&&Op(t),Tp(t,Ap())?new Proxy(t,Ji):t)}function bt(t){if(t instanceof IDBRequest)return Np(t);if(Ii.has(t))return Ii.get(t);const e=Pp(t);return e!==t&&(Ii.set(t,e),Mr.set(e,t)),e}const Si=t=>Mr.get(t);function _c(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=bt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(bt(o.result),a.oldVersion,a.newVersion,bt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Mp=["get","getKey","getAll","getAllKeys","count"],kp=["put","add","delete","clear"],Ti=new Map;function nl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=kp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Mp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ti.set(e,r),r}xp(t=>({...t,get:(e,n,s)=>nl(e,n)||t.get(e,n,s),has:(e,n)=>!!nl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xi="@firebase/app",sl="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Pr("@firebase/app"),Bp="@firebase/app-compat",Hp="@firebase/analytics-compat",Up="@firebase/analytics",$p="@firebase/app-check-compat",Wp="@firebase/app-check",jp="@firebase/auth",Vp="@firebase/auth-compat",qp="@firebase/database",Gp="@firebase/data-connect",Kp="@firebase/database-compat",zp="@firebase/functions",Yp="@firebase/functions-compat",Qp="@firebase/installations",Jp="@firebase/installations-compat",Xp="@firebase/messaging",Zp="@firebase/messaging-compat",e_="@firebase/performance",t_="@firebase/performance-compat",n_="@firebase/remote-config",s_="@firebase/remote-config-compat",i_="@firebase/storage",r_="@firebase/storage-compat",o_="@firebase/firestore",l_="@firebase/vertexai",a_="@firebase/firestore-compat",c_="firebase",u_="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]",h_={[Xi]:"fire-core",[Bp]:"fire-core-compat",[Up]:"fire-analytics",[Hp]:"fire-analytics-compat",[Wp]:"fire-app-check",[$p]:"fire-app-check-compat",[jp]:"fire-auth",[Vp]:"fire-auth-compat",[qp]:"fire-rtdb",[Gp]:"fire-data-connect",[Kp]:"fire-rtdb-compat",[zp]:"fire-fn",[Yp]:"fire-fn-compat",[Qp]:"fire-iid",[Jp]:"fire-iid-compat",[Xp]:"fire-fcm",[Zp]:"fire-fcm-compat",[e_]:"fire-perf",[t_]:"fire-perf-compat",[n_]:"fire-rc",[s_]:"fire-rc-compat",[i_]:"fire-gcs",[r_]:"fire-gcs-compat",[o_]:"fire-fst",[a_]:"fire-fst-compat",[l_]:"fire-vertex","fire-js":"fire-js",[c_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Map,f_=new Map,er=new Map;function il(t,e){try{t.container.addComponent(e)}catch(n){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Et(t){const e=t.name;if(er.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;er.set(e,t);for(const n of xs.values())il(n,t);for(const n of f_.values())il(n,t);return!0}function es(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new Zs("app","Firebase",d_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=u_;function gc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ct.create("bad-app-name",{appName:String(i)});if(n||(n=lc()),!n)throw Ct.create("no-options");const r=xs.get(i);if(r){if(Os(n,r.options)&&Os(s,r.config))return r;throw Ct.create("duplicate-app",{appName:i})}const o=new Cp(i);for(const a of er.values())o.addComponent(a);const l=new p_(n,s,o);return xs.set(i,l),l}function mc(t=Zi){const e=xs.get(t);if(!e&&t===Zi&&lc())return gc();if(!e)throw Ct.create("no-app",{appName:t});return e}function et(t,e,n){var s;let i=(s=h_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(l.join(" "));return}Et(new ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firebase-heartbeat-database",m_=1,zn="firebase-heartbeat-store";let Ai=null;function yc(){return Ai||(Ai=_c(g_,m_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),Ai}async function y_(t){try{const n=(await yc()).transaction(zn),s=await n.objectStore(zn).get(vc(t));return await n.done,s}catch(e){if(e instanceof Kt)ut.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(n.message)}}}async function rl(t,e){try{const s=(await yc()).transaction(zn,"readwrite");await s.objectStore(zn).put(e,vc(t)),await s.done}catch(n){if(n instanceof Kt)ut.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ut.warn(s.message)}}}function vc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=1024,b_=30*24*60*60*1e3;class C_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new E_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ol();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=b_}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ut.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ol(),{heartbeatsToSend:s,unsentEntries:i}=w_(this._heartbeatsCache.heartbeats),r=Rs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ut.warn(n),""}}}function ol(){return new Date().toISOString().substring(0,10)}function w_(t,e=v_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ll(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ll(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class E_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uc()?hc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ll(t){return Rs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){Et(new ct("platform-logger",e=>new Lp(e),"PRIVATE")),Et(new ct("heartbeat",e=>new C_(e),"PRIVATE")),et(Xi,sl,t),et(Xi,sl,"esm2017"),et("fire-js","")}I_("");var S_="firebase",T_="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(S_,T_,"app");const bc="@firebase/installations",kr="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=1e4,wc=`w:${kr}`,Ec="FIS_v2",A_="https://firebaseinstallations.googleapis.com/v1",R_=60*60*1e3,N_="installations",O_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$t=new Zs(N_,O_,x_);function Ic(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc({projectId:t}){return`${A_}/projects/${t}/installations`}function Tc(t){return{token:t.token,requestStatus:2,expiresIn:P_(t.expiresIn),creationTime:Date.now()}}async function Ac(t,e){const s=(await e.json()).error;return $t.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Rc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function D_(t,{refreshToken:e}){const n=Rc(t);return n.append("Authorization",M_(e)),n}async function Nc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function P_(t){return Number(t.replace("s","000"))}function M_(t){return`${Ec} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Sc(t),i=Rc(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Ec,appId:t.appId,sdkVersion:wc},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Nc(()=>fetch(s,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Tc(c.authToken)}}else throw await Ac("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=/^[cdef][\w-]{21}$/,tr="";function B_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=H_(t);return F_.test(n)?n:tr}catch{return tr}}function H_(t){return L_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map;function Dc(t,e){const n=ti(t);Pc(n,e),U_(n,e)}function Pc(t,e){const n=xc.get(t);if(n)for(const s of n)s(e)}function U_(t,e){const n=$_();n&&n.postMessage({key:t,fid:e}),W_()}let kt=null;function $_(){return!kt&&"BroadcastChannel"in self&&(kt=new BroadcastChannel("[Firebase] FID Change"),kt.onmessage=t=>{Pc(t.data.key,t.data.fid)}),kt}function W_(){xc.size===0&&kt&&(kt.close(),kt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="firebase-installations-database",V_=1,Wt="firebase-installations-store";let Ri=null;function Lr(){return Ri||(Ri=_c(j_,V_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wt)}}})),Ri}async function Ds(t,e){const n=ti(t),i=(await Lr()).transaction(Wt,"readwrite"),r=i.objectStore(Wt),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Dc(t,e.fid),e}async function Mc(t){const e=ti(t),s=(await Lr()).transaction(Wt,"readwrite");await s.objectStore(Wt).delete(e),await s.done}async function ni(t,e){const n=ti(t),i=(await Lr()).transaction(Wt,"readwrite"),r=i.objectStore(Wt),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Dc(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t){let e;const n=await ni(t.appConfig,s=>{const i=q_(s),r=G_(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===tr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function q_(t){const e=t||{fid:B_(),registrationStatus:0};return kc(e)}function G_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($t.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=K_(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:z_(t)}:{installationEntry:e}}async function K_(t,e){try{const n=await k_(t,e);return Ds(t.appConfig,n)}catch(n){throw Ic(n)&&n.customData.serverCode===409?await Mc(t.appConfig):await Ds(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function z_(t){let e=await al(t.appConfig);for(;e.registrationStatus===1;)await Oc(100),e=await al(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Fr(t);return s||n}return e}function al(t){return ni(t,e=>{if(!e)throw $t.create("installation-not-found");return kc(e)})}function kc(t){return Y_(t)?{fid:t.fid,registrationStatus:0}:t}function Y_(t){return t.registrationStatus===1&&t.registrationTime+Cc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_({appConfig:t,heartbeatServiceProvider:e},n){const s=J_(t,n),i=D_(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:wc,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Nc(()=>fetch(s,l));if(a.ok){const c=await a.json();return Tc(c)}else throw await Ac("Generate Auth Token",a)}function J_(t,{fid:e}){return`${Sc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e=!1){let n;const s=await ni(t.appConfig,r=>{if(!Lc(r))throw $t.create("not-registered");const o=r.authToken;if(!e&&eg(o))return r;if(o.requestStatus===1)return n=X_(t,e),r;{if(!navigator.onLine)throw $t.create("app-offline");const l=ng(r);return n=Z_(t,l),l}});return n?await n:s.authToken}async function X_(t,e){let n=await cl(t.appConfig);for(;n.authToken.requestStatus===1;)await Oc(100),n=await cl(t.appConfig);const s=n.authToken;return s.requestStatus===0?Br(t,e):s}function cl(t){return ni(t,e=>{if(!Lc(e))throw $t.create("not-registered");const n=e.authToken;return sg(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Z_(t,e){try{const n=await Q_(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ds(t.appConfig,s),n}catch(n){if(Ic(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mc(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ds(t.appConfig,s)}throw n}}function Lc(t){return t!==void 0&&t.registrationStatus===2}function eg(t){return t.requestStatus===2&&!tg(t)}function tg(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+R_}function ng(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function sg(t){return t.requestStatus===1&&t.requestTime+Cc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t){const e=t,{installationEntry:n,registrationPromise:s}=await Fr(e);return s?s.catch(console.error):Br(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(t,e=!1){const n=t;return await og(n),(await Br(n,e)).token}async function og(t){const{registrationPromise:e}=await Fr(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){if(!t||!t.options)throw Ni("App Configuration");if(!t.name)throw Ni("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ni(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ni(t){return $t.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="installations",ag="installations-internal",cg=t=>{const e=t.getProvider("app").getImmediate(),n=lg(e),s=es(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ug=t=>{const e=t.getProvider("app").getImmediate(),n=es(e,Fc).getImmediate();return{getId:()=>ig(n),getToken:i=>rg(n,i)}};function hg(){Et(new ct(Fc,cg,"PUBLIC")),Et(new ct(ag,ug,"PRIVATE"))}hg();et(bc,kr);et(bc,kr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="analytics",fg="firebase_id",dg="origin",pg=60*1e3,_g="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hr="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Pr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new Zs("analytics","Analytics",gg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){if(!t.startsWith(Hr)){const e=Me.create("invalid-gtag-resource",{gtagURL:t});return Ee.warn(e.message),""}return t}function Bc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yg(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function vg(t,e){const n=yg("firebase-js-sdk-policy",{createScriptURL:mg}),s=document.createElement("script"),i=`${Hr}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function bg(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Cg(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const a=(await Bc(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){Ee.error(l)}t("config",i,r)}async function wg(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Bc(n);for(const a of o){const c=l.find(h=>h.measurementId===a),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ee.error(r)}}function Eg(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,a]=o;await wg(t,e,n,l,a)}else if(r==="config"){const[l,a]=o;await Cg(t,e,n,s,l,a)}else if(r==="consent"){const[l,a]=o;t("consent",l,a)}else if(r==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Ee.error(l)}}return i}function Ig(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Eg(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Sg(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Hr)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=30,Ag=1e3;class Rg{constructor(e={},n=Ag){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hc=new Rg;function Ng(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Og(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Ng(s)},r=_g.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function xg(t,e=Hc,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Me.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Me.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Mg;return setTimeout(async()=>{l.abort()},pg),Uc({appId:s,apiKey:i,measurementId:r},o,l,e)}async function Uc(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Hc){var r;const{appId:o,measurementId:l}=t;try{await Dg(s,e)}catch(a){if(l)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await Og(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!Pg(c)){if(i.deleteThrottleMetadata(o),l)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Zo(n,i.intervalMillis,Tg):Zo(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Ee.debug(`Calling attemptFetch again in ${u} millis`),Uc(t,h,s,i)}}function Dg(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Pg(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kg(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(){if(uc())try{await hc()}catch(t){return Ee.warn(Me.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ee.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fg(t,e,n,s,i,r,o){var l;const a=xg(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ee.error(g)),e.push(a);const c=Lg().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([a,c]);Sg(r)||vg(r,u.measurementId),i("js",new Date);const p=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return p[dg]="firebase",p.update=!0,h!=null&&(p[fg]=h),i("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.app=e}_delete(){return delete kn[this.app.options.appId],Promise.resolve()}}let kn={},ul=[];const hl={};let Oi="dataLayer",Hg="gtag",fl,$c,dl=!1;function Ug(){const t=[];if(sp()&&t.push("This is a browser extension environment."),rp()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:e});Ee.warn(n.message)}}function $g(t,e,n){Ug();const s=t.options.appId;if(!s)throw Me.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(kn[s]!=null)throw Me.create("already-exists",{id:s});if(!dl){bg(Oi);const{wrappedGtag:r,gtagCore:o}=Ig(kn,ul,hl,Oi,Hg);$c=r,fl=o,dl=!0}return kn[s]=Fg(t,ul,hl,e,fl,Oi,n),new Bg(t)}function Wg(t=mc()){t=zt(t);const e=es(t,Ps);return e.isInitialized()?e.getImmediate():jg(t)}function jg(t,e={}){const n=es(t,Ps);if(n.isInitialized()){const i=n.getImmediate();if(Os(e,n.getOptions()))return i;throw Me.create("already-initialized")}return n.initialize({options:e})}function Vg(t,e,n,s){t=zt(t),kg($c,kn[t.app.options.appId],e,n,s).catch(i=>Ee.error(i))}const pl="@firebase/analytics",_l="0.10.10";function qg(){Et(new ct(Ps,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $g(s,i,n)},"PUBLIC")),Et(new ct("analytics-internal",t,"PRIVATE")),et(pl,_l),et(pl,_l,"esm2017");function t(e){try{const n=e.getProvider(Ps).getImmediate();return{logEvent:(s,i,r)=>Vg(n,s,i,r)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}qg();var gl={};const ml="@firebase/database",yl="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc="";function Gg(t){Wc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Kn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Kg(e)}}catch{}return new zg},Lt=jc("localStorage"),Yg=jc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Pr("@firebase/database"),Qg=function(){let t=1;return function(){return t++}}(),Vc=function(t){const e=dp(t),n=new fp;n.update(e);const s=n.digest();return xr.encodeByteArray(s)},ts=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ts.apply(null,s):typeof s=="object"?e+=ue(s):e+=s,e+=" "}return e};let Ln=null,vl=!0;const Jg=function(t,e){E(!e,"Can't turn on custom loggers persistently."),ln.logLevel=J.VERBOSE,Ln=ln.log.bind(ln)},pe=function(...t){if(vl===!0&&(vl=!1,Ln===null&&Yg.get("logging_enabled")===!0&&Jg()),Ln){const e=ts.apply(null,t);Ln(e)}},ns=function(t){return function(...e){pe(t,...e)}},nr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ts(...t);ln.error(e)},ht=function(...t){const e=`FIREBASE FATAL ERROR: ${ts(...t)}`;throw ln.error(e),new Error(e)},Ie=function(...t){const e="FIREBASE WARNING: "+ts(...t);ln.warn(e)},Xg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Zg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fn="[MIN_NAME]",jt="[MAX_NAME]",_n=function(t,e){if(t===e)return 0;if(t===fn||e===jt)return-1;if(e===fn||t===jt)return 1;{const n=bl(t),s=bl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},em=function(t,e){return t===e?0:t<e?-1:1},In=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},Ur=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ue(e[s]),n+=":",n+=Ur(t[e[s]]);return n+="}",n},Gc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Kc=function(t){E(!qc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let p=parseInt(u.substr(a,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},tm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},sm=new RegExp("^-?(0*)\\d{1,10}$"),im=-2147483648,rm=2147483647,bl=function(t){if(sm.test(t)){const e=Number(t);if(e>=im&&e<=rm)return e}return null},gn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ie("Exception was thrown by user callback.",n),e},Math.floor(0))}},om=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ie(e)}}class bs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="5",zc="v",Yc="s",Qc="r",Jc="f",Xc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zc="ls",eu="p",sr="ac",tu="websocket",nu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iu(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===tu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cm(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.counters_={}}incrementCounter(e,n=1){pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Kd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={},Di={};function Wr(t){const e=t.toString();return xi[e]||(xi[e]=new um),xi[e]}function hm(t,e){const n=t.toString();return Di[n]||(Di[n]=e()),Di[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&gn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="start",dm="close",pm="pLPCommand",_m="pRTLPCB",ru="id",ou="pw",lu="ser",gm="cb",mm="seg",ym="ts",vm="d",bm="dframe",au=1870,cu=30,Cm=au-cu,wm=25e3,Em=3e4;class en{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ns(e),this.stats_=Wr(n),this.urlFn=a=>(this.appCheckToken&&(a[sr]=this.appCheckToken),iu(n,nu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Em)),Zg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cl)this.id=l,this.password=a;else if(o===dm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Cl]="t",s[lu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[gm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zc]=$r,this.transportSessionId&&(s[Yc]=this.transportSessionId),this.lastSessionId&&(s[Zc]=this.lastSessionId),this.applicationId&&(s[eu]=this.applicationId),this.appCheckToken&&(s[sr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(s[Qc]=Jc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){en.forceAllow_=!0}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){return en.forceAllow_?!0:!en.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tm()&&!nm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ic(n),i=Gc(s,Cm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bm]="t",s[ru]=e,s[ou]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qg(),window[pm+this.uniqueCallbackIdentifier]=e,window[_m+this.uniqueCallbackIdentifier]=n,this.myIFrame=jr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){pe("frame writing exception"),l.stack&&pe(l.stack),pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ru]=this.myID,e[ou]=this.myPW,e[lu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cu+s.length<=au;){const o=this.pendingSegs.shift();s=s+"&"+mm+i+"="+o.seg+"&"+ym+i+"="+o.ts+"&"+vm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(wm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=16384,Sm=45e3;let Ms=null;typeof MozWebSocket<"u"?Ms=MozWebSocket:typeof WebSocket<"u"&&(Ms=WebSocket);class Ue{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ns(this.connId),this.stats_=Wr(n),this.connURL=Ue.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[zc]=$r,typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(o[Qc]=Jc),n&&(o[Yc]=n),s&&(o[Zc]=s),i&&(o[sr]=i),r&&(o[eu]=r),iu(e,tu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lt.set("previous_websocket_failure",!0);try{let s;cc(),this.mySock=new Ms(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ms!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Lt.isInMemoryStorage||Lt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Lt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Kn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Gc(n,Im);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{static get ALL_TRANSPORTS(){return[en,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ue&&Ue.isAvailable();let s=n&&!Ue.previouslyFailed();if(e.webSocketOnly&&(n||Ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ue];else{const i=this.transports_=[];for(const r of Yn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=6e4,Am=5e3,Rm=10*1024,Nm=100*1024,Pi="t",wl="d",Om="s",El="r",xm="e",Il="o",Sl="a",Tl="n",Al="p",Dm="h";class Pm{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ns("c:"+this.id+":"),this.transportManager_=new Yn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Nm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pi in e){const n=e[Pi];n===Sl?this.upgradeIfSecondaryHealthy_():n===El?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Il&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=In("t",e),s=In("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Al,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=In("t",e),s=In("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=In(Pi,e);if(wl in e){const s=e[wl];if(n===Dm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Tl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Om?this.onConnectionShutdown_(s):n===El?this.onReset_(s):n===xm?nr("Server Error: "+s):n===Il?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$r!==s&&Ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Fn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Am))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Al,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends hu{static getInstance(){return new ks}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=32,Nl=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new te("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function It(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function fu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Mm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function du(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function pu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new te(n,0)}function k(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=M(t),s=M(e);if(n===null)return e;if(n===s)return ke(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _u(t,e){if(It(t)!==It(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $e(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(It(t)>It(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class km{constructor(e,n){this.errorPrefix_=n,this.parts_=du(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ei(this.parts_[s]);gu(this)}}function Lm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ei(e),gu(t)}function Fm(t){const e=t.parts_.pop();t.byteLength_-=ei(e),t.parts_.length>0&&(t.byteLength_-=1)}function gu(t){if(t.byteLength_>Nl)throw new Error(t.errorPrefix_+"has a key path longer than "+Nl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Rl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rl+") or object contains a cycle "+Mt(t))}function Mt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends hu{static getInstance(){return new Vr}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=1e3,Bm=60*5*1e3,Ol=30*1e3,Hm=1.3,Um=3e4,$m="server_kill",xl=3;class at extends uu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=at.nextPersistentConnectionId_++,this.log_=ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sn,this.maxReconnectDelay_=Bm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!cc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ks.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ue(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Xs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;at.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pt(e,"w")){const s=hn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||up(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ol)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):nr("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Um&&(this.reconnectDelay_=Sn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Hm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+at.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pe("getToken() completed but was canceled"):(pe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,l=new Pm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ie(g+" ("+this.repoInfo_.toString()+")"),this.interrupt($m)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ie(h),a())}}}interrupt(e){pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jo(this.interruptReasons_)&&(this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ur(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xl&&(this.reconnectDelay_=Ol,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wc.replace(/\./g,"-")]=1,ac()?e["framework.cordova"]=1:ip()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ks.getInstance().currentlyOnline();return Jo(this.interruptReasons_)&&e}}at.nextPersistentConnectionId_=0;at.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(fn,e),i=new F(fn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class mu extends si{static get __EMPTY_NODE(){return ps}static set __EMPTY_NODE(e){ps=e}compare(e,n){return _n(e.name,n.name)}isDefinedOn(e){throw pn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(jt,ps)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,ps)}toString(){return".key"}}const an=new mu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ae.RED,this.left=i??we.EMPTY_NODE,this.right=r??we.EMPTY_NODE}copy(e,n,s,i,r){return new ae(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return we.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class Wm{copy(e,n,s,i,r){return this}insert(e,n,s){return new ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class we{constructor(e,n=we.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new we(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new we(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _s(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _s(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _s(this.root_,null,this.comparator_,!0,e)}}we.EMPTY_NODE=new Wm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e){return _n(t.name,e.name)}function qr(t,e){return _n(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;function Vm(t){ir=t}const yu=function(t){return typeof t=="number"?"number:"+Kc(t):"string:"+t},vu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pt(e,".sv"),"Priority must be a string or number.")}else E(t===ir||t.isEmpty(),"priority of unexpected type.");E(t===ir||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class le{static set __childrenNodeConstructor(e){Dl=e}static get __childrenNodeConstructor(){return Dl}constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:M(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=M(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||It(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Kc(this.value_):e+=this.value_,this.lazyHash_=Vc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu,Cu;function qm(t){bu=t}function Gm(t){Cu=t}class Km extends si{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(jt,new le("[PRIORITY-POST]",Cu))}makePost(e,n){const s=bu(e);return new F(n,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new Km;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=Math.log(2);class Ym{constructor(e){const n=r=>parseInt(Math.log(r)/zm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ls=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,p;if(u===0)return null;if(u===1)return h=t[a],p=n?n(h):h,new ae(p,h.node,ae.BLACK,null,null);{const g=parseInt(u/2,10)+a,I=i(a,g),R=i(g+1,c);return h=t[g],p=n?n(h):h,new ae(p,h.node,ae.BLACK,I,R)}},r=function(a){let c=null,u=null,h=t.length;const p=function(I,R){const $=h-I,B=h;h-=I;const q=i($+1,B),K=t[$],O=n?n(K):K;g(new ae(O,K.node,R,null,q))},g=function(I){c?(c.left=I,c=I):(u=I,c=I)};for(let I=0;I<a.count;++I){const R=a.nextBitIsOne(),$=Math.pow(2,a.count-(I+1));R?p($,ae.BLACK):(p($,ae.BLACK),p($,ae.RED))}return u},o=new Ym(t.length),l=r(o);return new we(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;const Xt={};class lt{static get Default(){return E(Xt&&ge,"ChildrenNode.ts has not been loaded"),Mi=Mi||new lt({".priority":Xt},{".priority":ge}),Mi}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=hn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof we?n:null}hasIndex(e){return pt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==an,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ls(s,e.getCompare()):l=Xt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new lt(u,c)}addToIndexes(e,n){const s=Ns(this.indexes_,(i,r)=>{const o=hn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Xt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ls(l,o.getCompare())}else return Xt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new lt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ns(this.indexes_,i=>{if(i===Xt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new lt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class U{static get EMPTY_NODE(){return Tn||(Tn=new U(new we(qr),null,lt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tn}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Tn:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tn:this.priorityNode_;return new U(i,o,r)}}updateChild(e,n){const s=M(e);if(s===null)return n;{E(M(e)!==".priority"||It(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Z(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yu(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ss?-1:0}withIndex(e){if(e===an||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===an||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===an?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qm extends U{constructor(){super(new we(qr),U.EMPTY_NODE,lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const ss=new Qm;Object.defineProperties(F,{MIN:{value:new F(fn,U.EMPTY_NODE)},MAX:{value:new F(jt,ss)}});mu.__EMPTY_NODE=U.EMPTY_NODE;le.__childrenNodeConstructor=U;Vm(ss);Gm(ss);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=!0;function ce(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,ce(e))}if(!(t instanceof Array)&&Jm){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ce(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return U.EMPTY_NODE;const r=Ls(n,jm,o=>o.name,qr);if(s){const o=Ls(n,ge.getCompare());return new U(r,ce(e),new lt({".priority":o},{".priority":ge}))}else return new U(r,ce(e),lt.Default)}else{let n=U.EMPTY_NODE;return Fe(t,(s,i)=>{if(pt(t,s)&&s.substring(0,1)!=="."){const r=ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ce(e))}}qm(ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends si{constructor(e){super(),this.indexPath_=e,E(!k(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}makePost(e,n){const s=ce(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,ss);return new F(jt,e)}toString(){return du(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends si{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_n(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=ce(e);return new F(n,s)}toString(){return".value"}}const ey=new Zm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){return{type:"value",snapshotNode:t}}function ny(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sy(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Gr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ml(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===ey?n="$value":t.index_===an?n="$key":(E(t.index_ instanceof Xm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends uu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ns("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Fs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ml(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),hn(this.listens_,o)===l){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const s=Fs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ml(e._queryParams),s=e._path.toString(),i=new Xs;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Kn(l.responseText)}catch{Ie("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ie("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){return{value:null,children:new Map}}function wu(t,e,n){if(k(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=M(e);t.children.has(s)||t.children.set(s,Bs());const i=t.children.get(s);e=Z(e),wu(i,e,n)}}function rr(t,e,n){t.value!==null?n(e,t.value):oy(t,(s,i)=>{const r=new te(e.toString()+"/"+s);rr(i,r,n)})}function oy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=10*1e3,ay=30*1e3,cy=5*60*1e3;class uy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ly(e);const s=Ll+(ay-Ll)*Math.random();Fn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Fn(this.reportStats_.bind(this),Math.floor(Math.random()*2*cy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function Eu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Iu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Su(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Je.ACK_USER_WRITE,this.source=Eu()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Hs(V(),n,this.revert)}}else return E(M(this.path)===e,"operationForChild called for unrelated child."),new Hs(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Je.OVERWRITE}operationForChild(e){return k(this.path)?new Vt(this.source,V(),this.snap.getImmediateChild(e)):new Vt(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Je.MERGE}operationForChild(e){if(k(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new Vt(this.source,V(),n.value):new Qn(this.source,V(),n)}else return E(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qn(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function hy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(iy(o.childName,o.snapshotNode))}),An(t,i,"child_removed",e,s,n),An(t,i,"child_added",e,s,n),An(t,i,"child_moved",r,s,n),An(t,i,"child_changed",e,s,n),An(t,i,"value",e,s,n),i}function An(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>dy(t,l,a)),o.forEach(l=>{const a=fy(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function fy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dy(t,e,n){if(e.childName==null||n.childName==null)throw pn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e){return{eventCache:t,serverCache:e}}function Bn(t,e,n,s){return Tu(new Kr(e,n,s),t.serverCache)}function Au(t,e,n,s){return Tu(t.eventCache,new Kr(e,n,s))}function or(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;const py=()=>(ki||(ki=new we(em)),ki);class X{static fromObject(e){let n=new X(null);return Fe(e,(s,i)=>{n=n.set(new te(s),i)}),n}constructor(e,n=py()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(k(e))return null;{const s=M(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Z(e),n);return r!=null?{path:re(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const n=M(e),s=this.children.get(n);return s!==null?s.subtree(Z(e)):new X(null)}}set(e,n){if(k(e))return new X(n,this.children);{const s=M(e),r=(this.children.get(s)||new X(null)).set(Z(e),n),o=this.children.insert(s,r);return new X(this.value,o)}}remove(e){if(k(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=M(e),s=this.children.get(n);if(s){const i=s.remove(Z(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const n=M(e),s=this.children.get(n);return s?s.get(Z(e)):null}}setTree(e,n){if(k(e))return n;{const s=M(e),r=(this.children.get(s)||new X(null)).setTree(Z(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new X(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(k(e))return null;{const r=M(e),o=this.children.get(r);return o?o.findOnPath_(Z(e),re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,s){if(k(e))return this;{this.value&&s(n,this.value);const i=M(e),r=this.children.get(i);return r?r.foreachOnPath_(Z(e),re(n,i),s):new X(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.writeTree_=e}static empty(){return new Ve(new X(null))}}function Hn(t,e,n){if(k(e))return new Ve(new X(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new Ve(t.writeTree_.set(i,r))}else{const i=new X(n),r=t.writeTree_.setTree(e,i);return new Ve(r)}}}function Fl(t,e,n){let s=t;return Fe(n,(i,r)=>{s=Hn(s,re(e,i),r)}),s}function Bl(t,e){if(k(e))return Ve.empty();{const n=t.writeTree_.setTree(e,new X(null));return new Ve(n)}}function lr(t,e){return Yt(t,e)!=null}function Yt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function Hl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function wt(t,e){if(k(e))return t;{const n=Yt(t,e);return n!=null?new Ve(new X(n)):new Ve(t.writeTree_.subtree(e))}}function ar(t){return t.writeTree_.isEmpty()}function dn(t,e){return Ru(V(),t.writeTree_,e)}function Ru(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ru(re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(re(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e){return Mu(e,t)}function _y(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Hn(t.visibleWrites,e,n)),t.lastWriteId=s}function gy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function my(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&yy(l,s.path)?i=!1:$e(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return vy(t),!0;if(s.snap)t.visibleWrites=Bl(t.visibleWrites,s.path);else{const l=s.children;Fe(l,a=>{t.visibleWrites=Bl(t.visibleWrites,re(s.path,a))})}return!0}else return!1}function yy(t,e){if(t.snap)return $e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$e(re(t.path,n),e))return!0;return!1}function vy(t){t.visibleWrites=Ou(t.allWrites,by,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function by(t){return t.visible}function Ou(t,e,n){let s=Ve.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)$e(n,o)?(l=ke(n,o),s=Hn(s,l,r.snap)):$e(o,n)&&(l=ke(o,n),s=Hn(s,V(),r.snap.getChild(l)));else if(r.children){if($e(n,o))l=ke(n,o),s=Fl(s,l,r.children);else if($e(o,n))if(l=ke(o,n),k(l))s=Fl(s,V(),r.children);else{const a=hn(r.children,M(l));if(a){const c=a.getChild(Z(l));s=Hn(s,V(),c)}}}else throw pn("WriteRecord should have .snap or .children")}}return s}function xu(t,e,n,s,i){if(!s&&!i){const r=Yt(t.visibleWrites,e);if(r!=null)return r;{const o=wt(t.visibleWrites,e);if(ar(o))return n;if(n==null&&!lr(o,V()))return null;{const l=n||U.EMPTY_NODE;return dn(o,l)}}}else{const r=wt(t.visibleWrites,e);if(!i&&ar(r))return n;if(!i&&n==null&&!lr(r,V()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&($e(c.path,e)||$e(e,c.path))},l=Ou(t.allWrites,o,e),a=n||U.EMPTY_NODE;return dn(l,a)}}}function Cy(t,e,n){let s=U.EMPTY_NODE;const i=Yt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=wt(t.visibleWrites,e);return n.forEachChild(ge,(o,l)=>{const a=dn(wt(r,new te(o)),l);s=s.updateImmediateChild(o,a)}),Hl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=wt(t.visibleWrites,e);return Hl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function wy(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=re(e,n);if(lr(t.visibleWrites,r))return null;{const o=wt(t.visibleWrites,r);return ar(o)?i.getChild(n):dn(o,i.getChild(n))}}function Ey(t,e,n,s){const i=re(e,n),r=Yt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=wt(t.visibleWrites,i);return dn(o,s.getNode().getImmediateChild(n))}else return null}function Iy(t,e){return Yt(t.visibleWrites,e)}function Sy(t,e,n,s,i,r,o){let l;const a=wt(t.visibleWrites,e),c=Yt(a,V());if(c!=null)l=c;else if(n!=null)l=dn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),p=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=p.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=p.getNext();return u}else return[]}function Ty(){return{visibleWrites:Ve.empty(),allWrites:[],lastWriteId:-1}}function cr(t,e,n,s){return xu(t.writeTree,t.treePath,e,n,s)}function Du(t,e){return Cy(t.writeTree,t.treePath,e)}function Ul(t,e,n,s){return wy(t.writeTree,t.treePath,e,n,s)}function Us(t,e){return Iy(t.writeTree,re(t.treePath,e))}function Ay(t,e,n,s,i,r){return Sy(t.writeTree,t.treePath,e,n,s,i,r)}function zr(t,e,n){return Ey(t.writeTree,t.treePath,e,n)}function Pu(t,e){return Mu(re(t.treePath,e),t.writeTree)}function Mu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Pl(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,sy(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ny(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Pl(s,e.snapshotNode,i.oldSnap));else throw pn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ku=new Ny;class Yr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qt(this.viewCache_),r=Ay(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function Oy(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xy(t,e,n,s,i){const r=new Ry;let o,l;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=ur(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!k(c.path),o=$s(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=Py(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=hr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=Ly(t,e,c.path,s,i,r):o=My(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Je.LISTEN_COMPLETE)o=ky(t,e,n.path,s,r);else throw pn("Unknown operation type: "+n.type);const a=r.getChanges();return Dy(e,o,a),{viewCache:o,changes:a}}function Dy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=or(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ty(or(e)))}}function Lu(t,e,n,s,i,r){const o=e.eventCache;if(Us(s,n)!=null)return e;{let l,a;if(k(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qt(e),u=c instanceof U?c:U.EMPTY_NODE,h=Du(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=cr(s,qt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=M(n);if(c===".priority"){E(It(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ul(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Z(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const p=Ul(s,n,o.getNode(),a);p!=null?h=o.getNode().getImmediateChild(c).updateChild(u,p):h=o.getNode().getImmediateChild(c)}else h=zr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Bn(e,l,o.isFullyInitialized()||k(n),t.filter.filtersNodes())}}function $s(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(k(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=M(n);if(!a.isCompleteForPath(n)&&It(n)>1)return e;const I=Z(n),$=a.getNode().getImmediateChild(g).updateChild(I,s);g===".priority"?c=u.updatePriority(a.getNode(),$):c=u.updateChild(a.getNode(),g,$,I,ku,null)}const h=Au(e,c,a.isFullyInitialized()||k(n),u.filtersNodes()),p=new Yr(i,h,r);return Lu(t,h,n,i,p,l)}function ur(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Yr(i,e,r);if(k(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Bn(e,c,!0,t.filter.filtersNodes());else{const h=M(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Bn(e,c,l.isFullyInitialized(),l.isFiltered());else{const p=Z(n),g=l.getNode().getImmediateChild(h);let I;if(k(p))I=s;else{const R=u.getCompleteChild(h);R!=null?fu(p)===".priority"&&R.getChild(pu(p)).isEmpty()?I=R:I=R.updateChild(p,s):I=U.EMPTY_NODE}if(g.equals(I))a=e;else{const R=t.filter.updateChild(l.getNode(),h,I,p,u,o);a=Bn(e,R,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function $l(t,e){return t.eventCache.isCompleteForChild(e)}function Py(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=re(n,a);$l(e,M(u))&&(l=ur(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=re(n,a);$l(e,M(u))||(l=ur(t,l,u,c,i,r,o))}),l}function Wl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function hr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;k(n)?c=s:c=new X(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,p)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),I=Wl(t,g,p);a=$s(t,a,new te(h),I,i,r,o,l)}}),c.children.inorderTraversal((h,p)=>{const g=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!u.hasChild(h)&&!g){const I=e.serverCache.getNode().getImmediateChild(h),R=Wl(t,I,p);a=$s(t,a,new te(h),R,i,r,o,l)}}),a}function My(t,e,n,s,i,r,o){if(Us(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(k(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return $s(t,e,n,a.getNode().getChild(n),i,r,l,o);if(k(n)){let c=new X(null);return a.getNode().forEachChild(an,(u,h)=>{c=c.set(new te(u),h)}),hr(t,e,n,c,i,r,l,o)}else return e}else{let c=new X(null);return s.foreach((u,h)=>{const p=re(n,u);a.isCompleteForPath(p)&&(c=c.set(u,a.getNode().getChild(p)))}),hr(t,e,n,c,i,r,l,o)}}function ky(t,e,n,s,i){const r=e.serverCache,o=Au(e,r.getNode(),r.isFullyInitialized()||k(n),r.isFiltered());return Lu(t,o,n,s,ku,i)}function Ly(t,e,n,s,i,r){let o;if(Us(s,n)!=null)return e;{const l=new Yr(s,e,i),a=e.eventCache.getNode();let c;if(k(n)||M(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=cr(s,qt(e));else{const h=e.serverCache.getNode();E(h instanceof U,"serverChildren would be complete if leaf node"),u=Du(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=M(n);let h=zr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Z(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,U.EMPTY_NODE,Z(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cr(s,qt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Us(s,V())!=null,Bn(e,c,o,t.filter.filtersNodes())}}function Fy(t,e){const n=qt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!k(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function jl(t,e,n,s){e.type===Je.MERGE&&e.source.queryId!==null&&(E(qt(t.viewCache_),"We should always have a full cache before handling merges"),E(or(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=xy(t.processor_,i,e,n,s);return Oy(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,By(t,r.changes,r.viewCache.eventCache.getNode())}function By(t,e,n,s){const i=t.eventRegistrations_;return hy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl;function Hy(t){E(!Vl,"__referenceConstructor has already been defined"),Vl=t}function Qr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),jl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(jl(o,e,n,s));return r}}function Jr(t,e){let n=null;for(const s of t.views.values())n=n||Fy(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;function Uy(t){E(!ql,"__referenceConstructor has already been defined"),ql=t}class Gl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=Ty(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fu(t,e,n,s,i){return _y(t.pendingWriteTree_,e,n,s,i),i?ri(t,new Vt(Eu(),e,n)):[]}function Ft(t,e,n=!1){const s=gy(t.pendingWriteTree_,e);if(my(t.pendingWriteTree_,e)){let r=new X(null);return s.snap!=null?r=r.set(V(),!0):Fe(s.children,o=>{r=r.set(new te(o),!0)}),ri(t,new Hs(s.path,r,n))}else return[]}function ii(t,e,n){return ri(t,new Vt(Iu(),e,n))}function $y(t,e,n){const s=X.fromObject(n);return ri(t,new Qn(Iu(),e,s))}function Wy(t,e,n,s){const i=Uu(t,s);if(i!=null){const r=$u(i),o=r.path,l=r.queryId,a=ke(o,e),c=new Vt(Su(l),a,n);return Wu(t,o,c)}else return[]}function jy(t,e,n,s){const i=Uu(t,s);if(i){const r=$u(i),o=r.path,l=r.queryId,a=ke(o,e),c=X.fromObject(n),u=new Qn(Su(l),a,c);return Wu(t,o,u)}else return[]}function Xr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ke(o,e),c=Jr(l,a);if(c)return c});return xu(i,e,r,n,!0)}function ri(t,e){return Bu(e,t.syncPointTree_,null,Nu(t.pendingWriteTree_,V()))}function Bu(t,e,n,s){if(k(t.path))return Hu(t,e,n,s);{const i=e.get(V());n==null&&i!=null&&(n=Jr(i,V()));let r=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Pu(s,o);r=r.concat(Bu(l,a,c,u))}return i&&(r=r.concat(Qr(i,t,s,n))),r}}function Hu(t,e,n,s){const i=e.get(V());n==null&&i!=null&&(n=Jr(i,V()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Pu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Hu(u,l,a,c)))}),i&&(r=r.concat(Qr(i,t,s,n))),r}function Uu(t,e){return t.tagToQueryMap.get(e)}function $u(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function Wu(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Nu(t.pendingWriteTree_,e);return Qr(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zr(n)}node(){return this.node_}}class eo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new eo(this.syncTree_,n)}node(){return Xr(this.syncTree_,this.path_)}}const Vy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Gy(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Gy=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ky=function(t,e,n,s){return to(e,new eo(n,t),s)},ju=function(t,e,n){return to(t,new Zr(e),n)};function to(t,e,n){const s=t.getPriority().val(),i=Kl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Kl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new le(l,ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(ge,(l,a)=>{const c=to(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function so(t,e){let n=e instanceof te?e:new te(e),s=t,i=M(n);for(;i!==null;){const r=hn(s.node.children,i)||{children:{},childCount:0};s=new no(i,s,r),n=Z(n),i=M(n)}return s}function mn(t){return t.node.value}function Vu(t,e){t.node.value=e,fr(t)}function qu(t){return t.node.childCount>0}function zy(t){return mn(t)===void 0&&!qu(t)}function oi(t,e){Fe(t.node.children,(n,s)=>{e(new no(n,t,s))})}function Gu(t,e,n,s){n&&!s&&e(t),oi(t,i=>{Gu(i,e,!0,s)}),n&&s&&e(t)}function Yy(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function is(t){return new te(t.parent===null?t.name:is(t.parent)+"/"+t.name)}function fr(t){t.parent!==null&&Qy(t.parent,t.name,t)}function Qy(t,e,n){const s=zy(n),i=pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,fr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=/[\[\].#$\/\u0000-\u001F\u007F]/,Xy=/[\[\].#$\u0000-\u001F\u007F]/,Li=10*1024*1024,Ku=function(t){return typeof t=="string"&&t.length!==0&&!Jy.test(t)},zu=function(t){return typeof t=="string"&&t.length!==0&&!Xy.test(t)},Zy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zu(t)},ev=function(t,e,n,s){io(Dr(t,"value"),e,n)},io=function(t,e,n){const s=n instanceof te?new km(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Mt(s)+" with contents = "+e.toString());if(qc(e))throw new Error(t+"contains "+e.toString()+" "+Mt(s));if(typeof e=="string"&&e.length>Li/3&&ei(e)>Li)throw new Error(t+"contains a string greater than "+Li+" utf8 bytes "+Mt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ku(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Lm(s,o),io(t,l,s),Fm(s)}),i&&r)throw new Error(t+' contains ".value" child '+Mt(s)+" in addition to actual children.")}},Yu=function(t,e,n,s){if(!zu(n))throw new Error(Dr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yu(t,e,n)},nv=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ku(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Zy(n))throw new Error(Dr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qu(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!_u(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ft(t,e,n){Qu(t,n),rv(t,s=>$e(s,e)||$e(e,s))}function rv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ov(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ov(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ln&&pe("event: "+n.toString()),gn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="repo_interrupt",av=25;class cv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bs(),this.transactionQueueTree_=new no,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uv(t,e,n){if(t.stats_=Wr(t.repoInfo_),t.forceRestClient_||om())t.server_=new Fs(t.repoInfo_,(s,i,r,o)=>{zl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new at(t.repoInfo_,e,(s,i,r,o)=>{zl(t,s,i,r,o)},s=>{Yl(t,s)},s=>{fv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=hm(t.repoInfo_,()=>new uy(t.stats_,t.server_)),t.infoData_=new ry,t.infoSyncTree_=new Gl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ii(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),oo(t,"connected",!1),t.serverSyncTree_=new Gl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ft(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function hv(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ro(t){return Vy({timestamp:hv(t)})}function zl(t,e,n,s,i){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ns(n,c=>ce(c));o=jy(t.serverSyncTree_,r,a,i)}else{const a=ce(n);o=Wy(t.serverSyncTree_,r,a,i)}else if(s){const a=Ns(n,c=>ce(c));o=$y(t.serverSyncTree_,r,a)}else{const a=ce(n);o=ii(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=li(t,r)),ft(t.eventQueue_,l,o)}function Yl(t,e){oo(t,"connected",e),e===!1&&pv(t)}function fv(t,e){Fe(e,(n,s)=>{oo(t,n,s)})}function oo(t,e,n){const s=new te("/.info/"+e),i=ce(n);t.infoData_.updateSnapshot(s,i);const r=ii(t.infoSyncTree_,s,i);ft(t.eventQueue_,s,r)}function Ju(t){return t.nextWriteId_++}function dv(t,e,n,s,i){lo(t,"set",{path:e.toString(),value:n,priority:s});const r=ro(t),o=ce(n,s),l=Xr(t.serverSyncTree_,e),a=ju(o,l,r),c=Ju(t),u=Fu(t.serverSyncTree_,e,a,c,!0);Qu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(p,g)=>{const I=p==="ok";I||Ie("set at "+e+" failed: "+p);const R=Ft(t.serverSyncTree_,c,!I);ft(t.eventQueue_,e,R),gv(t,i,p,g)});const h=nh(t,e);li(t,h),ft(t.eventQueue_,h,[])}function pv(t){lo(t,"onDisconnectEvents");const e=ro(t),n=Bs();rr(t.onDisconnect_,V(),(i,r)=>{const o=Ky(i,r,t.serverSyncTree_,e);wu(n,i,o)});let s=[];rr(n,V(),(i,r)=>{s=s.concat(ii(t.serverSyncTree_,i,r));const o=nh(t,i);li(t,o)}),t.onDisconnect_=Bs(),ft(t.eventQueue_,V(),s)}function _v(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lv)}function lo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pe(n,...e)}function gv(t,e,n,s){e&&gn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Xu(t,e,n){return Xr(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function ao(t,e=t.transactionQueueTree_){if(e||ai(t,e),mn(e)){const n=eh(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mv(t,is(e),n)}else qu(e)&&oi(e,n=>{ao(t,n)})}function mv(t,e,n){const s=n.map(c=>c.currentWriteId),i=Xu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{lo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,u=u.concat(Ft(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();ai(t,so(t.transactionQueueTree_,e)),ao(t,t.transactionQueueTree_),ft(t.eventQueue_,e,u);for(let p=0;p<h.length;p++)gn(h[p])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ie("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}li(t,e)}},o)}function li(t,e){const n=Zu(t,e),s=is(n),i=eh(t,n);return yv(t,i,s),s}function yv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ke(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Ft(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=av)u=!0,h="maxretry",i=i.concat(Ft(t.serverSyncTree_,a.currentWriteId,!0));else{const p=Xu(t,a.path,o);a.currentInputSnapshot=p;const g=e[l].update(p.val());if(g!==void 0){io("transaction failed: Data returned ",g,a.path);let I=ce(g);typeof g=="object"&&g!=null&&pt(g,".priority")||(I=I.updatePriority(p.getPriority()));const $=a.currentWriteId,B=ro(t),q=ju(I,p,B);a.currentOutputSnapshotRaw=I,a.currentOutputSnapshotResolved=q,a.currentWriteId=Ju(t),o.splice(o.indexOf($),1),i=i.concat(Fu(t.serverSyncTree_,a.path,q,a.currentWriteId,a.applyLocally)),i=i.concat(Ft(t.serverSyncTree_,$,!0))}else u=!0,h="nodata",i=i.concat(Ft(t.serverSyncTree_,a.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(p){setTimeout(p,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ai(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)gn(s[l]);ao(t,t.transactionQueueTree_)}function Zu(t,e){let n,s=t.transactionQueueTree_;for(n=M(e);n!==null&&mn(s)===void 0;)s=so(s,n),e=Z(e),n=M(e);return s}function eh(t,e){const n=[];return th(t,e,n),n.sort((s,i)=>s.order-i.order),n}function th(t,e,n){const s=mn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);oi(e,i=>{th(t,i,n)})}function ai(t,e){const n=mn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Vu(e,n.length>0?n:void 0)}oi(e,s=>{ai(t,s)})}function nh(t,e){const n=is(Zu(t,e)),s=so(t.transactionQueueTree_,e);return Yy(s,i=>{Fi(t,i)}),Fi(t,s),Gu(s,i=>{Fi(t,i)}),n}function Fi(t,e){const n=mn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ft(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Vu(e,void 0):n.length=r+1,ft(t.eventQueue_,is(e),i);for(let o=0;o<s.length;o++)gn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ie(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ql=function(t,e){const n=Cv(t),s=n.namespace;n.domain==="firebase.com"&&ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Xg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new su(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new te(n.pathString)}},Cv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=vv(t.substring(u,h)));const p=bv(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return k(this._path)?null:fu(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=kl(this._queryParams),n=Ur(e);return n==="{}"?"default":n}get _queryObject(){return kl(this._queryParams)}isEqual(e){if(e=zt(e),!(e instanceof co))return!1;const n=this._repo===e._repo,s=_u(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mm(this._path)}}class Qt extends co{constructor(e,n){super(e,n,new Gr,!1)}get parent(){const e=pu(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function wv(t,e){return t=zt(t),t._checkNotDeleted("ref"),e!==void 0?Ev(t._root,e):t._root}function Ev(t,e){return t=zt(t),M(t._path)===null?tv("child","path",e):Yu("child","path",e),new Qt(t._repo,re(t._path,e))}function Iv(t,e){t=zt(t),nv("set",t._path),ev("set",e,t._path);const n=new Xs;return dv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}Hy(Qt);Uy(Qt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="FIREBASE_DATABASE_EMULATOR_HOST",dr={};let Tv=!1;function Av(t,e,n,s){t.repoInfo_=new su(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Rv(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ql(r,i),l=o.repoInfo,a;typeof process<"u"&&gl&&(a=gl[Sv]),a?(r=`http://${a}?ns=${l.namespace}`,o=Ql(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new am(t.name,t.options,e);sv("Invalid Firebase Database URL",o),k(o.path)||ht("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ov(l,t,c,new lm(t.name,n));return new xv(u,t)}function Nv(t,e){const n=dr[e];(!n||n[t.key]!==t)&&ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_v(t),delete n[t.key]}function Ov(t,e,n,s){let i=dr[e.name];i||(i={},dr[e.name]=i);let r=i[t.toURLString()];return r&&ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new cv(t,Tv,n,s),i[t.toURLString()]=r,r}class xv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ht("Cannot call "+e+" on a deleted database.")}}function Dv(t=mc(),e){const n=es(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ep("database");s&&Pv(n,...s)}return n}function Pv(t,e,n,s={}){t=zt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ht("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new bs(bs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:tp(s.mockUserToken,t.app.options.projectId);r=new bs(o)}Av(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t){Gg(__),Et(new ct("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Rv(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),et(ml,yl,t),et(ml,yl,"esm2017")}at.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};at.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Mv();const kv={apiKey:"AIzaSyDZFChgA27aMdiiG-SBZL0hukwEEmbtLeo",authDomain:"humeur-3a407.firebaseapp.com",databaseURL:"https://humeur-3a407-default-rtdb.europe-west1.firebasedatabase.app",projectId:"humeur-3a407",storageBucket:"humeur-3a407.firebasestorage.app",messagingSenderId:"609714621091",appId:"1:609714621091:web:9dda82c79fc8e368230d16",measurementId:"G-TG56CLLZSP"},sh=gc(kv);Wg(sh);const Lv=Dv(sh),Fv={components:{MoodQuestionnaire:Vd},methods:{saveResponse(t){const e="exampleUserId",n=new Date().toISOString().split("T")[0],s=wv(Lv,`users/${e}/responses/${n}`);Iv(s,t).then(()=>alert("Réponse enregistrée avec succès !")).catch(i=>alert("Erreur : "+i.message))}}};function Bv(t,e,n,s,i,r){const o=pf("MoodQuestionnaire");return Ne(),He("div",null,[e[0]||(e[0]=oe("h1",null,"Suivi de l'humeur",-1)),e[1]||(e[1]=oe("p",null,"Bienvenue, répondez au questionnaire d'humeur chaque jour pour suivre votre état !",-1)),Ze(o)])}const Hv=Or(Fv,[["render",Bv],["__scopeId","data-v-32bc0ca7"]]),Uv={__name:"App",setup(t){return(e,n)=>(Ne(),Ya(Hv,{msg:"Vite + Vue"}))}},$v=Or(Uv,[["__scopeId","data-v-95d5e011"]]);xd($v).mount("#app");
