import { ChangeEvent, forwardRef, useState } from 'react'
import clsx from 'clsx'
import { InputProps } from './interface'
import './style'

const Input: React.ForwardRefRenderFunction<HTMLDivElement, InputProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    placeholder,
    value,
    disabled = false,
    clearable = false,
    size = 'default',
    onChange,
  } = props

  // 聚焦状态
  const [focus, setFocus] = useState(false)
  // 鼠标状态
  const [enter, setEnter] = useState(false)

  // 聚焦
  function handleFocus() {
    setFocus(true)
  }

  // 失去焦点
  function handleBlur() {
    setFocus(false)
  }

  // 鼠标移入
  function handleMouseEnter() {
    setEnter(true)
  }

  // 鼠标移出
  function handleMouseLeave() {
    setEnter(false)
  }

  // 清空
  function handleClear() {
    if (onChange) {
      onChange('')
    }
  }

  // value变更
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  // 清空组件
  function Clear() {
    // 聚焦、鼠标移入
    if (clearable && value && (focus || enter)) {
      return <span className="el-input__suffix" >
        <span className="el-input__suffix-inner">
          <i className="el-icon el-input__icon el-input__clear" onClick={handleClear}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>
            </svg>
          </i>
        </span>
      </span>
    }

    return <></>
  }

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          'el-input',
          className,
          {
            'is-disabled': disabled,
            'el-input--large': size === 'large',
            'el-input--small': size === 'small',
          }
        )
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={
          clsx(
            {
              'el-input__wrapper': true,
              'is-focus': focus
            }
          )
        }
        tabIndex={-1}
      >
        <input
          className="el-input__inner"
          type="text"
          autoComplete="off"
          tabIndex={0}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {/* 清空 */}
        <Clear />
      </div>
    </div>
  )
}

const InputComponent = forwardRef<HTMLDivElement, InputProps>(Input)

InputComponent.displayName = 'Input'

export default InputComponent