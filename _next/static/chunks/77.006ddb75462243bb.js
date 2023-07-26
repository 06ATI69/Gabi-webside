"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77],{2623:function(e,r,o){o.d(r,{X:function(){return x}});var t=o(7294),n=o(1280),a=o(8427),i=(0,o(6817).k)((e,{radius:r,shadow:o,withBorder:t})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(r),boxShadow:e.shadows[o]||o||"none",border:t?`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`:void 0}})),l=o(4523),c=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,r,o)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&p(e,o,r[o]);if(s)for(var o of s(r))f.call(r,o)&&p(e,o,r[o]);return e},b=(e,r)=>{var o={};for(var t in e)d.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&s)for(var t of s(e))0>r.indexOf(t)&&f.call(e,t)&&(o[t]=e[t]);return o};let m={},h=(0,t.forwardRef)((e,r)=>{let o=(0,n.N4)("Paper",m,e),{className:a,children:c,radius:s,withBorder:d,shadow:f,unstyled:p}=o,h=b(o,["className","children","radius","withBorder","shadow","unstyled"]),{classes:x,cx:g}=i({radius:s,shadow:f,withBorder:d},{name:"Paper",unstyled:p});return t.createElement(l.x,u({className:g(x.root,a),ref:r},h),c)});h.displayName="@mantine/core/Paper";let x=(0,a.F)(h)},5044:function(e,r,o){o.d(r,{k:function(){return P}});var t=o(7294),n=o(1280),a=o(6817),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,r,o)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&p(e,o,r[o]);if(s)for(var o of s(r))f.call(r,o)&&p(e,o,r[o]);return e},b=(e,r)=>l(e,c(r));let m={xs:16,sm:20,md:26,lg:32,xl:40};var h=(0,a.k)((e,{color:r,size:o,radius:t,gradient:n,variant:a})=>{let i=e.fn.variant({variant:a,color:r||e.primaryColor,gradient:n,primaryFallback:!1}),l=e.fn.size({size:o,sizes:m});return{root:b(u({},e.fn.fontStyles()),{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:l,height:l,minWidth:l,minHeight:l,borderRadius:e.fn.radius(t),backgroundColor:i.background,color:i.color,backgroundImage:"gradient"===a?i.background:void 0,border:`${"gradient"===a?0:1}px solid ${i.border}`})}}),x=o(4523),g=Object.defineProperty,y=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,r,o)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,v=(e,r)=>{for(var o in r||(r={}))k.call(r,o)&&w(e,o,r[o]);if(y)for(var o of y(r))j.call(r,o)&&w(e,o,r[o]);return e},O=(e,r)=>{var o={};for(var t in e)k.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&y)for(var t of y(e))0>r.indexOf(t)&&j.call(e,t)&&(o[t]=e[t]);return o};let z={size:"md",variant:"filled"},P=(0,t.forwardRef)((e,r)=>{let o=(0,n.N4)("ThemeIcon",z,e),{className:a,size:i,radius:l,variant:c,color:s,children:d,gradient:f,unstyled:p}=o,u=O(o,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:b,cx:m}=h({variant:c,radius:l,color:s,size:i,gradient:f},{name:"ThemeIcon",unstyled:p});return t.createElement(x.x,v({className:m(b.root,a),ref:r},u),d)});P.displayName="@mantine/core/ThemeIcon"},5077:function(e,r,o){o.r(r),o.d(r,{Services:function(){return h}});var t=o(5893),n=o(2679),a=o(7564),i=o(2623),l=o(4577),c=o(5117),s=o(1232),d=o(5044),f=o(5675),p=o.n(f),u=o(1664),b=o.n(u),m=o(5434);function h(){let e=[{icon:"illustration-life-coaching.webp",title:"Life coaching",desc:"Ha nem l\xe1tod a kiutat gondolataidb\xf3l",href:"/szolgaltatasok/life-coaching"},{icon:"illustration-rel-coaching-dual.webp",title:(0,t.jsx)(t.Fragment,{children:"P\xe1rkapcsolati coaching"}),desc:"Ez egy r\xf6vid teszt le\xedr\xe1s",href:"/szolgaltatasok/parkapcsolati-coaching-paroknak"},{icon:"illustration-career-coaching.webp",title:"\xc1ll\xe1sinterj\xfa \xe9s karrier coaching",desc:"Ez egy r\xf6vid teszt le\xedr\xe1s",href:"/szolgaltatasok/allasinterju-es-karrier-coaching/"}];return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.r,{align:"top",justify:"center",children:e.map((e,r)=>(0,t.jsx)(n.r.Col,{span:12,sm:6,md:4,my:{base:"md"},px:"xs",children:(0,t.jsxs)(a.K,{component:i.X,withBorder:!0,shadow:"md",radius:"md",py:"lg",children:[(0,t.jsx)(a.K,{align:"center",children:(0,t.jsx)(l.o,{ratio:1,radius:"md",sx:{position:"relative"},maw:"10rem",miw:"13rem",children:(0,t.jsx)(p(),{src:e.icon,alt:e.title,style:{objectPosition:"50% 80%"},fill:!0})})}),(0,t.jsxs)(a.K,{spacing:"xs",px:"lg",children:[(0,t.jsx)(c.x,{size:"md",fw:"bold",color:"accent",component:b(),href:e.href,children:e.title}),(0,t.jsxs)(s.Z,{align:"center",spacing:"xs",component:b(),href:e.href,sx:{textDecoration:"none"},children:[(0,t.jsx)(c.x,{size:"md",c:"dark",children:"Megn\xe9zem"}),(0,t.jsx)(d.k,{size:24,color:"dark",variant:"outline",sx:{border:0,cursor:"pointer"},children:(0,t.jsx)(m.sG5,{size:"100%"})})]})]})]})},r))})})}r.default=h}}]);