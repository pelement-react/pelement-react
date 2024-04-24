import { Space } from 'pelement-react'

function SpaceBasic() {
  return (
    <>
      <Space wrap>
        {
          [1, 2, 3].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
    </>
  )
}

export default SpaceBasic