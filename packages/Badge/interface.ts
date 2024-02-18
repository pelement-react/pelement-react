import { CSSProperties, HTMLAttributes } from 'react'

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 显示值
  value?: string | number
  // badge type.
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  // 最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。
  max?: number
  // 是否显示小圆点。
  isDot?: boolean
}