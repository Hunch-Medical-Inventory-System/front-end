import{K as v,r as s,o as _,l as V,n as a,i as o,y as c,L as n,M as C,H as l,x as r,V as N}from"./index-Ccq5fmdT.js";import{u as P,a as A}from"./tables-BN61irnK.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as U}from"./VAlert-CFLAt21d.js";import{V as B}from"./VDataTableServer-BY5eu21i.js";import{V as E,b as F}from"./VToolbar-B_v3ajuV.js";import{V as H}from"./VSelect-7dR6K1Rc.js";import{V as K}from"./VTextField-DXVXwpGg.js";import{V as R}from"./VContainer-cW0gF5vU.js";import"./VAvatar-B_NxoHvO.js";import"./VBtn-JhJAUZZA.js";import"./VDataTable-GiAb0HN6.js";import"./index-BlRq_IO5.js";const j={colspan:"9"},q={__name:"index",setup(z){const x=P(),m=A(),{suppliesLoading:I,currentSupplies:T}=v(x),{inventoryLoading:S,deletedInventory:D,deletedInventoryLength:k}=v(m),d=s(""),p=s(10),u=s(1),y=s(null),b=s([{title:"Id",key:"id"},{title:"Supply Name",key:"supply_id"},{title:"Expiry Date",key:"expiry_date"},{title:"Created At",key:"created_at"},{title:"Card Id",key:"card_id"}]),w=async()=>{m.retrieveInventory({keywords:d.value,page:u.value,itemsPerPage:p.value})},h=f=>{const t=new Date,e=new Date(f),i=24*60*60*1e3,L=(e.getTime()-t.getTime())/i;return e.getTime()<t.getTime()?"error":Math.floor(L)<=3?"warning":"success"};return(f,t)=>(_(),V(N,{class:"bg-container"},{default:a(()=>[o(R,{class:"rounded-lg"},{default:a(()=>[y.value?(_(),V(U,{key:0,border:"top",class:"mb-4 v_alert alert-pop-in",prominent:"",type:"warning"},{default:a(()=>[c(n(y.value),1)]),_:1})):C("",!0),o(B,{"items-per-page":p.value,"onUpdate:itemsPerPage":t[1]||(t[1]=e=>p.value=e),page:u.value,"onUpdate:page":t[2]||(t[2]=e=>u.value=e),headers:b.value,"item-value":"name",items:l(D).data,"items-length":l(k),loading:l(S),"onUpdate:options":w},{top:a(()=>[o(E,{class:"rounded-lg"},{default:a(()=>[o(F,null,{default:a(()=>t[3]||(t[3]=[c("Taken Inventory Table")])),_:1})]),_:1})]),item:a(({item:e})=>{var i;return[r("tr",null,[r("td",null,n(e.id),1),r("td",null,n(l(I)?"Loading...":(i=l(T).data.find(g=>g.id===e.supply_id))==null?void 0:i.item),1),r("td",null,[o(H,{color:h(e.expiry_date)},{default:a(()=>[c(n(e.expiry_date?new Date(e.expiry_date).toLocaleDateString():"N/A"),1)]),_:2},1032,["color"])]),r("td",null,n(new Date(e.created_at).toLocaleDateString()),1),r("td",null,n(e.card_id),1)])]}),tfoot:a(()=>[r("tr",null,[r("td",j,[o(K,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),class:"ma-2",density:"compact","hide-details":"",placeholder:"Search inventory..."},null,8,["modelValue"])])])]),_:1},8,["items-per-page","page","headers","items","items-length","loading"])]),_:1})]),_:1}))}},oe=M(q,[["__scopeId","data-v-c07e0dcc"]]);export{oe as default};
