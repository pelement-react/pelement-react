import{j as n,ay as r,r as d,B as c,az as s}from"./index-BoH_1I5s.js";import{C as t}from"./CodeBlock-CP-Bxw1g.js";import{C as l}from"./Contributor-B9AchLV8.js";function x(){return n.jsx(n.Fragment,{children:n.jsx(r,{children:n.jsx("div",{style:{height:"200px"}})})})}function h(){const[i,e]=d.useState(!1);function a(){e(!0),setTimeout(()=>{e(!1)},3e3)}return n.jsxs(n.Fragment,{children:[n.jsx(c,{onClick:a,children:"全屏"}),n.jsx(r,{fullscreen:i,text:"Loading...",children:n.jsx("div",{style:{height:"200px"}})})]})}function j(){function i(){s.open({}),setTimeout(()=>{s.close()},5e3)}return n.jsx(n.Fragment,{children:n.jsx(c,{onClick:i,children:"open fullscreen"})})}function o(i){const e={h1:"h1",h2:"h2",p:"p",...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Loading 加载"}),`
`,`
`,n.jsx(e.p,{children:"加载数据时显示动效。"}),`
`,n.jsx(e.h2,{children:"区域加载"}),`
`,n.jsx(e.p,{children:"在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。"}),`
`,n.jsx(t,{name:"LoadingBasic",children:n.jsx(x,{})}),`
`,n.jsx(e.h2,{children:"加载文案"}),`
`,n.jsx(t,{name:"LoadingText",children:n.jsx(h,{})}),`
`,n.jsx(e.h2,{children:"loading"}),`
`,n.jsx(e.p,{children:"通过 loading.open() 打开全屏loading"}),`
`,n.jsx(t,{name:"LoadingService",children:n.jsx(j,{})}),`
`,n.jsx(e.h2,{children:"贡献者"}),`
`,n.jsx(l,{path:"packages/Loading/index.zh-CN.mdx"})]})}function p(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{p as default};
