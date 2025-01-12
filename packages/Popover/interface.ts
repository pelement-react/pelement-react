import { CSSProperties, HTMLAttributes } from 'react'

export interface PopoverProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * Popover 组件出现的位置
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  /**
   * 标题
   */
  title?: string
  /**
   * 宽度
   */
  width?: string | number
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
}

export interface PopoverPopperProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * Popover 组件出现的位置
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  /**
   * 标题
   */
  title?: string
  /**
   * 宽度
   */
  width?: string | number
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
   * floating的属性
   */
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>
}