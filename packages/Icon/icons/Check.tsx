import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CheckSvg from '@element-plus/icons-svg/check.svg?react'

const Check: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <CheckSvg />
    </i>
  )
}

const CheckComponent = forwardRef<HTMLDivElement, IconProps>(Check)

CheckComponent.displayName = 'Check'

export default CheckComponent