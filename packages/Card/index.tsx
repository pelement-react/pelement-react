import { forwardRef } from 'react'
import clsx from 'clsx'
import { CardProps } from './interface'
import './style'

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    header,
    footer,
    bodyStyle,
    bodyClass,
    shadow = 'always',
    children,
  } = props

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-card',
            className,
            {
              'is-always-shadow': shadow === 'always',
              'is-hover-shadow': shadow === 'hover',
              'is-never-shadow': shadow === 'never',
            }
          )
        }
      >
        {
          header &&
          <div className="el-card__header">
            {header}
          </div>
        }
        <div
          style={bodyStyle}
          className={
            clsx(
              'el-card__body',
              bodyClass
            )
          }
        >
          {children}
        </div>
        {
          footer &&
          <div className="el-card__footer">
            {footer}
          </div>
        }
      </div>
    </>
  )
}

const CardComponent = forwardRef<HTMLDivElement, CardProps>(Card)

CardComponent.displayName = 'Card'

export default CardComponent