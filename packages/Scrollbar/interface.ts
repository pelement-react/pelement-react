import { CSSProperties, HTMLAttributes } from 'react'

export interface ScrollbarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
}