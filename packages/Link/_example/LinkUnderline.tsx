import { Link } from 'pelement-react'

function LinkUnderline() {
  return (
    <>
      <div className="common-link">
        <Link underline={false}>Without Underline</Link>
        <Link>With Underline</Link>
      </div >
    </>
  )
}

export default LinkUnderline