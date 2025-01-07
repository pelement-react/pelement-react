import { useEffect, useRef, useState } from 'react'
import './CodeBlock.scss'
import hljs from 'highlight.js/lib/core'
// 导入需要的语言高亮
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
import 'highlight.js/styles/stackoverflow-light.css'


function CodeBlock({ language = 'javascript', name, children }) {
  const preRef = useRef(null)
  // 展开收起
  const [expand, setExpand] = useState(false)
  // example源码
  const [code, setCode] = useState('')

  // 获取所有example的源码文件
  const demoFiles = import.meta.glob(`../../../packages/*/_example/*.tsx`, { as: 'raw', eager: true })

  // 样式
  let fullStyle = { display: expand ? '' : 'none' }

  useEffect(() => {
    if (preRef.current) {
      Object.keys(demoFiles).forEach((key) => {
        // 根据name获取当前code的源码文件
        if (key.indexOf(name) !== -1) {
          setCode(demoFiles[key])
        }
      })
      setTimeout(() => {
        hljs.highlightElement(preRef.current!)
      }, 0)
    }
  }, [name])

  // 展开收起代码
  function triggerExpand() {
    setExpand(!expand)
  }

  return (
    <>
      <div className="code-block">
        <div className="code-block-component">
          {children}
        </div>
        <div className="op-btns">
          <button onClick={triggerExpand} className="reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger">
            <i className="el-icon" style={{ fontSize: "16px" }}>
              <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-5d9e4641="">
                <path fill="currentColor" d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"></path>
              </svg>
            </i>
          </button>
        </div>
        <div className="code-block-wrapper" style={fullStyle}>
          <div className="code-block-pre language-react">
            <pre>
              <code id={language} ref={preRef} className={language}>
                {code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default CodeBlock