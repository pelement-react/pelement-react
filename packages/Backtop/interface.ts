import { CSSProperties, HTMLAttributes, MouseEvent } from 'react'

export interface BacktopProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 滚动高度达到此参数值才出现
   */
  visibilityHeight?: number
  /**
   * 控制其显示位置，距离页面右边距
   */
  right?: number
  /**
   * 控制其显示位置，距离页面底部距离
   */
  bottom?: number
  /**
   * 触发滚动的对象
   */
  target?: React.RefObject<HTMLDivElement>
  /**
   * 点击按钮触发的事件
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}