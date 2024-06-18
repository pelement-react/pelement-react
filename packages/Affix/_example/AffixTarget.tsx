import { Affix, Button } from 'pelement-react'
import './AffixBasic.scss'

function AffixTarget() {
  return (
    <>
      <div className="affix-container">
        <Affix target=".affix-container" offset={120}>
          <Button type="primary">Target container</Button>
        </Affix>
      </div>
    </>
  )
}

export default AffixTarget