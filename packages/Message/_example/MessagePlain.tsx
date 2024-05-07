import { Button, message } from 'pelement-react'

function MessagePlain() {
  const open1 = () => {
    message.open({
      message: 'This is a message.',
      type: 'info',
      plain: true,
    })
  }
  const open2 = () => {
    message.open({
      message: 'Congrats, this is a success message.',
      type: 'success',
      plain: true,
    })
  }
  const open3 = () => {
    message.open({
      message: 'Warning, this is a warning message.',
      type: 'warning',
      plain: true,
    })
  }
  const open4 = () => {
    message.open({
      message: 'Oops, this is a error message.',
      type: 'error',
      plain: true,
    })
  }

  return (
    <>
      <Button plain onClick={open2}>Success</Button>
      <Button plain onClick={open3}>Warning</Button>
      <Button plain onClick={open1}>Message</Button>
      <Button plain onClick={open4}>Error</Button>
    </>
  )
}

export default MessagePlain