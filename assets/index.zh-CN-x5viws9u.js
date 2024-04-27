import{j as e}from"./index-ier0czJn.js";import{P as n,b as r}from"./index-n0SndFb9.js";function o(){function t(s){return s===100?"Full":`${s}%`}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-progress",children:[e.jsx(n,{percentage:50}),e.jsx(n,{percentage:100,format:t}),e.jsx(n,{percentage:100,status:"success"}),e.jsx(n,{percentage:100,status:"warning"}),e.jsx(n,{percentage:50,status:"exception"})]})})}function i(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-progress",children:[e.jsx(n,{textInside:!0,strokeWidth:26,percentage:70}),e.jsx(n,{textInside:!0,strokeWidth:24,percentage:100,status:"success"}),e.jsx(n,{textInside:!0,strokeWidth:22,percentage:80,status:"warning"}),e.jsx(n,{textInside:!0,strokeWidth:20,percentage:50,status:"exception"})]})})}function c(t){const s={code:"code",h1:"h1",h2:"h2",p:"p",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Progress 进度条"}),`
`,`
`,e.jsx(s.p,{children:"用于展示操作进度，告知用户当前状态和预期。"}),`
`,e.jsx(s.h2,{children:"直线进度条"}),`
`,e.jsxs(s.p,{children:["Progress 组件设置 ",e.jsx(s.code,{children:"percentage"})," 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 ",e.jsx(s.code,{children:"0-100"})," 的范围内。 你可以通过设置 ",e.jsx(s.code,{children:"format"})," 来自定义文字显示的格式。"]}),`
`,e.jsx(r,{name:"ProgressBasic",children:e.jsx(o,{})}),`
`,e.jsx(s.h2,{children:"进度条内显示百分比标识"}),`
`,e.jsx(s.p,{children:"百分比不占用额外空间，适用于文件上传等场景。"}),`
`,e.jsxs(s.p,{children:["Progress 组件可通过 ",e.jsx(s.code,{children:"stroke-width"})," 属性更改进度条的高度，并可通过 ",e.jsx(s.code,{children:"text-inside"})," 属性来改变进度条内部的文字。"]}),`
`,e.jsx(r,{name:"ProgressTextInside",children:e.jsx(i,{})})]})}function a(t={}){const{wrapper:s}=t.components||{};return s?e.jsx(s,{...t,children:e.jsx(c,{...t})}):c(t)}export{a as default};
