import { Children, cloneElement, forwardRef, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { arrow, autoUpdate, ElementProps, offset, useClick, useFloating, useFocus, useHover, useInteractions } from '@floating-ui/react'
import { PopoverProp } from './interface'
import './style'
import PopoverPopperComponent from './PopoverPopper'

const Popover: React.ForwardRefRenderFunction<HTMLDivElement, PopoverProp> = (
  props,
) => {
  const {
    style,
    className,
    placement = 'bottom',
    trigger = 'hover',
    title,
    content,
    showAfter = 0,
    hideAfter = 200,
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
    open: isOpen,
    whileElementsMounted: autoUpdate,
    onOpenChange: setIsOpen
  })

  // trigger触发方式
  let triggerInstance: ElementProps = {}
  switch (trigger) {
    case 'hover':
      triggerInstance = useHover(context, {
        delay: {
          open: showAfter,
          close: hideAfter,
        }
      })
      break
    case 'click':
      triggerInstance = useClick(context)
      break
    case 'focus':
      triggerInstance = useFocus(context)
      break
    case 'contextmenu':
      triggerInstance = useClick(context, {
        event: 'mousedown'
      })
      break
  }
  const { getReferenceProps, getFloatingProps } = useInteractions([
    triggerInstance,
  ])

  const newChildren = cloneElement(
    Children.only(children) as React.ReactElement,
    {
      ref: refs.setReference,
      ...getReferenceProps()
    }
  )

  const divStyle: React.CSSProperties = {
    ...style,
    ...floatingStyles
  }

  return (
    <>
      {
        isOpen &&
        createPortal(
          <PopoverPopperComponent
            ref={refs.setFloating}
            style={divStyle}
            className={
              clsx(
                className
              )
            }
            placement={placement}
            title={title}
            content={content}
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
          </PopoverPopperComponent>,
          document.body
        )
      }
      {newChildren}
    </>
  )
}

const PopoverComponent = forwardRef<HTMLDivElement, PopoverProp>(Popover)

PopoverComponent.displayName = 'Popover'

export default PopoverComponent