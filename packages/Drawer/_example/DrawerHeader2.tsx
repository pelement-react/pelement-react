import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerHeader2() {
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setDrawer(true)}>
        open drawer
      </Button>

      <Drawer open={drawer} title="I am the title" withHeader={false}>
        <span>Hi there!</span>
      </Drawer>
    </>
  )
}

export default DrawerHeader2