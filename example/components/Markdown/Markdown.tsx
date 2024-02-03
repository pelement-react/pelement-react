import ButtonMdx from '../../../packages/Button/index.zh-CN.mdx'
import ContainerMdx from '../../../packages/Container/index.zh-CN.mdx'
import IconMdx from '../../../packages/Icon/index.zh-CN.mdx'
import LayoutMdx from '../../../packages/Layout/index.zh-CN.mdx'
import LinkMdx from '../../../packages/Link/index.zh-CN.mdx'
import TextMdx from '../../../packages/Text/index.zh-CN.mdx'
import SwitchMdx from '../../../packages/Switch/index.zh-CN.mdx'
import AvatarMdx from '../../../packages/Avatar/index.zh-CN.mdx'
import CollapseMdx from '../../../packages/Collapse/index.zh-CN.mdx'
import ProgressMdx from '../../../packages/Progress/index.zh-CN.mdx'
import ResultMdx from '../../../packages/Result/index.zh-CN.mdx'
import TableMdx from '../../../packages/Table/index.zh-CN.mdx'
import TagMdx from '../../../packages/Tag/index.zh-CN.mdx'
import AlertMdx from '../../../packages/Alert/index.zh-CN.mdx'
import DialogMdx from '../../../packages/Dialog/index.zh-CN.mdx'
import DrawerMdx from '../../../packages/Drawer/index.zh-CN.mdx'
import PopconfirmMdx from '../../../packages/Popconfirm/index.zh-CN.mdx'
import PopoverMdx from '../../../packages/Popover/index.zh-CN.mdx'
import TooltipMdx from '../../../packages/Tooltip/index.zh-CN.mdx'
import DividerMsx from '../../../packages/Divider/index.zh-CN.mdx'
import './Markdown.scss'

function DemoMdx({ name }) {
  let demo
  switch (name) {
    case 'button':
      demo = <ButtonMdx></ButtonMdx>
      break
    case 'container':
      demo = <ContainerMdx></ContainerMdx>
      break
    case 'icon':
      demo = <IconMdx></IconMdx>
      break
    case 'layout':
      demo = <LayoutMdx></LayoutMdx>
      break
    case 'link':
      demo = <LinkMdx></LinkMdx>
      break
    case 'text':
      demo = <TextMdx></TextMdx>
      break
    case 'switch':
      demo = <SwitchMdx></SwitchMdx>
      break
    case 'avatar':
      demo = <AvatarMdx></AvatarMdx>
      break
    case 'collapse':
      demo = <CollapseMdx></CollapseMdx>
      break
    case 'progress':
      demo = <ProgressMdx></ProgressMdx>
      break
    case 'result':
      demo = <ResultMdx></ResultMdx>
      break
    case 'table':
      demo = <TableMdx></TableMdx>
      break
    case 'tag':
      demo = <TagMdx></TagMdx>
      break
    case 'alert':
      demo = <AlertMdx></AlertMdx>
      break
    case 'dialog':
      demo = <DialogMdx></DialogMdx>
      break
    case 'drawer':
      demo = <DrawerMdx></DrawerMdx>
      break
    case 'popconfirm':
      demo = <PopconfirmMdx></PopconfirmMdx>
      break
    case 'popover':
      demo = <PopoverMdx></PopoverMdx>
      break
    case 'tooltip':
      demo = <TooltipMdx></TooltipMdx>
      break
    case 'divider':
      demo = <DividerMsx></DividerMsx>
      break;
  }
  return demo
}

function Markdown({ name }) {
  return (
    <>
      <div className="markdown-body">
        <DemoMdx name={name} />
      </div>
    </>
  )
}

export default Markdown