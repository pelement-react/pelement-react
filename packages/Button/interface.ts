import { CSSProperties, HTMLAttributes } from 'react'

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 设置按钮类型
  type?: Types
}

type Types = 'primary' | 'success' | 'info' | 'warning' | 'danger'