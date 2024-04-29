import{j as n}from"./index-BRgxcaXn.js";import{C as o}from"./CodeBlock-CGFaTMI6.js";import{B as i,K as c}from"./index-GUx837jA.js";function r(){function e(){c.success("123")}return n.jsx(n.Fragment,{children:n.jsx(i,{plain:!0,onClick:e,children:"Show message"})})}function t(e){const s={h1:"h1",h2:"h2",p:"p",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{children:"Message 消息提示"}),`
`,`
`,n.jsx(s.p,{children:"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。"}),`
`,n.jsx(s.h2,{children:"基础用法"}),`
`,n.jsx(s.p,{children:"从顶部出现，3 秒后自动消失。"}),`
`,n.jsx(s.p,{children:"Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。"}),`
`,n.jsx(o,{name:"MessageBasic",children:n.jsx(r,{})})]})}function x(e={}){const{wrapper:s}=e.components||{};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t(e)}export{x as default};
