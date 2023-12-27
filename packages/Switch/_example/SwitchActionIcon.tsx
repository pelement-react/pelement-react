import { Hide, Switch, View } from 'pelement-react'

function SwitchActionIcon() {
  return (
    <>
      <Switch
        defaultChecked
        activeActionIcon={<View />}
        inactiveActionIcon={<Hide />}
      />
      <br />
      <Switch
        defaultChecked
        activeActionIcon={<><span className="custom-active-action">T</span></>}
        inactiveActionIcon={<><span className="custom-inactive-action">F</span></>}
      />
    </>
  )
}

export default SwitchActionIcon