import { CSSProperties, HTMLAttributes } from 'react'

export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 卡片的标题
  header?: string | React.ReactNode
  // 卡片页脚
  footer?: string | React.ReactNode
  // body 的 CSS 样式
  bodyStyle?: CSSProperties
  // body 的自定义类名
  bodyClass?: string | string[]
  shadow?: 'always' | 'never' | 'hover'
}