import { useState } from 'react'
import { Button, CircleCloseFilled, Drawer } from 'pelement-react'

function DrawerHeader() {
  const [visible, setVisible] = useState(false)

  function handlerClose() {
    setVisible(false)
  }

  return (
    <>
      <Button onClick={() => { setVisible(true) }}>
        Open Drawer with customized header
      </Button>

      <Drawer
        open={visible}
        showClose={false}
        header={
          <>
            <h4>This is a custom header!</h4>
            <Button type="danger" onClick={handlerClose}>
              <CircleCloseFilled />
              Close
            </Button>
          </>
        }
      >
        This is drawer content.
      </Drawer>
    </>
  )
}

export default DrawerHeader