import { Button, Tooltip } from 'pelement-react'

function TooltipContent() {
  return (
    <>
      <Tooltip placement="top" content={<>multiple lines<br />second line</>}>
        <Button>Top center</Button>
      </Tooltip>
    </>
  )
}

export default TooltipContent