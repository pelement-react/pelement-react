import { CSSProperties, HTMLAttributes } from 'react'

export interface AffixProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 偏移距离
   */
  offset?: number
  /**
   * 固钉位置
   */
  position?: 'top' | 'bottom'
  /**
   * 指定容器（CSS 选择器）
   */
  target?: string
  /**
   * z-index
   */
  zIndex?: number
}