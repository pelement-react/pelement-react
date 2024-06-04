import { Edit, Timeline } from 'pelement-react'

function TimelineNode() {
  const items = [
    {
      content: 'Custom icon',
      timestamp: '2018-04-12 20:46',
      size: 'large',
      type: 'primary',
      icon: <Edit />,
    },
    {
      content: 'Custom color',
      timestamp: '2018-04-03 20:46',
      color: '#0bbd87',
    },
    {
      content: 'Custom size',
      timestamp: '2018-04-03 20:46',
      size: 'large',
    },
    {
      content: 'Custom hollow',
      timestamp: '2018-04-03 20:46',
      type: 'primary',
      hollow: true,
    },
    {
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
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

export default TimelineNode