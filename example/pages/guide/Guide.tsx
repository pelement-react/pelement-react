import { NavLink, Outlet } from 'react-router-dom'

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
            <p className="sidebar-group__title">其他</p>
            <NavLink to="recommendation">社区精选组件</NavLink>
          </section>
        </div>
      </aside>
      <main className="page-content">
        <div className="blog-content">
          <div className="markdown-body">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </>
  )
}

export default GuidePage