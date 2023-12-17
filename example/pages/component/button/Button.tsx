import { Button } from '../../../../packages'

function ButtonPage() {
  return (
    <>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </>
  )
}

export default ButtonPage