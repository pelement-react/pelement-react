import { CSSProperties, HTMLAttributes } from 'react'

export interface StatisticProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'title' | 'prefix'> {
  style?: CSSProperties
  className?: string | string[]
  // 数字标题
  title?: string | React.ReactNode
  // 数字内容
  value?: number
  // 数字样式
  valueStyle?: CSSProperties
  // 设置数字的前缀
  prefix?: string | React.ReactNode
  // 设置数字的后缀
  suffix?: string | React.ReactNode
  // 设置小数点符号
  decimalSeparator?: string
  // 自定义数字格式化
  formatter?: (value: number) => string | number
  // 设置千分位标识符
  groupSeparator?: string
  // 数字精度
  precision?: number
}