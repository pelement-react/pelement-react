import{r as i,j as e,J as o}from"./index-BnsErXRG.js";import{C as a}from"./CodeBlock-ByD7R5yk.js";function l(){const[t,n]=i.useState("");function c(r){n(r)}return e.jsx(e.Fragment,{children:e.jsx(o,{value:t,style:{width:"240px"},start:"08:30",step:"00:15",end:"18:30",placeholder:"Select time",onChange:c})})}function s(t){const n={h2:"h2",p:"p",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"TimeSelect 时间选择"}),`
`,`
`,e.jsx(n.p,{children:"用于选择或输入日期"}),`
`,e.jsx(n.p,{children:"可用时间范围是 00:00-23:59"}),`
`,e.jsx(n.h2,{children:"固定时间点"}),`
`,e.jsx(n.p,{children:"提供几个固定的时间点供用户选择"}),`
`,e.jsx(n.p,{children:"使用 TimeSelect 标签，然后通过start、end和step指定起始时间，结束时间和步长。"}),`
`,e.jsx(a,{name:"TimeSelectBasic",children:e.jsx(l,{})})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
