import{p as j,m as W,L as J,g as $,N as K,h as D,i as a,e as z,D as Q,Z as E,a0 as X,a1 as Y,aR as H,t as p,ae as ee,s as h,r as te,ai as T,af as ne,$ as re,ag as ae,H as U,a8 as se,F as ie,j as le,ao as oe}from"./index-Xeydls2c.js";import{b as ue,u as ce,e as de}from"./VIcon-Ba1PRLjY.js";function ve(e){return{aspectStyles:z(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const M=j({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...W(),...J()},"VResponsive"),F=$()({name:"VResponsive",props:M(),setup(e,l){let{slots:i}=l;const{aspectStyles:n}=ve(e),{dimensionStyles:d}=K(e);return D(()=>{var v;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[d.value,e.style]},[a("div",{class:"v-responsive__sizer",style:n.value},null),(v=i.additional)==null?void 0:v.call(i),i.default&&a("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),ge=j({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),R=(e,l)=>{let{slots:i}=l;const{transition:n,disabled:d,group:v,...f}=e,{component:g=v?X:Y,...S}=typeof n=="object"?n:{};return Q(g,E(typeof n=="string"?{name:d?"":n}:S,typeof n=="string"?{}:Object.fromEntries(Object.entries({disabled:d,group:v}).filter(r=>{let[s,c]=r;return c!==void 0})),f),i)};function me(e,l){if(!H)return;const i=l.modifiers||{},n=l.value,{handler:d,options:v}=typeof n=="object"?n:{handler:n,options:{}},f=new IntersectionObserver(function(){var c;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0;const r=(c=e._observe)==null?void 0:c[l.instance.$.uid];if(!r)return;const s=g.some(_=>_.isIntersecting);d&&(!i.quiet||r.init)&&(!i.once||s||r.init)&&d(s,g,S),s&&i.once?q(e,l):r.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:f},f.observe(e)}function q(e,l){var n;const i=(n=e._observe)==null?void 0:n[l.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const fe={mounted:me,unmounted:q},Se=j({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...M(),...W(),...ue(),...ge()},"VImg"),ye=$()({name:"VImg",directives:{intersect:fe},props:Se(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:n}=l;const{backgroundColorClasses:d,backgroundColorStyles:v}=ce(p(e,"color")),{roundedClasses:f}=de(e),g=ee("VImg"),S=h(""),r=te(),s=h(e.eager?"loading":"idle"),c=h(),_=h(),u=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=z(()=>u.value.aspect||c.value/_.value||0);T(()=>e.src,()=>{I(s.value!=="idle")}),T(b,(t,o)=>{!t&&o&&r.value&&y(r.value)}),ne(()=>I());function I(t){if(!(e.eager&&t)&&!(H&&!t&&!e.eager)){if(s.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,y(o,null)}u.value.src&&re(()=>{var o;i("loadstart",((o=r.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var m;if(!g.isUnmounted)if((m=r.value)!=null&&m.complete){if(r.value.naturalWidth||k(),s.value==="error")return;b.value||y(r.value,null),s.value==="loading"&&C()}else b.value||y(r.value),w()})})}}function C(){var t;g.isUnmounted||(w(),y(r.value),s.value="loaded",i("load",((t=r.value)==null?void 0:t.currentSrc)||u.value.src))}function k(){var t;g.isUnmounted||(s.value="error",i("error",((t=r.value)==null?void 0:t.currentSrc)||u.value.src))}function w(){const t=r.value;t&&(S.value=t.currentSrc||t.src)}let P=-1;ae(()=>{clearTimeout(P)});function y(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(P),g.isUnmounted)return;const{naturalHeight:O,naturalWidth:N}=t;O||N?(c.value=N,_.value=O):!t.complete&&s.value==="loading"&&o!=null?P=window.setTimeout(m,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,_.value=1)};m()}const B=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var m;if(!u.value.src||s.value==="idle")return null;const t=a("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:C,onError:k},null),o=(m=n.sources)==null?void 0:m.call(n);return a(R,{transition:e.transition,appear:!0},{default:()=>[U(o?a("picture",{class:"v-img__picture"},[o,t]):t,[[oe,s.value==="loaded"]])]})},A=()=>a(R,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),L=()=>n.placeholder?a(R,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!n.error)&&a("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,G=()=>n.error?a(R,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&a("div",{class:"v-img__error"},[n.error()])]}):null,Z=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=h(!1);{const t=T(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),t())})}return D(()=>{const t=F.filterProps(e);return U(a(F,E({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!V.value},d.value,f.value,e.class],style:[{width:le(e.width==="auto"?c.value:e.width)},v.value,e.style]},t,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(ie,null,[a(x,null,null),a(A,null,null),a(Z,null,null),a(L,null,null),a(G,null,null)]),default:n.default}),[[se("intersect"),{handler:I,options:e.options},null,{once:!0}]])}),{currentSrc:S,image:r,state:s,naturalWidth:c,naturalHeight:_}}});export{fe as I,R as M,ye as V,ge as m};
