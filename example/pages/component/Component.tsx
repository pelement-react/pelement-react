import { Routes, Route, NavLink } from 'react-router-dom'
import ButtonPage from './button/Button'
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
          <Route path="button" element={<ButtonPage />}></Route>
          <Route path="border" element={<BorderPage />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default ComponentPage