import { forwardRef, useEffect } from 'react'
import clsx from 'clsx'
import { CircleCheckFilled, CircleCloseFilled, InfoFilled, WarningFilled } from 'pelement-react'
import { NotificationProps } from './interface'

const Notification: React.ForwardRefRenderFunction<HTMLDivElement, NotificationProps> = (
  props,
  ref
) => {
  const {
    style,
    className,
    id,
    top,
    bottom,
    title,
    message,
    type = '',
    duration,
    showClose = true,
    position = 'top-right',
    handleClose,
  } = props

  let timer

  useEffect(() => {
    !duration && startTimer()
  }, [id])

  // 开启定时器
  function startTimer() {
    // 设置定时器，移除notification
    timer = setTimeout(() => {
      close()
    }, 4500)
  }

  // 清除定时器
  function clearTimer() {
    !duration && clearTimeout(timer)
  }

  // 关闭notification
  function close() {
    if (handleClose && id) {
      handleClose(id)
    }
  }

  const divStyle: React.CSSProperties = {
    ...style,
    top: `${top}px`,
    bottom: `${bottom}px`,
    zIndex: 2022
  }

  function TypeIcon() {
    let Icon = <></>
    switch (type) {
      case 'success':
        Icon = <CircleCheckFilled className="el-notification__icon el-notification--success" />
        break
      case 'warning':
        Icon = <WarningFilled className="el-notification__icon el-notification--warning" />
        break
      case 'info':
        Icon = <InfoFilled className="el-notification__icon el-notification--info" />
        break
      case 'error':
        Icon = <CircleCloseFilled className="el-notification__icon el-notification--error" />
        break
    }
    return Icon
  }

  return (
    <>
      <div
        ref={ref}
        style={divStyle}
        className={
          clsx(
            {
              'el-notification': true,
              right: ['top-right', 'bottom-right'].includes(position),
              left: ['top-left', 'bottom-left'].includes(position)
            },
            className
          )
        }
        id={`notification_${id}`}
        role="alert"
        onMouseEnter={clearTimer}
        onMouseLeave={startTimer}
      >
        <TypeIcon />
        <div className="el-notification__group">
          <h2 className="el-notification__title">{title}</h2>
          <div className="el-notification__content">
            {message}
          </div>
          {showClose &&
            <i className="el-icon el-notification__closeBtn" onClick={close}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
              </svg>
            </i>
          }
        </div>
      </div>
    </>
  )
}

const NotificationComponent = forwardRef<HTMLDivElement, NotificationProps>(Notification)

NotificationComponent.displayName = 'Notification'

export default NotificationComponent