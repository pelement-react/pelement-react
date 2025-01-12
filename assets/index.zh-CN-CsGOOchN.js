import{j as e,ag as n}from"./index-BoH_1I5s.js";import{C as t}from"./CodeBlock-CP-Bxw1g.js";import{C as o}from"./Contributor-B9AchLV8.js";function i(){function r(s){return s===100?"Full":`${s}%`}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-progress",children:[e.jsx(n,{percentage:50}),e.jsx(n,{percentage:100,format:r}),e.jsx(n,{percentage:100,status:"success"}),e.jsx(n,{percentage:100,status:"warning"}),e.jsx(n,{percentage:50,status:"exception"})]})})}function x(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-progress",children:[e.jsx(n,{textInside:!0,strokeWidth:26,percentage:70}),e.jsx(n,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),e.jsx(n,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),e.jsx(n,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function c(r){const s={code:"code",h1:"h1",h2:"h2",p:"p",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Progress 进度条"}),`
`,`
`,e.jsx(s.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,e.jsx(s.h2,{children:"直线进度条"}),`
`,e.jsxs(s.p,{children:["Progress 组件设置 ",e.jsx(s.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",e.jsx(s.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",e.jsx(s.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,e.jsx(t,{name:"ProgressBasic",children:e.jsx(i,{})}),`
`,e.jsx(s.h2,{children:"进度条内显示百分比标识"}),`
`,e.jsx(s.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,e.jsxs(s.p,{children:["Progress 组件可通过 ",e.jsx(s.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",e.jsx(s.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,e.jsx(t,{name:"ProgressTextInside",children:e.jsx(x,{})}),`
`,e.jsx(s.h2,{children:"贡献者"}),`
`,e.jsx(o,{path:"packages/Progress/index.zh-CN.mdx"})]})}function j(r={}){const{wrapper:s}=r.components||{};return s?e.jsx(s,{...r,children:e.jsx(c,{...r})}):c(r)}export{j as default};
