import { forwardRef } from 'react'
import clsx from 'clsx'
import { ContainerProps } from './interface'

const Header: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  props,
  ref
) => {
  const {
    style,
    className,
    children,
    height
  } = props

  const divStyle: React.CSSProperties = {
    ...style,
    ['--el-header-height' as string]: height,
  };

  return (
    <header
      ref={ref}
      style={divStyle}
      className={
        clsx(
          className,
          'el-header'
        )
      }
    >
      {children}
    </header>
  )
}

const HeaderComponent = forwardRef<HTMLDivElement, ContainerProps>(Header)

HeaderComponent.displayName = 'Head'

export default HeaderComponent