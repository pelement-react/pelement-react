import { Badge, Button } from 'pelement-react'

function BadgeValue() {
  return (
    <>
      <div className="common-badge">
        <Badge value="new" className="item">
          <Button>comments</Button>
        </Badge>
        <Badge value="hot" className="item">
          <Button>replies</Button>
        </Badge>
      </div>
    </>
  )
}

export default BadgeValue