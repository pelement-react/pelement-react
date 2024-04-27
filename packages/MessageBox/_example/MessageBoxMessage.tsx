import { Button, MessageBox, Switch } from 'pelement-react'

function MessageBoxMessage() {
  function open() {
    MessageBox.alert(
      <><span>Message can be </span><i style={{ color: 'teal' }}>VNode</i></>,
      'Message',
    )
  }

  function open1() {
    MessageBox.alert(
      <><Switch defaultChecked /></>,
      'Message',
    )
  }

  return (
    <>
      <Button plain onClick={open}>Common VNode</Button>
      <Button plain onClick={open1}>Dynamic props</Button>
    </>
  )
}

export default MessageBoxMessage