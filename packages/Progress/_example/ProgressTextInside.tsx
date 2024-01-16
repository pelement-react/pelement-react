import { Progress } from 'pelement-react'

function ProgressTextInside() {
  return (
    <>
      <div className="common-progress">
        <Progress textInside={true} strokeWidth={26} percentage={70} />
        <Progress
          textInside={true}
          strokeWidth={24}
          percentage={100}
          status="success"
        />
        <Progress
          textInside={true}
          strokeWidth={22}
          percentage={80}
          status="warning"
        />
        <Progress
          textInside={true}
          strokeWidth={20}
          percentage={50}
          status="exception"
        />
      </div>
    </>
  )
}

export default ProgressTextInside