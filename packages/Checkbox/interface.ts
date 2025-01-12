import { CSSProperties, HTMLAttributes } from 'react'

export interface CheckboxProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, 'className' | 'ref' | 'onChange'> {
  style?: CSSProperties
  className?: string | string[]
  value?: boolean | string
  /**
   * 选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用
   */
  label?: string
  /**
   * Checkbox 的尺寸
   */
  size?: 'large' | 'default' | 'small'
  /**
   * 是否禁用
   */
  disabled?: boolean
  onChange?: (value: boolean) => void
}

export interface CheckboxGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'onChange'> {
  style?: CSSProperties
  className?: string | string[]
  options?: string[] | number[] | Option[]
  value?: Array<string>
  onChange?: (value: Array<string>) => void
}

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}