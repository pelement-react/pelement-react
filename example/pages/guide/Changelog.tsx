import './Changelog.scss'

function Changelog() {
  return (
    <>
      <div className="changelog-content">
        <h1>更新日志</h1>
        <div className="version">
          <div className="version-title">0.0.1-alpha.0</div>
          <div className="version-time">2023-12-16</div>
          <div className="version-content">
            <p>Features</p>
            <ul>
              <li>Initialize component library</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Changelog