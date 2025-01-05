import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ZoomOutSvg from '@element-plus/icons-svg/zoom-out.svg?react'

const ZoomOut: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <ZoomOutSvg />
    </i>
  )
}

const ZoomOutComponent = forwardRef<HTMLDivElement, IconProps>(ZoomOut)

ZoomOutComponent.displayName = 'ZoomOut'

export default ZoomOutComponent