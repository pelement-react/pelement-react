import { forwardRef } from 'react'
import clsx from 'clsx'
import { CheckboxGroupProps } from './interface'
import CheckboxComponent from '.'

const CheckboxGroup: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxGroupProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    options,
  } = props

  function handleChange() {

  }

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-checkbox-group',
            className
          )
        }
        role="group"
        aria-label="checkbox-group"
      >
        {options?.map((option, index) =>
          <CheckboxComponent
            key={index}
            label={option.label}
            value={option.value}
            disabled={option.disabled}
            onChange={handleChange}
          />
        )}
      </div>
    </>
  )
}

const CheckboxGroupComponent = forwardRef<HTMLDivElement, CheckboxGroupProps>(CheckboxGroup)

CheckboxGroupComponent.displayName = 'CheckboxGroup'

export default CheckboxGroupComponent