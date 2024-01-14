import { Button, Tooltip } from 'pelement-react'

function TooltipEffect() {
  return (
    <>
      <Tooltip tooltipContent="Top center" placement="top">
        <Button>Dark</Button>
      </Tooltip>
      <Tooltip tooltipContent="Bottom center" placement="bottom" effect="light">
        <Button>Light</Button>
      </Tooltip>

      <Tooltip tooltipContent="Bottom center" effect="customized">
        <Button>Customized theme</Button>
      </Tooltip>
    </>
  )
}

export default TooltipEffect