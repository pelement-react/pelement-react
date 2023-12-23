import { CSSProperties, HTMLAttributes } from 'react'

export interface ContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  direction?: Directions
  width?: string
  height?: string
}

type Directions = 'vertical' | 'horizontal'