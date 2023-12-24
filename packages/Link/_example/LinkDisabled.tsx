import { Link } from 'pelement-react'

function LinkDisabled() {
  return (
    <>
      <div className="common-link">
        <Link disabled>default</Link>
        <Link type="primary" disabled>primary</Link>
        <Link type="success" disabled>success</Link>
        <Link type="warning" disabled>warning</Link>
        <Link type="danger" disabled>danger</Link>
        <Link type="info" disabled>info</Link>
      </div>
    </>
  )
}

export default LinkDisabled