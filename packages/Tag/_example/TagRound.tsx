import { Tag } from 'pelement-react'

function TagRound() {
  const items = [
    { type: '', label: 'Tag 1' },
    { type: 'success', label: 'Tag 2' },
    { type: 'info', label: 'Tag 3' },
    { type: 'danger', label: 'Tag 4' },
    { type: 'warning', label: 'Tag 5' },
  ]

  const darkList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="dark"
      round
    >
      {item.label}
    </Tag>
  )

  const lightList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="light"
      round
    >
      {item.label}
    </Tag>
  )

  const plainList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="plain"
      round
    >
      {item.label}
    </Tag>
  )

  return (
    <>
      <div className="flex flex-wrap gap-2 my-2">
        {darkList}
      </div>
      <div className="flex flex-wrap gap-2">
        {lightList}
      </div>
      <div className="flex flex-wrap gap-2 my-2">
        {plainList}
      </div>
    </>
  )
}

export default TagRound