import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CaretTopSvg from '@element-plus/icons-svg/caret-top.svg?react'

const CaretTop: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    onClick,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          'el-icon',
          className,
        )
      }
      onClick={onClick}
    >
      <CaretTopSvg />
    </i>
  )
}

const CaretTopComponent = forwardRef<HTMLDivElement, IconProps>(CaretTop)

CaretTopComponent.displayName = 'CaretTop'

export default CaretTopComponent