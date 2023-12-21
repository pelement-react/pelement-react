import { CSSProperties, HTMLAttributes } from 'react'

export interface IconProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
}