import { CSSProperties, HTMLAttributes } from 'react'

export interface TextProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  type?: Types
  size?: Sizes
  truncated?: boolean
  lineClamp?: number
}

type Types = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type Sizes = 'large' | 'default' | 'small'