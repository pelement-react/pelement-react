import { Switch } from 'pelement-react'

function SwitchText() {
  return (
    <>
      <Switch
        defaultChecked
        className="mb-2"
        activeText="Pay by month"
        inactiveText="Pay by year"
      />
      <br />
      <Switch
        defaultChecked
        className="mb-2"
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
        activeText="Pay by month"
        inactiveText="Pay by year"
      />
      <br />
      <Switch
        defaultChecked
        inlinePrompt
        activeText="是"
        inactiveText="否"
      />
      <Switch
        defaultChecked
        className="ml-2"
        inlinePrompt
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
        activeText="Y"
        inactiveText="N"
      />
      <Switch
        defaultChecked
        className="ml-2"
        width={60}
        inlinePrompt
        activeText="超出省略"
        inactiveText="超出省略"
      />
      <Switch
        defaultChecked
        className="ml-2"
        inlinePrompt
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
        activeText="完整展示多个内容"
        inactiveText="多个内容"
      />
    </>
  )
}

export default SwitchText