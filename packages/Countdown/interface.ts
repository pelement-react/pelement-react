import { CSSProperties, HTMLAttributes } from 'react'
import type { Dayjs } from 'dayjs'

export interface CountdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'title' | 'onChange'> {
  style?: CSSProperties
  className?: string | string[]
  // 倒计时标题
  title?: string | React.ReactNode
  // 目标时间
  value?: number | Dayjs
  // 格式化倒计时
  format?: string
  // 设置倒计时前缀
  prefix?: string
  // 设置倒计时的后缀
  suffix?: string
  // 倒计时值的样式
  valueStyle?: CSSProperties
  // 时间差改变事件
  onChange?: (value: number) => void
  // 倒计时结束事件
  onFinish?: () => void
}