import { Col, Row } from 'pelement-react'

function LayoutBootstrap() {
  return (
    <>
      <Row gutter={10}>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>
          <div className="grid-content ep-bg-purple" />
        </Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>
          <div className="grid-content ep-bg-purple-light" />
        </Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>
          <div className="grid-content ep-bg-purple" />
        </Col>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>
          <div className="grid-content ep-bg-purple-light" />
        </Col>
      </Row>
    </>
  )
}

export default LayoutBootstrap