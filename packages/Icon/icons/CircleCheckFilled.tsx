import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CircleCheckFilledSvg from '@element-plus/icons-svg/circle-check-filled.svg?react'

const CircleCheckFilled: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
          'el-icon',
        )
      }
      onClick={onClick}
    >
      <CircleCheckFilledSvg />
    </i>
  )
}

const CircleCheckFilledComponent = forwardRef<HTMLDivElement, IconProps>(CircleCheckFilled)

CircleCheckFilledComponent.displayName = 'CircleCheckFilled'

export default CircleCheckFilledComponent