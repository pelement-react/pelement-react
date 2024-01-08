import { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import { CollapseProps } from './interface'
import CollapseContext, { CollapseContextState } from './CollapseContext'
import './style'

const Collapse: React.ForwardRefRenderFunction<HTMLDivElement, CollapseProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    activeName,
  } = props

  const collapseContext = useMemo<CollapseContextState>(
    () => ({ activeName: activeName }),
    [activeName]
  )

  return (
    <CollapseContext.Provider value={collapseContext}>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            className,
            'el-collapse'
          )
        }
      >
        {children}
      </div>
    </CollapseContext.Provider>
  )
}

const CollapseComponent = forwardRef<HTMLDivElement, CollapseProps>(Collapse)

CollapseComponent.displayName = 'Collapse'

export default CollapseComponent