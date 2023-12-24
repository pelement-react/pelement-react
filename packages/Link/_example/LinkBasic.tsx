import { Link } from 'pelement-react'
import './LinkBasic.scss'

function LinkBasic() {
  return (
    <>
      <div className="common-link">
        <Link href="https://pelement-react.github.io/pelement-react/" target="_blank">default</Link>
        <Link type="primary">primary</Link>
        <Link type="success">success</Link>
        <Link type="warning">warning</Link>
        <Link type="danger">danger</Link>
        <Link type="info">info</Link>
      </div>
    </>
  )
}

export default LinkBasic