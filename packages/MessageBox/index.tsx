import { forwardRef, MouseEvent } from 'react'
import { createRoot, Root } from 'react-dom/client'
import clsx from 'clsx'
import { CircleCheckFilled, CircleCloseFilled, Close, InfoFilled, WarningFilled } from 'pelement-react'
import { MessageBoxProps, MessageBoxContainerProps } from './interface'
import './style'

const MessageBoxContainer: React.ForwardRefRenderFunction<HTMLDivElement, MessageBoxProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    trigger,
    title,
    message,
    type,
    confirmButtonText = 'ok',
    cancelButtonText = 'cancel',
    onCallback,
    onClose,
    onCancel,
    onConfirm,
  } = props

  // 处理关闭事件
  function handlerClose(event: MouseEvent<HTMLButtonElement>) {
    if (onClose) {
      onClose(event)
    }
    if (onCallback) {
      onCallback('close')
    }
  }

  // 处理取消事件
  function handlerCancel(event: MouseEvent<HTMLButtonElement>) {
    if (onCancel) {
      onCancel(event)
    }
    if (onCallback) {
      onCallback('close')
    }
  }

  // 处理确认事件
  function handlerConfirm(event: MouseEvent<HTMLButtonElement>) {
    if (onConfirm) {
      onConfirm(event)
    }
    if (onCallback) {
      onCallback('confirm')
    }
  }

  // 图标
  function AlertIcon() {
    if (!type) {
      return <></>
    }
    let Icon = <></>
    switch (type) {
      case 'success':
        Icon = <>
          <CircleCheckFilled className="el-message-box__status el-message-box-icon--success" />
        </>
        break
      case 'info':
        Icon = <>
          <InfoFilled className="el-message-box__status el-message-box-icon--info" />
        </>
        break
      case 'warning':
        Icon = <>
          <WarningFilled className="el-message-box__status el-message-box-icon--warning" />
        </>
        break
      case 'error':
        Icon = <>
          <CircleCloseFilled className="el-message-box__status el-message-box-icon--error" />
        </>
        break
    }
    return Icon
  }

  return (
    <>
      <div
        ref={ref}
        role="dialog"
        style={style}
        className={
          clsx(
            'el-overlay-message-box',
            className
          )
        }
      >
        <div className="el-message-box">
          <div className="el-message-box__header show-close">
            <div className="el-message-box__title">
              <span>{title}</span>
            </div>
            {/* 关闭按钮 */}
            <button type="button" className="el-message-box__headerbtn" onClick={handlerClose}>
              <Close className="el-message-box__close" />
            </button>
          </div>
          <div className="el-message-box__content">
            <div className="el-message-box__container">
              {/* 图标 */}
              {trigger === 'confirm' &&
                <AlertIcon />
              }
              <div className="el-message-box__message">
                <p>{message}</p>
              </div>
            </div>
          </div>
          <div className="el-message-box__btns">
            {/* 取消按钮 */}
            {trigger === 'confirm' &&
              <button type="button" className="el-button" onClick={handlerCancel}>
                <span className="">{cancelButtonText}</span>
              </button>
            }
            {/* 确认按钮 */}
            <button type="button" className="el-button el-button--primary" onClick={handlerConfirm}>
              <span className="">{confirmButtonText}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const MessageBoxContainerComponent = forwardRef<HTMLDivElement, MessageBoxProps>(MessageBoxContainer)

let root: Root
let el: HTMLElement

const MessageBox = {
  onClose: (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    root.unmount()
    document.body.removeChild(el)
  },
  onCancel: (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    root.unmount()
    document.body.removeChild(el)
  },
  onConfirm: (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    root.unmount()
    document.body.removeChild(el)
  },
  alert: (message: string | React.ReactNode, title: string, context?: MessageBoxContainerProps) => {
    el = document.createElement('div')
    el.className = 'el-overlay is-message-box'
    el.style.zIndex = '2008'
    document.body.append(el)
    root = createRoot(el)
    root.render(
      <MessageBoxContainerComponent
        trigger="alert"
        title={title}
        message={message}
        confirmButtonText={context?.confirmButtonText}
        onCallback={context?.callback}
        onClose={MessageBox.onClose}
        onCancel={MessageBox.onCancel}
        onConfirm={MessageBox.onConfirm}
      />
    )
  },
  confirm: (message: string | React.ReactNode, title: string, context: MessageBoxContainerProps = {}) => {
    el = document.createElement('div')
    el.className = 'el-overlay is-message-box'
    el.style.zIndex = '2008'
    document.body.append(el)
    root = createRoot(el)
    root.render(
      <MessageBoxContainerComponent
        trigger="confirm"
        title={title}
        message={message}
        type={context?.type}
        confirmButtonText={context?.confirmButtonText}
        cancelButtonText={context?.cancelButtonText}
        onCallback={context?.callback}
        onClose={MessageBox.onClose}
        onCancel={MessageBox.onCancel}
        onConfirm={MessageBox.onConfirm}
      />
    )
  }
}

export default MessageBox