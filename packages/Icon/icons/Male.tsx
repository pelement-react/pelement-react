import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import MaleSvg from '@element-plus/icons-svg/male.svg?react'

const Male: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <MaleSvg />
    </i>
  )
}

const MaleComponent = forwardRef<HTMLDivElement, IconProps>(Male)

MaleComponent.displayName = 'Male'

export default MaleComponent