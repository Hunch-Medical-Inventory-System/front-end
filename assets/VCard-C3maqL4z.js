import{g as l,m as s,M as H,h as c,i as n,p as y,b as C,a0 as m,F as A,ao as $,c as z,d as J,ap as K,e as P,_ as Q,$ as U,G as W}from"./index-iGX-8HYq.js";import{j as X,r as h,m as Y,h as Z,k as ee,l as ae,s as te,g as ne,R as de,u as ie,n as le,i as se,o as ce,p as re,v as ue,L as oe,q as ve}from"./VAvatar-BWrC23BE.js";import{b as x,V as S,a as V,m as me,d as ye,u as ge}from"./density-cjMmpE6Z.js";import{m as be,a as ke}from"./VGrid--LcyoMBU.js";import{V as fe}from"./VImg-CjWbq3TH.js";const Ve=l()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return H({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ce=y({opacity:[Number,String],...s(),...C()},"VCardSubtitle"),pe=l()({name:"VCardSubtitle",props:Ce(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=X("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=l()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),g=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),b=!!(r||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[g&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),f&&n(pe,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),b&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=y({opacity:[Number,String],...s(),...C()},"VCardText"),Se=l()({name:"VCardText",props:he(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Y(),...s(),...x(),...$(),...me(),...Z(),...ee(),...ae(),...be(),...te(),...C(),...z(),...ne({variant:"elevated"})},"VCard"),Ne=l()({name:"VCard",directives:{Ripple:de},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:g}=J(e),{borderClasses:r}=ie(e),{colorClasses:b,colorStyles:k,variantClasses:f}=le(e),{densityClasses:u}=ye(e),{dimensionStyles:i}=K(e),{elevationClasses:T}=ge(e),{loaderClasses:L}=se(e),{locationStyles:_}=ce(e),{positionClasses:B}=re(e),{roundedClasses:D}=ke(e),o=ue(e,t),N=P(()=>e.link!==!1&&o.isLink.value),v=P(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return c(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),M=!!(a.subtitle||e.subtitle!=null),j=F||M,E=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),w=j||O||E,G=!!(a.text||e.text!=null);return Q(n(R,W({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},g.value,r.value,b.value,u.value,T.value,L.value,B.value,D.value,f.value,e.class],style:[k.value,i.value,_.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var p;return[q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(fe,{key:"image-img",cover:!0,src:e.image},null)]),n(oe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),G&&n(Se,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(Ve,null,{default:a.actions}),ve(v.value,"v-card")]}}),[[U("ripple"),v.value&&e.ripple]])}),{}}});export{Ne as V,Ie as a,pe as b,Se as c,Ve as d};
