import { Divider } from 'pelement-react'

function DividerBorder() {
  return (
    <>
      <div>
        <span>What language is thine, O sea?</span>
        <Divider borderStyle="dashed" />
        <span>The language of eternal question.</span>
      </div>
      <Divider borderStyle="dotted" />
      <span>What language is thy answer, O sky?</span>
      <Divider borderStyle="double" />
      <span>The language of eternal silence.</span>
    </>
  )
}

export default DividerBorder