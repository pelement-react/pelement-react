import { cloneElement, forwardRef } from 'react'
import clsx from 'clsx'
import { TimelineItemProps } from './interface'

const TimelineItem: React.ForwardRefRenderFunction<HTMLLIElement, TimelineItemProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    timestamp = '',
    hideTimestamp = false,
    center = false,
    placement = 'bottom',
    type = '',
    color = '',
    size = 'normal',
    icon,
    hollow = false,
    content,
  } = props

  // 图标
  function Icon() {
    if (icon) {
      const newIcon = cloneElement(
        (icon as React.ReactElement),
        {
          className: 'el-timeline-item__icon'
        }
      )
      return <>{newIcon}</>
    } else {
      return <></>
    }
  }

  // 时间戳
  function Timestamp() {
    return <>
      <div
        className={
          clsx(
            'el-timeline-item__timestamp',
            {
              'is-top': placement === 'top',
              'is-bottom': placement === 'bottom',
            },
            className
          )
        }>
        {timestamp}
      </div>
    </>
  }

  return (
    <>
      <li
        ref={ref}
        style={style}
        className={
          clsx(
            'el-timeline-item',
            {
              'el-timeline-item__center': center
            }
          )
        }
      >
        <div className="el-timeline-item__tail"></div>
        <div
          className={
            clsx(
              'el-timeline-item__node',
              {
                'el-timeline-item__node--normal': !icon,
                'el-timeline-item__node--large': size === 'large',
                'el-timeline-item__node--primary': type,
                'is-hollow': hollow,
              }
            )
          }
          style={{ backgroundColor: color }}>
          <Icon />
        </div>
        <div className="el-timeline-item__wrapper">
          {hideTimestamp && placement === 'top' &&
            <Timestamp />
          }
          <div className="el-timeline-item__content">
            {content}
          </div>
          {hideTimestamp && placement === 'bottom' &&
            <Timestamp />
          }
        </div>
      </li>
    </>
  )
}

const TimelineItemComponent = forwardRef<HTMLLIElement, TimelineItemProps>(TimelineItem)

TimelineItemComponent.displayName = 'TimelineItem'

export default TimelineItemComponent