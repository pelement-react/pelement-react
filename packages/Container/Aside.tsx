import { forwardRef } from 'react'
import clsx from 'clsx'
import { ContainerProps } from './interface'

const Aside: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    width = 200,
  } = props

  const divStyle: React.CSSProperties = {
    ...style,
    ['--el-aside-width' as string]: width,
  }

  return (
    <aside
      ref={ref}
      style={divStyle}
      className={
        clsx(
          className,
          'el-aside'
        )
      }
    >
      {children}
    </aside>
  )
}

const AsideComponent = forwardRef<HTMLDivElement, ContainerProps>(Aside)

AsideComponent.displayName = 'Aside'

export default AsideComponent