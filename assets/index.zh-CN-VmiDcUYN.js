import{j as e,aE as s}from"./index-BoH_1I5s.js";import{C as r}from"./CodeBlock-CP-Bxw1g.js";import{C as i}from"./Contributor-B9AchLV8.js";function h(){return e.jsx(e.Fragment,{children:e.jsx(s,{content:"pelement-plus",children:e.jsx("div",{style:{height:"500px"}})})})}function c(){return e.jsx(e.Fragment,{children:e.jsx(s,{content:["Element Plus","pelement-plus"],children:e.jsx("div",{style:{height:"500px"}})})})}function m(){return e.jsx(e.Fragment,{children:e.jsx(s,{width:30,height:30,image:"https://pelement-react.github.io/pelement-react/pelement-react.svg",children:e.jsx("div",{style:{height:"500px"}})})})}function a(t){const n={h1:"h1",h2:"h2",p:"p",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Watermark 水印"}),`
`,`
`,e.jsx(n.p,{children:"在页面上添加文本或图片等水印信息"}),`
`,e.jsx(n.h2,{children:"基础用法"}),`
`,e.jsx(n.p,{children:"基础用法"}),`
`,e.jsx(r,{name:"WatermarkBasic",children:e.jsx(h,{})}),`
`,e.jsx(n.h2,{children:"多行水印"}),`
`,e.jsx(n.p,{children:'使用 "content" 设置一个字符串数组来指定多行文本水印内容'}),`
`,e.jsx(r,{name:"WatermarkContent",children:e.jsx(c,{})}),`
`,e.jsx(n.h2,{children:"图片水印"}),`
`,e.jsx(n.p,{children:"通过 'image' 指定图像地址。 为了确保图像清晰展示而不是被拉伸，请设置宽度和高度，建议使用至少两倍的宽度和高度的图片来保证显示效果。"}),`
`,e.jsx(r,{name:"WatermarkImage",children:e.jsx(m,{})}),`
`,e.jsx(n.h2,{children:"贡献者"}),`
`,e.jsx(i,{path:"packages/Watermark/index.zh-CN.mdx"})]})}function j(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{j as default};
