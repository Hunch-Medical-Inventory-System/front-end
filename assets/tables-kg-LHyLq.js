import{a9 as d,r as n,e as u,B as v}from"./index-iGX-8HYq.js";import{a as g,b as y,g as p}from"./forwardRefs-mMFjKr0-.js";const m=d("inventory",()=>{const e=n({data:[{}],count:0}),a=n({data:[{}],count:0}),t=n({data:[{}],count:0}),o=u(()=>e.value.count),s=u(()=>a.value.count),r=n(!0),c=async l=>{r.value=!0;const i=await g("inventory",l);e.value=i.currentData,a.value=i.deletedData,t.value=i.expiredData,r.value=!1};return v(()=>{c({itemsPerPage:10,page:1,keywords:""})}),{inventoryLoading:r,currentInventory:e,deletedInventory:a,expiredInventory:t,currentInventoryLength:o,deletedInventoryLength:s,retrieveInventory:c}}),S=d("supplies",()=>{const e=n({data:[{}],count:0}),a=n({data:[{}],count:0}),t=u(()=>e.value.count),o=u(()=>a.value.count),s=n(!0),r=async(c={itemsPerPage:10,page:1,keywords:""})=>{s.value=!0;const l=await y("supplies",c);e.value=l.currentData,a.value=l.deletedData,s.value=!1};return v(()=>{r()}),{suppliesLoading:s,currentSupplies:e,deletedSupplies:a,currentSuppliesLength:t,deletedSuppliesLength:o,retrieveSupplies:r}}),D=d("crew",()=>{const e=n({data:[{}],count:0}),a=u(()=>e.value.count),t=n(!0),o=async(s={itemsPerPage:10,page:1,keywords:""})=>{t.value=!0;const r=await p("crew",s);e.value=r,t.value=!1};return v(()=>{o()}),{crewLoading:t,currentCrew:e,currentCrewLength:a,retrieveCrew:o}}),f=d("logs",()=>{const e=n({data:[{}],count:0}),a=u(()=>e.value.count),t=n(!0),o=async(s={itemsPerPage:10,page:1,keywords:""})=>{t.value=!0;const r=await p("logs",s);e.value=r,t.value=!1};return v(()=>{o()}),{logsLoading:t,currentLogs:e,currentLogsLength:a,retrieveLogs:o}});export{m as a,D as b,f as c,S as u};
