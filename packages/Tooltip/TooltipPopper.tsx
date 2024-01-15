import { forwardRef } from 'react'
import clsx from 'clsx'
import { TooltipPopperProp } from './interface'

const TooltipPopper: React.ForwardRefRenderFunction<HTMLDivElement, TooltipPopperProp> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    placement,
    content,
    effect,
    getFloatingProps,
    children,
  } = props

  function TooltipContent() {
    if (typeof content === 'string') {
      return <>
        <span>{content}</span>
      </>
    } else {
      return <>{content}</>
    }
  }

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-popper',
            `is-${effect}`,
            className
          )
        }
        data-popper-placement={placement}
        {...getFloatingProps()}
      >
        <TooltipContent />
        {children}
      </div>
    </>
  )
}

const TooltipPopperComponent = forwardRef<HTMLDivElement, TooltipPopperProp>(TooltipPopper)

TooltipPopperComponent.displayName = 'TooltipPopper'

export default TooltipPopperComponent