import { useState } from 'react'
import { CheckboxGroup } from 'pelement-react'

function CheckboxGroupBasic() {
  const options = [
    {
      label: 'Option A',
      value: 'Value A',
    },
    {
      label: 'Option B',
      value: 'Value B',
    },
    {
      label: 'Option C',
      value: 'Value C'
    },
    {
      label: 'disabled',
      value: 'Value disabled',
      disabled: true,
    },
    {
      label: 'selected and disabled',
      value: 'Value selected and disabled',
      disabled: true,
    }
  ]
  const [checkList, setCheckList] = useState(['Value selected and disabled', 'Value A'])

  function handleChange(value) {
    setCheckList(value)
  }

  return (
    <>
      <CheckboxGroup
        options={options}
        value={checkList}
        onChange={handleChange}
      />
    </>
  )
}

export default CheckboxGroupBasic