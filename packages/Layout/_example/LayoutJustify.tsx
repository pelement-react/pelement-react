import { Col, Row } from 'pelement-react'

function LayoutJustify() {
  return (
    <>
      <Row className="row-bg">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="center">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="end">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="space-between">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="space-around">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="space-evenly">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
    </>
  )
}

export default LayoutJustify