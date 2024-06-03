import { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { SelectOptionProps } from './interfact'

const SelectOption: React.ForwardRefRenderFunction<HTMLLIElement, SelectOptionProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    option,
    onClick,
  } = props

  const [isHovering, setIsHovering] = useState(false)

  // 选中
  function handleClick() {
    onClick(option)
  }

  return (
    <>
      <li
        ref={ref}
        style={style}
        className={
          clsx(
            'el-select-dropdown__item',
            {
              'is-hovering': isHovering,
            },
            className
          )
        }
        role="option"
        onMouseOver={() => { setIsHovering(true) }}
        onMouseOut={() => { setIsHovering(false) }}
        onClick={handleClick}
      >
        <span>{option.label}</span>
      </li>
    </>
  )
}

const SelectOptionComponent = forwardRef<HTMLLIElement, SelectOptionProps>(SelectOption)

SelectOptionComponent.displayName = 'SelectOption'

export default SelectOptionComponent