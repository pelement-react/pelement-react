import { forwardRef } from 'react'
import clsx from 'clsx'
import { ContainerProps } from './interface'

const Footer: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    height
  } = props

  const divStyle: React.CSSProperties = {
    ...style,
    ['--el-footer-height' as string]: height,
  };

  return (
    <footer
      ref={ref}
      style={divStyle}
      className={
        clsx(
          className,
          'el-footer'
        )
      }
    >
      {children}
    </footer>
  )
}

const FooterComponent = forwardRef<HTMLDivElement, ContainerProps>(Footer)

FooterComponent.displayName = 'Footer'

export default FooterComponent