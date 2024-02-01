import { useState } from 'react'
import { Button, Dialog } from 'pelement-react'

function DialogContent() {
  const [dialogTableVisible, setDialogTableVisible] = useState(false)
  const [dialogFormVisible, setDialogFormVisible] = useState(false)

  function handlerTable() {
    setDialogTableVisible(true)
  }

  function handlerForm() {
    setDialogFormVisible(true)
  }

  function FormFooter() {
    return (
      <>
        <span className="dialog-footer">
          <Button onClick={() => { setDialogFormVisible(false) }}>Cancel</Button>
          <Button type="primary" onClick={() => { setDialogFormVisible(false) }}>
            Confirm
          </Button>
        </span>
      </>
    )
  }

  return (
    <>
      <Button text onClick={handlerTable}>
        open a Table nested Dialog
      </Button>

      <Dialog
        open={dialogTableVisible}
        title="Shipping address"
        onClose={() => { setDialogTableVisible(false) }}
      >
        Table组件
      </Dialog>

      <Button text onClick={handlerForm}>
        open a Form nested Dialog
      </Button>

      <Dialog
        open={dialogFormVisible}
        title="Shipping address"
        footer={<FormFooter />}
        onClose={() => { setDialogFormVisible(false) }}
      >
        Form 表单
      </Dialog>
    </>
  )
}

export default DialogContent