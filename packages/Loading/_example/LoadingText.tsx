import { useState } from 'react'
import { Button, Loading } from 'pelement-react'

function LoadingText() {
  const [fullscreen, setFullscreen] = useState(false)

  function handleClick() {
    setFullscreen(true)
    setTimeout(() => {
      setFullscreen(false)
    }, 3000)
  }

  return (
    <>
      <Button onClick={handleClick}>全屏</Button>
      <Loading fullscreen={fullscreen} text="Loading...">
        <div style={{ height: '200px' }}></div>
      </Loading>
    </>
  )
}

export default LoadingText