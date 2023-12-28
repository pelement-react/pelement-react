import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CloseSvg from '@element-plus/icons-svg/close.svg?react'

const Close: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
          className,
          'el-icon'
        )
      }
      onClick={onClick}
    >
      <CloseSvg />
    </i>
  )
}

const CloseComponent = forwardRef<HTMLDivElement, IconProps>(Close)

CloseComponent.displayName = 'Close'

export default CloseComponent