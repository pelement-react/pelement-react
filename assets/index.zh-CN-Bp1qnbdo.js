import{j as n}from"./index-YfsbNJ80.js";import{o,b as t}from"./index-dN-V22sj.js";function s(){return n.jsx(n.Fragment,{children:n.jsx(o,{height:"400px",children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((r,e)=>n.jsx("p",{className:"scrollbar-demo-item",children:r},e))})})}function c(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Scrollbar 滚动条"}),`
`,`
`,n.jsx(e.p,{children:"用于替换浏览器原生滚动条。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"height"})," 属性设置滚动条高度，若不设置则根据父容器高度自适应。"]}),`
`,n.jsx(t,{name:"ScrollbarBasic",children:n.jsx(s,{})})]})}function a(r={}){const{wrapper:e}=r.components||{};return e?n.jsx(e,{...r,children:n.jsx(c,{...r})}):c(r)}export{a as default};
