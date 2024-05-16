import{j as n}from"./index-B42nq6CR.js";import{C as s}from"./CodeBlock--wi6vc2m.js";import{B as i,X as o}from"./index-bf0oYNXs.js";function a(){function t(){o.open({title:"Title",message:n.jsx("i",{style:{color:"teal"},children:"This is a reminder"})})}function e(){o.open({title:"Prompt",message:"This is a message that does not automatically close",duration:0})}return n.jsxs(n.Fragment,{children:[n.jsx(i,{plain:!0,onClick:t,children:"Closes automatically"}),n.jsx(i,{plain:!0,onClick:e,children:"Won't close automatically"})]})}function p(){function t(){o.open({title:"Success",message:"This is a success message",type:"success"})}function e(){o.open({title:"Warning",message:"This is a warning message",type:"warning"})}function r(){o.open({title:"Info",message:"This is an info message",type:"info"})}function c(){o.open({title:"Error",message:"This is an error message",type:"error"})}return n.jsxs(n.Fragment,{children:[n.jsx(i,{plain:!0,onClick:t,children:"Success"}),n.jsx(i,{plain:!0,onClick:e,children:"Warning"}),n.jsx(i,{plain:!0,onClick:r,children:"Info"}),n.jsx(i,{plain:!0,onClick:c,children:"Error"})]})}function h(){function t(){o.open({title:"Custom Position",message:"I'm at the top right corner"})}function e(){o.open({title:"Custom Position",message:"I'm at the bottom right corner",position:"bottom-right"})}function r(){o.open({title:"Custom Position",message:"I'm at the bottom left corner",position:"bottom-left"})}function c(){o.open({title:"Custom Position",message:"I'm at the top left corner",position:"top-left"})}return n.jsxs(n.Fragment,{children:[n.jsx(i,{plain:!0,onClick:t,children:"Top Right"}),n.jsx(i,{plain:!0,onClick:e,children:"Bottom Right"}),n.jsx(i,{plain:!0,onClick:r,children:"Bottom Left"}),n.jsx(i,{plain:!0,onClick:c,children:"Top Left"})]})}function m(){function t(){o.open({title:"Info",message:"This is a message without close button",showClose:!1})}return n.jsx(n.Fragment,{children:n.jsx(i,{plain:!0,onClick:t,children:"Hide close button"})})}function l(t){const e={h1:"h1",h2:"h2",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Notification 通知"}),`
`,`
`,n.jsx(e.p,{children:"悬浮出现在页面角落，显示全局的通知提醒消息。"}),`
`,n.jsx(e.h2,{children:"基础用法"}),`
`,n.jsx(e.p,{children:"Element Plus 注册了 notification 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 duration 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。"}),`
`,n.jsx(s,{name:"NotificationBasic",children:n.jsx(a,{})}),`
`,n.jsx(e.h2,{children:"不同类型的通知"}),`
`,n.jsx(e.p,{children:"我们提供了四种不同类型的提醒框：success、warning、info 和error。"}),`
`,n.jsx(e.p,{children:"Element Plus 为 Notification 组件准备了四种通知类型：success, warning, info, error。 他们可以设置 type 字段来修改，除上述的四个值之外的值会被忽略。 同时，我们也为 Notification 的各种 type 注册了单独的方法，可以在不传入 type 字段的情况下像 open3 和 open4 那样直接调用。"}),`
`,n.jsx(s,{name:"NotificationType",children:n.jsx(p,{})}),`
`,n.jsx(e.h2,{children:"自定义消息弹出的位置"}),`
`,n.jsx(e.p,{children:"可以让 Notification 从屏幕四角中的任意一角弹出"}),`
`,n.jsx(e.p,{children:"使用 position 属性设置 Notification 的弹出位置， 支持四个选项：top-right、top-left、bottom-right 和 bottom-left， 默认为 top-right。"}),`
`,n.jsx(s,{name:"NotificationPosition",children:n.jsx(h,{})}),`
`,n.jsx(e.h2,{children:"隐藏关闭按钮"}),`
`,n.jsx(e.p,{children:"通知的关闭按钮可以被设置为隐藏。"}),`
`,n.jsx(e.p,{children:"将 showClose 属性设置为 false 即可隐藏关闭按钮。"}),`
`,n.jsx(s,{name:"NotificationShowClose",children:n.jsx(m,{})})]})}function x(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}export{x as default};
