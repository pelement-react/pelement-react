import { Row, Text } from 'pelement-react'

function TextTruncated() {
  return (
    <>
      <div className="common-text">
        <Text className="w-150px mb-2" truncated>
          Self element set width 100px
        </Text>
        <Row className="w-150px mb-2">
          <Text truncated>Squeezed by parent element</Text>
        </Row>
        <Text lineClamp={2}>
          The -webkit-line-clamp CSS property<br />
          allows limiting of the contents of<br />
          a block to the specified number of lines.
        </Text>
      </div>
    </>
  )
}

export default TextTruncated