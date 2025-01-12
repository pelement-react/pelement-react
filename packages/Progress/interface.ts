import { CSSProperties, HTMLAttributes } from 'react'

export interface ProgressProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * percentage
   */
  percentage?: number
  /**
   * 指定进度条文字内容
   */
  format?: (percentage: number) => string
  /**
   * 进度条当前状态
   */
  status?: 'success' | 'exception' | 'warning'
  /**
   * 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）
   */
  textInside?: boolean
  /**
   * 进度条的宽度
   */
  strokeWidth?: number
}