import{j as e,at as i,i as d}from"./index-BoH_1I5s.js";import{C as n}from"./CodeBlock-CP-Bxw1g.js";import{C as h}from"./Contributor-B9AchLV8.js";function c(){return e.jsx(e.Fragment,{children:e.jsx(i,{items:[{title:"homepage",isLink:!0},{title:e.jsx("a",{href:"/",children:"promotion management"}),isLink:!0},{title:"promotion list"},{title:"promotion detail"}]})})}function l(){return e.jsx(e.Fragment,{children:e.jsx(i,{separator:e.jsx(d,{className:"el-breadcrumb__separator"}),items:[{title:"homepage",isLink:!0},{title:"promotion management"},{title:"promotion list"},{title:"promotion detail"}]})})}function s(r){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Breadcrumb 面包屑"}),`
`,`
`,e.jsx(t.p,{children:"显示当前页面的路径，快速返回之前的任意页面。"}),`
`,e.jsx(t.h2,{children:"基础用法"}),`
`,e.jsx(t.p,{children:"该组件接受一个 String 类型的参数 separator来作为分隔符。 默认值为 '/'。"}),`
`,e.jsx(n,{name:"BreadcrumbBasic",children:e.jsx(c,{})}),`
`,e.jsx(t.h2,{children:"图标分隔符"}),`
`,e.jsx(t.p,{children:"通过设置 separator 作为分隔符。"}),`
`,e.jsx(n,{name:"BreadcrumbSeparator",children:e.jsx(l,{})}),`
`,e.jsx(t.h2,{children:"Breadcrumb API"}),`
`,e.jsx(t.h3,{children:"Breadcrumb Attributes"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"属性名"}),e.jsx(t.th,{children:"说明"}),e.jsx(t.th,{children:"类型"}),e.jsx(t.th,{children:"默认值"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"separator"}),e.jsx(t.td,{children:"分隔符"}),e.jsx(t.td,{children:"string / ReactNode"}),e.jsx(t.td,{children:"/"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"items"}),e.jsx(t.td,{children:"路由栈信息"}),e.jsx(t.td,{children:"BreadcrumbItem[]"}),e.jsx(t.td,{children:"—"})]})]})]}),`
`,e.jsx(t.h3,{children:"BreadcrumbItem Attributes"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"属性名"}),e.jsx(t.th,{children:"说明"}),e.jsx(t.th,{children:"类型"}),e.jsx(t.th,{children:"默认值"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"title"}),e.jsx(t.td,{children:"标题"}),e.jsx(t.td,{children:"string / ReactNode"}),e.jsx(t.td,{children:"/"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"isLink"}),e.jsx(t.td,{children:"是否为链接"}),e.jsx(t.td,{children:"boolean"}),e.jsx(t.td,{children:"false"})]})]})]}),`
`,e.jsx(t.h2,{children:"贡献者"}),`
`,e.jsx(h,{path:"packages/Breadcrumb/index.zh-CN.mdx"})]})}function j(r={}){const{wrapper:t}=r.components||{};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
