import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ArrowLeftSvg from '@element-plus/icons-svg/arrow-left.svg?react'

const ArrowLeft: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <ArrowLeftSvg />
    </i>
  )
}

const ArrowLeftComponent = forwardRef<HTMLDivElement, IconProps>(ArrowLeft)

ArrowLeftComponent.displayName = 'ArrowLeft'

export default ArrowLeftComponent