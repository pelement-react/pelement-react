import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import WarningSvg from '@element-plus/icons-svg/warning.svg?react'

const Warning: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <WarningSvg />
    </i>
  )
}

const WarningComponent = forwardRef<HTMLDivElement, IconProps>(Warning)

WarningComponent.displayName = 'Warning'

export default WarningComponent