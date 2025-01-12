import{j as e,B as i,m as r}from"./index-BoH_1I5s.js";import{C as a}from"./CodeBlock-CP-Bxw1g.js";import{C as l}from"./Contributor-B9AchLV8.js";function p(){let n=0;function s(){n++,r.success(`This is a message.${n}`)}function o(){n++,r.success(e.jsxs(e.Fragment,{children:["This is a ",e.jsx("span",{style:{color:"teal"},children:"message"}),".",n]}))}return e.jsxs(e.Fragment,{children:[e.jsx(i,{plain:!0,onClick:s,children:"Show message"}),e.jsx(i,{plain:!0,onClick:o,children:"ReactNode"})]})}function h(){const n=()=>{r.info("This is a message.")},s=()=>{r.success("Congrats, this is a success message.")},o=()=>{r.warning("Warning, this is a warning message.")},t=()=>{r.error("Oops, this is a error message.")};return e.jsxs(e.Fragment,{children:[e.jsx(i,{plain:!0,onClick:s,children:"Success"}),e.jsx(i,{plain:!0,onClick:o,children:"Warning"}),e.jsx(i,{plain:!0,onClick:n,children:"Message"}),e.jsx(i,{plain:!0,onClick:t,children:"Error"})]})}function g(){const n=()=>{r.open({message:"This is a message.",type:"info",plain:!0})},s=()=>{r.open({message:"Congrats, this is a success message.",type:"success",plain:!0})},o=()=>{r.open({message:"Warning, this is a warning message.",type:"warning",plain:!0})},t=()=>{r.open({message:"Oops, this is a error message.",type:"error",plain:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(i,{plain:!0,onClick:s,children:"Success"}),e.jsx(i,{plain:!0,onClick:o,children:"Warning"}),e.jsx(i,{plain:!0,onClick:n,children:"Message"}),e.jsx(i,{plain:!0,onClick:t,children:"Error"})]})}function x(){const n=()=>{r.open({message:"This is a message.",type:"info",showClose:!0})},s=()=>{r.open({message:"Congrats, this is a success message.",type:"success",showClose:!0})},o=()=>{r.open({message:"Warning, this is a warning message.",type:"warning",showClose:!0})},t=()=>{r.open({message:"Oops, this is a error message.",type:"error",showClose:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(i,{plain:!0,onClick:s,children:"Success"}),e.jsx(i,{plain:!0,onClick:o,children:"Warning"}),e.jsx(i,{plain:!0,onClick:n,children:"Message"}),e.jsx(i,{plain:!0,onClick:t,children:"Error"})]})}function u(){const n=()=>{r.open({message:"Centered text",type:"info",center:!0})};return e.jsx(e.Fragment,{children:e.jsx(i,{plain:!0,onClick:n,children:"Centered text"})})}function c(n){const s={h1:"h1",h2:"h2",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Message 消息提示"}),`
`,`
`,e.jsx(s.p,{children:"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。"}),`
`,e.jsx(s.h2,{children:"基础用法"}),`
`,e.jsx(s.p,{children:"从顶部出现，3 秒后自动消失。"}),`
`,e.jsx(s.p,{children:"Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。"}),`
`,e.jsx(a,{name:"MessageBasic",children:e.jsx(p,{})}),`
`,e.jsx(s.h2,{children:"不同状态"}),`
`,e.jsx(s.p,{children:"用来显示「成功、警告、消息、错误」类的操作反馈。"}),`
`,e.jsx(s.p,{children:"当需要自定义更多属性时，message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为info。 此时正文内容以 message 的值传入。 同时，我们也为 message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 open4 那样直接调用。"}),`
`,e.jsx(a,{name:"MessageType",children:e.jsx(h,{})}),`
`,e.jsx(s.h2,{children:"Plain"}),`
`,e.jsx(s.p,{children:"设置 plain 为 plain 背景。"}),`
`,e.jsx(a,{name:"MessagePlain",children:e.jsx(g,{})}),`
`,e.jsx(s.h2,{children:"可关闭的消息提示"}),`
`,e.jsx(s.p,{children:"可以添加关闭按钮。"}),`
`,e.jsx(s.p,{children:"默认的 message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true 此外，和 Notification 一样，Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。"}),`
`,e.jsx(a,{name:"MessageShowClose",children:e.jsx(x,{})}),`
`,e.jsx(s.h2,{children:"文字居中"}),`
`,e.jsx(s.p,{children:"使用 center 属性让文字水平居中。"}),`
`,e.jsx(a,{name:"MessageCenter",children:e.jsx(u,{})}),`
`,e.jsx(s.h2,{children:"贡献者"}),`
`,e.jsx(l,{path:"packages/Message/index.zh-CN.mdx"})]})}function C(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(c,{...n})}):c(n)}export{C as default};
