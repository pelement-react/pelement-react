import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { SelectContainerProps, SelectOption } from './interfact'
import SelectOptionComponent from './SelectOption'

const SelectContainer: React.ForwardRefRenderFunction<HTMLDivElement, SelectContainerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    options,
    value,
    onClick,
    children,
  } = props

  const [selectedValue, setSelectedValue] = useState<SelectOption | null>(null)

  useEffect(() => {
    if (value) {
      setSelectedValue(value)
    }
  }, [value])

  // 选择
  function handleClick(option: SelectOption) {
    setSelectedValue(option)
    onClick(option)
  }

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-popper is-pure is-light el-select__popper',
            className
          )
        }
        tabIndex={-1}
        aria-hidden="false"
        role="tooltip"
        data-popper-reference-hidden="false"
        data-popper-escaped="false"
        data-popper-placement="bottom"
      >
        <div className="el-select-dropdown" style={{ minWidth: '240px' }}>
          <div className="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
            <ul className="el-scrollbar__view el-select-dropdown__list" role="listbox" aria-orientation="vertical">
              {options.map((item: SelectOption, index: number) =>
                <SelectOptionComponent
                  key={index}
                  className={
                    clsx(
                      {
                        'is-selected': selectedValue?.value === item.value,
                      }
                    )
                  }
                  option={item}
                  onClick={handleClick}
                />
              )}
            </ul>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

const SelectContainerComponent = forwardRef<HTMLDivElement, SelectContainerProps>(SelectContainer)

SelectContainerComponent.displayName = 'SelectContainer'

export default SelectContainerComponent