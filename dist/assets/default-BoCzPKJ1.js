import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{p as C,m as V,a as x,b as F,c as I,g as S,r as B,d as P,t as h,s as T,u as z,e as o,f as R,h as w,i as s,j as H,k as N,w as A,o as c,l as _,n as i,q as E,F as L,v as J,x as u,y as M,V as O,z as $,A as j}from"./index-fQgfZA_F.js";import{m as q,a as G,b as U,u as W,c as D,d as K,e as Q,V as X}from"./VIcon-DwcCHzWo.js";const Y=C({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...q(),...V(),...G(),...x(),...U(),...F({tag:"footer"}),...I()},"VFooter"),Z=S()({name:"VFooter",props:Y(),setup(e,n){let{slots:l}=n;const a=B(),{themeClasses:t}=P(e),{backgroundColorClasses:f,backgroundColorStyles:g}=W(h(e,"color")),{borderClasses:p}=D(e),{elevationClasses:v}=K(e),{roundedClasses:k}=Q(e),d=T(32),{resizeRef:y}=z(r=>{r.length&&(d.value=r[0].target.clientHeight)}),m=o(()=>e.height==="auto"?d.value:parseInt(e.height,10));return R(()=>e.app,()=>{const r=N({id:e.name,order:o(()=>parseInt(e.order,10)),position:o(()=>"bottom"),layoutSize:m,elementSize:o(()=>e.height==="auto"?void 0:m.value),active:o(()=>e.app),absolute:h(e,"absolute")});A(()=>{a.value=r.layoutItemStyles.value})}),w(()=>s(e.tag,{ref:y,class:["v-footer",t.value,f.value,p.value,v.value,k.value,e.class],style:[g.value,e.app?a.value:{height:H(e.height)},e.style]},l)),{}}}),ee=["href","title"],te={__name:"AppFooter",setup(e){const n=[{title:"Our GitHub",icon:"mdi-github",href:"https://github.com/Hunch-Medical-Inventory-System"}];return(l,a)=>(c(),_(Z,{height:"40",app:""},{default:i(()=>[(c(),E(L,null,J(n,t=>u("a",{key:t.title,href:t.href,title:t.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[s(X,{icon:t.icon,size:t.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,ee)),64)),a[0]||(a[0]=u("div",{class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},[M(" © 2024 "),u("span",{class:"d-none d-sm-inline-block"},"Nasa Hunch, Warren Tech, The JJs")],-1))]),_:1}))}},ae=b(te,[["__scopeId","data-v-3f6c6936"]]),re={__name:"default",setup(e){return(n,l)=>{const a=$("router-view"),t=ae;return c(),_(O,null,{default:i(()=>[s(j,null,{default:i(()=>[s(a)]),_:1}),s(t)]),_:1})}}};export{re as default};
