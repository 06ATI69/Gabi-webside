"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{2980:function(e,a,t){t(5893),t(9008)},9836:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var n=t(3454);function x(e){let{src:a,width:t,quality:x=80}=e;return!0==n.env.PRODUCTION?"/images/".concat(a,"?width=").concat(t,"&quality=").concat(x):a.startsWith("https://")||a.startsWith("http://")?a:"https://kissgabriella.com"+"/images/uploads/".concat(a,"?w=").concat(t)}},6377:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(5893),x=t(4523),l=t(5675),s=t.n(l);function i(e){let{children:a,full:t}=e;return(0,n.jsx)(x.x,{maw:t?"100%":{base:"clamp(320px, 90%, 720px)",sm:"clamp(360px, 90%, 760px)",md:"clamp(720px, 90%, 1200px)",lg:"clamp(1200px, 90%, 1300px)",xl:"max-width: clamp(1300px, 90%, 1500px)"},style:{marginLeft:"auto",marginRight:"auto"},children:a})}let r=e=>{let{backgroundImage:a}=e,{src:t,priority:l=!1}=a;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.x,{component:s(),sx:{zIndex:-1,objectFit:"cover"},fill:!0,src:t,priority:l,alt:"",sizes:"(max-width: 360px) 100vw, (max-width: 768px) 50vw, (max-width: 1300px) 80vw, 1040px"})})};function o(e){let{children:a,backgroundImage:t=null,full:l=!1,component:s="section",fixed:o=!1,...d}=e;return(0,n.jsxs)(x.x,{...d,style:{position:o?"fixed":"relative"},component:s,width:"100%",children:[null!=t?(0,n.jsx)(r,{backgroundImage:t}):null,(0,n.jsx)(i,{full:l,children:a})]})}},1568:function(e,a,t){t.d(a,{TR:function(){return n},WU:function(){return x}});let n={src:"logo.png",height:"56",width:"168",href:"/"},x=[{label:"R\xf3lam",route:"/#rolam"},{label:"Szolg\xe1ltat\xe1saim",route:"",type:"mega",children:[{label:"Life coaching",route:"/szolgaltatasok/life-coaching",desc:"Ha nem l\xe1tod a kiutat gondolataidb\xf3l",icon:"illustration-life-coaching.png"},{label:"P\xe1rkapcsolati coaching",route:"/szolgaltatasok/parkapcsolati-coaching-paroknak",desc:"Ha nem l\xe1tod a kiutat gondolataidb\xf3l",icon:"illustration-rel-coaching-dual.png"},{label:"\xc1ll\xe1sinterj\xfa \xe9s karrier coaching",route:"/szolgaltatasok/allasinterju-es-karrier-coaching",desc:"Ha nem l\xe1tod a kiutat gondolataidb\xf3l",icon:"illustration-career-coaching.png"}]},{label:"Referenci\xe1k",route:"#referenciak"},{label:"Gyakori k\xe9rd\xe9sek",route:"#gyik"}]},3560:function(e,a,t){t.d(a,{K:function(){return s},k:function(){return l}});var n=t(5893),x=t(7841);function l(e){let{children:a,...t}=e;return(0,n.jsx)(x.z,{c:"white",color:"dark",radius:"lg",...t,children:a})}function s(e){let{children:a,...t}=e;return(0,n.jsx)(x.z,{c:"white",radius:"lg",variant:"gradient",gradient:{from:"accent.4",to:"accent.6"},...t,styles:e=>({root:{paddingLeft:"3rem",paddingRight:"3rem",paddingTop:"1.5rem",paddingBottom:"1.5rem",height:"auto"}}),children:a})}},1924:function(e,a,t){t.d(a,{L:function(){return Z},Z:function(){return G}});var n=t(5893),x=t(6377),l=t(1568),s=t(5117),i=t(2679),r=t(1232),o=t(9834),d=t(4777),c=t(7688),m=t(9355),g=t(5152),h=t.n(g),k=t(1664),f=t.n(k),z=t(1163),j=t(7294),p=t(8193),b=t(3560),u=t(5675),y=t.n(u);let v=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(f(),{href:l.TR.href,passHref:!0,prefetch:!1,children:(0,n.jsx)(y(),{src:l.TR.src,alt:"Az oldal log\xf3ja",width:l.TR.width,height:l.TR.height,priority:!0})})}),w=h()(()=>t.e(401).then(t.bind(t,5401)),{loadableGenerated:{webpack:()=>[5401]}}),A=h()(()=>Promise.all([t.e(1),t.e(600)]).then(t.bind(t,2111)),{loadableGenerated:{webpack:()=>[2111]}}),C=h()(()=>Promise.all([t.e(2),t.e(261)]).then(t.bind(t,261)),{loadableGenerated:{webpack:()=>[261]}}),F=h()(()=>Promise.all([t.e(2),t.e(945),t.e(748)]).then(t.bind(t,748)),{loadableGenerated:{webpack:()=>[748]}}),K=h()(()=>Promise.all([t.e(2),t.e(1),t.e(834),t.e(276)]).then(t.bind(t,9276)),{loadableGenerated:{webpack:()=>[9276]}}),Z=e=>{let{item:a,router:t}=e;switch(a.type){case"mega":return(0,n.jsx)(C,{item:a,router:t});case"blog":return(0,n.jsx)(F,{item:a,router:t})}return a.children?(0,n.jsx)(K,{item:a,router:t}):(0,n.jsx)(s.x,{color:t.pathname==a.route?"primary.1":"black",size:"base",sx:e=>({transition:"0.2s",":hover":{boxShadow:"0 0.2rem 0.02rem 0 "+e.colors.accent[4]}}),component:f(),href:a.route,prefetch:!1,children:a.label})},S=()=>{let e=(0,z.useRouter)(),[a,t]=(0,j.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.r,{component:"nav",align:"center",children:[(0,n.jsx)(i.r.Col,{span:"content",children:(0,n.jsx)(v,{})}),(0,n.jsxs)(i.r.Col,{span:"auto",children:[(0,n.jsxs)(r.Z,{position:"right",spacing:"md",display:{base:"none",md:"flex"},children:[l.WU.map((a,t)=>(0,n.jsx)(Z,{item:a,router:e},t)),(0,n.jsx)(b.k,{size:"sm",sx:e=>({fontSize:e.fontSizes.base}),component:f(),prefetch:!1,href:"/#kapcsolat","aria-label":"Bel\xe9p\xe9s a WebSub admin fel\xfclet\xe9re",children:"Jelentkezem"})]}),(0,n.jsx)(r.Z,{position:"right",children:(0,n.jsx)(o.A,{"aria-label":"Men\xfc",onClick:()=>t(!0),color:"dark",display:{base:"flex",md:"none"},children:(0,n.jsx)(p.qTj,{})})}),(0,n.jsx)(A,{opened:a,setOpened:t,Navlinks:l.WU})]})]})})},E=()=>{let{height:e,width:a}=(0,m.n)(),[t,l]=(0,j.useState)(0),[s,i]=(0,j.useState)(!1);return(0,j.useEffect)(()=>{let a=()=>{let a=window.scrollY;i(a<t&&a>e),l(a)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[t,e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S,{}),(0,n.jsx)(d.i,{size:"xs",mt:"xs",variant:"dotted",color:"lightgray"}),(0,n.jsx)(c.u,{transition:"skew-down",mounted:s,duration:400,timingFunction:"ease",children:e=>(0,n.jsx)(x.Z,{py:"sm",fixed:!0,w:"100%",sx:e=>({backgroundColor:"white",zIndex:"20",left:0,top:0,boxShadow:e.shadows.lg}),children:(0,n.jsx)(w,{children:(0,n.jsx)(S,{})})})})]})};var G=E},770:function(e,a,t){var n=t(5893),x=t(4523),l=t(5675),s=t.n(l);let i=e=>{let{height:a,src:t,priority:l=!1,sx:i,mt:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.x,{style:{position:"relative"},sx:i,w:"100%",h:a,mt:r,children:(0,n.jsx)(s(),{src:t,alt:"",fill:!0,priority:l,style:{objectFit:"100%"},sizes:"(max-width: 360px) 100vw, (max-width: 768px) 100vw, (max-width: 1300px) 100vw, 1040px"})})})};a.Z=i},7660:function(e,a,t){var n=t(5893),x=t(5387),l=t(1285),s=t(8522),i=t(7294);let r={hidden:{opacity:0,y:10},show:{opacity:1,y:0,transition:{type:"spring"}}},o=e=>{let{children:a}=e;return(0,n.jsx)(s.X,{features:x.H,children:(0,n.jsx)(l.m.div,{initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:0,staggerChildren:.1}}},children:i.Children.map(a,e=>(0,n.jsx)(l.m.div,{variants:r,children:e}))})})};a.Z=o},7760:function(e,a,t){var n=t(5893),x=t(1924),l=t(5152),s=t.n(l),i=t(6377);a.Z=function(e){let{children:a,navSx:l}=e,r=s()(()=>t.e(586).then(t.bind(t,1586)),{loadableGenerated:{webpack:()=>[1586]}});s()(()=>t.e(29).then(t.bind(t,3029)),{loadableGenerated:{webpack:()=>[3029]}});let o=s()(()=>t.e(756).then(t.bind(t,446)),{loadableGenerated:{webpack:()=>[446]}});s()(()=>Promise.all([t.e(2),t.e(1),t.e(834),t.e(874)]).then(t.bind(t,5874)),{loadableGenerated:{webpack:()=>[5874]}});let d=s()(()=>t.e(318).then(t.bind(t,9318)),{loadableGenerated:{webpack:()=>[null]}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{}),(0,n.jsx)(i.Z,{component:"header",pt:"sm",pb:"sm",sx:l,children:(0,n.jsx)(x.Z,{})}),(0,n.jsx)("main",{children:a}),(0,n.jsx)(i.Z,{component:"footer",sx:e=>({backgroundColor:e.colors.dark}),children:(0,n.jsx)(r,{})}),(0,n.jsx)(d,{propertyId:"",widgetId:""})]})}},1423:function(e,a,t){t(5893)},5578:function(e,a,t){var n=t(5893),x=t(2679),l=t(7564),s=t(9236),i=t(7327),r=t(5044),o=t(5117),d=t(4577),c=t(8949),m=t(5675),g=t.n(m),h=t(1664),k=t.n(h),f=t(5434);a.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(x.r,{align:"top",children:[(0,n.jsx)(x.r.Col,{span:12,md:6,children:(0,n.jsxs)(l.K,{spacing:"xl",children:[(0,n.jsx)(s.D,{order:2,mb:{base:0,md:"xs	"},ta:{base:"center",md:"left"},children:"Jelentkezz most!"}),(0,n.jsxs)(i.k,{gap:"sm",direction:{base:"column",md:"row"},align:{base:"center",md:"left"},children:[(0,n.jsx)(r.k,{size:100,color:"accent",children:(0,n.jsx)(f.IXo,{size:70})}),(0,n.jsxs)(l.K,{spacing:"xs",children:[(0,n.jsx)(o.x,{ta:{base:"center",md:"left"},children:"Telefonon"}),(0,n.jsx)(o.x,{ta:{base:"center",md:"left"},component:k(),href:"tel:+36 20 512 0717",fw:"bold",size:{base:"md",md:"xl"},children:"+36 20 512 0717"})]})]}),(0,n.jsxs)(i.k,{gap:"sm",direction:{base:"column",md:"row"},align:{base:"center",md:"left"},children:[(0,n.jsx)(r.k,{size:100,color:"accent",children:(0,n.jsx)(f.ixJ,{size:70})}),(0,n.jsxs)(l.K,{spacing:"xs",children:[(0,n.jsx)(o.x,{ta:{base:"center",md:"left"},children:"Emailben"}),(0,n.jsx)(o.x,{ta:{base:"center",md:"left"},component:k(),href:"mailto:kissgabriella.coaching@gmail.com",size:{base:"md",md:"xl"},fw:"bold",children:"kissgabriella.coaching@gmail.com"})]})]}),(0,n.jsxs)(i.k,{gap:"sm",direction:{base:"column",md:"row"},align:{base:"center",md:"left"},children:[(0,n.jsx)(d.o,{ratio:450/460,radius:"md",sx:{position:"relative"},maw:"10rem",miw:"10rem",children:(0,n.jsx)(g(),{src:"qr_vcard.png",alt:"QR k\xf3d a kapcsolatfelv\xe9telhez",style:{objectFit:"contain"},fill:!0})}),(0,n.jsx)(o.x,{ta:{base:"center",md:"left"},size:"lg",children:"Szkenneld be el\xe9rhetős\xe9geimet mobilodra!"})]})]})}),(0,n.jsxs)(x.r.Col,{span:12,md:5,offsetMd:1,mt:{base:"lg",md:0},children:[(0,n.jsx)(o.x,{size:{base:"md",md:"lg"},mb:"sm",fw:"bold",children:"Tudnival\xf3k:"}),(0,n.jsxs)(c.a,{spacing:"sm",sx:e=>({fontSize:e.fontSizes.base}),children:[(0,n.jsx)(c.a.Item,{children:"A tal\xe1lkoz\xf3k időtartama 60 perc."}),(0,n.jsx)(c.a.Item,{children:"Az \xfcl\xe9seket heti, k\xe9theti rendszeress\xe9ggel \xe9rdemes \xfctemezni."}),(0,n.jsx)(c.a.Item,{children:"Sz\xe1momra a coaching nem meg\xe9lhet\xe9si forma, teh\xe1t nem a mennyis\xe9g, hanem a minős\xe9g motiv\xe1l. N\xe1lam csak addig tart egy folyamat, am\xedg t\xe9nylegesen tudsz fejlődni benne, m\xedg a k\xf6z\xf6s munk\xe1nk hat\xe9kony."}),(0,n.jsx)(c.a.Item,{children:"Az \xfcl\xe9sek szem\xe9lyesen Budapesten, vagy ha \xfagy k\xe9nyelmesebb neked, online form\xe1ban tudnak megval\xf3sulni. Az első tal\xe1lkoz\xf3t egy kb. 15 perces ingyenes telefonbesz\xe9lget\xe9s előz meg, melynek keret\xe9ben megismerked\xfcnk \xe9s eld\xf6ntj\xfck, hogy megvan-e az egy\xfcttműk\xf6d\xe9shez sz\xfcks\xe9ges k\xf6lcs\xf6n\xf6s bizalom \xe9s szimp\xe1tia."})]})]})]})})}},6438:function(e,a,t){var n=t(5893),x=t(7564),l=t(9236),s=t(5544),i=t(5117);let r=[{value:"coach_1",title:"Mit jelent a coaching?",content:"A coaching olyan seg\xedtő besz\xe9lget\xe9s, melynek k\xf6zpontj\xe1ban a v\xe1ltoz\xe1s \xe1ll. A coach nem tan\xe1csad\xf3, \xedgy h\xe1t nem ad neked tan\xe1csot. Nem is pszichol\xf3gus, emiatt egy coaching folyamatban nem a traum\xe1idon dolgozol. A besz\xe9lget\xe9sek c\xe9lja, hogy letisztuljon benned a k\xe1osz \xe9s l\xe1sd azt, ami benned rejlik, mint megold\xe1s. A coaching folyamat a jelenből indul ki \xe9s a sikeres j\xf6vő fel\xe9 ir\xe1nyul. Siker\xe9nek titka az \xfcgyf\xe9l \xe9s coach k\xf6z\xf6tt kialakult m\xe9ly, bizalmi viszony, melyet teljes titoktart\xe1s jellemez."},{value:"coach_2",title:"Ki a coach?",content:'A coach egy ment\xe1lis seg\xedtő, aki a Te fejedben gy\xfajt l\xe1mp\xe1t, abban t\xe1mogat, hogy megkeresd a saj\xe1t megold\xe1saidat.K\xf6zbenj\xe1r\xe1s\xe1val \xfagy \xe9red el a c\xe9ljaidat, hogy "t\xfckr\xf6t" tart, ak\xe1r az őszinte provok\xe1ci\xf3t\xf3l sem f\xe9l,annak \xe9rdek\xe9ben, hogy r\xe1d\xf6bbenj saj\xe1t műk\xf6d\xe9sed minden aspektus\xe1ra.A coach nem ad tan\xe1csot, kiv\xe9ve abban az esetben ha te ezt k\xe9red. Alapb\xf3l abban hisz, hogy a megold\xe1s benned van.A coach nem folytat ter\xe1pi\xe1t, ment\xe1lisan eg\xe9szs\xe9ges emberekkel dolgozik a folyamatban.'},{value:"coach_3",title:"Mennyi ideig tart a folyamat?",content:"A coaching folyamat időtartama v\xe1ltoz\xf3, a hozott t\xe9m\xe1t\xf3l f\xfcgg. \xc1ltal\xe1ban egy ter\xe1pi\xe1s folyamattal \xf6sszevetve r\xf6videbb időtartamot \xf6lel fel, lehet ak\xe1r egy alkalom is, de rendszerint 6-10 alkalmat tartalmaz."}];a.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(x.K,{align:"center",maw:"40rem",mx:"auto",children:[(0,n.jsx)(l.D,{order:2,align:"center",children:"Gyakran feltett k\xe9rd\xe9sek"}),(0,n.jsx)(s.U,{defaultValue:"coach_1",variant:"filled",transitionDuration:500,w:"100%",children:r.map((e,a)=>(0,n.jsxs)(s.U.Item,{value:e.value,p:"md",bg:"primary",mb:"sm",children:[(0,n.jsx)(s.U.Control,{children:e.title}),(0,n.jsx)(s.U.Panel,{children:(0,n.jsx)(i.x,{size:"base",children:e.content})})]},a))})]})})}},4110:function(e,a,t){var n=t(5893),x=t(2679),l=t(7564),s=t(5117),i=t(9236),r=t(1232),o=t(4577),d=t(5675),c=t.n(d),m=t(1664),g=t.n(m),h=t(3750),k=t(3560),f=t(7660);a.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(x.r,{align:"top",py:{base:"xs",md:"lg"},px:{base:"xs",md:"lg"},children:[(0,n.jsx)(x.r.Col,{span:12,md:6,pt:"sm",mb:{base:"md",md:0},children:(0,n.jsx)(f.Z,{children:(0,n.jsxs)(l.K,{spacing:"sm",align:"start",children:[(0,n.jsx)(s.x,{c:"primary.1",size:"md",children:"Egy \xfaj kezdet"}),(0,n.jsxs)(i.D,{order:1,children:["Fedezz\xfck fel erőforr\xe1saidat,",(0,n.jsx)("br",{}),"\xe9s \xe9lj teljes \xe9letet!"]}),(0,n.jsx)(r.Z,{spacing:"sm",children:(0,n.jsx)(k.K,{component:g(),href:"#kapcsolat",size:"md",rightIcon:(0,n.jsx)(h.CSs,{}),children:"Jelentkezem Coachingra"})})]})})}),(0,n.jsx)(x.r.Col,{span:12,md:5,offsetMd:1,offset:0,children:(0,n.jsx)(o.o,{ratio:456/512,radius:"md",sx:{position:"relative"},maw:"30rem",children:(0,n.jsx)(c(),{src:"profile_rmbg.png",alt:"Kiss Gabriella profilk\xe9pe",style:{objectPosition:"50% 80%"},fill:!0})})})]})})}},9341:function(e,a,t){var n=t(5893),x=t(2679),l=t(4577),s=t(4523),i=t(7564),r=t(5117),o=t(9236),d=t(1232),c=t(7834),m=t(8949),g=t(5675),h=t.n(g),k=t(1664),f=t.n(k),z=t(3560);a.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(x.r,{align:"center",children:[(0,n.jsx)(x.r.Col,{span:12,md:6,children:(0,n.jsx)(l.o,{ratio:1,radius:"md",sx:{position:"relative"},mx:{base:0,md:"auto"},maw:"30rem",children:(0,n.jsx)(s.x,{component:h(),src:"profil_2.png",alt:"",fill:!0,sx:e=>({borderRadius:e.radius.lg})})})}),(0,n.jsx)(x.r.Col,{span:12,md:6,mt:{base:"xs",md:0},children:(0,n.jsxs)(i.K,{spacing:"sm",align:"start",children:[(0,n.jsx)(r.x,{size:"md",c:"primary.1",children:"R\xf3lam"}),(0,n.jsx)(o.D,{order:2,children:"Ismerj meg"}),(0,n.jsx)(d.Z,{noWrap:!0,children:(0,n.jsxs)(r.x,{size:"base",children:["A saj\xe1t inspir\xe1ci\xf3mat keresve tal\xe1lkoztam a coachinggal 5 \xe9vvel ezelőtt, ami hozz\xe1seg\xedtett ahhoz, hogy m\xe1sk\xe9nt l\xe1ssam a vil\xe1got, s benne \xf6nmagam. Az erőszakmentes kommunik\xe1ci\xf3, az \xedt\xe9lkez\xe9smentes jelenl\xe9t \xe9s az \xf6nismeret fejleszt\xe9se \xe1ltal megv\xe1ltozott a szeml\xe9letem, s ezzel egy\xfctt megv\xe1ltozott az \xe9letminős\xe9gem is.",(0,n.jsxs)(c.o,{maxHeight:0,showLabel:"Tov\xe1bb olvasom",hideLabel:"Elrejt",styles:e=>({control:{color:e.colors.primary[1]}}),children:["K\xf6zgazd\xe1sz v\xe9gzetts\xe9gem ellen\xe9re a hum\xe1n ter\xfclet \xe9s a coaching az igazi hivat\xe1som. Sok \xe9ves tapasztalattal rendelkezem vezetőfejleszt\xe9s, teljes\xedtm\xe9ny menedzsment \xe9s egy\xe9ni fejleszt\xe9s ter\xfclet\xe9n. Hiszem, hogy a megold\xe1s mindig benn\xfcnk van \xe9s k\xf6z\xf6s munk\xe1nk r\xe9v\xe9n hozz\xe1j\xe1rulhatok \xe9leted pozit\xedv v\xe1ltoz\xe1saihoz. Ha szeretn\xe9l v\xe1ltoz\xe1st te is, l\xe9pj most, t\xe9gy magad\xe9rt, s higgy abban, hogy minden nagy dolog egy apr\xf3 gondolattal indul.",(0,n.jsxs)(r.x,{size:"base",py:"sm",children:[(0,n.jsx)("b",{children:"V\xe9gzetts\xe9geim"}),(0,n.jsxs)(m.a,{size:"base",children:[(0,n.jsx)(m.a.Item,{children:"1998. K\xf6zgazd\xe1sz – Szent Istv\xe1n Egyetem"}),(0,n.jsx)(m.a.Item,{children:"2018. Akkredit\xe1lt Integrat\xedv Coach k\xe9pz\xe9s - Grow Education"}),(0,n.jsx)(m.a.Item,{children:"2019. P\xe1rkapcsolati Coach k\xe9pz\xe9s – dr. M\xe9sz\xe1ros \xc1d\xe1m"}),(0,n.jsx)(m.a.Item,{children:"2021. Akkredit\xe1lt Medi\xe1ci\xf3s k\xe9pz\xe9s – dr. Fellegi \xe9s Winkler"}),(0,n.jsx)(m.a.Item,{children:"2022. Egyetemi Coach k\xe9pz\xe9s – Wekerle S\xe1ndor \xdczleti Főiskola"})]})]}),"EMCC (European Mentoring and Coaching Council) tagja vagyok. Műk\xf6d\xe9sem sor\xe1n az EMCC Etikai k\xf3dexe szerint dolgozom."]})]})}),(0,n.jsx)(z.K,{size:"md",component:f(),href:"#kapcsolat",children:"\xc9rdekel, jelentkezem"})]})})]})})}},1130:function(e,a,t){var n=t(5893),x=t(7564),l=t(5117);a.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(x.K,{spacing:"xs",align:"center",children:[(0,n.jsx)(l.x,{size:"lg",maw:"50rem",align:"center",children:"„Nem lehet megoldani probl\xe9m\xe1kat ugyanazzal a gondolkod\xe1sm\xf3ddal, amivel teremtett\xfck őket.”"}),(0,n.jsx)(l.x,{align:"center",children:"-Albert Einstein-"})]})})}},5077:function(e,a,t){var n=t(5893),x=t(2679),l=t(7564),s=t(2623),i=t(4577),r=t(5117),o=t(1232),d=t(5044),c=t(5675),m=t.n(c),g=t(1664),h=t.n(g),k=t(5434);a.Z=function(){let e=[{icon:"illustration-life-coaching.png",title:"Life Coaching",desc:"Ha nem l\xe1tod a kiutat gondolataidb\xf3l",href:"/szolgaltatasok/life-coaching"},{icon:"illustration-rel-coaching-dual.png",title:(0,n.jsx)(n.Fragment,{children:"P\xe1rkapcsolati coaching"}),desc:"Ez egy r\xf6vid teszt le\xedr\xe1s",href:"/szolgaltatasok/parkapcsolati-coaching-paroknak"},{icon:"illustration-career-coaching.png",title:"\xc1ll\xe1sinterj\xfa \xe9s karrier coaching",desc:"Ez egy r\xf6vid teszt le\xedr\xe1s",href:"/szolgaltatasok/allasinterju-es-karrier-coaching/"}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.r,{align:"top",justify:"center",children:e.map((e,a)=>(0,n.jsx)(x.r.Col,{span:12,sm:6,md:4,my:{base:"md"},px:"xs",children:(0,n.jsxs)(l.K,{component:s.X,withBorder:!0,shadow:"md",radius:"md",py:"lg",children:[(0,n.jsx)(l.K,{align:"center",children:(0,n.jsx)(i.o,{ratio:1,radius:"md",sx:{position:"relative"},maw:"10rem",miw:"13rem",children:(0,n.jsx)(m(),{src:e.icon,alt:e.title,style:{objectPosition:"50% 80%"},fill:!0})})}),(0,n.jsxs)(l.K,{spacing:"xs",px:"lg",children:[(0,n.jsx)(r.x,{size:"md",fw:"bold",color:"accent",component:h(),href:e.href,children:e.title}),(0,n.jsxs)(o.Z,{align:"center",spacing:"xs",component:h(),href:e.href,sx:{textDecoration:"none"},children:[(0,n.jsx)(r.x,{size:"md",c:"dark",children:"Megn\xe9zem"}),(0,n.jsx)(d.k,{size:24,color:"dark",variant:"outline",sx:{border:0,cursor:"pointer"},children:(0,n.jsx)(k.sG5,{size:"100%"})})]})]})]})},a))})})}},9791:function(e,a,t){var n=t(5893),x=t(7564),l=t(1232),s=t(2623),i=t(4577),r=t(9236),o=t(5117),d=t(7834),c=t(5675),m=t.n(c),g=t(1664),h=t.n(g),k=t(3560);let f=[{icon:"illustration-life-coaching.png",title:"Life Coaching",desc:(0,n.jsx)(n.Fragment,{children:"Ha nem vagy j\xf3l a bőr\xf6dben, annak oka van. Lehet ez b\xe1rmi, de most \xfagy \xe9rzed minden ellened műk\xf6dik. K\xedv\xe1ncsi vagy hogyan lehet \xe1tkeretezni \xe9s m\xe1sk\xe9nt l\xe1tni ezt? Olvass tov\xe1bb, ha \xe9rdekel."}),more:(0,n.jsx)(n.Fragment,{children:"Egy elfogad\xf3, \xedt\xe9lkez\xe9s \xe9s b\xedr\xe1latmentes, emberk\xf6zpont\xfa t\xe1mogat\xe1s az, amire ilyenkor sz\xfcks\xe9ged van. A biztons\xe1gos k\xf6rnyezet seg\xedt megny\xedlni olyan t\xe9m\xe1k kapcs\xe1n, amit m\xe1ssal tal\xe1n nem tudsz, vagy akarsz megosztani. A k\xf6z\xf6s munk\xe1nk sor\xe1n meg tudod tal\xe1lni a saj\xe1t erőforr\xe1saidat, fejlődik az \xf6nismereted, objekt\xedv visszajelz\xe9st kapsz a műk\xf6d\xe9si mint\xe1zataidr\xf3l, \xe9s ez a fajta „t\xfck\xf6r” seg\xedt \xe9p\xedtkezni, v\xe1ltozni \xe9s v\xe1ltoztatni. Ha szeretn\xe9l v\xe1ltoz\xe1st az \xe9letedben, a m\xe1sik \xe9let egyetlen l\xe9p\xe9ssel kezdődik \xe9s ez rajtad \xe1ll."}),href:"/szolgaltatasok/life-coaching"},{icon:"illustration-rel-coaching-dual.png",title:(0,n.jsx)(n.Fragment,{children:"P\xe1rkapcsolati coaching"}),desc:(0,n.jsx)(n.Fragment,{children:"2017. febru\xe1r 9-\xe9n hat\xe1roztam el, hogy a v\xe1ltoz\xe1s \xfatj\xe1ra l\xe9pek \xe9s elkezdek \xf6nismerettel foglalkozni. Hogy mi\xe9rt eml\xe9kszem ilyen pontosan? Az\xe9rt, mert saj\xe1t \xe9letem megv\xe1ltoztat\xe1s\xe1nak legfőbb inspir\xe1ci\xf3ja a v\xe1l\xe1som volt."}),more:(0,n.jsx)(n.Fragment,{children:"T\xf6k\xe9letes p\xe1rkapcsolat nem l\xe9tezik. Ahogy senki sem t\xf6k\xe9letes, \xfagy minden kapcsolatban vannak m\xe9lypontok. Az viszont rajtunk m\xfalik, hogy tudatosan d\xf6nts\xfcnk arr\xf3l, hogy belefektetj\xfck-e a kellő munk\xe1t. A p\xe1rkapcsolat tartja el\xe9nk a leg\xe9lesebb t\xfckr\xf6t magunkr\xf3l, \xedgy \xe9rdemes t\xf6rődn\xfcnk vele, dolgoznunk rajta, mivel mag\xe1t\xf3l semmi sem műk\xf6dik. A p\xe1rkapcsolati coaching hat\xe9kony m\xf3dszer arra, hogy v\xe1ltoztassatok a r\xe9gi \xe9leteteken, a ber\xf6gződ\xf6tt s\xe9m\xe1itokon, megt\xf6rj\xe9tek az \xf6rd\xf6gi k\xf6r\xf6ket, a visszat\xe9rő veszeked\xe9seket, vagy ak\xe1r visszahozz\xe1tok az \xe9letet a ki\xfcresedett kapcsolatotokba. S hogy mikor \xe9rdemes ezzel foglalkoznotok? Erre egy szab\xe1ly van: b\xe1rmikor kezded el, az lesz a megfelelő idő. Kezdd el h\xe1t most, l\xe9gy akt\xedv r\xe9szese az \xe9letednek!"}),href:"/szolgaltatasok/parkapcsolati-coaching-paroknak"},{icon:"illustration-career-coaching.png",title:"\xc1ll\xe1sinterj\xfa \xe9s karrier coaching",desc:(0,n.jsx)(n.Fragment,{children:"Sokszor nem tudod, mi lehet a gond, hogy be sem h\xedvnak interj\xfara? Nem kapsz visszajelz\xe9st \xe1ll\xe1sinterj\xfa ut\xe1n, \xedgy fogalmad sincs mi lehetett a probl\xe9ma? Leblokkolsz, nem tudod mit felelj a feltett k\xe9rd\xe9sekre v\xe1laszul, vagy egy\xe1ltal\xe1n hogyan add el magad?"}),more:(0,n.jsx)(n.Fragment,{children:"Az \xe1ll\xe1sinterj\xfa \xe9s karrier coaching sor\xe1n szem\xe9lyre szabottan seg\xedtelek az \xe1ll\xe1skeres\xe9s \xfatvesztőiben, melyet 20 \xe9ves szakmai tapasztalatom t\xe1mogat. A folyamat v\xe9g\xe9re tiszt\xe1ban leszel azzal, hogy mit kell tudnia egy \xf6n\xe9letrajznak, mire val\xf3 a motiv\xe1ci\xf3s lev\xe9l \xe9s tudni fogod, hogy tűnj ki k\xf6nnyen a t\xf6megből. Az \xe1ll\xe1sinterj\xfara val\xf3 felk\xe9sz\xedt\xe9ssel kialak\xedtjuk a Te st\xedlusodat, amivel magabiztos fell\xe9p\xe9ssel k\xf6nnyed\xe9n teszel j\xf3 benyom\xe1st \xe9les szitu\xe1ci\xf3ban. A pr\xf3ba \xe1ll\xe1sinterj\xfan val\xf3 r\xe9szv\xe9tei lehetős\xe9ggel konkr\xe9t visszajelz\xe9st kapsz a teljes\xedtm\xe9nyedről, a ker\xfclendő sz\xf3fordulatokr\xf3l, beazonos\xedtjuk mit lenne \xe9rdemes m\xe1sk\xe9nt csin\xe1lnod. Ugyanakkor meghat\xe1rozzuk az erőss\xe9geidet, az interj\xfakon haszn\xe1lhat\xf3 meggyőz\xe9si technik\xe1kat, fel\xe9p\xedtj\xfck, hogy a t\xedpusk\xe9rd\xe9sekre hogyan \xe9rdemes megfogalmaznod a saj\xe1t v\xe1laszaidat, valamint felk\xe9sz\xfcl\xfcnk a sikeres b\xe9rt\xe1rgyal\xe1sra."}),href:"/szolgaltatasok/allasinterju-es-karrier-coaching/"}];a.Z=function(){return(0,n.jsx)(x.K,{align:"center",spacing:"xl",children:f.map((e,a)=>(0,n.jsxs)(l.Z,{component:s.X,px:{base:"xs",md:"xl"},shadow:"md",radius:"md",align:"center",justify:"center",py:"lg",children:[(0,n.jsx)(x.K,{align:"end",children:(0,n.jsx)(i.o,{ratio:1,radius:"md",sx:{position:"relative"},mx:"auto",w:"25rem",children:(0,n.jsx)(m(),{src:e.icon,alt:"",fill:!0})})}),(0,n.jsxs)(x.K,{spacing:"sm",px:"sm",align:"start",children:[(0,n.jsx)(r.D,{order:3,align:"left",children:e.title}),(0,n.jsxs)(o.x,{size:"base",maw:"40rem",children:[e.desc,(0,n.jsx)(d.o,{maxHeight:0,showLabel:"Tov\xe1bb olvasom",hideLabel:"Elrejt",styles:e=>({control:{color:e.colors.primary[1]}}),children:e.more})]}),(0,n.jsx)(k.K,{size:"md",component:h(),href:e.href,children:"Tov\xe1bbi inform\xe1ci\xf3"})]})]},a))})}},9386:function(e,a,t){t(5893)},5939:function(e,a,t){t(5893),t(5675),t(1664)},8308:function(e,a,t){var n=t(5893),x=t(2623),l=t(1232),s=t(5044),i=t(7834),r=t(7564),o=t(9236),d=t(5117),c=t(9469),m=t(1664),g=t.n(m),h=t(5434),k=t(3560);let f=[{content:'Gabival a vezetői p\xe1ly\xe1m elej\xe9n, t\xf6bb alkalommal tal\xe1lkoztunk n\xe9h\xe1ny h\xe9ten kereszt\xfcl, egy olyan időszakban, amikor a munka vil\xe1g\xe1ban \xe9rz\xe9kelhetően v\xe1ltoz\xe1sok kezdődtek. Kitűnő volt egy\xfctt dolgozni, minden egyes coaching alkalom nagyon j\xf3 l\xe9gk\xf6rben telt. A besz\xe9lget\xe9sek k\xf6zben v\xe9gig azt \xe9reztem, hogy figyelmesen meghallgatnak, semmi sincsen "r\xe1m erőltetve", \xe9s a visszajelz\xe9sek sor\xe1n nem k\xe9sz v\xe1laszokat kaptam, hanem seg\xedts\xe9get ahhoz, hogy \xe1t tudjam gondolni a vezetői feladatokkal kapcsolatban kih\xedv\xe1st jelentő helyzeteket. Gabi mindig nagyon felk\xe9sz\xfclt volt, \xe9s t\xe1mogatott abban, hogy megtal\xe1ljam a megold\xe1st a bennem felmer\xfclő k\xe9rd\xe9sekre',author:"H.J."},{content:"Gabit m\xe1r r\xe9g\xf3ta ismerem, \xe9s nagyra becs\xfcl\xf6m az \xe9rt\xe9krendet, amit k\xe9pvisel mind a munk\xe1j\xe1ban, mind a mag\xe1n\xe9let\xe9ben. Tudom, hogy b\xe1rmilyen k\xe9rd\xe9ssel fordulhatok hozz\xe1, sokszor seg\xedtett m\xe1r nekem egy neh\xe9z d\xf6nt\xe9s kapcs\xe1n megl\xe1tni a nekem igaz\xe1n fontos szempontokat, vagy egy adott helyzetben r\xe1j\xf6nni, mi\xe9rt futom ugyanazokat a k\xf6r\xf6ket, \xe9s nem jutok előre. A vele val\xf3 besz\xe9lget\xe9sek ut\xe1n sokszor m\xe1s szemsz\xf6gből l\xe1tom a probl\xe9m\xe1imat, vil\xe1gos lesz, hogy nekem mi a fontos, \xe9s ki tudom mondani, merre visz az \xfat előre (kicsit olyan, mint egy erdei kir\xe1ndul\xe1s: kapok egy t\xe9rk\xe9pet, de \xe9n d\xf6nt\xf6m el, merre megyek \xe9s milyen gyorsan). Mindig az adott helyzet l\xe9tezik, \xe9s az \xe9n megold\xe1som, nincs \xedt\xe9lkez\xe9s (\xe9s ez hihetetlen felszabad\xedt\xf3 tud lenni). Pont annyit kapok, amennyire akkor \xe9s ott k\xe9szen \xe1llok.",author:"SZ.B.H."},{content:"Gabriella mindig k\xfcl\xf6nleges finoms\xe1ggal k\xf6zel\xedti meg a f\xe1j\xf3 k\xe9rd\xe9seket, \xe9s a f\xe1j\xf3 pont megfogalmaz\xe1sa az első l\xe9p\xe9s a megold\xe1s fel\xe9. A legnehezebb tartalmakat alkot\xf3 szavak is k\xf6nnyed\xe9n kimondhat\xf3k, ami az első megk\xf6nnyebb\xfcl\xe9st adja a gy\xf3gyulni v\xe1gy\xf3nak. Ezut\xe1n pedig hatalmas t\xe1rgyi tud\xe1sb\xf3l v\xe1lasztja ki azt a seg\xedtő javaslatot, amit a legjobbnak \xe9rez. Meg\xe9rtő, empatikus, \xe9s j\xf3l figyel, ezek a j\xf3 coach fontos er\xe9nyei.",author:"ZS.J."},{content:"Gabi a v\xe1l\xe1som ut\xe1ni megfeneklett, depressz\xedv időszakomban volt ott nekem, mint seg\xedtő. Nagyon h\xe1l\xe1s vagyok az\xe9rt az elfogad\xf3 \xe9s t\xe1mogat\xf3 jelenl\xe9t\xe9rt, ami megvil\xe1g\xedtotta, hogy nem egyedi a helyzetem, \xe9s van ki\xfat a rem\xe9nytelens\xe9gből. \xdcl\xe9seink ut\xe1n \xfagy \xe9reztem, hogy felszabadult vagyok, \xfajra tiszta a fejem \xe9s k\xe9pes vagyok cselekedni",author:"H.Zs."},{content:"Nem hittem a coachingban, mert manaps\xe1g m\xe1r mindenki coachnak adja ki mag\xe1t. Amit itt tapasztaltam Gabin\xe1l, az azonban gy\xf6keresen v\xe1ltoztatta meg a hitemet ebben a műfajban. Hat\xe9kony, gyors megold\xe1st hozott \xe9s r\xf6vid folyamatban is lehet k\xe9zzel foghat\xf3 eredm\xe9nyeket tudtunk el\xe9rni. K\xf6sz\xf6n\xf6m!",author:"G.L."}];a.Z=function(){let e=e=>{let{content:a,author:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.X,{py:"md",px:"md",m:"sm",shadow:"md",radius:"lg",maw:"40rem",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(s.k,{size:40,color:"accent",variant:"outline",sx:{border:0},children:(0,n.jsx)(h.SEL,{size:"100%"})}),(0,n.jsx)(i.o,{mt:"-1rem",maxHeight:120,showLabel:"Tov\xe1bb olvasom",hideLabel:"Becsukom",transitionDuration:0,sx:{fontSize:"0.8em"},styles:e=>({control:{color:e.colors.accent[4],marginTop:e.spacing.xs}}),children:a})]})})})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.K,{align:"center",spacing:"xs",children:[(0,n.jsx)(o.D,{order:2,align:"center",children:"V\xe9lem\xe9nyek"}),(0,n.jsx)(d.x,{size:"md",ta:"center",children:"N\xe9zd meg, mit mondanak r\xf3lam azok, akik m\xe1r r\xe9szt vettek a coaching programjaimon!"}),(0,n.jsxs)(c.M,{breakpoints:[{minWidth:"sm",cols:1},{minWidth:"md",cols:2},{minWidth:1200,cols:2}],mt:"xl",children:[f.map((a,t)=>(0,n.jsx)(e,{content:a.content,author:a.author},t)),f.length%2!=0?(0,n.jsx)(x.X,{py:"md",px:"md",m:"md",shadow:"md",maw:"40rem",radius:"lg",children:(0,n.jsxs)(r.K,{align:"center",spacing:"xs",mt:"lg",children:[(0,n.jsx)(d.x,{align:"center",fs:"2.5em",children:"Legy\xe9l te a k\xf6vetkező!"}),(0,n.jsx)(k.K,{size:"md",component:g(),href:"#kapcsolat",children:"Jelentkezem"})]})}):null]})]})})}}}]);