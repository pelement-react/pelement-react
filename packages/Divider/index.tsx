import { forwardRef } from 'react'
import clsx from 'clsx'
import { DividerProps } from './interface'
import './style'

const Divider: React.ForwardRefRenderFunction<HTMLDivElement, DividerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    contentPosition = 'center',
    borderStyle = 'solid',
    direction = 'horizontal',
  } = props

  const divStyle: React.CSSProperties = {
    ['--el-border-style' as string]: borderStyle,
    ...style
  }

  const ContentNode = children ? <>
    <div
      className={
        clsx(
          'el-divider__text',
          `is-${contentPosition}`
        )
      }>
      {children}
    </div>
  </> : <></>

  return (
    <div
      ref={ref}
      style={divStyle}
      className={
        clsx(
          className,
          'el-divider',
          `el-divider--${direction}`
        )
      }
    >
      {ContentNode}
    </div>
  )
}

const DividerComponent = forwardRef<HTMLDivElement, DividerProps>(Divider)

DividerComponent.displayName = 'Divider'

export default DividerComponent