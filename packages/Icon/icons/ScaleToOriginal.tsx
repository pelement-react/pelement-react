import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ScaleToOriginalSvg from '@element-plus/icons-svg/scale-to-original.svg?react'

const ScaleToOriginal: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <ScaleToOriginalSvg />
    </i>
  )
}

const ScaleToOriginalComponent = forwardRef<HTMLDivElement, IconProps>(ScaleToOriginal)

ScaleToOriginalComponent.displayName = 'ScaleToOriginal'

export default ScaleToOriginalComponent