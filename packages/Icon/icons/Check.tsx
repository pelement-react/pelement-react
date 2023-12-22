import { forwardRef } from 'react'
import { IconProps } from '../interface'
import CheckSvg from '@element-plus/icons-svg/check.svg?react'

const Check: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <CheckSvg />
    </i>
  )
}

const CheckComponent = forwardRef<HTMLDivElement, IconProps>(Check)

CheckComponent.displayName = 'Check'

export default CheckComponent