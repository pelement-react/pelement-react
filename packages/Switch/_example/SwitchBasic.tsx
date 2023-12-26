import { Switch } from 'pelement-react'

function SwitchBasic() {
  return (
    <>
      <Switch defaultChecked />
      <Switch
        defaultChecked
        className="ml-2"
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
      />
    </>
  )
}

export default SwitchBasic