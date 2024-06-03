import { forwardRef, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { arrow, autoUpdate, offset, useClick, useFloating, useInteractions } from '@floating-ui/react'
import { SelectOption, SelectProps } from './interfact'
import SelectContainerComponent from './SelectContainer'
import './style'
// import { useOnClickOutside } from '../_util/hooks/useOnClickOutside'

const Select: React.ForwardRefRenderFunction<HTMLDivElement, SelectProps> = (
  props,
) => {
  const {
    style,
    className,
    options,
    value,
    size = 'default',
    onChange,
  } = props

  const [isHovering, setIsHovering] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<SelectOption | null>(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    if (value) {
      setSelectedValue(value)
    }
  }, [value])

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

  // useOnClickOutside((refs.setReference as unknown as React.RefObject<HTMLDivElement>), () => {
  //   setIsOpen(false)
  // })

  // 选择
  function handleClick(value: SelectOption) {
    setIsOpen(false)
    setSelectedValue(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <>
      <div
        ref={refs.setReference}
        style={style}
        className={
          clsx(
            'el-select',
            {
              'el-select--large': size === 'large',
              'el-select--small': size === 'small',
            },
            className
          )
        }
        {...getReferenceProps()}
      >
        <div
          className={
            clsx(
              'el-select__wrapper el-tooltip__trigger el-tooltip__trigger',
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
          onBlur={() => setIsFocused(false)}
        >
          <div className="el-select__selection">
            <div className="el-select__selected-item el-select__input-wrapper is-hidden">
              <input type="text" className="el-select__input is-large" autoComplete="off" role="combobox" aria-activedescendant="el-id-3094-91" aria-controls="el-id-3094-90" aria-expanded="false" aria-autocomplete="none" aria-haspopup="listbox" id="el-id-3094-234" style={{ width: '11px' }} />
            </div>
            <div className="el-select__selected-item el-select__placeholder">
              <span>{selectedValue?.label}</span>
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
          <SelectContainerComponent
            ref={refs.setFloating}
            style={floatingStyles}
            options={options}
            value={value}
            onClick={handleClick}
            getFloatingProps={getFloatingProps}
          >
            <span
              ref={arrowRef}
              className="el-popper__arrow"
              style={{
                position: 'absolute',
                left: middlewareData.arrow?.x,
                top: middlewareData.arrow?.y,
              }}
            ></span>
          </SelectContainerComponent>,
          document.body
        )
      }
    </>
  )
}

const SelectComponent = forwardRef<HTMLDivElement, SelectProps>(Select)

SelectComponent.displayName = 'select'

export default SelectComponent