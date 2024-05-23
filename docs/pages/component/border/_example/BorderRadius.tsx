import { Col, Row } from 'pelement-react'

function BorderRadius() {
  const radiusGroup = [
    {
      name: 'No Radius',
      type: '',
    },
    {
      name: 'Small Radius',
      type: 'small',
    },
    {
      name: 'Large Radius',
      type: 'base',
    },
    {
      name: 'Round Radius',
      type: 'round',
    },
  ]

  function getValue(type: string) {
    const getCssVarValue = (prefix, type) =>
      getComputedStyle(document.documentElement).getPropertyValue(
        `--el-${prefix}-${type}`
      )
    return getCssVarValue('border-radius', type)
  }

  return (
    <>
      <Row gutter={12} className="demo-radius">
        {radiusGroup.map((item, index) =>
          <Col key={index} span={6}>
            <div className="title">{item.name}</div>
            <div className="value">
              <code>border-radius: {getValue(item.type) || '0px'}</code>
            </div>
            <div
              className="radius"
              style={{
                borderRadius: item.type
                  ? `var(--el-border-radius-${item.type})`
                  : '',
              }}
            ></div>
          </Col>
        )}
      </Row >
    </>
  )
}

export default BorderRadius