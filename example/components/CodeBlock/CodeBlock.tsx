import { useEffect, useRef, useState } from 'react'
import './CodeBlock.scss'
import hljs from 'highlight.js/lib/core'
// 导入需要的语言高亮
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import 'highlight.js/styles/stackoverflow-light.css'


function CodeBlock({ language = 'javascript', name }) {
  const preRef = useRef(null)
  const [code, setCode] = useState('')

  // 获取所有example的源码文件
  const demoFiles = import.meta.glob(`../../pages/component/*/_example/*.tsx`, { as: 'raw', eager: true })

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

  return (
    <>
      <div className="code-block language-react">
        <pre>
          <code id={language} ref={preRef} className={language}>
            {code}
          </code>
        </pre>
      </div>
    </>
  )
}

export default CodeBlock