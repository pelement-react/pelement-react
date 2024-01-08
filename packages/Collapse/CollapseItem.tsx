import { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { ArrowRight } from 'pelement-react'
import { CollapseItemProps } from './interface'

const CollapseItem: React.ForwardRefRenderFunction<HTMLDivElement, CollapseItemProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    title,
  } = props

  const [active, setActive] = useState(false)

  // 切换折叠状态
  function changeActive() {
    setActive(!active)
  }

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          className,
          'el-collapse-item',
          { 'is-active': active }
        )
      }
      onClick={changeActive}
    >
      <button
        className={
          clsx(
            'el-collapse-item__header',
            { 'is-active': active }
          )
        }
        type="button"
      >
        {title}
        <ArrowRight className="el-collapse-item__arrow" />
      </button>
      <div role="region" className="el-collapse-item__wrap" style={{ display: active ? '' : 'none' }}>
        <div className="el-collapse-item__content">
          {children}
        </div>
      </div>
    </div >
  )
}



const CollapseItemComponent = forwardRef<HTMLDivElement, CollapseItemProps>(CollapseItem)

CollapseItemComponent.displayName = 'CollapseItem'

export default CollapseItemComponent