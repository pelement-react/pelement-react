import { forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { SegmentedType, SegmentedProps } from './interface'
import './style'
import { id } from '../_util/id'
import SegmentedItemComponent from './SegmentedItem'

const Segmented: React.ForwardRefRenderFunction<HTMLDivElement, SegmentedProps> = (
  props,
) => {
  const {
    style,
    className,
    options,
    size = 'default',
    disabled = false,
    block = false,
  } = props

  const ref = useRef(null)
  const [list, setList] = useState<SegmentedType[]>([])
  const [selectedIndex, setSelectedId] = useState(0)
  const [labelWidth, setLabelWidth] = useState(0)
  const [labelLeft, setLabelLeft] = useState(0)

  useEffect(() => {
    setList(options.map((item, index) => {
      if (typeof item === 'string') {
        return {
          label: item,
          value: index,
          disabled: disabled
        }
      } else if (typeof item === 'object') {
        return {
          label: item.label,
          value: item.value || index,
          disabled: item.disabled || disabled
        }
      } else {
        return {
          label: item,
          value: index,
          disabled: disabled
        }
      }
    }))
  }, [options, disabled])

  const _id = id + 1

  // 获取item的width
  function handleSelect(index, labelLeft, labelWidth) {
    if (ref?.current) {
      const { left } = (ref.current as HTMLElement).getBoundingClientRect()
      setSelectedId(index)
      setLabelWidth(labelWidth)
      setLabelLeft(labelLeft - left)
    }
  }

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            className,
            `el-segmented el-segmented--${size}`,
            {
              'is-block': block
            }
          )
        }
        role="radiogroup"
        aria-label="segmented"
        id={`el-id-${_id}`}
      >
        <div className="el-segmented__group">
          <div
            className={
              clsx(
                'el-segmented__item-selected',
                {
                  'is-disabled': disabled
                }
              )
            }
            style={{ width: `${labelWidth}px`, transform: `translateX(${labelLeft}px)`, display: 'block' }}
          ></div>
          {list.map((item: SegmentedType, index: number) =>
            <SegmentedItemComponent
              key={index}
              _id={_id}
              index={index}
              selectedIndex={selectedIndex}
              option={item}
              onSelect={handleSelect}
            />
          )}
        </div>
      </div >
    </>
  )
}

const SegmentedComponent = forwardRef<HTMLDivElement, SegmentedProps>(Segmented)

SegmentedComponent.displayName = 'Segmented'

export default SegmentedComponent