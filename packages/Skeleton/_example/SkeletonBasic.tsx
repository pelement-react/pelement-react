import { Skeleton, SkeletonItem } from 'pelement-react'

function SkeletonBasic() {
  return (
    <>
      <Skeleton />
      <br />
      <Skeleton
        style={{ ['--el-skeleton-circle-size' as string]: '100px' }}
        custom={
          <SkeletonItem variant="circle" />
        }
      />
    </>
  )
}

export default SkeletonBasic