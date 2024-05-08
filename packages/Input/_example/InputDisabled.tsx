import { useState } from 'react'
import { Input } from 'pelement-react'

function InputDisabled() {
  const [text, setText] = useState('')

  function handleChange(event: string) {
    setText(event)
  }

  return (
    <>
      <Input
        style={{ width: '240px' }}
        placeholder="Please input"
        value={text}
        disabled
        onChange={handleChange}
      />
    </>
  )
}

export default InputDisabled