import { CSSProperties, HTMLAttributes } from 'react'

export interface TooltipProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * Tooltip 主题
   */
  effect?: 'dark' | 'light' | string
  /**
   * Tooltip 组件出现的位置
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  /**
   * 触发方式
   */
  trigger?: 'click' | 'focus' | 'hover' | 'contextmenu'
  /**
   * 内容
   */
  content?: string | React.ReactNode
  /**
   * 在触发后多久显示内容，单位毫秒
   */
  showAfter?: number
  /**
   * 延迟关闭，单位毫秒
   */
  hideAfter?: number
  /**
   * Tooltip 组件是否禁用
   */
  disabled?: boolean
}

export interface TooltipPopperProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * Tooltip 主题
   */
  effect?: 'dark' | 'light' | string
  /**
   * Tooltip 组件出现的位置
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  /**
   * 内容
   */
  content?: string | React.ReactNode
  /**
   * floating的属性
   */
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>
}