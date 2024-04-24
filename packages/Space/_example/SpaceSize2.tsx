import { Space } from 'pelement-react'

function SpaceSize2() {
  return (
    <>
      <Space wrap size={0}>
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size={50}>
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size={100}>
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
    </>
  )
}

export default SpaceSize2