import { Button } from 'pelement-react'

function ButtonDisabled() {
  return (
    <>
      <div className="mb-4">
        <Button disabled>Default</Button>
        <Button type="primary" disabled>Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="info" disabled>Info</Button>
        <Button type="warning" disabled>Warning</Button>
        <Button type="danger" disabled>Danger</Button>
      </div>
      <div>
        <Button plain disabled>Plain</Button>
        <Button type="primary" plain disabled>Primary</Button>
        <Button type="success" plain disabled>Success</Button>
        <Button type="info" plain disabled>Info</Button>
        <Button type="warning" plain disabled>Warning</Button>
        <Button type="danger" plain disabled>Danger</Button>
      </div>
    </>
  )
}

export default ButtonDisabled