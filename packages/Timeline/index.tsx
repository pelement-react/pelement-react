import { forwardRef } from 'react'
import clsx from 'clsx'
import { TimelineProps } from './interface'
import './style'
import TimelineItemComponent from './TimelineItem'

const Timeline: React.ForwardRefRenderFunction<HTMLUListElement, TimelineProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    items,
  } = props

  return (
    <>
      <ul
        ref={ref}
        style={style}
        className={
          clsx(
            'el-timeline',
            className
          )
        }
      >
        {items.map((item, index) =>
          <TimelineItemComponent
            key={index}
            timestamp={item.timestamp}
            hideTimestamp={item.hideTimestamp}
            center={item.center}
            placement={item.placement}
            type={item.type}
            color={item.color}
            size={item.size}
            icon={item.icon}
            hollow={item.hollow}
            content={item.content}
          />
        )}
      </ul>
    </>
  )
}

const TimelineComponent = forwardRef<HTMLUListElement, TimelineProps>(Timeline)

TimelineComponent.displayName = 'Timeline'

export default TimelineComponent