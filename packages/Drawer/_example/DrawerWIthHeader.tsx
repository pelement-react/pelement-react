import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerWithHeader() {
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setDrawer(true)}>
        open
      </Button>

      <Drawer open={drawer} title="I am the title" withHeader={false}>
        <span>Hi there!</span>
      </Drawer>
    </>
  )
}

export default DrawerWithHeader