import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerBasic() {
  const [direction, setDirection] = useState('')
  const [drawer, setDrawer] = useState(false)
  const [drawer2, setDrawer2] = useState(false)

  function handleLeftToRight() {
    setDirection('ltr')
    setDrawer(true)
  }

  function handleRightToLeft() {
    setDirection('rtl')
    setDrawer(true)
  }

  function handleTopToBottom() {
    setDirection('ttb')
    setDrawer(true)
  }

  function handleBottomToTop() {
    setDirection('btt')
    setDrawer(true)
  }

  function handleLeftToRightFooter() {
    setDirection('ltr')
    setDrawer2(true)
  }

  function handleRightToLeftFooter() {
    setDirection('rtl')
    setDrawer2(true)
  }

  function handleTopToBottomFooter() {
    setDirection('ttb')
    setDrawer2(true)
  }

  function handleBottomToTopFooter() {
    setDirection('btt')
    setDrawer2(true)
  }

  function handleClose() {
    setDrawer(false)
  }

  function handleClose2() {
    setDrawer2(false)
  }

  function cancelClick() {
    setDrawer2(false)
  }

  function confirmClick() {
    setDrawer2(false)
  }

  return (
    <>
      <div>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleLeftToRight}>
          open left to right
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleRightToLeft}>
          open right to left
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleTopToBottom}>
          open top to bottom
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleBottomToTop}>
          open bottom to top
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleLeftToRightFooter}>
          open left to right footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleRightToLeftFooter}>
          open right to left footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleTopToBottomFooter}>
          open top to bottom footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleBottomToTopFooter}>
          open bottom to top footer
        </Button>
      </div>

      <Drawer
        open={drawer}
        title="I am the title"
        direction={direction as any}
        onClose={handleClose}
      >
        <span>Hi, there!</span>
      </Drawer>
      <Drawer
        open={drawer2}
        direction={direction as any}
        onClose={handleClose2}
        header={<h4>set title by slot</h4>}
        footer={
          <div style={{ flex: 'auto' }}>
            <Button onClick={cancelClick}>cancel</Button>
            <Button type="primary" onClick={confirmClick}>confirm</Button>
          </div>
        }
      >
        radio
      </Drawer>
    </>
  )
}

export default DrawerBasic