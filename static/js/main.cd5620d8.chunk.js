(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){},108:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},160:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(11),o=a.n(c),i=(a(103),a(21)),s=a(12),l=a(36),d=a(7),m=a(8),j=a(41),b=a(19),p=a.n(b),u=a(63),h=a(57),g=a(87),x=a(200),y=a(207),O=a(56),f=a.n(O),v=(a(108),a.p+"static/media/blueTheme-girl.645cdd7e.svg"),N=a.p+"static/media/blueTheme-boy.b2f186cb.svg",k=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/eduBlue.e5287488.svg"),w=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/expBlue.fc91e37c.svg"),C=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/contactsBlue.08a9dafd.svg"),S=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,{type:"dark",primary:"#545fc4",primary400:"#6e76c7",primary600:"#3644c9",primary80:"#545fc4cc",primary50:"#545fc480",primary30:"#545fc44d",secondary:"#212121",secondary70:"#212121b3",secondary50:"#21212180",tertiary:"#eaeaea",tertiary80:"#eaeaeacc",tertiary70:"#eaeaeab3",tertiary50:"#eaeaea80",aboutimg1:N,aboutimg2:v,eduimg:k,expimg:w,contactsimg:C}),I={theme:S},D=a(1),L=Object(r.createContext)();var B=function(e){var t=Object(r.useState)(I.theme),a=Object(m.a)(t,2),n=a[0],c=(a[1],Object(r.useState)(!1)),o=Object(m.a)(c,2),i=o[0],s=o[1],l={theme:n,drawerOpen:i,setHandleDrawer:function(){s(!i)}};return Object(D.jsx)(L.Provider,{value:l,children:e.children})};var P=function(){var e=Object(r.useContext)(L),t=e.theme,a=e.setHandleDrawer,n=Object(r.useState)(!1),c=Object(m.a)(n,2),o=c[0],i=c[1],s=function(){i(!1),a()},l=Object(x.a)((function(e){var a;return{navMenu:(a={fontSize:"2.5rem",color:t.primary,cursor:"pointer",transform:"translateY(-10px)",transition:"color 300ms ease-in-out","&:hover":{color:t.tertiary}},Object(d.a)(a,e.breakpoints.down("sm"),{fontSize:"2.5rem",color:t.tertiary,"&:hover":{color:t.secondary}}),Object(d.a)(a,e.breakpoints.down("xs"),{fontSize:"2rem"}),a),MuiDrawer:Object(d.a)({padding:"0 1.8em",width:"14em",fontFamily:" var(--primaryFont)",fontStyle:" normal",fontWeight:" normal",fontSize:" 24px",background:t.secondary,overflow:"hidden",justifyContent:"center",borderTopRightRadius:"40px",borderBottomRightRadius:"40px"},e.breakpoints.down("sm"),{width:"12em"}),closebtnIcon:Object(d.a)({fontSize:"2rem",fontWeight:"bold",cursor:"pointer",color:t.primary,position:"absolute",right:40,top:40,transition:"color 300ms ease-in-out","&:hover":{color:t.tertiary}},e.breakpoints.down("sm"),{right:20,top:20}),drawerItem:Object(d.a)({margin:"2rem auto 2rem auto",borderRadius:"78.8418px",background:t.secondary,color:t.primary,width:"85%",height:"60px",display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"0 30px",boxSizing:"border-box",border:"2px solid",borderColor:t.primary,transition:"all 300ms, ease-in-out","&:hover":{color:t.tertiary,borderColor:t.tertiary}},e.breakpoints.down("sm"),{width:"95%",padding:"0 25px",height:"45px"}),drawerLinks:Object(d.a)({fontFamily:"var(--primaryFont)",width:"50%",fontSize:"1.3rem",fontWeight:600},e.breakpoints.down("sm"),{fontSize:"1.125rem"}),drawerIcon:Object(d.a)({fontSize:"1.6rem"},e.breakpoints.down("sm"),{fontSize:"1.385rem"})}}))();return Object(D.jsxs)("div",{className:"navbar",children:[Object(D.jsx)("div",{className:"navbar--container",children:Object(D.jsx)(u.b,{className:l.navMenu,onClick:function(){i(!0),a()},"aria-label":"Menu"})}),Object(D.jsxs)(y.a,{variant:"temporary",onClose:function(e,t){("backdropClick"!==t||"escapeKeyDown"!==t)&&s()},anchor:"left",open:o,classes:{paper:l.MuiDrawer},className:"drawer",disableScrollLock:!0,children:[Object(D.jsx)("div",{className:"div-closebtn",children:Object(D.jsx)(f.a,{onClick:s,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),s())},className:l.closebtnIcon,role:"button",tabIndex:"0","aria-label":"Close"})}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{onClick:s,children:Object(D.jsxs)("div",{className:"navLink--container",children:[Object(D.jsx)(p.a,{left:!0,children:Object(D.jsx)(j.a,{to:"/",smooth:!0,spy:"true",duration:2e3,children:Object(D.jsxs)("div",{className:l.drawerItem,children:[Object(D.jsx)(u.a,{className:l.drawerIcon}),Object(D.jsx)("span",{className:l.drawerLinks,children:"Home"})]})})}),Object(D.jsx)(p.a,{left:!0,children:Object(D.jsx)(j.a,{to:"/#skills",smooth:!0,spy:"true",duration:2e3,children:Object(D.jsxs)("div",{className:l.drawerItem,children:[Object(D.jsx)(h.b,{className:l.drawerIcon}),Object(D.jsx)("span",{className:l.drawerLinks,children:"Skills"})]})})}),Object(D.jsx)(p.a,{left:!0,children:Object(D.jsx)(j.a,{to:"/#contacts",smooth:!0,spy:"true",duration:2e3,children:Object(D.jsxs)("div",{className:l.drawerItem,children:[Object(D.jsx)(g.a,{className:l.drawerIcon}),Object(D.jsx)("span",{className:l.drawerLinks,children:"Contact"})]})})})]})})]})]})};a(119);var F=function(){var e=Object(r.useContext)(L).theme;return Object(D.jsx)("div",{className:"footer",style:{backgroundColor:e.secondary},children:Object(D.jsxs)("p",{style:{color:e.tertiary},children:["Made with",Object(D.jsx)("span",{style:{color:e.orange,margin:"0 0.5rem -1rem 0.5rem"},children:"\u2764"}),"and",Object(D.jsx)("span",{style:{margin:"0 0.5rem -1rem 0.5rem"},children:"\u2615"})]})})},T=a(203),z=(a(120),a.p+"static/media/resume.3a63329e.pdf"),G={name:"Lyubomir Kostadinov",title:"Programmer",description:"I am a fourth year student at Breda University of Applied Sciences.",image:a.p+"static/media/landingImg.39a47e5d.jpg",resumePdf:z},R={github:"https://github.com/lubokostadinov",linkedIn:"https://www.linkedin.com/in/lyubomir-kostadinov-b25062229/"},E=a(14);var W=function(){var e=Object(r.useContext)(L),t=e.theme,a=e.drawerOpen,n=Object(x.a)((function(e){return{contactBtn:{color:t.primary,borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",fontSize:"1rem",fontWeight:"500",height:"50px",fontFamily:"var(--primaryFont)",border:"3px solid ".concat(t.primary),transition:"all 300ms ease-in-out","&:hover":{color:"#eaeaea",border:"3px solid #eaeaea"}},resumeBtn:{backgroundColor:t.primary,color:t.secondary,borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",height:"50px",fontSize:"1rem",fontWeight:"500",fontFamily:"var(--primaryFont)",border:"3px solid ".concat(t.primary),transition:"all 300ms ease-in-out","&:hover":{backgroundColor:"#eaeaea",border:"3px solid  #eaeaea"}}}}))();return Object(D.jsx)("div",{className:"landing",children:Object(D.jsxs)("div",{className:"landing--container",children:[Object(D.jsx)("div",{className:"landing--container-left",style:{backgroundColor:t.primary},children:Object(D.jsxs)("div",{className:"lcl--content",children:[R.github&&Object(D.jsx)("a",{href:R.github,target:"_blank",rel:"noreferrer",children:Object(D.jsx)(E.f,{className:"landing--social",style:{color:t.secondary},"aria-label":"GitHub"})}),R.linkedIn&&Object(D.jsx)("a",{href:R.linkedIn,target:"_blank",rel:"noreferrer",children:Object(D.jsx)(E.g,{className:"landing--social",style:{color:t.secondary},"aria-label":"LinkedIn"})}),R.codepen&&Object(D.jsx)("a",{href:R.codepen,target:"_blank",rel:"noreferrer",children:Object(D.jsx)(E.e,{className:"landing--social",style:{color:t.secondary},"aria-label":"GitHub"})})]})}),Object(D.jsx)("img",{src:G.image,alt:"",className:"landing--img",style:{opacity:"".concat(a?"0":"1"),borderColor:t.secondary}}),Object(D.jsx)("div",{className:"landing--container-right",style:{backgroundColor:t.secondary},children:Object(D.jsxs)("div",{className:"lcr--content",style:{color:t.tertiary},children:[Object(D.jsx)("h6",{children:G.title}),Object(D.jsx)("h1",{children:G.name}),Object(D.jsx)("p",{children:G.description}),Object(D.jsxs)("div",{className:"lcr-buttonContainer",children:[G.resumePdf&&Object(D.jsx)("a",{href:G.resumePdf,download:"resume",target:"_blank",rel:"noreferrer",children:Object(D.jsx)(T.a,{className:n.resumeBtn,children:"Get My CV"})}),Object(D.jsx)(j.a,{to:"/#contacts",smooth:!0,spy:"true",duration:2e3,children:Object(D.jsx)(T.a,{className:n.contactBtn,children:"Contact"})})]})]})})]})})},M=(a(121),{title:"About me",description1:"I am currently studying game programming at Breda University. During my studies, I have gained knowledge and practical experience in programming with C/C++, OpenGL, DirectX 12, and the agile methodologies.",description2:"My main interest is in graphics and game engine programming. I am looking forward to find an internship position, where I can continue learning from more experienced programmers.",image:1});var H=function(){var e=Object(r.useContext)(L).theme;return Object(D.jsxs)("div",{className:"about",id:"about",style:{backgroundColor:e.secondary},children:[Object(D.jsxs)("div",{className:"line-styling",children:[Object(D.jsx)("div",{className:"style-circle",style:{backgroundColor:e.primary}}),Object(D.jsx)("div",{className:"style-circle",style:{backgroundColor:e.primary}}),Object(D.jsx)("div",{className:"style-line",style:{backgroundColor:e.primary}})]}),Object(D.jsxs)("div",{className:"about-body",children:[Object(D.jsxs)("div",{className:"about-description",children:[Object(D.jsx)("h2",{style:{color:e.primary},children:M.title}),Object(D.jsxs)("p",{style:{color:e.tertiary80},children:[M.description1,Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),M.description2,Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),M.description3]})]}),Object(D.jsx)("div",{className:"about-img",children:Object(D.jsx)("img",{src:1===M.image?e.aboutimg1:e.aboutimg2,alt:""})})]})]})},X=a(88),Y=a.n(X),A=(a(122),["Git","C++","C","DirectX","OpenGl","Helix Core","Unreal Engine","Jira"]),_=a.p+"static/media/git-blue.00dc301d.svg",J=a.p+"static/media/c-blue.dd8af1c5.svg",U=a.p+"static/media/cplusplus-blue.8c4a19b1.svg",q=a.p+"static/media/DirectX-blue.54c987d2.svg",K=a.p+"static/media/opengl-blue.27c761ab.svg",V=a.p+"static/media/helixCore-blue.3640366e.svg",Q=a.p+"static/media/unrealEngine-blue.f3e19054.svg",Z=a.p+"static/media/Jira-blue.521934d2.svg",$=function(e){var t=e.toLowerCase(),a=!1;return"c++"===t?(e=U,a=!0):"c"===t?(e=J,a=!0):"git"===t?(e=_,a=!0):"directx"===t?e=q:"opengl"===t?e=K:"helix core"===t?(e=V,a=!0):"unreal engine"===t?(e=Q,a=!0):"jira"===t?e=Z:(e="",a=!1),{skill:e,isInverted:a}};var ee=function(){var e=Object(r.useContext)(L).theme,t={backgroundColor:e.secondary,boxShadow:"0px 0px 30px ".concat(e.primary)};return Object(D.jsxs)("div",{className:"skills",id:"skills",style:{backgroundColor:e.secondary},children:[Object(D.jsx)("div",{className:"skillsHeader",children:Object(D.jsx)("h2",{style:{color:e.primary},children:"Skills"})}),Object(D.jsx)("div",{className:"skillsContainer",children:Object(D.jsx)("div",{className:"skill--scroll",children:Object(D.jsx)(Y.a,{gradient:!1,speed:80,delay:0,play:!1,direction:"left",children:A.map((function(a,r){return Object(D.jsxs)("div",{className:"skill--box",style:t,children:[Object(D.jsx)("img",{className:$(a).isInverted?"skillBoxInvertedStyle":"",src:$(a).skill,alt:a}),Object(D.jsx)("h3",{style:{color:e.primary},children:a})]},r)}))})})})]})},te=(a(65),a(89),a.p+"static/media/girl1.6884bb72.svg"),ae=a.p+"static/media/girl2.30853a9b.svg",re=a.p+"static/media/girl3.fab93fe0.svg",ne=a.p+"static/media/boy1.21233799.svg";a.p,a.p,a(138);var ce=a(37),oe=(a(139),a.p+"static/media/placeholder.3fcbbdcd.png");a(140);a(69);var ie=a.p+"static/media/eduImgWhite.433f9250.svg",se=a.p+"static/media/eduImgBlack.8ee2e691.svg";var le=function(e){var t=e.id,a=e.institution,n=e.course,c=e.startYear,o=e.endYear,i=Object(r.useContext)(L).theme,s=Object(x.a)((function(e){return{educationCard:{backgroundColor:i.primary30,"&:hover":{backgroundColor:i.primary30}}}}))();return Object(D.jsx)(p.a,{bottom:!0,children:Object(D.jsxs)("div",{className:"education-card ".concat(s.educationCard),children:[Object(D.jsx)("div",{className:"educard-img",style:{backgroundColor:i.primary},children:Object(D.jsx)("img",{src:"light"===i.type?se:ie,alt:""})}),Object(D.jsxs)("div",{className:"education-details",children:[Object(D.jsxs)("h6",{style:{color:i.primary},children:[c,"-",o]}),Object(D.jsx)("h4",{style:{color:i.tertiary},children:n}),Object(D.jsx)("h5",{style:{color:i.tertiary80},children:a})]})]},t)})},de=[{id:1,institution:"Breda University of Applied Sciences, the Netherlands",course:"Bachelor Creative Media and Game Techologies (programming track)",startYear:"2020",endYear:"Present"},{id:2,institution:"Secondary School, Sofia High School of Mathematics, Bulgaria",course:"High School Diploma",startYear:"2015",endYear:" 2020"}];var me=function(){var e=Object(r.useContext)(L).theme;return Object(D.jsx)("div",{className:"education",id:"resume",style:{backgroundColor:e.secondary},children:Object(D.jsxs)("div",{className:"education-body",children:[Object(D.jsxs)("div",{className:"education-description",children:[Object(D.jsx)("h1",{style:{color:e.primary},children:"Education"}),de.map((function(e){return Object(D.jsx)(le,{id:e.id,institution:e.institution,course:e.course,startYear:e.startYear,endYear:e.endYear},e.id)}))]}),Object(D.jsx)("div",{className:"education-image",children:Object(D.jsx)("img",{src:e.eduimg,alt:""})})]})})};a(70),a.p,a.p;var je=a(208),be=a(204),pe=a(205),ue=a(90),he=a.n(ue),ge=a(91),xe=a.n(ge),ye=a(29),Oe=a(66),fe="lubokostadinov13@gmail.com",ve="+359 88 430 22220",Ne="Sofia, Bulgaria ",ke="https://sheetdb.io/api/v1/ftfkqaytf632q";a(160);var we=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(""),i=Object(m.a)(o,2),s=i[0],l=i[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),b=j[0],p=j[1],u=Object(r.useState)(""),h=Object(m.a)(u,2),g=h[0],y=h[1],O=Object(r.useState)(!1),v=Object(m.a)(O,2),N=v[0],k=v[1],w=Object(r.useState)(""),C=Object(m.a)(w,2),S=C[0],I=C[1],B=Object(r.useContext)(L).theme,P=function(e,t){"clickaway"!==t&&c(!1)},F=Object(x.a)((function(e){return{input:{border:"4px solid ".concat(B.primary80),backgroundColor:"".concat(B.secondary),color:"".concat(B.tertiary),fontFamily:"var(--primaryFont)",fontWeight:500,transition:"border 300ms ease-in-out","&:focus":{border:"4px solid ".concat(B.orange)}},message:{border:"4px solid ".concat(B.primary80),backgroundColor:"".concat(B.secondary),color:"".concat(B.tertiary),fontFamily:"var(--primaryFont)",fontWeight:500,transition:"border 300ms ease-in-out","&:focus":{border:"4px solid ".concat(B.orange)}},label:{backgroundColor:"".concat(B.secondary),color:"".concat(B.primary),fontFamily:"var(--primaryFont)",fontWeight:600,fontSize:"0.9rem",padding:"0 5px",transform:"translate(25px,50%)",display:"inline-flex"},socialIcon:{width:"45px",height:"45px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px",backgroundColor:B.primary,color:B.secondary,transition:"all 300ms ease-in-out","&:hover":{transform:"scale(1.1)",backgroundColor:B.orange}},detailsIcon:{backgroundColor:B.primary,color:B.secondary,borderRadius:"50%",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"23px",transition:"all 300ms ease-in-out",flexShrink:0,"&:hover":{transform:"scale(1.1)",color:B.secondary}},submitBtn:{backgroundColor:B.primary,color:B.secondary,transition:"300ms ease-in-out","&:hover":{transform:"scale(1.08)",backgroundColor:B.orange,borderColor:B.orange}}}}))();return Object(D.jsxs)("div",{className:"contacts",id:"contacts",style:{backgroundColor:B.secondary},children:[Object(D.jsxs)("div",{className:"contacts--container",children:[Object(D.jsx)("h1",{style:{color:B.primary},children:"Contacts"}),Object(D.jsxs)("div",{className:"contacts-body",children:[Object(D.jsxs)("div",{className:"contacts-form",children:[Object(D.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),s&&b&&g)if(xe()(b)){var t={name:s,email:b,message:g};he.a.post(ke,t).then((function(e){console.log("success"),k(!0),I(""),l(""),p(""),y(""),c(!1)}))}else I("Invalid email"),c(!0);else I("Enter all the fields"),c(!0)},children:[Object(D.jsxs)("div",{className:"input-container",children:[Object(D.jsx)("label",{htmlFor:"Name",className:F.label,children:"Name"}),Object(D.jsx)("input",{placeholder:"Your Name",value:s,onChange:function(e){return l(e.target.value)},type:"text",name:"Name",className:"form-input ".concat(F.input)})]}),Object(D.jsxs)("div",{className:"input-container",children:[Object(D.jsx)("label",{htmlFor:"Email",className:F.label,children:"E-mail"}),Object(D.jsx)("input",{placeholder:"eg. John@doe.com",value:b,onChange:function(e){return p(e.target.value)},type:"email",name:"Email",className:"form-input ".concat(F.input)})]}),Object(D.jsxs)("div",{className:"input-container",children:[Object(D.jsx)("label",{htmlFor:"Message",className:F.label,children:"Message"}),Object(D.jsx)("textarea",{placeholder:"Drop me a line....",value:g,onChange:function(e){return y(e.target.value)},type:"text",name:"Message",className:"form-message ".concat(F.message)})]}),Object(D.jsx)("div",{className:"submit-btn",children:Object(D.jsxs)("button",{type:"submit",className:F.submitBtn,children:[Object(D.jsx)("p",{children:N?"Sent":"Send"}),Object(D.jsxs)("div",{className:"submit-icon",children:[Object(D.jsx)(ye.e,{className:"send-icon",style:{animation:N?"fly 0.8s linear both":"initial",position:N?"absolute":"initial"}}),Object(D.jsx)(ye.a,{className:"success-icon",style:{display:N?"inline-flex":"none",opacity:N?"1":"0"}})]})]})})]}),Object(D.jsx)(je.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:4e3,onClose:P,children:Object(D.jsx)(be.a,{action:Object(D.jsx)(n.a.Fragment,{children:Object(D.jsx)(pe.a,{size:"small","aria-label":"close",color:"inherit",onClick:P,children:Object(D.jsx)(f.a,{fontSize:"small"})})}),style:{backgroundColor:B.primary,color:B.secondary,fontFamily:"var(--primaryFont)"},message:S})})]}),Object(D.jsxs)("div",{className:"contacts-details",children:[Object(D.jsxs)("a",{href:"mailto:".concat(fe),className:"personal-details",children:[Object(D.jsx)("div",{className:F.detailsIcon,children:Object(D.jsx)(Oe.a,{})}),Object(D.jsx)("p",{style:{color:B.tertiary},children:fe})]}),Object(D.jsxs)("a",{href:"tel:".concat(ve),className:"personal-details",children:[Object(D.jsx)("div",{className:F.detailsIcon,children:Object(D.jsx)(Oe.b,{})}),Object(D.jsx)("p",{style:{color:B.tertiary},children:ve})]}),Object(D.jsxs)("div",{className:"personal-details",children:[Object(D.jsx)("div",{className:F.detailsIcon,children:Object(D.jsx)(ce.b,{})}),Object(D.jsx)("p",{style:{color:B.tertiary},children:Ne})]}),Object(D.jsxs)("div",{className:"socialmedia-icons",children:[R.github&&Object(D.jsx)("a",{href:R.github,target:"_blank",rel:"noreferrer",className:F.socialIcon,children:Object(D.jsx)(E.f,{"aria-label":"GitHub"})}),R.linkedIn&&Object(D.jsx)("a",{href:R.linkedIn,target:"_blank",rel:"noreferrer",className:F.socialIcon,children:Object(D.jsx)(E.h,{"aria-label":"LinkedIn"})}),R.codepen&&Object(D.jsx)("a",{href:R.codepen,target:"_blank",rel:"noreferrer",className:F.socialIcon,children:Object(D.jsx)(E.e,{"aria-label":"CodePen"})})]})]})]})]}),Object(D.jsx)("img",{src:B.contactsimg,alt:"contacts",className:"contacts--img"})]})},Ce=[{id:1,projectName:"Descent Raytraced",projectDesc:"During my third year at university, I worked on Descent Raytraced with six other programmers. The goal of the project was to replace the graphics of the old game Descent with modern GPU ray tracing. For this project, we used the DirectX Raytracing API. I worked primarily on developing the renderer and implementing the path-traced global illumination, the physically-based rendering, and importance sampling.",tags:["C/C++","HLSL","DirectX 12"],code:"https://github.com/BredaUniversityGames/DXX-Raytracer",demo:"https://youtu.be/wCGnQoakOWc",image:a.p+"static/media/scrn0000.953759bc.png"},{id:2,projectName:"Game Engine",projectDesc:"During my second year at university, with 3 other programmers, we developed a cross-platform game engine for Windows and PlayStation 4 using C++, DirectX 12 for Windows graphics, and GNMX for PlayStation 4 graphics. The engine runs a demo game on both Windows and PlayStation 4. I worked on implementing the Windows renderer. The engine includes model loading, textures, directional lights, and a post-processing pipeline.",tags:["C++","DirectX 12","PlayStation 4"],code:"",demo:"https://www.youtube.com/watch?v=mJh2_gTsIok&feature=youtu.be",image:a.p+"static/media/Engine2.3a7db4e7.png"},{id:3,projectName:"Rougelike Game",projectDesc:"During the second year at university, I collaborated with other programmers, artists, and designers to create a game using a custom game engine built in C++ and DirectX 12. The game runs on both Windows and PlayStation 4. For this project, I focused primarily on implementing the functionality of UI elements and developing a UI editor to allow designers to create menus.",tags:["C++","DirectX 12","PlayStation 4"],code:"",demo:"https://youtu.be/xErvTAX_Lc8",image:a.p+"static/media/setsuko.176c29d1.png"},{id:4,projectName:"3D OpenGL",projectDesc:"Side project to explore the OpenGL API. The project contains model loading in OBJ format, materials with multiple textures, instanced rendering, point lights, and post-processing shaders.",tags:["C++","OpenGL"],code:"https://github.com/lubokostadinov/3DopenGL.git",demo:"https://youtu.be/DDv-jmcb5X4",image:a.p+"static/media/Screenshot (61).f090b1ba.png"},{id:5,projectName:"Simple Ray Tracer",projectDesc:"This project is a C++ program that generates a ray traced image with a plane and spheres using diffuse shading and reflection. It uses my own math library and SFML. I implemented unit tests for vector operations to ensure accuracy.",tags:["C++"],code:"https://github.com/lubokostadinov/RayTracer-Project",demo:"https://github.com/lubokostadinov/RayTracer-Project",image:a.p+"static/media/result.290985b0.png"},{id:6,projectName:"Empires",projectDesc:"During my first year at university, I collaborated with another programmer to create a game on Raspberry Pi, using C++, OpenGL ES 3, and ImGui. The game generates a galaxy and assigns each player a home planet. The objective is to gather resources, craft spaceships, and conquer enemy planets. I worked on implementing the renderer, which includes loading 3D models (OBJ format), instanced rendering, and post-processing effects.",tags:["C++","OpenGL","ImGui"],code:"",demo:"https://youtu.be/T96Bzpo98Is",image:a.p+"static/media/empires.84d59357.png"}];a(164),a(165);var Se=function(e){var t=e.id,a=e.name,r=e.desc,n=e.tags,c=e.code,o=e.demo,i=e.image,s=e.theme,l=Object(x.a)((function(e){return{iconBtn:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:50,border:"2px solid ".concat(s.tertiary),color:s.tertiary,transition:"  all 300ms ease-in-out;","&:hover":{color:s.orange,borderColor:s.orange,transform:"scale(1.1)",border:"2px solid ".concat(s.secondary),transition:"all 300ms ease-in-out;"}},icon:{fontSize:"1.1rem",transition:" transition: all 300ms ease-in-out;","&:hover":{}},demoBtnSvg:{position:"relative",left:"2px",fontSize:"1rem"}}}))();return Object(D.jsx)(p.a,{bottom:!0,children:Object(D.jsxs)("div",{className:"singleProject",style:{backgroundColor:s.primary400},children:[Object(D.jsxs)("div",{className:"projectContent",children:[Object(D.jsx)("h2",{id:a.replace(" ","-").toLowerCase(),style:{color:s.tertiary},children:a}),Object(D.jsx)("img",{src:i||oe,alt:a}),Object(D.jsxs)("div",{className:"project--showcaseBtn",children:[Object(D.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:l.iconBtn,"aria-labelledby":"".concat(a.replace(" ","-").toLowerCase()," ").concat(a.replace(" ","-").toLowerCase(),"-demo"),children:Object(D.jsx)(E.i,{id:"".concat(a.replace(" ","-").toLowerCase(),"-demo"),className:l.icon+" "+l.demoBtnSvg,"aria-label":"Demo"})}),c?Object(D.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:l.iconBtn,"aria-labelledby":"".concat(a.replace(" ","-").toLowerCase()," ").concat(a.replace(" ","-").toLowerCase(),"-code"),children:Object(D.jsx)(E.d,{id:"".concat(a.replace(" ","-").toLowerCase(),"-code"),className:l.icon,"aria-label":"Code"})}):""]})]}),Object(D.jsx)("p",{className:"project--desc",style:{background:s.secondary,color:s.tertiary},children:r}),Object(D.jsx)("div",{className:"project--lang",style:{background:s.secondary,color:s.tertiary80},children:n.map((function(e,t){return Object(D.jsx)("span",{children:e},t)}))})]},t)})};var Ie=function(){var e=Object(r.useContext)(L).theme,t=Object(x.a)((function(){return{viewAllBtn:{color:e.tertiary,backgroundColor:e.primary,transition:"all 300ms ease-in-out","&:hover":{color:e.secondary,backgroundColor:e.orange}},viewArr:{color:e.tertiary,backgroundColor:e.secondary70,width:"40px",height:"40px",padding:"0.5rem",fontSize:"1.05rem",borderRadius:"50%",cursor:"pointer",transition:"background-color 0.2s","&:hover":{color:e.tertiary,backgroundColor:e.secondary}}}}))();return Object(D.jsx)(D.Fragment,{children:Ce.length>0&&Object(D.jsxs)("div",{className:"projects",id:"projects",style:{backgroundColor:e.secondary},children:[Object(D.jsx)("div",{className:"projects--header",children:Object(D.jsx)("h1",{style:{color:e.primary},children:"Projects"})}),Object(D.jsxs)("div",{className:"projects--body",children:[Object(D.jsx)("div",{className:"projects--bodyContainer",children:Ce.slice(0,6).map((function(t){return Object(D.jsx)(Se,{theme:e,id:t.id,name:t.projectName,desc:t.projectDesc,tags:t.tags,code:t.code,demo:t.demo,image:t.image},t.id)}))}),Ce.length>3&&Object(D.jsx)("div",{className:"projects--viewAll",children:Object(D.jsx)(i.b,{to:"/projects",children:Object(D.jsxs)("button",{className:t.viewAllBtn,children:["View All",Object(D.jsx)(ce.a,{className:t.viewArr})]})})})]})]})})},De=a(92);De.a,ye.d,h.a,E.c,E.m,E.l,E.k,a(166),a(167);a(80);var Le=a(93);a(168);var Be=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),o=Object(m.a)(c,2),i=o[0],s=o[1],l=Object(r.useContext)(L).theme;window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?n(!0):e<=300&&n(!1)})),window.addEventListener("scroll",(function(){var e=document.body.scrollHeight,t=window.scrollY+window.innerHeight;s(t+200>e)}));var d=Object(x.a)((function(){return{icon:{fontSize:"3rem",color:l.tertiary,transition:"all 0.3s ease-in-out",opacity:"0.3","&:hover":{color:l.orange,opacity:"0.8"}}}}))();return Object(D.jsx)("div",{style:{display:a?"inline":"none"},className:"backToTop",children:Object(D.jsx)("button",{className:i?"orange":"",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Back to top",children:Object(D.jsx)(Le.a,{className:d.icon})})})};var Pe=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(l.a,{children:Object(D.jsxs)("title",{children:[G.name," - Porfolio"]})}),Object(D.jsx)(P,{}),Object(D.jsx)(W,{}),Object(D.jsx)(H,{}),Object(D.jsx)(me,{}),Object(D.jsx)(ee,{}),Object(D.jsx)(Ie,{}),Object(D.jsx)(we,{}),Object(D.jsx)(F,{})]})},Fe=a(206);a(169);a(170);var Te=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useContext)(L).theme,o=Ce.filter((function(e){return(e.projectName+e.projectDesc+e.tags).toLowerCase().includes(a.toLowerCase())})),s=Object(x.a)((function(e){return{search:Object(d.a)({color:c.tertiary,width:"40%",height:"2.75rem",outline:"none",border:"none",borderRadius:"20px",padding:"1rem 1rem",fontFamily:"'Noto Sans TC', sans-serif",fontWeight:500,fontSize:"0.9rem",backgroundColor:c.secondary,boxShadow:"dark"===c.type?"inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060":"inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030","&::placeholder":{color:c.tertiary80}},e.breakpoints.down("sm"),{width:"350px"}),home:Object(d.a)({color:c.tertiary,position:"absolute",top:"50%",left:"4rem",padding:"7px",borderRadius:"50%",boxSizing:"content-box",fontSize:"3rem",cursor:"pointer",transform:"translateY(-50%)",transition:"all 0.3s ease-in-out","&:hover":{color:c.secondary}},e.breakpoints.down("md"),{fontSize:"2rem",padding:"0"})}}))();return Object(D.jsxs)("div",{className:"projectPage",style:{backgroundColor:c.secondary},children:[Object(D.jsx)(l.a,{children:Object(D.jsxs)("title",{children:[G.name," | Projects"]})}),Object(D.jsxs)("div",{className:"projectPage-header",style:{backgroundColor:c.primary},children:[Object(D.jsx)(i.b,{to:"/",children:Object(D.jsx)(ye.c,{className:s.home})}),Object(D.jsx)("h1",{style:{color:c.tertiary},children:"Projects"})]}),Object(D.jsxs)("div",{className:"projectPage-container",children:[Object(D.jsx)("div",{className:"projectPage-search",children:Object(D.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)},placeholder:"Search projects...",className:s.search})}),Object(D.jsx)("div",{className:"project-container",children:Object(D.jsx)(Fe.a,{className:"project-grid",container:!0,direction:"row",alignItems:"center",justifyContent:"center",children:o.map((function(e){return Object(D.jsx)(Se,{theme:c,id:e.id,name:e.projectName,desc:e.projectDesc,tags:e.tags,code:e.code,demo:e.demo,image:e.image},e.id)}))})})]})]})};var ze=Object(s.g)((function(e){var t=e.history;return Object(r.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}})),null}));a(171);var Ge=function(){return Object(D.jsxs)("div",{className:"app",children:[Object(D.jsxs)(i.a,{children:[Object(D.jsx)(ze,{}),Object(D.jsxs)(s.d,{children:[Object(D.jsx)(s.b,{path:"/",exact:!0,component:Pe}),Object(D.jsx)(s.b,{path:"/projects",exact:!0,component:Te}),Object(D.jsx)(s.a,{to:"/"})]})]}),Object(D.jsx)(Be,{})]})},Re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,210)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};a(172),a(173);o.a.render(Object(D.jsx)(B,{children:Object(D.jsx)(Ge,{})}),document.getElementById("root")),Re()},69:function(e,t,a){},70:function(e,t,a){},80:function(e,t,a){}},[[174,1,2]]]);
//# sourceMappingURL=main.cd5620d8.chunk.js.map