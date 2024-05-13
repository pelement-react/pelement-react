import { Button, notification } from 'pelement-react'

function NotificationType() {
  function open1() {
    notification.open({
      title: 'Success',
      message: 'This is a success message',
      type: 'success',
    })
  }

  function open2() {
    notification.open({
      title: 'Warning',
      message: 'This is a warning message',
      type: 'warning',
    })
  }

  function open3() {
    notification.open({
      title: 'Info',
      message: 'This is an info message',
      type: 'info',
    })
  }

  function open4() {
    notification.open({
      title: 'Error',
      message: 'This is an error message',
      type: 'error',
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Success</Button>
      <Button plain onClick={open2}>Warning</Button>
      <Button plain onClick={open3}>Info</Button>
      <Button plain onClick={open4}>Error</Button>
    </>
  )
}

export default NotificationType