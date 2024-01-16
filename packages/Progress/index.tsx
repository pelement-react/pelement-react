import { forwardRef } from 'react'
import clsx from 'clsx'
import { CircleCheck, CircleCloseFilled, WarningFilled } from 'pelement-react'
import { ProgressProp } from './interface'
import './style'

const Progress: React.ForwardRefRenderFunction<HTMLDivElement, ProgressProp> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    percentage = 0,
    format,
    status,
    textInside = false,
    strokeWidth = 6,
  } = props

  // 进度条显示文字内置在进度条内
  function InnerPercentageText() {
    if (textInside) {
      if (format) {
        return <div
          className="el-progress-bar__innerText"
        >
          <span>{format(percentage)}</span>
        </div>
      } else {
        return <div
          className="el-progress-bar__innerText"
        >
          <span>{percentage}%</span>
        </div>
      }
    }
    return <></>
  }

  // 进度条显示文字内置在进度条外
  function PercentageText() {
    if (!textInside) {
      // status存在时，展示图标，否则展示进度
      if (status) {
        let statusIcon
        switch (status) {
          case 'success':
            statusIcon = <CircleCheck />
            break
          case 'warning':
            statusIcon = <WarningFilled />
            break
          case 'exception':
            statusIcon = <CircleCloseFilled />
            break
        }
        return statusIcon
      } else {
        if (format) {
          return <span>{format(percentage)}</span>
        } else {
          return <span>{percentage}%</span>
        }
      }
    }
    return <></>
  }

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          'el-progress el-progress--line',
          (status ? `is-${status}` : ''),
          className
        )
      }
      role="progressbar"
    >
      <div
        className="el-progress-bar">
        <div
          className="el-progress-bar__outer"
          style={{ height: `${strokeWidth}px` }}
        >
          <div
            className="el-progress-bar__inner"
            style={{ width: `${percentage}%`, animationDuration: '3s' }}
          >
            <InnerPercentageText />
          </div>
        </div>
      </div>
      <div
        className="el-progress__text"
        style={{ fontSize: '14.4px' }}
      >
        <PercentageText />
      </div>
    </div>
  )
}

const ProgressComponent = forwardRef<HTMLDivElement, ProgressProp>(Progress)

ProgressComponent.displayName = 'Progress'

export default ProgressComponent