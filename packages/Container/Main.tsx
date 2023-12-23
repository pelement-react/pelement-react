import { forwardRef } from 'react'
import clsx from 'clsx'
import { ContainerProps } from './interface'

const Main: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
  } = props

  return (
    <main
      ref={ref}
      style={style}
      className={
        clsx(
          className,
          'el-main'
        )
      }
    >
      {children}
    </main>
  )
}

const MainComponent = forwardRef<HTMLDivElement, ContainerProps>(Main)

MainComponent.displayName = 'Main'

export default MainComponent