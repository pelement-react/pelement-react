import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/home/Home'
import GuidePage from '../pages/guide/Guide'
import ComponentPage from '../pages/component/Component'
import BlogPage from '../pages/blog/Blog'

function RootRoute(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/component/button" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="guide" element={<Navigate to="changelog" />} />
        <Route path="guide/*" element={<GuidePage />} />
        <Route path="component" element={<Navigate to="button" />} />
        <Route path="component/*" element={<ComponentPage />} />
        <Route path="blog" element={<Navigate to="build-error" />} />
        <Route path="blog/*" element={<BlogPage />} />
      </Routes>
    </>
  )
}

export default RootRoute