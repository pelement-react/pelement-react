import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ZoomInSvg from '@element-plus/icons-svg/zoom-in.svg?react'

const ZoomIn: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <ZoomInSvg />
    </i>
  )
}

const ZoomInComponent = forwardRef<HTMLDivElement, IconProps>(ZoomIn)

ZoomInComponent.displayName = 'ZoomIn'

export default ZoomInComponent