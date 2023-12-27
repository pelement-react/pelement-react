import { Switch } from 'pelement-react'

function SwitchLoading() {
  return (
    <>
      <Switch defaultChecked loading />
      <Switch loading className="ml-2" />
    </>
  )
}

export default SwitchLoading