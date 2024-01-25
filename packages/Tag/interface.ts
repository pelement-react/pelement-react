import { CSSProperties, HTMLAttributes } from 'react'

export interface TagProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // Tag 的类型
  type?: 'success' | 'info' | 'warning' | 'danger' | ''
  // 是否可关闭
  closable?: boolean
  // Tag 的尺寸
  size?: 'large' | 'default' | 'small' | ''
  // Tag 的主题
  effect?: 'dark' | 'light' | 'plain'
  // Tag 是否为圆形
  round?: boolean
}