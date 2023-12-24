import { Text } from 'pelement-react'
import './TextBasic.scss'

function TextBasic() {
  return (
    <>
      <div className="common-text">
        <Text className="mx-1">Default</Text>
        <Text className="mx-1" type="primary">Primary</Text>
        <Text className="mx-1" type="success">Success</Text>
        <Text className="mx-1" type="info">Info</Text>
        <Text className="mx-1" type="warning">Warning</Text>
        <Text className="mx-1" type="danger">Danger</Text>
      </div>
    </>
  )
}

export default TextBasic