import clsx from 'clsx'
import { TooltipPopperProp } from './interface'
import { forwardRef } from 'react'

const TooltipPopper: React.ForwardRefRenderFunction<HTMLDivElement, TooltipPopperProp> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    placement,
    tooltipContent,
    effect,
    getFloatingProps,
    children,
  } = props

  function TooltipContent() {
    if (typeof tooltipContent === 'string') {
      return <>
        <span>{tooltipContent}</span>
      </>
    } else {
      return <>{tooltipContent}</>
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