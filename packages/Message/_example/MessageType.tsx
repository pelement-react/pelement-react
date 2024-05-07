import { Button, message } from 'pelement-react'

function MessageType() {
  const open1 = () => {
    message.info('This is a message.')
  }
  const open2 = () => {
    message.success('Congrats, this is a success message.')
  }
  const open3 = () => {
    message.warning('Warning, this is a warning message.')
  }
  const open4 = () => {
    message.error('Oops, this is a error message.')
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

export default MessageType