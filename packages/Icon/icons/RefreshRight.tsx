import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import RefreshRightSvg from '@element-plus/icons-svg/refresh-right.svg?react'

const RefreshRight: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <RefreshRightSvg />
    </i>
  )
}

const RefreshRightComponent = forwardRef<HTMLDivElement, IconProps>(RefreshRight)

RefreshRightComponent.displayName = 'RefreshRight'

export default RefreshRightComponent