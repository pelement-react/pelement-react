import { Affix, Button } from 'pelement-react'

function AffixPosition() {
  return (
    <>
      <Affix position="bottom" offset={150}>
        <Button type="primary">Offset bottom 150px</Button>
      </Affix>
    </>
  )
}

export default AffixPosition