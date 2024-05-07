import { Button, message } from 'pelement-react'

function MessageBasic() {
  let current = 0

  function open() {
    current++
    message.success(`This is a message.${current}`)
  }

  function openReactNode() {
    current++
    message.success(<>This is a <span style={{ color: 'teal' }}>message</span>.{current}</>)
  }

  return (
    <>
      <Button plain onClick={open}>Show message</Button>
      <Button plain onClick={openReactNode}>ReactNode</Button>
    </>
  )
}

export default MessageBasic