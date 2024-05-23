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

function ColorPrimary() {
  const colors = [
    '--el-color-primary-dark-2',
    '--el-color-primary-light-3',
    '--el-color-primary-light-5',
    '--el-color-primary-light-7',
    '--el-color-primary-light-8',
    '--el-color-primary-light-9',
  ]

  return (
    <>
      <Row>
        <Col span={10} xs={12}>
          <div className="demo-color-box" style={{ background: 'rgb(64, 158, 255)' }}>
            Brand Color
            <div className="value">#409EFF</div>
            <div className="bg-color-sub" style={{ background: 'rgb(64, 158, 255)' }}>
              {colors.map((item, index) =>
                <Color key={index} item={item} />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ColorPrimary