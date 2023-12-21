import { forwardRef } from 'react'
import { IconProps } from './interface'
import AddLocation from './icons/add-location.svg?react'
import './style'

const Icon: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <AddLocation />
    </i>
  )
}

const IconComponent = forwardRef<HTMLDivElement, IconProps>(Icon)

IconComponent.displayName = 'Icon'

export default IconComponent