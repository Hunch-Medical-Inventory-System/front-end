import{m as Z,a as $,b as ee,c as ae,d as te,e as oe,f as le,u as re,p as se,g as de,h as ue,i as ne,j as ie,k as ce,l as me,V as T,n as V,o as x}from"./VDataTable-B-lFr3p2.js";import{p as ge,g as ve,ac as be,e as m,t as l,a3 as pe,M as Pe,h as he,i as o,F as w,G as g}from"./index-JW7jFlp5.js";import{V as B}from"./VTable-KZzoyHYP.js";import{V as fe}from"./VDivider-_aBxbjCy.js";const ye=ge({itemsLength:{type:[Number,String],required:!0},...Z(),...$(),...ee()},"VDataTableServer"),xe=ve()({name:"VDataTableServer",props:ye(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,I){let{attrs:k,slots:a}=I;const{groupBy:d}=ae(e),{sortBy:r,multiSort:F,mustSort:G}=te(e),{page:u,itemsPerPage:i}=oe(e),{disableSort:R}=be(e),E=m(()=>parseInt(e.itemsLength,10)),{columns:v,headers:H}=le(e,{groupBy:d,showSelect:l(e,"showSelect"),showExpand:l(e,"showExpand")}),{items:n}=re(e,v),{toggleSort:b}=se({sortBy:r,multiSort:F,mustSort:G,page:u}),{opened:N,isGroupOpen:_,toggleGroup:C,extractRows:L}=de({groupBy:d,sortBy:r,disableSort:R}),{pageCount:O,setItemsPerPage:j}=ue({page:u,itemsPerPage:i,itemsLength:E}),{flatItems:p}=ne(n,d,N),{isSelected:q,select:A,selectAll:M,toggleSelect:W,someSelected:z,allSelected:J}=ie(e,{allItems:n,currentPage:n}),{isExpanded:K,toggleExpand:Q}=ce(e),P=m(()=>L(n.value));me({page:u,itemsPerPage:i,sortBy:r,groupBy:d,search:l(e,"search")}),pe("v-data-table",{toggleSort:b,sortBy:r}),Pe({VDataTableRows:{hideNoData:l(e,"hideNoData"),noDataText:l(e,"noDataText"),loading:l(e,"loading"),loadingText:l(e,"loadingText")}});const t=m(()=>({page:u.value,itemsPerPage:i.value,sortBy:r.value,pageCount:O.value,toggleSort:b,setItemsPerPage:j,someSelected:z.value,allSelected:J.value,isSelected:q,select:A,selectAll:M,toggleSelect:W,isExpanded:K,toggleExpand:Q,isGroupOpen:_,toggleGroup:C,items:P.value.map(c=>c.raw),internalItems:P.value,groupedItems:p.value,columns:v.value,headers:H.value}));he(()=>{const c=T.filterProps(e),U=V.filterProps(e),X=x.filterProps(e),Y=B.filterProps(e);return o(B,g({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},Y),{top:()=>{var s;return(s=a.top)==null?void 0:s.call(a,t.value)},default:()=>{var s,h,f,y,D,S;return a.default?a.default(t.value):o(w,null,[(s=a.colgroup)==null?void 0:s.call(a,t.value),!e.hideDefaultHeader&&o("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[o(V,g(U,{sticky:e.fixedHeader}),a)]),(h=a.thead)==null?void 0:h.call(a,t.value),!e.hideDefaultBody&&o("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(f=a["body.prepend"])==null?void 0:f.call(a,t.value),a.body?a.body(t.value):o(x,g(k,X,{items:p.value}),a),(y=a["body.append"])==null?void 0:y.call(a,t.value)]),(D=a.tbody)==null?void 0:D.call(a,t.value),(S=a.tfoot)==null?void 0:S.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):!e.hideDefaultFooter&&o(w,null,[o(fe,null,null),o(T,c,{prepend:a["footer.prepend"]})])})})}});export{xe as V};
