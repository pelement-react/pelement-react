import{j as e}from"./index-BoH_1I5s.js";const o="/pelement-react/assets/build-error-001-cEjvXrO9.jpg",l="/pelement-react/assets/build-error-002-B-Dvn9bJ.jpg";function r(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"build 构建打包时报错：Could not find a declaration file for module 'pelement-react'."}),`
`,e.jsx(n.p,{children:"引入pelement-react，构建生产包的时候，报错如下"}),`
`,e.jsx("img",{src:o,alt:"build-error-001"}),`
`,e.jsx(n.p,{children:"错误代码"}),`
`,e.jsx(n.p,{children:`docs/pages/component/button/Button.tsx:2:24 - error TS7016: Could not find a declaration file for module 'pelement-react'. 'D:/work/pelement-react/node_modules/.pnpm/file+pelement-react-0.0.1-alpha.0.tgz/node_modules/pelement-react/dist/pelement-react.js' implicitly has an 'any' type.
There are types at 'D:/work/pelement-react/node_modules/pelement-react/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'pelement-react' library may need to update its package.json or typings.`}),`
`,e.jsx(n.p,{children:"解决方法："}),`
`,e.jsx(n.p,{children:"修改tsconfig.json文件，追加以下内容"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`"noImplicitAny": false,
"allowJs": true
`})}),`
`,e.jsx("img",{src:l,alt:"build-error-002"})]})}function a(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default};
