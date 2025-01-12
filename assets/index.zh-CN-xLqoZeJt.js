import{j as n,c as s,H as c,d as i,F as t,A as h}from"./index-BoH_1I5s.js";import{C as r}from"./CodeBlock-CP-Bxw1g.js";import{C as l}from"./Contributor-B9AchLV8.js";function j(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(s,{children:[n.jsx(c,{children:"Header"}),n.jsx(i,{children:"Main"})]})})})}function a(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(s,{children:[n.jsx(c,{children:"Header"}),n.jsx(i,{children:"Main"}),n.jsx(t,{children:"Footer"})]})})})}function o(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(s,{children:[n.jsx(h,{width:"200px",children:"Aside"}),n.jsx(i,{children:"Main"})]})})})}function m(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(s,{children:[n.jsx(c,{children:"Header"}),n.jsxs(s,{children:[n.jsx(h,{width:"200px",children:"Aside"}),n.jsx(i,{children:"Main"})]})]})})})}function p(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(s,{children:[n.jsx(c,{children:"Header"}),n.jsxs(s,{children:[n.jsx(h,{width:"200px",children:"Aside"}),n.jsxs(s,{children:[n.jsx(i,{children:"Main"}),n.jsx(t,{children:"Footer"})]})]})]})})})}function u(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(s,{children:[n.jsx(h,{width:"200px",children:"Aside"}),n.jsxs(s,{children:[n.jsx(c,{children:"Header"}),n.jsx(i,{children:"Main"})]})]})})})}function C(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"common-layout",children:n.jsxs(s,{children:[n.jsx(h,{width:"200px",children:"Aside"}),n.jsxs(s,{children:[n.jsx(c,{children:"Header"}),n.jsx(i,{children:"Main"}),n.jsx(t,{children:"Footer"})]})]})})})}function x(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Container 布局容器"}),`
`,`
`,n.jsx(e.p,{children:"用于布局的容器组件，方便快速搭建页面的基本结构："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Container>"}),"：外层容器。 当子元素中包含 ",n.jsx(e.code,{children:"<Header>"})," 或 ",n.jsx(e.code,{children:"<Footer>"})," 时，全部子元素会垂直上下排列， 否则会水平左右排列。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Header>"}),"：顶栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Aside>"}),"：侧边栏容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Main>"}),"：主要区域容器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<Footer>"}),"：底栏容器。"]}),`
`,n.jsx(e.h2,{children:"常见页面布局"}),`
`,n.jsx(r,{name:"ContainerBasic",children:n.jsx(j,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(r,{name:"ContainerBasic1",children:n.jsx(a,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(r,{name:"ContainerBasic2",children:n.jsx(o,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(r,{name:"ContainerBasic3",children:n.jsx(m,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(r,{name:"ContainerBasic4",children:n.jsx(p,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(r,{name:"ContainerBasic5",children:n.jsx(u,{})}),`
`,n.jsx("p",{text:"sm"}),`
`,n.jsx(r,{name:"ContainerBasic6",children:n.jsx(C,{})}),`
`,n.jsx(e.h2,{children:"Container API"}),`
`,n.jsx(e.h3,{children:"Container Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"子元素的排列方向"}),n.jsx(e.td,{children:"'horizontal' 'vertical'"}),n.jsxs(e.td,{children:["子元素中有 ",n.jsx(e.code,{children:"Header"})," 或 ",n.jsx(e.code,{children:"Footer"})," 时为 vertical，否则为 horizontal"]})]})})]}),`
`,n.jsx(e.h2,{children:"Header API"}),`
`,n.jsx(e.h3,{children:"Header Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"顶栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]}),`
`,n.jsx(e.h2,{children:"Aside API"}),`
`,n.jsx(e.h3,{children:"Aside Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"width"}),n.jsx(e.td,{children:"侧边栏宽度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"300px"})]})})]}),`
`,n.jsx(e.h2,{children:"Footer API"}),`
`,n.jsx(e.h3,{children:"Footer Attributes"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性名"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"height"}),n.jsx(e.td,{children:"底栏高度"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"60px"})]})})]}),`
`,n.jsx(e.h2,{children:"贡献者"}),`
`,n.jsx(l,{path:"packages/Container/index.zh-CN.mdx"})]})}function B(d={}){const{wrapper:e}=d.components||{};return e?n.jsx(e,{...d,children:n.jsx(x,{...d})}):x(d)}export{B as default};
