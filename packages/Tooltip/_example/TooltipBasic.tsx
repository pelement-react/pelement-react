import { Button, Tooltip } from 'pelement-react'
import './TooltipBasic.scss'

function TooltipBasic() {
  return (
    <>
      <div className="common-tooltip">
        <div className="row center">
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Top Left prompts info"
            placement="top-start"
          >
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Top Center prompts info"
            placement="top"
          >
            <Button>top</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Top Right prompts info"
            placement="top-end"
          >
            <Button>top-end</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Left Top prompts info"
            placement="left-start"
          >
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Right Top prompts info"
            placement="right-start"
          >
            <Button>right-start</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Left Center prompts info"
            placement="left"
          >
            <Button className="mt-3 mb-3">left</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Right Center prompts info"
            placement="right"
          >
            <Button>right</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Left Bottom prompts info"
            placement="left-end"
          >
            <Button>left-end</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Right Bottom prompts info"
            placement="right-end"
          >
            <Button>right-end</Button>
          </Tooltip>
        </div>
        <div className="row center">
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Bottom Left prompts info"
            placement="bottom-start"
          >
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Bottom Center prompts info"
            placement="bottom"
          >
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            tooltipContent="Bottom Right prompts info"
            placement="bottom-end"
          >
            <Button>bottom-end</Button>
          </Tooltip>
        </div>
      </div>
    </>
  )
}

export default TooltipBasic