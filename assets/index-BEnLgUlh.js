import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as f}from"./VRow-oahqE3-f.js";import{V as p}from"./VContainer-B9XEE_Yy.js";import{B as g,C as b,p as L,m as P,b as $,g as v,e as w,D as z,o as C,l as S,n as l,i as s,y as u,E as m}from"./index-DQc5ljF0.js";import{V as _,a as c}from"./VImg-3QOI_Jq2.js";import"./VIcon-C7gsGOIY.js";const E="/front-end/assets/logo-C7ZYeSDN.png",D="/front-end/assets/nasa_hunch-BGYSE15X.png",I="/front-end/assets/warren_tech-DZfXVyoU.png",V=g.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),N=g.reduce((e,n)=>{const t="offset"+b(n);return e[t]={type:[String,Number],default:null},e},{}),k=g.reduce((e,n)=>{const t="order"+b(n);return e[t]={type:[String,Number],default:null},e},{}),x={col:Object.keys(V),offset:Object.keys(N),order:Object.keys(k)};function T(e,n,t){let o=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");o+=`-${a}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const F=["auto","start","end","center","baseline","stretch"],H=L({cols:{type:[Boolean,String,Number],default:!1},...V,offset:{type:[String,Number],default:null},...N,order:{type:[String,Number],default:null},...k,alignSelf:{type:String,default:null,validator:e=>F.includes(e)},...P(),...$()},"VCol"),r=v()({name:"VCol",props:H(),setup(e,n){let{slots:t}=n;const o=w(()=>{const a=[];let d;for(d in x)x[d].forEach(i=>{const B=e[i],y=T(d,i,B);y&&a.push(y)});const h=a.some(i=>i.startsWith("v-col-"));return a.push({"v-col":!h||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return z(e.tag,{class:[o.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),O={__name:"Home",setup(e){return(n,t)=>(C(),S(p,{class:"my-15"},{default:l(()=>[s(f,null,{default:l(()=>[s(p,{class:"justify-center"},{default:l(()=>[s(f,{class:"text-h2 justify-center text-center"},{default:l(()=>t[0]||(t[0]=[u("Medical Based")])),_:1}),s(f,{class:"text-h1 justify-center text-center my-5"},{default:l(()=>t[1]||(t[1]=[u("Inventory System")])),_:1}),s(f,{class:""},{default:l(()=>[s(r,null,{default:l(()=>[s(_,{"max-height":"250px",src:m(D)},null,8,["src"])]),_:1}),s(r,null,{default:l(()=>[s(_,{"max-height":"250px",src:m(E)},null,8,["src"])]),_:1}),s(r,null,{default:l(()=>[s(_,{"max-height":"250px",src:m(I)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1}),s(f,{class:"text-center justify-center"},{default:l(()=>[s(r,null,{default:l(()=>[s(c,{class:"button-styles elevation-10",size:"x-large",to:"/login"},{default:l(()=>t[2]||(t[2]=[u("Demo Login")])),_:1})]),_:1}),s(r,null,{default:l(()=>[s(c,{class:"button-styles",size:"x-large",to:"/profile"},{default:l(()=>t[3]||(t[3]=[u("Demo Profile")])),_:1})]),_:1}),s(r,null,{default:l(()=>[s(c,{class:"button-styles",size:"x-large",to:"/expired"},{default:l(()=>t[4]||(t[4]=[u("Expiry Table")])),_:1})]),_:1}),s(r,null,{default:l(()=>[s(c,{class:"button-styles",size:"x-large",to:"/update"},{default:l(()=>t[5]||(t[5]=[u("Update")])),_:1})]),_:1}),s(r,null,{default:l(()=>[s(c,{class:"button-styles",size:"x-large",to:"/log"},{default:l(()=>t[6]||(t[6]=[u("NFC logs")])),_:1})]),_:1})]),_:1})]),_:1}))}},U=j(O,[["__scopeId","data-v-f61ee84a"]]),Z={__name:"index",setup(e){return(n,t)=>{const o=U;return C(),S(o)}}};export{Z as default};