import { Progress } from 'pelement-react'
import './ProgressBasic.scss'

function ProgressBasic() {
  function format(percentage: number) {
    return (percentage === 100 ? 'Full' : `${percentage}%`)
  }

  return (
    <>
      <div className="common-progress">
        <Progress percentage={50} />
        <Progress percentage={100} format={format} />
        <Progress percentage={100} status="success" />
        <Progress percentage={100} status="warning" />
        <Progress percentage={50} status="exception" />
      </div>
    </>
  )
}

export default ProgressBasic