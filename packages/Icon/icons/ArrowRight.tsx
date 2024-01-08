import clsx from 'clsx'
import { IconProps } from '../interface'
import { forwardRef } from 'react'
import ArrowRightAvg from '@element-plus/icons-svg/arrow-right.svg?react'

const ArrowRight: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
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
    >
      <ArrowRightAvg />
    </i>
  )
}

const ArrowRightComponent = forwardRef<HTMLDivElement, IconProps>(ArrowRight)

ArrowRightComponent.displayName = 'ArrowRight'

export default ArrowRightComponent