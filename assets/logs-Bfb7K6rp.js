import{K as v,r as l,o as b,l as w,n as t,i as o,y as u,L as n,M as h,H as r,x as s,V as P}from"./index-Ccq5fmdT.js";import{b as N,c as D}from"./tables-BN61irnK.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as A}from"./VAlert-CFLAt21d.js";import{V as B}from"./VDataTableServer-BY5eu21i.js";import{V as I,b as M}from"./VToolbar-B_v3ajuV.js";import{V as F}from"./VSelect-7dR6K1Rc.js";import{V as H}from"./VTextField-DXVXwpGg.js";import{V as K}from"./VContainer-cW0gF5vU.js";import"./VAvatar-B_NxoHvO.js";import"./VBtn-JhJAUZZA.js";import"./VDataTable-GiAb0HN6.js";import"./index-BlRq_IO5.js";const R={colspan:"9"},j={__name:"logs",setup(q){const L=N(),c=D(),{crewLoading:y,currentCrew:g}=v(L),{logsLoading:C,currentLogs:S,currentLogsLength:T}=v(c),d=l(""),i=l(10),m=l(1),f=l(null),k=l([{title:"Id",key:"id"},{title:"Crew Name",key:"crew_member_id"},{title:"Created At",key:"created_at"}]),x=async()=>{c.retrieveLogs({keywords:d.value,page:m.value,itemsPerPage:i.value})};return(z,a)=>(b(),w(P,{class:"bg-container"},{default:t(()=>[o(K,{class:"rounded-lg"},{default:t(()=>[f.value?(b(),w(A,{key:0,border:"top",class:"mb-4 v_alert alert-pop-in",prominent:"",type:"warning"},{default:t(()=>[u(n(f.value),1)]),_:1})):h("",!0),o(B,{"items-per-page":i.value,"onUpdate:itemsPerPage":a[1]||(a[1]=e=>i.value=e),page:m.value,"onUpdate:page":a[2]||(a[2]=e=>m.value=e),headers:k.value,"item-value":"name",items:r(S).data,"items-length":r(T),loading:r(C),"onUpdate:options":x},{top:t(()=>[o(I,{class:"rounded-lg"},{default:t(()=>[o(M,null,{default:t(()=>a[3]||(a[3]=[u("Logs Table")])),_:1})]),_:1})]),item:t(({item:e})=>[s("tr",null,[s("td",null,n(e.id),1),s("td",null,[o(F,null,{default:t(()=>{var _,V;return[u(n(r(y)?"Loading...":((_=r(g).data.find(p=>p.id===e.crew_member_id))==null?void 0:_.first_name)+" "+((V=r(g).data.find(p=>p.id===e.crew_member_id))==null?void 0:V.last_name)),1)]}),_:2},1024)]),s("td",null,n(new Date(e.created_at).toLocaleDateString()),1)])]),tfoot:t(()=>[s("tr",null,[s("td",R,[o(H,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),class:"ma-2",density:"compact","hide-details":"",placeholder:"Search logs..."},null,8,["modelValue"])])])]),_:1},8,["items-per-page","page","headers","items","items-length","loading"])]),_:1})]),_:1}))}},oe=U(j,[["__scopeId","data-v-cc64f9c8"]]);export{oe as default};
