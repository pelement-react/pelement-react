import { useState } from 'react'
import { Root, createRoot } from 'react-dom/client'
import { MessageItem, MessageType } from './interface'
import MessageComponent from './Message'
import './style'

let el
let root: Root
// 标识消息的ID
let incrementId = 0
// 添加消息
let add: (message: any) => void

function MessageContainer() {
  const [messages, setMessages] = useState<MessageItem[]>([])

  // 添加消息
  add = (messageType: MessageType) => {
    const id = incrementId++
    const newMessage = {
      id: id,
      text: messageType.message,
      type: messageType.type,
      offset: 0,
      plain: messageType.plain || false,
      center: messageType.center || false,
      showClose: messageType.showClose || false,
    }
    setMessages((pre: MessageItem[]) => {
      const list = [...pre, newMessage]
      return setUpOffset(list)
    })
  }

  // 移除消息
  function remove(messageId: number) {
    setMessages((pre: MessageItem[]) => {
      const list = pre.filter((each) => each.id !== messageId)
      return setUpOffset(list)
    })
  }

  // 获取message的offset
  function setUpOffset(list: MessageItem[]) {
    // 获取当前message的高度
    let verticalOffset = 0
    list.forEach((messageItem) => {
      // 当前message的offset = 前一个message的offsetHeight + 16
      verticalOffset += 16
      messageItem.offset = verticalOffset
      // 获取当前message的offsetHeight
      verticalOffset += (document.getElementById(`message_${messageItem.id}`)?.offsetHeight || 0)
    })

    return list
  }

  return (
    <>
      {messages.map((item, index) =>
        <MessageComponent
          key={index}
          id={item.id}
          offset={item.offset}
          text={item.text}
          type={item.type}
          plain={item.plain}
          center={item.center}
          showClose={item.showClose}
          handleClose={remove}
        />
      )}
    </>
  )
}

const message = {
  open: (messageType: MessageType) => {
    add(messageType)
  },
  success: (text: string | React.ReactNode) => {
    message.open({
      message: text,
      type: 'success'
    })
  },
  warning: (text: string | React.ReactNode) => {
    message.open({
      message: text,
      type: 'warning'
    })
  },
  info: (text: string | React.ReactNode) => {
    message.open({
      message: text,
      type: 'info'
    })
  },
  error: (text: string | React.ReactNode) => {
    message.open({
      message: text,
      type: 'error'
    })
  }
}

// 挂载容器到页面
const createMessage = () => {
  el = document.createElement('div')
  el.id = 'el-message-container'
  document.body.append(el)
  root = createRoot(el)
  root.render(<MessageContainer />)
}
createMessage()

export default message