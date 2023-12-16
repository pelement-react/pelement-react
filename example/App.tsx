import './App.css'
import { Button } from '../packages'

function App() {
  return (
    <>
      <h1>pelement-react</h1>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </>
  )
}

export default App
