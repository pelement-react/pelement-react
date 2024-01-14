import { Children, cloneElement, forwardRef, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { useFloating, offset, useHover, useInteractions, arrow, autoUpdate } from '@floating-ui/react'
import { TooltipProp } from './interface'
import './style'
import TooltipPopperComponent from './TooltipPopper'

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProp> = (
  props,
) => {
  const {
    style,
    className,
    effect = 'dark',
    placement = 'bottom',
    tooltipContent,
    showAfter = 0,
    hideAfter = 200,
    disabled = true,
    children,
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    placement: placement,
    middleware: [
      offset(12),
      arrow({
        element: arrowRef
      })
    ],
    open: isOpen && disabled,
    whileElementsMounted: autoUpdate,
    onOpenChange: setIsOpen
  })

  // trigger触发方式hover
  const hover = useHover(context, {
    delay: {
      open: showAfter,
      close: hideAfter,
    }
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
  ])

  const newChildren = Children.map(children, (el) => {
    return cloneElement(
      el as React.ReactElement<any>,
      {
        ref: refs.setReference,
        ...getReferenceProps()
      }
    )
  })


  const divStyle: React.CSSProperties = {
    ...style,
    ...floatingStyles
  };

  return (
    <>
      {
        isOpen &&
        createPortal(
          <TooltipPopperComponent
            ref={refs.setFloating}
            style={divStyle}
            className={
              clsx(
                className
              )
            }
            effect={effect}
            placement={placement}
            tooltipContent={tooltipContent}
            getFloatingProps={getFloatingProps}
          >
            <span
              ref={arrowRef}
              className="el-popper__arrow"
              style={{
                position: 'absolute',
                left: middlewareData.arrow?.x,
                top: middlewareData.arrow?.y,
              }}></span>
          </TooltipPopperComponent>,
          document.body
        )
      }
      {newChildren}
    </>

  )
}

const TooltipComponent = forwardRef<HTMLDivElement, TooltipProp>(Tooltip)

TooltipComponent.displayName = 'Tooltip'

export default TooltipComponent