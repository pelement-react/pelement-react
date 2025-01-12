import { CSSProperties, HTMLAttributes } from 'react'

export interface DrawerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'title'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 是否显示 Drawer
   */
  open?: boolean
  /**
   * Drawer 打开的方向
   */
  direction?: 'rtl' | 'ltr' | 'ttb' | 'btt'
  /**
   * Drawer 的标题
   */
  title?: string | React.ReactNode
  /**
   * 点击遮罩层或右上角叉的回调
   */
  onClose?: () => void
  /**
   * Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。
   */
  header?: React.ReactNode
  /**
   * Drawer 页脚部分
   */
  footer?: React.ReactNode
  /**
   * 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title 不生效
   */
  withHeader?: boolean
  /**
   * Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释
   */
  size?: string | number
  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean
}