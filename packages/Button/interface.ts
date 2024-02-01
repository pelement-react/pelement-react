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
  // 图标组件	
  icon?: React.ReactNode
  // 是否为文字按钮
  text?: boolean
  // 是否显示文字按钮背景颜色
  bg?: boolean
}

type Types = 'primary' | 'success' | 'info' | 'warning' | 'danger'