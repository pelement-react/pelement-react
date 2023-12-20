import { Routes, Route, NavLink } from 'react-router-dom'
import BuildError from './build-error.zh-CN.mdx'
import CannotFindModule from './cannot-find-module.zh-CN.mdx'

function BlogPage() {
  return (
    <>
      <aside className="sidebar">
        <NavLink
          to="build-error"
        >buile error</NavLink>
        <NavLink
          to="cannot-find-module"
        >cannot-find-module</NavLink>
      </aside>
      <main className="page-content">
        <div className="blog-content">
          <Routes>
            <Route path="build-error" element={<BuildError />}></Route>
            <Route path="cannot-find-module" element={<CannotFindModule />}></Route>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default BlogPage