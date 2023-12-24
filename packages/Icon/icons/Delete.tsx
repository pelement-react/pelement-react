import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import DeleteSvg from '@element-plus/icons-svg/delete.svg?react'

const Delete: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <DeleteSvg />
    </i>
  )
}

const DeleteComponent = forwardRef<HTMLDivElement, IconProps>(Delete)

DeleteComponent.displayName = 'Delete'

export default DeleteComponent