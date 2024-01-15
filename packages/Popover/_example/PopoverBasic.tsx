import { Button, Popover } from 'pelement-react'

function PopoverBasic() {
  return (
    <>
      <Popover
        placement="top-start"
        title="Title"
        width={200}
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">Hover to activate</Button>
      </Popover>
      <Popover
        placement="bottom"
        title="Title"
        width={200}
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">Click to activate</Button>
      </Popover>
      <Popover
        placement="right"
        title="Title"
        width={200}
        trigger="focus"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">Focus to activate</Button>
      </Popover>
      <Popover
        title="Title"
        width={200}
        trigger="contextmenu"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">contextmenu to activate</Button>
      </Popover>
    </>
  )
}

export default PopoverBasic