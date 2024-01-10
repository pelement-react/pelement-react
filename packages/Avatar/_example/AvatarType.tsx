import { Avatar, UserFilled } from 'pelement-react'

function AvatarType() {
  return (
    <>
      <div className="common-avatar">
        <div>
          <Avatar icon={<UserFilled />} />
        </div>
        <div>
          <Avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
        <div>
          <Avatar> user </Avatar>
        </div>
      </div>
    </>
  )
}

export default AvatarType