import { Avatar, Col, Row } from 'pelement-react'
import './AvatarBasic.scss'

function AvatarBasic() {
  const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
  const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
  const sizeList = ['small', '', 'large']

  const sizeAvatars = sizeList.map((item: any, index: number) => {
    return (
      <div className="block" key={index}>
        <Avatar size={item} src={circleUrl} />
      </div>
    )
  })

  const squareAvatars = sizeList.map((item: any, index: number) => {
    return (
      <div className="block" key={index}>
        <Avatar shape="square" size={item} src={squareUrl} />
      </div>
    )
  })

  return (
    <>
      <Row className="common-avatar">
        <Col span={12}>
          <div className="sub-title">circle</div>
          <div className="demo-basic--circle">
            <div className="block">
              <Avatar size={50} src={circleUrl} />
            </div>
            {sizeAvatars}
          </div>
        </Col>
        <Col span={12}>
          <div className="sub-title">square</div>
          <div className="demo-basic--circle">
            <div className="block">
              <Avatar shape="square" size={50} src={squareUrl} />
            </div>
            {squareAvatars}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AvatarBasic