import{r as l,j as e,_ as c,$ as F}from"./index-BoH_1I5s.js";import{C as u}from"./CodeBlock-CP-Bxw1g.js";import{C as G}from"./Contributor-B9AchLV8.js";function L(){const[s,n]=l.useState(!0),[t,h]=l.useState(!1),[o,i]=l.useState(!1),[d,x]=l.useState(!1),[C,b]=l.useState(!1),[j,k]=l.useState(!1),[p,g]=l.useState(!1),[f,m]=l.useState(!1);function v(a){n(a)}function O(a){h(a)}function S(a){i(a)}function B(a){x(a)}function z(a){b(a)}function V(a){k(a)}function D(a){g(a)}function A(a){m(a)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(c,{value:s,label:"Option 1",size:"large",onChange:v}),e.jsx(c,{value:t,label:"Option 2",size:"large",onChange:O})]}),e.jsxs("div",{children:[e.jsx(c,{value:o,label:"Option 1",onChange:S}),e.jsx(c,{value:d,label:"Option 2",onChange:B})]}),e.jsxs("div",{children:[e.jsx(c,{value:C,label:"Option 1",size:"small",onChange:z}),e.jsx(c,{value:j,label:"Option 2",size:"small",onChange:V})]}),e.jsxs("div",{children:[e.jsx(c,{value:p,label:"Option 1",size:"small",disabled:!0,onChange:D}),e.jsx(c,{value:f,label:"Option 2",size:"small",disabled:!0,onChange:A})]})]})}function M(){const[s,n]=l.useState(!1),[t,h]=l.useState(!0);function o(d){n(d)}function i(d){h(d)}return e.jsxs(e.Fragment,{children:[e.jsx(c,{value:s,disabled:!0,onChange:o,children:"Disabled"}),e.jsx(c,{value:t,onChange:i,children:"Not disabled"})]})}function _(){const s=[{label:"Option A",value:"Value A"},{label:"Option B",value:"Value B"},{label:"Option C",value:"Value C"},{label:"disabled",value:"Value disabled",disabled:!0},{label:"selected and disabled",value:"Value selected and disabled",disabled:!0}],[n,t]=l.useState(["Value selected and disabled","Value A"]);function h(o){t(o)}return e.jsx(e.Fragment,{children:e.jsx(F,{options:s,value:n,onChange:h})})}function r(s){const n={h1:"h1",h2:"h2",p:"p",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Checkbox 多选框"}),`
`,`
`,e.jsx(n.p,{children:"在一组备选项中进行多选。"}),`
`,e.jsx(n.h2,{children:"基础用法"}),`
`,e.jsx(n.p,{children:"单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。"}),`
`,e.jsx(n.p,{children:"checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 value 绑定 Array 类型的变量即可。 只有一个选项时的默认值类型为 Boolean，当选中时值为true。 Checkbox 标签中的内容将成为复选框按钮之后的描述。"}),`
`,e.jsx(u,{name:"CheckboxBasic",children:e.jsx(L,{})}),`
`,e.jsx(n.h2,{children:"禁用状态"}),`
`,e.jsx(n.p,{children:"多选框不可用状态。"}),`
`,e.jsx(n.p,{children:"设置 disabled 属性即可。"}),`
`,e.jsx(u,{name:"CheckboxDisabled",children:e.jsx(M,{})}),`
`,e.jsx(n.h2,{children:"多选框组"}),`
`,e.jsx(n.p,{children:"适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。"}),`
`,e.jsx(n.p,{children:"在 Checkbox 元素中定义 value 绑定变量，单一的 checkbox 中，默认绑定变量的值会是 Boolean，选中为 true。 在 Checkbox 组件中，value 是选择框的值。 如果该组件下没有被传入内容，那么 label 将会作为 checkbox 按钮后的介绍。 value 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。"}),`
`,e.jsx(u,{name:"CheckboxGroupBasic",children:e.jsx(_,{})}),`
`,e.jsx(n.h2,{children:"贡献者"}),`
`,e.jsx(G,{path:"packages/Checkbox/index.zh-CN.mdx"})]})}function X(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{X as default};
