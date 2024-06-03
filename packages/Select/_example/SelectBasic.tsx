import { useState } from 'react'
import { Select } from 'pelement-react'

function SelectBasic() {
  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]
  const [value, setValue] = useState(options[0])

  function handleChange(value) {
    setValue(value)
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center">
        <Select
          style={{ width: '240px' }}
          size="large"
          options={options}
          value={value}
          onChange={handleChange}
        ></Select>
        <Select
          style={{ width: '240px' }}
          options={options}
          value={value}
          onChange={handleChange}
        ></Select>
        <Select
          style={{ width: '240px' }}
          size="small"
          options={options}
          value={value}
          onChange={handleChange}
        ></Select>
      </div>
    </>
  )
}

export default SelectBasic