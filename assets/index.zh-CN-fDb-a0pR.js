import{j as e,a8 as s,B as r,n as t}from"./index-BoH_1I5s.js";import{C as i}from"./CodeBlock-CP-Bxw1g.js";import{C as l}from"./Contributor-B9AchLV8.js";function a(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-badge",children:[e.jsx(s,{value:12,className:"item",children:e.jsx(r,{children:"comments"})}),e.jsx(s,{value:3,className:"item",children:e.jsx(r,{children:"replies"})}),e.jsx(s,{value:1,className:"item",type:"primary",children:e.jsx(r,{children:"comments"})}),e.jsx(s,{value:2,className:"item",type:"warning",children:e.jsx(r,{children:"replies"})})]})})}function h(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-badge",children:[e.jsx(s,{value:200,max:99,className:"item",children:e.jsx(r,{children:"comments"})}),e.jsx(s,{value:100,max:10,className:"item",children:e.jsx(r,{children:"replies"})})]})})}function x(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-badge",children:[e.jsx(s,{value:"new",className:"item",children:e.jsx(r,{children:"comments"})}),e.jsx(s,{value:"hot",className:"item",children:e.jsx(r,{children:"replies"})})]})})}function j(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-badge",children:[e.jsx(s,{isDot:!0,className:"item",children:"query"}),e.jsx(s,{isDot:!0,className:"item",children:e.jsx(r,{className:"share-button",icon:e.jsx(t,{}),type:"primary"})})]})})}function c(d){const n={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Badge 徽章"}),`
`,`
`,e.jsx(n.p,{children:"按钮和图标上的数字或状态标记。"}),`
`,e.jsx(n.h2,{children:"基础用法"}),`
`,e.jsx(n.p,{children:"可以用来展示新消息的数量。"}),`
`,e.jsx(n.p,{children:"数量值可接受 Number 或 String。"}),`
`,e.jsx(i,{name:"BadgeBasic",children:e.jsx(a,{})}),`
`,e.jsx(n.h2,{children:"最大值"}),`
`,e.jsx(n.p,{children:"你还可以自定义最大值"}),`
`,e.jsx(n.p,{children:"由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。"}),`
`,e.jsx(i,{name:"BadgeMax",children:e.jsx(h,{})}),`
`,e.jsx(n.h2,{children:"自定义显示内容"}),`
`,e.jsx(n.p,{children:"你也可以展示除数字以外你想要展示的任何值。"}),`
`,e.jsx(n.p,{children:"当 value 是 String 时，可以显示自定义文字。"}),`
`,e.jsx(i,{name:"BadgeValue",children:e.jsx(x,{})}),`
`,e.jsx(n.h2,{children:"小红点"}),`
`,e.jsx(n.p,{children:"通过一个小红点标记来告知用户有新内容。"}),`
`,e.jsx(n.p,{children:"使用 is-dot 属性。 是个布尔值。"}),`
`,e.jsx(i,{name:"BadgeIsDot",children:e.jsx(j,{})}),`
`,e.jsx(n.h2,{children:"API"}),`
`,e.jsx(n.h3,{children:"Attributes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性名"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"value"}),e.jsx(n.td,{children:"显示值"}),e.jsx(n.td,{children:"string / number"}),e.jsx(n.td,{children:"''"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"max"}),e.jsx(n.td,{children:"最大值，超过最大值会显示 max+。 只有当 value 是数字类型时起作用。"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"99"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"isDot"}),e.jsx(n.td,{children:"是否显示小圆点。"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"type"}),e.jsx(n.td,{children:"badge type."}),e.jsx(n.td,{children:"'primary' | 'success' | 'warning' | 'danger' | 'info'"}),e.jsx(n.td,{children:"danger"})]})]})]}),`
`,e.jsx(n.h2,{children:"贡献者"}),`
`,e.jsx(l,{path:"packages/Badge/index.zh-CN.mdx"})]})}function p(d={}){const{wrapper:n}=d.components||{};return n?e.jsx(n,{...d,children:e.jsx(c,{...d})}):c(d)}export{p as default};
