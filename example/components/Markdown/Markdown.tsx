import ButtonMdx from '../../../packages/Button/index.zh-CN.mdx'
import ContainerMdx from '../../../packages/Container/index.zh-CN.mdx'
import IconMdx from '../../../packages/Icon/index.zh-CN.mdx'
import LayoutMdx from '../../../packages/Layout/index.zh-CN.mdx'
import './Markdown.scss'

function DemoMdx({ name }) {
  let demo
  switch (name) {
    case 'button':
      demo = <ButtonMdx></ButtonMdx>
      break
    case 'container':
      demo = <ContainerMdx></ContainerMdx>
      break
    case 'icon':
      demo = <IconMdx></IconMdx>
      break
    case 'layout':
      demo = <LayoutMdx></LayoutMdx>
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