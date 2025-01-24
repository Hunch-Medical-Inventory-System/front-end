import{r as u,o as y,l as E,n as s,i as e,y as i,q as N,W as x,P,x as U,O as k,V as D}from"./index-iGX-8HYq.js";import{s as I}from"./forwardRefs-mMFjKr0-.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as R,a as L,b as _}from"./VCard-C3maqL4z.js";import{V as v}from"./VContainer-DW_lhNL9.js";import{V as S}from"./VDivider-BzEdnqIW.js";import{V as c}from"./VRow-5mq8-Hlh.js";import{V as w}from"./VTextField-CpljoeQE.js";import{V as B}from"./VAvatar-BWrC23BE.js";import"./density-cjMmpE6Z.js";import"./VGrid--LcyoMBU.js";import"./VImg-CjWbq3TH.js";import"./index-DJgytQhD.js";const W={key:0,class:"error"},A={__name:"NewAccountCard",setup(q){const r=u(!1),d=u(""),m=u(""),p=u(""),V=u(""),b=u(""),g=[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],o=[t=>!!t||"Password is required",t=>t&&t.length>=8||"Password must be less than 8 characters"],l=[t=>!!t||"First name is required"],f=[t=>!!t||"Last name is required"],$=async()=>{const{data:t,error:a}=await I.auth.signUp({email:p.value,password:V.value});a&&(b.value=a)};return(t,a)=>(y(),E(v,null,{default:s(()=>[e(R,{class:"pa-5 w-50"},{default:s(()=>[e(v,{class:"justify-center text-center"},{default:s(()=>[e(L,null,{default:s(()=>a[6]||(a[6]=[i("Demo Sign Up")])),_:1}),e(_,null,{default:s(()=>a[7]||(a[7]=[i("test@example.com")])),_:1}),e(_,null,{default:s(()=>a[8]||(a[8]=[i("password")])),_:1}),e(S),b.value?(y(),N("p",W,x(b.value),1)):P("",!0),e(v,null,{default:s(()=>[U("form",{onSubmit:a[5]||(a[5]=k((...n)=>t.login&&t.login(...n),["prevent"]))},[e(c,{class:"my-5"},{default:s(()=>[e(w,{clearable:"",label:"First Name",hint:"Enter your first name to access this website",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=n=>d.value=n),required:"",rules:l},null,8,["modelValue"])]),_:1}),e(c,{class:"my-5"},{default:s(()=>[e(w,{clearable:"",label:"Last Name",hint:"Enter your last name to access this website",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=n=>m.value=n),required:"",rules:f},null,8,["modelValue"])]),_:1}),e(c,{class:"my-5"},{default:s(()=>[e(w,{clearable:"",label:"Email address",hint:"Enter your email to access this website",modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=n=>p.value=n),required:"",rules:g,type:"email"},null,8,["modelValue"])]),_:1}),e(c,{class:"my-5"},{default:s(()=>[e(w,{clearable:"",label:"Password",hint:"Enter your password to access this website",modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=n=>V.value=n),required:"",rules:o,type:r.value?"text":"password","append-inner-icon":r.value?"mdi-eye-off":"mdi-eye","onClick:appendInner":a[4]||(a[4]=n=>r.value=!r.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(c,null,{default:s(()=>[e(B,{class:"button-styles",onClick:$},{default:s(()=>a[9]||(a[9]=[i("Sign Up")])),_:1})]),_:1})],32)]),_:1})]),_:1})]),_:1})]),_:1}))}},F=C(A,[["__scopeId","data-v-fa42528f"]]),M={key:0,class:"error"},T={__name:"LoginCard",setup(q){const r=u(!1),d=u(""),m=u(""),p=u(""),V=[o=>!!o||"E-mail is required",o=>/.+@.+\..+/.test(o)||"E-mail must be valid"],b=[o=>!!o||"Password is required",o=>o&&o.length>=8||"Password must be less than 8 characters"],g=async()=>{const{data:o,error:l}=await I.auth.signInWithPassword({email:d.value,password:m.value});l?p.value=l.message:p.value=""};return(o,l)=>(y(),E(v,null,{default:s(()=>[e(R,{class:"pa-5 w-50"},{default:s(()=>[e(v,{class:"justify-center text-center"},{default:s(()=>[e(L,null,{default:s(()=>l[4]||(l[4]=[i("Demo Login")])),_:1}),e(_,null,{default:s(()=>l[5]||(l[5]=[i("test@example.com")])),_:1}),e(_,null,{default:s(()=>l[6]||(l[6]=[i("password")])),_:1}),e(S),p.value?(y(),N("p",M,x(p.value),1)):P("",!0),e(v,{class:"ga-5"},{default:s(()=>[U("form",{onSubmit:l[3]||(l[3]=k((...f)=>o.login&&o.login(...f),["prevent"]))},[e(c,{class:"my-5"},{default:s(()=>[e(w,{clearable:"",label:"Email address",hint:"Enter your email to access this website",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=f=>d.value=f),required:"",rules:V,type:"email"},null,8,["modelValue"])]),_:1}),e(c,{class:"my-5"},{default:s(()=>[e(w,{clearable:"",label:"Password",hint:"Enter your password to access this website",modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=f=>m.value=f),required:"",rules:b,type:r.value?"text":"password","append-inner-icon":r.value?"mdi-eye-off":"mdi-eye","onClick:appendInner":l[2]||(l[2]=f=>r.value=!r.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(B,{class:"button-styles",type:"submit",onClick:g},{default:s(()=>l[7]||(l[7]=[i("Login")])),_:1})],32)]),_:1})]),_:1})]),_:1})]),_:1}))}},j=C(T,[["__scopeId","data-v-d3b146b4"]]),O={};function z(q,r){const d=j,m=F;return y(),E(D,{class:"bg-container"},{default:s(()=>[e(v,null,{default:s(()=>[e(d),e(m),r[0]||(r[0]=i(" test "))]),_:1})]),_:1})}const te=C(O,[["render",z],["__scopeId","data-v-7feb4adf"]]);export{te as default};
