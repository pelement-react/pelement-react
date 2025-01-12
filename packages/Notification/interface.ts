import { CSSProperties, HTMLAttributes } from 'react'

export interface NotificationProps
  extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'ref' | 'id' | 'title'> {
  style?: CSSProperties
  className?: string | string[]
  id?: number
  top?: number
  bottom?: number
  /**
   * 标题
   */
  title?: string | React.ReactNode
  /**
   * 通知栏正文内容
   */
  message?: string | React.ReactNode
  /**
   * 通知的类型
   */
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  /**
   * 显示时间, 单位为毫秒。 值为 0 则不会自动关闭
   */
  duration?: number
  /**
   * 自定义弹出位置
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean
  handleClose: (id: number) => void
}

export type NotificationType = {
  id?: number,
  top?: number,
  bottom?: number,
  title?: string | React.ReactNode,
  message?: string | React.ReactNode,
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  duration?: number
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  showClose?: boolean
}