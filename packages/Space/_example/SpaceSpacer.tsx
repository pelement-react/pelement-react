import { Button, Space } from 'pelement-react'

function SpaceSpacer() {
  return (
    <>
      <Space size={10} spacer="|">
        <Button> button 1 </Button>
        <Button> button 2 </Button>
      </Space>
    </>
  )
}

export default SpaceSpacer