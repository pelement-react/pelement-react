import { Button, InfoFilled, Popconfirm } from 'pelement-react'

function PopconfirmEvent() {
  function confirmEvent() {
    console.log('confirm!')
  }

  function cancelEvent() {
    console.log('cancel!')
  }

  return (
    <>
      <Popconfirm
        confirmButtonText="Yes"
        cancelButtonText="No"
        icon={<InfoFilled />}
        iconColor="#626AEF"
        title="Are you sure to delete this?"
        onConfirm={confirmEvent}
        onCancel={cancelEvent}
      >
        <Button>Delete</Button>
      </Popconfirm >
    </>
  )
}

export default PopconfirmEvent