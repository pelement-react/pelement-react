import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import HideSvg from '@element-plus/icons-svg/hide.svg?react'

const Hide: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className
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
    >
      <HideSvg />
    </i>
  )
}

const HideComponent = forwardRef<HTMLDivElement, IconProps>(Hide)

HideComponent.displayName = 'Hide'

export default HideComponent