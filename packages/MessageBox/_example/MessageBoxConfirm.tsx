import { Button, MessageBox } from 'pelement-react'

function MessageBoxConfirm() {
  function open() {
    MessageBox.confirm(
      'proxy will permanently delete the file. Continue?',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        onConfirm: () => {
          console.log('Delete completed')
        },
        onCancel: () => {
          console.log('Delete canceled')
        }
      }
    )
  }

  return (
    <>
      <Button plain onClick={open}>Click to open the Message Box</Button>
    </>
  )
}

export default MessageBoxConfirm