import { Button, message } from 'pelement-react'

function MessageCenter() {
  const open = () => {
    message.open({
      message: 'Centered text',
      type: 'info',
      center: true,
    })
  }

  return (
    <>
      <Button plain onClick={open}>Centered text</Button>
    </>
  )
}

export default MessageCenter