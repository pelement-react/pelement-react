import { Segmented } from 'pelement-react'

function SegmentedBlock() {
  const options = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sunday long long long long long long long',
  ]

  return (
    <>
      <Segmented options={options} block />
    </>
  )
}

export default SegmentedBlock