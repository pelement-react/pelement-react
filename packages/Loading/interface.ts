import { CSSProperties, HTMLAttributes } from 'react'

export interface LoadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 是否为加载中状态
  loading?: boolean
  // 是否为全屏
  fullscreen?: boolean
  // 显示在加载图标下方的加载文案
  text?: string
}