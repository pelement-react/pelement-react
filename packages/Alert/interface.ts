import { CSSProperties, HTMLAttributes } from 'react'

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties,
  className?: string | string[]
  // 类型
  type?: Types
  // 标题
  title?: string
  // 主题样式	
  effect?: Effects
}

type Types = 'success' | 'warning' | 'info' | 'error'
type Effects = 'light' | 'dark'