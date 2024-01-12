import { CSSProperties, HTMLAttributes } from 'react'

export interface ResultProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // result 组件的图标类型
  icon?: 'success' | 'warning' | 'info' | 'error' | React.ReactNode
  // result 组件的标题
  mainTitle?: string | React.ReactNode
  // result 组件的副标题
  subTitle?: string | React.ReactNode
  // 内容额外区域的内容
  extra?: React.ReactNode
}