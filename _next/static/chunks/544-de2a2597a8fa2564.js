"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{5544:function(e,r,t){t.d(r,{U:function(){return eI}});var n=t(7294),o=t(1280),a=t(1943),i=t(6289),l=t(5851),c=t(8216);let s={context:"Accordion component was not found in the tree",itemContext:"Accordion.Item component was not found in the tree",value:"Accordion.Item component was rendered with invalid value or without value"},[u,d]=(0,c.R)(s.context);function f({children:e,multiple:r,value:t,defaultValue:o,onChange:c,id:d,loop:f,transitionDuration:p,disableChevronRotation:b,chevronPosition:m,chevronSize:v,order:y,chevron:g,variant:h,radius:O,classNames:w,styles:P,unstyled:j}){let k=(0,i.M)(d),[x,C]=(0,l.C)({value:t,defaultValue:o,finalValue:r?[]:null,onChange:c}),E=e=>Array.isArray(x)?x.includes(e):e===x,S=e=>{let r=Array.isArray(x)?x.includes(e)?x.filter(r=>r!==e):[...x,e]:e===x?null:e;C(r)};return n.createElement(u,{value:{isItemActive:E,onChange:S,getControlId:(0,a.A)(`${k}-control`,s.value),getRegionId:(0,a.A)(`${k}-panel`,s.value),transitionDuration:p,disableChevronRotation:b,chevronPosition:m,chevronSize:v,order:y,chevron:g,loop:f,variant:h,radius:O,classNames:w,styles:P,unstyled:j}},e)}let[p,b]=(0,c.R)(s.itemContext);var m=t(6817),v=(0,m.k)((e,r)=>({item:function(e,{variant:r,radius:t}){let n="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],o="dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],a=e.fn.radius(t);return"default"===r?{color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,borderBottom:`1px solid ${n}`}:"contained"===r?{border:`1px solid ${n}`,transition:"background-color 150ms ease","&[data-active]":{backgroundColor:o},"&:first-of-type":{borderTopRightRadius:a,borderTopLeftRadius:a,"& > [data-accordion-control]":{borderTopRightRadius:a,borderTopLeftRadius:a}},"&:last-of-type":{borderBottomRightRadius:a,borderBottomLeftRadius:a,"& > [data-accordion-control]":{borderBottomRightRadius:a,borderBottomLeftRadius:a}},"& + &":{borderTop:0}}:"filled"===r?{borderRadius:a,"&[data-active]":{backgroundColor:o}}:"separated"===r?{borderRadius:a,backgroundColor:o,border:"1px solid transparent",transition:"background-color 150ms ease","& + &":{marginTop:e.spacing.md},"&[data-active]":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,borderColor:n}}:{}}(e,r)})),y=t(4523),g=Object.defineProperty,h=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,P=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&P(e,t,r[t]);if(h)for(var t of h(r))w.call(r,t)&&P(e,t,r[t]);return e},k=(e,r)=>{var t={};for(var n in e)O.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>r.indexOf(n)&&w.call(e,n)&&(t[n]=e[n]);return t};let x={},C=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("AccordionItem",x,e),{children:a,className:i,value:l}=t,c=k(t,["children","className","value"]),s=d(),{classes:u,cx:f}=v({variant:s.variant,radius:s.radius},{name:"Accordion",classNames:s.classNames,styles:s.styles,unstyled:s.unstyled});return n.createElement(p,{value:{value:l}},n.createElement(y.x,j({ref:r,className:f(u.item,i),"data-active":s.isItemActive(l)||void 0},c),a))});C.displayName="@mantine/core/AccordionItem";var E=t(6650),S=Object.defineProperty,A=Object.defineProperties,R=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&$(e,t,r[t]);if(N)for(var t of N(r))I.call(r,t)&&$(e,t,r[t]);return e},L=(e,r)=>A(e,R(r)),z=(e,r)=>{var t={};for(var n in e)D.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&N)for(var n of N(e))0>r.indexOf(n)&&I.call(e,n)&&(t[n]=e[n]);return t},B=(0,m.k)((e,r)=>{var{transitionDuration:t,chevronPosition:n,chevronSize:o}=r,a=z(r,["transitionDuration","chevronPosition","chevronSize"]);return{icon:{display:"flex",alignItems:"center",justifyContent:"center",marginRight:"left"===n?0:e.spacing.sm,marginLeft:"left"===n?e.spacing.lg:0},chevron:{display:"flex",alignItems:"center",justifyContent:"center",transition:`transform ${t}ms ease`,marginRight:"right"===n?0:e.spacing.sm,marginLeft:"right"===n?e.spacing.lg:0,width:o,minWidth:o,"&[data-rotate]":{transform:"rotate(180deg)"}},label:{color:"inherit",fontWeight:400,flex:1,overflow:"hidden",textOverflow:"ellipsis"},itemTitle:{margin:0,padding:0},control:L(T(T(T({},e.fn.focusStyles()),e.fn.fontStyles()),function(e,{variant:r}){return"default"===r||"contained"===r?e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}):{}}(e,a)),{width:"100%",display:"flex",alignItems:"center",flexDirection:"right"===n?"row-reverse":"row",padding:`${e.spacing.md}px ${e.spacing.md/2}px`,paddingLeft:"right"===n?`calc(${e.spacing.sm}px + 4px)`:null,textAlign:"left",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,"&:disabled":T({opacity:.4,cursor:"not-allowed"},e.fn.hover({backgroundColor:"transparent"}))})}}),M=t(4736),F=Object.defineProperty,H=Object.defineProperties,U=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,q=(e,r,t)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,V=(e,r)=>{for(var t in r||(r={}))K.call(r,t)&&q(e,t,r[t]);if(_)for(var t of _(r))Y.call(r,t)&&q(e,t,r[t]);return e},W=(e,r)=>H(e,U(r)),Z=(e,r)=>{var t={};for(var n in e)K.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&_)for(var n of _(e))0>r.indexOf(n)&&Y.call(e,n)&&(t[n]=e[n]);return t};let J={},G=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("AccordionControl",J,e),{disabled:a,onKeyDown:i,onClick:l,chevron:c,children:s,className:u,icon:f}=t,p=Z(t,["disabled","onKeyDown","onClick","chevron","children","className","icon"]),m=d(),{value:v}=b(),{classes:y,cx:g}=B({transitionDuration:m.transitionDuration,chevronPosition:m.chevronPosition,chevronSize:m.chevronSize,variant:m.variant,radius:m.radius},{name:"Accordion",classNames:m.classNames,styles:m.styles,unstyled:m.unstyled}),h=m.isItemActive(v),O="number"==typeof m.order,w=`h${m.order}`,P=n.createElement(M.k,W(V({},p),{ref:r,"data-accordion-control":!0,disabled:a,className:g(y.control,u),onClick:e=>{null==l||l(e),m.onChange(v)},type:"button","data-active":h||void 0,"aria-expanded":h,"aria-controls":m.getRegionId(v),id:m.getControlId(v),unstyled:m.unstyled,onKeyDown:(0,E.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:m.loop,orientation:"vertical",onKeyDown:i})}),n.createElement("div",{className:y.chevron,"data-rotate":!m.disableChevronRotation&&h||void 0},c||m.chevron),n.createElement("div",{className:y.label},s),f&&n.createElement("div",{className:y.icon},f));return O?n.createElement(w,{className:y.itemTitle},P):P});G.displayName="@mantine/core/AccordionControl";var Q=Object.defineProperty,X=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,eo=(e,r,t)=>r in e?Q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ea=(e,r)=>{for(var t in r||(r={}))et.call(r,t)&&eo(e,t,r[t]);if(er)for(var t of er(r))en.call(r,t)&&eo(e,t,r[t]);return e},ei=(e,r)=>X(e,ee(r)),el=(0,m.k)((e,r)=>({panel:ei(ea({},e.fn.fontStyles()),{wordBreak:"break-word",lineHeight:e.lineHeight}),content:{padding:e.spacing.md,paddingTop:`calc(${e.spacing.xs}px / 2)`}})),ec=t(1003),es=Object.defineProperty,eu=Object.defineProperties,ed=Object.getOwnPropertyDescriptors,ef=Object.getOwnPropertySymbols,ep=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,em=(e,r,t)=>r in e?es(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ev=(e,r)=>{for(var t in r||(r={}))ep.call(r,t)&&em(e,t,r[t]);if(ef)for(var t of ef(r))eb.call(r,t)&&em(e,t,r[t]);return e},ey=(e,r)=>eu(e,ed(r)),eg=(e,r)=>{var t={};for(var n in e)ep.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&ef)for(var n of ef(e))0>r.indexOf(n)&&eb.call(e,n)&&(t[n]=e[n]);return t};let eh={};function eO(e){let r=(0,o.N4)("AccordionPanel",eh,e),{children:t,className:a}=r,i=eg(r,["children","className"]),l=d(),{value:c}=b(),{classNames:s,styles:u,unstyled:f}=d(),{classes:p,cx:m}=el({variant:l.variant,radius:l.radius},{name:"Accordion",classNames:s,styles:u,unstyled:f});return n.createElement(ec.U,ey(ev({},i),{className:m(p.panel,a),in:l.isItemActive(c),transitionDuration:l.transitionDuration,role:"region",id:l.getRegionId(c),"aria-labelledby":l.getControlId(c)}),n.createElement("div",{className:p.content},t))}eO.displayName="@mantine/core/AccordionPanel";var ew=t(6057),eP=Object.defineProperty,ej=Object.defineProperties,ek=Object.getOwnPropertyDescriptors,ex=Object.getOwnPropertySymbols,eC=Object.prototype.hasOwnProperty,eE=Object.prototype.propertyIsEnumerable,eS=(e,r,t)=>r in e?eP(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eA=(e,r)=>{for(var t in r||(r={}))eC.call(r,t)&&eS(e,t,r[t]);if(ex)for(var t of ex(r))eE.call(r,t)&&eS(e,t,r[t]);return e},eR=(e,r)=>ej(e,ek(r)),eN=(e,r)=>{var t={};for(var n in e)eC.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&ex)for(var n of ex(e))0>r.indexOf(n)&&eE.call(e,n)&&(t[n]=e[n]);return t};let eD={multiple:!1,disableChevronRotation:!1,transitionDuration:200,chevronPosition:"right",variant:"default",chevronSize:24,chevron:n.createElement(ew.D,null)};function eI(e){let r=(0,o.N4)("Accordion",eD,e),{id:t,loop:a,children:i,multiple:l,value:c,defaultValue:s,onChange:u,transitionDuration:d,disableChevronRotation:p,chevronPosition:b,chevronSize:m,order:v,chevron:g,classNames:h,styles:O,unstyled:w,variant:P,radius:j}=r,k=eN(r,["id","loop","children","multiple","value","defaultValue","onChange","transitionDuration","disableChevronRotation","chevronPosition","chevronSize","order","chevron","classNames","styles","unstyled","variant","radius"]);return n.createElement(f,{id:t,multiple:l,value:c,defaultValue:s,onChange:u,loop:a,transitionDuration:d,disableChevronRotation:p,chevronPosition:b,chevronSize:m,order:v,chevron:g,variant:P,radius:j,classNames:h,styles:O,unstyled:w},n.createElement(y.x,eR(eA({},k),{"data-accordion":!0}),i))}eI.Item=C,eI.Control=G,eI.Panel=eO,eI.displayName="@mantine/core/Accordion"},6057:function(e,r,t){t.d(r,{D:function(){return u}});var n=t(7294),o=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&c(e,t,r[t]);return e};function u(e){return n.createElement("svg",s({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:16,height:16},e),n.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}},1003:function(e,r,t){t.d(r,{U:function(){return N}});var n=t(7294),o=t(3678),a=t(1280),i=t(3935),l=t(7048),c=t(665),s=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&m(e,t,r[t]);if(f)for(var t of f(r))b.call(r,t)&&m(e,t,r[t]);return e},y=(e,r)=>u(e,d(r)),g=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>r.indexOf(n)&&b.call(e,n)&&(t[n]=e[n]);return t};function h(e){return(null==e?void 0:e.current)?e.current.scrollHeight:"auto"}let O="undefined"!=typeof window&&window.requestAnimationFrame;var w=t(2756),P=t(4523),j=Object.defineProperty,k=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))x.call(r,t)&&E(e,t,r[t]);if(k)for(var t of k(r))C.call(r,t)&&E(e,t,r[t]);return e},A=(e,r)=>{var t={};for(var n in e)x.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&k)for(var n of k(e))0>r.indexOf(n)&&C.call(e,n)&&(t[n]=e[n]);return t};let R={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},N=(0,n.forwardRef)((e,r)=>{let t=(0,a.N4)("Collapse",R,e),{children:s,in:u,transitionDuration:d,transitionTimingFunction:f,style:p,onTransitionEnd:b,animateOpacity:m}=t,j=A(t,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),k=(0,a.rZ)(),x=(0,o.J)(),C=!!k.respectReducedMotion&&x,E=C?0:d,{systemStyles:N,rest:D}=(0,w.x)(j),I=function({transitionDuration:e,transitionTimingFunction:r="ease",onTransitionEnd:t=()=>{},opened:o}){let a=(0,n.useRef)(null),s={display:"none",height:"0px",overflow:"hidden"},[u,d]=(0,n.useState)(o?{}:s),f=e=>{(0,i.flushSync)(()=>d(e))},p=e=>{f(r=>v(v({},r),e))};function b(t){let n=e||function(e){if(!e||"string"==typeof e)return 0;let r=e/36;return Math.round((4+15*r**.25+r/5)*10)}(t);return{transition:`height ${n}ms ${r}`}}(0,l.l)(()=>{o?O(()=>{p({willChange:"height",display:"block",overflow:"hidden"}),O(()=>{let e=h(a);p(y(v({},b(e)),{height:e}))})}):O(()=>{let e=h(a);p(y(v({},b(e)),{willChange:"height",height:e})),O(()=>p({height:"0px",overflow:"hidden"}))})},[o]);let m=e=>{if(e.target===a.current&&"height"===e.propertyName){if(o){let e=h(a);e===u.height?f({}):p({height:e}),t()}else"0px"===u.height&&(f(s),t())}};return function(e={}){var{style:r={},refKey:t="ref"}=e,n=g(e,["style","refKey"]);let i=n[t];return y(v({"aria-hidden":!o},n),{[t]:(0,c.l)(a,i),onTransitionEnd:m,style:v(v({boxSizing:"border-box"},r),u)})}}({opened:u,transitionDuration:E,transitionTimingFunction:f,onTransitionEnd:b});return 0===E?u?n.createElement(P.x,S({},D),s):null:n.createElement(P.x,S({},I(S(S({style:p,ref:r},D),N))),n.createElement("div",{style:{opacity:u||!m?1:0,transition:m?`opacity ${E}ms ${f}`:"none"}},s))});N.displayName="@mantine/core/Collapse"},6289:function(e,r,t){t.d(r,{M:function(){return l}});var n=t(7294),o=t(129);let a=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,i=n["useId".toString()]||(()=>void 0);function l(e){return"string"==typeof e?e:function(){let e=i();return e?`mantine-${e.replace(/:/g,"")}`:""}()||function(){let[e,r]=(0,n.useState)("");return(0,o.Y)(()=>{r(a())},[]),e}()}},129:function(e,r,t){t.d(r,{Y:function(){return o}});var n=t(7294);let o="undefined"!=typeof document?n.useLayoutEffect:n.useEffect},665:function(e,r,t){t.d(r,{Y:function(){return i},l:function(){return a}});var n=t(7294),o=t(3979);function a(...e){return r=>{e.forEach(e=>(0,o.k)(e,r))}}function i(...e){return(0,n.useCallback)(a(...e),e)}},5851:function(e,r,t){t.d(r,{C:function(){return o}});var n=t(7294);function o({value:e,defaultValue:r,finalValue:t,onChange:o=()=>{}}){let[a,i]=(0,n.useState)(void 0!==r?r:t),l=e=>{i(e),null==o||o(e)};return void 0!==e?[e,o,!0]:[a,l,!1]}},3979:function(e,r,t){t.d(r,{k:function(){return n}});function n(e,r){"function"==typeof e?e(r):"object"==typeof e&&null!==e&&"current"in e&&(e.current=r)}},6650:function(e,r,t){t.d(r,{R:function(){return o}});var n=t(8523);function o({parentSelector:e,siblingSelector:r,onKeyDown:t,loop:o=!0,activateOnFocus:a=!1,dir:i="rtl",orientation:l}){return c=>{var s;null==t||t(c);let u=Array.from((null==(s=(0,n.p)(c.currentTarget,e))?void 0:s.querySelectorAll(r))||[]).filter(r=>{var t;return t=c.currentTarget,(0,n.p)(t,e)===(0,n.p)(r,e)}),d=u.findIndex(e=>c.currentTarget===e),f=function(e,r,t){for(let t=e+1;t<r.length;t+=1)if(!r[t].disabled)return t;if(t){for(let e=0;e<r.length;e+=1)if(!r[e].disabled)return e}return e}(d,u,o),p=function(e,r,t){for(let t=e-1;t>=0;t-=1)if(!r[t].disabled)return t;if(t){for(let e=r.length-1;e>-1;e-=1)if(!r[e].disabled)return e}return e}(d,u,o),b="rtl"===i?p:f,m="rtl"===i?f:p;switch(c.key){case"ArrowRight":"horizontal"===l&&(c.stopPropagation(),c.preventDefault(),u[b].focus(),a&&u[b].click());break;case"ArrowLeft":"horizontal"===l&&(c.stopPropagation(),c.preventDefault(),u[m].focus(),a&&u[m].click());break;case"ArrowUp":"vertical"===l&&(c.stopPropagation(),c.preventDefault(),u[p].focus(),a&&u[p].click());break;case"ArrowDown":"vertical"===l&&(c.stopPropagation(),c.preventDefault(),u[f].focus(),a&&u[f].click());break;case"Home":c.stopPropagation(),c.preventDefault(),u[0].disabled||u[0].focus();break;case"End":{c.stopPropagation(),c.preventDefault();let e=u.length-1;u[e].disabled||u[e].focus()}}}}},8523:function(e,r,t){t.d(r,{p:function(){return n}});function n(e,r){let t=e;for(;(t=t.parentElement)&&!t.matches(r););return t}},1943:function(e,r,t){t.d(r,{A:function(){return n}});function n(e,r){return t=>{if("string"!=typeof t||0===t.trim().length)throw Error(r);return`${e}-${t}`}}}}]);