import { Segmented } from 'pelement-react'

function SegmentedBasic() {
  const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <Segmented options={options} size="large" />
        <Segmented options={options} size="default" />
        <Segmented options={options} size="small" />
      </div>
    </>
  )
}

export default SegmentedBasic