import { forwardRef } from 'react'
import { IconProps } from '../interface'
import DeleteSvg from '@element-plus/icons-svg/delete.svg?react'

const Delete: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className="el-icon"
    >
      <DeleteSvg />
    </i>
  )
}

const DeleteComponent = forwardRef<HTMLDivElement, IconProps>(Delete)

DeleteComponent.displayName = 'Delete'

export default DeleteComponent