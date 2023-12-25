import { Divider } from 'pelement-react'

function DividerDirection() {
  return (
    <>
      <div>
        <span>Rain</span>
        <Divider direction="vertical" />
        <span>Home</span>
        <Divider direction="vertical" border-style="dashed" />
        <span>Grass</span>
      </div>
    </>
  )
}

export default DividerDirection