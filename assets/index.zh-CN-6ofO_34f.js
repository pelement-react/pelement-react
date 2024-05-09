import{r,j as e}from"./index-DIIGOxAk.js";import{C as h}from"./CodeBlock-CPu3gHJB.js";import{B as t,K as d,g as j}from"./index-CcOQ2jQ0.js";function u(){const[s,n]=r.useState(!1);function i(){n(!0)}function l(){n(!1)}function o(){n(!1)}function a(){n(!1)}function c(){return e.jsx(e.Fragment,{children:e.jsxs("span",{className:"dialog-footer",children:[e.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button",onClick:o,children:e.jsx("span",{className:"",children:"Cancel"})}),e.jsx("button",{"aria-disabled":"false",type:"button",className:"el-button el-button--primary",onClick:a,children:e.jsx("span",{className:"",children:" Confirm "})})]})})}return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:!0,onClick:i,children:"click to open the Dialog"}),e.jsx(d,{open:s,title:"Tips",width:"30%",onClose:l,footer:e.jsx(c,{}),children:e.jsx("span",{children:"This is a message"})})]})}function m(){const[s,n]=r.useState(!1),[i,l]=r.useState(!1);function o(){n(!0)}function a(){l(!0)}function c(){return e.jsx(e.Fragment,{children:e.jsxs("span",{className:"dialog-footer",children:[e.jsx(t,{onClick:()=>{l(!1)},children:"Cancel"}),e.jsx(t,{type:"primary",onClick:()=>{l(!1)},children:"Confirm"})]})})}return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:!0,onClick:o,children:"open a Table nested Dialog"}),e.jsx(d,{open:s,title:"Shipping address",onClose:()=>{n(!1)},children:"Table组件"}),e.jsx(t,{text:!0,onClick:a,children:"open a Form nested Dialog"}),e.jsx(d,{open:i,title:"Shipping address",footer:e.jsx(c,{}),onClose:()=>{l(!1)},children:"Form 表单"})]})}function f(){const[s,n]=r.useState(!1);function i(){n(!1)}function l(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"dialog-header",children:[e.jsx("h4",{className:"el-dialog__title",children:"This is a custom header!"}),e.jsxs(t,{type:"danger",onClick:i,children:[e.jsx(j,{}),"Close"]})]})})}return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog with customized header"}),e.jsx(d,{open:s,showClose:!1,header:e.jsx(l,{}),onClose:i,children:"This is dialog content."})]})}function x(s){const n={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Dialog 对话框"}),`
`,`
`,e.jsx(n.p,{children:"在保留当前页面状态的情况下，告知用户并承载相关操作。"}),`
`,e.jsx(n.h2,{children:"基础用法"}),`
`,e.jsx(n.p,{children:"Dialog 弹出一个对话框，适合需要定制性更大的场景。"}),`
`,e.jsx(h,{name:"DialogBasic",children:e.jsx(u,{})}),`
`,e.jsx(n.h2,{children:"自定义内容"}),`
`,e.jsx(n.p,{children:"对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。"}),`
`,e.jsx(h,{name:"DialogContent",children:e.jsx(m,{})}),`
`,e.jsx(n.h2,{children:"自定义头部"}),`
`,e.jsx(n.p,{children:"header 可用于自定义显示标题的区域。"}),`
`,e.jsx(h,{name:"DialogHeader",children:e.jsx(f,{})}),`
`,e.jsx(n.h2,{children:"API"}),`
`,e.jsx(n.h3,{children:"Attributes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性名"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"open"}),e.jsx(n.td,{children:"是否显示 Dialog"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:"Dialog 对话框 Dialog 的标题"}),e.jsx(n.td,{children:"string | ReactNode"}),e.jsx(n.td,{children:"''"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"width"}),e.jsx(n.td,{children:"对话框的宽度，默认值为 50%"}),e.jsx(n.td,{children:"string | number"}),e.jsx(n.td,{children:"''"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"showClose"}),e.jsx(n.td,{children:"是否显示关闭按钮"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"true"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"footer"}),e.jsx(n.td,{children:"footer"}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"onClose"}),e.jsx(n.td,{children:"点击遮罩层或右上角叉的回调"}),e.jsx(n.td,{children:"() => void"}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"header"}),e.jsx(n.td,{children:"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。"}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"—"})]})]})]})]})}function b(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(x,{...s})}):x(s)}export{b as default};