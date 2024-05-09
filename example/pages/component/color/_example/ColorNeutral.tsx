import { Col, Row } from 'pelement-react'
import './ColorPrimary.scss'

function ColorNeutral() {
  return (
    <>
      <Row gutter={12}>
        <Col span={6} xs={12}>
          <div className="demo-color-box-group">
            <div className="demo-color-box demo-color-box-other" style={{ color: 'var(--el-bg-color)', background: 'rgb(48, 49, 51)' }}>
              Primary Text
              <div className="value">#303133</div>
            </div>
            <div className="demo-color-box demo-color-box-other" style={{ color: 'var(--el-bg-color)', background: 'rgb(96, 98, 102)' }}>
              Regular Text
              <div className="value">#606266</div>
            </div>
            <div className="demo-color-box demo-color-box-other" style={{ color: 'var(--el-bg-color)', background: 'rgb(144, 147, 153)' }}>
              Secondary Text
              <div className="value">#909399</div>
            </div>
            <div className="demo-color-box demo-color-box-other" style={{ color: 'var(--el-bg-color)', background: 'rgb(168, 171, 178)' }}>
              Placeholder Text
              <div className="value">#A8ABB2</div>
            </div>
            <div className="demo-color-box demo-color-box-other" style={{ color: 'var(--el-bg-color)', background: 'rgb(192, 196, 204)' }}>
              Disabled Text
              <div className="value">#C0C4CC</div>
            </div>
          </div>
        </Col>
        <Col span={6} xs={12}>
          <div className="demo-color-box-group">
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(205, 208, 214)' }}>
              Darker Border
              <div className="value">#CDD0D6</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(212, 215, 222)' }}>
              Dark Border
              <div className="value">#D4D7DE</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(220, 223, 230)' }}>
              Base Border
              <div className="value">#DCDFE6</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(228, 231, 237)' }}>
              Light Border
              <div className="value">#E4E7ED</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(235, 238, 245)' }}>
              Lighter Border
              <div className="value">#EBEEF5</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(242, 246, 252)' }}>
              Extra-light Border
              <div className="value">#F2F6FC</div>
            </div>
          </div>
        </Col>
        <Col span={6} xs={12}>
          <div className="demo-color-box-group">
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(230, 232, 235)', border: '1px solid transparent' }}>
              Darker Fill
              <div className="value">#E6E8EB</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(235, 237, 240)', border: '1px solid transparent' }}>
              Dark Fill
              <div className="value">#EBEDF0</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(240, 242, 245)', border: '1px solid transparent' }}>
              Base Fill
              <div className="value">#F0F2F5</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(245, 247, 250)', border: '1px solid transparent' }}>
              Light Fill
              <div className="value">#F5F7FA</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(250, 250, 250)', border: '1px solid transparent' }}>
              Lighter Fill
              <div className="value">#FAFAFA</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(250, 252, 255)', border: '1px solid transparent' }}>
              Extra-light Fill
              <div className="value">#FAFCFF</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(255, 255, 255)', border: '1px solid var(--el-border-color-light)' }}>
              Blank Fill
              <div className="value">#FFFFFF</div>
            </div>
          </div>
        </Col>
        <Col span={6} xs={12}>
          <div className="demo-color-box-group">
            <div className="demo-color-box demo-color-box-other" style={{ background: 'rgb(0, 0, 0)' }}>
              Basic Black
              <div className="value">#000000</div>
            </div>
            <div className="demo-color-box demo-color-box-other" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(48, 49, 51)', border: '1px solid rgb(238, 238, 238)' }}>
              Basic White
              <div className="value">#FFFFFF</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite bg-transparent">
              Transparent
              <div className="value">Transparent</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(242, 243, 245)', border: '1px solid var(--el-border-color-light)' }}>
              Page Background
              <div className="value">#F2F3F5</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(255, 255, 255)', border: '1px solid var(--el-border-color-light)' }}>
              Base Background
              <div className="value">#FFFFFF</div>
            </div>
            <div className="demo-color-box demo-color-box-other demo-color-box-lite" style={{ background: 'rgb(255, 255, 255)', border: '1px solid var(--el-border-color-light)' }}>
              Overlay Background
              <div className="value">#FFFFFF</div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ColorNeutral