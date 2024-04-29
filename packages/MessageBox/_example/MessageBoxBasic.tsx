import { Button, messageBox } from 'pelement-react'

function MessageBoxBasic() {
  function open() {
    messageBox.alert('This is a message', 'Title', {
      confirmButtonText: 'OK',
      callback: (action: string) => {
        alert(`action: ${action}`)
      },
    })
  }

  return (
    <>
      <Button plain onClick={open}>Click to open the Message Box</Button>
    </>
  )
}

export default MessageBoxBasic