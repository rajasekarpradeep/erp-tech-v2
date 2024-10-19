(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,A,t){},37:function(e,A,t){},65:function(e,A,t){"use strict";t.r(A);var a=t(2),s=t(11),i=t.n(s),c=(t(34),t(35),t(36),t(37),t(23)),n=t(1),r=t(4),l=t(0);var d=function(e){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:23.335,height:23.335,...e,children:Object(l.jsxs)("g",{"data-name":"Group 99",fill:"#fff",children:[Object(l.jsx)("path",{"data-name":"Rectangle 58",d:"M21.213 0l2.121 2.121L2.121 23.335 0 21.213z"}),Object(l.jsx)("path",{"data-name":"Rectangle 59",d:"M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z"})]})})};var o=function(e){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:27,height:40,viewBox:"0 0 27 40",...e,children:Object(l.jsxs)("g",{"data-name":"Group 101",transform:"translate(-375 -21)",children:[Object(l.jsx)("rect",{"data-name":"Rectangle 16",width:13,height:8,rx:4,transform:"translate(375 53)",fill:"#f40051"}),Object(l.jsx)("rect",{"data-name":"Rectangle 11",width:20,height:8,rx:4,transform:"translate(382 21)",fill:"#f2b300"}),Object(l.jsx)("rect",{"data-name":"Rectangle 15",width:20,height:8,rx:4,transform:"translate(382 37)",fill:"#7620ff"}),Object(l.jsx)("rect",{"data-name":"Rectangle 12",width:8,height:8,rx:4,transform:"translate(375 29)",fill:"#4cd5c5"})]})})};function g(e){let{sidebarOpen:A,toggleSidebar:t}=e;return Object(l.jsxs)(x,{className:"animate darkBg",sidebarOpen:A,children:[Object(l.jsxs)(D,{className:"flexSpaceCenter",children:[Object(l.jsxs)("div",{className:"flexNullCenter",children:[Object(l.jsx)(o,{}),Object(l.jsx)("h1",{className:"whiteColor font20",style:{marginLeft:"15px"},children:"fanatic"})]}),Object(l.jsx)(j,{onClick:()=>t(!A),className:"animate pointer",children:Object(l.jsx)(d,{})})]}),Object(l.jsxs)(p,{className:"flexNullCenter flexColumn",children:[Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!A),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-60,children:"Home"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!A),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-60,children:"Services"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!A),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-60,children:"Projects"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!A),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"blog",spy:!0,smooth:!0,offset:-60,children:"Blog"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!A),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"pricing",spy:!0,smooth:!0,offset:-60,children:"Pricing"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!A),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-60,children:"Contact"})})]}),Object(l.jsxs)(p,{className:"flexSpaceCenter",children:[Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)("a",{href:"/",style:{padding:"10px 30px 10px 0"},className:"whiteColor",children:"Log in"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer flexCenter",children:Object(l.jsx)("a",{href:"/",className:"radius8 lightBg",style:{padding:"10px 15px"},children:"Get Started"})})]})]})}const x=n.a.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${e=>e.sidebarOpen?"0px":"-400px"};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`,D=n.a.div`
  padding: 20px 0;
`,j=n.a.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`,p=n.a.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;function m(e){let{toggleSidebar:A}=e;return Object(l.jsx)(b,{className:"darkBg",onClick:()=>A(!1)})}const b=n.a.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;var h=function(e){return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:22,viewBox:"0 0 28 22",...e,children:[Object(l.jsx)("path",{"data-name":"Line 5",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 1h26"}),Object(l.jsx)("path",{"data-name":"Line 6",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 11h26"}),Object(l.jsx)("path",{"data-name":"Line 7",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 21h26"})]})};function N(){const[e,A]=Object(a.useState)(window.scrollY),[t,s]=Object(a.useState)(!1);return Object(a.useEffect)((()=>(window.addEventListener("scroll",(()=>A(window.scrollY))),()=>{window.removeEventListener("scroll",(()=>A(window.scrollY)))})),[e]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{sidebarOpen:t,toggleSidebar:s}),t&&Object(l.jsx)(m,{toggleSidebar:s}),Object(l.jsx)(I,{className:"flexCenter animate whiteBg",style:e>100?{height:"60px"}:{height:"100px"},children:Object(l.jsxs)(f,{className:"container flexSpaceCenter",children:[Object(l.jsxs)(r.Link,{className:"pointer flexNullCenter",to:"home",smooth:!0,children:[Object(l.jsx)(o,{}),Object(l.jsx)("h1",{style:{marginLeft:"15px"},className:"font20 extraBold",children:"ERP TECH"})]}),Object(l.jsx)(u,{className:"pointer",onClick:()=>s(!t),children:Object(l.jsx)(h,{})}),Object(l.jsxs)(w,{className:"flexNullCenter",children:[Object(l.jsx)("li",{className:"semiBold font18 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-80,children:"Home"})}),Object(l.jsx)("li",{className:"semiBold font18 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"about",spy:!0,smooth:!0,offset:-80,children:"About Us"})}),Object(l.jsx)("li",{className:"semiBold font18 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-80,children:"Services"})}),Object(l.jsx)("li",{className:"semiBold font18 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-80,children:"Courses"})}),Object(l.jsx)("li",{className:"semiBold font18 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"industries",spy:!0,smooth:!0,offset:-80,children:"Industries"})}),Object(l.jsx)("li",{className:"semiBold font18 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-80,children:"Contact Us"})})]})]})})]})}const I=n.a.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`,f=n.a.div`
  position: relative;
  height: 100%;
`,u=n.a.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`,w=n.a.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;function B(e){let{title:A,action:t,border:a}=e;return Object(l.jsx)(P,{className:"animate pointer radius8",onClick:t?()=>t():null,border:a,children:A})}const P=n.a.button`
  border: 1px solid ${e=>e.border?"#707070":"#7620ff"};
  background-color: ${e=>e.border?"transparent":"#7620ff"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${e=>e.border?"#707070":"#fff"};
  :hover {
    background-color: ${e=>e.border?"transparent":"#580cd2"};
    border: 1px solid #7620ff;
    color: ${e=>e.border?"#7620ff":"#fff"};
  }
`;var Q=function(e){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:42.282,height:34.626,viewBox:"0 0 42.282 34.626",...e,children:Object(l.jsx)("path",{"data-name":"Path 131",d:"M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z",fill:"#f2b300"})})};var O=function(e){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:186.223,height:249.21,viewBox:"0 0 186.223 249.21",...e,children:Object(l.jsxs)("g",{"data-name":"Group 102",fill:"#bebdce",children:[Object(l.jsxs)("g",{"data-name":"Group 59",transform:"translate(-.09 .208)",children:[Object(l.jsx)("ellipse",{"data-name":"Ellipse 1",cx:4,cy:5,rx:4,ry:5,transform:"translate(.228 -.08)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 2",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 39.806)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 3",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 79.819)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 4",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 119.833)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 5",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 159.846)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 6",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 199.859)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 7",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 239.873)"})]}),Object(l.jsxs)("g",{"data-name":"Group 60",transform:"translate(35.419)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 8",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 9",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 10",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 11",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 12",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 13",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 14",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 61",transform:"translate(70.838)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 15",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 16",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 17",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 18",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 19",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 20",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 21",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 62",transform:"translate(106.256)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 22",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 23",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 24",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 25",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 26",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 27",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 28",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 63",transform:"translate(141.675)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 29",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 30",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 31",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 32",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 33",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 34",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 35",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 64",transform:"translate(177.094)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 36",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 37",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 38",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 39",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 40",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 41",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 42",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]})]})})};function y(){return Object(l.jsxs)(v,{id:"home",className:"container flexSpaceCenter",children:[Object(l.jsx)(C,{className:"flexCenter",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"extraBold font60",children:"Welcome to ERP Tech!"}),Object(l.jsx)(T,{children:"Your Gateway to Learning!"}),Object(l.jsx)(k,{className:"font15 semiBold",children:"We\u2019re thrilled to have you here! Whether you're looking to enhance your career, learn a new skill, or pursue a passion, our platform offers a wide range of courses to help you achieve your goals."}),Object(l.jsx)(H,{children:Object(l.jsx)(B,{title:"Get Started"})})]})}),Object(l.jsxs)(S,{children:[Object(l.jsxs)(E,{children:[Object(l.jsx)(M,{className:"radius8",src:"data:image/png;base64,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",alt:"office",style:{zIndex:9}}),Object(l.jsxs)(Z,{className:"flexCenter darkBg radius8",children:[Object(l.jsx)(z,{children:Object(l.jsx)(Q,{})}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"font25 whiteColor",children:Object(l.jsx)("em",{children:"Learning Tech, Shaping the Future"})})})]}),Object(l.jsx)(W,{children:Object(l.jsx)(O,{})})]}),Object(l.jsx)(X,{className:"lightBg"})]})]})}const v=n.a.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,C=n.a.div`
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
`,S=n.a.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,k=n.a.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`,H=n.a.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`,X=n.a.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`,E=n.a.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,M=n.a.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`,Z=n.a.div`
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
`,z=n.a.div`
  position: absolute;
  left: -20px;
  top: -10px;
`,W=n.a.div`
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
`,T=n.a.div`
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

`;var U=t.p+"static/media/service1.c44be215.jpg",F=t.p+"static/media/service2.a8eda4bc.jpg",L=t.p+"static/media/service3.440fb73b.jpg",R=t.p+"static/media/service4.78d6305e.jpg",V=t.p+"static/media/service5.53f2f776.jpg",J=t.p+"static/media/service6.27e05946.jpg",K=t.p+"static/media/service7.50ca2fc0.jpg",Y=t.p+"static/media/service8.691bd7bc.jpg";function G(){return Object(l.jsx)(q,{id:"services",children:Object(l.jsxs)("div",{className:"lightBg",style:{padding:"60px 0"},children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(te,{style:{textAlign:"center"},children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Our Awesome Services"}),Object(l.jsxs)("p",{className:"font13",children:["We are committed to delivering outstanding services tailored to meet your needs. With a focus on innovation, quality, and customer satisfaction, here\u2019s what sets us apart:              ",Object(l.jsx)("br",{})]})]}),Object(l.jsxs)(Ae,{children:[Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:U,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"S/4 HANA Implementation Project"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"SAP allows easy and global integration of business processes by creating an efficient work environment for the users thereby reducing the possibility of errors and redundant information. SAP has immense capabilities to deliver data-driven solutions for various operations, but SAP implementation demands a high-end accuracy and acuteness to yield maximum benefits."}),Object(l.jsx)($,{style:{padding:"0px 10px 0px 10px"},children:Object(l.jsx)(B,{title:"Read more"})})]})]}),Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:F,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"S/4 HANA Support Project"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"All Functional support activities (except new requirements) shall be carried out, Our SAP Application Functional Support Services Accountability finding in transaction."}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{style:{justifyContent:"center"},children:[Object(l.jsxs)("ul",{style:{listStyle:"disc"},children:[Object(l.jsx)("li",{children:"Finance & Controlling (FICO)"}),Object(l.jsx)("li",{children:"Sales and Distribution (SD)"}),Object(l.jsx)("li",{children:"Sales and Distribution (SD)"}),Object(l.jsx)("li",{children:"Production Planning (PP)"}),Object(l.jsx)("li",{children:"Quality Management (QM)"}),Object(l.jsx)("li",{children:"Project Systems (PS)"})]}),Object(l.jsx)("br",{}),Object(l.jsx)($,{style:{padding:"0px 10px 0px 10px"},children:Object(l.jsx)(B,{title:"Read more"})})]})]})]}),Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:L,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"S/4 HANA Rollout Project"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"First, identify your requirements, such as business process, integration flow, and testing scenarios, and then analyze the impact those requirements will have on your organization. For example, when you plan to release a certain global standard in your organization\u2019s financial reporting, each unit may have to create a specific financial transaction/process in SAP to meet that standard requirement. In this case, you\u2019ll need to be aware that there are regions"}),Object(l.jsx)("br",{}),Object(l.jsx)($,{style:{padding:"0px 10px 0px 10px"},children:Object(l.jsx)(B,{title:"Read more"})})]})]})]})]}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:U,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"The Intelligent Enterprise"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable."}),Object(l.jsx)("br",{})]})]})})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:F,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"Cloud ERP"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance."}),Object(l.jsx)("br",{})]})]})})})]})})}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:R,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"The Intelligent Enterprise"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable."}),Object(l.jsx)("br",{})]})]})})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:V,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"Cloud ERP"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance."}),Object(l.jsx)("br",{})]})]})})})]})})}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:J,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"The Intelligent Enterprise"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable."}),Object(l.jsx)("br",{})]})]})})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:L,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"Cloud ERP"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance."}),Object(l.jsx)("br",{})]})]})})})]})})}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:K,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"The Intelligent Enterprise"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable."}),Object(l.jsx)("br",{})]})]})})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:Object(l.jsx)(Ae,{children:Object(l.jsxs)(ee,{children:[Object(l.jsx)(_,{children:Object(l.jsx)("img",{src:Y,alt:"#"})}),Object(l.jsxs)("div",{style:{padding:"0px 10px 0px 10px"},children:[Object(l.jsx)("h2",{className:"font20 extraBold",style:{color:"#132D7B"},children:"Cloud ERP"}),Object(l.jsx)("p",{className:"font10 semiBold",children:"Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance."}),Object(l.jsx)("br",{})]})]})})})]})})}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(ae,{className:"flexSpaceCenter",children:[Object(l.jsxs)(ie,{children:[Object(l.jsx)("h4",{className:"font15 semiBold",children:"A few words about company"}),Object(l.jsx)("h2",{className:"font40 extraBold",children:"A Study of Creativity"}),Object(l.jsx)("p",{className:"font12",children:"At ERP TECH, we are passionate about empowering businesses through innovative technology solutions. Founded in [Year], our mission is to help companies of all sizes unlock their full potential by providing customized, end-to-end services in web development, mobile app development, cloud solutions, SAP integration, and digital marketing.            "}),Object(l.jsxs)(se,{className:"flexNullCenter",style:{margin:"30px 0"},children:[Object(l.jsx)("div",{style:{width:"190px"},children:Object(l.jsx)(B,{title:"Get Started",action:()=>alert("clicked")})}),Object(l.jsx)("div",{style:{width:"190px",marginLeft:"15px"},children:Object(l.jsx)(B,{title:"Contact Us",action:()=>alert("clicked"),border:!0})})]})]}),Object(l.jsx)(ce,{children:Object(l.jsxs)(ne,{children:[Object(l.jsxs)("div",{className:"flexNullCenter",children:[Object(l.jsx)(re,{className:"flexCenter",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})}),Object(l.jsx)(le,{children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})})]}),Object(l.jsxs)("div",{className:"flexNullCenter",children:[Object(l.jsx)(de,{children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAB9CAIAAAD1HHDCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABGNJREFUeNrsnE1IlFEUhivclO4Mc1ELKWoj5E6sViPUpiEwqFYVCEUGgglGIC1CioIMgoqEIF3EIBTBtEnQXUU7B2aTKC5sYZI7p7a9zaHDdeb7pvGbYfrheREZ7/997jnnnjsLt6dOXdqG6qcdIAAoQAGKAApQgCKAAhSgCKAABShAEUABClAEUIACFAEUoABFAAUoQAGKAApQgCKAAhSgCKAABSgCKEABClAEUIACFAEUoABFAAUoQBFAAQpQgKLkaqql85621qPdh1uad+nz27kPX9bWrby5eefR7q72tlZ9zuUX9OPtT6R6Dnce3Ch8z+U/qUuh8L2Om4lbj2bUevZ37FXJfH5hZu5D2EVLihxtKvOmQUCNl36OdXd5oahpudqPVdmupMlM1oAO9J85ne719up74Vz62uj9peXPNXKssB5V3bpxpavzkJefSB3RMjSvnaVOXcuoI9AkLi9Y1wcvhqt3iZpW7DRdfelUSNPHGR8b1p5rBFphPSODF0OapgMd+0TZjffPu7xOfnXta3vb7vIq2UV7KqJce7APG4VvL7Oz7T8d7YixkMe9ys7Vsoe49eioLOxIi8sr7z7OC5/x1W9FgNA5NMLbIBQ0OoZOZt60NO989zH3YuJ2WK41ra6ta+ky1dA07j2cVNX5cycfP5u2bSh4WYNIEH4AGs1CYVgoOiXBN3I9anN5aOx4qkdndvPOE+sy+/qp1Yr1ZqDryXy8PkBnYg4zvILKq4ZHx8vLZbMlJdq5TMlCmwzn0tCYSjwUzuc/lY8zE29cqoqs3Sjy3f/rkMRX5y2sS8srtYT1pm1/Qu56kjYQeSHokpFJyn4VB5USWHvRl7EnnlfI/PNicd6WXxFcE/ntpDNzi/4H8lAFL78TiqEtF9ns3sPnZry6ba72n/VCT4a2Kvm+I1Mcr8BLh6fb8t+wUNHUWi0NKJrb87iW8julXI6yGKDfx9GvhqYyAT9FjeyzhM3k+BbT5RxKARNM11CguohCmr9NQnX7Kxmwu0jtHz2bTjav0IQ0PQmVHm8eU1ffxINRY6rwmgBo41zecuzqaVqo9ZtdHcsz2Sp9YiSGps+iNn4friYNKQ21UNGUbTodeZwAWVItuJFk1WVk8EJYogiohGxLV3BJhJnKZMOErDjmSTmBQKtK9758KEyZ/16gshFfqBRGxsg0yLqY62m3SrnMPGXjlkVVOa/TNBu/dWMgSF2zSjDsfVF8Ow2U9E0Wrxvk8i1bfF/qDrGnpF1c2rxlOWFyU+WrtEKtkOmii6y6mzSdqNVCZV+RDuKOaZ5VwU/Lq+zLDhtZ7ytrIKx6fZkXl7waK6zH/yyXLUxZrcJIX7rX89z5/MKr7Gzc8+S32s4/ta6v+IIZoAAFKAIoQAGKAApQgCKAAhSgAEUABShAEUABClAEUIACFAEUoAAFKAIoQAGKAApQgCKAAhSgCKAABShAEUABClAEUIACFAEUoABFAAUoQAGKAArQ/1Y/BBgAfNsg+EFcj+gAAAAASUVORK5CYII=",alt:"office"})}),Object(l.jsx)(oe,{children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})})]})]})})]})})})]})})}const q=n.a.section`
  width: 100%;
`,$=n.a.div`
  max-width: 190px;
  padding:0px 10px 0px 10px;
  align-items:center;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`,_=n.a.div`
 width: 100%;
  height: 15rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.25rem;
  img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}
`,ee=n.a.div`
  width: 100%;
  cursor: default;
  padding: 1.25rem;
  border-radius: 0.25rem;
  background-color:#fefefe ;
  transition: transform 0.3s ease-in-out;
  &:hover{
     transform: translateY(-0.5rem);
}


`,Ae=n.a.div`
  --space: 1.25rem;
  width: 90%;
  margin: 2rem auto;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`,te=(n.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,n.a.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`,n.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`),ae=n.a.div`
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
`,se=n.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,ie=n.a.div`
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
`,ce=n.a.div`
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
`,ne=n.a.div`
  width: 100%;
`,re=n.a.div`
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
`,le=n.a.div`
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
`,de=n.a.div`
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
`,oe=n.a.div`
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
`;function ge(e){let{img:A,title:t,text:a,action:s}=e;return Object(l.jsxs)(xe,{children:[Object(l.jsx)(De,{className:"aniamte pointer",onClick:s?()=>s():null,children:Object(l.jsx)("img",{className:"radius8",src:A,alt:"project"})}),Object(l.jsx)("h3",{className:"font20 extraBold",children:t}),Object(l.jsx)("p",{className:"font13",children:a})]})}const xe=n.a.div`
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
`,De=n.a.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;function je(){return Object(l.jsxs)(pe,{id:"projects",children:[Object(l.jsx)("div",{className:"whiteBg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(me,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Our Awesome Courses for you!"}),Object(l.jsx)("p",{className:"font13",children:Object(l.jsx)("br",{})})]}),Object(l.jsxs)("div",{className:"row textCenter",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(ge,{img:"data:image/png;base64,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",title:"MEAN STACK",text:"The MEAN stack is a popular web development framework that uses JavaScript for both front-end and back-end development."})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(ge,{img:"data:image/png;base64,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",title:"MERN STACK",text:"The MERN stack is similar to MEAN, but it uses React instead of Angular for the front-end, which is popular for building interactive user interfaces.",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(ge,{img:"data:image/png;base64,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",title:"Software Testing",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",action:()=>alert("clicked")})})]}),Object(l.jsxs)("div",{className:"row textCenter",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(ge,{img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAE1CAIAAABiOWxDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACKdJREFUeNrs219olecdwHG7P4VNaUlXrAW9CIZ1MMHQsUmqvegZmBtdQWENFIwgBIoQVgVLaWqhtQ0VtENQh0ywHR2usNzojcIyGP5BNpiF9mLD4kV7EUNtS5nbRXuxX8/D+fHkPSdutCYY+HwIcpK855zX6Pv19zzneE/rybFlAAvpW34EgNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgPcDb7jR7DkrF/3w/jo+a2Z2Zvnpy9vbg2tWvmDnge8+94/4yM/3bhh/dr+NeX2H8/86dat/3zz09sxsmW+b52bvnxj9mbj2eP38sH1j65d//DilavdJxDHrF/3yNr+1XHHOCYe4Y6cJELD/w7N6MjWnt+6+t4/IjTDraHBdY/0PODN02cyNMuXf2/f+M4Vy78fty/0usi/nvnOrWSuhCae+uXnn8mTLDdmZj/eP3k8opOnd/jA3oFOB8Nw+8H3TBzKY7B04m6XlfnXrX8fPHJqMZ+6rkxatfLBKEv0JY+pK1PECccxD80zr2Gi4Y6JuSAGk/w0Vh+bNgzmt+LXxj/4cXHmFRtNySVJ3ivmiDu4HqnPLWzf+vPMWax9ykSWlYkRLM45FnrDrcfKqcbxb50+G6dXHxMrpvgtxLfKMaMjWw4eedPfBKFhYUNTL3/iX/hyO5Y/cYnGjWMn36mP39waem58Z+6S5KIpt2bqXZuGmB1yuycyUXpUf7H7vuUc8qlLZUIsecrdt7V7UQqyd+JwuT0ze7OsuUpocuco1lPlmPPLLkeqyjFruyYdhIaFXf6UaSUqMN/yZ3vnwj43falc6rlo+mrjozUU4ZiaJzc3Zm/uGx8tw0WE7KXJ4xGpE29MlLvXOz7d1vavzsC9fuRUzlmDnZ3sUr28XSISjxx3zK/PVJvHH7QHojAgNPZoWDQ7Rrbk8icvwu6rfaB6XamxaCoXdnwaY9G2ra2ejxCLlLLgisPimIxUpK0eXhrqUSvuXr/YlI2rv9g4IJd4cfLZnXoU8qcvNCySOi7Drcd+f+K1ehZojDPRhZgp6kVTw+5dT/V81TwScLSzFotjSqQiBPsnj9/m3GJ0ymGk7ODGZFSWXfUasL5L5iOOuXjl3bzviTdePHRgz9snXs1dm4tXrvrTFxoWSVyNMaTk9RnX5MvPP9MYKzZ2hpfOODOYA8XRk3/4xdO/2j95LMeHHBkazk9fvjD32o701DPIPKPQqTi3mdmPM4WbW0P1vRovHuXkFcfER72pHIlZtfLB3LWp11wIDQvu2Ml39k4cHnv2lfJpXI31UDPc2YuNlJQpIDdxIwFTZ6Zj7oha5cAy0DUQ1dWoR4/z/8elHgNUnNvTYy9kpDZWS7b6ZBpLqiLWZRHB7FS9lPOePaFhkcR0kG85qV/Pri/XXDdd/Mbvx9teDTsxX8z31uQcVTZuWN+9xFvRPuEcwaKD9W+ne0kVEYxO7Zk4lN+6/Wtk3LW86rT0xEW+Y2RLXO0xKUy1F0T1FZs7I3FYLjfKuqn+btx929ZWDDUxAY12/tPAtXnecds+Zs77ffeNj449e6A7XtG+SFKpUllerWh/JddEpXpltyUWU9euf1jeR7N71y/LMRe69l/y/zTEdNN4kw5Cw0KJBUi5UDdtGNw0dzESw0JugmR9yjZwjjaxjCpTz+5dT8VHffepTo8a7citnwhW9Gugf00kbN/4zpe69oPLO+7K4z/Xtetc9lbi1zimRLBxAu0V05yURA1zD9iiydKJxRP/ql/r9WJ2FCTfqhd1KO+1rceZZe0Xg/ZPHs/d37kVuNRzVRKzRolCPGk89cEjp/LV7np9lDPL0blvF+x+/NucQ/12m7IEy0nKomlJ+3b/j37ip7C0fPHFl2fP/aWMDw/03b+s80JMXL03Zj8px/zs0R/39d0XC6X4eOv02bhL3YI/X/hbrGhiwXLvvd8tc1AU6vTUuZ6Lpice/2l5nF//5u14/E8/+/yTzz6Pu8dX1qx++K9/f79+8LJhFHNTX9/9D/TdVx4/VkO//d1U/fjxII1ziGPi8S91XtUuSmVmvvp/2x/FGTaeiCXkntaTY34KgKUTIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIjR8BIDSA0AAIDSA0gNAACA1w9/uvAAMAVyEAUWZlYN0AAAAASUVORK5CYII=",title:"AI",text:"AI involves creating machines that can learn, reason, and solve problems, simulating human intelligence.",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(ge,{img:"data:image/png;base64,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",title:"SAP",text:"SAP is a global leader in enterprise resource planning (ERP) software, used by businesses to manage their operations.",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(ge,{img:"data:image/png;base64,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",title:"Java Full Stack",text:"Java is a versatile programming language widely used in enterprise applications, Android development, and web applications.",action:()=>alert("clicked")})})]})]})}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(be,{className:"flexSpaceCenter",children:[Object(l.jsx)(Ne,{children:Object(l.jsx)(fe,{children:Object(l.jsx)(ue,{className:"flexCenter",children:Object(l.jsx)("img",{className:"radius8",src:"data:image/png;base64,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",alt:"add"})})})}),Object(l.jsxs)(Ie,{children:[Object(l.jsx)("h4",{className:"font15 semiBold",children:"Our Mission"}),Object(l.jsx)("h2",{className:"font40 extraBold",children:"Software As Product"}),Object(l.jsx)("p",{className:"font12",children:"To be a leading technology partner, driving digital transformation for businesses worldwide and delivering solutions that make a real difference.              "}),Object(l.jsxs)(he,{className:"flexNullCenter",style:{margin:"30px 0"},children:[Object(l.jsx)("div",{style:{width:"190px"},children:Object(l.jsx)(B,{title:"Get Started",action:()=>alert("clicked")})}),Object(l.jsx)("div",{style:{width:"190px",marginLeft:"15px"},children:Object(l.jsx)(B,{title:"Contact Us",action:()=>alert("clicked"),border:!0})})]})]})]})})})]})}const pe=n.a.section`
  width: 100%;
`,me=n.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,be=n.a.div`
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
`,he=n.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,Ne=n.a.div`
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
`,Ie=n.a.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`,fe=n.a.div`
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
`,ue=n.a.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;n.a.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`,n.a.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;var we=t(29),Be=t.n(we);function Pe(e){let{text:A,author:t}=e;return Object(l.jsxs)(Qe,{className:"darkBg radius8 flexNullCenter flexColumn",children:[Object(l.jsx)(Oe,{children:Object(l.jsx)(Q,{})}),Object(l.jsx)("p",{className:"whiteColor font13",style:{paddingBottom:"30px"},children:A}),Object(l.jsx)("p",{className:"orangeColor font13",style:{alignSelf:"flex-end"},children:Object(l.jsx)("em",{children:t})})]})}const Qe=n.a.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`,Oe=n.a.div`
  position: relative;
  top: -40px;
`;function ye(){return Object(l.jsx)("div",{children:Object(l.jsxs)(Be.a,{infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],children:[Object(l.jsx)(ve,{className:"flexCenter",children:Object(l.jsx)(Pe,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(l.jsx)(ve,{className:"flexCenter",children:Object(l.jsx)(Pe,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(l.jsx)(ve,{className:"flexCenter",children:Object(l.jsx)(Pe,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(l.jsx)(ve,{className:"flexCenter",children:Object(l.jsx)(Pe,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})}),Object(l.jsx)(ve,{className:"flexCenter",children:Object(l.jsx)(Pe,{text:"Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects.",author:"\u2014 Sarah J., CEO of TechSolutions"})})]})})}const ve=n.a.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;function Ce(){return Object(l.jsx)(Se,{id:"blog",children:Object(l.jsx)("div",{className:"lightBg",style:{padding:"50px 0"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(ke,{children:Object(l.jsx)("h1",{className:"font40 extraBold",children:"What our client Say?"})}),Object(l.jsx)(ye,{})]})})})}const Se=n.a.section`
  width: 100%;
  padding-top: 20px;
`,ke=n.a.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;n.a.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;function He(){return Object(l.jsx)(Xe,{id:"pricing"})}const Xe=n.a.section`
  width: 100%;
  padding: 50px 0;
`;n.a.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`,n.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,n.a.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;t.p,t.p,t.p;function Ee(){return Object(l.jsx)(Me,{id:"contact",children:Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(Ze,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Let's get in touch"}),Object(l.jsxs)("p",{className:"font13",children:["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",Object(l.jsx)("br",{}),"labore et dolore magna aliquyam erat, sed diam voluptua."]})]}),Object(l.jsxs)("div",{className:"row",style:{paddingBottom:"30px"},children:[Object(l.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:[Object(l.jsxs)(ze,{children:[Object(l.jsx)("label",{className:"font13",children:"First name:"}),Object(l.jsx)("input",{type:"text",id:"fname",name:"fname",className:"font20 extraBold"}),Object(l.jsx)("label",{className:"font13",children:"Email:"}),Object(l.jsx)("input",{type:"text",id:"email",name:"email",className:"font20 extraBold"}),Object(l.jsx)("label",{className:"font13",children:"Subject:"}),Object(l.jsx)("input",{type:"text",id:"subject",name:"subject",className:"font20 extraBold"}),Object(l.jsx)("textarea",{rows:"4",cols:"50",type:"text",id:"message",name:"message",className:"font20 extraBold"})]}),Object(l.jsx)(Te,{className:"flex",children:Object(l.jsx)(We,{type:"submit",value:"Send Message",className:"pointer animate radius8",style:{maxWidth:"220px"}})})]}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:Object(l.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin",width:"600",height:"450",frameborder:"0",style:{border:0},allowfullscreen:"","aria-hidden":"false",tabindex:"0"})})]})]})})})}const Me=n.a.section`
  width: 100%;
`,Ze=n.a.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`,ze=n.a.form`
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
`,We=n.a.input`
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
`,Te=(n.a.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`,n.a.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`);function Ue(){return Object(l.jsx)(Fe,{children:Object(l.jsx)("div",{className:"darkBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(Le,{className:"flexSpaceCenter",style:{padding:"30px 0"},children:[Object(l.jsxs)(r.Link,{className:"flexCenter animate pointer",to:"home",smooth:!0,offset:-80,children:[Object(l.jsx)(o,{}),Object(l.jsx)("h1",{className:"font15 extraBold whiteColor",style:{marginLeft:"15px"},children:"ERP TECH"})]}),Object(l.jsxs)(Re,{className:"whiteColor font13",children:["\xa9 ",(new Date).getFullYear()," - ",Object(l.jsx)("span",{className:"purpleColor font13",children:"ERP TECH"})," All Right Reserved"]}),Object(l.jsx)(r.Link,{className:"whiteColor animate pointer font13",to:"home",smooth:!0,offset:-80,children:"Back to top"})]})})})})}const Fe=n.a.div`
  width: 100%;
`,Le=n.a.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`,Re=n.a.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;function Ve(){return Object(l.jsx)(Je,{id:"about",children:Object(l.jsx)("div",{className:"darkBg",style:{padding:"60px 0"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(Ke,{children:[Object(l.jsx)("h1",{className:"font40 extraBold whiteColor",children:"ABOUT US"}),Object(l.jsx)("p",{className:"font20 semiBold whiteColor",style:{color:"#f2b300"},children:" Innovating the Future, One Solution at a Time "}),Object(l.jsx)("p",{className:"font15 whiteColor",children:"We are committed to delivering innovative solutions that empower businesses to thrive. Our team of experts brings a wealth of experience and passion to every project.We believe in sustainable growth and strive to make a positive impact on the world. Customer satisfaction is at the core of everything we do."})]})," ",Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"row",style:{paddingBottom:"30px"},children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 whiteColor",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"ERP TECH has always sort to be a value driven organization and it has more than 14 years of experience these values continue to direct our growth and business."})})," ",Object(l.jsx)("br",{}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"ERP TECH is at the vanguard of ERP solutions, providing incomparable amenities affiliated to the ERP Logistics & Supply Chain Management requests and business goals of our customers"})})]})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex"})]})]})})})}const Je=n.a.section`
  width: 100%;
`,Ke=n.a.div`
  text-align:center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;function Ye(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{}),Object(l.jsx)(y,{}),Object(l.jsx)(Ve,{}),Object(l.jsx)(G,{}),Object(l.jsx)(je,{}),Object(l.jsx)(Ce,{}),Object(l.jsx)(He,{}),Object(l.jsx)(Ee,{}),Object(l.jsx)(Ue,{})]})}function Ge(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(c.a,{children:[Object(l.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(l.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(l.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap",rel:"stylesheet"})]}),Object(l.jsx)(Ye,{})]})}var qe=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((A=>{let{getCLS:t,getFID:a,getFCP:s,getLCP:i,getTTFB:c}=A;t(e),a(e),s(e),i(e),c(e)}))};i.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(Ge,{})}),document.getElementById("root")),qe()}},[[65,1,2]]]);
//# sourceMappingURL=main.6145e4f1.chunk.js.map