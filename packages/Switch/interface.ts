import { CSSProperties, HTMLAttributes } from 'react'

export interface SwitchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  defaultChecked?: boolean
  size?: Sizes
  activeText?: string
  inactiveText?: string
  inlinePrompt?: boolean
  width?: number
  activeIcon?: React.ReactNode
  inactiveIcon?: React.ReactNode
}

export type Sizes = 'large' | 'default' | 'small'