import { Button, Dialog } from 'pelement-react'
import { useState } from 'react'
import './DialogBasic.scss'

function DialogBasic() {
  const [dialogVisible, setDialogVisible] = useState(false)

  function handleClick() {
    setDialogVisible(true)
  }

  function handleClose() {
    setDialogVisible(false)
  }

  function handleOk() {
    setDialogVisible(false)
  }

  function handleCancel() {
    setDialogVisible(false)
  }

  // footer
  function Footer() {
    return (
      <>
        <span className="dialog-footer">
          <button aria-disabled="false" type="button" className="el-button" onClick={handleOk}>
            <span className="">Cancel</span>
          </button>
          <button aria-disabled="false" type="button" className="el-button el-button--primary" onClick={handleCancel}>
            <span className=""> Confirm </span>
          </button>
        </span>
      </>
    )
  }

  return (
    <>
      <Button text onClick={handleClick}>
        click to open the Dialog
      </Button>

      <Dialog
        open={dialogVisible}
        title="Tips"
        width="30%"
        onClose={handleClose}
        footer={<Footer />}
      >
        <span>This is a message</span>
      </Dialog>
    </>
  )
}

export default DialogBasic