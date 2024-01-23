import { Button, InfoFilled, Popconfirm } from 'pelement-react'

function PopconfirmIcon() {
  return (
    <>
      <Popconfirm
        width={220}
        confirmButtonText="OK"
        cancelButtonText="No, Thanks"
        icon={<InfoFilled />}
        iconColor="#626AEF"
        title="Are you sure to delete this?"
      >
        <Button>Delete</Button>
      </Popconfirm >
    </>
  )
}

export default PopconfirmIcon