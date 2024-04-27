import { Button, MessageBox } from 'pelement-react'

function MessageBoxBasic() {
  function open() {
    MessageBox.alert('This is a message', 'Title', {
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