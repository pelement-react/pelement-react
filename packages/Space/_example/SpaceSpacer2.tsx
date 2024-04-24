import { Button, Divider, Space } from 'pelement-react'

function SpaceSpacer2() {
  return (
    <>
      <Space size={10} spacer={<Divider direction="vertical" />}>
        <Button> button 1 </Button>
        <Button> button 2 </Button>
      </Space>
    </>
  )
}

export default SpaceSpacer2