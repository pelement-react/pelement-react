import { Col, Row } from 'pelement-react'

function LayoutGutter() {
  return (
    <>
      <Row gutter={20}>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
    </>
  )
}

export default LayoutGutter