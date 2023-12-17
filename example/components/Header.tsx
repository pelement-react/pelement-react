import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-wrapper">
          <div className="header-container">
            <NavLink
              to="/home"
            >pelement-react</NavLink>
            <NavLink
              to="guide"
            >指南</NavLink>
            <NavLink
              to="component"
            >组件</NavLink>
            <NavLink
              to="blog"
            >博客</NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header