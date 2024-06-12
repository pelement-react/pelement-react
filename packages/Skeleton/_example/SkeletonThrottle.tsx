import { useState } from 'react'
import { Button, Skeleton, SkeletonItem, Space } from 'pelement-react'

function SkeletonThrottle() {
  const [loading, setLoading] = useState(false)
  const currentDate = new Date().toDateString()

  return (
    <>
      <Space direction="vertical" alignment="flex-start">
        <div>
          <label
            style={{ marginRight: '16px' }}
            onClick={() => setLoading(loading ? false : true)}
          >
            Switch Loading
          </label>
          <span>{loading ? 'true' : 'false'}</span>
        </div>
        <Skeleton
          style={{ width: '240px' }}
          loading={loading}
          animated
          throttle={500}
          custom={
            <>
              <SkeletonItem variant="image" style={{ width: '240px', height: '240px' }} />
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
          <div>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              className="image"
            />
            <div style={{ padding: '14px' }}>
              <span>Delicious hamburger</span>
              <div className="bottom card-header">
                <div className="time">{currentDate}</div>
                <Button text className="button">Operation button</Button>
              </div>
            </div>
          </div>
        </Skeleton>
      </Space>
    </>
  )
}

export default SkeletonThrottle