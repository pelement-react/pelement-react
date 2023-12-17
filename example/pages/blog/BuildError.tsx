import buildError001 from '../../assets/build-error-001.jpg'
import buildError002 from '../../assets/build-error-002.jpg'

function BuildError() {
  return (
    <>
      <h1>build 构建打包时报错：Could not find a declaration file for module 'pelement-react'.</h1>
      <p>引入pelement-react，构建生产包的时候，报错如下</p>
      <img src={buildError001} alt="build-error-001" />
      <p>错误代码</p>
      <p>
        example/pages/component/button/Button.tsx:2:24 - error TS7016: Could not find a declaration file for module 'pelement-react'. 'D:/work/pelement-react/node_modules/.pnpm/file+pelement-react-0.0.1-alpha.0.tgz/node_modules/pelement-react/dist/pelement-react.js' implicitly has an 'any' type.
        There are types at 'D:/work/pelement-react/node_modules/pelement-react/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'pelement-react' library may need to update its package.json or typings.
      </p>
      <p>解决方法：</p>
      <p>修改tsconfig.json文件，追加以下内容</p>
      <p>"noImplicitAny": false,</p>
      <p>"allowJs": true</p>
      <img src={buildError002} alt="build-error-002" />
    </>
  )
}

export default BuildError