import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import FullScreenSvg from '@element-plus/icons-svg/full-screen.svg?react'

const FullScreen: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
          'el-icon',
          className,
        )
      }
      onClick={onClick}
    >
      <FullScreenSvg />
    </i>
  )
}

const FullScreenComponent = forwardRef<HTMLDivElement, IconProps>(FullScreen)

FullScreenComponent.displayName = 'FullScreen'

export default FullScreenComponent