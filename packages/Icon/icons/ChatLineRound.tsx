import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ChatLineRoundSvg from '@element-plus/icons-svg/chat-line-round.svg?react'

const ChatLineRound: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    onClick,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          'el-icon',
          className,
        )
      }
      onClick={onClick}
    >
      <ChatLineRoundSvg />
    </i>
  )
}

const ChatLineRoundComponent = forwardRef<HTMLDivElement, IconProps>(ChatLineRound)

ChatLineRoundComponent.displayName = 'ChatLineRound'

export default ChatLineRoundComponent