import { ChatLineRound, Col, Male, Row, Statistic } from 'pelement-react'
import './StatisticBasic.scss'

function StatisticBasic() {
  return (
    <>
      <Row className="statistic-demo-basic">
        <Col span={6}>
          <Statistic title="Daily active users" value={268500} />
        </Col>
        <Col span={6}>
          <Statistic
            value={138}
            title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                Ratio of men to women
                <Male style={{ marginLeft: '4px' }} />
              </div>
            }
            suffix="/100"
          />
        </Col>
        <Col span={6}>
          <Statistic title="Total Transactions" value={1500} />
        </Col>
        <Col span={6}>
          <Statistic
            title="Feedback number"
            value={562}
            suffix={
              <ChatLineRound style={{ verticalAlign: '-0.125em' }} />
            } />
        </Col>
      </Row >
    </>
  )
}

export default StatisticBasic