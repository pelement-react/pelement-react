import { forwardRef } from 'react'
import clsx from 'clsx'
import { BadgeProps } from './interface'
import './style'

const Badge: React.ForwardRefRenderFunction<HTMLDivElement, BadgeProps> = (
  props,
  ref
) => {
  const {
    style,
    className,
    value = '',
    type = 'danger',
    max = 99,
    isDot = false,
    children,
  } = props

  function sup() {
    if (typeof value === 'number' && value > max) {
      return `${max}+`
    } else {
      return value
    }
  }

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          'el-badge',
          className
        )
      }
    >
      {children}
      <sup
        className={
          clsx(
            'el-badge__content is-fixed',
            `el-badge__content--${type}`,
            {
              'is-dot': isDot
            }
          )
        }
      >
        {sup()}
      </sup>
    </div>
  )
}

const BadgeComponent = forwardRef<HTMLDivElement, BadgeProps>(Badge)

BadgeComponent.displayName = 'Badge'

export default BadgeComponent