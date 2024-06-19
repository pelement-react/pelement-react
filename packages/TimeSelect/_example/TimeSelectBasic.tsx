import { TimeSelect } from 'pelement-react'
import { useState } from 'react'

function TimeSelectBasic() {
  const [value, setValue] = useState('')

  function handleChange(val) {
    setValue(val)
  }

  return (
    <>
      <TimeSelect
        value={value}
        style={{ width: '240px' }}
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="Select time"
        onChange={handleChange}
      />
    </>
  )
}

export default TimeSelectBasic