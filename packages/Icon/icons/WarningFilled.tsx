import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import WarningFilledSvg from '@element-plus/icons-svg/warning-filled.svg?react'

const WarningFilled: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <WarningFilledSvg />
    </i>
  )
}

const WarningFilledComponent = forwardRef<HTMLDivElement, IconProps>(WarningFilled)

WarningFilledComponent.displayName = 'WarningFilled'

export default WarningFilledComponent