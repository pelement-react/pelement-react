import { CSSProperties, HTMLAttributes } from 'react'

export interface DialogProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'title'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 是否显示 Dialog
   */
  open?: boolean
  /**
   * 对话框的宽度，默认值为 50%
   */
  width?: string | number
  /**
   * Dialog 对话框 Dialog 的标题
   */
  title?: string | React.ReactNode
  /**
   * footer
   */
  footer?: React.ReactNode
  /**
   * 点击遮罩层或右上角叉的回调
   */
  onClose?: () => void
  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean
  /**
   * 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。
   */
  header?: React.ReactNode
}