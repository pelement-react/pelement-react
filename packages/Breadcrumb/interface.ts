import { CSSProperties, HTMLAttributes } from 'react'

export interface BreadcrumbProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 路由栈信息
   */
  items: BreadcrumbItem[]
  /**
   * 分隔符
   */
  separator?: string | React.ReactNode
}

export type BreadcrumbItem = {
  title: string | React.ReactNode
  isLink?: boolean
}