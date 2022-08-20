const Al=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Al();function va(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ol=va(Cl);function Ro(e){return!!e||e===""}function vt(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?Sl(r):vt(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(G(e))return e}}const kl=/;(?![^(]*\))/g,Tl=/:(.+)/;function Sl(e){const t={};return e.split(kl).forEach(n=>{if(n){const r=n.split(Tl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Nt(e){let t="";if(ee(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=Nt(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xe=e=>ee(e)?e:e==null?"":D(e)||G(e)&&(e.toString===Do||!j(e.toString))?JSON.stringify(e,Mo,2):String(e),Mo=(e,t)=>t&&t.__v_isRef?Mo(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Fo(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!D(t)&&!jo(t)?String(t):t,Y={},Rt=[],Ne=()=>{},Pl=()=>!1,Il=/^on[^a-z]/,Wn=e=>Il.test(e),ga=e=>e.startsWith("onUpdate:"),ue=Object.assign,ba=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Nl=Object.prototype.hasOwnProperty,U=(e,t)=>Nl.call(e,t),D=Array.isArray,Mt=e=>qn(e)==="[object Map]",Fo=e=>qn(e)==="[object Set]",j=e=>typeof e=="function",ee=e=>typeof e=="string",ya=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Lo=e=>G(e)&&j(e.then)&&j(e.catch),Do=Object.prototype.toString,qn=e=>Do.call(e),Rl=e=>qn(e).slice(8,-1),jo=e=>qn(e)==="[object Object]",wa=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xn=va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ml=/-(\w)/g,Be=Yn(e=>e.replace(Ml,(t,n)=>n?n.toUpperCase():"")),Fl=/\B([A-Z])/g,Ut=Yn(e=>e.replace(Fl,"-$1").toLowerCase()),Kn=Yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=Yn(e=>e?`on${Kn(e)}`:""),In=(e,t)=>!Object.is(e,t),gr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ll=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fi;const Dl=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class jl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&je&&(this.parent=je,this.index=(je.scopes||(je.scopes=[])).push(this)-1)}run(t){if(this.active){const n=je;try{return je=this,t()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function $l(e,t=je){t&&t.active&&t.effects.push(e)}const xa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$o=e=>(e.w&st)>0,zo=e=>(e.n&st)>0,zl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},Ul=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];$o(a)&&!zo(a)?a.delete(e):t[n++]=a,a.w&=~st,a.n&=~st}t.length=n}},Ur=new WeakMap;let Gt=0,st=1;const Br=30;let ke;const gt=Symbol(""),Hr=Symbol("");class _a{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$l(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=it;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,it=!0,st=1<<++Gt,Gt<=Br?zl(this):ui(this),this.fn()}finally{Gt<=Br&&Ul(this),st=1<<--Gt,ke=this.parent,it=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(ui(this),this.onStop&&this.onStop(),this.active=!1)}}function ui(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let it=!0;const Uo=[];function Bt(){Uo.push(it),it=!1}function Ht(){const e=Uo.pop();it=e===void 0?!0:e}function ye(e,t,n){if(it&&ke){let r=Ur.get(e);r||Ur.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=xa()),Bo(a)}}function Bo(e,t){let n=!1;Gt<=Br?zo(e)||(e.n|=st,n=!$o(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function Ye(e,t,n,r,a,i){const o=Ur.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?wa(n)&&s.push(o.get("length")):(s.push(o.get(gt)),Mt(e)&&s.push(o.get(Hr)));break;case"delete":D(e)||(s.push(o.get(gt)),Mt(e)&&s.push(o.get(Hr)));break;case"set":Mt(e)&&s.push(o.get(gt));break}if(s.length===1)s[0]&&Wr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Wr(xa(l))}}function Wr(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&ci(r);for(const r of n)r.computed||ci(r)}function ci(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Bl=va("__proto__,__v_isRef,__isVue"),Ho=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ya)),Hl=Ea(),Wl=Ea(!1,!0),ql=Ea(!0),di=Yl();function Yl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=H(this)[t].apply(this,n);return Ht(),r}}),e}function Ea(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ff:Vo:t?Ko:Yo).get(r))return r;const o=D(r);if(!e&&o&&U(di,a))return Reflect.get(di,a,i);const s=Reflect.get(r,a,i);return(ya(a)?Ho.has(a):Bl(a))||(e||ye(r,"get",a),t)?s:fe(s)?o&&wa(a)?s:s.value:G(s)?e?Xo(s):Oa(s):s}}const Kl=Wo(),Vl=Wo(!0);function Wo(e=!1){return function(n,r,a,i){let o=n[r];if(ln(o)&&fe(o)&&!fe(a))return!1;if(!e&&!ln(a)&&(qr(a)||(a=H(a),o=H(o)),!D(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=D(n)&&wa(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?In(a,o)&&Ye(n,"set",r,a):Ye(n,"add",r,a)),l}}function Xl(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ye(e,"delete",t,void 0),r}function Jl(e,t){const n=Reflect.has(e,t);return(!ya(t)||!Ho.has(t))&&ye(e,"has",t),n}function Gl(e){return ye(e,"iterate",D(e)?"length":gt),Reflect.ownKeys(e)}const qo={get:Hl,set:Kl,deleteProperty:Xl,has:Jl,ownKeys:Gl},Ql={get:ql,set(e,t){return!0},deleteProperty(e,t){return!0}},Zl=ue({},qo,{get:Wl,set:Vl}),Aa=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&ye(a,"get",t),ye(a,"get",i));const{has:o}=Vn(a),s=r?Aa:n?Sa:Ta;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function vn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&ye(r,"has",e),ye(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function gn(e,t=!1){return e=e.__v_raw,!t&&ye(H(e),"iterate",gt),Reflect.get(e,"size",e)}function mi(e){e=H(e);const t=H(this);return Vn(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function pi(e,t){t=H(t);const n=H(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?In(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function hi(e){const t=H(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function vi(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function bn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Aa:e?Sa:Ta;return!e&&ye(s,"iterate",gt),o.forEach((u,c)=>r.call(a,l(u),l(c),i))}}function yn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=Mt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),c=n?Aa:t?Sa:Ta;return!t&&ye(i,"iterate",l?Hr:gt),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:s?[c(p[0]),c(p[1])]:c(p),done:m}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function ef(){const e={get(i){return hn(this,i)},get size(){return gn(this)},has:vn,add:mi,set:pi,delete:hi,clear:vi,forEach:bn(!1,!1)},t={get(i){return hn(this,i,!1,!0)},get size(){return gn(this)},has:vn,add:mi,set:pi,delete:hi,clear:vi,forEach:bn(!1,!0)},n={get(i){return hn(this,i,!0)},get size(){return gn(this,!0)},has(i){return vn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:bn(!0,!1)},r={get(i){return hn(this,i,!0,!0)},get size(){return gn(this,!0)},has(i){return vn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=yn(i,!1,!1),n[i]=yn(i,!0,!1),t[i]=yn(i,!1,!0),r[i]=yn(i,!0,!0)}),[e,n,t,r]}const[tf,nf,rf,af]=ef();function Ca(e,t){const n=t?e?af:rf:e?nf:tf;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const of={get:Ca(!1,!1)},sf={get:Ca(!1,!0)},lf={get:Ca(!0,!1)},Yo=new WeakMap,Ko=new WeakMap,Vo=new WeakMap,ff=new WeakMap;function uf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(e){return e.__v_skip||!Object.isExtensible(e)?0:uf(Rl(e))}function Oa(e){return ln(e)?e:ka(e,!1,qo,of,Yo)}function df(e){return ka(e,!1,Zl,sf,Ko)}function Xo(e){return ka(e,!0,Ql,lf,Vo)}function ka(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=cf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ft(e){return ln(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function qr(e){return!!(e&&e.__v_isShallow)}function Jo(e){return Ft(e)||ln(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Go(e){return Nn(e,"__v_skip",!0),e}const Ta=e=>G(e)?Oa(e):e,Sa=e=>G(e)?Xo(e):e;function mf(e){it&&ke&&(e=H(e),Bo(e.dep||(e.dep=xa())))}function pf(e,t){e=H(e),e.dep&&Wr(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function hf(e){return fe(e)?e.value:e}const vf={get:(e,t,n)=>hf(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qo(e){return Ft(e)?e:new Proxy(e,vf)}class gf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _a(t,()=>{this._dirty||(this._dirty=!0,pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return mf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function bf(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new gf(r,a,i||!a,n)}function ot(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Xn(i,t,n)}return a}function Re(e,t,n,r){if(j(e)){const i=ot(e,t,n,r);return i&&Lo(i)&&i.catch(o=>{Xn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Re(e[i],t,n,r));return a}function Xn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,s]);return}}yf(e,n,a,r)}function yf(e,t,n,r=!0){console.error(e)}let Rn=!1,Yr=!1;const be=[];let qe=0;const en=[];let Qt=null,Tt=0;const tn=[];let nt=null,St=0;const Zo=Promise.resolve();let Pa=null,Kr=null;function wf(e){const t=Pa||Zo;return e?t.then(this?e.bind(this):e):t}function xf(e){let t=qe+1,n=be.length;for(;t<n;){const r=t+n>>>1;fn(be[r])<e?t=r+1:n=r}return t}function es(e){(!be.length||!be.includes(e,Rn&&e.allowRecurse?qe+1:qe))&&e!==Kr&&(e.id==null?be.push(e):be.splice(xf(e.id),0,e),ts())}function ts(){!Rn&&!Yr&&(Yr=!0,Pa=Zo.then(as))}function _f(e){const t=be.indexOf(e);t>qe&&be.splice(t,1)}function ns(e,t,n,r){D(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ts()}function Ef(e){ns(e,Qt,en,Tt)}function Af(e){ns(e,nt,tn,St)}function Jn(e,t=null){if(en.length){for(Kr=t,Qt=[...new Set(en)],en.length=0,Tt=0;Tt<Qt.length;Tt++)Qt[Tt]();Qt=null,Tt=0,Kr=null,Jn(e,t)}}function rs(e){if(Jn(),tn.length){const t=[...new Set(tn)];if(tn.length=0,nt){nt.push(...t);return}for(nt=t,nt.sort((n,r)=>fn(n)-fn(r)),St=0;St<nt.length;St++)nt[St]();nt=null,St=0}}const fn=e=>e.id==null?1/0:e.id;function as(e){Yr=!1,Rn=!0,Jn(e),be.sort((n,r)=>fn(n)-fn(r));const t=Ne;try{for(qe=0;qe<be.length;qe++){const n=be[qe];n&&n.active!==!1&&ot(n,null,14)}}finally{qe=0,be.length=0,rs(),Rn=!1,Pa=null,(be.length||en.length||tn.length)&&as(e)}}function Cf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[c]||Y;m&&(a=n.map(_=>_.trim())),p&&(a=n.map(Ll))}let s,l=r[s=vr(t)]||r[s=vr(Be(t))];!l&&i&&(l=r[s=vr(Ut(t))]),l&&Re(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Re(u,e,6,a)}}function is(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=u=>{const c=is(u,t,!0);c&&(s=!0,ue(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):ue(o,i),r.set(e,o),o)}function Gn(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Ut(t))||U(e,t))}let Se=null,Qn=null;function Mn(e){const t=Se;return Se=e,Qn=e&&e.type.__scopeId||null,t}function Of(e){Qn=e}function kf(){Qn=null}function Tf(e,t=Se,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ki(-1);const i=Mn(t),o=e(...a);return Mn(i),r._d&&ki(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:c,renderCache:p,data:m,setupState:_,ctx:F,inheritAttrs:L}=e;let S,y;const k=Mn(e);try{if(n.shapeFlag&4){const $=a||r;S=ze(c.call($,$,p,i,_,m,F)),y=l}else{const $=t;S=ze($.length>1?$(i,{attrs:l,slots:s,emit:u}):$(i,null)),y=t.props?l:Sf(l)}}catch($){nn.length=0,Xn($,e,1),S=ie(yt)}let R=S;if(y&&L!==!1){const $=Object.keys(y),{shapeFlag:C}=R;$.length&&C&7&&(o&&$.some(ga)&&(y=Pf(y,o)),R=Dt(R,y))}return n.dirs&&(R=Dt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),S=R,Mn(k),S}const Sf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},Pf=(e,t)=>{const n={};for(const r in e)(!ga(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function If(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gi(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const m=c[p];if(o[m]!==r[m]&&!Gn(u,m))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?gi(r,o,u):!0:!!o;return!1}function gi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Gn(n,i))return!0}return!1}function Nf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Rf=e=>e.__isSuspense;function Mf(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Af(e)}function Ff(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function yr(e,t,n=!1){const r=ae||Se;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const bi={};function _n(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=ae;let l,u=!1,c=!1;if(fe(e)?(l=()=>e.value,u=qr(e)):Ft(e)?(l=()=>e,r=!0):D(e)?(c=!0,u=e.some(y=>Ft(y)||qr(y)),l=()=>e.map(y=>{if(fe(y))return y.value;if(Ft(y))return pt(y);if(j(y))return ot(y,s,2)})):j(e)?t?l=()=>ot(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return p&&p(),Re(e,s,3,[m])}:l=Ne,t&&r){const y=l;l=()=>pt(y())}let p,m=y=>{p=S.onStop=()=>{ot(y,s,4)}};if(cn)return m=Ne,t?n&&Re(t,s,3,[l(),c?[]:void 0,m]):l(),Ne;let _=c?[]:bi;const F=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(c?y.some((k,R)=>In(k,_[R])):In(y,_)))&&(p&&p(),Re(t,s,3,[y,_===bi?void 0:_,m]),_=y)}else S.run()};F.allowRecurse=!!t;let L;a==="sync"?L=F:a==="post"?L=()=>me(F,s&&s.suspense):L=()=>Ef(F);const S=new _a(l,L);return t?n?F():_=S.run():a==="post"?me(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&ba(s.scope.effects,S)}}function Lf(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?ss(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ae;jt(this);const s=os(a,i.bind(r),n);return o?jt(o):bt(),s}function ss(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))pt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(Fo(e)||Mt(e))e.forEach(n=>{pt(n,t)});else if(jo(e))for(const n in e)pt(e[n],t);return e}function Ia(e){return j(e)?{setup:e,name:e.name}:e}const En=e=>!!e.type.__asyncLoader,ls=e=>e.type.__isKeepAlive;function Df(e,t){fs(e,"a",t)}function jf(e,t){fs(e,"da",t)}function fs(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Zn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ls(a.parent.vnode)&&$f(r,t,n,a),a=a.parent}}function $f(e,t,n,r){const a=Zn(t,e,r,!0);us(()=>{ba(r[t],a)},n)}function Zn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),jt(n);const s=Re(t,n,e,o);return bt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const Je=e=>(t,n=ae)=>(!cn||e==="sp")&&Zn(e,t,n),zf=Je("bm"),Uf=Je("m"),Bf=Je("bu"),Hf=Je("u"),Wf=Je("bum"),us=Je("um"),qf=Je("sp"),Yf=Je("rtg"),Kf=Je("rtc");function Vf(e,t=ae){Zn("ec",e,t)}function Xf(e,t){const n=Se;if(n===null)return e;const r=tr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,u=Y]=t[i];j(o)&&(o={mounted:o,updated:o}),o.deep&&pt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u})}return e}function ut(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Bt(),Re(l,n,8,[e.el,s,e,t]),Ht())}}const cs="components";function Na(e,t){return Gf(cs,e,!0,t)||e}const Jf=Symbol();function Gf(e,t,n=!0,r=!1){const a=Se||ae;if(a){const i=a.type;if(e===cs){const s=ku(i,!1);if(s&&(s===t||s===Be(t)||s===Kn(Be(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[Be(t)]||e[Kn(Be(t))])}function wi(e,t,n,r){let a;const i=n&&n[r];if(D(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Vr=e=>e?Es(e)?tr(e)||e.proxy:Vr(e.parent):null,Fn=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vr(e.parent),$root:e=>Vr(e.root),$emit:e=>e.emit,$options:e=>ms(e),$forceUpdate:e=>e.f||(e.f=()=>es(e.update)),$nextTick:e=>e.n||(e.n=wf.bind(e.proxy)),$watch:e=>Lf.bind(e)}),Qf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&U(r,t))return o[t]=1,r[t];if(a!==Y&&U(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&U(u,t))return o[t]=3,i[t];if(n!==Y&&U(n,t))return o[t]=4,n[t];Xr&&(o[t]=0)}}const c=Fn[t];let p,m;if(c)return t==="$attrs"&&ye(e,"get",t),c(e);if((p=s.__cssModules)&&(p=p[t]))return p;if(n!==Y&&U(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,U(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&U(a,t)?(a[t]=n,!0):r!==Y&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&U(e,o)||t!==Y&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Fn,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Xr=!0;function Zf(e){const t=ms(e),n=e.proxy,r=e.ctx;Xr=!1,t.beforeCreate&&xi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:p,mounted:m,beforeUpdate:_,updated:F,activated:L,deactivated:S,beforeDestroy:y,beforeUnmount:k,destroyed:R,unmounted:$,render:C,renderTracked:te,renderTriggered:se,errorCaptured:ce,serverPrefetch:ne,expose:Qe,inheritAttrs:Me,components:re,directives:Ee,filters:Fe}=t;if(u&&eu(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const K=o[J];j(K)&&(r[J]=K.bind(n))}if(a){const J=a.call(n,n);G(J)&&(e.data=Oa(J))}if(Xr=!0,i)for(const J in i){const K=i[J],He=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Ne,mr=!j(K)&&j(K.set)?K.set.bind(n):Ne,Kt=_e({get:He,set:mr});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Et=>Kt.value=Et})}if(s)for(const J in s)ds(s[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(K=>{Ff(K,J[K])})}c&&xi(c,e,"c");function Q(J,K){D(K)?K.forEach(He=>J(He.bind(n))):K&&J(K.bind(n))}if(Q(zf,p),Q(Uf,m),Q(Bf,_),Q(Hf,F),Q(Df,L),Q(jf,S),Q(Vf,ce),Q(Kf,te),Q(Yf,se),Q(Wf,k),Q(us,$),Q(qf,ne),D(Qe))if(Qe.length){const J=e.exposed||(e.exposed={});Qe.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:He=>n[K]=He})})}else e.exposed||(e.exposed={});C&&e.render===Ne&&(e.render=C),Me!=null&&(e.inheritAttrs=Me),re&&(e.components=re),Ee&&(e.directives=Ee)}function eu(e,t,n=Ne,r=!1){D(e)&&(e=Jr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=yr(i.from||a,i.default,!0):o=yr(i.from||a):o=yr(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function xi(e,t,n){Re(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ds(e,t,n,r){const a=r.includes(".")?ss(n,r):()=>n[r];if(ee(e)){const i=t[e];j(i)&&_n(a,i)}else if(j(e))_n(a,e.bind(n));else if(G(e))if(D(e))e.forEach(i=>ds(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&_n(a,i,e)}}function ms(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Ln(l,u,o,!0)),Ln(l,t,o)),i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=tu[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const tu={data:_i,props:dt,emits:dt,methods:dt,computed:dt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:dt,directives:dt,watch:ru,provide:_i,inject:nu};function _i(e,t){return t?e?function(){return ue(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function nu(e,t){return dt(Jr(e),Jr(t))}function Jr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function dt(e,t){return e?ue(ue(Object.create(null),e),t):t}function ru(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function au(e,t,n,r=!1){const a={},i={};Nn(i,er,1),e.propsDefaults=Object.create(null),ps(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:df(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function iu(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let m=c[p];if(Gn(e.emitsOptions,m))continue;const _=t[m];if(l)if(U(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const F=Be(m);a[F]=Gr(l,s,F,_,e,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{ps(e,t,a,i)&&(u=!0);let c;for(const p in s)(!t||!U(t,p)&&((c=Ut(p))===p||!U(t,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(a[p]=Gr(l,s,p,void 0,e,!0)):delete a[p]);if(i!==s)for(const p in i)(!t||!U(t,p)&&!0)&&(delete i[p],u=!0)}u&&Ye(e,"set","$attrs")}function ps(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(xn(l))continue;const u=t[l];let c;a&&U(a,c=Be(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:Gn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=H(n),u=s||Y;for(let c=0;c<i.length;c++){const p=i[c];n[p]=Gr(a,l,p,u[p],e,!U(u,p))}}return o}function Gr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(jt(a),r=u[n]=l.call(null,t),bt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ut(n))&&(r=!0))}return r}function hs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const c=p=>{l=!0;const[m,_]=hs(p,t,!0);ue(o,m),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return r.set(e,Rt),Rt;if(D(i))for(let c=0;c<i.length;c++){const p=Be(i[c]);Ei(p)&&(o[p]=Y)}else if(i)for(const c in i){const p=Be(c);if(Ei(p)){const m=i[c],_=o[p]=D(m)||j(m)?{type:m}:m;if(_){const F=Oi(Boolean,_.type),L=Oi(String,_.type);_[0]=F>-1,_[1]=L<0||F<L,(F>-1||U(_,"default"))&&s.push(p)}}}const u=[o,s];return r.set(e,u),u}function Ei(e){return e[0]!=="$"}function Ai(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ci(e,t){return Ai(e)===Ai(t)}function Oi(e,t){return D(t)?t.findIndex(n=>Ci(n,e)):j(t)&&Ci(t,e)?0:-1}const vs=e=>e[0]==="_"||e==="$stable",Ra=e=>D(e)?e.map(ze):[ze(e)],ou=(e,t,n)=>{if(t._n)return t;const r=Tf((...a)=>Ra(t(...a)),n);return r._c=!1,r},gs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(vs(a))continue;const i=e[a];if(j(i))t[a]=ou(a,i,r);else if(i!=null){const o=Ra(i);t[a]=()=>o}}},bs=(e,t)=>{const n=Ra(t);e.slots.default=()=>n},su=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Nn(t,"_",n)):gs(t,e.slots={})}else e.slots={},t&&bs(e,t);Nn(e.slots,er,1)},lu=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ue(a,t),!n&&s===1&&delete a._):(i=!t.$stable,gs(t,a)),o=t}else t&&(bs(e,t),o={default:1});if(i)for(const s in a)!vs(s)&&!(s in o)&&delete a[s]};function ys(){return{app:null,config:{isNativeTag:Pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fu=0;function uu(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=ys(),o=new Set;let s=!1;const l=i.app={_uid:fu++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Su,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...c)):j(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,p){if(!s){const m=ie(r,a);return m.appContext=i,c&&t?t(m,u):e(m,u,p),s=!0,l._container=u,u.__vue_app__=l,tr(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function Qr(e,t,n,r,a=!1){if(D(e)){e.forEach((m,_)=>Qr(m,t&&(D(t)?t[_]:t),n,r,a));return}if(En(r)&&!a)return;const i=r.shapeFlag&4?tr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,c=s.refs===Y?s.refs={}:s.refs,p=s.setupState;if(u!=null&&u!==l&&(ee(u)?(c[u]=null,U(p,u)&&(p[u]=null)):fe(u)&&(u.value=null)),j(l))ot(l,s,12,[o,c]);else{const m=ee(l),_=fe(l);if(m||_){const F=()=>{if(e.f){const L=m?c[l]:l.value;a?D(L)&&ba(L,i):D(L)?L.includes(i)||L.push(i):m?(c[l]=[i],U(p,l)&&(p[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else m?(c[l]=o,U(p,l)&&(p[l]=o)):_&&(l.value=o,e.k&&(c[e.k]=o))};o?(F.id=-1,me(F,n)):F()}}}const me=Mf;function cu(e){return du(e)}function du(e,t){const n=Dl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:m,setScopeId:_=Ne,cloneNode:F,insertStaticContent:L}=e,S=(f,d,h,g=null,v=null,x=null,A=!1,w=null,E=!!d.dynamicChildren)=>{if(f===d)return;f&&!Xt(f,d)&&(g=pn(f),Ze(f,v,x,!0),f=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:P,shapeFlag:T}=d;switch(b){case Ma:y(f,d,h,g);break;case yt:k(f,d,h,g);break;case wr:f==null&&R(d,h,g,A);break;case Oe:Ee(f,d,h,g,v,x,A,w,E);break;default:T&1?te(f,d,h,g,v,x,A,w,E):T&6?Fe(f,d,h,g,v,x,A,w,E):(T&64||T&128)&&b.process(f,d,h,g,v,x,A,w,E,At)}P!=null&&v&&Qr(P,f&&f.ref,x,d||f,!d)},y=(f,d,h,g)=>{if(f==null)r(d.el=s(d.children),h,g);else{const v=d.el=f.el;d.children!==f.children&&u(v,d.children)}},k=(f,d,h,g)=>{f==null?r(d.el=l(d.children||""),h,g):d.el=f.el},R=(f,d,h,g)=>{[f.el,f.anchor]=L(f.children,d,h,g,f.el,f.anchor)},$=({el:f,anchor:d},h,g)=>{let v;for(;f&&f!==d;)v=m(f),r(f,h,g),f=v;r(d,h,g)},C=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=m(f),a(f),f=h;a(d)},te=(f,d,h,g,v,x,A,w,E)=>{A=A||d.type==="svg",f==null?se(d,h,g,v,x,A,w,E):Qe(f,d,v,x,A,w,E)},se=(f,d,h,g,v,x,A,w)=>{let E,b;const{type:P,props:T,shapeFlag:I,transition:M,patchFlag:B,dirs:W}=f;if(f.el&&F!==void 0&&B===-1)E=f.el=F(f.el);else{if(E=f.el=o(f.type,x,T&&T.is,T),I&8?c(E,f.children):I&16&&ne(f.children,E,null,g,v,x&&P!=="foreignObject",A,w),W&&ut(f,null,g,"created"),T){for(const V in T)V!=="value"&&!xn(V)&&i(E,V,null,T[V],x,f.children,g,v,We);"value"in T&&i(E,"value",null,T.value),(b=T.onVnodeBeforeMount)&&De(b,g,f)}ce(E,f,f.scopeId,A,g)}W&&ut(f,null,g,"beforeMount");const q=(!v||v&&!v.pendingBranch)&&M&&!M.persisted;q&&M.beforeEnter(E),r(E,d,h),((b=T&&T.onVnodeMounted)||q||W)&&me(()=>{b&&De(b,g,f),q&&M.enter(E),W&&ut(f,null,g,"mounted")},v)},ce=(f,d,h,g,v)=>{if(h&&_(f,h),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(v){let x=v.subTree;if(d===x){const A=v.vnode;ce(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},ne=(f,d,h,g,v,x,A,w,E=0)=>{for(let b=E;b<f.length;b++){const P=f[b]=w?rt(f[b]):ze(f[b]);S(null,P,d,h,g,v,x,A,w)}},Qe=(f,d,h,g,v,x,A)=>{const w=d.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:P}=d;E|=f.patchFlag&16;const T=f.props||Y,I=d.props||Y;let M;h&&ct(h,!1),(M=I.onVnodeBeforeUpdate)&&De(M,h,d,f),P&&ut(d,f,h,"beforeUpdate"),h&&ct(h,!0);const B=v&&d.type!=="foreignObject";if(b?Me(f.dynamicChildren,b,w,h,g,B,x):A||He(f,d,w,null,h,g,B,x,!1),E>0){if(E&16)re(w,d,T,I,h,g,v);else if(E&2&&T.class!==I.class&&i(w,"class",null,I.class,v),E&4&&i(w,"style",T.style,I.style,v),E&8){const W=d.dynamicProps;for(let q=0;q<W.length;q++){const V=W[q],Ae=T[V],Ct=I[V];(Ct!==Ae||V==="value")&&i(w,V,Ae,Ct,v,f.children,h,g,We)}}E&1&&f.children!==d.children&&c(w,d.children)}else!A&&b==null&&re(w,d,T,I,h,g,v);((M=I.onVnodeUpdated)||P)&&me(()=>{M&&De(M,h,d,f),P&&ut(d,f,h,"updated")},g)},Me=(f,d,h,g,v,x,A)=>{for(let w=0;w<d.length;w++){const E=f[w],b=d[w],P=E.el&&(E.type===Oe||!Xt(E,b)||E.shapeFlag&70)?p(E.el):h;S(E,b,P,null,g,v,x,A,!0)}},re=(f,d,h,g,v,x,A)=>{if(h!==g){for(const w in g){if(xn(w))continue;const E=g[w],b=h[w];E!==b&&w!=="value"&&i(f,w,b,E,A,d.children,v,x,We)}if(h!==Y)for(const w in h)!xn(w)&&!(w in g)&&i(f,w,h[w],null,A,d.children,v,x,We);"value"in g&&i(f,"value",h.value,g.value)}},Ee=(f,d,h,g,v,x,A,w,E)=>{const b=d.el=f?f.el:s(""),P=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:M}=d;M&&(w=w?w.concat(M):M),f==null?(r(b,h,g),r(P,h,g),ne(d.children,h,P,v,x,A,w,E)):T>0&&T&64&&I&&f.dynamicChildren?(Me(f.dynamicChildren,I,h,v,x,A,w),(d.key!=null||v&&d===v.subTree)&&ws(f,d,!0)):He(f,d,h,P,v,x,A,w,E)},Fe=(f,d,h,g,v,x,A,w,E)=>{d.slotScopeIds=w,f==null?d.shapeFlag&512?v.ctx.activate(d,h,g,A,E):Yt(d,h,g,v,x,A,E):Q(f,d,E)},Yt=(f,d,h,g,v,x,A)=>{const w=f.component=_u(f,g,v);if(ls(f)&&(w.ctx.renderer=At),Eu(w),w.asyncDep){if(v&&v.registerDep(w,J),!f.el){const E=w.subTree=ie(yt);k(null,E,d,h)}return}J(w,f,d,h,v,x,A)},Q=(f,d,h)=>{const g=d.component=f.component;if(If(f,d,h))if(g.asyncDep&&!g.asyncResolved){K(g,d,h);return}else g.next=d,_f(g.update),g.update();else d.el=f.el,g.vnode=d},J=(f,d,h,g,v,x,A)=>{const w=()=>{if(f.isMounted){let{next:P,bu:T,u:I,parent:M,vnode:B}=f,W=P,q;ct(f,!1),P?(P.el=B.el,K(f,P,A)):P=B,T&&gr(T),(q=P.props&&P.props.onVnodeBeforeUpdate)&&De(q,M,P,B),ct(f,!0);const V=br(f),Ae=f.subTree;f.subTree=V,S(Ae,V,p(Ae.el),pn(Ae),f,v,x),P.el=V.el,W===null&&Nf(f,V.el),I&&me(I,v),(q=P.props&&P.props.onVnodeUpdated)&&me(()=>De(q,M,P,B),v)}else{let P;const{el:T,props:I}=d,{bm:M,m:B,parent:W}=f,q=En(d);if(ct(f,!1),M&&gr(M),!q&&(P=I&&I.onVnodeBeforeMount)&&De(P,W,d),ct(f,!0),T&&hr){const V=()=>{f.subTree=br(f),hr(T,f.subTree,f,v,null)};q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=br(f);S(null,V,h,g,f,v,x),d.el=V.el}if(B&&me(B,v),!q&&(P=I&&I.onVnodeMounted)){const V=d;me(()=>De(P,W,V),v)}(d.shapeFlag&256||W&&En(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&me(f.a,v),f.isMounted=!0,d=h=g=null}},E=f.effect=new _a(w,()=>es(b),f.scope),b=f.update=()=>E.run();b.id=f.uid,ct(f,!0),b()},K=(f,d,h)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,iu(f,d.props,g,h),lu(f,d.children,h),Bt(),Jn(void 0,f.update),Ht()},He=(f,d,h,g,v,x,A,w,E=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,T=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){Kt(b,T,h,g,v,x,A,w,E);return}else if(I&256){mr(b,T,h,g,v,x,A,w,E);return}}M&8?(P&16&&We(b,v,x),T!==b&&c(h,T)):P&16?M&16?Kt(b,T,h,g,v,x,A,w,E):We(b,v,x,!0):(P&8&&c(h,""),M&16&&ne(T,h,g,v,x,A,w,E))},mr=(f,d,h,g,v,x,A,w,E)=>{f=f||Rt,d=d||Rt;const b=f.length,P=d.length,T=Math.min(b,P);let I;for(I=0;I<T;I++){const M=d[I]=E?rt(d[I]):ze(d[I]);S(f[I],M,h,null,v,x,A,w,E)}b>P?We(f,v,x,!0,!1,T):ne(d,h,g,v,x,A,w,E,T)},Kt=(f,d,h,g,v,x,A,w,E)=>{let b=0;const P=d.length;let T=f.length-1,I=P-1;for(;b<=T&&b<=I;){const M=f[b],B=d[b]=E?rt(d[b]):ze(d[b]);if(Xt(M,B))S(M,B,h,null,v,x,A,w,E);else break;b++}for(;b<=T&&b<=I;){const M=f[T],B=d[I]=E?rt(d[I]):ze(d[I]);if(Xt(M,B))S(M,B,h,null,v,x,A,w,E);else break;T--,I--}if(b>T){if(b<=I){const M=I+1,B=M<P?d[M].el:g;for(;b<=I;)S(null,d[b]=E?rt(d[b]):ze(d[b]),h,B,v,x,A,w,E),b++}}else if(b>I)for(;b<=T;)Ze(f[b],v,x,!0),b++;else{const M=b,B=b,W=new Map;for(b=B;b<=I;b++){const ve=d[b]=E?rt(d[b]):ze(d[b]);ve.key!=null&&W.set(ve.key,b)}let q,V=0;const Ae=I-B+1;let Ct=!1,oi=0;const Vt=new Array(Ae);for(b=0;b<Ae;b++)Vt[b]=0;for(b=M;b<=T;b++){const ve=f[b];if(V>=Ae){Ze(ve,v,x,!0);continue}let Le;if(ve.key!=null)Le=W.get(ve.key);else for(q=B;q<=I;q++)if(Vt[q-B]===0&&Xt(ve,d[q])){Le=q;break}Le===void 0?Ze(ve,v,x,!0):(Vt[Le-B]=b+1,Le>=oi?oi=Le:Ct=!0,S(ve,d[Le],h,null,v,x,A,w,E),V++)}const si=Ct?mu(Vt):Rt;for(q=si.length-1,b=Ae-1;b>=0;b--){const ve=B+b,Le=d[ve],li=ve+1<P?d[ve+1].el:g;Vt[b]===0?S(null,Le,h,li,v,x,A,w,E):Ct&&(q<0||b!==si[q]?Et(Le,h,li,2):q--)}}},Et=(f,d,h,g,v=null)=>{const{el:x,type:A,transition:w,children:E,shapeFlag:b}=f;if(b&6){Et(f.component.subTree,d,h,g);return}if(b&128){f.suspense.move(d,h,g);return}if(b&64){A.move(f,d,h,At);return}if(A===Oe){r(x,d,h);for(let T=0;T<E.length;T++)Et(E[T],d,h,g);r(f.anchor,d,h);return}if(A===wr){$(f,d,h);return}if(g!==2&&b&1&&w)if(g===0)w.beforeEnter(x),r(x,d,h),me(()=>w.enter(x),v);else{const{leave:T,delayLeave:I,afterLeave:M}=w,B=()=>r(x,d,h),W=()=>{T(x,()=>{B(),M&&M()})};I?I(x,B,W):W()}else r(x,d,h)},Ze=(f,d,h,g=!1,v=!1)=>{const{type:x,props:A,ref:w,children:E,dynamicChildren:b,shapeFlag:P,patchFlag:T,dirs:I}=f;if(w!=null&&Qr(w,null,h,f,!0),P&256){d.ctx.deactivate(f);return}const M=P&1&&I,B=!En(f);let W;if(B&&(W=A&&A.onVnodeBeforeUnmount)&&De(W,d,f),P&6)El(f.component,h,g);else{if(P&128){f.suspense.unmount(h,g);return}M&&ut(f,null,d,"beforeUnmount"),P&64?f.type.remove(f,d,h,v,At,g):b&&(x!==Oe||T>0&&T&64)?We(b,d,h,!1,!0):(x===Oe&&T&384||!v&&P&16)&&We(E,d,h),g&&ai(f)}(B&&(W=A&&A.onVnodeUnmounted)||M)&&me(()=>{W&&De(W,d,f),M&&ut(f,null,d,"unmounted")},h)},ai=f=>{const{type:d,el:h,anchor:g,transition:v}=f;if(d===Oe){_l(h,g);return}if(d===wr){C(f);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:w}=v,E=()=>A(h,x);w?w(f.el,x,E):E()}else x()},_l=(f,d)=>{let h;for(;f!==d;)h=m(f),a(f),f=h;a(d)},El=(f,d,h)=>{const{bum:g,scope:v,update:x,subTree:A,um:w}=f;g&&gr(g),v.stop(),x&&(x.active=!1,Ze(A,f,d,h)),w&&me(w,d),me(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},We=(f,d,h,g=!1,v=!1,x=0)=>{for(let A=x;A<f.length;A++)Ze(f[A],d,h,g,v)},pn=f=>f.shapeFlag&6?pn(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),ii=(f,d,h)=>{f==null?d._vnode&&Ze(d._vnode,null,null,!0):S(d._vnode||null,f,d,null,null,null,h),rs(),d._vnode=f},At={p:S,um:Ze,m:Et,r:ai,mt:Yt,mc:ne,pc:He,pbc:Me,n:pn,o:e};let pr,hr;return t&&([pr,hr]=t(At)),{render:ii,hydrate:pr,createApp:uu(ii,pr)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ws(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=rt(a[i]),s.el=o.el),n||ws(o,s))}}function mu(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const pu=e=>e.__isTeleport,Oe=Symbol(void 0),Ma=Symbol(void 0),yt=Symbol(void 0),wr=Symbol(void 0),nn=[];let Pe=null;function pe(e=!1){nn.push(Pe=e?null:[])}function hu(){nn.pop(),Pe=nn[nn.length-1]||null}let un=1;function ki(e){un+=e}function xs(e){return e.dynamicChildren=un>0?Pe||Rt:null,hu(),un>0&&Pe&&Pe.push(e),e}function $e(e,t,n,r,a,i){return xs(z(e,t,n,r,a,i,!0))}function An(e,t,n,r,a){return xs(ie(e,t,n,r,a,!0))}function Zr(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",_s=({key:e})=>e!=null?e:null,Cn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||fe(e)||j(e)?{i:Se,r:e,k:t,f:!!n}:e:null;function z(e,t=null,n=null,r=0,a=null,i=e===Oe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_s(t),ref:t&&Cn(t),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),un>0&&!o&&Pe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pe.push(l),l}const ie=vu;function vu(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jf)&&(e=yt),Zr(e)){const s=Dt(e,t,!0);return n&&Fa(s,n),un>0&&!i&&Pe&&(s.shapeFlag&6?Pe[Pe.indexOf(e)]=s:Pe.push(s)),s.patchFlag|=-2,s}if(Tu(e)&&(e=e.__vccOpts),t){t=gu(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Nt(s)),G(l)&&(Jo(l)&&!D(l)&&(l=ue({},l)),t.style=vt(l))}const o=ee(e)?1:Rf(e)?128:pu(e)?64:G(e)?4:j(e)?2:0;return z(e,t,n,r,a,o,i,!0)}function gu(e){return e?Jo(e)||er in e?ue({},e):e:null}function Dt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?yu(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&_s(s),ref:t&&t.ref?n&&a?D(a)?a.concat(Cn(t)):[a,Cn(t)]:Cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor}}function bu(e=" ",t=0){return ie(Ma,null,e,t)}function rn(e="",t=!1){return t?(pe(),An(yt,null,e)):ie(yt,null,e)}function ze(e){return e==null||typeof e=="boolean"?ie(yt):D(e)?ie(Oe,null,e.slice()):typeof e=="object"?rt(e):ie(Ma,null,String(e))}function rt(e){return e.el===null||e.memo?e:Dt(e)}function Fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(er in t)?t._ctx=Se:a===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[bu(t)]):n=8);e.children=t,e.shapeFlag|=n}function yu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Nt([t.class,r.class]));else if(a==="style")t.style=vt([t.style,r.style]);else if(Wn(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function De(e,t,n,r=null){Re(e,t,7,[n,r])}const wu=ys();let xu=0;function _u(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wu,i={uid:xu++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hs(r,a),emitsOptions:is(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cf.bind(null,i),e.ce&&e.ce(i),i}let ae=null;const jt=e=>{ae=e,e.scope.on()},bt=()=>{ae&&ae.scope.off(),ae=null};function Es(e){return e.vnode.shapeFlag&4}let cn=!1;function Eu(e,t=!1){cn=t;const{props:n,children:r}=e.vnode,a=Es(e);au(e,n,a,t),su(e,r);const i=a?Au(e,t):void 0;return cn=!1,i}function Au(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Go(new Proxy(e.ctx,Qf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ou(e):null;jt(e),Bt();const i=ot(r,e,0,[e.props,a]);if(Ht(),bt(),Lo(i)){if(i.then(bt,bt),t)return i.then(o=>{Ti(e,o,t)}).catch(o=>{Xn(o,e,0)});e.asyncDep=i}else Ti(e,i,t)}else As(e,t)}function Ti(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Qo(t)),As(e,n)}let Si;function As(e,t,n){const r=e.type;if(!e.render){if(!t&&Si&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ue(ue({isCustomElement:i,delimiters:s},o),l);r.render=Si(a,u)}}e.render=r.render||Ne}jt(e),Bt(),Zf(e),Ht(),bt()}function Cu(e){return new Proxy(e.attrs,{get(t,n){return ye(e,"get","$attrs"),t[n]}})}function Ou(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Cu(e))},slots:e.slots,emit:e.emit,expose:t}}function tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qo(Go(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fn)return Fn[n](e)}}))}function ku(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Tu(e){return j(e)&&"__vccOpts"in e}const _e=(e,t)=>bf(e,t,cn);function Cs(e,t,n){const r=arguments.length;return r===2?G(t)&&!D(t)?Zr(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zr(n)&&(n=[n]),ie(e,t,n))}const Su="3.2.37",Pu="http://www.w3.org/2000/svg",mt=typeof document<"u"?document:null,Pi=mt&&mt.createElement("template"),Iu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(Pu,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Pi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Pi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Nu(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ru(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)ea(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&ea(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ii=/\s*!important$/;function ea(e,t,n){if(D(n))n.forEach(r=>ea(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Mu(e,t);Ii.test(n)?e.setProperty(Ut(r),n.replace(Ii,""),"important"):e[r]=n}}const Ni=["Webkit","Moz","ms"],xr={};function Mu(e,t){const n=xr[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return xr[t]=r;r=Kn(r);for(let a=0;a<Ni.length;a++){const i=Ni[a]+r;if(i in e)return xr[t]=i}return t}const Ri="http://www.w3.org/1999/xlink";function Fu(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ri,t.slice(6,t.length)):e.setAttributeNS(Ri,t,n);else{const i=Ol(t);n==null||i&&!Ro(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Lu(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ro(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Os,Du]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ta=0;const ju=Promise.resolve(),$u=()=>{ta=0},zu=()=>ta||(ju.then($u),ta=Os());function Uu(e,t,n,r){e.addEventListener(t,n,r)}function Bu(e,t,n,r){e.removeEventListener(t,n,r)}function Hu(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Wu(t);if(r){const u=i[t]=qu(r,a);Uu(e,s,u,l)}else o&&(Bu(e,s,o,l),i[t]=void 0)}}const Mi=/(?:Once|Passive|Capture)$/;function Wu(e){let t;if(Mi.test(e)){t={};let n;for(;n=e.match(Mi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ut(e.slice(2)),t]}function qu(e,t){const n=r=>{const a=r.timeStamp||Os();(Du||a>=n.attached-1)&&Re(Yu(r,n.value),t,5,[r])};return n.value=e,n.attached=zu(),n}function Yu(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Fi=/^on[a-z]/,Ku=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Nu(e,r,a):t==="style"?Ru(e,n,r):Wn(t)?ga(t)||Hu(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vu(e,t,r,a))?Lu(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Fu(e,t,r,a))};function Vu(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Fi.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fi.test(t)&&ee(n)?!1:t in e}const Xu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Jt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Jt(e,!0),r.enter(e)):r.leave(e,()=>{Jt(e,!1)}):Jt(e,t))},beforeUnmount(e,{value:t}){Jt(e,t)}};function Jt(e,t){e.style.display=t?e._vod:"none"}const Ju=ue({patchProp:Ku},Iu);let Li;function Gu(){return Li||(Li=cu(Ju))}const Qu=(...e)=>{const t=Gu().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Zu(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Zu(e){return ee(e)?document.querySelector(e):e}const nr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},ec={name:"Weather",data(){return{timezone:null,currentTime:null,dayPeriod:null,panelSwitch:!1}},props:["weather","dayPeriod","timezone","unixToTimestamp","getFormattedTime","currentTime"],methods:{firstLetterCapital(e){return e[0].toUpperCase()+e.replace(/^./,"")},getFormattedDate(e){return["Domingo","Segunda","Ter\xE7a","Quarta","Quinta","Sexta","S\xE1bado"][e.getDay()]},handleSwitch(){return this.panelSwitch=!this.panelSwitch}},mounted(){console.log(this.dayPeriod)}},tc={class:"timezone"},nc={class:"weather-info"},rc=["src"],ac={class:"description"},ic={class:"footer-info"},oc={class:"weather-panel"},sc={class:"switch-wrapper"},lc={key:0,class:"predictions hourly"},fc={class:"detail"},uc=["src"],cc={key:1,class:"predictions daily"},dc={class:"detail"},mc=["src"];function pc(e,t,n,r,a,i){const o=Na("font-awesome-icon");return pe(),$e("section",{class:Nt(`wrapper ${n.dayPeriod=="night"||n.dayPeriod=="dawn"?"dark":"light"}`),style:vt({backgroundImage:`var(${n.dayPeriod})`})},[z("div",tc,[z("p",null,xe(n.currentTime),1),z("p",null,xe(n.timezone),1)]),z("div",nc,[z("img",{src:"icons/"+n.weather.current.weather[0].icon+".png"},null,8,rc),z("p",null,xe(n.weather.current.temp)+"\xBA",1),z("p",ac,xe(i.firstLetterCapital(n.weather.current.weather[0].description)),1)]),z("div",ic,[z("div",null,[ie(o,{icon:"fa-solid fa-wind"}),z("span",null,xe(n.weather.current.wind_speed)+"m/s",1)]),z("div",null,[ie(o,{icon:"fa-solid fa-droplet"}),z("span",null,xe(n.weather.current.humidity)+"%",1)]),z("div",null,[ie(o,{icon:"fa-solid fa-sun"}),z("span",null,xe(n.weather.current.uvi),1)])]),z("div",oc,[z("div",sc,[z("div",{class:"switch",onClick:t[0]||(t[0]=s=>i.handleSwitch())},[z("p",{class:Nt(a.panelSwitch?null:"active")},"Hourly",2),z("p",{class:Nt(a.panelSwitch?"active":null)},"Daily",2)])]),a.panelSwitch?rn("",!0):(pe(),$e("div",lc,[(pe(!0),$e(Oe,null,wi(n.weather.hourly,s=>(pe(),$e("div",fc,[z("span",null,xe(n.getFormattedTime(n.unixToTimestamp(s.dt))),1),z("img",{src:"icons/"+s.weather[0].icon+".png"},null,8,uc),z("span",null,xe(s.temp)+"\xBA",1)]))),256))])),a.panelSwitch?(pe(),$e("div",cc,[(pe(!0),$e(Oe,null,wi(n.weather.daily,s=>(pe(),$e("div",dc,[z("span",null,xe(i.getFormattedDate(n.unixToTimestamp(s.dt))),1),z("img",{src:"icons/"+s.weather[0].icon+".png"},null,8,mc),z("span",null,xe(s.temp.day)+"\xBA",1)]))),256))])):rn("",!0)])],6)}const hc=nr(ec,[["render",pc],["__scopeId","data-v-a4f101c2"]]);const vc={name:"Error",props:["errors"]},ks=e=>(Of("data-v-227ccd21"),e=e(),kf(),e),gc={class:"error-wrapper"},bc=ks(()=>z("span",null,"Ocorreu um erro",-1)),yc=ks(()=>z("p",null,"Verifique o console para mais informa\xE7\xF5es",-1));function wc(e,t,n,r,a,i){const o=Na("font-awesome-icon");return pe(),$e("section",gc,[z("div",null,[ie(o,{icon:"fa-solid fa-bug"}),bc]),z("p",null,xe(n.errors[0]),1),yc])}const xc=nr(vc,[["render",wc],["__scopeId","data-v-227ccd21"]]);function _c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ts={exports:{}},La={exports:{}},Ss=function(t,n){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return t.apply(n,a)}},Ec=Ss,Da=Object.prototype.toString,ja=function(e){return function(t){var n=Da.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function _t(e){return e=e.toLowerCase(),function(n){return ja(n)===e}}function $a(e){return Array.isArray(e)}function Dn(e){return typeof e>"u"}function Ac(e){return e!==null&&!Dn(e)&&e.constructor!==null&&!Dn(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Ps=_t("ArrayBuffer");function Cc(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ps(e.buffer),t}function Oc(e){return typeof e=="string"}function kc(e){return typeof e=="number"}function Is(e){return e!==null&&typeof e=="object"}function On(e){if(ja(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var Tc=_t("Date"),Sc=_t("File"),Pc=_t("Blob"),Ic=_t("FileList");function za(e){return Da.call(e)==="[object Function]"}function Nc(e){return Is(e)&&za(e.pipe)}function Rc(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Da.call(e)===t||za(e.toString)&&e.toString()===t)}var Mc=_t("URLSearchParams");function Fc(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Lc(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Ua(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),$a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function na(){var e={};function t(a,i){On(e[i])&&On(a)?e[i]=na(e[i],a):On(a)?e[i]=na({},a):$a(a)?e[i]=a.slice():e[i]=a}for(var n=0,r=arguments.length;n<r;n++)Ua(arguments[n],t);return e}function Dc(e,t,n){return Ua(t,function(a,i){n&&typeof a=="function"?e[i]=Ec(a,n):e[i]=a}),e}function jc(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function $c(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function zc(e,t,n){var r,a,i,o={};t=t||{};do{for(r=Object.getOwnPropertyNames(e),a=r.length;a-- >0;)i=r[a],o[i]||(t[i]=e[i],o[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function Uc(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return r!==-1&&r===n}function Bc(e){if(!e)return null;var t=e.length;if(Dn(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var Hc=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),oe={isArray:$a,isArrayBuffer:Ps,isBuffer:Ac,isFormData:Rc,isArrayBufferView:Cc,isString:Oc,isNumber:kc,isObject:Is,isPlainObject:On,isUndefined:Dn,isDate:Tc,isFile:Sc,isBlob:Pc,isFunction:za,isStream:Nc,isURLSearchParams:Mc,isStandardBrowserEnv:Lc,forEach:Ua,merge:na,extend:Dc,trim:Fc,stripBOM:jc,inherits:$c,toFlatObject:zc,kindOf:ja,kindOfTest:_t,endsWith:Uc,toArray:Bc,isTypedArray:Hc,isFileList:Ic},Ot=oe;function Di(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ns=function(t,n,r){if(!n)return t;var a;if(r)a=r(n);else if(Ot.isURLSearchParams(n))a=n.toString();else{var i=[];Ot.forEach(n,function(l,u){l===null||typeof l>"u"||(Ot.isArray(l)?u=u+"[]":l=[l],Ot.forEach(l,function(p){Ot.isDate(p)?p=p.toISOString():Ot.isObject(p)&&(p=JSON.stringify(p)),i.push(Di(u)+"="+Di(p))}))}),a=i.join("&")}if(a){var o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t},Wc=oe;function rr(){this.handlers=[]}rr.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};rr.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};rr.prototype.forEach=function(t){Wc.forEach(this.handlers,function(r){r!==null&&t(r)})};var qc=rr,Yc=oe,Kc=function(t,n){Yc.forEach(t,function(a,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(t[n]=a,delete t[i])})},Rs=oe;function $t(e,t,n,r,a){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}Rs.inherits($t,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ms=$t.prototype,Fs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Fs[e]={value:e}});Object.defineProperties($t,Fs);Object.defineProperty(Ms,"isAxiosError",{value:!0});$t.from=function(e,t,n,r,a,i){var o=Object.create(Ms);return Rs.toFlatObject(e,o,function(l){return l!==Error.prototype}),$t.call(o,e.message,t,n,r,a),o.name=e.name,i&&Object.assign(o,i),o};var Wt=$t,Ls={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ce=oe;function Vc(e,t){t=t||new FormData;var n=[];function r(i){return i===null?"":Ce.isDate(i)?i.toISOString():Ce.isArrayBuffer(i)||Ce.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function a(i,o){if(Ce.isPlainObject(i)||Ce.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),Ce.forEach(i,function(l,u){if(!Ce.isUndefined(l)){var c=o?o+"."+u:u,p;if(l&&!o&&typeof l=="object"){if(Ce.endsWith(u,"{}"))l=JSON.stringify(l);else if(Ce.endsWith(u,"[]")&&(p=Ce.toArray(l))){p.forEach(function(m){!Ce.isUndefined(m)&&t.append(c,r(m))});return}}a(l,c)}}),n.pop()}else t.append(o,r(i))}return a(e),t}var Ds=Vc,_r,ji;function Xc(){if(ji)return _r;ji=1;var e=Wt;return _r=function(n,r,a){var i=a.config.validateStatus;!a.status||!i||i(a.status)?n(a):r(new e("Request failed with status code "+a.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},_r}var Er,$i;function Jc(){if($i)return Er;$i=1;var e=oe;return Er=e.isStandardBrowserEnv()?function(){return{write:function(r,a,i,o,s,l){var u=[];u.push(r+"="+encodeURIComponent(a)),e.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),e.isString(o)&&u.push("path="+o),e.isString(s)&&u.push("domain="+s),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Er}var Gc=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},Qc=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},Zc=Gc,ed=Qc,js=function(t,n){return t&&!Zc(n)?ed(t,n):n},Ar,zi;function td(){if(zi)return Ar;zi=1;var e=oe,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Ar=function(r){var a={},i,o,s;return r&&e.forEach(r.split(`
`),function(u){if(s=u.indexOf(":"),i=e.trim(u.substr(0,s)).toLowerCase(),o=e.trim(u.substr(s+1)),i){if(a[i]&&t.indexOf(i)>=0)return;i==="set-cookie"?a[i]=(a[i]?a[i]:[]).concat([o]):a[i]=a[i]?a[i]+", "+o:o}}),a},Ar}var Cr,Ui;function nd(){if(Ui)return Cr;Ui=1;var e=oe;return Cr=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function i(o){var s=o;return n&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=i(window.location.href),function(s){var l=e.isString(s)?i(s):s;return l.protocol===a.protocol&&l.host===a.host}}():function(){return function(){return!0}}(),Cr}var Or,Bi;function ar(){if(Bi)return Or;Bi=1;var e=Wt,t=oe;function n(r){e.call(this,r==null?"canceled":r,e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(n,e,{__CANCEL__:!0}),Or=n,Or}var kr,Hi;function rd(){return Hi||(Hi=1,kr=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}),kr}var Tr,Wi;function qi(){if(Wi)return Tr;Wi=1;var e=oe,t=Xc(),n=Jc(),r=Ns,a=js,i=td(),o=nd(),s=Ls,l=Wt,u=ar(),c=rd();return Tr=function(m){return new Promise(function(F,L){var S=m.data,y=m.headers,k=m.responseType,R;function $(){m.cancelToken&&m.cancelToken.unsubscribe(R),m.signal&&m.signal.removeEventListener("abort",R)}e.isFormData(S)&&e.isStandardBrowserEnv()&&delete y["Content-Type"];var C=new XMLHttpRequest;if(m.auth){var te=m.auth.username||"",se=m.auth.password?unescape(encodeURIComponent(m.auth.password)):"";y.Authorization="Basic "+btoa(te+":"+se)}var ce=a(m.baseURL,m.url);C.open(m.method.toUpperCase(),r(ce,m.params,m.paramsSerializer),!0),C.timeout=m.timeout;function ne(){if(!!C){var re="getAllResponseHeaders"in C?i(C.getAllResponseHeaders()):null,Ee=!k||k==="text"||k==="json"?C.responseText:C.response,Fe={data:Ee,status:C.status,statusText:C.statusText,headers:re,config:m,request:C};t(function(Q){F(Q),$()},function(Q){L(Q),$()},Fe),C=null}}if("onloadend"in C?C.onloadend=ne:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(ne)},C.onabort=function(){!C||(L(new l("Request aborted",l.ECONNABORTED,m,C)),C=null)},C.onerror=function(){L(new l("Network Error",l.ERR_NETWORK,m,C,C)),C=null},C.ontimeout=function(){var Ee=m.timeout?"timeout of "+m.timeout+"ms exceeded":"timeout exceeded",Fe=m.transitional||s;m.timeoutErrorMessage&&(Ee=m.timeoutErrorMessage),L(new l(Ee,Fe.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,m,C)),C=null},e.isStandardBrowserEnv()){var Qe=(m.withCredentials||o(ce))&&m.xsrfCookieName?n.read(m.xsrfCookieName):void 0;Qe&&(y[m.xsrfHeaderName]=Qe)}"setRequestHeader"in C&&e.forEach(y,function(Ee,Fe){typeof S>"u"&&Fe.toLowerCase()==="content-type"?delete y[Fe]:C.setRequestHeader(Fe,Ee)}),e.isUndefined(m.withCredentials)||(C.withCredentials=!!m.withCredentials),k&&k!=="json"&&(C.responseType=m.responseType),typeof m.onDownloadProgress=="function"&&C.addEventListener("progress",m.onDownloadProgress),typeof m.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",m.onUploadProgress),(m.cancelToken||m.signal)&&(R=function(re){!C||(L(!re||re&&re.type?new u:re),C.abort(),C=null)},m.cancelToken&&m.cancelToken.subscribe(R),m.signal&&(m.signal.aborted?R():m.signal.addEventListener("abort",R))),S||(S=null);var Me=c(ce);if(Me&&["http","https","file"].indexOf(Me)===-1){L(new l("Unsupported protocol "+Me+":",l.ERR_BAD_REQUEST,m));return}C.send(S)})},Tr}var Sr,Yi;function ad(){return Yi||(Yi=1,Sr=null),Sr}var Z=oe,Ki=Kc,Vi=Wt,id=Ls,od=Ds,sd={"Content-Type":"application/x-www-form-urlencoded"};function Xi(e,t){!Z.isUndefined(e)&&Z.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function ld(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=qi()),e}function fd(e,t,n){if(Z.isString(e))try{return(t||JSON.parse)(e),Z.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var ir={transitional:id,adapter:ld(),transformRequest:[function(t,n){if(Ki(n,"Accept"),Ki(n,"Content-Type"),Z.isFormData(t)||Z.isArrayBuffer(t)||Z.isBuffer(t)||Z.isStream(t)||Z.isFile(t)||Z.isBlob(t))return t;if(Z.isArrayBufferView(t))return t.buffer;if(Z.isURLSearchParams(t))return Xi(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r=Z.isObject(t),a=n&&n["Content-Type"],i;if((i=Z.isFileList(t))||r&&a==="multipart/form-data"){var o=this.env&&this.env.FormData;return od(i?{"files[]":t}:t,o&&new o)}else if(r||a==="application/json")return Xi(n,"application/json"),fd(t);return t}],transformResponse:[function(t){var n=this.transitional||ir.transitional,r=n&&n.silentJSONParsing,a=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||a&&Z.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(i)throw o.name==="SyntaxError"?Vi.from(o,Vi.ERR_BAD_RESPONSE,this,null,this.response):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ad()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Z.forEach(["delete","get","head"],function(t){ir.headers[t]={}});Z.forEach(["post","put","patch"],function(t){ir.headers[t]=Z.merge(sd)});var Ba=ir,ud=oe,cd=Ba,dd=function(t,n,r){var a=this||cd;return ud.forEach(r,function(o){t=o.call(a,t,n)}),t},Pr,Ji;function $s(){return Ji||(Ji=1,Pr=function(t){return!!(t&&t.__CANCEL__)}),Pr}var Gi=oe,Ir=dd,md=$s(),pd=Ba,hd=ar();function Nr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hd}var vd=function(t){Nr(t),t.headers=t.headers||{},t.data=Ir.call(t,t.data,t.headers,t.transformRequest),t.headers=Gi.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),Gi.forEach(["delete","get","head","post","put","patch","common"],function(a){delete t.headers[a]});var n=t.adapter||pd.adapter;return n(t).then(function(a){return Nr(t),a.data=Ir.call(t,a.data,a.headers,t.transformResponse),a},function(a){return md(a)||(Nr(t),a&&a.response&&(a.response.data=Ir.call(t,a.response.data,a.response.headers,t.transformResponse))),Promise.reject(a)})},ge=oe,zs=function(t,n){n=n||{};var r={};function a(c,p){return ge.isPlainObject(c)&&ge.isPlainObject(p)?ge.merge(c,p):ge.isPlainObject(p)?ge.merge({},p):ge.isArray(p)?p.slice():p}function i(c){if(ge.isUndefined(n[c])){if(!ge.isUndefined(t[c]))return a(void 0,t[c])}else return a(t[c],n[c])}function o(c){if(!ge.isUndefined(n[c]))return a(void 0,n[c])}function s(c){if(ge.isUndefined(n[c])){if(!ge.isUndefined(t[c]))return a(void 0,t[c])}else return a(void 0,n[c])}function l(c){if(c in n)return a(t[c],n[c]);if(c in t)return a(void 0,t[c])}var u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l};return ge.forEach(Object.keys(t).concat(Object.keys(n)),function(p){var m=u[p]||i,_=m(p);ge.isUndefined(_)&&m!==l||(r[p]=_)}),r},Rr,Qi;function Us(){return Qi||(Qi=1,Rr={version:"0.27.2"}),Rr}var gd=Us().version,at=Wt,Ha={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Ha[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var Zi={};Ha.transitional=function(t,n,r){function a(i,o){return"[Axios v"+gd+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,s){if(t===!1)throw new at(a(o," has been removed"+(n?" in "+n:"")),at.ERR_DEPRECATED);return n&&!Zi[o]&&(Zi[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function bd(e,t,n){if(typeof e!="object")throw new at("options must be an object",at.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),a=r.length;a-- >0;){var i=r[a],o=t[i];if(o){var s=e[i],l=s===void 0||o(s,i,e);if(l!==!0)throw new at("option "+i+" must be "+l,at.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new at("Unknown option "+i,at.ERR_BAD_OPTION)}}var yd={assertOptions:bd,validators:Ha},Bs=oe,wd=Ns,eo=qc,to=vd,or=zs,xd=js,Hs=yd,kt=Hs.validators;function zt(e){this.defaults=e,this.interceptors={request:new eo,response:new eo}}zt.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=or(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&Hs.assertOptions(r,{silentJSONParsing:kt.transitional(kt.boolean),forcedJSONParsing:kt.transitional(kt.boolean),clarifyTimeoutError:kt.transitional(kt.boolean)},!1);var a=[],i=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(i=i&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});var o=[];this.interceptors.response.forEach(function(_){o.push(_.fulfilled,_.rejected)});var s;if(!i){var l=[to,void 0];for(Array.prototype.unshift.apply(l,a),l=l.concat(o),s=Promise.resolve(n);l.length;)s=s.then(l.shift(),l.shift());return s}for(var u=n;a.length;){var c=a.shift(),p=a.shift();try{u=c(u)}catch(m){p(m);break}}try{s=to(u)}catch(m){return Promise.reject(m)}for(;o.length;)s=s.then(o.shift(),o.shift());return s};zt.prototype.getUri=function(t){t=or(this.defaults,t);var n=xd(t.baseURL,t.url);return wd(n,t.params,t.paramsSerializer)};Bs.forEach(["delete","get","head","options"],function(t){zt.prototype[t]=function(n,r){return this.request(or(r||{},{method:t,url:n,data:(r||{}).data}))}});Bs.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(or(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}zt.prototype[t]=n(),zt.prototype[t+"Form"]=n(!0)});var _d=zt,Mr,no;function Ed(){if(no)return Mr;no=1;var e=ar();function t(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var a=this;this.promise.then(function(i){if(!!a._listeners){var o,s=a._listeners.length;for(o=0;o<s;o++)a._listeners[o](i);a._listeners=null}}),this.promise.then=function(i){var o,s=new Promise(function(l){a.subscribe(l),o=l}).then(i);return s.cancel=function(){a.unsubscribe(o)},s},n(function(o){a.reason||(a.reason=new e(o),r(a.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},t.prototype.unsubscribe=function(r){if(!!this._listeners){var a=this._listeners.indexOf(r);a!==-1&&this._listeners.splice(a,1)}},t.source=function(){var r,a=new t(function(o){r=o});return{token:a,cancel:r}},Mr=t,Mr}var Fr,ro;function Ad(){return ro||(ro=1,Fr=function(t){return function(r){return t.apply(null,r)}}),Fr}var Lr,ao;function Cd(){if(ao)return Lr;ao=1;var e=oe;return Lr=function(n){return e.isObject(n)&&n.isAxiosError===!0},Lr}var io=oe,Od=Ss,kn=_d,kd=zs,Td=Ba;function Ws(e){var t=new kn(e),n=Od(kn.prototype.request,t);return io.extend(n,kn.prototype,t),io.extend(n,t),n.create=function(a){return Ws(kd(e,a))},n}var he=Ws(Td);he.Axios=kn;he.CanceledError=ar();he.CancelToken=Ed();he.isCancel=$s();he.VERSION=Us().version;he.toFormData=Ds;he.AxiosError=Wt;he.Cancel=he.CanceledError;he.all=function(t){return Promise.all(t)};he.spread=Ad();he.isAxiosError=Cd();La.exports=he;La.exports.default=he;(function(e){e.exports=La.exports})(Ts);const Sd=_c(Ts.exports),Pd="3395abf18c3cb55a1d4cc2d506f9a298";async function Id({latitude:e,longitude:t}){return await Sd.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&units=metric&lang=pt_br&exclude=minutely&appid=${Pd}`)}const Nd={class:"wrapper"},Rd={data(){return{weather:null,tiemzone:null,dayPeriod:null,sunriseIn:null,sunsetIn:null,currentTime:null,errors:[]}},methods:{getWeather(e){Id(e.coords).then(t=>{const{data:n}=t;this.timezone=n.timezone,this.weather={current:n.current,hourly:n.hourly,daily:n.daily};const r=this.unixToTimestamp(this.weather.current.sunrise),a=this.unixToTimestamp(this.weather.current.sunset);this.sunriseIn=r.getHours(),this.sunsetIn=a.getHours()},t=>{console.log(t),this.setError({message:"N\xE3o foi poss\xEDvel obter as informa\xE7\xF5es sobre o clima."})})},setError(e){return console.log(e),this.errors.push(e.message)},unixToTimestamp(e){return new Date(e*1e3)},getCurrentTime(){const e=new Date,t=e.getHours();this.dayPeriod=this.getDayPeriod(t),this.currentTime=this.getFormattedTime(e)},getFormattedTime(e){const t=n=>n<10?"0"+n:n;return t(e.getHours())+":"+t(e.getMinutes())},getDayPeriod(e){return e>=this.sunriseIn&&e<this.sunriseIn+2?"--dawn":e>=this.sunriseIn+2&&e<12?"--morning":e>=12&&e<this.sunsetIn?"--afternoon":e>=this.sunsetIn&&e<this.sunsetIn+2?"--evening":"--night"}},mounted(){navigator.geolocation.watchPosition(this.getWeather,this.setError),setInterval(this.getCurrentTime,1e3)}},Md=Object.assign(Rd,{__name:"App",setup(e){return(t,n)=>{const r=Na("pulse-loader");return pe(),$e("section",Nd,[!t.weather&&t.errors.length==0?(pe(),An(r,{key:0,color:"var(--primary)",size:"32px"},null,8,["color"])):rn("",!0),t.weather&&t.errors.length==0?(pe(),An(hc,{key:1,dayPeriod:t.dayPeriod,weather:t.weather,timezone:t.timezone,unixToTimestamp:t.unixToTimestamp,getFormattedTime:t.getFormattedTime,currentTime:t.currentTime},null,8,["dayPeriod","weather","timezone","unixToTimestamp","getFormattedTime","currentTime"])):rn("",!0),t.errors.length>0?(pe(),An(xc,{key:2,errors:t.errors},null,8,["errors"])):rn("",!0)])}}}),Fd=nr(Md,[["__scopeId","data-v-56e94291"]]);const Ld={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},Dd={class:"v-spinner"};function jd(e,t,n,r,a,i){return Xf((pe(),$e("div",Dd,[z("div",{class:"v-pulse v-pulse1",style:vt([a.spinnerStyle,a.spinnerDelay1])},null,4),z("div",{class:"v-pulse v-pulse2",style:vt([a.spinnerStyle,a.spinnerDelay2])},null,4),z("div",{class:"v-pulse v-pulse3",style:vt([a.spinnerStyle,a.spinnerDelay3])},null,4)],512)),[[Xu,n.loading]])}const $d=nr(Ld,[["render",jd]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oo(Object(n),!0).forEach(function(r){Bd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function zd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function so(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ud(e,t,n){return t&&so(e.prototype,t),n&&so(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wa(e,t){return Wd(e)||Yd(e,t)||qs(e,t)||Vd()}function sr(e){return Hd(e)||qd(e)||qs(e)||Kd()}function Hd(e){if(Array.isArray(e))return ra(e)}function Wd(e){if(Array.isArray(e))return e}function qd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function qs(e,t){if(!!e){if(typeof e=="string")return ra(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ra(e,t)}}function ra(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lo=function(){},qa={},Ys={},Ks=null,Vs={mark:lo,measure:lo};try{typeof window<"u"&&(qa=window),typeof document<"u"&&(Ys=document),typeof MutationObserver<"u"&&(Ks=MutationObserver),typeof performance<"u"&&(Vs=performance)}catch{}var Xd=qa.navigator||{},fo=Xd.userAgent,uo=fo===void 0?"":fo,lt=qa,X=Ys,co=Ks,wn=Vs;lt.document;var Ge=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Xs=~uo.indexOf("MSIE")||~uo.indexOf("Trident/"),Ke="___FONT_AWESOME___",aa=16,Js="fa",Gs="svg-inline--fa",wt="data-fa-i2svg",ia="data-fa-pseudo-element",Jd="data-fa-pseudo-element-pending",Ya="data-prefix",Ka="data-icon",mo="fontawesome-i2svg",Gd="async",Qd=["HTML","HEAD","STYLE","SCRIPT"],Qs=function(){try{return!0}catch{return!1}}(),Va={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},$n={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Zs={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Zd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},em=/fa[srltdbk]?[\-\ ]/,el="fa-layers-text",tm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,nm={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},tl=[1,2,3,4,5,6,7,8,9,10],rm=tl.concat([11,12,13,14,15,16,17,18,19,20]),am=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},im=[].concat(sr(Object.keys($n)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY]).concat(tl.map(function(e){return"".concat(e,"x")})).concat(rm.map(function(e){return"w-".concat(e)})),nl=lt.FontAwesomeConfig||{};function om(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function sm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var lm=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lm.forEach(function(e){var t=Wa(e,2),n=t[0],r=t[1],a=sm(om(n));a!=null&&(nl[r]=a)})}var fm={familyPrefix:Js,styleDefault:"solid",replacementClass:Gs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},an=O(O({},fm),nl);an.autoReplaceSvg||(an.observeMutations=!1);var N={};Object.keys(an).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){an[e]=n,Tn.forEach(function(r){return r(N)})},get:function(){return an[e]}})});lt.FontAwesomeConfig=N;var Tn=[];function um(e){return Tn.push(e),function(){Tn.splice(Tn.indexOf(e),1)}}var tt=aa,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cm(e){if(!(!e||!Ge)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var dm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=dm[Math.random()*62|0];return t}function qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xa(e){return e.classList?qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function rl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(rl(e[n]),'" ')},"").trim()}function lr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ja(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function pm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function hm(e){var t=e.transform,n=e.width,r=n===void 0?aa:n,a=e.height,i=a===void 0?aa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Xs?l+="translate(".concat(t.x/tt-r/2,"em, ").concat(t.y/tt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/tt,"em), calc(-50% + ").concat(t.y/tt,"em)) "):l+="translate(".concat(t.x/tt,"em, ").concat(t.y/tt,"em) "),l+="scale(".concat(t.size/tt*(t.flipX?-1:1),", ").concat(t.size/tt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function al(){var e=Js,t=Gs,n=N.familyPrefix,r=N.replacementClass,a=vm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var po=!1;function Dr(){N.autoAddCss&&!po&&(cm(al()),po=!0)}var gm={mixout:function(){return{dom:{css:al,insertCss:Dr}}},hooks:function(){return{beforeDOMElementCreation:function(){Dr()},beforeI2svg:function(){Dr()}}}},Ve=lt||{};Ve[Ke]||(Ve[Ke]={});Ve[Ke].styles||(Ve[Ke].styles={});Ve[Ke].hooks||(Ve[Ke].hooks={});Ve[Ke].shims||(Ve[Ke].shims=[]);var Ie=Ve[Ke],il=[],bm=function e(){X.removeEventListener("DOMContentLoaded",e),zn=1,il.map(function(t){return t()})},zn=!1;Ge&&(zn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),zn||X.addEventListener("DOMContentLoaded",bm));function ym(e){!Ge||(zn?setTimeout(e,0):il.push(e))}function mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?rl(e):"<".concat(t," ").concat(mm(r),">").concat(i.map(mn).join(""),"</").concat(t,">")}function ho(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},jr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?wm(n,a):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function xm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function oa(e){var t=xm(e);return t.length===1?t[0].toString(16):null}function _m(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function sa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vo(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,vo(t)):Ie.styles[e]=O(O({},Ie.styles[e]||{}),i),e==="fas"&&sa("fa",t)}var on=Ie.styles,Em=Ie.shims,Am=Object.values(Zs),Ga=null,ol={},sl={},ll={},fl={},ul={},Cm=Object.keys(Va);function Om(e){return~im.indexOf(e)}function km(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Om(a)?a:null}var cl=function(){var t=function(i){return jr(on,function(o,s,l){return o[l]=jr(s,i,{}),o},{})};ol=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),sl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ul=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in on||N.autoFetchSvg,r=jr(Em,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ll=r.names,fl=r.unicodes,Ga=fr(N.styleDefault)};um(function(e){Ga=fr(e.styleDefault)});cl();function Qa(e,t){return(ol[e]||{})[t]}function Tm(e,t){return(sl[e]||{})[t]}function Pt(e,t){return(ul[e]||{})[t]}function dl(e){return ll[e]||{prefix:null,iconName:null}}function Sm(e){var t=fl[e],n=Qa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Ga}var Za=function(){return{prefix:null,iconName:null,rest:[]}};function fr(e){var t=Va[e],n=$n[e]||$n[t],r=e in Ie.styles?e:null;return n||r||null}function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=km(N.familyPrefix,s);if(on[s]?(s=Am.includes(s)?Zd[s]:s,a=s,o.prefix=s):Cm.indexOf(s)>-1?(a=s,o.prefix=fr(s)):l?o.iconName=l:s!==N.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?dl(o.iconName):{},c=Pt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!on.far&&on.fas&&!N.autoFetchSvg&&(o.prefix="fas")}return o},Za());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ft()||"fas"),i}var Pm=function(){function e(){zd(this,e),this.definitions={}}return Ud(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),sa(s,o[s]);var l=Zs[s];l&&sa(l,o[s]),cl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(p){typeof p=="string"&&(n[s][p]=u)}),n[s][l]=u}),n}}]),e}(),go=[],It={},Lt={},Im=Object.keys(Lt);function Nm(e,t){var n=t.mixoutsTo;return go=e,It={},Object.keys(Lt).forEach(function(r){Im.indexOf(r)===-1&&delete Lt[r]}),go.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){It[o]||(It[o]=[]),It[o].push(i[o])})}r.provides&&r.provides(Lt)}),n}function la(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function Xe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function fa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(!!t)return t=Pt(n,t)||t,ho(ml.definitions,n,t)||ho(Ie.styles,n,t)}var ml=new Pm,Rm=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,xt("noAuto")},Mm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge?(xt("beforeI2svg",t),Xe("pseudoElements2svg",t),Xe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,ym(function(){Lm({autoReplaceSvgRoot:n}),xt("watch",t)})}},Fm={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=fr(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.familyPrefix,"-"))>-1||t.match(em))){var a=ur(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ft(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ft();return{prefix:i,iconName:Pt(i,t)||t}}}},we={noAuto:Rm,config:N,dom:Mm,parse:Fm,library:ml,findIconDefinition:fa,toHtml:mn},Lm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ie.styles).length>0||N.autoFetchSvg)&&Ge&&N.autoReplaceSvg&&we.dom.i2svg({node:r})};function cr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ge){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Dm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ja(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=lr(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function jm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ei(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,p=e.extra,m=e.watchable,_=m===void 0?!1:m,F=r.found?r:n,L=F.width,S=F.height,y=a==="fak",k=[N.replacementClass,i?"".concat(N.familyPrefix,"-").concat(i):""].filter(function(ne){return p.classes.indexOf(ne)===-1}).filter(function(ne){return ne!==""||!!ne}).concat(p.classes).join(" "),R={children:[],attributes:O(O({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(S)})},$=y&&!~p.classes.indexOf("fa-fw")?{width:"".concat(L/S*16*.0625,"em")}:{};_&&(R.attributes[wt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||dn())},children:[l]}),delete R.attributes.title);var C=O(O({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},$),p.styles)}),te=r.found&&n.found?Xe("generateAbstractMask",C)||{children:[],attributes:{}}:Xe("generateAbstractIcon",C)||{children:[],attributes:{}},se=te.children,ce=te.attributes;return C.children=se,C.attributes=ce,s?jm(C):Dm(C)}function bo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[wt]="");var c=O({},o.styles);Ja(a)&&(c.transform=hm({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var p=lr(c);p.length>0&&(u.style=p);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function $m(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=lr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $r=Ie.styles;function ua(e){var t=e[0],n=e[1],r=e.slice(4),a=Wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.familyPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var zm={found:!1,width:512,height:512};function Um(e,t){!Qs&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ca(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=ft()),new Promise(function(r,a){if(Xe("missingIconAbstract"),n==="fa"){var i=dl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&$r[t]&&$r[t][e]){var o=$r[t][e];return r(ua(o))}Um(e,t),r(O(O({},zm),{},{icon:N.showMissingIcons&&e?Xe("missingIconAbstract")||{}:{}}))})}var yo=function(){},da=N.measurePerformance&&wn&&wn.mark&&wn.measure?wn:{mark:yo,measure:yo},Zt='FA "6.1.2"',Bm=function(t){return da.mark("".concat(Zt," ").concat(t," begins")),function(){return pl(t)}},pl=function(t){da.mark("".concat(Zt," ").concat(t," ends")),da.measure("".concat(Zt," ").concat(t),"".concat(Zt," ").concat(t," begins"),"".concat(Zt," ").concat(t," ends"))},ti={begin:Bm,end:pl},Sn=function(){};function wo(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function Hm(e){var t=e.getAttribute?e.getAttribute(Ya):null,n=e.getAttribute?e.getAttribute(Ka):null;return t&&n}function Wm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function qm(){if(N.autoReplaceSvg===!0)return Pn.replace;var e=Pn[N.autoReplaceSvg];return e||Pn.replace}function Ym(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Km(e){return X.createElement(e)}function hl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ym:Km:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(hl(o,{ceFn:r}))}),a}function Vm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(hl(a),n)}),n.getAttribute(wt)===null&&N.keepOriginalSource){var r=X.createComment(Vm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xa(n).indexOf(N.replacementClass))return Pn.replace(t);var a=new RegExp("".concat(N.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return mn(s)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=o}};function xo(e){e()}function vl(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=xo;N.mutateApproach===Gd&&(r=lt.requestAnimationFrame||xo),r(function(){var a=qm(),i=ti.begin("mutate");e.map(a),i(),n()})}}var ni=!1;function gl(){ni=!0}function ma(){ni=!1}var Un=null;function _o(e){if(!!co&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Un=new co(function(u){if(!ni){var c=ft();qt(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!wo(p.addedNodes[0])&&(N.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&N.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&wo(p.target)&&~am.indexOf(p.attributeName))if(p.attributeName==="class"&&Hm(p.target)){var m=ur(Xa(p.target)),_=m.prefix,F=m.iconName;p.target.setAttribute(Ya,_||c),F&&p.target.setAttribute(Ka,F)}else Wm(p.target)&&a(p.target)})}}),Ge&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xm(){!Un||Un.disconnect()}function Jm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Gm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ur(Xa(e));return a.prefix||(a.prefix=ft()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Tm(a.prefix,e.innerText)||Qa(a.prefix,oa(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Qm(e){var t=qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Zm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Qm(e),s=la("parseNodeAttributes",{},e),l=t.styleParser?Jm(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ep=Ie.styles;function bl(e){var t=N.autoReplaceSvg==="nest"?Eo(e,{styleParser:!1}):Eo(e);return~t.extra.classes.indexOf(el)?Xe("generateLayersText",e,t):Xe("generateSvgReplacementMutation",e,t)}function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ge)return Promise.resolve();var n=X.documentElement.classList,r=function(p){return n.add("".concat(mo,"-").concat(p))},a=function(p){return n.remove("".concat(mo,"-").concat(p))},i=N.autoFetchSvg?Object.keys(Va):Object.keys(ep);i.includes("fa")||i.push("fa");var o=[".".concat(el,":not([").concat(wt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(wt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ti.begin("onTree"),u=s.reduce(function(c,p){try{var m=bl(p);m&&c.push(m)}catch(_){Qs||_.name==="MissingIcon"&&console.error(_)}return c},[]);return new Promise(function(c,p){Promise.all(u).then(function(m){vl(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(m){l(),p(m)})})}function tp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bl(e).then(function(n){n&&vl([n],t)})}function np(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:fa(a||{})),e(r,O(O({},n),{},{mask:a}))}}var rp=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ue:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,p=n.title,m=p===void 0?null:p,_=n.titleId,F=_===void 0?null:_,L=n.classes,S=L===void 0?[]:L,y=n.attributes,k=y===void 0?{}:y,R=n.styles,$=R===void 0?{}:R;if(!!t){var C=t.prefix,te=t.iconName,se=t.icon;return cr(O({type:"icon"},t),function(){return xt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(m?k["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(F||dn()):(k["aria-hidden"]="true",k.focusable="false")),ei({icons:{main:ua(se),mask:l?ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:te,transform:O(O({},Ue),a),symbol:o,title:m,maskId:c,titleId:F,extra:{attributes:k,styles:$,classes:S}})})}},ap={mixout:function(){return{icon:np(rp)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ao,n.nodeCallback=tp,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ao(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,p=r.maskId,m=r.extra;return new Promise(function(_,F){Promise.all([ca(a,s),c.iconName?ca(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var S=Wa(L,2),y=S[0],k=S[1];_([n,ei({icons:{main:y,mask:k},prefix:s,iconName:a,transform:l,symbol:u,maskId:p,title:i,titleId:o,extra:m,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=lr(s);l.length>0&&(a.style=l);var u;return Ja(o)&&(u=Xe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},ip={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return cr({type:"layer"},function(){xt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.familyPrefix,"-layers")].concat(sr(i)).join(" ")},children:o}]})}}}},op={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,p=c===void 0?{}:c;return cr({type:"counter",content:n},function(){return xt("beforeDOMElementCreation",{content:n,params:r}),$m({content:n.toString(),title:i,extra:{attributes:u,styles:p,classes:["".concat(N.familyPrefix,"-layers-counter")].concat(sr(s))}})})}}}},sp={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ue:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,p=c===void 0?{}:c,m=r.styles,_=m===void 0?{}:m;return cr({type:"text",content:n},function(){return xt("beforeDOMElementCreation",{content:n,params:r}),bo({content:n,transform:O(O({},Ue),i),title:s,extra:{attributes:p,styles:_,classes:["".concat(N.familyPrefix,"-layers-text")].concat(sr(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Xs){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},lp=new RegExp('"',"ug"),Co=[1105920,1112319];function fp(e){var t=e.replace(lp,""),n=_m(t,0),r=n>=Co[0]&&n<=Co[1],a=t.length===2?t[0]===t[1]:!1;return{value:oa(a?t[0]:t),isSecondary:r||a}}function Oo(e,t){var n="".concat(Jd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=qt(e.children),o=i.filter(function(te){return te.getAttribute(ia)===t})[0],s=lt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(tm),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var p=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?$n[l[2].toLowerCase()]:nm[u],_=fp(p),F=_.value,L=_.isSecondary,S=l[0].startsWith("FontAwesome"),y=Qa(m,F),k=y;if(S){var R=Sm(F);R.iconName&&R.prefix&&(y=R.iconName,m=R.prefix)}if(y&&!L&&(!o||o.getAttribute(Ya)!==m||o.getAttribute(Ka)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var $=Zm(),C=$.extra;C.attributes[ia]=t,ca(y,m).then(function(te){var se=ei(O(O({},$),{},{icons:{main:te,mask:Za()},prefix:m,iconName:k,extra:C,watchable:!0})),ce=X.createElement("svg");t==="::before"?e.insertBefore(ce,e.firstChild):e.appendChild(ce),ce.outerHTML=se.map(function(ne){return mn(ne)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function up(e){return Promise.all([Oo(e,"::before"),Oo(e,"::after")])}function cp(e){return e.parentNode!==document.head&&!~Qd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ia)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ko(e){if(!!Ge)return new Promise(function(t,n){var r=qt(e.querySelectorAll("*")).filter(cp).map(up),a=ti.begin("searchPseudoElements");gl(),Promise.all(r).then(function(){a(),ma(),t()}).catch(function(){a(),ma(),n()})})}var dp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ko,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;N.searchPseudoElements&&ko(a)}}},To=!1,mp={mixout:function(){return{dom:{unwatch:function(){gl(),To=!0}}}},hooks:function(){return{bootstrap:function(){_o(la("mutationObserverCallbacks",{}))},noAuto:function(){Xm()},watch:function(n){var r=n.observeMutationsRoot;To?ma():_o(la("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},So=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},pp={mixout:function(){return{parse:{transform:function(n){return So(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=So(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:p,path:m};return{tag:"g",attributes:O({},_.outer),children:[{tag:"g",attributes:O({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),_.path)}]}]}}}},zr={x:0,y:0,width:"100%",height:"100%"};function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hp(e){return e.tag==="g"?e.children:[e]}var vp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ur(a.split(" ").map(function(o){return o.trim()})):Za();return i.prefix||(i.prefix=ft()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,p=o.width,m=o.icon,_=pm({transform:l,containerWidth:p,iconWidth:u}),F={tag:"rect",attributes:O(O({},zr),{},{fill:"white"})},L=c.children?{children:c.children.map(Po)}:{},S={tag:"g",attributes:O({},_.inner),children:[Po(O({tag:c.tag,attributes:O(O({},c.attributes),_.path)},L))]},y={tag:"g",attributes:O({},_.outer),children:[S]},k="mask-".concat(s||dn()),R="clip-".concat(s||dn()),$={tag:"mask",attributes:O(O({},zr),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:hp(m)},$]};return r.push(C,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(k,")")},zr)}),{children:r,attributes:a}}}},gp={provides:function(t){var n=!1;lt.matchMedia&&(n=lt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},yp=[gm,ap,ip,op,sp,dp,mp,pp,vp,gp,bp];Nm(yp,{mixoutsTo:we});we.noAuto;var yl=we.config,dr=we.library;we.dom;var Bn=we.parse;we.findIconDefinition;we.toHtml;var wp=we.icon;we.layer;var xp=we.text;we.counter;function Io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Io(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Io(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _p(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ep(e,t){if(e==null)return{};var n=_p(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function pa(e){return Ap(e)||Cp(e)||Op(e)||kp()}function Ap(e){if(Array.isArray(e))return ha(e)}function Cp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Op(e,t){if(!!e){if(typeof e=="string")return ha(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ha(e,t)}}function ha(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wl={exports:{}};(function(e){(function(t){var n=function(y,k,R){if(!u(k)||p(k)||m(k)||_(k)||l(k))return k;var $,C=0,te=0;if(c(k))for($=[],te=k.length;C<te;C++)$.push(n(y,k[C],R));else{$={};for(var se in k)Object.prototype.hasOwnProperty.call(k,se)&&($[y(se,R)]=n(y,k[se],R))}return $},r=function(y,k){k=k||{};var R=k.separator||"_",$=k.split||/(?=[A-Z])/;return y.split($).join(R)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(k,R){return R?R.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var k=a(y);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(y,k){return r(y,k).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},p=function(y){return s.call(y)=="[object Date]"},m=function(y){return s.call(y)=="[object RegExp]"},_=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},L=function(y,k){var R=k&&"process"in k?k.process:k;return typeof R!="function"?y:function($,C){return R($,y,C)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,k){return n(L(a,k),y)},decamelizeKeys:function(y,k){return n(L(o,k),y,k)},pascalizeKeys:function(y,k){return n(L(i,k),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(Tp)})(wl);var Sp=wl.exports,Pp=["class","style"];function Ip(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Sp.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Np(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ri(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=Np(c);break;case"style":l.style=Ip(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ep(n,Pp);return Cs(e.tag,Te(Te(Te({},t),{},{class:a.class,style:Te(Te({},a.style),o)},a.attrs),s),r)}var xl=!1;try{xl=!0}catch{}function Rp(){if(!xl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function Mp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function No(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bn.icon)return Bn.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Fp=Ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=_e(function(){return No(t.icon)}),i=_e(function(){return sn("classes",Mp(t))}),o=_e(function(){return sn("transform",typeof t.transform=="string"?Bn.transform(t.transform):t.transform)}),s=_e(function(){return sn("mask",No(t.mask))}),l=_e(function(){return wp(a.value,Te(Te(Te(Te({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});_n(l,function(c){if(!c)return Rp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=_e(function(){return l.value?ri(l.value.abstract[0],{},r):null});return function(){return u.value}}});Ia({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=yl.familyPrefix,i=_e(function(){return["".concat(a,"-layers")].concat(pa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Cs("div",{class:i.value},r.default?r.default():[])}}});Ia({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=yl.familyPrefix,i=_e(function(){return sn("classes",[].concat(pa(t.counter?["".concat(a,"-layers-counter")]:[]),pa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=_e(function(){return sn("transform",typeof t.transform=="string"?Bn.transform(t.transform):t.transform)}),s=_e(function(){var u=xp(t.value.toString(),Te(Te({},o.value),i.value)),c=u.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=_e(function(){return ri(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Lp={prefix:"fas",iconName:"bug",icon:[512,512,[],"f188","M352 96V99.56C352 115.3 339.3 128 323.6 128H188.4C172.7 128 159.1 115.3 159.1 99.56V96C159.1 42.98 202.1 0 255.1 0C309 0 352 42.98 352 96zM41.37 105.4C53.87 92.88 74.13 92.88 86.63 105.4L150.6 169.4C151.3 170 151.9 170.7 152.5 171.4C166.8 164.1 182.9 160 199.1 160H312C329.1 160 345.2 164.1 359.5 171.4C360.1 170.7 360.7 170 361.4 169.4L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L406.6 214.6C405.1 215.3 405.3 215.9 404.6 216.5C410.7 228.5 414.6 241.9 415.7 256H480C497.7 256 512 270.3 512 288C512 305.7 497.7 320 480 320H416C416 344.6 410.5 367.8 400.6 388.6C402.7 389.9 404.8 391.5 406.6 393.4L470.6 457.4C483.1 469.9 483.1 490.1 470.6 502.6C458.1 515.1 437.9 515.1 425.4 502.6L362.3 439.6C337.8 461.4 306.5 475.8 272 479.2V240C272 231.2 264.8 224 255.1 224C247.2 224 239.1 231.2 239.1 240V479.2C205.5 475.8 174.2 461.4 149.7 439.6L86.63 502.6C74.13 515.1 53.87 515.1 41.37 502.6C28.88 490.1 28.88 469.9 41.37 457.4L105.4 393.4C107.2 391.5 109.3 389.9 111.4 388.6C101.5 367.8 96 344.6 96 320H32C14.33 320 0 305.7 0 288C0 270.3 14.33 256 32 256H96.3C97.38 241.9 101.3 228.5 107.4 216.5C106.7 215.9 106 215.3 105.4 214.6L41.37 150.6C28.88 138.1 28.88 117.9 41.37 105.4H41.37z"]},Dp={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z"]},jp={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"]},$p={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"]};dr.add($p);dr.add(Dp);dr.add(jp);dr.add(Lp);Qu(Fd).component("font-awesome-icon",Fp).component("pulse-loader",$d).mount("#app");
