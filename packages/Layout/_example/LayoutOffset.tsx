import { Col, Row } from 'pelement-react'

function LayoutOffset() {
  return (
    <>
      <Row gutter={20}>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
        <Col span={6} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
      </Row>
    </>
  )
}

export default LayoutOffset