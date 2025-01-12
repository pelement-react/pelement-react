import{j as e,B as o,aA as t,a4 as a}from"./index-BoH_1I5s.js";import{C as r}from"./CodeBlock-CP-Bxw1g.js";import{C as c}from"./Contributor-B9AchLV8.js";function l(){function s(){t.alert("This is a message","Title",{confirmButtonText:"OK",callback:n=>{alert(`action: ${n}`)}})}return e.jsx(e.Fragment,{children:e.jsx(o,{plain:!0,onClick:s,children:"Click to open the Message Box"})})}function x(){function s(){t.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",onConfirm:()=>{console.log("Delete completed")},onCancel:()=>{console.log("Delete canceled")}})}return e.jsx(e.Fragment,{children:e.jsx(o,{plain:!0,onClick:s,children:"Click to open the Message Box"})})}function h(){function s(){t.alert(e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Message can be "}),e.jsx("i",{style:{color:"teal"},children:"VNode"})]}),"Message")}function n(){t.alert(e.jsx(e.Fragment,{children:e.jsx(a,{defaultChecked:!0})}),"Message")}return e.jsxs(e.Fragment,{children:[e.jsx(o,{plain:!0,onClick:s,children:"Common VNode"}),e.jsx(o,{plain:!0,onClick:n,children:"Dynamic props"})]})}function i(s){const n={h1:"h1",h2:"h2",p:"p",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"MessageBox 消息弹框"}),`
`,`
`,e.jsx(n.h2,{children:"消息提示"}),`
`,e.jsx(n.p,{children:"当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。"}),`
`,e.jsx(n.p,{children:"调用 MessageBox.alert 方法以打开 alert 框。 它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。 此例中接收了两个参数，message和title。 值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。 若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。"}),`
`,e.jsx(r,{name:"MessageBoxBasic",children:e.jsx(l,{})}),`
`,e.jsx(n.h2,{children:"确认消息"}),`
`,e.jsx(n.p,{children:"提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。"}),`
`,e.jsx(n.p,{children:"调用 MessageBox.confirm 方法以打开 confirm 框。它模拟了系统的 confirm。 Message Box 组件也拥有极高的定制性，我们可以传入 options 作为第三个参数，它是一个字面量对象。 type 字段表明消息类型，可以为success，error，info和 warning，无效的设置将会被忽略。 需要注意的是，第二个参数 title 必须定义为 String 类型，如果是 Object，会被当做为 options使用。 在这里我们返回了一个 Promise 来处理后续响应。"}),`
`,e.jsx(r,{name:"MessageBoxConfirm",children:e.jsx(x,{})}),`
`,e.jsx(n.h2,{children:"使用 ReactNode"}),`
`,e.jsx(n.p,{children:"message 可以是 ReactNode"}),`
`,e.jsx(r,{name:"MessageBoxMessage",children:e.jsx(h,{})}),`
`,e.jsx(n.h2,{children:"贡献者"}),`
`,e.jsx(c,{path:"packages/MessageBox/index.zh-CN.mdx"})]})}function g(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{g as default};
