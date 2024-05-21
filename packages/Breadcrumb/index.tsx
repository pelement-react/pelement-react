import { forwardRef } from 'react'
import clsx from 'clsx'
import { BreadcrumbProps } from './interface'
import './style'

const Breadcrumb: React.ForwardRefRenderFunction<HTMLDivElement, BreadcrumbProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    items,
    separator = '/',
  } = props

  function Separator() {
    if (typeof separator === 'string') {
      return <span className="el-breadcrumb__separator" role="presentation">
        {separator}
      </span>
    } else {
      return <>{separator}</>
    }
  }

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          'el-breadcrumb',
          className
        )
      }
      aria-label="Breadcrumb" role="navigation"
    >
      {items.map((item, index) =>
        <span className="el-breadcrumb__item" key={index}>
          <span
            className={
              clsx(
                'el-breadcrumb__inner',
                {
                  'is-link': item.isLink
                }
              )
            }
            role="link"
          >
            {item.title}
          </span>
          <Separator />
        </span>
      )}
    </div>
  )
}

const BreadcrumbComponent = forwardRef<HTMLDivElement, BreadcrumbProps>(Breadcrumb)

BreadcrumbComponent.displayName = 'Breadcrumb'

export default BreadcrumbComponent