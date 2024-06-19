import { forwardRef, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { arrow, autoUpdate, offset, useClick, useFloating, useInteractions } from '@floating-ui/react'
import { TimeSelectProps } from './interface'
import './style'
import TimeSelectContainerComponent from './TimeSelectContainer'
import { useOnClickOutside } from '../_util/hooks/useOnClickOutside'

const TimeSelect: React.ForwardRefRenderFunction<HTMLDivElement, TimeSelectProps> = (
  props,
) => {
  const {
    style,
    className,
    start = '09:00',
    step = '00:30',
    end = '18:00',
  } = props

  const [isHovering, setIsHovering] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    placement: 'bottom',
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

  // 触发方式click
  const triggerInstance = useClick(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([
    triggerInstance
  ])

  useOnClickOutside(
    [
      (refs.reference as React.RefObject<HTMLDivElement>),
      refs.floating
    ],
    () => {
      setIsOpen(false)
    }
  )

  return (
    <>
      <div
        ref={refs.setReference}
        style={style}
        className={
          clsx(
            'el-select',
            className
          )
        }
        {...getReferenceProps()}
      >
        <div
          className={
            clsx(
              'el-select__wrapper is-filterable el-tooltip__trigger el-tooltip__trigger',
              {
                'is-hovering': isHovering,
                'is-focused': isFocused
              }
            )
          }
          tabIndex={-1}
          onMouseOver={() => { setIsHovering(true) }}
          onMouseOut={() => { setIsHovering(false) }}
          onFocus={() => { setIsFocused(true) }}
          onBlur={() => { setIsFocused(false) }}
        >
          <div className="el-select__prefix">
            <i className="el-icon el-input__prefix-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>
                <path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"></path>
                <path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"></path>
              </svg>
            </i>
          </div>
          <div className="el-select__selection">
            <div className="el-select__selected-item el-select__input-wrapper">
              <input type="text" className="el-select__input" autoComplete="off" role="combobox" spellCheck="false" aria-activedescendant="el-id-9874-30" aria-controls="el-id-9874-29" aria-expanded="false" aria-autocomplete="none" aria-haspopup="listbox" style={{ width: '11px' }} />
              <span aria-hidden="true" className="el-select__input-calculator"></span>
            </div>
            <div className="el-select__selected-item el-select__placeholder is-transparent">
              <span>Select time</span>
            </div>
          </div>
          <div className="el-select__suffix">
            <i className="el-icon el-select__caret el-select__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
              </svg>
            </i>
          </div>
        </div>
      </div>
      {
        isOpen &&
        createPortal(
          <TimeSelectContainerComponent
            ref={refs.setFloating}
            style={floatingStyles}
            getFloatingProps={getFloatingProps}
            start={start}
            step={step}
            end={end}
          >
            <span
              ref={arrowRef}
              className="el-popper__arrow"
              style={{
                position: 'absolute',
                left: middlewareData.arrow?.x,
                top: middlewareData.arrow?.y,
              }}
            >
            </span>
          </TimeSelectContainerComponent>,
          document.body
        )
      }
    </>
  )
}

const TimeSelectComponent = forwardRef<HTMLDivElement, TimeSelectProps>(TimeSelect)

TimeSelectComponent.displayName = 'TimeSelectComponent'

export default TimeSelectComponent