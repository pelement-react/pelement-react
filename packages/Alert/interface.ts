import { CSSProperties, HTMLAttributes } from 'react'

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties,
  className?: string | string[]
  // 类型
  type?: Types
  // 标题
  title?: string
  // 主题样式	
  effect?: Effects
  // 是否可以关闭
  closable?: boolean
  // 自定义关闭按钮文本
  closeText?: string
  // 关闭 Alert 时触发的事件
  close?: OnCloseEvent
  // 是否显示类型图标
  showIcon?: boolean
  // 文字是否居中
  center?: boolean
  // 描述性文本
  description?: string
}

type Types = 'success' | 'warning' | 'info' | 'error'
type Effects = 'light' | 'dark'
export type OnCloseEvent = () => void