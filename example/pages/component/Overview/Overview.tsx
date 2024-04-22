import ComponentCard from './ComponentCard'
import ButtonSvg from '../../../assets/overview/button.svg?react'

function Overview() {
  const componentList = [
    {
      title: 'Button 按钮',
      svg: <ButtonSvg />
    },
    {
      title: 'Border 边框',
      svg: <ButtonSvg />
    },
    {
      title: 'Color 色彩',
      svg: <ButtonSvg />
    },
    {
      title: 'Container 布局容器',
      svg: <ButtonSvg />
    },
    {
      title: 'Icon 图标',
      svg: <ButtonSvg />
    },
    {
      title: 'Layout 布局',
      svg: <ButtonSvg />
    },
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
              <ComponentCard title={item.title} svg={item.svg} key={index} />
            )
          }

        </div>
      </div>
    </>
  )
}

export default Overview