import { useState } from 'react'
import { Checkbox } from 'pelement-react'

function CheckboxBasic() {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
  const [checked7, setChecked7] = useState(false)
  const [checked8, setChecked8] = useState(false)

  function handleChange1(value) {
    setChecked1(value)
  }

  function handleChange2(value) {
    setChecked2(value)
  }

  function handleChange3(value) {
    setChecked3(value)
  }

  function handleChange4(value) {
    setChecked4(value)
  }

  function handleChange5(value) {
    setChecked5(value)
  }

  function handleChange6(value) {
    setChecked6(value)
  }

  function handleChange7(value) {
    setChecked7(value)
  }

  function handleChange8(value) {
    setChecked8(value)
  }

  return (
    <>
      <div>
        <Checkbox value={checked1} label="Option 1" size="large" onChange={handleChange1} />
        <Checkbox value={checked2} label="Option 2" size="large" onChange={handleChange2} />
      </div>
      <div>
        <Checkbox value={checked3} label="Option 1" onChange={handleChange3} />
        <Checkbox value={checked4} label="Option 2" onChange={handleChange4} />
      </div>
      <div>
        <Checkbox value={checked5} label="Option 1" size="small" onChange={handleChange5} />
        <Checkbox value={checked6} label="Option 2" size="small" onChange={handleChange6} />
      </div>
      <div>
        <Checkbox value={checked7} label="Option 1" size="small" disabled onChange={handleChange7} />
        <Checkbox value={checked8} label="Option 2" size="small" disabled onChange={handleChange8} />
      </div>
    </>
  )
}

export default CheckboxBasic