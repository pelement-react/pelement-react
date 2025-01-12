import { CSSProperties, HTMLAttributes } from "react";

export interface SpaceProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 设置是否自动折行
   */
  wrap?: boolean
  /**
   * 排列的方向
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * 间隔大小
   */
  size?: 'default' | 'small' | 'large' | number
  /**
   * 间隔符
   */
  spacer?: string | number | React.ReactNode
  /**
   * 对齐的方式
   */
  alignment?: string
}