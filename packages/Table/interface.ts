import { CSSProperties, HTMLAttributes } from 'react'

export interface TableProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 表格列的配置描述
  columns?: any[]
  // 显示的数据
  data?: any[]
  // 是否为斑马纹 table
  stripe?: boolean
  // 是否带有纵向边框
  border?: boolean
}