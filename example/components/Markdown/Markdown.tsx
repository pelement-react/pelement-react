import ButtonMdx from '../../../packages/Button/index.zh-CN.mdx'
import './Markdown.scss'

function DemoMdx({ name }) {
  let demo
  switch (name) {
    case 'button':
      demo = <ButtonMdx></ButtonMdx>
      break
  }
  return demo
}

function Markdown({ name }) {
  return (
    <>
      <div className="markdown-body">
        <DemoMdx name={name} />
      </div>
    </>
  )
}

export default Markdown