import { CSSProperties, HTMLAttributes } from 'react'

export interface TimeSelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  value?: string
  // 开始时间
  start?: string
  // 间隔时间
  step?: string
  // 结束时间
  end?: string
  // 非范围选择时的占位内容
  placeholder?: string
}

export interface TimeSelectContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // floating的属性
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>
  // 开始时间
  start?: string
  // 间隔时间
  step?: string
  // 结束时间
  end?: string
}