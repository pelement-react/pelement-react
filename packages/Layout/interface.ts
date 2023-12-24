import { CSSProperties, HTMLAttributes } from 'react'

export interface LayoutProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  span?: number
  gutter?: number
  offset?: number
  justify?: Justifys
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

type Justifys = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'