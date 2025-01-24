import{a as He,b as Ke,u as Ne,V as ke}from"./VTextField-CpljoeQE.js";import{p as U,a0 as oe,ai as $e,m as ue,c as ze,g as Y,D as W,av as he,e as b,Z as Te,I as ye,M as qe,t as R,h as X,i as v,s as M,r as z,aw as je,G as F,_ as Ge,$ as We,F as ee,a1 as De,aj as ae,ax as fe,N as ie,at as Ve,K as Ye,ay as Xe,C as Ze,az as Je,A as q,a5 as we,aA as Qe,aB as ce,u as Ee,L as et,w as pe,z as de,aC as tt,a4 as me,ao as lt,af as nt,ap as at,f as ot,j as ne,B as ut,Y as it,aD as rt,y as st,aE as Se}from"./index-iGX-8HYq.js";import{f as Be}from"./forwardRefs-mMFjKr0-.js";import{m as ct,u as dt,V as vt,a as Ie}from"./VList-kRuoCTgN.js";import{a as ft}from"./VImg-CjWbq3TH.js";import{a as mt,b as Re,d as Pe,c as xe,g as gt,V as ht}from"./VOverlay-BrAnG7Aq.js";import{u as yt}from"./scopeId-D6XRwtbt.js";import{b as Vt,V as ge,d as bt,a as Fe}from"./density-cjMmpE6Z.js";import{b as Ct,u as kt}from"./VGrid--LcyoMBU.js";import{R as wt,r as pt}from"./VAvatar-BWrC23BE.js";const Le=Symbol.for("vuetify:selection-control-group"),Oe=U({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:oe,trueIcon:oe,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:$e},...ue(),...Vt(),...ze()},"SelectionControlGroup"),St=U({...Oe({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");Y()({name:"VSelectionControlGroup",props:St(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:o}=c;const a=W(e,"modelValue"),i=he(),m=b(()=>e.id||`v-selection-control-group-${i}`),g=b(()=>e.name||m.value),u=new Set;return Te(Le,{modelValue:a,forceUpdate:()=>{u.forEach(l=>l())},onForceUpdate:l=>{u.add(l),ye(()=>{u.delete(l)})}}),qe({[e.defaultsTarget]:{color:R(e,"color"),disabled:R(e,"disabled"),density:R(e,"density"),error:R(e,"error"),inline:R(e,"inline"),modelValue:a,multiple:b(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),name:g,falseIcon:R(e,"falseIcon"),trueIcon:R(e,"trueIcon"),readonly:R(e,"readonly"),ripple:R(e,"ripple"),type:R(e,"type"),valueComparator:R(e,"valueComparator")}}),X(()=>{var l;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(l=o.default)==null?void 0:l.call(o)])}),{}}});const Me=U({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ue(),...Oe()},"VSelectionControl");function It(e){const c=De(Le,void 0),{densityClasses:o}=bt(e),a=W(e,"modelValue"),i=b(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=b(()=>e.falseValue!==void 0?e.falseValue:!1),g=b(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),u=b({get(){const C=c?c.modelValue.value:a.value;return g.value?ae(C).some(w=>e.valueComparator(w,i.value)):e.valueComparator(C,i.value)},set(C){if(e.readonly)return;const w=C?i.value:m.value;let S=w;g.value&&(S=C?[...ae(a.value),w]:ae(a.value).filter(n=>!e.valueComparator(n,i.value))),c?c.modelValue.value=S:a.value=S}}),{textColorClasses:l,textColorStyles:s}=Ct(b(()=>{if(!(e.error||e.disabled))return u.value?e.color:e.baseColor})),{backgroundColorClasses:P,backgroundColorStyles:A}=kt(b(()=>u.value&&!e.error&&!e.disabled?e.color:e.baseColor)),f=b(()=>u.value?e.trueIcon:e.falseIcon);return{group:c,densityClasses:o,trueValue:i,falseValue:m,model:u,textColorClasses:l,textColorStyles:s,backgroundColorClasses:P,backgroundColorStyles:A,icon:f}}const Ae=Y()({name:"VSelectionControl",directives:{Ripple:wt},inheritAttrs:!1,props:Me(),emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:o,slots:a}=c;const{group:i,densityClasses:m,icon:g,model:u,textColorClasses:l,textColorStyles:s,backgroundColorClasses:P,backgroundColorStyles:A,trueValue:f}=It(e),C=he(),w=M(!1),S=M(!1),n=z(),d=b(()=>e.id||`input-${C}`),y=b(()=>!e.disabled&&!e.readonly);i==null||i.onForceUpdate(()=>{n.value&&(n.value.checked=u.value)});function I(k){y.value&&(w.value=!0,fe(k.target,":focus-visible")!==!1&&(S.value=!0))}function p(){w.value=!1,S.value=!1}function B(k){k.stopPropagation()}function j(k){if(!y.value){n.value&&(n.value.checked=u.value);return}e.readonly&&i&&ie(()=>i.forceUpdate()),u.value=k.target.checked}return X(()=>{var N,G;const k=a.label?a.label({label:e.label,props:{for:d.value}}):e.label,[Z,K]=je(o),_=v("input",F({ref:n,checked:u.value,disabled:!!e.disabled,id:d.value,onBlur:p,onFocus:I,onInput:j,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:f.value,name:e.name,"aria-checked":e.type==="checkbox"?u.value:void 0},K),null);return v("div",F({class:["v-selection-control",{"v-selection-control--dirty":u.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":w.value,"v-selection-control--focus-visible":S.value,"v-selection-control--inline":e.inline},m.value,e.class]},Z,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",l.value],style:s.value},[(N=a.default)==null?void 0:N.call(a,{backgroundColorClasses:P,backgroundColorStyles:A}),Ge(v("div",{class:["v-selection-control__input"]},[((G=a.input)==null?void 0:G.call(a,{model:u,textColorClasses:l,textColorStyles:s,backgroundColorClasses:P,backgroundColorStyles:A,inputNode:_,icon:g.value,props:{onFocus:I,onBlur:p,id:d.value}}))??v(ee,null,[g.value&&v(ge,{key:"icon",icon:g.value},null),_])]),[[We("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&v(He,{for:d.value,onClick:B},{default:()=>[k]})])}),{isFocused:w,input:n}}}),Pt=U({indeterminate:Boolean,indeterminateIcon:{type:oe,default:"$checkboxIndeterminate"},...Me({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),xt=Y()({name:"VCheckboxBtn",props:Pt(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,c){let{slots:o}=c;const a=W(e,"indeterminate"),i=W(e,"modelValue");function m(l){a.value&&(a.value=!1)}const g=b(()=>a.value?e.indeterminateIcon:e.falseIcon),u=b(()=>a.value?e.indeterminateIcon:e.trueIcon);return X(()=>{const l=Ve(Ae.filterProps(e),["modelValue"]);return v(Ae,F(l,{modelValue:i.value,"onUpdate:modelValue":[s=>i.value=s,m],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:g.value,trueIcon:u.value,"aria-checked":a.value?"mixed":void 0}),o)}),{}}}),At=U({id:String,submenu:Boolean,...Ve(mt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Re}}),["absolute"])},"VMenu"),Tt=Y()({name:"VMenu",props:At(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:o}=c;const a=W(e,"modelValue"),{scopeId:i}=yt(),{isRtl:m}=Ye(),g=he(),u=b(()=>e.id||`v-menu-${g}`),l=z(),s=De(Pe,null),P=M(new Set);Te(Pe,{register(){P.value.add(g)},unregister(){P.value.delete(g)},closeParents(n){setTimeout(()=>{var d;!P.value.size&&!e.persistent&&(n==null||(d=l.value)!=null&&d.contentEl&&!Xe(n,l.value.contentEl))&&(a.value=!1,s==null||s.closeParents())},40)}}),Ze(()=>s==null?void 0:s.unregister()),Je(()=>a.value=!1);async function A(n){var I,p,B;const d=n.relatedTarget,y=n.target;await ie(),a.value&&d!==y&&((I=l.value)!=null&&I.contentEl)&&((p=l.value)!=null&&p.globalTop)&&![document,l.value.contentEl].includes(y)&&!l.value.contentEl.contains(y)&&((B=we(l.value.contentEl)[0])==null||B.focus())}q(a,n=>{n?(s==null||s.register(),document.addEventListener("focusin",A,{once:!0})):(s==null||s.unregister(),document.removeEventListener("focusin",A))});function f(n){s==null||s.closeParents(n)}function C(n){var d,y,I,p,B;if(!e.disabled)if(n.key==="Tab"||n.key==="Enter"&&!e.closeOnContentClick){if(n.key==="Enter"&&(n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLInputElement&&n.target.closest("form")))return;n.key==="Enter"&&n.preventDefault(),Qe(we((d=l.value)==null?void 0:d.contentEl,!1),n.shiftKey?"prev":"next",k=>k.tabIndex>=0)||(a.value=!1,(I=(y=l.value)==null?void 0:y.activatorEl)==null||I.focus())}else e.submenu&&n.key===(m.value?"ArrowRight":"ArrowLeft")&&(a.value=!1,(B=(p=l.value)==null?void 0:p.activatorEl)==null||B.focus())}function w(n){var y;if(e.disabled)return;const d=(y=l.value)==null?void 0:y.contentEl;d&&a.value?n.key==="ArrowDown"?(n.preventDefault(),n.stopImmediatePropagation(),ce(d,"next")):n.key==="ArrowUp"?(n.preventDefault(),n.stopImmediatePropagation(),ce(d,"prev")):e.submenu&&(n.key===(m.value?"ArrowRight":"ArrowLeft")?a.value=!1:n.key===(m.value?"ArrowLeft":"ArrowRight")&&(n.preventDefault(),ce(d,"first"))):(e.submenu?n.key===(m.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(n.key))&&(a.value=!0,n.preventDefault(),setTimeout(()=>setTimeout(()=>w(n))))}const S=b(()=>F({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":u.value,onKeydown:w},e.activatorProps));return X(()=>{const n=xe.filterProps(e);return v(xe,F({ref:l,id:u.value,class:["v-menu",e.class],style:e.style},n,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,absolute:!0,activatorProps:S.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":f,onKeydown:C},i),{activator:o.activator,default:function(){for(var d=arguments.length,y=new Array(d),I=0;I<d;I++)y[I]=arguments[I];return v(Fe,{root:"VMenu"},{default:()=>{var p;return[(p=o.default)==null?void 0:p.call(o,...y)]}})}})}),Be({id:u,ΨopenChildren:P},l)}}),Dt=U({renderless:Boolean,...ue()},"VVirtualScrollItem"),Et=Y()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Dt(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:o,emit:a,slots:i}=c;const{resizeRef:m,contentRect:g}=Ee(void 0,"border");q(()=>{var u;return(u=g.value)==null?void 0:u.height},u=>{u!=null&&a("update:height",u)}),X(()=>{var u,l;return e.renderless?v(ee,null,[(u=i.default)==null?void 0:u.call(i,{itemRef:m})]):v("div",F({ref:m,class:["v-virtual-scroll__item",e.class],style:e.style},o),[(l=i.default)==null?void 0:l.call(i)])})}}),Bt=-1,Rt=1,ve=100,Ft=U({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Lt(e,c){const o=et(),a=M(0);pe(()=>{a.value=parseFloat(e.itemHeight||0)});const i=M(0),m=M(Math.ceil((parseInt(e.height)||o.height.value)/(a.value||16))||1),g=M(0),u=M(0),l=z(),s=z();let P=0;const{resizeRef:A,contentRect:f}=Ee();pe(()=>{A.value=l.value});const C=b(()=>{var t;return l.value===document.documentElement?o.height.value:((t=f.value)==null?void 0:t.height)||parseInt(e.height)||0}),w=b(()=>!!(l.value&&s.value&&C.value&&a.value));let S=Array.from({length:c.value.length}),n=Array.from({length:c.value.length});const d=M(0);let y=-1;function I(t){return S[t]||a.value}const p=tt(()=>{const t=performance.now();n[0]=0;const r=c.value.length;for(let V=1;V<=r-1;V++)n[V]=(n[V-1]||0)+I(V-1);d.value=Math.max(d.value,performance.now()-t)},d),B=q(w,t=>{t&&(B(),P=s.value.offsetTop,p.immediate(),H(),~y&&ie(()=>{me&&window.requestAnimationFrame(()=>{le(y),y=-1})}))});ye(()=>{p.clear()});function j(t,r){const V=S[t],x=a.value;a.value=x?Math.min(a.value,r):r,(V!==r||x!==a.value)&&(S[t]=r,p())}function k(t){return t=de(t,0,c.value.length-1),n[t]||0}function Z(t){return Ot(n,t)}let K=0,_=0,N=0;q(C,(t,r)=>{r&&(H(),t<r&&requestAnimationFrame(()=>{_=0,H()}))});function G(){if(!l.value||!s.value)return;const t=l.value.scrollTop,r=performance.now();r-N>500?(_=Math.sign(t-K),P=s.value.offsetTop):_=t-K,K=t,N=r,H()}function J(){!l.value||!s.value||(_=0,N=0,H())}let te=-1;function H(){cancelAnimationFrame(te),te=requestAnimationFrame(re)}function re(){if(!l.value||!C.value)return;const t=K-P,r=Math.sign(_),V=Math.max(0,t-ve),x=de(Z(V),0,c.value.length),L=t+C.value+ve,h=de(Z(L)+1,x+1,c.value.length);if((r!==Bt||x<i.value)&&(r!==Rt||h>m.value)){const T=k(i.value)-k(x),D=k(h)-k(m.value);Math.max(T,D)>ve?(i.value=x,m.value=h):(x<=0&&(i.value=x),h>=c.value.length&&(m.value=h))}g.value=k(i.value),u.value=k(c.value.length)-k(m.value)}function le(t){const r=k(t);!l.value||t&&!r?y=t:l.value.scrollTop=r}const se=b(()=>c.value.slice(i.value,m.value).map((t,r)=>({raw:t,index:r+i.value})));return q(c,()=>{S=Array.from({length:c.value.length}),n=Array.from({length:c.value.length}),p.immediate(),H()},{deep:!0}),{calculateVisibleItems:H,containerRef:l,markerRef:s,computedItems:se,paddingTop:g,paddingBottom:u,scrollToIndex:le,handleScroll:G,handleScrollend:J,handleItemResize:j}}function Ot(e,c){let o=e.length-1,a=0,i=0,m=null,g=-1;if(e[o]<c)return o;for(;a<=o;)if(i=a+o>>1,m=e[i],m>c)o=i-1;else if(m<c)g=i,a=i+1;else return m===c?i:a;return g}const Mt=U({items:{type:Array,default:()=>[]},renderless:Boolean,...Ft(),...ue(),...lt()},"VVirtualScroll"),_t=Y()({name:"VVirtualScroll",props:Mt(),setup(e,c){let{slots:o}=c;const a=nt("VVirtualScroll"),{dimensionStyles:i}=at(e),{calculateVisibleItems:m,containerRef:g,markerRef:u,handleScroll:l,handleScrollend:s,handleItemResize:P,scrollToIndex:A,paddingTop:f,paddingBottom:C,computedItems:w}=Lt(e,R(e,"items"));return ot(()=>e.renderless,()=>{function S(){var y,I;const d=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";g.value===document.documentElement?(document[d]("scroll",l,{passive:!0}),document[d]("scrollend",s)):((y=g.value)==null||y[d]("scroll",l,{passive:!0}),(I=g.value)==null||I[d]("scrollend",s))}ut(()=>{g.value=gt(a.vnode.el,!0),S(!0)}),ye(S)}),X(()=>{const S=w.value.map(n=>v(Et,{key:n.index,renderless:e.renderless,"onUpdate:height":d=>P(n.index,d)},{default:d=>{var y;return(y=o.default)==null?void 0:y.call(o,{item:n.raw,index:n.index,...d})}}));return e.renderless?v(ee,null,[v("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:ne(f.value)}},null),S,v("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ne(C.value)}},null)]):v("div",{ref:g,class:["v-virtual-scroll",e.class],onScrollPassive:l,onScrollend:s,style:[i.value,e.style]},[v("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:ne(f.value),paddingBottom:ne(C.value)}},[S])])}),{calculateVisibleItems:m,scrollToIndex:A}}});function Ut(e,c){const o=M(!1);let a;function i(u){cancelAnimationFrame(a),o.value=!0,a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{o.value=!1})})}async function m(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(o.value){const l=q(o,()=>{l(),u()})}else u()})}async function g(u){var P,A;if(u.key==="Tab"&&((P=c.value)==null||P.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const l=(A=e.value)==null?void 0:A.$el;if(!l)return;(u.key==="Home"||u.key==="End")&&l.scrollTo({top:u.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await m();const s=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const f=l.getBoundingClientRect().top;for(const C of s)if(C.getBoundingClientRect().top>=f){C.focus();break}}else{const f=l.getBoundingClientRect().bottom;for(const C of[...s].reverse())if(C.getBoundingClientRect().bottom<=f){C.focus();break}}}return{onScrollPassive:i,onKeydown:g}}const Ht=U({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:oe,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...ct({itemChildren:!1})},"Select"),Kt=U({...Ht(),...Ve(Ke({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ft({transition:{component:Re}})},"VSelect"),Jt=Y()({name:"VSelect",props:Kt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:o}=c;const{t:a}=it(),i=z(),m=z(),g=z(),u=W(e,"menu"),l=b({get:()=>u.value,set:t=>{var r;u.value&&!t&&((r=m.value)!=null&&r.ΨopenChildren.size)||(u.value=t)}}),{items:s,transformIn:P,transformOut:A}=dt(e),f=W(e,"modelValue",[],t=>P(t===null?[null]:ae(t)),t=>{const r=A(t);return e.multiple?r:r[0]??null}),C=b(()=>typeof e.counterValue=="function"?e.counterValue(f.value):typeof e.counterValue=="number"?e.counterValue:f.value.length),w=Ne(),S=b(()=>f.value.map(t=>t.value)),n=M(!1),d=b(()=>l.value?e.closeText:e.openText);let y="",I;const p=b(()=>e.hideSelected?s.value.filter(t=>!f.value.some(r=>e.valueComparator(r,t))):s.value),B=b(()=>e.hideNoData&&!p.value.length||e.readonly||(w==null?void 0:w.isReadonly.value)),j=b(()=>{var t;return{...e.menuProps,activatorProps:{...((t=e.menuProps)==null?void 0:t.activatorProps)||{},"aria-haspopup":"listbox"}}}),k=z(),Z=Ut(k,i);function K(t){e.openOnClear&&(l.value=!0)}function _(){B.value||(l.value=!l.value)}function N(t){Se(t)&&G(t)}function G(t){var L,h;if(!t.key||e.readonly||w!=null&&w.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(l.value=!0),["Escape","Tab"].includes(t.key)&&(l.value=!1),t.key==="Home"?(L=k.value)==null||L.focus("first"):t.key==="End"&&((h=k.value)==null||h.focus("last"));const r=1e3;if(e.multiple||!Se(t))return;const V=performance.now();V-I>r&&(y=""),y+=t.key.toLowerCase(),I=V;const x=s.value.find(T=>T.title.toLowerCase().startsWith(y));if(x!==void 0){f.value=[x];const T=p.value.indexOf(x);me&&window.requestAnimationFrame(()=>{var D;T>=0&&((D=g.value)==null||D.scrollToIndex(T))})}}function J(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const V=f.value.findIndex(L=>e.valueComparator(L.value,t.value)),x=r??!~V;if(~V){const L=x?[...f.value,t]:[...f.value];L.splice(V,1),f.value=L}else x&&(f.value=[...f.value,t])}else{const V=r!==!1;f.value=V?[t]:[],ie(()=>{l.value=!1})}}function te(t){var r;(r=k.value)!=null&&r.$el.contains(t.relatedTarget)||(l.value=!1)}function H(){var t;e.eager&&((t=g.value)==null||t.calculateVisibleItems())}function re(){var t;n.value&&((t=i.value)==null||t.focus())}function le(t){n.value=!0}function se(t){if(t==null)f.value=[];else if(fe(i.value,":autofill")||fe(i.value,":-webkit-autofill")){const r=s.value.find(V=>V.title===t);r&&J(r)}else i.value&&(i.value.value="")}return q(l,()=>{if(!e.hideSelected&&l.value&&f.value.length){const t=p.value.findIndex(r=>f.value.some(V=>e.valueComparator(V.value,r.value)));me&&window.requestAnimationFrame(()=>{var r;t>=0&&((r=g.value)==null||r.scrollToIndex(t))})}}),q(()=>e.items,(t,r)=>{l.value||n.value&&!r.length&&t.length&&(l.value=!0)}),X(()=>{const t=!!(e.chips||o.chip),r=!!(!e.hideNoData||p.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),V=f.value.length>0,x=ke.filterProps(e),L=V||!n.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return v(ke,F({ref:i},x,{modelValue:f.value.map(h=>h.props.value).join(", "),"onUpdate:modelValue":se,focused:n.value,"onUpdate:focused":h=>n.value=h,validationValue:f.externalValue,counterValue:C.value,dirty:V,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":f.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:L,"onClick:clear":K,"onMousedown:control":_,onBlur:te,onKeydown:G,"aria-label":a(d.value),title:a(d.value)}),{...o,default:()=>v(ee,null,[v(Tt,F({ref:m,modelValue:l.value,"onUpdate:modelValue":h=>l.value=h,activator:"parent",contentClass:"v-select__content",disabled:B.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:H,onAfterLeave:re},j.value),{default:()=>[r&&v(vt,F({ref:k,selected:S.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:h=>h.preventDefault(),onKeydown:N,onFocusin:le,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},Z,e.listProps),{default:()=>{var h,T,D;return[(h=o["prepend-item"])==null?void 0:h.call(o),!p.value.length&&!e.hideNoData&&(((T=o["no-data"])==null?void 0:T.call(o))??v(Ie,{title:a(e.noDataText)},null)),v(_t,{ref:g,renderless:!0,items:p.value},{default:$=>{var Ce;let{item:O,index:Q,itemRef:E}=$;const be=F(O.props,{ref:E,key:Q,onClick:()=>J(O,null)});return((Ce=o.item)==null?void 0:Ce.call(o,{item:O,index:Q,props:be}))??v(Ie,F(be,{role:"option"}),{prepend:_e=>{let{isSelected:Ue}=_e;return v(ee,null,[e.multiple&&!e.hideSelected?v(xt,{key:O.value,modelValue:Ue,ripple:!1,tabindex:"-1"},null):void 0,O.props.prependAvatar&&v(pt,{image:O.props.prependAvatar},null),O.props.prependIcon&&v(ge,{icon:O.props.prependIcon},null)])}})}}),(D=o["append-item"])==null?void 0:D.call(o)]}})]}),f.value.map((h,T)=>{function D(E){E.stopPropagation(),E.preventDefault(),J(h,!1)}const $={"onClick:close":D,onKeydown(E){E.key!=="Enter"&&E.key!==" "||(E.preventDefault(),E.stopPropagation(),D(E))},onMousedown(E){E.preventDefault(),E.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},O=t?!!o.chip:!!o.selection,Q=O?rt(t?o.chip({item:h,index:T,props:$}):o.selection({item:h,index:T})):void 0;if(!(O&&!Q))return v("div",{key:h.value,class:"v-select__selection"},[t?o.chip?v(Fe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:h.title}}},{default:()=>[Q]}):v(ht,F({key:"chip",closable:e.closableChips,size:"small",text:h.title,disabled:h.props.disabled},$),null):Q??v("span",{class:"v-select__selection-text"},[h.title,e.multiple&&T<f.value.length-1&&v("span",{class:"v-select__selection-comma"},[st(",")])])])})]),"append-inner":function(){var $;for(var h=arguments.length,T=new Array(h),D=0;D<h;D++)T[D]=arguments[D];return v(ee,null,[($=o["append-inner"])==null?void 0:$.call(o,...T),e.menuIcon?v(ge,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Be({isFocused:n,menu:l,select:J},i)}});export{Jt as V,xt as a};
