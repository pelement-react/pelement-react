import { Button, Col, Result, Row } from 'pelement-react'

function ResultBasic() {
  return (
    <>
      <Row>
        <Col sm={12} lg={6}>
          <Result
            icon="success"
            title="Success Tip"
            subTitle="Please follow the instructions"
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
        <Col sm={12} lg={6}>
          <Result
            icon="warning"
            title="Warning Tip"
            subTitle="Please follow the instructions"
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
        <Col sm={12} lg={6}>
          <Result
            icon="error"
            title="Error Tip"
            subTitle="Please follow the instructions"
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
        <Col sm={12} lg={6}>
          <Result
            icon="info"
            title="Info Tip"
            subTitle={<p>Using slot as subtitle</p>}
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
      </Row>
    </>
  )
}

export default ResultBasic