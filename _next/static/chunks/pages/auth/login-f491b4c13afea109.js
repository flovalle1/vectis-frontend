(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{2505:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return i(8388)}])},2540:function(e,s,i){"use strict";i.d(s,{T:function(){return t}});var n=i(5893),r=i(2734);let t=()=>{let e=(0,r.Z)(),s=e.palette.primary.main;return(0,n.jsxs)("svg",{fill:"none",height:"100%",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{opacity:.16,d:"M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z",fill:s}),(0,n.jsx)("path",{d:"M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z",fill:s})]})}},2662:function(e,s,i){"use strict";i.d(s,{a:function(){return t}});var n=i(7294),r=i(249);let t=()=>(0,n.useContext)(r.Vo)},8354:function(e,s,i){"use strict";i.d(s,{A:function(){return h}});var n=i(5893),r=i(5697),t=i.n(r),a=i(1664),l=i.n(a),o=i(7357),d=i(1426),c=i(5861),u=i(2540);let h=e=>{let{children:s}=e;return(0,n.jsx)(o.Z,{component:"main",sx:{display:"flex",flex:"1 1 auto"},children:(0,n.jsxs)(d.Z,{container:!0,sx:{flex:"1 1 auto"},children:[(0,n.jsxs)(d.Z,{xs:12,lg:6,sx:{backgroundColor:"background.paper",display:"flex",flexDirection:"column",position:"relative"},children:[(0,n.jsx)(o.Z,{component:"header",sx:{left:0,p:3,position:"fixed",top:0,width:"100%"},children:(0,n.jsx)(o.Z,{component:l(),href:"/",sx:{display:"inline-flex",height:32,width:32},children:(0,n.jsx)(u.T,{})})}),s]}),(0,n.jsx)(d.Z,{xs:12,lg:6,sx:{alignItems:"center",background:"radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",color:"white",display:"flex",justifyContent:"center","& img":{maxWidth:"100%"}},children:(0,n.jsxs)(o.Z,{sx:{p:3},children:[(0,n.jsxs)(c.Z,{align:"center",color:"inherit",sx:{fontSize:"24px",lineHeight:"32px",mb:1},variant:"h1",children:["Welcome to"," ",(0,n.jsx)(o.Z,{component:"a",sx:{color:"#15B79E"},target:"_blank",children:"Devias Kit"})]}),(0,n.jsx)(c.Z,{align:"center",sx:{mb:3},variant:"subtitle1",children:"A professional kit that comes with ready-to-use MUI components."}),(0,n.jsx)("img",{alt:"",src:"/assets/auth-illustration.svg"})]})})]})})};h.prototypes={children:t().node}},8388:function(e,s,i){"use strict";i.r(s);var n=i(5893),r=i(7294),t=i(9008),a=i.n(t),l=i(1664),o=i.n(l),d=i(9332),c=i(8482),u=i(6310),h=i(7357),x=i(6447),m=i(5861),p=i(3795),j=i(8409),f=i(44),g=i(7422),b=i(6815),v=i(3321),w=i(1737),Z=i(2662),y=i(8354);let k=()=>{let e=(0,d.useRouter)(),s=(0,Z.a)(),[i,t]=(0,r.useState)("email"),l=(0,c.TA)({initialValues:{email:"demo@devias.io",password:"Password123!",submit:null},validationSchema:u.Ry({email:u.Z_().email("Must be a valid email").max(255).required("Email is required"),password:u.Z_().max(255).required("Password is required")}),onSubmit:async(i,n)=>{try{await s.signIn(i.email,i.password),e.push("/")}catch(e){n.setStatus({success:!1}),n.setErrors({submit:e.message}),n.setSubmitting(!1)}}}),y=(0,r.useCallback)((e,s)=>{t(s)},[]),k=(0,r.useCallback)(()=>{s.skip(),e.push("/")},[s,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Login | Devias Kit"})}),(0,n.jsx)(h.Z,{sx:{backgroundColor:"background.paper",flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,n.jsx)(h.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(x.Z,{spacing:1,sx:{mb:3},children:[(0,n.jsx)(m.Z,{variant:"h4",children:"Login"}),(0,n.jsxs)(m.Z,{color:"text.secondary",variant:"body2",children:["Don't have an account? \xa0",(0,n.jsx)(p.Z,{component:o(),href:"/auth/register",underline:"hover",variant:"subtitle2",children:"Register"})]})]}),(0,n.jsxs)(j.Z,{onChange:y,sx:{mb:3},value:i,children:[(0,n.jsx)(f.Z,{label:"Email",value:"email"}),(0,n.jsx)(f.Z,{label:"Phone Number",value:"phoneNumber"})]}),"email"===i&&(0,n.jsxs)("form",{noValidate:!0,onSubmit:l.handleSubmit,children:[(0,n.jsxs)(x.Z,{spacing:3,children:[(0,n.jsx)(g.Z,{error:!!(l.touched.email&&l.errors.email),fullWidth:!0,helperText:l.touched.email&&l.errors.email,label:"Email Address",name:"email",onBlur:l.handleBlur,onChange:l.handleChange,type:"email",value:l.values.email}),(0,n.jsx)(g.Z,{error:!!(l.touched.password&&l.errors.password),fullWidth:!0,helperText:l.touched.password&&l.errors.password,label:"Password",name:"password",onBlur:l.handleBlur,onChange:l.handleChange,type:"password",value:l.values.password})]}),(0,n.jsx)(b.Z,{sx:{mt:1},children:"Optionally you can skip."}),l.errors.submit&&(0,n.jsx)(m.Z,{color:"error",sx:{mt:3},variant:"body2",children:l.errors.submit}),(0,n.jsx)(v.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Continue"}),(0,n.jsx)(v.Z,{fullWidth:!0,size:"large",sx:{mt:3},onClick:k,children:"Skip authentication"}),(0,n.jsx)(w.Z,{color:"primary",severity:"info",sx:{mt:3},children:(0,n.jsxs)("div",{children:["You can use ",(0,n.jsx)("b",{children:"demo@devias.io"})," and password ",(0,n.jsx)("b",{children:"Password123!"})]})})]}),"phoneNumber"===i&&(0,n.jsxs)("div",{children:[(0,n.jsx)(m.Z,{sx:{mb:1},variant:"h6",children:"Not available in the demo"}),(0,n.jsx)(m.Z,{color:"text.secondary",children:"To prevent unnecessary costs we disabled this feature in the demo."})]})]})})})]})};k.getLayout=e=>(0,n.jsx)(y.A,{children:e}),s.default=k}},function(e){e.O(0,[394,904,709,703,481,453,616,774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);