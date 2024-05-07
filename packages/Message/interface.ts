import { CSSProperties, HTMLAttributes } from 'react'

export interface MessageProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'id'> {
  style?: CSSProperties
  className?: string | string[]
  id: number
  offset: number
  text?: string | React.ReactNode
  type: 'success' | 'warning' | 'info' | 'error'
  plain: boolean
  center: boolean
  showClose: boolean
  handlerClose: (messageId: number) => void
}

export type MessageItem = { id: number, text: string | React.ReactNode, offset: number, type: 'success' | 'warning' | 'info' | 'error', plain: boolean, center: boolean, showClose: boolean }
export type MessageType = { message: string | React.ReactNode, type: 'success' | 'warning' | 'info' | 'error', plain?: boolean, center?: boolean, showClose?: boolean }