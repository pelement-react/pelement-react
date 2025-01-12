import{j as e,av as r}from"./index-BoH_1I5s.js";import{C as s}from"./CodeBlock-CP-Bxw1g.js";import{C as l}from"./Contributor-B9AchLV8.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"success alert",type:"success"}),e.jsx(r,{title:"info alert",type:"info"}),e.jsx(r,{title:"warning alert",type:"warning"}),e.jsx(r,{title:"error alert",type:"error"})]})}function d(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"success alert",type:"success",effect:"dark"}),e.jsx(r,{title:"info alert",type:"info",effect:"dark"}),e.jsx(r,{title:"warning alert",type:"warning",effect:"dark"}),e.jsx(r,{title:"error alert",type:"error",effect:"dark"})]})}function h(){function n(){alert("Hello World!")}return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"unclosable alert",type:"success",closable:!1}),e.jsx(r,{title:"customized close-text",type:"info",closeText:"Gotcha"}),e.jsx(r,{title:"alert with callback",type:"warning",close:n})]})}function x(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"success alert",type:"success",showIcon:!0}),e.jsx(r,{title:"info alert",type:"info",showIcon:!0}),e.jsx(r,{title:"warning alert",type:"warning",showIcon:!0}),e.jsx(r,{title:"error alert",type:"error",showIcon:!0})]})}function o(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"success alert",type:"success",center:!0,showIcon:!0}),e.jsx(r,{title:"info alert",type:"info",center:!0,showIcon:!0}),e.jsx(r,{title:"warning alert",type:"warning",center:!0,showIcon:!0}),e.jsx(r,{title:"error alert",type:"error",center:!0,showIcon:!0})]})}function j(){return e.jsx(e.Fragment,{children:e.jsx(r,{title:"with description",type:"success",description:"This is a description."})})}function a(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"success alert",type:"success",description:"more text description",showIcon:!0}),e.jsx(r,{title:"info alert",type:"info",description:"more text description",showIcon:!0}),e.jsx(r,{title:"warning alert",type:"warning",description:"more text description",showIcon:!0}),e.jsx(r,{title:"error alert",type:"error",description:"more text description",showIcon:!0})]})}function c(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Alert 提示"}),`
`,`
`,e.jsx(t.p,{children:"用于页面中展示重要的提示信息。"}),`
`,e.jsx(t.h2,{children:"基础用法"}),`
`,e.jsx(t.p,{children:"Alert 组件不属于浮层元素，不会自动消失或关闭。"}),`
`,e.jsxs(t.p,{children:["Alert 组件提供四种类型，由 ",e.jsx(t.code,{children:"type"})," 属性指定，默认值为 ",e.jsx(t.code,{children:"info"}),"。"]}),`
`,e.jsx(s,{name:"AlertBasic",children:e.jsx(i,{})}),`
`,e.jsx(t.h2,{children:"主题"}),`
`,e.jsxs(t.p,{children:["Alert 组件提供了两个不同的主题：",e.jsx(t.code,{children:"light"})," 和 ",e.jsx(t.code,{children:"dark"}),"。"]}),`
`,e.jsxs(t.p,{children:["通过设置 ",e.jsx(t.code,{children:"effect"})," 属性来改变主题，默认为 ",e.jsx(t.code,{children:"light"}),"。"]}),`
`,e.jsx(s,{name:"AlertEffect",children:e.jsx(d,{})}),`
`,e.jsx(t.h2,{children:"自定义关闭按钮"}),`
`,e.jsx(t.p,{children:"你可以自定义关闭按钮为文字或其他符号。"}),`
`,e.jsxs(t.p,{children:["你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 ",e.jsx(t.code,{children:"closable"})," 属性决定 Alert 组件是否可关闭， 该属性接受一个 ",e.jsx(t.code,{children:"Boolean"}),"，默认为 ",e.jsx(t.code,{children:"false"}),"。 你可以设置 ",e.jsx(t.code,{children:"closeText"})," 属性来代替右侧的关闭图标， 需要注意的是 ",e.jsx(t.code,{children:"closeText"})," 必须是一个字符串。 当 Alert 组件被关闭时会触发 ",e.jsx(t.code,{children:"close"})," 事件。"]}),`
`,e.jsx(s,{name:"AlertClose",children:e.jsx(h,{})}),`
`,e.jsx(t.h2,{children:"使用图标"}),`
`,e.jsx(t.p,{children:"你可以通过为 Alert 组件添加图标来提高可读性。"}),`
`,e.jsxs(t.p,{children:["通过设置 ",e.jsx(t.code,{children:"showIcon"})," 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"]}),`
`,e.jsx(s,{name:"AlertShowIcon",children:e.jsx(x,{})}),`
`,e.jsx(t.h2,{children:"文字居中"}),`
`,e.jsxs(t.p,{children:["使用 ",e.jsx(t.code,{children:"center"})," 属性来让文字水平居中。"]}),`
`,e.jsx(s,{name:"AlertCenter",children:e.jsx(o,{})}),`
`,e.jsx(t.h2,{children:"文字描述"}),`
`,e.jsx(t.p,{children:"为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。"}),`
`,e.jsxs(t.p,{children:["除了必填的 ",e.jsx(t.code,{children:"title"})," 属性外，你可以设置 ",e.jsx(t.code,{children:"description"})," 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"]}),`
`,e.jsx(s,{name:"AlertDescription",children:e.jsx(j,{})}),`
`,e.jsx(t.h2,{children:"带图标和描述"}),`
`,e.jsx(t.p,{children:"在最后, 这是一个带有图标和描述的例子。"}),`
`,e.jsx(s,{name:"AlertIconDescription",children:e.jsx(a,{})}),`
`,e.jsx(t.h2,{children:"Alert API"}),`
`,e.jsx(t.h3,{children:"Attributes"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"属性名"}),e.jsx(t.th,{children:"说明"}),e.jsx(t.th,{children:"类型"}),e.jsx(t.th,{children:"默认值"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"title"}),e.jsx(t.td,{children:"Alert 标题。"}),e.jsx(t.td,{children:"string"}),e.jsx(t.td,{children:"—"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"type"}),e.jsx(t.td,{children:"Alert 类型。"}),e.jsx(t.td,{children:"'success' / 'warning' / 'info' / 'error'"}),e.jsx(t.td,{children:"info"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"description"}),e.jsx(t.td,{children:"描述性文本"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"—"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"closable"}),e.jsx(t.td,{children:"是否可以关闭"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"true"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"center"}),e.jsx(t.td,{children:"文字是否居中"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"closeText"}),e.jsx(t.td,{children:"自定义关闭按钮文本"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"—"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"showIcon"}),e.jsx(t.td,{children:"是否显示类型图标"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"effect"}),e.jsx(t.td,{children:"主题样式"}),e.jsx(t.td,{children:"'light' / 'dark'"}),e.jsx(t.td,{children:"light"})]})]})]}),`
`,e.jsx(t.h3,{children:"Events"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"名称"}),e.jsx(t.th,{children:"描述"}),e.jsx(t.th,{children:"类型"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"close"}),e.jsx(t.td,{children:"关闭 Alert 时触发的事件"}),e.jsx(t.td,{children:"(event: MouseEvent) => void"})]})})]}),`
`,e.jsx(t.h2,{children:"贡献者"}),`
`,e.jsx(l,{path:"packages/Alert/index.zh-CN.mdx"})]})}function m(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{m as default};
