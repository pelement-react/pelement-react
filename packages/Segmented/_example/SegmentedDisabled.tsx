import { Segmented } from 'pelement-react'

function SegmentedDisabled() {
  const options = [
    {
      label: 'Mon',
      value: 'Mon',
      disabled: true,
    },
    {
      label: 'Tue',
      value: 'Tue',
    },
    {
      label: 'Wed',
      value: 'Wed',
      disabled: true,
    },
    {
      label: 'Thu',
      value: 'Thu',
    },
    {
      label: 'Fri',
      value: 'Fri',
      disabled: true,
    },
    {
      label: 'Sat',
      value: 'Sat',
    },
    {
      label: 'Sun',
      value: 'Sun',
    },
  ]

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <Segmented options={options} disabled />
        <Segmented options={options} />
      </div>
    </>
  )
}

export default SegmentedDisabled