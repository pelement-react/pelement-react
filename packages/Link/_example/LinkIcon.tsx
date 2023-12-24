import { Edit, Link, View } from 'pelement-react'

function LinkIcon() {
  return (
    <>
      <div className="common-link">
        <Link icon={<Edit />}>Edit</Link>
        <Link>
          Check<View className="el-icon--right" />
        </Link>
      </div>
    </>
  )
}

export default LinkIcon