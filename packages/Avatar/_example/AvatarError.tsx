import { Avatar } from 'pelement-react'

function AvatarError() {

  function errorHandler() {
    console.log('error')
  }

  return (
    <>
      <div className="demo-type">
        <Avatar size={60} src="https://empty" onError={errorHandler}>
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </Avatar>
      </div>
    </>
  )
}

export default AvatarError