import { useState } from 'react'
import { Button, Skeleton, SkeletonItem, Space } from 'pelement-react'

function SkeletonCount() {
  const [loading, setLoading] = useState(false)
  const lists = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
  const currentDate = new Date().toDateString()

  function handleClick() {
    setLoading(loading ? false : true)
  }

  return (
    <>
      <Space direction="vertical" alignment="flex-start">
        <Button onClick={handleClick}>Click me to reload</Button>
        <Skeleton style={{ width: '240px' }} loading={loading} animated count={3}
          custom={
            <>
              <SkeletonItem variant="image" style={{ width: '400px', height: '267px' }} />
              <div style={{ padding: '14px' }}>
                <SkeletonItem variant="h3" style={{ width: '50%' }} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'space-between',
                    marginTop: '16px',
                    height: '16px',
                  }}
                >
                  <SkeletonItem variant="text" style={{ marginRight: '16px' }} />
                  <SkeletonItem variant="text" style={{ width: '30%' }} />
                </div>
              </div>
            </>
          }
        >
          {lists.map((item, index) =>
            <div key={index}>
              <img src={item.imgUrl} style={{ maxWidth: '100%' }} />
              <div style={{ padding: '14px' }}>
                <span>{item.name}</span>
                <div className="bottom card-header">
                  <div className="time">{currentDate}</div>
                  <Button text className="button">Operation button</Button>
                </div>
              </div>
            </div>
          )}
        </Skeleton>
      </Space >

    </>
  )
}

export default SkeletonCount