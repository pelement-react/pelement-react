import { Button, Space } from 'pelement-react'

function SpaceAlignment() {
  return (
    <>
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>
        <Space>
          string
          <Button> button </Button>
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>1</div>
        </Space>
      </div>
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>
        <Space alignment="flex-start">
          string
          <Button> button </Button>
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>2</div>
        </Space>
      </div>
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px' }}>
        <Space alignment="flex-end">
          string
          <Button> button </Button>
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>3</div>
        </Space>
      </div>
    </>
  )
}

export default SpaceAlignment