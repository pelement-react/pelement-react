import { Routes, Route, NavLink } from 'react-router-dom'
import Markdown from '../../components/Markdown/Markdown'
import BorderPage from './border/Border'

function ComponentPage() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-groups">
          <section className="sidebar-group">
            <p className="sidebar-group__title">Basic 基础组件</p>
            <NavLink to="button">Button 按钮</NavLink>
            <NavLink to="border">Border 边框</NavLink>
            <NavLink to="container">Container 布局容器</NavLink>
            <NavLink to="icon">Icon 图标</NavLink>
          </section>
        </div>
      </aside>
      <main className="page-content">
        <Routes>
          <Route path="button" element={<Markdown name="button" />}></Route>
          <Route path="border" element={<BorderPage />}></Route>
          <Route path="container" element={<Markdown name="container" />}></Route>
          <Route path="icon" element={<Markdown name="icon" />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default ComponentPage