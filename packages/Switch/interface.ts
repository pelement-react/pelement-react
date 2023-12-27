import { CSSProperties, HTMLAttributes } from 'react'

export interface SwitchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  defaultChecked?: boolean
  size?: Sizes
  activeText?: string
  inactiveText?: string
  inlinePrompt?: boolean
  width?: number
  activeIcon?: React.ReactNode
  inactiveIcon?: React.ReactNode
  // 是否禁用
  disabled?: boolean
  // 是否显示加载中
  loading?: boolean
  // switch 状态改变前的钩子
  beforeChange?: BeforeChangeEvent
  // on状态下显示的图标组件
  activeActionIcon?: React.ReactNode
  // off状态下显示的图标组件
  inactiveActionIcon?: React.ReactNode
}

export type Sizes = 'large' | 'default' | 'small'
export type BeforeChangeEvent = () => Promise<boolean> | boolean