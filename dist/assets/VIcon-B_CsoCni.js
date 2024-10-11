import{p as i,_ as v,e as r,ah as l,ai as k,aj as h,ak as S,al as B,am as I,Z as P,j as u,ag as $,m as N,b as V,c as T,g as R,r as F,d as j,an as w,t as E,h as D,ao as O,ap as U,i as Z}from"./index-DLOpb7sW.js";const K=i({border:[Boolean,Number,String]},"border");function L(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{borderClasses:r(()=>{const t=l(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))s.push(`border-${o}`);return s})}}function x(e){return k(()=>{const n=[],a={};if(e.value.background)if(h(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&S(e.value.background)){const t=B(e.value.background);if(t.a==null||t.a===1){const s=I(t);a.color=s,a.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(h(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function _(e,n){const a=r(()=>({text:l(e)?e.value:null})),{colorClasses:t,colorStyles:s}=x(a);return{textColorClasses:t,textColorStyles:s}}function M(e,n){const a=r(()=>({background:l(e)?e.value:null})),{colorClasses:t,colorStyles:s}=x(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Q=i({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function W(e){return{elevationClasses:r(()=>{const a=l(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const X=i({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Y(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{roundedClasses:r(()=>{const t=l(e)?e.value:e.rounded,s=l(e)?e.value:e.tile,o=[];if(t===!0||t==="")o.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))o.push(`rounded-${c}`);else(s||t===!1)&&o.push("rounded-0");return o})}}const q=["x-small","small","default","large","x-large"],A=i({size:{type:[String,Number],default:"default"}},"size");function G(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return k(()=>{let a,t;return P(q,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:u(e.size),height:u(e.size)}),{sizeClasses:a,sizeStyles:t}})}const H=i({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:$,...N(),...A(),...V({tag:"i"}),...T()},"VIcon"),p=R()({name:"VIcon",props:H(),setup(e,n){let{attrs:a,slots:t}=n;const s=F(),{themeClasses:o}=j(e),{iconData:c}=w(r(()=>s.value||e.icon)),{sizeClasses:m}=G(e),{textColorClasses:y,textColorStyles:z}=_(E(e,"color"));return D(()=>{var C,b;const f=(C=t.default)==null?void 0:C.call(t);f&&(s.value=(b=O(f).filter(g=>g.type===U&&g.children&&typeof g.children=="string")[0])==null?void 0:b.children);const d=!!(a.onClick||a.onClickOnce);return Z(c.value.component,{tag:e.tag,icon:c.value.icon,class:["v-icon","notranslate",o.value,m.value,y.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[m.value?void 0:{fontSize:u(e.size),height:u(e.size),width:u(e.size)},z.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}});export{p as V,Q as a,X as b,L as c,W as d,Y as e,x as f,A as g,G as h,_ as i,K as m,M as u};
