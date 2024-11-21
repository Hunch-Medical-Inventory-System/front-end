import{$ as xt,r as O,a0 as St,p as F,a1 as A,m as Le,b as Ae,c as Oe,g as N,D as G,a2 as ee,X as Pt,d as $e,a3 as ue,s as kt,Y as de,u as wt,e as p,a4 as ae,t as T,h as K,i as o,G as B,a5 as ke,Q as we,w as ve,_ as U,a6 as Re,A as Me,a7 as q,z as oe,a8 as pt,j as $,T as It,a9 as Dt,aa as Ne,ab as J,ac as ne,ad as le,ae as ge,F as z,y as pe,af as ce,N as Ie,L as Vt,ag as Z,H as Y,Z as Tt}from"./index-Ccq5fmdT.js";import{m as Ft,i as Ee,a as _t,b as Bt,j as Ct,k as Lt,f as j,l as At,n as Ot,u as $t,L as Rt,V as De,o as Mt}from"./VBtn-JhJAUZZA.js";import{c as He,d as me,V as Nt}from"./VSelect-7dR6K1Rc.js";import{a as Et}from"./VTextField-DXVXwpGg.js";function Ve(e,l,t){return Object.keys(e).filter(a=>xt(a)&&a.endsWith(l)).reduce((a,n)=>(a[n.slice(0,-l.length)]=r=>e[n](r,t(r)),a),{})}function Ht(){const e=O([]);St(()=>e.value=[]);function l(t,a){e.value[a]=t}return{refs:e,updateRef:l}}const jt=F({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:A,default:"$first"},prevIcon:{type:A,default:"$prev"},nextIcon:{type:A,default:"$next"},lastIcon:{type:A,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Ft(),...Le(),...Ee(),..._t(),...Bt(),...Ct(),...Ae({tag:"nav"}),...Oe(),...Lt({variant:"text"})},"VPagination"),Te=N()({name:"VPagination",props:jt(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:t,emit:a}=l;const n=G(e,"modelValue"),{t:r,n:s}=ee(),{isRtl:u}=Pt(),{themeClasses:i}=$e(e),{width:c}=ue(),g=kt(-1);de(void 0,{scoped:!0});const{resizeRef:h}=wt(S=>{if(!S.length)return;const{target:v,contentRect:k}=S[0],w=v.querySelector(".v-pagination__list > *");if(!w)return;const V=k.width,_=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;g.value=P(V,_)}),d=p(()=>parseInt(e.length,10)),y=p(()=>parseInt(e.start,10)),b=p(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):g.value>=0?g.value:P(c.value,58));function P(S,v){const k=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((S-v*k)/v).toFixed(2)))}const m=p(()=>{if(d.value<=0||isNaN(d.value)||d.value>Number.MAX_SAFE_INTEGER)return[];if(b.value<=0)return[];if(b.value===1)return[n.value];if(d.value<=b.value)return ae(d.value,y.value);const S=b.value%2===0,v=S?b.value/2:Math.floor(b.value/2),k=S?v:v+1,w=d.value-v;if(k-n.value>=0)return[...ae(Math.max(1,b.value-1),y.value),e.ellipsis,d.value];if(n.value-w>=(S?1:0)){const V=b.value-1,_=d.value-V+y.value;return[y.value,e.ellipsis,...ae(V,_)]}else{const V=Math.max(1,b.value-3),_=V===1?n.value:n.value-Math.ceil(V/2)+y.value;return[y.value,e.ellipsis,...ae(V,_),e.ellipsis,d.value]}});function x(S,v,k){S.preventDefault(),n.value=v,k&&a(k,v)}const{refs:f,updateRef:D}=Ht();de({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const C=p(()=>m.value.map((S,v)=>{const k=w=>D(w,v);if(typeof S=="string")return{isActive:!1,key:`ellipsis-${v}`,page:S,props:{ref:k,ellipsis:!0,icon:!0,disabled:!0}};{const w=S===n.value;return{isActive:w,key:S,page:s(S),props:{ref:k,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,"aria-current":w,"aria-label":r(w?e.currentPageAriaLabel:e.pageAriaLabel,S),onClick:V=>x(V,S)}}}})),I=p(()=>{const S=!!e.disabled||n.value<=y.value,v=!!e.disabled||n.value>=y.value+d.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:k=>x(k,y.value,"first"),disabled:S,"aria-label":r(e.firstAriaLabel),"aria-disabled":S}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:k=>x(k,n.value-1,"prev"),disabled:S,"aria-label":r(e.previousAriaLabel),"aria-disabled":S},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:k=>x(k,n.value+1,"next"),disabled:v,"aria-label":r(e.nextAriaLabel),"aria-disabled":v},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:k=>x(k,y.value+d.value-1,"last"),disabled:v,"aria-label":r(e.lastAriaLabel),"aria-disabled":v}:void 0}});function R(){var v;const S=n.value-y.value;(v=f.value[S])==null||v.$el.focus()}function E(S){S.key===ke.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,we(R)):S.key===ke.right&&!e.disabled&&n.value<y.value+d.value-1&&(n.value=n.value+1,we(R))}return K(()=>o(e.tag,{ref:h,class:["v-pagination",i.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:E,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(I.value.first):o(j,B({_as:"VPaginationBtn"},I.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(I.value.prev):o(j,B({_as:"VPaginationBtn"},I.value.prev),null)]),C.value.map((S,v)=>o("li",{key:S.key,class:["v-pagination__item",{"v-pagination__item--is-active":S.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(S):o(j,B({_as:"VPaginationBtn"},S.props),{default:()=>[S.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(I.value.next):o(j,B({_as:"VPaginationBtn"},I.value.next),null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(I.value.last):o(j,B({_as:"VPaginationBtn"},I.value.last),null)])])]})),{}}}),Gt=F({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),je=Symbol.for("vuetify:data-table-pagination");function Kt(e){const l=G(e,"page",void 0,a=>+(a??1)),t=G(e,"itemsPerPage",void 0,a=>+(a??10));return{page:l,itemsPerPage:t}}function Wt(e){const{page:l,itemsPerPage:t,itemsLength:a}=e,n=p(()=>t.value===-1?0:t.value*(l.value-1)),r=p(()=>t.value===-1?a.value:Math.min(a.value,n.value+t.value)),s=p(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));ve(()=>{l.value>s.value&&(l.value=s.value)});function u(d){t.value=d,l.value=1}function i(){l.value=oe(l.value+1,1,s.value)}function c(){l.value=oe(l.value-1,1,s.value)}function g(d){l.value=oe(d,1,s.value)}const h={page:l,itemsPerPage:t,startIndex:n,stopIndex:r,pageCount:s,itemsLength:a,nextPage:i,prevPage:c,setPage:g,setItemsPerPage:u};return U(je,h),h}function zt(){const e=q(je);if(!e)throw new Error("Missing pagination!");return e}function Ut(e){const l=Re("usePaginatedItems"),{items:t,startIndex:a,stopIndex:n,itemsPerPage:r}=e,s=p(()=>r.value<=0?t.value:t.value.slice(a.value,n.value));return Me(s,u=>{l.emit("update:currentItems",u)}),{paginatedItems:s}}const Ge=F({prevIcon:{type:A,default:"$prev"},nextIcon:{type:A,default:"$next"},firstIcon:{type:A,default:"$first"},lastIcon:{type:A,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Fe=N()({name:"VDataTableFooter",props:Ge(),setup(e,l){let{slots:t}=l;const{t:a}=ee(),{page:n,pageCount:r,startIndex:s,stopIndex:u,itemsLength:i,itemsPerPage:c,setItemsPerPage:g}=zt(),h=p(()=>e.itemsPerPageOptions.map(d=>typeof d=="number"?{value:d,title:d===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(d)}:{...d,title:isNaN(Number(d.title))?a(d.title):d.title}));return K(()=>{var y;const d=Te.filterProps(e);return o("div",{class:"v-data-table-footer"},[(y=t.prepend)==null?void 0:y.call(t),o("div",{class:"v-data-table-footer__items-per-page"},[o("span",null,[a(e.itemsPerPageText)]),o(He,{items:h.value,modelValue:c.value,"onUpdate:modelValue":b=>g(Number(b)),density:"compact",variant:"outlined","hide-details":!0},null)]),o("div",{class:"v-data-table-footer__info"},[o("div",null,[a(e.pageText,i.value?s.value+1:0,u.value,i.value)])]),o("div",{class:"v-data-table-footer__pagination"},[o(Te,B({modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},d),null)])])}),{}}}),re=pt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:t}=l;const a=e.tag??"td";return o(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:$(e.height),width:$(e.width),maxWidth:$(e.maxWidth),left:$(e.fixedOffset||null)}},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}),qt=F({headers:Array},"DataTable-header"),Ke=Symbol.for("vuetify:data-table-headers"),We={title:"",sortable:!1},Qt={...We,width:48};function Xt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(t=>({element:t,priority:0}));return{enqueue:(t,a)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>a){l.splice(r,0,{element:t,priority:a}),n=!0;break}n||l.push({element:t,priority:a})},size:()=>l.length,count:()=>{let t=0;if(!l.length)return 0;const a=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===a&&(t+=1);return t},dequeue:()=>l.shift()}}function fe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const t of e.children)fe(t,l);return l}function ze(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of e)t.key&&l.add(t.key),t.children&&ze(t.children,l);return l}function Yt(e){if(e.key){if(e.key==="data-table-group")return We;if(["data-table-expand","data-table-select"].includes(e.key))return Qt}}function be(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(t=>be(t,l+1))):l}function Zt(e){let l=!1;function t(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(s&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)t(r.children[u],!0);else l?isNaN(+r.width)&&Dt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)t(r.children[u]);else l=!1}for(let r=e.length-1;r>=0;r--)t(e[r]);function a(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return s;if(r.children){r.fixedOffset=s;for(const u of r.children)s=a(u,s)}else r.fixed&&(r.fixedOffset=s,s+=parseFloat(r.width||"0")||0);return s}let n=0;for(const r of e)n=a(r,n)}function Jt(e,l){const t=[];let a=0;const n=Xt(e);for(;n.size()>0;){let s=n.count();const u=[];let i=1;for(;s>0;){const{element:c,priority:g}=n.dequeue(),h=l-a-be(c);if(u.push({...c,rowspan:h??1,colspan:c.children?fe(c).length:1}),c.children)for(const d of c.children){const y=g%1+i/Math.pow(10,a+2);n.enqueue(d,a+h+y)}i+=1,s-=1}a+=1,t.push(u)}return{columns:e.map(s=>fe(s)).flat(),headers:t}}function Ue(e){const l=[];for(const t of e){const a={...Yt(t),...t},n=a.key??(typeof a.value=="string"?a.value:null),r=a.value??n??null,s={...a,key:n,value:r,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?Ue(a.children):void 0};l.push(s)}return l}function ea(e,l){const t=O([]),a=O([]),n=O({}),r=O({}),s=O({});ve(()=>{var P,m,x;const c=(e.headers||Object.keys(e.items[0]??{}).map(f=>({key:f,title:It(f)}))).slice(),g=ze(c);(P=l==null?void 0:l.groupBy)!=null&&P.value.length&&!g.has("data-table-group")&&c.unshift({key:"data-table-group",title:"Group"}),(m=l==null?void 0:l.showSelect)!=null&&m.value&&!g.has("data-table-select")&&c.unshift({key:"data-table-select"}),(x=l==null?void 0:l.showExpand)!=null&&x.value&&!g.has("data-table-expand")&&c.push({key:"data-table-expand"});const h=Ue(c);Zt(h);const d=Math.max(...h.map(f=>be(f)))+1,y=Jt(h,d);t.value=y.headers,a.value=y.columns;const b=y.headers.flat(1);for(const f of b)f.key&&(f.sortable&&(f.sort&&(n.value[f.key]=f.sort),f.sortRaw&&(r.value[f.key]=f.sortRaw)),f.filter&&(s.value[f.key]=f.filter))});const u={headers:t,columns:a,sortFunctions:n,sortRawFunctions:r,filterFunctions:s};return U(Ke,u),u}function se(){const e=q(Ke);if(!e)throw new Error("Missing headers!");return e}const ta={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:l,value:t}=e;return new Set(t?[(a=l[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},qe={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,currentPage:t,selected:a}=e;return qe.select({items:t,value:l,selected:a})}},Qe={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,allItems:t,selected:a}=e;return Qe.select({items:t,value:l,selected:a})}},aa=F({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ne}},"DataTable-select"),Xe=Symbol.for("vuetify:data-table-selection");function la(e,l){let{allItems:t,currentPage:a}=l;const n=G(e,"modelValue",e.modelValue,x=>new Set(J(x).map(f=>{var D;return((D=t.value.find(C=>e.valueComparator(f,C.value)))==null?void 0:D.value)??f})),x=>[...x.values()]),r=p(()=>t.value.filter(x=>x.selectable)),s=p(()=>a.value.filter(x=>x.selectable)),u=p(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ta;case"all":return Qe;case"page":default:return qe}});function i(x){return J(x).every(f=>n.value.has(f.value))}function c(x){return J(x).some(f=>n.value.has(f.value))}function g(x,f){const D=u.value.select({items:x,value:f,selected:new Set(n.value)});n.value=D}function h(x){g([x],!i([x]))}function d(x){const f=u.value.selectAll({value:x,allItems:r.value,currentPage:s.value,selected:new Set(n.value)});n.value=f}const y=p(()=>n.value.size>0),b=p(()=>{const x=u.value.allSelected({allItems:r.value,currentPage:s.value});return!!x.length&&i(x)}),P=p(()=>u.value.showSelectAll),m={toggleSelect:h,select:g,selectAll:d,isSelected:i,isSomeSelected:c,someSelected:y,allSelected:b,showSelectAll:P};return U(Xe,m),m}function ie(){const e=q(Xe);if(!e)throw new Error("Missing selection!");return e}const na=F({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Ye=Symbol.for("vuetify:data-table-sort");function ra(e){const l=G(e,"sortBy"),t=T(e,"mustSort"),a=T(e,"multiSort");return{sortBy:l,mustSort:t,multiSort:a}}function ua(e){const{sortBy:l,mustSort:t,multiSort:a,page:n}=e,r=i=>{if(i.key==null)return;let c=l.value.map(h=>({...h}))??[];const g=c.find(h=>h.key===i.key);g?g.order==="desc"?t.value?g.order="asc":c=c.filter(h=>h.key!==i.key):g.order="desc":a.value?c=[...c,{key:i.key,order:"asc"}]:c=[{key:i.key,order:"asc"}],l.value=c,n&&(n.value=1)};function s(i){return!!l.value.find(c=>c.key===i.key)}const u={sortBy:l,toggleSort:r,isSorted:s};return U(Ye,u),u}function Ze(){const e=q(Ye);if(!e)throw new Error("Missing sort!");return e}function sa(e,l,t,a){const n=ee();return{sortedItems:p(()=>{var s,u;return t.value.length?ia(l.value,t.value,n.current.value,{transform:a==null?void 0:a.transform,sortFunctions:{...e.customKeySort,...(s=a==null?void 0:a.sortFunctions)==null?void 0:s.value},sortRawFunctions:(u=a==null?void 0:a.sortRawFunctions)==null?void 0:u.value}):l.value})}}function ia(e,l,t,a){const n=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return e.map(s=>[s,a!=null&&a.transform?a.transform(s):s]).sort((s,u)=>{var i,c;for(let g=0;g<l.length;g++){let h=!1;const d=l[g].key,y=l[g].order??"asc";if(y===!1)continue;let b=ne(s[1],d),P=ne(u[1],d),m=s[0].raw,x=u[0].raw;if(y==="desc"&&([b,P]=[P,b],[m,x]=[x,m]),(i=a==null?void 0:a.sortRawFunctions)!=null&&i[d]){const f=a.sortRawFunctions[d](m,x);if(f==null)continue;if(h=!0,f)return f}if((c=a==null?void 0:a.sortFunctions)!=null&&c[d]){const f=a.sortFunctions[d](b,P);if(f==null)continue;if(h=!0,f)return f}if(!h){if(b instanceof Date&&P instanceof Date)return b.getTime()-P.getTime();if([b,P]=[b,P].map(f=>f!=null?f.toString().toLocaleLowerCase():f),b!==P)return le(b)&&le(P)?0:le(b)?-1:le(P)?1:!isNaN(b)&&!isNaN(P)?Number(b)-Number(P):n.compare(b,P)}}return 0}).map(s=>{let[u]=s;return u})}const Je=F({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:A,default:"$sortAsc"},sortDescIcon:{type:A,default:"$sortDesc"},headerProps:{type:Object},...ge(),...At()},"VDataTableHeaders"),_e=N()({name:"VDataTableHeaders",props:Je(),setup(e,l){let{slots:t}=l;const{t:a}=ee(),{toggleSort:n,sortBy:r,isSorted:s}=Ze(),{someSelected:u,allSelected:i,selectAll:c,showSelectAll:g}=ie(),{columns:h,headers:d}=se(),{loaderClasses:y}=Ot(e);function b(S,v){if(!(!e.sticky&&!S.fixed))return{position:"sticky",left:S.fixed?$(S.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${v})`:void 0}}function P(S){const v=r.value.find(k=>k.key===S.key);return v?v.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:m,backgroundColorStyles:x}=$t(e,"color"),{displayClasses:f,mobile:D}=ue(e),C=p(()=>({headers:d.value,columns:h.value,toggleSort:n,isSorted:s,sortBy:r.value,someSelected:u.value,allSelected:i.value,selectAll:c,getSortIcon:P})),I=p(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},f.value,y.value]),R=S=>{let{column:v,x:k,y:w}=S;const V=v.key==="data-table-select"||v.key==="data-table-expand",_=B(e.headerProps??{},v.headerProps??{});return o(re,B({tag:"th",align:v.align,class:[{"v-data-table__th--sortable":v.sortable&&!e.disableSort,"v-data-table__th--sorted":s(v),"v-data-table__th--fixed":v.fixed},...I.value],style:{width:$(v.width),minWidth:$(v.minWidth),maxWidth:$(v.maxWidth),...b(v,w)},colspan:v.colspan,rowspan:v.rowspan,onClick:v.sortable?()=>n(v):void 0,fixed:v.fixed,nowrap:v.nowrap,lastFixed:v.lastFixed,noPadding:V},_),{default:()=>{var W;const H=`header.${v.key}`,te={column:v,selectAll:c,isSorted:s,toggleSort:n,sortBy:r.value,someSelected:u.value,allSelected:i.value,getSortIcon:P};return t[H]?t[H](te):v.key==="data-table-select"?((W=t["header.data-table-select"])==null?void 0:W.call(t,te))??(g.value&&o(me,{modelValue:i.value,indeterminate:u.value&&!i.value,"onUpdate:modelValue":c},null)):o("div",{class:"v-data-table-header__content"},[o("span",null,[v.title]),v.sortable&&!e.disableSort&&o(De,{key:"icon",class:"v-data-table-header__sort-icon",icon:P(v)},null),e.multiSort&&s(v)&&o("div",{key:"badge",class:["v-data-table-header__sort-badge",...m.value],style:x.value},[r.value.findIndex(Q=>Q.key===v.key)+1])])}})},E=()=>{const S=B(e.headerProps??{}??{}),v=p(()=>h.value.filter(w=>(w==null?void 0:w.sortable)&&!e.disableSort)),k=p(()=>{if(h.value.find(V=>V.key==="data-table-select")!=null)return i.value?"$checkboxOn":u.value?"$checkboxIndeterminate":"$checkboxOff"});return o(re,B({tag:"th",class:[...I.value],colspan:d.value.length+1},S),{default:()=>[o("div",{class:"v-data-table-header__content"},[o(He,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:v.value,label:a("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:k.value,"onClick:append":()=>c(!i.value)},{...t,chip:w=>{var V;return o(Nt,{onClick:(V=w.item.raw)!=null&&V.sortable?()=>n(w.item.raw):void 0,onMousedown:_=>{_.preventDefault(),_.stopPropagation()}},{default:()=>[w.item.title,o(De,{class:["v-data-table__td-sort-icon",s(w.item.raw)&&"v-data-table__td-sort-icon-active"],icon:P(w.item.raw),size:"small"},null)]})}})])]})};K(()=>D.value?o("tr",null,[o(E,null,null)]):o(z,null,[t.headers?t.headers(C.value):d.value.map((S,v)=>o("tr",null,[S.map((k,w)=>o(R,{column:k,x:w,y:v},null))])),e.loading&&o("tr",{class:"v-data-table-progress"},[o("th",{colspan:h.value.length},[o(Rt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:t.loader})])])]))}}),oa=F({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),et=Symbol.for("vuetify:data-table-group");function ca(e){return{groupBy:G(e,"groupBy")}}function da(e){const{disableSort:l,groupBy:t,sortBy:a}=e,n=O(new Set),r=p(()=>t.value.map(g=>({...g,order:g.order??!1})).concat(l!=null&&l.value?[]:a.value));function s(g){return n.value.has(g.id)}function u(g){const h=new Set(n.value);s(g)?h.delete(g.id):h.add(g.id),n.value=h}function i(g){function h(d){const y=[];for(const b of d.items)"type"in b&&b.type==="group"?y.push(...h(b)):y.push(b);return y}return h({type:"group",items:g,id:"dummy",key:"dummy",value:"dummy",depth:0})}const c={sortByWithGroups:r,toggleGroup:u,opened:n,groupBy:t,extractRows:i,isGroupOpen:s};return U(et,c),c}function tt(){const e=q(et);if(!e)throw new Error("Missing group!");return e}function fa(e,l){if(!e.length)return[];const t=new Map;for(const a of e){const n=ne(a.raw,l);t.has(n)||t.set(n,[]),t.get(n).push(a)}return t}function at(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=fa(e,l[0]),r=[],s=l.slice(1);return n.forEach((u,i)=>{const c=l[0],g=`${a}_${c}_${i}`;r.push({depth:t,id:g,key:c,value:i,items:s.length?at(u,s,t+1,g):u,type:"group"})}),r}function lt(e,l){const t=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(l.has(a.id)||a.value==null)&&t.push(...lt(a.items,l))):t.push(a);return t}function va(e,l,t){return{flatItems:p(()=>{if(!l.value.length)return e.value;const n=at(e.value,l.value.map(r=>r.key));return lt(n,t.value)})}}const ga=F({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ma=N()({name:"VDataTableGroupHeaderRow",props:ga(),setup(e,l){let{slots:t}=l;const{isGroupOpen:a,toggleGroup:n,extractRows:r}=tt(),{isSelected:s,isSomeSelected:u,select:i}=ie(),{columns:c}=se(),g=p(()=>r([e.item]));return()=>o("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(h=>{var d,y;if(h.key==="data-table-group"){const b=a(e.item)?"$expand":"$next",P=()=>n(e.item);return((d=t["data-table-group"])==null?void 0:d.call(t,{item:e.item,count:g.value.length,props:{icon:b,onClick:P}}))??o(re,{class:"v-data-table-group-header-row__column"},{default:()=>[o(j,{size:"small",variant:"text",icon:b,onClick:P},null),o("span",null,[e.item.value]),o("span",null,[pe("("),g.value.length,pe(")")])]})}if(h.key==="data-table-select"){const b=s(g.value),P=u(g.value)&&!b,m=x=>i(g.value,x);return((y=t["data-table-select"])==null?void 0:y.call(t,{props:{modelValue:b,indeterminate:P,"onUpdate:modelValue":m}}))??o("td",null,[o(me,{modelValue:b,indeterminate:P,"onUpdate:modelValue":m},null)])}return o("td",null,null)})])}}),ba=F({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),nt=Symbol.for("vuetify:datatable:expanded");function ha(e){const l=T(e,"expandOnClick"),t=G(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function a(u,i){const c=new Set(t.value);i?c.add(u.value):c.delete(u.value),t.value=c}function n(u){return t.value.has(u.value)}function r(u){a(u,!n(u))}const s={expand:a,expanded:t,expandOnClick:l,isExpanded:n,toggleExpand:r};return U(nt,s),s}function rt(){const e=q(nt);if(!e)throw new Error("foo");return e}const ya=F({index:Number,item:Object,cellProps:[Object,Function],onClick:ce(),onContextmenu:ce(),onDblclick:ce(),...ge()},"VDataTableRow"),xa=N()({name:"VDataTableRow",props:ya(),setup(e,l){let{slots:t}=l;const{displayClasses:a,mobile:n}=ue(e,"v-data-table__tr"),{isSelected:r,toggleSelect:s,someSelected:u,allSelected:i,selectAll:c}=ie(),{isExpanded:g,toggleExpand:h}=rt(),{toggleSort:d,sortBy:y,isSorted:b}=Ze(),{columns:P}=se();K(()=>o("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},a.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&P.value.map((m,x)=>{const f=e.item,D=`item.${m.key}`,C=`header.${m.key}`,I={index:e.index,item:f.raw,internalItem:f,value:ne(f.columns,m.key),column:m,isSelected:r,toggleSelect:s,isExpanded:g,toggleExpand:h},R={column:m,selectAll:c,isSorted:b,toggleSort:d,sortBy:y.value,someSelected:u.value,allSelected:i.value,getSortIcon:()=>""},E=typeof e.cellProps=="function"?e.cellProps({index:I.index,item:I.item,internalItem:I.internalItem,value:I.value,column:m}):e.cellProps,S=typeof m.cellProps=="function"?m.cellProps({index:I.index,item:I.item,internalItem:I.internalItem,value:I.value}):m.cellProps;return o(re,B({align:m.align,class:{"v-data-table__td--expanded-row":m.key==="data-table-expand","v-data-table__td--select-row":m.key==="data-table-select"},fixed:m.fixed,fixedOffset:m.fixedOffset,lastFixed:m.lastFixed,maxWidth:n.value?void 0:m.maxWidth,noPadding:m.key==="data-table-select"||m.key==="data-table-expand",nowrap:m.nowrap,width:n.value?void 0:m.width},E,S),{default:()=>{var k,w,V,_,H;if(t[D]&&!n.value)return(k=t[D])==null?void 0:k.call(t,I);if(m.key==="data-table-select")return((w=t["item.data-table-select"])==null?void 0:w.call(t,I))??o(me,{disabled:!f.selectable,modelValue:r([f]),onClick:Ie(()=>s(f),["stop"])},null);if(m.key==="data-table-expand")return((V=t["item.data-table-expand"])==null?void 0:V.call(t,I))??o(j,{icon:g(f)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ie(()=>h(f),["stop"])},null);const v=Vt(I.value);return n.value?o(z,null,[o("div",{class:"v-data-table__td-title"},[((_=t[C])==null?void 0:_.call(t,R))??m.title]),o("div",{class:"v-data-table__td-value"},[((H=t[D])==null?void 0:H.call(t,I))??v])]):v}})})]))}}),ut=F({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...ge()},"VDataTableRows"),Be=N()({name:"VDataTableRows",inheritAttrs:!1,props:ut(),setup(e,l){let{attrs:t,slots:a}=l;const{columns:n}=se(),{expandOnClick:r,toggleExpand:s,isExpanded:u}=rt(),{isSelected:i,toggleSelect:c}=ie(),{toggleGroup:g,isGroupOpen:h}=tt(),{t:d}=ee(),{mobile:y}=ue(e);return K(()=>{var b,P;return e.loading&&(!e.items.length||a.loading)?o("tr",{class:"v-data-table-rows-loading",key:"loading"},[o("td",{colspan:n.value.length},[((b=a.loading)==null?void 0:b.call(a))??d(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?o("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[o("td",{colspan:n.value.length},[((P=a["no-data"])==null?void 0:P.call(a))??d(e.noDataText)])]):o(z,null,[e.items.map((m,x)=>{var C;if(m.type==="group"){const I={index:x,item:m,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:i,toggleSelect:c,toggleGroup:g,isGroupOpen:h};return a["group-header"]?a["group-header"](I):o(ma,B({key:`group-header_${m.id}`,item:m},Ve(t,":group-header",()=>I)),a)}const f={index:x,item:m.raw,internalItem:m,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:i,toggleSelect:c},D={...f,props:B({key:`item_${m.key??m.index}`,onClick:r.value?()=>{s(m)}:void 0,index:x,item:m,cellProps:e.cellProps,mobile:y.value},Ve(t,":row",()=>f),typeof e.rowProps=="function"?e.rowProps({item:f.item,index:f.index,internalItem:f.internalItem}):e.rowProps)};return o(z,{key:D.props.key},[a.item?a.item(D):o(xa,D.props,a),u(m)&&((C=a["expanded-row"])==null?void 0:C.call(a,f))])})])}),{}}}),st=F({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Le(),...Ee(),...Ae(),...Oe()},"VTable"),Ce=N()({name:"VTable",props:st(),setup(e,l){let{slots:t,emit:a}=l;const{themeClasses:n}=$e(e),{densityClasses:r}=Mt(e);return K(()=>o(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var s,u,i;return[(s=t.top)==null?void 0:s.call(t),t.default?o("div",{class:"v-table__wrapper",style:{height:$(e.height)}},[o("table",null,[t.default()])]):(u=t.wrapper)==null?void 0:u.call(t),(i=t.bottom)==null?void 0:i.call(t)]}})),{}}}),Sa=F({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Pa(e,l,t,a){const n=e.returnObject?l:Z(l,e.itemValue),r=Z(l,e.itemSelectable,!0),s=a.reduce((u,i)=>(i.key!=null&&(u[i.key]=Z(l,i.value)),u),{});return{type:"item",key:e.returnObject?Z(l,e.itemValue):n,index:t,value:n,selectable:r,columns:s,raw:l}}function ka(e,l,t){return l.map((a,n)=>Pa(e,a,n,t))}function wa(e,l){return{items:p(()=>ka(e,e.items,l.value))}}function pa(e){let{page:l,itemsPerPage:t,sortBy:a,groupBy:n,search:r}=e;const s=Re("VDataTable"),u=p(()=>({page:l.value,itemsPerPage:t.value,sortBy:a.value,groupBy:n.value,search:r.value}));let i=null;Me(u,()=>{Ne(i,u.value)||(i&&i.search!==u.value.search&&(l.value=1),s.emit("update:options",u.value),i=u.value)},{deep:!0,immediate:!0})}const Ia=(e,l,t)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),Da=F({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Va(e,l,t){var u;const a=[],n=(t==null?void 0:t.default)??Ia,r=t!=null&&t.filterKeys?J(t.filterKeys):!1,s=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return a;e:for(let i=0;i<e.length;i++){const[c,g=c]=J(e[i]),h={},d={};let y=-1;if((l||s>0)&&!(t!=null&&t.noFilter)){if(typeof c=="object"){const m=r||Object.keys(g);for(const x of m){const f=Z(g,x),D=(u=t==null?void 0:t.customKeyFilter)==null?void 0:u[x];if(y=D?D(f,l,c):n(f,l,c),y!==-1&&y!==!1)D?h[x]=y:d[x]=y;else if((t==null?void 0:t.filterMode)==="every")continue e}}else y=n(c,l,c),y!==-1&&y!==!1&&(d.title=y);const b=Object.keys(d).length,P=Object.keys(h).length;if(!b&&!P||(t==null?void 0:t.filterMode)==="union"&&P!==s&&!b||(t==null?void 0:t.filterMode)==="intersection"&&(P!==s||!b))continue}a.push({index:i,matches:{...d,...h}})}return a}function Ta(e,l,t,a){const n=O([]),r=O(new Map),s=p(()=>a!=null&&a.transform?Y(l).map(i=>[i,a.transform(i)]):Y(l));ve(()=>{const i=typeof t=="function"?t():Y(t),c=typeof i!="string"&&typeof i!="number"?"":String(i),g=Va(s.value,c,{customKeyFilter:{...e.customKeyFilter,...Y(a==null?void 0:a.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),h=Y(l),d=[],y=new Map;g.forEach(b=>{let{index:P,matches:m}=b;const x=h[P];d.push(x),y.set(x.value,m)}),n.value=d,r.value=y});function u(i){return r.value.get(i.value)}return{filteredItems:n,filteredMatches:r,getMatches:u}}const Fa=F({...ut(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...ba(),...oa(),...qt(),...Sa(),...aa(),...na(),...Je(),...st()},"DataTable"),_a=F({...Gt(),...Fa(),...Da(),...Ge()},"VDataTable"),Oa=N()({name:"VDataTable",props:_a(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:t,slots:a}=l;const{groupBy:n}=ca(e),{sortBy:r,multiSort:s,mustSort:u}=ra(e),{page:i,itemsPerPage:c}=Kt(e),{disableSort:g}=Tt(e),{columns:h,headers:d,sortFunctions:y,sortRawFunctions:b,filterFunctions:P}=ea(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:m}=wa(e,h),x=T(e,"search"),{filteredItems:f}=Ta(e,m,x,{transform:M=>M.columns,customKeyFilter:P}),{toggleSort:D}=ua({sortBy:r,multiSort:s,mustSort:u,page:i}),{sortByWithGroups:C,opened:I,extractRows:R,isGroupOpen:E,toggleGroup:S}=da({groupBy:n,sortBy:r,disableSort:g}),{sortedItems:v}=sa(e,f,C,{transform:M=>({...M.raw,...M.columns}),sortFunctions:y,sortRawFunctions:b}),{flatItems:k}=va(v,n,I),w=p(()=>k.value.length),{startIndex:V,stopIndex:_,pageCount:H,setItemsPerPage:te}=Wt({page:i,itemsPerPage:c,itemsLength:w}),{paginatedItems:W}=Ut({items:k,startIndex:V,stopIndex:_,itemsPerPage:c}),Q=p(()=>R(W.value)),{isSelected:it,select:ot,selectAll:ct,toggleSelect:dt,someSelected:ft,allSelected:vt}=la(e,{allItems:m,currentPage:Q}),{isExpanded:gt,toggleExpand:mt}=ha(e);pa({page:i,itemsPerPage:c,sortBy:r,groupBy:n,search:x}),de({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const L=p(()=>({page:i.value,itemsPerPage:c.value,sortBy:r.value,pageCount:H.value,toggleSort:D,setItemsPerPage:te,someSelected:ft.value,allSelected:vt.value,isSelected:it,select:ot,selectAll:ct,toggleSelect:dt,isExpanded:gt,toggleExpand:mt,isGroupOpen:E,toggleGroup:S,items:Q.value.map(M=>M.raw),internalItems:Q.value,groupedItems:W.value,columns:h.value,headers:d.value}));return K(()=>{const M=Fe.filterProps(e),bt=_e.filterProps(e),ht=Be.filterProps(e),yt=Ce.filterProps(e);return o(Ce,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},yt),{top:()=>{var X;return(X=a.top)==null?void 0:X.call(a,L.value)},default:()=>{var X,he,ye,xe,Se,Pe;return a.default?a.default(L.value):o(z,null,[(X=a.colgroup)==null?void 0:X.call(a,L.value),!e.hideDefaultHeader&&o("thead",{key:"thead"},[o(_e,bt,a)]),(he=a.thead)==null?void 0:he.call(a,L.value),!e.hideDefaultBody&&o("tbody",null,[(ye=a["body.prepend"])==null?void 0:ye.call(a,L.value),a.body?a.body(L.value):o(Be,B(t,ht,{items:W.value}),a),(xe=a["body.append"])==null?void 0:xe.call(a,L.value)]),(Se=a.tbody)==null?void 0:Se.call(a,L.value),(Pe=a.tfoot)==null?void 0:Pe.call(a,L.value)])},bottom:()=>a.bottom?a.bottom(L.value):!e.hideDefaultFooter&&o(z,null,[o(Et,null,null),o(Fe,M,{prepend:a["footer.prepend"]})])})}),{}}});export{Fe as V,Fa as a,Ge as b,ca as c,ra as d,Kt as e,ea as f,da as g,Wt as h,va as i,la as j,ha as k,pa as l,Gt as m,_e as n,Be as o,ua as p,Ce as q,Oa as r,wa as u};
