import { forwardRef, MouseEvent, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ColorPickerPopperProps } from './interface'
import Color from './utils/color'

const ColorPickerPopper: React.ForwardRefRenderFunction<HTMLDivElement, ColorPickerPopperProps> = (
  props,
  ref,
) => {

  const {
    style,
    className,
    value,
    showAlpha,
    colorFormat,
    getFloatingProps,
    handleChange,
  } = props

  const color = new Color({
    enableAlpha: showAlpha ?? false,
    format: colorFormat ?? '',
    value: value ?? '',
  } as Color)
  const hueSlider = useRef(null)
  const hueSliderThumb = useRef(null)
  const svpanel = useRef(null)
  const [customInput, setCustomInput] = useState('')
  const [hueSliderThumbTop, setHueSliderThumbTop] = useState('')
  const [hueSliderThumbLeft, setHueSliderThumbLeft] = useState('')
  const [svpanelCursorLeft, setSvpanelCursorLeft] = useState('')
  const [svpanelCursorTop, setSvpanelCursorTop] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    if (!value) {
      return
    }
    setCustomInput(value)
    // 获取thumb
    getThumb()
    // 获取svpanel
    getSvpanel()
  }, [value])

  function getThumb() {
    const hue = color.get('hue')
    if (hueSlider?.current && hueSliderThumb.current) {
      setHueSliderThumbTop(Math.round(
        (hue * ((hueSlider.current as HTMLElement).offsetHeight - (hueSliderThumb.current as HTMLElement).offsetHeight / 2)) / 360
      ) + 'px')
      setHueSliderThumbLeft(Math.round(
        (hue * ((hueSlider.current as HTMLElement).offsetWidth - (hueSliderThumb.current as HTMLElement).offsetWidth / 2)) / 360
      ) + 'px')
    }
  }

  function getSvpanel() {
    const saturation = color.get('saturation')
    const value = color.get('value')
    if (svpanel.current) {
      const { clientWidth: width, clientHeight: height } = svpanel.current
      setSvpanelCursorLeft((saturation * width) / 100 + 'px')
      setSvpanelCursorTop(((100 - value) * height) / 100 + 'px')
      setBackgroundColor(`hsl(${color.get('hue')}, 100%, 50%)`)
    }
  }

  function handleHueSliderBar(event: MouseEvent<HTMLDivElement>) {
    if (hueSlider.current && hueSliderThumb.current) {
      const rect = (hueSlider.current as HTMLElement).getBoundingClientRect()
      const top = event.clientY - rect.top;
      const hue = Math.round(
        ((top - (hueSliderThumb.current as HTMLElement).offsetHeight / 2) /
          (rect.height - (hueSliderThumb.current as HTMLElement).offsetHeight)) *
        360
      )
      setHueSliderThumbTop(top + 'px')
      setBackgroundColor(`hsl(${hue}, 100%, 50%)`)
      color.set('hue', hue)
      setCustomInput(color.value)
      handleChange(color.value)
    }
  }

  function handleSvpanel(event: MouseEvent<HTMLDivElement>) {
    if (svpanel.current) {
      const rect = (svpanel.current as HTMLElement).getBoundingClientRect()
      const top = event.clientY - rect.top
      const left = event.clientX - rect.left
      setSvpanelCursorTop(top + 'px')
      setSvpanelCursorLeft(left + 'px')
      changeSvpanel(rect, left, top);
    }
  }

  function changeSvpanel(rect: any, left: number, top: number) {
    color.set({
      saturation: (left / rect.width) * 100,
      value: 100 - (top / rect.height) * 100,
    })
    setCustomInput(color.value)
    handleChange(color.value)
  }

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-popper is-light el-color-picker__panel el-color-dropdown',
            className
          )
        }
        tabIndex={-1}
        aria-hidden="true"
        role="tooltip"
        data-popper-reference-hidden="false"
        data-popper-escaped="false"
        data-popper-placement="bottom"
        {...getFloatingProps()}
      >
        <div>
          <div className="el-color-dropdown__main-wrapper">
            <div ref={hueSlider} className="el-color-hue-slider is-vertical hue-slider">
              <div onClick={handleHueSliderBar} className="el-color-hue-slider__bar"></div>
              <div className="el-color-hue-slider__thumb" style={{ left: hueSliderThumbLeft, top: hueSliderThumbTop }}></div>
            </div>
            <div ref={svpanel} onClick={handleSvpanel} className="el-color-svpanel" style={{ backgroundColor: backgroundColor }}>
              <div className="el-color-svpanel__white"></div>
              <div className="el-color-svpanel__black"></div>
              <div className="el-color-svpanel__cursor" style={{ top: svpanelCursorTop, left: svpanelCursorLeft }}><div>
              </div>
              </div>
            </div>
          </div>
          <div className="el-color-dropdown__btns">
            <span className="el-color-dropdown__value">
              <div className="el-input el-input--small">
                <div className="el-input__wrapper" tabIndex={-1}>
                  <input className="el-input__inner" type="text" defaultValue={customInput} autoComplete="off" tabIndex={0} />
                </div>
              </div>
            </span>
            <button aria-disabled="false" type="button" className="el-button el-button--small is-text el-color-dropdown__link-btn">
              <span className="">Clear</span>
            </button>
            <button aria-disabled="false" type="button" className="el-button el-button--small is-plain el-color-dropdown__btn">
              <span className="">OK</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const ColorPickerPopperComponent = forwardRef<HTMLDivElement, ColorPickerPopperProps>(ColorPickerPopper)

ColorPickerPopperComponent.displayName = 'ColorPickerPopper'

export default ColorPickerPopperComponent