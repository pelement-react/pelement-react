import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerBasic() {
  const [direction, setDirection] = useState('')
  const [drawer, setDrawer] = useState(false)
  const [drawer2, setDrawer2] = useState(false)

  function handlerLeftToRight() {
    setDirection('ltr')
    setDrawer(true)
  }

  function handlerRightToLeft() {
    setDirection('rtl')
    setDrawer(true)
  }

  function handlerTopToBottom() {
    setDirection('ttb')
    setDrawer(true)
  }

  function handlerBottomToTop() {
    setDirection('btt')
    setDrawer(true)
  }

  function handlerLeftToRightFooter() {
    setDirection('ltr')
    setDrawer2(true)
  }

  function handlerRightToLeftFooter() {
    setDirection('rtl')
    setDrawer2(true)
  }

  function handlerTopToBottomFooter() {
    setDirection('ttb')
    setDrawer2(true)
  }

  function handlerBottomToTopFooter() {
    setDirection('btt')
    setDrawer2(true)
  }

  function handlerClose() {
    setDrawer(false)
  }

  function handlerClose2() {
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
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRight}>
          open left to right
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeft}>
          open right to left
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottom}>
          open top to bottom
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTop}>
          open bottom to top
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRightFooter}>
          open left to right footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeftFooter}>
          open right to left footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottomFooter}>
          open top to bottom footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTopFooter}>
          open bottom to top footer
        </Button>
      </div>

      <Drawer
        open={drawer}
        title="I am the title"
        direction={direction as any}
        onClose={handlerClose}
      >
        <span>Hi, there!</span>
      </Drawer>
      <Drawer
        open={drawer2}
        direction={direction as any}
        onClose={handlerClose2}
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