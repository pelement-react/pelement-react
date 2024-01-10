import { Avatar } from "pelement-react"

function AvatarFit() {
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

  const fitAvatars = fits.map((item: any, index: number) => {
    return (
      <div className="block" key={index}>
        <span className="title">{item}</span>
        <Avatar shape="square" size={100} fit={item} src={url} />
      </div>
    )
  })

  return (
    <>
      <div className="avatar-fit">
        {fitAvatars}
      </div>
    </>
  )
}

export default AvatarFit