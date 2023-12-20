import { Button } from 'pelement-react'

function ButtonLink() {
  return (
    <>
      <p>Basic link button</p>
      <Button link>Default</Button>
      <Button type="primary" link>Primary</Button>
      <Button type="success" link>Success</Button>
      <Button type="info" link>Info</Button>
      <Button type="warning" link>Warning</Button>
      <Button type="danger" link>Danger</Button>
      <p>Disabled link button</p>
      <Button link disabled>Default</Button>
      <Button type="primary" link disabled>Primary</Button>
      <Button type="success" link disabled>Success</Button>
      <Button type="info" link disabled>Info</Button>
      <Button type="warning" link disabled>Warning</Button>
      <Button type="danger" link disabled>Danger</Button>
    </>
  )
}

export default ButtonLink