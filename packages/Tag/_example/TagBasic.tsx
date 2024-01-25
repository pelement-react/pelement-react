import { Tag } from 'pelement-react'

function TagBasic() {
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag className="ml-2" type="success">Tag 2</Tag>
      <Tag className="ml-2" type="info">Tag 3</Tag>
      <Tag className="ml-2" type="warning">Tag 4</Tag>
      <Tag className="ml-2" type="danger">Tag 5</Tag>
    </>
  )
}

export default TagBasic