import { Routes, Route, NavLink } from 'react-router-dom'
import InstallationMdx from './installation.zh-CN.mdx'
import ChangelogMdx from './changelog.zh-CN.mdx'

function GuidePage() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-groups">
          <section className="sidebar-group">
            <p className="sidebar-group__title">基础</p>
            <NavLink to="installation">安装</NavLink>
            <p className="sidebar-group__title">进阶</p>
            <NavLink to="changelog">更新日志</NavLink>
          </section>
        </div>
      </aside>
      <main className="page-content">
        <div className="blog-content">
          <Routes>
            <Route path="installation" element={<InstallationMdx />}></Route>
            <Route path="changelog" element={<ChangelogMdx />}></Route>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default GuidePage