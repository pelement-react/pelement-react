import { Button, notification } from 'pelement-react'

function NotificationBasic() {
  function open1() {
    notification.open({
      title: 'Title',
      message: <i style={{ color: 'teal' }}>This is a reminder</i>
    })
  }

  function open2() {
    notification.open({
      title: 'Prompt',
      message: 'This is a message that does not automatically close',
      duration: 0,
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Closes automatically</Button>
      <Button plain onClick={open2}>Won't close automatically</Button>
    </>
  )
}

export default NotificationBasic