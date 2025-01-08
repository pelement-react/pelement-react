import { useState } from 'react'
import { Button, Calendar, Col, Countdown, Row } from 'pelement-react'
import dayjs from 'dayjs'
import './CountdownBasic.scss'

function CountdownBasic() {
  const value = Date.now() + 1000 * 60 * 60 * 7
  const [value1, setValue1] = useState(Date.now() + 1000 * 60 * 60 * 24 * 2)
  const value2 = dayjs().add(1, 'month').startOf('month')

  function reset() {
    setValue1(Date.now() + 1000 * 60 * 60 * 24 * 2)
  }

  return (
    <>
      <Row className="countdown-demo-basic">
        <Col span={8}>
          <Countdown title="Start to grab" value={value} />
        </Col>
        <Col span={8}>
          <Countdown
            title="Remaining VIP time"
            format="HH:mm:ss"
            value={value1}
          />
          <Button className="countdown-footer" type="primary" onClick={reset}>
            Reset
          </Button>
        </Col>
        <Col span={8}>
          <Countdown format="DD [days] HH:mm:ss" value={value2}
            title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Calendar style={{ marginRight: '4px' }} />
                Still to go until next month
              </div>
            }
          />
          <div className="countdown-footer">{value2.format('YYYY-MM-DD')}</div>
        </Col>
      </Row >
    </>
  )
}

export default CountdownBasic