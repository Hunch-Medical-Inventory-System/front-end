import{K as v,r as s,o as _,l as V,n as a,i as o,y as m,L as n,M as C,H as l,x as r,V as N}from"./index-Bs7as7vK.js";import{u as P,a as A}from"./tables-CYH4tqYX.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as U}from"./VAlert-Q5rotbyE.js";import{V as B}from"./VDataTableServer-og9qUzru.js";import{V as E,b as F}from"./VToolbar-CltBrDoH.js";import{V as H}from"./VSelect-DSUXNz2w.js";import{V as K}from"./VTextField-j2UAlX67.js";import{V as R}from"./VContainer-DAPFHBoP.js";import"./VAvatar-4GYBVBdu.js";import"./VBtn-BwPj0Eav.js";import"./VDataTable-C6KrFVMB.js";import"./index-B_ECWDhT.js";const j={colspan:"9"},q={__name:"index",setup(z){const x=P(),c=A(),{suppliesLoading:I,currentSupplies:S}=v(x),{inventoryLoading:T,deletedInventory:D,deletedInventoryLength:b}=v(c),d=s(""),p=s(10),u=s(1),f=s(null),k=s([{title:"Id",key:"id"},{title:"Supply Name",key:"supply_id"},{title:"Expiry Date",key:"expiry_date"},{title:"Created At",key:"created_at"},{title:"Card Id",key:"card_id"}]),w=async()=>{c.retrieveInventory({keywords:d.value,page:u.value,itemsPerPage:p.value})},h=y=>{const t=new Date,e=new Date(y),i=24*60*60*1e3,L=(e.getTime()-t.getTime())/i;return e.getTime()<t.getTime()?"error":Math.floor(L)<=3?"warning":"success"};return(y,t)=>(_(),V(N,{class:"bg-container"},{default:a(()=>[o(R,{class:"rounded-lg"},{default:a(()=>[f.value?(_(),V(U,{key:0,border:"top",class:"mb-4 v_alert alert-pop-in",prominent:"",type:"warning"},{default:a(()=>[m(n(f.value),1)]),_:1})):C("",!0),o(B,{"items-per-page":p.value,"onUpdate:itemsPerPage":t[1]||(t[1]=e=>p.value=e),page:u.value,"onUpdate:page":t[2]||(t[2]=e=>u.value=e),headers:k.value,"item-value":"name",items:l(D).data,"items-length":l(b),loading:l(T),"onUpdate:options":w},{top:a(()=>[o(E,{class:"rounded-lg"},{default:a(()=>[o(F,null,{default:a(()=>t[3]||(t[3]=[m("Inventory Table")])),_:1})]),_:1})]),item:a(({item:e})=>{var i;return[r("tr",null,[r("td",null,n(e.id),1),r("td",null,n(l(I)?"Loading...":(i=l(S).data.find(g=>g.id===e.supply_id))==null?void 0:i.item),1),r("td",null,[o(H,{color:h(e.expiry_date)},{default:a(()=>[m(n(e.expiry_date?new Date(e.expiry_date).toLocaleDateString():"N/A"),1)]),_:2},1032,["color"])]),r("td",null,n(new Date(e.created_at).toLocaleDateString()),1),r("td",null,n(e.card_id),1)])]}),tfoot:a(()=>[r("tr",null,[r("td",j,[o(K,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),class:"ma-2",density:"compact","hide-details":"",placeholder:"Search inventory..."},null,8,["modelValue"])])])]),_:1},8,["items-per-page","page","headers","items","items-length","loading"])]),_:1})]),_:1}))}},oe=M(q,[["__scopeId","data-v-cf99d48b"]]);export{oe as default};
