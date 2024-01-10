import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import UserFilledSvg from '@element-plus/icons-svg/user-filled.svg?react'

const UserFilled: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
          className
        )
      }
      onClick={onClick}
    >
      <UserFilledSvg />
    </i>
  )
}

const UserFilledComponent = forwardRef<HTMLDivElement, IconProps>(UserFilled)

UserFilledComponent.displayName = 'UserFilled'

export default UserFilledComponent