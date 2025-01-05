import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import RefreshLeftSvg from '@element-plus/icons-svg/refresh-left.svg?react'

const RefreshLeft: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <RefreshLeftSvg />
    </i>
  )
}

const RefreshLeftComponent = forwardRef<HTMLDivElement, IconProps>(RefreshLeft)

RefreshLeftComponent.displayName = 'RefreshLeft'

export default RefreshLeftComponent