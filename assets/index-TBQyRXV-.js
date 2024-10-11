import{_ as je}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q,a as Y}from"./VContainer-DBx1cjHW.js";import{B as x,C as E,p as N,m as I,b as p,g as R,e as b,D as O,E as Ve,G as ke,h as ee,i as s,H as te,T as Ne,I as Pe,S as ne,t as we,J as xe,s as j,r as Ie,K as z,L as Re,M as Be,N as Te,O as J,P as ze,F as $e,j as Le,Q as Ee,o as ae,l as se,n as f,y as P,R as $}from"./index-DLOpb7sW.js";import{b as Oe,u as Ue,e as Ae}from"./VIcon-B_CsoCni.js";const De="/front-end/assets/logo-C7ZYeSDN.png",Ge="/front-end/assets/nasa_hunch-BGYSE15X.png",Me="/front-end/assets/warren_tech-DZfXVyoU.png",re=x.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),le=x.reduce((e,a)=>{const t="offset"+E(a);return e[t]={type:[String,Number],default:null},e},{}),oe=x.reduce((e,a)=>{const t="order"+E(a);return e[t]={type:[String,Number],default:null},e},{}),X={col:Object.keys(re),offset:Object.keys(le),order:Object.keys(oe)};function Fe(e,a,t){let n=e;if(!(t==null||t===!1)){if(a){const r=a.replace(e,"");n+=`-${r}`}return e==="col"&&(n="v-"+n),e==="col"&&(t===""||t===!0)||(n+=`-${t}`),n.toLowerCase()}}const He=["auto","start","end","center","baseline","stretch"],We=N({cols:{type:[Boolean,String,Number],default:!1},...re,offset:{type:[String,Number],default:null},...le,order:{type:[String,Number],default:null},...oe,alignSelf:{type:String,default:null,validator:e=>He.includes(e)},...I(),...p()},"VCol"),V=R()({name:"VCol",props:We(),setup(e,a){let{slots:t}=a;const n=b(()=>{const r=[];let u;for(u in X)X[u].forEach(c=>{const m=e[c],o=Fe(u,c,m);o&&r.push(o)});const v=r.some(c=>c.startsWith("v-col-"));return r.push({"v-col":!v||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return O(e.tag,{class:[n.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}}),U=["start","end","center"],ie=["space-between","space-around","space-evenly"];function A(e,a){return x.reduce((t,n)=>{const r=e+E(n);return t[r]=a(),t},{})}const Ke=[...U,"baseline","stretch"],ue=e=>Ke.includes(e),ce=A("align",()=>({type:String,default:null,validator:ue})),qe=[...U,...ie],de=e=>qe.includes(e),fe=A("justify",()=>({type:String,default:null,validator:de})),Ye=[...U,...ie,"stretch"],ge=e=>Ye.includes(e),ve=A("alignContent",()=>({type:String,default:null,validator:ge})),Z={align:Object.keys(ce),justify:Object.keys(fe),alignContent:Object.keys(ve)},Je={align:"align",justify:"justify",alignContent:"align-content"};function Xe(e,a,t){let n=Je[e];if(t!=null){if(a){const r=a.replace(e,"");n+=`-${r}`}return n+=`-${t}`,n.toLowerCase()}}const Ze=N({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ue},...ce,justify:{type:String,default:null,validator:de},...fe,alignContent:{type:String,default:null,validator:ge},...ve,...I(),...p()},"VRow"),k=R()({name:"VRow",props:Ze(),setup(e,a){let{slots:t}=a;const n=b(()=>{const r=[];let u;for(u in Z)Z[u].forEach(v=>{const c=e[v],m=Xe(u,v,c);m&&r.push(m)});return r.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),r});return()=>{var r;return O(e.tag,{class:["v-row",n.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}});function Qe(e){return{aspectStyles:b(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const me=N({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...I(),...Ve()},"VResponsive"),Q=R()({name:"VResponsive",props:me(),setup(e,a){let{slots:t}=a;const{aspectStyles:n}=Qe(e),{dimensionStyles:r}=ke(e);return ee(()=>{var u;return s("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[s("div",{class:"v-responsive__sizer",style:n.value},null),(u=t.additional)==null?void 0:u.call(t),t.default&&s("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),pe=N({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),w=(e,a)=>{let{slots:t}=a;const{transition:n,disabled:r,group:u,...v}=e,{component:c=u?Ne:Pe,...m}=typeof n=="object"?n:{};return O(c,te(typeof n=="string"?{name:r?"":n}:m,typeof n=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:u}).filter(o=>{let[i,y]=o;return y!==void 0})),v),t)};function et(e,a){if(!ne)return;const t=a.modifiers||{},n=a.value,{handler:r,options:u}=typeof n=="object"?n:{handler:n,options:{}},v=new IntersectionObserver(function(){var y;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const o=(y=e._observe)==null?void 0:y[a.instance.$.uid];if(!o)return;const i=c.some(S=>S.isIntersecting);r&&(!t.quiet||o.init)&&(!t.once||i||o.init)&&r(i,c,m),i&&t.once?ye(e,a):o.init=!0},u);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:v},v.observe(e)}function ye(e,a){var n;const t=(n=e._observe)==null?void 0:n[a.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const tt={mounted:et,unmounted:ye},nt=N({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...me(),...I(),...Oe(),...pe()},"VImg"),L=R()({name:"VImg",directives:{intersect:tt},props:nt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:t,slots:n}=a;const{backgroundColorClasses:r,backgroundColorStyles:u}=Ue(we(e,"color")),{roundedClasses:v}=Ae(e),c=xe("VImg"),m=j(""),o=Ie(),i=j(e.eager?"loading":"idle"),y=j(),S=j(),g=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=b(()=>g.value.aspect||y.value/S.value||0);z(()=>e.src,()=>{B(i.value!=="idle")}),z(h,(l,d)=>{!l&&d&&o.value&&C(o.value)}),Re(()=>B());function B(l){if(!(e.eager&&l)&&!(ne&&!l&&!e.eager)){if(i.value="loading",g.value.lazySrc){const d=new Image;d.src=g.value.lazySrc,C(d,null)}g.value.src&&Be(()=>{var d;t("loadstart",((d=o.value)==null?void 0:d.currentSrc)||g.value.src),setTimeout(()=>{var _;if(!c.isUnmounted)if((_=o.value)!=null&&_.complete){if(o.value.naturalWidth||G(),i.value==="error")return;h.value||C(o.value,null),i.value==="loading"&&D()}else h.value||C(o.value),M()})})}}function D(){var l;c.isUnmounted||(M(),C(o.value),i.value="loaded",t("load",((l=o.value)==null?void 0:l.currentSrc)||g.value.src))}function G(){var l;c.isUnmounted||(i.value="error",t("error",((l=o.value)==null?void 0:l.currentSrc)||g.value.src))}function M(){const l=o.value;l&&(m.value=l.currentSrc||l.src)}let T=-1;Te(()=>{clearTimeout(T)});function C(l){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const _=()=>{if(clearTimeout(T),c.isUnmounted)return;const{naturalHeight:W,naturalWidth:K}=l;W||K?(y.value=K,S.value=W):!l.complete&&i.value==="loading"&&d!=null?T=window.setTimeout(_,d):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(y.value=1,S.value=1)};_()}const F=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),_e=()=>{var _;if(!g.value.src||i.value==="idle")return null;const l=s("img",{class:["v-img__img",F.value],style:{objectPosition:e.position},src:g.value.src,srcset:g.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:o,onLoad:D,onError:G},null),d=(_=n.sources)==null?void 0:_.call(n);return s(w,{transition:e.transition,appear:!0},{default:()=>[J(d?s("picture",{class:"v-img__picture"},[d,l]):l,[[Ee,i.value==="loaded"]])]})},Se=()=>s(w,{transition:e.transition},{default:()=>[g.value.lazySrc&&i.value!=="loaded"&&s("img",{class:["v-img__img","v-img__img--preload",F.value],style:{objectPosition:e.position},src:g.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),be=()=>n.placeholder?s(w,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&s("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,he=()=>n.error?s(w,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&s("div",{class:"v-img__error"},[n.error()])]}):null,Ce=()=>e.gradient?s("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=j(!1);{const l=z(h,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),l())})}return ee(()=>{const l=Q.filterProps(e);return J(s(Q,te({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!H.value},r.value,v.value,e.class],style:[{width:Le(e.width==="auto"?y.value:e.width)},u.value,e.style]},l,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>s($e,null,[s(_e,null,null),s(Se,null,null),s(Ce,null,null),s(be,null,null),s(he,null,null)]),default:n.default}),[[ze("intersect"),{handler:B,options:e.options},null,{once:!0}]])}),{currentSrc:m,image:o,state:i,naturalWidth:y,naturalHeight:S}}}),at={__name:"Home",setup(e){return(a,t)=>(ae(),se(q,{class:"my-15"},{default:f(()=>[s(k,null,{default:f(()=>[s(q,{class:"justify-center"},{default:f(()=>[s(k,{class:"text-h2 justify-center text-center"},{default:f(()=>t[0]||(t[0]=[P("Medical Based")])),_:1}),s(k,{class:"text-h1 justify-center text-center my-5"},{default:f(()=>t[1]||(t[1]=[P("Inventory System")])),_:1}),s(k,{class:""},{default:f(()=>[s(V,null,{default:f(()=>[s(L,{"max-height":"250px",src:$(Ge)},null,8,["src"])]),_:1}),s(V,null,{default:f(()=>[s(L,{"max-height":"250px",src:$(De)},null,8,["src"])]),_:1}),s(V,null,{default:f(()=>[s(L,{"max-height":"250px",src:$(Me)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1}),s(k,{class:"text-center justify-center"},{default:f(()=>[s(V,null,{default:f(()=>[s(Y,{class:"button-styles elevation-10",size:"x-large",to:"/login"},{default:f(()=>t[2]||(t[2]=[P("Demo Login")])),_:1})]),_:1}),s(V,null,{default:f(()=>[s(Y,{class:"button-styles",size:"x-large",to:"/profile"},{default:f(()=>t[3]||(t[3]=[P("Demo Profile")])),_:1})]),_:1})]),_:1})]),_:1}))}},st=je(at,[["__scopeId","data-v-bacdb028"]]),ut={__name:"index",setup(e){return(a,t)=>{const n=st;return ae(),se(n)}}};export{ut as default};