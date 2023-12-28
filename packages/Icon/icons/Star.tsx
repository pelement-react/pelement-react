import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import StarSvg from '@element-plus/icons-svg/star.svg?react'

const Star: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <StarSvg />
    </i>
  )
}

const StarComponent = forwardRef<HTMLDivElement, IconProps>(Star)

StarComponent.displayName = 'Star'

export default StarComponent