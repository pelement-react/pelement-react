import { forwardRef, useEffect } from 'react'
import clsx from 'clsx'
import { MessageProps } from './interface'

const Message: React.ForwardRefRenderFunction<HTMLDivElement, MessageProps> = (
  props,
  ref,
) => {
  const {
    id,
    offset,
    text,
    type,
    plain = false,
    center = false,
    showClose = false,
    handlerClose
  } = props

  let timer

  useEffect(() => {
    startTimer()
  }, [id])

  // 开始定时器
  function startTimer() {
    // 设置定时器，移除message
    timer = setTimeout(() => {
      close()
    }, 3000)
  }

  // 清除定时器
  function clearTimer() {
    clearTimeout(timer)
  }

  // 关闭message
  function close() {
    if (handlerClose) {
      handlerClose(id)
    }
  }

  return (
    <div
      ref={ref}
      id={`message_${id}`}
      className={
        clsx(
          `el-message el-message--${type}`,
          { 'is-plain': plain, 'is-center': center }
        )
      }
      role="alert"
      style={{ top: `${offset}px`, zIndex: 2038 }}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
    >
      <i className="el-icon el-message__icon el-message-icon--info">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"></path>
        </svg>
      </i>
      <p className="el-message__content">{text}</p>
      {/* 关闭按钮 */}
      {showClose &&
        <i className="el-icon el-message__closeBtn" onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg>
        </i>
      }
    </div>
  )
}

const MessageComponent = forwardRef<HTMLDivElement, MessageProps>(Message)

MessageComponent.displayName = 'Message'

export default MessageComponent