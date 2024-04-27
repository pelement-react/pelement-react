import{j as e}from"./index-YfsbNJ80.js";import{z as l,R as i,b as r}from"./index-dN-V22sj.js";function o(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Tag 1"}),e.jsx(l,{className:"ml-2",type:"success",children:"Tag 2"}),e.jsx(l,{className:"ml-2",type:"info",children:"Tag 3"}),e.jsx(l,{className:"ml-2",type:"warning",children:"Tag 4"}),e.jsx(l,{className:"ml-2",type:"danger",children:"Tag 5"})]})}function m(){const a=[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}].map(s=>e.jsx(l,{className:"mx-1",closable:!0,type:s.type,children:s.name}));return e.jsx(e.Fragment,{children:a})}function p(){return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(l,{className:"mx-1",size:"large",children:"Large"}),e.jsx(l,{className:"mx-1",children:"Default"}),e.jsx(l,{className:"mx-1",size:"small",children:"Small"})]}),e.jsxs(i,{className:"mt-4",children:[e.jsx(l,{className:"mx-1",size:"large",closable:!0,children:"Large"}),e.jsx(l,{className:"mx-1",closable:!0,children:"Default"}),e.jsx(l,{className:"mx-1",size:"small",closable:!0,children:"Small"})]})]})}function g(){const a=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],s=a.map(n=>e.jsx(l,{type:n.type,className:"mx-1",effect:"dark",children:n.label})),t=a.map(n=>e.jsx(l,{type:n.type,className:"mx-1",effect:"dark",closable:!0,children:n.label})),d=a.map(n=>e.jsx(l,{type:n.type,className:"mx-1",effect:"light",children:n.label})),c=a.map(n=>e.jsx(l,{type:n.type,className:"mx-1",effect:"light",closable:!0,children:n.label})),h=a.map(n=>e.jsx(l,{type:n.type,className:"mx-1",effect:"plain",children:n.label})),j=a.map(n=>e.jsx(l,{type:n.type,className:"mx-1",effect:"plain",closable:!0,children:n.label}));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[e.jsx("span",{className:"tag-group__title m-1 line-height-2",children:"Dark"}),s,t]}),e.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[e.jsx("span",{className:"tag-group__title m-1",children:"Light"}),d,c]}),e.jsxs("div",{className:"tag-group my-2 flex flex-wrap gap-1 items-center",children:[e.jsx("span",{className:"tag-group__title m-1",children:"Plain"}),h,j]})]})}function f(){const a=[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}],s=a.map(c=>e.jsx(l,{type:c.type,className:"mx-1",effect:"dark",round:!0,children:c.label})),t=a.map(c=>e.jsx(l,{type:c.type,className:"mx-1",effect:"light",round:!0,children:c.label})),d=a.map(c=>e.jsx(l,{type:c.type,className:"mx-1",effect:"plain",round:!0,children:c.label}));return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:s}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t}),e.jsx("div",{className:"flex flex-wrap gap-2 my-2",children:d})]})}function x(a){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Tag 标签"}),`
`,`
`,e.jsx(s.p,{children:"用于标记和选择。"}),`
`,e.jsx(s.h2,{children:"基础用法"}),`
`,e.jsxs(s.p,{children:["由 ",e.jsx(s.code,{children:"type"})," 属性来选择 tag 的类型。 也可以通过 ",e.jsx(s.code,{children:"color"})," 属性来自定义背景色。"]}),`
`,e.jsx(r,{name:"TagBasic",children:e.jsx(o,{})}),`
`,e.jsx(s.h2,{children:"可移除标签"}),`
`,e.jsxs(s.p,{children:["设置 ",e.jsx(s.code,{children:"closable"})," 属性可以定义一个标签是否可移除。 它接受一个 ",e.jsx(s.code,{children:"Boolean"}),"。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 ",e.jsx(s.code,{children:"disable-transitions"})," 属性，它接受一个 ",e.jsx(s.code,{children:"Boolean"}),"，",e.jsx(s.code,{children:"true"})," 为关闭。 当 Tag 被移除时会触发 ",e.jsx(s.code,{children:"close"})," 事件。"]}),`
`,e.jsx(r,{name:"TagClosable",children:e.jsx(m,{})}),`
`,e.jsx(s.h2,{children:"不同尺寸"}),`
`,e.jsx(s.p,{children:"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"}),`
`,e.jsxs(s.p,{children:["使用 ",e.jsx(s.code,{children:"size"})," 属性来设置额外尺寸, 可选值包括 ",e.jsx(s.code,{children:"large"}),", ",e.jsx(s.code,{children:"default"})," 或 ",e.jsx(s.code,{children:"small"}),"."]}),`
`,e.jsx(r,{name:"TagSize",children:e.jsx(p,{})}),`
`,e.jsx(s.h2,{children:"主题"}),`
`,e.jsxs(s.p,{children:["Tag 组件提供了三个不同的主题：",e.jsx(s.code,{children:"dark"}),"、",e.jsx(s.code,{children:"light"})," 和 ",e.jsx(s.code,{children:"plain"}),"。"]}),`
`,e.jsxs(s.p,{children:["通过设置 effect 属性来改变主题，默认为 ",e.jsx(s.code,{children:"light"}),"。"]}),`
`,e.jsx(r,{name:"TagEffect",children:e.jsx(g,{})}),`
`,e.jsx(s.h2,{children:"圆形标签"}),`
`,e.jsx(s.p,{children:"Tag 可以向按钮组件一样变为完全圆形。"}),`
`,e.jsx(r,{name:"TagRound",children:e.jsx(f,{})}),`
`,e.jsx(s.h2,{children:"API"}),`
`,e.jsx(s.h3,{children:"Attributes"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"属性名"}),e.jsx(s.th,{children:"说明"}),e.jsx(s.th,{children:"类型"}),e.jsx(s.th,{children:"默认值"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"type"}),e.jsx(s.td,{children:"Tag 的类型"}),e.jsx(s.td,{children:"'success' | 'info' | 'warning' | 'danger' | ''"}),e.jsx(s.td,{children:"''"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"closable"}),e.jsx(s.td,{children:"是否可关闭"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"size"}),e.jsx(s.td,{children:"Tag 的尺寸"}),e.jsx(s.td,{children:"'large' | 'default' | 'small' | ''"}),e.jsx(s.td,{children:"''"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"effect"}),e.jsx(s.td,{children:"Tag 的主题"}),e.jsx(s.td,{children:"'dark' | 'light' | 'plain'"}),e.jsx(s.td,{children:"light"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"round"}),e.jsx(s.td,{children:"Tag 是否为圆形"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"})]})]})]})]})}function b(a={}){const{wrapper:s}=a.components||{};return s?e.jsx(s,{...a,children:e.jsx(x,{...a})}):x(a)}export{b as default};
