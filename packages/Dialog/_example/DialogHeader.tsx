import { useState } from 'react'
import { Button, CircleCloseFilled, Dialog } from 'pelement-react'

function DialogHeader() {
  const [visible, setVisible] = useState(false)

  function onClose() {
    setVisible(false)
  }

  function Header() {
    return (
      <>
        <div className="dialog-header">
          <h4 className="el-dialog__title">This is a custom header!</h4>
          <Button type="danger" onClick={onClose}>
            <CircleCloseFilled />
            Close
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Open Dialog with customized header
      </Button>
      <Dialog open={visible} showClose={false} header={<Header />} onClose={onClose}>
        This is dialog content.
      </Dialog>
    </>
  )
}

export default DialogHeader