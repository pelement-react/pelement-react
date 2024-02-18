import { Badge, Button, Share } from 'pelement-react'

function BadgeIsDot() {
  return (
    <>
      <div className="common-badge">
        <Badge isDot className="item">query</Badge>
        <Badge isDot className="item">
          <Button className="share-button" icon={<Share />} type="primary" />
        </Badge>
      </div>
    </>
  )
}

export default BadgeIsDot