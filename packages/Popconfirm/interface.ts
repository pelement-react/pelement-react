import { CSSProperties, HTMLAttributes } from 'react'

export interface PopconfirmProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * Popconfirm 组件出现的位置
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  /**
   * 标题
   */
  title?: string
  /**
   * 弹层宽度，最小宽度 150px
   */
  width?: string | number
  /**
   * 自定义图标
   */
  icon?: React.ReactNode
  /**
   * Icon 颜色
   */
  iconColor?: string
  /**
   * 是否隐藏 Icon
   */
  hideIcon?: boolean
  /**
   * 确认按钮文字
   */
  confirmButtonText?: string
  /**
   * 取消按钮文字
   */
  cancelButtonText?: string
  /**
   * 点击确认按钮时触发
   */
  onConfirm?: (e: React.MouseEvent<{}, MouseEvent>) => void
  /**
   * 点击取消按钮时触发
   */
  onCancel?: (e: React.MouseEvent<{}, MouseEvent>) => void
}

export interface PopconfirmPopperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * Popconfirm 组件出现的位置
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  /**
   * 标题
   */
  title?: string
  /**
   * 弹层宽度，最小宽度 150px
   */
  width?: string | number
  /**
   * 自定义图标
   */
  icon?: React.ReactNode
  /**
   * Icon 颜色
   */
  iconColor?: string
  /**
   * 是否隐藏 Icon
   */
  hideIcon?: boolean
  /**
   * 确认按钮文字
   */
  confirmButtonText?: string
  /**
   * 取消按钮文字
   */
  cancelButtonText?: string
  /**
   * 点击确认按钮时触发
   */
  onConfirm?: (e: React.MouseEvent<{}, MouseEvent>) => void
  /**
   * 点击取消按钮时触发
   */
  onCancel?: (e: React.MouseEvent<{}, MouseEvent>) => void
  /**
   * floating的属性
   */
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>
}