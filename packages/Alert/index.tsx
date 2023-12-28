import { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { Close } from 'pelement-react'
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
  } = props

  const [showAlert, setShowAlert] = useState(true)

  // 关闭Alert
  function closeAlert() {
    setShowAlert(false)
  }

  const divStyle: React.CSSProperties = {
    display: showAlert ? '' : 'none',
    ...style
  }

  return (
    <div
      ref={ref}
      style={divStyle}
      className={
        clsx(
          className,
          'el-alert',
          `el-alert--${type}`,
          `is-${effect}`
        )
      }
      role="alert"
    >
      <div className="el-alert__content">
        <span className="el-alert__title">{title}</span>
        <Close className="el-alert__close-btn" onClick={closeAlert} />
      </div>
    </div>
  )
}

const AlertComponent = forwardRef<HTMLDivElement, AlertProps>(Alert)

AlertComponent.displayName = 'Alert'

export default AlertComponent