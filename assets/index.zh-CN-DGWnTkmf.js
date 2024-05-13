import{r as i,j as e}from"./index-DC7_VHN2.js";import{C as r}from"./CodeBlock-00HFcS5H.js";import{s as l}from"./index-Cl43bBzW.js";function c(){const[t,n]=i.useState("");function s(a){n(a)}return e.jsx(e.Fragment,{children:e.jsx(l,{style:{width:"240px"},placeholder:"Please input",value:t,onChange:s})})}function x(){const[t,n]=i.useState("");function s(a){n(a)}return e.jsx(e.Fragment,{children:e.jsx(l,{style:{width:"240px"},placeholder:"Please input",value:t,disabled:!0,onChange:s})})}function o(){const[t,n]=i.useState("");function s(a){n(a)}return e.jsx(e.Fragment,{children:e.jsx(l,{style:{width:"240px"},placeholder:"Please input",value:t,clearable:!0,onChange:s})})}function u(){const[t,n]=i.useState("");function s(a){n(a)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex gap-4 mb-4 items-center",children:[e.jsx(l,{style:{width:"240px"},placeholder:"Please input",value:t,size:"large",onChange:s}),e.jsx(l,{style:{width:"240px"},placeholder:"Please input",value:t,onChange:s}),e.jsx(l,{style:{width:"240px"},placeholder:"Please input",value:t,size:"small",onChange:s})]})})}function h(t){const n={h1:"h1",h2:"h2",p:"p",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Input 输入框"}),`
`,`
`,e.jsx(n.h2,{children:"基础用法"}),`
`,e.jsx(r,{name:"InputBasic",children:e.jsx(c,{})}),`
`,e.jsx(n.h2,{children:"禁用状态"}),`
`,e.jsx(n.p,{children:"通过 disabled 属性指定是否禁用 input 组件"}),`
`,e.jsx(r,{name:"InputDisabled",children:e.jsx(x,{})}),`
`,e.jsx(n.h2,{children:"一键清空"}),`
`,e.jsx(n.p,{children:"使用clearable属性即可得到一个可一键清空的输入框"}),`
`,e.jsx(r,{name:"InputClearable",children:e.jsx(o,{})}),`
`,e.jsx(n.h2,{children:"尺寸"}),`
`,e.jsx(n.p,{children:"使用 showPassword 属性即可得到一个可切换显示隐藏的密码框"}),`
`,e.jsx(r,{name:"InputSize",children:e.jsx(u,{})})]})}function m(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(h,{...t})}):h(t)}export{m as default};
