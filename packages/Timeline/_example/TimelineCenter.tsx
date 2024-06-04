import { Timeline } from 'pelement-react'

function TimelineCenter() {
  const items = [
    {
      content: <div style={{ border: '1px solid #e4e7ed', padding: '20px' }}>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </div>,
      timestamp: '2018/4/12',
      placement: 'top',
      center: true,
    },
    {
      content: <div style={{ border: '1px solid #e4e7ed', padding: '20px' }}>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </div>,
      timestamp: '2018/4/3',
      placement: 'top',
    },
    {
      content: 'Event start',
      timestamp: '2018/4/2',
      placement: 'top',
      center: true,
    },
    {
      content: 'Event end',
      timestamp: '2018/4/2',
      placement: 'top',
      center: true,
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

export default TimelineCenter