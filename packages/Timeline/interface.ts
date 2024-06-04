import { CSSProperties, HTMLAttributes } from 'react'

export interface TimelineProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 选项配置
  items: Items[]
}

export interface TimelineItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'className' | 'ref' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  // 时间戳
  timestamp?: undefined | string
  // 是否隐藏时间戳
  hideTimestamp?: undefined | boolean
  // 是否垂直居中
  center?: undefined | boolean
  // 时间戳位置
  placement?: undefined | string | 'top' | 'bottom'
  // 节点类型
  type?: undefined | string | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  // 节点颜色
  color?: undefined | string | 'hsl' | 'hsv' | 'hex' | 'rgb'
  // 节点尺寸
  size?: undefined | string | 'normal' | 'large'
  // 自定义图标
  icon?: undefined | React.ReactNode
  // 是否空心点
  hollow?: undefined | boolean
  // 设置内容
  content?: undefined | string | React.ReactNode
}

export type Items = {
  // 时间戳
  timestamp?: undefined | string
  // 是否隐藏时间戳
  hideTimestamp?: undefined | boolean
  // 是否垂直居中
  center?: undefined | boolean
  // 时间戳位置
  placement?: undefined | string | 'top' | 'bottom'
  // 节点类型
  type?: undefined | string | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  // 节点颜色
  color?: undefined | string | 'hsl' | 'hsv' | 'hex' | 'rgb'
  // 节点尺寸
  size?: undefined | string | 'normal' | 'large'
  // 自定义图标
  icon?: undefined | React.ReactNode
  // 是否空心点
  hollow?: undefined | boolean
  // 设置内容
  content?: undefined | string | React.ReactNode
}