import { Routes, Route, NavLink } from 'react-router-dom'
import Changelog from './Changelog'

function GuidePage() {
  return (
    <>
      <aside className="sidebar">
        <NavLink
          to="changelog"
        >更新日志</NavLink>
      </aside>
      <main className="page-content">
        <div className="blog-content">
          <Routes>
            <Route path="changelog" element={<Changelog />}></Route>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default GuidePage