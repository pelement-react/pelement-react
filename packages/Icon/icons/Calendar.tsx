import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import CalendarSvg from '@element-plus/icons-svg/calendar.svg?react'

const Calendar: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    onClick,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          'el-icon',
          className,
        )
      }
      onClick={onClick}
    >
      <CalendarSvg />
    </i>
  )
}

const CalendarComponent = forwardRef<HTMLDivElement, IconProps>(Calendar)

CalendarComponent.displayName = 'Calendar'

export default CalendarComponent