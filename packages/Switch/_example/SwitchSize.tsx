import { Switch } from 'pelement-react'

function SwitchSize() {
  return (
    <>
      <Switch
        defaultChecked
        size="large"
        activeText="Open"
        inactiveText="Close"
      />
      <br />
      <Switch
        defaultChecked
        activeText="Open"
        inactiveText="Close" />
      <br />
      <Switch
        defaultChecked
        size="small"
        activeText="Open"
        inactiveText="Close"
      />
    </>
  )
}

export default SwitchSize