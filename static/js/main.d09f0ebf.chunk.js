(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(A,e,t){},37:function(A,e,t){},65:function(A,e,t){"use strict";t.r(e);var a=t(2),c=t(11),i=t.n(c),n=(t(34),t(35),t(36),t(37),t(24)),s=t(1),r=t(4),g=t(0);var l=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:23.335,height:23.335,...A,children:Object(g.jsxs)("g",{"data-name":"Group 99",fill:"#fff",children:[Object(g.jsx)("path",{"data-name":"Rectangle 58",d:"M21.213 0l2.121 2.121L2.121 23.335 0 21.213z"}),Object(g.jsx)("path",{"data-name":"Rectangle 59",d:"M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z"})]})})};var d=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:27,height:40,viewBox:"0 0 27 40",...A,children:Object(g.jsxs)("g",{"data-name":"Group 101",transform:"translate(-375 -21)",children:[Object(g.jsx)("rect",{"data-name":"Rectangle 16",width:13,height:8,rx:4,transform:"translate(375 53)",fill:"#f40051"}),Object(g.jsx)("rect",{"data-name":"Rectangle 11",width:20,height:8,rx:4,transform:"translate(382 21)",fill:"#f2b300"}),Object(g.jsx)("rect",{"data-name":"Rectangle 15",width:20,height:8,rx:4,transform:"translate(382 37)",fill:"#7620ff"}),Object(g.jsx)("rect",{"data-name":"Rectangle 12",width:8,height:8,rx:4,transform:"translate(375 29)",fill:"#4cd5c5"})]})})};function o(A){let{sidebarOpen:e,toggleSidebar:t}=A;return Object(g.jsxs)(x,{className:"animate darkBg",sidebarOpen:e,children:[Object(g.jsxs)(D,{className:"flexSpaceCenter",children:[Object(g.jsxs)("div",{className:"flexNullCenter",children:[Object(g.jsx)(d,{}),Object(g.jsx)("h1",{className:"whiteColor font20",style:{marginLeft:"15px"},children:"fanatic"})]}),Object(g.jsx)(j,{onClick:()=>t(!e),className:"animate pointer",children:Object(g.jsx)(l,{})})]}),Object(g.jsxs)(p,{className:"flexNullCenter flexColumn",children:[Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-60,children:"Home"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-60,children:"Services"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-60,children:"Projects"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"blog",spy:!0,smooth:!0,offset:-60,children:"Blog"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"pricing",spy:!0,smooth:!0,offset:-60,children:"Pricing"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-60,children:"Contact"})})]}),Object(g.jsxs)(p,{className:"flexSpaceCenter",children:[Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)("a",{href:"/",style:{padding:"10px 30px 10px 0"},className:"whiteColor",children:"Log in"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer flexCenter",children:Object(g.jsx)("a",{href:"/",className:"radius8 lightBg",style:{padding:"10px 15px"},children:"Get Started"})})]})]})}const x=s.a.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${A=>A.sidebarOpen?"0px":"-400px"};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`,D=s.a.div`
  padding: 20px 0;
`,j=s.a.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`,p=s.a.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;function m(A){let{toggleSidebar:e}=A;return Object(g.jsx)(N,{className:"darkBg",onClick:()=>e(!1)})}const N=s.a.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;var I=function(A){return Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:22,viewBox:"0 0 28 22",...A,children:[Object(g.jsx)("path",{"data-name":"Line 5",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 1h26"}),Object(g.jsx)("path",{"data-name":"Line 6",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 11h26"}),Object(g.jsx)("path",{"data-name":"Line 7",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 21h26"})]})};function h(){const[A,e]=Object(a.useState)(window.scrollY),[t,c]=Object(a.useState)(!1);return Object(a.useEffect)((()=>(window.addEventListener("scroll",(()=>e(window.scrollY))),()=>{window.removeEventListener("scroll",(()=>e(window.scrollY)))})),[A]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(o,{sidebarOpen:t,toggleSidebar:c}),t&&Object(g.jsx)(m,{toggleSidebar:c}),Object(g.jsx)(f,{className:"flexCenter animate whiteBg",style:A>100?{height:"60px"}:{height:"80px"},children:Object(g.jsxs)(b,{className:"container flexSpaceCenter",children:[Object(g.jsxs)(r.Link,{className:"pointer flexNullCenter",to:"home",smooth:!0,children:[Object(g.jsx)(d,{}),Object(g.jsx)("h1",{style:{marginLeft:"15px"},className:"font20 extraBold",children:"ERP TECH"})]}),Object(g.jsx)(w,{className:"pointer",onClick:()=>c(!t),children:Object(g.jsx)(I,{})}),Object(g.jsxs)(Q,{className:"flexNullCenter",children:[Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-80,children:"Home"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-80,children:"Services"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-80,children:"Courses"})}),Object(g.jsx)("li",{className:"semiBold font15 pointer",children:Object(g.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-80,children:"Contact"})})]})]})})]})}const f=s.a.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`,b=s.a.div`
  position: relative;
  height: 100%;
`,w=s.a.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`,Q=s.a.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;function B(A){let{title:e,action:t,border:a}=A;return Object(g.jsx)(P,{className:"animate pointer radius8",onClick:t?()=>t():null,border:a,children:e})}const P=s.a.button`
  border: 1px solid ${A=>A.border?"#707070":"#7620ff"};
  background-color: ${A=>A.border?"transparent":"#7620ff"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${A=>A.border?"#707070":"#fff"};
  :hover {
    background-color: ${A=>A.border?"transparent":"#580cd2"};
    border: 1px solid #7620ff;
    color: ${A=>A.border?"#7620ff":"#fff"};
  }
`;var u=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:42.282,height:34.626,viewBox:"0 0 42.282 34.626",...A,children:Object(g.jsx)("path",{"data-name":"Path 131",d:"M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z",fill:"#f2b300"})})};var v=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:186.223,height:249.21,viewBox:"0 0 186.223 249.21",...A,children:Object(g.jsxs)("g",{"data-name":"Group 102",fill:"#bebdce",children:[Object(g.jsxs)("g",{"data-name":"Group 59",transform:"translate(-.09 .208)",children:[Object(g.jsx)("ellipse",{"data-name":"Ellipse 1",cx:4,cy:5,rx:4,ry:5,transform:"translate(.228 -.08)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 2",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 39.806)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 3",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 79.819)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 4",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 119.833)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 5",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 159.846)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 6",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 199.859)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 7",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 239.873)"})]}),Object(g.jsxs)("g",{"data-name":"Group 60",transform:"translate(35.419)",children:[Object(g.jsx)("circle",{"data-name":"Ellipse 8",cx:4.565,cy:4.565,r:4.565}),Object(g.jsx)("circle",{"data-name":"Ellipse 9",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 10",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 11",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 12",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 13",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 14",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(g.jsxs)("g",{"data-name":"Group 61",transform:"translate(70.838)",children:[Object(g.jsx)("circle",{"data-name":"Ellipse 15",cx:4.565,cy:4.565,r:4.565}),Object(g.jsx)("circle",{"data-name":"Ellipse 16",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 17",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 18",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 19",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 20",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 21",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(g.jsxs)("g",{"data-name":"Group 62",transform:"translate(106.256)",children:[Object(g.jsx)("circle",{"data-name":"Ellipse 22",cx:4.565,cy:4.565,r:4.565}),Object(g.jsx)("circle",{"data-name":"Ellipse 23",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 24",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 25",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 26",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 27",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 28",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(g.jsxs)("g",{"data-name":"Group 63",transform:"translate(141.675)",children:[Object(g.jsx)("circle",{"data-name":"Ellipse 29",cx:4.565,cy:4.565,r:4.565}),Object(g.jsx)("circle",{"data-name":"Ellipse 30",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 31",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 32",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 33",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 34",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 35",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(g.jsxs)("g",{"data-name":"Group 64",transform:"translate(177.094)",children:[Object(g.jsx)("circle",{"data-name":"Ellipse 36",cx:4.565,cy:4.565,r:4.565}),Object(g.jsx)("circle",{"data-name":"Ellipse 37",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 38",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 39",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 40",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 41",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(g.jsx)("circle",{"data-name":"Ellipse 42",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]})]})})};function y(){return Object(g.jsxs)(O,{id:"home",className:"container flexSpaceCenter",children:[Object(g.jsx)(C,{className:"flexCenter",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"extraBold font60",children:"Welcome to ERP Tech!"}),Object(g.jsx)(T,{children:"Your Gateway to Learning!"}),Object(g.jsx)(H,{className:"font13 semiBold",children:"We\u2019re thrilled to have you here! Whether you're looking to enhance your career, learn a new skill, or pursue a passion, our platform offers a wide range of courses to help you achieve your goals."}),Object(g.jsx)(S,{children:Object(g.jsx)(B,{title:"Get Started"})})]})}),Object(g.jsxs)(k,{children:[Object(g.jsxs)(E,{children:[Object(g.jsx)(M,{className:"radius8",src:"data:image/png;base64,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",alt:"office",style:{zIndex:9}}),Object(g.jsxs)(z,{className:"flexCenter darkBg radius8",children:[Object(g.jsx)(Z,{children:Object(g.jsx)(u,{})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{className:"font15 whiteColor",children:Object(g.jsx)("em",{children:"Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."})}),Object(g.jsx)("p",{className:"font13 orangeColor textRight",style:{marginTop:"10px"},children:"Ralph Waldo Emerson"})]})]}),Object(g.jsx)(W,{children:Object(g.jsx)(v,{})})]}),Object(g.jsx)(X,{className:"lightBg"})]})]})}const O=s.a.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,C=s.a.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`,k=s.a.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,H=s.a.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`,S=s.a.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`,X=s.a.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`,E=s.a.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,M=s.a.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`,z=s.a.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`,Z=s.a.div`
  position: absolute;
  left: -20px;
  top: -10px;
`,W=s.a.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`,T=s.a.div`
  background: -webkit-linear-gradient(25deg, #eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: type 1.5s steps(90) 1.5s 1 normal both, cursor 1s step-end infinite;
  position: relative;

@keyframes type {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

`;var U=t(13),L=t.n(U),F=t.p+"static/media/logo01.f0f3765f.svg",V=t.p+"static/media/logo02.ef3dc476.svg",R=t.p+"static/media/logo03.ed39a486.svg",J=t.p+"static/media/logo04.d4601325.svg",K=t.p+"static/media/logo05.e583f97d.svg",Y=t.p+"static/media/logo06.7fcfefca.svg";function G(){return Object(g.jsx)("div",{children:Object(g.jsxs)(L.a,{infinite:!0,speed:500,slidesToShow:6,slidesToScroll:2,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}],children:[Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:F,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:V,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:R,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:J,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:K,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:Y,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:R,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:J,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:F,alt:"client logo"})}),Object(g.jsx)(q,{className:"flexCenter",children:Object(g.jsx)($,{src:V,alt:"client logo"})})]})})}const q=s.a.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`,$=s.a.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;var _=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:35.459,height:43.42,viewBox:"0 0 35.459 43.42",...A,children:Object(g.jsxs)("g",{"data-name":"Group 70",children:[Object(g.jsx)("path",{"data-name":"Path 121",d:"M24.571 12.115H4.778a3.425 3.425 0 01-3.412-3.411V4.78a3.425 3.425 0 013.411-3.415h19.792a3.427 3.427 0 013.413 3.412v3.924a3.424 3.424 0 01-3.408 3.414z",fill:"#f2b300"}),Object(g.jsx)("path",{"data-name":"Path 122",d:"M30.981 4.552h-1.647a4.782 4.782 0 00-4.765-4.55H4.779A4.787 4.787 0 00.001 4.781v3.922a4.787 4.787 0 004.778 4.778h19.79a4.785 4.785 0 004.776-4.778V7.282h1.636a1.836 1.836 0 011.748 1.876 4.152 4.152 0 01-2.31 3.309l-13.158 5.54a6.889 6.889 0 00-3.98 5.995v1.5a4.784 4.784 0 00-3.555 4.612v8.531a4.782 4.782 0 004.778 4.775h.339a4.784 4.784 0 004.776-4.776v-8.531a4.782 4.782 0 00-3.611-4.626V24a4.292 4.292 0 012.311-3.478l13.16-5.542a6.75 6.75 0 003.98-5.824 4.553 4.553 0 00-4.478-4.604zm-4.364 4.15a2.069 2.069 0 01-2.048 2.047H4.779a2.069 2.069 0 01-2.048-2.047V4.78a2.07 2.07 0 012.048-2.049h19.79a2.07 2.07 0 012.048 2.049v3.922zM16.89 30.114v8.531a2.067 2.067 0 01-2.047 2.046h-.339a2.07 2.07 0 01-2.05-2.046v-8.531a2.071 2.071 0 012.05-2.048h.339a2.066 2.066 0 012.047 2.047z",fill:"#0b093b"})]})})};var AA=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:43.336,height:32.531,viewBox:"0 0 43.336 32.531",...A,children:Object(g.jsxs)("g",{"data-name":"Group 71",children:[Object(g.jsx)("path",{"data-name":"Path 123",d:"M38.562 24.112H4.778a3.428 3.428 0 01-3.414-3.406V4.776a3.424 3.424 0 013.409-3.412h33.784a3.425 3.425 0 013.41 3.41V20.7a3.425 3.425 0 01-3.407 3.412z",fill:"#f40051"}),Object(g.jsx)("path",{"data-name":"Path 124",d:"M38.559 0H4.778A4.785 4.785 0 000 4.776v15.922a4.786 4.786 0 004.778 4.778h13.507v4.322h-3.926a.684.684 0 00-.681.683v1.366a.684.684 0 00.681.683h14.619a.685.685 0 00.682-.683v-1.366a.685.685 0 00-.682-.683h-3.926v-4.322H38.56a4.786 4.786 0 004.776-4.778V4.776A4.785 4.785 0 0038.559 0zM22.321 29.8h-1.308v-4.322h1.308zm18.283-9.1a2.068 2.068 0 01-2.045 2.048H4.778a2.07 2.07 0 01-2.05-2.048V4.778a2.069 2.069 0 012.048-2.047h33.782a2.069 2.069 0 012.045 2.047z",fill:"#0b093b"})]})})};var eA=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:39.581,height:39.58,viewBox:"0 0 39.581 39.58",...A,children:Object(g.jsxs)("g",{"data-name":"Group 72",children:[Object(g.jsx)("path",{"data-name":"Path 127",d:"M34.807 38.214H4.778a3.424 3.424 0 01-3.412-3.41V14.548a3.426 3.426 0 013.408-3.4h30.029a3.423 3.423 0 013.41 3.411v20.246a3.423 3.423 0 01-3.408 3.413z",fill:"#4cd5c5"}),Object(g.jsxs)("g",{"data-name":"Group 69",fill:"#0b093b",children:[Object(g.jsx)("path",{"data-name":"Path 128",d:"M34.803 0H4.777A4.785 4.785 0 000 4.777v30.025a4.787 4.787 0 004.777 4.778h30.026a4.785 4.785 0 004.776-4.778V4.777A4.785 4.785 0 0034.803 0zm2.046 34.8a2.068 2.068 0 01-2.046 2.048H4.777A2.07 2.07 0 012.729 34.8V14.547a2.07 2.07 0 012.048-2.04h30.026a2.069 2.069 0 012.046 2.05zm0-24.552a4.775 4.775 0 00-2.046-.47H4.777a4.783 4.783 0 00-2.048.47V4.774a2.069 2.069 0 012.047-2.047h30.026a2.068 2.068 0 012.046 2.047z"}),Object(g.jsx)("path",{"data-name":"Path 129",d:"M25.905 3.182a3.072 3.072 0 103.071 3.072 3.075 3.075 0 00-3.071-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.314 1.314 0 01-1.305 1.306z"}),Object(g.jsx)("path",{"data-name":"Path 130",d:"M32.673 3.182a3.072 3.072 0 103.07 3.072 3.073 3.073 0 00-3.07-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.315 1.315 0 01-1.305 1.306z"})]})]})})};var tA=function(A){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:39.581,height:39.58,viewBox:"0 0 39.581 39.58",...A,children:Object(g.jsxs)("g",{"data-name":"Group 73",children:[Object(g.jsx)("path",{"data-name":"Path 125",d:"M34.806 34.007h-2.5v-1.362a3.43 3.43 0 00-3.414-3.414H10.696a3.434 3.434 0 00-3.413 3.416v1.362h-2.5A3.429 3.429 0 011.369 30.6V20.417a3.428 3.428 0 013.411-3.412h30.028a3.428 3.428 0 013.414 3.409v10.181a3.429 3.429 0 01-3.411 3.414z",fill:"#7620ff"}),Object(g.jsx)("path",{"data-name":"Path 126",d:"M34.804 15.64h-3.525V4.777A4.784 4.784 0 0026.504 0H13.081a4.785 4.785 0 00-4.775 4.777v10.862H4.781a4.784 4.784 0 00-4.778 4.777v10.177a4.785 4.785 0 004.778 4.776h1.175a4.782 4.782 0 004.74 4.208h18.2a4.785 4.785 0 004.738-4.209h1.175a4.786 4.786 0 004.778-4.776V20.417a4.784 4.784 0 00-4.783-4.777zM11.034 4.778A2.069 2.069 0 0113.08 2.73h13.423a2.068 2.068 0 012.046 2.048V15.64H11.034zm17.857 32.073h-18.2a2.066 2.066 0 01-1.955-1.479 1.944 1.944 0 01-.094-.568v-2.159a2.07 2.07 0 012.049-2.046h18.2a2.068 2.068 0 012.047 2.046v2.159a1.943 1.943 0 01-.093.568 2.068 2.068 0 01-1.954 1.479zm7.962-6.256a2.072 2.072 0 01-2.049 2.048h-1.137a4.787 4.787 0 00-4.776-4.776h-18.2a4.788 4.788 0 00-4.778 4.778H4.776a2.073 2.073 0 01-2.049-2.048v-10.18a2.072 2.072 0 012.049-2.049h30.025a2.071 2.071 0 012.049 2.049z",fill:"#0b093b"})]})})};function aA(A){let e,{icon:t,title:a,subtitle:c}=A;switch(t){case"roller":e=Object(g.jsx)(_,{});break;case"monitor":e=Object(g.jsx)(AA,{});break;case"browser":e=Object(g.jsx)(eA,{});break;case"printer":e=Object(g.jsx)(tA,{});break;default:e=Object(g.jsx)(_,{})}return Object(g.jsxs)(cA,{className:"flex flexColumn",children:[Object(g.jsx)(iA,{children:e}),Object(g.jsx)(nA,{className:"font20 extraBold",children:a}),Object(g.jsx)(sA,{className:"font13",children:c})]})}const cA=s.a.div`
  width: 100%;
`,iA=s.a.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`,nA=s.a.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`,sA=s.a.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;function rA(){return Object(g.jsxs)(gA,{id:"services",children:[Object(g.jsx)("div",{className:"lightBg",style:{padding:"50px 0"},children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(G,{})})}),Object(g.jsxs)("div",{className:"whiteBg",style:{padding:"60px 0"},children:[Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)(oA,{children:[Object(g.jsx)("h1",{className:"font40 extraBold",children:"Our Awesome Services"}),Object(g.jsxs)("p",{className:"font13",children:["We are committed to delivering outstanding services tailored to meet your needs. With a focus on innovation, quality, and customer satisfaction, here\u2019s what sets us apart:              ",Object(g.jsx)("br",{})]})]}),Object(g.jsxs)(lA,{className:"flex",children:[Object(g.jsx)(dA,{children:Object(g.jsx)(aA,{icon:"monitor",title:"Web Development",subtitle:"Transform your ideas into a stunning, responsive website with our expert web development services. From design to deployment, we ensure your site is fast, secure, and optimized for a seamless user experience"})}),Object(g.jsx)(dA,{children:Object(g.jsx)(aA,{icon:"browser",title:"IT CONSULTING",subtitle:"Get expert advice to optimize your technology strategy. Our IT consulting services help you identify the best solutions for your business needs, improve operational efficiency, and reduce costs."})}),Object(g.jsx)(dA,{children:Object(g.jsx)(aA,{icon:"printer",title:"SAP",subtitle:"Unlock the full potential of your business with our comprehensive SAP services. We provide tailored solutions to help you integrate, automate, and optimize your processes using SAP's world-class ERP (Enterprise Resource Planning) software."})})]})]}),Object(g.jsx)("div",{className:"lightBg",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(xA,{className:"flexSpaceCenter",children:[Object(g.jsxs)(jA,{children:[Object(g.jsx)("h4",{className:"font15 semiBold",children:"A few words about company"}),Object(g.jsx)("h2",{className:"font40 extraBold",children:"A Study of Creativity"}),Object(g.jsx)("p",{className:"font12",children:"At ERP TECH, we are passionate about empowering businesses through innovative technology solutions. Founded in [Year], our mission is to help companies of all sizes unlock their full potential by providing customized, end-to-end services in web development, mobile app development, cloud solutions, SAP integration, and digital marketing.            "}),Object(g.jsxs)(DA,{className:"flexNullCenter",style:{margin:"30px 0"},children:[Object(g.jsx)("div",{style:{width:"190px"},children:Object(g.jsx)(B,{title:"Get Started",action:()=>alert("clicked")})}),Object(g.jsx)("div",{style:{width:"190px",marginLeft:"15px"},children:Object(g.jsx)(B,{title:"Contact Us",action:()=>alert("clicked"),border:!0})})]})]}),Object(g.jsx)(pA,{children:Object(g.jsxs)(mA,{children:[Object(g.jsxs)("div",{className:"flexNullCenter",children:[Object(g.jsx)(NA,{className:"flexCenter",children:Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})}),Object(g.jsx)(IA,{children:Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})})]}),Object(g.jsxs)("div",{className:"flexNullCenter",children:[Object(g.jsx)(hA,{children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAB9CAIAAAD1HHDCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABGNJREFUeNrsnE1IlFEUhivclO4Mc1ELKWoj5E6sViPUpiEwqFYVCEUGgglGIC1CioIMgoqEIF3EIBTBtEnQXUU7B2aTKC5sYZI7p7a9zaHDdeb7pvGbYfrheREZ7/997jnnnjsLt6dOXdqG6qcdIAAoQAGKAApQgCKAAhSgCKAABShAEUABClAEUIACFAEUoABFAAUoQAGKAApQgCKAAhSgCKAABSgCKEABClAEUIACFAEUoABFAAUoQBFAAQpQgKLkaqql85621qPdh1uad+nz27kPX9bWrby5eefR7q72tlZ9zuUX9OPtT6R6Dnce3Ch8z+U/qUuh8L2Om4lbj2bUevZ37FXJfH5hZu5D2EVLihxtKvOmQUCNl36OdXd5oahpudqPVdmupMlM1oAO9J85ne719up74Vz62uj9peXPNXKssB5V3bpxpavzkJefSB3RMjSvnaVOXcuoI9AkLi9Y1wcvhqt3iZpW7DRdfelUSNPHGR8b1p5rBFphPSODF0OapgMd+0TZjffPu7xOfnXta3vb7vIq2UV7KqJce7APG4VvL7Oz7T8d7YixkMe9ys7Vsoe49eioLOxIi8sr7z7OC5/x1W9FgNA5NMLbIBQ0OoZOZt60NO989zH3YuJ2WK41ra6ta+ky1dA07j2cVNX5cycfP5u2bSh4WYNIEH4AGs1CYVgoOiXBN3I9anN5aOx4qkdndvPOE+sy+/qp1Yr1ZqDryXy8PkBnYg4zvILKq4ZHx8vLZbMlJdq5TMlCmwzn0tCYSjwUzuc/lY8zE29cqoqs3Sjy3f/rkMRX5y2sS8srtYT1pm1/Qu56kjYQeSHokpFJyn4VB5USWHvRl7EnnlfI/PNicd6WXxFcE/ntpDNzi/4H8lAFL78TiqEtF9ns3sPnZry6ba72n/VCT4a2Kvm+I1Mcr8BLh6fb8t+wUNHUWi0NKJrb87iW8julXI6yGKDfx9GvhqYyAT9FjeyzhM3k+BbT5RxKARNM11CguohCmr9NQnX7Kxmwu0jtHz2bTjav0IQ0PQmVHm8eU1ffxINRY6rwmgBo41zecuzqaVqo9ZtdHcsz2Sp9YiSGps+iNn4friYNKQ21UNGUbTodeZwAWVItuJFk1WVk8EJYogiohGxLV3BJhJnKZMOErDjmSTmBQKtK9758KEyZ/16gshFfqBRGxsg0yLqY62m3SrnMPGXjlkVVOa/TNBu/dWMgSF2zSjDsfVF8Ow2U9E0Wrxvk8i1bfF/qDrGnpF1c2rxlOWFyU+WrtEKtkOmii6y6mzSdqNVCZV+RDuKOaZ5VwU/Lq+zLDhtZ7ytrIKx6fZkXl7waK6zH/yyXLUxZrcJIX7rX89z5/MKr7Gzc8+S32s4/ta6v+IIZoAAFKAIoQAGKAApQgCKAAhSgAEUABShAEUABClAEUIACFAEUoAAFKAIoQAGKAApQgCKAAhSgCKAABShAEUABClAEUIACFAEUoABFAAUoQAGKAArQ/1Y/BBgAfNsg+EFcj+gAAAAASUVORK5CYII=",alt:"office"})}),Object(g.jsx)(fA,{children:Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})})]})]})})]})})})]})]})}const gA=s.a.section`
  width: 100%;
`,lA=s.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,dA=s.a.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`,oA=s.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,xA=s.a.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`,DA=s.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,jA=s.a.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`,pA=s.a.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`,mA=s.a.div`
  width: 100%;
`,NA=s.a.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,IA=s.a.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,hA=s.a.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,fA=s.a.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;function bA(A){let{img:e,title:t,text:a,action:c}=A;return Object(g.jsxs)(wA,{children:[Object(g.jsx)(QA,{className:"aniamte pointer",onClick:c?()=>c():null,children:Object(g.jsx)("img",{className:"radius8",src:e,alt:"project"})}),Object(g.jsx)("h3",{className:"font20 extraBold",children:t}),Object(g.jsx)("p",{className:"font13",children:a})]})}const wA=s.a.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`,QA=s.a.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;function BA(){return Object(g.jsxs)(PA,{id:"projects",children:[Object(g.jsx)("div",{className:"whiteBg",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)(uA,{children:[Object(g.jsx)("h1",{className:"font40 extraBold",children:"Our Awesome Courses for you!"}),Object(g.jsx)("p",{className:"font13",children:Object(g.jsx)("br",{})})]}),Object(g.jsxs)("div",{className:"row textCenter",children:[Object(g.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(g.jsx)(bA,{img:"data:image/png;base64,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",title:"MEAN STACK",text:"The MEAN stack is a popular web development framework that uses JavaScript for both front-end and back-end development."})}),Object(g.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(g.jsx)(bA,{img:"data:image/png;base64,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",title:"MERN STACK",text:"The MERN stack is similar to MEAN, but it uses React instead of Angular for the front-end, which is popular for building interactive user interfaces.",action:()=>alert("clicked")})}),Object(g.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(g.jsx)(bA,{img:"data:image/png;base64,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",title:"Software Testing",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",action:()=>alert("clicked")})})]}),Object(g.jsxs)("div",{className:"row textCenter",children:[Object(g.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(g.jsx)(bA,{img:"data:image/png;base64,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",title:"AI",text:"AI involves creating machines that can learn, reason, and solve problems, simulating human intelligence.",action:()=>alert("clicked")})}),Object(g.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(g.jsx)(bA,{img:"data:image/png;base64,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",title:"SAP",text:"SAP is a global leader in enterprise resource planning (ERP) software, used by businesses to manage their operations.",action:()=>alert("clicked")})}),Object(g.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(g.jsx)(bA,{img:"data:image/png;base64,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",title:"Java Full Stack",text:"Java is a versatile programming language widely used in enterprise applications, Android development, and web applications.",action:()=>alert("clicked")})})]})]})}),Object(g.jsx)("div",{className:"lightBg",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(vA,{className:"flexSpaceCenter",children:[Object(g.jsx)(OA,{children:Object(g.jsx)(kA,{children:Object(g.jsx)(HA,{className:"flexCenter",children:Object(g.jsx)("img",{className:"radius8",src:"data:image/png;base64,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",alt:"add"})})})}),Object(g.jsxs)(CA,{children:[Object(g.jsx)("h4",{className:"font15 semiBold",children:"Our Mission"}),Object(g.jsx)("h2",{className:"font40 extraBold",children:"Software As Product"}),Object(g.jsx)("p",{className:"font12",children:"To be a leading technology partner, driving digital transformation for businesses worldwide and delivering solutions that make a real difference.              "}),Object(g.jsxs)(yA,{className:"flexNullCenter",style:{margin:"30px 0"},children:[Object(g.jsx)("div",{style:{width:"190px"},children:Object(g.jsx)(B,{title:"Get Started",action:()=>alert("clicked")})}),Object(g.jsx)("div",{style:{width:"190px",marginLeft:"15px"},children:Object(g.jsx)(B,{title:"Contact Us",action:()=>alert("clicked"),border:!0})})]})]})]})})})]})}const PA=s.a.section`
  width: 100%;
`,uA=s.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,vA=s.a.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`,yA=s.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,OA=s.a.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`,CA=s.a.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`,kA=s.a.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`,HA=s.a.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;s.a.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`,s.a.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;function SA(A){let{text:e,author:t}=A;return Object(g.jsxs)(XA,{className:"darkBg radius8 flexNullCenter flexColumn",children:[Object(g.jsx)(EA,{children:Object(g.jsx)(u,{})}),Object(g.jsx)("p",{className:"whiteColor font13",style:{paddingBottom:"30px"},children:e}),Object(g.jsx)("p",{className:"orangeColor font13",style:{alignSelf:"flex-end"},children:Object(g.jsx)("em",{children:t})})]})}const XA=s.a.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`,EA=s.a.div`
  position: relative;
  top: -40px;
`;function MA(){return Object(g.jsx)("div",{children:Object(g.jsxs)(L.a,{infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],children:[Object(g.jsx)(zA,{className:"flexCenter",children:Object(g.jsx)(SA,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(g.jsx)(zA,{className:"flexCenter",children:Object(g.jsx)(SA,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(g.jsx)(zA,{className:"flexCenter",children:Object(g.jsx)(SA,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(g.jsx)(zA,{className:"flexCenter",children:Object(g.jsx)(SA,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(g.jsx)(zA,{className:"flexCenter",children:Object(g.jsx)(SA,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})})]})})}const zA=s.a.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;function ZA(){return Object(g.jsx)(WA,{id:"blog",children:Object(g.jsx)("div",{className:"lightBg",style:{padding:"50px 0"},children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(TA,{children:Object(g.jsx)("h1",{className:"font40 extraBold",children:"What our client Say?"})}),Object(g.jsx)(MA,{})]})})})}const WA=s.a.section`
  width: 100%;
  padding-top: 20px;
`,TA=s.a.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;s.a.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;function UA(){return Object(g.jsx)(LA,{id:"pricing"})}const LA=s.a.section`
  width: 100%;
  padding: 50px 0;
`;s.a.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`,s.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,s.a.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;t.p,t.p,t.p;function FA(){return Object(g.jsx)(VA,{id:"contact",children:Object(g.jsx)("div",{className:"lightBg",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)(RA,{children:[Object(g.jsx)("h1",{className:"font40 extraBold",children:"Let's get in touch"}),Object(g.jsxs)("p",{className:"font13",children:["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",Object(g.jsx)("br",{}),"labore et dolore magna aliquyam erat, sed diam voluptua."]})]}),Object(g.jsxs)("div",{className:"row",style:{paddingBottom:"30px"},children:[Object(g.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:[Object(g.jsxs)(JA,{children:[Object(g.jsx)("label",{className:"font13",children:"First name:"}),Object(g.jsx)("input",{type:"text",id:"fname",name:"fname",className:"font20 extraBold"}),Object(g.jsx)("label",{className:"font13",children:"Email:"}),Object(g.jsx)("input",{type:"text",id:"email",name:"email",className:"font20 extraBold"}),Object(g.jsx)("label",{className:"font13",children:"Subject:"}),Object(g.jsx)("input",{type:"text",id:"subject",name:"subject",className:"font20 extraBold"}),Object(g.jsx)("textarea",{rows:"4",cols:"50",type:"text",id:"message",name:"message",className:"font20 extraBold"})]}),Object(g.jsx)(YA,{className:"flex",children:Object(g.jsx)(KA,{type:"submit",value:"Send Message",className:"pointer animate radius8",style:{maxWidth:"220px"}})})]}),Object(g.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:Object(g.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin",width:"600",height:"450",frameborder:"0",style:{border:0},allowfullscreen:"","aria-hidden":"false",tabindex:"0"})})]})]})})})}const VA=s.a.section`
  width: 100%;
`,RA=s.a.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`,JA=s.a.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`,KA=s.a.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`,YA=(s.a.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`,s.a.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`);function GA(){return Object(g.jsx)(qA,{children:Object(g.jsx)("div",{className:"darkBg",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)($A,{className:"flexSpaceCenter",style:{padding:"30px 0"},children:[Object(g.jsxs)(r.Link,{className:"flexCenter animate pointer",to:"home",smooth:!0,offset:-80,children:[Object(g.jsx)(d,{}),Object(g.jsx)("h1",{className:"font15 extraBold whiteColor",style:{marginLeft:"15px"},children:"ERP TECH"})]}),Object(g.jsxs)(_A,{className:"whiteColor font13",children:["\xa9 ",(new Date).getFullYear()," - ",Object(g.jsx)("span",{className:"purpleColor font13",children:"ERP TECH"})," All Right Reserved"]}),Object(g.jsx)(r.Link,{className:"whiteColor animate pointer font13",to:"home",smooth:!0,offset:-80,children:"Back to top"})]})})})})}const qA=s.a.div`
  width: 100%;
`,$A=s.a.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`,_A=s.a.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;function Ae(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h,{}),Object(g.jsx)(y,{}),Object(g.jsx)(rA,{}),Object(g.jsx)(BA,{}),Object(g.jsx)(ZA,{}),Object(g.jsx)(UA,{}),Object(g.jsx)(FA,{}),Object(g.jsx)(GA,{})]})}function ee(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(n.a,{children:[Object(g.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(g.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(g.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap",rel:"stylesheet"})]}),Object(g.jsx)(Ae,{})]})}var te=A=>{A&&A instanceof Function&&t.e(3).then(t.bind(null,66)).then((e=>{let{getCLS:t,getFID:a,getFCP:c,getLCP:i,getTTFB:n}=e;t(A),a(A),c(A),i(A),n(A)}))};i.a.render(Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ee,{})}),document.getElementById("root")),te()}},[[65,1,2]]]);
//# sourceMappingURL=main.d09f0ebf.chunk.js.map