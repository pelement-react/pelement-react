import { Button, notification } from 'pelement-react'

function NotificationShowClose() {
  function open1() {
    notification.open({
      title: 'Info',
      message: 'This is a message without close button',
      showClose: false,
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Hide close button</Button>
    </>
  )
}

export default NotificationShowClose