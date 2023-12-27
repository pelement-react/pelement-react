import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import LoadingSvg from '@element-plus/icons-svg/loading.svg?react'

const Loading: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
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
    >
      <LoadingSvg />
    </i>
  )
}

const LoadingComponent = forwardRef<HTMLDivElement, IconProps>(Loading)

LoadingComponent.displayName = 'Loading'

export default LoadingComponent