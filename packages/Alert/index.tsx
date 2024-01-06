import { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { CircleCheckFilled, CircleCloseFilled, Close, InfoFilled, WarningFilled } from 'pelement-react'
import { AlertProps } from './interface'
import './style'

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    type = 'info',
    title,
    effect = 'light',
    closable = true,
    closeText,
    close,
    showIcon = false,
    center = false,
    description,
  } = props

  const [showAlert, setShowAlert] = useState(true)

  // 图标
  function AlertIcon() {
    if (!showIcon) {
      return <></>
    }
    let Icon = <></>
    switch (type) {
      case 'success':
        Icon = <>
          <CircleCheckFilled
            className={
              clsx(
                'el-alert__icon',
                { 'is-big': description }
              )
            } />
        </>
        break
      case 'info':
        Icon = <>
          <InfoFilled
            className={
              clsx(
                'el-alert__icon',
                { 'is-big': description }
              )
            } />
        </>
        break
      case 'warning':
        Icon = <>
          <WarningFilled
            className={
              clsx(
                'el-alert__icon',
                { 'is-big': description }
              )
            } />
        </>
        break
      case 'error':
        Icon = <>
          <CircleCloseFilled
            className={
              clsx(
                'el-alert__icon',
                { 'is-big': description }
              )
            } />
        </>
        break
    }
    return Icon
  }

  // 描述
  function Description() {
    if (description) {
      return <><p className="el-alert__description">{description}</p></>
    }
    return <></>
  }

  // 关闭Alert
  function closeAlert() {
    if (close) {
      close()
    }
    setShowAlert(false)
  }

  const divStyle: React.CSSProperties = {
    display: showAlert ? '' : 'none',
    ...style
  }

  // closable关闭组件
  function Cloable() {
    if (closable) {
      // 自定义关闭按钮文本
      if (closeText) {
        return (
          <>
            <div className="el-alert__close-btn is-customed" onClick={closeAlert}>{closeText}</div>
          </>
        )
      } else {
        return (
          <>
            <Close className="el-alert__close-btn" onClick={closeAlert} />
          </>
        )
      }
    } else {
      return <></>
    }
  }

  return (
    <div
      ref={ref}
      style={divStyle}
      className={
        clsx(
          'el-alert',
          `el-alert--${type}`,
          `is-${effect}`,
          { 'is-center': center },
          className,
        )
      }
      role="alert"
    >
      <AlertIcon />
      <div className="el-alert__content">
        <span
          className={
            clsx(
              'el-alert__title',
              { 'is-bold': description }
            )
          }
        >{title}</span>
        <Description />
        <Cloable />
      </div>
    </div>
  )
}

const AlertComponent = forwardRef<HTMLDivElement, AlertProps>(Alert)

AlertComponent.displayName = 'Alert'

export default AlertComponent