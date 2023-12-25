import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import StarFilledSvg from '@element-plus/icons-svg/star-filled.svg?react'

const StarFilled: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
          className,
          'el-icon'
        )
      }
    >
      <StarFilledSvg />
    </i>
  )
}

const StarFilledComponent = forwardRef<HTMLDivElement, IconProps>(StarFilled)

StarFilledComponent.displayName = 'StarFilled'

export default StarFilledComponent