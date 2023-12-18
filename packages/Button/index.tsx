import clsx from 'clsx'
import { forwardRef } from 'react'
import './style'
import { ButtonProps } from './interface'

const Button: React.ForwardRefRenderFunction<HTMLDivElement, ButtonProps> = (
  props,
  ref,
) => {
  const {
    className,
    style,
    children,
    type,
    plain = false,
    round = false,
    circle = false,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      style={style}
      {...rest}
      className={
        clsx(
          className,
          'el-button',
          (type ? `el-button--${type}` : ''),
          (plain ? 'is-plain' : ''),
          (round ? 'is-round' : ''),
          (circle ? 'is-circle' : '')
        )
      }
    >
      {children}
    </div>
  )
}

const ButtonComponent = forwardRef<HTMLDivElement, ButtonProps>(Button)

ButtonComponent.displayName = 'Button'

export default ButtonComponent