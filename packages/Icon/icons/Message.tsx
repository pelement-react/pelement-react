import { forwardRef } from 'react'
import { IconProps } from '../interface'
import MessageSvg from '@element-plus/icons-svg/message.svg?react'

const Message: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className="el-icon"
    >
      <MessageSvg />
    </i>
  )
}

const MessageComponent = forwardRef<HTMLDivElement, IconProps>(Message)

MessageComponent.displayName = 'Message'

export default MessageComponent