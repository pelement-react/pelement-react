import { Row, Tag } from 'pelement-react'

function TagSize() {
  return (
    <>
      <Row>
        <Tag className="mx-1" size="large">Large</Tag>
        <Tag className="mx-1">Default</Tag>
        <Tag className="mx-1" size="small">Small</Tag>
      </Row>

      <Row className="mt-4">
        <Tag className="mx-1" size="large" closable>Large</Tag>
        <Tag className="mx-1" closable>Default</Tag>
        <Tag className="mx-1" size="small" closable>Small</Tag>
      </Row>
    </>
  )
}

export default TagSize