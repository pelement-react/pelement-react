import { Children, cloneElement, forwardRef, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { arrow, autoUpdate, offset, useClick, useFloating, useInteractions } from '@floating-ui/react'
import { PopconfirmProps } from './interface'
import './style'
import PopconfirmPopperComponent from './PopconfirmPopper'
import { QuestionFilled } from 'pelement-react'

const Popconfirm: React.ForwardRefRenderFunction<HTMLDivElement, PopconfirmProps> = (
  props,
) => {
  const {
    style,
    className,
    placement = 'bottom',
    title,
    width = 150,
    icon = <QuestionFilled />,
    iconColor = '#f90',
    hideIcon = false,
    confirmButtonText = 'Yes',
    cancelButtonText = 'No',
    onConfirm,
    onCancel,
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
  const triggerInstance = useClick(context)
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
          <PopconfirmPopperComponent
            ref={refs.setFloating}
            style={divStyle}
            className={
              clsx(
                className
              )
            }
            placement={placement}
            title={title}
            width={width}
            icon={icon}
            iconColor={iconColor}
            hideIcon={hideIcon}
            confirmButtonText={confirmButtonText}
            cancelButtonText={cancelButtonText}
            onConfirm={onConfirm}
            onCancel={onCancel}
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
          </PopconfirmPopperComponent>,
          document.body
        )
      }
      {newChildren}
    </>
  )
}

const PopconfirmComponent = forwardRef<HTMLDivElement, PopconfirmProps>(Popconfirm)

PopconfirmComponent.displayName = 'Popconfirm'

export default PopconfirmComponent