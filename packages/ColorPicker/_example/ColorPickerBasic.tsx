import { useState } from 'react'
import { ColorPicker } from 'pelement-react'
import './ColorPickerBasic.scss'

function ColorPickerBasic() {
  const [color1, setColor1] = useState('#409EFF')
  const [color2, setColor2] = useState('')

  return (
    <>
      <div className="demo-color-block">
        <span className="demonstration">With default value</span>
        <ColorPicker value={color1} onChange={(val) => setColor1(val)} />
      </div>
      <div className="demo-color-block">
        <span className="demonstration">With no default value</span>
        <ColorPicker value={color2} onChange={(val) => setColor2(val)} />
      </div>
    </>
  )
}

export default ColorPickerBasic