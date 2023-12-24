import { forwardRef, useContext } from 'react'
import clsx from 'clsx'
import { LayoutProps } from './interface'
import RowContext from './RowContext'

const Col: React.ForwardRefRenderFunction<HTMLDivElement, LayoutProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    span = 24,
    offset,
    xs,
    sm,
    md,
    lg,
    xl,
  } = props

  const { gutter } = useContext(RowContext)

  const divStyle: React.CSSProperties = {
    paddingLeft: `${gutter! / 2}px`,
    paddingRight: `${gutter! / 2}px`,
    ...style,
  };

  return (
    <div
      ref={ref}
      style={divStyle}
      className={
        clsx(
          className,
          'el-col',
          (span ? `el-col-${span}` : ''),
          (gutter ? 'is-guttered' : ''),
          (offset ? `el-col-offset-${offset}` : ''),
          (xs ? `el-col-xs-${xs}` : ''),
          (sm ? `el-col-sm-${sm}` : ''),
          (md ? `el-col-md-${md}` : ''),
          (lg ? `el-col-lg-${lg}` : ''),
          (xl ? `el-col-xl-${xl}` : '')
        )
      }
    >
      {children}
    </div>
  )
}

const ColComponent = forwardRef<HTMLDivElement, LayoutProps>(Col)

ColComponent.displayName = 'Col'

export default ColComponent