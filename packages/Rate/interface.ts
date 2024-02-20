import { CSSProperties, HTMLAttributes } from 'react'

export interface RateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
}