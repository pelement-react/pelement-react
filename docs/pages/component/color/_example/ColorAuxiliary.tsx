import { Col, Row, message } from 'pelement-react'
import './ColorPrimary.scss'

function Color(props: any) {
  const { item } = props

  function getValue(value) {
    const elRef = window?.document?.documentElement
    return window.getComputedStyle(elRef).getPropertyValue(value)
  }

  function handlerClick() {
    message.success(item + ': ' + getValue(item))
  }

  return <div
    className="bg-blue-sub-item cursor-pointer hover:shadow"
    style={{ width: '16.6667%', background: `var(${item})` }}
    onClick={handlerClick}
  >
  </div>
}

function ColorAuxiliary() {
  const successColors = [
    '--el-color-success-dark-2',
    '--el-color-success-light-3',
    '--el-color-success-light-5',
    '--el-color-success-light-7',
    '--el-color-success-light-8',
    '--el-color-success-light-9',
  ]
  const warningColors = [
    '--el-color-warning-dark-2',
    '--el-color-warning-light-3',
    '--el-color-warning-light-5',
    '--el-color-warning-light-7',
    '--el-color-warning-light-8',
    '--el-color-warning-light-9',
  ]
  const dangerColors = [
    '--el-color-danger-dark-2',
    '--el-color-danger-light-3',
    '--el-color-danger-light-5',
    '--el-color-danger-light-7',
    '--el-color-danger-light-8',
    '--el-color-danger-light-9',
  ]
  const infoColors = [
    '--el-color-info-dark-2',
    '--el-color-info-light-3',
    '--el-color-info-light-5',
    '--el-color-info-light-7',
    '--el-color-info-light-8',
    '--el-color-info-light-9',
  ]

  return (
    <>
      <Row gutter={12}>
        <Col span={6} xs={12}>
          <div className="demo-color-box" style={{ background: 'rgb(103, 194, 58)' }}>
            Brand Color
            <div className="value">#409EFF</div>
            <div className="bg-color-sub">
              {successColors.map((item, index) =>
                <Color key={index} item={item} />
              )}
            </div>
          </div>
        </Col>
        <Col span={6} xs={12}>
          <div className="demo-color-box" style={{ background: 'rgb(230, 162, 60)' }}>
            Brand Color
            <div className="value">#409EFF</div>
            <div className="bg-color-sub">
              {warningColors.map((item, index) =>
                <Color key={index} item={item} />
              )}
            </div>
          </div>
        </Col>
        <Col span={6} xs={12}>
          <div className="demo-color-box" style={{ background: 'rgb(245, 108, 108)' }}>
            Brand Color
            <div className="value">#409EFF</div>
            <div className="bg-color-sub">
              {dangerColors.map((item, index) =>
                <Color key={index} item={item} />
              )}
            </div>
          </div>
        </Col>
        <Col span={6} xs={12}>
          <div className="demo-color-box" style={{ background: 'rgb(144, 147, 153)' }}>
            Brand Color
            <div className="value">#409EFF</div>
            <div className="bg-color-sub">
              {infoColors.map((item, index) =>
                <Color key={index} item={item} />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ColorAuxiliary