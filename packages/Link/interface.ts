import { CSSProperties, HTMLAttributes } from 'react'

export interface LinkProps
  extends Omit<HTMLAttributes<HTMLAnchorElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  href?: string
  target?: Targets
  type?: Types
  disabled?: boolean
  underline?: boolean
  icon?: React.ReactNode
}

type Types = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type Targets = '_blank' | '_parent' | '_self' | '_top'