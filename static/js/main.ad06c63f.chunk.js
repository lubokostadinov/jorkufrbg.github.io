(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){},109:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},161:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),o=a(12),s=a.n(o),i=(a(104),a(21)),n=a(11),l=a(36),d=a(7),m=a(8),j=a(41),b=a(19),p=a.n(b),u=a(63),h=a(57),g=a(88),x=a(201),y=a(208),f=a(56),O=a.n(f),v=(a(109),a.p,a.p,a.p+"static/media/lightBlueTheme-boy.8c01f110.svg"),N=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/redTheme-girl.e2b9dd83.svg"),k=(a.p,a.p,a.p,a.p+"static/media/eduLightBlue.c8d44550.svg"),C=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/expLightBlue.bc674369.svg"),w=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/contactsLightBlue.8de20727.svg"),S=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,{theme:{type:"dark",primary:"#00a0e3",primary400:"#00a0e3",primary600:"#00a0e3",primary80:"#00a0e3cc",primary50:"#00a0e380",primary30:"#00a0e34d",secondary:"#212121",secondary70:"#212121b3",secondary50:"#21212180",tertiary:"#eaeaea",tertiary80:"#eaeaeacc",tertiary70:"#eaeaeab3",tertiary50:"#eaeaea80",orange:"#f56539",aboutimg1:v,aboutimg2:N,eduimg:k,expimg:C,contactsimg:w}}),I=a(1),D=Object(r.createContext)();var F=function(e){var t=Object(r.useState)(S.theme),a=Object(m.a)(t,2),c=a[0],o=(a[1],Object(r.useState)(!1)),s=Object(m.a)(o,2),i=s[0],n=s[1],l={theme:c,drawerOpen:i,setHandleDrawer:function(){n(!i)}};return Object(I.jsx)(D.Provider,{value:l,children:e.children})};var B=function(){var e=Object(r.useContext)(D),t=e.theme,a=e.setHandleDrawer,c=Object(r.useState)(!1),o=Object(m.a)(c,2),s=o[0],i=o[1],n=function(){i(!1),a()},l=Object(x.a)((function(e){var a;return{navMenu:(a={fontSize:"2.5rem",color:t.primary,cursor:"pointer",transform:"translateY(-10px)",transition:"color 300ms ease-in-out","&:hover":{color:t.orange}},Object(d.a)(a,e.breakpoints.down("sm"),{fontSize:"2.5rem",color:t.tertiary,"&:hover":{color:t.secondary}}),Object(d.a)(a,e.breakpoints.down("xs"),{fontSize:"2rem"}),a),MuiDrawer:Object(d.a)({padding:"0 1.8em",width:"14em",fontFamily:" var(--primaryFont)",fontStyle:" normal",fontWeight:" normal",fontSize:" 24px",background:t.secondary,overflow:"hidden",justifyContent:"center",borderTopRightRadius:"40px",borderBottomRightRadius:"40px"},e.breakpoints.down("sm"),{width:"12em"}),closebtnIcon:Object(d.a)({fontSize:"2rem",fontWeight:"bold",cursor:"pointer",color:t.primary,position:"absolute",right:40,top:40,transition:"color 300ms ease-in-out","&:hover":{color:t.orange}},e.breakpoints.down("sm"),{right:20,top:20}),drawerItem:Object(d.a)({margin:"2rem auto 2rem auto",borderRadius:"78.8418px",background:t.secondary,color:t.primary,width:"85%",height:"60px",display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"0 30px",boxSizing:"border-box",border:"2px solid",borderColor:t.primary,transition:"all 300ms, ease-in-out","&:hover":{color:t.orange,borderColor:t.orange}},e.breakpoints.down("sm"),{width:"95%",padding:"0 25px",height:"45px"}),drawerLinks:Object(d.a)({fontFamily:"var(--primaryFont)",width:"50%",fontSize:"1.3rem",fontWeight:600},e.breakpoints.down("sm"),{fontSize:"1.125rem"}),drawerIcon:Object(d.a)({fontSize:"1.6rem"},e.breakpoints.down("sm"),{fontSize:"1.385rem"})}}))();return Object(I.jsxs)("div",{className:"navbar",children:[Object(I.jsx)("div",{className:"navbar--container",children:Object(I.jsx)(u.b,{className:l.navMenu,onClick:function(){i(!0),a()},"aria-label":"Menu"})}),Object(I.jsxs)(y.a,{variant:"temporary",onClose:function(e,t){("backdropClick"!==t||"escapeKeyDown"!==t)&&n()},anchor:"left",open:s,classes:{paper:l.MuiDrawer},className:"drawer",disableScrollLock:!0,children:[Object(I.jsx)("div",{className:"div-closebtn",children:Object(I.jsx)(O.a,{onClick:n,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),n())},className:l.closebtnIcon,role:"button",tabIndex:"0","aria-label":"Close"})}),Object(I.jsx)("br",{}),Object(I.jsx)("div",{onClick:n,children:Object(I.jsxs)("div",{className:"navLink--container",children:[Object(I.jsx)(p.a,{left:!0,children:Object(I.jsx)(j.a,{to:"/",smooth:!0,spy:"true",duration:2e3,children:Object(I.jsxs)("div",{className:l.drawerItem,children:[Object(I.jsx)(u.a,{className:l.drawerIcon}),Object(I.jsx)("span",{className:l.drawerLinks,children:"Home"})]})})}),Object(I.jsx)(p.a,{left:!0,children:Object(I.jsx)(j.a,{to:"/#skills",smooth:!0,spy:"true",duration:2e3,children:Object(I.jsxs)("div",{className:l.drawerItem,children:[Object(I.jsx)(h.b,{className:l.drawerIcon}),Object(I.jsx)("span",{className:l.drawerLinks,children:"Skills"})]})})}),Object(I.jsx)(p.a,{left:!0,children:Object(I.jsx)(j.a,{to:"/#contacts",smooth:!0,spy:"true",duration:2e3,children:Object(I.jsxs)("div",{className:l.drawerItem,children:[Object(I.jsx)(g.a,{className:l.drawerIcon}),Object(I.jsx)("span",{className:l.drawerLinks,children:"Contact"})]})})})]})})]})]})};a(120);var P=function(){var e=Object(r.useContext)(D).theme;return Object(I.jsx)("div",{className:"footer",style:{backgroundColor:e.secondary},children:Object(I.jsxs)("p",{style:{color:e.tertiary},children:["Made with",Object(I.jsx)("span",{style:{color:e.orange,margin:"0 0.5rem -1rem 0.5rem"},children:"\u2764"}),"and",Object(I.jsx)("span",{style:{margin:"0 0.5rem -1rem 0.5rem"},children:"\u2615"})]})})},R=a(204),z=(a(121),a.p+"static/media/resume.bc382d73.pdf"),L={name:"Georgi Karadzhov",title:"Web Developer",description:"Motivated developer with 6 years of experience in challenging development environments. Deadline-driven with strong desire to learn and contribute to team success.",image:a.p+"static/media/landingImg.d8cde788.png",resumePdf:z},W="https://github.com/jorkufrbg",M="https://www.linkedin.com/in/jorkusjc/",Y="https://codepen.io/Ragnarokr",H=a(15);var T=function(){var e=Object(r.useContext)(D),t=e.theme,a=e.drawerOpen,c=Object(x.a)((function(e){return{contactBtn:{color:t.primary,borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",fontSize:"1rem",fontWeight:"500",height:"50px",fontFamily:"var(--primaryFont)",border:"3px solid ".concat(t.primary),transition:"all 300ms ease-in-out","&:hover":{color:t.orange,border:"3px solid ".concat(t.orange)}},resumeBtn:{backgroundColor:t.primary,color:t.secondary,borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",height:"50px",fontSize:"1rem",fontWeight:"500",fontFamily:"var(--primaryFont)",border:"3px solid ".concat(t.primary),transition:"all 300ms ease-in-out","&:hover":{backgroundColor:t.orange,border:"3px solid ".concat(t.orange)}}}}))();return Object(I.jsx)("div",{className:"landing",children:Object(I.jsxs)("div",{className:"landing--container",children:[Object(I.jsx)("div",{className:"landing--container-left",style:{backgroundColor:t.primary},children:Object(I.jsxs)("div",{className:"lcl--content",children:[W&&Object(I.jsx)("a",{href:W,target:"_blank",rel:"noreferrer",children:Object(I.jsx)(H.f,{className:"landing--social",style:{color:t.secondary},"aria-label":"GitHub"})}),M&&Object(I.jsx)("a",{href:M,target:"_blank",rel:"noreferrer",children:Object(I.jsx)(H.g,{className:"landing--social",style:{color:t.secondary},"aria-label":"LinkedIn"})}),Y&&Object(I.jsx)("a",{href:Y,target:"_blank",rel:"noreferrer",children:Object(I.jsx)(H.e,{className:"landing--social",style:{color:t.secondary},"aria-label":"GitHub"})})]})}),Object(I.jsx)("img",{src:L.image,alt:"",className:"landing--img",style:{opacity:"".concat(a?"0":"1"),borderColor:t.secondary}}),Object(I.jsx)("div",{className:"landing--container-right",style:{backgroundColor:t.secondary},children:Object(I.jsxs)("div",{className:"lcr--content",style:{color:t.tertiary},children:[Object(I.jsx)("h6",{children:L.title}),Object(I.jsx)("h1",{children:L.name}),Object(I.jsx)("p",{children:L.description}),Object(I.jsxs)("div",{className:"lcr-buttonContainer",children:[L.resumePdf&&Object(I.jsx)("a",{href:L.resumePdf,download:"resume",target:"_blank",rel:"noreferrer",children:Object(I.jsx)(R.a,{className:c.resumeBtn,children:"Get My CV"})}),Object(I.jsx)(j.a,{to:"/#contacts",smooth:!0,spy:"true",duration:2e3,children:Object(I.jsx)(R.a,{className:c.contactBtn,children:"Contact"})})]})]})})]})})},J=(a(122),"Who I am"),A="Hello, my name's Georgi. I am a web developer based in Sofia, Bulgaria.",E="For the last year I have been working on freelance projects and improving my developer skills to the next level. Currently I'm focused on React.js and related tools, such as Redux and Next.js",G="Usually I spend my leisure hours doing extreme sports and playing video games. I'm committed to learning and exploring new frontiers.",Q=1;var _=function(){var e=Object(r.useContext)(D).theme;return Object(I.jsxs)("div",{className:"about",id:"about",style:{backgroundColor:e.secondary},children:[Object(I.jsxs)("div",{className:"line-styling",children:[Object(I.jsx)("div",{className:"style-circle",style:{backgroundColor:e.primary}}),Object(I.jsx)("div",{className:"style-circle",style:{backgroundColor:e.primary}}),Object(I.jsx)("div",{className:"style-line",style:{backgroundColor:e.primary}})]}),Object(I.jsxs)("div",{className:"about-body",children:[Object(I.jsxs)("div",{className:"about-description",children:[Object(I.jsx)("h2",{style:{color:e.primary},children:J}),Object(I.jsxs)("p",{style:{color:e.tertiary80},children:[A,Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),E,Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),G]})]}),Object(I.jsx)("div",{className:"about-img",children:Object(I.jsx)("img",{src:1===Q?e.aboutimg1:e.aboutimg2,alt:""})})]})]})},q=a(89),U=a.n(q),K=(a(123),["Javascript","Typescript","React","Redux","Next JS","Webpack","PHP","Wordpress","SCSS","Bootstrap","MongoDB","Firebase","Git","Ubuntu","MaterialUI","Figma","Photoshop","Illustrator","Lightroom","Premiere Pro"]),V=a.p+"static/media/javascript.7f988f04.svg",X=a.p+"static/media/typescript.219f1127.svg",Z=a.p+"static/media/redux.dbb99c70.svg",$=a.p+"static/media/php.0e10a70a.svg",ee=a.p+"static/media/premierepro.9211e4a7.svg",te=a.p+"static/media/ubuntu.09563338.svg",ae=a.p+"static/media/nextJS.a8086973.svg",re=a.p+"static/media/photoshop.6576d308.svg",ce=a.p+"static/media/illustrator.956c8630.svg",oe=a.p+"static/media/react.c3a0b34a.svg",se=a.p+"static/media/bootstrap.d0881bfe.svg",ie=a.p+"static/media/mongoDB.4428e2ce.svg",ne=a.p+"static/media/firebase.1aa395c8.svg",le=a.p+"static/media/git.d7795d63.svg",de=a.p+"static/media/lightroom.d421b514.svg",me=a.p+"static/media/materialui.d7f5c38f.svg",je=a.p+"static/media/figma.cc8e1116.svg",be=a.p+"static/media/webpack.468cc9ee.svg",pe=a.p+"static/media/scss.84214add.svg",ue=a.p+"static/media/wordpress.c1abc976.svg",he=function(e){var t=e.toLowerCase(),a=!1;return"photoshop"===t?(e=re,a=!0):"illustrator"===t?(e=ce,a=!0):"scss"===t?e=pe:"javascript"===t?e=V:"typescript"===t?(e=X,a=!0):"next js"===t?(e=ae,a=!0):"react"===t?e=oe:"mongodb"===t?e=ie:"bootstrap"===t?(e=se,a=!0):"php"===t?(e=$,a=!0):"firebase"===t?e=ne:"git"===t?e=le:"lightroom"===t?(e=de,a=!0):"materialui"===t?e=me:"premiere pro"===t?(e=ee,a=!0):"wordpress"===t?e=ue:"figma"===t?e=je:"webpack"===t?e=be:"ubuntu"===t?(e=te,a=!0):"redux"===t?(e=Z,a=!0):(e="",a=!1),{skill:e,isInverted:a}};var ge=function(){var e=Object(r.useContext)(D).theme,t={backgroundColor:e.secondary,boxShadow:"0px 0px 30px ".concat(e.primary)};return Object(I.jsxs)("div",{className:"skills",id:"skills",style:{backgroundColor:e.secondary},children:[Object(I.jsx)("div",{className:"skillsHeader",children:Object(I.jsx)("h2",{style:{color:e.primary},children:"Skills"})}),Object(I.jsx)("div",{className:"skillsContainer",children:Object(I.jsx)("div",{className:"skill--scroll",children:Object(I.jsx)(U.a,{gradient:!1,speed:80,pauseOnHover:!0,pauseOnClick:!0,delay:0,play:!0,direction:"left",children:K.map((function(a,r){return Object(I.jsxs)("div",{className:"skill--box",style:t,children:[Object(I.jsx)("img",{className:he(a).isInverted?"skillBoxInvertedStyle":"",src:he(a).skill,alt:a}),Object(I.jsx)("h3",{style:{color:e.tertiary},children:a})]},r)}))})})})]})},xe=(a(65),a(90),a.p+"static/media/girl1.6884bb72.svg"),ye=a.p+"static/media/girl2.30853a9b.svg",fe=a.p+"static/media/girl3.fab93fe0.svg",Oe=a.p+"static/media/boy1.21233799.svg";a.p,a.p,a(139);var ve=a(37),Ne=(a(140),a.p+"static/media/placeholder.3fcbbdcd.png");a(141);a(69);var ke=a.p+"static/media/eduImgWhite.433f9250.svg",Ce=a.p+"static/media/eduImgBlack.8ee2e691.svg";var we=function(e){var t=e.id,a=e.institution,c=e.course,o=e.startYear,s=e.endYear,i=Object(r.useContext)(D).theme,n=Object(x.a)((function(e){return{educationCard:{backgroundColor:i.primary30,"&:hover":{backgroundColor:"#f5653980"}}}}))();return Object(I.jsx)(p.a,{bottom:!0,children:Object(I.jsxs)("div",{className:"education-card ".concat(n.educationCard),children:[Object(I.jsx)("div",{className:"educard-img",style:{backgroundColor:i.primary},children:Object(I.jsx)("img",{src:"light"===i.type?Ce:ke,alt:""})}),Object(I.jsxs)("div",{className:"education-details",children:[Object(I.jsxs)("h6",{style:{color:i.primary},children:[o,"-",s]}),Object(I.jsx)("h4",{style:{color:i.tertiary},children:c}),Object(I.jsx)("h5",{style:{color:i.tertiary80},children:a})]})]},t)})},Se=[{id:1,institution:"Medical University of Sofia",course:"Master of Pharmacy",startYear:"2011 ",endYear:" 2017"},{id:2,institution:"31\u2019 High School for Foreign Languages and Finances",course:"High School Diploma",startYear:"2004 ",endYear:" 2009"}];var Ie=function(){var e=Object(r.useContext)(D).theme;return Object(I.jsx)("div",{className:"education",id:"resume",style:{backgroundColor:e.secondary},children:Object(I.jsxs)("div",{className:"education-body",children:[Object(I.jsxs)("div",{className:"education-description",children:[Object(I.jsx)("h1",{style:{color:e.primary},children:"Education"}),Se.map((function(e){return Object(I.jsx)(we,{id:e.id,institution:e.institution,course:e.course,startYear:e.startYear,endYear:e.endYear},e.id)}))]}),Object(I.jsx)("div",{className:"education-image",children:Object(I.jsx)("img",{src:e.eduimg,alt:""})})]})})},De=(a(70),[{id:1,company:"Freelancing",jobtitle:"Web Developer - Custom Wordpress Themes",startYear:"2021 ",endYear:" Present"},{id:2,company:"Studio Rubik",jobtitle:"Web Developer",startYear:"2019 ",endYear:" 2021"},{id:3,company:"Studio Kipo",jobtitle:"Junior Front-End Developer",startYear:"2017 ",endYear:" 2019"}]),Fe=a.p+"static/media/expImgWhite.b9923db4.svg",Be=a.p+"static/media/expImgBlack.01d2dd8e.svg";var Pe=function(e){var t=e.id,a=e.company,c=e.jobtitle,o=e.startYear,s=e.endYear,i=Object(r.useContext)(D).theme,n=Object(x.a)((function(e){return{experienceCard:{backgroundColor:i.primary30,"&:hover":{backgroundColor:"#f5653980"}}}}))();return Object(I.jsx)(p.a,{bottom:!0,children:Object(I.jsxs)("div",{className:"experience-card ".concat(n.experienceCard),children:[Object(I.jsx)("div",{className:"expcard-img",style:{backgroundColor:i.primary},children:Object(I.jsx)("img",{src:"light"===i.type?Be:Fe,alt:""})}),Object(I.jsxs)("div",{className:"experience-details",children:[Object(I.jsxs)("h6",{style:{color:i.primary},children:[o,"-",s]}),Object(I.jsx)("h4",{style:{color:i.tertiary},children:c}),Object(I.jsx)("h5",{style:{color:i.tertiary80},children:a})]})]},t)})};var Re=function(){var e=Object(r.useContext)(D).theme;return Object(I.jsx)("div",{className:"experience",id:"experience",style:{backgroundColor:e.secondary},children:Object(I.jsxs)("div",{className:"experience-body",children:[Object(I.jsx)("div",{className:"experience-image",children:Object(I.jsx)("img",{src:e.expimg,alt:""})}),Object(I.jsxs)("div",{className:"experience-description",children:[Object(I.jsx)("h1",{style:{color:e.primary},children:"Experience"}),De.map((function(e){return Object(I.jsx)(Pe,{id:e.id,jobtitle:e.jobtitle,company:e.company,startYear:e.startYear,endYear:e.endYear},e.id)}))]})]})})},ze=a(209),Le=a(205),We=a(206),Me=a(91),Ye=a.n(Me),He=a(92),Te=a.n(He),Je=a(29),Ae=a(66),Ee="jorkufrbg@gmail.com",Ge="+359 889 12 9996",Qe="Geo Milev 47, Sofia, Bulgaria ",_e="https://sheetdb.io/api/v1/ftfkqaytf632q";a(161);var qe=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1],s=Object(r.useState)(""),i=Object(m.a)(s,2),n=i[0],l=i[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),b=j[0],p=j[1],u=Object(r.useState)(""),h=Object(m.a)(u,2),g=h[0],y=h[1],f=Object(r.useState)(!1),v=Object(m.a)(f,2),N=v[0],k=v[1],C=Object(r.useState)(""),w=Object(m.a)(C,2),S=w[0],F=w[1],B=Object(r.useContext)(D).theme,P=function(e,t){"clickaway"!==t&&o(!1)},R=Object(x.a)((function(e){return{input:{border:"4px solid ".concat(B.primary80),backgroundColor:"".concat(B.secondary),color:"".concat(B.tertiary),fontFamily:"var(--primaryFont)",fontWeight:500,transition:"border 300ms ease-in-out","&:focus":{border:"4px solid ".concat(B.orange)}},message:{border:"4px solid ".concat(B.primary80),backgroundColor:"".concat(B.secondary),color:"".concat(B.tertiary),fontFamily:"var(--primaryFont)",fontWeight:500,transition:"border 300ms ease-in-out","&:focus":{border:"4px solid ".concat(B.orange)}},label:{backgroundColor:"".concat(B.secondary),color:"".concat(B.primary),fontFamily:"var(--primaryFont)",fontWeight:600,fontSize:"0.9rem",padding:"0 5px",transform:"translate(25px,50%)",display:"inline-flex"},socialIcon:{width:"45px",height:"45px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px",backgroundColor:B.primary,color:B.secondary,transition:"all 300ms ease-in-out","&:hover":{transform:"scale(1.1)",backgroundColor:B.orange}},detailsIcon:{backgroundColor:B.primary,color:B.secondary,borderRadius:"50%",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"23px",transition:"all 300ms ease-in-out",flexShrink:0,"&:hover":{transform:"scale(1.1)",color:B.secondary}},submitBtn:{backgroundColor:B.primary,color:B.secondary,transition:"300ms ease-in-out","&:hover":{transform:"scale(1.08)",backgroundColor:B.orange,borderColor:B.orange}}}}))();return Object(I.jsxs)("div",{className:"contacts",id:"contacts",style:{backgroundColor:B.secondary},children:[Object(I.jsxs)("div",{className:"contacts--container",children:[Object(I.jsx)("h1",{style:{color:B.primary},children:"Contacts"}),Object(I.jsxs)("div",{className:"contacts-body",children:[Object(I.jsxs)("div",{className:"contacts-form",children:[Object(I.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n&&b&&g)if(Te()(b)){var t={name:n,email:b,message:g};Ye.a.post(_e,t).then((function(e){console.log("success"),k(!0),F(""),l(""),p(""),y(""),o(!1)}))}else F("Invalid email"),o(!0);else F("Enter all the fields"),o(!0)},children:[Object(I.jsxs)("div",{className:"input-container",children:[Object(I.jsx)("label",{htmlFor:"Name",className:R.label,children:"Name"}),Object(I.jsx)("input",{placeholder:"Your Name",value:n,onChange:function(e){return l(e.target.value)},type:"text",name:"Name",className:"form-input ".concat(R.input)})]}),Object(I.jsxs)("div",{className:"input-container",children:[Object(I.jsx)("label",{htmlFor:"Email",className:R.label,children:"E-mail"}),Object(I.jsx)("input",{placeholder:"eg. John@doe.com",value:b,onChange:function(e){return p(e.target.value)},type:"email",name:"Email",className:"form-input ".concat(R.input)})]}),Object(I.jsxs)("div",{className:"input-container",children:[Object(I.jsx)("label",{htmlFor:"Message",className:R.label,children:"Message"}),Object(I.jsx)("textarea",{placeholder:"Drop me a line....",value:g,onChange:function(e){return y(e.target.value)},type:"text",name:"Message",className:"form-message ".concat(R.message)})]}),Object(I.jsx)("div",{className:"submit-btn",children:Object(I.jsxs)("button",{type:"submit",className:R.submitBtn,children:[Object(I.jsx)("p",{children:N?"Sent":"Send"}),Object(I.jsxs)("div",{className:"submit-icon",children:[Object(I.jsx)(Je.e,{className:"send-icon",style:{animation:N?"fly 0.8s linear both":"initial",position:N?"absolute":"initial"}}),Object(I.jsx)(Je.a,{className:"success-icon",style:{display:N?"inline-flex":"none",opacity:N?"1":"0"}})]})]})})]}),Object(I.jsx)(ze.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:4e3,onClose:P,children:Object(I.jsx)(Le.a,{action:Object(I.jsx)(c.a.Fragment,{children:Object(I.jsx)(We.a,{size:"small","aria-label":"close",color:"inherit",onClick:P,children:Object(I.jsx)(O.a,{fontSize:"small"})})}),style:{backgroundColor:B.primary,color:B.secondary,fontFamily:"var(--primaryFont)"},message:S})})]}),Object(I.jsxs)("div",{className:"contacts-details",children:[Object(I.jsxs)("a",{href:"mailto:".concat(Ee),className:"personal-details",children:[Object(I.jsx)("div",{className:R.detailsIcon,children:Object(I.jsx)(Ae.a,{})}),Object(I.jsx)("p",{style:{color:B.tertiary},children:Ee})]}),Object(I.jsxs)("a",{href:"tel:".concat(Ge),className:"personal-details",children:[Object(I.jsx)("div",{className:R.detailsIcon,children:Object(I.jsx)(Ae.b,{})}),Object(I.jsx)("p",{style:{color:B.tertiary},children:Ge})]}),Object(I.jsxs)("div",{className:"personal-details",children:[Object(I.jsx)("div",{className:R.detailsIcon,children:Object(I.jsx)(ve.b,{})}),Object(I.jsx)("p",{style:{color:B.tertiary},children:Qe})]}),Object(I.jsxs)("div",{className:"socialmedia-icons",children:[W&&Object(I.jsx)("a",{href:W,target:"_blank",rel:"noreferrer",className:R.socialIcon,children:Object(I.jsx)(H.f,{"aria-label":"GitHub"})}),M&&Object(I.jsx)("a",{href:M,target:"_blank",rel:"noreferrer",className:R.socialIcon,children:Object(I.jsx)(H.h,{"aria-label":"LinkedIn"})}),Y&&Object(I.jsx)("a",{href:Y,target:"_blank",rel:"noreferrer",className:R.socialIcon,children:Object(I.jsx)(H.e,{"aria-label":"CodePen"})})]})]})]})]}),Object(I.jsx)("img",{src:B.contactsimg,alt:"contacts",className:"contacts--img"})]})},Ue=a.p+"static/media/meetups.afd27969.svg",Ke=a.p+"static/media/quotes.b2fb4d96.svg",Ve=a.p+"static/media/jamming.814d3601.svg",Xe=a.p+"static/media/rubik.ef7df6fd.svg",Ze=a.p+"static/media/flights.8421a1f5.svg",$e=a.p+"static/media/ido.dff6bbe4.svg",et=a.p+"static/media/wordborn.25169d08.svg",tt=a.p+"static/media/whisp.fc56d042.svg",at=a.p+"static/media/motoretta.23d2c50b.svg",rt=a.p+"static/media/aakasha.6f28421f.svg",ct=a.p+"static/media/artGallery.69c39daa.svg",ot=a.p+"static/media/hearteum.638ace7a.svg",st=a.p+"static/media/plygear.14ec4e66.svg",it=[{id:1,projectName:"React Meetups",projectDesc:"Browse and expand a huge list of highly active React meetups!",tags:["React","Next","MongoDB"],code:"https://github.com/jorkufrbg/next-meetups",demo:"https://meetups-nextjs-l8uk1bzc7-jorkufrbg.vercel.app/",image:Ue},{id:2,projectName:"React Quotes",projectDesc:"React application for storing memorable quotes I came across.",tags:["React","Router","Firebase"],code:"https://github.com/jorkufrbg/React-Quotes-App",demo:"https://quotes-app-a62b0.web.app/quotes",image:Ke},{id:3,projectName:"React Jamming",projectDesc:"Simple application for searching and adding music to playlists, which utilizes the powerful Spotify API",tags:["React","JavaScript","Spotify API"],code:"https://github.com/jorkufrbg/Jamming-React",demo:"http://jamming-cc.surge.sh/",image:Ve},{id:4,projectName:"Studio Rubik",projectDesc:"Creative Agency for Video Production, Rebranding and UX/UI Design.",tags:["Wordpress","Javascript","SCSS","Webpack"],code:"",demo:"https://www.studiorubik.com/",image:Xe},{id:5,projectName:"Flights and Adventures",projectDesc:"Website for paragliding and extreme sports.",tags:["Wordpress","CSS","jQuery"],code:"",demo:"http://flightsandadventures.bg/",image:Ze},{id:6,projectName:"Ido Design",projectDesc:"High-end wayfinding solutions, interior design branding and POSM for public interior and exterior commercial spaces.",tags:["Python","CSS","JavaScript"],code:"",demo:"https://ido.design/",image:$e},{id:7,projectName:"Wordborn",projectDesc:"This project is focused on teaching technical writing, public speaking and creative writing.",tags:["Wordpress","SCSS","JavaScript","jQuery"],code:"",demo:"https://wordborn.org/",image:et},{id:8,projectName:"Whisp",projectDesc:"Fast-track self-service tool for sorting out your healthcare and residency abroad or back home!",tags:["Wordpress","SCSS","JavaScript","jQuery"],code:"",demo:"https://www.whisphealth.com/",image:tt},{id:9,projectName:"Motoretta",projectDesc:"The first of its kind electric moped in Bulgaria.",tags:["PHP","jQuery","SCSS"],code:"",demo:"https://motorettagroup.com/",image:at},{id:10,projectName:"Aakasha",projectDesc:"A unique clothing brand combining natural fabrics and impeccable quality.",tags:["PHP","jQuery","Bootstrap"],code:"",demo:"https://www.aakasha.com/",image:rt},{id:11,projectName:"Sofia Art Gallery",projectDesc:"This website houses not only examples of contemporary and national revival art, but also the country's largest collection of medieval paintings.",tags:["SCSS","jQuery"],code:"",demo:"https://nationalgallery.bg/",image:ct},{id:12,projectName:"Michael Cohen Personal Website",projectDesc:"Michael Harris Cohen\u2019s stories have been published in numerous magazines and anthologies.",tags:["HTML","SCSS","jQuery"],code:"https://github.com/jorkufrbg/Michael-Harris-Website",demo:"https://www.michaelharriscohen.net/",image:a.p+"static/media/michael.1bbe5eef.svg"},{id:13,projectName:"PlyGear",projectDesc:"PlyGear is a design studio and workshop for tailor-made furniture units made exclusively from plywood.",tags:["HTML","SCSS","JavaScript"],code:"",demo:"https://plygear.com/",image:st},{id:14,projectName:"Hearteum",projectDesc:"Hearteum is a utility-payment solution on the Blockchain that stimulates commerce to improve customer value.",tags:["HTML","SCSS","JavaScript","Webpack"],code:"",demo:"https://hearteum.studiorubik.com/",image:ot}];a(165),a(166);var nt=function(e){var t=e.id,a=e.name,r=e.desc,c=e.tags,o=e.code,s=e.demo,i=e.image,n=e.theme,l=Object(x.a)((function(e){return{iconBtn:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:50,border:"2px solid ".concat(n.tertiary),color:n.tertiary,transition:"  all 300ms ease-in-out;","&:hover":{color:n.orange,borderColor:n.orange,transform:"scale(1.1)",border:"2px solid ".concat(n.secondary),transition:"all 300ms ease-in-out;"}},icon:{fontSize:"1.1rem",transition:" transition: all 300ms ease-in-out;","&:hover":{}},demoBtnSvg:{position:"relative",left:"2px",fontSize:"1rem"}}}))();return Object(I.jsx)(p.a,{bottom:!0,children:Object(I.jsxs)("div",{className:"singleProject",style:{backgroundColor:n.primary400},children:[Object(I.jsxs)("div",{className:"projectContent",children:[Object(I.jsx)("h2",{id:a.replace(" ","-").toLowerCase(),style:{color:n.tertiary},children:a}),Object(I.jsx)("img",{src:i||Ne,alt:a}),Object(I.jsxs)("div",{className:"project--showcaseBtn",children:[Object(I.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:l.iconBtn,"aria-labelledby":"".concat(a.replace(" ","-").toLowerCase()," ").concat(a.replace(" ","-").toLowerCase(),"-demo"),children:Object(I.jsx)(H.i,{id:"".concat(a.replace(" ","-").toLowerCase(),"-demo"),className:l.icon+" "+l.demoBtnSvg,"aria-label":"Demo"})}),o?Object(I.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:l.iconBtn,"aria-labelledby":"".concat(a.replace(" ","-").toLowerCase()," ").concat(a.replace(" ","-").toLowerCase(),"-code"),children:Object(I.jsx)(H.d,{id:"".concat(a.replace(" ","-").toLowerCase(),"-code"),className:l.icon,"aria-label":"Code"})}):""]})]}),Object(I.jsx)("p",{className:"project--desc",style:{background:n.secondary,color:n.tertiary},children:r}),Object(I.jsx)("div",{className:"project--lang",style:{background:n.secondary,color:n.tertiary80},children:c.map((function(e,t){return Object(I.jsx)("span",{children:e},t)}))})]},t)})};var lt=function(){var e=Object(r.useContext)(D).theme,t=Object(x.a)((function(){return{viewAllBtn:{color:e.tertiary,backgroundColor:e.primary,transition:"all 300ms ease-in-out","&:hover":{color:e.secondary,backgroundColor:e.orange}},viewArr:{color:e.tertiary,backgroundColor:e.secondary70,width:"40px",height:"40px",padding:"0.5rem",fontSize:"1.05rem",borderRadius:"50%",cursor:"pointer",transition:"background-color 0.2s","&:hover":{color:e.tertiary,backgroundColor:e.secondary}}}}))();return Object(I.jsx)(I.Fragment,{children:it.length>0&&Object(I.jsxs)("div",{className:"projects",id:"projects",style:{backgroundColor:e.secondary},children:[Object(I.jsx)("div",{className:"projects--header",children:Object(I.jsx)("h1",{style:{color:e.primary},children:"Projects"})}),Object(I.jsxs)("div",{className:"projects--body",children:[Object(I.jsx)("div",{className:"projects--bodyContainer",children:it.slice(0,6).map((function(t){return Object(I.jsx)(nt,{theme:e,id:t.id,name:t.projectName,desc:t.projectDesc,tags:t.tags,code:t.code,demo:t.demo,image:t.image},t.id)}))}),it.length>3&&Object(I.jsx)("div",{className:"projects--viewAll",children:Object(I.jsx)(i.b,{to:"/projects",children:Object(I.jsxs)("button",{className:t.viewAllBtn,children:["View All",Object(I.jsx)(ve.a,{className:t.viewArr})]})})})]})]})})},dt=a(93);dt.a,Je.d,h.a,H.c,H.m,H.l,H.k,a(167),a(168);a(80);var mt=a(94);a(169);var jt=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(!1),s=Object(m.a)(o,2),i=s[0],n=s[1],l=Object(r.useContext)(D).theme;window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?c(!0):e<=300&&c(!1)})),window.addEventListener("scroll",(function(){var e=document.body.scrollHeight,t=window.scrollY+window.innerHeight;n(t+200>e)}));var d=Object(x.a)((function(){return{icon:{fontSize:"3rem",color:l.tertiary,transition:"all 0.3s ease-in-out",opacity:"0.3","&:hover":{color:l.orange,opacity:"0.8"}}}}))();return Object(I.jsx)("div",{style:{display:a?"inline":"none"},className:"backToTop",children:Object(I.jsx)("button",{className:i?"orange":"",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Back to top",children:Object(I.jsx)(mt.a,{className:d.icon})})})};var bt=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(l.a,{children:Object(I.jsxs)("title",{children:[L.name," - Porfolio"]})}),Object(I.jsx)(B,{}),Object(I.jsx)(T,{}),Object(I.jsx)(_,{}),Object(I.jsx)(Ie,{}),Object(I.jsx)(ge,{}),Object(I.jsx)(Re,{}),Object(I.jsx)(lt,{}),Object(I.jsx)(qe,{}),Object(I.jsx)(P,{})]})},pt=a(207);a(170);a(171);var ut=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(r.useContext)(D).theme,s=it.filter((function(e){return(e.projectName+e.projectDesc+e.tags).toLowerCase().includes(a.toLowerCase())})),n=Object(x.a)((function(e){return{search:Object(d.a)({color:o.tertiary,width:"40%",height:"2.75rem",outline:"none",border:"none",borderRadius:"20px",padding:"1rem 1rem",fontFamily:"'Noto Sans TC', sans-serif",fontWeight:500,fontSize:"0.9rem",backgroundColor:o.secondary,boxShadow:"dark"===o.type?"inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060":"inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030","&::placeholder":{color:o.tertiary80}},e.breakpoints.down("sm"),{width:"350px"}),home:Object(d.a)({color:o.tertiary,position:"absolute",top:"50%",left:"4rem",padding:"7px",borderRadius:"50%",boxSizing:"content-box",fontSize:"3rem",cursor:"pointer",transform:"translateY(-50%)",transition:"all 0.3s ease-in-out","&:hover":{color:o.secondary}},e.breakpoints.down("md"),{fontSize:"2rem",padding:"0"})}}))();return Object(I.jsxs)("div",{className:"projectPage",style:{backgroundColor:o.secondary},children:[Object(I.jsx)(l.a,{children:Object(I.jsxs)("title",{children:[L.name," | Projects"]})}),Object(I.jsxs)("div",{className:"projectPage-header",style:{backgroundColor:o.primary},children:[Object(I.jsx)(i.b,{to:"/",children:Object(I.jsx)(Je.c,{className:n.home})}),Object(I.jsx)("h1",{style:{color:o.tertiary},children:"Projects"})]}),Object(I.jsxs)("div",{className:"projectPage-container",children:[Object(I.jsx)("div",{className:"projectPage-search",children:Object(I.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Search projects...",className:n.search})}),Object(I.jsx)("div",{className:"project-container",children:Object(I.jsx)(pt.a,{className:"project-grid",container:!0,direction:"row",alignItems:"center",justifyContent:"center",children:s.map((function(e){return Object(I.jsx)(nt,{theme:o,id:e.id,name:e.projectName,desc:e.projectDesc,tags:e.tags,code:e.code,demo:e.demo,image:e.image},e.id)}))})})]})]})};var ht=Object(n.g)((function(e){var t=e.history;return Object(r.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}})),null}));a(172);var gt=function(){return Object(I.jsxs)("div",{className:"app",children:[Object(I.jsxs)(i.a,{children:[Object(I.jsx)(ht,{}),Object(I.jsxs)(n.d,{children:[Object(I.jsx)(n.b,{path:"/",exact:!0,component:bt}),Object(I.jsx)(n.b,{path:"/projects",exact:!0,component:ut}),Object(I.jsx)(n.a,{to:"/"})]})]}),Object(I.jsx)(jt,{})]})},xt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,211)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),o(e),s(e)}))};a(173),a(174);s.a.render(Object(I.jsx)(F,{children:Object(I.jsx)(gt,{})}),document.getElementById("root")),xt()},69:function(e,t,a){},70:function(e,t,a){},80:function(e,t,a){}},[[175,1,2]]]);
//# sourceMappingURL=main.ad06c63f.chunk.js.map