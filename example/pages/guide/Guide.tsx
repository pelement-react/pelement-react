import { Routes, Route, NavLink } from 'react-router-dom'
import ChangelogMdx from './changelog.zh-CN.mdx'

function GuidePage() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-groups">
          <section className="sidebar-group">
            <NavLink to="changelog">更新日志</NavLink>
          </section>
        </div>
      </aside>
      <main className="page-content">
        <div className="blog-content">
          <Routes>
            <Route path="changelog" element={<ChangelogMdx />}></Route>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default GuidePage