import { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'title' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  icon?: ReactNode
  title?: string | ReactNode
  breadcrumb?: ReactNode
  content?: string | ReactNode
  extra?: ReactNode
  onBack?: () => void
}