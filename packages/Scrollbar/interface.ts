import { CSSProperties, HTMLAttributes } from 'react'

export interface ScrollbarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 滚动条高度
   */
  height?: string | number
  /**
   * 滚动条最小尺寸
   */
  minSize?: number
}