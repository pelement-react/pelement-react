import { useState } from 'react'
import { Root, createRoot } from 'react-dom/client'
import { NotificationType } from './interface'
import NotificationComponent from './Notification'
import './style'

let el
let root: Root
// 标识消息的ID
let currentId = 0
// 添加通知
let add: (notification: NotificationType) => void

function NotificationContainer() {
  const [notifications, setNotifications] = useState<NotificationType[]>([])

  // 添加通知
  add = (notification: NotificationType) => {
    currentId++
    const newNotification = {
      id: currentId,
      title: notification?.title,
      message: notification?.message,
      type: notification?.type,
      duration: notification?.duration,
      showClose: notification?.showClose,
      position: notification?.position || 'top-right'
    }
    setNotifications((pre: NotificationType[]) => {
      const list = [...pre, newNotification]
      return setOffset(list)
    })
  }

  // 移除通知
  function remove(notificationId: number) {
    setNotifications((pre: NotificationType[]) => {
      const list = pre.filter((each) => each.id !== notificationId)
      return setOffset(list)
    })
  }

  // 获取notification的offset
  function setOffset(list: NotificationType[]) {
    // 获取当前notification的高度
    let topRight = 0
    let topLeft = 0
    let bottomRight = 0
    let bottomLeft = 0
    list.forEach((notificationItem: NotificationType) => {
      if (notificationItem.position) {
        if (notificationItem.position === 'top-right') {
          // 当前notification的top = 前一个notification的offsetHeight + 16
          topRight += 16
          notificationItem.top = topRight
          // 获取当前notification的offsetHeight
          topRight += document.getElementById(`notification_${notificationItem.id}`)?.offsetHeight || 0
        } else if (notificationItem.position === 'top-left') {
          // 当前notification的top = 前一个notification的offsetHeight + 16
          topLeft += 16
          notificationItem.top = topLeft
          // 获取当前notification的offsetHeight
          topLeft += document.getElementById(`notification_${notificationItem.id}`)?.offsetHeight || 0
        } else if (notificationItem.position === 'bottom-right') {
          // 当前notification的bottom = 前一个notification的offsetHeight + 16
          bottomRight += 16
          notificationItem.bottom = bottomRight
          // 获取当前notification的offsetHeight
          bottomRight += document.getElementById(`notification_${notificationItem.id}`)?.offsetHeight || 0
        } else {
          // 当前notification的bottom = 前一个notification的offsetHeight + 16
          bottomLeft += 16
          notificationItem.bottom = bottomLeft
          // 获取当前notification的offsetHeight
          bottomLeft += document.getElementById(`notification_${notificationItem.id}`)?.offsetHeight || 0
        }
      }
    })

    return list
  }

  return (
    <>
      {notifications.map((item, index) =>
        <NotificationComponent
          key={index}
          id={item.id}
          top={item.top}
          bottom={item.bottom}
          title={item.title}
          message={item.message}
          type={item.type}
          duration={item.duration}
          showClose={item.showClose}
          position={item.position}
          handleClose={remove}
        />
      )}
    </>
  )
}

const notification = {
  open: (notification: NotificationType) => {
    add(notification)
  }
}

// 挂载容器到页面
const createNotification = () => {
  el = document.createElement('div')
  el.id = 'el-notification-container'
  document.body.append(el)
  root = createRoot(el)
  root.render(<NotificationContainer />)
}
createNotification()

export default notification
