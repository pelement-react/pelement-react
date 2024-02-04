import { forwardRef } from 'react'
import clsx from 'clsx'
import { ScrollbarProps } from './interface'
import './style'

const Scrollbar: React.ForwardRefRenderFunction<HTMLDivElement, ScrollbarProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
  } = props

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            className
          )
        }
      >
        scrollbar
      </div>
    </>
  )
}

const ScrollbarComponent = forwardRef<HTMLDivElement, ScrollbarProps>(Scrollbar)

ScrollbarComponent.displayName = 'ScrollbarComponent'

export default ScrollbarComponent