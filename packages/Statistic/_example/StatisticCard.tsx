import { ArrowRight, CaretBottom, CaretTop, Col, Row, Statistic, Tooltip, Warning } from 'pelement-react'
import './StatisticCard.scss'

function StatisticCard() {
  return (
    <>
      <Row gutter={16} className="statistic-demo-card">
        <Col span={8}>
          <div className="statistic-card">
            <Statistic value={98500}
              title={
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  Daily active users
                  <Tooltip
                    effect="dark"
                    content="Number of users who logged into the product in one day"
                    placement="top"
                  >
                    <Warning style={{ marginLeft: '4px' }} />
                  </Tooltip>
                </div>
              }
            >
            </Statistic>
            <div className="statistic-footer">
              <div className="footer-item">
                <span>than yesterday</span>
                <span className="green">
                  24%
                  <CaretTop />
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="statistic-card">
            <Statistic value={693700}
              title={

                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  Monthly Active Users
                  <Tooltip
                    effect="dark"
                    content="Number of users who logged into the product in one month"
                    placement="top"
                  >
                    <Warning style={{ marginLeft: '4px' }} />
                  </Tooltip>
                </div>
              }
            >
            </Statistic>
            <div className="statistic-footer">
              <div className="footer-item">
                <span>month on month</span>
                <span className="red">
                  12%
                  <CaretBottom />
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="statistic-card">
            <Statistic value={72000} title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                New transactions today
              </div>
            }>
            </Statistic>
            <div className="statistic-footer">
              <div className="footer-item">
                <span>than yesterday</span>
                <span className="green">
                  16%
                  <CaretTop />
                </span>
              </div>
              <div className="footer-item">
                <ArrowRight style={{ fontSize: '14px' }} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default StatisticCard