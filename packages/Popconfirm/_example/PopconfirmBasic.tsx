import { Button, Popconfirm } from 'pelement-react'

function PopconfirmBasic() {
  return (
    <>
      <Popconfirm title="Are you sure to delete this?">
        <Button>Delete</Button>
      </Popconfirm>
    </>
  )
}

export default PopconfirmBasic