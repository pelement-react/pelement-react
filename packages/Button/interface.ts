import { CSSProperties, HTMLAttributes } from 'react'

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 类型
  type?: Types
  // 是否为朴素按钮
  plain?: boolean
  // 是否为圆角按钮
  round?: boolean
  // 是否为圆形按钮
  circle?: boolean
  // 按钮是否为禁用状态	
  disabled?: boolean
  // 是否为链接按钮
  link?: boolean
}

type Types = 'primary' | 'success' | 'info' | 'warning' | 'danger'