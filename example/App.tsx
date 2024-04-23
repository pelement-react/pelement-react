import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'

function App() {
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
