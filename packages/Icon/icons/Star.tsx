import { forwardRef } from 'react'
import { IconProps } from '../interface'
import StarSvg from '@element-plus/icons-svg/star.svg?react'

const Star: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className="el-icon"
    >
      <StarSvg />
    </i>
  )
}

const StarComponent = forwardRef<HTMLDivElement, IconProps>(Star)

StarComponent.displayName = 'Star'

export default StarComponent