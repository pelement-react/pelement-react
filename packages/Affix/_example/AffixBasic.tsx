import { Affix, Button } from 'pelement-react'

function AffixBasic() {
  return (
    <>
      <Affix offset={120}>
        <Button type="primary">Offset top 120px</Button>
      </Affix>
    </>
  )
}

export default AffixBasic