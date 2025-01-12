import{j as e,aq as l,E as i,S as r,C as c,M as d,a as o,D as x}from"./index-BoH_1I5s.js";import{C as t}from"./CodeBlock-CP-Bxw1g.js";import{C as j}from"./Contributor-B9AchLV8.js";function h(){const n=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsx(l,{options:n,size:"large"}),e.jsx(l,{options:n,size:"default"}),e.jsx(l,{options:n,size:"small"})]})})}function m(){const n=[{label:"Mon",value:"Mon",disabled:!0},{label:"Tue",value:"Tue"},{label:"Wed",value:"Wed",disabled:!0},{label:"Thu",value:"Thu"},{label:"Fri",value:"Fri",disabled:!0},{label:"Sat",value:"Sat"},{label:"Sun",value:"Sun"}];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsx(l,{options:n,disabled:!0}),e.jsx(l,{options:n})]})})}function p(){const n=["Mon","Tue","Wed","Thu","Fri","Sat","Sunday long long long long long long long"];return e.jsx(e.Fragment,{children:e.jsx(l,{options:n,block:!0})})}function u(){const n=[{label:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center gap-2 p-2",children:[e.jsx(i,{style:{fontSize:"20px"}}),e.jsx("div",{children:"Edit"})]})})},{label:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center gap-2 p-2",children:[e.jsx(r,{style:{fontSize:"20px"}}),e.jsx("div",{children:"Search"})]})})},{label:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center gap-2 p-2",children:[e.jsx(c,{style:{fontSize:"20px"}}),e.jsx("div",{children:"Check"})]})})},{label:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center gap-2 p-2",children:[e.jsx(d,{style:{fontSize:"20px"}}),e.jsx("div",{children:"Message"})]})})},{label:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center gap-2 p-2",children:[e.jsx(o,{style:{fontSize:"20px"}}),e.jsx("div",{children:"Star"})]})})},{label:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center gap-2 p-2",children:[e.jsx(x,{style:{fontSize:"20px"}}),e.jsx("div",{children:"Delete"})]})})}];return e.jsx(e.Fragment,{children:e.jsx(l,{options:n,size:"large"})})}function g(){const n=["Delicacy","Desserts&Drinks","Fresh foods","Supermarket"];return e.jsx(e.Fragment,{children:e.jsx("div",{className:"custom-style",children:e.jsx(l,{options:n})})})}function a(n){const s={h1:"h1",h2:"h2",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Segmented 分段控制器"}),`
`,`
`,e.jsx(s.p,{children:"用于展示多个选项并允许用户选择其中单个选项。"}),`
`,e.jsx(s.h2,{children:"基础用法"}),`
`,e.jsx(s.p,{children:"设置 keyValue 为选项值。"}),`
`,e.jsx(t,{name:"SegmentedBasic",children:e.jsx(h,{})}),`
`,e.jsx(s.h2,{children:"禁用状态"}),`
`,e.jsx(s.p,{children:"设置 disabled 属性来禁用一些选项。"}),`
`,e.jsx(t,{name:"SegmentedDisabled",children:e.jsx(m,{})}),`
`,e.jsx(s.h2,{children:"Block 分段选择器"}),`
`,e.jsx(s.p,{children:"设置block为true以适应父元素的宽度。"}),`
`,e.jsx(t,{name:"SegmentedBlock",children:e.jsx(p,{})}),`
`,e.jsx(s.h2,{children:"自定义内容"}),`
`,e.jsx(s.p,{children:"设置 ReactNode 位来渲染自定义内容。"}),`
`,e.jsx(t,{name:"SegmentedReactNode",children:e.jsx(u,{})}),`
`,e.jsx(s.h2,{children:"自定义样式"}),`
`,e.jsx(s.p,{children:"设置 color变量 渲染自定义样式。"}),`
`,e.jsx(t,{name:"SegmentedColor",children:e.jsx(g,{})}),`
`,e.jsx(s.h2,{children:"贡献者"}),`
`,e.jsx(j,{path:"packages/Segmented/index.zh-CN.mdx"})]})}function v(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{v as default};
