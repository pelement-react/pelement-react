import { forwardRef } from 'react'
import { IconProps } from '../interface'
import EditSvg from '@element-plus/icons-svg/edit.svg?react'

const Edit: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <EditSvg />
    </i>
  )
}

const EditComponent = forwardRef<HTMLDivElement, IconProps>(Edit)

EditComponent.displayName = 'Edit'

export default EditComponent