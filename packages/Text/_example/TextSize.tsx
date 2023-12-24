import { Text } from 'pelement-react'

function TextSize() {
  return (
    <>
      <div className="common-text">
        <Text className="mx-1" size="large">Large</Text>
        <Text className="mx-1">Default</Text>
        <Text className="mx-1" size="small">Small</Text>
      </div>
    </>
  )
}

export default TextSize