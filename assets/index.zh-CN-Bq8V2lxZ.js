import{j as n,K as i,E as c,V as t}from"./index-BoH_1I5s.js";import{C as d}from"./CodeBlock-CP-Bxw1g.js";import{C as l}from"./Contributor-B9AchLV8.js";function h(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(i,{href:"https://pelement-react.github.io/pelement-react/",target:"_blank",children:"default"}),n.jsx(i,{type:"primary",children:"primary"}),n.jsx(i,{type:"success",children:"success"}),n.jsx(i,{type:"warning",children:"warning"}),n.jsx(i,{type:"danger",children:"danger"}),n.jsx(i,{type:"info",children:"info"})]})})}function x(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(i,{disabled:!0,children:"default"}),n.jsx(i,{type:"primary",disabled:!0,children:"primary"}),n.jsx(i,{type:"success",disabled:!0,children:"success"}),n.jsx(i,{type:"warning",disabled:!0,children:"warning"}),n.jsx(i,{type:"danger",disabled:!0,children:"danger"}),n.jsx(i,{type:"info",disabled:!0,children:"info"})]})})}function j(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(i,{underline:!1,children:"Without Underline"}),n.jsx(i,{children:"With Underline"})]})})}function a(){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"common-link",children:[n.jsx(i,{icon:n.jsx(c,{}),children:"Edit"}),n.jsxs(i,{children:["Check",n.jsx(t,{className:"el-icon--right"})]})]})})}function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Link 链接"}),`
`,`
`,n.jsx(e.p,{children:"文字超链接"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"基础的文字链接用法。"}),`
`,n.jsx(d,{name:"LinkBasic",children:n.jsx(h,{})}),`
`,n.jsx(e.h2,{children:"禁用状态"}),`
`,n.jsx(e.p,{children:"文字链接不可用状态。"}),`
`,n.jsx(d,{name:"LinkDisabled",children:n.jsx(x,{})}),`
`,n.jsx(e.h2,{children:"下划线"}),`
`,n.jsx(e.p,{children:"文字链接下划线。"}),`
`,n.jsx(d,{name:"LinkUnderline",children:n.jsx(j,{})}),`
`,n.jsx(e.h2,{children:"图标"}),`
`,n.jsx(e.p,{children:"带图标的链接"}),`
`,n.jsx(d,{name:"LinkIcon",children:n.jsx(a,{})}),`
`,n.jsx(e.h2,{children:"Link API"}),`
`,n.jsx(e.h3,{children:"Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"type"}),n.jsx(e.td,{children:"类型"}),n.jsx(e.td,{children:"'primary'  'success'  'warning'  'danger'  'info'  'default'"}),n.jsx(e.td,{children:"default"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"underline"}),n.jsx(e.td,{children:"是否下划线"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"true"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"disabled"}),n.jsx(e.td,{children:"是否禁用状态"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"false"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"href"}),n.jsx(e.td,{children:"原生 href 属性"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:"icon"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"string"})," / ",n.jsx(e.code,{children:"Component"})]}),n.jsx(e.td,{children:"—"})]})]})]}),`
`,n.jsx(e.h2,{children:"贡献者"}),`
`,n.jsx(l,{path:"packages/Link/index.zh-CN.mdx"})]})}function p(r={}){const{wrapper:e}=r.components||{};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{p as default};
