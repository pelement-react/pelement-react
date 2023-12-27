import { useState } from 'react'
import { Switch } from 'pelement-react'

function SwitchBeforeChange() {
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)

  function beforeChange1(): Promise<boolean> {
    setLoading1(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading1(false)
        console.log('Switch success')
        return resolve(true)
      }, 1000)
    })
  }

  function beforeChange2(): Promise<boolean> {
    setLoading2(true)
    return new Promise((_, reject) => {
      setTimeout(() => {
        setLoading2(false)
        console.log('Switch failed')
        return reject(new Error('Error'))
      }, 1000)
    })
  }

  return (
    <>
      <Switch
        loading={loading1}
        beforeChange={beforeChange1}
      />
      <Switch
        className="ml-2"
        loading={loading2}
        beforeChange={beforeChange2}
      />
    </>
  )
}

export default SwitchBeforeChange