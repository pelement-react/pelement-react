import { Checkbox } from "pelement-react"
import { useState } from "react"

function CheckboxDisabled() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)

  function handleChange1(value) {
    setChecked1(value)
  }

  function handleChange2(value) {
    setChecked2(value)
  }

  return (
    <>
      <Checkbox value={checked1} disabled onChange={handleChange1}>Disabled</Checkbox>
      <Checkbox value={checked2} onChange={handleChange2}>Not disabled</Checkbox>
    </>
  )
}

export default CheckboxDisabled