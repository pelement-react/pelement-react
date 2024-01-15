import { Button, Tooltip } from 'pelement-react'

function TooltipEffect() {
  return (
    <>
      <Tooltip content="Top center" placement="top">
        <Button>Dark</Button>
      </Tooltip>
      <Tooltip content="Bottom center" placement="bottom" effect="light">
        <Button>Light</Button>
      </Tooltip>

      <Tooltip content="Bottom center" effect="customized">
        <Button>Customized theme</Button>
      </Tooltip>
    </>
  )
}

export default TooltipEffect