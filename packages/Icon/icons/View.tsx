import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ViewSvg from '@element-plus/icons-svg/view.svg?react'

const View: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <ViewSvg />
    </i>
  )
}

const ViewComponent = forwardRef<HTMLDivElement, IconProps>(View)

ViewComponent.displayName = 'View'

export default ViewComponent