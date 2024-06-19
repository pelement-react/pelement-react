import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { TimeSelectContainerProps } from './interface'
import { compareTime, nextTime } from './utils'

const TimeSelectContainer: React.ForwardRefRenderFunction<HTMLDivElement, TimeSelectContainerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    start,
    step,
    end,
    children,
  } = props

  const [hovering, setHovering] = useState('')
  const [options, setOptions] = useState<Array<{ value: string; disabled: boolean }>>([])

  useEffect(() => {
    const result: { value: string; disabled: boolean }[] = []
    if (props.start && props.end && props.step) {
      let current = start
      while (current && end && compareTime(current, end) <= 0) {
        result.push({
          value: current,
          disabled:
            compareTime(current, '-1:-1') <= 0 ||
            compareTime(current, '100:100') >= 0,
        })
        current = nextTime(current, step!)
      }
    }

    setOptions(result)
  }, [start, step, end])

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
              {options.map((option, index) =>
                <li
                  key={index}
                  className={
                    clsx(
                      'el-select-dropdown__item',
                      {
                        'is-hovering': hovering === option.value
                      }
                    )
                  }
                  role="option"
                  aria-selected="false"
                  onMouseOver={() => { setHovering(option.value) }}
                  onMouseOut={() => { setHovering('') }}
                >
                  <span>{option.value}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

const TimeSelectContainerComponent = forwardRef<HTMLDivElement, TimeSelectContainerProps>(TimeSelectContainer)

TimeSelectContainer.displayName = 'TimeSelectContainer'

export default TimeSelectContainerComponent