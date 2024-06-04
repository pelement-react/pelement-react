import { Timeline } from 'pelement-react'

function TimelineBasic() {
  const items = [
    {
      content: 'Event start',
      timestamp: '2018-04-15',
    },
    {
      content: 'Approved',
      timestamp: '2018-04-13',
    },
    {
      content: 'Success',
      timestamp: '2018-04-11',
    },
  ]

  return (
    <>
      <Timeline
        style={{ maxWidth: '600px' }}
        items={items}
      />
    </>
  )
}

export default TimelineBasic