import{g as o,C as f,aQ as V,m as i,D as y,p as k,U as C,b as P,c as h,d as S,h as z,i as l}from"./index-DQc5ljF0.js";import{m as I,b,f as A,c as B,e as D,h as x,V as R}from"./VIcon-C7gsGOIY.js";import{m as T,b as F,g as _,d as j,V as N,k as O,j as Q}from"./VImg-3QOI_Jq2.js";function G(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return o()({name:s??f(V(e.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...i()},setup(a,u){let{slots:t}=u;return()=>{var n;return y(a.tag,{class:[e,a.class],style:a.style},(n=t.default)==null?void 0:n.call(t))}}})}const U=k({start:Boolean,end:Boolean,icon:C,image:String,text:String,...I(),...i(),...T(),...b(),...A(),...P(),...h(),...F({variant:"flat"})},"VAvatar"),H=o()({name:"VAvatar",props:U(),setup(e,r){let{slots:s}=r;const{themeClasses:a}=S(e),{borderClasses:u}=B(e),{colorClasses:t,colorStyles:n,variantClasses:c}=_(e),{densityClasses:m}=j(e),{roundedClasses:d}=D(e),{sizeClasses:v,sizeStyles:g}=x(e);return z(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,u.value,t.value,m.value,d.value,v.value,c.value,e.class],style:[n.value,g.value,e.style]},{default:()=>[s.default?l(O,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[s.default()]}):e.image?l(N,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(R,{key:"icon",icon:e.icon},null):e.text,Q(!1,"v-avatar")]})),{}}});export{H as V,G as c};
