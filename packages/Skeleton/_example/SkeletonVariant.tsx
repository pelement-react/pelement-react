import { Skeleton, SkeletonItem } from 'pelement-react'

function SkeletonVariant() {
  return (
    <>
      <Skeleton
        style={{ width: '240px' }}
        custom={
          <>
            <SkeletonItem variant="image" style={{ width: '240px', height: '240px' }} />
            <div style={{ padding: '14px' }}>
              <SkeletonItem variant="p" style={{ width: '50%' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyItems: 'space-between'
                }}>
                <SkeletonItem variant="text" style={{ marginRight: '16px' }} />
                <SkeletonItem variant="text" style={{ width: '30%' }} />
              </div>
            </div>
          </>
        }
      />
    </>
  )
}

export default SkeletonVariant