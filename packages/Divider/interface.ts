import { CSSProperties, HTMLAttributes } from 'react'

export interface DividerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  contentPosition?: ContentPositions
  borderStyle?: string
  direction?: Directions
}

type ContentPositions = 'left' | 'right' | 'center'

type Directions = 'horizontal' | 'vertical'