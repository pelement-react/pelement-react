import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerContent() {
  const [table, setTable] = useState(false)
  const [dialog, setDialog] = useState(false)

  function closeTable() {
    setTable(false)
  }

  function closeDialog() {
    setDialog(false)
  }

  return (
    <>
      <Button text onClick={() => { setTable(true) }}>
        Open Drawer with nested table
      </Button>

      <Button text onClick={() => { setDialog(true) }}>
        Open Drawer with nested form
      </Button>

      <Drawer
        open={table}
        title="I have a nested table inside!"
        direction="rtl"
        size="50%"
        onClose={closeTable}
      >
        table
      </Drawer>

      <Drawer
        open={dialog}
        title="I have a nested form inside!"
        direction="ltr"
        className="demo-drawer"
        onClose={closeDialog}
      >
        <div className="demo-drawer__content">
          form
          <div className="demo-drawer__footer">
            <Button onClick={closeDialog}>Cancel</Button>
            <Button type="primary" onClick={closeDialog}>
              Submit
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerContent