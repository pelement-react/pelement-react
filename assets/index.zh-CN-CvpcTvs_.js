import{r as c,j as e,a3 as o}from"./index-BoH_1I5s.js";import{C as r}from"./CodeBlock-CP-Bxw1g.js";import{C as x}from"./Contributor-B9AchLV8.js";function h(){const n=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],[t,l]=c.useState(n[0]);function a(i){l(i)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(o,{style:{width:"240px"},size:"large",options:n,value:t,onChange:a}),e.jsx(o,{style:{width:"240px"},options:n,value:t,onChange:a}),e.jsx(o,{style:{width:"240px"},size:"small",options:n,value:t,onChange:a})]})})}function s(n){const t={h1:"h1",h2:"h2",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Select 选择器"}),`
`,`
`,e.jsx(t.h2,{children:"基础用法"}),`
`,e.jsx(r,{name:"SelectBasic",children:e.jsx(h,{})}),`
`,e.jsx(t.h2,{children:"贡献者"}),`
`,e.jsx(x,{path:"packages/Select/index.zh-CN.mdx"})]})}function m(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
