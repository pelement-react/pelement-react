import { forwardRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { ColorPickerProps } from './interface'
import './style'
import { autoUpdate, offset, useClick, useFloating, useInteractions } from '@floating-ui/react'
import ColorPickerPopperComponent from './ColorPickerPopper'

const ColorPicker: React.ForwardRefRenderFunction<HTMLDivElement, ColorPickerProps> = (
  props,
) => {
  const {
    style,
    className,
    value,
    showAlpha = false,
    colorFormat,
    onChange,
  } = props

  const [customInput, setCustomInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom',
    middleware: [
      offset(12),
    ],
    open: isOpen,
    whileElementsMounted: autoUpdate,
    onOpenChange: setIsOpen
  })

  const triggerInstance = useClick(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([
    triggerInstance,
  ])

  useEffect(() => {
    if (!value) {
      return
    }
    setCustomInput(value)
  }, [value])

  function handleChange(val) {
    setCustomInput(val)
    if (onChange) {
      onChange(val)
    }
  }

  return (
    <>
      <div
        ref={refs.setReference}
        style={style}
        className={
          clsx(
            'el-color-picker el-tooltip__trigger el-tooltip__trigger',
            className
          )
        }
        role="button"
        aria-label="color picker"
        aria-description="current color is #409EFF. press enter to select a new color."
        aria-disabled="false"
        tabIndex={0}
        {...getReferenceProps()}
      >
        <div className="el-color-picker__trigger">
          <span className="el-color-picker__color">
            <span className="el-color-picker__color-inner" style={{ backgroundColor: customInput }}>
              <i className="el-icon el-color-picker__icon is-icon-arrow-down" style={{ display: !value ? 'none' : '' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                </svg>
              </i>
              <i className="el-icon el-color-picker__empty is-icon-close" style={{ display: value ? 'none' : '' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
                </svg>
              </i>
            </span>
          </span>
        </div>
      </div>
      {
        isOpen &&
        createPortal(
          <ColorPickerPopperComponent
            ref={refs.setFloating}
            style={floatingStyles}
            getFloatingProps={getFloatingProps}
            value={value}
            showAlpha={showAlpha}
            colorFormat={colorFormat}
            handleChange={handleChange}
          />,
          document.body
        )
      }
    </>
  )
}

const ColorPickerComponent = forwardRef<HTMLDivElement, ColorPickerProps>(ColorPicker)

ColorPickerComponent.displayName = 'ColorPicker'

export default ColorPickerComponent