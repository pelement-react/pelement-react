import{r,j as e,a0 as t}from"./index-BoH_1I5s.js";import{C as i}from"./CodeBlock-CP-Bxw1g.js";import{C as d}from"./Contributor-B9AchLV8.js";function h(){const[n,o]=r.useState("#409EFF"),[a,l]=r.useState("");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"demo-color-block",children:[e.jsx("span",{className:"demonstration",children:"With default value"}),e.jsx(t,{value:n,onChange:s=>o(s)})]}),e.jsxs("div",{className:"demo-color-block",children:[e.jsx("span",{className:"demonstration",children:"With no default value"}),e.jsx(t,{value:a,onChange:s=>l(s)})]})]})}function c(n){const o={h1:"h1",h2:"h2",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{children:"ColorPicker 颜色选择器"}),`
`,`
`,e.jsx(o.p,{children:"用于颜色选择，支持多种格式。"}),`
`,e.jsx(o.h2,{children:"基础用法"}),`
`,e.jsx(i,{name:"ColorPickerBasic",children:e.jsx(h,{})}),`
`,e.jsx(o.h2,{children:"贡献者"}),`
`,e.jsx(d,{path:"packages/ColorPicker/index.zh-CN.mdx"})]})}function u(n={}){const{wrapper:o}=n.components||{};return o?e.jsx(o,{...n,children:e.jsx(c,{...n})}):c(n)}export{u as default};
