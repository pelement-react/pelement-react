import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <div className="App">
        <Header />
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
