import { CSSProperties, HTMLAttributes } from 'react'

export interface InputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'onChange'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 输入框占位文本
   */
  placeholder?: string
  value?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否显示清除按钮，只有当 type 不是 textarea时生效
   */
  clearable?: boolean
  /**
   * 输入框尺寸，只在 type 不为 'textarea' 时有效
   */
  size?: 'large' | 'default' | 'small'
  onChange?: (event: string) => void
}