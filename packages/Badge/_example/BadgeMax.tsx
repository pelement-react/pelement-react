import { Badge, Button } from 'pelement-react'

function BadgeMax() {
  return (
    <>
      <div className="common-badge">
        <Badge value={200} max={99} className="item">
          <Button>comments</Button>
        </Badge>
        <Badge value={100} max={10} className="item">
          <Button>replies</Button>
        </Badge>
      </div>
    </>
  )
}

export default BadgeMax