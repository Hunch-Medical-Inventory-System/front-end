import{p as i,ac as v,e as r,a_ as l,aw as k,a$ as h,b0 as S,b1 as P,b2 as $,aT as B,j as u,P as I,m as N,b as V,c as T,g as _,r as R,d as w,b3 as F,t as E,h as O,b4 as j,b5 as D,i as U}from"./index-wuCDMK4L.js";const L=(e,n)=>{const s=e.__vccOpts||e;for(const[t,a]of n)s[t]=a;return s},M=i({border:[Boolean,Number,String]},"border");function Q(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{borderClasses:r(()=>{const t=l(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))a.push(`border-${o}`);return a})}}function x(e){return k(()=>{const n=[],s={};if(e.value.background)if(h(e.value.background)){if(s.backgroundColor=e.value.background,!e.value.text&&S(e.value.background)){const t=P(e.value.background);if(t.a==null||t.a===1){const a=$(t);s.color=a,s.caretColor=a}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(h(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function q(e,n){const s=r(()=>({text:l(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=x(s);return{textColorClasses:t,textColorStyles:a}}function W(e,n){const s=r(()=>({background:l(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=x(s);return{backgroundColorClasses:t,backgroundColorStyles:a}}const X=i({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Y(e){return{elevationClasses:r(()=>{const s=l(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const Z=i({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function p(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{roundedClasses:r(()=>{const t=l(e)?e.value:e.rounded,a=l(e)?e.value:e.tile,o=[];if(t===!0||t==="")o.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))o.push(`rounded-${c}`);else(a||t===!1)&&o.push("rounded-0");return o})}}const A=["x-small","small","default","large","x-large"],G=i({size:{type:[String,Number],default:"default"}},"size");function H(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return k(()=>{let s,t;return B(A,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:u(e.size),height:u(e.size)}),{sizeClasses:s,sizeStyles:t}})}const J=i({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:I,...N(),...G(),...V({tag:"i"}),...T()},"VIcon"),ee=_()({name:"VIcon",props:J(),setup(e,n){let{attrs:s,slots:t}=n;const a=R(),{themeClasses:o}=w(e),{iconData:c}=F(r(()=>a.value||e.icon)),{sizeClasses:b}=H(e),{textColorClasses:y,textColorStyles:z}=q(E(e,"color"));return O(()=>{var C,m;const f=(C=t.default)==null?void 0:C.call(t);f&&(a.value=(m=j(f).filter(g=>g.type===D&&g.children&&typeof g.children=="string")[0])==null?void 0:m.children);const d=!!(s.onClick||s.onClickOnce);return U(c.value.component,{tag:e.tag,icon:c.value.icon,class:["v-icon","notranslate",o.value,b.value,y.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[b.value?void 0:{fontSize:u(e.size),height:u(e.size),width:u(e.size)},z.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}});export{ee as V,L as _,X as a,Z as b,Q as c,Y as d,p as e,G as f,H as g,q as h,x as i,M as m,W as u};
