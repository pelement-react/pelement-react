import { Routes, Route, NavLink } from 'react-router-dom'
import BuildError from './BuildError'

function BlogPage() {
  return (
    <>
      <aside className="sidebar">
        <NavLink
          to="build-error"
        >buile error</NavLink>
      </aside>
      <main className="page-content">
        <div className="blog-content">
          <Routes>
            <Route path="build-error" element={<BuildError />}></Route>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default BlogPage