import { forwardRef } from 'react'
import clsx from 'clsx'
import { ButtonProps } from './interface'
import './style'

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
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
    disabled = false,
    link = false,
    ...rest
  } = props

  return (
    <button
      ref={ref}
      style={style}
      disabled={disabled}
      {...rest}
      className={
        clsx(
          className,
          'el-button',
          (type ? `el-button--${type}` : ''),
          (plain ? 'is-plain' : ''),
          (round ? 'is-round' : ''),
          (circle ? 'is-circle' : ''),
          (disabled ? 'is-disabled' : ''),
          (link ? 'is-link' : ''),
        )
      }
    >
      {children}
    </button>
  )
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(Button)

ButtonComponent.displayName = 'Button'

export default ButtonComponent