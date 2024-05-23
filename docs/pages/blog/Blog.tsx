import { NavLink, Outlet } from 'react-router-dom'

function BlogPage() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-groups">
          <section className="sidebar-group">
            <NavLink to="build-error">buile error</NavLink>
            <NavLink to="cannot-find-module">cannot-find-module</NavLink>
          </section>
        </div>
      </aside>
      <main className="page-content">
        <div className="blog-content">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  )
}

export default BlogPage