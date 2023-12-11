"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{2540:function(e,n,t){t.d(n,{T:function(){return i}});var r=t(5893),l=t(2734);let i=()=>{let e=(0,l.Z)(),n=e.palette.primary.main;return(0,r.jsxs)("svg",{fill:"none",height:"100%",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{opacity:.16,d:"M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z",fill:n}),(0,r.jsx)("path",{d:"M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z",fill:n})]})}},2377:function(e,n,t){t.d(n,{L:function(){return s}});var r=t(7297),l=t(4096),i=t(948);function o(){let e=(0,r.Z)([""]);return o=function(){return e},e}let s=(0,i.ZP)(l.Z)(o())},2662:function(e,n,t){t.d(n,{a:function(){return i}});var r=t(7294),l=t(249);let i=()=>(0,r.useContext)(l.Vo)},8334:function(e,n,t){t.d(n,{A:function(){return en}});var r,l=t(5893),i=t(7294),o=t(9332),s=t(948),a=t(1163),c=t(5697),x=t.n(c),d=t(249);let h=e=>{let{children:n}=e,t=(0,a.useRouter)(),{isAuthenticated:r}=(0,d.Eu)(),l=(0,i.useRef)(!1),[o,s]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{t.isReady&&!l.current&&(l.current=!0,r?s(!0):(console.log("Not authenticated, redirecting"),t.replace({pathname:"/auth/login",query:"/"!==t.asPath?{continueUrl:t.asPath}:void 0}).catch(console.error)))},[t.isReady]),o)?n:null};h.propTypes={children:x().node};var p=t(1664),u=t.n(p),j=t(2847),f=t(662),Z=t(8396),m=t(7357),g=t(5861),b=t(3219),v=t(7720),y=t(6447),C=t(3321),k=t(7533),w=t(2540),S=t(2377),P=t(9773),z=t(8964),R=t(3268),I=t(7796),L=t(2823),E=t(3290),N=t(9721),T=t(256);let F=[{title:"Overview",path:"/",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(P.Z,{})})},{title:"Customers",path:"/customers",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(N.Z,{})})},{title:"Companies",path:"/companies",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(I.Z,{})})},{title:"Account",path:"/account",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(L.Z,{})})},{title:"Settings",path:"/settings",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(z.Z,{})})},{title:"Login",path:"/auth/login",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(R.Z,{})})},{title:"Register",path:"/auth/register",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(E.Z,{})})},{title:"Error",path:"/404",icon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(T.Z,{})})}];var O=t(7739);let _=e=>{let{active:n=!1,disabled:t,external:r,icon:i,path:o,title:s}=e,a=o?r?{component:"a",href:o,target:"_blank"}:{component:u(),href:o}:{};return(0,l.jsx)("li",{children:(0,l.jsxs)(O.Z,{sx:{alignItems:"center",borderRadius:1,display:"flex",justifyContent:"flex-start",pl:"16px",pr:"16px",py:"6px",textAlign:"left",width:"100%",...n&&{backgroundColor:"rgba(255, 255, 255, 0.04)"},"&:hover":{backgroundColor:"rgba(255, 255, 255, 0.04)"}},...a,children:[i&&(0,l.jsx)(m.Z,{component:"span",sx:{alignItems:"center",color:"neutral.400",display:"inline-flex",justifyContent:"center",mr:2,...n&&{color:"primary.main"}},children:i}),(0,l.jsx)(m.Z,{component:"span",sx:{color:"neutral.400",flexGrow:1,fontFamily:e=>e.typography.fontFamily,fontSize:14,fontWeight:600,lineHeight:"24px",whiteSpace:"nowrap",...n&&{color:"common.white"},...t&&{color:"neutral.500"}},children:s})]})})};_.propTypes={active:x().bool,disabled:x().bool,external:x().bool,icon:x().node,path:x().string,title:x().string.isRequired};let A=e=>{let{open:n,onClose:t}=e,r=(0,o.usePathname)(),i=(0,Z.Z)(e=>e.breakpoints.up("lg")),s=(0,l.jsx)(S.L,{sx:{height:"100%","& .simplebar-content":{height:"100%"},"& .simplebar-scrollbar:before":{background:"neutral.400"}},children:(0,l.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,l.jsxs)(m.Z,{sx:{p:3},children:[(0,l.jsx)(m.Z,{component:u(),href:"/",sx:{display:"inline-flex",height:32,width:32},children:(0,l.jsx)(w.T,{})}),(0,l.jsxs)(m.Z,{sx:{alignItems:"center",backgroundColor:"rgba(255, 255, 255, 0.04)",borderRadius:1,cursor:"pointer",display:"flex",justifyContent:"space-between",mt:2,p:"12px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(g.Z,{color:"inherit",variant:"subtitle1",children:"Devias"}),(0,l.jsx)(g.Z,{color:"neutral.400",variant:"body2",children:"Production"})]}),(0,l.jsx)(b.Z,{fontSize:"small",sx:{color:"neutral.500"},children:(0,l.jsx)(f.Z,{})})]})]}),(0,l.jsx)(v.Z,{sx:{borderColor:"neutral.700"}}),(0,l.jsx)(m.Z,{component:"nav",sx:{flexGrow:1,px:2,py:3},children:(0,l.jsx)(y.Z,{component:"ul",spacing:.5,sx:{listStyle:"none",p:0,m:0},children:F.map(e=>{let n=!!e.path&&r===e.path;return(0,l.jsx)(_,{active:n,disabled:e.disabled,external:e.external,icon:e.icon,path:e.path,title:e.title},e.title)})})}),(0,l.jsx)(v.Z,{sx:{borderColor:"neutral.700"}}),(0,l.jsxs)(m.Z,{sx:{px:2,py:3},children:[(0,l.jsx)(g.Z,{color:"neutral.100",variant:"subtitle2",children:"Need more features?"}),(0,l.jsx)(g.Z,{color:"neutral.500",variant:"body2",children:"Check out our Pro solution template."}),(0,l.jsx)(m.Z,{sx:{display:"flex",mt:2,mx:"auto",width:"160px","& img":{width:"100%"}},children:(0,l.jsx)("img",{alt:"Go to pro",src:"/assets/devias-kit-pro.png"})}),(0,l.jsx)(C.Z,{component:"a",endIcon:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(j.Z,{})}),fullWidth:!0,href:"https://material-kit-pro-react.devias.io/",sx:{mt:2},target:"_blank",variant:"contained",children:"Pro Live Preview"})]})]})});return i?(0,l.jsx)(k.ZP,{anchor:"left",open:!0,PaperProps:{sx:{backgroundColor:"neutral.800",color:"common.white",width:280}},variant:"permanent",children:s}):(0,l.jsx)(k.ZP,{anchor:"left",onClose:t,open:n,PaperProps:{sx:{backgroundColor:"neutral.800",color:"common.white",width:280}},sx:{zIndex:e=>e.zIndex.appBar+100},variant:"temporary",children:s})};A.propTypes={onClose:x().func,open:x().bool};var q=t(3806),B=t(4149),D=t(9396),G=t(4674),W=t(2613),H=t(8139),M=t(9661),V=t(1796),U=t(4189),J=t(4118),K=t(431),Q=t(2662);let X=e=>{let{anchorEl:n,onClose:t,open:r}=e,s=(0,o.useRouter)(),a=(0,Q.a)(),c=(0,i.useCallback)(()=>{null==t||t(),a.signOut(),s.push("/auth/login")},[t,a,s]);return(0,l.jsxs)(U.ZP,{anchorEl:n,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:t,open:r,PaperProps:{sx:{width:200}},children:[(0,l.jsxs)(m.Z,{sx:{py:1.5,px:2},children:[(0,l.jsx)(g.Z,{variant:"overline",children:"Account"}),(0,l.jsx)(g.Z,{color:"text.secondary",variant:"body2",children:"Anika Visser"})]}),(0,l.jsx)(v.Z,{}),(0,l.jsx)(J.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,l.jsx)(K.Z,{onClick:c,children:"Sign out"})})]})};X.propTypes={anchorEl:x().any,onClose:x().func,open:x().bool.isRequired};let Y=e=>{let{onNavOpen:n}=e,t=(0,Z.Z)(e=>e.breakpoints.up("lg")),r=function(){let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1),r=(0,i.useCallback)(()=>{t(!0)},[]),l=(0,i.useCallback)(()=>{t(!1)},[]),o=(0,i.useCallback)(()=>{t(e=>!e)},[]);return{anchorRef:e,handleClose:l,handleOpen:r,handleToggle:o,open:n}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.Z,{component:"header",sx:{backdropFilter:"blur(6px)",backgroundColor:e=>(0,V.Fq)(e.palette.background.default,.8),position:"sticky",left:{lg:"".concat(280,"px")},top:0,width:{lg:"calc(100% - ".concat(280,"px)")},zIndex:e=>e.zIndex.appBar},children:(0,l.jsxs)(y.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{minHeight:64,px:2},children:[(0,l.jsxs)(y.Z,{alignItems:"center",direction:"row",spacing:2,children:[!t&&(0,l.jsx)(G.Z,{onClick:n,children:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(B.Z,{})})}),(0,l.jsx)(W.Z,{title:"Search",children:(0,l.jsx)(G.Z,{children:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(D.Z,{})})})})]}),(0,l.jsxs)(y.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,l.jsx)(W.Z,{title:"Contacts",children:(0,l.jsx)(G.Z,{children:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(N.Z,{})})})}),(0,l.jsx)(W.Z,{title:"Notifications",children:(0,l.jsx)(G.Z,{children:(0,l.jsx)(H.Z,{badgeContent:4,color:"success",variant:"dot",children:(0,l.jsx)(b.Z,{fontSize:"small",children:(0,l.jsx)(q.Z,{})})})})}),(0,l.jsx)(M.Z,{onClick:r.handleOpen,ref:r.anchorRef,sx:{cursor:"pointer",height:40,width:40},src:"/assets/avatars/avatar-anika-visser.png"})]})]})}),(0,l.jsx)(X,{anchorEl:r.anchorRef.current,open:r.open,onClose:r.handleClose})]})};Y.propTypes={onNavOpen:x().func};let $=(0,s.ZP)("div")(e=>{let{theme:n}=e;return{display:"flex",flex:"1 1 auto",maxWidth:"100%",[n.breakpoints.up("lg")]:{paddingLeft:280}}}),ee=(0,s.ZP)("div")({display:"flex",flex:"1 1 auto",flexDirection:"column",width:"100%"}),en=(r=e=>{let{children:n}=e,t=(0,o.usePathname)(),[r,s]=(0,i.useState)(!1),a=(0,i.useCallback)(()=>{r&&s(!1)},[r]);return(0,i.useEffect)(()=>{a()},[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Y,{onNavOpen:()=>s(!0)}),(0,l.jsx)(A,{onClose:()=>s(!1),open:r}),(0,l.jsx)($,{children:(0,l.jsx)(ee,{children:n})})]})},e=>(0,l.jsx)(h,{children:(0,l.jsx)(r,{...e})}))}}]);