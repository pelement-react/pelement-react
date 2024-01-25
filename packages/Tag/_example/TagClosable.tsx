import { Tag } from 'pelement-react'

function TagClosable() {
  const tagList = [
    { name: 'Tag 1', type: '' },
    { name: 'Tag 2', type: 'success' },
    { name: 'Tag 3', type: 'info' },
    { name: 'Tag 4', type: 'warning' },
    { name: 'Tag 5', type: 'danger' },
  ].map(tag =>
    <Tag
      className="mx-1"
      closable
      type={tag.type as any}
    >
      {tag.name}
    </Tag>
  )

  return (
    <>
      {tagList}
    </>
  )
}

export default TagClosable