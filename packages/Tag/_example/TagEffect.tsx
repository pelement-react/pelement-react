import { Tag } from 'pelement-react'

function TagEffect() {
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
    >
      {item.label}
    </Tag>
  )

  const darkClosable = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="dark"
      closable
    >
      {item.label}
    </Tag>
  )

  const lightList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="light"
    >
      {item.label}
    </Tag>
  )

  const lightClosable = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="light"
      closable
    >
      {item.label}
    </Tag>
  )

  const plainList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="plain"
    >
      {item.label}
    </Tag>
  )

  const plainClosable = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="plain"
      closable
    >
      {item.label}
    </Tag>
  )

  return (
    <>
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span className="tag-group__title m-1 line-height-2">Dark</span>
        {darkList}
        {darkClosable}
      </div>
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span className="tag-group__title m-1">Light</span>
        {lightList}
        {lightClosable}
      </div>
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span className="tag-group__title m-1">Plain</span>
        {plainList}
        {plainClosable}
      </div>
    </>
  )
}

export default TagEffect