import { useState } from 'react'
import { Button, Tooltip } from 'pelement-react'

function TooltipDisabled() {
  const [disabled, setDisabled] = useState(true)

  function changeDisabled() {
    setDisabled(!disabled)
  }

  return (
    <>
      <Tooltip
        disabled={disabled}
        content="click to close tooltip function"
        placement="bottom"
        effect="light"
      >
        <Button onClick={changeDisabled}>
          click to {disabled ? 'active' : 'close'} tooltip function
        </Button>
      </Tooltip >
    </>
  )
}

export default TooltipDisabled