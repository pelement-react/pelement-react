import { useState } from 'react'
import { Input } from 'pelement-react'
import './InputSize.scss'

function InputSize() {
  const [text, setText] = useState('')

  function handleChange(event: string) {
    setText(event)
  }

  return (
    <>
      <div className="flex gap-4 mb-4 items-center">
        <Input
          style={{ width: '240px' }}
          placeholder="Please input"
          value={text}
          size="large"
          onChange={handleChange}
        />
        <Input
          style={{ width: '240px' }}
          placeholder="Please input"
          value={text}
          onChange={handleChange}
        />
        <Input
          style={{ width: '240px' }}
          placeholder="Please input"
          value={text}
          size="small"
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default InputSize