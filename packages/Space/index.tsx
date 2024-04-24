import React, { Children, forwardRef } from 'react'
import clsx from 'clsx'
import { SpaceProps } from './interface'
import './style'

const Space: React.ForwardRefRenderFunction<HTMLDivElement, SpaceProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    wrap = false,
    direction = 'horizontal',
    size = 'small',
    spacer,
    alignment = 'center',
    children,
  } = props

  const sizeEnum = {
    'large': '16px',
    'default': '12px',
    'small': '8px'
  }

  const divStyle: React.CSSProperties = {
    ['flexWrap' as string]: wrap ? 'wrap' : null,
    ['alignItems' as string]: alignment,
    ['gap' as string]: sizeEnum[size] || `${size}px`,
    ...style
  }

  // 分隔符
  function SpanSpacer(props) {
    const { count, index } = props

    // 最后一个不展示分隔符
    if (!spacer || count - 1 === index) {
      return <></>
    } else {
      return <><span>{spacer}</span></>
    }
  }

  return (
    <div
      ref={ref}
      style={divStyle}
      className={
        clsx(
          'el-space',
          `el-space--${direction}`,
          className
        )
      }
    >
      {
        Children.map(children, (item, index) =>
          <React.Fragment key={index}>
            <div
              className="el-space__item"
            >
              {item}
            </div>
            <SpanSpacer count={Children.count(children)} index={index} />
          </React.Fragment>
        )
      }
    </div>
  )
}

const SpaceComponent = forwardRef<HTMLDivElement, SpaceProps>(Space)

SpaceComponent.displayName = 'Space'

export default SpaceComponent