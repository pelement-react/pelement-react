import { Badge, Button } from 'pelement-react'
import './BadgeBasic.scss'

function BadgeBasic() {
  return (
    <>
      <div className="common-badge">
        <Badge value={12} className="item">
          <Button>comments</Button>
        </Badge>
        <Badge value={3} className="item">
          <Button>replies</Button>
        </Badge>
        <Badge value={1} className="item" type="primary">
          <Button>comments</Button>
        </Badge>
        <Badge value={2} className="item" type="warning">
          <Button>replies</Button>
        </Badge>
      </div>
    </>
  )
}

export default BadgeBasic