import{p as S,ai as $,ay as W,a3 as k,$ as X,t as R,e as w,C as B,A as D,aD as F,D as O,B as z,b2 as j,al as J,am as Q,b3 as Z,S as K,b4 as ee,b5 as x}from"./index-JW7jFlp5.js";const le=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),de=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function ce(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=$("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=W();k(Symbol.for(`${t.description}:id`),i);const r=X(t,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const d=R(e,"value"),p=w(()=>!!(r.disabled.value||e.disabled));r.register({id:i,value:d,disabled:p},s),B(()=>{r.unregister(i)});const m=w(()=>r.isSelected(i)),_=w(()=>r.items.value[0].id===i),g=w(()=>r.items.value[r.items.value.length-1].id===i),f=w(()=>m.value&&[r.selectedClass.value,e.selectedClass]);return D(m,o=>{s.emit("group:selected",{value:o})},{flush:"sync"}),{id:i,isSelected:m,isFirst:_,isLast:g,toggle:()=>r.select(i,!m.value),select:o=>r.select(i,o),selectedClass:f,value:d,disabled:p,group:r}}function pe(e,t){let n=!1;const s=F([]),i=O(e,"modelValue",[],o=>o==null?[]:N(s,Q(o)),o=>{const a=ne(s,o);return e.multiple?a:a[0]}),r=$("useGroup");function d(o,a){const l=o,u=Symbol.for(`${t.description}:id`),h=Z(u,r==null?void 0:r.vnode).indexOf(a);K(l.value)==null&&(l.value=h,l.useIndexAsValue=!0),h>-1?s.splice(h,0,l):s.push(l)}function p(o){if(n)return;m();const a=s.findIndex(l=>l.id===o);s.splice(a,1)}function m(){const o=s.find(a=>!a.disabled);o&&e.mandatory==="force"&&!i.value.length&&(i.value=[o.id])}z(()=>{m()}),B(()=>{n=!0}),j(()=>{for(let o=0;o<s.length;o++)s[o].useIndexAsValue&&(s[o].value=o)});function _(o,a){const l=s.find(u=>u.id===o);if(!(a&&(l!=null&&l.disabled)))if(e.multiple){const u=i.value.slice(),v=u.findIndex(U=>U===o),h=~v;if(a=a??!h,h&&e.mandatory&&u.length<=1||!h&&e.max!=null&&u.length+1>e.max)return;v<0&&a?u.push(o):v>=0&&!a&&u.splice(v,1),i.value=u}else{const u=i.value.includes(o);if(e.mandatory&&u)return;i.value=a??!u?[o]:[]}}function g(o){if(e.multiple,i.value.length){const a=i.value[0],l=s.findIndex(h=>h.id===a);let u=(l+o)%s.length,v=s[u];for(;v.disabled&&u!==l;)u=(u+o)%s.length,v=s[u];if(v.disabled)return;i.value=[s[u].id]}else{const a=s.find(l=>!l.disabled);a&&(i.value=[a.id])}}const f={register:d,unregister:p,selected:i,select:_,disabled:R(e,"disabled"),prev:()=>g(s.length-1),next:()=>g(1),isSelected:o=>i.value.includes(o),selectedClass:w(()=>e.selectedClass),items:w(()=>s),getItemIndex:o=>te(s,o)};return k(t,f),f}function te(e,t){const n=N(e,[t]);return n.length?e.findIndex(s=>s.id===n[0]):-1}function N(e,t){const n=[];return t.forEach(s=>{const i=e.find(d=>J(s,d.value)),r=e[s];(i==null?void 0:i.value)!=null?n.push(i.id):r!=null&&n.push(r.id)}),n}function ne(e,t){const n=[];return t.forEach(s=>{const i=e.findIndex(r=>r.id===s);if(~i){const r=e[i];n.push(r.value!=null?r.value:i)}}),n}const L=Symbol("rippleStop"),ie=80;function T(e,t){e.style.transform=t,e.style.webkitTransform=t}function C(e){return e.constructor.name==="TouchEvent"}function P(e){return e.constructor.name==="KeyboardEvent"}const se=function(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!P(e)){const o=t.getBoundingClientRect(),a=C(e)?e.touches[e.touches.length-1]:e;s=a.clientX-o.left,i=a.clientY-o.top}let r=0,d=.3;(f=t._ripple)!=null&&f.circle?(d=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const p=`${(t.clientWidth-r*2)/2}px`,m=`${(t.clientHeight-r*2)/2}px`,_=n.center?p:`${s-r}px`,g=n.center?m:`${i-r}px`;return{radius:r,scale:d,x:_,y:g,centerX:p,centerY:m}},b={show(e,t){var a;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((a=t==null?void 0:t._ripple)!=null&&a.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:d,x:p,y:m,centerX:_,centerY:g}=se(e,t,n),f=`${r*2}px`;i.className="v-ripple__animation",i.style.width=f,i.style.height=f,t.appendChild(s);const o=window.getComputedStyle(t);o&&o.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),T(i,`translate(${p}, ${m}) scale3d(${d},${d},${d})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),T(i,`translate(${_}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var p;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((p=n.parentNode)==null?void 0:p.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function V(e){return typeof e>"u"||!!e}function y(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[L])){if(e[L]=!0,C(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||P(e),n._ripple.class&&(t.class=n._ripple.class),C(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{b.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},ie)}else b.show(e,n,t)}}function I(e){e[L]=!0}function c(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{c(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),b.hide(t)}}function G(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let E=!1;function H(e){!E&&(e.keyCode===x.enter||e.keyCode===x.space)&&(E=!0,y(e))}function M(e){E=!1,c(e)}function A(e){E&&(E=!1,c(e))}function Y(e,t,n){const{value:s,modifiers:i}=t,r=V(s);if(r||b.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=r,e._ripple.centered=i.center,e._ripple.circle=i.circle,ee(s)&&s.class&&(e._ripple.class=s.class),r&&!n){if(i.stop){e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("mousedown",I);return}e.addEventListener("touchstart",y,{passive:!0}),e.addEventListener("touchend",c,{passive:!0}),e.addEventListener("touchmove",G,{passive:!0}),e.addEventListener("touchcancel",c),e.addEventListener("mousedown",y),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("keydown",H),e.addEventListener("keyup",M),e.addEventListener("blur",A),e.addEventListener("dragstart",c,{passive:!0})}else!r&&n&&q(e)}function q(e){e.removeEventListener("mousedown",y),e.removeEventListener("touchstart",y),e.removeEventListener("touchend",c),e.removeEventListener("touchmove",G),e.removeEventListener("touchcancel",c),e.removeEventListener("mouseup",c),e.removeEventListener("mouseleave",c),e.removeEventListener("keydown",H),e.removeEventListener("keyup",M),e.removeEventListener("dragstart",c),e.removeEventListener("blur",A)}function re(e,t){Y(e,t,!1)}function oe(e){delete e._ripple,q(e)}function ae(e,t){if(t.value===t.oldValue)return;const n=V(t.oldValue);Y(e,t,n)}const me={mounted:re,unmounted:oe,updated:ae};export{me as R,le as a,pe as b,de as m,ce as u};
