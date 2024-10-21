import{a as x,V as k,s as w}from"./VDataTableServer-D-TD4Do9.js";import{_ as D}from"./VIcon-BJSMFdui.js";import{V as h}from"./VContainer-ChFM1aVM.js";import{r as n,G as V,o as g,l as b,n as m,x as t,i as y,H as r,I as C,q as I,J as N}from"./index-D841JOJF.js";import"./VImg-DMDSht42.js";const P={colspan:"9"},S={key:0},B={__name:"profile",setup(E){const d=n(10),_=n([{title:"ID",key:"id",align:"start",divider:!0},{title:"Supply Name",key:"supply_name",align:"start",divider:!0},{title:"Crew Members",key:"crew_members",align:"start",divider:!0},{title:"Dosage",key:"dosage",align:"start",divider:!0},{title:"Quantity",key:"quantity",align:"end",divider:!0},{title:"Units per Package",key:"units_per_package",align:"end",divider:!0},{title:"Expiry Date",key:"exp_date",align:"end",divider:!0},{title:"Created At",key:"created_at",align:"end",divider:!0},{title:"Crew Member Name",key:"crew_member_name",align:"start",divider:!0}]),i=n([]),u=n(!0),p=n(0),o=n(""),f=s=>{const a=new Date,c=new Date(s)-a,l=Math.ceil(c/(1e3*60*60*24));return l<=0?"expired":l<=7?"about-to-expire":l<=30?"expiring-soon":""},v=async({page:s,itemsPerPage:a})=>{u.value=!0;const{data:e,count:c,error:l}=await w.from("Inventory").select("*",{count:"exact"}).ilike("supply_name",`%${o.value}%`).range((s-1)*a,s*a-1);l?(console.error("Error fetching data:",l),i.value=[],p.value=0):(i.value=e||[],p.value=c||0),u.value=!1};return V(()=>{v({page:1,itemsPerPage:d.value})}),(s,a)=>(g(),b(h,{rounded:"10px",class:"profile-container"},{default:m(()=>[a[3]||(a[3]=t("h1",null,"Inventory Profile",-1)),y(k,{"items-per-page":d.value,"onUpdate:itemsPerPage":a[1]||(a[1]=e=>d.value=e),headers:_.value,items:i.value,"items-length":p.value,loading:u.value,search:o.value,"item-value":"id","onUpdate:options":v},{item:m(({item:e})=>[t("tr",{class:C(f(e.exp_date))},[t("td",null,r(e.id),1),t("td",null,r(e.supply_name),1),t("td",null,r(e.crew_members),1),t("td",null,r(e.dosage),1),t("td",null,r(e.quantity),1),t("td",null,r(e.units_per_package),1),t("td",null,r(new Date(e.exp_date).toLocaleDateString()),1),t("td",null,r(new Date(e.created_at).toLocaleDateString()),1),t("td",null,r(e.crew_member_name),1)],2)]),tfoot:m(()=>[t("tr",null,[t("td",P,[y(x,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"ma-2",density:"compact",placeholder:"Search inventory...","hide-details":""},null,8,["modelValue"])])])]),_:1},8,["items-per-page","headers","items","items-length","loading","search"]),i.value.length?N("",!0):(g(),I("div",S,a[2]||(a[2]=[t("p",null,"No items in inventory yet.",-1)])))]),_:1}))}},z=D(B,[["__scopeId","data-v-1762b115"]]);export{z as default};
