import { CSSProperties, HTMLAttributes } from 'react'

export interface MessageProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  offset?: number
}