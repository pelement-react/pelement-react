import { forwardRef } from 'react'
import clsx from 'clsx'
import { ContainerProps } from './interface'
import './style'

const Container: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    direction,
  } = props

  const isVertical = () => {
    if (direction === 'vertical') {
      return true
    } else if (direction === 'horizontal') {
      return false
    }
    if (children) {
      return (children as any).some((reactNode: React.ReactNode) => {
        const tag = (reactNode as any).props.children
        return tag === 'Header' || tag === 'Footer'
      })
    } else {
      return false
    }
  }

  return (
    <section
      ref={ref}
      style={style}
      className={
        clsx(
          className,
          'el-container',
          (isVertical() ? 'is-vertical' : '')
        )
      }
    >
      {children}
    </section>
  )
}

const ContainerComponent = forwardRef<HTMLDivElement, ContainerProps>(Container)

ContainerComponent.displayName = 'Container'

export default ContainerComponent