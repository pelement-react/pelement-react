import { Check, Delete, Edit, Message, Search, Segmented, Star } from 'pelement-react'

function SegmentedReactNode() {
  const options = [
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Edit style={{ fontSize: '20px' }} />
          <div>Edit</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Search style={{ fontSize: '20px' }} />
          <div>Search</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Check style={{ fontSize: '20px' }} />
          <div>Check</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Message style={{ fontSize: '20px' }} />
          <div>Message</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Star style={{ fontSize: '20px' }} />
          <div>Star</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Delete style={{ fontSize: '20px' }} />
          <div>Delete</div>
        </div>
      </>
    },
  ]

  return (
    <>
      <Segmented options={options} size="large" />
    </>
  )
}

export default SegmentedReactNode