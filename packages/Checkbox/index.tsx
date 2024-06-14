import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { CheckboxProps } from './interface'
import './style'

const Checkbox: React.ForwardRefRenderFunction<HTMLLabelElement, CheckboxProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    value,
    label,
    size = 'default',
    disabled = false,
    onChange,
    children,
  } = props

  const [customInput, setCustomInput] = useState(false)

  useEffect(() => {
    if (typeof value === 'boolean') {
      setCustomInput(value ?? false)
    }
  }, [value])

  function handleClick() {
    if (onChange && !disabled) {
      onChange(!customInput)
    }
  }

  return (
    <>
      <label
        ref={ref}
        style={style}
        className={
          clsx(
            'el-checkbox',
            className,
            {
              'el-checkbox--large': size === 'large',
              'el-checkbox--small': size === 'small',
              'is-checked': customInput,
              'is-disabled': disabled,
            }
          )
        }
        onClick={handleClick}
      >
        <span
          className={
            clsx(
              'el-checkbox__input',
              {
                'is-checked': customInput,
                'is-disabled': disabled,
              }
            )
          }
        >
          <input className="el-checkbox__original" type="checkbox" value={label} disabled={disabled} />
          <span className="el-checkbox__inner"></span>
        </span>
        <span className="el-checkbox__label">{label || children}</span>
      </label>
    </>
  )
}

const CheckboxComponent = forwardRef<HTMLLabelElement, CheckboxProps>(Checkbox)

CheckboxComponent.displayName = 'Checkbox'

export default CheckboxComponent