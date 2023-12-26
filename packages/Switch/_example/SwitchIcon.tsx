import { Check, Close, Switch } from 'pelement-react'

function SwitchIcon() {
  return (
    <>
      <Switch
        defaultChecked
        activeIcon={<Check />}
        inactiveIcon={<Close />}
      />
      <br />
      <Switch
        defaultChecked
        className="mt-2"
        style={{ marginLeft: '24px' }}
        inlinePrompt
        activeIcon={<Check className="is-icon" />}
        inactiveIcon={<Close className="is-icon" />}
      />
    </>
  )
}

export default SwitchIcon