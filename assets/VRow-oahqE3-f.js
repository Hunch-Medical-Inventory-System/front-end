import"./VContainer-B9XEE_Yy.js";import{p as v,m as S,b as V,g as k,e as w,D as b,B as L,C as N}from"./index-DQc5ljF0.js";const o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,s){return L.reduce((e,a)=>{const n=t+N(a);return e[n]=s(),e},{})}const P=[...o,"baseline","stretch"],d=t=>P.includes(t),f=i("align",()=>({type:String,default:null,validator:d})),A=[...o,...g],y=t=>A.includes(t),C=i("justify",()=>({type:String,default:null,validator:y})),E=[...o,...g,"stretch"],m=t=>E.includes(t),j=i("alignContent",()=>({type:String,default:null,validator:m})),u={align:Object.keys(f),justify:Object.keys(C),alignContent:Object.keys(j)},h={align:"align",justify:"justify",alignContent:"align-content"};function G(t,s,e){let a=h[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const R=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...C,alignContent:{type:String,default:null,validator:m},...j,...S(),...V()},"VRow"),I=k()({name:"VRow",props:R(),setup(t,s){let{slots:e}=s;const a=w(()=>{const n=[];let l;for(l in u)u[l].forEach(c=>{const p=t[c],r=G(l,c,p);r&&n.push(r)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return b(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{I as V};
