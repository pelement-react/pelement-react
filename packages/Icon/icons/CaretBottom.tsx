import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CaretBottomSvg from '@element-plus/icons-svg/caret-bottom.svg?react'

const CaretBottom: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <CaretBottomSvg />
    </i>
  )
}

const CaretBottomComponent = forwardRef<HTMLDivElement, IconProps>(CaretBottom)

CaretBottomComponent.displayName = 'CaretBottom'

export default CaretBottomComponent