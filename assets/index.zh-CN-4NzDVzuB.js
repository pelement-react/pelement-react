import{j as e}from"./index-YfsbNJ80.js";import{T as s,R as d,b as r}from"./index-dN-V22sj.js";function l(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-text",children:[e.jsx(s,{className:"mx-1",children:"Default"}),e.jsx(s,{className:"mx-1",type:"primary",children:"Primary"}),e.jsx(s,{className:"mx-1",type:"success",children:"Success"}),e.jsx(s,{className:"mx-1",type:"info",children:"Info"}),e.jsx(s,{className:"mx-1",type:"warning",children:"Warning"}),e.jsx(s,{className:"mx-1",type:"danger",children:"Danger"})]})})}function i(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-text",children:[e.jsx(s,{className:"mx-1",size:"large",children:"Large"}),e.jsx(s,{className:"mx-1",children:"Default"}),e.jsx(s,{className:"mx-1",size:"small",children:"Small"})]})})}function x(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"common-text",children:[e.jsx(s,{className:"w-150px mb-2",truncated:!0,children:"Self element set width 100px"}),e.jsx(d,{className:"w-150px mb-2",children:e.jsx(s,{truncated:!0,children:"Squeezed by parent element"})}),e.jsxs(s,{lineClamp:2,children:["The -webkit-line-clamp CSS property",e.jsx("br",{}),"allows limiting of the contents of",e.jsx("br",{}),"a block to the specified number of lines."]})]})})}function t(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Text"}),`
`,`
`,e.jsx(n.p,{children:"文本的常见操作"}),`
`,e.jsx(n.h2,{children:"基础用法"}),`
`,e.jsxs(n.p,{children:["由 ",e.jsx(n.code,{children:"type"})," 属性来选择 Text 的类型。"]}),`
`,e.jsx(r,{name:"TextBasic",children:e.jsx(l,{})}),`
`,e.jsx(n.h2,{children:"尺寸"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"size"})," 属性配置尺寸，可选的尺寸大小有: ",e.jsx(n.code,{children:"large"}),", ",e.jsx(n.code,{children:"default"})," 或 ",e.jsx(n.code,{children:"small"})]}),`
`,e.jsx(r,{name:"TextSize",children:e.jsx(i,{})}),`
`,e.jsx(n.h2,{children:"省略"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"truncated"})," 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 ",e.jsx(n.code,{children:"line-clamp"})," 属性控制多行的样式"]}),`
`,e.jsx(r,{name:"TextTruncated",children:e.jsx(x,{})}),`
`,e.jsx(n.h2,{children:"API"}),`
`,e.jsx(n.h3,{children:"Attributes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性名"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"type"}),e.jsx(n.td,{children:"类型"}),e.jsx(n.td,{children:"'primary' / 'success' / 'warning' / 'danger' / 'info'"}),e.jsx(n.td,{children:"—"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"size"}),e.jsx(n.td,{children:"大小"}),e.jsx(n.td,{children:"'large' / 'default' / 'small'"}),e.jsx(n.td,{children:"default"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"truncated"}),e.jsx(n.td,{children:"显示省略号"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"lineClamp"}),e.jsx(n.td,{children:"最大行数"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"—"})]})]})]})]})}function j(c={}){const{wrapper:n}=c.components||{};return n?e.jsx(n,{...c,children:e.jsx(t,{...c})}):t(c)}export{j as default};
