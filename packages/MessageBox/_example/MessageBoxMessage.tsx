import { Button, messageBox, Switch } from 'pelement-react'

function MessageBoxMessage() {
  function open() {
    messageBox.alert(
      <><span>Message can be </span><i style={{ color: 'teal' }}>VNode</i></>,
      'Message',
    )
  }

  function open1() {
    messageBox.alert(
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