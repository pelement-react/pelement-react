import { Button, Tooltip } from 'pelement-react'

function TooltipContent() {
  return (
    <>
      <Tooltip placement="top" tooltipContent={<>multiple lines<br />second line</>}>
        <Button>Top center</Button>
      </Tooltip>
    </>
  )
}

export default TooltipContent