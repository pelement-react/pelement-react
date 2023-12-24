import { Col, Row } from 'pelement-react'
import './LayoutBasic.scss'

function LayoutBasic() {
  return (
    <>
      <Row>
        <Col span={24}><div className="grid-content ep-bg-purple-dark" /></Col>
      </Row>
      <Row>
        <Col span={12}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={12}> <div className="grid-content ep-bg-purple-light" /></Col>
      </Row>
      <Row>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={8}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={8}> <div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}> <div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>
      </Row>
      <Row>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>
      </Row>
    </>
  )
}

export default LayoutBasic