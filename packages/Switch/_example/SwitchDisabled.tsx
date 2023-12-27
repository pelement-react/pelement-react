import { Switch } from 'pelement-react'

function SwitchDisabled() {
  return (
    <>
      <Switch defaultChecked disabled />
      <Switch defaultChecked className="ml-2" />
    </>
  )
}

export default SwitchDisabled