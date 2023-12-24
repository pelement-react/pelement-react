import React, { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import { LayoutProps } from './interface'
import './style'
import RowContext, { RowContextState } from './RowContext'

const Row: React.ForwardRefRenderFunction<HTMLDivElement, LayoutProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    gutter = 0,
    justify,
  } = props

  const divStyle: React.CSSProperties = {
    marginLeft: `-${gutter! / 2}px`,
    marginRight: `-${gutter! / 2}px`,
    ...style,
  };

  const rowContext = useMemo<RowContextState>(
    () => ({ gutter: gutter }),
    [gutter]
  )

  return (
    <RowContext.Provider value={rowContext}>
      <div
        ref={ref}
        style={divStyle}
        className={
          clsx(
            className,
            'el-row',
            (justify ? `is-justify-${justify}` : '')
          )
        }
      >
        {children}
      </div>
    </RowContext.Provider>
  )
}

const RowComponent = forwardRef<HTMLDivElement, LayoutProps>(Row)

RowComponent.displayName = 'Row'

export default RowComponent