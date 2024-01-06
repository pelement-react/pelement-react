import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CircleCloseFilledSvg from '@element-plus/icons-svg/circle-close-filled.svg?react'

const CircleCloseFilled: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <CircleCloseFilledSvg />
    </i>
  )
}

const CircleCloseFilledComponent = forwardRef<HTMLDivElement, IconProps>(CircleCloseFilled)

CircleCloseFilledComponent.displayName = 'CircleCloseFilled'

export default CircleCloseFilledComponent