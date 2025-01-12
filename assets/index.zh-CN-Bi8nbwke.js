import{j as e,X as r,B as s,Y as t}from"./index-BoH_1I5s.js";import{C as d}from"./CodeBlock-CP-Bxw1g.js";import{C as p}from"./Contributor-B9AchLV8.js";function h(){return e.jsx(e.Fragment,{children:e.jsx(r,{wrap:!0,children:[1,2,3].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))})})}function c(){return e.jsx(e.Fragment,{children:e.jsx(r,{direction:"vertical",children:[1,2,3].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))})})}function l(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{wrap:!0,size:"large",children:[1,2].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))}),e.jsx(r,{wrap:!0,size:"default",children:[1,2].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))}),e.jsx(r,{wrap:!0,size:"small",children:[1,2].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))})]})}function a(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{wrap:!0,size:0,children:[1,2].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))}),e.jsx(r,{wrap:!0,size:50,children:[1,2].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))}),e.jsx(r,{wrap:!0,size:100,children:[1,2].map((i,n)=>e.jsx("div",{style:{width:"250px",height:"50px",border:"1px solid #e4e7ed",padding:"20px"},children:i},n))})]})}function j(){return e.jsx(e.Fragment,{children:e.jsx(r,{wrap:!0,children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((i,n)=>e.jsx("div",{children:e.jsxs(s,{text:!0,children:[" Text button ",i," "]})},n))})})}function o(){return e.jsx(e.Fragment,{children:e.jsxs(r,{size:10,spacer:"|",children:[e.jsx(s,{children:" button 1 "}),e.jsx(s,{children:" button 2 "})]})})}function m(){return e.jsx(e.Fragment,{children:e.jsxs(r,{size:10,spacer:e.jsx(t,{direction:"vertical"}),children:[e.jsx(s,{children:" button 1 "}),e.jsx(s,{children:" button 2 "})]})})}function g(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px",marginBottom:"10px"},children:e.jsxs(r,{children:["string",e.jsx(s,{children:" button "}),e.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"1"})]})}),e.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px",marginBottom:"10px"},children:e.jsxs(r,{alignment:"flex-start",children:["string",e.jsx(s,{children:" button "}),e.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"2"})]})}),e.jsx("div",{style:{width:"250px",height:"70px",border:"1px solid #e4e7ed",padding:"10px"},children:e.jsxs(r,{alignment:"flex-end",children:["string",e.jsx(s,{children:" button "}),e.jsx("div",{style:{height:"70px",border:"1px solid #e4e7ed",padding:"0 10px"},children:"3"})]})})]})}function x(i){const n={h1:"h1",h2:"h2",p:"p",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Space 间距"}),`
`,`
`,e.jsx(n.p,{children:"虽然我们拥有 Divider 组件，但很多时候我们需要不是一个被 Divider 组件 分割开的页面结构，因此我们会重复的使用很多的 Divider 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。"}),`
`,e.jsx(n.h2,{children:"基础用法"}),`
`,e.jsx(n.p,{children:"最基础的用法，通过这个组件来给组件之间提供统一的间距。"}),`
`,e.jsx(n.p,{children:"通过间距组件来给多个组件之间提供间距"}),`
`,e.jsx(d,{name:"SpaceBasic",children:e.jsx(h,{})}),`
`,e.jsx(n.h2,{children:"垂直布局"}),`
`,e.jsx(n.p,{children:"使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制."}),`
`,e.jsx(n.p,{children:"我们也提供垂直布局方式。"}),`
`,e.jsx(d,{name:"SpaceDirection",children:e.jsx(c,{})}),`
`,e.jsx(n.h2,{children:"控制间距的大小"}),`
`,e.jsx(n.p,{children:"通过调整 size 的值来控制间距的大小"}),`
`,e.jsx(n.p,{children:"使用内置的 small、default、large 来设置间距大小，分别对应 8px、12px 和 16px 的间距。 默认的间距大小为 small，也就是 8px。"}),`
`,e.jsx(n.p,{children:"您也可以通过自定义的 size 来控制大小， 参见下一个部分。"}),`
`,e.jsx(d,{name:"SpaceSize",children:e.jsx(l,{})}),`
`,e.jsx(n.h2,{children:"自定义 Size"}),`
`,e.jsx(n.p,{children:"很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。"}),`
`,e.jsx(d,{name:"SpaceSize2",children:e.jsx(a,{})}),`
`,e.jsx(n.h2,{children:"自动换行"}),`
`,e.jsx(n.p,{children:"在 **水平 (horizontal) ** 模式下，通过使用 wrap（布尔类型）来控制自动换行行为。"}),`
`,e.jsx(n.p,{children:"利用 wrap 属性控制换行"}),`
`,e.jsx(d,{name:"SpaceWrap",children:e.jsx(j,{})}),`
`,e.jsx(n.h2,{children:"行间分隔符"}),`
`,e.jsx(n.p,{children:"有时候，仅仅在行间加空白并不能满足我们的日常需求，此时分隔符 (spacer) 就可以发挥非常好的作用了。"}),`
`,e.jsx(n.h2,{children:"字母数字类型分隔符"}),`
`,e.jsx(d,{name:"SpaceSpacer",children:e.jsx(o,{})}),`
`,e.jsx(n.h2,{children:"分隔符还可以是 ReactNode 类型"}),`
`,e.jsx(d,{name:"SpaceSpacer2",children:e.jsx(m,{})}),`
`,e.jsx(n.h2,{children:"对齐方式"}),`
`,e.jsx(n.p,{children:"设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items 一致。"}),`
`,e.jsx(n.p,{children:"使用 alignment 属性来对齐"}),`
`,e.jsx(d,{name:"SpaceAlignment",children:e.jsx(g,{})}),`
`,e.jsx(n.h2,{children:"贡献者"}),`
`,e.jsx(p,{path:"packages/Space/index.zh-CN.mdx"})]})}function w(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(x,{...i})}):x(i)}export{w as default};
