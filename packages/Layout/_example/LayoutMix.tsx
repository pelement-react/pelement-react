import { Col, Row } from 'pelement-react'

function LayoutMix() {
  return (
    <>
      <Row gutter={20}>
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
    </>
  )
}

export default LayoutMix