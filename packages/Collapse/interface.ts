import { CSSProperties, HTMLAttributes } from 'react'

export interface CollapseProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 当前激活 tab 面板的 name
   */
  activeName?: string | string[] | number | number[]
}

export interface CollapseItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 唯一标志符
   */
  name?: string | number
  /**
   * 面板标题
   */
  title?: string
}