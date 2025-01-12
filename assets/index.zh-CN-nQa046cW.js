import{j as e,aa as r}from"./index-BoH_1I5s.js";import{C as s}from"./CodeBlock-CP-Bxw1g.js";import{C as i}from"./Contributor-B9AchLV8.js";function l(){const n=[1,2,3,4];return e.jsx(e.Fragment,{children:e.jsx(r,{style:{maxWidth:"480px"},header:e.jsx("div",{className:"card-header",children:e.jsx("span",{children:"Card name"})}),footer:"Footer content",children:n.map((d,t)=>e.jsx("p",{className:"text item",children:"List item "+d},t))})})}function c(){const n=[1,2,3,4];return e.jsx(e.Fragment,{children:e.jsx(r,{style:{maxWidth:"480px"},children:n.map((d,t)=>e.jsx("p",{className:"text item",children:"List item "+d},t))})})}function x(){return e.jsx(e.Fragment,{children:e.jsx(r,{style:{maxWidth:"480px"},header:"Yummy hamburger",children:e.jsx("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",style:{width:"100%"}})})})}function a(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{style:{width:"480px"},shadow:"always",children:"Always"}),e.jsx(r,{style:{width:"480px"},shadow:"hover",children:"Hover"}),e.jsx(r,{style:{width:"480px"},shadow:"never",children:"Never"})]})})}function h(n){const d={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d.h1,{children:"Card 卡片"}),`
`,`
`,e.jsx(d.p,{children:"将信息聚合在卡片容器中展示。"}),`
`,e.jsx(d.h2,{children:"基础用法"}),`
`,e.jsx(d.p,{children:"卡片包含标题，内容以及操作区域。"}),`
`,e.jsx(d.p,{children:"Card 组件由 header body 和 footer组成。 header 和 footer是可选的"}),`
`,e.jsx(s,{name:"CardBasic",children:e.jsx(l,{})}),`
`,e.jsx(d.h2,{children:"简单卡片"}),`
`,e.jsx(d.p,{children:"卡片可以只有内容区域。"}),`
`,e.jsx(s,{name:"CardSimple",children:e.jsx(c,{})}),`
`,e.jsx(d.h2,{children:"有图片内容的卡片"}),`
`,e.jsx(d.p,{children:"可配置定义更丰富的内容展示。"}),`
`,e.jsx(d.p,{children:"配置 body-style 属性来自定义 body 部分的样式。 在这个例子中我们还使用了 Col 组件来布局。"}),`
`,e.jsx(s,{name:"CardBodyStyle",children:e.jsx(x,{})}),`
`,e.jsx(d.h2,{children:"带有阴影效果的卡片"}),`
`,e.jsx(d.p,{children:"你可以定义什么时候展示卡片的阴影效果。"}),`
`,e.jsx(d.p,{children:"通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。"}),`
`,e.jsx(s,{name:"CardShadow",children:e.jsx(a,{})}),`
`,e.jsx(d.h2,{children:"API"}),`
`,e.jsx(d.h3,{children:"Attributes"}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"属性名"}),e.jsx(d.th,{children:"说明"}),e.jsx(d.th,{children:"类型"}),e.jsx(d.th,{children:"默认值"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"header"}),e.jsx(d.td,{children:"卡片的标题"}),e.jsx(d.td,{children:"string | ReactNode"}),e.jsx(d.td,{children:"—"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"footer"}),e.jsx(d.td,{children:"卡片页脚"}),e.jsx(d.td,{children:"string | ReactNode"}),e.jsx(d.td,{children:"—"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"bodyStyle"}),e.jsx(d.td,{children:"body 的 CSS 样式"}),e.jsx(d.td,{children:"CSSProperties"}),e.jsx(d.td,{children:"—"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"bodyClass"}),e.jsx(d.td,{children:"body 的自定义类名"}),e.jsx(d.td,{children:"style | style[]"}),e.jsx(d.td,{children:"—"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"shadow"}),e.jsx(d.td,{children:"卡片阴影显示时机"}),e.jsx(d.td,{children:"CSSProperties"}),e.jsx(d.td,{children:"—"})]})]})]}),`
`,e.jsx(d.h2,{children:"贡献者"}),`
`,e.jsx(i,{path:"packages/Card/index.zh-CN.mdx"})]})}function p(n={}){const{wrapper:d}=n.components||{};return d?e.jsx(d,{...n,children:e.jsx(h,{...n})}):h(n)}export{p as default};
