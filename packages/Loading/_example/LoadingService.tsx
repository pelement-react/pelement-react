import { Button, loading } from 'pelement-react'

function LoadingService() {
  function handleClick() {
    loading.open({})

    setTimeout(() => {
      loading.close()
    }, 5000)
  }

  return (
    <>
      <Button onClick={handleClick}>open fullscreen</Button>
    </>
  )
}

export default LoadingService