import { Routes, Route, NavLink } from 'react-router-dom'
import Markdown from '../../components/Markdown/Markdown'
import BorderPage from './border/Border'

function ComponentPage() {
  return (
    <>
      <aside className="sidebar">
        <NavLink
          to="button"
        >Button 按钮</NavLink>
        <NavLink
          to="border"
        >Border 边框</NavLink>
      </aside>
      <main className="page-content">
        <Routes>
          <Route path="button" element={<Markdown name="button" />}></Route>
          <Route path="border" element={<BorderPage />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default ComponentPage