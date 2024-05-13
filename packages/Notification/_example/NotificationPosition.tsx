import { Button, notification } from 'pelement-react'

function NotificationType() {
  function open1() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the top right corner",
    })
  }

  function open2() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the bottom right corner",
      position: 'bottom-right',
    })
  }

  function open3() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the bottom left corner",
      position: 'bottom-left',
    })
  }

  function open4() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the top left corner",
      position: 'top-left',
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Top Right</Button>
      <Button plain onClick={open2}>Bottom Right</Button>
      <Button plain onClick={open3}>Bottom Left</Button>
      <Button plain onClick={open4}>Top Left</Button>
    </>
  )
}

export default NotificationType