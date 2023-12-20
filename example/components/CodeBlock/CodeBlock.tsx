import { useEffect, useRef, useState } from 'react'
import './CodeBlock.scss'
import hljs from 'highlight.js/lib/core'
// 导入需要的语言高亮
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import 'highlight.js/styles/stackoverflow-light.css'


function CodeBlock({ language = 'javascript', name, children }) {
  const preRef = useRef(null)
  // 展开收起
  const [expand, setExpand] = useState(false);
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
      hljs.highlightElement(preRef.current)
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
          <span onClick={triggerExpand}>{expand ? '收起' : '展开'}</span>
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