import{j as n,a8 as i,B as s}from"./index-BnsErXRG.js";import{C as r}from"./CodeBlock-ByD7R5yk.js";function x(){return n.jsx(n.Fragment,{children:n.jsx(i,{offset:120,children:n.jsx(s,{type:"primary",children:"Offset top 120px"})})})}function h(){return n.jsx(n.Fragment,{children:n.jsx("div",{className:"affix-container",children:n.jsx(i,{target:".affix-container",offset:120,children:n.jsx(s,{type:"primary",children:"Target container"})})})})}function c(){return n.jsx(n.Fragment,{children:n.jsx(i,{position:"bottom",offset:150,children:n.jsx(s,{type:"primary",children:"Offset bottom 150px"})})})}function d(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{children:"Affix 固钉"}),`
`,`
`,n.jsx(t.p,{children:"将页面元素固定在特定可视区域。"}),`
`,n.jsx(t.h2,{children:"基础用法"}),`
`,n.jsx(t.p,{children:"固钉默认固定在页面顶部。"}),`
`,n.jsx(t.p,{children:"通过设置 offset 属性来改变吸顶距离，默认值为 0。"}),`
`,n.jsx(r,{name:"AffixBasic",children:n.jsx(x,{})}),`
`,n.jsx(t.h2,{children:"指定容器"}),`
`,n.jsx(t.p,{children:"通过设置 target 属性，让固钉始终保持在容器内， 超过范围则隐藏。"}),`
`,n.jsx(t.p,{children:"请注意容器避免出现滚动条。"}),`
`,n.jsx(r,{name:"AffixTarget",children:n.jsx(h,{})}),`
`,n.jsx(t.h2,{children:"固定位置"}),`
`,n.jsx(t.p,{children:"Affix 组件提供 2 个固定的位置参数 top 和 bottom。"}),`
`,n.jsx(t.p,{children:"通过设置 position 属性来改变固定位置，默认值为 top 。"}),`
`,n.jsx(r,{name:"AffixPosition",children:n.jsx(c,{})}),`
`,n.jsx(t.h2,{children:"API"}),`
`,n.jsx(t.h3,{children:"属性"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"属性名"}),n.jsx(t.th,{children:"说明"}),n.jsx(t.th,{children:"类型"}),n.jsx(t.th,{children:"默认值"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"offset"}),n.jsx(t.td,{children:"偏移距离"}),n.jsx(t.td,{children:"number"}),n.jsx(t.td,{children:"0"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"position"}),n.jsx(t.td,{children:"固钉位置"}),n.jsx(t.td,{children:"'top' | 'bottom'"}),n.jsx(t.td,{children:"top"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"target"}),n.jsx(t.td,{children:"指定容器（CSS 选择器）"}),n.jsx(t.td,{children:"string"}),n.jsx(t.td,{children:"—"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"zIndex"}),n.jsx(t.td,{children:"z-index"}),n.jsx(t.td,{children:"number"}),n.jsx(t.td,{children:"100"})]})]})]})]})}function o(e={}){const{wrapper:t}=e.components||{};return t?n.jsx(t,{...e,children:n.jsx(d,{...e})}):d(e)}export{o as default};
