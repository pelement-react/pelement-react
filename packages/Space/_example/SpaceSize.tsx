import { Space } from 'pelement-react'

function SpaceSize() {
  return (
    <>
      <Space wrap size="large">
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size="default">
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size="small">
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
    </>
  )
}

export default SpaceSize