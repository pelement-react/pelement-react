import { Button, message } from 'pelement-react'

function MessageBasic() {
  function open() {
    message.success('123')
  }

  return (
    <>
      <Button plain onClick={open}>Show message</Button>
    </>
  )
}

export default MessageBasic