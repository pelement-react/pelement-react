import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CircleCheckSvg from '@element-plus/icons-svg/circle-check.svg?react'

const CircleCheck: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
          className
        )
      }
      onClick={onClick}
    >
      <CircleCheckSvg />
    </i>
  )
}

const CircleCheckComponent = forwardRef<HTMLDivElement, IconProps>(CircleCheck)

CircleCheckComponent.displayName = 'CircleCheck'

export default CircleCheckComponent