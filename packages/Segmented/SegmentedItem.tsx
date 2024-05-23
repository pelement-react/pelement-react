import { forwardRef, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { SegmentedItemProps } from './interface'

const SegmentedItem: React.ForwardRefRenderFunction<HTMLLabelElement, SegmentedItemProps> = (
  props,
) => {
  const {
    style,
    className,
    _id,
    index,
    selectedIndex,
    option,
    onSelect,
  } = props

  const ref = useRef(null)

  useEffect(() => {
    if (index === selectedIndex && ref.current) {
      handleSelect()
    }
  }, [index, selectedIndex])

  // 处理选中事件
  function handleSelect() {
    if (ref?.current) {
      const { left, width } = (ref.current as HTMLElement).getBoundingClientRect()
      onSelect(index, left, width)
    }
  }

  // 处理点击事件
  function handleClick() {
    if (!option.disabled) {
      handleSelect()
    }
  }

  return (
    <>
      <label
        ref={ref}
        style={style}
        className={
          clsx(
            'el-segmented__item',
            className,
            {
              'is-selected': selectedIndex === index,
              'is-disabled': option.disabled
            }
          )
        }
        onClick={handleClick}
      >
        <input className="el-segmented__item-input" type="radio" name={`el-id-${_id}`} />
        <div className="el-segmented__item-label">{option.label}</div>
      </label>
    </>
  )
}

const SegmentedItemComponent = forwardRef<HTMLLabelElement, SegmentedItemProps>(SegmentedItem)

SegmentedItemComponent.displayName = 'SegmentedItem'

export default SegmentedItemComponent