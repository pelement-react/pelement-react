import ComponentCard from './ComponentCard'
import ButtonSvg from '../../../assets/overview/button.svg?react'
import BorderSvg from '../../../assets/overview/border.svg?react'
import ColorSvg from '../../../assets/overview/color.svg?react'
import ContainerSvg from '../../../assets/overview/container.svg?react'
import IconSvg from '../../../assets/overview/icon.svg?react'
import LayoutSvg from '../../../assets/overview/layout.svg?react'
import LinkSvg from '../../../assets/overview/link.svg?react'
import TextSvg from '../../../assets/overview/text.svg?react'
import ScrollbarSvg from '../../../assets/overview/scrollbar.svg?react'
import SpaceSvg from '../../../assets/overview/space.svg?react'
import TypograpySvg from '../../../assets/overview/typograpy.svg?react'

function Overview() {
  const componentList = [
    { title: 'Button 按钮', path: '/component/button', svg: <ButtonSvg /> },
    { title: 'Border 边框', path: '/component/border', svg: <BorderSvg /> },
    { title: 'Color 色彩', svg: <ColorSvg /> },
    { title: 'Container 布局容器', path: '/component/container', svg: <ContainerSvg /> },
    { title: 'Icon 图标', path: '/component/icon', svg: <IconSvg /> },
    { title: 'Layout 布局', path: '/component/layout', svg: <LayoutSvg /> },
    { title: 'Link 链接', path: '/component/link', svg: <LinkSvg /> },
    { title: 'Text 文本', path: '/component/text', svg: <TextSvg /> },
    { title: 'Scrollbar 滚动条', path: '/component/scrollbar', svg: <ScrollbarSvg /> },
    { title: 'Space 间距', svg: <SpaceSvg /> },
    { title: 'Typography 排版', svg: <TypograpySvg /> },
  ]

  return (
    <>
      <div className="markdown-body">
        <h1>Overview 组件总览</h1>
        <p>以下是 pelement-react 提供的所有组件。</p>
        <h2>Basic 基础组件（11）</h2>
        <div className="card-content">
          {
            componentList.map((item, index) =>
              <ComponentCard title={item.title} path={item.path} svg={item.svg} key={index} />
            )
          }

        </div>
      </div>
    </>
  )
}

export default Overview